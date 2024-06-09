import {
  ShoppingCartOutlined,
  UserOutlined,
  SearchOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { useState } from "react";
const Header = () => {
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
          <div>
            {
              //logo
            }
          </div>
          <div className="lg:flex hidden justify-between items-center border-2 border-black rounded-l-xl rounded-r-xl">
            <input className="mx-1 border-1 border-white" />
            <button>
              <SearchOutlined className="text-[24px] bg-custom-yellow rounded-r-xl py-1 px-1" />
            </button>
          </div>
          <ul className="lg:flex hidden gap-5 font-mono items-center">
            <li className="text-[18px] border-b-2 border-custom-yellow">
              <button className="hover:border-b-2 hover:border-custom-yellow">
                Home
              </button>
            </li>
            <li className=" text-[18px]">
              <button className="hover:border-b-2 hover:border-custom-yellow">
                Bats
              </button>
            </li>
            <li className="text-[18px]">
              <button className="hover:border-b-2 hover:border-custom-yellow">
                Balls
              </button>
            </li>
            <li className="text-[18px]">
              <button className="hover:border-b-2 hover:border-custom-yellow">
                Clothing
              </button>
            </li>
            <li className="text-[18px]">
              <button className="hover:border-b-2 hover:border-custom-yellow">
                Accessories
              </button>
            </li>
            <li className="text-[24px] hover:border-b-2 hover:border-custom-yellow">
              <button>
                <ShoppingCartOutlined className="" />
                <span className="text-[18px]">Cart</span>
              </button>
            </li>
            <li className="text-[24px] hover:border-b-2 hover:border-custom-yellow">
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
          <button
              onClick={handleMobileMenu}
            className=''
            >
              <MenuOutlined
                className={`text-2xl rounded-md py-1 px-1 ${
                  mobileMenu ? "bg-custom-yellow" : 'bg-white text-black'
                }`}
              /> 
            </button>
          </div>
          <div>
            {
              //mobile logo
            }
          </div>
          <div className='flex gap-2'>
            <SearchOutlined className='text-xl'/>
            <ShoppingCartOutlined className='text-xl'/>
            <UserOutlined className='text-xl'/>
          </div>
        </div>
        {
          //mobile drop down
        }
        <div className={`sticky mt-[15px] bg-custom-yellow rounded-md w-full lg:hidden ${mobileMenu ? 'block' : 'hidden'}`}>
          <ul className='text-center font-mono'>
            <li>
            Home
            </li>
            <li>
              Bats
            </li>
            <li>
              Balls
            </li>
            <li>
              Clothing
            </li>
            <li>
              Accessories
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Header;
