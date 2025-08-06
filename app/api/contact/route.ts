import { NextResponse } from 'next/server';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';
import { BUSINESS_INFO } from '@/lib/constants';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate the form data
    const validationResult = contactFormSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: 'Invalid form data', 
          details: validationResult.error.issues 
        },
        { status: 400 }
      );
    }

    const data: ContactFormData = validationResult.data;

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send SMS if urgent
    // 4. Integrate with CRM
    
    // For now, we'll simulate processing and log the data
    console.log('Contact form submission received:', {
      timestamp: new Date().toISOString(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      service: data.service,
      urgency: data.urgency,
      location: data.location,
      vehicle: `${data.vehicleMake} ${data.vehicleModel} (${data.vehicleYear})`,
      issue: data.issue.substring(0, 100) + '...',
    });

    // Simulate email sending (in production, use a service like SendGrid, Resend, etc.)
    const emailContent = generateEmailContent(data);
    console.log('Email content generated:', emailContent.subject);

    // Simulate SMS for urgent requests
    if (data.urgency === 'emergency') {
      console.log(`SMS alert sent for emergency request from ${data.name} in ${data.location}`);
    }

    // Return success response
    return NextResponse.json(
      { 
        message: 'Form submitted successfully',
        submissionId: generateSubmissionId(),
        estimatedResponse: getEstimatedResponseTime(data.urgency)
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form API error:', error);
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function generateEmailContent(data: ContactFormData) {
  const subject = `${data.urgency === 'emergency' ? '🚨 EMERGENCY - ' : ''}New Service Request from ${data.name}`;
  
  const body = `
New Service Request Details:

CUSTOMER INFORMATION:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Location: ${data.location}
Preferred Contact: ${data.preferredContact}

VEHICLE INFORMATION:
Make: ${data.vehicleMake}
Model: ${data.vehicleModel}
Year: ${data.vehicleYear}

SERVICE DETAILS:
Service Required: ${data.service}
Urgency Level: ${data.urgency}
Issue Description: ${data.issue}

RESPONSE PRIORITY: ${data.urgency === 'emergency' ? 'IMMEDIATE' : data.urgency === 'within-24h' ? 'HIGH' : 'NORMAL'}

--
Submitted via ${BUSINESS_INFO.website}
Timestamp: ${new Date().toLocaleString('en-GB')}
  `;

  return { subject, body };
}

function generateSubmissionId(): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substr(2, 5);
  return `LAD-${timestamp}-${random}`.toUpperCase();
}

function getEstimatedResponseTime(urgency: string): string {
  switch (urgency) {
    case 'emergency':
      return 'Within 30 minutes';
    case 'within-24h':
      return 'Within 2 hours';
    case 'within-week':
      return 'Within 4 hours';
    case 'flexible':
      return 'Within 24 hours';
    default:
      return 'Within 4 hours';
  }
}

// Rate limiting helper (in production, use Redis or similar)
// Commented out for now - integrate when needed
// const requestCounts = new Map<string, { count: number; resetTime: number }>();

export async function GET() {
  return NextResponse.json(
    { 
      message: 'Contact API endpoint is working',
      endpoints: {
        POST: 'Submit contact form',
      }
    },
    { status: 200 }
  );
}