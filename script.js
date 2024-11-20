const questions = [
    {
        question: "1. What is the difference between TCP and UDP protocols? 14 remaining",
        answers: [
          "TCP is connection-oriented, UDP is connectionless.",
          "TCP is faster, UDP is slower.",
          "TCP is unreliable, UDP is reliable.",
          "TCP is used for streaming, UDP is used for file transfer."
        ],
        correctAnswer: 0 //1
      },
      {
        question: "2. Explain the OSI model and its seven layers. 13 remaining",
        answers: [
          "The OSI model is a conceptual framework used to describe the functions of a networking system.",
          "The seven layers are Physical, Data Link, Network, Transport, Session, Presentation, and Application.",
          "Each layer performs specific tasks related to data communication.",
          "All of the above."
        ],
        correctAnswer: 3 //2
      },
      {
        question: "3. What is the purpose of a router in a network? 12 remaining",
        answers: [
          "To connect devices within a network.",
          "To amplify network signals.",
          "To direct network traffic between networks.",
          "To provide internet access."
        ],
        correctAnswer: 2
      },
      {
        question: "4. What are the different types of firewalls? 11 remaining",
        answers: [
          "Packet filtering, application-level gateway, stateful inspection.",
          "Software, hardware, cloud-based.",
          "Firewall, IDS, IPS.",
          "All of the above."
        ],
        correctAnswer: 0
      },
      {
        question: "5. How does an Intrusion Detection System (IDS) differ from an Intrusion Prevention System (IPS)? 10 remaining",
        answers: [
          "IDS detects attacks, IPS prevents them.",
          "IDS prevents attacks, IPS detects them.",
          "IDS and IPS are the same.",
          "IDS is hardware-based, IPS is software-based."
        ],
        correctAnswer: 0
      },
      {
        question: "6. What is a firewall's role in network security? 9 remaining",
        answers: [
          "To monitor network traffic for malicious activity.",
          "To control network access by filtering traffic.",
          "To encrypt network traffic.",
          "To detect and block network attacks."
        ],
        correctAnswer: 1
      },
      {
        question: "7. What is WPA3, and how does it improve upon WPA2? 8 remaining",
        answers: [
          "WPA3 is a newer Wi-Fi security standard that offers stronger encryption and protection against attacks.",
          "WPA3 is faster than WPA2.",
          "WPA3 is cheaper than WPA2.",
          "WPA3 is only compatible with newer devices."
        ],
        correctAnswer: 0
      },
      {
        question: "8. What is the importance of MAC address filtering in wireless networks? 7 remaining",
        answers: [
          "To limit access to the network to specific devices.",
          "To encrypt network traffic.",
          "To improve network performance.",
          "To prevent unauthorized access to the network."
        ],
        correctAnswer: 0
      },
      {
        question: "9. What are some common wireless network attacks? 6 remaining",
        answers: [
          "Phishing, spear phishing, ransomware.",
          "War driving, wardriving, man-in-the-middle attacks.",
          "DDoS attacks, SQL injection, cross-site scripting.",
          "Brute force attacks, dictionary attacks, keylogger attacks."
        ],
        correctAnswer: 1
      },
      {
        question: "10. What is a VPN (Virtual Private Network), and how does it work? 5 remaining",
        answers: [
          "A VPN is a secure, encrypted connection over a public network.",
          "A VPN masks your IP address to hide your online activity.",
          "A VPN encrypts your internet traffic to protect your privacy.",
          "All of the above."
        ],
        correctAnswer: 3
      },
      {
        question: "11. What is the difference between a site-to-site and a remote access VPN? 4 remaining",
        answers: [
          "Site-to-site VPNs connect networks, remote access VPNs connect individual devices.",
          "Site-to-site VPNs are more secure than remote access VPNs.",
          "Site-to-site VPNs are slower than remote access VPNs.",
          "Site-to-site VPNs are only used for large organizations."
        ],
        correctAnswer: 0
      },
      {
        question: "12. What encryption protocols are commonly used in VPNs? 3 remaining",
        answers: [
          "AES, RSA, ECC.",
          "WPA2, WPA3, WEP.",
          "MD5, SHA-1, SHA-256.",
          "SSL, TLS, IPsec."
        ],
        correctAnswer: 3
      },
      {
        question: "13. What is the principle of least privilege in network security? 2 remaining",
        answers: [
          "Granting users only the minimum level of access needed to perform their tasks.",
          "Using strong passwords and encryption.",
          "Regularly patching and updating systems.",
          "Implementing firewalls and intrusion detection systems."
        ],
        correctAnswer: 0
      },
      {
        question: "14. Explain the concept of social engineering in the context of network security. 1 remaining",
        answers: [
          "Using technical means to exploit vulnerabilities in systems.",
          "Manipulating people to gain unauthorized access to systems.",
          "Hacking into networks to steal data.",
          "Spreading malware through email attachments."
        ],
        correctAnswer: 1
      },
      {
        question: "15. What is a zero-day exploit, and how can organizations protect themselves from it? 0 remaining",
        answers: [
          "A vulnerability that is known to attackers but not yet patched by the vendor.",
          "A type of malware that spreads through email attachments.",
          "A hacking technique that uses social engineering to gain access to systems.",
          "A denial-of-service attack that overwhelms a network with traffic."
        ],
        correctAnswer: 0
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
      usernameElement.textContent = "Welcome to Week (III) Test, " + temporaryUsername;
    }
  }
  
  displayQuestion();
  displayUsername(); // Display username initially
  
  // Submit button functionality (if included)
  const submitButton = document.getElementById("submit-btn");
  submitButton.addEventListener("click", submitAnswer);
  
