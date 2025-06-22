import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function AuthLayout({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-accent/50 p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2 font-headline text-3xl font-bold text-primary">
            <Sparkles className="h-8 w-8" />
            RateYourPerfume
          </Link>
          <h1 className="mt-4 font-headline text-2xl text-foreground">{title}</h1>
        </div>
        {children}
      </div>
    </div>
  );
}
