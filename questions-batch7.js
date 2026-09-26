const questionsBatch7 = [
    {
        "id": 601,
        "question": "Which technique is MOST effective to bypass signature-based IDS?",
        "options": [
            "Obfuscation",
            "Polymorphism ",
            "Encryption",
            "Port scanning"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 602,
        "question": "An attacker exploits a misconfigured S3 bucket containing application backups with database credentials.\n\nWhat cloud security failure category does this fall under?",
        "options": [
            "Misconfiguration ",
            "Insider threat",
            "Zero-day vulnerability",
            "Malware infection"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 603,
        "question": "A DNS server responds with different IP addresses rapidly for the same domain, pointing to constantly changing hosts.\n\nWhat technique is being used?",
        "options": [
            "DNS tunneling",
            "DNS poisoning",
            "Fast flux",
            "Zone transfer"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 604,
        "question": "A penetration tester extracts NTLM hashes but does not crack them, instead reuses them to authenticate.\n\nWhat attack is this?",
        "options": [
            "Kerberoasting",
            "Pass-the-hash ",
            "Brute force",
            "Replay attack"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 605,
        "question": "Attackers compromise a legitimate email account and send convincing internal messages requesting urgent actions.\n\nWhat attack is this?",
        "options": [
            "Spoofing",
            "Phishing",
            "Spear phishing",
            "Business Email Compromise "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 606,
        "question": "A senior attacker uses OAuth tokens stolen from browser storage to access APIs.\n\nWhat attack does this represent?",
        "options": [
            "SQL Injection",
            "CSRF",
            "XSS",
            "Token replay"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 607,
        "question": "An organization lacks centralized logs. Which attack phase is hardest to detect?",
        "options": [
            "Lateral movement ",
            "Recon",
            "Delivery",
            "Initial access"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 608,
        "question": "Which metric best measures detection speed?",
        "options": [
            "MTTD ",
            "SLA",
            "CVSS",
            "MTTR"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 609,
        "question": "A web app fails to restrict API request frequency.\n\nWhat risk exists?",
        "options": [
            "Data scraping ",
            "CSRF",
            "XSS",
            "SQLi"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 610,
        "question": "A Java app uses ObjectInputStream.readObject() on untrusted data.\n\nWhat is the risk?",
        "options": [
            "DoS",
            "XSS",
            "Insecure Deserialization ",
            "SQLi"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 611,
        "question": "A REST API uses user-provided object IDs without authorization checks.\n\nWhat flaw is this?",
        "options": [
            "Mass assignment",
            "XSS",
            "SQLi",
            "BOLA "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 612,
        "question": "A Java app uses Random() for session tokens.\n\nWhat is the risk?",
        "options": [
            "Session fixation",
            "XSS",
            "Predictable tokens ",
            "CSRF"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 613,
        "question": "A Java app uses outdated libraries with known CVEs.\n\nWhat risk does this create?",
        "options": [
            "CSRF",
            "DoS",
            "Supply chain risk ",
            "XSS"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 614,
        "question": "A web app does not limit API request rate in code.\n\nWhat attack is enabled?",
        "options": [
            "XSS",
            "Data scraping ",
            "SQLi",
            "CSRF"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 615,
        "question": "A Java app allows file download via user-controlled path.\n\nWhat attack is possible?",
        "options": [
            "SQLi",
            "Path traversal ",
            "XSS",
            "CSRF"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 616,
        "question": "An attacker accesses a server using reused NTLM hashes without cracking passwords.\n\nWhat attack is this?",
        "options": [
            "Brute force",
            "Replay",
            "Kerberoasting",
            "Pass-the-hash "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 617,
        "question": "A Linux server has world-writable cron directories.\n\nWhat can attackers achieve?",
        "options": [
            "DoS",
            "SQLi",
            "XSS",
            "Persistence "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 618,
        "question": "A compromised admin account is used to disable logging services.\n\nWhat is the attacker attempting?",
        "options": [
            "Anti-forensics",
            "Exfiltration",
            "Recon",
            "Privilege escalation"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 619,
        "question": "A Windows system shows LSASS memory access by unknown processes.\n\nWhat attack is likely?",
        "options": [
            "SQLi",
            "XSS",
            "Credential dumping ",
            "DoS"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 620,
        "question": "A Windows machine shows disabled Windows Defender without admin approval.\n\nWhat phase is this?",
        "options": [
            "Delivery",
            "Persistence",
            "Recon",
            "Defense evasion "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 621,
        "question": "Suppose your company has just passed a security risk assessment exercise. The results display that the risk of the breach in the main company application is 50%. Security staff has taken some measures and implemented the necessary controls. After that, another security risk assessment was performed showing that risk has decreased to 10%. The risk threshold for the application is 20%.\n\nWhich of the following risk decisions will be the best for the project in terms of its successful continuation with the most business profit?",
        "options": [
            "Introduce more controls to bring risk to 0%",
            "Avoid the risk",
            "Mitigate the risk",
            "Accept the risk "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 622,
        "question": "Which of the following is the primary objective of a rootkit?",
        "options": [
            "It provides an undocumented opening in a program",
            "It replaces legitimate programs ",
            "It creates a buffer overflow",
            "It opens a port to provide an unauthorized service"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 623,
        "question": "A new wireless client is configured to join a 802.11 network. This client uses the same hardware and software as many of the other clients on the network. The client can see the network, but cannot connect. A wireless packet sniffer shows that the Wireless Access Point (WAP) is not responding to the association requests being sent by the wireless client.\n\nWhat is a possible source of this problem?",
        "options": [
            "The WAP does not recognize the client’s MAC address ",
            "The client cannot see the SSID of the wireless network",
            "The wireless client is not configured to use DHCP",
            "Client is configured for the wrong channel"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 624,
        "question": "Bob is doing a password assessment for one of his clients. Bob suspects that security policies are not in place. He also suspects that weak passwords are probably the norm throughout the company he is evaluating. Bob is familiar with password weaknesses and key loggers.\n\nWhich of the following options best represents the means that Bob can adopt to retrieve passwords from his clients hosts and servers?",
        "options": [
            "Software only, they are the most effective.",
            "Hardware and Software Keyloggers.",
            "Passwords are always best obtained using Hardware key loggers.",
            "Hardware, Software, and Sniffing. "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 625,
        "question": "Null sessions are un-authenticated connections (not using a username or password.) to an NT or 2000 system.\n\nWhich TCP and UDP ports must you filter to check null sessions on your network?",
        "options": [
            "139 and 443",
            "137 and 139",
            "137 and 443",
            "139 and 445"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 626,
        "question": "What is the minimum number of network connections in a multihomed firewall?",
        "options": [
            "5",
            "2",
            "3 ",
            "4"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 627,
        "question": "User A is writing a sensitive email message to user B outside the local network. User A has chosen to use PKI to secure his message and ensure only user B can read the sensitive email.\n\nAt what layer of the OSI layer does the encryption and decryption of the message take place?",
        "options": [
            "Transport",
            "Presentation",
            "Application",
            "Session"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 628,
        "question": "Which address translation scheme would allow a single public IP address to always correspond to a single machine on an internal network, allowing “server publishing”?",
        "options": [
            "Static Network Address Translation",
            "Overloading Port Address Translation",
            "Dynamic Network",
            "Dynamic Port Address Translation"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 629,
        "question": "During a recent security assessment, you discover the organization has one Domain Name Server (DNS) in a Demilitarized Zone (DMZ) and a second DNS server on the internal network.\n\nWhat is this type of DNS configuration commonly called?",
        "options": [
            "DNS Scheme",
            "DNSSEC",
            "DynDNS",
            "Split DNS "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 630,
        "question": "The configuration allows a wired or wireless network interface controller to pass all traffic it receives to the Central Processing Unit (CPU), rather than passing only the frames that the controller is intended to receive.\n\nWhich of the following is being described?",
        "options": [
            "Promiscuous mode ",
            "Port forwarding",
            "WEM",
            "Multi-cast mode"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 631,
        "question": "What is a “Collision attack” in cryptography?",
        "options": [
            "Collision attacks try to find two inputs producing the same hash ",
            "Collision attacks try to get the public key",
            "Collision attacks try to break the hash into three parts to get the plaintext value",
            "Collision attacks try to break the hash into two parts, with the same bytes in each part to get the private key"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 632,
        "question": "A web application allows users to upload files and later include them in pages dynamically. Attackers exploit this to execute code.\n\nWhich vulnerability exists?",
        "options": [
            "LFI",
            "RFI ",
            "CSRF",
            "XSS"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 633,
        "question": "Bob received this text message on his mobile phone: \"Hello, this is Scott Smelby from the Yahoo Bank. Kindly contact me for a vital transaction on: [email protected]\".\n\nWhich statement below is true?",
        "options": [
            "This is a scam because Bob does not know Scott.",
            "This is probably a legitimate message as it comes from a respectable organization.",
            "Bob should write to [email protected] to verify the identity of Scott.",
            "This is a scam as everybody can get a @yahoo address, not the Yahoo customer service employees. "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 634,
        "question": "Which of the following tools can be used for passive OS fingerprinting?",
        "options": [
            "nmap",
            "ping",
            "tcpdump ",
            "tracert"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 635,
        "question": "Which of the following is a component of a risk assessment?",
        "options": [
            "Administrative safeguards ",
            "Logical interface",
            "Physical security",
            "DMZ"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 636,
        "question": "Which type of security feature stops vehicles from crashing through the doors of a building?",
        "options": [
            "Receptionist",
            "Mantrap",
            "Bollards ",
            "Turnstile"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 637,
        "question": "What is GINA?",
        "options": [
            "GUI Installed Network Application CLASS",
            "Gateway Interface Network Application",
            "Graphical Identification and Authentication DLL ",
            "Global Internet National Authority (G-USA)"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 638,
        "question": "The tools which receive event logs from servers, network equipment, and applications, and perform analysis and correlation on those logs, and can generate alarms for security relevant issues, are known as what?",
        "options": [
            "Intrusion prevention Server",
            "Security incident and event Monitoring ",
            "network Sniffer",
            "Vulnerability Scanner"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 639,
        "question": "Scenario: 1.Victim opens the attacker’s web site. \n 2.Attacker sets up a web site which contains interesting and attractive content like ‘Do you want to make S1000 in a day?’. \n 3.Victim clicks to the interesting and attractive content URL. \n 4.Attacker creates a transparent ‘iframe’ in front of the URL which victim attempts to click, so victim thinks that he/she clicks to the ‘Do you want to make $1000 in a day?’ URL but actually he/she clicks to the content or URL that exists in the transparent ‘iframe’ which is setup by the attacker.\nWhat is the name of the attack which is mentioned in the scenario?",
        "options": [
            "HTTP Parameter Pollution",
            "Clickjacking Attack ",
            "HTML Injection",
            "Session Fixation"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 640,
        "question": "What kind of detection techniques is being used in antivirus software that identifies malware by collecting data from multiple protected systems and instead of analyzing files locally it’s made on the provider’s environment?",
        "options": [
            "Heuristics based",
            "Honeypot based",
            "Behavioral based",
            "Cloud based"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 641,
        "question": "What is the proper response for a NULL scan if the port is closed?",
        "options": [
            "No response",
            "FIN",
            "RST ",
            "SYN E)\tACK F)\tPSH"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 642,
        "question": "You have successfully comprised a server having an IP address of 10.10.0.5. You would like to enumerate all machines in the same network quickly.\n\nWhat is the best Nmap command you will use?",
        "options": [
            "nmap -T4 -q 10.10.0.0/24",
            "nmap -T4 -O 10.10.0.0/24",
            "nmap -T4 -r 10.10.1.0/24",
            "nmap -T4 -F 10.10.0.0/24 "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 643,
        "question": "An attacker, using a rogue wireless AP, performed an MITM attack and injected an HTML code to embed a malicious applet in all HTTP connections. When users accessed any page, the applet ran and exploited many machines.\n\nWhich one of the following tools the hacker probably used to inject HTML code?",
        "options": [
            "Wireshark",
            "Aircrack-ng",
            "Ettercap ",
            "Tcpdump"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 644,
        "question": "Which of the following algorithms can be used to guarantee the integrity of messages being sent, in transit, or stored?",
        "options": [
            "hashing algorithms ",
            "integrity algorithms",
            "symmetric algorithms",
            "asymmetric algorithms"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 645,
        "question": "The company ABC recently contracts a new accountant. The accountant will be working with the financial statements. Those financial statements need to be approved by the CFO and then they will be sent to the accountant but the CFO is worried because he wants to be sure that the information sent to the accountant was not modified once he approved it.\n\nWhich of the following options can be useful to ensure the integrity of the data?",
        "options": [
            "The document can be sent to the accountant using an exclusive USB for that document",
            "The CFO can use an excel file with a password",
            "The financial statements can be sent twice, one by email and the other delivered in USB and the accountant can compare both to be sure is the same document",
            "The CFO can use a hash algorithm in the document once he approved the financial statements "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 646,
        "question": "A company’s security policy states that all Web browsers must automatically delete their HTTP browser cookies upon terminating.\n\nWhat sort of security breach is this policy attempting to mitigate?",
        "options": [
            "Attempts by attackers to access Web sites that trust the Web browser user by stealing the user’s authentication credentials. ",
            "Attempts by attackers to determine the user’s Web browser usage patterns, including when sites were visited and for how long.",
            "Attempts by attackers to access the user and password information stored in the company’s SQL database.",
            "Attempts by attackers to access password stored on the user's computer without the user’s knowledge."
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 647,
        "question": "A large mobile telephony and data network operator has a data center that houses network elements. These are essentially large computers running on Linux. The perimeter of the data center is secured with firewalls and IPS systems.\n\nWhat is the best security policy concerning this setup?",
        "options": [
            "There is no need for specific security measures on the network elements as long as firewalls and IPS systems exist.",
            "The operator knows that attacks and down time are inevitable and should have a backup site.",
            "Network elements must be hardened with user ids and strong passwords. Regular security tests and audits should be performed.",
            "As long as the physical access to the network elements is restricted, there is no need for additional measures."
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 648,
        "question": "By using a smart card and pin, you are using a two-factor authentication that satisfies",
        "options": [
            "Something you know and something you are",
            "Something you have and something you know ",
            "Something you have and something you are",
            "Something you are and something you remember"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 649,
        "question": "Is a set of extensions to DNS that provide the origin authentication of DNS data to DNS clients (resolvers) so as to reduce the threat of DNS poisoning, spoofing, and similar types of attacks.",
        "options": [
            "Resource transfer",
            "Resource records",
            "DNSSEC ",
            "Zone transfer"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 650,
        "question": "Which of the following program infects the system boot sector and the executable files at the same time?",
        "options": [
            "Stealth virus",
            "Polymorphic virus",
            "Macro virus",
            "Multipartite Virus"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 651,
        "question": "Why would you consider sending an email to an address that you know does not exist within the company you are performing a Penetration Test for?",
        "options": [
            "To illicit a response back that will reveal information about email servers and how they treat undeliverable mail",
            "To create needless SPAM",
            "To determine who is the holder of the root account",
            "To test for virus protection"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 652,
        "question": "Although FTP traffic is not encrypted by default, which layer 3 protocol would allow for end-to-end encryption of the connection?",
        "options": [
            "FTPS",
            "SFTP",
            "SSL",
            "IPsec "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 653,
        "question": "Which method of password cracking takes the most time and effort?",
        "options": [
            "Dictionary attack",
            "Rainbow tables",
            "Shoulder surfing",
            "Brute force "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 654,
        "question": "Which of the following tools performs comprehensive tests against web servers, including dangerous files and CGIs?",
        "options": [
            "John the Ripper",
            "Dsniff",
            "Snort",
            "Nikto "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 655,
        "question": "The establishment of a TCP connection involves a negotiation called three-way handshake.\n\nWhat type of message does the client send to the server in order to begin this negotiation?",
        "options": [
            "RST",
            "ACK",
            "SYN-ACK",
            "SYN "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 656,
        "question": "Your ethical hacking firm has been hired to conduct a penetration test.\n\nWhich of the following documents limits what you can discuss publicly?",
        "options": [
            "Nondisclosure agreement",
            "Memorandum of understanding",
            "PCI-DSS",
            "Terms of engagement"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 657,
        "question": "During an authorized cloud security assessment for an e-commerce company based in Seattle, Washington, a certified ethical hacker gains temporary programmatic access to the organization's cloud account.\n\nThe tester focuses on identifying permission boundaries by querying the account to determine which identity entities are associated with attached policies and what level of access those identities possess across cloud resources. The objective is to understand privilege relationships before attempting any further controlled actions.\n\nWhich cloud reconnaissance activity best aligns with this effort?",
        "options": [
            "Enumerating IAM Roles ",
            "Enumerating S3 Buckets",
            "Enumerating EC2 Instances",
            "Enumerating Serverless Resources"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 658,
        "question": "A financial services firm detects that outbound corporate emails containing sensitive underwriting data were intercepted while transmitted over unsecured channels. To immediately restore confidentiality and ensure authenticity of executive communications, the security operations team deploys a standardized email encryption framework compatible with the organization's Microsoft Outlook environment.\n\nThe selected solution must support digital signatures for sender authentication, rely on a public-key infrastructure for secure key exchange, and enable recipients to validate signed messages using certificates issued by trusted authorities.\n\nIdentify the email encryption standard that best fulfills these requirements.",
        "options": [
            "FlowCrypt",
            "RMail",
            "S/MIME ",
            "QpenPGP"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 659,
        "question": "An authorized security assessment is performed on a public-sector services portal in Madison, Wisconsin. After authenticating with a controlled test account, the assessor captures the authentication identifier issued by the application.\n\nUnder controlled lab conditions, she attempts to reuse the captured identifier from a separate machine connected through a different encrypted channel. Although the identifier remains valid and within its lifetime, the application rejects the request when presented from the alternate environment.\n\nAnalysis indicates that the server evaluates characteristics associated with the original secure exchange before allowing continued use of the issued identifier.\n\nWhich defensive mechanism most likely explains this behavior?",
        "options": [
            "Encrypting DNS resolution traffic using DNS over HTTPS",
            "Cryptographically binding authentication tokens to the TLS connection context",
            "Applying IPsec protection at the network layer",
            "Enforcing HTTP Strict Transport Security"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 660,
        "question": "During an external assessment, a security analyst configures Nmap so that the hardware address recorded in firewall logs differs from the original interface address of the scanning system. Repeated executions of the scan show that the recorded hardware address changes automatically each time. What Nmap option enables this behavior?",
        "options": [
            "--spoof-mac 0 ",
            "--spoof-mac Dell",
            "--spoof-mac 00:01:02:25:56:AE",
            "--spoof-mac Dell 10.10.1.11"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 661,
        "question": "While conducting a compliance-driven security assessment at a public healthcare data center in Maryland, Jason, a senior penetration tester, was asked to reconcile outdated asset documentation for several legacy network appliances still active within the environment. Internal records lacked accurate device identifiers, administrative contact entries, and interface-level statistics needed for regulatory reporting.\n\nPreliminary testing revealed that the devices were still exposing management information through long-standing read-only credentials configured years earlier. Rather than logging into each device manually or passively observing traffic, Jason decided to use a command-line approach that would systematically traverse the exposed management object tree of each system and redirect the complete output into a file for automated processing.\n\nDetermine which tool aligns with this requirement.",
        "options": [
            "SoftPerfect Network Scanner",
            "Wireshark",
            "Nmap",
            "SnmpWalk "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 662,
        "question": "Several months prior to a confirmed compromise, security telemetry at a semiconductor manufacturer in Phoenix, Arizona showed systematic intelligence gathering focused on executive leadership, research engineers, and publicly exposed infrastructure.\n\nSubsequent investigation determined that the adversary had assembled customized exploit frameworks, tested malware variants against commercial defensive products in isolated environments, and mapped externally accessible services associated with the organization.\n\nThese activities were part of a coordinated strategy developed well before any credential abuse or lateral movement was observed.\n\nDetermine the APT lifecycle stage represented by these actions.",
        "options": [
            "Persistence",
            "Expansion",
            "Preparation ",
            "Initial Intrusion"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 663,
        "question": "A regional healthcare provider in Phoenix began experiencing intermittent outages affecting its patient portal. Network monitoring showed an abrupt surge of traffic consisting of short, stateless datagrams directed at random service ports across multiple edge-facing servers.\n\nUnlike connection-oriented attacks, there was no evidence of incomplete handshakes or abnormal session buildup. Instead, the attack traffic simply consumed available upstream capacity through sheer packet volume, preventing legitimate users from reaching the web platform.\n\nBased on the observed behavior, determine the most likely attack technique.",
        "options": [
            "NTP amplification attack",
            "Ping of Death attack",
            "ICMP flood attack",
            "UDP flood attack "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 664,
        "question": "An enterprise logistics company in Nashville, Tennessee recently rolled out an automation update across its internal administrative systems. Within days, performance monitoring tools began reporting sporadic spikes in outbound connections and short-lived execution chains tied to a built-in scripting utility.\n\nSecurity teams conducted full disk scans and integrity checks but found no unfamiliar executables or altered application binaries. Closer inspection of live system activity revealed that encoded command sequences were being executed within trusted system processes. The activity ceased after a restart but reappeared when similar administrative actions were triggered.\n\nIdentify the malware category that best aligns with this operational pattern.",
        "options": [
            "Rootkit",
            "Trojan",
            "Fileless Malware ",
            "Worm"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 665,
        "question": "An enterprise organization in Chicago deploys a WPA2-Enterprise wireless network integrated with a centralized authentication server to validate user credentials through 802.1X. A security consultant is tasked with assessing the resilience of the authentication workflow.\n\nWhile monitoring wireless traffic near the facility, the consultant captures a successful authentication exchange between a legitimate employee device and the authentication infrastructure. Instead of attempting to derive credentials or modify packet contents, the consultant retransmits portions of the previously observed authentication messages to the network under controlled conditions.\n\nThe access point processes the retransmitted authentication sequence in a manner that suggests acceptance of reused authentication data rather than rejecting it as stale or duplicated.\n\nIdentify the wireless attack technique demonstrated in this assessment.",
        "options": [
            "RADIUS Replay Attack ",
            "Bit-Flipping Attack",
            "Data Frame Injection",
            "Initialization Vector Replay Attack"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 666,
        "question": "A healthcare technology company deploys internet-connected cardiac monitoring devices across several hospitals in Minneapolis, Minnesota. During a controlled security review, an analyst discovers that administrative configuration features can be accessed remotely through components that interact with external management platforms.\n\nFurther analysis reveals that these externally reachable components process user-supplied data without sufficient validation checks. Additionally, authentication controls protecting remote configuration features rely solely on basic credential verification without additional safeguards against automated misuse.\n\nAccording to the OWASP Top 10 IoT Vulnerabilities, how should this weakness be classified?",
        "options": [
            "Insecure Ecosystem Interfaces ",
            "Insecure Default Settings",
            "Insecure Network Services",
            "Lack of Device Management"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 667,
        "question": "During a penetration test, an analyst repeatedly initiates TCP connections to a target host and records the sequence numbers returned in the SYN/ACK responses. By examining predictable or incremental patterns in these values, the analyst attempts to infer characteristics of the underlying operating system. What OS fingerprinting attribute is being analyzed in this scenario?",
        "options": [
            "TCP Timestamp Analysis",
            "TCP Window Size",
            "Initial Sequence Number (ISN) ",
            "Time to Live (TTL)"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 668,
        "question": "A payroll management portal used by a manufacturing firm in Toledo, Ohio allows administrators to configure customizable notification templates that are later incorporated into automated reporting functions. During an authorized assessment, an ethical hacker submits specially structured input into a template field while creating a test notification.\n\nThe application accepts and stores the value without any noticeable disruption to the interface. Days later, when a scheduled reporting task executes, the resulting dataset includes records beyond the expected scope defined by the report criteria.\n\nFurther review reveals that the reporting engine dynamically constructs database queries using previously stored template values during execution.\n\nDetermine the SQL injection variant illustrated in this scenario.",
        "options": [
            "Stored Procedure Injection",
            "Second-Order SQL Injection ",
            "Error-Based SQL Injection",
            "Piggybacked Query Injection"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 669,
        "question": "A financial analytics platform in Newark, New Jersey exposes a search parameter used to filter archived transaction records. During controlled testing, a security consultant submits carefully structured input designed to influence how the backend evaluates filtering conditions.\n\nThe application continues to render the standard page layout, but response times fluctuate noticeably when specific logical expressions are introduced. By refining those conditions incrementally, the consultant observes consistent timing differences that align with changes in database evaluation behavior.\n\nThe visible output remains unchanged, yet measurable performance variations provide feedback to the tester. Identify the SQL injection technique being demonstrated.",
        "options": [
            "Performing Heavy Query-Based Blind SQL Injection ",
            "Applying Hex Encoding Evasion to obfuscate SQL keywords",
            "Executing Qut-of-Band SQL Injection via database-initiated HTTP requests",
            "Using HTTP Parameter Fragmentation to bypass firewall filtering"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 670,
        "question": "A financial technology company in Charlotte, North Carolina authorizes a controlled red team engagement to evaluate defensive monitoring within its Windows server environment. During testing, the team executes a series of scripted administrative commands through the native automation shell. The security controls initially prevent the activity from completing.\n\nThe tester then modifies how the command content is expressed while preserving its original functionality. After this adjustment, the same administrative operations execute successfully without triggering the operating system's integrated content inspection mechanism.\n\nWhich technique was most likely used to bypass the Windows Antimalware Scan Interface (AMSI)?",
        "options": [
            "Forcing an Error",
            "Obfuscation ",
            "PowerShell Downgrade",
            "Memory Hijacking"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 671,
        "question": "A financial services provider in Frankfurt, Germany, experienced intermittent service disruption affecting its public-facing transaction portal. Network engineers observed a surge of connection attempts targeting the web servers.\n\nPacket inspection revealed that the majority of incoming traffic consisted of connection initiation requests that were never completed. The servers allocated memory and maintained half-open connection states while waiting for acknowledgments that never arrived. Over time, the connection table reached capacity, preventing legitimate users from establishing new sessions.\n\nNo abnormal payloads were detected, and the packets themselves appeared structurally valid.\n\nWhich attack technique best explains this behavior?",
        "options": [
            "Spoofed session flood attack",
            "ACK flood attack",
            "Fragmentation attack",
            "SYN flood attack "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 672,
        "question": "A media streaming company in Los Angeles, California engages a certified ethical hacker to evaluate the resilience of its cloud-hosted infrastructure. After initial access is obtained through an exposed credential in a development repository, the tester systematically modifies logging configurations, establishes alternate access keys for persistence, and documents privilege relationships between services within the tenant.\n\nThe tester's actions are focused on maintaining continued access and mapping the internal structure of the environment after initial compromise has occurred.\n\nWithin the cloud attack lifecycle, which phase best represents this stage of activity?",
        "options": [
            "Exploitation",
            "Information Gathering",
            "Vulnerability Assessment",
            "Post-Exploitation "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 673,
        "question": "During a forensic log review at a satellite communications provider in Denver, Colorado, cybersecurity analyst Kevin Morales identified subtle timestamp irregularities in archived telemetry records. Although the discrepancies were minor, regulatory reporting standards required confirmation that the system clock was synchronizing correctly with its configured time sources.\n\nKevin needed to interact directly with the host's running time service to review its current associations and operational state. He was not attempting to reset the clock or trace the hierarchy of upstream time authorities, but rather to query the active service for detailed status information from the target machine.\n\nIdentify the command Kevin should execute to obtain this information.",
        "options": [
            "ntptrace [-n] [-m maxhosts] [servername/IP_address]",
            "ntpq [-inp] [-c command] [host] […] ",
            "ntpdc [-ilnps] [-c command] [host] […]",
            "ntpq -p [host]"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 674,
        "question": "At a petrochemical processing facility in Corpus Christi, Texas, a certified ethical hacker performs an authorized reconnaissance assessment within the manufacturing zone. The objective is to identify programmable controllers responsible for automated production processes.\n\nThe tester initiates a targeted scan against a TCP service commonly used by industrial controllers that support structured function-code exchanges for reading and writing memory areas. Multiple field devices respond to this service, confirming the presence of automation controllers communicating over that port.\n\nBased on this reconnaissance pattern, what type of OT device scan is being performed?",
        "options": [
            "Capturing Modbus/TCP traffic using Wireshark",
            "Scanning Siemens SIMATIC S7 PLCs",
            "Scanning Modbus devices",
            "Scanning Omron PLC devices"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 675,
        "question": "A security consultant is conducting an authorized assessment for a healthcare billing provider in Phoenix, Arizona. While monitoring internal traffic, he observes an authenticated employee interacting with a sensitive web-based management portal over TCP.\n\nDuring the session, the consultant carefully crafts and injects packets into the ongoing communication stream. Shortly afterward, the legitimate user experiences irregular responses from the application, and the server begins processing commands originating from the consultant's injected traffic as though they were part of the established session.\n\nThe technique does not involve credential guessing or forcing the user to reauthenticate. Instead, it targets the communication channel already in progress.\n\nFrom a network-level perspective, what type of session hijacking technique is being demonstrated?",
        "options": [
            "UDP Hijacking",
            "RST Hijacking",
            "Blind Hijacking",
            "TCP/IP Hijacking "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 676,
        "question": "At Redwood Financial Group in Boston, Massachusetts, the security leadership team is formalizing a continual security strategy composed of four coordinated activities. During implementation planning, one team is assigned responsibility for reviewing operational data across the enterprise environment to recognize irregular patterns that may indicate malicious activity.\n\nWithin this model, which activity is responsible for this responsibility?",
        "options": [
            "Predict",
            "Protect",
            "Respond",
            "Detect "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 677,
        "question": "A mid-sized manufacturing firm in Des Moines, lowa reported that several employee workstations were periodically communicating with an unfamiliar external server over an IRC channel. The affected systems showed no visible interface for remote control, yet investigators confirmed that the machines were receiving instructions and executing distributed traffic bursts at scheduled intervals.\n\nFurther review revealed that the initial infection occurred after employees opened a phishing email attachment. Once executed, the infected systems silently connected outward and began awaiting commands from a centralized remote controller.\n\nDetermine the Trojan classification that best matches this behavior.",
        "options": [
            "E-banking Trojan",
            "Rootkit Trojan",
            "Botnet Trojan ",
            "Backdoor Trojan"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 678,
        "question": "At HarborGrid Utilities in Oregon, a security assessment team is reviewing how the organization's network monitoring platform evaluates inbound traffic targeting its SCADA management interface. During testing, the red team introduces carefully crafted packets that adhere to known protocol standards but contain payload sequences previously identified in documented exploit repositories.\n\nThe monitoring system immediately flags the activity because it matches patterns stored in its internal threat database. However, when the team slightly modifies the exploit sequence while preserving its overall malicious intent, the alerts are no longer triggered.\n\nBased on this behavior, which intrusion detection is most likely deployed in this environment?",
        "options": [
            "Protocol Anomaly Detection",
            "Anomaly Detection",
            "Stateful Protocol Analysis",
            "Signature Recognition"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 679,
        "question": "Anthony works as a security consultant for a financial services firm in Chicago, Illinois. During an internal engagement, he reviews traffic logs and observes repeated connection attempts to a service that appears to provide directory-related information beyond a single domain. The responses suggest that the underlying database contains entries representing objects across the entire organization rather than being limited to a single segment.\n\nAs Anthony continues his assessment, he notices that administrators commonly connect to this service when troubleshooting directory-related issues. The service listens on a dedicated port and allows object searches across multiple domains without requiring prior knowledge of the specific domain name. Which service is Anthony most likely enumerating?",
        "options": [
            "Microsoft RPC Endpoint Mapper (TCP/UDP 135)",
            "Global Catalog Service (TCP/UDP 3268) ",
            "Lightweight Directory Access Protocol (TCP/UDP 389)",
            "Session Initiation Protocol (TCP/UDP 5060, 5061)"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 680,
        "question": "A city utility billing portal in Raleigh, North Carolina includes a search field used to retrieve customer records. During an authorized penetration test, an assessor submits repeated instances of a character commonly interpreted within SQL statements as part of the input value.\n\nThe application does not display detailed error messages, yet certain submissions result in irregular response behavior and partial rendering of results. The tester suspects the input may be affecting how the SQL command is internally constructed.\n\nWhich black-box testing technique is being applied?",
        "options": [
            "Sending special characters to detect SQL modification behavior",
            "Sending arbitrary data to detect truncation issues",
            "Using right square bracket characters to detect identifier handling issues",
            "Sending isolated quotation characters to detect unsanitized input "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 681,
        "question": "A security consultant is performing an authorized assessment of a regional healthcare provider's patient portal in Portland, Oregon. During testing, he observes that authenticated users are assigned session identifiers embedded within URL parameters after login.\n\nTo evaluate the robustness of the session management implementation, he initiates multiple authentication requests in rapid succession using controlled test accounts. He then compares the issued identifiers and notices that although parts of the value remain constant, certain segments change in a predictable progression over time.\n\nBy analyzing the incremental pattern across a controlled batch of issued identifiers generated within the same time window, he is able to anticipate future valid identifiers without capturing traffic from other users.\n\nWhich token prediction mechanism best explains the weakness identified in this scenario?",
        "options": [
            "Small Token Space",
            "Timestamp-based Tokens",
            "Seguential Tokens ",
            "Weak Random Number Generator (PRNG)"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 682,
        "question": "During an executive-level incident review at HarborTech Industries in Baltimore, Maryland, analysts categorize key elements of a recent intrusion. They identify the organization that orchestrated the attack, document the malicious infrastructure used to reach internal systems, outline the technical approach employed to exploit weaknesses, and specify which internal business unit was affected.\n\nWithin the Diamond Model of Intrusion Analysis, which element represents the technical approach used to carry out the attack?",
        "options": [
            "Adversary",
            "Infrastructure",
            "Capability ",
            "Victim"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 683,
        "question": "A regional hospital network is conducting incident containment after discovering that an internal file server was accessed by unauthorized actors. While forensic analysis is ongoing, a security engineer must immediately protect sensitive medical records stored on a mounted partition without shutting down the system.\n\nThe solution must support strong encryption (including 256-bit AES), allow creation of encrypted containers within existing storage volumes, and provide the capability to conceal protected data inside standard-looking volumes to reduce visibility during continued investigation.\n\nSelect the disk encryption tool that best satisfies these operational and security requirements.",
        "options": [
            "FileVault",
            "Rohos Disk Encryption",
            "VeraCrypt ",
            "BitLocker Drive Encryption"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 684,
        "question": "An internal review at a financial analytics firm in Minneapolis, Minnesota, uncovered unusual query patterns directed at the company's directory services infrastructure. Security engineer Olivia Grant examined the logs and discovered that a user account had been issuing structured directory queries to retrieve lists of user objects, group memberships, and organizational units.\n\nFurther inspection revealed that the account was able to access information about privileged groups containing the word \"Admin\" in their titles. The activity did not involve password guessing or authentication bypass, but rather systematic directory lookups to map internal user and group relationships.\n\nWhat type of enumeration is illustrated in this scenario?",
        "options": [
            "VoIP Enumeration",
            "LDAP Enumeration ",
            "SMTP Enumeration",
            "DNS Enumeration"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 685,
        "question": "During an authorized security assessment of a smart thermostat manufacturer in Denver, Colorado, a certified ethical hacker receives a firmware image extracted from a production device for further evaluation.\n\nThe tester begins by examining the binary file to determine its format and architecture. Basic inspection commands are executed against the image to review embedded human-readable content and observe low-level binary structure before proceeding with deeper analysis.\n\nWithin the firmware analysis workflow, which stage is the tester performing?",
        "options": [
            "Extract the Filesystem",
            "Obtain Firmware",
            "Analyze Firmware ",
            "Emulate Firmware"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 686,
        "question": "A fintech startup in Austin, Texas authorizes a controlled red team engagement to evaluate the resilience of its web-based loan management platform. At the outset of the engagement, the assessment team concentrates on developing a structural understanding of the application.\n\nThey examine publicly exposed endpoints, observe server responses under different navigation paths, identify accessible directories, and document the relationships between client-side scripts, form parameters, and backend behaviors. Error handling patterns and response variations are cataloged to understand how user interactions are processed across various components of the platform.\n\nThe collected information is used to guide strategic planning for subsequent phases of the engagement.\n\nWithin the web application hacking methodology, which phase is most accurately demonstrated in this scenario?",
        "options": [
            "Maintaining Access",
            "Scanning ",
            "Gaining Access",
            "Reconnaissance"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 687,
        "question": "A DevOps engineer at a Toronto-based SaaS provider deploys a multi-tenant application within a shared orchestration environment. During a security assessment, a penetration tester discovers that a compromised workload is able to access host-level system resources and interact with adjacent workloads beyond its intended isolation controls.\n\nFurther investigation reveals that the workload was launched with elevated privileges and insufficient runtime restrictions, allowing the attacker to cross the intended isolation boundary and gain unauthorized access to the underlying infrastructure.\n\nWhich cloud attack technique best describes this security weakness?",
        "options": [
            "Man-in-the-Cloud Attack",
            "Side-Channel Attack",
            "Container Escape ",
            "Golden SAML Attack"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 688,
        "question": "Natalie Brooks is leading an authorized red team exercise for Sentinel Networks in Seattle. While briefing her team on different attacker profiles, she describes an individual who is new to cybersecurity, actively learning techniques through online communities, and experimenting with basic tools on low-risk targets to build practical skills without causing significant damage.\n\nWhich hacker class best matches this profile?",
        "options": [
            "Blue Hat hacker",
            "Green Hat hacker ",
            "Gray Hat hacker",
            "Red Hat hacker"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 689,
        "question": "During a red team assessment of a mid-sized insurance provider in Denver, Colorado, testers established persistent access on an internal developer workstation after exploiting a misconfigured automation service. To sustain command-and-control without triggering perimeter defenses, they configured a low-bandwidth outbound channel designed to blend into infrastructure traffic that is routinely permitted through egress controls.\n\nSecurity operations later identified periodic outbound communication from the compromised host to a single unfamiliar external endpoint not associated with approved vendors or user activity. The traffic was distributed over time rather than bursty. Although the exchanges resembled legitimate service requests, packet inspection revealed irregular payload sizing and structured encoding patterns inconsistent with typical client behavior across the environment.\n\nWhat covert communication technique was most likely used to sustain the red team's access?",
        "options": [
            "ICMP Tunneling",
            "TCP Sequence Tunneling",
            "HTTR/S Tunneling",
            "DNS Tunneling "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 690,
        "question": "A subscription-based analytics platform in Portland, Oregon provides enterprise clients with API access to project dashboards. Each dashboard is associated with a unique identifier included in client-side API requests when retrieving project data.\n\nWhile evaluating access controls, a security analyst signs in using a standard user account and captures a legitimate API request used to retrieve a specific project dashboard. By altering only the identifier value within the request and replaying it through the same authenticated session, the analyst receives data belonging to a different client organization.\n\nThe session remains valid, and no elevated privileges are granted. The behavior indicates that access validation does not adequately verify whether the requesting user is authorized to access the referenced resource.\n\nIdentify the OWASP API security risk illustrated in this scenario.",
        "options": [
            "Broken Object Level Authorization (BOLA) ",
            "Broken Object Property Level Authorization",
            "Broken Function Level Authorization",
            "Broken Authentication"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 691,
        "question": "A technology consulting firm in Charlotte, North Carolina experienced a targeted intrusion after an employee interacted with a carefully crafted phishing email. Security analysts reconstructed the sequence of events and determined that once the email attachment was opened, built-in scripting utilities were invoked to inject malicious instructions into an active system process.\n\nNo standalone malicious executables were discovered on disk. The injected instructions began running directly inside legitimate processes before any registry modifications or task scheduling changes were observed.\n\nAt this point in the attack sequence, which operational phase of the fileless attack lifecycle is being demonstrated?",
        "options": [
            "Persistence",
            "Point of Entry",
            "Achieving Objectives",
            "Code Execution "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 692,
        "question": "An enterprise collaboration platform used by a pharmaceutical distributor in Boston, Massachusetts relies on a centralized identity store to validate employee credentials. While reviewing the authentication workflow, a security tester notices that user-provided values are directly embedded into backend lookup expressions responsible for locating account records.\n\nWhen specific logical operators and wildcard characters are introduced into the username field, the application's record-matching behavior changes. Instead of evaluating a single identity entry, the backend process begins matching a broader set of records than intended, altering the outcome of the authentication check.\n\nThe issue arises from improper handling of input within directory-based search logic.\n\nFrom the following options, identify the injection technique illustrated in this scenario.",
        "options": [
            "LDAP Injection ",
            "OS Command Injection",
            "SQL Injection",
            "XPath Injection"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 693,
        "question": "At a biomedical analytics firm in Raleigh, North Carolina, security consultant Marcus Ellison was reviewing exposed services on a legacy Linux host located in a screened subnet. While mapping available services, he observed that the machine was responding to time synchronization queries from multiple internal systems.\n\nCurious whether the service might reveal additional intelligence, Marcus issued targeted queries against the time service and received responses that exposed internal client addresses and system identifiers interacting with it. The information provided unexpected visibility into internal network structure without requiring authentication.\n\nFrom the available options, what enumeration technique is illustrated in this scenario?",
        "options": [
            "NFS Enumeration",
            "NetBIOS Enumeration",
            "SNMP Enumeration",
            "NTP Enumeration "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 694,
        "question": "During an internal security review at a transportation authority in Columbus, Ohio, a red team analyst positioned himself on the same local network segment as several domain-joined administrative workstations. Over several hours, he recorded authentication exchanges as legitimate users performed their routine logon activities across the network.\n\nHe later analyzed the captured traffic to recover valid credentials associated with privileged accounts. Based on the attacker's actions, how should this password attack be classified?",
        "options": [
            "Passive Online Attack ",
            "Non-Electronic Attack",
            "Active Online Attack",
            "Offline Attack"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 695,
        "question": "During an authorized engagement at IronClad Financial Services in Charlotte, the red team successfully exploits a weakness and obtains administrative access to a critical server. After achieving this objective, the team installs a backdoor mechanism to ensure continued access even if the original vulnerability is remediated. The team documents this activity as part of demonstrating long-term adversary behavior within the approved scope.\n\nWithin the CEH ethical hacking framework, which phase does this activity represent?",
        "options": [
            "Reconnaissance",
            "Vulnerability Scanning",
            "Maintaining Access",
            "Clearing Tracks"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 696,
        "question": "MidWest BioAnalytics, a pharmaceutical research firm in Columbus, Ohio, authorizes a controlled adversarial simulation to assess the resilience of its internal web-based inventory management platform. During the exercise, administrators observe that several active client connections briefly lose synchronization, and unexpected command patterns appear within system transaction logs.\n\nThe irregularities are subtle and become apparent only after reviewing stored network captures. Executive leadership requests a solution that can maintain ongoing visibility into network exchanges and highlight activity that diverges from typical communication behavior across the organization's infrastructure.\n\nWhich approach best satisfies this requirement?",
        "options": [
            "Perform manual packet inspection using a protocol analyzer",
            "Monitor for abnormal surges of repeated ACK responses",
            "Use an Intrusion Detection System (IDS) ",
            "Evaluate authentication token generation patterns"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 697,
        "question": "During a red team engagement at a biotechnology firm in San Diego, California, the security team observed that a compromised internal workstation was generating an unusually high number of outbound name resolution requests to external servers.\n\nUpon deeper inspection, analysts discovered that the query strings contained encoded data segments rather than typical lookup patterns. Further analysis revealed that these outbound requests were being used to transfer sensitive information to an attacker-controlled system outside the corporate network.\n\nWhich technique was most likely used to covertly transfer the data in this scenario?",
        "options": [
            "TCP Parameter Manipulation",
            "Reverse ICMP Tunnel",
            "DNS Tunneling ",
            "Reverse HTTP Shell"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 698,
        "question": "A logistics technology provider in Kansas City, Missouri conducts an internal review after an ethical hacker demonstrates several recurring input-handling weaknesses across different customer-facing web applications. The findings show that validation logic varies between modules, with many controls implemented inconsistently across components developed by separate teams.\n\nAlthough immediate patches are applied to address the identified flaws, similar issues have surfaced in previous platform iterations despite corrective updates. Leadership determines that isolated fixes are insufficient and initiates an effort to standardize how security requirements are defined and incorporated across future development initiatives.\n\nBased on the web application attack countermeasures, which category best aligns with this remediation approach?",
        "options": [
            "Insecure Design ",
            "Broken Access Control",
            "Security Misconfiguration",
            "Cryptographic Failures / Sensitive Data Exposure"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 699,
        "question": "During a targeted intrusion against a cloud infrastructure company in Salt Lake City, Utah, an attacker distributes a modified installation package of a legitimate network diagnostic utility widely used by employees. Before distributing the package, the attacker binds a malicious remote-access payload with the original executable so that both components are installed together. When users launch the diagnostic tool, it performs its normal troubleshooting functions, while the hidden payload simultaneously executes in the background and establishes communication with a remote command server.\n\nFrom a malware deployment perspective, what technique best describes this approach?",
        "options": [
            "Wrapper",
            "Downloader",
            "Packer",
            "Dropper"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 700,
        "question": "A cloud service provider in Singapore is refining its defensive monitoring strategy to identify large-scale denial-of-service attempts against hosted applications. The security engineering team wants a detection mechanism that continuously evaluates incoming traffic streams and statistically determines the exact moment when normal behavior shifts into anomalous activity.\n\nRather than relying solely on static baselines or historical comparisons, the team prefers an approach that detects abrupt deviations in real time by identifying structural breaks in traffic metrics as they occur.\n\nWhich DDoS detection technique best fits this requirement?",
        "options": [
            "Sequential Change-Point Detection",
            "Wavelet-Based Signal Analysis",
            "Traffic Pattern Analysis",
            "Activity Profiling"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    }
];
