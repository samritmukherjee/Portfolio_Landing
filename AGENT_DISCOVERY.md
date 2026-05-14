# 🤖 Agent Discovery & AI-Ready Features

This portfolio is fully equipped for AI agent discovery and integration. Below is a comprehensive guide to all available agent-readiness features.

---

## **✅ Implemented Features**

### 1. **Sitemap & SEO Discovery**
- **Location:** `/sitemap.xml`
- **Format:** XML Sitemap Protocol
- **Content:** All portfolio sections with update frequency and priority
- **Reference:** Listed in `/robots.txt`
- **Purpose:** Enables search engines and agents to discover all content

```
GET /sitemap.xml
```

---

### 2. **Robots.txt with Content Signals**
- **Location:** `/robots.txt`
- **Features:**
  - User-agent rules for major AI bots (GPTBot, ClaudeBot, PerplexityBot, Google-Extended)
  - Content Signals directives for AI training preferences
  - Sitemap reference

**Content Signals:**
```
Content-Signal: ai-train=yes, search=yes, ai-input=yes
```

---

### 3. **RFC 8288 Link Response Headers**
- **Implementation:** Added to `app/layout.tsx` metadata
- **Headers Provided:**
  - `rel="api-catalog"` → API discovery endpoint
  - `rel="agent-skills"` → Agent skills index
  - `rel="mcp-server"` → MCP server card
  - `rel="status"` → Health check endpoint
  - `rel="sitemap"` → Sitemap reference

**Usage:** Agents can discover all endpoints from the homepage Link headers

---

### 4. **API Catalog (RFC 9727)**
- **Location:** `/.well-known/api-catalog`
- **Format:** `application/linkset+json`
- **Content:**
  - Portfolio service definition
  - Visitor API definition
  - Service documentation links
  - Health check endpoint

```bash
curl https://samrit.dev/.well-known/api-catalog
```

---

### 5. **OpenAPI Specification**
- **Location:** `/.well-known/openapi.json`
- **Format:** OpenAPI 3.0.0
- **Endpoints Documented:**
  - `GET /api/health` - Service health
  - `GET/POST /api/visitors` - Visitor tracking
  - `GET /api/projects` - Project listing
  - `GET /api/skills` - Skills inventory
  - `GET /api/contact` - Contact information

```bash
curl https://samrit.dev/.well-known/openapi.json
```

---

### 6. **Agent Skills Discovery Index**
- **Location:** `/.well-known/agent-skills/index.json`
- **Standard:** Agent Skills Discovery RFC v0.2.0
- **Skills Registered:**
  - `portfolio-explorer` - Browse projects and experience
  - `contact-discovery` - Get contact information
  - `resume-access` - Download and view resume
  - `project-details` - Query project information

```bash
curl https://samrit.dev/.well-known/agent-skills/index.json
```

---

### 7. **MCP Server Card**
- **Location:** `/.well-known/mcp/server-card.json`
- **Standard:** Model Context Protocol (SEP-1649)
- **Features:**
  - Server metadata (name, version, description)
  - Resource definitions (projects, skills, experience, contact)
  - Tool definitions (get_project_details, search_projects, get_contact_info)
  - Transport configuration (SSE)

```bash
curl https://samrit.dev/.well-known/mcp/server-card.json
```

**Tools Available to Agents:**
- `get_project_details` - Retrieve detailed project information
- `search_projects` - Search by technology, category, or keyword
- `get_contact_info` - Get contact and social information

---

### 8. **Markdown for Agents Support**
- **Implementation:** Middleware + endpoint content negotiation
- **Usage:** Agents can request `Accept: text/markdown` header
- **Response:** `Content-Type: text/markdown`

**Endpoints with Markdown Support:**
- `GET /api/projects?category=ai` → Returns JSON or Markdown
- `GET /api/skills` → Returns JSON or Markdown
- `GET /api/contact` → Returns JSON or Markdown

```bash
# JSON (default)
curl https://samrit.dev/api/projects

# Markdown for Agents
curl -H "Accept: text/markdown" https://samrit.dev/api/projects
```

---

### 9. **Health Check Endpoint**
- **Location:** `/api/health`
- **Format:** JSON
- **Response:**
  ```json
  {
    "status": "healthy",
    "timestamp": "2026-05-15T10:30:00Z",
    "service": "Samrit Portfolio",
    "version": "1.0.0",
    "uptime": 3600
  }
  ```

```bash
curl https://samrit.dev/api/health
```

---

### 10. **WebMCP (Web Machine Context Protocol)**
- **Implementation:** Browser-based tool provider
- **Hooks:** `useWebMCP()` in `/hooks/useWebMCP.ts`
- **Initialization:** Automatic on page load via `initializeWebMCP()`

**Available Tools:**
- `navigate_section` - Jump to portfolio sections
- `get_project_details` - Fetch project information
- `get_contact_info` - Retrieve contact information
- `read_resume` - Access resume data

**Example Usage in Components:**
```typescript
import { useWebMCP } from '@/hooks/useWebMCP';

export function MyComponent() {
  const webmcp = useWebMCP();
  
  useEffect(() => {
    webmcp?.providePortfolioTools();
  }, []);
  
  return <div>Agent-ready component</div>;
}
```

---

## **📊 Data Endpoints**

### Projects API
```bash
# All projects
GET /api/projects

# Filtered by category
GET /api/projects?category=ai

# Markdown format
GET /api/projects -H "Accept: text/markdown"
```

**Response:**
```json
[
  {
    "id": "cosmic-canvas",
    "title": "Cosmic Canvas",
    "description": "...",
    "category": "ai",
    "technologies": ["Next.js", "React", "OpenAI API"],
    "link": "https://...",
    "image": "https://..."
  }
]
```

---

### Skills API
```bash
GET /api/skills
GET /api/skills -H "Accept: text/markdown"
```

**Skills Categories:**
- Frontend
- Backend
- Programming Languages
- AI/ML
- Tools & Platforms
- Design & UX

---

### Contact API
```bash
GET /api/contact
GET /api/contact -H "Accept: text/markdown"
```

**Includes:**
- Email
- Location & Timezone
- Social profiles
- Availability status
- Response time

---

### Visitor Tracking API
```bash
# Get current count
GET /api/visitors

# Record visitor
POST /api/visitors
Content-Type: application/json
{
  "isNewVisitor": true
}
```

---

## **🔗 Discovery Endpoints Summary**

| Endpoint | Format | Purpose |
|----------|--------|---------|
| `/robots.txt` | Text | Robot rules & Content Signals |
| `/sitemap.xml` | XML | Sitemap for search engines |
| `/.well-known/api-catalog` | Linkset+JSON | RFC 9727 API Discovery |
| `/.well-known/openapi.json` | JSON | OpenAPI 3.0 Specification |
| `/.well-known/agent-skills/index.json` | JSON | Agent Skills Discovery RFC |
| `/.well-known/mcp/server-card.json` | JSON | MCP Server Card (SEP-1649) |
| `/api/health` | JSON | Service health status |

---

## **🚀 Agent Integration Examples**

### Using with Claude API
```python
import anthropic

client = anthropic.Anthropic()

response = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    max_tokens=1024,
    tools=[
        {
            "name": "portfolio_explorer",
            "description": "Explore Samrit's portfolio",
            "input_schema": {
                "type": "object",
                "properties": {
                    "endpoint": {
                        "type": "string",
                        "enum": ["projects", "skills", "contact", "health"]
                    }
                }
            }
        }
    ],
    messages=[
        {
            "role": "user",
            "content": "Tell me about Samrit's AI projects"
        }
    ]
)
```

### Using with MCP
```bash
# Connect to MCP server
mcp connect https://samrit.dev/.well-known/mcp/server-card.json

# Use available tools
mcp tools list
```

---

## **🔐 Authentication & Authorization**

Currently, the portfolio APIs are **public** with no authentication required. Future versions may include:
- OAuth 2.0 discovery (`.well-known/oauth-authorization-server`)
- OpenID Connect discovery (`.well-known/openid-configuration`)
- Protected resource metadata (`.well-known/oauth-protected-resource`)

---

## **📈 Content Signals**

The portfolio declares AI content usage preferences:
```
Content-Signal: ai-train=yes, search=yes, ai-input=yes
```

This means:
- ✅ AI training is allowed
- ✅ Search indexing is allowed
- ✅ User input to AI systems is allowed

Agents should respect these signals.

---

## **🎯 Use Cases**

### 1. **Portfolio Search Agent**
Agents can index and search portfolio content from OpenAPI spec

### 2. **Recruitment Bot**
Automatically discover skills, experience, and contact information

### 3. **Project Explorer**
Browse projects filtered by technology or category via API

### 4. **Resume Assistant**
Access resume data programmatically for job applications

### 5. **Contact Discovery**
Find contact information and social profiles automatically

### 6. **Availability Checker**
Check real-time availability and response times

---

## **📚 Standards & References**

- **RFC 8288** - Web Linking (Link Headers)
- **RFC 9727** - API Catalog (Linkset+JSON)
- **RFC 9728** - OAuth Protected Resource Metadata
- **OpenAPI 3.0** - API Specification
- **Agent Skills Discovery RFC v0.2.0** - Agent capability registration
- **MCP (Model Context Protocol)** - Browser & server integration
- **Content Signals** - AI content preferences
- **Markdown for Agents** - Agent content negotiation

---

## **✨ Future Enhancements**

- [ ] OAuth/OIDC discovery for protected APIs
- [ ] WebMCP SSE server implementation
- [ ] GraphQL endpoint for complex queries
- [ ] WebSocket support for real-time updates
- [ ] API rate limiting & analytics
- [ ] Advanced content negotiation (HTML, PDF, JSON-LD)

---

## **📞 Support**

For questions about agent integration:
- **Email:** samritmukherjee05@gmail.com
- **GitHub:** https://github.com/samritmukherjee
- **Portfolio:** https://samrit.dev

---

**Last Updated:** May 2026 | **Status:** Production Ready ✓
