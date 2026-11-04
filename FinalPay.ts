import empInfo from './employee.json';
import payrollRates from './payrollItems.json';
import unpaidDsr from './UnpaidDSR.json';
import renderDsr from './RenderingDsr.json';

interface emp {
    name: string;
    paymentScheme: string;
    payrollParameter: string,
    monthlySalary: number;
    dailyRate: number;
}

interface PayrollRates {
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

interface ScheduleReport {
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

const employee: emp = empInfo;
const rates: PayrollRates = payrollRates;
const unpaidSalary: ScheduleReport = unpaidDsr;
const renderSalary: ScheduleReport = renderDsr;

const parameter: number[] = employee.payrollParameter.split("/").map(Number);
const multiCutOffRender: boolean = false;
const empRenderedFullCutOff: boolean = false; //FOR MONTHLY empS

function UnpaidPayroll(emp: emp, rate: PayrollRates, dsr: ScheduleReport, param: number[]) {
    if (emp.paymentScheme === "Monthly" || emp.paymentScheme === "Semi-Monthly") {
        return emp.monthlySalary / 2;
    }

    if (emp.paymentScheme === "Daily") {
        return (emp.dailyRate / param[1]) * unpaidSalary.reg;
    }
}

function RenderPay(emp: emp, rate: PayrollRates, dsr: ScheduleReport, param: number[]) {
    if (empRenderedFullCutOff === true && emp.paymentScheme === "Monthly" || emp.paymentScheme === "Semi-Monthly") {
        return emp.monthlySalary / 2
    }
}

const absence = (emp: emp, dsr: ScheduleReport, param: number[]): number => 
    emp.dailyRate * dsr.absences;

const undertime = (emp: emp, dsr: ScheduleReport, param: number[]): number => 
    ((emp.dailyRate / param[1]) / 60) * dsr.undertime;

const tardy = (emp: emp, dsr: ScheduleReport, param: number[]): number => 
    ((emp.dailyRate / param[1]) / 60) * dsr.tardy;

const overtime = (emp: emp, dsr: ScheduleReport, param: number[], pim: PayrollRates): number => 
    ((emp.dailyRate / param[1]) * pim.ot) * dsr.ot;

const nd = (emp: emp, dsr: ScheduleReport, param: number[], pim: PayrollRates): number => 
    ((emp.dailyRate / param[1]) * pim.nd) * dsr.nd;

const ndot = (emp: emp, dsr: ScheduleReport, param: number[], pim: PayrollRates): number => 
    ((emp.dailyRate / param[1]) * pim.ndot) * dsr.ndot;

const rdreg = (emp: emp, dsr: ScheduleReport, param: number[], pim: PayrollRates): number => 
    ((emp.dailyRate / param[1]) * pim.rdreg) * dsr.rdreg;

const rdot = (emp: emp, dsr: ScheduleReport, param: number[], pim: PayrollRates): number => 
    ((emp.dailyRate / param[1]) * pim.rdot) * dsr.rdot;

const rdnd = (emp: emp, dsr: ScheduleReport, param: number[], pim: PayrollRates): number => 
    ((emp.dailyRate / param[1]) * pim.rdnd) * dsr.rdnd;

const rdndot = (emp: emp, dsr: ScheduleReport, param: number[], pim: PayrollRates): number =>
    ((emp.dailyRate / param[1] * pim.rdndot)) * dsr.rdndot;

function lhreg (emp: emp, dsr: ScheduleReport, param: number[], pim: PayrollRates): number {
    if (emp.paymentScheme === "Monthly" || emp.paymentScheme === "Semi-Monthly") {
        ((emp.dailyRate / param[1]) * pim.lhreg) * dsr.lhreg;
    }

    if (emp.paymentScheme === "Daily") {
        ((emp.dailyRate / param[1]) * (pim.lhreg + 1)) * dsr.lhreg;
    }

    return -1;
}

const lhot = (emp: emp, dsr: ScheduleReport, param: number[], pim: PayrollRates): number => 
    ((emp.dailyRate / param[1]) * pim.lhot) * dsr.lhot;

const lhnd = (emp: emp, dsr: ScheduleReport, param: number[], pim: PayrollRates): number => 
    ((emp.dailyRate / param[1]) * pim.lhnd) * dsr.lhnd;

const lhndot = (emp: emp, dsr: ScheduleReport, param: number[], pim: PayrollRates): number =>
    ((emp.dailyRate / param[1]) * pim.lhndot) * dsr.lhndot;

function shreg (emp: emp, dsr: ScheduleReport, param: number[], pim: PayrollRates): number {
    if (emp.paymentScheme === "Monthly" || emp.paymentScheme === "Semi-Monthly") {
        return (emp.dailyRate * pim.shreg) * dsr.shreg;
    }

    if (emp.paymentScheme === "Daily") {
        return (emp.dailyRate * (pim.shreg + 1)) * dsr.shreg;
    }
    
    return -1;
}

const shot = (emp: emp, dsr: ScheduleReport, param: number[], pim: PayrollRates): number =>
    ((emp.dailyRate / param[1]) * pim.shot) * dsr.shot;

const shnd = (emp: emp, dsr: ScheduleReport, param: number[], pim: PayrollRates): number =>
    ((emp.dailyRate / param[1]) * pim.shnd) * dsr.shnd;

const shndot = (emp: emp, dsr: ScheduleReport, param: number[], pim: PayrollRates): number =>
    ((emp.dailyRate / param[1]) * pim.shndot) * dsr.shndot;

const rdlhreg = (emp: emp, dsr: ScheduleReport, param: number[], pim: PayrollRates): number =>
    ((emp.dailyRate / param[1]) * pim.rdlhreg) * dsr.rdlhreg;

const rdlhot = (emp: emp, dsr: ScheduleReport, param: number[], pim: PayrollRates): number =>
    ((emp.dailyRate / param[1]) * pim.rdlhot) * dsr.rdlhot;

const rdlhnd = (emp: emp, dsr: ScheduleReport, param: number[], pim: PayrollRates): number =>
    ((emp.dailyRate / param[1]) * pim.rdlhnd) * dsr.rdlhnd;

const rdlhndot = (emp: emp, dsr: ScheduleReport, param: number[], pim: PayrollRates): number =>
    ((emp.dailyRate / param[1]) * pim.rdlhndot) * dsr.rdlhndot;

const rdshreg = (emp: emp, dsr: ScheduleReport, param: number[], pim: PayrollRates): number =>
    ((emp.dailyRate / param[1]) * pim.rdshreg) * dsr.rdlhndot;

const rdshot = (emp: emp, dsr: ScheduleReport, param: number[], pim: PayrollRates): number =>
    ((emp.dailyRate / param[1]) * pim.rdshot) * dsr.rdshot;

const rdshnd = (emp: emp, dsr: ScheduleReport, param: number[], pim: PayrollRates): number =>
    ((emp.dailyRate / param[1]) * pim.rdshnd) * dsr.rdshot;

const rdshndot = (emp: emp, dsr: ScheduleReport, param: number[], pim: PayrollRates): number =>
    ((emp.dailyRate / param[1]) * pim.rdshndot) * dsr.rdshndot;

const lhshreg = (emp: emp, dsr: ScheduleReport, param: number[], pim: PayrollRates): number =>
    ((emp.dailyRate / param[1]) * pim.lhshreg) * dsr.lhshreg;

const lhshot = (emp: emp, dsr: ScheduleReport, param: number[], pim: PayrollRates): number =>
    ((emp.dailyRate / param[1]) * pim.lhshot) * dsr.lhshot;

const lhshnd = (emp: emp, dsr: ScheduleReport, param: number[], pim: PayrollRates): number =>
    ((emp.dailyRate / param[1]) * pim.lhshnd) * dsr.lhshnd;

const lhshndot = (emp: emp, dsr: ScheduleReport, param: number[], pim: PayrollRates): number =>
    ((emp.dailyRate / param[1]) * pim.lhshndot) * dsr.lhshndot;

const rdlhshreg = (emp: emp, dsr: ScheduleReport, param: number[], pim: PayrollRates): number =>
    ((emp.dailyRate / param[1]) * pim.rdlhshreg) * dsr.rdlhshreg;

const rdlhshot = (emp: emp, dsr: ScheduleReport, param: number[], pim: PayrollRates): number =>
    ((emp.dailyRate / param[1]) * pim.rdlhshot) * dsr.rdlhshot;

const rdlhshnd = (emp: emp, dsr: ScheduleReport, param: number[], pim: PayrollRates): number =>
    ((emp.dailyRate / param[1]) * pim.rdlhshnd) * dsr.rdlhshnd;

const rdlhshndot = (emp: emp, dsr: ScheduleReport, param: number[], pim: PayrollRates): number =>
    ((emp.dailyRate / param[1]) * pim.rdlhshndot) * dsr.rdlhshndot;