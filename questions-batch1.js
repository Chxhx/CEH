const questionsBatch1 = [
    {
        id: 1,
        question: "You are a security analyst for a medium-sized e-commerce company. Recently, the company has been suffering from repeated incidents of session hijacking. To prevent future incidents, you've been asked to suggest a robust strategy to mitigate this risk.\n\nWhich of the following approaches would you recommend?",
        options: [
            "Deploy a network-based intrusion prevention system (IPS) to detect and prevent session hijacking attempts in real-time.",
            "Apply an IPsec VPN solution that encrypts the entire IP packet, thereby making session hijacking attempts more difficult.",
            "Implement a new physical security policy to prevent unauthorized access to the company's data centres.",
            "Implement a security awareness program to educate employees on the risks and signs of session hijacking."
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 2,
        question: "As an IT professional, you are attending a webinar on cybersecurity. The presenter emphasizes the importance of ethical hacking and the different types of hackers involved in the cyber world. Suddenly, the term \"script kiddie\" is mentioned, piquing your curiosity.\n\nAccording to the presenter, who are \"script kiddies\" in the context of ethical hacking?",
        options: [
            "They are highly skilled hackers who write their scripts to breach security systems.",
            "They are novices in the hacking world who mainly use scripts and codes developed by others.",
            "They are ethical hackers who use scripts to conduct penetration testing on their systems.",
            "They are hackers who specialize in scripting languages to launch sophisticated cyberattacks."
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 3,
        question: "At XYZ Corporation, a multinational firm known for its digital services, the cybersecurity team is tasked with ensuring a robust, secure network environment. Recent intelligence has alerted the team to a concerning issue: the primary web server software has been hit with a newly discovered zero-day vulnerability. Active exploitations have been spotted in the wild, making the threat immediate and real. However, the vendor has not yet released an official patch.\n\nGiven these circumstances, what is the FIRST step that the cybersecurity team should undertake?",
        options: [
            "Proactively shut down the web server completely until an official patch is released.",
            "Maintain normal operations but keep a close watch on the web server for unusual activities.",
            "Swiftly apply a virtual patch to the affected web server using a web application firewall.",
            "Initiate regular backups and ensure a thoroughly developed incident response plan is ready."
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 4,
        question: "A cybersecurity team at a multinational company notices unusual network traffic on their Bluetooth devices. It is suspected to be a Bluesnarfing attack, aimed at accessing unauthorized information from Bluetooth-enabled devices.\n\nWhich of the following would be the most effective countermeasure?",
        options: [
            "Increase the complexity and length of the PIN codes on Bluetooth devices.",
            "Implement network-level encryption on all data transmission over Bluetooth.",
            "Disable \"Discoverable Mode\" and activate \"Non-discoverable Mode\" on all Bluetooth devices.",
            "Regularly update Bluetooth devices to the latest firmware versions."
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 5,
        question: "As an Ethical Hacker, you've been asked to test an application's vulnerability to SQL injection. You discover an entry field that appears susceptible. However, the backend database is unknown, and regular SQL injection techniques have failed.\n\nWhich advanced SQL injection technique should you apply next?",
        options: [
            "Time-Based Blind SQL Injection",
            "Union-Based SQL Injection",
            "Error-Based SQL Injection",
            "Content-Based Blind SQL Injection"
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 6,
        question: "A prominent healthcare organization relies on mobile platforms to access electronic health records (EHR). Recently, the security team detected suspicious activities indicating potential vulnerabilities in the mobile platforms.\n\nWhich sophisticated hacking technique poses the greatest challenge for the security team to detect and mitigate effectively?",
        options: [
            "Bluejacking Exploiting Bluetooth Connections to Send Unsolicited Messages",
            "Zero-Day Exploits Leveraging Previously Unknown Vulnerabilities in Mobile OS",
            "Side-Channel Attack Exploiting Physical Characteristics like Power Consumption",
            "App Spoofing Impersonating Legitimate Healthcare Apps"
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 7,
        question: "During a red team exercise, an attacker dresses as a network technician and gains unchallenged access to a restricted area. Once inside, he roams freely, observing employees and reviewing sensitive documents left unattended.\n\nWhich of the following tactics best represents this scenario?",
        options: [
            "Pretending to offer remote tech support over a call to obtain credentials.",
            "Gaining physical access by assuming the identity of a trusted internal staff.",
            "Collecting confidential information by digging through trash bins.",
            "Calling the help desk and claiming to be a high-ranking executive."
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 8,
        question: "During an investigation, an ethical hacker discovered that a web application's API has been compromised. They identified webhooks and a webshell being used by the attacker.\n\nTo prevent further exploits, which action should be taken?",
        options: [
            "Perform regular code reviews for webhooks and block unknown IP addresses.",
            "Harden web server security, add MFA for API users, and restrict script execution.",
            "Implement a WAF with rules to block webshell traffic and increase logging.",
            "Implement input validation on all API endpoints and schedule regular webshell scanning."
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 9,
        question: "You are investigating a network compromise. The infected systems are receiving external instructions using HTTP and DNS. The payloads are stealthy and modify system components without saving files to disk.\n\nWhat would be the most effective action to detect and disrupt this malware?",
        options: [
            "Focus on updating antivirus signatures regularly.",
            "Configure proxy servers to allow only encrypted traffic.",
            "Use behavioral analytics to monitor for irregular outbound requests.",
            "Implement port blocking for common malware-associated ports."
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 10,
        question: "While performing a vulnerability assessment for XYZ Corporation, you discover that several key systems are regularly interacting with unidentified external entities involving data transfers.\n\nWhich strategy would most directly identify and mitigate the vulnerabilities?",
        options: [
            "Prioritize a behavioral analytics solution that profiles normal system behaviors.",
            "Institute company-wide training on dangers of unsolicited communications.",
            "Implement an aggressive zero-trust model cutting off all external interactions.",
            "Initiate deep-dive forensic analysis on the systems involved."
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 11,
        question: "As a security expert, you've noticed increasing attacks on your web services. You've concluded that enhancing patch management strategies is the best course of action.\n\nWhich strategy would be most effective?",
        options: [
            "Only applying patches distributed outside the customer organization.",
            "Implementing automatic patch management and using monitoring tools.",
            "Manual installation of patches directly from vendors' websites.",
            "Downloading and applying all patches regardless of source."
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 12,
        question: "A CEH is investigating an attack on a company's web server. The server was compromised via a DNS server hijacking attack where the attacker redirected requests to their malicious server.\n\nWhich action would most likely prevent such an attack in the future?",
        options: [
            "Implementing an open-source web server architecture such as LAMP",
            "Regularly updating and patching the server software",
            "Changing the server's IP address regularly",
            "Implementing DNSSEC on the DNS server"
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 13,
        question: "During a cybersecurity operation, a CEH professional discovered an unknown Bluetooth Low Energy (BLE) device. They managed to capture LL_ENC_REQ and LL_ENC_RSP packets, but not the Long-Term Key (LTK).\n\nWhat is the professional's next course of action?",
        options: [
            "Use Btlejacking to hijack the connection.",
            "Decrypt the pcap data using the -o option.",
            "Use the BlueZ tool hcitool inq to reveal more information.",
            "The operation cannot continue without the LTK."
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 14,
        question: "A multinational corporation provides employees with mobile devices. Recently, the security team detected suspicious activities indicating potential vulnerabilities in mobile platforms.\n\nWhich sophisticated hacking technique poses the greatest challenge to detect and mitigate?",
        options: [
            "Man-in-the-Middle (MitM) Attack Interfering with Communication",
            "Clickjacking Attack Embedding Malicious Links in Legitimate Apps",
            "Remote Access Trojan (RAT) Implanting Malicious Software",
            "Jailbreaking/Rooting Exploiting Vulnerabilities to Remove Restrictions"
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 15,
        question: "In a recent penetration testing assignment, you breached a server's web service and installed a backdoor. Your aim is to maintain access without detection.\n\nWhich action would make your backdoor most likely to remain undetected?",
        options: [
            "Placing the backdoor in a file type typically excluded from resource maps.",
            "Install the backdoor on a non-web file referenced in a URL.",
            "Embedding the backdoor in a regularly updated web file.",
            "Increasing the size of the backdoor's code to avoid signature-based detection."
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 16,
        question: "During a cybersecurity training session, you present hypothetical scenarios to assess understanding of social engineering threats.\n\nWhich scenario best describes a social engineering attack?",
        options: [
            "Mary uses a packet sniffer to monitor network traffic for unusual activity.",
            "Alex inadvertently introduces malware while updating the operating system.",
            "Sarah receives a call from someone claiming to be IT, asking for her login credentials.",
            "John leaves his computer unlocked and a stranger accesses sensitive data."
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 17,
        question: "As a cybersecurity professional, you are conducting comprehensive reconnaissance of your company's digital presence. You are considering investigating the Deep Web.\n\nWhich justification best supports exploring the Deep Web for potential risks?",
        options: [
            "The Deep Web is a hub for hackers and can help understand latest hacking techniques.",
            "Exploring the Deep Web can help identify the physical location of potential attackers.",
            "The Deep Web contains user-generated content which could reveal insider threats.",
            "Search engines don't index the Deep Web, and there could be non-indexed company information."
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 18,
        question: "During an internal security audit at a healthcare organization, the team detects abnormal DNS resolution behavior. DNS responses are being returned from an unauthorized internal IP address faster than legitimate replies. ARP spoofing alerts are also detected.\n\nWhat type of sniffing-based attack is most likely being executed?",
        options: [
            "Proxy-based DNS redirection over remote tunnels",
            "DNS cache poisoning from an upstream DNS resolver",
            "Intranet DNS poisoning via local spoofed responses",
            "Internet DNS spoofing via altered primary DNS settings"
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 19,
        question: "The web application security team detected a sophisticated injection attack using obfuscation and evasion techniques to bypass security measures.\n\nWhich of the following would be most effective to counter such attacks?",
        options: [
            "Deploy a Web Application Firewall (WAF) with built-in evasion detection features.",
            "Enforce Two-Factor Authentication (2FA) for all user-level application access.",
            "Implement continuous security code review and penetration testing.",
            "Configure SIEM to monitor user activity in real time."
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 20,
        question: "As head of IT security at a startup, you're training employees to identify social engineering attacks. You ask them to identify the attack where an attacker impersonates a co-worker or authority figure to extract confidential information.\n\nWhich option correctly identifies this type of attack?",
        options: [
            "Baiting",
            "Phishing",
            "Quid pro quo",
            "Pretexting"
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 21,
        question: "A multinational company is integrating an IoT-based environmental control system. The cybersecurity team is identifying the most likely method an APT group might use to compromise the system.\n\nWhat is the most plausible attack vector?",
        options: [
            "The APT group will exploit zero-day vulnerabilities in IoT device firmware.",
            "The APT group will perform encryption-based Man-in-the-Middle attack.",
            "The APT group will execute a DDoS attack to overload the network.",
            "The APT group will infiltrate using compromised user credentials."
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 22,
        question: "As a newly appointed ethical hacker for XYZ Corporation, you need to conduct a network vulnerability assessment. Your objective is to efficiently map all open ports while remaining stealthy and not triggering the IDS.\n\nWhich scanning technique would you opt for?",
        options: [
            "Stealth Scan (SYN Scan)",
            "ACK Scan",
            "FIN Scan",
            "TCP Connect Scan"
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 23,
        question: "A cybersecurity firm has deployed IDS, firewalls, and honeypots. Despite these measures, suspicious traffic patterns indicate potential evasion attempts.\n\nWhich sophisticated evasion technique poses the greatest challenge?",
        options: [
            "Protocol-Level Evasion Techniques Fragmenting Packets",
            "Polymorphic Malware Variants Generating Unique Payloads",
            "Honeypot Spoofing Attacks Mimicking Legitimate Services",
            "Covert Channel Communication Exploiting Unused IP Header Fields"
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 24,
        question: "As a cybersecurity analyst, you employed a FIN scan and noticed a significant number of ports did not respond to your FIN packets.\n\nHow should you interpret these findings?",
        options: [
            "Conclude that these ports are closed since they did not respond.",
            "Consider the possibility of firewall blocking the FIN packets and investigate further.",
            "Interpret this as a sign of network congestion and prioritize optimization.",
            "Immediately escalate as it indicates a potential ongoing breach."
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 25,
        question: "You discover a critical vulnerability on a production server. The vendor has released a patch, but the department cannot tolerate downtime during business hours.\n\nWhat immediate action could you undertake to reduce the risk without disrupting operations?",
        options: [
            "Implement Virtual Patching, providing a protective layer around the vulnerability.",
            "Initiate a full-scale penetration test on the vulnerable server.",
            "Continually monitor network traffic to detect exploitation attempts.",
            "Insist that the department cease all operations until the patch is applied."
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 26,
        question: "A red team simulation reveals malware that adapts its behavior based on user activity, evades detection by altering its code dynamically, and exfiltrates data only when the system is idle.\n\nWhat is the most probable nature of this malware?",
        options: [
            "AI-powered malware using machine learning to tailor its execution.",
            "Polymorphic virus that changes its signature during replication.",
            "A worm that exploits known OS vulnerabilities to propagate.",
            "Rootkit that hides files and processes from detection."
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 27,
        question: "As a cybersecurity consultant, you utilize LDAP to gather information about the network infrastructure during enumeration. However, some critical information isn't retrievable.\n\nWhat could be the primary reason for this?",
        options: [
            "The LDAP service is running on a non-standard port.",
            "The hosts are located in a different subnet.",
            "The company network is experiencing heavy traffic, leading to dropped requests.",
            "The LDAP directory data is protected by Access Control Lists (ACLs)."
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 28,
        question: "A logistics company found that fleet vehicles with smart locking systems were compromised. The cybersecurity team suspects attackers captured unique signals emitted by key fobs.\n\nWhat should the security team prioritize to confirm and prevent this attack?",
        options: [
            "Implement a secure firmware update on each vehicle's onboard control system.",
            "Increase physical surveillance around vehicle parking areas.",
            "Deploy anti-malware systems on all company smartphones associated with vehicles.",
            "Monitor wireless signals for abnormal jamming or interference."
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 29,
        question: "As a cybersecurity analyst at a global banking corporation, you've identified irregularities indicating a potential backdoor attack including increased outbound traffic during non-working hours and modified system files.\n\nWhat combination of measures would be most effective?",
        options: [
            "Implement strict ACLs, ensure regular security patches, and conduct extensive user account audits.",
            "Implement stringent password policies, enforce MFA, and conduct regular vulnerability assessments.",
            "Perform detailed monitoring of system activity, incorporate anomaly detection, and utilize advanced anti-malware tools.",
            "Review firewall logs regularly, analyze network traffic during non-working hours, and perform immediate system shutdown."
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 30,
        question: "A cybersecurity team uses a tool that sends a request to UDP port 161 and receives a large list of software names installed on remote devices using a publicly known community string.\n\nWhat enabled this enumeration technique to work so effectively?",
        options: [
            "The SNMP agent was misconfigured to log trap messages in plain text.",
            "The SNMP agent allowed anonymous bulk data queries due to default settings.",
            "The SNMP manager had access to encrypted Windows registry keys remotely.",
            "The organization was using unencrypted FTP services to store software data."
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 31,
        question: "An ethical hacker is conducting reconnaissance on a threat actor's digital footprint. The actor has left digital breadcrumbs across forums and hidden web pages.\n\nWhich approach should the ethical hacker most likely avoid to maintain a low profile?",
        options: [
            "Utilizing internet archive services like the Wayback Machine to inspect past versions.",
            "Directly interacting with the threat actor on forums using a pseudonym.",
            "Using the Tor browser to anonymously browse and investigate hidden web pages.",
            "Employing WHOIS and DNS lookup tools to gain information about ownership and IP addresses."
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 32,
        question: "A cybersecurity analyst is performing regular surveillance of competitors' digital presence to identify changes. The analyst has devised a plan using several tools and techniques.\n\nWhat is the most crucial aspect to add to ensure effective implementation?",
        options: [
            "Engage in discussions on competitors' blogs and forums to obtain inside information.",
            "Use a VPN service when visiting competitors' websites to obscure IP address.",
            "Set up Google Alerts to receive email notifications whenever new web content includes competitors' names.",
            "Hire a third-party service to hack into competitors' databases and gather confidential data."
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 33,
        question: "A security analyst is conducting a penetration test on a WPA2-PSK-secured wireless network and discerned a significant vulnerability.\n\nWhich procedure most accurately delineates how the analyst pinpointed this vulnerability?",
        options: [
            "The analyst instigated a de-authentication attack and observed the four-way handshake during reconnection attempts.",
            "The analyst conducted a rogue access point attack to deceive clients into connecting to a malicious network.",
            "The analyst implemented a jamming attack to force the access point to reveal the pre-shared key.",
            "The analyst initiated a man-in-the-middle attack to intercept communication and purloin the pre-shared key."
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 34,
        question: "As a cybersecurity analyst at a software corporation, you've noticed a sudden increase in redundant network traffic and system crashes. The malicious code seems to be self-replicating and spreading autonomously.\n\nWhich malware type would you identify as the probable cause?",
        options: [
            "Trojan: Initiate a thorough network scan with updated anti-malware tools and patch all systems.",
            "Ransomware: Advise users to disconnect their systems and utilize a reputable decryption tool.",
            "Worm: Quarantine affected systems, perform immediate network-wide sweep, and update the operating system.",
            "Rootkit: Recommend a system reboot in safe mode, followed by deployment of an advanced rootkit scanner."
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 35,
        question: "You are a cybersecurity analyst at a financial institution. You've noticed some data packets being sent via HTTP rather than HTTPS on the network. To investigate, you decide to use a sniffing tool.\n\nWhich would be the most appropriate choice?",
        options: [
            "Netcat",
            "Wireshark",
            "Nmap",
            "Nessus"
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 36,
        question: "During a security audit, your automated scanner outputs a vector string with a numerical range of 9.8, indicating critical severity. The client is unsure about the real-world implications.\n\nWhich best explains the purpose and benefit of this type of rating?",
        options: [
            "It provides a qualitative baseline that supports public exploit classification based on behavior.",
            "It simplifies attack replication by generating matching exploit payloads from live memory dumps.",
            "It quantifies technical impact and ease of exploitation, guiding structured risk response.",
            "It measures authentication errors in binary protocols to align patching with service configuration."
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 37,
        question: "A red team operator is conducting reconnaissance on a financial organization's infrastructure. While probing UDP port 123, they send NTP queries and receive a list of internal IP addresses and connected hostnames.\n\nWhat is the most likely reason for this information disclosure?",
        options: [
            "The DNS resolver for the organization has been poisoned to leak internal names.",
            "The NTP daemon is configured to accept queries from external sources without restriction.",
            "The firewall is rerouting NTP traffic to a honeypot that simulates internal hosts.",
            "The NTP service is using TCP fallback, allowing enumeration through TCP 443."
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 38,
        question: "In a healthcare organization, the network security team detects unusual network activity indicating advanced sniffing techniques used by a potential attacker exploiting vulnerabilities in medical imaging protocols.\n\nWhich sophisticated sniffing technique poses the greatest challenge?",
        options: [
            "Injecting malicious code into ultrasound machine software to capture patient records.",
            "Creating a covert channel within hospital administrative messages for data exfiltration.",
            "Manipulating radiology report formats to embed patient data within CT scan images.",
            "Exploiting MRI machine firmware vulnerabilities to intercept real-time patient scans."
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 39,
        question: "A penetration tester intercepts HTTP requests between a user and a vulnerable web server. The session ID is embedded in the URL, and the web application does not regenerate the session upon login.\n\nWhich session hijacking technique is most likely to succeed?",
        options: [
            "Session fixation by pre-setting the token in a URL.",
            "DNS cache poisoning to redirect users to fake sites.",
            "Injecting JavaScript to steal session cookies via cross-site scripting.",
            "Cross-site request forgery exploiting user trust in websites."
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 40,
        question: "As a CEH, you're testing vulnerabilities in a web application that integrates various third-party services and employs multiple APIs. You discover a robust Web API designed to work with several webhooks, and a web shell planted for administrative tasks.\n\nWhat technique would best allow you to compromise the system effectively?",
        options: [
            "Exploit the web shell by uploading malicious scripts disguised as routine administrative tasks.",
            "Manipulate the webhook to trigger an unintended data transfer between the application and third-party services.",
            "Execute Insecure Direct Object Reference (IDOR) on the Web API to access unauthorized resources.",
            "Utilize SSRF (Server-Side Request Forgery) to make unauthorized API calls from the server itself."
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 41,
        question: "Following an attack on its mobile infrastructure, an e-commerce company is reconsidering its mobile security strategies. An attacker gained partial root access to the mobile application.\n\nWhich tactic will offer the most effective barrier to additional exploitation?",
        options: [
            "Conducting regular vulnerability assessments and penetration testing on the mobile application.",
            "Leveraging secure coding practices and automated code review processes in the development stage.",
            "Implementation of certificate pinning to protect against Man-In-The-Middle (MITM) attacks.",
            "Implementing a mobile application management solution to control access rights and user permissions."
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 42,
        question: "A cybersecurity analyst notices that a large number of plaintext-ciphertext pairs were used in an attempted attack against a block cipher. The attacker applied statistical analysis to XOR combinations of specific plaintext and ciphertext bits.\n\nWhich technique is the attacker likely using?",
        options: [
            "Analyzing grouped input differences in cipher output",
            "Trying every possible key combination",
            "Deriving linear patterns from cipher behavior",
            "Exploiting physical leaks during encryption"
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 43,
        question: "During a routine security audit at a large financial services organization, the IT team detects severe network latency. Several employee workstations and IoT devices are unknowingly transmitting enormous volumes of traffic to external IP addresses. These devices are under the control of a remote botnet operator.\n\nWhich type of denial-of-service attack best describes this situation?",
        options: [
            "An attack where botnets directly send large volumes of traffic to the target without spoofing.",
            "An attack where compromised internal devices participate in a botnet and flood external targets with traffic.",
            "An attack that relies on spoofed IP addresses to trick external servers into flooding the victim.",
            "An attack that originates internally and amplifies traffic through spoofed DNS responses."
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 44,
        question: "As a junior cybersecurity analyst, your team leader is explaining different types of hackers. He mentions the term \"hacktivist\".\n\nWhich of the following best describes a hacktivist?",
        options: [
            "A hacker hired by an organization to deliberately seek out and fix security vulnerabilities.",
            "A hacker who uses their skills to promote a political agenda or social cause.",
            "A hacker not associated with any organization who hacks out of curiosity or to gain knowledge.",
            "A hacker primarily motivated by financial gain and often engages in illegal activities."
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 45,
        question: "As a certified ethical hacker, you've been tasked to exploit a security vulnerability on an Android device using the latest OS version. There's an unpatched weakness in handling user permissions, but the device has a fully updated anti-virus application.\n\nWhat would be the most effective approach to exploit this vulnerability without being detected?",
        options: [
            "Use an SMS phishing method to trick the user into granting unwanted permissions.",
            "Use a rootkit to gain control over the device and manipulate its software.",
            "Deploy a payload using well-known exploit frameworks like Metasploit.",
            "Develop a custom exploit code that uses obfuscation techniques to avoid detection."
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 46,
        question: "As a CEH, you're assessing a corporation's cloud-based security framework. They recently transitioned to serverless computing architecture. An unauthorized user manipulated their cloud service's FaaS component to execute malicious commands. The attack originated from an insecure third-party API.\n\nWhat would be your recommended countermeasure?",
        options: [
            "Using a cloud access security broker (CASB) to enforce security policies for third-party cloud services.",
            "Deploying a cloud-native security platform (CNSP) that provides comprehensive protection across all cloud resources.",
            "Regularly update the serverless functions to patch vulnerabilities and reduce the attack surface.",
            "Implementing a function-level permission model and enforcing the principle of least privilege."
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 47,
        question: "As a cybersecurity analyst, you're analyzing traffic patterns and noticing irregularities suggesting a potential scanning attempt. The attacker appears sophisticated, operating slowly and meticulously.\n\nWhich scenario best describes the scanning technique the attacker might be using?",
        options: [
            "The attacker is sending FIN packets, assuming the target system will respond differently depending on port state.",
            "The attacker is directly establishing a TCP connection with every port to identify open ones.",
            "The attacker is sending packets with all flags set, hoping closed ports respond differently than open ones.",
            "The attacker is utilizing a 'zombie' machine to transmit the scan, making the true source difficult to determine."
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 48,
        question: "You work as a network security officer for a large corporation. You've noticed that certain confidential files are being accessed by unauthorized users. You suspect a Man-in-the-Middle (MitM) attack is being carried out.\n\nWhich network activity would help you confirm this?",
        options: [
            "A sudden increase in network traffic.",
            "Multiple login attempts from the same IP address.",
            "Detection of abnormal amounts of DNS requests.",
            "IP addresses being resolved to multiple MAC addresses."
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 49,
        question: "A leading online retailer has been experiencing security incidents involving unauthorized access to customer accounts and fraudulent transactions. Attackers are employing sophisticated session-hijacking techniques.\n\nWhich advanced session hijacking technique poses the greatest challenge for the security team?",
        options: [
            "Clickjacking Attack Embedding Malicious Iframes to Trick Users into Performing Unintended Actions",
            "Credential Stuffing Attack Using Stolen Credentials to Hijack Active User Sessions",
            "Cross-Site Request Forgery (CSRF) Attack Manipulating User Requests to Initiate Unauthorized Transactions",
            "Session Replay Attack Capturing and Replaying Encrypted Session Tokens to Gain Unauthorized Access"
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 50,
        question: "As a cybersecurity analyst for a multinational company, you've unearthed evidence suggesting a breach. Analysis indicates that sophisticated steganography techniques are in play, allowing the hacker to exfiltrate data by embedding it within image files.\n\nWhich course of action offers the best chance to detect and counteract this threat?",
        options: [
            "Implement a robust firewall to intercept all outgoing network traffic from your servers.",
            "Roll out an Intrusion Prevention System (IPS) geared towards identifying unauthorized server activities.",
            "Engage a specialized steganalysis tool to scrutinize questionable files and decode the obscured data.",
            "Leverage a network traffic analyzer, observing outbound traffic for irregularities suggestive of data exfiltration."
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 51,
        question: "As a cybersecurity analyst in a financial firm, you're performing network scanning using Nmap. You initiate a SYN scan against a target IP address and receive a SYN/ACK packet in response.\n\nHow would you interpret this result?",
        options: [
            "The target IP address is not reachable, as the receipt of a SYN/ACK packet is a common response to an unsuccessful attempt.",
            "The scanned port is filtered, as the receipt of a SYN/ACK packet indicates a firewall is intercepting and responding.",
            "The scanned port is open, as the receipt of a SYN/ACK packet indicates the port is prepared to establish a connection.",
            "The scanned port is closed, as the receipt of a SYN/ACK packet indicates the port has acknowledged but not accepted the connection."
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 52,
        question: "You have been hired by a government agency to evaluate Android smartphones' resistance against covert surveillance. You want to demonstrate whether attackers could eavesdrop on sensitive conversations through the loudspeaker without special permissions by exploiting built-in smartphone sensors.\n\nWhich specific attack technique should you implement?",
        options: [
            "Tap 'n Ghost attack leveraging NFC and touchscreen vulnerabilities.",
            "Man-in-the-disk (MITD) attack by manipulating application updates.",
            "Spearphone attack exploiting accelerometer-based vulnerabilities.",
            "Malicious APK installation and exploitation through Metasploit Framework."
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 53,
        question: "You are a new IT intern at a local tech company. The company regularly hires ethical hackers. You come across the term 'black box testing' in a company document.\n\nIn the context of ethical hacking, what is 'black box testing'?",
        options: [
            "It involves the ethical hacker trying to break into a system without any prior knowledge about the system.",
            "It refers to testing in which the ethical hacker has full knowledge of the system under test.",
            "It refers to testing where the ethical hacker only knows the system's inputs and outputs.",
            "It involves the ethical hacker testing the system using only publicly available information."
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 54,
        question: "An ethical hacker is auditing a hospital's wireless network, which is currently secured with WPA encryption using TKIP. The hacker successfully demonstrates packet-injection and decryption attacks on the network.\n\nWhich vulnerability in WPA most likely allowed these attacks to succeed?",
        options: [
            "Lack of AES-based encryption.",
            "Predictable group temporal key (GTK).",
            "Use of weak Initialization Vectors (IV).",
            "Dependence on weak passwords."
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 55,
        question: "As a security analyst, you're investigating an incident where an attacker gained access to your network. Upon examining log files, you noticed a large number of TCP SYN packets sent to various ports but with no corresponding ACKs.\n\nWhat type of scanning technique do you think the attacker may have used?",
        options: [
            "The attacker has used a SYN/ACK scan to trick the firewall into allowing the packets to pass through.",
            "The attacker has used an XMAS scan to determine the open and closed ports on the network.",
            "The attacker has used a TCP Connect scan to establish a full TCP connection with the target.",
            "The attacker has used a SYN scan, also known as half-open scanning, which involves sending SYN packets and waiting for SYN/ACK responses."
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 56,
        question: "An organization uses SHA-256 for data integrity checks but is still experiencing unauthorized data modification.\n\nWhich cryptographic tool can help resolve this issue?",
        options: [
            "Asymmetric encryption",
            "Symmetric encryption",
            "Digital signatures",
            "SSL/TLS certificates"
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 57,
        question: "In a comprehensive penetration testing scenario, you plan to employ DNS interrogation to gain insights into a target organization's network configuration. However, there are certain limitations to the kind of data you can obtain directly through this method.\n\nWhich information CANNOT be directly obtained from extensive DNS interrogation?",
        options: [
            "The estimated geographical location of the organization's servers derived from their IP addresses.",
            "The specific usernames and passwords used by the organization's employees.",
            "The IP addresses associated with the organization's multiple mail servers.",
            "The subdomains that are linked with the organization's primary internet domain."
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 58,
        question: "A corporation has transitioned to a public cloud service. The security team found a critical flaw in the API of the cloud service provider.\n\nWhat is the potential threat they are most likely to face?",
        options: [
            "DDoS attack on cloud servers",
            "Compromise of encrypted data at rest",
            "Unauthorized access to cloud resources",
            "Vulnerability to physical security breaches"
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 59,
        question: "As a cybersecurity analyst at XYZ Corp., you're examining system logs and notice activities suggesting the presence of an elusive rootkit. The rootkit has been embedded deeply within the operating system kernel.\n\nWhich strategy should you follow to remediate the rootkit effectively while minimizing potential damage?",
        options: [
            "Take the extreme measure of initiating a complete system format, followed by reinstalling the operating system from a trusted source.",
            "Immediately opt for the radical approach, which includes powering down the system and disconnecting it from the network.",
            "Employ a systematic, multi-layered strategy, starting with deployment of a specialized rootkit detection tool to verify the presence and type.",
            "Implement a proactive defensive strategy by running a variety of high-interaction honeypots on the network."
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 60,
        question: "A red team operator is assessing the resilience of a corporate network's authentication infrastructure. They input valid usernames with specifically structured guesses based on prior intel about naming conventions. The guesses are tailored and automated with logic-based iterations.\n\nWhich technique best describes this targeted approach?",
        options: [
            "Strategic pattern-based input using known logic.",
            "Combining fragments from two lists without rules.",
            "Exhaustive character testing without context.",
            "Watching users type their keys in public places."
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 61,
        question: "An attacker performs DNS cache snooping using the dig command with the +norecurse flag against a known DNS server. The server returns NOERROR but provides no answer to the query.\n\nWhat does this most likely suggest?",
        options: [
            "No client from the DNS server's network has recently accessed the domain.",
            "The queried domain has expired and no longer exists.",
            "The DNS server failed to resolve the request.",
            "The requested record was found in the cache and returned."
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 62,
        question: "Maria is assigned to perform thorough passive reconnaissance of a major competitor's online environment. The challenge is to gather information without directly interacting with the competitor's systems or alerting them to her activities.\n\nWhich tool or method would be least appropriate and potentially risky for Maria to employ?",
        options: [
            "Running an intensive port scan against the competitor's public IP addresses to gain information on their internal network.",
            "Leveraging the Wayback Machine to view archived versions of the competitor's website to study their evolution over time.",
            "Meticulously examining patent databases and public records for any technology recently patented by the competitor.",
            "Exploring online forums, bulletin boards, and social media discussions to gather insights on the competitor's products."
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 63,
        question: "During a red team exercise, a CEH is working on exploiting a potential vulnerability in the target's web server. The CEH has completed information gathering and footprinting stages and mirrored the website for offline analysis. They discovered the server is prone to session hijacking.\n\nWhich next step is most likely to be part of a successful attack methodology while minimizing detection?",
        options: [
            "Perform vulnerability scanning with automated tools to find additional weaknesses.",
            "Hijack a session and immediately modify server configuration files.",
            "Attempt SQL Injection to extract database information.",
            "Directly apply brute force attack to crack the server's password."
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 64,
        question: "A globally-operating bank recently encountered a severe security breach within its Android OS-based mobile banking application. Cybercriminals managed to exploit the bank's MDM system and carried out remote commands. The attackers might have leveraged the Android Debug Bridge (ADB) as a conduit.\n\nAs a CEH, which action would you consider the most potent response?",
        options: [
            "Recommending frequent and consistent updates to the MDM system to stay abreast of the most recent security patches.",
            "Promoting the adoption of more robust personal identification methodologies, including biometric systems.",
            "Establishing and enforcing a rigorous policy that unequivocally mandates the disabling of ADB, except when absolutely necessary.",
            "Instigating the configuration of a Virtual Private Network (VPN) to secure all transactions via the mobile banking platform."
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 65,
        question: "As a cybersecurity consultant, you're helping a small startup strengthen its information security awareness. An employee reports finding a USB drive labeled \"Employee Salary Info 2024\" in the company parking lot. Curious, they plugged it into their office computer, after which the system began behaving erratically.\n\nWhat kind of social engineering attack does this scenario represent?",
        options: [
            "Impersonating a senior staff member to extract login credentials.",
            "Tempting the victim to engage with a malicious device using curiosity.",
            "Using a discarded document to retrieve sensitive corporate information.",
            "Attempt to bypass physical security by closely following an authorized employee."
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 66,
        question: "A major financial institution is experiencing persistent Denial-of-Service (DoS) attacks targeting its online banking services, causing significant disruption to customer transactions.\n\nWhich sophisticated DoS technique poses the greatest challenge for the security team?",
        options: [
            "A synchronized Layer 3 Smurf attack targeting the institution's internet-facing routers, flooding their interfaces with ICMP echo requests.",
            "A coordinated UDP flood attack exploiting vulnerabilities in the institution's DNS infrastructure, flooding authoritative DNS servers.",
            "A distributed SQL injection attack targeting the institution's online banking database servers, causing resource exhaustion.",
            "A zero-day exploit targeting the institution's web server software, causing buffer overflow and service unavailability."
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 67,
        question: "At DEF Corporation, as you dive deeper into vulnerability analysis of their multi-tiered web applications, you observe an anomaly. Some encrypted user session tokens appear to be much longer than others, hinting at possible variable encryption strength based on user roles.\n\nWhat would be the most appropriate step to mitigate this specific vulnerability?",
        options: [
            "Implement uniform encryption strength across all user roles, eliminating disparities in session token lengths.",
            "Rotate encryption keys frequently, ensuring that old keys become obsolete rapidly.",
            "Integrate a centralized logging mechanism to detect and alert on any irregular access patterns based on session tokens.",
            "Adopt Multi-Factor Authentication (MFA) for users with elevated privileges to strengthen access control."
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 68,
        question: "You are conducting a vulnerability assessment in a segmented internal network. When scanning a set of IPs using the nbtscan tool, you discover multiple devices responding with NetBIOS names, but only one of them has the <1D> entry in its response.\n\nWhat does this indicate about that specific host?",
        options: [
            "It is the domain master browser or Primary Domain Controller (PDC).",
            "It is a rogue DHCP server impersonating a legitimate host.",
            "It has disabled NetBIOS over TCP/IP, resulting in limited response.",
            "It is the local system from which the scan is being run."
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 69,
        question: "A global media streaming platform is experiencing periodic traffic surges every 10 minutes, severely degrading performance. Traffic analysis reveals intermittent spikes exceeding 300 Gbps, followed by quiet intervals.\n\nWhat type of DDoS attack best explains this scenario?",
        options: [
            "A recursive HTTP GET flood mimicking user page views.",
            "A Pulse Wave attack leveraging high-volume short bursts to overwhelm network resources.",
            "A permanent DoS (PDoS) attack damaging backend hardware components.",
            "A UDP flood-sustained attack targeting random high-numbered ports."
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 70,
        question: "You are a cybersecurity trainer planning a course on ethical hacking for newcomers in your organization. You recall from the CEH v12 study material that there are different types of penetration tests.\n\nWhich of the following best describes a black box penetration test?",
        options: [
            "The tester has some knowledge of the system to be tested, such as user IDs and passwords.",
            "The tester has no prior knowledge of the system to be tested.",
            "The tester is given a copy of the system to test so that the actual system remains unaffected.",
            "The tester has complete knowledge of the system to be tested."
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 71,
        question: "You are a CEH hired by a financial institution to assess web application security. The application uses multi-factor authentication, encrypted cookies, and well-configured web application firewalls. You identify several possibilities to compromise session management.\n\nWhich technique would most effectively exploit a session management vulnerability?",
        options: [
            "Conduct Session Sidejacking by intercepting and using valid session tokens.",
            "Exploit insecure deserialization vulnerabilities in the session management code to achieve arbitrary code execution.",
            "Execute a Cross-Site Request Forgery (CSRF) attack by tricking authenticated users into executing malicious actions.",
            "Utilize Session Fixation to manipulate a user into utilizing a session ID that an attacker already has access to."
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 72,
        question: "You've recently been hired as a cybersecurity intern for a growing tech startup. During onboarding, the CISO explains various types of hackers. The term \"script kiddie\" comes up during this discussion.\n\nWhich description best defines a script kiddie?",
        options: [
            "A hacker who writes their own complex scripts and exploits them to carry out attacks.",
            "A hacker who uses pre-existing scripts and tools to carry out attacks without fully understanding how they work.",
            "A young hacker who is still learning the basics of ethical hacking and cybersecurity.",
            "A hacker who only targets systems that use JavaScript and similar scripting languages."
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 73,
        question: "A future-focused security audit discusses risks where attackers collect encrypted data now, anticipating that they can decrypt it later with quantum computers.\n\nWhat is this threat known as?",
        options: [
            "Breaking RSA using quantum algorithms",
            "Saving data today for future quantum decryption",
            "Replaying intercepted quantum messages",
            "Flipping qubit values to corrupt the output"
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 74,
        question: "Your role as a cybersecurity analyst at XYZ Corporation requires you to perform a thorough security assessment. You initiate the process with a passive reconnaissance phase, trying to gather information without interacting directly with the target system.\n\nWhich technique or tool is least likely to assist you in this endeavor?",
        options: [
            "Using a tool like Nmap to scan the company's public IP range.",
            "Inspecting the WHOIS database for domain registration details.",
            "Utilizing search engines and associated services (Google, Bing, Google Earth, etc.).",
            "Monitoring public posts and profiles on social media platforms and professional networking sites."
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 75,
        question: "You are tasked with assessing wireless network security for a corporation using WPA2 encryption. During the assessment, you identify vulnerabilities that could allow attackers to intercept and replay previously captured packets.\n\nWhich WPA2 vulnerability is likely being exploited?",
        options: [
            "Hole196 vulnerability due to shared GTK.",
            "Insecure WPS PIN recovery method.",
            "KRACK vulnerabilities through key reinstallation.",
            "Weak random number generator (RNG) affecting GTK."
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 76,
        question: "During a cloud security assessment, your team discovered that a former employee still had access to critical resources despite leaving the organization months ago.\n\nWhich practice could have most effectively prevented this issue?",
        options: [
            "Using multi-cloud deployment models",
            "Enforcing timely user de-provisioning",
            "Conducting regular penetration tests",
            "Implementing real-time traffic analysis"
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 77,
        question: "Working as an Information Security Analyst at a technology firm, you've been asked to design training material about the potential dangers of session hijacking. You want to explain how attackers could use sidejacking to compromise accounts.\n\nWhich scenario would most accurately describe a sidejacking attack?",
        options: [
            "An attacker convinces an employee to visit a malicious site, which then injects a harmful script into their browser.",
            "An attacker exploits a vulnerability in the company's network firewall to gain unauthorized access to internal systems.",
            "An attacker intercepts network traffic, captures unencrypted session cookies, and uses these to impersonate the user.",
            "An attacker uses social engineering techniques to trick an employee into revealing their password."
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 78,
        question: "As a senior cybersecurity professional at a multinational bank, you're investigating an incident where multiple systems have been infected with malware. On the affected systems, the malware remains dormant until a specific action triggers its malicious activity. The malware has also shown signs of being able to avoid detection by changing its code or encryption each time it infects a new system.\n\nWhich type of malware is likely causing this problem, and what is the best method to mitigate its impact?",
        options: [
            "Adware: Use a reputable anti-adware tool to detect and remove the adware, and instruct employees not to click on suspicious advertisements.",
            "Polymorphic Malware: Employ advanced threat detection tools that use behavior-based detection techniques and ensure all systems are patched.",
            "Rootkit: Use an anti-rootkit tool for detection and removal, and ensure all systems are patched with the latest security updates.",
            "Worm: Isolate the infected systems, and scan the entire network using up-to-date anti-virus software."
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 79,
        question: "An attacker examines differences in ciphertext outputs resulting from small changes in the input to deduce key patterns in a symmetric algorithm.\n\nWhat method is being employed?",
        options: [
            "Timing attack to infer key bits based on processing time",
            "Chosen-ciphertext attack to decrypt arbitrary ciphertexts",
            "Differential cryptanalysis on input-output differences",
            "Brute-force attack to try every possible key"
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 80,
        question: "You're a security analyst conducting a footprinting exercise for a new client. Your preliminary investigation using search engines and public databases has provided significant data. You are now considering using Google Hacking techniques to find further vulnerabilities.\n\nWhich could best justify this decision?",
        options: [
            "Google Hacking can assist in mapping out the client's internal network structure.",
            "Google Hacking can help identify weaknesses in the client's website code.",
            "Google Hacking can help locate potential phishing sites that mimic the client's website.",
            "Google Hacking can help discover hidden organizational data from the Deep Web."
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 81,
        question: "A senior executive receives a personalized email with a subject line that reads \"Annual Performance Review 2024\". The email contains a downloadable PDF that installs a backdoor when opened. The email appears to come from the CEO and includes company branding.\n\nWhich phishing method does this best illustrate?",
        options: [
            "Pharming using DNS poisoning",
            "Email clone attack with altered attachments",
            "Broad phishing sent to all employees",
            "Whaling attack aimed at high-ranking personnel"
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 82,
        question: "You're an IT security analyst at a fast-growing fintech startup. Recently, you've noticed an uptick in network traffic anomalies. You decide to perform a more thorough network scan using the ICMP Echo Request method. During the scan, you notice that a certain set of IPs in your network are not returning any Echo Reply, but other network functionalities seem to be operating normally.\n\nHow would you interpret this situation?",
        options: [
            "The non-responsive IPs indicate severe network congestion that needs immediate addressing.",
            "The firewall or another security control is probably blocking the ICMP Echo Requests.",
            "The lack of an Echo Reply is a clear sign of a major breach in progress.",
            "The scanned IPs are likely unused and can be considered for future expansion."
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 83,
        question: "In a highly secure online banking environment, customers have reported unauthorized access to their accounts despite robust authentication measures. Attackers are employing sophisticated session hijacking techniques to compromise user sessions.\n\nWhich advanced session-hijacking technique poses the greatest challenge for the security team?",
        options: [
            "Passive Sniffing Attack Capturing Encrypted Session Tokens on Unsecured Wi-Fi Networks",
            "Session Fixation Attack Manipulating Session Identifiers in HTTP Cookies",
            "Man-in-the-Browser (MitB) Attack Installing Malicious Browser Extensions to Intercept User Sessions",
            "Covert Cross-Site Scripting (XSS) Attack Injecting Malicious Code into Online Banking Web Pages"
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 84,
        question: "A multinational corporation relies heavily on remote access for its employees to connect to internal systems. Recently, there have been reports of unauthorized access to sensitive company data, leading to concerns about potential session hijacking attacks.\n\nWhich advanced session hijacking technique poses the greatest challenge for the security team?",
        options: [
            "Brute-Force Session Guessing Exploiting Weak Session ID Generation Algorithms",
            "ARP Spoofing Attack Redirecting Traffic to Capture Session Data on Local Networks",
            "Cookie Poisoning Attack Manipulating Session Cookies to Impersonate Authorized Users",
            "Session Sidejacking Intercepting Unencrypted Session Tokens over Public Wi-Fi Networks"
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 85,
        question: "After a recent breach, your team discovers that attackers used modified versions of legitimate system utilities and a Windows service to persist undetected for weeks, accessing internal credentials.\n\nWhat key step can be taken to better protect against similar future threats?",
        options: [
            "Ensure all systems run the latest antivirus and firewall software.",
            "Conduct weekly backups and store them off-site.",
            "Monitor file hashes of sensitive executables for unauthorized changes.",
            "Disable unused ports and limit outbound traffic via firewall rules."
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 86,
        question: "A tester evaluates a login form that constructs SQL queries using unsanitized user input. By submitting ' OR '1'='1';--, the tester gains unauthorized access to the application.\n\nWhat type of SQL injection has occurred?",
        options: [
            "Tautology-based SQL injection",
            "Union-based SQL injection",
            "Error-based SQL injection",
            "Time-based blind SQL injection"
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 87,
        question: "A system analyst wants to implement an encryption solution that allows safe key distribution.\n\nWhich encryption method should the analyst consider?",
        options: [
            "Asymmetric encryption",
            "Hash functions",
            "Disk encryption",
            "Symmetric encryption"
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
        {
        id: 88,
        question: "In your role as a cybersecurity analyst at a large e-commerce company, you've been tasked with reinforcing defenses against potential Denial-of-Service (DoS) attacks. During a recent review, you noticed several IP addresses generating excessive traffic. An inspection revealed that the TCP three-way handshake was never completed, leaving multiple connections in a SYN_RECEIVED state.\n\nWhat type of DoS attack is most likely being executed?",
        options: [
            "Smurf Attack: In this type of attack, a perpetrator uses a network's broadcast addressing to amplify the ICMP echo-request packets.",
            "SYN Flood: This attack floods a target with SYN requests in an attempt to consume enough server resources to make the system unresponsive.",
            "UDP Flood: This attack overwhelms random ports on a remote host with IP packets containing UDP datagrams.",
            "Ping of Death: This attack sends malformed or oversized ping packets to crash, freeze, or reboot the targeted system."
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 89,
        question: "A city's power management utilizes SCADA systems to oversee operations. Recently, the infrastructure has shown unexplained anomalies such as inconsistent sensor values and intermittent outages. Security experts suspect a side-channel attack aiming to discreetly extract sensitive information from SCADA devices.\n\nWhich investigative technique would best confirm if attackers employed this specific side-channel method?",
        options: [
            "Measure unusual fluctuations during device operations at the hardware level.",
            "Review SCADA user interfaces for signs of unauthorized user actions.",
            "Identify weak cryptographic settings in device communications.",
            "Assess network latency between SCADA devices for irregular delays."
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 90,
        question: "You are a Certified Ethical Hacker contracted by a technology company to perform a security assessment on Bluetooth-enabled devices. These devices have Secure Simple Pairing (SSP) enabled. During your assessment, you identify an attacker trying to exploit a vulnerability in the SSP implementation by employing sophisticated brute-force techniques. The attacker has partial access to the Diffie-Hellman key exchange.\n\nWhich of the following countermeasures is most likely to be effective?",
        options: [
            "Implement device whitelisting to ensure only approved devices can connect.",
            "Impose rate-limiting to slow down the brute-force attack.",
            "Strengthen SSP by increasing the encryption key length for the Diffie-Hellman exchange.",
            "Use Bluetooth Low Energy (BLE) for all Bluetooth connections to avoid traditional Bluetooth vulnerabilities."
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 91,
        question: "During a black-box assessment, an attacker executes the Nmap command: nmap -p25 --script smtp-enum-users --script-args smtp-enum-users.methods={VRFY,EXPN,RCPT}. The script successfully returns multiple valid usernames.\n\nWhat server misconfiguration is being exploited?",
        options: [
            "SMTP server has disabled STARTTLS, enabling plaintext enumeration.",
            "SMTP user verification commands are exposed without restrictions.",
            "DNS is misconfigured to point MX records to an internal relay.",
            "The SMTP server allows authentication without credentials."
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 92,
        question: "As a security analyst, you are testing your company's network for potential vulnerabilities. During your investigation, you suspect that an attacker might be using MAC flooding to compromise the switches and sniff network traffic.\n\nWhich of the following indicators would most likely confirm your suspicions?",
        options: [
            "The existence of multiple MAC addresses assigned to a single IP address.",
            "The presence of multiple IP addresses assigned to a single MAC address.",
            "An increased number of ARP requests in the network traffic.",
            "Numerous MAC addresses that correspond to a single switch port."
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 93,
        question: "You have recently been hired as an entry-level IT technician in a large corporation. In a meeting with the IT team, the terms \"ethical hacking\" and \"penetration testing\" are mentioned frequently. Later, a colleague explains that the main difference between the two is based on their goals.\n\nWhat is the primary goal of an ethical hacker in comparison to a penetration tester?",
        options: [
            "An ethical hacker is focused on exploiting system vulnerabilities, while a penetration tester aims to secure the system.",
            "An ethical hacker is primarily focused on securing the system, while a penetration tester tries to exploit the system's vulnerabilities.",
            "An ethical hacker seeks to bring the system down, while a penetration tester is focused on improving system security.",
            "An ethical hacker aims to improve system security, while a penetration tester seeks to bring the system down."
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 94,
        question: "During a penetration test on a legacy Windows network, you use the nbtstat -A command on a target system and retrieve several NetBIOS names, including entries ending with <20> and <03>. However, attempts to list shared folders fail.\n\nWhich of the following best explains this behavior?",
        options: [
            "The target system's NetBIOS service is bound to a non-standard port.",
            "File and printer sharing is disabled on the target system.",
            "The host is not part of any Active Directory domain.",
            "The nbtstat utility cannot enumerate shares from NetBIOS names."
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 95,
        question: "You are a cybersecurity consultant at a large healthcare organization. Recently, you've noticed some unusual traffic patterns that suggest someone might be trying to evade the company's Intrusion Detection System (IDS).\n\nWhich of the following techniques would most likely be used by an attacker in an attempt to evade detection by the IDS?",
        options: [
            "The attacker splits malicious data packets into smaller segments to avoid detection.",
            "The attacker repeatedly pings the IDS to overwhelm it with traffic and cause a denial of service.",
            "The attacker uses advanced malware that can self-replicate and spread throughout the network.",
            "The attacker sends phishing emails to employees, hoping to trick them into revealing their login credentials."
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 96,
        question: "During a red team engagement targeting a custom web application, a tester observes that the app takes a numeric id parameter from the URL and dynamically builds SQL queries. Suspecting SQL injection, the tester sends a crafted HTTP GET request like: http://vulnerableapp.local/view.php?id=1; DROP TABLE users; --\n\nShortly after, the application throws database errors, and the team confirms that the users table has been removed from the backend database.\n\nBased on this behavior, which SQL injection method was most likely used?",
        options: [
            "The attacker appended a UNION clause to retrieve additional data.",
            "The attacker triggered errors to extract database information.",
            "The attacker used Boolean logic to infer true/false responses.",
            "The attacker executed a second malicious query alongside the first."
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 97,
        question: "As a newly appointed network security analyst at a mid-tier company, you have been tasked with assessing the security of the network. You know that one popular evasion technique used by attackers is using 'packet fragmentation'.\n\nWhich of the following IDS configurations should you implement to counteract this particular technique?",
        options: [
            "Configuring the IDS to reject all fragmented packets to eliminate the risk.",
            "Implementing an anomaly-based IDS that can recognize the irregular traffic patterns caused by packet fragmentation.",
            "Adjusting the IDS to recognize the regular intervals at which fragmented packets are sent.",
            "Employing a signature-based IDS that recognizes the specific signature of fragmented packets."
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 98,
        question: "A malware analyst is tasked with evaluating a suspicious PDF file suspected of launching attacks through embedded JavaScript. Initial scans using pdfid show the presence of JavaScript and /OpenAction keywords.\n\nWhat should the analyst do next to understand the potential impact?",
        options: [
            "Compute file hashes using HashMyFiles for signature matching.",
            "Extract and analyze stream objects using PDFStreamDumper.",
            "Disassemble the PDF using PE Explorer.",
            "Upload the file to VirusTotal and rely on engine consensus."
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 99,
        question: "A cybersecurity company wants to prevent attackers from gaining information about its encrypted traffic patterns.\n\nWhich of the following encryption algorithms should they utilize?",
        options: [
            "DES",
            "RSA",
            "AES",
            "HMAC"
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 100,
        question: "A company's customer data stored in a cloud environment has been exposed due to an unknown vulnerability.\n\nWhich of the following types of attack most likely led to this incident?",
        options: [
            "Brute force attack on user passwords",
            "Denial of Service (DoS) attack on cloud servers",
            "Side-channel attack on the hypervisor",
            "Exploitation of misconfigured security groups"
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    }
];
