import { useRouter } from "next/router";
import { Navbar, Link as CustomLink } from "@nextui-org/react";
import ExportedImage from "next-image-export-optimizer";

import Meta from "../meta";
import { Image as CustomImage } from "../../assets/image/index";
import { Layout } from "./layout";

const Navbars = () => {
  const collapseItems = [
    {
      id: 1,
      link: "#home",
      name: "Home",
    },
    {
      id: 2,
      link: "#services",
      name: "Services",
    },
    {
      id: 3,
      link: "#projects",
      name: "Projects",
    },
    {
      id: 4,
      link: "#about",
      name: "About Us",
    },
    {
      id: 5,
      link: "#contact",
      name: "Contact Us",
    },
  ];

  return (
    <div>
      <Meta />
      <Layout>
        <Navbar variant="sticky" disableShadow maxWidth="fluid">
          <Navbar.Brand
            css={{
              mt: "$10",
              "@sm": {
                ml: "$xl",
              },
              "@lg": {
                ml: "$3xl",
              },
            }}
          >
            <ExportedImage
              src={CustomImage.Logo}
              alt="cafetimedev_logo"
              width={250}
            />
            <Navbar.Toggle
              aria-label="toggle navigation"
              showIn="xs"
              css={{ paddingLeft: 10, paddingBottom: 20 }}
            />
          </Navbar.Brand>
          <Navbar.Content
            enableCursorHighlight
            hideIn="xs"
            variant="underline"
            css={{
              "@sm": {
                mr: "$xl",
              },
              "@lg": {
                mr: "$3xl",
              },
            }}
          >
            <Navbar.Link href="#home">Home</Navbar.Link>
            <Navbar.Link href="#services">Our Services</Navbar.Link>
            <Navbar.Link href="#projects">Project</Navbar.Link>
            <Navbar.Link href="#about">About Us</Navbar.Link>
            <Navbar.Link href="#contact">Contact Us</Navbar.Link>
          </Navbar.Content>

          <Navbar.Collapse>
            {collapseItems.map((item) => (
              <Navbar.CollapseItem key={item.id}>
                <CustomLink
                  color="inherit"
                  css={{
                    minWidth: "100%",
                  }}
                  href={`${item.link}`}
                >
                  {item.name}
                </CustomLink>
              </Navbar.CollapseItem>
            ))}
          </Navbar.Collapse>
        </Navbar>
      </Layout>
    </div>
  );
};

export default Navbars;
