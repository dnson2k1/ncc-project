import React from "react";
import logo from "../assets/images/logoNCC_1.png";

import htmlIcon from "../assets/images/html-icon.png";
import urlIcon from "../assets/images/url-icon.png";
import cssIcon from "../assets/images/css-icon.png";
import ListItem from "../components/ListItem";

const ITEMS = [
  {
    srcIcon: cssIcon,
    heading: "Lorem ipsum dolor sit amet",
    content1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sednon dui sodales, faucibus libero ut, posuere felis.",
    content2:
      " ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
  },
  {
    srcIcon: htmlIcon,
    heading: "Lorem ipsum dolor sit amet",
    content1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sednon dui sodales, faucibus libero ut, posuere felis.",
    content2:
      " ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
  },
  {
    srcIcon: urlIcon,
    heading: "Lorem ipsum dolor sit amet",
    content1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sednon dui sodales, faucibus libero ut, posuere felis.",
    content2:
      " ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
  },
];

const Home = () => {
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="title">
        <h1>Lorem ipsum dolor sit asmet?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          consequat placerat. Vestibulum auctor pellentesque sem, eu posuere
          erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis,
          ligula in mattis sodales, augue justo tristique nulla, sed lacinia
          ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh
          auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque
          suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet
          luctus augue tristique eu. Donec vulputate odio neque, sed semper
          turpis pellentesque a.
        </p>
      </div>
      <div className="list">
        {ITEMS &&
          ITEMS.map((item, index) => <ListItem key={index} item={item} />)}
      </div>
    </div>
  );
};

export default Home;
