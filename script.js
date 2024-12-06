const questions = [
    {
      question: "1. Why is cybersecurity important? 14 remaining",
      answers: [
        "To keep your computer running smoothly.",
        "To protect sensitive information from unauthorized access.",
        "To ensure all websites are accessible.",
        "To browse the internet anonymously."
      ],
      correctAnswer: 1 //1
    },
    {
      question: "2. The CIA triad represents three key principles in information security. What does 'A' stand for? 13 remaining",
      answers: [
        "Authentication",
        "Availability",
        "Confidentiality",
        "Authorization"
      ],
      correctAnswer: 1 //2
    },
    {
      question: "3. Which of the following is NOT a core element of information security? 12 remaining",
      answers: [
        "Confidentiality",
        "Integrity",
        "Redundancy",
        "Availability"
      ],
      correctAnswer: 2
    },
    {
      question: "4. The cybersecurity landscape is constantly evolving. What is a term used to describe malicious attempts to exploit vulnerabilities in computer systems? 11 remaining",
      answers: [
        "Patch management",
        "Cyber threat",
        "Firewall",
        "Encryption"
      ],
      correctAnswer: 1
    },
    {
      question: "5. What can be the impact of a cybercrime on a business? 10 remaining",
      answers: [
        "Increased employee productivity",
        "Financial losses and reputational damage",
        "Improved customer service",
        "Faster internet speeds"
      ],
      correctAnswer: 1
    },
    {
      question: "6. Which type of cybercrime involves tricking victims into revealing personal information? 9 remaining",
      answers: [
        "Phishing",
        "Malware attack",
        "Denial-of-service attack (DoS)",
        "Data breach"
      ],
      correctAnswer: 0
    },
    {
      question: "7. Ethical hacking involves attempting to exploit vulnerabilities in a computer system with permission. What is another term for an ethical hacker? 8 remaining",
      answers: [
        "Cybercriminal",
        "White hat hacker",
        "Black hat hacker",
        "Script kiddie"
      ],
      correctAnswer: 1
    },
    {
      question: "8. Which cybersecurity career path focuses on designing and implementing security measures for computer systems? 6 remaining",
      answers: [
        "Cybersecurity Analyst",
        "Ethical Hacker",
        "Security Engineer",
        "Chief Information Security Officer (CISO)"
      ],
      correctAnswer: 2
    },
    {
      question: "9. What skills are important for a career in cybersecurity? 5 remaining",
      answers: [
        "Strong communication and problem-solving skills",
        "Ability to code in multiple programming languages",
        "Excellent customer service skills",
        "Experience in graphic design"
      ],
      correctAnswer: 0
    },
    {
      question: "10. Encryption is a technique used to: 4 remaining",
      answers: [
        "Make data readable by authorized users.",
        "Scramble data to make it unreadable without a key.",
        "Slow down internet connections.",
        "Track user activity online."
      ],
      correctAnswer: 1
    },
    {
      question: "11. A firewall acts as a barrier between a computer network and the internet. What is its primary function? 3 remaining",
      answers: [
        "To block all incoming and outgoing traffic.",
        "To filter incoming and outgoing traffic based on security rules.",
        "To encrypt all data sent over the network.",
        "To store user passwords securely."
      ],
      correctAnswer: 1
    },
    {
      question: "12. What is a common social engineering tactic used by cybercriminals? 2 remaining",
      answers: [
        "Exploiting software vulnerabilities.",
        "Using strong encryption methods.",
        "Creating a sense of urgency or fear to pressure victims.",
        "Implementing multi-factor authentication."
      ],
      correctAnswer: 2
    },
    {
      question: "13. Multi-factor authentication (MFA) is an additional layer of security that requires: 1 remaining",
      answers: [
        "Only a strong password.",
        "Either a password or a fingerprint scan.",
        "Both a password and a unique code sent to your phone.",
        "Answering a series of personal security questions."
      ],
      correctAnswer: 2
    },
    {
      question: "14. How can individuals stay informed about the latest cybersecurity threats? 0 remaining",
      answers: [
        "Clicking on links in unknown emails.",
        "Following reputable cybersecurity resources online.",
        "Downloading software from untrusted sources.",
        "Sharing personal information on public social media profiles."
      ],
      correctAnswer: 1
    },
    {
      question: "15. What is the CIA Triad in cybersecurity, and why is it important? 14 remaining",
      answers: [
        "A framework for assessing cybersecurity risks.",
        "A set of security principles to protect sensitive information.",
        "A technical control for securing networks.",
        "A type of cybersecurity attack."
      ],
      correctAnswer: 1 //1
    },
    {
      question: "16. Define the terms 'threat,' 'vulnerability,' and 'risk' in the context of cybersecurity. 13 remaining",
      answers: [
        "Threat: A potential danger to a system or network. Vulnerability: A weakness that can be exploited. Risk: The likelihood of a threat exploiting a vulnerability.",
        " Threat: A malicious actor. Vulnerability: A security control. Risk: A potential loss.",
        "Threat: A security policy. Vulnerability: A risk assessment. Risk: A threat actor.",
        "Threat: A network attack. Vulnerability: A firewall. Risk: A security breach."
      ],
      correctAnswer: 0 //2
    },
    {
      question: "17. What are some common types of cyber threats? 12 remaining",
      answers: [
        "Firewalls, intrusion detection systems, encryption, access controls.",
        "Security policies, user training, risk assessments, incident response plans.",
        "Malware, phishing, ransomware, DDoS attacks.",
        "Network topology, IP addressing, DNS, routing protocols."
      ],
      correctAnswer: 2
    },
    {
      question: "18. How can vulnerabilities in systems and software lead to security breaches? 11 remaining",
      answers: [
        "By allowing attackers to exploit weaknesses to gain unauthorized access.",
        "By providing a platform for secure communication.",
        "By strengthening the security posture of an organization.",
        "By preventing cyberattacks from occurring."
      ],
      correctAnswer: 0
    },
    {
      question: "19. Explain the concept of risk assessment and its importance in cybersecurity. 10 remaining",
      answers: [
        "Risk assessment is a technical process for securing networks.",
        "Risk assessment is a legal requirement for all organizations.",
        "Risk assessment is a one-time activity that should be conducted annually.",
        "Risk assessment involves identifying, analyzing, and prioritizing security risks to inform decision-making and resource allocation."
      ],
      correctAnswer: 3
    },
    {
      question: "20. What are the different types of security controls (technical, administrative, physical)? 9 remaining",
      answers: [
        "Technical controls: Firewalls, intrusion detection systems, encryption. Administrative controls: Security policies, user training, access controls. Physical controls: Locks, security guards, surveillance cameras.",
        "Technical controls: Security policies. Administrative controls: User training. Physical controls: Firewalls.",
        "Technical controls: Risk assessments. Administrative controls: Incident response plans. Physical controls: Encryption.",
        "Technical controls: Network topology. Administrative controls: IP addressing. Physical controls: DNS."
      ],
      correctAnswer: 0
    },
    {
      question: "21. Describe the role of access controls in protecting sensitive information. 8 remaining",
      answers: [
        "Access controls are used to encrypt data.",
        "Access controls limit who can access specific resources and what actions they can perform.",
        "Access controls are a type of network security device.",
        "Access controls are used to conduct security audits."
      ],
      correctAnswer: 1
    },
    {
      question: "22. How can network security measures, such as firewalls and intrusion detection systems, enhance security? 7 remaining",
      answers: [
        "By monitoring network traffic for suspicious activity and blocking unauthorized access.",
        "By encrypting data at rest and in transit.",
        "By conducting security awareness training for users.",
        "By developing comprehensive security policies."
      ],
      correctAnswer: 0
    },
    {
      question: "23. What is the importance of encryption in safeguarding data confidentiality? 6 remaining",
      answers: [
        "Encryption is used to identify and authenticate users.",
        "Encryption is a type of physical security control.",
        "Encryption transforms plaintext into ciphertext, making it unreadable to unauthorized individuals.",
        "Encryption is used to conduct vulnerability assessments."
      ],
      correctAnswer: 2
    },
    {
      question: "24. Explain the concept of incident response planning and its role in mitigating security breaches. 5 remaining",
      answers: [
        "Incident response planning outlines the steps to be taken in the event of a security breach, such as identifying, containing, investigating, and recovering from the incident.",
        "Incident response planning is a technical process for securing networks.",
        "Incident response planning is a legal requirement for all organizations.",
        "Incident response planning is a one-time activity that should be conducted annually."
      ],
      correctAnswer: 0
    },
    {
      question: "25. Why are security policies and procedures essential for organizations? 4 remaining",
      answers: [
        "To provide a framework for security operations and decision-making.",
        "To comply with regulatory requirements.",
        "To reduce the risk of security breaches.",
        "All of the above."
      ],
      correctAnswer: 3
    },
    {
      question: "26. What are the key elements of a comprehensive security policy? 3 remaining",
      answers: [
        "Access control policies, incident response procedures, and user awareness guidelines.",
        "Network configuration standards, encryption policies, and vulnerability management procedures.",
        "Both a and b.",
        "None of the above."
      ],
      correctAnswer: 2
    },
    {
      question: "27. How can user awareness and training programs contribute to a strong security posture? 2 remaining",
      answers: [
        "By educating users about security best practices and threats.",
        "By empowering users to identify and report security incidents.",
        "By fostering a security-conscious culture within the organization.",
        "All of the above."
      ],
      correctAnswer: 3
    },
    {
      question: "28. What is the role of regular security audits and assessments? 1 remaining",
      answers: [
        "To identify and address security vulnerabilities and weaknesses.",
        "To ensure compliance with security policies and standards.",
        "To measure the effectiveness of security controls.",
        "All of the above."
      ],
      correctAnswer: 3
    },
    {
      question: "29. Discuss the importance of business continuity and disaster recovery planning in cybersecurity. 0 remaining",
      answers: [
        "To minimize business disruption and financial loss in the event of a security incident.",
        "To ensure rapid recovery and restoration of critical systems and data.",
        "To maintain business operations during and after a security breach.",
        "All of the above."
      ],
      correctAnswer: 3
    },
    {
      question: "30. What is the purpose of a router in a network? 12 remaining",
      answers: [
        "To connect devices within a network.",
        "To amplify network signals.",
        "To direct network traffic between networks.",
        "To provide internet access."
      ],
      correctAnswer: 2
    },
    {
      question: "31. What are the different types of firewalls? 11 remaining",
      answers: [
        "Packet filtering, application-level gateway, stateful inspection.",
        "Software, hardware, cloud-based.",
        "Firewall, IDS, IPS.",
        "All of the above."
      ],
      correctAnswer: 0
    },
    {
      question: "32. How does an Intrusion Detection System (IDS) differ from an Intrusion Prevention System (IPS)? 10 remaining",
      answers: [
        "IDS detects attacks, IPS prevents them.",
        "IDS prevents attacks, IPS detects them.",
        "IDS and IPS are the same.",
        "IDS is hardware-based, IPS is software-based."
      ],
      correctAnswer: 0
    },
    {
      question: "33. What is a firewall's role in network security? 9 remaining",
      answers: [
        "To monitor network traffic for malicious activity.",
        "To control network access by filtering traffic.",
        "To encrypt network traffic.",
        "To detect and block network attacks."
      ],
      correctAnswer: 1
    },
    {
      question: "34. What is WPA3, and how does it improve upon WPA2? 8 remaining",
      answers: [
        "WPA3 is a newer Wi-Fi security standard that offers stronger encryption and protection against attacks.",
        "WPA3 is faster than WPA2.",
        "WPA3 is cheaper than WPA2.",
        "WPA3 is only compatible with newer devices."
      ],
      correctAnswer: 0
    },
    {
      question: "35. What is the importance of MAC address filtering in wireless networks? 7 remaining",
      answers: [
        "To limit access to the network to specific devices.",
        "To encrypt network traffic.",
        "To improve network performance.",
        "To prevent unauthorized access to the network."
      ],
      correctAnswer: 0
    },
    {
      question: "36. What are some common wireless network attacks? 6 remaining",
      answers: [
        "Phishing, spear phishing, ransomware.",
        "War driving, wardriving, man-in-the-middle attacks.",
        "DDoS attacks, SQL injection, cross-site scripting.",
        "Brute force attacks, dictionary attacks, keylogger attacks."
      ],
      correctAnswer: 1
    },
    {
      question: "37. What is a VPN (Virtual Private Network), and how does it work? 5 remaining",
      answers: [
        "A VPN is a secure, encrypted connection over a public network.",
        "A VPN masks your IP address to hide your online activity.",
        "A VPN encrypts your internet traffic to protect your privacy.",
        "All of the above."
      ],
      correctAnswer: 3
    },
    {
      question: "38. What is the difference between a site-to-site and a remote access VPN? 4 remaining",
      answers: [
        "Site-to-site VPNs connect networks, remote access VPNs connect individual devices.",
        "Site-to-site VPNs are more secure than remote access VPNs.",
        "Site-to-site VPNs are slower than remote access VPNs.",
        "Site-to-site VPNs are only used for large organizations."
      ],
      correctAnswer: 0
    },
    {
      question: "39. What encryption protocols are commonly used in VPNs? 3 remaining",
      answers: [
        "AES, RSA, ECC.",
        "WPA2, WPA3, WEP.",
        "MD5, SHA-1, SHA-256.",
        "SSL, TLS, IPsec."
      ],
      correctAnswer: 3
    },
    {
      question: "40. What is the principle of least privilege in network security? 2 remaining",
      answers: [
        "Granting users only the minimum level of access needed to perform their tasks.",
        "Using strong passwords and encryption.",
        "Regularly patching and updating systems.",
        "Implementing firewalls and intrusion detection systems."
      ],
      correctAnswer: 0
    },
    {
      question: "41. Explain the concept of social engineering in the context of network security. 1 remaining",
      answers: [
        "Using technical means to exploit vulnerabilities in systems.",
        "Manipulating people to gain unauthorized access to systems.",
        "Hacking into networks to steal data.",
        "Spreading malware through email attachments."
      ],
      correctAnswer: 1
    },
    {
      question: "42. What is a zero-day exploit, and how can organizations protect themselves from it? 0 remaining",
      answers: [
        "A vulnerability that is known to attackers but not yet patched by the vendor.",
        "A type of malware that spreads through email attachments.",
        "A hacking technique that uses social engineering to gain access to systems.",
        "A denial-of-service attack that overwhelms a network with traffic."
      ],
      correctAnswer: 0
    },
    {
      question: "43. What is the purpose of hardening an operating system? 9 remaining",
      answers: [
        "To make it run faster.",
        "To make it more secure.",
        "To make it more user-friendly.",
        "To make it compatible with more software."
      ],
      correctAnswer: 1
    },
    {
      question: "44. Which of the following is a hardening technique? 8 remaining",
      answers: [
        "Disabling unnecessary services.",
        "Using default settings.",
        "Sharing administrative passwords.",
        "Installing software from untrusted sources."
      ],
      correctAnswer: 0
    },
    {
      question: "45. What is a common security concern for Windows systems? 7 remaining",
      answers: [
        "Lack of security updates.",
        "Susceptibility to malware.",
        "Poor performance.",
        "High cost"
      ],
      correctAnswer: 1
    },
    {
      question: "46. What is a common security advantage of Linux systems? 6 remaining",
      answers: [
        "Ease of use.",
        "Strong security features.",
        "High cost.",
        "Proprietary software."
      ],
      correctAnswer: 1
    },
    {
      question: "47. What is the principle of least privilege? 4 remaining",
      answers: [
        "Granting users all necessary permissions to their jobs.",
        "Limiting user access to only the resources they need to perform their tasks.",
        "Requiring strong passwords for all users.",
        "Disabling unnecessary services on systems."
      ],
      correctAnswer: 1
    },
    {
      question: "48. What is two-factor authentication (2FA)? 3 remaining",
      answers: [
        "Using a single password for multiple accounts.",
        "Requiring two forms of identification, such as a password and a security token.",
        "Relying solely on strong passwords for security.",
        "Using biometric authentication, like fingerprint or facial recognition."
      ],
      correctAnswer: 1
    },
    {
      question: "49. What is a security audit? 1 remaining",
      answers: [
        "A daily security check.",
        "A formal examination of security practices, policies, and procedures.",
        "A software update process.",
        "A type of network configuration."
      ],
      correctAnswer: 1
    },
    {
      question: "50. What is the role of a security information and event management (SIEM) system? 0 remaining",
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
  
