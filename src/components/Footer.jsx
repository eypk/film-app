import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <small className=" text-black  dark:text-neutral-200 fixed bottom-0 z-20">
      Coded by Eyup {date}©
    </small>
  );
};

export default Footer;
