import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(2, "Name must be at least 2 characters").optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validationResult = newsletterSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: "Invalid data",
          details: validationResult.error.flatten().fieldErrors 
        },
        { status: 400 }
      );
    }

    const { email, name } = validationResult.data;

    // TODO: Integrate with email service (Mailchimp, ConvertKit, etc.)
    // For now, we'll log the subscription and return success
    console.log(`Newsletter subscription: ${email} ${name ? `(${name})` : ''}`);

    // In a real application, you would:
    // 1. Connect to your email service provider API
    // 2. Add the email to your newsletter list
    // 3. Send a confirmation email
    // 4. Store the subscription in your database
    
    // Example integration patterns:
    // - Mailchimp API
    // - ConvertKit API  
    // - SendGrid API
    // - Custom email service

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Thank you for subscribing to our newsletter! You'll receive automotive electrical tips and updates from London Auto Doctor.",
    });

  } catch (error) {
    console.error("Newsletter subscription error:", error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: "Failed to process subscription. Please try again later." 
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}