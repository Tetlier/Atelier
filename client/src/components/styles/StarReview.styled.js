import styled from 'styled-components';

const StarReview = styled.div`
  --percent: calc(${({rating}) => rating} / 5 * 100%);
  --star-size: 60px;
  --star-color: #fff;
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

export default StarReview;