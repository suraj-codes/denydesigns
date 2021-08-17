import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
const Header = () => {
  const [show, setShow] = useState(false);
  const history = useHistory();
  return (
    <div className="header">
      <div className="header__left">
        <img
          onClick={() => {
            history.push("/");
          }}
          src="https://cdn.shopify.com/s/files/1/0068/2302/t/185/assets/deny_designs_logo.svg?v=2968452402992386186"
          alt="logo"
          className="desktoplogo"
        />
        <img
          onClick={() => {
            history.push("/");
          }}
          src="https://cdn.shopify.com/s/files/1/0068/2302/t/185/assets/deny_designs_logo_mobile.svg?v=772717987177132839"
          alt="logo"
          className="mobilelogo"
        />
        <img
          onClick={() => {
            setShow(!show);
          }}
          src="https://cdn0.iconfinder.com/data/icons/heroicons-ui/24/icon-menu-512.png"
          alt="menuicon"
          className="menuicon"
        />
        <div className="header__menu">
          <Link to="/products">Products</Link>
          <Link to="/collections">Collections</Link>
          <Link to="story">Our Story</Link>
          <Link to="art">Art</Link>
          <Link to="wholesale">Wholesale</Link>
        </div>
        {show ? (
          <div className="header__mobilemenu">
            <Link
              to="/products"
              onClick={() => {
                setShow(false);
              }}
            >
              Products
            </Link>
            <Link
              onClick={() => {
                setShow(false);
              }}
              to="/collections"
            >
              Collections
            </Link>
            <Link
              onClick={() => {
                setShow(false);
              }}
              to="story"
            >
              Our Story
            </Link>
            <Link
              onClick={() => {
                setShow(false);
              }}
              to="art"
            >
              Art
            </Link>
            <Link
              onClick={() => {
                setShow(false);
              }}
              to="wholesale"
            >
              Wholesale
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="header__right">
        <img
          title="Search"
          src="//cdn.shopify.com/s/files/1/0068/2302/t/185/assets/blk_search_icon.svg?v=6989964156674777294"
          alt="search"
        />
        <img
          onClick={() => {
            history.push("/profile");
          }}
          title="Wholesale Login"
          src="//cdn.shopify.com/s/files/1/0068/2302/t/185/assets/blk_person_icon.svg?v=11859447595771503903"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Header;
