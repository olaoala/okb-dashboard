import React from "react";
import Chart from "react-apexcharts";

const data = {
  options: {
    chart: {
      id: "basic-bar"
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
        borderRadius: 4,
        horizontal: false,
        grouped: true,
        barHeight: "70%",
        dataLabels: {
          position: "top"
        }
      }
    },
    fill: {
      opacity: 1
    },
    legend: {
      position: "top"
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
  ]
};

const ColumnChart = () => {
  return (
    <div>
      <Chart
        options={data.options}
        series={data.series}
        type="bar"
        height={400}
      />
    </div>
  );
};

export default ColumnChart;
