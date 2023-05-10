import React from "react";

//Import style
import styles from "../Components/css/PropertyCard.module.css";

const PropertyCard = (props) => {
  return (
    <div className={styles.container}>
      <img src={props.propertyImage} alt={props.propertyTitle} />
      <h3>{props.propertyDescription}</h3>
      <div className={styles.details}>
        <p>{props.propertyDetails}</p>
      </div>
      <div className={styles.address}>
        <div className={styles.listStyle}>
            <span></span>
        </div>
        <div>
            <h4>{props.propertyTitle}</h4>
            <p>{props.addressContent}</p>

        </div>
      </div>
      <div className={styles.priceDetails}>
        <div>
            <h4>{props.price}</h4>
            <p>{props.priceDets}</p>
         
        </div>
        <button onClick={props.viewDetails}>View Details</button>
      </div>
    </div>
  );
};

export default PropertyCard;
