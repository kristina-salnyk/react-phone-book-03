import styled from 'styled-components';

export const FieldLabel = styled.label`
  padding: 10px 0 10px 8px;
  position: absolute;
  top: 0;
  left: 0;
  width: 75px;
  height: 100%;

  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;

  font-weight: 500;
  font-size: 14px;

  display: flex;
  align-items: center;

  color: var(--btn-text-color);
  background: var(--primary-btn-bg);
  box-shadow: var(--btn-shadow);
  letter-spacing: 0.05em;
`;

export const Field = styled.div`
  position: relative;
  margin: 10px 0;
`;

export const FieldInput = styled.input`
  padding: 10px 0 10px 15px;
  width: 100%;

  display: flex;
  align-items: center;
  text-indent: 70px;

  font-weight: 500;
  font-size: 14px;
  background: var(--primary-input-bg-color);
  outline-color: var(--input-outline-bg);
  border: 0;
  border-radius: 3px;

  transition: background-color 0.3s ease-in-out;

  &::selection {
    background-color: var(--selection-bg-color);
  }

  &:focus {
    background-color: var(--primary-accent-input-bg-color);
  }
`;

export const Button = styled.button`
  padding: 10px;

  width: 120px;

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
  box-shadow: var(--btn-shadow);
  transition: background 0.3s ease-in-out;
  cursor: pointer;

  &:hover,
  &:focus {
    background: var(--secondary-accent-btn-bg);
  }
`;
