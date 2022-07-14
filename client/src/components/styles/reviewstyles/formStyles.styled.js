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
  width: 90%;
  height: 90%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px
`;

export const FormStar = styled.input`

  --percent: calc(${({rating}) => rating} / 5 * 100%);
  --star-size: 20px;
  --star-color: #808080;
  --star-background: #fc0;

  display: inline-block;
  font-size: var(--star-size);
  line-height: 1;

  &:before {
    content: '★★★★★';
    letter-spacing: 3px;
    background: linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const FormGrid = styled.div`
text-align: center;
`;

export const FormRow = styled.div`

`;

export const FormCol = styled.div`
flex: ${props=> props.size}
`;

