import styled from 'styled-components';

export const MetaGrid = styled.div`
display: flex;
`;

export const MetaRow = styled.div`
text-align: center;
`;

export const MetaCol = styled.div`
flex: ${props=> props.size}
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