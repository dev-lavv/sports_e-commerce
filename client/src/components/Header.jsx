import {
  ShoppingCartOutlined,
  UserOutlined,
  SearchOutlined,
} from "@ant-design/icons";
const Header = () => {
  return (
    <>
      <nav className="w-5/6 h-[50px] ">
        <div className="flex justify-between items-center h-[50px]">
          <div>
            {
              //logo
            }
          </div>
          <div className="flex justify-between items-center border-2 border-black rounded-l-xl rounded-r-xl">
            <input className="mx-1 border-1 border-white" />
            <button>
              <SearchOutlined className="text-[24px] bg-custom-yellow rounded-r-xl py-1 px-1" />
            </button>
          </div>
          <ul className="flex gap-5 font-mono items-center">
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
      </nav>
    </>
  );
};
export default Header;
