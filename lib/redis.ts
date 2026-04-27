import { createClient, RedisClientType } from 'redis';

const REDIS_URL = process.env.REDIS_URL;
const VISITS_KEY = 'portfolio:visits';
const INITIAL_COUNT = 0; // Starting seed value
const DEBUG_REDIS = process.env.DEBUG_REDIS === 'true';

declare global {
  // eslint-disable-next-line no-var
  var __redisClient: RedisClientType | null | undefined;
  // eslint-disable-next-line no-var
  var __redisClientPromise: Promise<RedisClientType> | null | undefined;
}

function getRedisClient(): Promise<RedisClientType> {
  if (!REDIS_URL) {
    throw new Error('REDIS_URL is not configured. Please set REDIS_URL in .env.local.');
  }

  if (!globalThis.__redisClient) {
    globalThis.__redisClient = createClient({
      url: REDIS_URL,
      socket: {
        reconnectStrategy(retries) {
          if (retries > 10) {
            return new Error('Redis reconnect retry limit reached');
          }
          return Math.min(retries * 50, 500);
        },
      },
    });

    globalThis.__redisClient.on('error', (error) => {
      console.error('[Redis] Client error:', error instanceof Error ? error.message : error);
    });

    if (DEBUG_REDIS) {
      globalThis.__redisClient.on('connect', () => {
        console.log('[Redis Debug] Connecting to Redis');
      });
      globalThis.__redisClient.on('ready', () => {
        console.log('[Redis Debug] Redis client ready');
      });
    }
  }

  if (!globalThis.__redisClientPromise) {
    globalThis.__redisClientPromise = globalThis.__redisClient.connect().catch((error) => {
      globalThis.__redisClientPromise = undefined;
      throw error;
    });
  }

  return globalThis.__redisClientPromise;
}

export async function getVisitorCount(): Promise<number> {
  const client = await getRedisClient();

  try {
    const value = await client.get(VISITS_KEY);

    if (value === null) {
      await client.set(VISITS_KEY, INITIAL_COUNT.toString());
      if (DEBUG_REDIS) {
        console.log('[Redis Debug] Initialized', VISITS_KEY, 'to', INITIAL_COUNT);
      }
      return INITIAL_COUNT;
    }

    const count = Number(value);
    if (!Number.isFinite(count) || count < 0) {
      await client.set(VISITS_KEY, INITIAL_COUNT.toString());
      if (DEBUG_REDIS) {
        console.log('[Redis Debug] Reset invalid count for', VISITS_KEY, 'to', INITIAL_COUNT);
      }
      return INITIAL_COUNT;
    }

    if (DEBUG_REDIS) {
      console.log('[Redis Debug] GET', VISITS_KEY, ':', count);
    }

    return count;
  } catch (error) {
    console.error('[Redis Error] Failed to get visitor count:', error instanceof Error ? error.message : error);
    if (DEBUG_REDIS) {
      console.error('[Redis Debug] Full error details:', error);
    }
    throw error;
  }
}

export async function incrementVisitorCount(): Promise<number> {
  const client = await getRedisClient();

  try {
    const value = await client.get(VISITS_KEY);

    if (value === null) {
      await client.set(VISITS_KEY, INITIAL_COUNT.toString());
      if (DEBUG_REDIS) {
        console.log('[Redis Debug] Initialized', VISITS_KEY, 'to', INITIAL_COUNT);
      }
    }

    const newCount = await client.incr(VISITS_KEY);

    if (DEBUG_REDIS) {
      console.log('[Redis Debug] INCR', VISITS_KEY, '->', newCount);
    }

    return newCount;
  } catch (error) {
    console.error('[Redis Error] Failed to increment visitor count:', error instanceof Error ? error.message : error);
    if (DEBUG_REDIS) {
      console.error('[Redis Debug] Full error details:', error);
    }
    throw error;
  }
}
