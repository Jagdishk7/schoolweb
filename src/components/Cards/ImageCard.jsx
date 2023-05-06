import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ImageCard({src,name}) {
  return (
    <Card style={{ width: '18rem',boxShadow:'0 0 1px #353535' ,margin:'0.5rem' }} className='image-card'>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          School Description
        </Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
  );
}

export default ImageCard;