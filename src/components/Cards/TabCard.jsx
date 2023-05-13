import Card from "react-bootstrap/Card";

function TabCard({ src }) {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={src} />
        <Card.Body>
          <Card.Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, a
            amet magnam illo totam fugiat excepturi omnis distinctio labore
            consequatur ullam nostrum ipsam. Velit, dicta.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default TabCard;
