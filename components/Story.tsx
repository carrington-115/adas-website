"use client";
import { colorStyle, textStyles } from "@/styles";
import React from "react";
import styled from "styled-components";

export default function componentName() {
  return (
    <Container>
      <h2
        style={{
          color: colorStyle.primaryColor,
          ...textStyles.bold.headingBold,
        }}
      >
        Our Story
      </h2>
    </Container>
  );
}

const Container = styled.section``;
