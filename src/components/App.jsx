import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import NavBar from './NavBar/NavBar';
import LoaderExampleInlineCentered from './Loader/Loader';
import { APIGames } from 'services/API'; 
import { Navigate } from 'react-router';

const PostsList = lazy(() => import('./PostsList/PostsList'));
const PostPage = lazy(() => import('./PostPage/PostPage'));
const NotFound = lazy(() => import('./NotFound/NotFound'));
const Games = lazy(() => import('./Games/Games'));
const Giveaways = lazy(() => import('./Giveaways/Giveaways'));
const GamePage = lazy(() => import('./GamePage/GamePage'));

export const App = () => {
  const [games, setGames] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('regData') || false)

  useEffect(() => {
    const loadGames = async () => {
      try {
        const result = await APIGames();
        setGames(result);
      } catch (error) {
        console.error('Помилка при завантаженні ігор: ', error);
      }
    };
    loadGames();
  }, []);

  return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Suspense fallback={<LoaderExampleInlineCentered />}>
        <Routes>
          <Route path="/" element={<Navigate to="/posts" replace />} />
          <Route path="/posts/" element={<PostsList />} />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route
            path="/games"
            element={<Games games={games} setGames={setGames} />}
          />
          <Route
            path="/games/:id"
            element={<GamePage isLoggedIn={isLoggedIn} games={games} />}
          />
          <Route path="/giveaways" element={<Giveaways />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
