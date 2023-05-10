import React, {useState} from 'react';
// import { NavLink } from 'react-router-dom';
// import  Styles  from '../Components/css/Sidebar.module.css';
import Sidebar from '../Components/Sidebar';
import Topnav from '../Components/Topnav';
import Styles from '../Pages/css/Dashboard.module.css';
import Chart from "react-apexcharts";
import dummyImage from '../Assets/dummy.png';
import logo from "../Assets/bigLogo.png"
import { BsFillHousesFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { GiPayMoney,GiReceiveMoney } from "react-icons/gi";





function Dashboard() {

  const data = {
    options: {
      chart: {
        id: "basic-bar"
      },
      toolbar: {
        show: false // remove the menu bar
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ]
      },
      yaxis: {
        title: {
          text: "Number of Projects / Customers"
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 2,
          horizontal: false,
          grouped: false,
          barHeight: "90%",
          dataLabels: {
            position: "top"
          }
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: "bottom"
      },
      title: {
        text: "Summary of Total Projects and Total Customers",
        align: "center"
      }
    },
    series: [
      {
        name: "Total Projects",
        data: [25, 30, 45, 50, 40, 35, 20, 30, 35, 40, 30, 25]
      },
      {
        name: "Total Customers",
        data: [20, 25, 40, 45, 35, 30, 25, 20, 30, 35, 25, 20]
      }
    ],
    
  };
  const houses = [
    {
      name: 'Sunny Villa',
      address: '123 Main Street',
      price: '$500,000',
      applicants: 10,
      remainingUnits: 5,
    },
    {
      name: 'Ocean View',
      address: '456 Beach Blvd',
      price: '$1,200,000',
      applicants: 7,
      remainingUnits: 2,
    },
    {
      name: 'Cozy Cottage',
      address: '789 Maple Ave',
      price: '$250,000',
      applicants: 2,
      remainingUnits: 1,
    },
    // Add more houses as needed
  ];
  
return(
    <div>
        <div>
        <Sidebar/>
        <Topnav/>
        </div>
      <div className={Styles.dashboardboxescontainer}>
      <div className={Styles.dashboardbox}>
      <BsFillHousesFill className={Styles.icon}/>
        <div>
        <h2>Total Projects</h2>
        <p>500</p>
        </div>
      </div>
      <div className={Styles.dashboardbox}>
      <FaUsers className={Styles.icon}/>
        <div>
        <h2>Total Customers</h2>
        <p>100</p>
        </div>
      </div>
      <div className={Styles.dashboardbox}>
      <GiPayMoney className={Styles.icon}/>
        <div>
        <h2>Total Amount Paid</h2>
        <p>$10,000</p>
        </div>
      </div>
      <div className={Styles.dashboardbox}>
      <GiReceiveMoney className={Styles.icon}/>
        <div>
        <h2>Total Amount Due</h2>
        <p>$5,000</p>
        </div>
      </div>
    </div>

    <div className={Styles.summary}>
    <div className={Styles.chart}>
      <Chart
        options={data.options}
        series={data.series}
        type="bar"
        height={400}
        width={600}
        
      />
    </div>
    <div className={Styles.card}>
      <h2 className={Styles.heading}>Top Selling Houses</h2>
      <div className={Styles.topHousescontainer}>
        {houses.map((house, index) => (
          <div className={Styles.house} key={index}>
            <img src={dummyImage} alt="House" className={Styles.image} />
            <div className={Styles.details}>
              <h2 className={Styles.name}>{house.name}</h2>
              <p className={Styles.address}>{house.address}</p>
              <p className={Styles.price}>Price: {house.price}</p>
              <p className={Styles.applicants}>No of applicants: {house.applicants}</p>
              <p className={Styles.remaining}>Remaining units: {house.remainingUnits}</p>
            </div>
          </div>
        ))}
      </div>
    </div>        
   
    </div>
   
    <div>

    </div>
     

    </div>
    );
}

export default Dashboard;
