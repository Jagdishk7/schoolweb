import Card from "react-bootstrap/Card";

function TabCard({ src , desc}) {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={src} />
        <Card.Body>
          <Card.Text>
            {desc}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default TabCard;
