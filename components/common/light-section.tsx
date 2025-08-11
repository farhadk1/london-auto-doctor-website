import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface LightSectionProps {
  children: ReactNode;
  className?: string;
}

export default function LightSection({ children, className }: LightSectionProps) {
  return (
    <div className={cn("section-light", className)}>
      {children}
    </div>
  );
}