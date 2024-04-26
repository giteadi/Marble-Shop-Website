import React from "react";
import radhaKrishna from "../images/Aig.jpg";
import "../css/home.css";
import Carousel from "./Carousal";
import Card from "./Card";
import imageData from "./imageData";
import "../css/circle.css";
import Form from "../pages/Form";
import imageData2 from "./footerData";
import Card2 from "./Card2";
import VisitingCard from "../pages/visitingCard";
function HomePage() {
  return (
    <div className="wrapper">
      {/* Heading */}
      <div className="flex items-center justify-center ">
        <h1 className="animate-charcter">VISHNU HAST KALA KENDRA</h1>
      </div>
      {/* LOWER HEADING */}
      <div className=" lowerHeading">
        <p className="text-2xl font-bold ">
          Welcome to your Shop where we{" "}
          <span className="font-bold">shape your</span>
        </p>
        <div className="variable">
          <span class="work text-2xl">Imagination</span>
        </div>
        <div class="static">
          <span className="text-5xl ">To</span>Reality
        </div>
      </div>

      {/* CARAUSAL */}
      <div className="flex flex-wrap items-center justify-center pl-16 overflow-hidden ">
        <Carousel />
      </div>
      <br />
      <br />
      <br />
      <br />
      {/* Hero Section */}
      <div className="flex flex-wrap items-center justify-around text-2xl bg-slate-200 hover:bg-slate-300">
          <div className="max-w-md ">
          <img src={radhaKrishna} alt="Jugal_Jodi" id="jugaljodi" />
          </div>
          <div className="max-w-3xl">
          <p>
             Welcome to our website! Discover the timeless beauty of marble
            with our exquisite collection of statues. Each piece is meticulously
            crafted to capture the essence of artistry and elegance. Explore our
            gallery and adorn your space with the allure of marble.<br/>
            for quiries and update contact us <br/><br/> <span className="font-semibold ">
            Email:
            adityasharma10102000@gmail.com <br/>Phone: 7974507514 , 9516696009<br/> Address: Opposite
            Chosath Yougini Mandir Bhedaghat Jabalpur (MP)
            </span>
          </p>
        </div>

        
      </div>

      <br />
      <br />
      <br />
      <br />

      {/* Card section */}

      <div
        className="flex flex-wrap items-center justify-around "
        style={{ boxSizing: "border-box" }}
      >
        {imageData.map((item) => (
          <Card
            // key={item.title}
            image={item.url}
            // price={item.price}
            // size={item.size}
            description={item.description}
          />
        ))}
      </div>

      <br />
      <br />
      <br />
      <br />

      {/* Circle Animation & Text */}
      <br />
      <br />
      <br />
      <br />
      <div className="flex flex-wrap items-center justify-center">
        <div className="mainCircle">
          <div className="circle">
            <img
              src="https://res.cloudinary.com/bazeercloud/image/upload/v1710753189/images/OM_keihfl.jpg"
              alt="OM"
            />
          </div>
          <div className="bg-white circle">
            <img
              src="https://res.cloudinary.com/bazeercloud/image/upload/v1710753053/images/swastik_sp5l8s.png"
              alt="Swastik"
              className="bg-white"
            />
          </div>
          <div className="circle">
            <img
              src="https://res.cloudinary.com/bazeercloud/image/upload/v1710753313/images/shri_xvockj.png"
              alt="shri"
              className="bg-white "
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/bazeercloud/image/upload/v1710763504/images/charan2_d1o96r.webp"
              alt="charn"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="flex flex-wrap items-center justify-center text-4xl font-bold">
        <p>Peacock Sankh</p>
      </div>
      <div className="flex flex-wrap justify-around ">
        {imageData2.map((item, index) => (
          <Card2 key={index} url={item.url} description={item.description} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
