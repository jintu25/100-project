// Function to check if a year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Function to generate leap years
function generateLeapYears(start, end) {
    const leapYears = [];
    for (let year = start; year <= end; year++) {
        if (isLeapYear(year)) {
            leapYears.push(year);
        }
    }
    return leapYears;
}

// Event listener for the button
document.getElementById('generate').addEventListener('click', () => {
    const startYear = parseInt(document.getElementById('startYear').value);
    const endYear = parseInt(document.getElementById('endYear').value);
    const resultElement = document.getElementById('result');

    // Clear previous results
    resultElement.innerHTML = '';

    // Validation
    if (isNaN(startYear) || isNaN(endYear) || startYear > endYear) {
        alert('Please enter valid start and end years.');
        return;
    }

    // Generate leap years and display them
    const leapYears = generateLeapYears(startYear, endYear);
    if (leapYears.length === 0) {
        resultElement.innerHTML = '<li>No leap years found in the given range.</li>';
    } else {
        leapYears.forEach(year => {
            const listItem = document.createElement('li');
            listItem.textContent = year;
            resultElement.appendChild(listItem);
        });
    }
});
