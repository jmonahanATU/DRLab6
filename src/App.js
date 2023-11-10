// Import necessary styles and external dependencies.
import './App.css'; // Custom styles for the app.
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles.

// Import React components and features.
import Content from './components/content';
import Footer from './components/footer';
import Header from './components/header';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Import React Router components for handling navigation.
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './components/create';
import Read from './components/read';

// Define the main App component.
function App() {
  return (
    <BrowserRouter>
      {/* Main container for the entire application. */}
      <div className="App">
        {/* Navigation bar using Bootstrap components. */}
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* Define routes for different components using React Router. */}
        <Routes>
          <Route path='/' element={<Content></Content>}></Route>
          <Route path='/read' element={<Read></Read>}></Route>
          <Route path='/create' element={<Create></Create>}></Route>
        </Routes>

        {/* Uncomment the following lines if you have Header, Content, and Footer components. */}
        {/* <Header></Header>
        <Content></Content>
        <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

// Export the 'App' component as the default export.
export default App;
