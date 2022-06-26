import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import Link from "next/link";

const ProjectCards = ({ name, pic, live, code }) => {
  return (
    <>
      <Card css={{ w: "100%", h: "400px" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
          <Col>
            <Text h3 color="white">
              {name}
            </Text>
          </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={pic}
            objectFit="cover"
            width="100%"
            height="100%"
            alt={name}
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
              <Row justify="center">
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
    </>
  );
};

export default ProjectCards;
