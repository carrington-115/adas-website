"use client";

import { colorStyle, textStyles } from "@/styles";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface innerElementType {
  image: string;
  name: string;
  href: string;
}
const elements: innerElementType[] = [
  { image: "/images/desktop/volunteer.png", name: "Volunteer", href: "/" },
  { image: "/images/desktop/partner.png", name: "Partner", href: "/" },
  { image: "/images/desktop/donate.png", name: "Donate", href: "/" },
];

export default function componentName() {
  return (
    <Container>
      <h1
        style={{
          textAlign: "center",
          color: colorStyle.primaryColor,
          ...textStyles.bold.headingBold,
        }}
      >
        Be Part of the Change
      </h1>
      <div className="inner-container">
        {elements.map(({ image, name, href }, index) => (
          <InnerElement key={index} image={image} name={name} href={href} />
        ))}
      </div>
    </Container>
  );
}

function InnerElement({ image, name, href }: innerElementType) {
  return (
    <InnerElementContainer href={href}>
      <img src={image} alt="image" />
      <h4
        style={{
          color: colorStyle.primaryColor,
          ...textStyles.bold.titleBold,
        }}
      >
        {name}
      </h4>
    </InnerElementContainer>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 50px;
  padding: 80px 0px;
  .inner-container {
    display: flex;
    justify-content: space-between;
    width: 70%;
    align-items: flex-start;
    @media (min-width: 320px) and (max-width: 599px) {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
  }
`;

const InnerElementContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
