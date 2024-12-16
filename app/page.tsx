"use client";
import React from "react";
import { Header, HeroComponent, Impact } from "@/components";
import styled from "styled-components";
import { textStyles, colorStyle } from "./styles";

export default function Home() {
  // const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 599);

  return (
    <>
      <Container>
        <Header />
        <HeroComponent
          image="/images/desktop/home-hero.svg"
          imageMobile="/images/mobile/home-hero.svg"
          children={
            <div className="hero-content">
              <h1
                style={{
                  color: colorStyle.onPrimaryColor,
                  ...textStyles.bold.headingBold,
                  textAlign: "center",
                }}
              >
                Empowering Communities Through Education, Development, and
                Sustainability
              </h1>
              <p
                style={{
                  color: colorStyle.onPrimaryColor,
                  ...textStyles.regular.bodyBold,
                  textAlign: "center",
                }}
              >
                Join us in shaping a brighter future for Central Africa through
                education and community-driven initiatives.
              </p>
              <nav className="btn-navigation">
                <a
                  href="#"
                  className="get-involved"
                  style={{
                    ...textStyles.medium.bodyBold,
                  }}
                >
                  Get involved
                </a>
                <a
                  href="#"
                  className="learn-more"
                  style={{
                    ...textStyles.medium.bodyBold,
                    border: "2px solid white",
                  }}
                >
                  Learn more
                </a>
              </nav>
            </div>
          }
        />
        <section className="who-we-are">
          <div className="content">
            <h2
              style={{
                color: colorStyle.primaryColor,
                ...textStyles.bold.headingBold,
              }}
            >
              Who We Are
            </h2>
            <p>
              At ADAS Education, we are committed to empowering communities in
              Central Africa through education, development, and sustainability.
              Our mission is to create lasting impact by facilitating access to
              global learning opportunities, supporting community-driven climate
              action, and nurturing local talent. With a focus on underserved
              regions, we work hand-in-hand with communities to build a
              brighter, more sustainable future through knowledge-sharing,
              capacity-building, and innovative partnerships. Together, we
              transform challenges into opportunities for growth and success.
            </p>
            <button>
              <p>Discover our story</p>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div className="image">
            <img src="/images/desktop/who-we-are.png" alt="who we are" />
          </div>
        </section>
        <Impact />
      </Container>
    </>
  );
}

const Container = styled.div`
  margin: 0;
  padding: 0;
  .hero-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 5px;
    h1 {
      width: 70%;
      @media (min-width: 320px) and (max-width: 599px) {
        width: 90%;
      }
    }
    p {
      width: 40%;
      @media (min-width: 320px) and (max-width: 599px) {
        width: 90%;
      }
    }
    .btn-navigation {
      display: flex;
      align-items: center;
      gap: 80px;
      padding-top: 20px;
      a {
        padding: 10px 40px;
        border-radius: 5px;
        text-decoration: none;
        &:hover {
          color: ${colorStyle.primaryColor};
        }
      }
      .get-involved {
        background-color: ${colorStyle.onPrimaryColor};
        color: ${colorStyle.primaryColor};
        &:hover {
          background-color: ${colorStyle.primaryColor};
          color: ${colorStyle.onPrimaryColor};
        }
      }
      .learn-more {
        color: ${colorStyle.onPrimaryColor};
        background-color: transparent;
        &:hover {
          background-color: ${colorStyle.onPrimaryColor};
          color: ${colorStyle.primaryColor};
        }
      }
    }
  }
  .who-we-are {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 40px 0px;
    border-bottom: 1px solid var(--primary-container-color, #ede5f2);
    .content {
      width: 45%;
      p {
        text-align: justify;
        font-family: Poppins;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        @media (min-width: 320px) and (max-width: 599px) {
          font-size: 16px;
        }
      }
      button {
        display: flex;
        padding: 10px 30px;
        align-items: center;
        gap: 45px;
        border-radius: 100px;
        color: white;
        background: linear-gradient(180deg, #4b0082 0%, #2d004e 100%);
        margin-top: 20px;
      }
      @media (min-width: 320px) and (max-width: 599px) {
        width: 90%;
      }
    }
    .image {
      width: 45%;
      @media (min-width: 320px) and (max-width: 599px) {
        width: 90%;
        margin-top: 20px;
      }
    }
    @media (min-width: 320px) and (max-width: 599px) {
      display: flex;
      flex-direction: column;
    }
  }
`;
