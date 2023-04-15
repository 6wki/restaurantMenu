import "./App.css";
import { Container } from "react-bootstrap";
import OurNavBar from "./components/OurNavBar";
import Header from "./components/Header";
import Cat from "./components/Category";
import ItemsList from "./components/ItemsList";
import { items } from "./data";
import { useState } from "react";

function App() {
  const [idata, setIData] = useState(items);
  const allcate = ["الكل", ...new Set(items.map((i) => i.category))];
  const flterCategory = (cate) => {
    if (cate === "الكل") {
      setIData(items);
    } else {
      const newArr = items.filter((itms) => itms.category == cate);
      setIData(newArr);
    }
  };
  return (
    <div className="App">
      <OurNavBar />
      <Container>
        <Header />
        <Cat filterCate={flterCategory} allcate={allcate} />
        <ItemsList idata={idata} />
      </Container>
    </div>
  );
}

export default App;
