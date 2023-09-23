const prompt = require("prompt-sync")();
function gradeGenerator(){
    // prompt user for input
    const gradeInput = prompt("Enter student's marks: ");

    // Parse user input as number
    const marks = parseFloat(gradeInput);

    // Determine grade based on the marks
    let grade;
    if (marks > 79){
        grade = 'A';
    }else if (marks >= 60 && marks <= 79){
        grade = 'B';
    }else if (marks >= 50 && marks <= 59){
        grade = 'C';
    }else if (marks >= 40 && marks <= 49){
        grade = 'D';
    }else {
        grade = 'E';
    }

    // Display grade to the user
    console.log(`Student's grade is: ${grade}`);
}

// call function to start the process
gradeGenerator();