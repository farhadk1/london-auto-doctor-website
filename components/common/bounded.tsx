import { cn } from "@/lib/utils";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

export default function Bounded({
  as: Comp = "section",
  className,
  children,
  ...restProps
}: BoundedProps) {
  return (
    <Comp
      className={cn("px-4 py-10 md:py-14 md:px-6 lg:py-16", className)}
      {...restProps}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Comp>
  );
}