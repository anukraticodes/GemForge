"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href ? "text-accent font-semibold" : "text-muted-foreground hover:text-foreground";

  return (
    <header className="py-6 px-4 md:px-8 border-b border-border bg-background">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
        <svg
  xmlns="http://www.w3.org/2000/svg"
  width="32"
  height="32"
  viewBox="0 0 48 48"
  aria-label="Google logo"
>
  <path fill="#4285F4" d="M24 9.5c3.54 0 6.01 1.53 7.39 2.81l5.46-5.46C33.26 3.83 28.98 2 24 2 14.73 2 6.98 7.94 3.69 16.25l6.89 5.35C12.37 13.34 17.76 9.5 24 9.5z"/>
  <path fill="#34A853" d="M46.5 24c0-1.4-.12-2.76-.34-4H24v8h12.67c-.58 2.92-2.27 5.4-4.83 7.05l7.39 5.76C43.7 36.38 46.5 30.65 46.5 24z"/>
  <path fill="#FBBC05" d="M10.58 28.61a14.5 14.5 0 0 1 0-9.22L3.69 14.05A22 22 0 0 0 2 24c0 3.41.8 6.64 2.2 9.5l7.38-4.89z"/>
  <path fill="#EA4335" d="M24 46c5.98 0 11.26-1.98 15.01-5.39l-7.39-5.76c-2.06 1.39-4.7 2.22-7.62 2.22-6.24 0-11.63-3.84-13.42-9.1l-7.38 4.89C6.98 40.06 14.73 46 24 46z"/>
</svg>

          <h1 className="text-2xl md:text-3xl font-headline font-bold text-primary">
          GemForge
          </h1>
        </div>

        <nav className="flex gap-6 text-sm md:text-base font-medium">
  <Link href="/generate" className={isActive("/generate")}>
    <span className="material-icons align-middle mr-1">extension</span> Generator
  </Link>
  <Link href="/rules" className={isActive("/rules")}>
    <span className="material-icons align-middle mr-1">security</span> Firestore Rules
  </Link>
  <Link href="/history" className={isActive("/history")}>
    <span className="material-icons align-middle mr-1">history</span> History
  </Link>
  <Link href="/about" className={isActive("/about")}>
    <span className="material-icons align-middle mr-1">info</span> About
  </Link>
</nav>


      </div>
    </header>
  );
}

