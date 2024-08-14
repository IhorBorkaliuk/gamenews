// PostsListStyled.js
import styled from 'styled-components';
import { Button, Row, Col} from 'react-bootstrap';

// Контейнер для всієї сторінки постів
export const Container = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
`;

// Стилізація кнопки "Load More"
export const LoadMoreButton = styled(Button)`
  display: block;
  width: 100%;
  margin-top: 20px;
  background-color: #007bff;
  border-color: #007bff;

  &:hover {
    background-color: #0056b3;
    border-color: #004085;
  }
`;

// Стилізація рядка постів
export const PostRow = styled(Row)`
  margin-top: 20px;
`;

// Стилізація колонки постів
export const PostCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: stretch;
`;
