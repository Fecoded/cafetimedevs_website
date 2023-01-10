import { Card, Container, Text } from "@nextui-org/react";
import {
  BrandingIcon,
  ITConsultingIcon,
  ProductEngineeringIcon,
  UIUXIcon,
  WebMobileIcon,
} from "../../assets/svg";
import { Flex } from "../header/layout/styled";
import { Box, CardSection } from "./styled";
import styles from "../../styles/Home.module.css";

const Service = () => {
  return (
    <Box id="services">
      <Container md>
        <Flex
          css={{
            display: "block",

            "@sm": {
              display: "flex",
            },
            "@lg": {
              display: "flex",
            },
          }}
        >
          <CardSection
            css={{
              display: "block",

              "@sm": {
                display: "flex",
              },
              "@lg": {
                display: "flex",
              },
            }}
          >
            <div>
              <Card
                css={{
                  mw: "100%",
                  paddingLeft: "$12",
                  paddingRight: "$12",
                  paddingTop: "$15",
                  paddingBottom: "$15",
                  "@sm": {
                    mw: "250px",
                  },
                  "@lg": {
                    mw: "250px",
                  },
                }}
              >
                <WebMobileIcon />
                <Text
                  weight="bold"
                  css={{
                    fontFamily: "$poppins",
                    lineHeight: "$sm",
                    paddingTop: "$8",
                    fontSize: "$lg",
                  }}
                >
                  Web & Mobile Development
                </Text>
                <Text
                  css={{
                    fontFamily: "$poppins",
                    lineHeight: "$sm",
                    paddingTop: "$8",
                    color: "$textSecondary",
                    fontSize: "$sm",
                  }}
                >
                  Standard web & mobile application with super fast and flexible
                  interface.
                </Text>
              </Card>
              <Card
                css={{
                  mw: "100%",
                  paddingLeft: "$12",
                  paddingRight: "$12",
                  paddingTop: "$15",
                  paddingBottom: "$15",
                  marginTop: "$10",

                  "@sm": {
                    mw: "250px",
                  },
                  "@lg": {
                    mw: "250px",
                  },
                }}
              >
                <UIUXIcon />
                <Text
                  weight="bold"
                  css={{
                    fontFamily: "$poppins",
                    lineHeight: "$sm",
                    paddingTop: "$8",
                    fontSize: "$lg",
                  }}
                >
                  Ui/Ux Design
                </Text>
                <Text
                  css={{
                    fontFamily: "$poppins",
                    lineHeight: "$sm",
                    paddingTop: "$8",
                    color: "$textSecondary",
                    fontSize: "$sm",
                  }}
                >
                  Professional UI designs that matches user's needs alongside
                  providing a smooth UX interaction and transition across web
                  and mobile pages.
                </Text>
              </Card>
              <Card
                css={{
                  mw: "100%",
                  paddingLeft: "$12",
                  paddingRight: "$12",
                  paddingTop: "$15",
                  paddingBottom: "$15",
                  marginTop: "$10",
                  zIndex: 2,

                  "@sm": {
                    mw: "250px",
                  },
                  "@lg": {
                    mw: "250px",
                  },
                }}
              >
                <ITConsultingIcon />
                <Text
                  weight="bold"
                  css={{
                    fontFamily: "$poppins",
                    lineHeight: "$sm",
                    paddingTop: "$8",
                    fontSize: "$lg",
                  }}
                >
                  IT Consulting
                </Text>
                <Text
                  css={{
                    fontFamily: "$poppins",
                    lineHeight: "$sm",
                    paddingTop: "$8",
                    color: "$textSecondary",
                    fontSize: "$sm",
                  }}
                >
                  We help you to achieve your business goals with technology by
                  testing and making sure your proposed or present solution is
                  seamless.
                </Text>
              </Card>
            </div>
            <div className={styles.serviceSection}>
              <Card
                css={{
                  mw: "100%",
                  paddingLeft: "$12",
                  paddingRight: "$12",
                  paddingTop: "$15",
                  paddingBottom: "$15",

                  "@sm": {
                    mw: "250px",
                  },
                  "@lg": {
                    mw: "250px",
                  },
                }}
              >
                <BrandingIcon />
                <Text
                  weight="bold"
                  css={{
                    fontFamily: "$poppins",
                    lineHeight: "$sm",
                    paddingTop: "$8",
                    fontSize: "$lg",
                  }}
                >
                  Company Branding
                </Text>
                <Text
                  css={{
                    fontFamily: "$poppins",
                    lineHeight: "$sm",
                    paddingTop: "$8",
                    color: "$textSecondary",
                    fontSize: "$sm",
                  }}
                >
                  Satisfying and attractive designs such as logo, colour,
                  symbols, brand, voice, etc for effective communication in
                  business for your customers, shoppers, social media followers
                  or mere passer-by.
                </Text>
              </Card>
              <Card
                css={{
                  mw: "100%",
                  paddingLeft: "$12",
                  paddingRight: "$12",
                  paddingTop: "$15",
                  paddingBottom: "$15",
                  marginTop: "$10",

                  "@sm": {
                    mw: "250px",
                  },
                  "@lg": {
                    mw: "250px",
                  },
                }}
              >
                <ProductEngineeringIcon />
                <Text
                  weight="bold"
                  css={{
                    fontFamily: "$poppins",
                    lineHeight: "$sm",
                    paddingTop: "$8",
                    fontSize: "$lg",
                  }}
                >
                  Product Engineering
                </Text>
                <Text
                  css={{
                    fontFamily: "$poppins",
                    lineHeight: "$sm",
                    paddingTop: "$8",
                    color: "$textSecondary",
                    fontSize: "$sm",
                  }}
                >
                  Well engaged process of innovating, designing, developing,
                  testing and deploying your software product.
                </Text>
              </Card>
            </div>
          </CardSection>
          <div className={styles.service}>
            <Text
              css={{
                fontWeight: "$semibold",
              }}
            >
              Our Service
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
              We take full responsibility of the
              <span className={styles.serviceText}> look and feel </span>
              of your Business.
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
          </div>
        </Flex>
      </Container>
    </Box>
  );
};

export default Service;
