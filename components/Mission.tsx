"use client";

import { textStyles } from "@/styles";
import React from "react";
import styled from "styled-components";

interface elementType {
  title: string;
  body: string;
  id: number;
}

const elements: elementType[] = [
  {
    id: 1,
    title: "Mission",
    body: "“To empower communities through access to education, climate action, and sustainable development, ensuring brighter futures for all.”",
  },
  {
    id: 2,
    title: "Vision",
    body: "“A world where every individual has the opportunity to learn, grow, and thrive through knowledge, sustainability, and resilience.”",
  },
];

export default function componentName() {
  return (
    <Container>
      <h1 style={{ ...textStyles.bold.displayBold }}>Our Mission and Vision</h1>
      <div className="inner-container">
        {elements.map(({ title, body, id }) => (
          <MissionElement title={title} body={body} id={id} key={id} />
        ))}
      </div>
    </Container>
  );
}

function MissionElement({ title, body, id }: elementType) {
  return (
    <ElementContainer
      style={{
        borderRight: id == 1 ? "2px solid var(--outline-color, #999)" : "none",
      }}
    >
      <h2 style={{ ...textStyles.bold.headingBold }}>{title}</h2>
      <p style={{ ...textStyles.regular.titleBold }}>{body}</p>
    </ElementContainer>
  );
}

const Container = styled.section`
  background: linear-gradient(180deg, #4b0082 0%, #440076 59.5%, #10001c 100%);
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  color: white;
  gap: 50px;
  margin-top: 25px;
  .inner-container {
    display: flex;
    gap: 50;
  }
`;

const ElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 50px;
  gap: 5px;
  color: white;
`;
