"use client";
import { colorStyle, textStyles } from "@/styles";
import React from "react";
import styled from "styled-components";

interface elementType {
  icon: string;
  title: string;
  content: string;
}

const impactList: elementType[] = [
  {
    icon: "/images/icons/solar_power.svg",
    title: "1000+",
    content: "Solar panels installed",
  },
  {
    icon: "/images/icons/school-white.svg",
    title: "Scholarships",
    content: "Multiple International Scholarships Secured",
  },
  {
    icon: "/images/icons/diversity_3.svg",
    title: "50000+",
    content: "Lives made better",
  },
  {
    icon: "/images/icons/award_star.svg",
    title: "Talents",
    content: "Countless Talents Discovered and Developed",
  },
];

export default function componentName() {
  return (
    <Container>
      <img src="/images/desktop/impact.png" alt="impact-image" />
      <div className="container">
        <h2
          style={{
            color: colorStyle.onPrimaryColor,
            ...textStyles.bold.displayBold,
          }}
        >
          Our Impact
        </h2>
        <div className="content-container">
          {impactList.map(({ icon, title, content }, index) => (
            <ImpactElement
              key={index + 1}
              icon={icon}
              title={title}
              content={content}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
function ImpactElement({ icon, title, content }: elementType) {
  return (
    <InnerElement>
      <img src={icon} alt="icon-image" />
      <h3>{title}</h3>
      <p
        style={{
          textAlign: "center",
        }}
      >
        {content}
      </p>
    </InnerElement>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  color: ${colorStyle.onPrimaryColor};
  background-color: ${colorStyle.primaryColor};
  gap: 30px;
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 50px;
    margin-right: 30px;
    gap: 30px;
    h2 {
      margin-left: 30px;
    }
    @media (min-width: 320px) and (max-width: 599px) {
      display: flex;
      align-items: center;
      margin-right: 0px;
    }
    .content-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding: 30px;
      align-items: flex-start;
      gap: 50px;
      @media (min-width: 320px) and (max-width: 599px) {
        justify-content: center;
        column-gap: 30px;
        align-self: center;
      }
    }
  }

  @media (min-width: 320px) and (max-width: 599px) {
    flex-direction: column;
    align-items: center;
  }
`;

const InnerElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 320px) and (max-width: 599px) {
    width: 70%;
  }
  .icon-container {
    width: auto;
    height: auto;
  }
  h3 {
    text-align: center;
    font-size: 34px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media (min-width: 320px) and (max-width: 599px) {
      font-size: 24px;
    }
  }
  p {
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media (min-width: 320px) and (max-width: 599px) {
      font-size: 16px;
    }
  }
  img {
    align-self: "center";
    width: 64px;
    height: 64px;
  }
`;
