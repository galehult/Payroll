import employeeInfo from './employee.json';
import monthlyPayInfo from './MonthlyPay.json';

interface Employee {
    name: string;
    paymentScheme: string;
    payrollParameter: string,
    monthlySalary: number;
    dailyRate: number;
}

interface SalaryDetails {
    Pay: number;
    Abs: number;
    Uty: number;
    Tdy: number;
}

interface MonthlyPay {
    Period1: SalaryDetails;
    Period2: SalaryDetails;
}

interface ThirteenthMonth {
    Month1Salary: MonthlyPay;
    Month2Salary: MonthlyPay;
    Month3Salary: MonthlyPay;
    Month4Salary: MonthlyPay;
    Month5Salary: MonthlyPay;
    Month6Salary: MonthlyPay;
    Month7Salary: MonthlyPay;
    Month8Salary: MonthlyPay;
    Month9Salary: MonthlyPay;
    Month10Salary: MonthlyPay;
    Month11Salary: MonthlyPay;
    Month12Salary: MonthlyPay;
}

const employee: Employee = employeeInfo;
const monthlyPay: ThirteenthMonth = monthlyPayInfo;


function calculateYearlySalary(monthlyPay: ThirteenthMonth): number {
    const months: MonthlyPay[] = [ 
        monthlyPay.Month1Salary, 
        monthlyPay.Month2Salary, 
        monthlyPay.Month3Salary, 
        monthlyPay.Month4Salary, 
        monthlyPay.Month5Salary,
        monthlyPay.Month6Salary,
        monthlyPay.Month7Salary,
        monthlyPay.Month8Salary,
        monthlyPay.Month9Salary,
        monthlyPay.Month10Salary,
        monthlyPay.Month11Salary,
        monthlyPay.Month12Salary
    ]
    let totalPay: number = 0;

    for (const month of months) {
        totalPay += month.Period1.Pay - (month.Period1.Abs + month.Period1.Uty + month.Period1.Tdy);
        totalPay += month.Period2.Pay - (month.Period2.Abs + month.Period2.Uty + month.Period2.Tdy);
    }


    return totalPay;
}

const calculateNthMonth = (monthlyPay: ThirteenthMonth): number =>
    calculateNthMonth(monthlyPay) / 12;

function nthMonthPay (employee: Employee, monthlyPay: ThirteenthMonth) {
    let nthMonth: number = calculateNthMonth(monthlyPay);

    return `Name: ${employee.name}
            Monthly Salary: ${employee.monthlySalary}
            13th Month Pay: ${nthMonth}`;
}