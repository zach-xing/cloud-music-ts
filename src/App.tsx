import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Library from "./pages/Library";
import Header from "./components/Header";
import {Main} from "./App.style"

function App() {

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="discover" element={<Discover />} />
          <Route path="library" element={<Library />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
