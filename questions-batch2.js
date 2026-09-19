
const questionsBatch2 = [
    {
        id: 101,
        question: "You are a cybersecurity analyst at a tech startup that provides cloud-based services to its clients. Recently, your team detected suspicious activity on one of your critical servers. After further investigation, you discovered an unauthorized user gained escalated privileges and is attempting to perform malicious actions.\n\nConsidering the potential consequences and complex nature of the situation, which of the following actions would you take first to immediately contain the threat without causing significant disruption to your services?",
        options: [
            "Analyze and document the activities of the unauthorized user in real-time, then use this data to implement immediate countermeasures and isolate the affected server from the network.",
            "Initiate a comprehensive vulnerability scan on all servers to detect any possible exploits that the attacker might use.",
            "Power down the affected server immediately to stop all ongoing malicious activities, then isolate it from the network for further analysis.",
            "Engage with a digital forensics team to collect all necessary evidence for legal proceedings."
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 102,
        question: "You are a security administrator for a medium-sized company. Your manager has asked you to conduct an audit of the organization's security infrastructure. While reviewing the logs from the Intrusion Detection System (IDS), you notice that there have been several instances of alerts being triggered by regular user activities.\n\nWhich of the following is the most likely reason for this?",
        options: [
            "The company's firewall is failing to filter out malicious traffic.",
            "The IDS is outdated and needs to be updated with the latest patches.",
            "The IDS is configured with very high sensitivity settings, leading to many false positives.",
            "Regular users are unintentionally triggering security protocols."
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 103,
        question: "Your role as a network administrator in a mid-sized company involves protecting the company's web servers from potential security threats. Recently, your company's web server experienced a Distributed Denial of Service (DDoS) attack. In explaining the situation to your team, you mention the attack specifically targeted the web server's application layer.\n\nWhich type of DDoS attack was most likely used against your company's web server?",
        options: [
            "HTTP flood attack",
            "SYN flood attack",
            "ICMP flood attack",
            "UDP flood attack"
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 104,
        question: "During a penetration test, a security analyst encounters a web page that returns identical generic error messages regardless of input. To test for SQL injection, they submit a query that includes AND 1=1 and later AND 1=2, observing a change in the page content.\n\nWhat type of injection is being tested?",
        options: [
            "The analyst is measuring response delays to infer true/false outcomes.",
            "The analyst is appending a UNION clause to extract data from additional tables.",
            "The analyst is triggering visible database errors to gain structural insights.",
            "The analyst is using conditional logic to infer database behavior from page responses."
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 105,
        question: "A multinational corporation recently survived a severe Distributed Denial-of-Service (DDoS) attack, which caused significant downtime and resulted in substantial financial losses. After implementing enhanced security measures, the company contracted you as a cybersecurity consultant to assess their new infrastructure. During the audit, you discovered that the organization uses both hardware and cloud-based solutions to distribute incoming traffic.\n\nWhat type of DDoS mitigation strategy is the company utilizing?",
        options: [
            "Sinkholing: This technique reroutes traffic to a 'sinkhole', a designated IP address where traffic can be analyzed.",
            "Black Hole Routing: This approach directs all traffic into a non-existent interface (the 'black hole').",
            "Rate Limiting: This technique controls the traffic rate using bandwidth management.",
            "Load Balancing: This approach distributes network or application traffic across many resources to optimize resource use."
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 106,
        question: "A cloud provider faced a situation where one customer's malicious activity affected the organization's reputation and service delivery.\n\nWhich security control would have most effectively prevented this issue?",
        options: [
            "Assessing multi-tenant isolation techniques",
            "Implementing secure log management",
            "Using strong encryption algorithms",
            "Enforcing robust authentication methods"
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 107,
        question: "During an internal penetration test, a security analyst assesses a web application that interfaces with a backend Oracle database. The analyst crafts a payload: 1 AND 1 < (SELECT COUNT(*) FROM all_users A, all_users B, all_users C)\n\nUpon submitting this payload, the page takes significantly longer to respond compared to previous inputs.\n\nWhat type of SQL injection technique is most likely being used here?",
        options: [
            "Time-based SQL injection using WAITFOR DELAY",
            "Union-based SQL injection",
            "Out-of-band SQL injection",
            "Heavy query-based SQL injection"
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 108,
        question: "You've been hired as a CEH by a large multinational corporation to investigate unauthorized access of sensitive data. In the server logs, you notice multiple failed login attempts using expired tokens within a 3-minute window, followed by successful access with a valid token.\n\nWhat could be the most likely attack scenario?",
        options: [
            "The attacker took advantage of a race condition, where the system validates expired tokens.",
            "The attacker brute-forced the token generation algorithm to produce a valid token.",
            "The attacker captured a valid token before its expiry and used it to gain access.",
            "The attacker utilized a token replay attack, confusing the server to accept an expired token."
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 109,
        question: "A cybersecurity team identifies suspicious outbound network traffic. Investigation reveals malware utilizing Background Intelligent Transfer Service (BITS) to evade firewall detection.\n\nWhy would attackers use this particular service to hide malicious activities?",
        options: [
            "Because BITS traffic uses encrypted DNS packets.",
            "Because BITS packets appear identical to normal Windows update traffic.",
            "Because BITS operates exclusively through HTTP tunneling.",
            "Because BITS utilizes IP fragmentation to evade IDS."
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 110,
        question: "You are a new member of your company's IT team, and you've been assigned to understand and implement ethical hacking principles. Your supervisor highlights the importance of following the five phases of ethical hacking.\n\nWhat is the correct order of these phases?",
        options: [
            "Reconnaissance, Scanning, Gaining Access, Maintaining Access, Covering Tracks",
            "Gaining Access, Maintaining Access, Covering Tracks, Reconnaissance, Scanning",
            "Maintaining Access, Covering Tracks, Reconnaissance, Scanning, Gaining Access",
            "Scanning, Reconnaissance, Gaining Access, Covering Tracks, Maintaining Access"
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 111,
        question: "As a certified ethical hacker, you have been engaged to evaluate the security protocols of a smart city project. Upon evaluating the IoT network's logs, you stumble upon anomalous traffic patterns, signifying a high volume of data exchange between a particular traffic light and an external IP address.\n\nGiven the gravity of these revelations, what would be your subsequent course of action?",
        options: [
            "Thoroughly analyze and amend the IoT network's firewall rules to prevent any further interaction with the suspicious external IP.",
            "Conduct an exhaustive penetration test across the network infrastructure to uncover any concealed vulnerabilities.",
            "Attempt to orchestrate a reverse connection from the traffic light to the external IP.",
            "Isolate the implicated traffic light from the overarching network for a detailed investigation into its firmware."
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 112,
        question: "During a routine security audit, administrators found that cloud storage backups were illegally accessed and modified.\n\nWhat countermeasure would most directly mitigate such incidents in the future?",
        options: [
            "Adopting the 3-2-1 backup model.",
            "Deploying biometric entry systems.",
            "Regularly conducting SQL injection testing.",
            "Implementing resource auto-scaling."
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 113,
        question: "You have recently joined as a cybersecurity analyst at a multinational corporation. During a vulnerability assessment, you employ the Nessus scanner. The scanner flags a severe vulnerability marked as CVE-2023-12456 with a CVSS score of 9.0, targeting the SSH service on a Linux server.\n\nGiven the high-risk nature of the vulnerability, what course of action should be immediately prioritized?",
        options: [
            "Commence a manual inspection of the discovered SSH service vulnerability and mark it as a false positive if it cannot be verified.",
            "Without delay, apply the patch recommended by the vendor and initiate a system-wide reboot during the next scheduled maintenance.",
            "Establish a backup SSH service on an unaffected server and reroute all SSH traffic until the vulnerability is resolved.",
            "Temporarily isolate the affected server from the broader network, perform an in-depth system audit, and then apply patches as required."
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 114,
        question: "A large chemical plant uses operational technology (OT) networks to control its industrial processes. Recently, security personnel noticed abnormal behavior from critical Programmable Logic Controllers (PLCs), suspecting a stealthy compromise via malicious firmware.\n\nWhich action should the team take first to effectively verify and neutralize this issue?",
        options: [
            "Implement enhanced intrusion detection rules to flag unusual traffic patterns.",
            "Immediately isolate suspicious devices within separate network segments.",
            "Perform detailed inspections of device software for hidden, unauthorized modifications.",
            "Restrict remote administrative access to essential industrial equipment."
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 115,
        question: "You are a CEH hired by a financial institution to assess the security of its newly developed web application. The application employs a multifaceted authentication system with JavaScript-based client-side controls. Your goal is to bypass these client-side controls.\n\nWhat method would be the most effective for bypassing these controls without triggering server-side alarms?",
        options: [
            "Inject malicious JavaScript code into the login form to overwrite the client-side validation rules.",
            "Disable JavaScript in the browser and proceed to submit weaker passwords and invalid CAPTCHAs.",
            "Utilize a proxy tool to intercept and modify the client-side controls before they reach the server.",
            "Reverse-engineer the proprietary encryption algorithm and manipulate the encrypted data before submission."
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 116,
        question: "A large media-streaming company begins receiving complaints that their web application is timing out. The security team observes that the web server is overwhelmed with a high number of open HTTP connections transmitting data at an abnormally slow rate.\n\nGiven the scenario, which specific type of attack is most likely being executed?",
        options: [
            "The attacker uses a flooding attack with random UDP packets to consume available bandwidth.",
            "The attacker sends fragmented packets with overlapping offset values to destabilize the target system.",
            "The attacker uses a Slowloris attack to keep many open connections alive, slowly exhausting the server's connection pool.",
            "The attacker floods the server with continuous ICMP Echo Request packets."
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 117,
        question: "During an ethical hacking exercise, a security analyst is testing a web application that manages confidential information. The analyst suspects the application may be susceptible to SQL injection attacks.\n\nWhich of the following payloads will most likely reveal if the application is vulnerable to time-based blind SQL injection attacks?",
        options: [
            "' AND BENCHMARK(5000000,ENCODE('test','test')); --",
            "' UNION SELECT NULL, NULL, NULL; --",
            "' AND 1=0 UNION ALL SELECT 'admin','admin'; --",
            "' OR '1'='1'; --"
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 118,
        question: "You are a security consultant conducting security awareness training at a mid-sized organization. During the session on social engineering, you emphasize the importance of being vigilant against different types of attacks.\n\nWhich of the following scenarios best describes a tailgating social engineering attack?",
        options: [
            "An email is sent claiming there is an urgent system update and employees need to enter their login credentials.",
            "An attacker calls customer service, claiming they lost their account details and need assistance in recovering them.",
            "An attacker leaves a USB labelled 'Employee Bonus List' in the restroom, hoping someone will insert it into their computer.",
            "A person gains access to the building by following an employee through a secure door before it closes."
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 119,
        question: "As a cybersecurity professional in XYZ Corporation, you've been assigned to investigate an anomaly in the system logs. The system administrators detected repeated failed login attempts on a critical server, followed by a sudden surge in outbound data traffic.\n\nGiven the high stakes, what should be your initial course of action?",
        options: [
            "Immediately alter the credentials of the server and notify all users to change their passwords.",
            "Immediately disconnect the suspicious server from the network to prevent further data exfiltration.",
            "Conduct real-time monitoring of the server, scrutinize the logs for unusual patterns, and identify the nature of the activities.",
            "Conduct a thorough audit of all outbound traffic and scrutinize the destination IPs."
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 120,
        question: "A critical infrastructure facility has an extensive network of IoT devices integrated with its OT systems. The security team received an anonymous email detailing a possible attack on their systems. The attacker allegedly plans to compromise the IoT devices and use them as a gateway to the OT systems.\n\nWhat should be the immediate action of the security team?",
        options: [
            "Initiate a full-scale penetration testing exercise on IoT devices to identify and patch vulnerabilities.",
            "Deploy a machine-learning-based security solution to monitor and predict potential threats.",
            "Establish a secure communication protocol between IoT and OT systems with proper encryption and authentication.",
            "Employ an intrusion prevention system (IPS) on the network to detect and block any malicious activities."
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 121,
        question: "In an enterprise environment, the network security team is alerted to unusual network behavior suggestive of advanced sniffing techniques being employed by a potential attacker exploiting vulnerabilities in legacy protocols.\n\nWhich intricate technique poses the most formidable challenge for the security team to detect and neutralize effectively?",
        options: [
            "Covert Channel Establishment through Modbus Protocol Manipulation",
            "Covert Data Interception via X.25 Packet Fragmentation",
            "Encrypted Data Extraction via HTTP Header Field Overflows",
            "Steganographic Payload Embedding within SMTP Email Headers"
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 122,
        question: "In your role as a cybersecurity specialist for a growing tech company, you are tasked with performing a regular network scan. Your manager has specifically asked you to use a NULL scan for this round.\n\nIn the context of TCP NULL scanning, what response would indicate that a particular port on a target machine is closed?",
        options: [
            "The target machine does not send any response.",
            "The target machine responds with a TCP RST packet.",
            "The target machine responds with an ICMP error message.",
            "The target machine responds with a TCP SYN/ACK packet."
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 123,
        question: "A penetration tester is evaluating a web application that uses HTTPS, secure cookies, and implements multi-factor authentication to prevent session hijacking.\n\nTo hijack a legitimate user's session without triggering security alerts, which advanced technique should the tester employ?",
        options: [
            "Perform a Cross-Site Request Forgery (CSRF) attack to manipulate session tokens",
            "Exploit a browser zero-day vulnerability to inject malicious scripts",
            "Utilize a session token replay attack by capturing encrypted tokens",
            "Implement a man-in-the-middle attack by compromising a trusted network device"
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 124,
        question: "A cybersecurity research team identifies suspicious behavior on a user's Android device. They discover that a seemingly harmless app has silently overwritten several legitimate applications. These fake replicas maintain the original icon and user interface but serve intrusive advertisements and covertly harvest credentials.\n\nWhat type of attack is being carried out in this scenario?",
        options: [
            "Agent Smith attack",
            "Man-in-the-Disk attack",
            "Simjacker attack",
            "Camfecting attack"
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 125,
        question: "A penetration tester is hired by a company to assess its vulnerability to social engineering attacks targeting its IT department. The tester decides to use a sophisticated pretext involving technical jargon and insider information to deceive employees into revealing their network credentials.What is the most effective social engineering technique the tester should employ to maximize the chances of obtaining valid credentials without raising suspicion?",
        options: [
            "Create a convincing fake IT support portal that mimics the company's internal systems",
            "Send a generic phishing email with a malicious attachment to multiple employees",
            "Visit the office in person as a maintenance worker to gain physical access to terminals",
            "Conduct a phone call posing as a high-level executive requesting urgent password resets"
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 126,
        question: "A government agency trains a group of cybersecurity experts to carry out covert cyber missions against foreign threats and gather intelligence without being detected. These experts work exclusively for national interests.\n\nWhat classification best describes them?",
        options: [
            "State-sponsored hackers",
            "Organized hackers",
            "Gray hat hackers",
            "Hacktivists"
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 127,
        question: "During a red team assessment of an enterprise LAN environment, the tester discovers an access switch that connects multiple internal workstations. The switch has no port security measures in place. To silently intercept communication between different hosts without deploying ARP poisoning or modifying the routing table, the tester launches a MAC flooding attack using the macof utility from the dsniff suite. This command sends thousands of Ethernet frames per minute, each with a random, spoofed source MAC addresses. Soon after the flooding begins, the tester puts their network interface into promiscuous mode and starts capturing packets. They observe unicast traffic between different internal machines appearing in their packet sniffer – traffic that should have only reached specific destinations on the network.What internal switch behavior is responsible for this sudden exposure of isolated traffic?",
        options: [
            "The interface performed DHCP starvation to capture broadcasts.",
            "The switch disabled MAC filtering due to duplicate address conflicts.",
            "The switch performed ARP spoofing to misroute packets.",
            "The switch entered hub-like behavior due to a full CAM table."
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 128,
        question: "A penetration tester is assessing a web application that uses dynamic SQL queries for searching users in the database. The tester suspects the search input field is vulnerable to SQL injection.\n\nWhat is the best approach to confirm this vulnerability?",
        options: [
            "Use a directory traversal attack to access server configuration files",
            "Inject JavaScript into the search field to test for Cross-Site Scripting (XSS)",
            "Perform a brute-force attack on the user login page to guess weak passwords",
            "Input '; DROP TABLE users; -- into the search field to test if the database query can be altered"
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 129,
        question: "During an internal security assessment of a medium-sized enterprise network, a security analyst notices an unusual spike in ARP traffic. Closer inspectionreveals that one particular MAC address is associated with multiple IP addresses across different subnets. The ARP packets were unsolicited replies rather than requests, and several employees from different departments have reported intermittent connection drops, failed logins, and broken intranet sessions.The analyst suspects an intentional interference on the local network segment.What is the most likely cause of this abnormal behavior?",
        options: [
            "ARP poisoning causing routing inconsistencies",
            "DHCP snooping improperly configured",
            "Port security restricting all outbound MAC responses",
            "Legitimate ARP table refresh on all clients"
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 130,
        question: "A company's online service is under a multi-vector DoS attack using both SYN floods and HTTP GET floods from a botnet. Standard firewalls and IDS are unable to prevent the outages.\n\nTo mitigate the attack without disrupting legitimate traffic, which advanced defense should the company implement?",
        options: [
            "Increase server bandwidth and apply basic rate limiting",
            "Configure the firewall to block all incoming SYN packets from external IPs",
            "Deploy a Web Application Firewall (WAF) with anomaly detection",
            "Use DDoS mitigation services that offer multi-layer protection"
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 131,
        question: "A penetration tester identifies malware that monitors the activities of a user and secretly collects personal information, such as login credentials and browsing habits.\n\nWhat type of malware is this?",
        options: [
            "Worm",
            "Spyware",
            "Ransomware",
            "Rootkit"
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 132,
        question: "A penetration tester evaluates an industrial control system (ICS) that manages critical infrastructure. The tester discovers that the system uses weak default passwords for remote access.\n\nWhat is the most effective method to exploit this vulnerability?",
        options: [
            "Perform a brute-force attack to guess the system's default passwords",
            "Use the default passwords to gain unauthorized access to the ICS and control system operations",
            "Conduct a denial-of-service (DoS) attack to disrupt the system temporarily",
            "Execute a Cross-Site Request Forgery (CSRF) attack to manipulate system settings"
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 133,
        question: "A red team member uses an access token obtained from an Azure function to authenticate with Azure PowerShell and retrieve storage account keys.\n\nWhat kind of abuse does this scenario demonstrate?",
        options: [
            "Enumeration of user groups with AzureGraph",
            "Lateral movement via Stormspotter",
            "Exploiting managed identities for unauthorized access",
            "Gathering NSG rule information"
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 134,
        question: "A penetration tester is assessing a mobile application and discovers that the app is vulnerable to improper session management. The session tokens are not invalidated upon logout, allowing the tokens to be reused.\n\nWhat is the most effective way to exploit this vulnerability?",
        options: [
            "Use a brute-force attack to guess valid session tokens",
            "Use a Cross-Site Request Forgery (CSRF) attack to steal the session tokens",
            "Perform a replay attack by using the same session token after the user logs out",
            "Execute a SQL injection attack to retrieve session tokens from the database"
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 135,
        question: "A penetration tester is assessing the security of a corporate wireless network that uses WPA2-Enterprise encryption with RADIUS authentication. The tester wants to perform a man-in-the-middle attack by tricking wireless clients into connecting to a rogue access point.\n\nWhat is the most effective method to achieve this?",
        options: [
            "Perform a dictionary attack on the RADIUS server to retrieve credentials",
            "Execute a Cross-Site Scripting (XSS) attack on the wireless controller's login page",
            "Set up a fake access point with the same SSID and use a de-authentication attack",
            "Use a brute-force attack to crack the WPA2 encryption directly"
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 136,
        question: "A penetration tester is targeting a wireless network secured with WPA2-PSK. The tester captures the handshake but wants to speed up the process of cracking the pre-shared key.\n\nWhich approach would be most effective?",
        options: [
            "Use a brute-force attack to crack the pre-shared key manually",
            "Perform a SQL injection attack to bypass the WPA2 authentication",
            "Use a dictionary attack with a large wordlist to crack the WPA2 key",
            "Conduct a Cross-Site Scripting (XSS) attack on the router's login page"
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 137,
        question: "A penetration tester suspects that a web application's login form is vulnerable to SQL injection due to improper sanitization of user input.\n\nWhat is the most appropriate approach to test for SQL injection in the login form?",
        options: [
            "Perform a directory traversal attack to access sensitive files",
            "Enter ' OR '1'='1 in the username and password fields to bypass authentication",
            "Use a brute-force attack on the login page to guess valid credentials",
            "Inject JavaScript into the input fields to test for Cross-Site Scripting (XSS)"
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 138,
        question: "During a red team operation on a segmented enterprise network, the testers discover that the organization's perimeter devices deeply inspect only connection initiation packets. However, response traffic and acknowledgment packets within ongoing sessions are allowed with minimal inspection.\n\nWhich approach should they take to bypass these defensive mechanisms?",
        options: [
            "Port knocking",
            "ACK tunneling",
            "ICMP flooding",
            "SYN scanning"
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 139,
        question: "A penetration tester suspects that the web application's 'Order History' page is vulnerable to SQL injection because it displays user orders based on an unprotected user ID parameter in the URL.\n\nWhat is the most appropriate approach to test this?",
        options: [
            "Inject JavaScript into the URL parameter to test for Cross-Site Scripting (XSS)",
            "Modify the URL parameter to userID=1 OR 1=1 and observe if all orders are displayed",
            "Perform a directory traversal attack to access sensitive system files",
            "Use a brute-force attack on the login form to identify valid user credentials"
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 140,
        question: "A financial institution's online banking platform is experiencing intermittent downtime caused by a sophisticated DDoS attack that combines SYN floods and HTTP GET floods from a distributed botnet.\n\nTo protect their infrastructure and maintain service availability, which advanced mitigation strategy should the institution implement?",
        options: [
            "Utilize a cloud-based DDoS protection service that offers multi-layer traffic scrubbing and auto-scaling",
            "Configure firewalls to block all incoming SYN and HTTP requests from external IPs",
            "Increase server bandwidth and apply basic rate limiting on incoming traffic",
            "Deploy an Intrusion Prevention System (IPS) with deep packet inspection capabilities"
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 141,
        question: "A penetration tester discovers that a system is infected with malware that encrypts all the files and demands payment to decrypt them.\n\nWhat type of malware is this?",
        options: [
            "Spyware",
            "Ransomware",
            "Keylogger",
            "Worm"
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 142,
        question: "A penetration tester discovers malware on a system that disguises itself as legitimate software but performs malicious actions in the background.\n\nWhat type of malware is this?",
        options: [
            "Worm",
            "Rootkit",
            "Trojan",
            "Spyware"
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 143,
        question: "An attacker is analyzing traffic from a mobile app and finds that sensitive data like session tokens are being transmitted over HTTP instead of HTTPS. The attacker plans to intercept and manipulate the data during transmission.\n\nWhich vulnerability is the attacker exploiting?",
        options: [
            "Insufficient Input Validation",
            "Improper SSL Pinning",
            "Insecure Communication",
            "Security Misconfiguration"
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 144,
        question: "A penetration tester is tasked with enumerating user accounts and network resources in a highly secured Windows environment where standard methods like SMB null sessions are blocked.\n\nWhich technique should the tester use to discreetly gather the required information without triggering security alarms?",
        options: [
            "Exploit a misconfigured LDAP service to perform anonymous searches",
            "Conduct a zone transfer by querying the organization's DNS servers",
            "Utilize NetBIOS over TCP/IP to list shared resources anonymously",
            "Leverage Active Directory Web Services for unauthorized queries"
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 145,
        question: "A penetration tester targets a company's executive assistants by referencing upcoming board meetings in an email requesting access to confidential agendas.\n\nWhat is the most effective social engineering technique to obtain the necessary credentials without raising suspicion?",
        options: [
            "Send a mass phishing email with a fake meeting link",
            "Create a personalized email referencing specific meetings and request access",
            "Develop a fake LinkedIn profile to connect and request information",
            "Call posing as a trusted IT support to verify credentials"
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 146,
        question: "During a covert red team engagement, a penetration tester uses the command nmap -sn -PE 10.0.0.0/24, which results in several 'Host is up' responses without triggering the IDS.\n\nWhat allowed the scan to complete without triggering alerts?",
        options: [
            "It performed an ICMP Echo ping sweep without port probing.",
            "It used UDP packets that bypassed ICMP inspection.",
            "It scanned only the ports open in the firewall whitelist.",
            "It used TCP ACK packets that were allowed through."
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 147,
        question: "During a security assessment of a cloud-hosted application using SOAP-based web services, a red team operator intercepts a legitimate SOAP request sent by a user. The operator duplicates the body of the message along with its digital signature, inserts the duplicate into the same SOAP envelope, and forwards it to the server. Due to improper validation of the message structure, the server accepts the duplicated body as authentic and processes it, resulting in unauthorized code execution. This behavior reveals a vulnerability in how the server handles signed SOAP messages.What type of attack does this scenario illustrate?",
        options: [
            "Wrapping attack",
            "Cryptanalysis attack",
            "IMDS abuse",
            "Cloud snooper attack"
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 148,
        question: "A financial services firm is experiencing a sophisticated DoS attack on their DNS servers with DNS amplification and their web servers with HTTP floods. Traditional firewall rules and IDS are failing to mitigate the attack effectively.\n\nTo protect their infrastructure without impacting legitimate users, which advanced mitigation strategy should the firm implement?",
        options: [
            "Increase server capacity and implement simple rate limiting",
            "Utilize a cloud-based DDoS protection service with traffic scrubbing capabilities",
            "Deploy a Web Application Firewall (WAF) to filter HTTP traffic",
            "Block all incoming traffic from suspicious IP ranges using access control lists"
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 149,
        question: "A penetration tester is assessing an organization's cloud infrastructure and discovers that the cloud storage buckets have misconfigured Identity and Access Management (IAM) policies. The IAM policies unintentionally grant read and write permissions to any authenticated user.\n\nWhat is the most effective way to exploit this misconfiguration?",
        options: [
            "Execute a SQL injection attack on the organization's website to retrieve sensitive information",
            "Perform a Cross-Site Scripting (XSS) attack on the cloud management portal to gain access",
            "Create a personal cloud account to authenticate and access the misconfigured storage buckets",
            "Use leaked API keys to access the cloud storage buckets and exfiltrate data"
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 150,
        question: "A penetration tester is running a vulnerability scan on a company's network. The scan identifies an open port with a high-severity vulnerability linked to outdated software.\n\nWhat is the most appropriate next step for the tester?",
        options: [
            "Perform a brute-force attack on the service running on the open port",
            "Research the vulnerability and determine if it has a publicly available exploit",
            "Ignore the vulnerability and focus on finding more vulnerabilities",
            "Execute a denial-of-service (DoS) attack on the open port"
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 151,
        question: "A penetration tester is tasked with assessing the security of a smart home IoT device that communicates with a mobile app over an unencrypted connection. The tester wants to intercept the communication and extract sensitive information.\n\nWhat is the most effective approach to exploit this vulnerability?",
        options: [
            "Perform a brute-force attack on the device's Wi-Fi credentials",
            "Use a dictionary attack to guess the admin login credentials of the device",
            "Use a man-in-the-middle (MitM) attack to intercept and analyze the unencrypted traffic",
            "Execute a SQL injection attack on the IoT device's cloud management portal"
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 152,
        question: "An ethical hacker needs to enumerate user accounts and shared resources within a company's internal network without raising any security alerts. The network consists of Windows servers running default configurations.\n\nWhich method should the hacker use to gather this information covertly?",
        options: [
            "Utilize SNMP queries to extract user information from network devices",
            "Deploy a packet sniffer to capture and analyze network traffic",
            "Perform a DNS zone transfer to obtain internal domain details",
            "Exploit null sessions to connect anonymously to the IPC$ share"
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 153,
        question: "A penetration tester is tasked with identifying vulnerabilities on a web server running outdated software. The server hosts several web applications and is protected by a basic firewall.\n\nWhich technique should the tester use to exploit potential server vulnerabilities?",
        options: [
            "Perform a brute-force login attack on the admin panel",
            "Use directory traversal to access sensitive configuration files",
            "Conduct a SQL injection attack on the web application's login form",
            "Execute a buffer overflow attack targeting the web server software"
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 154,
        question: "A penetration tester needs to identify open ports and services on a target network without triggering the organization's intrusion detection systems. To achieve stealth, the tester decides to use a method that spreads out the scan over an extended period.\n\nWhich scanning technique should the tester employ to minimize the risk of detection?",
        options: [
            "Conduct a TCP Xmas scan sending packets with all flags set",
            "Use a Stealth scan by adjusting the scan timing options to be slow and random",
            "Perform a TCP SYN scan using a fast scan rate",
            "Execute a UDP scan targeting all ports simultaneously"
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 155,
        question: "A penetration tester identifies malware on a system that hides its presence and gives an attacker access to administrative functions without being detected.\n\nWhat type of malware is this?",
        options: [
            "Rootkit",
            "Ransomware",
            "Keylogger",
            "Virus"
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 156,
        question: "During an internal assessment, a penetration tester gains access to a hash dump containing NTLM password hashes. To crack the passwords efficiently, the tester uses a high-performance CPU setup with the hashcat tool, drastically reducing the time required for password recovery.\n\nWhich technique is being optimized in this scenario?",
        options: [
            "Dump SAM contents for offline password retrieval",
            "Spoof NetBIOS to impersonate a file server",
            "Exploit dictionary rules with appended symbols",
            "Leverage hardware acceleration for cracking speed"
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 157,
        question: "A penetration tester detects malware on a system that secretly records all keystrokes entered by the user.\n\nWhat type of malware is this?",
        options: [
            "Rootkit",
            "Ransomware",
            "Keylogger",
            "Worm"
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 158,
        question: "During a network analysis at a mid-sized enterprise, a security engineer detects irregular DHCP behavior. Multiple endpoints are being assigned incorrect gateway and DNS settings. Upon investigation, the logs confirm that an unauthorized rogue DHCP server has been introduced into the network.\n\nTo prevent this type of attack from occurring in the future, what security feature should the administrator enable?",
        options: [
            "DHCP snooping on trusted interfaces",
            "ARP inspection across VLANs",
            "Static DHCP reservations for clients",
            "Port security on all trunk ports"
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 159,
        question: "A system administrator observes that several machines in the network are repeatedly sending out traffic to unknown IP addresses. Upon inspection, these machines were part of a coordinated spam campaign.\n\nWhat is the most probable cause?",
        options: [
            "Keyloggers were harvesting user credentials",
            "Devices were enslaved into a botnet network",
            "Worms exploited zero-day vulnerabilities",
            "Browsers were redirected to adware-injected sites"
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 160,
        question: "A hacker is analyzing a system that uses two rounds of symmetric encryption with different keys. To speed up key recovery, the attacker encrypts the known plaintext with all possible values of the first key and stores the intermediate ciphertexts. Then, they decrypt the final ciphertext using all possible values of the second key and compare the results.\n\nWhich cryptanalytic method does this approach represent?",
        options: [
            "Flood memory with brute-forced credentials",
            "Reverse permutations to bypass encryption",
            "Use midpoint collision to identify key pair",
            "Scrape electromagnetic leakage for bits"
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 161,
        question: "A penetration tester is assessing a web application that does not properly sanitize user input in the search field. The tester suspects the application is vulnerable to a SQL injection attack.\n\nWhich approach should the tester take to confirm the vulnerability?",
        options: [
            "Perform a brute-force attack on the login page to identify weak passwords",
            "Input a SQL query such as ' OR 1=1 -- into the search field to check for SQL injection",
            "Use directory traversal in the search field to access sensitive files on the server",
            "Inject JavaScript into the search field to perform a Cross-Site Scripting (XSS) attack"
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 162,
        question: "An ethical hacker needs to gather detailed information about a company's internal network without initiating any direct interaction that could be logged or raise suspicion.\n\nWhich approach should be used to obtain this information covertly?",
        options: [
            "Utilize network scanning tools to map the company's IP range",
            "Inspect public WHOIS records for hidden network data",
            "Examine email headers from past communications with the company",
            "Analyze the company's SSL certificates for internal details"
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 163,
        question: "A penetration tester is conducting an external assessment of a corporate web server. They start by accessing https://www.targetcorp.com/robots.txt and observe multiple Disallow entries that reference directories such as /admin-panel/, /backup/, and /confidential_docs/. When the tester directly visits these paths via browser, they find that access is not restricted by authentication and gain access to sensitive files, including server configuration and unprotected credentials.Which stage of the web server attack methodology is demonstrated in this scenario?",
        options: [
            "Performing a cross-site request forgery (CSRF) attack to manipulate user actions.",
            "Gathering information through exposed indexing instructions.",
            "Injecting malicious SQL queries to access sensitive database records.",
            "Leveraging the directory traversal flaw to access critical server files."
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 164,
        question: "A penetration tester performs a vulnerability scan on a company's network and identifies a critical vulnerability related to an outdated version of a database server.\n\nWhat should the tester prioritize as the next step?",
        options: [
            "Conduct a brute-force attack on the database login page",
            "Perform a denial-of-service (DoS) attack on the database server",
            "Attempt to exploit the vulnerability using publicly available tools or exploits",
            "Ignore the vulnerability and move on to testing other systems"
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 165,
        question: "During routine network monitoring, the blue team notices several LLMNR and NBT-NS broadcasts originating from a workstation attempting to resolve an internal hostname. They also observe suspicious responses coming from a non-corporate IP address that claims to be the requested host. Upon further inspection, the security team suspects that an attacker is impersonating network resources to capture authentication attempts.What type of password-cracking setup is likely being staged?",
        options: [
            "Decrypt login tokens from wireless networks.",
            "Match captured credentials with rainbow tables.",
            "Use CPU resources to guess passphrases quickly.",
            "Exploit name resolution to capture password hashes."
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 166,
        question: "During a comprehensive internal penetration test, a tester attempts to enumerate open services using a UDP scan. After transmitting multiple UDP probes, some ports generate immediate ICMP 'Destination Unreachable – Port Unreachable' responses. However, the majority of the ports remain silent.\n\nBased on the observed behavior, what can the tester reasonably conclude about the non-responsive ports?",
        options: [
            "The system blocked all probes after rate-limiting was detected.",
            "They may be open or filtered, requiring retransmission.",
            "The ports are likely closed because no ICMP response was received.",
            "They may correspond to some services requiring three-way handshakes."
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 167,
        question: "During a targeted phishing campaign, an attacker gains access to a trusted internal system. To maintain persistence and evade content inspection, the attacker crafts a malicious HTML email attachment containing obfuscated JavaScript code that dynamically reconstructs a malware payload.\n\nWhich evasion technique is being employed to bypass the firewall and IDS protections?",
        options: [
            "HTTP header spoofing",
            "Port forwarding",
            "HTML smuggling",
            "Cross-site scripting"
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 168,
        question: "During a red team simulation, an attacker attempts to deliver a payload to a web server. To avoid triggering alarms, the attacker crafts packets with intentionally malformed checksums and modifying specific fields so that the packets are accepted by the IDS but discarded by the destination system.\n\nWhich evasion technique is the attacker employing to deceive the IDS?",
        options: [
            "Session splicing",
            "Polymorphic shellcode",
            "Fragmentation attack",
            "Insertion attack"
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 169,
        question: "A penetration tester is evaluating a secure web application that uses HTTPS, secure cookie flags, and regenerates session IDs only during specific user actions.\n\nTo hijack a legitimate user's session without triggering security alerts, which advanced session hijacking technique should the tester employ?",
        options: [
            "Perform a man-in-the-middle attack by exploiting certificate vulnerabilities.",
            "Conduct a session token prediction attack by analyzing session ID patterns.",
            "Implement a Cross-Site Scripting (XSS) attack to steal session tokens.",
            "Use a session fixation attack by setting a known session ID before the user logs in."
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 170,
        question: "A penetration tester is trying to attack a wireless network that uses WPA3 encryption. The tester wants to exploit the handshake to obtain the password but realizes WPA3 has stronger protections.\n\nWhat would be the most effective approach to compromise the network?",
        options: [
            "Perform a brute-force attack directly on the WPA3 handshake",
            "Execute a dictionary attack on the WPA3 handshake using common passwords",
            "Perform a SQL injection attack on the router's login page",
            "Downgrade the connection to WPA2 and capture the handshake to crack the key"
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 171,
        question: "A company hires a hacker to test its network security by simulating real-world attacks. The hacker has permission and operates within legal boundaries.\n\nWhat is this type of hacker called?",
        options: [
            "Grey Hat Hacker",
            "White Hat Hacker",
            "Black Hat Hacker",
            "Script Kiddie"
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 172,
        question: "A multinational organization is implementing a security upgrade for its corporate wireless infrastructure. To enhance security and scalability, the organization decides to migrate to WPA2-Enterprise. The new setup must allow for centralized control of user authentication and ensure that each authenticated client is assigned a unique session encryption key.\n\nWhich component is essential for enabling this centralized, certificate-based authentication with unique key generation per session in a WPA2-Enterprise environment?",
        options: [
            "Temporal Key Integrity Protocol (TKIP)",
            "Opportunistic Wireless Encryption (OWE)",
            "Pre-Shared Key (PSK)",
            "RADIUS with Extensible Authentication Protocol (EAP)"
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 173,
        question: "A penetration tester gains access to a target system through a vulnerability in a third-party software application.\n\nWhat is the most effective next step to take to gain full control over the system?",
        options: [
            "Execute a Cross-Site Request Forgery (CSRF) attack to steal session data",
            "Conduct a denial-of-service (DoS) attack to disrupt the system's services",
            "Perform a brute-force attack on the system's root password",
            "Use a privilege escalation exploit to gain administrative privileges on the system"
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 174,
        question: "During a black-box security assessment of a large enterprise network, the penetration tester identifies that TCP port 389 is open on a domain controller. Upon further investigation, the tester runs the ldapsearch utility without providing any authentication credentials and successfully retrieves a list of usernames, email addresses, and departmental affiliations from the LDAP directory.\n\nBased on this behavior, what type of LDAP access mechanism is most likely being exploited?",
        options: [
            "LDAP via RADIUS relay",
            "Anonymous LDAP binding",
            "Authenticated LDAP with Kerberos",
            "LDAP over SSL (LDAPS)"
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 175,
        question: "During a comprehensive security audit of a financial institution’s online infrastructure, a penetration tester observes abnormal traffic redirection patterns affecting the institution’s primary domain. Customers who attempt to access the legitimate website are seamlessly redirected to a visually identical phishing page, hosted on a suspicious IP address. After tracing the DNS resolution path, the tester discovers that the authoritative DNS server has been compromised, and its records have been altered to point to the attacker’s server. The redirection affects all DNS queries for the domain, indicating unauthorized control over name resolution infrastructure, rather than local cache poisoning or client-side manipulation. The tester confirms that this redirection was achieved by tampering with the DNS zone records themselves.Which technique is being used in this scenario?",
        options: [
            "Carry out DNS server hijacking by tampering with the legitimate name resolution infrastructure.",
            "Perform DNS rebinding in the import functionality to manipulate browser-origin interactions.",
            "Establish covert communication using DNS tunneling over standard DNS queries.",
            "Initiate a DNS amplification attack by leveraging recursive servers to flood the target."
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 176,
        question: "During a cryptographic audit of a legacy system, a security analyst observes that an outdated block cipher is leaking key-related information when analyzing large sets of plaintext-ciphertext pairs.\n\nWhat approach might an attacker exploit here?",
        options: [
            "Modify the padding to obtain plaintext",
            "Use linear approximations to infer secret bits",
            "Launch a key replay through IV duplication",
            "Attack the hash algorithm for collisions"
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 177,
        question: "A red team operator wants to obtain credentials from a Windows machine without touching the LSASS process memory, as security controls and Credential Guard are active. Instead, they leverage a method that uses the SecuritySupport Provider Interface (SSPI to generate NetNTLM responses within the context of the logged-in user and collect those responses for offline cracking.Which attack technique is being used in this scenario?",
        options: [
            "Internal Monologue attack technique executed through OS authentication protocol manipulations.",
            "Replay attack attempt by reusing captured authentication traffic sequences.",
            "Hash injection approach using credential hashes for authentication purposes.",
            "Pass-the-ticket attack method involving forged tickets for network access."
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 178,
        question: "A penetration tester discovers that a web application is using outdated SSL/TLS protocols (TLS 1.0) to secure communication.\n\nWhat is the most effective way to exploit this vulnerability?",
        options: [
            "Conduct a Cross-Site Scripting (XSS) attack on the application",
            "Use a man-in-the-middle (MitM) attack to intercept and decrypt traffic",
            "Execute a SQL injection attack on the application's backend",
            "Perform a brute-force attack on the SSL/TLS handshake"
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 179,
        question: "Which of the following best describes the role of a penetration tester?",
        options: [
            "A hacker who spreads malware to compromise systems",
            "A security professional hired to identify and exploit vulnerabilities with permission",
            "A hacker who gains unauthorized access to systems for malicious purposes",
            "A developer who writes malicious code for cyberattacks"
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 180,
        question: "Upon analyzing anomalies in your network's traffic, you discover traces of an insidious malware strain named 'ShadowFlee'. This malware operates without writing files to disk, harnessing system utilities and scripts like PowerShell to stealthily execute tasks.\n\nGiven 'ShadowFlee's' elusive attributes, which strategy would offer the most focused countermeasure?",
        options: [
            "Regularly clean up temporary folders and enforce stricter permissions on system directories.",
            "Schedule frequent system reboots to clear memory and apply patches to all networked devices.",
            "Isolate affected systems, deploy deep packet inspection on network traffic, and block communications to blacklisted IPs.",
            "Restrict and monitor the execution of scripts and system tools, especially those invoked by unsanctioned processes."
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 181,
        question: "An ethical hacker is conducting a penetration test on a company's network with full knowledge and permission from the organization.\n\nWhat is this type of hacking called?",
        options: [
            "Grey Hat Hacking",
            "White Hat Hacking",
            "Blue Hat Hacking",
            "Black Hat Hacking"
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 182,
        question: "What is the main difference between ethical hacking and malicious hacking?",
        options: [
            "Ethical hackers use different tools than malicious hackers",
            "Ethical hacking is illegal, while malicious hacking is legal",
            "Ethical hacking is performed with permission, while malicious hacking is unauthorized",
            "Ethical hackers always work alone, while malicious hackers work in teams"
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 183,
        question: "A security analyst is tasked with gathering detailed information about an organization's network infrastructure without making any direct contact that could be logged or trigger alarms.\n\nWhich method should the analyst use to obtain this information covertly?",
        options: [
            "Initiate social engineering attacks to elicit information from employees",
            "Perform a DNS brute-force attack to discover subdomains",
            "Use network mapping tools to scan the organization's IP range",
            "Examine leaked documents or data dumps related to the organization"
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 184,
        question: "A penetration tester is assessing a company's HR department for vulnerability to social engineering attacks using knowledge of recruitment and onboarding processes.\n\nWhat is the most effective technique to obtain network access credentials without raising suspicion?",
        options: [
            "Conduct a phone call posing as a new employee to request password resets",
            "Create a convincing fake onboarding portal that mimics the company's internal systems",
            "Develop a fake social media profile to connect with HR employees and request sensitive information",
            "Send a generic phishing email with a link to a fake HR policy document"
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 185,
        question: "A penetration tester is mapping a Windows-based internal network. The tester notices that TCP port 139 and UDP port 137 are open on multiple systems. File and printer sharing is enabled.\n\nTo retrieve hostnames, user details, and domain roles without triggering alerts, which tool and method would be most effective?",
        options: [
            "Perform LDAP enumeration via anonymous bind.",
            "Use pspasswd to change remote passwords.",
            "Run nbtstat -A to query the NetBIOS name table.",
            "Use psloggedon to retrieve remote login sessions."
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 186,
        question: "A penetration tester is attempting to gain access to a wireless network that is secured with WPA2 encryption. The tester successfully captures the WPA2 handshake but now needs to crack the pre-shared key.\n\nWhat is the most effective method to proceed?",
        options: [
            "Conduct a de-authentication attack to disconnect all clients from the network",
            "Execute a SQL injection attack on the router's login page",
            "Use a dictionary attack against the captured WPA2 handshake to crack the key",
            "Perform a brute-force attack using common passwords against the captured handshake"
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 187,
        question: "During a security evaluation of a smart agriculture setup, an analyst investigates a cloud-managed irrigation controller. The device is found to transmit operational commands and receive firmware updates over unencrypted HTTP. Additionally, it lacks mechanisms to verify the integrity or authenticity of those updates.\n\nWhich IoT threat category does this situation best illustrate?",
        options: [
            "Insecure network services",
            "Insecure ecosystem interfaces",
            "Insecure default settings",
            "Insufficient privacy protection"
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 188,
        question: "A penetration tester has completed a vulnerability scan on a company's internal network. The scan reveals multiple low-risk vulnerabilities, but one high-risk vulnerability is associated with outdated server software.\n\nWhat should the tester prioritize as the next step?",
        options: [
            "Perform a brute-force attack on the server to gain access",
            "Focus on exploiting the low-risk vulnerabilities first",
            "Verify if the high-risk vulnerability is exploitable by checking for known exploits",
            "Ignore the high-risk vulnerability and proceed with testing other systems"
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 189,
        question: "A penetration tester suspects that a web application's product search feature is vulnerable to SQL injection. The tester needs to confirm this by manipulating the SQL query.\n\nWhat is the best technique to test for SQL injection?",
        options: [
            "Inject a malicious script into the search field to test for Cross-Site Scripting (XSS)",
            "Use directory traversal syntax in the search field to access server files",
            "Insert admin '-- in the search field to attempt bypassing authentication",
            "Input 1 OR 1=1 in the search field to retrieve all products from the database"
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 190,
        question: "A penetration tester is hired to legally assess the security of a company's network by identifying vulnerabilities and attempting to exploit them.\n\nWhat type of hacker is this?",
        options: [
            "White Hat",
            "Script Kiddie",
            "Black Hat",
            "Grey Hat"
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
        {
        id: 191,
        question: "A penetration tester suspects that a web application's user profile page is vulnerable to SQL injection, as it uses the userID parameter in SQL queries without proper sanitization.\n\nWhich technique should the tester use to confirm the vulnerability?",
        options: [
            "Attempt a directory traversal attack using the userID parameter",
            "Modify the userID parameter in the URL to ' OR '1'='1 and check if it returns multiple profiles",
            "Inject HTML code into the userID parameter to test for Cross-Site Scripting (XSS)",
            "Use the userID parameter to perform a brute-force attack on the admin login page"
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 192,
        question: "A global fintech company that processes millions of online payments daily begins receiving alarming emails from an unknown threat actor claiming to represent a notorious hacktivist group. The email includes a demand for 20 BTC in cryptocurrency, warning that a large-scale DDoS attack will cripple their infrastructure if the ransom is not paid within 72 hours. To prove their seriousness, the attacker initiates a short-lived HTTP flood targeting the company's checkout service.\n\nWhat type of DDoS attack is being carried out in this scenario?",
        options: [
            "Recursive GET flood disguised as crawling",
            "Pulse wave attack with burst patterns",
            "DDoS attack combining threat and extortion",
            "DRDoS attack using intermediaries"
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 193,
        question: "During a physical penetration test simulating a social engineering attack, a threat actor walks into the lobby of a target organization dressed as a field technician from a known external vendor. Carrying a fake ID badge and referencing a known company name, the attacker confidently claims they've been dispatched to perform a routine server room upgrade. The receptionist, recognizing the vendor name and the convincing language, allows access without verifying the credentials.\n\nWhat social engineering principle is being exploited?",
        options: [
            "Trust in physical security logs used by security teams.",
            "Perceived authority and reliance on third-party familiarity.",
            "Leaked credentials on public networks and forums.",
            "Misconfigured network segmentation allowing unauthorized access."
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 194,
        question: "A penetration tester evaluates the security of an iOS mobile application that handles sensitive user information. The tester discovers that the application is vulnerable to insecure data transmission.\n\nWhat is the most effective method to exploit this vulnerability?",
        options: [
            "Perform a man-in-the-middle attack to intercept unencrypted data transmitted over the network",
            "Use a Cross-Site Request Forgery (CSRF) attack to steal user session tokens",
            "Execute a SQL injection attack to retrieve data from the backend server",
            "Conduct a brute-force attack on the app's authentication system"
        ],
        correctAnswer: 0,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 195,
        question: "A penetration tester needs to map open ports on a target network without triggering the organization's intrusion detection systems (IDS), which are configured to detect standard scanning patterns and abnormal traffic volumes. To achieve this, the tester decides to use a method that leverages a third-party host to obscure the origin of the scan.\n\nWhich scanning technique should be employed to accomplish this stealthily?",
        options: [
            "Perform a TCP SYN scan using slow-timing options",
            "Use an Idle scan by exploiting a 'zombie' host",
            "Conduct a TCP FIN scan with randomized port sequences",
            "Execute a UDP scan with packet fragmentation"
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 196,
        question: "A penetration tester discovers that a web application uses unsanitized user input to dynamically generate file paths. The tester identifies that the application is vulnerable to Remote File Inclusion (RFI).\n\nWhich action should the tester take to exploit this vulnerability?",
        options: [
            "Use directory traversal to access sensitive system files on the server",
            "Inject a SQL query into the input field to perform SQL injection",
            "Provide a URL pointing to a remote malicious script to include it in the web application",
            "Upload a malicious shell to the server and execute commands remotely"
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 197,
        question: "During an internal penetration test within a large corporate environment, the red team gains access to an unrestricted network port in a public-facing meeting room. Upon connecting a laptop, the tester deploys an automated tool configured to continuously send DHCPDISCOVER requests using thousands of randomly generated spoofed MAC addresses. Within minutes, several employees report that their devices are unable to access the internal network or obtain valid IP configurations.\n\nWhat type of attack did the penetration tester perform?",
        options: [
            "Rogue DHCP relay injection",
            "DHCP starvation",
            "DNS cache poisoning",
            "ARP spoofing"
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 198,
        question: "A penetration tester performs a vulnerability scan on a company's web server and identifies several medium-risk vulnerabilities related to misconfigured settings.\n\nWhat should the tester do to verify the vulnerabilities?",
        options: [
            "Conduct a denial-of-service (DoS) attack to test the server's resilience",
            "Ignore the vulnerabilities since they are medium-risk",
            "Perform a brute-force attack on the web server's login page",
            "Use publicly available tools to exploit the vulnerabilities and confirm their impact"
        ],
        correctAnswer: 3,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 199,
        question: "A cyber adversary is performing external reconnaissance on a large enterprise network with multiple perimeter defenses in place, including packet-filtering firewalls and intrusion detection systems (IDS). The goal is to enumerate the firewall's rule set to identify which TCP and UDP ports are permitted for inbound traffic to internal systems. To minimize noise and avoid immediate detection, the attacker wants to use a method that mimics normal traffic flows.\n\nWhich reconnaissance technique should the attacker choose to effectively map the firewall's filtering behavior without raising alerts?",
        options: [
            "Conducting full SYN scans on all ports for each discovered IP",
            "Firewalking with manipulated TTL values to analyze ACL responses",
            "Sending ICMP Echo requests to the network's broadcast address",
            "Passive DNS monitoring to observe domain-to-IP relationships"
        ],
        correctAnswer: 1,
        userAnswer: null,
        bookmarked: false
    },
    {
        id: 200,
        question: "During a security assessment, an attacker identifies a flaw in a multi-user file system. The system first verifies access rights to a temporary file created by a user. However, immediately after this verification, and before the file is processed, the attacker manages to swap the original file with a malicious version. This manipulation happens in the brief interval between the system's access verification and the moment it handles the file.\n\nWhich vulnerability is the attacker exploiting?",
        options: [
            "Integer overflow during arithmetic computations with limited memory bounds.",
            "Null pointer dereference leading to unexpected application behavior.",
            "Time-of-validation/time-of-execution issue in resource management logic.",
            "Improper certificate validation in trusted communication channels."
        ],
        correctAnswer: 2,
        userAnswer: null,
        bookmarked: false
    }
];
