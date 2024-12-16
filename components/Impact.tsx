"use client";

import { colorStyle, textStyles } from "@/app/styles";
import React from "react";
import styled from "styled-components";

interface elementType {
  icon: string;
  title: string;
  content: string;
}

const programsList: elementType[] = [
  {
    icon: "/images/icons/school.svg",
    title: "Education Services",
    content: "Creating access to global learning opportunities.",
  },
  {
    icon: "/images/icons/compost.svg",
    title: "Climate Action & Sustainability",
    content: "Promoting sustainable development in Central Africa.",
  },
  {
    icon: "/images/icons/sports_soccer.svg",
    title: "Premier Skills Football",
    content: "Developing football talents to reach their full potential.",
  },
  {
    icon: "/images/icons/humidity_mid.svg",
    title: "WASH Services",
    content: "Ensuring access to clean water and sanitation",
  },
];

export default function componentName() {
  return (
    <Container>
      <h2
        style={{
          color: colorStyle.primaryColor,
        }}
      >
        Our Impactful Programs
      </h2>
      <div className="inner-container">
        {programsList.map(({ icon, title, content }, index) => (
          <ImpactElement
            icon={icon}
            title={title}
            content={content}
            key={index + 1}
          />
        ))}
      </div>
      <button>Explore all Programs</button>
    </Container>
  );
}

function ImpactElement({ icon, title, content }: elementType) {
  return (
    <InnerElement>
      <img src={icon} alt="icon-image" />
      <h3
        style={{
          color: colorStyle.primaryColor,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          color: "black",
          ...textStyles.regular.bodyBold,
          textAlign: "center",
        }}
      >
        {content}
      </p>
    </InnerElement>
  );
}

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0px;
  gap: 50px;
  .inner-container {
    display: flex;
    width: 90%;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;

    @media (min-width: 320px) and (max-width: 599px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  h2 {
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media (min-width: 320px) and (max-width: 599px) {
      font-size: 36px;
    }
  }
  button {
    padding: 10px 100px;
    border-radius: 100px;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background-color: ${colorStyle.primaryColor};
    color: ${colorStyle.onPrimaryColor};
  }
`;

const InnerElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .icon-container {
    width: auto;
    height: auto;
  }
  h3 {
    text-align: center;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media (min-width: 320px) and (max-width: 599px) {
      font-size: 24px;
    }
  }
  img {
    align-self: "center";
  }
`;
