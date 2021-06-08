function createEmployeeRecord(array=[firstname, familyname, title,  payrateperhour]){
let personinfo = {
firstName:array[0],
familyName:array[1],
title:array[2],
payPerHour:array[3],
timeInEvents:[],
timeOutEvents:[]
}
return personinfo;}
 function createEmployeeRecords(array){
   return array.map(function(row){
     return createEmployeeRecord(row)
 })

 }

 function createTimeInEvent(date){
   let date2=date.split(" ");
   let  type="TimeIn",
    hour= parseInt(date2[1],10),
    datee=date2[0]
    this.timeInEvents.push( {
     type:type,
     hour: hour,
     date:datee
   });
   return this;
 }
 function createTimeOutEvent(date){
   let date2=date.split(" ");
   let  type="TimeOut",
    hour= parseInt(date2[1],10),
    datee=date2[0]
    this.timeOutEvents.push( {
     type:type,
     hour: hour,
     date:datee
   });
   return this;
  }


 function hoursWorkedOnDate(date){
   let out=this.timeOutEvents.find(function(person){return person.date===date});
   let inn=this.timeInEvents.find(function(person){return person.date===date});
   return (out.hour - inn.hour) /100
 }

 function wagesEarnedOnDate(date){
  return hoursWorkedOnDate.call(this,date)*this.payPerHour;
 }
 function allWagesFor(){
   let dates = this.timeInEvents.map(function(e){
      return e.date
  })

  let payable = dates.reduce(function(acc, d){
      return acc+ wagesEarnedOnDate.call(this, d)
  }.bind(this), 0)

  return payable
}


function findEmployeeByFirstName(srcArray,firstName){
  return srcArray.find(person=>person.firstName=firstName)
}
function calculatePayroll(array){
  return array.reduce(function(acc, d){
      return acc + allWagesFor.call(d)
  }, 0)
}
