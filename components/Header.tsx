"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { colorStyle, textStyles } from "@/app/styles";
import HeaderLink from "./HeaderLink";
import { pages } from "@/contants";
import { HamburgerMenu } from ".";

export default function componentName() {
  const [menuClicked, setMenuClicked] = useState<boolean>(false);

  return (
    <Container
      style={{
        backgroundColor: menuClicked
          ? colorStyle.onPrimaryColor
          : "transparent",
      }}
    >
      <HamburgerMenu show={!menuClicked} />
      <div>
        <img
          src={"/images/logo(white-desktop).svg"}
          alt="logo"
          className="logo-desktop"
        />
        <img
          src={
            menuClicked
              ? "/images/mobile-header.svg"
              : "/images/logo(white-mobile).svg"
          }
          alt="mobile-logo"
          className="logo-mobile"
        />
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
      <button onClick={() => setMenuClicked(!menuClicked)} className="menu-btn">
        <span className={menuClicked ? "top-clicked" : `top`} />
        <span className={menuClicked ? "bottom-clicked" : `bottom`} />
      </button>
    </Container>
  );
}

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

  .logo-mobile {
    @media (min-width: 600px) {
      display: none;
      transition: all 1s 250s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
  }

  .logo-desktop {
    @media (min-width: 320px) and (max-width: 599px) {
      display: none;
    }
  }
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    @media (min-width: 320px) and (max-width: 599px) {
      display: none;
    }
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
    @media (min-width: 320px) and (max-width: 599px) {
      display: none;
    }
  }

  .menu-btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    fill: ${colorStyle.onPrimaryColor};
    padding: 20px 15px;
    gap: 10px;
    outline: none;
    transition: all 1s 250s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    .top,
    .bottom,
    .top-clicked,
    .bottom-clicked {
      width: 48px;
      height: 3px;
      background-color: white;
    }

    .top-clicked,
    .bottom-clicked {
      background-color: ${colorStyle.primaryColor};
      transform: rotate(0deg);
      transition: all 1s 0.01s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    .top-clicked {
      transform: rotate(45deg);
    }
    .bottom-clicked {
      transform: rotate(-45deg);
    }
  }
`;
