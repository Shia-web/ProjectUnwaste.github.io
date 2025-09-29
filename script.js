//Quiz//
var form = document.getElementById("quizForm");
var resultDiv = document.getElementById("result");
var restartBtn = document.getElementById("restartBtn");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
  
    var score = 0;
    var totalQuestions = 3;
  
    for (var i = 1; i <= totalQuestions; i++) {
      var selected = document.querySelector('input[name="q' + i + '"]:checked');
      if (selected) {
        score += parseInt(selected.value);
      }
    }
  
    var resultText = "";
    if (score === 3) {
      resultText = "🌟 Eco-Star: You’re rocking it!";
    } else if (score === 2) {
      resultText = "🛣️ Getting There: You’re on the right path. Keep going!";
    } else {
      resultText = "😅 Sustainability? Never Heard of Her";
    }
  
    resultDiv.textContent = resultText;
  });
}

if (restartBtn) {
  restartBtn.addEventListener("click", function () {
    form.reset();
    resultDiv.textContent = "";
  });
}


// Pledge//
var button = document.getElementById("pledgeButton");
if (button) {
  button.addEventListener("click", function() {
    var name = document.getElementById("myText").value;
    var message = "";

    if (name.trim() === "") {
      message = "Please enter your name to take the pledge.";
    } else {
      message = " I, " + name + ", will be the reason something doesn’t end up in a landfill today. My small choices will shape a cleaner future. The earth thanks you!🌎";
    }
    document.getElementById("secret").textContent = message;
  })
}


//Fact Generator//
var fact = document.getElementById("fact");
var factButton = document.getElementById("factButton");
if (factButton) {
  var count = 0;

  var factList = [
    "Plastic takes 450 years to degrade.",
    "Over 1/3 of food is wasted globally — that’s 1.3 billion tons a year.",
    "A t-shirt takes 2,700 liters of water to make (that’s 900 days of drinking water).",
    "Only 9% of all plastic ever produced has been recycled.",
    "Landfills are responsible for 11% of the world’s methane emissions.",
    "E-waste is the fastest-growing waste stream globally.",
    "1 million plastic bottles are bought every minute worldwide.",
    "Recycling 1 ton of paper saves 17 trees and 7,000 gallons of water.",
    "Composting food waste can reduce landfill use by 20–30%.",
    "The Great Pacific Garbage Patch is twice the size of Texas."
  ];

  function displayFact() {
    fact.innerHTML = factList[count];
    count++;
    if (count === factList.length) {
      count = 0;
    }
  }
  factButton.addEventListener("click", displayFact);
}



