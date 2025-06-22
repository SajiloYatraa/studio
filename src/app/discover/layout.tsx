import Header from "@/components/Header";
import Link from "next/link";

export default function DiscoverLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-8 px-4 md:px-6">{children}</main>
      <footer className="bg-muted py-6 mt-auto">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} RateYourPerfume. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/discover" className="hover:text-primary">Discover</Link>
            <Link href="/contact" className="hover:text-primary">Contact</Link>
            <Link href="/admin" className="hover:text-primary">Admin</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
