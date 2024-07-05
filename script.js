const questions = [
    {
        question: "1. You receive a package addressed to your neighbor, but the name seems slightly misspelled.  What's the safest course of action? 14 remaining",
        answers: [
          "Leave the package unopened and alert your neighbor or the delivery company.",
          "Open the package and see if it's something valuable you can keep."          
        ],
        correctAnswer: 0 //1
      },
      {
        question: "2. Your grandma calls, worried about a pop-up message on her computer claiming her device is infected. What's the best advice? 13 remaining",
        answers: [
          "Tell her to click 'OK' on the pop-up to fix the problem.",
          "Instruct her to power down the computer and not to click anything."
        ],
        correctAnswer: 1 //2
      },
      {
        question: "3. You're browsing the web and see an ad for a 'magic device' that promises to hack into any social media account. What should your red flag be? 12 remaining",
        answers: [
          "Hacking into other people's accounts is illegal and unethical.",
          "The ad has a lot of positive customer reviews."
        ],
        correctAnswer: 0
      },
      {
        question: "4. What Imagine you're setting up a new online gaming account. What information is generally NOT required for registration? 11 remaining",
        answers: [
          "Your Social Security number or bank account details.",
          "Your username and a strong password."
        ],
        correctAnswer: 0
      },
      {
        question: "5. You're on a secret mission in a foreign country and need to access your work email. Public Wi-Fi is your only option.  What's the safest way to connect? 10 remaining",
        answers: [
          "Connect directly to the public Wi-Fi network.",
          "Use a Virtual Private Network (VPN) to encrypt your connection. "
        ],
        correctAnswer: 1
      },
      {
        question: "6. A friend shares a hilarious meme online, but the link seems suspicious.  What should you do before clicking? 9 remaining",
        answers: [
          "Click on the link to see the meme first.",
          "Hover over the link to see the actual website address before clicking. "
        ],
        correctAnswer: 1
      },
      {
        question: "7. You receive a text message congratulating you on winning a free vacation!  What's the first thing you should suspect? 8 remaining",
        answers: [
          "Free vacations are a common way to win big prizes.",
          "Unexpected 'winnings' often involve scams"
        ],
        correctAnswer: 1
      },
      {
        question: "8. Imagine you're a spy and need to send a secret message to your partner.  How can you make your message unreadable to enemies? 7 remaining",
        answers: [
          "Encrypt your message with a password or special software.",
          "Use emojis and symbols to create a code."
        ],
        correctAnswer: 0
      },
      {
        question: "9. You discover a hidden compartment in your new apartment containing someone else's credit card.  What's the ethical thing to do? 6 remaining",
        answers: [
          "Keep the credit card and use it for online purchases.",
          "Return the credit card to the rightful owner or report it to the authorities."
        ],
        correctAnswer: 1
      },
      {
        question: "10. You suspect a colleague might be accidentally leaking sensitive company information online.  What's the best approach? 5 remaining",
        answers: [
          "Publicly confront your colleague and accuse them of wrongdoing.",
          "Discreetly report your concerns to a supervisor or security team."
        ],
        correctAnswer: 1
      },
      {
        question: "11. Imagine you're a double agent and need to access a secure computer system.  What might a cybercriminal use to gain unauthorized access? 4 remaining",
        answers: [
          "A software program that exploits a system vulnerability.",
          "A special key that unlocks the system physically."          
        ],
        correctAnswer: 0
      },
      {
        question: "12. You notice your phone battery draining faster than usual.  What could be a potential culprit? 3 remaining",
        answers: [
          "You've been playing too many games recently.",
          "Malware running in the background might be using resources."
        ],
        correctAnswer: 1
      },
      {
        question: "13. Your mission briefing warns you about a common social engineering tactic.  What involves manipulating victims into revealing personal information? 2 remaining",
        answers: [
          "Sending birthday gifts to unsuspecting targets.",
          "Pretending to be a legitimate authority figure to gain trust."
        ],
        correctAnswer: 1
      },
      {
        question: "14. You're tasked with protecting a top-secret document.  What security measure involves restricting access only to authorized personnel? 1 remaining",
        answers: [
          "Leaving the document on a public desk for everyone to see.",
          "Implementing access controls and user permissions. "
        ],
        correctAnswer: 1
      },
      {
        question: "15. Imagine you're building a team of cybersecurity experts.  What role involves using hacking skills ethically to identify system weaknesses? 0 remaining",
        answers: [
          "A data analyst specializing in market research.",
          "An ethical hacker (white hat hacker) who tests security measures."
        ],
        correctAnswer: 1
      },
      // Add more questions here following the same format   
    // ... your questions here ...
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let temporaryUsername = "Trainee"; // Define a temporary username
  
  function displayQuestion() {
    const questionElement = document.getElementById("question");
    const answerListElement = document.getElementById("answer-list");
  
    questionElement.textContent = questions[currentQuestion].question;
    answerListElement.innerHTML = ""; // Clear previous answers
  
    questions[currentQuestion].answers.forEach((answer, index) => {
      const answerItem = document.createElement("li");
      const radioInput = document.createElement("input");
      radioInput.type = "radio";
      radioInput.name = "answer";
      radioInput.value = index;
  
      radioInput.addEventListener("change", function() {
        document.getElementById("submit-btn").disabled = false;
      });
  
      const answerText = document.createTextNode(answer);
      answerItem.appendChild(radioInput);
      answerItem.appendChild(answerText);
      answerListElement.appendChild(answerItem);
    });
  }
  
  function submitAnswer() {
    const selectedRadio = document.querySelector('input[name="answer"]:checked');
  
    if (selectedRadio) {
      const userAnswer = parseInt(selectedRadio.value);
      const correctAnswer = questions[currentQuestion].correctAnswer;
  
      if (userAnswer === correctAnswer) {
        score++;
      }
  
      currentQuestion++;
  
      if (currentQuestion < questions.length) {
        displayQuestion();
      } else {
        alert("You have finished the assessment! Your score is " + score + " out of " + questions.length);
        // Optionally, display a results page here
        score = 0; // Reset score for future assessments (optional)
      }
  
      document.getElementById("submit-btn").disabled = true;
    }
  }
  
  // Display username during assessment (optional)
  function displayUsername() {
    const usernameElement = document.getElementById("username-display");
    if (usernameElement) {
      usernameElement.textContent = "Welcome to Week (II) Test, " + temporaryUsername;
    }
  }
  
  displayQuestion();
  displayUsername(); // Display username initially
  
  // Submit button functionality (if included)
  const submitButton = document.getElementById("submit-btn");
  submitButton.addEventListener("click", submitAnswer);
  