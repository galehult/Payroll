import employeeInfo from './employee.json';
import dsrDetails from './dsr.json';
import payrollItems from './payrollItems.json';

interface employee {
    name: string;
    paymentScheme: string;
    payrollParameter: string,
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

interface payrollRates {
    absences: number;
    undertime: number;
    tardy: number;
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
const pim: payrollRates = payrollItems;
const parameter: number[] = employee.payrollParameter.split("/").map(Number);

function basicPay(employee: employee, dsr: dailyScheduleReport, param: number[]): number {
    if (employee.paymentScheme === "Monthly" || employee.paymentScheme === "Semi-Monthly") {
        return employee.monthlySalary / 2;
    }

    if (employee.paymentScheme === "Daily") {
        return dsr.reg * (employee.dailyRate / param[1]);
    }

    return -1;
}

//AUT FOR MONTHLY EMPLOYEES ONLY!!!!!
const absence = (employee: employee, dsr: dailyScheduleReport, param: number[]): number => 
    employee.dailyRate * dsr.absences;

const undertime = (employee: employee, dsr: dailyScheduleReport, param: number[]): number => 
    ((employee.dailyRate / param[1]) / 60) * dsr.undertime;

const tardy = (employee: employee, dsr: dailyScheduleReport, param: number[]): number => 
    ((employee.dailyRate / param[1]) / 60) * dsr.tardy;

const overtime = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates): number => 
    ((employee.dailyRate / param[1]) * pim.ot) * dsr.ot;

const nd = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates): number => 
    ((employee.dailyRate / param[1]) * pim.nd) * dsr.nd;

const ndot = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates): number => 
    ((employee.dailyRate / param[1]) * pim.ndot) * dsr.ndot;

const rdreg = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates): number => 
    ((employee.dailyRate / param[1]) * pim.rdreg) * dsr.rdreg;

const rdot = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates): number => 
    ((employee.dailyRate / param[1]) * pim.rdot) * dsr.rdot;

const rdnd = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates): number => 
    ((employee.dailyRate / param[1]) * pim.rdnd) * dsr.rdnd;

const rdndot = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates): number =>
    ((employee.dailyRate / param[1] * pim.rdndot)) * dsr.rdndot;

function lhreg (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates): number {
    if (employee.paymentScheme === "Monthly" || employee.paymentScheme === "Semi-Monthly") {
        ((employee.dailyRate / param[1]) * pim.lhreg) * dsr.lhreg;
    }

    if (employee.paymentScheme === "Daily") {
        ((employee.dailyRate / param[1]) * (pim.lhreg + 1)) * dsr.lhreg;
    }

    return -1;
}

const lhot = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates): number => 
    ((employee.dailyRate / param[1]) * pim.lhot) * dsr.lhot;

const lhnd = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates): number => 
    ((employee.dailyRate / param[1]) * pim.lhnd) * dsr.lhnd;

const lhndot = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates): number =>
    ((employee.dailyRate / param[1]) * pim.lhndot) * dsr.lhndot;

function shreg (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates): number {
    if (employee.paymentScheme === "Monthly" || employee.paymentScheme === "Semi-Monthly") {
        return (employee.dailyRate * pim.shreg) * dsr.shreg;
    }

    if (employee.paymentScheme === "Daily") {
        return (employee.dailyRate * (pim.shreg + 1)) * dsr.shreg;
    }
    
    return -1;
}

const shot = (employe: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates): number =>
    ((employee.dailyRate / param[1]) * pim.shot) * dsr.shot;

const shnd = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates): number =>
    ((employee.dailyRate / param[1]) * pim.shnd) * dsr.shnd;

const shndot = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates): number =>
    ((employee.dailyRate / param[1]) * pim.shndot) * dsr.shndot;

const rdlhreg = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates): number =>
    ((employee.dailyRate / param[1]) * pim.rdlhreg) * dsr.rdlhreg;

const rdlhot = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates): number =>
    ((employee.dailyRate / param[1]) * pim.rdlhot) * dsr.rdlhot;

const rdlhnd = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates): number =>
    ((employee.dailyRate / param[1]) * pim.rdlhnd) * dsr.rdlhnd;

const rdlhndot = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates): number =>
    ((employee.dailyRate / param[1]) * pim.rdlhndot) * dsr.rdlhndot;

const rdshreg = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates): number =>
    ((employee.dailyRate / param[1]) * pim.rdshreg) * dsr.rdlhndot;

const rdshot = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates): number =>
    ((employee.dailyRate / param[1]) * pim.rdshot) * dsr.rdshot;

const rdshnd = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates): number =>
    ((employee.dailyRate / param[1]) * pim.rdshnd) * dsr.rdshot;

const rdshndot = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates): number =>
    ((employee.dailyRate / param[1]) * pim.rdshndot) * dsr.rdshndot;

const lhshreg = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates): number =>
    ((employee.dailyRate / param[1]) * pim.lhshreg) * dsr.lhshreg;

const lhshot = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates): number =>
    ((employee.dailyRate / param[1]) * pim.lhshot) * dsr.lhshot;

const lhshnd = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates): number =>
    ((employee.dailyRate / param[1]) * pim.lhshnd) * dsr.lhshnd;

const lhshndot = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates): number =>
    ((employee.dailyRate / param[1]) * pim.lhshndot) * dsr.lhshndot;

const rdlhshreg = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates): number =>
    ((employee.dailyRate / param[1]) * pim.rdlhshreg) * dsr.rdlhshreg;

const rdlhshot = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates): number =>
    ((employee.dailyRate / param[1]) * pim.rdlhshot) * dsr.rdlhshot;

const rdlhshnd = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates): number =>
    ((employee.dailyRate / param[1]) * pim.rdlhshnd) * dsr.rdlhshnd;

const rdlhshndot = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates): number =>
    ((employee.dailyRate / param[1]) * pim.rdlhshndot) * dsr.rdlhshndot;

function phic(employee: employee) {
    if (employee.monthlySalary / 2 < 10000) {
        return 250.0000;
    } 
    
    if (employee.monthlySalary / 2 >= 10000.0100 && employee.monthlySalary / 2 <= 99999.9999) {
        return employee.monthlySalary * .05 / 2 / 2;
    }

    if (employee.monthlySalary / 2 >= 100000.0000) {
        return 2500.0000;
    }
}

function withholding(employee: employee, dsr: dailyScheduleReport, param: number, pim: payrollRates) {
    let sss = 0;
    let phil = phic(employee);
    let hdmf = 100;

    let grossTotal = (basicPay(employee, dsr, parameter) - (absence(employee, dsr, parameter) + undertime(employee, dsr, parameter) + tardy(employee, dsr, parameter)) + overtime(employee, dsr, parameter, pim) + nd(employee, dsr, parameter, pim) + ndot(employee, dsr, parameter, pim) + rdreg(employee, dsr, parameter, pim) + rdnd(employee, dsr, parameter, pim) + rdndot(employee, dsr, parameter, pim) + lhreg(employee, dsr, parameter, pim) + lhot(employee, dsr, parameter, pim) + lhnd(employee, dsr, parameter, pim) + lhndot(employee, dsr, parameter, pim) + shreg(employee, dsr, parameter, pim) + shot(employee, dsr, parameter, pim) + shnd(employee, dsr, parameter, pim) + shndot(employee, dsr, parameter, pim) + rdlhreg(employee, dsr, parameter, pim) + rdlhot(employee, dsr, parameter, pim) + rdlhnd(employee, dsr, parameter, pim) + rdlhndot(employee, dsr, parameter, pim) + rdshreg(employee, dsr, parameter, pim) + rdshot(employee, dsr, parameter, pim) + rdshnd(employee, dsr, parameter, pim) + rdshndot(employee, dsr, parameter, pim) + lhshreg(employee, dsr, parameter, pim) + lhshot(employee, dsr, parameter, pim) + lhshnd(employee, dsr, parameter, pim) + lhshndot(employee, dsr, parameter, pim) + rdlhshreg(employee, dsr, parameter, pim) + rdlhshot(employee, dsr, parameter, pim) + rdlhshnd(employee, dsr, parameter, pim) + rdlhshndot(employee, dsr, parameter, pim)) - (sss + phic + hdmf);

    if (grossTotal >= 10417.0000 && grossTotal <= 16666.9999) {
        return (grossTotal - 10417.0000) * .15;
    } else if (grossTotal >= 16667.0000 && grossTotal <= 33332.9999) {
        return 937.50 + .20 + (grossTotal - 16667.0000);
    } else if (grossTotal >= 33333.0000 && grossTotal <= 83332.9999) {
        return 4270.70 + .25 + (grossTotal - 33333.0000);
    } else if (grossTotal >= 83333.0000 && grossTotal <= 333332.9999) {
        return 16770.70 + .30 + (grossTotal - 83333.0000)
    } else if (grossTotal >= 333333.0000) {
        return 91770.70 + .35 + (grossTotal - 333333.0000);
    } else {
        return 0.0000;
    }
}