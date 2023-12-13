import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1200px; /* Максимальна ширина контейнера */
  margin: 0 auto; /* Центрування контейнера на сторінці */
  padding: 20px; /* Внутрішній відступ для контенту */
`;

export const Image = styled.img`
  width: 100%;
  max-height: auto;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  
`;

export const Title = styled.h2`
  font-size: 36px;
  color: #fff;
  background: linear-gradient(45deg, #333, #666);
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const Paragraph = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #007bff;

  &:hover {
    text-decoration: underline;
  }

  &:hover {
    text-decoration: underline;
  }
`;