import Image from "next/image";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import type { Review } from "@/lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Check, ThumbsUp, ThumbsDown, Sparkles } from "lucide-react";
import { format } from 'date-fns';
import { Button } from "./ui/button";
import { StarRating } from "./StarRating";
import { EnhanceReviewDialog } from "./EnhanceReviewDialog";

interface AdminReviewCardProps {
  review: Review;
}

export default function AdminReviewCard({ review }: AdminReviewCardProps) {
  return (
    <Card className="overflow-hidden shadow-md">
      <div className="grid md:grid-cols-3">
        <div className="md:col-span-1">
          <Image
            src={review.imageUrl}
            alt={review.perfumeName}
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:col-span-2 flex flex-col">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <h2 className="font-headline text-2xl text-primary">{review.perfumeName}</h2>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={review.user.avatarUrl} alt={review.user.name} />
                    <AvatarFallback>{review.user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span>{review.user.name}</span>
                  <span className="text-gray-300">|</span>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    <span>{format(new Date(review.dateUsed), 'MMM d, yyyy')}</span>
                  </div>
                </div>
              </div>
              <StarRating rating={review.rating} readOnly />
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-foreground/80">{review.comment}</p>
          </CardContent>
          <CardFooter className="bg-muted/50 p-4 flex justify-end items-center gap-2">
            <EnhanceReviewDialog review={review} />
            <Button variant="outline" size="sm" className="text-red-600 hover:bg-red-50 hover:text-red-700 border-red-200 hover:border-red-400">
              <ThumbsDown className="mr-2 h-4 w-4" /> Reject
            </Button>
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              <ThumbsUp className="mr-2 h-4 w-4" /> Approve
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}
