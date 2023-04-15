import "./App.css";
import { Container } from "react-bootstrap";
import ourNavBar from "./components/ourNavBar";

function App() {
  return (
    <div className="App">
      <ourNavBar />
      <Container></Container>
    </div>
  );
}

export default App;
