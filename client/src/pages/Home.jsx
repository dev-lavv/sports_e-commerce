import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useState, useEffect, useRef } from "react";
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

  const categoryCarousel = useRef(null);
  //scroll function
  const handleCarouselScroll = (value) => {
    categoryCarousel.current.scrollLeft += value;
  };

  return (
    <>
      <div className="fixed lg:w-full w-screen lg:h-[50px] h-[45px] flex justify-center border-b-2 border-custom-gray bg-white z-50">
        <Header home="border-b-2 border-custom-gray" />
      </div>
      <div className="w-full h-auto overflow-hidden">
        <img
          src={firstImgState}
          className="w-full"
          alt="cricket-equipment"
        ></img>
        {
          //dynamic heading
        }
        <a href="#" className="">
          <h1
            className="hidden lg:text-[96px] text-custom-yellow bg-custom-gray rounded-full px-2 py-2 hover:bg-custom-yellow hover:text-white z-1"
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
      {
        //section - 2
      }
      <div className="w-full h-auto  flex justify-center my-10">
        <div className="w-5/6 h-3/4 flex lg:flex-row flex-col gap-1">
          {
            //card - 1
          }
          <div className="w-1/4 h-3/4  flex flex-col gap-1">
            <h2 className="lg:text-[48px] text-[12px] font-mono font-semibold text-custom-yellow">
              Search
            </h2>
            <h2 className="lg:text-[48px] text-[12px] font-mono font-semibold text-custom-yellow">
              By
            </h2>
            <h2 className="lg:text-[48px] text-[12px] font-mono font-semibold text-custom-yellow">
              Category
            </h2>
            <div className="flex-row gap-2 mx-1 lg:flex hidden">
              <button
                className="border border-custom-yellow rounded-full text-custom-yellow hover:bg-custom-yellow hover:text-custom-white py-1 px-2"
                onClick={() => {
                  handleCarouselScroll(-150);
                }}
              >
                <LeftOutlined />
              </button>
              <button
                className="border border-custom-yellow rounded-full text-custom-yellow hover:bg-custom-yellow hover:text-custom-white py-1 px-2"
                onClick={() => {
                  handleCarouselScroll(150);
                }}
              >
                <RightOutlined />
              </button>
            </div>
            {
              //card 2 (horizontal scroll)
            }
          </div>
          <div
            className="lg:w-3/4 overflow-x-scroll hide-scroll-bar"
            ref={categoryCarousel}
          >
            <div className="flex flex-nowrap">
              <div className="inline-block px-1">
                <div className="w-[250px] h-[366px] bg-custom-yellow rounded-lg"></div>
              </div>
              <div className="inline-block px-1">
                <div className="w-[250px] h-[366px] bg-custom-yellow rounded-lg"></div>
              </div>
              <div className="inline-block px-1">
                <div className="w-[250px] h-[366px] bg-custom-yellow rounded-lg"></div>
              </div>
              <div className="inline-block px-1">
                <div className="w-[250px] h-[366px] bg-custom-yellow rounded-lg"></div>
              </div>
              <div className="inline-block px-1">
                <div className="w-[250px] h-[366px] bg-custom-yellow rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        //section 2 end break code below
      }
      <div className="flex justify-center items-center">
        <div className="w-5/6">
          <hr className="border border-custom-gray" />
        </div>
      </div>
      {
        //section 3
      }
      <div className="w-full h-auto flex justify-center items-center my-10">
        <div className="flex flex-row justify-between w-5/6 h-[40rem]">
          <div className="block w-[49%] border-2 border-black rounded-3xl shadow-md">
          {
            //image
          }
            <div className="flex justify-center items-center">
              <h2 className="font-mono text-2xl font-semibold">Best Helmets</h2>
            </div>
            <div className="flex justify-center items-center">
              <p className="font-mono">Buy the best helmets for all sizes.</p>
            </div>
          </div>
          <div className="block w-[49%] border-2 border-black rounded-3xl shadow-md">
          {
            //image
          }
            <div className="flex justify-center items-center">
              <h2 className="font-mono text-2xl font-semibold">Best Gloves</h2>
            </div>
            <div className="flex justify-center items-center">
              <p className="font-mono">Buy the best Gloves for all sizes.</p>
            </div>
          </div>
        </div>
      </div>
      {
        //section 3 end
      }
      <div className="flex justify-center items-center">
        <div className="w-5/6">
          <hr className="border border-custom-gray" />
        </div>
      </div>
      {
        //section 4
      }
      <Footer />
    </>
  );
};
export default Home;
