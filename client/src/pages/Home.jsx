import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
const Home = () => {
  //variables
  const imgOne =
    "https://dkpcricketonline.com/cdn/shop/files/DKP_Range_Sqaure_1_3024x.jpg?v=1706124419";
  const imgTwo =
    "https://dkpcricketonline.com/cdn/shop/files/thumbnail_IMG_0046_1296x.jpg?v=1694374322";
  const imgThree =
    "https://www.gray-nicolls.co.uk/cdn/shop/files/GettyImages-1964812307.jpg?v=1720794694&width=1800";
  //states/props
  const [firstImgState, setFirstImg] = useState(imgOne);
  const [h1TextState, setH1] = useState("balls");
  //functions
  const handleFirstLeft = () => {
    if (firstImgState === imgThree) {
      setFirstImg(imgTwo);
      setH1("bats");
    } else if (firstImgState === imgTwo) {
      setFirstImg(imgOne);
      setH1("balls");
    } else {
      setFirstImg(imgThree);
      setH1("helmets");
    }
  };
  const handleFirstRight = () => {
    if (firstImgState === imgOne) {
      setFirstImg(imgTwo);
      setH1("bats");
    } else if (firstImgState === imgTwo) {
      setFirstImg(imgThree);
      setH1("helmets");
    } else {
      setFirstImg(imgOne);
      setH1("balls");
    }
  };
  //hooks
  useEffect(() => {
    let timer1 = setTimeout(() => {
      if (firstImgState === imgOne) {
        setFirstImg(imgTwo);
        setH1("bats");
      } else if (firstImgState === imgTwo) {
        setFirstImg(imgThree);
        setH1("helmets");
      } else if (firstImgState === imgThree) {
        setFirstImg(imgOne);
        setH1("balls");
      }
    }, 3000);
    return () => {
      clearTimeout(timer1);
    };
  }, [firstImgState]);

  return (
    <>
      <div className="fixed w-full lg:h-[50px] h-[45px] flex justify-center border-b-2 border-custom-yellow bg-white ">
        <Header home="border-b-2 border-custom-yellow" />
      </div>
      <div className="w-full h-screen overflow-hidden">
        <img
          src={firstImgState}
          className="w-full object-hidden "
          alt="Cricket-Images"
        ></img>
        {
          //dynamic heading
        }
        <a href="#" className="">
          <h1
            className="text-[96px] text-custom-yellow hover:underline"
            style={{
              position: "absolute",
              bottom: `${"2rem"}`,
              left: `${"30%"}`,
            }}
          >
            Cricket {h1TextState}
          </h1>
        </a>
        <div className="absolute top-1/2">
          <button
            className="z-50 w-8 h-8 rounded-lg hover:bg-custom-yellow text-white"
            onClick={handleFirstLeft}
          >
            <LeftOutlined />
          </button>
        </div>
        <div className="absolute top-1/2 right-0">
          <button
            className="w-8 h-8 rounded-lg hover:bg-custom-yellow text-white"
            onClick={handleFirstRight}
          >
            <RightOutlined />
          </button>
        </div>
      </div>
      <div className="w-full h-screen"></div>
      <Footer />
    </>
  );
};

export default Home;
