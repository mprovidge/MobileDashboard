const config = {
  type: 'line',
  data: {
    labels: ["B.e", "Ç.a", "Ç", "C.a", "C","Ş","B"],
    datasets: [{
      label: 'Qazanc',
      backgroundColor: '#395af5',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: '#395af5',
      tension: 0.5,
      pointRadius: 0,
      //fill: true,
      //pointBorderWidth: 0,
      //pointHoverBorderWidth: 1,
      //pointHoverRadius: 4
    },
    {
      label: 'Müştəri sayı',
      data: [15, 65, 30, 45, 16, 75, 60],
      //fill: true,
      backgroundColor: '#09b96e',
      borderColor: '#09b96e',
      tension: 0.5,
      pointRadius: 0,
      //pointBorderWidth: 0,
      //pointHoverBorderWidth: 1,
      //pointHoverRadius: 4
    },
    {
      label: 'Ortalama',
      data: [35, 25, 60, 25, 36, 45, 30],
      //fill: true,
      backgroundColor: '#f67e4a',
      borderColor: '#f67e4a',
      tension: 0.5,
      pointRadius: 0,
      //pointBorderWidth: 0,
      //pointHoverBorderWidth: 1,
      //pointHoverRadius: 4
    },
    {
      label: 'Çek sayı',
      data: [55, 27, 48, 56, 8, 12, 31],
      //fill: true,
      backgroundColor: '#ee5750',
      borderColor: '#ee5750',
      tension: 0.5,
      pointRadius: 0,
      //pointBorderWidth: 0,
      //pointHoverBorderWidth: 1,
      //pointHoverRadius: 4
    }]
  },
  options: {
    layout: {
      padding: 20
    },
    chartArea: {
      backgroundColor: 'rgba(251, 85, 85, 0.4)'
  },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
          drawOnChartArea: true,
          drawTicks: true,
          //color: "#333"
        }
      },
      y: {
        grid: {
          display: true,
          drawBorder: false,
          //drawOnChartArea: true,
          //drawTicks: false,
          //color: "#333"
        }
      }
    },
    plugins: {
      legend: {
        display: false,
        labels: {
          usePointStyle: true
        }
      }
    }
  }
};
const configData = {
  home: {
    title: "Əsas",
    largeButtons: [
      { name: "depo", title: "Anbar", data: "0 ₼" },
      { name: "kassa", title: "Kassa", data: "0 ₼" },
      { name: "debet", title: "Debet", data: "0 ₼" },
      { name: "kredit", title: "Kredit", data: "0 ₼" }
    ],
    smallButtons: [
      { name: "satis", title:"Satış" }
    ],
    chart:{
      filterRadioButton:[
        {
          name: "daily", title: "Günlük", data:{daily: true}
        },
        {
          name: "weekly", title: "Həftəlik", data:{weekly: true}
        },
        {
          name: "monthly", title: "Aylıq", data:{monthly: true}
        }
      ],
      config: config
    }
  },
  restaurant: {
    title: "Restoran",
    largeButtons: [
      { name: "statistics", title: "Statistika", data: "0 ₼" },
      { name: "kassa", title: "Kassa", data: "0 ₼" },
      { name: "odenilmez", title: "Ödənilməz", data: "0 ₼" },
      { name: "masa", title: "Masa", data: "0 ₼" }
    ],
    smallButtons: [
      { name: "satis", title:"Satış" }
    ],
    chart:{
      filterRadioButton:[
        {
          name: "daily", title: "Günlük", data:{daily: true}
        },
        {
          name: "weekly", title: "Həftəlik", data:{weekly: true}
        },
        {
          name: "monthly", title: "Aylıq", data:{monthly: true}
        }
      ],
      config: new Object(config)
    }
  }
};
const ctxHome = document.getElementById('myChartHome').getContext('2d');
const chartHome = new Chart(ctxHome, config);
const ctxRes = document.getElementById('myChartRes').getContext('2d');
const chartRes = new Chart(ctxRes, config);

function initRandom() {
  setData("");
  chartHome.update(config);
  for (const lb of configData.home.largeButtons) {
    lb.data = (Math.random() * 10000).toFixed(2) + " ₼";
    $("#home.first-section-center button.large-button[name='"+lb.name+"'] p").text(lb.data);
  }
  chartRes.update(config);
  for (const lb of configData.restaurant.largeButtons) {
    lb.data = (Math.random() * 10000).toFixed(2) + " ₼";
    $("#restaurant.first-section-center button.large-button[name='"+lb.name+"'] p").text(lb.data);
  }
}
initRandom();

const mainPage = document.querySelector("section.first-section");
const btnsHomeChart = document.querySelectorAll("#home.first-section-center button.small-btn");
const btnsResChart = document.querySelectorAll("#restaurant.first-section-center button.small-btn");
const btnsHomeLB = document.querySelectorAll("#home.first-section-center button.large-button");
const btnsResLB = document.querySelectorAll("#restaurant.first-section-center button.large-button");
const btnsHomeCB = document.querySelectorAll("#home.first-section-center button.column-button");
const btnsResCB = document.querySelectorAll("#restaurant.first-section-center button.column-button");
const btnsFooter = document.querySelectorAll(".first-section-footer button.footer-btn");

function init() {
  for (let i = 0; i < btnsHomeChart.length; i++) {
    btnsHomeChart[i].addEventListener("click", function () {
      for (let j = 0; j < btnsHomeChart.length; j++)
        if (j != i) {
          btnsHomeChart[j].classList.remove("focused");
          btnsHomeChart[i].classList.add("focused");
        }
      setData(btnsHomeChart[i].id);
      chartHome.update(config);
    });
  }
  
  for (let i = 0; i < btnsHomeChart.length; i++) {
    btnsResChart[i].addEventListener("click", function () {
      for (let j = 0; j < btnsResChart.length; j++) 
        if (j != i) {
          btnsResChart[j].classList.remove("focused");
          btnsResChart[i].classList.add("focused");
        }
      setData(btnsResChart[i].id);
      chartRes.update(config);
    });
  }

  for (let i = 0; i < btnsFooter.length; i++) {
    btnsFooter[i].addEventListener("click", function () {
      for (let j = 0; j < btnsFooter.length; j++) 
        if (j != i) {
          btnsFooter[j].classList.remove("active");
          btnsFooter[i].classList.add("active");
        }
      for (let j = 0; j < document.querySelectorAll(".first-section-center").length; j++) 
        if (j != i) {
          document.querySelectorAll(".first-section-center")[j].classList.remove("active");
          document.querySelector(".first-section-center"+"#"+btnsFooter[i].id).classList.add("active");
          //setData(btnsResChart[i].id);
        }
      if (btnsFooter[i].id == "home"){
        chartHome.update(config);
      }
      else if (btnsFooter[i].id == "restaurant"){
        chartRes.update(config);
      }
    });
  }
  //Large button click
  btnsHomeLB.forEach((e) => {
    e.addEventListener("click" ,function(){
      let name = e.getAttribute("name");
      document.querySelector("section.section[name='"+name+"'][tab-name='home']").classList.add("active");
      mainPage.setAttribute("hidden","");
    })
  });
  btnsResLB.forEach((e) => {
    e.addEventListener("click" ,function(){
      let name = e.getAttribute("name");
      document.querySelector("section.section[name='"+name+"'][tab-name='restaurant']").classList.add("active");
      mainPage.setAttribute("hidden","");
    })
  });
  //Column button click
  btnsHomeCB.forEach((e) => {
    e.addEventListener("click" ,function(){
      let name = e.getAttribute("name");
      document.querySelector("section.section[name='"+name+"'][tab-name='home']").classList.add("active");
      mainPage.setAttribute("hidden","");
    })
  });
  btnsResCB.forEach((e) => {
    e.addEventListener("click" ,function(){
      let name = e.getAttribute("name");
      document.querySelector("section.section[name='"+name+"'][tab-name='restaurant']").classList.add("active");
      mainPage.setAttribute("hidden","");
    })
  });
  /*
  document.querySelectorAll(".first-section-center").forEach((e, i) => {
    e.addEventListener("mousemove", function(t,l,o){
      console(this);
    });
  });
  */
  //Back button click
  document.querySelectorAll(".section-header svg").forEach((e, i) => {
    e.addEventListener("click", function(){
      document.querySelectorAll(".section.active").forEach((a)=>{
        a.classList.remove("active");
      });
      mainPage.removeAttribute("hidden");
    });
  });
/*
  document.querySelector('.first-section-center button.large-button').addEventListener("click", function () {
    document.querySelector('.second-section').classList.toggle('in');
  });
  document.querySelector('.second-section').addEventListener("click", function (e) {
    if (!this.classList.contains("in")) return;
    if (e.target.classList.contains("second-section"))
      document.querySelector('.second-section').classList.remove('in');
  });

 
  document.querySelector('.first-section button.left').addEventListener("click", function () {
    document.querySelector('.section-navbar').classList.toggle('in');
  });
  document.querySelector('.section-navbar').addEventListener("click", function (e) {
    if (!this.classList.contains("in")) return;
    if (e.target.classList.contains("section-navbar"))
      document.querySelector('.section-navbar').classList.remove('in');
  });

  document.querySelector('.section-header-navbar-list-button').addEventListener("click", function () {
    document.querySelector('.section-header-navbar-list-button-list').classList.toggle('in');
  });
  document.querySelector('.section-header-navbar-list-button-list').addEventListener("click", function (e) {
    if (!this.classList.contains("in")) return;
    if (e.target.classList.contains(".section-header-navbar-list-button-list"))
      document.querySelector('.section-header-navbar-list-button-list').classList.remove('in');
  });

  document.querySelector('.first-section button.right').addEventListener("click", function () {
    document.querySelector('.section-navbar-calendar').classList.toggle('in');
  });
  document.querySelector('.section-navbar-calendar').addEventListener("click", function (e) {
    if (!this.classList.contains("in")) return;
    if (e.target.classList.contains("section-navbar-calendar"))
      document.querySelector('.section-navbar-calendar').classList.remove('in');
  });
*/
}
init();

function getData(query = "") {
  let data = {
    title: "Mado",
    labels: ["B.e", "Ç.a", "Ç", "C.a", "C", "Ş", "B"],
    ds: [{
      label: 'Satış',
      color: '#395af5',
      backgroundColor: '#395af542',
      pointBorderWidth: 8,
      pointBorderColor: '#395af560',
      data: [],
      sum: "0 AZN",
    }/*,
    {
      label: 'Müştəri sayı',
      color: '#09b96e',
      data: [],
      sum: "0 AZN",
    },
    {
      label: 'Ortalama',
      color: '#f67e4a',
      data: [],
      sum: "0 AZN",
    },
    {
      label: 'Çek sayı',
      color: '#ee5750',
      data: [],
      sum: "0 AZN",
    }*/]
  };
  for (var ds of data.ds) {
    ds.data = [];
    for (var i = 0; i < data.labels.length; i++) {
      ds.data.push((Math.random() * 100).toFixed(0));
    }
    ds.sum = (Math.random() * 10000).toFixed(2) + " AZN";
  }
  return data;
}

function setData(query = "") {
  let data = getData(query);
  //document.querySelector("section.first div p").innerHTML = data.title;
  config.data.datasets = [];
  for (var i in data.ds) {
    config.data.datasets.push({
      label: data.ds[i].label,
      data: data.ds[i].data,
      backgroundColor: (data.ds[i].backgroundColor || data.ds[i].color),
      borderColor: (data.ds[i].borderColor || data.ds[i].color),
      tension: 0.5,
      fill: true,
      pointBorderColor: (data.ds[i].pointBorderColor || data.ds[i].color),
      pointBorderWidth: 4,
      pointRadius: 4
      //pointHoverBorderWidth: 1,
      //pointHoverRadius: 4
    });
    /*
    if (document.querySelectorAll("section.third p.text").length > i) {
      document.querySelectorAll("section.third p.text")[i].innerHTML = data.ds[i].label;
      document.querySelectorAll("section.third p.statik")[i].innerHTML = data.ds[i].sum;
    }
    */
  }
}
