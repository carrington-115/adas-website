"use client";
import { HeroComponent } from "@/components";
import styled from "styled-components";
import { textStyles, colorStyle } from "./styles";

export default function Home() {
  return (
    <>
      <Container>
        <HeroComponent
          image="/images/desktop/home-hero.svg"
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
                  width: "40%",
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
`;
