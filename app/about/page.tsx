"use client";
import { HeroComponent } from "@/components";
import React from "react";
import styled from "styled-components";

export default function componentName() {
  return (
    <>
      <Container>
        <HeroComponent
          image="/images/desktop/about-hero.svg"
          imageMobile="/images/mobile/about-hero.svg"
          children={
            <div className="content">
              <h2>Building Futures Rooted in Sustainability and Empowerment</h2>
            </div>
          }
        />
      </Container>
    </>
  );
}

const Container = styled.div`
  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    h2 {
      font-size: 40px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      color: white;
      text-align: center;
      width: 70%;
      @media (min-width: 320px) and (max-width: 599px) {
        width: 90%;
      }
    }
  }
`;
