import { mockReviews } from "@/lib/mock-data";
import ReviewCard from "@/components/ReviewCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";
import { PlusCircle } from "lucide-react";

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryName = params.category.charAt(0).toUpperCase() + params.category.slice(1);
  const reviews = mockReviews.filter(r => r.category === params.category && r.status === 'approved');

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-4xl text-primary">
          Perfumes For {categoryName}
        </h1>
        <p className="mt-2 text-lg text-foreground/70">
          Explore reviews from our community.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <label htmlFor="sort-by" className="text-sm font-medium">Sort By:</label>
          <Select defaultValue="newest">
            <SelectTrigger id="sort-by" className="w-[180px]">
              <SelectValue placeholder="Select sort order" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="highest-rating">Highest Rating</SelectItem>
              <SelectItem value="lowest-rating">Lowest Rating</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button asChild>
          <Link href={`/reviews/new?category=${params.category}`}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Your Review
          </Link>
        </Button>
      </div>

      {reviews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 border-2 border-dashed rounded-lg">
          <h2 className="text-xl font-semibold text-muted-foreground">No reviews yet</h2>
          <p className="mt-2 text-muted-foreground">Be the first to add a review in this category!</p>
        </div>
      )}
    </div>
  );
}
