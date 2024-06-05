import React, { useState } from 'react';
import logo from './../assets/images/logo.png';
import HeaderItems from './HeaderItems';
import { FaHome, FaSearch, FaStar } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { RiMovie2Fill } from 'react-icons/ri';
import { PiTelevisionFill } from 'react-icons/pi';
import { HiDotsVertical } from 'react-icons/hi';
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: 'HOME',
      icon: FaHome,
    },
    {
      name: 'Search',
      icon: FaSearch,
    },
    {
      name: 'Watchlist',
      icon: FaPlus,
    },
    {
      name: 'Original',
      icon: FaStar,
    },
    {
      name: 'Movies',
      icon: RiMovie2Fill,
    },
    {
      name: 'Searies',
      icon: PiTelevisionFill,
    },
  ];
  return (
    <div className="flex items-center justify-between p-4 mx-4">
      <div className="flex items-center gap-8">
        <img
          src={logo}
          alt="logo"
          className="w-[80px]  md:w-[115px] object-cover cursor-pointer"
        />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItems name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-8">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItems name={''} Icon={item.icon} />
          )}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItems name={''} Icon={HiDotsVertical} />
            {toggle ? (
              <div className="absolute mt-3 border-[1px] border-gray-700 p-4 px-5 bg-black">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItems name={item.name} Icon={item.icon} />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img
        src="data:image/jpeg;base64,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"
        alt="user"
        className="w-[60px] rounded-full cursor-pointer"
      />
    </div>
  );
};

export default Header;
