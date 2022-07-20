import styled from 'styled-components';

export const ScrollList = styled.div`
  max-height: 600px;
  overflow-y: auto;
`;

export const QorATitle = styled.div`
  padding: 20px 10px 0px 0px;
  display: flex;
`;

export const QAside = styled.aside`
  font-size: 0.875em;
  color: #464646;
  float: right;
  width: 30%;
`;

export const QuestionBody = styled.div`
  float: left;
  width: 67.5%;
  margin: 0 2.5% 0 0;
`;

export const LinkHover = styled.span`
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: red;
  };
`;

export const ClickedLink = styled.span`
  color: #6E6D70;
  font-weight: bold;
`;

export const AnswerStyle = styled.div`
  padding: 0px 0px 10px 15px;
`;

export const AnswerFooter = styled.div`
  font-size: 0.875em;

`;

export const LoadMore = styled.div`
  margin: 0px 0px 0px 30px;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.8em;
  width: max-content;
`;

export const SearchStyle = styled.div`
  padding: 20px 0px 0px 0px;
`;

export const SearchEntry = styled.input`
  padding: 5px;
  height: 50px;
  font-size: 1em;
  width: 95%;
`;