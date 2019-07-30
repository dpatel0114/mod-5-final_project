



const  snapshot = (obj)=> {
  // console.log(obj)
  let data = {
    labels: ["Remaining Balance", "Invested Balance"],
    // fontstyle: 'bold', fontColor: 'white',
    datasets: [{
      data: [obj.remaining_balance, obj.invested_balance],
      backgroundColor: [
      '#06AED5',
      '#FF6384'
      ],
      hoverBackgroundColor: [
      '#06AED5',
      '#FF6384'
      ]
    
   }]
}
return data

}

const monthlySnap=(obj)=> {
  // console.log(obj)

  let stockPrices = obj.map(d => d.open)
  let stockDates = obj.map(d=> d.date)


  let data = {
    labels: stockDates,
    datasets: [{
      data : stockPrices,
      label: 'My First dataset',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
    }]
  }
  console.log(data)

  return data

}



export {snapshot, monthlySnap}
