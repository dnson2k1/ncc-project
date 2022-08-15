import React from "react";
import PropTypes from "prop-types";

const ListItem = ({ item }) => {
  return (
    <div className="list-item">
      <h1 className="list-item-heading">{item.heading}</h1>
      <div className="list-item-info">
        <div className="list-item-info-content">
          <div className="list-item-info-img">
            <img src={item.srcIcon} alt="HTML ICON" />
          </div>
          <div className="list-item-info-desc">
            <h2>{item.content1}</h2>
          </div>
        </div>
        <h2>{item.content2}</h2>
      </div>
    </div>
  );
};

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ListItem;
