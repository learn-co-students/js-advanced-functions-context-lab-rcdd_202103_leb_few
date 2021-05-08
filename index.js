function createEmployeeRecord(employees) {
return {
  firstName: employees[0],
familyName : employees[1],
  title :employees[2],
  payPerHour: employees[3],
  timeInEvents : [],
  timeOutEvents :[]
}
}

function createEmployeeRecords(arr) {
  return arr.map(s => createEmployeeRecord(s));
}

function createTimeInEvent(date) {
  let dateTime = date.split(' ')
  this.timeInEvents.push({type: "TimeIn",
    hour: parseInt(dateTime[1]),
		date: dateTime[0]})
return this
}
function createTimeOutEvent(date) {
  let dateTime = date.split(' ')
  this.timeOutEvents.push({type: "TimeOut",
    hour: parseInt(dateTime[1]),
		date: dateTime[0]})
return this
}

function hoursWorkedOnDate( date) {
  let timeIn = this.timeInEvents.find(e =>e.date == date)
	let timeOut = this.timeOutEvents.find(e =>e.date == date)
	return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(date) {
	let wage = hoursWorkedOnDate.call(this, date) * this.payPerHour
	return wage
}

function findEmployeeByFirstName(arr, firstName) {
	return arr.find(e => e.firstName == firstName)
}

function calculatePayroll(arr) {
	return arr.reduce((total, e) => allWagesFor.call(e) + total, 0);
}
function batteryBatches(firstname, familyname, title, payhour) {
const em={
  first: firstname,
  last : familyname,
  title : title,
  payPerHour: payhour
}
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
