import type { Review, ContactMessage } from './types';

export const mockReviews: Review[] = [
  {
    id: '1',
    category: 'her',
    user: { name: 'Alice', avatarUrl: 'https://placehold.co/100x100' },
    perfumeName: 'Chanel No. 5',
    rating: 5,
    comment: 'A timeless classic. The floral aldehyde composition is simply divine. It makes me feel sophisticated and elegant every time I wear it. A must-have for any perfume enthusiast.',
    dateUsed: '2023-10-26',
    imageUrl: 'https://placehold.co/400x400.png',
    data_ai_hint: 'perfume bottle',
    status: 'approved',
    communityFeedback: 'Could you describe the longevity and sillage?'
  },
  {
    id: '2',
    category: 'him',
    user: { name: 'Bob', avatarUrl: 'https://placehold.co/100x100' },
    perfumeName: 'Dior Sauvage',
    rating: 4,
    comment: 'Very fresh and spicy. Great for everyday wear, especially in the warmer months. The performance is incredible, lasts all day on my skin.',
    dateUsed: '2023-09-15',
    imageUrl: 'https://placehold.co/400x400.png',
    data_ai_hint: 'perfume lifestyle',
    status: 'approved',
  },
  {
    id: '3',
    category: 'her',
    user: { name: 'Catherine', avatarUrl: 'https://placehold.co/100x100' },
    perfumeName: 'Black Orchid',
    rating: 5,
    comment: 'Dark, mysterious, and utterly captivating. The truffle and black orchid notes are very prominent. This is a statement fragrance, not for the faint of heart.',
    dateUsed: '2024-01-05',
    imageUrl: 'https://placehold.co/400x400.png',
    data_ai_hint: 'dark flower',
    status: 'pending',
    communityFeedback: 'The description is a bit vague. Can you elaborate on the "dark" and "mysterious" aspects? What occasions would this be suitable for?'
  },
  {
    id: '4',
    category: 'me',
    user: { name: 'David', avatarUrl: 'https://placehold.co/100x100' },
    perfumeName: 'Santal 33',
    rating: 3,
    comment: 'An interesting woody aromatic scent. I get a lot of sandalwood and leather. It\'s a bit too linear for my taste, but I can see why people love it.',
    dateUsed: '2023-11-20',
    imageUrl: 'https://placehold.co/400x400.png',
    data_ai_hint: 'sandalwood forest',
    status: 'approved',
  },
  {
    id: '5',
    category: 'parents',
    user: { name: 'Emily', avatarUrl: 'https://placehold.co/100x100' },
    perfumeName: 'Acqua di Gio',
    rating: 4,
    comment: 'A gift for my father, and he loves it. It is a very fresh, aquatic, and clean scent. Perfect for a mature gentleman. A timeless masterpiece.',
    dateUsed: '2023-12-25',
    imageUrl: 'https://placehold.co/400x400.png',
    data_ai_hint: 'ocean wave',
    status: 'approved',
  },
  {
    id: '6',
    category: 'him',
    user: { name: 'Frank', avatarUrl: 'https://placehold.co/100x100' },
    perfumeName: 'Creed Aventus',
    rating: 5,
    comment: 'The king of fragrances. The blend of pineapple, birch, and musk is iconic. The compliments are endless whenever I wear this. Worth every penny.',
    dateUsed: '2024-02-14',
    imageUrl: 'https://placehold.co/400x400.png',
    data_ai_hint: 'pineapple crown',
    status: 'pending',
    communityFeedback: 'This sounds amazing! Can you specify which batch you are reviewing? Also, any thoughts on its versatility across seasons?'
  },
];

export const mockContactMessages: ContactMessage[] = [
  {
    id: 'msg1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    message: 'I have a question about an order. Can you please help?',
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
  },
  {
    id: 'msg2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    message: 'I love your platform! Just wanted to share some feedback on the review process. It would be great if we could edit our reviews after submitting.',
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
  }
];
