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
margin: 10px 10px 10px 10px;
padding: 30px 30px 30px 30px;
width: 80%;
height: 80%;
box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
background: #fff;
color: #000;
position:relative;
z-index: 10;
border-radius: 10px;
`;

export const HiddenRadio = styled.input`
display: none;
`;


export const FormGrid = styled.div`
margin: 20px 0 20px 0;
width: 65%
background-color: green;
display: flex;
`;

export const FormTitle = styled.div`
margin: 10px 0 0 0;
text-align: center;
`;

export const FormRow = styled.div`
flex-direction: row
`;

export const FormCol = styled.div`
flex-direction: column;
`;

