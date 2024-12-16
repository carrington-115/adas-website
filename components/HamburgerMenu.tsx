"use client";

import { colorStyle } from "@/styles";
import { pages } from "@/contants";
import React from "react";
import styled from "styled-components";
import HeaderLink from "./HeaderLink";

interface types {
  show: boolean;
}

export default function componentName({ show }: types) {
  return (
    <Container
      style={{ transform: show ? "translateX(100%)" : "translatex(0%)" }}
    >
      <section>
        {pages.map(({ link, linkName, id }) => (
          <HeaderLink
            scrolled={true}
            key={id}
            link={link}
            linkName={linkName}
          />
        ))}
      </section>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  z-index: 100;
  background-color: ${colorStyle.onPrimaryColor};
  width: 100vw;
  height: 90%;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  padding: 20px 16px 0px 16px;
  transition: all 0.25s 250ms ease-in;

  @media (min-width: 600px) {
    display: none;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;
