import { Button, Container, Text, useTheme } from "@nextui-org/react";
import ExportedImage from "next-image-export-optimizer";
import { Flex } from "./layout/styled";
import styles from "../../styles/Home.module.css";
import { Image as CustomImage } from "../../assets/image/index";
import { ContactIcon, GetQuoteIcon } from "../../assets/svg";

const Headers = () => {
  const { theme } = useTheme();
  return (
    <div
      id="home"
      style={{
        background: theme?.colors.primary.value,
      }}
    >
      <Container md>
        <Flex
          css={{
            display: "block",
            width: "93vw",
            height: "100vh",

            "@sm": {
              display: "flex",
              height: "90vh",
            },
            "@lg": {
              display: "flex",
              height: "90vh",
            },
          }}
        >
          <div>
            <Text
              css={{
                color: "$textPrimary",
                fontFamily: "$poppins",
                fontWeight: "$bold",
                fontSize: "$4xl",

                "@lg": {
                  fontWeight: "$extrabold",
                  fontSize: "$6xl",
                },
              }}
            >
              Build and Deploy
            </Text>
            <Text
              weight="normal"
              css={{
                color: "$textPrimary",
                fontFamily: "$poppins",
                marginTop: "-20px",
                fontSize: "$4xl",

                "@lg": {
                  marginTop: "-30px",
                  fontSize: "$6xl",
                },
              }}
            >
              Your Dreams
            </Text>
            <div className={styles.flex}>
              <div className={`bg-primary ${styles.withUs}`}></div>
              <Text
                h5
                weight="normal"
                css={{ paddingLeft: 10 }}
                className={styles.withUsMt}
              >
                with us
              </Text>
            </div>
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
            <div className={styles.flex}>
              <Button
                auto
                css={{
                  px: "$5",
                  py: "$5",
                  background: "#3072B9",
                  borderRadius: 5,
                  fontSize: "$sm",
                  fontWeight: "$normal",
                  zIndex: 1,

                  "@lg": {
                    px: "$10",
                    py: "$10",
                    fontSize: "$md",
                  },
                }}
                icon={<ContactIcon />}
              >
                Contact Us
              </Button>
              <Button
                auto
                css={{
                  px: "$7",
                  py: "$7",
                  background: "#ffffff",
                  color: "#3072B9",
                  borderRadius: 5,
                  fontSize: "$sm",
                  marginLeft: 30,
                  fontWeight: "$normal",
                  zIndex: 1,

                  "@lg": {
                    px: "$10",
                    py: "$10",
                    fontSize: "$md",
                  },
                }}
                icon={<GetQuoteIcon />}
              >
                Get Quote
              </Button>
            </div>
          </div>

          <ExportedImage
            src={CustomImage.HeaderImage}
            alt="cafetimedev_header"
            className={styles.headerImg}
          />
        </Flex>
      </Container>
    </div>
  );
};

export default Headers;
