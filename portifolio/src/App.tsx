import { Outlet } from "react-router-dom";
import Container from "@components/Container";
import Footer from "@components/Footer";
import Header from "@components/Header";

function App() {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}

export default App;
