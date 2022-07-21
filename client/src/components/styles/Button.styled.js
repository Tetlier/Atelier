import styled from 'styled-components';

export const Button = styled.button`
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

export const SideButton = styled.button`
  display: flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  position: fixed;
  top: 0px;
  right: 0px;

  background: #e2e2e2;
  box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1), inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.5), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.12);
  color: #000;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
    background: #7c7c7c;
  }
`;
