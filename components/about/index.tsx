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
              }}
            >
              About Us
            </Text>
            <Text
              css={{
                fontWeight: "$bold",
                fontSize: "$2xl",
                fontFamily: "$poppins",
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
              Lorem ipsum dolor sit amet consectetur. Nulla velit elementum
              tellus duis cursus commodo. Luctus egestas vivamus ut ligula
              convallis scelerisque blandit aliquet orci. Nunc fames a arcu
              tincidunt iaculis. Nunc sit venenatis id eu elit vehicula gravida.
              Integer pellentesque odio id fringilla. Morbi sem mauris tempus et
              amet blandit risus
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
