
const data = {
  labels: ['', 'Week 1','', 'Week 2','', 'Week 3','', 'Week 4', ''],
  datasets: [
    {
      label: 'Guest           ',
      data: [100, 400, 200, 50, 150,500,100,50,500],
      fill: false,
      borderColor: '#E9A0A0',
      tension: 0.4,
      pointStyle: false,
      radius: 3,
      secondary: false,
    },
    {
      label: 'User',
      data: [400, 100, 150, 300, 450, 200,300,50,150],
      fill: false,
      borderColor: '#9BDD7C',
      tension: 0.4,
      pointStyle:false,
      radius: 3,
      secondary: false,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        borderWidth: 5,
      },
      ticks: {
        min: 0,
        max: 500,
        stepSize: 100,
      },
    },
    x: {
      grid: {
        display: false,
        borderWidth: 5,
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      align:'end',
      labels: {
        boxWidth:3,
        boxHeight:3,
        useBorderRadius:true,
        borderRadius:5,
        padding:0,
        font:'Lato'
      },
    },
    title: {
      align:'start',
      display:'true',
      text:'Activities',
      padding:0,
      color:'black',
      font:{
        weight:'bold',
        size:20,
        family:'Montserrat'
      }
    },
    subtitle:{
      align:'start',
      display:'true',
      text:'May - June 2021',
      padding:0,
      font :{
        family:'Montserrat'
      }
    }
  },
};


export { options, data };