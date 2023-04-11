import { Header } from "./components/Header";
import { PriceBox } from "./components/PriceBox";

function App() {
  return (
    <div className=" bg-main grid h-screen w-full place-content-center px-2 sm:px-0">
      <Header />
      <PriceBox />
    </div>
  );
}

export default App;
