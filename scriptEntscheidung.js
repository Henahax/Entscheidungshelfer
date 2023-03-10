const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

function entscheiden() {
  var optionen = [];

  var option1 = document.getElementById("option1").value;
  if (option1.trim() != "") {
    optionen.push(option1);
  }

  var option2 = document.getElementById("option2").value;
  if (option2.trim() != "") {
    optionen.push(option2);
  }

  var option3 = document.getElementById("option3").value;
  if (option3.trim() != "") {
    optionen.push(option3);
  }

  var option4 = document.getElementById("option4").value;
  if (option4.trim() != "") {
    optionen.push(option4);
  }

  var option5 = document.getElementById("option5").value;
  if (option5.trim() != "") {
    optionen.push(option5);
  }

  var entscheidung = optionen[Math.floor(Math.random() * optionen.length)];

  if (optionen.length < 1) {
    alert("Bitte Optionen eintragen!");
  } else {
    alert("Entscheidung getroffen:\n" + entscheidung);
  }
}
