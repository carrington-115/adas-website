"use client";

import HeroComponent from "./HeroComponent";
import HeaderLink from "./HeaderLink";
import HamburgerMenu from "./HamburgerMenu";
import Impact from "./Impact";
import ImpactAnalysis from "./ImpactAnalysis";
import Change from "./Change";
import Footer from "./Footer";

import dynamic from "next/dynamic";

const Header = dynamic(() => import("./Header"), { ssr: false });

export {
  HeroComponent,
  HeaderLink,
  Header,
  HamburgerMenu,
  Impact,
  ImpactAnalysis,
  Change,
  Footer,
};
