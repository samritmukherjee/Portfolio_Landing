# 🎯 Agent Discovery - Quick Reference

**Portfolio:** https://samrit.dev  
**Status:** ✅ AI-Ready  
**Updated:** May 2026

---

## 🔗 Discovery Endpoints

### Critical Endpoints (Check These First)
```
GET /.well-known/openapi.json       (API Documentation)
GET /.well-known/api-catalog        (API Discovery RFC 9727)
GET /.well-known/mcp/server-card.json (MCP Integration)
GET /.well-known/agent-skills/index.json (Agent Skills Registry)
```

### Data Endpoints
```
GET /api/projects                   (Portfolio Projects)
GET /api/skills                     (Technical Skills)
GET /api/contact                    (Contact Information)
GET /api/visitors                   (Visitor Counter)
GET /api/health                     (Service Status)
```

### Content Format
```
Default:  application/json
Optional: text/markdown (Use Accept: text/markdown header)
```

---

## 📑 SEO & Bot Discovery
```
GET /robots.txt                     (Robot Rules + Content Signals)
GET /sitemap.xml                    (XML Sitemap)
```

**Content Signals:**
```
ai-train=yes        ✓ AI training allowed
search=yes          ✓ Search indexing allowed
ai-input=yes        ✓ Agent input allowed
```

---

## 🧠 AI Integration

### Using with LLMs
```python
# Fetch OpenAPI spec
GET https://samrit.dev/.well-known/openapi.json

# Use with Claude API
import anthropic
client = anthropic.Anthropic()

response = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    tools=[...],  # Load from OpenAPI spec
    messages=[{"role": "user", "content": "..."}]
)
```

### Using with MCP
```bash
# Connect to MCP server
mcp connect https://samrit.dev/.well-known/mcp/server-card.json

# List available tools
mcp tools list
```

### Browser WebMCP
```typescript
// Automatically initialized on page load
// Available tools:
- navigate_section(section)
- get_project_details(projectId)
- get_contact_info()
- read_resume()
```

---

## 📊 Response Examples

### GET /api/projects
```json
[
  {
    "id": "cosmic-canvas",
    "title": "Cosmic Canvas",
    "description": "AI design tool with natural language prompts",
    "category": "ai",
    "technologies": ["Next.js", "React", "OpenAI API"],
    "link": "https://cosmic-canvas-delta.vercel.app/",
    "image": "https://res.cloudinary.com/.../cosmic-canvas.png"
  }
]
```

### GET /api/skills
```json
{
  "frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", ...],
  "backend": ["Node.js", "Python", "Flask", "FastAPI", ...],
  "programming": ["JavaScript", "TypeScript", "Python", "Java", ...],
  "aiml": ["Machine Learning", "LLMs", "RAG Systems", ...],
  "tools": ["Git", "GitHub", "Vercel", "AWS", ...],
  "design": ["UI/UX Design", "Figma", "Adobe Suite", ...]
}
```

### GET /api/contact
```json
{
  "email": "samritmukherjee05@gmail.com",
  "location": "Kolkata, India",
  "timezone": "IST (UTC+5:30)",
  "social": {
    "github": "https://github.com/samritmukherjee",
    "linkedin": "https://www.linkedin.com/in/samrit-mukherjee-412788318/",
    "portfolio": "https://samrit.dev"
  },
  "availability": {
    "status": "Available for new projects",
    "responseTime": "24-48 hours"
  }
}
```

### GET /api/health
```json
{
  "status": "healthy",
  "timestamp": "2026-05-15T10:30:00Z",
  "service": "Samrit Portfolio",
  "version": "1.0.0",
  "uptime": 3600
}
```

---

## 🔍 Content Negotiation Examples

### Projects as JSON
```bash
curl https://samrit.dev/api/projects
```

### Projects as Markdown
```bash
curl -H "Accept: text/markdown" https://samrit.dev/api/projects
```

### Skills as Markdown
```bash
curl -H "Accept: text/markdown" https://samrit.dev/api/skills
```

### Contact as Markdown
```bash
curl -H "Accept: text/markdown" https://samrit.dev/api/contact
```

---

## 🔐 Authorization

**Current Status:** 🟢 All endpoints public (no auth required)

**Future:** OAuth 2.0 discovery endpoints planned
- `/.well-known/oauth-authorization-server`
- `/.well-known/openid-configuration`
- `/.well-known/oauth-protected-resource`

---

## 📈 Standards Implemented

| Standard | Endpoint | Status |
|----------|----------|--------|
| RFC 8288 | Link Headers | ✅ Active |
| RFC 9727 | API Catalog | ✅ Active |
| RFC 9728 | OAuth Resource Metadata | ⏳ Planned |
| OpenAPI 3.0 | API Spec | ✅ Active |
| MCP SEP-1649 | Server Card | ✅ Active |
| Agent Skills RFC v0.2.0 | Skills Index | ✅ Active |
| Content Signals | robots.txt | ✅ Active |

---

## 💡 Common Use Cases

### 1. Discover Available APIs
```bash
curl https://samrit.dev/.well-known/api-catalog
```

### 2. Get API Documentation
```bash
curl https://samrit.dev/.well-known/openapi.json
```

### 3. Find Available Tools
```bash
curl https://samrit.dev/.well-known/mcp/server-card.json
```

### 4. Check Service Health
```bash
curl https://samrit.dev/api/health
```

### 5. Browse Projects
```bash
curl https://samrit.dev/api/projects?category=ai
```

### 6. Get Skills
```bash
curl https://samrit.dev/api/skills
```

### 7. Get Contact Info
```bash
curl https://samrit.dev/api/contact
```

---

## 🚀 Integration Checklist

- [ ] Fetch OpenAPI spec from `/.well-known/openapi.json`
- [ ] Load available endpoints and methods
- [ ] Check health at `/api/health`
- [ ] Request content with appropriate `Accept` header
- [ ] Handle markdown and JSON responses
- [ ] Cache responses according to Cache-Control headers
- [ ] Display contact info for collaboration inquiries
- [ ] Link to social profiles from `/api/contact`

---

## 📞 Support

- **Email:** samritmukherjee05@gmail.com
- **GitHub:** https://github.com/samritmukherjee
- **Portfolio:** https://samrit.dev
- **Docs:** [AGENT_DISCOVERY.md](./AGENT_DISCOVERY.md)

---

**Last Updated:** May 15, 2026  
**Next Review:** August 2026
