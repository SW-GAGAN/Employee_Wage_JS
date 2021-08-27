class EmployeePayroll {
    id;
    name;
    salary;
    gender;
    startDate;

    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }
    get name() { return this._name; }
    set name(name) { this._name = name; }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefind ? "undifined" :
            this.startDate.toLocalDateString("en-US", options);
return "id=" + this.id + ", name='" + this.name + ", salary=" + this.salary + ","+
"gender=" + this.gender + ", StartDate" + empDate;
    }
}
let employeePayrollData = new EmployeePayrollDate(1, "Mark", 30000);
console.log(employeePayrollData.toString());
employeePayrollData.name ="john";
coinsole.log(employeePayrollData.toLocalDateString());
let newEmployeePayrollData =
    }
}