import ReviewForm from "@/components/ReviewForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function NewReviewPage() {
  return (
    <Card className="w-full max-w-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-3xl text-primary">Share Your Scent Experience</CardTitle>
        <CardDescription>
          Your review helps others discover their next favorite perfume.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ReviewForm />
      </CardContent>
    </Card>
  );
}
