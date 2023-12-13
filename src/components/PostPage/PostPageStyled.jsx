import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
  margin-top: 20px;
`;

export const Image = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: 500px;
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
  margin-bottom: 20px;
  text-align: justify;
`;

export const Link = styled.a`
  color: #007bff; 
  text-decoration: none; 
  cursor: pointer; 

  &:hover {
    text-decoration: underline;
  }
`;