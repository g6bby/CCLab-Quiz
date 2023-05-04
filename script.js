function showResult() {
    var score = 0;
    var totalQuestions = 8;
    var resultMessage = "";
    var resultImage = "";
  
    // Check answers for QUESTION 1
    var q1 = document.quiz.q1.value;

    //If answer is Strawberry or Pineapple
    if (q1 == "a" || q1 == "b") {
      score++;
    }

    //If answer is Grape or Blueberry
    if (q1 == "c" || q1 == "d") {
      score - 10;
    }
  


    // Check answers for QUESTION 2
    var q2 = document.quiz.q2.value;

    //If answer is Potato or Beans
    if (q2 == "a" || q2 == "c") {
      score++;
    }

    //If answer is Avocado or Tomato
    if (q2 == "b" || q2 == "d") {
      score - 10;

    }
  
  

    // Check answers for QUESTION 3
    var q3 = document.quiz.q3.value;

    //If answer is Cake or Ice Cream
    if (q3 == "a" || q3 == "d") {
      score++;
    }

    //If answer is Pastry or Cookie
    if (q3 == "b" || q3 == "c") {
      score - 10;

    }



    // Check answers for QUESTION 4
    var q4 = document.quiz.q4.value;

    //If answer is Pancakes/Waffles or Muffin
    if (q4 == "a" || q4 == "c") {
      score++;
    }

    //If answer is Omelet or Cereal
    if (q4 == "b" || q4 == "d") {
      score - 10;

    }



    // Check answers for QUESTION 5
    var q5 = document.quiz.q5.value;

    //If answer is Coffee or Tea
    if (q5 == "a" || q5 == "c") {
      score++;
    }

    //If answer is Water or Juice
    if (q5 == "b" || q5 == "d") {
      score - 10;

    }



    // Check answers for QUESTION 6
    var q6 = document.quiz.q6.value;

    //If answer is BBQ or Tacos
    if (q6 == "b" || q6 == "c") {
      score++;
    }

    //If answer is Sushi or Pizza
    if (q6 == "a" || q6 == "d") {
      score - 10;

    }



    // Check answers for QUESTION 7
    var q7 = document.quiz.q7.value;

    //If answer is Sweet or Sour
    if (q7 == "a" || q7 == "b") {
      score++;
    }

    //If answer is Savory or Spicy
    if (q7 == "c" || q7 == "d") {
      score - 10;

    }



    // Check answers for QUESTION 8
    var q8 = document.quiz.q8.value;

    //If answer is Chicken, Beef, or Pork
    if (q8 == "a" || q8 == "b" || q8 == "c") {
      score++;
    }

    //If answer is Other
    if (q8 == "d") {
      score - 10;

    }


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
  