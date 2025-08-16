"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Phone, Zap } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/Electric-Heartbeat.png"
              alt="London Auto Doctor - Mobile Car Electrician"
              width={32}
              height={32}
              className="w-auto h-8"
              priority
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground">London Auto Doctor</span>
              <span className="text-xs text-muted-foreground">Mobile Car Electrician</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-automotive-orange",
                  pathname === item.href
                    ? "text-automotive-orange"
                    : "text-foreground/60"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Phone number - hidden on small screens */}
            <div className="hidden lg:flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-automotive-orange" />
              <span className="font-semibold text-foreground">0800 123 4567</span>
            </div>

            {/* CTA Button */}
            <Button
              asChild
              size="sm"
              className="hidden sm:inline-flex bg-automotive-orange hover:bg-automotive-orange/90"
            >
              <Link href="/contact">Book Service</Link>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border/40">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block px-3 py-2 text-base font-medium rounded-md transition-colors",
                    pathname === item.href
                      ? "text-automotive-orange bg-automotive-orange/10"
                      : "text-foreground/70 hover:text-automotive-orange hover:bg-automotive-orange/5"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile phone and CTA */}
              <div className="pt-4 border-t border-border/40 space-y-2">
                <div className="flex items-center space-x-2 px-3 py-2">
                  <Phone className="h-4 w-4 text-automotive-orange" />
                  <span className="font-semibold text-foreground">0800 123 4567</span>
                </div>
                <div className="px-3">
                  <Button
                    asChild
                    className="w-full bg-automotive-orange hover:bg-automotive-orange/90"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Link href="/contact">Book Service</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}