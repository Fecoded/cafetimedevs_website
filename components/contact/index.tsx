import {
  Button,
  Card,
  Container,
  Grid,
  Input,
  Spacer,
  Text,
  Textarea,
} from "@nextui-org/react";
import ExportedImage from "next-image-export-optimizer";
import { Box } from "../header/layout/styled";
import styles from "./contact.module.css";

export const Contact = () => {
  return (
    <div id="contact" className={styles.bg_contact}>
      <Container md>
        <Box
          css={{
            paddingTop: "$32",
            display: "flex",
            paddingBottom: "$32",
          }}
        >
          <Grid.Container gap={2} justify="center">
            <Grid
              xs={12}
              md={5}
              css={{
                "@lg": {
                  mt: "$20",
                },
              }}
            >
              <Box>
                <ExportedImage
                  src="/assets/email.png"
                  alt="email"
                  width={50}
                  height={50}
                />
                <Text
                  css={{
                    fontSize: "$sm",
                    fontWeight: "$medium",
                    fontFamily: "$poppins",
                  }}
                >
                  Contact
                </Text>
                <Text
                  css={{
                    fontSize: "$3xl",
                    fontWeight: "$semibold",
                    fontFamily: "$poppins",
                    lineHeight: "$sm",
                  }}
                >
                  We want to <br /> hear from{" "}
                  <span className={styles.contactText}>you.</span>
                </Text>
                <Text
                  css={{
                    fontFamily: "$poppins",
                    fontWeight: "$light",
                    lineHeight: "$sm",
                    paddingTop: "$10",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur.
                  <br /> Nulla velit elementum tellus duis cursus <br />{" "}
                  commodo. Luctus egestas vivamus ut ligula
                </Text>
              </Box>
            </Grid>

            <Grid xs={12} lg={6}>
              <Card css={{ p: "$6" }}>
                <Card.Body>
                  <Input
                    size="xl"
                    fullWidth={true}
                    clearable
                    placeholder="Please enter name"
                  />
                  <Spacer />
                  <Input
                    size="xl"
                    fullWidth={true}
                    clearable
                    placeholder="Please enter email"
                  />
                  <Spacer />
                  <Textarea
                    size="xl"
                    rows={10}
                    placeholder="Your message goes here..."
                  />
                  <Spacer />
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
                  >
                    Submit
                  </Button>
                </Card.Body>
              </Card>
            </Grid>
          </Grid.Container>
        </Box>
      </Container>
    </div>
  );
};
