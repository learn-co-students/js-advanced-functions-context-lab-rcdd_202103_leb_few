/* Your Code Here */

function createEmployeeRecord(arr) {
  return {
       firstName: arr[0],
       familyName: arr[1],
       title: arr[2],
       payPerHour: arr[3],
       timeInEvents: [],
       timeOutEvents: []
   }
}

function createEmployeeRecords(arr) {
  return arr.map(el => {
    return createEmployeeRecord(el);
  })
}

function createTimeInEvent(date) {
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(date.split(' ')[1]),
    date: date.split(' ')[0]
  });
  return this
}

function createTimeOutEvent(date) {
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(date.split(' ')[1]),
    date: date.split(' ')[0]
  });
  return this;
}

function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find(el => el.date === date).hour;
    let timeOut = this.timeOutEvents.find(el => el.date === date).hour;
    return (timeOut - timeIn) / 100;
}

function wagesEarnedOnDate(date) {
  return hoursWorkedOnDate.call(this,date) * this.payPerHour;
}

function findEmployeeByFirstName(records,fname) {
    return records.find(rec => rec.firstName === fname);
}

function calculatePayroll(records) {
  return records.reduce((total,current) => total + allWagesFor.call(current),0);
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
