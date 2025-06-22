"use client";

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Wand2, Loader2 } from 'lucide-react';
import { enhanceReviewAction } from '@/app/actions';
import type { Review } from '@/lib/types';

interface EnhanceReviewDialogProps {
    review: Review;
}

export function EnhanceReviewDialog({ review }: EnhanceReviewDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [communityFeedback, setCommunityFeedback] = useState(review.communityFeedback || "");
  const [enhancedReview, setEnhancedReview] = useState("");

  const handleEnhance = async () => {
    setIsLoading(true);
    setEnhancedReview("");
    const result = await enhanceReviewAction({
      reviewText: review.comment,
      communityFeedback: communityFeedback,
    });
    setIsLoading(false);

    if (result.success && result.data) {
      setEnhancedReview(result.data.enhancedReview);
    } else {
      // Handle error, maybe show a toast
      console.error(result.error);
      setEnhancedReview("Sorry, we couldn't enhance the review at this time.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Wand2 className="mr-2 h-4 w-4" /> Enhance
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="font-headline text-primary">Enhance Review with AI</DialogTitle>
          <DialogDescription>
            Improve the clarity and completeness of the perfume review based on community feedback.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="original-review">Original Review</Label>
                    <Textarea id="original-review" readOnly value={review.comment} className="min-h-[150px] bg-muted/50" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="community-feedback">Community Feedback</Label>
                    <Textarea
                        id="community-feedback"
                        placeholder="e.g., 'Could you describe the longevity?'"
                        value={communityFeedback}
                        onChange={(e) => setCommunityFeedback(e.target.value)}
                        className="min-h-[150px]"
                    />
                </div>
                 <Button onClick={handleEnhance} disabled={isLoading}>
                    {isLoading ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                        <Wand2 className="mr-2 h-4 w-4" />
                    )}
                    Enhance with AI
                </Button>
            </div>
            <div className="space-y-2">
                <Label htmlFor="enhanced-review">AI Enhanced Suggestion</Label>
                <Textarea
                    id="enhanced-review"
                    readOnly
                    value={enhancedReview}
                    placeholder="AI suggestions will appear here..."
                    className="min-h-[350px] bg-accent/30 border-primary/50"
                />
            </div>
        </div>
        <DialogFooter>
          <Button type="button" variant="secondary" onClick={() => setIsOpen(false)}>
            Close
          </Button>
          <Button type="submit">Apply Enhancement</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
