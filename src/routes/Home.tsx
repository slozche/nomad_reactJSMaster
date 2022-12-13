import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Loader from "../components/Loader";
import { fetchCoins } from "../api";

const Container = styled.section`
  padding: 0 40px;
`;

const Title = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: ${(props) => props.theme.textColor};
    font-size: 48px;
    font-weight: bold;
  }
`;

const Link = styled.div`
  width: 140px;
  height: 140px;
  padding: 10px;
  border-radius: 15px;
  transition: color 0.2s ease-in;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.subBgColor};
  color: ${(props) => props.theme.textColor};
  font-weight: bold;

  p {
    text-align: center;
  }
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-bottom: 18px;
`;

const CoinList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const Coin = styled.li`
  margin: 10px;
  cursor: pointer;

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
      <Title>
        <h1>Coins</h1>
      </Title>
      {isLoading ? (
        <Loader />
      ) : (
        <CoinList>
          {data?.map((coin) => (
            <Coin
              key={coin.id}
              onClick={() =>
                navigate(`/${coin.id}`, {
                  state: {
                    name: coin.name,
                  },
                })
              }
            >
              <Link>
                <Img
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                />
                <p>{coin.name}</p>
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
};

export default Home;
