import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import NavBar from './NavBar/NavBar';
import LoaderExampleInlineCentered from './Loader/Loader';

const PostsList = lazy(() => import('./PostsList/PostsList'));
const PostPage = lazy(() => import('./PostPage/PostPage'))
const NotFound = lazy(() => import('./NotFound/NotFound'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Games = lazy(() => import('./Games/Games'));
const Giveaways = lazy(() => import('./Giveaways/Giveaways'));

export const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Suspense
        fallback={<LoaderExampleInlineCentered></LoaderExampleInlineCentered>}
      >
        <Routes>
          <Route path="/" element={<PostsList />} />
          <Route path="/:id" element={<PostPage />} />
          <Route path="/games" element={<Games />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/giveaways" element={<Giveaways />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
