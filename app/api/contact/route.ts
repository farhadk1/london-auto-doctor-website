import { NextResponse } from 'next/server';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';
import { sendContactEmail } from '@/lib/email';
import { verifyRecaptcha } from '@/lib/recaptcha';

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

    // Verify reCAPTCHA token if provided
    if (data.recaptchaToken) {
      const isRecaptchaValid = await verifyRecaptcha(data.recaptchaToken, 'contact_form');
      if (!isRecaptchaValid) {
        console.warn('reCAPTCHA verification failed, but allowing submission');
      } else {
        console.log('reCAPTCHA verification successful');
      }
    } else {
      console.warn('No reCAPTCHA token provided');
    }

    try {
      // Send email notification
      await sendContactEmail(data);
      
      console.log('Contact form submission received and email sent:', {
        timestamp: new Date().toISOString(),
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: data.service,
        urgency: data.urgency,
        location: data.location,
        vehicle: `${data.vehicleMake} ${data.vehicleModel} (${data.vehicleYear})`,
      });

      // Log SMS alert for urgent requests (SMS integration can be added later)
      if (data.urgency === 'emergency') {
        console.log(`SMS alert recommended for emergency request from ${data.name} in ${data.location}`);
      }
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
      
      // Still log the form submission even if email fails
      console.log('Contact form submission received (email failed):', {
        timestamp: new Date().toISOString(),
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: data.service,
        urgency: data.urgency,
        location: data.location,
        vehicle: `${data.vehicleMake} ${data.vehicleModel} (${data.vehicleYear})`,
      });

      return NextResponse.json(
        { 
          error: 'Failed to send email notification. Please call us directly.',
          submissionId: generateSubmissionId(),
        },
        { status: 500 }
      );
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