import Header from "@/components/Header";

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
        <div className="container mx-auto px-4 md:px-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Scentify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
