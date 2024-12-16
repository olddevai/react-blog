import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../data/posts';
import { Clock, Calendar, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export function PostPage() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <img
        src={post.coverImage}
        alt={post.title}
        className="w-full h-[400px] object-cover rounded-lg mb-8"
      />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
      
      <div className="flex items-center space-x-6 mb-8">
        <div className="flex items-center">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar size={14} className="mr-1" />
              {post.date}
            </div>
          </div>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Clock size={14} className="mr-1" />
          {post.readingTime}
        </div>
      </div>

      <div className="prose prose-lg max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>

      <div className="mt-8 pt-8 border-t border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Tags</h2>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
            >
              <Tag size={14} className="mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}