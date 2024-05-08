import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { APIGames } from 'services/API';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { GameCard } from 'components/GameCard/GameCard';
import NoPostsFound from 'components/NoPostsFound/NoPostsFound';
import SearchBar from 'components/SearchBar/SearchBar';

export const Games = () => {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();

  useEffect(() => {
    const loadGames = async () => {
      try {
        const result = await APIGames();
        setGames(result);
      } catch (error) {}
    };
    loadGames();
  }, []);
  console.log(games);

  const queryGames = searchParam.get('search') ?? '';
  console.log(queryGames);

  useEffect(() => {
    setFilteredGames(
      games.filter(el =>
        el.title.toLowerCase().includes(queryGames.toLowerCase())
      )
    );
  }, [searchParam, queryGames, games]);

  console.log(filteredGames);

  return (
    <div>
      <SearchBar queryGames={queryGames} setSearchParam={setSearchParam} />
      <Row xs={1} md={3} className="g-3 mt-3 d-flex align-items-stretch">
        {searchParam && queryGames && filteredGames.length === 0 ? (
          <Col>
            <NoPostsFound searchParam={searchParam} />
          </Col>
        ) : (
          (filteredGames.length > 0 ? filteredGames : games).map(
            (el, index) => (
              <Col key={index}>
                <GameCard el={el}></GameCard>
              </Col>
            )
          )
        )}
      </Row>
    </div>
  );
};

export default Games;
