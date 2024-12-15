"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { colorStyle, textStyles } from "@/app/styles";

interface linkElementType {
  id: number;
  link: string;
  linkName: string;
}
const pages: linkElementType[] = [
  { id: 1, link: "/", linkName: "Home" },
  { id: 2, link: "/about", linkName: "About us" },
  { id: 3, link: "/programmes", linkName: "Programmes" },
  { id: 4, link: "/impact", linkName: "Impact" },
  { id: 5, link: "/get-involved", linkName: "Get involved" },
  { id: 6, link: "/contact", linkName: "Contact us" },
];

export default function componentName() {
  return (
    <Container>
      <div>
        <img src="/images/logo(white-desktop).svg" alt="logo" />
      </div>
      <nav>
        {pages.map(({ id, link, linkName }) => (
          <HeaderLink key={id} link={link} linkName={linkName} />
        ))}
      </nav>
      <div className="header-alt">
        <button
          style={{
            ...textStyles.regular.bodyBold,
          }}
        >
          Donate
        </button>
      </div>
    </Container>
  );
}

const HeaderLink = ({ link, linkName }: { link: string; linkName: string }) => {
  return (
    <>
      <LinkElement
        href={link}
        style={{
          color: colorStyle.onPrimaryColor,
          ...textStyles.regular.bodyBold,
        }}
      >
        {linkName}
      </LinkElement>
    </>
  );
};

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  padding: 10px 32px;
  gap: 60px;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  left: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  .header-alt {
    button {
      display: flex;
      padding: 5px 22px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      background-color: ${colorStyle.primaryContainerColor};
      color: ${colorStyle.onPrimaryContainerColor};
      border-radius: 100px;
      &:hover {
        font-weight: bold;
      }
    }
  }
`;

const LinkElement = styled(Link)`
  display: flex;
  padding: 2.5px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-decoration: none;
`;
