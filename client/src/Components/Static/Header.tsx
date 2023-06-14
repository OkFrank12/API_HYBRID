import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaRunning } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Logo />
          <NavsHolder>
            <Navs to="/">Todo</Navs>
            <Navs to="/auth">Auth</Navs>
          </NavsHolder>
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  font-weight: 700;
  font-size: 20px;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 100%;
`;

const Logo = styled(FaRunning)`
  font-size: 50px;
  color: white;
`;

const NavsHolder = styled.div`
  display: flex;
`;

const Navs = styled(NavLink)`
  text-decoration: none;
  margin: 0 20px;
  color: white;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  text-transform: uppercase;
  height: 30px;
  border-radius: 3px;
  transition: all 350ms;

  :hover {
    background-color: dodgerblue;
    cursor: pointer;
  }

  &.active {
    background-color: dodgerblue;
  }
`;
