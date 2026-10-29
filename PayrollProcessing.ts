import employeeInfo from './employee.json';
import dsrDetails from './dsr.json';

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

const absence = (employee: employee, dsr: dailyScheduleReport, param: string[]): number => 
    employee.dailyRate * dsr.absences;

const undertime = (employee: employee, dsr: dailyScheduleReport): number => 
    ((employee.dailyRate / 8) / 60) * dsr.undertime;

const tardy = (employee: employee, dsr: dailyScheduleReport): number => 
    ((employee.dailyRate / 8) / 60) * dsr.tardy;

const overtime = (employee: employee, dsr: dailyScheduleReport): number => 
    ((employee.dailyRate / 8) * 1.3) * dsr.ot;

const nd = (employee: employee, dsr: dailyScheduleReport): number => 
    ((employee.dailyRate / 8) * 0.1) * dsr.nd;

const ndot = (employee: employee, dsr: dailyScheduleReport): number => 
    ((employee.dailyRate / 8) * 1.375) * dsr.ndot;

const rdreg = (employee: employee, dsr: dailyScheduleReport): number => 
    ((employee.dailyRate / 8) * 1.3) * dsr.rdreg;

const rdot = (employee: employee, dsr: dailyScheduleReport): number => 
    ((employee.dailyRate / 8) * 1.43) * dsr.rdot;

const rdnd = (employee: employee, dsr: dailyScheduleReport): number => 
    ((employee.dailyRate / 8) * 1.43) * dsr.rdnd;

const rdndot = (employee: employee, dsr: dailyScheduleReport): number =>
    ((employee.dailyRate / 8 * 1.43));

const lhreg = (employee: employee, dsr: dailyScheduleReport): number =>
    ((employee.dailyRate * 2) * dsr.lhreg);

const lhot = (employee: employee, dsr: dailyScheduleReport): number => 
    ((employee.dailyRate / 8) * 2.6) * dsr.lhot;

const lhnd = (employee: employee, dsr: dailyScheduleReport): number => 
    ((employee.dailyRate / 8 ) * 1.2) * dsr.lhnd;