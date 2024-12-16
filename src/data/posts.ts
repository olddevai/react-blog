export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  coverImage: string;
  date: string;
  readingTime: string;
  tags: string[];
}

export const posts: Post[] = [
  {
    id: '1',
    title: 'The Art of Modern Web Development',
    excerpt: 'Exploring the latest trends and best practices in modern web development.',
    content: `
      Modern web development has evolved significantly over the past decade. With the advent of powerful frameworks and tools, developers now have more capabilities than ever before.

      ## The Rise of React
      React has become the go-to library for building user interfaces. Its component-based architecture and virtual DOM make it incredibly efficient and maintainable.

      ## The Importance of Performance
      Performance is crucial for providing a great user experience. Here are some key considerations:
      - Code splitting
      - Lazy loading
      - Image optimization
      - Caching strategies

      ## Looking Ahead
      As we move forward, we'll see even more innovations in web development. Stay tuned for more updates!
    `,
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    },
    coverImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200',
    date: '2024-03-15',
    readingTime: '5 min read',
    tags: ['Web Development', 'React', 'JavaScript'],
  },
  {
    id: '2',
    title: 'Mastering TypeScript in 2024',
    excerpt: 'A comprehensive guide to TypeScript features and best practices.',
    content: `
      TypeScript has become an essential tool in modern JavaScript development. Let's explore why it's so powerful.

      ## Type Safety
      One of the biggest advantages of TypeScript is its strong type system. This helps catch errors early in development.

      ## Advanced Features
      TypeScript offers many advanced features:
      - Generics
      - Utility Types
      - Decorators
      - Mapped Types

      ## Best Practices
      Following TypeScript best practices can greatly improve your code quality:
      1. Use strict mode
      2. Leverage type inference
      3. Write self-documenting code
      4. Use interfaces for object shapes
    `,
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    },
    coverImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200',
    date: '2024-03-14',
    readingTime: '7 min read',
    tags: ['TypeScript', 'Programming', 'Development'],
  },
];