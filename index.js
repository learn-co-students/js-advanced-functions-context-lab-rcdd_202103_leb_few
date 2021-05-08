/* Your Code Here */
function createEmployeeRecord(arr) {
  return {
    firstName : arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: []
    
  };
}

function createEmployeeRecords(arrs){
   return arrs.map(record => {
    return createEmployeeRecord(record)
  })
}

function createTimeInEvent (dates){
  let DH = dates.split(" ");
  // console.log(DH[0]);
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(DH[1] ,10),
    date: DH[0],
  })
  
return this
}


function createTimeOutEvent (dates){
  let DH = dates.split(" ");
  // console.log(DH[0]);
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(DH[1] ,10),
    date: DH[0],
  })
  
return this
}

function hoursWorkedOnDate(date){
  let IR = this.timeInEvents.find(el =>{
    return el.date === date
  })
  let OR = this.timeOutEvents.find(el =>{
    return el.date === date
  })
  let IH = IR.hour
  let OH = OR.hour
  return ((OH - IH)/100)
}

function wagesEarnedOnDate(date){
  let PayOwed = hoursWorkedOnDate.call(this,date) * this.payPerHour

  return parseInt(PayOwed)

  return PayOwed

}

function findEmployeeByFirstName(srcArray, firstName){
  return srcArray.find(record=>{
    return record.firstName === firstName
  })
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function calculatePayroll(record){
  return record.reduce((a,c)=>{
    return a + allWagesFor.call(c)
  },0)
  return PayOwedAll

}
let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}