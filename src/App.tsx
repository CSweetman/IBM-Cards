import React, { useState } from "react";
import logo from "./logo.svg";
import { cards } from "./data/cardData";
import "./App.css";
import Card from "./Components/Card";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(./files/bg.jpg);
  height: 100vh;
  color: white;
  align-content: flex-start
`;
export const CardsContainer = styled.div`
  padding-top: 3vh;
  display: flex;
  align-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const TextContainer = styled.div`
  flex-grow: 1;
  padding-left: 3vw;
  padding-right: 1vw;
  padding-top: 1vh;
`

export const titleSpace = styled.div`
  color: white;

`;

function App() {
  return (
    <Container>
      <TextContainer>
        <h1>Smarter quality management.</h1>
        <h3>The fast track to competitive advantage</h3>
      </TextContainer>
      <CardsContainer>
        {cards.map((card: any) => {
          console.log(card.file);
          return (
            <>
              <Card {...card}></Card>
            </>
          );
        })}
      </CardsContainer>
    </Container>
  );
}

export default App;
