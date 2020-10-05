import React from 'react';
import { Link } from 'gatsby';

const PostLink = ({ post }) => (
  <article>
    <Link
      className="block border hover:shadow-lg border-gray-400 p-8 pt-10 mb-4 rounded"
      to={post.frontmatter.path}
    >
      <h2 className="text-xl font-bold">{post.frontmatter.title}</h2>

      <p className="my-4 text-gray-700">{post.excerpt}</p>

      <span className="text-sm text-gray-800">
        {post.frontmatter.author} on {post.frontmatter.date}
      </span>
    </Link>
  </article>
);

export default PostLink;
