import React from "react";
import Logo from "../../../assets/images/Logo.png";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaLinkedin,
  FaSkype,
  FaTelegram,
  FaWhatsapp,
  FaDiscord,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ButtonWa } from "../../../components";

const Footer = () => {
  return (
    <div>
      <footer
        className="p-20 footer text-base-100"
        style={{ backgroundColor: "#e5e7eb" }}
      >
        <div>
          <Link to="/">
            <img src={Logo} alt="MSN PRODUCTION" className="w-40 sm:w-46" />
          </Link>
          <h1 className="text-2xl font-bold text-black ">SEAEA IT Company</h1>
          {/* <span className="text-accent">
            Kp. Cigintung RT 010 RW 004, <br />
            Ds. Kertasari, Kec. Pangkalan, <br />
            Kab. Karawang Jawa Barat, 41362.
          </span> */}
          <div className="flex items-center my-1">
            <FaPhoneAlt className="mr-6 text-2xl text-accent"></FaPhoneAlt>
            <h3 className="font-medium text-accent">+381638041039</h3>
          </div>
          <div className="flex items-center my-1">
            <MdEmail className="mr-6 text-2xl text-accent"></MdEmail>
            <h3 className="font-medium text-accent">javsfdev323@gmail.com</h3>
          </div>
          <div className="flex items-center my-1">
            <FaTelegram className="mr-6 text-2xl text-accent"></FaTelegram>
            <h3 className="font-medium text-accent">https://t.me/JavSFDev</h3>
          </div>
          <div className="flex items-center my-1">
            <FaDiscord className="mr-6 text-2xl text-accent"></FaDiscord>
            <h3 className="font-medium text-accent">JavSFDev#9620</h3>
          </div>
          <div className="flex items-center my-1">
            <FaSkype className="mr-6 text-2xl text-accent"></FaSkype>
            <h3 className="font-medium text-accent">
              live:.cid.d63fe5ecf0f69e48
            </h3>
          </div>
        </div>
        {/* Tautan */}
        <div>
          <span className="font-bold text-black">Link</span>
          <Link
            to="/"
            className="link link-hover hover:text-primary text-accent"
          >
            <span>Home</span>
          </Link>
          <Link
            to="/about"
            className="link link-hover hover:text-primary text-accent"
          >
            <span>About</span>
          </Link>
          <Link
            to="/services"
            className="link link-hover hover:text-primary text-accent"
          >
            <span>Service</span>
          </Link>
          <Link
            to="/contact"
            className="link link-hover hover:text-primary text-accent"
          >
            <span>Contact</span>
          </Link>
          {/* <Link
            to="/blog"
            className="link link-hover hover:text-primary text-accent"
          >
            <span>Blog</span>
          </Link> */}
        </div>
        {/* Fokus & Layanan */}
        <div>
          <span className="font-bold text-accent">Fokus & Layanan</span>
          <Link
            to="/services"
            className="link link-hover hover:text-primary text-accent"
          >
            <span>Web Creative</span>
          </Link>
          <Link
            to="/services"
            className="link link-hover hover:text-primary text-accent"
          >
            <span>Web E-Commerce</span>
          </Link>
          <Link
            to="/services"
            className="link link-hover hover:text-primary text-accent"
          >
            <span>Web Company Profile</span>
          </Link>
          <Link
            to="/services"
            className="link link-hover hover:text-primary text-accent"
          >
            <span>Web & Mobile Applications</span>
          </Link>
          <Link
            to="/services"
            className="link link-hover hover:text-primary text-accent"
          >
            <span>Branding & Content Creative</span>
          </Link>
          <Link
            to="/services"
            className="link link-hover hover:text-primary text-accent"
          >
            <span>Digital Marketing & Advertising</span>
          </Link>
        </div>
        {/* <div className="flex items-center mt-4">
          <a
            href="https://www.linkedin.com/in/mulia-sejati-nusantara-production-a766b3258/"
            target="blank"
            className="text-2xl text-accent hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
          >
            <FaLinkedin></FaLinkedin>
          </a>
          <a
            href="https://web.facebook.com/profile.php?id=100088222058988"
            target="blank"
            className="text-2xl text-accent hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
          >
            <FaDiscord></FaDiscord>
          </a>
          <a
            href="https://twitter.com/MSN_Production"
            target="blank"
            className="text-2xl text-accent hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
          >
            <FaSkype></FaSkype>
          </a>
          <a
            href="https://www.instagram.com/msn.production/"
            target="blank"
            className="text-2xl text-accent hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
          >
            <FaTelegram></FaTelegram>
          </a>
        </div> */}
      </footer>
      <footer className="px-10 py-6 text-sm text-center text-base-100 border-base-300 bg-neutral ">
        <div className="w-full h-[2px] bg-gray-600"></div>
        <div className="flex flex-col items-center justify-center mt-6 md:flex-row text-accent">
          <p>
            &copy; Copyright 2023, SEAEA IT Company - Website & Mobile App
            Development
          </p>
        </div>
      </footer>
      {/* <ButtonWa /> */}
    </div>
  );
};

export default Footer;
