import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Checkbox from "@mui/material/Checkbox";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Pagination } from "swiper";
function MainCard() {
  return (
    <div className="MainCard">
      <div className="wrapper">
        <div className="sidebar">
          <div className="sidebar_wrapper">
            <ul>
              <li>
                <a href="/">
                  <img src="images/Home.png" /> Главная
                </a>
              </li>
              <li>
                <a href="/">
                  <img src="images/Document.png" /> Заказы
                </a>
              </li>
              <li>
                <a href="/">
                  <img src="images/Bag.png" /> Товары
                </a>
              </li>
              <li>
                <a href="/">
                  <img src="images/Star.png" />
                  Отзывы
                </a>
              </li>
              <li className="active">
                <a href="/">
                  <img src="images/korzina.png" />
                  <p>Оформить заказ</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="main_section">
          <div className="top_section">
            <div className="this_page">
              <p>
                <a href="">
                  Заявки <ChevronRightIcon />
                </a>{" "}
                <a href="/">
                  Оформить заказ <ChevronRightIcon />
                </a>
                <span>
                  Оформить заказСмартфон Apple iPhone 11 128 Gb Slim Box черный
                </span>
              </p>
            </div>
          </div>
          <div className="main_card">
            <div className="title">
              <h2>Смартфон Apple iPhone 11 128 Gb Slim Box черный</h2>
            </div>
            <div className="product_wrapper">
              <div className="left_box">
                <Swiper
                  effect={"fade"}
                  pagination={true}
                  modules={[EffectFade, Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="slider_back">
                      <img src="images/item1.png" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slider_back">
                      <img src="images/item2.png" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slider_back">
                      <img src="images/item3.png" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slider_back">
                      <img src="images/item4.png" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="right_box">
                <div className="price_origin">
                  <p>Цена телефона</p>
                  <h4>6 000 000 сум</h4>
                </div>
                <div className="price_origin2">
                  <p>Общая цена (с наценкой)</p>
                  <div className="new_price">
                    <h4>7 300 000 сум</h4>
                    <p>2 433 000 сум</p>
                    <span> x3</span>
                  </div>
                </div>
                <div className="for_credit">
                  <ul>
                    <li>3 мес</li>
                    <li>6 мес</li>
                    <li>12 мес</li>
                    <li>24 мес</li>
                  </ul>
                </div>
                <p className="additional_percent">
                  Наценка: <span>5%</span>
                </p>
                <div className="characteristics">
                  <p className="all_chars">Общие характеристики</p>
                  <p>Тип: моноблок (классический)</p>
                  <p>Стандарт: 2G, 3G, 4G (LTE), 5G</p>
                  <p>Операционная система: iOS 14</p>
                  <p className="more">
                    Показать все <ChevronRightIcon />
                  </p>
                </div>
              </div>
            </div>
            <div className="adv_s">
              <p className="title">Акции</p>
              <ul>
                <li>
                  <img src="images/obmen.png" />
                  <div>
                    <p>Обменяй свой старый айфон и получи скидку на новый</p>
                    <p>- 400 000</p>
                  </div>
                  <Checkbox
                    labelStyle={{ color: "#00C48C" }}
                    iconStyle={{ fill: "white" }}
                  />
                </li>
                <li>
                  <img src="images/aksiya.png" />
                  <div>
                    <p>Обменяй свой старый айфон и получи скидку на новый</p>
                    <p>- 400 000</p>
                  </div>
                  <Checkbox />
                </li>
                <li>
                  <img src="images/discount.png" />
                  <div>
                    <p>Обменяй свой старый айфон и получи скидку на новый</p>
                    <p>- 400 000</p>
                  </div>
                  <Checkbox />
                </li>
                <li>
                  <img src="images/discount.png" />
                  <div>
                    <p>Обменяй свой старый айфон и получи скидку на новый</p>
                    <p>- 400 000</p>
                  </div>
                  <Checkbox />
                </li>
              </ul>
            </div>
            <button className="add_to_card">Добавить в корзину</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
