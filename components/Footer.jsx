import React from "react";
import Link from "next/link";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillFacebook
  
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 V Headphones All rights reserved</p>
      <p className="icons">
        <Link href="https://www.instagram.com/">
          <AiFillInstagram />
        </Link>

        <Link href="https://www.twitter.com/">
          <AiOutlineTwitter />
        </Link>
        <Link href="https://www.facebook.com/">
          <AiFillFacebook/>
        </Link>
      </p>
    </div>
  );
};

export default Footer;
