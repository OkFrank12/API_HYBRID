import React from "react";
import styled from "styled-components";

interface iBtn {
  title?: string;
  onclick?: () => void;
  bg?: string;
}

const Button: React.FC<iBtn> = ({title, onclick, bg}) => {
  return (
    <div>
      <Container onClick={onclick} bg={`${bg}`}>
        <Main>{title}</Main>
      </Container>
    </div>
  );
};

export default Button;

const Container = styled.div<{
    bg: string;
}>`
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-transform: uppercase;
  border-radius: 3px;
  font-weight: bold;
  font-size: 15px;
  background-color: ${({bg}) => bg};
  cursor: pointer;
`;

const Main = styled.div``;
