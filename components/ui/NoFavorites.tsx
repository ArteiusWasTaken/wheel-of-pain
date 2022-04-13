import { Card, Text, Row } from "@nextui-org/react";
import { FC } from "react";

interface Props {
  img: string;
  text: string;
}

export const SimpleCard: FC<Props> = (content) => {
  return (
    <Card hoverable clickable>
      <Card.Body
        css={{ p: 1 }}
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <Card.Image showSkeleton src={content.img} width="100%" height={140} />
        <Card.Footer>
          <Row justify="space-between">
            <Text h1 transform="capitalize">
              {content.text}
            </Text>
          </Row>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};
