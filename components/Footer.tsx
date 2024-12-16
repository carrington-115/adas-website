"use client";

import { colorStyle, textStyles } from "@/app/styles";
import { pages } from "@/contants";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

const iconsList: { icon: string; link: string }[] = [
  { icon: "/images/icons/twitter.svg", link: "/" },
  { icon: "/images/icons/instagram.svg", link: "/" },
  { icon: "/images/icons/facebook.svg", link: "/" },
  { icon: "/images/icons/linkedin.svg", link: "/" },
  { icon: "/images/icons/whatsapp.svg", link: "/" },
];

export default function componentName() {
  return (
    <Container>
      <section className="inner-container">
        <section className="section-1">
          <div className="top">
            <img src="/images/logo2(white-desktop).png" alt="footer-logo" />
            <div className="inner-section">
              <h3
                style={{
                  color: colorStyle.onPrimaryContainerColor,
                  ...textStyles.medium.titleBold,
                }}
              >
                About ADAS Education
              </h3>
              <p
                style={{
                  color: "black",
                  ...textStyles.regular.bodyBold,
                }}
              >
                “ADAS Education is dedicated to empowering communities in
                Central Africa through education, sustainability, and
                development. We believe in creating opportunities and fostering
                lasting change.”
              </p>
            </div>
          </div>
          <div className="bottom">
            {iconsList.map(({ icon, link }, index) => (
              <a key={index} href={link}>
                <img src={icon} alt="icon" />
              </a>
            ))}
          </div>
        </section>
        <section className="section-2">
          <h2
            style={{
              color: colorStyle.onPrimaryContainerColor,
              ...textStyles.medium.titleBold,
            }}
          >
            Quick Links
          </h2>
          <div className="page-links">
            {pages.map(({ id, link, linkName }) => (
              <Link
                style={{ ...textStyles.regular.bodyBold }}
                key={id}
                href={link}
              >
                {linkName}
              </Link>
            ))}
          </div>
        </section>
        <section className="section-3">
          <h2
            style={{
              color: colorStyle.onPrimaryContainerColor,
              ...textStyles.medium.titleBold,
            }}
          >
            Be Part of the Change
          </h2>
          <ul className="page-links">
            {[
              { id: 1, link: "/", linkName: "Volunteer" },
              { id: 2, link: "/", linkName: "Partner" },
              { id: 3, link: "/", linkName: "Donate" },
            ].map(({ id, link, linkName }) => (
              <li key={id}>
                <Link style={{ ...textStyles.regular.bodyBold }} href={link}>
                  {linkName}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="section-4">
          <h2
            style={{
              color: colorStyle.onPrimaryContainerColor,
              ...textStyles.medium.titleBold,
            }}
          >
            Contact us
          </h2>
          <ul className="page-links">
            {[
              {
                id: 1,
                icon: "/images/icons/email.svg",
                linkName: "contact@adaseducation.org",
              },
              {
                id: 2,
                icon: "/images/icons/phone.svg",
                linkName: "+123 456 7890",
              },
              {
                id: 3,
                icon: "/images/icons/location.svg",
                linkName: "123 Community Road, Central Africa",
              },
            ].map(({ id, icon, linkName }) => (
              <li key={id}>
                <img src={icon} alt="contact-icon" />
                <p>{linkName}</p>
              </li>
            ))}
          </ul>
        </section>
      </section>
      <section
        className="policy"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ color: "gray", ...textStyles.regular.bodyBold }}>
          © 2024 ADAS Education. All rights reserved.
        </p>
      </section>
    </Container>
  );
}

const Container = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 0px;
  gap: 40px;
  background-color: ${colorStyle.primaryContainerColor};
  .inner-container {
    width: 100%;
    padding: 0px 35px;
    gap: 48px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @media (min-width: 320px) and (max-width: 599px) {
      flex-direction: column;
    }
    .section-1 {
      width: 40%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      .top {
        display: flex;
        width: 100%;
        gap: 20px;
        align-items: center;
        .inner-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 5px;
        }
        @media (min-width: 320px) and (max-width: 599px) {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
      }
      .bottom {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      @media (min-width: 320px) and (max-width: 599px) {
        width: 90%;
      }
    }
    .section-2,
    .section-3,
    .section-4 {
      width: 20%;
      display: flex;
      flex-direction: column;
      .page-links,
      ul {
        display: flex;
        flex-direction: column;
        gap: 5px;
        li {
          display: flex;
          align-items: flex-start;
          gap: 5px;
        }
      }
      @media (min-width: 320px) and (max-width: 599px) {
        width: 90%;
      }
    }
    .section-3 {
      width: 20%;
      @media (min-width: 320px) and (max-width: 599px) {
        width: 90%;
      }
    }
    .section-4 {
      width: 20%;
      @media (min-width: 320px) and (max-width: 599px) {
        width: 90%;
      }
    }
  }
`;
