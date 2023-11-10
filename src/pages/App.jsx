import React from "react";
import { BsFillLightbulbFill, BsFillSquareFill } from "react-icons/bs";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import Logo from "/src/assets/roastedbeans-logo-white.png";
import Logo2 from "/src/assets/roastedbeans-logo.png";
import CSI1 from "/src/assets/csi1.png";
import CSI2 from "/src/assets/csi2.png";
import CSO1 from "/src/assets/cso1.png";
import CSO2 from "/src/assets/cso2.png";
import coffeeRound from "/src/assets/coffee-round.jpg";
import black from "/src/assets/coffee/black.png";
import affogato from "/src/assets/coffee/affogato.png";
import americano from "/src/assets/coffee/americano.png";
import cappuccino from "/src/assets/coffee/cappuccino.png";
import espresso from "/src/assets/coffee/espresso.png";
import latte from "/src/assets/coffee/latte.png";
import macchiato from "/src/assets/coffee/macchiato.png";
import mocha from "/src/assets/coffee/mocha.png";
import ristretto from "/src/assets/coffee/ristretto.png";
import flatwhite from "/src/assets/coffee/flat white.png";
import cortado from "/src/assets/coffee/cortado.png";
import cafeaulait from "/src/assets/coffee/cafe au lait.png";
import galao from "/src/assets/coffee/galao.png";
import irish from "/src/assets/coffee/irish.png";
import lungo from "/src/assets/coffee/lungo.png";
import redeye from "/src/assets/coffee/red eye.png";
import doppio from "/src/assets/coffee/doppio.png";

import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="px-0 bg-accent-color text-center scroll-smooth transition-all">
        <section className=" bg-accent-color dark:bg-quaternary-color min-h-screen transition">
          <nav className="z-20 fixed w-full flex text-accent-color bg-gradient-to-r from-primary-color to-secondary-color shadow-lg">
            <ul className="flex items-center w-full py-2 flex-row justify-between">
              <li>
                <BsFillLightbulbFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="transition animate-pulse hover:cursor-pointer hover:animate-none hover:-rotate-6 hover:text-tertiary-color w-44 h-6"
                />
              </li>
              <li>
                <img
                  src={Logo2}
                  className="w-8 h-8 hover:rotate-6 transition"></img>
              </li>
              <li>
                <h1 className="font-Lexend hover:text-tertiary-color hover:cursor-pointer w-44 h-6">
                  Contact Us
                </h1>
              </li>
            </ul>
          </nav>
          <div className="select-none flex flex-col pt-12 lg:py-16 min-h-screen gap-0 lg:flex-row justify-evenly items-center">
            <div className="ml-10 max-w-lg-56 mt-10">
              <img
                className="transition drop-shadow-md rounded-xl lg:hover:rotate-2 w-80 lg:w-[30rem]"
                src={CSI2}></img>
            </div>
            <div className="mt-6 lg:mt-16">
              <h1 className="transition dark:text-tertiary-color font-extrabold text-xl lg:text-2xl font-Arvo">
                THE ROASTEDBEANS
              </h1>
              <div className="mt-6 mx-10 max-w-2xl border-y-2 border-secondary-color border-solid dark:border-tertiary-color">
                <p className="transition dark:text-accent-color py-6 px-4 leading-8 text-base lg:text-lg font-Play">
                  Welcome to our coffee shop, where the charm of the past meets
                  the aroma of{" "}
                  <span className="text-secondary-color dark:text-tertiary-color transition">
                    freshly brewed coffee
                  </span>{" "}
                  . As you step inside, you'll be transported to a bygone era,
                  with vintage decor and retro-themed furnishings that create a
                  cozy and inviting atmosphere.
                  <br />
                  <br />
                  The centerpiece of the coffee shop is a{" "}
                  <span className="text-secondary-color dark:text-tertiary-color transition">
                    vintage coffee machine
                  </span>
                  , hissing and steaming as it brews up the perfect cup of
                  coffee. The aroma of freshly roasted beans fills the air,
                  creating a warm and welcoming atmosphere that will make you
                  want to linger and savor every sip.
                </p>
              </div>
              <div className="flex flex-row w-full items-center gap-8 my-6 justify-center">
                <h1 className="font-Arvo text-xl text-primary-color dark:text-tertiary-color transition">
                  Follow Us:
                </h1>
                <a href="https://www.facebook.com" target="_blank" className="">
                  <AiFillFacebook className="dark:fill-accent-color text-5xl fill-quaternary-color rounded-2xl hover:cursor-pointer hover:opacity-80 transition-opacity" />
                </a>
                <a href="https://www.instagram.com" target="_blank">
                  <AiFillInstagram className="dark:fill-accent-color text-5xl fill-quaternary-color hover:cursor-pointer hover:opacity-80 transition-opacity" />
                </a>
                <a href="https://www.twitter.com" target="_blank">
                  <AiFillTwitterSquare className="dark:fill-accent-color text-5xl fill-quaternary-color rounded-2xl hover:cursor-pointer hover:opacity-80 transition-opacity" />
                </a>
              </div>
            </div>
          </div>
          <div className="items-center justify-center">
            <h1 className="font-Play text-2xl font-extrabold p-0 m-0 text-primary-color dark:text-accent-color transition">
              We serve you the best
            </h1>
          </div>
          <div className="">
            <div className="select-none py-0 px-8 lg:px-20 justify-center h-[100vh] lg:h-[90vh]">
              <div className="translate-y-0 pointer-events-none select-none relative z-10 flex flex-row justify-between w-full p-0 m-0">
                <div className="bg-gradient-to-r from-accent-color to-transparent h-60 w-20 dark:from-quaternary-color transition"></div>
                <div className="bg-gradient-to-r to-accent-color from-transparent h-60 w-20 dark:to-quaternary-color transition"></div>
              </div>
              <div className="dark:text-accent-color -translate-y-52 transition-all py-2 flex gap-4 overflow-x-scroll scroll-m-10 scroll-p-0 snap-x items-start scroll-smooth">
                <div className="w-32 snap-start ml-2">
                  <img
                    className="transition hover:scale-105 w-32 h-32 rounded-lg shadow-darker"
                    src={affogato}
                    alt={Logo2}
                  />
                  <h1 className="mt-2 w-32 font-Arvo font-[600] text-xl">
                    Affogato
                  </h1>
                  <h1 className="ml-2 w-32 font-Arvo font-[400] text-left">
                    {">"}espresso
                    <br />
                    {">"}steamed milk
                  </h1>
                </div>
                <div className="w-32 snap-center ml-2">
                  <img
                    className="transition hover:scale-105 w-32 h-32 rounded-lg shadow-darker"
                    src={americano}
                    alt={Logo2}
                  />
                  <h1 className="mt-2 w-32 font-Arvo font-[600] text-xl">
                    Americano
                  </h1>
                  <h1 className="ml-2 w-32 font-Arvo font-[400] text-left">
                    {">"}espresso
                    <br />
                    {">"}hot water
                  </h1>
                </div>
                <div className="w-32 snap-center ml-2">
                  <img
                    className="transition hover:scale-105 w-32 h-32 rounded-lg shadow-darker"
                    src={black}
                    alt={Logo2}
                  />
                  <h1 className="mt-2 w-32 font-Arvo font-[600] text-xl">
                    Black
                  </h1>
                  <h1 className="ml-2 w-32 font-Arvo font-[400] text-left">
                    {">"}just coffee
                    <br />
                  </h1>
                </div>
                <div className="w-32 snap-center ml-2">
                  <img
                    className="transition hover:scale-105 w-32 h-32 rounded-lg shadow-darker"
                    src={cafeaulait}
                    alt={Logo2}
                  />
                  <h1 className="mt-2 w-32 font-Arvo font-[600] text-xl">
                    Café Au Lait
                  </h1>
                  <h1 className="ml-2 w-32 font-Arvo font-[400] text-left">
                    {">"}coffee
                    <br />
                    {">"}steamed milk
                  </h1>
                </div>
                <div className="w-32 snap-center ml-2">
                  <img
                    className="transition hover:scale-105 w-32 h-32 rounded-lg shadow-darker"
                    src={cappuccino}
                    alt={Logo2}
                  />
                  <h1 className="mt-2 w-32 font-Arvo font-[600] text-xl">
                    Cappuccino
                  </h1>
                  <h1 className="ml-2 w-32 font-Arvo font-[400] text-left">
                    {">"}espresso
                    <br />
                    {">"}steamed milk
                    <br />
                    {">"}foam
                  </h1>
                </div>
                <div className="w-32 snap-center ml-2">
                  <img
                    className="transition hover:scale-105 w-32 h-32 rounded-lg shadow-darker"
                    src={cortado}
                    alt={Logo2}
                  />
                  <h1 className="mt-2 w-32 font-Arvo font-[600] text-xl">
                    Cortado
                  </h1>
                  <h1 className="ml-2 w-32 font-Arvo font-[400] text-left">
                    {">"}1oz espresso
                    <br />
                    {">"}1oz steamed milk
                  </h1>
                </div>
                <div className="w-32 snap-center ml-2">
                  <img
                    className="transition hover:scale-105 w-32 h-32 rounded-lg shadow-darker"
                    src={doppio}
                    alt={Logo2}
                  />
                  <h1 className="mt-2 w-32 font-Arvo font-[600] text-xl">
                    Doppio
                  </h1>
                  <h1 className="ml-2 w-32 font-Arvo font-[400] text-left">
                    {">"}2oz espresso
                    <br />
                  </h1>
                </div>
                <div className="w-32 snap-center ml-2">
                  <img
                    className="transition hover:scale-105 w-32 h-32 rounded-lg shadow-darker"
                    src={espresso}
                    alt={Logo2}
                  />
                  <h1 className="mt-2 w-32 font-Arvo font-[600] text-xl">
                    Espresso
                  </h1>
                  <h1 className="ml-2 w-32 font-Arvo font-[400] text-left">
                    {">"}1oz espresso
                    <br />
                  </h1>
                </div>
                <div className="w-32 snap-center ml-2">
                  <img
                    className="transition hover:scale-105 w-32 h-32 rounded-lg shadow-darker"
                    src={flatwhite}
                    alt={Logo2}
                  />
                  <h1 className="mt-2 w-32 font-Arvo font-[600] text-xl">
                    Flat White
                  </h1>
                  <h1 className="ml-2 w-32 font-Arvo font-[400] text-left">
                    {">"}espresso
                    <br />
                    {">"}steamed milk
                  </h1>
                </div>
                <div className="w-32 snap-center ml-2">
                  <img
                    className="transition hover:scale-105 w-32 h-32 rounded-lg shadow-darker"
                    src={galao}
                    alt={Logo2}
                  />
                  <h1 className="mt-2 w-32 font-Arvo font-[600] text-xl">
                    Galão
                  </h1>
                  <h1 className="ml-2 w-32 font-Arvo font-[400] text-left">
                    {">"}espresso
                    <br />
                    {">"}foamed milk
                  </h1>
                </div>
                <div className="w-32 snap-center ml-2">
                  <img
                    className="transition hover:scale-105 w-32 h-32 rounded-lg shadow-darker"
                    src={irish}
                    alt={Logo2}
                  />
                  <h1 className="mt-2 w-32 font-Arvo font-[600] text-xl">
                    Irish
                  </h1>
                  <h1 className="ml-2 w-32 font-Arvo font-[400] text-left">
                    {">"}coffee
                    <br />
                    {">"}whiskey
                    <br />
                    {">"}sugar
                    <br />
                    {">"}cream
                  </h1>
                </div>
                <div className="w-32 snap-center ml-2">
                  <img
                    className="transition hover:scale-105 w-32 h-32 rounded-lg shadow-darker"
                    src={latte}
                    alt={Logo2}
                  />
                  <h1 className="mt-2 w-32 font-Arvo font-[600] text-xl">
                    Latte
                  </h1>
                  <h1 className="ml-2 w-32 font-Arvo font-[400] text-left">
                    {">"}espresso
                    <br />
                    {">"}steamed milk
                  </h1>
                </div>
                <div className="w-32 snap-center ml-2">
                  <img
                    className="transition hover:scale-105 w-32 h-32 rounded-lg shadow-darker"
                    src={lungo}
                    alt={Logo2}
                  />
                  <h1 className="mt-2 w-32 font-Arvo font-[600] text-xl">
                    Lungo
                  </h1>
                  <h1 className="ml-2 w-32 font-Arvo font-[400] text-left">
                    {">"}long pulled espresso
                    <br />
                  </h1>
                </div>
                <div className="w-32 snap-center ml-2">
                  <img
                    className="transition hover:scale-105 w-32 h-32 rounded-lg shadow-darker"
                    src={macchiato}
                    alt={Logo2}
                  />
                  <h1 className="mt-2 w-32 font-Arvo font-[600] text-xl">
                    Macchiato
                  </h1>
                  <h1 className="ml-2 w-32 font-Arvo font-[400] text-left">
                    {">"}espresso shot
                    <br />
                    {">"}foam
                  </h1>
                </div>
                <div className="w-32 snap-center ml-2">
                  <img
                    className="transition hover:scale-105 w-32 h-32 rounded-lg shadow-darker"
                    src={mocha}
                    alt={Logo2}
                  />
                  <h1 className="mt-2 w-32 font-Arvo font-[600] text-xl">
                    Mocha
                  </h1>
                  <h1 className="ml-2 w-32 font-Arvo font-[400] text-left">
                    {">"}espresso
                    <br />
                    {">"}chocolate
                    <br />
                    {">"}steamed milk
                  </h1>
                </div>
                <div className="w-32 snap-center ml-2">
                  <img
                    className="transition hover:scale-105 w-32 h-32 rounded-lg shadow-darker"
                    src={redeye}
                    alt={Logo2}
                  />
                  <h1 className="mt-2 w-32 font-Arvo font-[600] text-xl">
                    Red Eye
                  </h1>
                  <h1 className="ml-2 w-32 font-Arvo font-[400] text-left">
                    {">"}coffee
                    <br />
                    {">"}espresso
                  </h1>
                </div>
                <div className="w-32 snap-end ml-2">
                  <img
                    className="transition hover:scale-105 w-32 h-32 rounded-lg shadow-darker"
                    src={ristretto}
                    alt={Logo2}
                  />
                  <h1 className="mt-2 w-32 font-Arvo font-[600] text-xl">
                    Ristretto
                  </h1>
                  <h1 className="ml-2 w-32 font-Arvo font-[400] text-left">
                    {">"}short pulled espresso
                    <br />
                  </h1>
                </div>
              </div>
              <div className="-translate-y-48 flex lg:flex-row flex-col gap-6 items-center lg:gap-28 justify-evenly lg:px-28 lg:-translate-y-40 mb-10">
                <p className="pr-2 font-Lexend font-[300] text-primary-color text-[15px] justify-center lg:text-lg dark:text-accent-color transition">
                  Our coffee is sourced from the finest beans, and we take pride
                  in our <strong>brewing techniques</strong>, ensuring that each
                  cup is <strong>perfect</strong>. Whether you prefer a classic
                  latte, a rich espresso or a refreshing iced coffee, we have
                  something to satisfy every taste bud.
                </p>
                <img
                  src={coffeeRound}
                  className="shadow-lg rounded-2xl w-60 h-60 lg:hover:scale-110 transition"
                />
              </div>
            </div>
            <div className="p-0 flex flex-col lg:flex-row md:p-10 items-center align-middle w-full justify-start lg:justify-evenly md:justify-evenly gap-5 lg:mt-0 ">
              <div className="transition-all lg:hover:rotate-6 rounded-xl shadow-lg p-5 justify-start align-middle items-center flex flex-col bg-gradient-to-tr from-primary-color to-secondary-color">
                <h1 className="font-Arvo font-bold text-xl text-white">
                  WHERE TO FIND US
                </h1>
                <iframe
                  className="mt-5 w-[30vh] h-[30vh] align-middle justify-center rounded-2xl shadow-inner lg:w-[30vh] lg:h-[50vh]"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.780865292861!2d125.49752191470989!3d9.784600792999099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3301376d0abd3bff%3A0xbe3d0cbd6f776a6a!2sFirst%20Place%20Arcade!5e0!3m2!1sen!2sph!4v1680959755473!5m2!1sen!2sph"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="transition-all lg:hover:scale-105 rounded-xl shadow-lg p-5 justify-start align-middle items-center flex flex-col bg-gradient-to-t from-primary-color to-secondary-color">
                <img
                  src={CSO1}
                  className="w-[30vh] align-middle justify-center rounded-2xl shadow-inner lg:w-[60vh]"></img>
              </div>
              <div className="transition-all lg:hover:-rotate-6 rounded-xl shadow-lg p-5 justify-start align-middle items-center flex flex-col bg-gradient-to-tl from-primary-color to-secondary-color">
                <h1 className="font-Arvo font-bold text-xl text-white">
                  THE STORE OPENS AT
                </h1>
                <div className="mt-3 w-[30vh] h-[30vh] align-middle justify-center items-center rounded-2xl bg-white shadow-inner flex lg:w-[30vh] lg:h-[50vh]">
                  <h1 className="font-Arvo font-bold text-2xl text-primary-color dark:text-quaternary-color transition">
                    6:00 AM <br />
                    TO <br /> 10:00 PM <br />
                    <br /> EVERYDAY
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <footer className="text-quaternary-color text-[12px] font-Arvo dark:text-accent-color transition">
              Copyright © 2023 if(Coffee). All Rights Reserved.
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
