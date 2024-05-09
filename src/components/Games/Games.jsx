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
  const [searchParam, setSearchParam] = useSearchParams();
  const [loadedGames, setLoadedGames] = useState(20)

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

  const loadmore = () => {
    setLoadedGames(prevState => prevState + 20)
  }





  const queryGames = searchParam.get('search') ?? '';
  const filteredGames = games.filter(el =>
    el.title.toLowerCase().includes(queryGames.toLowerCase())
  );
  const displayedGames = queryGames
    ? filteredGames
    : games.slice(0, loadedGames);
  
  console.log(displayedGames);

  return (
    <div>
      <SearchBar queryGames={queryGames} setSearchParam={setSearchParam} />
      <Row xs={1} md={4} className="g-3 mt-3 d-flex align-items-stretch">
        {displayedGames.length === 0 ? (
          <Col>
            <NoPostsFound searchParam={queryGames} />
          </Col>
        ) : (
          displayedGames.map((el, index) => (
            <Col key={index}>
              <GameCard el={el}></GameCard>
            </Col>
          ))
        )}
      </Row>
      <button onClick={loadmore}>Load more</button>
    </div>
  );
};

export default Games;
