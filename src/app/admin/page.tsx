import { mockReviews, mockContactMessages } from "@/lib/mock-data";
import AdminReviewCard from "@/components/AdminReviewCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { format } from "date-fns";

export default function AdminPage() {
  const pendingReviews = mockReviews.filter(r => r.status === 'pending');
  const messages = mockContactMessages;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-4xl text-primary">Admin Panel</h1>
        <p className="mt-2 text-lg text-foreground/70">
          Manage your community and content.
        </p>
      </div>

      <Tabs defaultValue="reviews" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="reviews">Pending Reviews</TabsTrigger>
          <TabsTrigger value="messages">Contact Messages</TabsTrigger>
        </TabsList>
        <TabsContent value="reviews" className="mt-6">
          {pendingReviews.length > 0 ? (
            <div className="space-y-6">
              {pendingReviews.map(review => (
                <AdminReviewCard key={review.id} review={review} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 border-2 border-dashed rounded-lg mt-6">
              <h2 className="text-xl font-semibold text-muted-foreground">All caught up!</h2>
              <p className="mt-2 text-muted-foreground">There are no pending reviews to approve.</p>
            </div>
          )}
        </TabsContent>
        <TabsContent value="messages" className="mt-6">
           {messages.length > 0 ? (
            <div className="space-y-4">
              {messages.map(message => (
                <Card key={message.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{message.name}</CardTitle>
                    <CardDescription>
                      <a href={`mailto:${message.email}`} className="text-primary hover:underline">{message.email}</a>
                      {' - '}
                      <span>{format(new Date(message.timestamp), 'PPP p')}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{message.message}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
             <div className="text-center py-16 border-2 border-dashed rounded-lg mt-6">
              <h2 className="text-xl font-semibold text-muted-foreground">No messages</h2>
              <p className="mt-2 text-muted-foreground">There are no contact messages to display.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
