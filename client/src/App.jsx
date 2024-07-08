import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <>
      <div className="fixed w-full lg:h-[50px] h-[45px] flex justify-center border-b-2 border-custom-gray bg-white">
        <Header />
      </div>
      <Footer />
      <div className='h-[100rem]'>

      </div>
    </>
  );
}
export default App;
