import { Card, Col, Row, Button, Text, Grid } from "@nextui-org/react";
import Link from "next/link";

const ProjectCards = ({ name, pic, live, code }) => {
  <Grid.Container gap={2} justify="center">
    <Grid xs={12} sm={7}>
      <Card css={{ w: "100%", h: "400px" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
          <Col>
            <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
              Your day your way
            </Text>
            <Text h3 color="white">
              Your checklist for better sleep
            </Text>
          </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={pic}
            objectFit="cover"
            width="100%"
            height="100%"
            alt="Relaxing app background"
          />
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: "absolute",
            bgBlur: "#0f111466",
            borderTop: "$borderWeights$light solid $gray800",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row>
            <Col>
              <Row>
                <Col span={3}>
                  <Card.Image
                    src="https://nextui.org/images/breathing-app-icon.jpeg"
                    css={{ bg: "black", br: "50%" }}
                    height={40}
                    width={40}
                    alt="Breathing app icon"
                  />
                </Col>
                <Col>
                  <Text color="#d1d1d1" size={12}>
                    {name}
                  </Text>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row justify="flex-end">
                <Link href={live}>
                  <a>
                    <Button
                      flat
                      auto
                      rounded
                      css={{ color: "#94f9f0", bg: "#94f9f026" }}
                    >
                      <Text
                        css={{ color: "inherit" }}
                        size={12}
                        weight="bold"
                        transform="uppercase"
                      >
                        Live Website
                      </Text>
                    </Button>
                  </a>
                </Link>
                <Link href={code}>
                  <a>
                    <Button
                      flat
                      auto
                      rounded
                      css={{ color: "#94f9f0", bg: "#94f9f026" }}
                    >
                      <Text
                        css={{ color: "inherit" }}
                        size={12}
                        weight="bold"
                        transform="uppercase"
                      >
                        Source Code
                      </Text>
                    </Button>
                  </a>
                </Link>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  </Grid.Container>;
};

export default ProjectCards;
