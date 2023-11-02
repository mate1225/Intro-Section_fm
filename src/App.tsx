import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import MainContent from "./components/mainContet/MainContent";

function App() {
  return (
    <div>
      <div className="mb-4 ">
        <Header />
        <div className=" lg:flex lg:justify-center ">
          <MainContent />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
