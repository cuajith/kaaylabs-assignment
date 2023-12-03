import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pagination from "./Component/Main/Pagination";

function App() {
 
  return (
    <Router>
      <Header />
      <Main />
      <Routes>
        <Route path="/pagination/:page?" element={<Pagination />} />
      </Routes>
    </Router>
  );
}

export default App;
