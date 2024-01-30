export default [
  {
    id: "q1",
    question: "Which of the following is a symmetric encryption algorithm?",
    options: ["RSA", "AES", "SHA-256", "Diffie-Hellman"],
    correct_answer: "AES",
    explanation:
      "AES (Advanced Encryption Standard) is a symmetric encryption algorithm commonly used for securing data.",
  },
  {
    id: "q2",
    question: "What does the term 'BYOD' stand for in the context of security?",
    options: [
      "Bring Your Own Device",
      "Biometric Your Office Data",
      "Backup Your Online Data",
      "Block Your Online Devices",
    ],
    correct_answer: "Bring Your Own Device",
    explanation:
      "BYOD refers to the policy of allowing employees to bring their personal devices to work and use them to access company resources.",
  },
  {
    id: "q3",
    question:
      "Which of the following is an example of a biometric authentication method?",
    options: ["PKI", "ACL", "CAPTCHA", "Fingerprint scanner"],
    correct_answer: "Fingerprint scanner",
    explanation:
      "Biometric authentication uses physical or behavioral characteristics for identity verification. A fingerprint scanner is an example of a biometric device.",
  },
  {
    id: "q4",
    question: "What is the primary purpose of a firewall in network security?",
    options: [
      "Data encryption",
      "Access control",
      "Malware detection",
      "Packet filtering",
    ],
    correct_answer: "Packet filtering",
    explanation:
      "Firewalls use packet filtering to control the flow of network traffic based on pre-established security rules, helping prevent unauthorized access.",
  },
  {
    id: "q5",
    question:
      "In the context of cryptography, what does the term 'key escrow' refer to?",
    options: [
      "Key management process",
      "Recovery of lost keys",
      "Storage of encryption keys by a third party",
      "Key rotation",
    ],
    correct_answer: "Storage of encryption keys by a third party",
    explanation:
      "Key escrow involves storing copies of encryption keys with a trusted third party, providing a mechanism for key recovery if needed.",
  },
  {
    id: "q6",
    question: "Which protocol is commonly used for secure email communication?",
    options: ["HTTP", "SMTP", "FTP", "S/MIME"],
    correct_answer: "S/MIME",
    explanation:
      "S/MIME (Secure/Multipurpose Internet Mail Extensions) is a widely used protocol for securing email communication, providing encryption and digital signatures.",
  },
  {
    id: "q7",
    question:
      "What is the purpose of a VPN (Virtual Private Network) in network security?",
    options: [
      "Data compression",
      "Remote access",
      "Device tracking",
      "Email filtering",
    ],
    correct_answer: "Remote access",
    explanation:
      "VPNs enable secure remote access to a network over the internet, allowing users to connect securely to their organization's network from a remote location.",
  },
  {
    id: "q8",
    question:
      "Which of the following is a security control that falls under the category of 'physical security'?",
    options: [
      "Firewall",
      "Intrusion Detection System",
      "Mantrap",
      "Access Control List",
    ],
    correct_answer: "Mantrap",
    explanation:
      "A mantrap is a physical security control that consists of a small space with two sets of interlocking doors, designed to restrict unauthorized access.",
  },
  {
    id: "q9",
    question:
      "What is the primary purpose of a HIDS (Host-based Intrusion Detection System)?",
    options: [
      "Monitor network traffic",
      "Detect malware on individual devices",
      "Encrypt data in transit",
      "Filter incoming emails",
    ],
    correct_answer: "Detect malware on individual devices",
    explanation:
      "HIDS monitors the activities on individual hosts (computers) to detect and respond to suspicious behavior or security incidents, including malware detection.",
  },
  {
    id: "q10",
    question:
      "Which of the following is a common method of social engineering?",
    options: ["Encryption", "Phishing", "ACLs", "Hashing"],
    correct_answer: "Phishing",
    explanation:
      "Phishing is a social engineering technique where attackers use deceptive emails or websites to trick individuals into revealing sensitive information such as passwords or financial details.",
  },
  {
    id: "q11",
    question:
      "What does the acronym 'DRM' stand for in the context of digital content protection?",
    options: [
      "Digital Rights Management",
      "Data Recovery Mechanism",
      "Distributed Resource Model",
      "Dynamic Resource Management",
    ],
    correct_answer: "Digital Rights Management",
    explanation:
      "DRM is a set of technologies and methods used to protect the rights of content creators by controlling the use and distribution of digital content.",
  },
  {
    id: "q12",
    question:
      "Which of the following is a characteristic of a strong password?",
    options: [
      "Short and easy to remember",
      "Contains only letters",
      "Includes a mix of uppercase and lowercase letters, numbers, and symbols",
      "Never changed",
    ],
    correct_answer:
      "Includes a mix of uppercase and lowercase letters, numbers, and symbols",
    explanation:
      "A strong password should be complex, including a combination of uppercase and lowercase letters, numbers, and symbols, making it more resistant to password attacks.",
  },
  {
    id: "q12",
    question:
      "What is the primary purpose of an IDS (Intrusion Detection System)?",
    options: [
      "Data encryption",
      "Firewall management",
      "Monitor and analyze network traffic for suspicious activity",
      "Email filtering",
    ],
    correct_answer:
      "Monitor and analyze network traffic for suspicious activity",
    explanation:
      "An IDS monitors network traffic to identify and respond to potential security incidents or unauthorized access by analyzing patterns and behaviors.",
  },
  {
    id: "q13",
    question:
      "What type of attack involves an attacker intercepting communication between two parties without their knowledge?",
    options: [
      "Denial of Service (DoS)",
      "Man-in-the-Middle (MitM)",
      "Phishing",
      "Spoofing",
    ],
    correct_answer: "Man-in-the-Middle (MitM)",
    explanation:
      "In a Man-in-the-Middle attack, the attacker secretly intercepts and relays communication between two parties, potentially gaining unauthorized access or stealing sensitive information.",
  },
  {
    id: "q14",
    question:
      "Which cryptographic algorithm is commonly used for digital signatures?",
    options: ["MD5", "AES", "RSA", "SHA-1"],
    correct_answer: "RSA",
    explanation:
      "RSA (Rivest-Shamir-Adleman) is commonly used for digital signatures and asymmetric encryption, providing a secure way to verify the authenticity and integrity of digital messages.",
  },
  {
    id: "q15",
    question:
      "What is the purpose of a security token in multi-factor authentication?",
    options: [
      "Generate random access codes",
      "Biometric identification",
      "Provide a physical barrier",
      "Store encryption keys",
    ],
    correct_answer: "Generate random access codes",
    explanation:
      "A security token generates random access codes as part of multi-factor authentication, requiring users to provide something they know (password) and something they have (token) for access.",
  },
  {
    id: "q16",
    question:
      "What is the primary goal of risk management in the context of cybersecurity?",
    options: [
      "Eliminate all risks",
      "Transfer all risks to external parties",
      "Accept all risks without mitigation",
      "Minimize and manage risks to an acceptable level",
    ],
    correct_answer: "Minimize and manage risks to an acceptable level",
    explanation:
      "The goal of risk management is to identify, assess, and minimize risks to an acceptable level by implementing appropriate controls and measures.",
  },
  {
    id: "q17",
    question:
      "Which security principle focuses on ensuring that individuals have the right level of access to resources needed for their job functions?",
    options: [
      "Least Privilege",
      "Defense in Depth",
      "Security Through Obscurity",
      "Security Awareness",
    ],
    correct_answer: "Least Privilege",
    explanation:
      "Least Privilege principle ensures that individuals are granted the minimum level of access necessary to perform their job functions, reducing the risk of unauthorized access.",
  },
  {
    id: "q18",
    question: "What is the purpose of penetration testing in cybersecurity?",
    options: [
      "Vulnerability assessment",
      "Data encryption",
      "User training",
      "Unauthorized access prevention",
    ],
    correct_answer: "Vulnerability assessment",
    explanation:
      "Penetration testing involves simulating cyberattacks to identify vulnerabilities in a system or network, allowing organizations to address and remediate potential weaknesses.",
  },
];
