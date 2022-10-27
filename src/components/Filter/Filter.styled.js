import styled from 'styled-components';

export const FieldLabel = styled.label`
  font-weight: 500;
  font-size: 18px;
`;

export const FieldInput = styled.input`
  padding: 10px 0 10px 15px;
  width: 100%;

  display: flex;
  align-items: center;

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
