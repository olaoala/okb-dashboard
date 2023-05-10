import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
//Component Imports
import Sidebar from '../Components/Sidebar';
import Topnav from '../Components/Topnav';
// import Arrow from "../../Assets/arrowdown.png"
import logo from "../Assets/bigLogo.png"
import dummy from "../Assets/dummy-one.png"
import { AiOutlineArrowDown} from "react-icons/ai";




import PropertyCard from "../Components/PropertyCard";
//styles import
import styles from "../Pages/css/Property.module.css";

const PropertiesList = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const [allProperties, setAllProperties] = useState([]);
  const [filter, setFilter] = useState("")
  const [filterToggle, setFilterToggle] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [unit, setUnit] = useState("");

  const [properties, setProperties] = useState([
    {
      id: 1,
      img: dummy,
      name: "Luxury Apartment",
      address: "123 Main St, New York",
      price: "$1,500,000",
      unit: "3 bedrooms, 2 baths",
      applicants: 5,
      areaOfSite:"200,000"
    },
    {
      id: 2,
      img: dummy,

      name: "Modern Townhouse",
      address: "456 Oak St, San Francisco",
      price: "$1,200,000",
      unit: "4 bedrooms, 3 baths",
      applicants: 8,
      areaOfSite:"200,000"

    },
    {
      id: 3,
      img: dummy,

      name: "Spacious Condo",
      address: "789 Pine St, Los Angeles",
      price: "$1,800,000",
      unit: "2 bedrooms, 2 baths",
      applicants: 3,
      areaOfSite:"200,000"

    },
  ]);

  const [newProperty, setNewProperty] = useState({
    name: "",
    address: "",
    price: "",
    unit: "",
  });
  const handleAddProperty = (e) => {
    e.preventDefault();
    const newProperty = {
      name,
      address,
      price,
      unit,
    };
    setProperties([...properties, newProperty]);
    setShowModal(false);
    setName("");
    setAddress("");
    setPrice("");
    setUnit("");
  };

  const toggleFilter = () => {
    setFilterToggle(!filterToggle)

  }

 
 
  return (
    <div className={styles.container}>
         <Topnav />
    <button className={styles.addPropertyButton} onClick={() => setShowModal(true)}>
        Add Property
      </button>
      {showModal && (
        <div className={styles.addPropertyModal}>
          <form onSubmit={handleAddProperty}>
            <h2 className={styles.modalTitle}>Add Property</h2>
            <label className={styles.modalLabel}>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            <label className={styles.modalLabel}>Address:</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
            <label className={styles.modalLabel}>Price:</label>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
            <label className={styles.modalLabel}>Unit:</label>
            <input type="number" value={unit} onChange={(e) => setUnit(e.target.value)} required />
            <div className={styles.modalButtons}>
              <button type="submit" className={styles.saveButton}>Save</button>
              <button type="button" className={styles.cancelButton} onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </form>
        </div>
      )}
      <div className={styles.content}>
        <Sidebar />
       
        <div className={styles.property}>
          <div className={styles.header}>
            <h2>Listed Properties</h2>
            <div className={styles.filterSec}>
              <button onClick={toggleFilter}>Filter by location <img src={AiOutlineArrowDown} alt="" /></button>
              
            
            {filterToggle &&
              <ul className={styles.locationList}>
                <li onClick={() => {
                  setFilter("&city= ");
                  setFilterToggle(false)
             
                }}>All</li>
                <li onClick={() => {
                  setFilter("&city=kosofe");
                  setFilterToggle(false)
             
                }}>Kosofe</li>
                <li  onClick={() => {
                  setFilter("&city=kuje");
                  setFilterToggle(false)
          
                }}>Kuje</li>
                <li  onClick={() => {
                  setFilter("&city=lekki");
                  setFilterToggle(false)
            
                }}>Lekki</li>
              </ul>


            }

            </div>
         
          </div>
          <div className={styles.propertyList}>
            {properties.map((property) => (
              <PropertyCard
                propertyImage={property.img}
                propertyTitle={property.name}
                propertyDescription="3 Bedroom Detached Terrace Duplex"
                propertyDetails={
                  <ul>
                    <li>{property.unit} Bed</li>{" "}
                    <li>{property.areaOfSite}sqm</li>
                  </ul>
                }
                addressContent={property.address}
                price="N 15 million outright payment"
                priceDets="Payment 2: 19 million (12 million equity, 7 million mortgage)"
                viewDetails={() =>
                  navigate("/Property/Details", {
                    state: {
                      id: property.id,
                    },
                  })
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesList;
