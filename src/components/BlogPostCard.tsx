import React from 'react';

interface BlogPostCardProps {
  category: string;
  title: string;
  content: string;
  wordCount: number;
  readTime: number;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ category, title, content, wordCount, readTime }) => {
  return (
    <div className="bg-white/50 dark:bg-midnight/20 border border-rich-gold/10 rounded-lg shadow-lg p-6 flex flex-col h-full hover:shadow-rich-gold/10 transition-shadow duration-300">
      <div className="flex justify-between items-center mb-4">
        <span className="bg-rich-gold text-white px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider">{category}</span>
      </div>
      <h3 className="text-2xl font-bold text-deep-navy dark:text-pearl font-display mb-3 flex-grow">{title}</h3>
      <p className="text-charcoal/80 dark:text-platinum/80 text-base leading-relaxed mb-4">
        {content}
      </p>
      <div className="mt-auto border-t border-rich-gold/10 pt-4 flex justify-between items-center text-xs text-charcoal/60 dark:text-platinum/60">
        <span>{wordCount} words</span>
        <span>{readTime} min read</span>
      </div>
    </div>
  );
};

export default BlogPostCard; 