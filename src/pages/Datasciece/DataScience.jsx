import Card from 'react-bootstrap/Card';

function DataScience() {
  return (

    <div className='d-flex justify-content-center my-3'>
        <Card style={{ width: '18rem' , margin:'10px'}}>
            <Card.Img variant="top" src="/ds1.jpg" />
            <Card.Body>
              <Card.Title>Data Science</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
              </Card.Text>
            </Card.Body>
          </Card>

        <Card style={{ width: '18rem' , margin:'10px'}}>
            <Card.Img variant="top" src="/ds2.jpg" />
            <Card.Body>
              <Card.Title>Data Science</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
              </Card.Text>
            </Card.Body>
          </Card>
      
    </div>

          
    

  );
}

export default DataScience;