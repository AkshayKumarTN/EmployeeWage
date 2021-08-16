console.log(" Employee Wage");
console.log("------------------UC-1----------------------------");
const IS_PRESENT=0;
let attendance=Math.floor(Math.random() * 2);
if(attendance==IS_PRESENT)
{
    console.log("Employee is Present");
}
else
{
    console.log("Employee is Absent");
}

console.log("------------------UC-2--AND--UC-3-----------------------");
// Calculating Daily Employee Wage based on part time or full time work...........
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

function getWorkingHours(empCheck){
switch (empCheck) {
    case IS_PART_TIME:
        return PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        return FULL_TIME_HOURS;
        break;
    default:
        return 0;
}
}
let empHrs = 0;
let empCheck = Math.floor(Math.random() *3);
empHrs = getWorkingHours(empCheck);
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp Wage : "+ empWage);