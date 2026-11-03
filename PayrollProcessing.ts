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

const overtime = (employee: employee, dsr: dailyScheduleReport, param: number[]): number => 
    ((employee.dailyRate / param[1]) * 1.3) * dsr.ot;

const nd = (employee: employee, dsr: dailyScheduleReport, param: number[]): number => 
    ((employee.dailyRate / param[1]) * 0.1) * dsr.nd;

const ndot = (employee: employee, dsr: dailyScheduleReport, param: number[]): number => 
    ((employee.dailyRate / param[1]) * 1.375) * dsr.ndot;

const rdreg = (employee: employee, dsr: dailyScheduleReport, param: number[]): number => 
    ((employee.dailyRate / param[1]) * 1.3) * dsr.rdreg;

const rdot = (employee: employee, dsr: dailyScheduleReport, param: number[]): number => 
    ((employee.dailyRate / param[1]) * 1.43) * dsr.rdot;

const rdnd = (employee: employee, dsr: dailyScheduleReport, param: number[]): number => 
    ((employee.dailyRate / param[1]) * 1.43) * dsr.rdnd;

const rdndot = (employee: employee, dsr: dailyScheduleReport, param: number[]): number =>
    ((employee.dailyRate / param[1] * 1.8590)) * dsr.rdndot;

const lhreg = (employee: employee, dsr: dailyScheduleReport): number =>
    ((employee.dailyRate * 2) * dsr.lhreg);

const lhot = (employee: employee, dsr: dailyScheduleReport, param: number[]): number => 
    ((employee.dailyRate / param[1]) * 2.6) * dsr.lhot;

const lhnd = (employee: employee, dsr: dailyScheduleReport, param: number[]): number => 
    ((employee.dailyRate / param[1]) * 1.2) * dsr.lhnd;

const lhndot = (employee: employee, dsr: dailyScheduleReport, param: number[]): number =>
    ((employee.dailyRate / param[1]) * 2.86) * dsr.lhndot;

const shreg = (employee: employee, dsr: dailyScheduleReport): number => 
    (employee.dailyRate * 1.3) * dsr.shreg;

const shot = (employe: employee, dsr: dailyScheduleReport, param: number[]): number =>
    ((employee.dailyRate / param[1]) * 1.69) * dsr.shot;

const shnd = (employee: employee, dsr: dailyScheduleReport, param: number[]) =>
    ((employee.dailyRate / param[1]) * 1.69) * dsr.shnd;

const shndot = (employee: employee, dsr: dailyScheduleReport, param: number[]) =>
    ((employee.dailyRate / param[1]) * 1.859) * dsr.shndot;

const rdlhreg = (employee: employee, dsr: dailyScheduleReport, param: number[]) =>
    ((employee.dailyRate / param[1]) * 2.6) * dsr.rdlhreg;

const rdlhot = (employee: employee, dsr: dailyScheduleReport, param: number[]) =>
    ((employee.dailyRate / param[1]) * 3.38) * dsr.rdlhot;

const rdlhnd = (employee: employee, dsr: dailyScheduleReport, param: number[]) =>
    ((employee.dailyRate / param[1]) * 2.86) * dsr.rdlhnd;

const rdlhndot = (employee: employee, dsr: dailyScheduleReport, param: number[]) =>
    ((employee.dailyRate / param[1]) * 3.719) * dsr.rdlhndot;

const rdshreg = (employee: employee, dsr: dailyScheduleReport, param: number[]) =>
    ((employee.dailyRate / param[1]) * 1.5) * dsr.rdlhndot;

const rdshot = (employee: employee, dsr: dailyScheduleReport, param: number[]) =>
    ((employee.dailyRate / param[1]) * 1.95) * dsr.rdshot;

const rdshnd = (employee: employee, dsr: dailyScheduleReport, param: number[]) =>
    ((employee.dailyRate / param[1]) * 1.65) * dsr.rdshot;

const rdshndot = (employee: employee, dsr: dailyScheduleReport, param: number[]) =>
    ((employee.dailyRate / param[1]) * 2.145) * dsr.rdshndot;

const lhshreg = (employee: employee, dsr: dailyScheduleReport, param: number[]) =>
    ((employee.dailyRate / param[1]) * 1.6) * dsr.lhshreg;

const lhshot = (employee: employee, dsr: dailyScheduleReport, param: number[]) =>
    ((employee.dailyRate / param[1]) * 3.38) * dsr.lhshot;

const lhshnd = (employee: employee, dsr: dailyScheduleReport, param: number[]) =>
    ((employee.dailyRate / param[1]) * 1.86) * dsr.lhshnd;

const lhshndot = (employee: employee, dsr: dailyScheduleReport, param: number[]) =>
    ((employee.dailyRate / param[1]) * 3.718) * dsr.lhshndot;

const rdlhshreg = () =>
(());

const rdlhshot = () =>
(());

const rdlhshnd = () =>
(());

const rdlhshndot = () =>
(());