import { createContext, useContext, useState } from 'react';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [selectedBlogId, setSelectedBlogId] = useState(null);

  return (
    <BlogContext.Provider value={{ selectedBlogId, setSelectedBlogId }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => useContext(BlogContext);