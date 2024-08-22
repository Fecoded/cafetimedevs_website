import ExportedImage from "next-image-export-optimizer";
import { Container, Text, Grid, Card, Link } from "@nextui-org/react";
import { DivderIcon } from "../../assets/svg";
import { Box } from "./styled";
import styles from "../../styles/Home.module.css";
import { Image as CustomImage } from "../../assets/image";
import { list } from "./utils";

const Project = () => {


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
              fontFamily: "$quicksand",
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
                fontFamily: "$quicksand",
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
              fontFamily: "$quicksand",
              paddingTop: 30,
              paddingBottom: 30,
              lineHeight: "$sm",
              fontWeight: "$light",

              "@lg": {
                fontSize: "$lg",
              },
            }}
          >
            Explore the diverse range of software projects we've engineered, <br /> each crafted with precision and innovation.
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
                      css={{ fontFamily: "$quicksand", fontWeight: "$semibold", lineHeight: "$1xl" }}
                    >
                      {item.title}
                    </Text>
                    <Text
                      css={{
                        fontFamily: "$quicksand",
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
                {item.link &&
                
                <Card.Footer>
                  <Link
                    href={item.link}
                    target="_blank"
                    
                    css={{
                      fontFamily: "$quicksand",
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
                }
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      </Container>
    </Box>
  );
};

export default Project;
