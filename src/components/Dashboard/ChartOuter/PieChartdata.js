
const data={
     labels:['Basic Tees','Custom Short Pants','Super Hoodies'],
     datasets: [
        {
            data: [14,31,55],
            backgroundColor: ["#EE8484","#F6DC7D","#98D89E",],
            borderWidth:0
        }
      ]
}

const options= {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        align:'end',
        labels: {
            boxWidth:5,
            boxHeight:5,
            useBorderRadius:true,
            borderRadius:5,
            padding:20,
            font:{
                family:'Montserrat',
                weight:'bold'
            },
            color:'black'
          },
      },
      title: {
        display: true,
        align:'start',
        text: 'Top Products',
        padding:10,
        color:"black",
        font:{
            family:"Montserrat",
            size:15,
        }
      },
        subtitle:{
            align:'end',
            display:true,
            text:'May - June 2021',
            padding:0,
            font :{
              family:'Montserrat'
            }
          
      }
    }
}
export {data,options}