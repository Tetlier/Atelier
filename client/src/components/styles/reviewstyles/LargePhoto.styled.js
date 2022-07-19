import styled from 'styled-components';

export const LargePhoto = styled.img`
    max-width: 80%;
    max-height: 80%;
    &:hover {
      box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
    }
    padding-down: 50px;
`;
