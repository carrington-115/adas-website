"use client";
import { colorStyle, textStyles } from "@/styles";
import React from "react";
import styled from "styled-components";

interface valuesTypes {
  icon: string;
  content: string;
}

const values: valuesTypes[] = [
  {
    icon: "/images/icons/values/community.svg",
    content: "Community Engagement",
  },
  {
    icon: "/images/icons/values/compost.svg",
    content: "Sustainability",
  },
  {
    icon: "/images/icons/values/idea.svg",
    content: "Knowledge Sharing",
  },
  {
    icon: "/images/icons/values/innovation.svg",
    content: "Innovation",
  },
  {
    icon: "/images/icons/values/transparency.svg",
    content: "Integrity & Transparency",
  },
];

export default function componentName() {
  return (
    <Container>
      <h2
        style={{
          ...textStyles.bold.headingBold,
          color: colorStyle.primaryColor,
          textAlign: "center",
        }}
      >
        Our Core Values
      </h2>
      <div className="inner-container">
        {values.map(({ icon, content }, index) => (
          <div className="inner-element" key={index}>
            <img src={icon} alt="element-icon" />
            <p style={{ ...textStyles.regular.titleBold }}>{content}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 110px 67px;
  gap: 40px;
  .inner-container {
    color: ${colorStyle.onPrimaryContainerColor};
    display: flex;
    justify-content: space-between;
    .inner-element {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
  }
`;
