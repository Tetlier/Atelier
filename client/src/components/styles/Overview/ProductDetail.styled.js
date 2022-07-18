import styled from 'styled-components';

export const StyledProductDetail = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  column-gap: 20px;
  justify-content: center;
  align-items:start;
  margin-bottom: 3em;
  margin-top: 3em;

  .social-links {
    display: flex;
    align-items: center;
  }

  .social-links a {
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: center;
    width:2em;
    height: 2em;
    margin: 0 0.2rem;
    color: black;
    border: 1px solid black;
    border-radius: 50%;
    text-decoration: none;
    font-size: 1rem;
    transition: all 0.5s ease;
  }

  .social-links a:hover {
    background: black;
    border-color: transparent;
    color: white;
  }
`;