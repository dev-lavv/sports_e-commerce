import "./App.css";
import Header from "./components/Header.jsx";

function App() {
  return (
    <>
      <div className="fixed top-0 w-full h-[50px] flex justify-center border-b-2 border-custom-gray bg-white">
        <Header />
      </div>
    </>
  );
}

export default App;
