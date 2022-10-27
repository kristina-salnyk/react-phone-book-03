import styled from 'styled-components';

export const Item = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: var(--secondary-box-shadow);

  & svg {
    margin-right: 10px;
    color: var(--icon-fill-color);
  }
`;

export const Button = styled.button`
  padding: 10px;
  width: 40px;
  float: right;
  display: flex;
  justify-content: center;

  border: none;
  border-radius: 3px;

  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.05em;

  color: var(--btn-text-color);
  background: var(--primary-btn-bg);
  transition: background 0.3s ease-in-out;
  cursor: pointer;

  & svg {
    margin: 0;
  }

  &:hover,
  &:focus {
    background: var(--secondary-accent-btn-bg);
  }
`;
