const questionsBatch1 = [
    {
        "id": 1,
        "question": "You are a security analyst for a medium-sized e-commerce company. Recently, the company has been suffering from repeated incidents of session hijacking. To prevent future incidents, you’ve been asked to suggest a robust strategy to mitigate this disk.\n\nWhich of the following approaches would you recommend?",
        "options": [
            "Deploy a network-based intrusion prevention system (IPs) to detect and prevent session hijacking attempts in real-time.",
            "Apply an IPsec VPN solution that encrypts the entire IP packet, thereby making session hijacking attempts more difficult.",
            "Implement a new physical security policy to prevent unauthorized access to the company’s data centres.",
            "Implement a security awareness program to educate employees on the risks and signs of session hijacking."
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 2,
        "question": "As an IT professional, you are attending a webinar on cybersecurity. The presenter emphasizes the importance of ethical hacking and the different types of hackers involved in the cyber world. Suddenly, the term “script kiddie” is mentioned, piquing your curiosity.\n\nAccording to the presenter, who are “script kiddies” in the context of ethical hacking?",
        "options": [
            "They are highly skilled hackers who write their scripts to breach security systems.",
            "They are novices in the hacking world who mainly use scripts and codes developed by others.",
            "They are ethical hackers who use scripts to conduct penetration testing on their systems.",
            "They are hackers who specialize in scripting languages to launch sophisticated cyberattacks."
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 3,
        "question": "At XYZ Corporation, a multinational firm known for its digital services, the cybersecurity team is tasked with ensuring a robust, secure network environment. This responsibility includes maintaining a keen focus on vulnerability assessment and patch management strategies to guard against potential threats, including the increasingly prevalent zero-day attacks. Recent intelligence has alerted the team to a concerning issue: the primary web server software that the corporation relies on for its critical operations has been hit with a newly discovered zero-day vulnerability. Alarmingly, this vulnerability is not just theoretical; active exploitations of this vulnerability have been spotted in the wild, making the threat immediate and real. However, the vendor of the software, caught off guard by the discovery, has not yet released an official patch to mitigate this vulnerability.\n\nGiven these circumstances, what is the FIRST step that the cybersecurity team at XYZ Corporation should undertake to manage the significant risk posed by this unpatched zero-day vulnerability?",
        "options": [
            "Proactively shut down the web server completely until an official patch is released by the software vendor to fix the identified vulnerability.",
            "Maintain the course of normal operations but keep a close watch on the web server for any unusual activities or signs of a potential attack.",
            "Swiftly apply a virtual patch to the affected web server using a web application firewall to temporarily safeguard against potential exploits.",
            "Initiate a regimented protocol of regular backups of the web server data and ensure a thoroughly developed incident response plan is ready for deployment."
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 4,
        "question": "A cybersecurity team at a multinational company notices unusual network traffic on their Bluetooth devices. It is suspected to be a Bluesnarfing attack, aimed at accessing unauthorized information from Bluetooth-enabled devices.\n\nWhich of the following would be the most effective countermeasure to prevent further unauthorized access?",
        "options": [
            "Increase the complexity and length of the PIN codes on Bluetooth devices.",
            "Implement network-level encryption on all data transmission over Bluetooth.",
            "Disable “Discoverable Mode” and activate “Non-discoverable Mode” on all Bluetooth devices.",
            "Regularly update Bluetooth devices to the latest firmware versions."
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 5,
        "question": "As an Ethical Hacker, you’ve been asked to test an application’s vulnerability to SQL injection. In the process, you discover an entry field that appears susceptible. However, the backend database is unknown, and regular SQL injection techniques have so far failed to elicit useful information.\n\nWhich advanced SQL injection technique should you apply next?",
        "options": [
            "Time-Based Blind SQL Injection",
            "Union-Based SQL Injection",
            "Error-Based SQL Injection",
            "Content-Based Blind SQL Injection"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 6,
        "question": "A prominent healthcare organization relies on mobile platforms to access electronic health records (EHR and facilitate communication among healthcare professionals. Recently, the security team detected suspicious activities indicating potential vulnerabilities in the mobile platforms, raising concerns about unauthorized access to sensitive patient data and potential breaches of medical privacy laws. The team is tasked with identifying advanced hacking techniques targeting mobile platforms and implementing robust measures to enhance mobile security and protect patient confidentiality.\n\nGiven the scenario described, which sophisticated hacking technique, resembling a scenario-based attack, poses the greatest challenge for the security team to detect and mitigate effectively, potentially compromising the security of the healthcare organization’s mobile platforms?",
        "options": [
            "Bluejacking Exploiting Bluetooth Connections to Send Unsolicited Messages or Malicious Links to Nearby Mobile Devices, Potentially Compromising Device Security and Data Integrity",
            "Zero-Day Exploits Leveraging Previously Unknown Vulnerabilities in Mobile Operating Systems or Applications to Gain Unauthorized Access to Healthcare Data and Patient Records",
            "Side-Channel Attack Exploiting Physical Characteristics of Mobile Devices, such as Power Consumption or Electromagnetic Emissions, to Extract Sensitive Data, Such as Encryption Keys",
            "App Spoofing Impersonating Legitimate Healthcare Apps to Trick Users into Providing Sensitive Information, Such as Medical History or Insurance Details"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 7,
        "question": "During a red team exercise, an attacker dresses as a network technician and gains unchallenged access to a restricted area. Once inside, he roams freely, observing employees and reviewing sensitive documents left unattended.\n\nWhich of the following tactics best represents this scenario?",
        "options": [
            "Pretending to offer remote tech support over a call to obtain credentials.",
            "Gaining physical access by assuming the identity of a trusted internal staff.",
            "Collecting confidential information by digging through trash bins.",
            "Calling the help desk and claiming to be a high-ranking executive needing urgent access."
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 8,
        "question": "During an investigation, an ethical hacker discovered that a web application’s API has been compromised, leading to unauthorized access and data manipulation. They identified webhooks and a webshell being used by the attacker.\n\nTo prevent further exploits, which of the following actions should be taken?",
        "options": [
            "Perform regular code reviews for the webhooks and modify the API to block connections from unknown IP addresses.",
            "Harden the web server security, add multi-factor authentication for API users, and restrict the execution of scripts server-side.",
            "Implement a Web Application Firewall (WAF) with rules to block webshell traffic and increase the logging verbosity of webhooks.",
            "Implement input validation on all API endpoints, review webhook payloads, and schedule regular scanning for webshells."
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 9,
        "question": "You are a security analyst investigating a network compromise. The infected systems are receiving external instructions, masking the control traffic using widely allowed protocols like HTTP and DNS. The payloads are stealthy and modify system components without saving files to disk.\n\nWhat would be the most effective action to detect and disrupt this kind of malware communication?",
        "options": [
            "Focus on updating antivirus signatures regularly to catch known malware variants.",
            "Configure proxy servers to allow only encrypted traffic and block all plain HTTP requests.",
            "Use behavioral analytics to monitor for irregular outbound requests and abnormal application behavior.",
            "Implement port blocking for common malware-associated ports like 6667 and 12345."
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 10,
        "question": "While performing a vulnerability assessment for XYZ Corporation, you discover that several key systems are regularly interacting with unidentified external entities. These interactions often involve data transfers, both incoming and outgoing. While some of these might be legitimate, the nature and volume of this unmonitored traffic raise concerns about potential data exfiltration or malware introduction.\n\nGiven the ambiguous nature of these interactions and the high stakes involved, which strategy would most directly identify and mitigate the vulnerabilities associated with these unsanctioned exchanges?",
        "options": [
            "Prioritize a behavioral analytics solution that profiles normal system behaviors and alerts on deviations, focusing on the interaction patterns of the identified systems.",
            "Institute a company-wide training session on the dangers of unsolicited communications, hoping to curtail inadvertent employee engagements with external entities.",
            "Implement an aggressive zero-trust model across the board, cutting off all external interactions until each can be individually vetted and validated.",
            "Initiate a deep-dive forensic analysis on the systems involved, looking for signs of past breaches, malware, or unauthorized data manipulations."
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 11,
        "question": "As a security expert for a prominent tech company, you’ve noticed an increasing number of attacks on your web services. You’ve concluded that the best course of action is to enhance your patch management strategies.\n\nConsidering the information presented, which of the following strategies would be most effective in ensuring the secure and efficient management of patches and hotfixes?",
        "options": [
            "Only applying patches and hotfixes that are distributed outside the customer organization to avoid vendor-specific vulnerabilities.",
            "Implementing an automatic patch management process and using a patch management tool to monitor the patched systems.",
            "Manual installation of patches and hotfixes on the live server directly from the vendors’ websites.",
            "Downloading and applying all patches and hotfixes, regardless of the source, to cover all possible vulnerabilities."
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 12,
        "question": "A Certified Ethical Hacker (CEH is investigating a recent attack on a company’s web server. The server hosts multiple domains and uses a web proxy to maintain anonymity and prevent IP blocking. The CEH discovers that the server’s document root directory, which stores critical HTML files, is named “certroot” and is stored in the directory /admin/web. The server root, which stores the server’s configuration, error, executable, and log files, is also identified. The CEH also notes that the server uses a virtual document tree for additional storage. The server was compromised via a DNS server hijacking attack where the attacker redirected all requests coming towards the target web server to their own malicious server.\n\nGiven this scenario which of the following actions would most likely prevent such an attack in the future?",
        "options": [
            "Implementing an open-source web server architecture such as LAMP",
            "Regularly updating and patching the server software",
            "Changing the server’s IP address regularly",
            "Implementing DNSSEC on the DNS server"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 13,
        "question": "During a cybersecurity operation, a CEH professional discovered an unknown Bluetooth Low Energy (BLE device actively transmitting pairing signals. The professional decided to breach the BLE device using a crackle. The device was seen pairing and exchanging keys, leading to the establishment of a secure connection. However, the professional only managed to capture LL_ENC_REQ and LL_ENC_RSP packets, but not the Long-Term Key (LTK.\n\nWhich of the following best describes the professional’s next course of action?",
        "options": [
            "Use Btlejacking to hijack the connection.",
            "Decrypt the pcap data using the -o option.",
            "Use the BlueZ tool hcitool inq to reveal more information about the device.",
            "The operation cannot continue without the LTK."
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 14,
        "question": "A multinational corporation provides its employees with mobile devices to support remote work and enhance productivity. Recently, the security team detected suspicious activities indicating potential vulnerabilities in the mobile platforms, raising concerns about unauthorized access and data leakage. The team is tasked with identifying advanced hacking techniques targeting mobile platforms and implementing robust measures to enhance mobile security and prevent intrusions.\n\nGiven the scenario described, which sophisticated hacking technique, resembling a scenario-based attack, poses the greatest challenge for the security team to detect and mitigate effectively, potentially compromising the security of the multinational corporation’s mobile platforms?",
        "options": [
            "Man-in-the-Middle (MitM) Attack Interfering with Communication between Mobile Devices and Corporate Servers to Intercept Sensitive Data, such as Corporate Emails and Documents",
            "Clickjacking Attack Embedding Malicious Links or Buttons in Legitimate Apps to Trick Users into Performing Unintended Actions, such as Providing Credentials or Authorizing Transactions",
            "Remote Access Trojan (RAT) Implanting Malicious Software on Mobile Devices to Gain Unauthorized Remote Access and Monitor User Activities, such as Keystrokes and Screen Capture",
            "Jailbreaking/Rooting Exploiting Vulnerabilities to Remove Software Restrictions on Mobile Devices, Allowing Installation of Unauthorized Apps and Access to Restricted Functions"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 15,
        "question": "In a recent penetration testing assignment, you were able to breach a servers web service and install a backdoor. Your aim is to maintain access for as long as possible without getting detected.\n\nConsidering the web server countermeasures explained earlier, which of the following actions would make your backdoor most likely to remain undetected?",
        "options": [
            "Placing the backdoor in a file type that is typically excluded from resource maps.",
            "Install the backdoor on a non-web file referenced in a URL.",
            "Embedding the backdoor in a regularly updated web file.",
            "Increasing the size of the backdoor’s code to avoid signature-based detection."
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 16,
        "question": "During a cybersecurity training session at your organization, you present several hypothetical scenarios to the trainees to assess their understanding of social engineering threats.\n\nWhich of these scenarios best describes a social engineering attack?",
        "options": [
            "Mary, an IT executive, uses a packet sniffer to monitor network traffic for unusual activity.",
            "Alex, a system administrator, inadvertently introduces malware into the network while updating the operating system on all company computers.",
            "Sarah, a new recruit, receives a call from someone claiming to be from the IT department, who asks for her login credentials to solve a non-existing issue.",
            "John, an employee, leaves his computer unlocked while going for lunch, and a stranger takes this opportunity to access sensitive data."
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 17,
        "question": "As a cybersecurity professional in a growing organization, you are tasked with conducting comprehensive reconnaissance of your own company’s digital presence. In addition to using tools like WHOIS, DNS analysis, and search engines, you are also considering investigating the Deep Web.\n\nWhich of the following justifications best supports your idea to explore the Deep Web for potential risks related to your organization’s information?",
        "options": [
            "The Deep Web is a hub for hackers and can help you understand the latest hacking techniques.",
            "Exploring the Deep Web can help you identify the physical location of potential attackers.",
            "The Deep Web contains a lot of user-generated content which could reveal insider threats.",
            "Search engines don’t index the Deep Web, and there could be non-indexed company information lying there."
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 18,
        "question": "During an internal security audit, the cybersecurity team at a large healthcare organization detects abnormal patterns in DNS resolution behavior on the corporate internal network. Several employees report that when they attempt to visit legitimate internal and external websites, they are redirected to login pages that appear slightly altered. Upon deeper inspection, security logs reveal that DNS responses are being returned from an internal IP address that is not an authorized DNS server. These rogue responses are consistently faster than the legitimate replies from the corporate DNS server. Around the same time, network monitoring tools register a sharp spike in ARP spoofing alerts originating from a specific subnet. The organization becomes concerned that sensitive login credentials and personal health data may have been intercepted by an insider.\n\nGiven this scenario, what type of sniffing-based attack is most likely being executed?",
        "options": [
            "Proxy-based DNS redirection over remote tunnels",
            "DNS cache poisoning from an upstream DNS resolver",
            "Intranet DNS poisoning via local spoofed responses",
            "Internet DNS spoofing via altered primary DNS settings"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 19,
        "question": "The web application security team of a global firm detected a sophisticated injection attack that exploited a flaw in the application’s input validation. The attack was carried out using a custom script that used obfuscation and evasion techniques to bypass security measures. To counter such attacks in the future, the security team is considering implementing additional security measures.\n\nWhich of the following would be the most effective?",
        "options": [
            "Deploy a Web Application Firewall (WAF) with built-in evasion detection features.",
            "Enforce Two-Factor Authentication (2FA) for all user-level application access.",
            "Implement continuous security code review and penetration testing.",
            "Configure Security Information and Event Management (SIEM) to monitor user activity in real time."
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 20,
        "question": "As the newly appointed head of IT security at a growing startup, you have been tasked with improving the company’s security posture. Given the rise in social engineering attacks, you decide to set up training sessions for employees to help them identify these threats. During a session, you ask the team to identify the type of social engineering attack where an attacker impersonates a co-worker or an authority figure to extract confidential information.\n\nWhich option correctly identifies this type of attack?",
        "options": [
            "Baiting",
            "Phishing",
            "Quid pro quo",
            "Pretexting"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 21,
        "question": "A multinational company is planning to integrate an IoT-based environmental control system for its manufacturing units worldwide. They engage a cybersecurity team to ensure that the new system remains secure from any potential threats. The cybersecurity team is tasked with identifying the most likely method an advanced persistent threat (APT group might use to compromise the new IoT-based environmental control system.\n\nWhat is the most plausible attack vector?",
        "options": [
            "The APT group will exploit zero-day vulnerabilities present in the IoT device firmware.",
            "The APT group will perform an encryption-based Man-in-the-Middle attack between the IoT devices and the control server.",
            "The APT group will execute a DDoS attack to overload the network and gain control over the IoT devices.",
            "The APT group will infiltrate the network using compromised user credentials."
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 22,
        "question": "As a newly appointed ethical hacker for XYZ Corporation, you have been assigned your first major task. The company has been facing persistent cyber threats and as a precautionary measure, you are tasked to conduct a thorough network vulnerability assessment. Your key objective is to efficiently map out all open ports and associated services in the organization’s expansive network. Simultaneously, it’s of paramount importance that your activities remain stealthy and do not trigger the advanced intrusion detection systems (IDS employed by the organization.\n\nGiven these requirements, which scanning technique would you opt for to achieve your task with maximum efficacy and discretion?",
        "options": [
            "Stealth Scan (SYN Sean)",
            "ACK Scan",
            "FIN Scan",
            "TCP Connect Scan"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 23,
        "question": "A cybersecurity firm has deployed a comprehensive defense system, including Intrusion Detection Systems (IDS), firewalls, and honeypots, to protect its network from malicious activities. Despite these measures, the security team has noticed suspicious traffic patterns indicating potential attempts to evade detection and breach the network perimeter. The team is tasked with identifying advanced evasion techniques and strengthening the defense mechanisms to mitigate emerging threats effectively.\n\nGiven the scenario described, which sophisticated evasion technique, resembling a scenario-based attack, poses the greatest challenge for the security team to detect and mitigate effectively, potentially compromising the integrity of the cybersecurity firm’s network?",
        "options": [
            "Protocol-Level Evasion Techniques Fragmenting Packets to Evade Stateful Inspection by Firewalls",
            "Polymorphic Malware Variants Generating Unique Payloads to Bypass Signature-Based Detection by IDS",
            "Honeypot Spoofing Attacks Mimicking Legitimate Network Services to Avoid Detection by Intrusion Detection Systems",
            "Covert Channel Communication Exploiting Unused IP Header Fields to Conceal Malicious Traffic and Evade Detection by Security Devices"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 24,
        "question": "As a cybersecurity analyst working for a multinational corporation, you are tasked with the responsibility of conducting routine vulnerability scans. This time around, you decided to use a different strategy and opted to employ a FIN scan, which is a type of stealth scanning technique. Upon conclusion of your scan, you notice an interesting anomaly – a significant number of ports did not respond to your FIN packets. With this unexpected result, you are now faced with the challenge of correctly interpreting the findings and planning the next course of action.\n\nBased on your understanding of FIN scanning and TCP/IP protocols, how should you interpret these findings?",
        "options": [
            "Conclude that these ports are closed since they did not respond to the FIN packets.",
            "Consider the possibility of firewall blocking the FIN packets and investigate further.",
            "Interpret this as a sign of network congestion and prioritize network optimization.",
            "Immediately escalate this issue to management as it indicates a potential ongoing breach."
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 25,
        "question": "As a cybersecurity professional conducting a network vulnerability assessment for your organization, you discover a potentially critical vulnerability. This vulnerability arises from an outdated software component installed on a critical production server used by the financial department. The software vendor has acknowledged this vulnerability and promptly released a patch to fix it. However, the application of the patch has been deferred due to the department’s operational needs, as they cannot tolerate downtime during business hours, which would significantly impact their productivity. The situation poses a significant risk due to the potential for exploitation until the patch is applied.\n\nWith these constraints in mind, as a Certified Ethical Hacker, what immediate action could you undertake to reduce the risk associated with this vulnerability without disrupting department operations?",
        "options": [
            "Implement a strategy of Virtual Patching, providing a protective layer around the vulnerability until the actual patch can be applied.",
            "Initiate a full-scale penetration test on the vulnerable server to evaluate the true potential impact of the vulnerability.",
            "Continually monitor network traffic to and from the server to detect any attempts at exploiting the identified vulnerability.",
            "Insist that the financial department cease all operations and use of the server until the patch has been applied."
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 26,
        "question": "A red team simulation reveals a malware strain that adapts its behavior based on observed user activity and evades detection by altering its code dynamically. The malware exfiltrates data only when the system is idle and uses encrypted channels for communication.\n\nBased on these traits, what is the most probable nature of this malware?",
        "options": [
            "AI-powered malware using machine learning to tailor its execution.",
            "Polymorphic virus that changes its signature during replication.",
            "A worm that exploits known OS vulnerabilities to propagate.",
            "Rootkit that hides files and processes from detection."
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 27,
        "question": "As a cybersecurity consultant, you have been hired by a multinational corporation to identify potential security risks in their network. During the enumeration phase, you utilize LDAP to gather information about the network infrastructure. However, you observe that some critical information isn’t retrievable.\n\nWhat could be the primary reason for this?",
        "options": [
            "The LDAP service is running on a non-standard port.",
            "The hosts are located in a different subnet.",
            "The company network is currently experiencing heavy traffic, leading to dropped requests.",
            "The LDAP directory data is protected by Access Control Lists (ACLs)."
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 28,
        "question": "A logistics company recently found that some of its fleet vehicles equipped with smart locking systems were compromised, leading to vehicle thefts. The cybersecurity team suspects that attackers captured unique signals emitted by the key fobs during regular usage.\n\nTo effectively confirm and prevent this attack in the future, what should the security team prioritize?",
        "options": [
            "Implement a secure firmware update on each vehicle’s onboard control system.",
            "Increase physical surveillance around vehicle parking areas.",
            "Deploy anti-malware systems on all company smartphones associated with vehicles.",
            "Monitor wireless signals for abnormal jamming or interference."
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 29,
        "question": "You are currently serving as a cybersecurity analyst at a global banking corporation. Your team has recently identified a series of irregular incidents that indicate a potential backdoor attack on the company’s intricate network system. Some of these irregularities include a significant rise in outbound network traffic during non-working hours, unexpected and unaccounted system reboots, and strangely modified system files. Your primary focus now is to detect any hidden backdoor in the system, neutralize it, and ensure the overall integrity of the systems involved, while preventing any further security breaches.\n\nGiven the complexity of the situation and the importance of maintaining the bank’s network security, what combination of measures would be most effective in accurately identifying the potential backdoor, neutralizing it, and ensuring the system’s security?",
        "options": [
            "Implement strict access control lists (ACLs), ensure regular updates of security patches, and conduct an extensive audit of user accounts and privileges periodically.",
            "Implement stringent password policies, enforce multi-factor authentication (MFA) for all users, and conduct regular vulnerability assessments of the system.",
            "Perform detailed monitoring of system and file activity, incorporate anomaly detection techniques in the security framework, and utilize advanced anti-malware tools for comprehensive system scans.",
            "Review the firewall logs regularly, perform a thorough analysis of network traffic during non-working hours, and carry out an immediate system shutdown and reboot."
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 30,
        "question": "A cybersecurity team is assessing an organization’s network for misconfigurations. During the enumeration process, they use a tool that sends a request to UDP port 161 and receives a large list of software names installed on remote devices. The operation is successful due to the use of a publicly known community string.\n\nWhat enabled this enumeration technique to work so effectively?",
        "options": [
            "The SNMP agent was misconfigured to log trap messages in plain text.",
            "The SNMP agent allowed anonymous bulk data queries due to default settings.",
            "The SNMP manager had access to encrypted Windows registry keys remotely.",
            "The organization was using unencrypted FTP services to store software data."
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 31,
        "question": "While conducting a thorough reconnaissance operation on a potential threat actor’s digital footprint, an ethical hacker working for a cybersecurity firm stumbled upon an interesting discovery. The threat actor appeared to have left a series of digital breadcrumbs across various internet forums and hidden web pages, pointing to a potential future attack strategy. The ethical hacker, wanting to gather as much information as possible about the actor’s potential strategy without tipping them off, has to make careful tool and technique choices.\n\nWhich of the following approaches should the ethical hacker most likely avoid to maintain a low profile and avoid alerting the threat actor?",
        "options": [
            "Utilizing internet archive services like the Wayback Machine to inspect any past versions of the threat actor’s web pages for additional clues.",
            "Directly interacting with the threat actor on the forums using a pseudonym to gain more information about their plans.",
            "Using the Tor browser to anonymously browse and investigate the hidden web pages without leaving a trace.",
            "Employing WHOIS and DNS lookup tools to gain information about the ownership and IP addresses associated with the internet forums."
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 32,
        "question": "A cybersecurity analyst working for a multinational corporation is tasked with performing regular surveillance of their competitors’ digital presence to identify any changes that could indicate strategic shifts or potential threats. To stay updated on their competitors’ web content updates, the analyst has devised a plan to use several tools and techniques to achieve his objective efficiently. However, there is a key component in his strategy that he overlooked.\n\nWhich of the following is the most crucial aspect he should add to ensure the effective implementation of his surveillance strategy?",
        "options": [
            "Engage in discussions on the competitors’ blogs and forums to obtain inside information about their operations.",
            "Use a VPN service when visiting the competitors’ websites to obscure his own IP address.",
            "Set up Google Alerts to receive email notifications whenever new web content includes their competitors’ names or other key terms.",
            "Hire a third-party service to hack into the competitors’ databases and gather confidential data."
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 33,
        "question": "A security analyst working for a large financial corporation has been assigned to conduct a comprehensive penetration test on the corporation’s wireless infrastructure. The infrastructure relies on a secured WPA2-PSK-secured network to ensure data protection. During the course of the examination, the analyst discerned a significant vulnerability within the network that could potentially be exploited.\n\nWhich of the subsequent options most accurately delineates the procedure that the analyst might have employed to pinpoint this particular vulnerability?",
        "options": [
            "The analyst instigated a de-authentication attack, purposely causing a mass disconnection of all clients from the access point. The analyst then attentively observed the four-way handshake process that occurred during the clients’ reconnection attempts.",
            "The analyst conducted a rogue access point attack, cunningly emulating the characteristics of the legitimate access point to deceive clients into unintentionally connecting to a malicious network.",
            "The analyst implemented a jamming attack, deliberately interfering with the wireless network’s communication functionality, forcing the access point to inadvertently reveal the pre-shared key.",
            "The analyst initiated a man-in-the-middle attack, surreptitiously intercepting and modifying the communication between the client and the access point, effectively purloining the pre-shared key."
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 34,
        "question": "As a cybersecurity analyst at a renowned software corporation, you’ve noticed some peculiar activity. The company’s internal network has seen a sudden increase in redundant network traffic and system crashes. Initial scans have found that most affected systems run a particular version of the operating system, and the identified malicious code seems to be self-replicating and spreading across the network autonomously.\n\nConsidering the following malware types, which would you identify as the probable cause of this anomalous behavior? Furthermore, how would you prioritize your response to counteract this malware threat and alleviate the system disruptions?",
        "options": [
            "Trojan: Initiate a thorough network scan with updated anti-malware tools, isolate the affected systems, and patch all the systems with the latest updates.",
            "Ransomware: Advise users to disconnect their systems from the network, back up vital data, and utilize a reputable decryption tool to regain access.",
            "Worm: Quarantine the affected systems, perform an immediate network-wide sweep with the latest antivirus definitions, and update the operating system on all network systems.",
            "Rootkit: Recommend a system reboot in safe mode, followed by deployment of an advanced rootkit scanner and subsequent patching of the systems."
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 35,
        "question": "You are a cybersecurity analyst at a financial institution. Your company has a strict policy against any unencrypted protocols. You’ve noticed some data packets being sent via HTTP rather than HTTPS on the network. This raises your concern because HTTP is a protocol that sends data in plaintext. To further investigate this matter, you decide to use a sniffing tool.\n\nWhich of the following would be the most appropriate choice?",
        "options": [
            "Netcat",
            "Wireshark",
            "Nmap",
            "Nessus"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 36,
        "question": "As part of a security audit, your team evaluates a system flagged by your automated scanner. The tool outputs a vector string with a numerical range of 9.8, indicating a critical severity. However, the client is unsure about the real-world implications of this score. You are tasked with explaining what this score conveys and how it was derived.\n\nWhich of the following best explains the purpose and benefit of this type of rating in prioritizing remediation efforts?",
        "options": [
            "It provides a qualitative baseline that supports public exploit classification based on behavior.",
            "It simplifies attack replication by generating matching exploit payloads from live memory dumps.",
            "It quantifies technical impact and ease of exploitation, guiding structured risk response based on impact and environment.",
            "It measures authentication errors in binary protocols to align patching with service configuration."
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 37,
        "question": "A red team operator is conducting reconnaissance on a financial organization’s infrastructure. While probing UDP port 123, they send NTP queries and receive a list of internal IP addresses and connected hostnames. The organization is unaware that sensitive network details are exposed externally.\n\nWhat is the most likely reason for this information disclosure?",
        "options": [
            "The DNS resolver for the organization has been poisoned to leak internal names.",
            "The NTP daemon is configured to accept queries from external sources without restriction.",
            "The firewall is rerouting NTP traffic to a honeypot that simulates internal hosts.",
            "The NTP service is using TCP fallback, allowing enumeration through TCP 443."
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 38,
        "question": "In a healthcare organization, the network security team detects unusual network activity, indicating advanced sniffing techniques used by a potential attacker. Upon investigation, it’s found that the attacker exploits vulnerabilities in medical imaging protocols to intercept patient data. The security team must identify the specific sniffing technique being used and take action to protect patient privacy.\n\nConsidering the scenario, which sophisticated sniffing technique poses the greatest challenge for the security team, potentially compromising patient data security?",
        "options": [
            "Injecting malicious code into ultrasound machine software to capture patient records.",
            "Creating a covert channel within hospital administrative messages for data exfiltration.",
            "Manipulating radiology report formats to embed patient data within CT scan images.",
            "Exploiting MRI machine firmware vulnerabilities to intercept real-time patient scans."
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 39,
        "question": "A penetration tester intercepts HTTP requests between a user and a vulnerable web server. The tester observes that the session ID is embedded in the URL, and the web application does not regenerate the session upon login.\n\nWhich session hijacking technique is most likely to succeed in this scenario?",
        "options": [
            "Session fixation by pre-setting the token in a URL.",
            "DNS cache poisoning to redirect users to fake sites.",
            "Injecting JavaScript to steal session cookies via cross-site scripting.",
            "Cross-site request forgery exploiting user trust in websites."
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 40,
        "question": "As a Certified Ethical Hacker, you have been contracted by a leading technology company to test the vulnerabilities in its web application. The application integrates various third-party services and employs multiple APIs. During your advanced testing, you discover a particularly robust Web API that is designed to work with several webhooks. Additionally, you find that the server has a web shell planted for legitimate administrative tasks. Your objective is to exploit vulnerabilities related to the Web API, webhooks, and web shell.\n\nWhat technique would best allow you to compromise the system effectively while leaving minimal traces?",
        "options": [
            "Exploit the web shell by uploading malicious scripts disguised as routine administrative tasks.",
            "Manipulate the webhook to trigger an unintended data transfer between the application and third-party services.",
            "Execute Insecure Direct Object Reference (IDOR) on the Web API to access unauthorized resources.",
            "Utilize SSRF (Server-Side Request Forgery) to make unauthorized API calls from the server itself."
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 41,
        "question": "Following an attack on its mobile infrastructure, an e-commerce company is reconsidering its mobile security strategies. In an event where an attacker has been able to gain partial root access to the mobile application, which of these tactics will offer the most effective barrier to additional exploitation?",
        "options": [
            "Conducting regular vulnerability assessments and penetration testing on the mobile application.",
            "Leveraging secure coding practices and automated code review processes in the development stage.",
            "Implementation of certificate pinning to protect against Man-In-The-Middle (MITM) attacks.",
            "Implementing a mobile application management solution to control access rights and user permissions."
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 42,
        "question": "A cybersecurity analyst notices that a large number of plaintext-ciphertext pairs were used in an attempted attack against a block cipher. The attacker applied statistical analysis to XOR combinations of specific plaintext and ciphertext bits.\n\nWhich technique is the attacker likely using?",
        "options": [
            "Analyzing grouped input differences in cipher output",
            "Trying every possible key combination",
            "Deriving linear patterns from cipher behavior",
            "Exploiting physical leaks during encryption"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 43,
        "question": "During a routine security audit at a large financial services organization, the IT team detects severe network latency and recurring bandwidth exhaustion across its corporate WAN links. Upon deeper investigation, they discover that several employee workstations and IoT-connected devices are unknowingly transmitting enormous volumes of traffic to numerous external IP addresses. These devices, all exhibiting similar traffic patterns and command-response behaviors, are found to be under the control of a remote botnet operator. The incident raises serious concerns about insider-originated denial-of-service activity that is also affecting external entities.\n\nWhich type of denial-of-service attack best describes the organization’s current situation?",
        "options": [
            "An attack where botnets directly send large volumes of traffic to the target without spoofing intermediary services.",
            "An attack where compromised internal devices participate in a botnet and flood external targets with traffic.",
            "An attack that relies on spoofed IP addresses to trick external servers into flooding the victim.",
            "An attack that originates internally and amplifies traffic through spoofed DNS responses to target systems."
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 44,
        "question": "As a recent graduate, you’ve landed your first job as a junior cybersecurity analyst for a local company. Your team leader is explaining the different types of hackers and their motivations. He mentions the term “hacktivist”.\n\nAccording to the information you recall from your CEH v12 study material, which of the following best describes a hacktivist?",
        "options": [
            "A hacker who is hired by an organization to deliberately seek out and fix security vulnerabilities in their systems.",
            "A hacker who uses their skills to promote a political agenda or a social cause, often by launching attacks against systems to draw attention to their cause.",
            "A hacker who is not associated with any organization and hacks systems out of curiosity or to gain knowledge.",
            "A hacker who is primarily motivated by financial gain and often engages in illegal activities such as identity theft."
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 45,
        "question": "As a certified ethical hacker, you have been tasked to exploit a security vulnerability on an Android device that uses the latest version of the OS. You found that there’s an unpatched weakness in the handling of user permissions in the device, but the device has a fully updated anti-virus application installed.\n\nWhat would be the most effective approach to exploit this vulnerability without being detected by the anti-virus application?",
        "options": [
            "Use an SMS phishing method to trick the user into granting unwanted permissions.",
            "Use a rootkit to gain control over the device and manipulate its software.",
            "Deploy a payload using well-known exploit frameworks like Metasploit.",
            "Develop a custom exploit code that uses obfuscation techniques to avoid detection."
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 46,
        "question": "As a Certified Ethical Hacker, you have been approached by a leading international corporation to assess and enhance their cloud-based security framework. The corporation recently transitioned to a serverless computing architecture for its e-commerce application and experienced significant improvements in scalability and cost efficiency. However, they fell victim to an intricate attack where an unauthorized user manipulated their cloud service’s function-as-a-service (FaaS component to execute malicious commands. Your investigation revealed that the attack originated from an insecure third-party API used within one of the serverless functions.\n\nGiven the attack’s complexity, what would be your recommended countermeasure for strengthening the security posture?",
        "options": [
            "Using a cloud access security broker (CASB) to enforce security policies for third-party cloud services.",
            "Deploying a cloud-native security platform (CNSP) that provides comprehensive protection across all cloud resources.",
            "Regularly update the serverless functions to patch vulnerabilities and reduce the attack surface.",
            "Implementing a function-level permission model and enforcing the principle of least privilege."
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 47,
        "question": "As a cybersecurity analyst, you were assigned the task of analyzing the traffic patterns of your company’s network. You started noticing irregularities that suggested a potential scanning attempt. The attacker appears to be quite sophisticated, operating slowly and meticulously, making it a challenge to detect or trace.\n\nGiven the stealthiness of this approach, which of the following scenarios best describes the scanning technique the attacker might be using?",
        "options": [
            "The attacker is sending FIN packets, assuming that the target system will respond differently to these packets depending on the state of the ports.",
            "The attacker is directly establishing a TCP connection with every port on the system to identify open ones, risking immediate detection.",
            "The attacker is sending packets with all flags set, hoping that closed ports will respond differently than open ones.",
            "The attacker is utilizing a ‘zombie’ machine to transmit the scan, thus making the true source of the scan difficult to determine."
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 48,
        "question": "You work as a network security officer for a large corporation. Recently, you’ve noticed that certain confidential files are being accessed by unauthorized users within the network. You suspect that a Man-in-the- Middle (MitM attack is being carried out.\n\nWhich of the following network activities would help you confirm this?",
        "options": [
            "A sudden increase in network traffic.",
            "Multiple login attempts from the same IP address.",
            "Detection of abnormal amounts of DNS requests.",
            "IP addresses being resolved to multiple MAC addresses."
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 49,
        "question": "A leading online retailer has been experiencing a series of security incidents involving unauthorized access to customer accounts and fraudulent transactions. Upon investigation, it is suspected that attackers are employing sophisticated session-hijacking techniques to compromise user sessions and carry out illicit activities. The security team is tasked with implementing robust measures to prevent further breaches and protect customer trust.\n\nGiven the scenario described, which advanced session hijacking technique, resembling a scenario-based attack, poses the greatest challenge for the security team to detect and mitigate effectively, potentially compromising the security of online transactions on the retailer’s website?",
        "options": [
            "Clickjacking Attack Embedding Malicious Iframes to Trick Users into Performing Unintended Actions on the Retailer’s Website",
            "Credential Stuffing Attack Using Stolen Credentials to Hijack Active User Sessions and Perform Fraudulent Activities",
            "Cross-Site Request Forgery (CSRF) Attack Manipulating User Requests to Initiate Unauthorized Transactions",
            "Session Replay Attack Capturing and Replaying Encrypted Session Tokens to Gain Unauthorized Access"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 50,
        "question": "As a cybersecurity analyst for a leading multinational company, you have unearthed evidence suggesting a breach. Analysis indicates that sophisticated steganography techniques are in play, allowing the hacker to exfiltrate data by cleverly embedding it within image files.\n\nConfronted with the deceptive nature of steganography and its potential implications, which course of action offers the best chance to detect and counteract this clandestine threat?",
        "options": [
            "Implement a robust firewall to intercept all outgoing network traffic from your servers, aiming to disrupt any data exfiltration attempts.",
            "Roll out an Intrusion Prevention System (IPS) geared towards identifying and neutralizing further unauthorized server activities.",
            "Engage a specialized steganalysis tool to scrutinize questionable files, decode the obscured data, and reveal the hacker’s exfiltration methodology.",
            "Leverage a network traffic analyzer, keenly observing the nuances of outbound traffic for any irregularities suggestive of data exfiltration."
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 51,
        "question": "As a newly appointed cybersecurity analyst in a financial firm, you are tasked with performing network scanning to maintain the organization’s network security posture. You decide to conduct a SYN scan, sometimes referred to as half-open scanning, using a popular tool like Nmap.\n\nIf you initiate a SYN scan against a target IP address and receive a SYN/ACK packet in response, how would you interpret this result?",
        "options": [
            "The target IP address is not reachable, as the receipt of a SYN/ACK packet is a common response to an unsuccessful attempt to connect.",
            "The scanned port on the target IP address is filtered, as the receipt of a SYN/ACK packet indicates that a firewall or filtering device is intercepting and responding to the scan.",
            "The scanned port on the target IP address is open, as the receipt of a SYN/ACK packet indicates that the port is prepared to establish a connection.",
            "The scanned port on the target IP address is closed, as the receipt of a SYN/ACK packet indicates that the port has acknowledged but not accepted the connection."
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 52,
        "question": "You have been hired by a government agency to evaluate Android smartphones’ resistance against covert surveillance. During your assessment, you want to demonstrate whether attackers could eavesdrop on sensitive conversations conducted through the loudspeaker without special permissions by exploiting built-in smartphone sensors.\n\nWhich specific attack technique should you implement to effectively demonstrate this privacy risk?",
        "options": [
            "Tap ‘n Ghost attack leveraging NFC and touchscreen vulnerabilities.",
            "Man-in-the-disk (MITD) attack by manipulating application updates.",
            "Spearphone attack exploiting accelerometer-based vulnerabilities.",
            "Malicious APK installation and exploitation through Metasploit Framework."
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 53,
        "question": "You are a new IT intern at a local tech company. The company has a strong focus on cybersecurity and regularly hires ethical hackers to maintain its security posture. You come across the term ‘black box testing’ in a company document. Uncertain about its meaning, you decide to ask your supervisor. She explains that it refers to a type of testing in cybersecurity.\n\nIn the context of ethical hacking, what is ‘black box testing’?",
        "options": [
            "It involves the ethical hacker trying to break into a system without any prior knowledge about the system.",
            "It refers to testing in which the ethical hacker has full knowledge of the system under test.",
            "It refers to testing where the ethical hacker only knows the system’s inputs and outputs.",
            "It involves the ethical hacker testing the system using only publicly available information."
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 54,
        "question": "An ethical hacker is auditing a hospital’s wireless network, which is currently secured with WPA encryption using TKIP. The hacker successfully demonstrates packet-injection and decryption attacks on the network.\n\nWhich vulnerability in WPA most likely allowed these attacks to succeed?",
        "options": [
            "Lack of AES-based encryption.",
            "Predictable group temporal key (GTK).",
            "Use of weak Initialization Vectors (IV).",
            "Dependence on weak passwords."
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 55,
        "question": "As a security analyst, you’re investigating an incident where an attacker was able to gain access to your network. Upon initial examination of the log files, you noticed a large number of TCP SYN packets sent to various ports on the network but with no corresponding ACKs.\n\nWhat type of scanning technique do you think the attacker may have used?",
        "options": [
            "The attacker has used a SYN/ACK scan to trick the firewall into allowing the packets to pass through.",
            "The attacker has used an XMAS scan to determine the open and closed ports on the network.",
            "The attacker has used a TCP Connect scan to establish a full TCP connection with the target.",
            "The attacker has used a SYN scan, also known as half-open scanning, which involves sending SYN packets and waiting for SYN/ACK responses."
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 56,
        "question": "An organization uses SHA-256 for data integrity checks but is still experiencing unauthorized data modification.\n\nWhich cryptographic tool can help resolve this issue?",
        "options": [
            "Asymmetric encryption",
            "Symmetric encryption",
            "Digital signatures",
            "SSL/TLS certificates"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 57,
        "question": "In a comprehensive penetration testing scenario, you are charged with the task of gaining detailed insights into a target organization’s network configuration, structure, and security posture. To accomplish this task, you plan to employ a multitude of reconnaissance techniques, including an in-depth DNS interrogation. DNS interrogation can reveal various pieces of information that are invaluable to a penetration tester. However, there are certain limitations to the kind of data you can obtain directly through this method.\n\nConsidering these restrictions, which among the following pieces of information CANNOT be directly obtained from an extensive DNS interrogation?",
        "options": [
            "The estimated geographical location of the organization’s servers derived from their IP addresses.",
            "The specific usernames and passwords used by the organization’s employees.",
            "The IP addresses associated with the organization’s multiple mail servers.",
            "The subdomains that are linked with the organization’s primary internet domain."
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 58,
        "question": "A corporation has transitioned to a public cloud service. The security team found a critical flaw in the API of the cloud service provider.\n\nWhat is the potential threat they are most likely to face?",
        "options": [
            "DDoS attack on cloud servers",
            "Compromise of encrypted data at rest",
            "Unauthorized access to cloud resources",
            "Vulnerability to physical security breaches"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 59,
        "question": "As a cybersecurity analyst at XYZ Corp., you’re examining system logs and notice an array of activities that suggest the presence of an elusive rootkit. Given the stealthy nature of rootkits, their detection and eradication are pivotal to maintaining system security and preventing data compromise. Assessing the system, you find the rootkit has been embedded deeply within the operating system kernel.\n\nIn this critical situation, which strategy should you follow to remediate the rootkit effectively while minimizing potential damage?",
        "options": [
            "Take the extreme measure of initiating a complete system format, followed by reinstalling the operating system from a trusted source.",
            "Immediately opt for the radical approach, which includes powering down the system and disconnecting it from the network, to cease the rootkit’s activities.",
            "Employ a systematic, multi-layered strategy, starting with the deployment of a specialized rootkit detection tool to verify the presence and type of rootkit, followed by an appropriately tailored removal procedure, specific to the identified rootkit.",
            "Implement a proactive defensive strategy by running a variety of high-interaction honeypots on the network, aiming to lure the attacker and reveal their tactics."
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 60,
        "question": "A red team operator is assessing the resilience of a corporate network’s authentication infrastructure. They input valid usernames with specifically structured guesses based on prior intel about naming conventions, such as birthdates or favorite sports teams. The guesses are tailored and automated with logic-based iterations.\n\nWhich technique best describes this targeted approach?",
        "options": [
            "Strategic pattern-based input using known logic.",
            "Combining fragments from two lists without rules.",
            "Exhaustive character testing without context.",
            "Watching users type their keys in public places."
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 61,
        "question": "An attacker performs DNS cache snooping using the dig command with the +norecurse flag against a known DNS server. The server returns NOERROR but provides no answer to the query.\n\nWhat does this most likely suggest?",
        "options": [
            "No client from the DNS server’s network has recently accessed the domain.",
            "The queried domain has expired and no longer exists.",
            "The DNS server failed to resolve the request.",
            "The requested record was found in the cache and returned."
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 62,
        "question": "In her role as a cybersecurity analyst for an established technology firm, Maria is assigned a crucial task. She’s instructed to perform a thorough passive reconnaissance of a major competitor’s online environment to understand their digital strategies better. The challenge, however, is to gather as much relevant information as she can without directly interacting with the competitor’s systems or alerting them to her activities, to avoid any potential legal implications.\n\nGiven these constraints and the sensitive nature of her assignment, which of the following tools or methods would be least appropriate and potentially risky for Maria to employ in her task?",
        "options": [
            "Running an intensive port scan against the competitor’s public IP addresses to gain information on their internal network and server structure.",
            "Leveraging the Wayback Machine to delve into the past and view archived versions of the competitor’s website to study their evolution over time.",
            "Meticulously examining patent databases and public records for any technology or innovation recently patented by the competitor to predict their future moves.",
            "Exploring online forums, bulletin boards, and social media discussions to gather insights on the competitor’s products, customer feedback, and potential business strategies."
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 63,
        "question": "During a red team exercise, a certified ethical hacker (CEH is working on exploiting a potential vulnerability in the target’s web server. The CEH has completed the information gathering and footprinting stages and mirrored the website for offline analysis. They have also discovered the server is prone to session hijacking.\n\nWhich next step is most likely to be part of a successful attack methodology, keeping in mind the requirement to minimize the possibility of detection?",
        "options": [
            "Perform vulnerability scanning with automated tools to find additional weaknesses.",
            "Hijack a session and immediately modify server configuration files.",
            "Attempt SQL Injection to extract database information.",
            "Directly apply brute force attack to crack the server’s password."
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 64,
        "question": "A globally-operating bank recently encountered a severe security breach within its Android OS-based mobile banking application. Cybercriminals managed to exploit the bank’s Mobile Device Management (MDM system and successfully carried out a series of remote commands, creating significant havoc. Upon thorough investigation of this incident, it emerged that the attackers might have leveraged the Android Debug Bridge (ADB as a conduit for unauthorized access.\n\nAs a Certified Ethical Hacker tasked with developing countermeasures to this issue, which action would you consider the most potent response in this situation?",
        "options": [
            "Recommending frequent and consistent updates to the MDM system to stay abreast of the most recent security patches and improvements.",
            "Promoting the adoption of more robust personal identification methodologies, including, but not limited to, biometric systems.",
            "Establishing and enforcing a rigorous policy that unequivocally mandates the disabling of ADB, except when absolutely necessary and only within strictly regulated environments.",
            "Instigating the configuration of a Virtual Private Network (VPN) to secure all transactions and activities conducted via the mobile banking platform."
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 65,
        "question": "As a cybersecurity consultant, you are helping a small startup strengthen its information security awareness. During an internal audit, an employee reports finding a USB drive labeled “Employee Salary Info 2024” in the company parking lot. Curious, they plugged it into their office computer, after which the system began behaving erratically.\n\nWhat kind of social engineering attack does this scenario represent?",
        "options": [
            "Impersonating a senior staff member to extract login credentials.",
            "Tempting the victim to engage with a malicious device using curiosity.",
            "Using a discarded document to retrieve sensitive corporate information.",
            "Attempt to bypass physical security by closely following an authorized employee."
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 66,
        "question": "A major financial institution is experiencing persistent Denial-of-Service (DoS attacks targeting its online banking services, causing significant disruption to customer transactions and eroding trust in the institution. The security team is under immense pressure to identify and mitigate the sophisticated tactics employed by the attackers to ensure uninterrupted access to banking services. Considering the scenario described, which sophisticated Denial-of-Service (DoS technique, resembling a scenario-based attack, poses the greatest challenge for the security team to detect and mitigate effectively, potentially jeopardizing the availability of online banking services?",
        "options": [
            "A synchronized Layer 3 Smurf attack targeting the institution's internet-facing routers, flooding their interfaces with ICMP echo requests to exhaust bandwidth and disrupt network connectivity.",
            "A coordinated UDP flood attack exploiting vulnerabilities in the institution’s DNS infrastructure, flooding authoritative DNS servers to disrupt domain resolution services.",
            "A distributed SQL injection attack targeting the institution’s online banking database servers, causing resource exhaustion and database downtime.",
            "A zero-day exploit targeting the institution’s web server software, causing buffer overflow and service unavailability through remote code execution."
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 67,
        "question": "At DEF Corporation, as you dive deeper into the vulnerability analysis of their multi-tiered web applications, you observe an anomaly. Some encrypted user session tokens appear to be much longer than others, hinting at possible variable encryption strength based on user roles. This inconsistency could expose certain user sessions, especially those with elevated privileges, to cryptographic attacks.\n\nGiven the intricate nature of the system and the potential implications of a breach, what would be the most appropriate step to mitigate this specific vulnerability?",
        "options": [
            "Implement uniform encryption strength across all user roles, eliminating disparities in session token lengths.",
            "Rotate encryption keys frequently, ensuring that old keys become obsolete rapidly.",
            "Integrate a centralized logging mechanism to detect and alert on any irregular access patterns based on session tokens.",
            "Adopt Multi-Factor Authentication (MFA) for users with elevated privileges to strengthen access control."
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 68,
        "question": "You are conducting a vulnerability assessment in a segmented internal network. When scanning a set of IPs using the nbtscan tool, you discover multiple devices responding with NetBIOS names, but only one of them has the entry in its response.\n\nWhat does this indicate about that specific host?",
        "options": [
            "It is the domain master browser or Primary Domain Controller (PDC).",
            "It is a rogue DHCP server impersonating a legitimate host.",
            "It has disabled NetBIOS over TCP/IP, resulting in limited response.",
            "It is the local system from which the scan is being run."
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 69,
        "question": "A global media streaming platform is experiencing periodic traffic surges every 10 minutes, severely degrading performance and leading to widespread buffering issues. Traffic analysis reveals intermittent spikes exceeding 300 Gbps, followed by quiet intervals. The security team suspects the attacker is using a technique designed to disrupt services without maintaining a continuous flood.\n\nWhat type of DDoS attack best explains this scenario?",
        "options": [
            "A recursive HTTP GET flood mimicking user page views.",
            "A Pulse Wave attack leveraging high-volume short bursts to overwhelm network resources.",
            "A permanent DoS (PDoS) attack damaging backend hardware components.",
            "A UDP flood-sustained attack targeting random high-numbered ports."
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 70,
        "question": "You are a cybersecurity trainer and are planning a course on ethical hacking for some newcomers in your organization. While creating the content, you recall from the CEH vl2 study material that there are different types of penetration tests.\n\nWhich of the following best describes a black box penetration test?",
        "options": [
            "The tester has some knowledge of the system to be tested, such as user IDs and passwords.",
            "The tester has no prior knowledge of the system to be tested.",
            "The tester is given a copy of the system to test so that the actual system remains unaffected.",
            "The tester has complete knowledge of the system to be tested."
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 71,
        "question": "You are a Certified Ethical Hacker hired by a financial institution to assess the robustness of its web application security. In your penetration testing, you are particularly focused on exploiting vulnerabilities related to session management mechanisms. The web application uses multi-factor authentication, encrypted cookies, and has well-configured web application firewalls. During your assessment, you identify several possibilities to compromise session management.\n\nWhich of the following techniques would most effectively exploit a session management vulnerability while bypassing the application’s sophisticated security measures?",
        "options": [
            "Conduct Session Sidejacking by intercepting and using valid session tokens.",
            "Exploit insecure deserialization vulnerabilities in the session management code to achieve arbitrary code execution.",
            "Execute a Cross-Site Request Forgery (CSRF) attack by tricking authenticated users into executing malicious actions.",
            "Utilize Session Fixation to manipulate a user into utilizing a session ID that an attacker already has access to."
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 72,
        "question": "You’ve recently been hired as a cybersecurity intern for a growing tech startup. During your onboarding, the company’s chief information security officer (CISO explains the various types of hackers you need to be aware of as part of your role. The term “script kiddie” comes up during this discussion.\n\nBased on your CEH v12 study material, which of the following descriptions best defines a script kiddie?",
        "options": [
            "A hacker who writes their own complex scripts and exploits them to carry out attacks.",
            "A hacker who uses pre-existing scripts and tools to carry out attacks without fully understanding how they work.",
            "A young hacker who is still learning the basics of ethical hacking and cybersecurity.",
            "A hacker who only targets systems that use JavaScript and similar scripting languages."
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 73,
        "question": "A future-focused security audit discusses risks where attackers collect encrypted data now, anticipating that they can decrypt it later with quantum computers.\n\nWhat is this threat known as?",
        "options": [
            "Breaking RSA using quantum algorithms",
            "Saving data today for future quantum decryption",
            "Replaying intercepted quantum messages",
            "Flipping qubit values to corrupt the output"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 74,
        "question": "Your role as a cybersecurity analyst at XYZ Corporation requires you to perform a thorough security assessment of the company’s online presence. You initiate the process with a passive reconnaissance phase, trying to gather as much information as possible without interacting directly with the target system.\n\nWhich of the following techniques or tools is least likely to assist you in this endeavor?",
        "options": [
            "Using a tool like Nmap to scan the company’s public IP range.",
            "Inspecting the WHOIS database for domain registration details.",
            "Utilizing search engines and associated services (Google, Bing, Google Earth, etc.).",
            "Monitoring public posts and profiles on social media platforms and professional networking sites."
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 75,
        "question": "You are tasked with assessing wireless network security for a corporation using WPA2 encryption. During the assessment, you identify vulnerabilities that could allow attackers to intercept and replay previously captured packets.\n\nWhich WPA2 vulnerability is likely being exploited?",
        "options": [
            "Hole196 vulnerability due to shared GTK.",
            "Insecure WPS PIN recovery method.",
            "KRACK vulnerabilities through key reinstallation.",
            "Weak random number generator (RNG) affecting GTK."
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 76,
        "question": "During a cloud security assessment, your team discovered that a former employee still had access to critical resources despite leaving the organization months ago.\n\nWhich of the following practices could have most effectively prevented this issue?",
        "options": [
            "Using multi-cloud deployment models",
            "Enforcing timely user de-provisioning",
            "Conducting regular penetration tests",
            "Implementing real-time traffic analysis"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 77,
        "question": "Working as an Information Security Analyst at a technology firm, you’ve been asked to design training material for employees about the potential dangers of session hijacking. As part of the training, you want to explain how attackers could use side jacking to compromise their accounts.\n\nWhich of the following scenarios would most accurately describe a side jacking attack?",
        "options": [
            "An attacker convinces an employee to visit a malicious site, which then injects a harmful script into their browser.",
            "An attacker exploits a vulnerability in the company’s network firewall to gain unauthorized access to internal systems.",
            "An attacker intercepts network traffic, captures unencrypted session cookies, and uses these to impersonate the user.",
            "An attacker uses social engineering techniques to trick an employee into revealing their password."
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 78,
        "question": "As a senior cybersecurity professional at a multinational bank, you are investigating an incident where multiple systems have been infected with malware. On the affected systems, the malware remains dormant until a specific action triggers its malicious activity. The malware has also shown signs of being able to avoid detection by changing its code or encryption each time it infects a new.\n\nBased on these characteristics, which type of malware is likely causing this problem, and what is the best method to mitigate its impact?",
        "options": [
            "Adware: Use a reputable anti-adware tool to detect and remove the adware, and instruct employees not to click on suspicious advertisements.",
            "Polymorphic Malware: Employ advanced threat detection tools that use behavior-based detection techniques and ensure all systems are patched.",
            "Rootkit: Use an anti-rootkit tool for detection and removal, and ensure all systems are patched with the latest security updates.",
            "Worm: Isolate the infected systems, and scan the entire network using up-to-date anti-virus software."
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 79,
        "question": "An attacker examines differences in ciphertext outputs resulting from small changes in the input to deduce key patterns in a symmetric algorithm.\n\nWhat method is being employed?",
        "options": [
            "Timing attack to infer key bits based on processing time",
            "Chosen-ciphertext attack to decrypt arbitrary ciphertexts",
            "Differential cryptanalysis on input-output differences",
            "Brute-force attack to try every possible key"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 80,
        "question": "You’re a security analyst conducting a foot printing exercise for a new client to uncover as much information as possible without direct interaction. Your preliminary investigation using search engines and public databases has provided a significant amount of data about the organization's online presence. You are now considering using Google Hacking techniques to find further vulnerabilities.\n\nWhich of the following could best justify this decision?",
        "options": [
            "Google Hacking can assist in mapping out the client’s internal network structure.",
            "Google Hacking can help identify weaknesses in the client’s website code.",
            "Google Hacking can help locate potential phishing sites that mimic the client’s website.",
            "Google Hacking can help discover hidden organizational data from the Deep Web."
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 81,
        "question": "A senior executive receives a personalized email with a subject line that reads “Annual Performance Review 2024”. The email contains a downloadable PDF that installs a backdoor when opened. The email appears to come from the CEO and includes company branding.\n\nWhich phishing method does this best illustrate?",
        "options": [
            "Pharming using DNS poisoning",
            "Email clone attack with altered attachments",
            "Broad phishing sent to all employees",
            "Whaling attack aimed at high-ranking personnel"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 82,
        "question": "You’re an IT security analyst at a fast-growing fintech startup. Recently, you’ve noticed an uptick in network traffic anomalies. You decide to perform a more thorough network scan using the ICMP Echo Request method. During the scan, you notice that a certain set of IPs in your network are not returning any Echo Reply, but other network functionalities seem to be operating normally.\n\nHow would you interpret this situation?",
        "options": [
            "The non-responsive IPs indicate severe network congestion that needs immediate addressing.",
            "The firewall or another security control is probably blocking the ICMP Echo Requests.",
            "The lack of an Echo Reply is a clear sign of a major breach in progress.",
            "The scanned IPs are likely unused and can be considered for future expansion."
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 83,
        "question": "In a highly secure online banking environment, customers have reported unauthorized access to their accounts despite robust authentication measures in place. Upon investigation, it is discovered that attackers are employing sophisticated session hijacking techniques to compromise user sessions and conduct fraudulent transactions. The security team is tasked with implementing effective countermeasures to prevent further unauthorized access and protect customer accounts.\n\nConsidering the scenario described, which advanced session-hijacking technique, resembling a scenario-based attack, poses the greatest challenge for the security team to detect and mitigate effectively, potentially compromising the security of online banking transactions?",
        "options": [
            "Passive Sniffing Attack Capturing Encrypted Session Tokens on Unsecured Wi-Fi Networks",
            "Session Fixation Attack Manipulating Session Identifiers in HTTP Cookies",
            "Man-in-the-Browser (MitB) Attack Installing Malicious Browser Extensions to Intercept User Sessions",
            "Covert Cross-Site Scripting (XSS) Attack Injecting Malicious Code into Online Banking Web Pages"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 84,
        "question": "A multinational corporation relies heavily on remote access for its employees to connect to internal systems and resources. Recently, there have been reports of unauthorized access to sensitive company data, leading to concerns about potential session hijacking attacks. The security team is tasked with identifying the specific techniques used by attackers and implementing measures to enhance session security.\n\nConsidering the scenario described, which advanced session hijacking technique, resembling a scenario-based attack, poses the greatest challenge for the security team to detect and mitigate effectively, potentially compromising the confidentiality of corporate data?",
        "options": [
            "Brute-Force Session Guessing Exploiting Weak Session ID Generation Algorithms",
            "ARP Spoofing Attack Redirecting Traffic to Capture Session Data on Local Networks",
            "Cookie Poisoning Attack Manipulating Session Cookies to Impersonate Authorized Users",
            "Session Sidejacking Intercepting Unencrypted Session Tokens over Public Wi-Fi Networks"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 85,
        "question": "After a recent breach, your team discovers that attackers used modified versions of legitimate system utilities and a Windows service to persist undetected for weeks, accessing internal credentials.\n\nWhat key step can be taken to better protect against similar future threats?",
        "options": [
            "Ensure all systems run the latest antivirus and firewall software.",
            "Conduct weekly backups and store them off-site.",
            "Monitor file hashes of sensitive executables for unauthorized changes.",
            "Disable unused ports and limit outbound traffic via firewall rules."
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 86,
        "question": "A tester evaluates a login form that constructs SQL queries using unsanitized user input. By submitting ‘ OR ‘1’=’1’;--, the tester gains unauthorized access to the application.\n\nWhat type of SQL injection has occurred?",
        "options": [
            "Tautology-based SQL injection",
            "Union-based SQL injection",
            "Error-based SQL injection",
            "Time-based blind SQL injection"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 87,
        "question": "A system analyst wants to implement an encryption solution that allows safe key distribution.\n\nWhich encryption method should the analyst consider?",
        "options": [
            "Asymmetric encryption",
            "Hash functions",
            "Disk encryption",
            "Symmetric encryption"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 88,
        "question": "In your role as a cybersecurity analyst at a large e-commerce company, you have been tasked with reinforcing the firm’s defenses against potential Denial-of-Service (DoS attacks. During a recent review, you noticed several IP addresses generating excessive traffic, causing an unnaturally high load on the server. An inspection of these packets revealed that the TCP three-way handshake was never completed, leaving multiple connections in a SYN_RECEIVED state. The intent appears to be the saturation of server resources without any genuine intent to establish a full connection.\n\nGiven these details, what type of DoS attack is most likely being executed against the company’s servers?",
        "options": [
            "Smurf Attack: In this type of attack, a perpetrator uses a network’s broadcast addressing to amplify the ICMP echo-request packets. However, this doesn't align with the incomplete TCP handshakes noted.",
            "SYN Flood: This attack floods a target with SYN requests in an attempt to consume enough server resources to make the system unresponsive, aligning with the high volume of incomplete TCP handshakes.",
            "UDP Flood: This attack overwhelms random ports on a remote host with IP packets containing UDP datagrams, but this doesn't explain the high volume of incomplete TCP handshakes observed.",
            "Ping of Death: This attack sends malformed or oversized ping packets to crash, freeze, or reboot the targeted system, which isn't consistent with the incomplete TCP handshake observed."
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 89,
        "question": "A city’s power management utilizes SCADA systems to oversee operations. Recently, the infrastructure has shown unexplained anomalies such as inconsistent sensor values and intermittent outages. Security experts suspect a side-channel attack aiming to discreetly extract sensitive information from SCADA devices.\n\nWhich investigative technique would best confirm if attackers employed this specific side-channel method?",
        "options": [
            "Measure unusual fluctuations during device operations at the hardware level.",
            "Review SCADA user interfaces for signs of unauthorized user actions.",
            "Identify weak cryptographic settings in device communications.",
            "Assess network latency between SCADA devices for irregular delays."
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 90,
        "question": "You are a Certified Ethical Hacker contracted by a technology company to perform a security assessment on Bluetooth-enabled devices. These devices have Secure Simple Pairing (SSP enabled, which generally offers strong security. During your assessment, you identify an attacker trying to exploit a vulnerability in the SSP implementation by employing sophisticated brute-force techniques. The attacker has partial access to the Diffie-Hellman key exchange. Your mission is to identify the most effective method to counteract this attack.\n\nWhich of the following countermeasures is most likely to be effective?",
        "options": [
            "Implement device whitelisting to ensure only approved devices can connect.",
            "Impose rate-limiting to slow down the brute-force attack.",
            "Strengthen SSP by increasing the encryption key length for the Diffie-Hellman exchange.",
            "Use Bluetooth Low Energy (BLE) for all Bluetooth connections to avoid traditional Bluetooth vulnerabilities."
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 91,
        "question": "During a black-box assessment, an attacker executes the Nmap command nmap -p25 --script smtp-enum-users --script-args smtp-enum-users.methods={VRFY, EXPN, RCPT . The script successfully returns multiple valid usernames.\n\nWhat server misconfiguration is being exploited?",
        "options": [
            "SMTP server has disabled STARTTLS, enabling plaintext enumeration.",
            "SMTP user verification commands are exposed without restrictions.",
            "DNS is misconfigured to point MX records to an internal relay.",
            "The SMTP server allows authentication without credentials."
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 92,
        "question": "As a security analyst, you are testing your company’s network for potential vulnerabilities. During your investigation, you suspect that an attacker might be using MAC flooding to compromise the switches and sniff network traffic.\n\nWhich of the following indicators would most likely confirm your suspicions?",
        "options": [
            "The existence of multiple MAC addresses assigned to a single IP address.",
            "The presence of multiple IP addresses assigned to a single MAC address.",
            "An increased number of ARP requests in the network traffic.",
            "Numerous MAC addresses that correspond to a single switch port."
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 93,
        "question": "You have recently been hired as an entry-level IT technician in a large corporation. In a meeting with the IT team, the terms “ethical hacking” and “penetration testing” are mentioned frequently. Later, a colleague explains to you that the main difference between the two is based on their goals.\n\nWhat is the primary goal of an ethical hacker in comparison to a penetration tester?",
        "options": [
            "An ethical hacker is focused on exploiting system vulnerabilities, while a penetration tester aims to secure the system.",
            "An ethical hacker is primarily focused on securing the system, while a penetration tester tries to exploit the system's vulnerabilities.",
            "An ethical hacker seeks to bring the system down, while a penetration tester is focused on improving system security.",
            "An ethical hacker aims to improve system security, while a penetration tester seeks to bring the system down."
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 94,
        "question": "During a penetration test on a legacy Windows network, you use the nbtstat -A command on a target system and retrieve several NetBIOS names, including entries ending with <20> and <03>. However, attempts to list shared folders fail.\n\nWhich of the following best explains this behavior?",
        "options": [
            "The target system’s NetBIOS service is bound to a non-standard port.",
            "File and printer sharing is disabled on the target system.",
            "The host is not part of any Active Directory domain.",
            "The nbtstat utility cannot enumerate shares from NetBIOS names."
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 95,
        "question": "You are a cybersecurity consultant at a large healthcare organization. As part of your responsibilities, you are tasked with making sure the company’s systems are secure from various attacks. Recently, you’ve noticed some unusual traffic patterns that suggest someone might be trying to evade the company’s Intrusion Detection System (IDS.\n\nWhich of the following techniques would most likely be used by an attacker in an attempt to evade detection by the IDS?",
        "options": [
            "The attacker splits malicious data packets into smaller segments to avoid detection.",
            "The attacker repeatedly pings the IDS to overwhelm it with traffic and cause a denial of service.",
            "The attacker uses advanced malware that can self-replicate and spread throughout the network.",
            "The attacker sends phishing emails to employees, hoping to trick them into revealing their login credentials."
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 96,
        "question": "During a red team engagement targeting a custom web application, a tester observes that the app takes a numeric id parameter from the URL and dynamically builds SQL queries. Suspecting SQL injection, the tester sends a crafted HTTP GET request like:\n\nhttp://vulnerableapp.local/view.php?id=l; DROP TABLE users; --\n\nShortly after, the application throws database errors, and the team confirms that the users table has been removed from the backend database.\n\nBased on this behavior, which SQL injection method was most likely used?",
        "options": [
            "The attacker appended a UNION clause to retrieve additional data.",
            "The attacker triggered errors to extract database information.",
            "The attacker used Boolean logic to infer true/false responses.",
            "The attacker executed a second malicious query alongside the first."
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 97,
        "question": "As a newly appointed network security analyst at a mid-tier company, you have been tasked with assessing the security of the network. As part of this, you need to ensure that your company’s network can detect and prevent evasion techniques. You know that one popular evasion technique used by attackers is using ‘packet fragmentation’.\n\nWhich of the following IDS configurations should you implement to counteract this particular technique?",
        "options": [
            "Configuring the IDS to reject all fragmented packets to eliminate the risk.",
            "Implementing an anomaly-based IDS that can recognize the irregular traffic patterns caused by packet fragmentation.",
            "Adjusting the IDS to recognize the regular intervals at which fragmented packets are sent.",
            "Employing a signature-based IDS that recognizes the specific signature of fragmented packets."
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 98,
        "question": "A malware analyst is tasked with evaluating a suspicious PDF file suspected of launching attacks through embedded JavaScript. Initial scans using pdfid show the presence of JavaScript and /OpenAction keywords.\n\nWhat should the analyst do next to understand the potential impact?",
        "options": [
            "Compute file hashes using HashMyFiles for signature matching.",
            "Extract and analyze stream objects using PDFStreamDumper.",
            "Disassemble the PDF using PE Explorer.",
            "Upload the file to VirusTotal and rely on engine consensus."
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 99,
        "question": "A cybersecurity company wants to prevent attackers from gaining information about its encrypted traffic patterns.\n\nWhich of the following encryption algorithms should they utilize?",
        "options": [
            "DES",
            "RSA",
            "AES",
            "HMAC"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 100,
        "question": "A company’s customer data stored in a cloud environment has been exposed due to an unknown vulnerability.\n\nWhich of the following types of attack most likely led to this incident?",
        "options": [
            "Brute force attack on user passwords",
            "Denial of Service (DoS) attack on cloud servers",
            "Side-channel attack on the hypervisor",
            "Exploitation of misconfigured security groups"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    }
];
