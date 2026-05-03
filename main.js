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
  let hasUpper = false;
  let hasLower = false;
  let hasNumber = false;
  let hasLength = false;
  let subString = false;
  let hasChar = false;




  
    for (let char of pwd) {
    if (char >= "A" && char <= "Z") hasUpper = true;
    if (char >= "a" && char <= "z") hasLower = true;
    if (char >= "0" && char <= "9") hasNumber = true;
    if (!char.match(/[A-Za-z0-9]/)) hasChar = true;

   
   
    
  }
  if(pwd.length >= 5) hasLength = true;
  if(!pwd.includes("password")&&(!pwd.includes("test")))subString = true;


  updateRule("rule1", hasUpper);
  updateRule("rule2", hasLower);
  updateRule("rule3", hasNumber);
  updateRule("rule4",hasLength);
  updateRule("rule5",subString);
  

  if (hasUpper) score++;
  if (hasLower) score++;
  if (hasNumber) score++;
  if(hasLength) score++;
  if(subString)score++;
  if(hasChar)score++;

  return score;
}

function updateRule(id, condition) {
  const rule = document.getElementById(id);
  const badge = rule.querySelector("span");
  rule.classList.remove("bg-success", "bg-danger", "text-white");
  badge.classList.remove("bg-success","bg-danger");
  badge.classList.add("bg-secondary");

    
   if (condition) {
    rule.classList.add("bg-success", "text-white");
    badge.classList.replace("bg-secondary", "bg-success");
    badge.innerHTML= "<img src = 'https://static.vecteezy.com/system/resources/previews/026/611/860/original/green-check-mark-icon-simple-flat-style-tick-symbol-checkbox-right-checkmark-yes-correct-acceptance-ok-concept-illustration-isolated-on-white-background-eps-10-vector.jpg' alt = 'right' width='20px'/>"
  } else {
    rule.classList.add("bg-danger", "text-white");
    badge.classList.replace("bg-secondary", "bg-danger");
    badge.innerHTML = "<img src = 'https://th.bing.com/th/id/R.e70691d039f4f7e28f8694704a85f111?rik=Ch85Wk2ql4EG8Q&riu=http%3a%2f%2fwww.namasteva.com%2fwp-content%2fuploads%2f2024%2f05%2fRed-Close-Button.png&ehk=V%2fw7VLYHjr3C6RTzvOllnO7osfjENdiM8SZI1eGsw9E%3d&risl=&pid=ImgRaw&r=0' width ='20px'/>";
  }
}

function updateStrengthUI(score) {
  const strengthText = document.getElementById("signalStrength");

  if (score >= 5) {
    strengthBar.style.width = "100%";
    strengthBar.style.backgroundColor = "green";
    strengthText.innerText = "Strong ";
    strengthText.style.color = "green";
  } else if (score >= 4) {
    strengthBar.style.width = "60%";
    strengthBar.style.backgroundColor = "orange";
    strengthText.innerText = "Medium ";
    strengthText.style.color = "orange"
  } else {
    strengthBar.style.width = "25%";
    strengthBar.style.backgroundColor = "red";
    strengthText.innerText = "Weak ";
    strengthText.style.color = "red"
  }
}
