import { Container, Text } from "@nextui-org/react";
import ExportedImage from "next-image-export-optimizer";
import styles from "../../styles/Home.module.css";
import { Image as CustomImage } from "../../assets/image/index";
import { Box } from "./styled";
import { Flex } from "../header/layout/styled";

const About = () => {
  return (
    <div id="about" className={styles.bgAbout}>
      <Container md>
        <Flex
          css={{
            display: "block",

            "@sm": {
              display: "flex",
            },
            "@lg": {
              display: "flex",
              height: "90vh",
            },
          }}
        >
          <Box>
            <Text
              css={{
                fontWeight: "$semibold",
                fontFamily: "$quicksand",
              }}
            >
              About Us
            </Text>
            <Text
              css={{
                fontWeight: "$bold",
                fontSize: "$2xl",
                fontFamily: "$quicksand",
                lineHeight: "$sm",

                "@lg": {
                  fontSize: "$4xl",
                },
              }}
            >
              We pride in developing <br /> fast and
              <span className={styles.aboutText}> user-centered</span>
              <br />
              applications for our clients
            </Text>
            <Text
              css={{
                fontFamily: "$quicksand",
                paddingTop: 30,
                paddingBottom: 30,
                lineHeight: "$md",
                fontWeight: "$light",

                "@lg": {
                  fontSize: "$lg",
                },
              }}
            >
              At the core of our work is a commitment to developing fast, efficient, and user-centered applications that deliver exceptional performance for our clients. We focus on understanding your users' needs, ensuring every product we create is intuitive, responsive, and tailored to meet your business goals. Our expertise allows us to build high-quality applications that not only enhance user experience but also drive success and growth for your business.
            </Text>
          </Box>
          <ExportedImage
            src={CustomImage.AboutImage}
            alt="cafetimedev_about"
            className={styles.aboutImg}
          />
        </Flex>
      </Container>
    </div>
  );
};

export default About;
