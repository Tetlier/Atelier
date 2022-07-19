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

export const FormGrid = styled.div`
margin: 20px 0 20px 0;
width: 65%
background-color: green;
display: flex;
`;


export const FormRow = styled.div`
flex-direction: row
`;

export const FormCol = styled.div`
flex-direction: column;
`;


//components of the form
export const HiddenRadio = styled.input`
opacity: 0;
`;

export const Stars = styled.label`
> * {transition: 200ms;}
`;

export const Title = styled.div`
margin: 10px 0 0 0;
text-align: center;
`;

export const SummaryInput = styled.textarea`
  width: 80%;
  height: 3em;
  overflow: auto;
  resize: none;
  position: relative;
  top: 0.5em;

`;

//must use input because textarea does not work with minLength
export const ReviewInput = styled.textarea`
  width: 80%;
  height: 6em;
  overflow: auto;
  resize: none;
  position: relative;
  top: 0.5em;
  justify-content: flex-start;

`;

