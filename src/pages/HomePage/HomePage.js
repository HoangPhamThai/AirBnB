import React, { Component } from "react";
import Header from "../../components/header/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../components/footer/Footer";
export default class HomePage extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 4,
      arrows: true,
    };
    return (
      <section className="">
        <Header />
        <Slider className="container overflow-hidden" {...settings}>
          <div>
            <h3>Slide 1</h3>
          </div>
          <div>
            <h3>Slide 1</h3>
          </div>
          <div>
            <h3>Slide 1</h3>
          </div>
          <div>
            <h3>Slide 2</h3>
          </div>
          <div>
            <h3>Slide 4</h3>
          </div>
          <div>
            <h3>Slide 5</h3>
          </div>
          <div>
            <h3>Slide 6</h3>
          </div>
          <div>
            <h3>Slide 3</h3>
          </div>
          <div>
            <h3>Slide 3</h3>
          </div>
          <div>
            <h3>Slide 3</h3>
          </div>
        </Slider>
        <Footer />
      </section>
    );
  }
}
