function calculateAge() {
  const dob = document.getElementById("dob").value;
  if (dob) {
    const birthDate = new Date(dob);
    const birthYear = birthDate.getFullYear();

    // Check if the year has more than 4 digits
    if (birthYear.toString().length !== 4) {
      document.getElementById("result").innerText =
        "Error: The year should be a 4-digit number.";
      return;
    }

    const today = new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
      years--;
      months = (months + 12) % 12;
    }

    document.getElementById(
      "result"
    ).innerText = `You are ${years} years and ${months} months old.`;
  } else {
    document.getElementById("result").innerText =
      "Please enter a valid date of birth.";
  }
}

// Set the current year in the footer
document.getElementById("year").innerText = new Date().getFullYear();
