import Card from 'react-bootstrap/Card';
import cy1 from '../../assets/cys1.jpg'

function Cyber() {
  return (
    <>
    <div className=" d-flex justify-content-center my-3" >

        <Card style={{ width: '18rem', margin:'10px' }}>
        <Card.Img variant="top" src={cy1} />
        <Card.Body>
            <Card.Title>Cyber Security</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            </Card.Text>
        </Card.Body>
        </Card>
        
        <Card style={{ width: '18rem', margin:'10px' }}>
        <Card.Img variant="top" src="public/cys2.jpg" />
        <Card.Body>
            <Card.Title>Cyber Security</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            </Card.Text>
        </Card.Body>
        </Card>
        
    </div>
    </>
  );
}

export default Cyber;