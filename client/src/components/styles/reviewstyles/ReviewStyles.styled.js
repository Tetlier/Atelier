import styled from 'styled-components';

export const ReviewGrid = styled.div`
border-bottom: 1px #ccc solid;
padding: 10px;
gap: 3em;
`;

export const ReviewRow = styled.div`
display: flex;
`;

export const ReviewCol = styled.div`
flex: ${props=> props.size}
`;

export const ReviewStars = styled.div`
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

export const ReviewArea = styled.div`
inline-size: 40em;
overflow-wrap: break-word;
`;