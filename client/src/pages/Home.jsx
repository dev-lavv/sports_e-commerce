import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

const Home = () =>{

    return(
        <>
        <div className="fixed w-full lg:h-[50px] h-[45px] flex justify-center border-b-2 border-custom-gray bg-white">
        <Header home='border-b-2 border-custom-yellow'/>
        </div>

        <Footer />
        </>
    );
}

export default Home;