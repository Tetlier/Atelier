import styled from 'styled-components';

export const FormModalBackground = styled.div`
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

export const FormModal = styled.form`
  margin: 50px 50px 50px 50px;
  padding: 50px 50px 50px 50px;
  width: 90%;
  height: 90%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: flex;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-flow: column wrap;
`;

export const HiddenRadio = styled.input`
display: none;
`;


export const FormGrid = styled.div`
`;

export const FormRow = styled.div`
`;

export const leftRow = styled.div`

`;

export const FormCol = styled.div`
flex-basis: 100%
`;

