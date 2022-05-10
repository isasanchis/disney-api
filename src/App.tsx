import * as C from "./styles";
import './styles.ts';
import Header from "./templates/Header";
import Content from "./templates/Content";
import Footer from "./templates/Footer";

function App() {
  return (
    <C.App>
      <Header />
      <Content />
      <Footer />
    </C.App>
  );
};

export default App;
