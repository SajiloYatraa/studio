export interface Review {
  id: string;
  category: string;
  user: {
    name: string;
    avatarUrl?: string;
  };
  perfumeName: string;
  rating: number; // 1-5
  comment: string;
  dateUsed: string; // "YYYY-MM-DD"
  imageUrl: string;
  status: 'pending' | 'approved' | 'rejected';
  communityFeedback?: string;
}
