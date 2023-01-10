import React from "react";
import { Box } from "./styled";

import Headers from "..";
import About from "../../about";
import Service from "../../service";
import Project from "../../project";
import { Contact } from "../../contact";
import { Footer } from "../../footer";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      css={{
        maxW: "100%",
      }}
    >
      {children}
      <Headers />
      <About />
      <Service />
      <Project />
      <Contact />
      <Footer />
    </Box>
  );
};
