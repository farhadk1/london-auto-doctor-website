import Bounded from "@/components/common/bounded";

export default function Loading() {
  return (
    <Bounded className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-muted rounded-full animate-spin border-t-automotive-orange"></div>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-display text-foreground mb-2">
            Loading London Auto Doctor
          </h2>
          <p className="text-muted-foreground">
            Preparing your automotive electrical service experience...
          </p>
        </div>
      </div>
    </Bounded>
  );
}