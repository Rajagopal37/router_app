import Card from 'react-bootstrap/Card';

function FSD() {
  return (
    <div className="d-flex justify-content-center my-3" >

      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src="public/fsd2.jpg" />
        <Card.Body>
          <Card.Title>Full Stack Development</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src="public/fsd1.jpg" />
        <Card.Body>
          <Card.Title>Full Stack Development</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
          </Card.Text>
        </Card.Body>
      </Card>

      
    </div>
  );
}

export default FSD;