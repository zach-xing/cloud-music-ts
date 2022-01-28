import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useStores } from "./store";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Library from "./pages/Library";
import Header from "./components/Header";

function App() {
  const { themeStore } = useStores();

  return (
    <ThemeProvider theme={themeStore.theme}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="discover" element={<Discover />} />
          <Route path="library" element={<Library />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;
