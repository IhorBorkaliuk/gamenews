import React, { useEffect, useState } from 'react'
import { APIGames } from 'services/API';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { WrapperGame } from './GamesStyled';
import { GameCard } from 'components/GameCard/GameCard';

export const Games = () => {
const [games, setGames] = useState([])

  useEffect(() => {
    const loadGames = async () => {
      try {
        const result = await APIGames()
        setGames(result)
      } catch (error) {
        
      }
    }
    loadGames()
  }, []);
  console.log(games);
  return (
    <WrapperGame>
      <Row xs={1} md={3} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) =>
          games.map((el, index) => (
            <Col key={index}>
              <GameCard el={el}></GameCard>
            </Col>
          ))
        )}
      </Row>
    </WrapperGame>
  );
}

export default Games
