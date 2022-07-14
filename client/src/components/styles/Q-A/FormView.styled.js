import styled from 'styled-components';
export const FormView = styled.div`
  margin: 10px 10px 10px 10px;
  padding: 10px 30px 10px 30px;
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position:relative;
  z-index: 10;
  border-radius: 10px;
`;

export const FormBackground = styled.div`
top: 0;
left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;
`;