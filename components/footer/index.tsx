import { Card, Container, Spacer, Text } from "@nextui-org/react";
import ExportedImage from "next-image-export-optimizer";
import { Box, Flex } from "../header/layout/styled";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.bgFooter}>
      <Container md>
        <Flex
          css={{
            display: "block",
            paddingTop: "$20",
            "@lg": { display: "flex" },
          }}
        >
          <Box
            css={{
              display: "flex",
              justifyContent: "center",

              "@lg": {
                justifyContent: "flex-start",
              },
            }}
          >
            <ExportedImage
              src="/assets/cafetimelogofooter.png"
              alt="facebook"
              width={229}
              height={40.49}
            />
          </Box>
         
          <Box>
            <Box
              css={{
                display: "flex",
                justifyContent: "center",
                paddingTop: 20,

                "@lg": {
                  justifyContent: "flex-start",
                  paddingTop: 0,
                },
              }}
            >
              <ExportedImage
                src="/assets/instagram.png"
                alt="instagram"
                width={20}
                height={20}
              />
              <Spacer />
              <ExportedImage
                src="/assets/facebook.png"
                alt="facebook"
                width={20}
                height={20}
              />
              <Spacer />
              <ExportedImage
                src="/assets/linkedin.png"
                alt="linkedin"
                width={20}
                height={20}
              />
            </Box>
          </Box>
        </Flex>
        <Text
          className={styles.textWhite}
          css={{
            fontFamily: "$quicksand",
            textAlign: "center",
            paddingTop: "$10",

            "@lg": {
              textAlign: "end",
              paddingTop: "$0",
            },
          }}
        >
          Support: Cafetimedevs@gmail.com
        </Text>
        <Spacer />
        <div className={styles.borderLine}></div>
        <Text
          className={styles.textWhite}
          css={{
            fontFamily: "$quicksand",
            color: "$white",
            textAlign: "center",
            paddingTop: "$5",
          }}
        >
          2024 Cafetimedevs. All copyrights reserved.
        </Text>
      </Container>
    </div>
  );
};
