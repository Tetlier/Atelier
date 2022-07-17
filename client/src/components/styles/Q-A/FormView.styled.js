import styled from 'styled-components';
export const FormView = styled.div`
  margin: 10px 10px 10px 10px;
  padding: 30px 30px 30px 30px;
  width: 75%;
  height: 60%;
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

export const FormTitle = styled.div`
  margin: 10px 0 0 0;
  text-align: center
`;

export const FormSection = styled.div`
  margin: 20px 0 20px 0;
  width: 65%
  background-color: green;
`;

export const FormEntry = styled.input`
  left: 5px;
  right: 5px;
  display: inline-block;
`;

export const FormQuestionEntry = styled.textarea`
  width: 60%;
  height: 4em;
  overflow: auto;
  resize: none;
  position: relative;
  top: 0.5em;
`;

export const FormLabel = styled.label`
  width: 150px;
  display: inline-block;
  vertical-align: top;
`;