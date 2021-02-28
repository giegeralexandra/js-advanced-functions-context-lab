/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(recordArray){
    let employee = {};
    employee.firstName = recordArray[0];
    employee.familyName = recordArray[1];
    employee.title = recordArray[2];
    employee.payPerHour = recordArray[3];
    employee.timeInEvents = [];
    employee.timeOutEvents = []
    return employee
}

function createEmployeeRecords(recordsArray){
    return recordsArray.map(function(r){
        return createEmployeeRecord(r)
    })
}

function createTimeInEvent(dateStamp){
    let [date,hour] = dateStamp.split(" ");
    this.timeInEvents.push({
        type: "TimeIn", 
        hour: parseInt(hour,10),
        date: date 
    })
    return this 
}

function createTimeOutEvent(dateStamp){
    let [date,hour] = dateStamp.split(" ");
    this.timeOutEvents.push({
        type: "TimeOut", 
        hour: parseInt(hour,10),
        date: date 
    })
    return this 
}

function hoursWorkedOnDate(dateStamp){
    let timeStart = this.timeInEvents.find(function(t){
        return t.date === dateStamp
    })
    let timeStop = this.timeOutEvents.find(function(t){
        return t.date === dateStamp
    })
    return (timeStop.hour - timeStart.hour)/100
    
}

function wagesEarnedOnDate(dateStamp){
    return hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour
}

function findEmployeeByFirstName(recordsArray, nameRequested){
    return recordsArray.find(function(r){
        return r.firstName === nameRequested
    })
}

function calculatePayroll(recordsArray){
    return recordsArray.reduce(function(total, record){
        return total + allWagesFor.call(record)
    }, 0)
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

