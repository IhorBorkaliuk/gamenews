import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import NavBar from './NavBar/NavBar';

const PostsList = lazy(() => import('./Posts/Posts'));
const NotFound = lazy(() => import('./NotFound/NotFound'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Games = lazy(() => import('./Games/Games'));
const Giveaways = lazy(() => import('./Giveaways/Giveaways'));

export const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<PostsList />} />
          <Route path="/games" element={<Games />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/giveaways" element={<Giveaways />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
