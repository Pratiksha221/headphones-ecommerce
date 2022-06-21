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
        <Link href="https://www.instagram.com/" >
          <a className="instagram-logo"><AiFillInstagram /></a>
        </Link>

        <Link href="https://www.twitter.com/">
          <a className="twitter-logo"><AiOutlineTwitter /></a>
        </Link>
        <Link href="https://www.facebook.com/">
          <a className="facebook-logo"><AiFillFacebook/></a>
        </Link>
      </p>
    </div>
  );
};

export default Footer;
