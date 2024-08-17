import {
  ShoppingCartOutlined,
  UserOutlined,
  SearchOutlined,
  MenuOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { findFlagUrlByNationality } from "country-flags-svg";
const Header = (props) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    if (mobileMenu === true) {
      setMobileMenu(false);
    } else {
      setMobileMenu(true);
    }
  };
  return (
    <>
      <nav className="w-5/6 h-[50px]">
        <div className="lg:flex hidden justify-between items-center h-[50px]">
          <div className="flex gap-2">
            <h1 className="text-[24px] text-custom-gray hover:text-custom-yellow">
              Sports e<span className="text-custom-yellow">C</span>om
            </h1>
            <button className="flex items-between mb-1 ml-2 gap-1 border-custom-gray rounded-xl border-2 mt-2 px-1 hover:bg-custom-yellow">
              <img
                src={findFlagUrlByNationality("Indian")}
                className="w-6 h-6 rounded-xl"
              />
              EN
              <DownOutlined className="mt-1" />
            </button>
          </div>
          <div className="lg:flex hidden justify-between items-center border-2 border-custom-gray rounded-2xl w-[25%]">
            <input className="mx-1 outline-none" />
            <button>
              <SearchOutlined className="text-[24px] bg-custom-gray text-custom-white hover:bg-custom-yellow rounded-r-xl py-1 px-1" />
            </button>
          </div>
          <ul className="lg:flex hidden gap-5 font-mono items-center">
            <li className={`text-[18px] ${props.home}`}>
              <button className="hover:bg-custom-yellow rounded-xl px- py-1">
                Home
              </button>
            </li>
            <li className={`text-[18px] ${props.bats}`}>
              <button className={`hover:bg-custom-yellow rounded-xl px-1 py-1`}>
                Bats
              </button>
            </li>
            <li className={`text-[18px] ${props.balls}`}>
              <button className="hover:bg-custom-yellow rounded-xl px-1 py-1">
                Balls
              </button>
            </li>
            <li className={`text-[18px] ${props.clothing}`}>
              <button className="hover:bg-custom-yellow rounded-xl px-1 py-1">
                Clothing
              </button>
            </li>
            <li className={`text-[18px] ${props.accessories}`}>
              <button className="hover:bg-custom-yellow rounded-xl px-1 py-1">
                Accessories
              </button>
            </li>
            <li className="text-[24px] hover:bg-custom-yellow rounded-xl px-1">
              <button>
                <ShoppingCartOutlined className="" />
                <span className="text-[18px]">Cart</span>
              </button>
            </li>
            <li className="text-[24px] hover:bg-custom-yellow rounded-xl px-1">
              <button>
                <UserOutlined className="" />
                <span className="text-[18px]">Login</span>
              </button>
            </li>
          </ul>
        </div>
        {
          //mobile header
        }
        <div className="lg:hidden sticky w-full flex justify-between items-center mt-2">
          <div>
            <button onClick={handleMobileMenu} className="">
              <MenuOutlined
                className={`text-2xl rounded-md py-1 px-1 ${
                  mobileMenu ? "bg-custom-yellow" : "bg-white text-black"
                }`}
              />
            </button>
          </div>
          <div>
            {
              //mobile logo
            }
          </div>
          <div className="flex gap-2">
            <SearchOutlined className="text-xl" />
            <ShoppingCartOutlined className="text-xl" />
            <UserOutlined className="text-xl" />
          </div>
        </div>
        {
          //mobile drop down
        }
        <div
          className={`sticky mt-[15px] bg-custom-yellow rounded-md w-full lg:hidden ${
            mobileMenu ? "block" : "hidden"
          }`}
        >
          <ul className="text-center font-mono">
            <li>Home</li>
            <li>Bats</li>
            <li>Balls</li>
            <li>Clothing</li>
            <li>Accessories</li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Header;
