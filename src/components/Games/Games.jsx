import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { LoadMore } from './GamesStyled';
import { GameCard } from 'components/GameCard/GameCard';
import NoPostsFound from 'components/NoPostsFound/NoPostsFound';
import SearchBar from 'components/SearchBar/SearchBar';
import FilterDropdown from 'components/Filter/Filter';

export const Games = ({ games }) => {
  const [searchParam, setSearchParam] = useSearchParams();
  const [loadedGames, setLoadedGames] = useState(20);
  const [selectedGenre, setSelectedGenre] = useState(null);

  const loadmore = () => {
    setLoadedGames(prevState => prevState + 20);
  };

  const handleFilterChange = option => {
    setSelectedGenre(option);
    setLoadedGames(20)
  };

  const queryGames = searchParam.get('search') ?? '';
  const filteredGames = games.filter(el =>
    el.title.toLowerCase().includes(queryGames.toLowerCase())
  );
  const sortedByGenre = games.filter(el => el.genre === selectedGenre);
  const displayedGames = queryGames
    ? filteredGames
    : sortedByGenre.length === 0
    ? games.slice(0, loadedGames)
    : sortedByGenre.slice(0, loadedGames);
  console.log(displayedGames);



  const shouldRenderLoadMore =
    displayedGames.length % 20 === 0 &&
    displayedGames.length <
      (selectedGenre ? sortedByGenre.length : games.length);

  return (
    <div>
      <SearchBar queryGames={queryGames} setSearchParam={setSearchParam} />
      <FilterDropdown games={games} onChange={handleFilterChange} />
      <Row xs={1} md={4} className="g-3 mt-3 d-flex align-items-stretch">
        {displayedGames.length === 0 ? (
          <Col>
            <NoPostsFound query={queryGames} />
          </Col>
        ) : (
          displayedGames.map((el, index) => (
            <Col key={index}>
              <GameCard el={el}></GameCard>
            </Col>
          ))
        )}
      </Row>
      {shouldRenderLoadMore && (
        <LoadMore onClick={loadmore}>Load more</LoadMore>
      )}
    </div>
  );
};
export default Games;
