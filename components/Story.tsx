"use client";
import { colorStyle, textStyles } from "@/styles";
import React from "react";
import styled from "styled-components";

interface storyElementType {
  title: string;
  body: string;
  image: string;
}

const elements: storyElementType[] = [
  {
    image: "/images/desktop/beginning.png",
    title: "Our Beginning: A Vision for Change ",
    body: "In 2009, ADAS was founded as a Civil Society Organization with a clear purpose: to promote community development, facilitate access to education, and open international opportunities for young people in Cameroon and neighboring countries. What started as a small initiative has grown into a transformative force, driven by a commitment to sustainability and empowerment.",
  },
  {
    image: "/images/desktop/journey.png",
    title: "Our Journey: Growing Through Partnerships",
    body: "From our headquarters in Yaoundé and a program office in Bamenda, we have built lasting partnerships with global and local organizations, including the British Council, UNICEF, UK FCDO, IDS Brighton, the Coca-Cola Foundation, and regional councils. These collaborations have enabled us to create meaningful, lasting change across communities in Central Africa.",
  },
];

export default function componentName() {
  return (
    <Container>
      <h2
        style={{
          color: colorStyle.primaryColor,
          ...textStyles.bold.headingBold,
        }}
      >
        Our Story
      </h2>
      <div className="content-section">
        {elements.map(({ image, title, body }, index) => (
          <StoryElement
            title={title}
            image={image}
            body={body}
            key={index + 1}
          />
        ))}
      </div>
    </Container>
  );
}

function StoryElement({ title, body, image }: storyElementType) {
  return (
    <StoryElementContainer>
      <div className="content">
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      <img src={image} alt="story image" />
    </StoryElementContainer>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  h2 {
    margin-left: 32px;
  }
  .content-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px 32px;
    gap: 30px;
  }
`;

const StoryElementContainer = styled.div`
  display: flex;
  gap: 50px;
  @media (min-width: 320px) and (max-width: 599px) {
    flex-direction: column;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    h3 {
      font-size: 36px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      color: ${colorStyle.primaryColor};
      @media (min-width: 320px) and (max-width: 599px) {
        font-size: 24px;
      }
    }
    p {
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: black;
      text-align: justify;
      @media (min-width: 320px) and (max-width: 599px) {
        font-size: 16px;
      }
    }
  }
`;
