import styled from 'styled-components';

export const MetaGrid = styled.div`
display: flex;
`;

export const MetaRow = styled.div`
width: 100%;
`;

export const MetaCol = styled.div`
flex: ${props=> props.size};
`;

export const Clickable = styled.div`

&:hover {
  background-color: rgba(140, 140, 186, 140);
  opacity: 0.9;
  transform: scale(0.98);
}
`;

export const SummaryStar = styled.div`
  --percent: calc(${({rating}) => rating} / 5 * 100%);
  --star-size: 30px;
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

export const Styles = styled.input`
appearance: none;
outline: none;
background: #7c7c7c;
height: 5px;
border-radius: 1em;
`;

export const RateSpace = styled.label`
> * {margin-left:1em;}
`;

export const StyleSpace = styled.label`
> * { margin-right: 10em;
      margin-top: 1em;
      float:right;}
`;

export const SmallButton = styled.button`
display: flex;
flex-direction: column;
align-items: center;
padding: 6px 14px;
border-radius: 6px;
border: none;
cursor: pointer;

background: #e2e2e2;
box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1), inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.5), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.12);
color: #000;

&:hover {
  opacity: 0.9;
  transform: scale(0.98);
  background: #7c7c7c;
}
`;