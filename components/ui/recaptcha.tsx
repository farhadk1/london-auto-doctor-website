"use client";

import { forwardRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface RecaptchaProps {
  onChange: (token: string | null) => void;
  onError?: () => void;
  size?: "compact" | "normal" | "invisible";
  theme?: "light" | "dark";
}

const Recaptcha = forwardRef<ReCAPTCHA, RecaptchaProps>(
  ({ onChange, onError, size = "normal", theme = "light" }, ref) => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    if (!siteKey) {
      console.error("reCAPTCHA site key not found in environment variables");
      return null;
    }

    return (
      <ReCAPTCHA
        ref={ref}
        sitekey={siteKey}
        onChange={onChange}
        onError={onError}
        size={size}
        theme={theme}
      />
    );
  }
);

Recaptcha.displayName = "Recaptcha";

export { Recaptcha };