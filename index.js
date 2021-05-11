/* Your Code Here */
function createEmployeeRecord(array){
     return {
         firstName: array[0],
         familyName: array[1],
         title: array[2],
         payPerHour: array[3],
         timeInEvents: [],
         timeOutEvents: []
     }
 }
 function createEmployeeRecords(array){
     return array.map(empArray => createEmployeeRecord(empArray))
 }
 function createTimeInEvent(date){
     let dateArr = date.split(" ")
     let e = {
         type: "TimeIn",
         hour: parseInt(dateArr[1]),
         date: dateArr[0]
     }
     this.timeInEvents.push(e)
     return this
 }
 function createTimeOutEvent(date){
     let dateArr = date.split(" ")
     let e = {
         type: "TimeOut",
         hour: parseInt(dateArr[1]),
         date: dateArr[0]
     }
     this.timeOutEvents.push(e)
     return this
 }
 function hoursWorkedOnDate(date){
     let timeInEvent = this.timeInEvents.find(e => e.date === date).hour/100
     let timeOutEvent = this.timeOutEvents.find(e => e.date === date).hour/100
     return timeOutEvent - timeInEvent
 }
 function wagesEarnedOnDate(date){
     return hoursWorkedOnDate.call(this, date) * this.payPerHour
 }
 function calculatePayroll(array){
     let payroll = array.reduce((memo, record) => {
         return memo + allWagesFor.call(record)
     }, 0)
     return payroll
 }
 function findEmployeeByFirstName(collection, name){
     return collection.find(record => record.firstName === name)
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
