"use client";
import React from "react";
import styled from "styled-components";

export default function componentName({
  image,
  children,
}: {
  image: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Container>
        <img src={image} alt="background-image" />
        <div className="children">{children}</div>
      </Container>
    </>
  );
}

const Container = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(45, 0, 78, 0.3) 50.5%
    ),
    linear-gradient(
      180deg,
      rgba(45, 0, 78, 0.4) 8.5%,
      rgba(0, 0, 0, 0) 47.5%,
      rgba(45, 0, 78, 0.4) 81%
    ),
    linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%),
    lightgray 50% / cover no-repeat;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  .children {
    position: absolute;
    bottom: 71px;
    width: 100%;
  }
`;
