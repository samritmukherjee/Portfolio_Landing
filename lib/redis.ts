import { createClient, RedisClientType } from 'redis';

const REDIS_URL = process.env.REDIS_URL;
const VISITS_KEY = 'portfolio:visits';
const DEFAULT_COUNT = 0;

declare global {
  var __redisClient: RedisClientType | null | undefined;
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
      console.error('[Redis] Error:', error instanceof Error ? error.message : error);
    });
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
  try {
    const client = await getRedisClient();
    const value = await client.get(VISITS_KEY);
    
    if (value === null) {
      return DEFAULT_COUNT;
    }

    const count = Number(value);
    return Number.isFinite(count) && count >= 0 ? count : DEFAULT_COUNT;
  } catch (error) {
    console.error('[Redis Error] Failed to get visitor count:', error instanceof Error ? error.message : error);
    return DEFAULT_COUNT;
  }
}

export async function incrementVisitorCount(): Promise<number> {
  try {
    const client = await getRedisClient();
    return await client.incr(VISITS_KEY);
  } catch (error) {
    console.error('[Redis Error] Failed to increment visitor count:', error instanceof Error ? error.message : error);
    return DEFAULT_COUNT;
  }
}
