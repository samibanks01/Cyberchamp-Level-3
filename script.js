const questions = [
    {
        question: "1. What is the primary difference between authentication and authorization? 14 remaining",
        answers: [
          "Authentication verifies identity, while authorization grants permissions.",
          "Authorization verifies identity, while authentication grants permissions.",
          "Both terms are synonymous and refer to the same security concept.",
          "Authentication is a hardware process, while authorization is a software process."
        ],
        correctAnswer: 0 //1
      },
      {
        question: "2. Which of the following is a strong password practice? 13 remaining",
        answers: [
          "Using the same password for all accounts.",
          "Choosing passwords that are easy to remember, like birthdays or pet names.",
          "Creating complex passwords that combine upper and lowercase letters, numbers, and symbols.",
          "Sharing passwords with trusted friends and family."
        ],
        correctAnswer: 2 //2
      },
      {
        question: "3. What is the purpose of a firewall? 12 remaining",
        answers: [
          "To prevent unauthorized access to a network.",
          "To encrypt data transmitted over a network.",
          "To scan for viruses and malware.",
          "To speed up network connections."
        ],
        correctAnswer: 0
      },
      {
        question: "4. Why is it important to keep operating systems and software up-to-date with the latest patches? 11 remaining",
        answers: [
          "To improve performance.",
          "To add new features.",
          "To fix security vulnerabilities.",
          "To reduce storage space."
        ],
        correctAnswer: 2
      },
      {
        question: "5. What is a vulnerability? 10 remaining",
        answers: [
          "A firewall.",
          "A type of malware.",
          "A strong password.",
          "A security weakness that can be exploited by attackers."
        ],
        correctAnswer: 3
      },
      {
        question: "6. What is the purpose of hardening an operating system? 9 remaining",
        answers: [
          "To make it run faster.",
          "To make it more secure.",
          "To make it more user-friendly.",
          "To make it compatible with more software."
        ],
        correctAnswer: 1
      },
      {
        question: "7. Which of the following is a hardening technique? 8 remaining",
        answers: [
          "Disabling unnecessary services.",
          "Using default settings.",
          "Sharing administrative passwords.",
          "Installing software from untrusted sources."
        ],
        correctAnswer: 0
      },
      {
        question: "8. What is a common security concern for Windows systems? 7 remaining",
        answers: [
          "Lack of security updates.",
          "Susceptibility to malware.",
          "Poor performance.",
          "High cost"
        ],
        correctAnswer: 1
      },
      {
        question: "9. What is a common security advantage of Linux systems? 6 remaining",
        answers: [
          "Ease of use.",
          "Strong security features.",
          "High cost.",
          "Proprietary software."
        ],
        correctAnswer: 1
      },
      {
        question: "10. What is a common security concern for macOS systems? 5 remaining",
        answers: [
          "Limited software availability.",
          "High hardware requirements.",
          "Susceptibility to malware, especially ransomware.",
          "Difficult to use."
        ],
        correctAnswer: 2
      },
      {
        question: "11. What is the principle of least privilege? 4 remaining",
        answers: [
          "Granting users all necessary permissions to their jobs.",
          "Limiting user access to only the resources they need to perform their tasks.",
          "Requiring strong passwords for all users.",
          "Disabling unnecessary services on systems."
        ],
        correctAnswer: 1
      },
      {
        question: "12. What is two-factor authentication (2FA)? 3 remaining",
        answers: [
          "Using a single password for multiple accounts.",
          "Requiring two forms of identification, such as a password and a security token.",
          "Relying solely on strong passwords for security.",
          "Using biometric authentication, like fingerprint or facial recognition."
        ],
        correctAnswer: 1
      },
      {
        question: "13. Explain the concept of a security baseline. 2 remaining",
        answers: [
          "A minimum security standard for all systems.",
          "A type of firewall configuration.",
          "A regular security audit process.",
          "A documented set of security standards and configurations."
        ],
        correctAnswer: 3
      },
      {
        question: "14. What is a security audit? 1 remaining",
        answers: [
          "A daily security check.",
          "A formal examination of security practices, policies, and procedures.",
          "A software update process.",
          "A type of network configuration."
        ],
        correctAnswer: 1
      },
      {
        question: "15. What is the role of a security information and event management (SIEM) system? 0 remaining",
        answers: [
          "To monitor network traffic.",
          "To collect, analyze, and correlate security event data.",
          "To encrypt data.",
          "To update software automatically."
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
      usernameElement.textContent = "Welcome to Week (IV) Test, " + temporaryUsername;
    }
  }
  
  displayQuestion();
  displayUsername(); // Display username initially
  
  // Submit button functionality (if included)
  const submitButton = document.getElementById("submit-btn");
  submitButton.addEventListener("click", submitAnswer);
  
