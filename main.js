const inputButton = document.getElementById("button-addon1");
const input = document.getElementById("inputControl");
const strengthBar = document.getElementById("strengthBar");
const warning = document.getElementById("warning");

inputButton.addEventListener("click", function () {
  const pwd = input.value.trim();

  if (!pwd) {
    warning.style.display = "block";
    return;
  } else {
    warning.style.display = "none";
  }

  const score = getScore(pwd);
  updateStrengthUI(score);
  input.value = "";
});

function getScore(pwd) {
  let score = 0;

  if (pwd.length >= 5) score++;

  let hasUpper = false;
  let hasLower = false;
  let hasNumber = false;

  for (let char of pwd) {
    if (char >= "A" && char <= "Z") hasUpper = true;
    if (char >= "a" && char <= "z") hasLower = true;
    if (char >= "0" && char <= "9") hasNumber = true;
  }

  updateRule("rule1", hasUpper);
  updateRule("rule2", hasLower);
  updateRule("rule3", hasNumber);

  if (hasUpper) score++;
  if (hasLower) score++;
  if (hasNumber) score++;

  return score;
}

function updateRule(id, condition) {
  const rule = document.getElementById(id);
  const badge = rule.querySelector("span");

  if (condition) {
    rule.classList.add("bg-success", "text-white");
    badge.classList.replace("bg-secondary", "bg-primary");
    badge.innerText = "OK";
  } else {
    rule.classList.add("bg-danger", "text-white");
    badge.classList.replace("bg-secondary", "bg-danger");
    badge.innerText = "Missing";
  }
}

function updateStrengthUI(score) {
  const strengthText = document.getElementById("signalStrength");

  if (score >= 4) {
    strengthBar.style.width = "100%";
    strengthBar.style.backgroundColor = "green";
    strengthText.innerText = "Strong Password";
  } else if (score >= 2) {
    strengthBar.style.width = "60%";
    strengthBar.style.backgroundColor = "orange";
    strengthText.innerText = "Medium Strength";
  } else {
    strengthBar.style.width = "25%";
    strengthBar.style.backgroundColor = "red";
    strengthText.innerText = "Weak Password";
  }
}
