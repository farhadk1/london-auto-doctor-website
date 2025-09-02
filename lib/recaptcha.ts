export async function verifyRecaptcha(token: string, action = 'contact_form'): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  
  if (!secretKey) {
    console.error('reCAPTCHA secret key not found in environment variables');
    return false;
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    
    // For reCAPTCHA v3, check both success and score
    if (data.success && data.score !== undefined) {
      // Score threshold for v3 (0.0 = bot, 1.0 = human)
      const minimumScore = 0.5;
      const isValidAction = data.action === action;
      
      console.log('reCAPTCHA v3 verification:', {
        success: data.success,
        score: data.score,
        action: data.action,
        hostname: data.hostname
      });
      
      return data.score >= minimumScore && isValidAction;
    }
    
    // Fallback for v2 (no score)
    return data.success === true;
  } catch (error) {
    console.error('reCAPTCHA verification failed:', error);
    return false;
  }
}