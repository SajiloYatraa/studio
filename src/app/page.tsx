import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="relative w-full py-20 md:py-32 lg:py-40 bg-accent/20 overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)] dark:bg-grid-slate-700/40 dark:[mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
                Find Your Perfect Scent
              </h1>
              <p className="mt-6 text-lg md:text-xl text-foreground/80">
                Discover, review, and share your favorite perfumes with a community of fragrance lovers.
              </p>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/discover">Start Your Discovery</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Featured Reviews</h2>
              <p className="mt-4 text-lg text-foreground/70">What our community is saying</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="transform hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image src="https://placehold.co/40x40" alt="User" width={40} height={40} className="rounded-full" data-ai-hint="person avatar" />
                    <div className="ml-4">
                      <p className="font-semibold">Alice</p>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-primary fill-primary" />)}
                      </div>
                    </div>
                  </div>
                  <h3 className="font-headline text-xl text-primary mb-2">A Timeless Classic</h3>
                  <p className="text-foreground/80 text-sm">"Chanel No. 5 is simply divine. It makes me feel sophisticated and elegant every time I wear it."</p>
                </CardContent>
              </Card>
               <Card className="transform hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image src="https://placehold.co/40x40" alt="User" width={40} height={40} className="rounded-full" data-ai-hint="person avatar" />
                    <div className="ml-4">
                      <p className="font-semibold">Bob</p>
                       <div className="flex items-center">
                        {[...Array(4)].map((_, i) => <Star key={i} className="w-4 h-4 text-primary fill-primary" />)}
                        {[...Array(1)].map((_, i) => <Star key={i} className="w-4 h-4 text-muted-foreground/30" />)}
                      </div>
                    </div>
                  </div>
                  <h3 className="font-headline text-xl text-primary mb-2">Fresh & Spicy</h3>
                  <p className="text-foreground/80 text-sm">"Dior Sauvage is great for everyday wear. The performance is incredible, lasts all day on my skin."</p>
                </CardContent>
              </Card>
              <Card className="transform hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image src="https://placehold.co/40x40" alt="User" width={40} height={40} className="rounded-full" data-ai-hint="person avatar" />
                    <div className="ml-4">
                      <p className="font-semibold">Catherine</p>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-primary fill-primary" />)}
                      </div>
                    </div>
                  </div>
                  <h3 className="font-headline text-xl text-primary mb-2">Dark & Captivating</h3>
                  <p className="text-foreground/80 text-sm">"Black Orchid is a statement fragrance, not for the faint of heart. Utterly captivating."</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Get In Touch</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
              We'd love to hear from you! Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer all your questions.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <footer className="bg-muted py-6">
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
