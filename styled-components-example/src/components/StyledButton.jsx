import React from "react";
import styled, { css } from "styled-components";

// react component
// const MyButton = ({ className, children }) => (
//   <button className={className}>{children}</button>
// );

const MyButton = props => <button {...props}></button>;

const StyledButton = styled(MyButton)`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

export default StyledButton;
