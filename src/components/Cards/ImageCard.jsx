import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ImageCard({src,name}) {
  return (
    <Card style={{ width: '15rem',height:'20rem',boxShadow:'0 0 1px #353535' ,margin:'0.5rem' }} className='image-card'>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          School Description
        </Card.Text>
        <Link to={'/allschools'}><Button variant="primary">Details</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default ImageCard;