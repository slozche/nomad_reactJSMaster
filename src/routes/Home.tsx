import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Loader from "../components/Loader";
import { fetchCoins } from "../api";

const Container = styled.section`
  padding: 0 20px;
  max-width: 480px;
  margin: auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 48px;
`;

const Link = styled.div`
  transition: color 0.2s ease-in;
  padding: 20px;
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

const CoinList = styled.ul``;

const Coin = styled.li`
  background: white;
  color: ${(props) => props.theme.textColor};
  border-radius: 15px;
  margin-bottom: 10px;
  &:hover {
    div {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

interface ICoins {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Home = () => {
  const navigate = useNavigate();

  // 리액트 쿼리를 사용한 API 호출
  const { isLoading, data } = useQuery<ICoins[]>("allCoins", fetchCoins);

  return (
    <Container>
      <Header>
        <Title>Coins</Title>
      </Header>
      {isLoading ? (
        <Loader />
      ) : (
        <CoinList>
          {data?.map((coin) => (
            <Coin key={coin.id}>
              <Link
                onClick={() =>
                  navigate(`/${coin.id}`, {
                    state: {
                      name: coin.name,
                    },
                  })
                }
              >
                <Img
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
};

export default Home;
