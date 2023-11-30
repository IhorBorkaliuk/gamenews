import React, { lazy, Suspense, useState, useEffect } from 'react';
import API from 'services/API';
import NavBar from './NavBar/NavBar';
const LazyPostsList = lazy(() => import('./Posts/Posts'));

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
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <LazyPostsList posts={posts} />
      </Suspense>
    </div>
  );
};
