import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Container = styled.section`
  width: 240px;
  height: 100vh;
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: ${(props) => props.theme.subBgColor};
`;

const LinkWrap = styled.ul``;

const LinkItem = styled.li`
  padding: 15px;
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
`;

const Sidebar = () => {
  return (
    <Container>
      <LinkWrap>
        <LinkItem>
          <Link to={"/"}>
            <Logo>
              <figure></figure>
              <p> HOME</p>
            </Logo>
          </Link>
        </LinkItem>
        <LinkItem>
          <Link to={"/"}>
            <Logo>
              <figure></figure>
              <p> DETAIL</p>
            </Logo>
          </Link>
        </LinkItem>
      </LinkWrap>
    </Container>
  );
};

export default Sidebar;
