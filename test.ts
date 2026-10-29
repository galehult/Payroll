import employeeInfo from './employee.json';
import dsrDetails from './dsr.json';

interface employee {
    name: string;
    paymentScheme: string;
    payrollParameter: string;
    monthlySalary: number;
    dailyRate: number;
}

interface dailyScheduleReport {
    absences: number;
    undertime: number;
    tardy: number;
    reg: number;
    ot: number;
    nd: number;
    ndot: number;
    rdreg: number;
    rdot: number;
    rdnd: number;
    rdndot: number;
    lhreg: number;
    lhot: number;
    lhnd: number;
    lhndot: number;
    shreg: number;
    shot: number;
    shnd: number;
    shndot: number;
    rdlhreg: number;
    rdlhot: number;
    rdlhnd: number;
    rdlhndot: number;
    rdshreg: number;
    rdshot: number;
    rdshnd: number;
    rdshndot: number;
    lhshreg: number;
    lhshot: number;
    lhshnd: number;
    lhshndot: number;
    rdlhshreg: number;
    rdlhshot: number;
    rdlhshnd: number;
    rdlhshndot: number;
}

const employee: employee = employeeInfo;
const dsr: dailyScheduleReport = dsrDetails;
const param: string[] = employee.payrollParameter.split("/");

function basicPay(employee: employee, dsr: dailyScheduleReport) {
    if (employee.paymentScheme === "Monthly" || employee.paymentScheme === "Semi-Monthly") {
        return employee.monthlySalary / 2;
    }

    if (employee.paymentScheme === "Daily") {
        return dsr.reg * employee.dailyRate;
    }

    throw new Error(`Unsupported payment scheme: ${employee.paymentScheme}`);
}

const undertime = (employee: employee, dsr: dailyScheduleReport, param: string[]): number => 
    ((employee.dailyRate / Number(param[1])) / 60) * dsr.undertime;

console.log(`Employee: ${employee.name}`);
console.log(`Payment Scheme: ${employee.paymentScheme}`);
console.log(`Basic Pay: ${basicPay(employee, dsr)}`);
console.log(`Undertime Deduction: ${undertime(employee, dsr, param)}`);
// console.log(`Daily Rate: ${employee.dailyRate}`);
// console.log(`Hourly Rate: ${employee.dailyRate / 9}`);
// console.log(`Minute Rate: ${(employee.dailyRate / 9) / 60}, Undertime: ${((employee.dailyRate / 9) / 60) * dsr.undertime}`);
console.log((558.9041 / 60) * dsr.undertime);