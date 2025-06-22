import { mockReviews } from "@/lib/mock-data";
import AdminReviewCard from "@/components/AdminReviewCard";

export default function AdminPage() {
  const pendingReviews = mockReviews.filter(r => r.status === 'pending');

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-4xl text-primary">Admin Panel</h1>
        <p className="mt-2 text-lg text-foreground/70">
          Manage and approve new reviews from the community.
        </p>
      </div>

      {pendingReviews.length > 0 ? (
        <div className="space-y-6">
          {pendingReviews.map(review => (
            <AdminReviewCard key={review.id} review={review} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 border-2 border-dashed rounded-lg">
          <h2 className="text-xl font-semibold text-muted-foreground">All caught up!</h2>
          <p className="mt-2 text-muted-foreground">There are no pending reviews to approve.</p>
        </div>
      )}
    </div>
  );
}
