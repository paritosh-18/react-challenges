import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="border border-black m-2 p-2 h-[32rem]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
