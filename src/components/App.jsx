import { useState, useEffect } from 'react';
import API from 'services/API';
import { PostsList } from './Posts/Posts';

export const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadGames = async () => {
      try {
        const result = await API();
        setPosts([...result]);
      } catch (error) {}
    };
    loadGames();
  }, []);
  return (
    <div>
      <PostsList posts={posts} />
    </div>
  );
};
