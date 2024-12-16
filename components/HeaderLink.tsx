"use client";

import styled from "styled-components";
import Link from "next/link";
import { colorStyle, textStyles } from "@/app/styles";

const HeaderLink = ({
  link,
  linkName,
  scrolled,
}: {
  link: string;
  linkName: string;
  scrolled?: boolean;
}) => {
  return (
    <>
      <LinkElement
        href={link}
        style={{
          color: scrolled ? colorStyle.primaryColor : colorStyle.onPrimaryColor,
          ...(scrolled
            ? textStyles.medium.titleBold
            : textStyles.regular.bodyBold),
        }}
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
`;
