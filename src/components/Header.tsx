import { Dispatch, SetStateAction } from "react";
import { Switch } from "antd";
import styled from "styled-components";

const Container = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.subBgColor};
`;

const Logo = styled.section`
  display: flex;
  align-items: center;

  figure {
    width: 40px;
    height: 40px;
    margin-right: 8px;
    background: red;
  }
  p {
    font-size: 20px;
    font-weight: bold;
  }
`;

interface headerProp {
  setIsDark: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ setIsDark }: headerProp) => {
  return (
    <Container>
      <Logo>
        <figure></figure>
        <p>SlozcheCoin</p>
      </Logo>

      <Switch
        checkedChildren="Light"
        unCheckedChildren="Dark"
        defaultChecked
        onClick={() => setIsDark((prev) => !prev)}
      />
    </Container>
  );
};

export default Header;
