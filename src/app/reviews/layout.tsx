import Header from "@/components/Header";

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center py-12 px-4 md:px-6 bg-accent/50">
        {children}
      </main>
    </div>
  );
}
