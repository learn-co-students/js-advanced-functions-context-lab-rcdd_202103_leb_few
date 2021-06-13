/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// let allWagesFor = function () {
//     let eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
//     })
//
//     let payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
// 
//     return payable
// }


function createEmployeeRecord(array){
 let obj = {
   'firstName': array[0],
   'familyName': array[1],
   'title': array[2],
   'payPerHour': array[3],
   'timeInEvents': [],
   'timeOutEvents': []
 }
 return obj;
}

function createEmployeeRecords(array){
 let result = array.map(function(arr){
   return createEmployeeRecord(arr);
 })
 return result;
}

function createTimeInEvent(date){
 let dateArr = date.split(" ");
 let obj = {
   'type': "TimeIn",
   'hour': parseInt(dateArr[1]),
   'date': dateArr[0],
 }
 this.timeInEvents.push(obj);
 return this;
}

function createTimeOutEvent(date){
 let dateArr = date.split(" ");
 let obj = {
   'type': "TimeOut",
   'hour': parseInt(dateArr[1]),
   'date': dateArr[0],
 }
 this.timeOutEvents.push(obj);
 return this;
}

function hoursWorkedOnDate(date){
 let dateInObj = this.timeInEvents.find(function(obj){
   return obj.date === date;
 });
 let dateOutObj = this.timeOutEvents.find(function(obj){
   return obj.date === date;
 });
 let time = dateOutObj.hour - dateInObj.hour;
 return time/100;
}

function wagesEarnedOnDate(date){
 let hours = hoursWorkedOnDate.call(this, date);
 return hours * this.payPerHour;
}

function findEmployeeByFirstName(employees, firstName){
 let result = employees.find(function(employee){
   return employee.firstName === firstName;
 })
 return result;
}

function calculatePayroll(employees){
 let result = employees.reduce(function(accumulator, current){
   return accumulator + allWagesFor.call(current);
 }, 0);
 return result;
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
