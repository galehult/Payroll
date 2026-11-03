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
const param: number[] = employee.payrollParameter.split("/").map(Number);

function basicPay(employee: employee, dsr: dailyScheduleReport) {
    if (employee.paymentScheme === "Monthly" || employee.paymentScheme === "Semi-Monthly") {
        return employee.monthlySalary / 2;
    }

    if (employee.paymentScheme === "Daily") {
        return dsr.reg * (employee.dailyRate / param[1]);
    }

    throw new Error(`Unsupported payment scheme: ${employee.paymentScheme}`);
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

function lhreg (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates) {
    if (employee.paymentScheme === "Monthly" || employee.paymentScheme === "Semi-Monthly") {
        (employee.dailyRate * pim.lhreg) * dsr.lhreg;
    }

    if (employee.paymentScheme === "Daily") {
        (employee.dailyRate * (pim.lhreg + 1)) * dsr.lhreg;
    }
}

const lhot = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates): number => 
    ((employee.dailyRate / param[1]) * pim.lhot) * dsr.lhot;

const lhnd = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates): number => 
    ((employee.dailyRate / param[1]) * pim.lhnd) * dsr.lhnd;

const lhndot = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates): number =>
    ((employee.dailyRate / param[1]) * pim.lhndot) * dsr.lhndot;

function shreg (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates) {
    if (employee.paymentScheme === "Monthly" || employee.paymentScheme === "Semi-Monthly") {
        return (employee.dailyRate * pim.shreg) * dsr.shreg;
    }

    if (employee.paymentScheme === "Daily") {
        return (employee.dailyRate * (pim.shreg + 1)) * dsr.shreg;
    }
}

const shot = (employe: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates): number =>
    ((employee.dailyRate / param[1]) * pim.shot) * dsr.shot;

const shnd = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates) =>
    ((employee.dailyRate / param[1]) * pim.shnd) * dsr.shnd;

const shndot = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates) =>
    ((employee.dailyRate / param[1]) * pim.shndot) * dsr.shndot;

const rdlhreg = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates) =>
    ((employee.dailyRate / param[1]) * pim.rdlhreg) * dsr.rdlhreg;

const rdlhot = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates) =>
    ((employee.dailyRate / param[1]) * pim.rdlhot) * dsr.rdlhot;

const rdlhnd = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates) =>
    ((employee.dailyRate / param[1]) * pim.rdlhnd) * dsr.rdlhnd;

const rdlhndot = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates) =>
    ((employee.dailyRate / param[1]) * pim.rdlhndot) * dsr.rdlhndot;

const rdshreg = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates) =>
    ((employee.dailyRate / param[1]) * pim.rdshreg) * dsr.rdlhndot;

const rdshot = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates) =>
    ((employee.dailyRate / param[1]) * pim.rdshot) * dsr.rdshot;

const rdshnd = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates) =>
    ((employee.dailyRate / param[1]) * pim.rdshnd) * dsr.rdshot;

const rdshndot = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates) =>
    ((employee.dailyRate / param[1]) * pim.rdshndot) * dsr.rdshndot;

const lhshreg = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates) =>
    ((employee.dailyRate / param[1]) * pim.lhshreg) * dsr.lhshreg;

const lhshot = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates) =>
    ((employee.dailyRate / param[1]) * pim.lhshot) * dsr.lhshot;

const lhshnd = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates) =>
    ((employee.dailyRate / param[1]) * pim.lhshnd) * dsr.lhshnd;

const lhshndot = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates) =>
    ((employee.dailyRate / param[1]) * pim.lhshndot) * dsr.lhshndot;

const rdlhshreg = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates) =>
    ((employee.dailyRate / param[1]) * pim.rdlhshreg) * dsr.rdlhshreg;

const rdlhshot = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates) =>
    ((employee.dailyRate / param[1]) * pim.rdlhshot) * dsr.rdlhshot;

const rdlhshnd = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates) =>
    ((employee.dailyRate / param[1]) * pim.rdlhshnd) * dsr.rdlhshnd;

const rdlhshndot = (employee: employee, dsr: dailyScheduleReport, param: number[], pim: payrollRates) =>
    ((employee.dailyRate / param[1]) * pim.rdlhshndot) * dsr.rdlhshndot;