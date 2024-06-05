import React from 'react';

const HeaderItems = ({ name, Icon }) => {
  return (
    <div className=" text-white flex items-center gap-1 text-[14px] cursor-pointer hover:underline underline-offset-8 ">
      <Icon />
      <p className="uppercase font-semibold p-2">{name}</p>
    </div>
  );
};

export default HeaderItems;
