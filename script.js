function showResult() {
    var score = 0;
    var totalQuestions = 8;
    var resultMessage = "";
    var resultImage = "";
  
    // Check answers for Question 1
    var q1 = document.quiz.q1.value;
    if (q1 == "c") {
      score++;
    }
  
    // Check answers for Question 2
    var q2 = document.quiz.q2.value;
    if (q2 == "a") {
      score++;
    }
  
    // Repeat for Questions 3-8
  
    // Calculate score percentage
    var scorePercentage = (score / totalQuestions) * 100;
  
    // Generate result message and image based on score percentage
    if (scorePercentage >= 90) {
      resultMessage = "Excellent job!";
      resultImage = "excellent.jpg";
    } else if (scorePercentage >= 70) {
      resultMessage = "Good job!";
      resultImage = "good.jpg";
    } else if (scorePercentage >= 50) {
      resultMessage = "You can do better.";
      resultImage = "better.jpg";
    } else {
      resultMessage = "You need to study more.";
      resultImage = "study.jpg";
    }
  
    // Display result message and image
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<h2>Your score: " + scorePercentage.toFixed(2) + "%</h2>" + "<p>" + resultMessage + "</p>" + "<img src='" + resultImage + "'>";
  }
  