import ExportedImage from "next-image-export-optimizer";
import { Container, Text, Grid, Card, Link } from "@nextui-org/react";
import { DivderIcon } from "../../assets/svg";
import { Box } from "./styled";
import styles from "../../styles/Home.module.css";
import { Image as CustomImage } from "../../assets/image";

const Project = () => {
  const list = [
    {
      id: 1,
      title: "3rdRetail",
      body: "3rdretail Africa is a B2B marketplace that connects Brand to resellers and vise versa.",
      imageUrl: "/assets/3rdRetail.png",
      link: "https://3rdretail.com",
    },
    {
      id: 2,
      title: "Frontline  Builders",
      body: "Frontline Builders is a trusted name in delivering best in class corporate, residential and fit for purpose properties.",
      imageUrl: "/assets/FrontlineBuilders.png",
      link: "https://frontlinebuilderslimited.com",
    },
    {
      id: 2,
      title: "Ogasolo",
      body: "Ogasolo is a web application for SME’s to manage day to day business activities.",
      imageUrl: "/assets/Ogasolo.png",
      link: "https://oga.ogaoslo.cafetimedevs.com",
    },
  ];

  return (
    <Box
      css={{
        position: "relative",
        marginBottom: "$10",
      }}
    >
      <div id="projects" className={styles.dividerStyle}>
        <DivderIcon />
        <Box
          css={{
            display: "none",
            position: "absolute",
            right: 0,
            bottom: "35rem",

            "@md": {
              display: "block",
            },
            "@lg": {
              display: "block",
            },
          }}
        >
          <ExportedImage src={CustomImage.Icon} alt="icon" width={400} />
        </Box>
      </div>
      <Container md>
        <Box
          css={{
            maxWidth: "$8xl",
          }}
        >
          <Text
            css={{
              fontWeight: "$semibold",
              paddingTop: 30,
            }}
          >
            Projects
          </Text>
          <Text
            css={{
              fontWeight: "$bold",
              fontSize: "$2xl",
              fontFamily: "$poppins",
              lineHeight: "$sm",

              "@lg": {
                fontSize: "$3xl",
              },
            }}
          >
            Projects we’ve{" "}
            <Text
              className={styles.greenProject}
              css={{
                fontWeight: "$bold",
                fontSize: "$2xl",
                fontFamily: "$poppins",
                lineHeight: "$sm",

                "@lg": {
                  fontSize: "$3xl",
                },
              }}
            >
              Engineered
            </Text>
          </Text>
          <Text
            css={{
              fontFamily: "$poppins",
              paddingTop: 30,
              paddingBottom: 30,
              lineHeight: "$sm",
              fontWeight: "$light",

              "@lg": {
                fontSize: "$lg",
              },
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Nulla velit elementum tellus
            duis cursus commodo. Luctus egestas vivamus ut ligula
          </Text>
        </Box>

        <Grid.Container gap={3} justify="flex-start">
          {list.map((item) => (
            <Grid xs={12} sm={6} lg={4} key={item.id}>
              <Card isPressable>
                <Card.Body css={{ p: 8, h: 150 }}>
                  <Card.Image
                    src={item.imageUrl}
                    objectFit="cover"
                    width="100%"
                    height={500}
                    alt={item.title}
                    style={{ borderRadius: 5 }}
                  />
                </Card.Body>
                <Card.Body css={{ justifyItems: "flex-start" }}>
                  <Box>
                    <Text
                      css={{ fontFamily: "$poppins", fontWeight: "$semibold" }}
                    >
                      {item.title}
                    </Text>
                    <Text
                      css={{
                        fontFamily: "$poppins",
                        color: "$accents7",
                        fontWeight: "$light",
                        fontSize: "$sm",
                        lineHeight: "$sm",
                        paddingTop: "$5",
                      }}
                    >
                      {item.body}
                    </Text>
                  </Box>
                </Card.Body>
                <Card.Divider />
                <Card.Footer>
                  <Link
                    href={item.link}
                    css={{
                      fontFamily: "$poppins",
                      color: "$ctd_primary_color",
                      fontWeight: "$light",
                      fontSize: "$sm",
                      lineHeight: "$sm",
                      paddingTop: "$5",
                      paddingBottom: "$5",
                    }}
                  >
                    Explore
                  </Link>
                </Card.Footer>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      </Container>
    </Box>
  );
};

export default Project;
