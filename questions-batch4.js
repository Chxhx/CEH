const questionsBatch4 = [
    {
        "id": 301,
        "question": "In the heart of Silicon Valley, California, network administrator Jake Henderson oversees the web infrastructure for TechTrend Innovations, a startup specializing in cloud solutions. During a routine architecture review, Jake evaluates the setup of their web server, which handles high-traffic API requests. He notes that the server’s primary module processes incoming requests and works with additional modules to manage encryption, URL rewriting, and authentication. Curious about the server’s design, Jake consults the documentation to ensure optimal performance and security.\n\nWhich web server component is Jake analyzing as part of TechTrend Innovations’ architecture?",
        "options": [
            "Virtual Document Tree",
            "Application Server",
            "Document Root",
            "HTTP Server (Core) (Correct Answer)"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 302,
        "question": "In the humid air of Houston, Texas, a chemical plant is preparing to deploy a new production automation module. As part of a red team engagement, you Ethan Brooks, a cybersecurity specialist are tasked with identifying industrial control devices that communicate with SCADA systems. To proactively uncover devices that may expose critical functions, you launch a focused Nmap sweep targeting TCP port 102, known to be associated with industrial controllers used in critical infrastructure. Your scan detects specific PLC models used in the automation process. Which OT reconnaissance step are you performing?",
        "options": [
            "Scanning Omron PLC devices",
            "Scanning Modbus devices",
            "Capturing Modbus/TCP traffic using Wireshark",
            "Scanning Siemens SIMATIC S7 PLCs (Correct Answer)"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 303,
        "question": "You are Emma Rodriguez, an ethical hacker at SecurePath Solutions, hired to test the mobile application security of Sterling & Associates, a law firm in New York City. During a covert assessment, your objective is to simulate an attacker attempting to exploit vulnerabilities in the firm’s client case management app. You discover that the app stores user credentials in plain text on the device, enabling you to extract sensitive client login information using a rooted device. Based on this finding, which OWASP Top 10 Mobile Risk are you identifying in the app?",
        "options": [
            "Insecure Communication",
            "Improper Credential Usage",
            "Inadequate Privacy Controls",
            "Insecure Data Storage (Correct Answer)"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 304,
        "question": "In a security assessment conducted in New York, Sarah, an ethical hacker, is evaluating a corporate network to enhance its protection against potential threats. She aims to gather essential data about available access points to guide her analysis. Which scanning technique should Sarah apply to meet this objective while adhering to the organization’s ethical guidelines?",
        "options": [
            "Vulnerability Scanning",
            "Port Scanning",
            "Topology Mapping",
            "Network Scanning (Correct Answer)"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 305,
        "question": "In Atlanta, Georgia, ethical hacker James Patel is hired by Southern Retail, a major e-commerce chain, to test the security of their online shopping platform. During his penetration test, James aims to simulate a session hijacking attack by setting up a proxy to intercept HTTP traffic between customers and the platform, log the requests, and perform advanced searches on the captured data to identify session tokens. He needs a lightweight tool specifically designed for security research that can handle these tasks in a controlled environment to demonstrate vulnerabilities to the company’s security team.\n\nWhich tool should James use to perform this session hijacking simulation?",
        "options": [
            "Caido",
            "Hetty (Correct Answer)",
            "Bettercap",
            "Wireshark"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 306,
        "question": "In Austin, Texas, ethical hacker Michael Reyes is conducting a red team exercise for Horizon Tech, a software development firm. During his assessment, Michael crafts a malicious link that appears to lead to the company’s internal project management portal. When an unsuspecting employee clicks the link, it redirects them to a login session that Michael has already initialized with the server. After the employee logs in, Michael uses that session to access the portal in a controlled test, demonstrating a vulnerability to the IT team.\n\nWhich session hijacking technique is Michael using in this red team exercise?",
        "options": [
            "Session donation attack",
            "Session replay attack",
            "Session sniffing",
            "Session fixation attack (Correct Answer)"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 307,
        "question": "You are a penetration tester hired to evaluate the security posture of a regional manufacturing company’s network devices. During your assessment, you discover that one of the core routers allows external administrative access without requiring a password. Additionally, the router communicates with other devices using a protocol that does not provide encryption or validation. Based solely on these observations, which of the following network device vulnerabilities is most clearly present?",
        "options": [
            "Firewall vulnerabilities",
            "Insecure routing protocols",
            "Lack of password protection (Correct Answer)",
            "Lack of authentication"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 308,
        "question": "You are an ethical hacker at SecureNet Solutions, conducting a penetration test for BlueRidge Manufacturing in Denver, Colorado. While auditing their wireless network, you observe that the access point uses a security protocol that employs the RC4 algorithm with a 24-bit initialization vector (IV) to encrypt data between network clients. Based on the observed encryption characteristics, which wireless encryption protocol is the access point using?",
        "options": [
            "WPA",
            "WPA2",
            "WEP (Correct Answer)",
            "WPA3"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 309,
        "question": "You are an ethical hacker at Apex Security Consulting, hired by Riverfront Media, a digital marketing firm in Boston, Massachusetts, to assess the security of their customer relationship management (CRM) web application. While evaluating the application’s search feature, you input a long string of single quote characters into the search bar. The application responds with an error suggesting that it cannot handle the length or structure of the input in the current SQL context. Based on the observed behavior, which SQL injection vulnerability detection technique are you employing?",
        "options": [
            "Detecting SQL Modification",
            "Fuzz Testing",
            "Function Testing",
            "Error Message Analysis (Correct Answer)"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 310,
        "question": "In Miami, Florida, Sarah Thompson, a security analyst at Apex Cyber Defense, is tasked with monitoring the wireless infrastructure at Coastal Healthcare, a busy urban hospital. One morning, nurse Emily Carter reports that her tablet used for accessing patient records is unexpectedly connecting to an access point broadcasting a name and signal similar to the hospital’s secure Wi-Fi. Upon investigation, Sarah’s log analysis reveals an unauthorized device on the network capturing sensitive traffic from connected systems. Suspecting a breach, she identifies that the attacker has deployed an access point to mimic the hospital’s legitimate network. Based on this behavior, which wireless threat is the attacker executing?",
        "options": [
            "Misconfigured AP",
            "Rogue AP",
            "Evil Twin AP (Correct Answer)",
            "Honeypot AP"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 311,
        "question": "You are Sameer Das, an ethical hacker hired by a national utilities provider to assess the resilience of its power grid infrastructure. During your red team operation, you conduct a phishing campaign targeting field engineers and successfully gain access to the internal OT network. From there, you identify unsecured access to the substation’s programmable controllers and replace one of the system’s firmware components with a custom payload. This payload silently processes your commands while maintaining access across reboots. Based on this action, which type of IoT/OT threat are you simulating?",
        "options": [
            "Forged malicious device",
            "Firmware update attack (Correct Answer)",
            "Remote access using backdoor",
            "Exploit kits"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 312,
        "question": "During a large-scale network assessment of a telecom provider in Dallas, Texas, a cybersecurity consultant uses Recon-ng and Nmap to enumerate legacy and infrastructure-level services across multiple nodes. The tools uncover open Telnet ports, FTP directories with anonymous login enabled, active TFTP services, and exposed SMB shares. The consultant also detects a service that responds to VRFY, EXPN, and RCPT commands – allowing the enumeration of user identities and delivery addresses due to weak input validation. IPv6 tunneling protocols are also detected. Concerned about information leakage, the consultant flags these services for immediate remediation.\n\nWhich classification best describes this set of enumeration activities?",
        "options": [
            "LDAP Enumeration",
            "VoIP Enumeration",
            "SMTP Enumeration (Correct Answer)",
            "DNS Enumeration"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 313,
        "question": "In the neon-lit sprawl of Las Vegas, Nevada, a luxury hotel’s smart room control system suffered a breach, allowing an intruder to manipulate guest room settings. The incident investigation revealed that the IoT devices lacked any mechanism to verify the integrity or authenticity of software prior to execution, allowing tampered instructions to run unchecked. As Emma Ruiz, a cybersecurity consultant brought in to assess the breach, you recommend a solution that ensures only authorized, validated code is executed on the devices. Which secure development practice are you advising the hotel to implement?",
        "options": [
            "Allow code signing",
            "Ensure secure boot (Correct Answer)",
            "Secure firmware or software updates",
            "Utilize secure communication protocols"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 314,
        "question": "You are Sophia Bennett, an ethical hacker at Nexus Cyber Defense, tasked with evaluating the security of a smart retail store’s IoT network in San Francisco, California. During your assessment, you uncover a vulnerability in the store’s smart inventory sensors that could allow an attacker to gain unauthorized access. The flaw lies in a cloud-based communication process that lacks authentication and encryption and fails to properly validate data exchange between the sensors and the cloud management platform. Based on the described vulnerability, which IoT attack surface area are you addressing in your findings?",
        "options": [
            "Insecure ecosystem interfaces (Correct Answer)",
            "Insecure data transfer and storage",
            "Insecure default settings",
            "Insecure network services"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 315,
        "question": "During an internal audit at a financial services firm in Mumbai, ethical hacker Meera was tasked with assessing lateral movement risks within the Windows-based domain environment. While monitoring internal network traffic, she noticed a strange broadcast from a workstation trying to resolve a non-existent host. Suspecting protocol-level weakness, she responded swiftly using a pre-configured system. A few minutes later, she captured NTLMv2 hashes from several authenticated sessions across multiple departments. Later, her team successfully cracked one of the hashes offline and used the credentials to gain access to a sensitive internal reporting server.\n\nWhich type of attack did Meera most likely execute?",
        "options": [
            "Kerberoasting",
            "Internal Monologue Attack",
            "LLMNR/NBT-NS Poisoning (Correct Answer)",
            "Pass-the-Ticket Attack"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 316,
        "question": "On July 9, 2025, during a security penetration test at MedSecure Health in Phoenix, Arizona, the ethical hacking team evaluates the resilience of the company’s patient portal system. Ethical hacker Aisha Khan initiates a controlled test that generates sustained traffic pressure against the web application servers. As system responsiveness declines, the IT operations team reallocates backend resources, suspending lower-priority modules such as system alerts and notification services, allowing high-priority functions like prescription refills and patient check-ins to remain accessible. Aisha’s controlled simulation is designed to assess the IT team’s ability to maintain critical functionality under partial resource exhaustion.\n\nWhat DoS/DDoS countermeasure strategies is Aisha’s exercise primarily simulating?",
        "options": [
            "Degrading Services (Correct Answer)",
            "Shutting Down Services",
            "Absorbing the Attack",
            "Rate Limiting"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 317,
        "question": "At RedCore Motors, the IT security lead, Priya, is tasked with selecting a vulnerability management solution for their expanding hybrid infrastructure. During the evaluation, she prioritizes tools that support agent-based detection across endpoints, offer constant monitoring and alerting capabilities, and provide comprehensive visibility into both on-premises and cloud-based systems.\n\nAfter thorough testing, she selects a platform that promises to scan for vulnerabilities everywhere accurately and efficiently, aligning with her organization’s need for centralized visibility and real-time risk assessment.\n\nWhich vulnerability assessment tool did Priya MOST LIKELY select?",
        "options": [
            "Nessus",
            "Nikto",
            "Qualys VM (Correct Answer)",
            "OpenVAS"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 318,
        "question": "In Austin, Texas, ethical hacker Liam Carter is hired by Lone Star Healthcare to probe the defenses of their patient data network. During his penetration test, Liam aims to bypass the hospital’s firewall protecting a medical records server. To do so, he uses a tool to craft custom network packets, carefully designing their headers to slip past the firewall’s filtering rules. His goal is to demonstrate how an attacker could infiltrate the system, exposing vulnerabilities for the security team to address.\n\nWhich tool is Liam using to bypass Lone Star Healthcare’s firewall during his penetration test?",
        "options": [
            "Metasploit",
            "Colasoft Packet Builder (Correct Answer)",
            "Nmap",
            "Traffic IQ Professional"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 319,
        "question": "In the hushed offices of Pinecrest Solutions in Denver, network security analyst Lisa Nguyen began a covert review of a recent spike in network access issues reported by the sales team. The trouble surfaced during a low-traffic period when agents couldn’t reach their CRM system, prompting Lisa to examine the subnet logs. She spotted irregular IP assignment attempts linked to an unfamiliar device. Acting quickly, Lisa entered a series of commands on the Cisco switches and later confirmed that connectivity issues had ceased without any new devices appearing in the logs.\n\nWhich command did Lisa most likely use to address the issue?",
        "options": [
            "Switch(config)# ip dhcp snooping vlan 10 (Correct Answer)",
            "Switch(config)# ip arp inspection vlan 10",
            "Switch(config)# ip dhcp snooping",
            "Switch(config-if)# switchport port-security"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 320,
        "question": "You are Noah Kim, an ethical hacker at Quantum Cyber Solutions, hired to test the mobile device security of TechTrend Innovations, a tech firm in Austin, Texas. During a covert assessment, your objective is to simulate an attacker attempting to gain privileged access to an iPhone 12 running iOS 14.5 used for proprietary app development. You apply a jailbreaking technique that allows the device to fully restart without requiring a computer, maintaining a patched kernel and enabling access to sensitive app data in the file system. Based on this method, which iOS jailbreaking technique are you using?",
        "options": [
            "Semi-tethered Jailbreaking",
            "Untethered Jailbreaking (Correct Answer)",
            "Semi-untethered Jailbreaking",
            "Tethered Jailbreaking"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 321,
        "question": "Lily, a network security analyst at a regional healthcare provider, is preparing defenses ahead of a scheduled external vulnerability assessment. During internal simulation drills, she observes that scanners are successfully identifying open ports and service banners across critical systems. Tasked with reducing exposure to such reconnaissance efforts, Lily is instructed to apply measures that specifically hinder port scanning activity without disrupting legitimate traffic.\n\nWhich of the following actions should Lily implement?",
        "options": [
            "Block unwanted services running on the ports and update the service versions",
            "Use a custom rule set to lock down the network, block unwanted ports at the firewall, and filter specific ports",
            "Configure firewall and IDS rules to detect and block probes",
            "Block inbound ICMP message types and all outbound ICMP type-3 unreachable messages (Correct Answer)"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 322,
        "question": "Michael, an ethical hacker at a San Francisco-based fintech startup, is conducting a security assessment of the company’s cloud-based payment processing platform, which uses Kubernetes, an open-source system for automating the deployment, scaling, and management of containerized applications. During his review, Michael identifies a feature that automatically replaces and reschedules containers from failed nodes to ensure high availability of services – a critical requirement for uninterrupted payment operations. Based on his study of cloud container technology principles, which Kubernetes feature should Michael highlight as responsible for this capability?\n\nWhich Kubernetes feature should Michael highlight to ensure automatic restarting of failed containers for the payment processing platform?",
        "options": [
            "Container vulnerabilities",
            "Kube-controller-manager",
            "Container orchestration",
            "Self-healing (Correct Answer)"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 323,
        "question": "In a recent cybersecurity incident, Google’s response team in the United States investigated a severe attack that briefly disrupted services and customer-facing platforms for approximately 2-3 minutes. Server logs recorded a sudden surge in traffic, peaking at 398 million requests per second, which caused active connections to drop unexpectedly. The attack was traced to numerous compromised devices, likely orchestrated through malicious tools promoted on social media.\n\nBased on this information, what type of attack was most likely executed against Google’s infrastructure?",
        "options": [
            "SYN Flood Attack",
            "TCP SACK Panic Attack",
            "RST Attack",
            "HTTP GET/POST Attack (Correct Answer)"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 324,
        "question": "You are Michael Rivera, a cybersecurity consultant at FortiSec Solutions, hired to strengthen the wireless network of DesertTech Innovations, a startup in Phoenix, Arizona. After a recent penetration test revealed vulnerabilities, the IT manager, Lisa Nguyen, asks you to recommend a defense mechanism to prevent unauthorized devices from connecting to the corporate Wi-Fi. You suggest a method that requires each connecting device to authenticate through a centralized server using a unique username and password. Based on the described approach, which wireless security countermeasure should DesertTech implement?",
        "options": [
            "Use 802.1X Authentication (Correct Answer)",
            "Disable TKIP",
            "MAC Address Filtering",
            "Upgrade to WPA3"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 325,
        "question": "You are Ava Mitchell, an ethical hacker at Sentinel Cyberworks, hired to test the wireless defenses of Horizon Financial, a bank in Boston, Massachusetts. During a covert nighttime assessment, your objective is to simulate an attacker attempting to breach the bank’s WPA-protected Wi-Fi network. You deploy a tool that allows you to capture wireless packets, send de-authentication packets to force client reconnections, and attempt to recover the encryption key, all within a single graphical interface. Based on the described functionality, which Wi-Fi security auditing tool are you using?",
        "options": [
            "Fern WiFi Cracker (Correct Answer)",
            "RFProtect",
            "Cisco Adaptive Wireless IPS",
            "WatchGuard Wi-Fi Cloud WIPS"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 326,
        "question": "In the heart of Silicon Valley, ethical hacker Sophia Nguyen is hired by InnoVate Solutions, a San Francisco-based startup, to secure their cloud-based task management platform. On March 15, 2025, Sophia begins testing a feature that allows users to upload custom workflow templates to streamline project assignments. By carefully crafting a template file, she manipulates the platform’s data processing, triggering unexpected behavior that grants her administrative access to restricted project dashboards. The issue arises from the platform’s handling of user-supplied data during object reconstruction, not from database queries, client-side code execution, or session manipulation. Sophia documents her findings to help InnoVate’s developers strengthen their application.\n\nWhich web application vulnerability is Sophia most likely exploiting in InnoVate Solutions’ task management platform?",
        "options": [
            "Session Hijacking",
            "Local File Inclusion",
            "Verbose Error Messages",
            "Insecure Deserialization (Correct Answer)"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 327,
        "question": "You are a security analyst at Sentinel IT Services, monitoring the web application of GreenValley Credit Union in Portland, Oregon. During a log analysis, you identify an SQL injection attempt on the customer login portal, where the attacker inputs a malicious string to manipulate the query logic. The application mitigates this by replacing special characters with their escaped equivalents to prevent query manipulation before the query is executed, ensuring the SQL statement remains unchanged.\n\nBased on the observed defense mechanism, which SQL injection countermeasure is the application employing?",
        "options": [
            "Perform user input validation",
            "Encoding the single quote (Correct Answer)",
            "Restrict database access",
            "Use parameterized queries or prepared statements"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 328,
        "question": "You are Liam Chen, an ethical hacker at CyberGuard Analytics, hired to test the social engineering defenses of Coastal Trends, a retail chain in Los Angeles, California. During a covert assessment, you craft a deceptive message sent to employees’ company phones, claiming a critical account update is needed and directing them to a link that installs monitoring software. Several employees interact with the link, exposing a vulnerability to a specific mobile attack vector. Based on this approach, which mobile attack type are you simulating?",
        "options": [
            "Bluebugging",
            "SMS Phishing (Correct Answer)",
            "Call Spoofing",
            "OTP Hijacking"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 329,
        "question": "As part of an insider threat simulation at a multinational insurance firm, lead red teamer John is asked to assess whether internal directory services are exposing sensitive user data. Gaining limited VPN access, he begins probing port 389 on a staging environment connected to the main domain infrastructure. After discovering that anonymous binds are accepted by the directory service, John launches a utility from his Kali machine that allows command-line interaction with directory entries. He structures his query to search for user objects with associated organizational units. Moments later, John reviews the output which includes usernames, group memberships, and departmental hierarchies – all retrieved without authentication.\n\nWhich tool is John MOST likely using to perform this enumeration?",
        "options": [
            "smtp-user-enum",
            "nbtstat -A",
            "dig AXFR",
            "ldapsearch (Correct Answer)"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 330,
        "question": "A multinational corporation deploys a major internal tool built on a PowerShell-based automation framework. Shortly after a scheduled rollout, the IT team notices intermittent system slowdowns and unexplained bandwidth spikes. Despite running updated endpoint protection and restrictive firewall rules, traditional scanning tools report no malicious files on disk. However, internal telemetry flags a trusted process repeatedly executing obfuscated PowerShell commands in memory. The anomalous activity vanishes upon reboot and appears to leave no footprint behind on the system.\n\nWhich type of malware is most likely responsible for this behavior?",
        "options": [
            "Worm",
            "Trojan",
            "Rootkit",
            "Fileless Malware (Correct Answer)"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 331,
        "question": "As part of a passive reconnaissance engagement for a university research network, you’re asked to map potential administrative exposure points across .edu domains. You aim to identify pages that might allow privileged backend access such as misconfigured interfaces using only publicly indexed information. To ensure efficiency and compliance, you decide to use Google’s advanced search syntax. Your goal is to locate URLs across educational domains that may contain restricted backend functionality.\n\nWhich of the following search strings would most effectively support this goal?",
        "options": [
            "site:.edu filetype:pdf intitle:”admin”",
            "intitle:”admin login” site:.edu",
            "site:.edu inurl:admin (Correct Answer)",
            "inanchor:”backend access” site:.edu"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 332,
        "question": "You are an ethical hacker at Nexus Cybersecurity, contracted to perform a penetration test for BlueRidge Retail, a U.S.-based e-commerce company in Atlanta, Georgia. While testing their online store’s product search page, you attempt to inject a malicious query into the URL to extract customer data. The application is protected by a web application firewall (WAF) that blocks standard SQL injection attempts. To bypass this, you modify your input to split the query into multiple parts, ensuring the malicious instructions are not detected as a single signature. For example, you craft the URL as /products.php? id=1+U+NION+SE+LECT+1,2, which successfully retrieves unauthorized data. Based on the observed behavior, which SQL injection evasion technique are you employing?",
        "options": [
            "Hex Encoding",
            "String Concatenation (Correct Answer)",
            "In-line Comment",
            "Null Byte"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 333,
        "question": "Bob, a seasoned security analyst at XYZ Aerospace, was investigating a series of misaligned transaction timestamps coming from one of the data archival systems. Suspecting that the server might be syncing with an unstable time source, Bob decided to extract a detailed list of all peer servers associated with the target machine, including metrics such as delay, offset, and jitter, to determine whether the issue stemmed from time synchronization drift.\n\nWhich of the following commands should Bob use to retrieve this information?",
        "options": [
            "ntptrace [-n] [-m maxhosts] [servername/IP_address]",
            "ntpq -p [host] (Correct Answer)",
            "ntpdc [-ilnps] [-c command] [host] [...]",
            "ntpq [-inp] [-c command] [host] [...]"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 334,
        "question": "During a quarterly security audit at a multinational logistics firm, network security manager Priya initiates a scheduled vulnerability assessment across the organization’s hybrid infrastructure. Her team begins by identifying all active IT assets and assigning them risk scores based on business criticality. The following week, they deploy scanning tools to detect security weaknesses, validate the findings manually, and classify vulnerabilities based on severity and exploitability. After coordinating with the IT operations team, they develop a structured timeline to address the confirmed vulnerabilities, giving priority to high-risk findings affecting mission-critical systems. Finally, after the vulnerabilities are addressed, Priya ensures that the affected systems are rescanned to confirm resolution and generates a compliance report for executive review.\n\nBased on this workflow, which phase of the Vulnerability-Management Life Cycle is Priya executing?",
        "options": [
            "Remediation (Correct Answer)",
            "Vulnerability Analysis",
            "Verification",
            "Risk Assessment"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 335,
        "question": "Sarah, a cybersecurity analyst at a US-based e-commerce company in New York, is tasked with evaluating the company’s transition to a cloud-based infrastructure to support its growing online platform. The company aims to optimize resource allocation to handle fluctuating customer demand during peak shopping seasons, such as Black Friday. Sarah must recommend a key characteristic of cloud computing that ensures resources are efficiently shared across multiple users while maintaining scalability.\n\nWhich cloud computing characteristic should Sarah recommend ensuring efficient resource sharing and scalability for the e-commerce platform?",
        "options": [
            "Measured service",
            "Broad network access",
            "Resource pooling (Correct Answer)",
            "On-demand self-service"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 336,
        "question": "As the cybersecurity lead for an international news agency, you are alerted by your threat intelligence team that confidential communications between journalists and whistleblowers have been posted to an online activist forum. Further forensic analysis reveals that no financial transactions were tampered with, and no ransomware was deployed. However, the agency’s internal systems were accessed and selectively leaked emails were published alongside a manifesto accusing the organization of biased reporting. The attackers also posted on social media claiming responsibility and justifying their actions as a fight against misinformation.\n\nBased on this behavior, what category of hacker are you most likely dealing with?",
        "options": [
            "Script Kiddies",
            "Hacktivists (Correct Answer)",
            "Black Hat hackers",
            "White Hat hackers"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 337,
        "question": "In a controlled testing environment in Houston, Sarah, an ethical hacker, is tasked with evaluating the security posture of a financial firm’s network using the cyber kill chain methodology. She begins by simulating an attack, starting with gathering publicly available data about the company’s employees and infrastructure. Next, she plans to craft a mock phishing email to test employee responses, followed by deploying a harmless payload to assess system vulnerabilities. As part of her authorized penetration test, what phase of the cyber kill chain should Sarah prioritize to simulate the adversary’s approach effectively?",
        "options": [
            "Exploitation",
            "Reconnaissance (Correct Answer)",
            "Weaponization",
            "Delivery"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 338,
        "question": "At a government research lab, cybersecurity officer Nikhil is compiling a vulnerability assessment report after scanning the internal subnet. As part of his documentation, he lists the IP addresses of all scanned hosts and specifies which machines are affected. He includes tables categorizing discovered vulnerabilities by type – such as outdated software, default credentials, and open ports. Which section of the vulnerability assessment report is Nikhil working on?",
        "options": [
            "Findings (Correct Answer)",
            "Risk Assessment",
            "Supporting Information",
            "Assessment Overview"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 339,
        "question": "In a tense red team exercise at a mid-sized university in Austin, Texas, an ethical hacker named Jake targeted a legacy Linux server in the engineering department. Late one afternoon, he discovered TCP port 2049 was open during his port sweep, suggesting hidden file-sharing capabilities. Intrigued, Jake used a standard utility to request a list of remote file systems shared across the network, aiming to map accessible resources. Meanwhile, he idly checked for Telnet access and probed a time-sync service out of routine, but both proved fruitless on this host.\n\nWhich enumeration method is actively demonstrated in this scenario?",
        "options": [
            "NFS Enumeration (Correct Answer)",
            "SNMP Enumeration",
            "NetBIOS Enumeration",
            "NTP Enumeration"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 340,
        "question": "At Liberty Mutual’s cybersecurity operations center in Boston, network engineer Marcus is troubleshooting a critical issue during peak transaction hours. Multiple VLANs are experiencing intermittent access delays, and several endpoints including those on isolated VLANs are receiving network traffic not intended for them, raising concerns about data exposure. Marcus notices that the issue began after a newly imaged workstation, used by an intern named Lisa, was connected to a trunk port in the server room. Switch logs indicate abnormal traffic patterns overwhelming the network.\n\nWhich sniffing technique is Lisa’s workstation most likely using to cause this behavior?",
        "options": [
            "DNS Cache Poisoning",
            "ARP Poisoning",
            "MAC Flooding (Correct Answer)",
            "Switch Port Stealing"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 341,
        "question": "During a red team assessment at Alpine Manufacturing Corp., network security consultant Marcus Lee is instructed to evaluate the security of internal communications within their switched LAN environment. Without altering any switch configurations, Marcus manages to intercept credentials being transmitted between a payroll administrator’s workstation and the backend authentication server. His setup reroutes the communication path through his testing machine, though no proxy or VPN was involved. Analysis shows the redirection was achieved by injecting crafted messages that silently altered how the two hosts identified each other on the local network.\n\nWhich sniffing technique did Marcus most likely use?",
        "options": [
            "DNS Spoofing",
            "Switch Port Stealing",
            "ARP Spoofing (Correct Answer)",
            "MAC Flooding"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 342,
        "question": "During a scheduled security review in a high-tech lab in Austin, Texas, penetration tester Lucas Bennett was assessing a state government’s new payroll system hosted in a private cloud. One humid afternoon, while fuzz testing the input validation logic of the TaxCalcEngine.dll module, he triggered a buffer overflow by submitting malformed taxpayer ID strings. The crash led to unintended disclosure of payroll data due to unchecked data boundaries. Lucas traced the issue to a coding oversight in a core processing module. Applying a structured analysis approach, which category best describes the vulnerability he discovered?",
        "options": [
            "Application Flaws (Correct Answer)",
            "Poor Patch Management",
            "Misconfigurations/Weak Configuration",
            "Design Flaws"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 343,
        "question": "In the industrial heart of Detroit, Michigan, a steel plant’s production line halts under mysterious circumstances, prompting an urgent cybersecurity investigation. As Marcus Reed, an ethical hacker, you audit the system and notice the plant’s control process uses a feedback mechanism to continuously adjust operations based on output conditions. Your review reveals that this self-regulating behavior is central to the plant’s automation design. Based on your findings, which OT system concept is being employed?",
        "options": [
            "Distributed Control System (DCS)",
            "Open loop",
            "Manual loop",
            "Closed loop (Correct Answer)"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 344,
        "question": "During a network security audit at Jefferson National Bank in Richmond, Virginia, ethical hacker Thomas Reed is tasked with identifying vulnerabilities in employee login processes on VLAN 20, which connects client services workstations to the customer account database server. He sets up a Wireshark instance on a monitoring workstation configured in mirror mode behind a managed switch to capture traffic. His goal is to detect unencrypted authentication credentials transmitted over HTTP during login sessions. Which Wireshark feature should Thomas use to isolate and analyze these credentials in real time, and how does it assist him?",
        "options": [
            "Use the “Display Filtering by Protocol” to isolate HTTP traffic and view packet details",
            "Use the “Follow TCP Stream” to reconstruct and read HTTP session data (Correct Answer)",
            "Use the “Monitoring the Specific Ports” to generate a traffic summary and identify HTTP packets",
            "Use the “Filtering by IP Address” to set a filter for HTTP traffic before capturing"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 345,
        "question": "In Raleigh, North Carolina, ethical hacker Ethan Brooks is conducting a penetration test for Triangle FinTech, a rising financial startup. During his assessment, Ethan aims to bypass the company’s network security to access a restricted internal server. He crafts network packets to disguise his traffic as legitimate, forcing some TCP header information into subsequent packets to evade the firewall’s checks. His aim is to demonstrate how an attacker could slip past the security perimeter undetected, alerting the IT team to potential weaknesses.\n\nWhich technique is Ethan employing to bypass Triangle FinTech’s firewall during his penetration test?",
        "options": [
            "Source Routing",
            "Tiny Fragments (Correct Answer)",
            "HTTP Tunneling",
            "IP Address Spoofing"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 346,
        "question": "Noah, a security analyst at a Seattle-based healthcare provider, is responding to a real-time data breach where attackers accessed patient records stored on a compromised server. During incident response, he must quickly secure sensitive files located on the system’s primary storage to prevent further exfiltration. The data resides in a mounted partition that needs full-volume encryption, but standard file encryption isn’t sufficient. Noah selects a solution that supports encrypted containers, strong key lengths like 256-bit AES, and can conceal secure volumes within standard ones to reduce detection. His goal is to ensure confidentiality while forensic operations continue without disrupting system functionality.\n\nWhich disk encryption tool should Noah deploy to meet these objectives?",
        "options": [
            "BitLocker Drive Encryption",
            "FileVault",
            "Rohos Disk Encryption",
            "VeraCrypt (Correct Answer)"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 347,
        "question": "Liam, an ethical hacker at a Miami-based cryptocurrency exchange, is assessing the security of their blockchain network after a recent incident where users reported double-spending of digital assets. His investigation reveals that the attackers gained significant control over the network’s computational resources, allowing them to manipulate transaction validations. Liam notes that the blockchain is a public ledger, like Bitcoin, where anyone can access transaction data without permissions. During his analysis, he finds that the attackers likely controlled a dominant share of the network’s computing resources, enabling them to rewrite transaction history.\n\nWhich blockchain attack should Liam identify to strengthen the exchange’s defenses?",
        "options": [
            "51% Attack (Correct Answer)",
            "Eclipse Attack",
            "DeFi Sandwich Attack",
            "Finney Attack"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 348,
        "question": "In Miami, Florida, cybersecurity analyst Laura Bennett is responding to a series of unauthorized access attempts targeting Sunshine Credit Union’s online banking platform. She observes unusual network activity that suggests attackers may be intercepting session IDs transmitted over unsecured connections to hijack active user sessions. To prevent further compromise, Laura works with the network team to apply a control that secures session-related communications throughout the entire portal, ensuring sensitive tokens are no longer exposed to interception during user interactions.\n\nWhat countermeasure should Laura implement to prevent session hijacking in this scenario?",
        "options": [
            "Regenerate the session ID after a successful login",
            "Implement SSL to encrypt all information in transit via the network (Correct Answer)",
            "Use restrictive cache directives such as “Cache-Control: no-cache”",
            "Do not create sessions for unauthenticated users"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 349,
        "question": "You are working as a threat intelligence analyst for a fintech startup that recently discovered a spike in credential stuffing attempts against its admin panel. The security team believes this may be due to leaked internal files circulating on underground forums. You’re tasked with investigating potential exposure on the dark web without directly interacting with any service or forum.\n\nYou decide to use advanced search filters to identify documents hosted on hidden services that may contain sensitive access details. The team suspects these documents might include account-related keywords in their titles.\n\nWhich of the following search queries would best support this investigation?",
        "options": [
            "filetype:pdf intitle:”admin access” site:onion (Correct Answer)",
            "filetype:docx intitle:”login credentials”",
            "filetype:pdf intitle:”secure login” site:onion",
            "filetype:docx intitle:”user accounts” site:onion"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 350,
        "question": "During an internal red team engagement at a financial services firm, an ethical hacker named Anika tests persistence mechanisms after successfully gaining access to a junior employee’s workstation. As part of her assessment, she deploys a lightweight binary into a low-visibility system folder. To maintain long-term access, she configures it to launch automatically on every system reboot without requiring user interaction.\n\nWhich of the following techniques has most likely been used to ensure the persistence of the attacker’s payload?",
        "options": [
            "Installing a keylogger",
            "Creating scheduled tasks (Correct Answer)",
            "Modifying file attributes",
            "Injecting into the startup folder"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 351,
        "question": "Maya Patel from SecureHorizon Consulting is called to investigate a security breach at Dallas General Hospital in Dallas, Texas, where a lost employee smartphone was used to access sensitive patient records. During her analysis, Maya finds that the hospital’s mobile security policy failed to include a contingency to remotely secure compromised devices, allowing continued access to confidential data even after the device was lost. Based on this gap, which mobile security guideline should Maya recommend preventing similar incidents?",
        "options": [
            "Utilize a secure VPN connection while accessing public Wi-Fi networks",
            "Install device tracking software that allows the device to be located remotely",
            "Register devices with a remote locate and wipe facility (Correct Answer)",
            "Use anti-virus and data loss prevention (DLP) solutions"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 352,
        "question": "In Denver, Colorado, ethical hacker Rachel Nguyen is conducting a network security assessment for Apex Logistics, a transportation firm with a complex internal network. During her test, Rachel observes a client-server communication and injects specially crafted packets into the exchange, disrupting the client’s session. As a result, the server continues interacting with Rachel’s system while the legitimate client’s connection becomes unresponsive. She uses this setup in a controlled environment to demonstrate vulnerabilities to the company’s IT team.\n\nWhat network-level session hijacking technique is Rachel employing in this assessment?",
        "options": [
            "Blind hijacking",
            "UDP hijacking",
            "RST hijacking",
            "TCP/IP hijacking (Correct Answer)"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 353,
        "question": "You are an ethical hacker at Vanguard Cyber Defense, hired by Sunrise Logistics, a freight management company in Houston, Texas, to evaluate the security of their shipment tracking portal. During your engagement, you analyze how the application handles user-submitted data. You observe the behavior of the shipment search feature and monitor the HTTP GET requests being sent to the server. Your objective is to determine how user input is processed by the backend system and whether those parameters can be used to manipulate SQL queries. Based on this activity, which step of the SQL injection methodology are you performing?",
        "options": [
            "Advanced SQL Injection",
            "Launching SQL Injection Attacks",
            "Database Enumeration",
            "Identifying Data Entry Paths (Correct Answer)"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 354,
        "question": "While conducting a security review for a public healthcare data center, Jason, a senior penetration tester, is asked to gather system descriptions, contact details, and interface metrics from a set of legacy network devices running SNMPv2. These devices respond on UDP port 161 and use default community strings. Jason must retrieve this structured SNMP data in a format that can be fed into a reporting script without requiring GUI-based tools or raw packet captures.\n\nWhich of the following methods should Jason use?",
        "options": [
            "Use Nmap to identify SNMP ports and collect basic SNMP service banners",
            "Use SoftPerfect Network Scanner to scan for SNMP-enabled systems",
            "Use SnmpWalk to query and retrieve structured SNMP data from the devices (Correct Answer)",
            "Use Wireshark to inspect SNMP packets on the wire for useful fields"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 355,
        "question": "At Pinnacle Financial Services in Chicago, Illinois, ethical hacker Sarah Thompson is conducting a penetration test to evaluate the security of the company’s online banking portal. During her assessment, Sarah positions herself on the internal network and uses a sniffer to capture traffic between a user’s browser and the banking server. She quietly collects session data, including user IDs and authentication tokens, without interfering with the ongoing communication. Later, she plans to use this information to impersonate a legitimate user in a controlled test environment to demonstrate potential risks to the bank’s IT team.\n\nWhat type of session hijacking is Sarah performing during this phase of her penetration test?",
        "options": [
            "Session Fixation Attack",
            "Active Session Hijacking",
            "Man-in-the-browser Attack",
            "Passive Session Hijacking (Correct Answer)"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 356,
        "question": "You are Sofia Patel, an ethical hacker at Nexus Security Labs, hired to test the mobile device security of Bayview University in San Francisco, California. During your assessment, you are given an Android 11-based Samsung Galaxy Tab S6 with USB debugging disabled and OEM unlock restrictions in place. To simulate an attacker attempting to gain privileged access, you install a mobile application that exploits a system vulnerability to gain root access directly on the device – without requiring a PC. This allows you to bypass OS restrictions and retrieve sensitive research data. Based on this method, which Android rooting tool are you using?",
        "options": [
            "Magisk Manager",
            "One Click Root",
            "KingoRoot (Correct Answer)",
            "RootMaster"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 357,
        "question": "During a stealth penetration test for a multinational shipping company, ethical hacker Daniel Reyes gains local access to an engineering workstation and deploys a specialized payload that installs below the operating system. On subsequent reboots, the payload executes before any system-level drivers or services are active, giving Daniel covert control over the machine without triggering antivirus or endpoint detection tools. Weeks later, system administrators report suspicious network activity, but repeated forensic scans fail to locate any malicious processes or user-level traces.\n\nWhich type of rootkit did Daniel most likely use to maintain this level of stealth and persistence?",
        "options": [
            "Hypervisor Rootkit",
            "Firmware Rootkit",
            "Kernel-mode Rootkit",
            "Bootkit (Correct Answer)"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 358,
        "question": "Javier Ruiz from CyberFortress Solutions is tasked with auditing the mobile security practices of Apex Financial Services, a financial firm in Houston, Texas. During a covert penetration test, Javier targets employees’ personal smartphones used to access corporate financial systems. He exploits a vulnerability by installing a malicious app that bypasses access controls, granting him unauthorized entry to sensitive financial data because the devices lack a specific security measure to restrict app access. Based on this vulnerability, which BYOD security guideline is most likely missing in Apex Financial Services’ policy?",
        "options": [
            "Review permissions requested by apps before installing them",
            "Set passwords for apps to restrict others from accessing them (Correct Answer)",
            "Enforce automatic device locking or implement biometric authentication",
            "Use encryption mechanisms to store data"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 359,
        "question": "In Seattle, Washington, ethical hacker Mia Chen is hired by Pacific Trust Bank to test the security of their corporate network, which stores sensitive customer financial data. During her penetration test, Mia conducts a thorough reconnaissance, targeting a server that appears to host a critical database of transaction records. As she interacts with the server, she notices it responds promptly to her queries but occasionally returns error messages that seem inconsistent with a production system’s behavior, such as unexpected protocol responses. Suspicious that this server might be a decoy designed to monitor her actions, Mia applies a technique to detect inconsistencies that may reveal the system as a honeypot.\n\nWhich technique is Mia most likely using to determine if the server at Pacific Trust Bank is a honeypot?",
        "options": [
            "Analyzing Response Time",
            "Analyzing MAC Address",
            "Fingerprinting the Running Service (Correct Answer)",
            "Analyzing System Configuration and Metadata"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 360,
        "question": "In the bustling tech hub of Boston, Massachusetts, ethical hacker Zara Nguyen dives into the digital fortifications of CloudCrafter, a US-based platform hosting web applications for small businesses. Tasked with probing the application’s input processing, Zara submits specially crafted inputs to a server administration panel. Her tests uncover a severe vulnerability: the system performs unintended operations at the system level, enabling access to restricted server resources. Further scrutiny reveals the flaw lies in the application’s failure to sanitize user input passed to system-level execution, not in altering directory service queries, injecting newline characters, or targeting shell-specific environments. Dedicated to strengthening the platform, Zara drafts a precise report to guide CloudCrafter’s security team toward urgent fixes.\n\nWhich injection attack type is Zara most likely exploiting in CloudCrafter’s web application?",
        "options": [
            "Shell Injection",
            "CRLF Injection",
            "LDAP Injection",
            "Command Injection (Correct Answer)"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 361,
        "question": "On a busy Monday morning at Horizon Financial Services in Chicago, accounts assistant Clara Nguyen receives an email that appears to come from the company’s IT department. The email, addressed specifically to Clara and mentioning her role in the accounts team, warns of a critical system vulnerability requiring immediate action. It includes a link to a login page resembling the company’s internal portal, urging her to update her credentials to prevent account suspension. The email’s sender address looks legitimate, but Clara notices a slight misspelling in the domain name.\n\nWhat social engineering technique is being attempted against Clara?",
        "options": [
            "Spear Phishing (Correct Answer)",
            "Impersonation",
            "Quid Pro Quo",
            "Vishing"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 362,
        "question": "While simulating a reconnaissance phase against a cloud-hosted retail application, your team attempts to gather DNS records to map the infrastructure. You avoid brute-forcing subdomains and instead aim to collect specific details such as the domain’s mail server, authoritative name servers, and potential administrative information like serial number and refresh interval.\n\nGiven these goals, which DNS record type should you query to extract both administrative and technical metadata about the target zone?",
        "options": [
            "MX",
            "SOA (Correct Answer)",
            "TXT",
            "NS"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 363,
        "question": "As part of a quarterly security review at EvoTrans Logistics, a global freight optimization firm, you’ve been brought in as a senior cybersecurity analyst to audit perimeter firewall configurations across cloud-hosted application clusters. During your investigation, you notice that TCP port 1433 is open on a virtual machine tagged as svc-node-east-14, which was provisioned by a now-defunct third-party vendor. The node is not referenced in any current infrastructure diagrams, yet live traffic logs suggest it’s still handling requests during peak hours. No documentation exists regarding its service role, but you’re tasked with flagging misconfigurations that may violate policy or expose critical services unnecessarily. Based on your understanding of standardized port assignments, you must determine what service this port likely represents and whether its exposure warrants escalation.\n\nWhich of the following services is most likely running on this port and requires immediate review?",
        "options": [
            "sqlsrv",
            "sql*net",
            "ms-sql-s (Correct Answer)",
            "ms-sql-m"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 364,
        "question": "As part of an annual security awareness program at BrightPath Consulting in Denver, Colorado, the cybersecurity team conducts an ethical hacking experiment to test employee vigilance against physical social engineering threats. During a simulated attack, ethical hacker Liam Carter strategically places a USB drive labeled “Confidential 2025 Budget Plans” in the company’s parking lot, designed to look like it was accidentally dropped. The USB is programmed to install a harmless tracking script when plugged into a workstation, alerting the security team. Sarah, a project coordinator, finds the USB and considers plugging it into her office laptop to identify its owner.\n\nWhat social engineering technique is being tested in this experiment?",
        "options": [
            "Phishing",
            "Hoax",
            "Pretexting",
            "Baiting (Correct Answer)"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 365,
        "question": "During a security assessment in San Francisco, an ethical hacker is tasked with evaluating a network’s resilience against stealthy reconnaissance attempts. The hacker needs to employ a scanning technique that leverages TCP flags to evade detection by intrusion detection systems, relying on the target’s response behavior to infer port states without completing a full connection. Which approach best aligns with this strategy, ensuring minimal visibility during the assessment?",
        "options": [
            "TCP Connect Scan",
            "Network Scanning",
            "FIN Scan (Correct Answer)",
            "NULL Scan"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 366,
        "question": "Ethical hacker Ryan Brooks, a skilled penetration tester from Austin, Texas, was hired by Skyline Aeronautics, a leading aerospace firm in Denver, to conduct a security assessment. One sunny morning, Ryan noticed an unexpected lag in the routine system update process while running his tests, sparking his curiosity. During a late-night session, he observed a junior analyst, Chris Miller, cautiously modifying a legacy server’s configuration, including a scheduled task tied to a specific date. The lead developer, Jessica Hayes, casually mentioned receiving an odd email from an unfamiliar source, which she ignored as clutter. As Ryan probed deeper, he detected a faint increase in network activity only after the scheduled date passed, and a systems admin, Mark Thompson, quietly pointed out some unusual code traces on a dormant workstation.\n\nWhich type of threat best characterizes this attack?",
        "options": [
            "Logic Bomb (Correct Answer)",
            "Fileless Malware",
            "Advanced Persistent Threat (APT)",
            "Ransomware"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 367,
        "question": "In Portland, Oregon, ethical hacker Olivia Harper is hired by Cascade Biotech to test the security of their research network. During her penetration test, she simulates an attack by sending malicious packets to a server hosting sensitive genetic data. To evade detection, she needs to understand the monitoring system deployed near the network’s firewall, which analyzes incoming and outgoing traffic for suspicious patterns across the entire subnet. Olivia’s goal is to bypass this system to highlight vulnerabilities for the security team. Which security system is Olivia attempting to bypass during her penetration test of Cascade Biotech’s network?",
        "options": [
            "Network-Based Intrusion Detection System (Correct Answer)",
            "Host-Based Firewalls",
            "Network-Based Firewalls",
            "Host-Based Intrusion Detection System"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 368,
        "question": "You are leading an internal red team assessment for a multinational bank with a highly complex and distributed IT infrastructure. Your team is required to simulate attacks across cloud services, servers, and remote endpoints. Due to the sheer scale of the environment, you deploy an AI-based platform that automatically scans the entire network, flags anomalies based on prior breach data, and adjusts its threat detection models as new attack behaviors are encountered. What key benefit of AI-driven ethical hacking is most critical to your success in this scenario?",
        "options": [
            "Predictive analysis",
            "Simulation and testing",
            "Scalability (Correct Answer)",
            "Enhanced reporting"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 369,
        "question": "At Norwest Freight Services, a rotating audit team is asked to evaluate host exposure across multiple departments following a suspected misconfiguration incident. Simon, a junior analyst working from a trusted subnet, initiates a network-wide scan using the default configuration profile of his assessment tool. The tool completes quickly but returns only partial insights such as open service ports and version banners while deeper registry settings, user policies, and missing patches remain unreported. Midway through the report review, Simon notices that system login prompts were never triggered during scanning, and no credential failures were logged in the SIEM.\n\nWhich type of vulnerability scan BEST explains the behavior observed in Simon’s assessment?",
        "options": [
            "Unauthenticated Scanning (Correct Answer)",
            "Authenticated Scanning",
            "Internal Scan",
            "Credentialed Scanning"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 370,
        "question": "You are an ethical hacker at SecurePath Technologies, hired to conduct a penetration test for Horizon Financial, a U.S.-based credit union in Denver, Colorado. While testing their online banking portal, you enter a crafted input into the login form’s username field. The application unexpectedly returns a full list of customer account details, including names and account numbers, appended to the intended login response. The behavior suggests that your input was used to append a malicious query to the requested query, altering the original SQL statement to retrieve additional data beyond the expected result. Based on the observed behavior, which type of SQL injection attack are you exploiting?",
        "options": [
            "UNION SQL Injection (Correct Answer)",
            "Error-Based SQL Injection",
            "Second-Order SQL Injection",
            "Blind SQL Injection"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 371,
        "question": "You are conducting a security audit at a government agency. During your walkthrough, you observe a temporary contractor sitting in an open office area using their smartphone to discreetly record employees as they enter passwords into their systems. Upon further investigation, you find discarded documents in a nearby trash bin containing sensitive project information. What type of attack is most likely being performed?",
        "options": [
            "Close-in attack",
            "Insider attack",
            "Distribution attack",
            "Passive attack (Correct Answer)"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 372,
        "question": "During a red team operation for XYZ Financial Services, security analyst Lily Jensen is assigned to scan a critical subnet that is protected by an IDS. Her initial scan attempt is immediately flagged and blocked. To evade detection while continuing reconnaissance, she adjusts the scanning configuration to include multiple spoofed IP addresses alongside her own. This makes it difficult for network defenses to isolate her real scanning activity, while still allowing her to receive accurate results.\n\nWhich scanning technique is Lily using?",
        "options": [
            "SYN/FIN Scanning",
            "Source Routing",
            "IP Spoofing",
            "Decoy Scanning (Correct Answer)"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 373,
        "question": "Jake, a cybersecurity investigator at a Miami-based cryptocurrency exchange, uncovers a sinister plot during a late-night breach response. Attackers have infiltrated the company’s cloud environment, leveraging a technique to siphon computing power from misconfigured AWS instances. The breach, traced through compromised secrets and unauthorized API calls, has triggered a surge in resource consumption, threatening the platform’s integrity during a high-stakes trading surge. As Jake races against time to pinpoint the attack method, he must identify the primary cloud hacking technique at play.\n\nWhat cloud hacking technique should Jake identify as the primary method used by attackers to siphon computing power in the cloud environment?",
        "options": [
            "Cryptojacking (Correct Answer)",
            "Wrapping attack",
            "Enumerating S3 buckets",
            "Compromising secrets"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 374,
        "question": "Michael, an ethical hacker at a New York-based e-commerce company, is evaluating the security of their online payment system after a recent incident where fraudulent transactions went undetected. His investigation reveals that the system uses an asymmetric encryption algorithm to ensure the authenticity of payment confirmations. He finds that the algorithm employs a public-key cryptosystem, where the sender signs the transaction with a private key, and the recipient verifies it using a corresponding public key located in a directory. During his test, Michael intercepts a signed message and notices that the algorithm supports modular exponentiation for generating digital signatures, a process critical to verifying the identity of the signatory. He aims to assess if the algorithm’s configuration could be vulnerable to a meet-in-the-middle attack due to its key structure.\n\nWhich asymmetric encryption algorithm should Michael identify as the one used by the payment system?",
        "options": [
            "Diffie-Hellman",
            "RSA (Correct Answer)",
            "ElGamal",
            "DSA"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 375,
        "question": "During a red team engagement at Apex Biotech in Dallas, ethical hacker Rachel calls the company’s HR desk pretending to be Mark Stevens, a senior finance manager. She pressures the HR staffer by citing his “upcoming presentation for the CFO” and insists he urgently needs a copy of the updated employee benefits spreadsheet. The staffer feels compelled to help due to Rachel’s convincing manner and authoritative tone.\n\nWhich social engineering technique is Rachel demonstrating in this exercise?",
        "options": [
            "Vishing",
            "Quid Pro Quo",
            "Impersonation (Correct Answer)",
            "Reverse Social Engineering"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 376,
        "question": "During a penetration test at Pinnacle Bank in Chicago, ethical hacker Sarah injects crafted TCP packets into an active communication between a customer’s browser and the online banking server. The victim’s connection becomes unstable, allowing Sarah’s system to maintain communication with the server in place of the legitimate client. She later demonstrates to the IT team how attackers could forcibly take control of live sessions through this approach.\n\nWhich type of session hijacking is Sarah performing in this scenario?",
        "options": [
            "Passive Session Hijacking",
            "Blind Hijacking",
            "Active Session Hijacking (Correct Answer)",
            "Man-in-the-Browser Attack"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 377,
        "question": "During a penetration test at Horizon Tech in Austin, ethical hacker Michael sets up a man-in-the-middle attack to intercept traffic between employees and the company’s internal web applications. He uses a lightweight tool capable of performing ARP spoofing, DNS manipulation, and packet injection while providing an interactive interface for real-time monitoring. This allows him to capture and manipulate session tokens in transit, which he later presents to the security team as proof of risk.\n\nWhich tool is Michael most likely using in this exercise?",
        "options": [
            "Bettercap (Correct Answer)",
            "Hetty",
            "Caido",
            "Wireshark"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 378,
        "question": "During a red team engagement at a healthcare provider in Miami, ethical hacker Rachel suspects that a compromised workstation is running a sniffer in promiscuous mode. To confirm her suspicion, she sends specially crafted ICMP packets with a mismatched MAC address but a correct IP destination. Minutes later, the suspected machine responds to the probe even though ordinary systems would ignore it.\n\nWhich detection technique is Rachel most likely using to validate the presence of a sniffer?",
        "options": [
            "DNS Method",
            "Nmap sniffer-detect (NSE)",
            "Ping Method (Correct Answer)",
            "ARP Method"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 379,
        "question": "During a penetration test at a telecom provider in Denver, Colorado, Maria, a senior ethical hacker, notices that her scans are immediately flagged by intrusion detection systems. She modifies her technique, and as a result, the IDS devices are unable to reassemble the packets correctly, allowing her probes to slip through without detection. Which scanning evasion technique is Maria applying in this case?",
        "options": [
            "Source Routing",
            "IP Spoofing",
            "Packet Fragmentation (Correct Answer)",
            "Decoy Scanning"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 380,
        "question": "During a penetration test at a financial services company in Denver, ethical hacker Jason demonstrates how employees could be tricked by a rogue DHCP server. To help the client prevent such attacks in the future, Jason shows the administrators how to configure their Cisco switches to reject DHCP responses from untrusted ports. He explains that this global setting must be activated before more granular controls can be applied.\n\nWhich switch command should Jason recommend to implement this defense?",
        "options": [
            "Switch(config)# ip dhcp snooping (Correct Answer)",
            "Switch(config)# ip dhcp snooping vlan 10",
            "Switch(config-if)# ip dhcp snooping trust",
            "Switch(config)# ip arp inspection vlan 10"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 381,
        "question": "While auditing legacy network devices at a public hospital in Miami, Jason, a penetration tester, needs to verify what SNMP traffic is leaking across the internal segment. Instead of running structured queries, he decides to capture live network traffic and manually review the protocol fields. This method allows him to see SNMP requests and responses in transit but requires manual parsing of OIDs, community strings, and variable bindings.\n\nWhich method should Jason use in this situation?",
        "options": [
            "SoftPerfect Network Scanner",
            "Wireshark (Correct Answer)",
            "Nmap",
            "SnmpWalk"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 382,
        "question": "You are an ethical hacker at Northpoint Assessments, engaged to map the wireless footprint around Harborview Plaza in San Francisco, California. To enumerate nearby networks and prompt devices to reveal SSIDs and capabilities, you actively send crafted management frames from your laptop and log each AP’s immediate responses (including probe responses and capability information), rather than only listening for broadcasts. Based on the described activity, which Wi-Fi discovery technique are you performing?",
        "options": [
            "Network Discovery Software",
            "Wash Command",
            "Passive Footprinting",
            "Active Footprinting (Correct Answer)"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 383,
        "question": "During a post-exploitation phase on a compromised finance department workstation, ethical hacker Anika uses her Meterpreter session to extract sensitive credential data. After running a command, she receives a long list of alphanumeric strings representing LM and NTLM values. These outputs are later transferred to a cracking rig for offline password recovery, allowing the red team to simulate credential theft across multiple systems. Which Meterpreter command most likely produced these results?",
        "options": [
            "screenshot",
            "keyscan_start",
            "hashdump (Correct Answer)",
            "getsystem"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 384,
        "question": "You are an ethical hacker at HarborLine Assessments, engaged to audit the Wi-Fi at Portside Freight in Tacoma, Washington. During an overnight reconnaissance, you enable your wireless interface’s monitor mode and run a command that silently records beacon frames, probe responses and authentication frames from nearby APs and clients into a capture file for later offline analysis – you do not transmit any frames from your laptop. Based on the described activity, which Wi-Fi security auditing tool are you most likely using?",
        "options": [
            "Airbase-ng",
            "Aireplay-ng",
            "Airodump-ng (Correct Answer)",
            "Aircrack-ng"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 385,
        "question": "At a Miami-based cryptocurrency exchange, investigator Jake uncovers that attackers exploited exposed API keys to issue unauthorized cloud commands, leading to resource abuse and lateral movement inside the cloud environment. Which cloud hacking technique is most directly demonstrated in this incident?",
        "options": [
            "Cryptojacking",
            "Enumerating S3 buckets",
            "Compromising secrets (Correct Answer)",
            "Wrapping attack"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 386,
        "question": "During a penetration test at Rocky Mountain Insurance in Denver, ethical hacker Sophia Nguyen attempts to evade detection by fragmenting malicious traffic into smaller packets. The IT security team counters her strategy with a system that monitors traffic for deviations from established baselines, flagging behavior that does not match normal network activity. This allows them to stop Sophia’s evasion attempts in real time. Which detection technique is the IT team most likely using in this case?",
        "options": [
            "Deep Packet Inspection",
            "Stateful Packet Inspection",
            "Signature-Based Detection",
            "Anomaly-Based Detection (Correct Answer)"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 387,
        "question": "During a penetration test at a regional bank in Richmond, ethical hacker Thomas is tasked with identifying weaknesses in how employee credentials are transmitted. He sets up Wireshark on a mirrored port and captures HTTP login sessions from the customer services VLAN. To quickly reconstruct entire conversations between browsers and the server, Thomas uses a feature that reassembles packet data into a readable stream, allowing him to view usernames and passwords directly in plain text.\n\nWhich Wireshark feature is Thomas most likely using in this case?",
        "options": [
            "Follow TCP Stream (Correct Answer)",
            "Display Filtering by Protocol",
            "Filtering by IP Address",
            "Monitoring the Specific Ports"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 388,
        "question": "During a quarterly security audit at a financial services company in Charlotte, North Carolina, you are tasked with reviewing exposed services on legacy servers inherited from a third-party vendor. While scanning, you discover that TCP port 1434 is open on a database node that is not listed in the company’s active inventory. The IT team has no records explaining why this service is running, and you are asked to determine whether the exposure of this port could indicate an unnecessary database-related risk. Based on standardized port assignments, which service is most likely running on this port and requires further review?",
        "options": [
            "sql*net",
            "ms-sql-m",
            "ms-sql-s (Correct Answer)",
            "sqlsrv"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 389,
        "question": "During a quarterly vulnerability management review at RedCore Motors, Priya finalizes the deployment of Nessus Essentials across the company’s IT infrastructure. The solution is selected for its ability to support diverse technologies including operating systems, databases, web servers, and virtual environments. While preparing a training session for junior analysts, Priya asks them to identify a capability that Nessus Essentials is specifically designed to provide as part of its scanning process.",
        "options": [
            "High-speed asset discovery",
            "Agent-based detection",
            "Checks for outdated versions of over 1250 servers (Correct Answer)",
            "Patch management for operating systems and third-party applications"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 390,
        "question": "Noah Kim, an ethical hacker at Quantum Cyber Solutions in Austin, Texas, is assessing iPhones used for proprietary development. On one device, he demonstrates a technique that allows it to boot normally without a computer, but the elevated access is temporarily lost after restart until the user launches a special on-device app to reapply the modifications. Which jailbreaking method is this?",
        "options": [
            "Semi-untethered Jailbreaking (Correct Answer)",
            "Untethered Jailbreaking",
            "Semi-tethered Jailbreaking",
            "Tethered Jailbreaking"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 391,
        "question": "During a covert assessment at a logistics company in Dallas, penetration tester Emily delivers a disguised attachment to test employee awareness. When a staff member opens the file, normal content appears, but behind the scenes the attacker quietly gains full access to the workstation. Over the following week, Emily monitors emails, keystrokes, and local files without alerting the user, confirming long-term stealthy control of the machine.\n\nWhich type of malware is most likely responsible for this activity?",
        "options": [
            "Remote Access Trojan (RAT) (Correct Answer)",
            "Adware",
            "Botnet",
            "Spyware"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 392,
        "question": "Maya Patel from SecureHorizon Consulting is investigating a breach at Dallas General Hospital in Texas after a nurse misplaced a smartphone containing patient management software. Although the device remained active on the network, administrators had no way to identify its physical whereabouts, delaying incident response and allowing sensitive medical records to be exposed for hours. Which mobile security guideline would have most directly reduced the impact of this incident?",
        "options": [
            "Install device tracking software that allows the device to be located remotely",
            "Use anti-virus and data loss prevention (DLP) solutions",
            "Utilize a secure VPN connection while accessing public Wi-Fi networks",
            "Register devices with a remote locate and wipe facility (Correct Answer)"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 393,
        "question": "During a penetration test at Cascade Financial in Raleigh, ethical hacker Ethan Brooks evaluates the security of the company’s authentication system. He observes that the application accepts a high volume of repeated credential submissions without introducing any additional challenge, allowing automated scripts to cycle rapidly through large password lists. Ethan advises the IT team to deploy a control that forces interaction steps designed to disrupt automation.\n\nWhich countermeasure should the IT team adopt in this scenario?",
        "options": [
            "Use CAPTCHA challenges on login and registration pages (Correct Answer)",
            "Use strong hashing algorithms",
            "Force periodic password changes",
            "Implement 2FA/MFA"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 394,
        "question": "At Bayview University in San Francisco, California, ethical hacker Sofia Patel is evaluating security controls on Android 11 tablets used by staff. To simulate an attack, she installs KingoRoot.apk directly on one of the devices. The application leverages system vulnerabilities to elevate privileges without requiring a computer connection. Based on the module, which feature of this rooting approach makes the attack effective?",
        "options": [
            "It exploits Bluetooth pairing flaws to gain device-level privileges",
            "It uses a tethered jailbreak to restart the device with patched kernel functions",
            "It relies on weak SSL validation to bypass application controls",
            "It is an APK that can run directly on the device without a PC (Correct Answer)"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 395,
        "question": "You are Maya, a security engineer at HarborPoint Cloud Services in Chicago, Illinois, performing a post-incident hardening review after an internal audit flagged multiple services that rely on legacy public-key algorithms. The engineering team must prioritize actions company-wide to reduce long-term risk from future quantum-capable adversaries while development continues on a large refactor of several services. Which proactive control should Maya recommend as the highest-priority change to embed into the organization’s development lifecycle to improve future resistance to quantum-based attacks?",
        "options": [
            "Use quantum-specific firewalls to protect quantum communication channels",
            "Include quantum-resistance checks in SDLC and code review processes (Correct Answer)",
            "Break data into fragments and distribute it across multiple locations",
            "Encrypt stored data with quantum-resistant algorithms"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 396,
        "question": "During an external security review of a manufacturing firm in Detroit, Michigan, you’re asked to prioritize patch baselines for internet-facing servers without logging in or establishing full sessions. To achieve this, you analyze network-level responses and capture application output in order to determine the underlying system and its software release. Which technique best fits this objective?",
        "options": [
            "Service Version Discovery (Correct Answer)",
            "Vulnerability Scanning",
            "Port Scanning",
            "OS Discovery"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 397,
        "question": "A financial startup in Chicago hires an ethical hacker to evaluate its exposure on hidden networks. The client is particularly concerned that confidential administrative documents might be circulating on .onion sites. To remain passive, the hacker relies on advanced search filters to look for files with headers suggesting management-related content. Which of the following queries would best meet this objective?",
        "options": [
            "filetype:pdf intitle:”admin access” site:onion (Correct Answer)",
            "filetype:docx intitle:”user accounts” site:onion",
            "filetype:docx intitle:”login credentials”",
            "filetype:pdf intitle:”secure login” site:onion"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 398,
        "question": "You are a cybersecurity consultant at FortiSec, advising DesertTech Innovations in Phoenix, Arizona. The company wants to modernize its Wi-Fi so that even if an attacker obtains a captured handshake or a weak passphrase, they cannot perform offline dictionary attacks or recover session keys; management also wants stronger, per-session encryption and protection for IoT devices without relying on a single shared password.\n\nWhich wireless security measure should DesertTech implement to meet these goals?",
        "options": [
            "Disable TKIP",
            "Upgrade to WPA3 (Correct Answer)",
            "Use 802.1X Authentication",
            "MAC Address Filtering"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 399,
        "question": "You are Evelyn, an ethical hacker at LoneStar Health in Austin, Texas, engaged to investigate a recent compromise of archived patient records. During the investigation you recover a large set of encrypted records from a compromised backup and, separately, obtain several original template records (standard headers and form fields) that correspond to some entries in the encrypted set. You plan to use these paired examples (the original templates and their encrypted counterparts) to attempt to recover keys or deduce other plaintext values. Which cryptanalytic approach is most appropriate for this situation?",
        "options": [
            "Ciphertext-only attack",
            "Chosen-plaintext attack",
            "Chosen-ciphertext attack",
            "Known-plaintext attack (Correct Answer)"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 400,
        "question": "During a penetration test at a financial services firm in Boston, ethical hacker Daniel simulates a DDoS against the customer portal. To handle the surge, the IT team sets a rule that caps the number of requests a single user can make per second; aggressive connections are delayed or dropped while most legitimate customers continue to use the service. Which countermeasure strategy is the IT team primarily using?",
        "options": [
            "Shutting Down Services",
            "Rate Limiting (Correct Answer)",
            "Degrading Services",
            "Absorb the Attack"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    }
];
