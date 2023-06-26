export default function createIteratorObject(report) {
    const departments = Object.values(report.allEmployees);

    let currentDepartmentIndex = 0;
    let currentEmployeeIndex = 0;

    return {
        next() {
            const departmentEmployees = departments[currentDepartmentIndex];
            const employee = departmentEmployees[currentEmployeeIndex];
            if (employee) {
                currentEmployeeIndex++;
                return {
                    value: employee,
                    done: false,
                };
            } else {
                currentDepartmentIndex++;
                currentEmployeeIndex = 0;
                const nextDepartmentEmployees = departments[currentDepartmentIndex];

                if (nextDepartmentEmployees) {
                    return {
                        value: nextDepartmentEmployees[currentEmployeeIndex],
                        done: false,
                    };
                } else {
                    return {
                        done: true,
                    };
                }
            }
        },
    };
}