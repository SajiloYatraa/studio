import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { StarRating } from "@/components/StarRating";
import type { Review } from "@/lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "lucide-react";
import { format } from 'date-fns';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      <CardHeader className="p-0">
        <Image
          src={review.imageUrl}
          alt={review.perfumeName}
          width={400}
          height={400}
          className="w-full h-64 object-cover"
        />
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <StarRating rating={review.rating} readOnly />
        <CardTitle className="font-headline text-2xl mt-2 text-primary">{review.perfumeName}</CardTitle>
        <p className="mt-2 text-foreground/80">{review.comment}</p>
      </CardContent>
      <CardFooter className="bg-muted/50 p-4 flex justify-between items-center text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={review.user.avatarUrl} alt={review.user.name} />
            <AvatarFallback>{review.user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span>{review.user.name}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Calendar className="h-4 w-4" />
          <span>{format(new Date(review.dateUsed), 'MMM d, yyyy')}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
