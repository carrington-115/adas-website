"use client";
import React from "react";
import styled from "styled-components";

interface ButtonElementType {
  name: string;
  icon: boolean;
  iconElement?: React.ReactNode;
  type: string;
  textStyle: any;
}

export default function componentName({
  name,
  icon,
  iconElement,
  type,
  textStyle,
}: ButtonElementType) {
  return (
    <Container style={{}}>
      <p style={textStyle}>{name}</p>
      {icon && <span>{iconElement}</span>}
    </Container>
  );
}

const Container = styled.a`
  display: flex;
`;
