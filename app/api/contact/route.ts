import { NextResponse, NextRequest } from "next/server";
import { API_CACHE_HEADERS } from "@/lib/projects-data";

function getAvailabilityStatus() {
  const raw = process.env.AVAILABILITY_STATUS?.trim();
  if (raw === "Busy") return "Busy" as const;
  return "Available" as const;
}

/**
 * GET /api/contact — contact info & availability for hero badge
 * POST /api/contact — contact form submission (Resend when configured)
 */
export async function GET(request: NextRequest) {
  const markdown = request.headers.get("accept")?.includes("text/markdown");
  const status = getAvailabilityStatus();

  const contact = {
    email: "samritmukherjee05@gmail.com",
    phone: "Available upon request",
    location: "Kolkata, India",
    timezone: "IST (UTC+5:30)",
    social: {
      github: "https://github.com/samritmukherjee",
      linkedin: "https://www.linkedin.com/in/samrit-mukherjee-412788318/",
      twitter: "https://twitter.com/samritdev",
      portfolio: "https://samrit.dev",
    },
    availability: {
      status,
      label:
        status === "Available"
          ? "Available for new projects"
          : "Currently busy — limited availability",
      responseTime: "24-48 hours",
      workType: ["Full-time", "Contract", "Freelance", "Consulting"],
    },
  };

  if (markdown) {
    const markdown_content = `# Contact Information

## Email
[${contact.email}](mailto:${contact.email})

## Location
${contact.location} (${contact.timezone})

## Social & Web
- **GitHub:** [samritmukherjee](${contact.social.github})
- **LinkedIn:** [Samrit Mukherjee](${contact.social.linkedin})
- **Portfolio:** [samrit.dev](${contact.social.portfolio})

## Availability
- **Status:** ${contact.availability.label}
- **Response Time:** ${contact.availability.responseTime}
`;

    return new NextResponse(markdown_content, {
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        ...API_CACHE_HEADERS,
      },
    });
  }

  return NextResponse.json(contact, {
    headers: {
      "Content-Type": "application/json",
      ...API_CACHE_HEADERS,
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body as {
      name?: string;
      email?: string;
      message?: string;
    };

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL ?? "samritmukherjee05@gmail.com";

    if (resendKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
          to: [toEmail],
          reply_to: email,
          subject: `Portfolio contact from ${name}`,
          text: `From: ${name} <${email}>\n\n${message}`,
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error("[contact] Resend error:", err);
        return NextResponse.json(
          { error: "Failed to send message. Please email directly." },
          { status: 502 }
        );
      }
    } else {
      console.info("[contact] Form submission (Resend not configured):", {
        name,
        email,
        message: message.slice(0, 200),
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
