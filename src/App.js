import './main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Linda2 from './images/linda2.jpg';
import Linda3 from './images/linda3.jpg';
import Linda4 from './images/linda4.jpg';
import Linda5 from './images/linda5.jpg';
import styled from 'styled-components';

// React Bootstrap Card:
function ReactBootstrapCard() {
  return <Card className="m-5" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Linda2} />
    <Card.Body>
      <Card.Title>Bootstrap Component</Card.Title>
      <Card.Text>
        Some quick example text to build on the bootstrap card and make up the bulk of
        the card's content.
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroupItem>Cras justo odio</ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem>Vestibulum at eros</ListGroupItem>
    </ListGroup>
    <Card.Body>
      <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
  </Card>
}

// Vanilla Bootstrap Card:
function BootstrapCard() {
  return (<div className="card m-5" style={{ width: '18rem' }}>
    <img src={Linda4} className="card-img-top" alt="Someone needs a haircut"/>
    <div class="card-body">
      <h5 class="card-title">Old school Bootstrap</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>)
}

// Sass Styled Card:
function ClassyCard() {
  return <div className="sassy-card">
    <img src={Linda5} alt="Looking good"/>
    <h2>Sassy Card</h2>
    <hr></hr>
    <p>Some text here to add some bulky words to the card as a placeholder</p>
    <hr></hr>
    <button>Click here</button>
  </div>
}


// Styled Component Card:
const StyledCard = styled.div`
  padding: 5px;
  display: inline-block;
  width: 18rem;
  border: 1px solid red;
  color: darkblue;
  margin: 20 px;
`;

function StyledComponentCard() {
  return <StyledCard className="m-5">
    <img src={Linda3} alt="more of Linda" width="100%"/>
    <h2>Styled Component Card</h2>
    <hr></hr>
    <a href="#">Insert link here</a>
  </StyledCard>
}

function App() {
  return (
    <div className="App">
      <ReactBootstrapCard />
      <BootstrapCard />
      <ClassyCard />
      <StyledComponentCard />
    </div>
  );
}

export default App;
