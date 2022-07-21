import styled from 'styled-components';

export const StyledProductDetail = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  column-gap: 20px;
  justify-content: space-between;
  align-items:center;
  margin-bottom: 1em;
  margin-top: 3em;
  padding: 0 0 2em 0;
  border-bottom: 1px #ccc solid;

  .social-links {
    display: flex;
    align-items: center;
  }

  .social-links button {
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: center;
    width:2em;
    height: 2em;
    margin: 0 0.2rem;
    color: white;
    border: 1px solid black;
    border-radius: 50%;
    text-decoration: none;
    font-size: 1rem;
    transition: all 0.5s ease;
  }

  .social-links button:hover {
    background: white;
    color: black;
    cursor: pointer;
  }

  .facebook {
    background: #4267B2;
  }

  .twitter {
    background: #00acee;
  }

  .pinterest {
    background: #E60023;
  }

`;