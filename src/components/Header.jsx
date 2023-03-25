// import { TbBusinessplan } from 'react-icons/tb'
// import { Link } from 'react-router-dom'
// import { connectWallet } from '../services/blockchain'
// import { truncate, useGlobalState } from '../store'

// const Header = () => {
//   const [connectedAccount] = useGlobalState('connectedAccount')

//   return (
//     <header
//       className="flex justify-between items-center
//         p-5 bg-white shadow-lg fixed top-0 left-0 right-0"
//     >
//       <Link
//         to="/"
//         className="flex justify-start items-center
//       text-xl text-black space-x-1"
//       >
//         <span>Genesis</span>
//         <TbBusinessplan />
//       </Link>

//       <div className="flex space-x-2 justify-center">
//         {connectedAccount ? (
//           <button
//             type="button"
//             className="inline-block px-6 py-2.5 bg-green-600
//             text-white font-medium text-xs leading-tight uppercase
//             rounded-full shadow-md hover:bg-green-700"
//           >
//             {truncate(connectedAccount, 4, 4, 11)}
//           </button>
//         ) : (
//           <button
//             type="button"
//             className="inline-block px-6 py-2.5 bg-green-600
//             text-white font-medium text-xs leading-tight uppercase
//             rounded-full shadow-md hover:bg-green-700"
//             onClick={connectWallet}
//           >
//             Connect Wallet
//           </button>
//         )}
//       </div>
//     </header>
//   )
// }

// export default Header

import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

// import logo from "../../images/logo.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        {/* <img src={logo} alt="logo" className="w-32 cursor-pointer" /> */}
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
