import Nav from 'react-bootstrap/Nav';

function Navbar() {
  return (
    <>
      <div style={{
                  height:"50px", 
                  fontSize:"25px",}}>

        <Nav className="d-flex justify-content-center " variant="pills" >
        
          <Nav.Item>
            <Nav.Link href="/all">
              All
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/fsd">
              Full Stack Development  
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/cyber">
              Cyber Security
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/data">
              Data Science
            </Nav.Link>
          </Nav.Item>

        </Nav>

      </div>
      
      
    </>
  );
}

export default Navbar;