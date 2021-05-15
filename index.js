/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 function createEmployeeRecord(array) {
     return {firstName: array[0], familyName: array[1], title: array[2], payPerHour: array[3], timeInEvents: [], timeOutEvents: []}
 }

 function createEmployees(array) {
     const employees = [...array]
    //  array.forEach( employee => employees.push(createEmployeeRecord(employee)))
     return employees
 }

 function createTimeInEvent(timeIn) {
     const timeAr = timeIn.split(" ")
     const obj = {type: "TimeIn", hour: parseInt(timeAr[1]), date: timeAr[0]}
     this.timeInEvents.push(obj)
     return this
 }

 function createTimeOutEvent(timeOut) {
     const timeAr = timeOut.split(" ")
     const obj = {type: "TimeOut", hour: parseInt(timeAr[1]), date: timeAr[0]}
     this.timeOutEvents.push(obj)
     return this
 }

 function hoursWorkedOnDate (date) {

     const timeIn = this.timeInEvents.find(event => event.date === date)
     const timeOut = this.timeOutEvents.find(event => event.date === date)
     return timeOut.hour/100 - timeIn.hour/100
 }

 function wagesEarnedOnDate (date) {
     return hoursWorkedOnDate.call(this,date) * this.payPerHour
 }



 function createEmployeeRecords (array) {
     const employeeRecords = []
     array.forEach(arr => employeeRecords.push(createEmployeeRecord(arr)))
     return employeeRecords
 }

 function findEmployeeByFirstName(srcArray, firstName) {
     return srcArray.find(empl => empl.firstName === firstName)
 }

 function calculatePayroll (array) {
     return array.reduce((total, record) => total + allWagesFor.call(record), 0)
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
