const formData = [];
const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const data = new FormData(event.target);
  const entry = {};

  data.forEach(function(value, key) {
    entry[key] = value;
  });

  if (!entry.name || entry.name.length < 3) {
    alert("Name must be at least 3 characters.");
    return;
  }

  if (!entry.email) {
    alert("Please enter an email address.");
    return;
  }

  if (!entry.password || entry.password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  if (!entry.gender  || !entry.message) {
    alert("Please fill out all required fields.");
    return;
  }

  formData.push(entry);

  const output = document.getElementById("output");
  const row = document.createElement("tr");

  const maskedPassword = "*".repeat(entry.password.length);

  const values = [
    entry.name,
    entry.email,
    maskedPassword,
    entry.gender,
    entry.message
  ];

  for (let i = 0; i < values.length; i++) {
    const td = document.createElement("td");
    td.textContent = values[i];
    row.appendChild(td);
  }

  output.appendChild(row);

  const successMsg = document.getElementById("successMsg");
  successMsg.textContent = "Registration submitted successfully!";

  event.target.reset();

  // Reset the message after a while
  setTimeout(function () {
    successMsg.textContent = "";
  }, 2000);
});