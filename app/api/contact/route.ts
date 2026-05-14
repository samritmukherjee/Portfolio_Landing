import { NextResponse, NextRequest } from 'next/server';

/**
 * GET /api/contact
 * Returns contact information and social profiles
 * Markdown negotiation support for agents
 */
export async function GET(request: NextRequest) {
  const markdown = request.headers.get('accept')?.includes('text/markdown');

  const contact = {
    email: 'samritmukherjee05@gmail.com',
    phone: 'Available upon request',
    location: 'Kolkata, India',
    timezone: 'IST (UTC+5:30)',
    social: {
      github: 'https://github.com/samritmukherjee',
      linkedin: 'https://www.linkedin.com/in/samrit-mukherjee-412788318/',
      twitter: 'https://twitter.com/samritdev',
      portfolio: 'https://samrit.dev',
    },
    availability: {
      status: 'Available for new projects',
      responseTime: '24-48 hours',
      workType: ['Full-time', 'Contract', 'Freelance', 'Consulting'],
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
- **Twitter:** [@samritdev](${contact.social.twitter})
- **Portfolio:** [samrit.dev](${contact.social.portfolio})

## Availability
- **Status:** ${contact.availability.status}
- **Response Time:** ${contact.availability.responseTime}
- **Work Types:** ${contact.availability.workType.join(', ')}
`;

    return new NextResponse(markdown_content, {
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
      },
    });
  }

  return NextResponse.json(contact, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
