import React from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Link from "next/link";
function Goods() {
  return (
    <div className="Goods">
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
                <a href="/card">
                  Заявки <ChevronRightIcon />
                </a>{" "}
                <span>Оформить заказ</span>
              </p>
            </div>
            <div className="title">
              <h2>Оформить заказ</h2>
            </div>
            <div className="search">
              <form>
                <input
                  type="text"
                  placeholder="Поиск по названию товара"
                ></input>
                <button type="">
                  <img src="images/Search.png" />
                </button>
              </form>
            </div>
          </div>
          <div className="goods_wrapper">
            <div className="products_title">
              <h3>
                Все товары (<span>123</span>)
              </h3>
            </div>
            <div className="products_wrapper">
              <div className="product">
                <Link href="/card">
                  <div className="product_wrapper">
                    <div className="product_image">
                      <img className="item_image" src="images/new.png" />
                      <div className="additionals">
                        <div>
                          <img src="images/aksiya.png" />
                        </div>
                        <div>
                          <img src="images/discount.png" />
                        </div>
                      </div>
                    </div>
                    <div className="product_name">
                      <h4>Смартфон Samsung Galaxy S22 Ultra</h4>
                      <h3 className="price">7 300 000 сум</h3>
                      <div className="credit_wrapper">
                        <h4 className="credit">от 2 435 000 сум </h4>
                        <span>x24</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="product">
                <Link href="/card">
                  <div className="product_wrapper">
                    <div className="product_image">
                      <img className="item_image" src="images/new2.png" />
                      <div className="additionals">
                        <div>
                          <img src="images/obmen.png" />
                        </div>
                      </div>
                    </div>
                    <div className="product_name">
                      <h4>Смартфон Apple iphone 11 64GB...</h4>
                      <h3 className="price">7 300 000 сум</h3>
                      <div className="credit_wrapper">
                        <h4 className="credit">от 2 435 000 сум </h4>
                        <span>x24</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="product">
                <Link href="/card">
                  <div className="product_wrapper">
                    <div className="product_image">
                      <img className="item_image" src="images/item3.png" />
                      <div className="additionals">
                        <div>
                          <img src="images/obmen.png" />
                        </div>
                      </div>
                    </div>
                    <div className="product_name">
                      <h4>Наушники Apple Airpods 2...</h4>
                      <h3 className="price">7 300 000 сум</h3>
                      <div className="credit_wrapper">
                        <h4 className="credit">от 2 435 000 сум </h4>
                        <span>x24</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="product">
                <a href="/card">
                  <div className="product_wrapper">
                    <div className="product_image">
                      <img className="item_image" src="images/item4.png" />
                      <div className="additionals">
                        <div>
                          <img src="images/aksiya.png" />
                        </div>
                        <div>
                          <img src="images/discount.png" />
                        </div>
                      </div>
                    </div>
                    <div className="product_name">
                      <h4>Samsung Galaxy Z Fold 64GB...</h4>
                      <h3 className="price">7 300 000 сум</h3>
                      <div className="credit_wrapper">
                        <h4 className="credit">от 2 435 000 сум </h4>
                        <span>x24</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="product">
                <a href="/card">
                  <div className="product_wrapper">
                    <div className="product_image">
                      <img className="item_image" src="images/item2.png" />
                      <div className="additionals">
                        <div>
                          <img src="images/aksiya.png" />
                        </div>
                        <div>
                          <img src="images/discount.png" />
                        </div>
                      </div>
                    </div>
                    <div className="product_name">
                      <h4>Смартфон Apple iphone 11...</h4>
                      <h3 className="price">7 300 000 сум</h3>
                      <div className="credit_wrapper">
                        <h4 className="credit">от 2 435 000 сум </h4>
                        <span>x24</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="product">
                <a href="/card">
                  <div className="product_wrapper">
                    <div className="product_image">
                      <img className="item_image" src="images/item1.png" />
                      <div className="additionals">
                        <div>
                          <img src="images/aksiya.png" />
                        </div>
                        <div>
                          <img src="images/discount.png" />
                        </div>
                      </div>
                    </div>
                    <div className="product_name">
                      <h4>Смартфон Samsung Galaxy S22 Ultra</h4>
                      <h3 className="price">7 300 000 сум</h3>
                      <div className="credit_wrapper">
                        <h4 className="credit">от 2 435 000 сум </h4>
                        <span>x24</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="product">
                <a href="/card">
                  <div className="product_wrapper">
                    <div className="product_image">
                      <img className="item_image" src="images/item1.png" />
                      <div className="additionals">
                        <div>
                          <img src="images/aksiya.png" />
                        </div>
                        <div>
                          <img src="images/discount.png" />
                        </div>
                      </div>
                    </div>
                    <div className="product_name">
                      <h4>Смартфон Samsung Galaxy S22 Ultra</h4>
                      <h3 className="price">7 300 000 сум</h3>
                      <div className="credit_wrapper">
                        <h4 className="credit">от 2 435 000 сум </h4>
                        <span>x24</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="product">
                <a href="/card">
                  <div className="product_wrapper">
                    <div className="product_image">
                      <img className="item_image" src="images/item1.png" />
                      <div className="additionals">
                        <div>
                          <img src="images/aksiya.png" />
                        </div>
                        <div>
                          <img src="images/discount.png" />
                        </div>
                      </div>
                    </div>
                    <div className="product_name">
                      <h4>Смартфон Samsung Galaxy S22 Ultra</h4>
                      <h3 className="price">7 300 000 сум</h3>
                      <div className="credit_wrapper">
                        <h4 className="credit">от 2 435 000 сум </h4>
                        <span>x24</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="product">
                <a href="/card">
                  <div className="product_wrapper">
                    <div className="product_image">
                      <img className="item_image" src="images/item1.png" />
                      <div className="additionals">
                        <div>
                          <img src="images/aksiya.png" />
                        </div>
                        <div>
                          <img src="images/discount.png" />
                        </div>
                      </div>
                    </div>
                    <div className="product_name">
                      <h4>Смартфон Samsung Galaxy S22 Ultra</h4>
                      <h3 className="price">7 300 000 сум</h3>
                      <div className="credit_wrapper">
                        <h4 className="credit">от 2 435 000 сум </h4>
                        <span>x24</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="product">
                <a href="/card">
                  <div className="product_wrapper">
                    <div className="product_image">
                      <img className="item_image" src="images/item1.png" />
                      <div className="additionals">
                        <div>
                          <img src="images/aksiya.png" />
                        </div>
                        <div>
                          <img src="images/discount.png" />
                        </div>
                      </div>
                    </div>
                    <div className="product_name">
                      <h4>Смартфон Samsung Galaxy S22 Ultra</h4>
                      <h3 className="price">7 300 000 сум</h3>
                      <div className="credit_wrapper">
                        <h4 className="credit">от 2 435 000 сум </h4>
                        <span>x24</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goods;
