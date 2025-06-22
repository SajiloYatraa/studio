import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const categories = [
  { name: 'For Her', href: '/discover/her', image: 'https://placehold.co/600x400.png', hint: 'woman perfume' },
  { name: 'For Him', href: '/discover/him', image: 'https://placehold.co/600x400.png', hint: 'man perfume' },
  { name: 'For Me', href: '/discover/me', image: 'https://placehold.co/600x400.png', hint: 'unisex perfume' },
  { name: 'For Parents', href: '/discover/parents', image: 'https://placehold.co/600x400.png', hint: 'elegant perfume' },
];

export default function DiscoverPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="font-headline text-4xl text-primary">Choose a Category</h1>
        <p className="mt-2 text-lg text-foreground/70">Select a category to start your scent journey.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <Link href={category.href} key={category.name}>
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-0 relative">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={600}
                  height={400}
                  data-ai-hint={category.hint}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <h2 className="absolute bottom-4 left-4 font-headline text-2xl text-white">
                  {category.name}
                </h2>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
