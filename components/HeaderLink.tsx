"use client";

import styled from "styled-components";
import Link from "next/link";
import { colorStyle } from "@/styles";
import { useState } from "react";

const HeaderLink = ({
  link,
  linkName,
  scrolled,
  action,
}: {
  link: string;
  linkName: string;
  scrolled?: boolean;
  action?: () => void;
}) => {
  return (
    <>
      <LinkElement
        href={link}
        style={{
          color: scrolled ? colorStyle.primaryColor : colorStyle.onPrimaryColor,
        }}
        onClick={action}
      >
        {linkName}
      </LinkElement>
    </>
  );
};

export default HeaderLink;

const LinkElement = styled(Link)`
  display: flex;
  padding: 2.5px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (min-width: 320px) and (max-width: 599px) {
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
