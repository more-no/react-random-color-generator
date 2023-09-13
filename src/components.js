import styled from '@emotion/styled';

export const Div = styled.div`
  color: black;
  background-color: ${(props) => props.backgroundColor};
  width: 400px;
  height: 200px;
`;

export const Div1 = styled.div`
  color: black;
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
