function addListeners() {
    document.getElementById("ti").addEventListener("keyup", computeTax);
}

function computeTax() {
    let basictax, brackettax, totaltax, incometax;

    // Get the value of taxable income, and ensure it's treated as a number
    incometax = parseFloat(document.getElementById("ti").value);

    // Ensure the value is a number and not empty
    if (isNaN(incometax) || incometax <= 0) {
        document.getElementById("incometax").value = '';  // Clear the result field if input is invalid
        return;
    }

    // Calculate tax based on the income range
    if (incometax < 250000) {
        basictax = 0;
        brackettax = 0;
    } else if (incometax >= 250000 && incometax < 400000) {
        basictax = 0;
        brackettax = 0.20 * (incometax - 250000);
    } else if (incometax >= 400000 && incometax < 800000) {
        basictax = 30000;
        brackettax = 0.25 * (incometax - 400000);
    } else if (incometax >= 800000 && incometax < 2000000) {
        basictax = 130000;
        brackettax = 0.30 * (incometax - 800000);
    } else if (incometax >= 2000000 && incometax < 8000000) {
        basictax = 490000;
        brackettax = 0.32 * (incometax - 2000000);
    } else {
        basictax = 2410000;
        brackettax = 0.35 * (incometax - 8000000);
    }

    // Calculate total tax
    totaltax = basictax + brackettax;

    // Display total tax in the readonly input field
    document.getElementById("incometax").value = totaltax.toFixed(2);
}

// Attach listeners after the page loads
window.onload = addListeners;
