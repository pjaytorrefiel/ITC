document.getElementById("btnaddtotab").addEventListener("click", addEmployee);
document.getElementById("btndelete").addEventListener("click", deleteEmployee);
document.getElementById("btnclearcart").addEventListener("click", clearTable);

let employeeCount = 0;  // To track employee numbers

function addEmployee() {
    // Get employee details from inputs
    let employeeName = document.getElementById("employee1").value;
    let daysWorked = parseInt(document.getElementById("days1").value);
    let dailyRate = parseFloat(document.getElementById("rate1").value);
    let deductionAmount = parseFloat(document.getElementById("amount1").value);

    // Validate inputs
    if (!employeeName || isNaN(daysWorked) || isNaN(dailyRate) || isNaN(deductionAmount)) {
        alert("Please fill in all fields correctly.");
        return;
    }

    // Calculate gross pay and net pay
    let grossPay = daysWorked * dailyRate;
    let netPay = grossPay - deductionAmount;

    // Increment the employee number
    employeeCount++;

    // Create a new row in the table
    let row = document.createElement("tr");
    row.id = `employee-${employeeCount}`; // Assign unique ID to each row

    row.innerHTML = `
        <td>${employeeCount}</td>
        <td>${employeeName}</td>
        <td>${daysWorked}</td>
        <td>${dailyRate.toFixed(2)}</td>
        <td>${grossPay.toFixed(2)}</td>
        <td>${deductionAmount.toFixed(2)}</td>
        <td>${netPay.toFixed(2)}</td>
    `;

    // Add the row to the table
    document.getElementById("tablebody").appendChild(row);

    // Clear input fields
    document.getElementById("employee1").value = '';
    document.getElementById("days1").value = '';
    document.getElementById("rate1").value = '';
    document.getElementById("amount1").value = '';
}

function deleteEmployee() {
    // Get the employee number to delete
    let empNumber = parseInt(document.getElementById("delitem").value);

    // Check if the employee number is valid
    if (isNaN(empNumber) || empNumber <= 0 || empNumber > employeeCount) {
        alert("Invalid Employee Number.");
        return;
    }

    // Find the row with the matching employee number
    let row = document.getElementById(`employee-${empNumber}`);

    // If the row exists, remove it
    if (row) {
        row.remove();
        alert(`Employee ${empNumber} has been deleted.`);
    }
}

function clearTable() {
    // Clear all table rows except for the header
    document.getElementById("tablebody").innerHTML = '';
    employeeCount = 0;  // Reset employee counter
}
