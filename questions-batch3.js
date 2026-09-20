const questionsBatch3 = [
    {
        "id": 201,
        "question": "A penetration tester is conducting a security assessment for a client and needs to capture sensitive information transmitted across multiple VLANs without being detected by the organization's security monitoring systems. The network employs strict VLAN segmentation and port security measures to restrict unauthorized access.\n\nWhich advanced sniffing technique should the tester use to discreetly intercept and analyze traffic across all VLANs?",
        "options": [
            "Deploy a rogue DHCP server to redirect network traffic",
            "Use ARP poisoning to perform a man-in-the-middle attack",
            "Exploit a VLAN hopping vulnerability to access multiple VLANs",
            "Implement switch port mirroring on all VLANs"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 202,
        "question": "During a penetration test against a network defended by a signature-based Intrusion Detection System (IDS, the tester initiates a port scan but notices that traditional scanning methods like full SYN or TCP Connect scans are being flagged and blocked. To evade detection, the tester modifies their approach: they split the TCP headers into multiple smaller IP segments before sending them across the network. This ensures that the IDS sees only incomplete segments of the packet. Once these segments reach the target, the destination host reassembles them and processes the scan as a normal SYN request. No alerts are raised on the IDS, yet the scan reveals open ports on the target.\n\nWhich evasion technique has the tester most likely employed to avoid triggering IDS alerts?",
        "options": [
            "IP decoying with randomized address positions",
            "Packet crafting with randomized window size",
            "Packet fragmentation to bypass filtering logic",
            "SYN scan with spoofed MAC address"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 203,
        "question": "During a security assessment of an organization’s internal network, a penetration tester discovers that UDP port 123 is open on a critical host, indicating that the Network Time Protocol (NTP service is active. The tester suspects the NTP server could reveal insights into how the internal network synchronizes time, which could assist in lateral movement or correlating timestamps in logs. To gather more information, the tester decides to enumerate the list of NTP peers and determine their synchronization status, offset, and stratum levels to understand the hierarchy and redundancy in the time synchronization infrastructure.\n\nWhich command should the tester use to retrieve this specific information?",
        "options": [
            "ntpq",
            "ntpdc",
            "ntpdate",
            "ntptrace"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 204,
        "question": "An e-commerce platform hosted on a public cloud infrastructure begins to experience significant latency and timeout issues during its peak sales hours. Security logs indicate thousands of incoming HTTP connections, each of which starts sending headers extremely slowly and never completes the full request. Over time, the number of open connections rises beyond the server’s handling capacity, leading to system instability and service unavailability. The network team verifies that these connections are not transmitting malformed packets or high volumes of traffic and appear to originate from legitimate IPs.\n\nWhich specific DoS technique is most likely responsible for the degradation of service?",
        "options": [
            "UDP application-layer flooding",
            "Fragmentation flood attack",
            "Slowloris holding web server connections",
            "SYN flood with spoofed source IPs"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 205,
        "question": "A penetration tester is evaluating the security of a mobile application and discovers that it lacks proper input validation. The tester suspects that the application is vulnerable to a malicious code injection attack.\n\nWhat is the most effective way to confirm and exploit this vulnerability?",
        "options": [
            "Execute a dictionary attack on the mobile app’s encryption algorithm",
            "Perform a brute-force attack on the application’s login page to guess weak credentials",
            "Inject a malicious JavaScript code into the input fields and observe the application’s behavior",
            "Use directory traversal to access sensitive files stored in the application’s internal storage"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 206,
        "question": "A penetration tester is assessing an IoT thermostat used in a smart home system. The device communicates with a cloud server for updates and commands. The tester discovers that communication between the device and the cloud server is not encrypted.\n\nWhat is the most effective way to exploit this vulnerability?",
        "options": [
            "Use a man-in-the-middle (MitM) attack to intercept and manipulate unencrypted communication",
            "Conduct a Cross-Site Scripting (XSS) attack on the thermostat’s web interface",
            "Perform a brute-force attack on the thermostat’s local admin login",
            "Execute a SQL injection attack on the cloud server’s login page"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 207,
        "question": "An attacker places a malicious VM on the same physical server as a target VM in a multi-tenant cloud environment. The attacker then extracts cryptographic keys using CPU timing analysis.\n\nWhat type of attack was conducted?",
        "options": [
            "Side-channel attack",
            "Cache poisoned denial of service (CPDoS)",
            "Cloud cryptojacking",
            "Metadata spoofing"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 208,
        "question": "A penetration tester identifies that a web application’s login form is not using secure password hashing mechanisms, allowing attackers to steal passwords if the database is compromised.\n\nWhat is the best approach to exploit this vulnerability?",
        "options": [
            "Capture the login request using a proxy tool and attempt to decrypt the passwords",
            "Conduct a brute-force attack on the login form to guess weak passwords",
            "Perform a dictionary attack using a list of commonly used passwords against the stolen hash values",
            "Input a SQL query to check for SQL injection vulnerabilities in the login form"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 209,
        "question": "A penetration tester evaluates a company’s secure web application, which uses HTTPS, secure cookie flags, and strict session management to prevent session hijacking.\n\nTo bypass these protections and hijack a legitimate user’s session without detection, which advanced technique should the tester employ?",
        "options": [
            "Utilize a session fixation attack by forcing a known session ID during login",
            "Implement a Man-in-the-Middle (MitM) attack by compromising a trusted certificate authority",
            "Exploit a timing side-channel vulnerability to predict session tokens",
            "Perform a Cross-Site Scripting (XSS) attack to steal the session token"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 210,
        "question": "A penetration tester is assessing a company’s executive team for vulnerability to sophisticated social engineering attacks by impersonating a trusted vendor and leveraging internal communications.\n\nWhat is the most effective social engineering technique to obtain sensitive executive credentials without being detected?",
        "options": [
            "Create a targeted spear-phishing email that references recent internal projects and requests credential verification",
            "Develop a fake social media profile to connect with executives and request private information",
            "Conduct a phone call posing as the CEO to request immediate password changes from executives",
            "Send a mass phishing email with a malicious link disguised as a company-wide update"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 211,
        "question": "A penetration tester is evaluating a web application that does not properly validate the authenticity of HTTP requests. The tester suspects the application is vulnerable to Cross-Site Request Forgery (CSRF.\n\nWhich approach should the tester use to exploit this vulnerability?",
        "options": [
            "Inject a SQL query into the input fields to perform SQL injection",
            "Perform a brute-force attack on the application’s login page to guess weak credentials",
            "Create a malicious website that sends a crafted request on behalf of the user when visited",
            "Execute a directory traversal attack to access restricted server files"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 212,
        "question": "An attacker extracts the initial bytes from an encrypted file container and uses a tool to iterate through numeric combinations.\n\nWhat type of cryptanalytic technique is being utilized?",
        "options": [
            "Force encryption key through quantum solving",
            "Seek identical digests across hash outputs",
            "Test every possible password through automation",
            "Analyze output length to spot anomalies"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 213,
        "question": "During an internal red team engagement, a penetration tester is tasked with mapping the network topology of an organization with multiple segmented subnets. The tester initiates a series of traceroutes from a compromised host to various internal devices across these segments. Upon analyzing the output, the tester observes that a specific IP address, 10.10.10.1, consistently appears as the second-to-last hop before reaching several target systems located in different IP ranges. Despite varying final destination IPs, this intermediate address remains constant. No signs of DNS spoofing, ICMP anomalies, or host-level misconfigurations are present.\n\nWhat does this repeated hop pattern most likely indicate in the context of network architecture?",
        "options": [
            "A core router facilitating communication across multiple internal subnets.",
            "Presence of a transparent proxy device acting as a forwarder.",
            "Loopback misconfiguration at the destination endpoints.",
            "DNS poisoning at the local resolver used by the compromised host."
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 214,
        "question": "A penetration tester submits altered ciphertexts to a web server and pays close attention to how the server responds. When the server produces different error messages for certain inputs, the tester starts to infer which inputs result in valid internal processing.\n\nWhich cryptanalytic method is being used in this scenario?",
        "options": [
            "Compare traffic timing to deduce the key",
            "Exploit padding error feedback to recover data",
            "Flip bits randomly to scramble the decryption",
            "Inspect randomness across multiple sessions"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 215,
        "question": "A penetration tester is tasked with uncovering historical content from a company’s website, including previously exposed login portals or sensitive internal pages. Direct interaction with the live site is prohibited due to strict monitoring policies. To stay undetected, the tester decides to explore previously indexed snapshots of the organization’s web content saved by external sources.\n\nWhich approach would most effectively support this passive information-gathering objective?",
        "options": [
            "Apply the cache: operator to view Google’s stored versions of target pages.",
            "Use the intitle: login operator to list current login pages.",
            "Search with intext: “login” site:target.com to retrieve login data.",
            "Use the link: operator to find backlinks to login portals."
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 216,
        "question": "A penetration tester is tasked with compromising a company's wireless network, which uses WPA2-PSK encryption. The tester wants to capture the WPA2 handshake and crack the pre-shared key.\n\nWhat is the most appropriate approach to achieve this?",
        "options": [
            "Perform a brute-force attack directly on the WPA2 encryption",
            "Execute a Cross-Site Scripting (XSS) attack on the router’s admin panel",
            "Conduct a Man-in-the-Middle attack by spoofing the router’s MAC address",
            "Use a de-authentication attack to force a client to reconnect, capturing the WPA2"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 217,
        "question": "A penetration tester evaluates a company’s susceptibility to advanced social engineering attacks targeting its executive team. Using detailed knowledge of recent financial audits and ongoing projects, the tester crafts a highly credible pretext to deceive executives into revealing their network credentials.\n\nWhat is the most effective social engineering technique the tester should employ to obtain the necessary credentials without raising suspicion?",
        "options": [
            "Send a mass phishing email with a link to a fake financial report",
            "Conduct a phone call posing as an external auditor requesting access to financial systems",
            "Create a convincing fake email from the CFO asking for immediate credential verification",
            "Develop a spear-phishing email that references specific financial audit details and requests login confirmation"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 218,
        "question": "While conducting a covert penetration test on a UNIX-based infrastructure, the tester decides to bypass intrusion detection systems by sending specially crafted TCP packets with an unusual set of flags enabled. These packets do not initiate or complete any TCP handshake. During the scan, the tester notices that when certain ports are probed, there is no response from the target, but for others, a TCP RST (reset packet is received. The tester notes that this behavior consistently aligns with open and closed ports, respectively, without triggering detection systems configured to monitor connection-based scans.\n\nBased on these observations, which scanning technique is most likely being used?",
        "options": [
            "Xmas scan leveraging RFC 793 quirks",
            "ACK flag scan to evaluate firewall behavior",
            "FIN scan using stealthy flag combinations",
            "TCP Connect scan to complete the three-way handshake"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 219,
        "question": "An ethical hacker needs to gather sensitive information about a company’s internal network without engaging directly with the organization's systems to avoid detection.\n\nWhich method should be employed to obtain this information discreetly?",
        "options": [
            "Exploit a public vulnerability in the company’s web server",
            "Analyze the organization’s job postings for technical details",
            "Perform a WHOIS lookup on the company’s domain registrar",
            "Use port scanning tools to probe the company’s firewall"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 220,
        "question": "A penetration tester finds malware that spreads across a network without user interaction, replicating itself from one machine to another.\n\nWhat type of malware is this?",
        "options": [
            "Virus",
            "Ransomware",
            "Keylogger",
            "Worm"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 221,
        "question": "A penetration tester is assessing a web application that employs secure, HTTP-only cookies, regenerates session IDs upon login and uses strict session timeout policies.\n\nTo hijack a user’s session without triggering the application's security defenses, which advanced technique should the tester utilize?",
        "options": [
            "Execute a Cross-Site Request Forgery (CSRF) attack to manipulate session states",
            "Implement a session fixation strategy by pre-setting a session ID before user authentication",
            "Conduct a network-level man-in-the-middle attack to intercept and reuse session tokens",
            "Perform a session token prediction by analyzing session ID entropy and patterns"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 222,
        "question": "A university’s online registration system is experiencing disruptions due to a DDoS attack that combines DNS reflection and HTTP slowloris techniques. Standard firewalls and load balancers are unable to mitigate the attack without impacting legitimate users.\n\nTo ensure uninterrupted registration services, which advanced mitigation strategy should the university implement?",
        "options": [
            "Utilize a hybrid DDoS mitigation service that offers both on-premises and cloud-based protection",
            "Deploy an Intrusion Prevention System (IPS) with deep packet inspection capabilities",
            "Configure the firewall to block all incoming DNS and HTTP requests from external IPs",
            "Increase server bandwidth and implement basic rate limiting on all incoming traffic"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 223,
        "question": "In a vertical privilege escalation scenario, the attacker attempts to gain access to a user account with higher privileges than their current level.\n\nWhich of the following examples describes vertical privilege escalation?",
        "options": [
            "An attacker escalates from a regular user to an administrator by exploiting administrative functions.",
            "An attacker uses an unquoted service path vulnerability to gain unauthorized access to another user’s data with equivalent privileges.",
            "An attacker exploits weak access controls to access and steal sensitive information from another user’s account with alike privileges.",
            "An attacker leverages a lack of session management controls to switch accounts and access resources assigned to another user with the same permissions."
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 224,
        "question": "While evaluating a smart card implementation, a security analyst observes that an attacker is measuring fluctuations in power consumption and timing variations during encryption operations on the chip. The attacker uses this information to infer secret keys used within the device.\n\nWhat type of exploitation is being carried out?",
        "options": [
            "Disrupt control flow to modify instructions",
            "Force session resets through input flooding",
            "Observe hardware signals to deduce secrets",
            "Crack hashes using statistical collisions"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 225,
        "question": "A penetration tester finds that a web application does not properly validate user input and is vulnerable to reflected Cross-Site Scripting (XSS.\n\nWhat is the most appropriate approach to exploit this vulnerability?",
        "options": [
            "Embed a malicious script in a URL and tricked a user into clicking the link",
            "Use directory traversal to access sensitive files on the server",
            "Perform a brute-force attack on the user login form to steal credentials",
            "Inject a SQL query into the search form to attempt SQL injection"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 226,
        "question": "During a red team assessment, an ethical hacker is assigned the task of mapping a large multinational enterprise’s external attack surfaces. The target organization operates multiple regional websites and cloud-hosted environments under different subdomains. Due to strict rules of engagement, the hacker must avoid any active scans or probes that could alert the organization’s security monitoring systems. The goal is to uncover as many publicly exposed subdomains as possible to identify potential unpatched or misconfigured services that may exist under obscure or forgotten subdomains.\n\nWhich method should the ethical hacker use to passively enumerate the organization’s subdomains?",
        "options": [
            "Conduct a brute-force DNS subdomain enumeration.",
            "Leverage tools like Netcraft or DNSdumpster to gather subdomain information.",
            "Request internal DNS records using spoofed credentials.",
            "Attempt to guess admin credentials and access the company’s DNS portal."
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 227,
        "question": "During a stealth assessment of a corporate internal network, an attacker gains access to a subnet where host communications are switched and protected against common ARP poisoning techniques. While passively sniffing traffic, the attacker observes that the target system (Host B intermittently delays its response to ARP requests. Recognizing a potential opportunity, the attacker crafts and injects a fake ARP reply that maps the target’s IP address to their own MAC address and sends it before the legitimate reply arrives. Over time, the attacker notices that packets originally intended for Host B occasionally arrive at their own system, especially during these ARP response delays. The switch’s CAM table seems to temporarily associate the target's IP with the attacker’s MAC and port, before reverting back once the legitimate host reasserts itself.\n\nWhat type of sniffing attack is the attacker performing?",
        "options": [
            "Switch port stealing via timing-based ARP spoofing",
            "ARP poisoning for MiTM interception",
            "Passive sniffing on a switched network",
            "Duplicate IP conflict resolution attack"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 228,
        "question": "A security researcher is analyzing a target organization’s publicly accessible cloud infrastructure. While reviewing the website’s HTML source code, the researcher discovers direct references to files hosted on Amazon S3.\n\nWhat is the most effective way to identify additional publicly accessible bucket URLs used by the target?",
        "options": [
            "Use SQL injection to extract internal file paths from the database.",
            "Exploit XSS to force the page to reveal the S3 links.",
            "Perform packet sniffing to intercept internal S3 bucket names.",
            "Use Google advanced search operators to enumerate S3 bucket URLs."
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 229,
        "question": "During a security assessment, a consultant investigates how the application handles requests from authenticated users. They discover that once a user logs in, the application does not verify the origin of subsequent requests. To exploit this, the consultant creates a web page containing a malicious form that submits a funds transfer request to the application. A logged-in user, believing the page is part of a promotional campaign, fills out the form and submits it. The application processes the request successfully without any reauthentication or user confirmation, completing the transaction under the victim’s session.\n\nWhich session hijacking technique is being used in this scenario?",
        "options": [
            "Hijacking a user session using a session fixation attack",
            "Hijacking a user session using a cross-site script attack",
            "Hijacking a user session using a cross-site request forgery attack",
            "Hijacking a user session using a session replay attack"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 230,
        "question": "A penetration tester is testing a web application’s product search feature, which takes user input and queries the database. The tester suspects the input is not properly sanitized.\n\nWhat is the best approach to confirm the presence of SQL injection?",
        "options": [
            "Input ‘; DROP TABLE products; -- to see if the table is deleted",
            "Inject a script like to test for Cross-Site Scripting (XSS)",
            "Enter 1’ OR ‘1’=‘1 to check if all products are returned",
            "Use directory traversal syntax to access restricted files on the server"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 231,
        "question": "A penetration tester is tasked with mapping an organization’s network while avoiding detection by sophisticated intrusion detection systems (IDS. The organization employs advanced IDS capable of recognizing common scanning patterns.\n\nWhich scanning technique should the tester use to effectively discover live hosts and open ports without triggering the IDS?",
        "options": [
            "Use an Idle scan leveraging a third-party zombie host",
            "Conduct a TCP Connect scan using randomized port sequences",
            "Perform an ICMP Echo scan to ping all network devices",
            "Execute a FIN scan by sending TCP packets with the FIN flag set"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 232,
        "question": "During a black-box internal penetration test, a security analyst is tasked with identifying potentially exploitable services running on an SNMP-enabled Linux server. The target organization uses SNMPv2, and the default community string “public” has not been changed. The analyst confirms that UDP port 161 is open and accessible. To gather service-related intelligence for privilege escalation or lateral movement, the analyst decides to enumerate all running processes on the host.\n\nWhich Nmap command would most effectively retrieve the required information?",
        "options": [
            "nmap -sU -p 161 --script snmp-processes",
            "nmap -sU -p l61 --script snmp-win32-services",
            "nmap -sU -p 161 --script snmp-interfaces",
            "nmap -sU -p 161 --script snmp-sysdescr"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 233,
        "question": "A penetration tester is tasked with scanning a network protected by an IDS and firewall that actively blocks connection attempts on non-standard ports. The tester needs to gather information on the target system without triggering alarms.\n\nWhich technique should the tester use to evade detection?",
        "options": [
            "Conduct a full TCP Connect scan to confirm open ports",
            "Execute a TCP ACK scan to map firewall rules and bypass the IDS",
            "Perform a SYN flood attack to overwhelm the firewall",
            "Use a low-and-slow scan to reduce detection by the IDS"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 234,
        "question": "During a red team engagement simulating a targeted attack on a smart office environment, an ethical hacker identifies a thermostat used for regulating temperature across multiple floors. While analyzing its firmware management process, the tester discovers that the device accepts older versions without verifying their integrity or authenticity. The attacker successfully loads a previously deprecated firmware that contains known vulnerabilities and gains unauthorized access to the broader network by exploiting reintroduced flaws. No mechanisms are in place to prevent version rollback or verify firmware trustworthiness.\n\nWhich IoT security issue is most accurately demonstrated in this scenario?",
        "options": [
            "Lack of secure update mechanisms",
            "Denial-of-service through physical tampering",
            "Insecure network service exposure",
            "Use of insecure third-party components"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 235,
        "question": "During a security assessment of a company’s internal web application, a penetration tester examines how the application processes input values passed in the web address query string. The application includes a feature that dynamically fetches documents based on a filename value provided in the web address (e.g., https://intranet.example.com/view?file=report.txt. By altering this input to include sequences like ../../../../etc/passwd, the tester successfully navigates beyond the intended storage location and accesses restricted files. Further manipulation reveals access to sensitive configuration files, source code, and internal scripts, confirming that the application lacks proper input sanitization and isolation of file access paths.\n\nWhich attack method does this scenario illustrate?",
        "options": [
            "Conduct a brute-force attack to obtain administrative credentials.",
            "Exploit buffer overflow issues by injecting oversized data in HTTP request headers.",
            "Inject malicious scripts into web pages to manipulate content via XSS vulnerabilities.",
            "Use directory traversal sequences in URL parameters to retrieve unauthorized system content."
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 236,
        "question": "A penetration tester has gained access to a target system using default credentials.\n\nWhat is the most effective next step to escalate privileges on the system?",
        "options": [
            "Perform a denial-of-service (DoS) attack to crash the system",
            "Use a dictionary attack to brute-force the root password",
            "Use a known local privilege escalation vulnerability to gain admin access",
            "Execute a Cross-Site Scripting (XSS) attack on the system’s login page"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 237,
        "question": "While assessing a web server’s behavior, a tester sends malformed HTTP GET requests using unusual methods like “DELETE” and “OPTIONS” combined with long URI strings and observes varying status codes and response headers. The tester uses a tool that matches these responses against known patterns to deduce the server’s software and version.\n\nWhich technique is the tester employing?",
        "options": [
            "Injecting scripts into headers for persistent XSS attacks on the server-side.",
            "Sending phishing emails to extract web server login credentials.",
            "Fingerprinting server identity using banner-grabbing techniques.",
            "Conducting session fixation using malformed cookie headers targeting the web server."
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 238,
        "question": "A penetration tester is investigating a web server that allows for unrestricted file uploads. The server accepts files without proper validation or sanitization of file types.\n\nWhich technique should the tester use to exploit this vulnerability and gain potentially control of the server?",
        "options": [
            "Perform a SQL injection attack to extract sensitive database information",
            "Use a Cross-Site Scripting (XSS) attack to steal user session cookies",
            "Conduct a brute-force attack on the server’s FTP service to gain access",
            "Upload a shell script disguised as an image file to execute commands on the server"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 239,
        "question": "During a high-stakes engagement on a secure corporate network, a penetration tester discovers an opportunity to attack the domain controller. By abusing an API call from Microsoft’s Encrypting File System Remote Protocol (MS-EFSRPC, the tester forces the domain controller to initiate NTLM authentication to a server controlled by the tester. The tester then captures the resulting NTLM hash and relays it to the Active Directory Certificate Services (AD CS, ultimately obtaining a certificate that confers administrative privileges over the network. This sophisticated method allows the tester to compromise the network without requiring direct access to the domain controller.\n\nWhich network-level hijacking technique is illustrated in this scenario?",
        "options": [
            "Exploiting vulnerabilities in TLS compression via a CRIME attack",
            "Employing a session donation method to transfer tokens",
            "Stealing session tokens using browser-based exploits",
            "Hijacking sessions using a PetitPotam relay attack"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 240,
        "question": "An AWS security operations team receives an alert regarding abnormal outbound traffic from an EC2 instance. The instance, which previously handled backend microservices, begins transmitting encrypted data packets to an external domain. Upon deeper investigation, it is discovered that the external domain resolves to a Dropbox account not associated with the organization. Network flow logs confirm a consistent pattern of data transfers to this destination during off-peak hours. Further forensic analysis reveals that a malicious executable was silently installed on the instance, which modifies the sync configuration of the Dropbox client to use the attacker's access token. This enables the compromised EC2 instance to automatically sync selected data folders with the attacker’s Dropbox storage, bypassing traditional perimeter defenses.\n\nWhat type of attack has likely occurred?",
        "options": [
            "Cloud Snooper attack leveraging port masquerading",
            "Cryptojacking using CoinHive scripts",
            "Man-in-the-Cloud (MITC) attack",
            "Side-channel attack exploiting CPU cache"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 241,
        "question": "Which of the following is the primary goal of ethical hacking?",
        "options": [
            "To identify and fix security vulnerabilities in a system",
            "To steal sensitive information from a company’s network",
            "To spread malware to compromise multiple systems",
            "To disrupt services by launching denial-of-service attacks"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 242,
        "question": "During an internal red team engagement, an operator discovers that TCP port 389 is open on a target system identified as a domain controller. To assess the extent of LDAP exposure, the operator runs the command ldapsearch -h -x -s base namingcontexts and receives a response revealing the base distinguished name (DN: DC=internal,DC=corp. This naming context indicates the root of the LDAP directory structure used by the organization’s Active Directory. With this discovery, the operator plans the next step to continue LDAP enumeration and expand visibility into users and objects in the domain.\n\nWhat is the most logical next action?",
        "options": [
            "Attempt an RDP login to the domain controller",
            "Conduct an ARP scan on the local subnet",
            "Use the base DN in a filter to enumerate directory objects",
            "Launch a brute-force attack against user passwords via SMB"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 243,
        "question": "During a security assessment of a metropolitan public transportation terminal, a penetration tester examines a network-connected IoT surveillance camera system that is used for 24/7 video monitoring of high-traffic areas. Upon analyzing the camera’s network traffic, the tester observes that it uses an outdated encryption protocol (SSLv2 to transmit video data to the control center. The tester uses a network packet sniffer to intercept this traffic and easily decrypts the stream, successfully reconstructing full video footage in real time without authentication.\n\nFurther analysis reveals that the camera does not enforce TLS or any modern encryption standard and lacks support for mutual authentication or secure key exchange. Additionally, no integrity checks are performed, leaving the data open to manipulation.\n\nWhat IoT vulnerability is most likely being exploited in this scenario?",
        "options": [
            "Jamming attack on RF communication",
            "Replay attack on wireless signals",
            "Insecure data transfer and storage",
            "Credential theft via web application"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 244,
        "question": "A security analyst investigates unusual east-west traffic on a corporate network. A previously unknown MAC address is found actively communicating from a port connected to a trusted desktop. On closer inspection, a small computing device (Raspberry Pi was physically inserted between the switch and the legitimate machine. This setup allows the rogue device to piggyback onto the network using the identity and privileges of the authenticated workstation without triggering any authentication processes or alarms.\n\nWhich evasion technique is being used to blend unauthorized traffic with legitimate access?",
        "options": [
            "Exploiting a wireless rogue access point to tunnel through the firewall",
            "VLAN double tagging to shift between network segments",
            "NAC bypass using a pre-authenticated device for network bridging",
            "Spoofing ARP responses from a dynamic IP allocation pool"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 245,
        "question": "A penetration tester discovers that a web application is vulnerable to Local File Inclusion (LFI due to improper input validation in a URL parameter.\n\nWhich approach should the tester take to exploit this vulnerability?",
        "options": [
            "Inject SQL commands into the URL parameter to test for database vulnerabilities",
            "Perform a Cross-Site Scripting (XSS) attack by injecting malicious scripts into the URL",
            "Conduct a brute-force attack on the admin login page to gain access",
            "Use directory traversal to access sensitive files on the server, such as/etc/passwd"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 246,
        "question": "A penetration tester is tasked with assessing the security of an Android mobile application that stores sensitive user data. The tester finds that the application does not use proper encryption to secure data at rest.\n\nWhat is the most effective way to exploit this vulnerability?",
        "options": [
            "Access the local storage to retrieve sensitive data directly from the device",
            "Use SQL injection to retrieve sensitive data from the backend server",
            "Perform a brute-force attack on the application’s login credentials",
            "Execute a Cross-Site Scripting (XSS) attack to steal session cookies"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 247,
        "question": "A Certified Ethical Hacker (CEH is auditing a company’s web server that employs virtual hosting. The server hosts multiple domains and uses a web proxy to maintain anonymity and prevent IP blocking. The CEH discovers that the server’s document root directory, which stores critical HTML files, is named “certroot” and is stored in the directory /admin/web. The server root, which stores the server’s configuration, error, executable, and log files, is also identified. The CEH also notes that the server uses a virtual document tree for additional storage.\n\nGiven this scenario which of the following actions would most likely increase the security of the web server?",
        "options": [
            "Regularly updating and patching the server software",
            "Implementing an open-source web server architecture such as LAMP",
            "Changing the server’s IP address regularly",
            "Moving the document root directory to a different disk"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 248,
        "question": "As an IT technician in a small software development company, you are tasked with providing security against different kinds of cyber threats. You learn about various methods hackers might use to bypass your company’s firewalls.\n\nWhich of the following is a common technique used by attackers to evade firewall detection?",
        "options": [
            "Using encrypted communication channels to evade network monitoring tools.",
            "Implementing an open-source operating system to bypass proprietary software restrictions.",
            "Utilizing social engineering techniques to trick employees into revealing sensitive information.",
            "Changing the source IP address of packets to appear as if the traffic is coming from a trusted source."
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 249,
        "question": "A penetration tester is assessing a company’s vulnerability to advanced social engineering attacks targeting its legal department. Using comprehensive knowledge of recent mergers and internal legal proceedings, the tester crafts a highly credible pretext to deceive legal employees into sharing confidential case documents.\n\nWhat is the most effective social engineering technique the tester should employ to obtain confidential documents without raising suspicion?",
        "options": [
            "Visit the office in person posing as a new legal intern to request document access",
            "Send a spear-phishing email referencing specific merger details and requesting document access",
            "Create a fake LinkedIn profile to connect with legal employees and request document sharing",
            "Conduct a mass phishing campaign with generic legal templates attached"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 250,
        "question": "In the bustling digital marketplace of Miami’s tech corridor, ethical hacker Sofia Alvarez probes the virtual defenses of RetailRush, a US-based online retailer hosting thousands of daily transactions. Tasked with exposing weaknesses in the web server’s URL processing, Sofia submits crafted requests to manipulate resource paths. Her tests uncover a severe flaw: the server grants access to restricted system files, exposing sensitive configuration data. Further scrutiny reveals the issue stems from the server’s failure to validate input paths, not from header manipulation, cached content tampering, or credential compromise. Committed to hardening the platform, Sofia drafts a precise report to direct the security team toward immediate fixes. Which web server attack type is Sofia most likely exploiting in Retail Rush’s web server?",
        "options": [
            "Directory Traversal Attack",
            "Web Cache Poisoning Attack",
            "FTTP Response Splitting Attack",
            "Password Cracking Attack"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 251,
        "question": "In downtown Chicago, Illinois, security analyst Mia Torres investigates a breach at Windy City Enterprises, a logistics firm running an Apache HTTP Server. The attacker exploited a known vulnerability in an outdated version, gaining unauthorized access to customer shipment data. Mia’s analysis reveals the server lacked recent security updates, leaving it susceptible to remote code execution. Determined to prevent future incidents, Mia recommends a strategy to the IT team to address this exposure.\n\nWhich approach should Mia recommend to secure Windy City Enterprises’ Apache HTTP Server against such vulnerabilities?",
        "options": [
            "Eliminate unnecessary flies within the jar files",
            "Block all unnecessary ports, ICMP traffic, and unnecessary protocols such as NetBIOS and SMB",
            "Use a dedicated machine as a web server",
            "Conduct an extensive risk assessment to determine which segments of the network are most vulnerable or at high risk that need to be patched first"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 252,
        "question": "You are part of the red team assigned to evaluate the physical and social vulnerabilities of a government contractor’s office located in a metropolitan business hub. During your pretexting phase, you decide to simulate the role of a third-party IT technician. Upon arrival, the receptionist allows you entry without verification, assuming you’re there for scheduled printer maintenance. While moving through the workspace, you casually observe open terminals, unattended printouts, and discarded sticky notes at workstations. You later report several user credentials and partial access details acquired during this visit.\n\nWhich social engineering technique does this scenario best illustrate?",
        "options": [
            "Shoulder Surfing",
            "Eavesdropping",
            "Impersonation",
            "Dumpster Diving"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 253,
        "question": "Emma, an ethical hacker at a Chicago-based healthcare provider, is performing a penetration test on the organization’s patient record system following a recent data breach. During her investigation, she discovers that attackers gained access to a large volume of encrypted patient records but had no knowledge of the original data or encryption keys. Emma observes that the system uses a block cipher and suspects the attackers may have applied a cryptanalytic method that examines encrypted outputs in bulk to detect structural or statistical patterns in the encrypted data.\n\nWhich cryptanalysis technique should Emma investigate to assess the system’s vulnerability in this scenario?",
        "options": [
            "Chosen-plaintext attack",
            "Known plaintext attack",
            "Chosen-ciphertext attack",
            "Ciphertext-only attack"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 254,
        "question": "During a post-exploitation phase in a network compromise simulation, ethical hacker Devon Hughes gains a Meterpreter session on a manager’s Windows 10 workstation. To maintain stealth, he avoids actions that generate obvious signs of tampering such as privilege escalation or file system changes. Instead, he wants to monitor the user’s live activity over time without their knowledge, focusing specifically on input patterns and active sessions.\n\nWhich Meterpreter command should he use to achieve this objective with minimal visibility?",
        "options": [
            "keyscan_start ",
            "hashdump",
            "persistence",
            "getsystem"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 255,
        "question": "You are Ethan Brooks, an ethical hacker at Vanguard Security Solutions, hired to perform a wireless penetration test for Pacific Logistics, a shipping company in Seattle, Washington. Your task is to identify all Wi-Fi networks in range without alerting the network administrators. Using a laptop with a Wi-Fi card, you monitor radio channels to detect access points and their BSSiDs without sending any probe requests or injecting data packets. Based on the described method, which Wi-Fi discovery technique are you employing?",
        "options": [
            "Network Discovery Software",
            "Passive Footprinting ",
            "Wash Command",
            "Active Footprinting"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 256,
        "question": "During a penetration testing engagement at First Union Bank in Chicago, ethical hacker Rachel Morgan is assigned to assess the internal network for potential sniffing activity that could compromise sensitive customer data. While inspecting traffic in the loan processing department, Rachel observes that a workstation is receiving packets not addressed to it, raising suspicion of a sniffing tool operating in promiscuous mode. To validate her hypothesis, she prepares to conduct an active verification using a classic detection approach.\n\nWhich detection technique should Rachel use to confirm the presence of a sniffer in this case?",
        "options": [
            "Sniffer detection using an NSE script to check for promiscuous mode",
            "DNS method by monitoring reverse DNS lookup traffic",
            "ARP method by sending non-broadcast ARP requests",
            "Ping method by sending packets with an incorrect MAC address"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 257,
        "question": "During an internal red team engagement at Orion Tech Labs, a leading software firm in Austin, Texas, ethical hacker Emily Carter was tasked with evaluating the resilience of the organization’s software deployment processes. Knowing that the finance team frequently downloaded utility tools for generating PDFs, she repackaged a trusted PDF converter installer with a secondary payload. When an employee executed the installer, the converter installed and functioned normally, but in the background, a hidden executable silently initiated outbound network communication. The user remained unaware of any suspicious activity.\n\nWhich technique did Emily most likely use to ensure the malware executed alongside the legitimate application?",
        "options": [
            "Downloader",
            "Packer",
            "Dropper",
            "Wrapper "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 258,
        "question": "During a red team assessment of a multinational financial firm, you’re tasked with identifying key personnel across various departments and correlating their digital footprints to evaluate exposure risk. Your objective includes mapping user aliases across platforms, identifying geotagged media, and pinpointing potential insider threats based on social posting behavior. The team has shortlisted multiple tools for the task.\n\nConsidering the technical capabilities and limitations described in the approved reconnaissance toolkit, which tool provides cross platform username correlation by scanning hundreds of social networking sites, but does not natively support geolocation tracking or visualizing identity relationships?",
        "options": [
            "Creepy",
            "Social Searcher",
            "Maltego",
            "Sherlock"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 259,
        "question": "Olivia, a cybersecurity architect at a Boston-based fintech company, is tasked with upgrading the organization’s cryptographic infrastructure in preparation for future quantum computing threats. A recent internal audit flagged that sensitive customer data stored in the company’s cloud environment could be vulnerable if quantum decryption methods become practically viable. To strengthen their post-quantum defense, Olivia must recommend a proactive cryptographic control that ensures long-term confidentiality of stored data, even against advanced quantum attackers.\n\nWhich cryptographic defense should Olivia prioritize to mitigate the risk of future quantum-based decryption?",
        "options": [
            "Break data into fragments and distribute it across multiple locations",
            "Encrypt stored data with quantum-resistant algorithms",
            "Use quantum-specific firewalls to protect quantum communication channels",
            "Include quantum-resistance checks in SDLC and code review processes."
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 260,
        "question": "Sarah, an ethical hacker at a San Francisco-based financial firm, is testing the security of their customer database after a recent data exposure incident. Her analysis reveals that the sensitive client information is safeguarded using a symmetric encryption algorithm. She observes that the algorithm processes data in 64-bit blocks and supports a variable key size from 32 to 448 bits. During her penetration test, Sarah intercepts a ciphertext transmission and notes that the encryption was developed as a replacement for DES, an older algorithm. She aims to determine if the algorithm’s flexible key size could be susceptible to brute-force attacks. The algorithm is also noted for its use in secure storage, a critical application for the firm’s data protection. Which symmetric encryption algorithm should Sarah identify as the one used by the firm?",
        "options": [
            "RC4",
            "Twofish",
            "AES",
            "Blowfish"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 261,
        "question": "During a routine software update at Horizon Solutions, a mid-sized IT firm in Raleigh, North Carolina, an employee downloads a free utility from a popular third-party site to streamline document processing. During the installation, the user is prompted to install an optional ‘productivity toolbar’ and a ‘system optimization tool,’ which are bundled with vague descriptions. Shortly after, the employee notices intermittent pop-up ads, an altered browser homepage, and sluggish PC performance, though network logs also show occasional unexplained data transfers during off-hours. A security scan flags the additional programs as potentially harmful, but a deeper analysis reveals no immediate file encryption or self-replicating code.\n\nWhat type of threat are these unwanted programs most likely classified as?",
        "options": [
            "Potentially Unwanted Applications (PUAs)",
            "Worms",
            "Botnet agents",
            "Logic bombs"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 262,
        "question": "You are an ethical hacker at CyberShield Analytics, hired by Coastal Education Services, a tutoring platform in Miami, Florida, to test the security of their student portal. While probing the portal’s course enrollment page, you input a crafted value into the course ID field, appending a condition that checks if the first character of the database name is a specific value. The application does not display error messages or additional data, but the page takes significantly longer to load when the condition evaluates to true, indicating a deliberate delay. Based on the observed behavior, which SQL injection technique are you employing?",
        "options": [
            "Boolean exploitation",
            "Time-based blind SQL injection",
            "UNION SQL injection",
            "Error-based SQL injection"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 263,
        "question": "In the bustling financial hub of Charlotte, North Carolina, ethical hacker Raj Patel is contracted by TrustBank, a regional US bank, to evaluate their online loan application portal. On April 22, 2025, Raj tests a feature allowing customers to upload structured financial documents for loan processing. By submitting a specially crafted document, he triggers a response that exposes internal server file paths and sensitive configuration data, including database connection strings. The issue arises from the portal’s handling of external references in document parsing, not from response manipulation, authentication weaknesses, or undetected attack attempts. Raj compiles a detailed report to assist TrustBank’s security team in mitigating the vulnerability.\n\nWhich type of vulnerability is Raj most likely exploiting in TrustBank’s online loan application portal?",
        "options": [
            "Identification and Authentication Failures",
            "HTTP Response Splitting",
            "XML External Entity (XXE) Injection ",
            "Security Legg ng and Monitoring Failures"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 264,
        "question": "During a security assessment at Apex Technologies in Austin, Texas, the cybersecurity team identifies a high risk of social engineering attacks. Including phishing, vishing, and baiting, targeting employees across departments. To strengthen defenses, the team plans to implement a countermeasure to reduce the likelihood of employees disclosing sensitive information.\n\nWhich of the following countermeasures should Apex Technologies prioritize to mitigate the risk of social engineering attacks?",
        "options": [
            "Conduct security awareness and training programs ",
            "Employees must verify identity of individuals requesting information",
            "Use two-factor authentication",
            "Establish policies and procedures for handling sensitive information"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 265,
        "question": "In the sunlit tech oasis of Phoenix, Arizona, ethical hacker Nadia Patel explores the inner workings of LearnSphere, a US-based e-learning platform serving thousands of students. Tasked with evaluating the application’s resource-sharing mechanisms, Nadia crafts HTTP requests to interact with the platform’s content delivery endpoint. Her tests uncover a serious flaw: improperly configured access-control headers permit cross-origin requests from unauthorized domains, allowing access to protected course materials. Determined to strengthen the platform, Nadia documents her findings to provide LearnSphere’s security team with clear, actionable guidance.\n\nWhich vulnerability is Nadia most likely exploiting in LearnSphere’s web application?",
        "options": [
            "Directory Listing",
            "Default Credential Exposure",
            "CORS Misconfiguration ",
            "Verbose Error Messages"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 266,
        "question": "Dr. Evelyn Reed, a cybersecurity expert, was called in to investigate a series of unusual activities at “Global Innovations Inc.” The first red flag was a surge in spear-phishing emails targeting senior management, disguised as urgent internal memos. Soon after, the company’s web server showed unexpected outbound traffic to unfamiliar IP addresses. A network audit revealed that multiple underutilized printers and routers had unauthorized firmware installed. Further review uncovered inconsistencies in file access logs linked to the R&D department, including unusually large data transfers occurring during non-business hours. Dr. Reed also noted the attackers appeared to have intimate knowledge of the organization’s internal data structure.\n\nWhich phase of the Advanced Persistent Threat (APT) lifecycle is Global Innovations Inc. most likely experiencing, given the combination of these incidents?",
        "options": [
            "Initial Intrusion",
            "Expansion",
            "Search and Exfiltration ",
            "Persistence"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 267,
        "question": "Alice, a software developer, digitally signs an email contract and sends it to Bob. Later, a dispute arises and Alice claims she never sent the agreement. However, Bob produces the email with Alice’s unique digital signature, which unequivocally links the message to her. In information security terms, what principle is illustrated by Bob’s ability to prove Alice’s authorship of the email?",
        "options": [
            "Confidentiality",
            "Integrity",
            "Non-Repudiation",
            "Availability"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 268,
        "question": "During a red team engagement for a client in the financial sector, ethical hacker Tyler Brooks conducts a phishing campaign using a crafted internal web page disguised as a company VPN login. After several users enter their credentials, Tyler confirms that the payload successfully recorded input without triggering antivirus or requiring local installation privileges. The captured keystrokes came exclusively from a web-based form embedded in the fake login page.\n\nBased on the technique used, which type of keylogger did Tyler most likely deploy?",
        "options": [
            "Keylogger Keyboard",
            "Hypervisor-based Keylogger",
            "Application Keylogger",
            "JavaScript-based Keylogger "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 269,
        "question": "Amid the vibrant buzz of Miami’s digital scene, ethical hacker Sofia Alvarez embarks on a mission to fortify the web server of Sunshine Media’s streaming platform. Diving into her security assessment, Sofia sends a meticulously crafted GET / HTTP/1.0 request to the server, scrutinizing its response. The server obligingly returns headers exposing its software version and operating system, a revelation that could empower malicious actors to tailor their attacks. Committed to bolstering the platform’s defenses, Sofia documents her findings to urge the security team to address this exposure.\n\nWhat approach is Sofia using to expose the vulnerability in Sunshine Media’s web server?",
        "options": [
            "Informal on Gathering from Robots.txt File",
            "Vulnerability Scanning",
            "Directory Brute Forcing",
            "Web Server Footprinting/Banner Grabbing "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 270,
        "question": "After responding to an alert involving unauthorized access to payroll data, forensic analyst Jason Miller traces the breach to a Windows workstation previously used by a temporary staff member in Chicago. While analyzing the event timeline, Jason identifies a non-elevated process that launched a signed Microsoft binary – one of several auto-elevating executables such as fodhelper.exe, eventvwr.exe. or sdclt.exe – which resulted in execution of unauthorized code without prompting the user. Registry analysis reveals manipulation of shell-related keys under the current user hive, redirecting the trusted binary to invoke a malicious payload. Which technique most likely enabled the privilege escalation?",
        "options": [
            "Kernel Exploitation",
            "Scheduled Task",
            "UAC Bypass ",
            "DLL Hijacking"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 271,
        "question": "During a security compliance audit at Nexus Tech Solutions in Boston, Massachusetts, the ethical hacking team launches a controlled social engineering exercise to assess help desk vulnerabilities. Ethical hacker Rachel Kim calls the company’s help desk, posing as a stressed employee named Laura Bennett from the marketing department. Rachel claims her laptop is running slowly and offers to share her login credentials if the help desk can provide a quick fix to meet a tight project deadline. The call is designed to test whether help desk staff follow proper verification protocols or fall for the offer of credentials in exchange for assistance.\n\nWhat social engineering technique is Rachel employing in this exercise?",
        "options": [
            "Shoulder Surfing",
            "Vishing",
            "Impersonation",
            "Quid Pro Quo"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 272,
        "question": "During a late-night shift at IronWave Logistics in Seattle, cybersecurity analyst Marcus Chen notices a pattern of high-port outbound traffic from over a dozen internal machines to a previously unseen external IP. Each system had recently received a disguised shipping report, which, when opened, initiated a process that spread autonomously to other workstations using shared folders and stolen credentials. Upon investigation, Marcus discovers that the machines now contain hidden executables that silently accept remote instructions and occasionally trigger coordinated background tasks. The compromised endpoints are behaving like zombies, and malware analysts confirm that the payload used worm-like propagation to deliver a backdoor component across the network.\n\nWhich is the most likely objective behind this attack?",
        "options": [
            "To exfiltrate sensitive information and tracking data",
            "To execute a ransomware payload and encrypt all data",
            "To establish a botnet for remote command and control",
            "To deploy a Remote Access Trojan (RAT) for stealthy surveillance"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 273,
        "question": "In a high-stakes cybersecurity exercise in Boston, Emily, an ethical hacker, is tasked with tracing a mock phishing email sent to a healthcare provider’s staff. Using the email header, she identifies a series of IP addresses and server details, including multiple timestamps and server names. Her objective is to pinpoint the exact moment the email was processed by the sender’s system. As part of her reconnaissance, what specific detail from the email header should Emily examine to determine this information?",
        "options": [
            "Date and time of message sent",
            "Sender’s mail server",
            "Date and time received by the originator’s email servers",
            "Authentication system used by sender’s mail server"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 274,
        "question": "You’ve recently joined an international software firm as part of the cybersecurity governance team. While preparing for an internal compliance review, your supervisor asks you to identify the ISO/IEC standard that serves as a comprehensive framework for managing an organization’s information security. You examine several standards, including those focusing on risk management, cybersecurity, and control implementation. However, you need to select the one that defines the overarching structure for managing information security programs across the organization.\n\nWhich of the following standards should you choose?",
        "options": [
            "ISO/IEC 27002:2022",
            "ISO/IEC 27005:2022",
            "ISO/IEC 27001:2022",
            "ISO/IEC 27701:2019"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 275,
        "question": "In Dallas, Texas, Alex, a cloud security specialist at a logistics company, is designing a cloud infrastructure to deploy containerized web applications for real-time shipment tracking. To ensure the applications remain accessible even if one node fails, with minimal downtime, Alex plans to run several nodes as a group so that, if one node goes down, another node in the cluster can automatically continue handling its workload. This setup will leverage cloud clustering for enhanced scalability by distributing container instances across nodes in different zones.\n\nWhich type of cluster computing should Alex implement to achieve these capabilities in the cloud environment?",
        "options": [
            "Load Balancing",
            "Resource Pooling",
            "Highly Available [HA] or Fail-over",
            "High-Performance Computing"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 276,
        "question": "During an external assessment of a regional retail company’s digital infrastructure, security analyst Joe is assigned to map internal services without active intrusion. While testing the behavior of a publicly exposed resolution system, he discovers that a secondary system responds unusually to structured queries. When he issues a specific request format, the server replies with a full list of internal mappings, including subdomains, mall hosts, and system aliases without requiring credentials or triggering alerts.\n\nWhich technique was most likely used to obtain this information?",
        "options": [
            "DAP Enumeration",
            "NTP Enumeration",
            "DNS Zone Transfer Enumeration",
            "NetBIOS Enumeration"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 277,
        "question": "Joe, a cybersecurity analyst at XYZ-FinTech, has been assigned to perform a quarterly vulnerability assessment across the organization’s Windows-based servers and employee workstations. His objective is to detect issues such as software configuration errors, incorrect registry or file permissions, native configuration table problems, and other system-level misconfigurations. He is instructed to log into each system using valid credentials to ensure comprehensive data collection. Based on this assignment, which type of vulnerability scanning should Joe perform?",
        "options": [
            "External Scanning",
            "Application Scanning",
            "Host-based Scanning",
            "Network-based Scanning"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 278,
        "question": "During a penetration test in Dallas, Texas, ethical hacker Jason is attempting to bypass MAC-based filtering rules enforced by a network firewall. To avoid having his real MAC address logged and to increase stealth while scanning the internal host at 10.10.1.11, he decides to randomize his MAC address. Which of the following Nmap commands should he use?",
        "options": [
            "nmap -sT -Pn --spoof-mac Dell 10.10.1.11",
            "nmap -sT - Pn --spoof-mac 00:01:02:25:56:AE 10.10.1.11",
            "nmap -sT - Pn 10.10.1.11",
            "nmap -sT -Pn --spoof-mac 0 10.10.1.11"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 279,
        "question": "In the rainy streets of Portland, Oregon, ethical hacker Ethan Brooks delves into the security layers of ShopSwift, a US-based e-commerce platform reeling from a recent data breach. Tasked with uncovering the method behind unauthorized account takeovers, Ethan examines login patterns across the platform’s user base. His investigation reveals a surge of automated login activity across multiple accounts, with a suspiciously high success rate. Determined to trace the root cause, Ethan compiles a detailed log to assist ShopSwift’s security team in restoring trust.\n\nWhich attack method is Ethan most likely uncovering in ShopSwift’s authentication system?",
        "options": [
            "Password Spraying",
            "Brute Force Attack",
            "Credential Stuffing",
            "Phishing Attacks"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 280,
        "question": "In the bustling tech hub of Silicon Valley, cybersecurity investigator Elena Martinez found herself deep into a late-night investigation at Horizon Tech Solutions on July 7.2025. The company had reported sporadic network disruptions affecting their research team’s access to critical project files. Elena, working under the cover of a maintenance window from midnight to 3 AM PDT, began monitoring the internal network, focusing on a subnet reserved for the R&D department. She noticed a pattern of failed connection attempts logged just before each disruption, with multiple hosts reporting temporary IP address conflicts. Suspecting foul play, Elena deployed a discreet test to simulate an internal threat scenario. Shortly afterward, several workstations began showing unfamiliar gateway settings and redirected users to misleading login portals during routine access attempts. Despite these anomalies, no security alerts were triggered.\n\nWhat type of attack technique did Elena most likely simulate?",
        "options": [
            "DHCP Starvation Attack",
            "Packet Sniffing",
            "MAC Flooding",
            "Rogue DHCP Server Attack"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 281,
        "question": "John, a penetration tester at a Los Angeles-based online gaming company, is analyzing the company’s cloud infrastructure after a recent security breach caused unexpected downtime and delayed alerts. His investigation reveals that the attackers remained undetected, due to the absence of mechanisms that track function-level activity and capture anomalous events. The backend architecture for matchmaking and in-game purchases is serverless, increasing the importance of robust security measures.\n\nSo, which cloud computing threat should John prioritize to prevent similar breaches?",
        "options": [
            "Insufficient logging and monitoring ",
            "Privilege escalation",
            "Loss of governance",
            "Side-channel attacks"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 282,
        "question": "During a security penetration test at Sterling Manufacturing in Cleveland, Ohio, the ethical hacking team evaluates the company’s physical security controls. On a chilly evening in July 2025, ethical hacker Priya Desai, posing as a facilities contractor, accesses the company’s loading dock area after regular business hours. Behind the employee entrance, she comes across an unsecured maintenance container with discarded packaging, shipping labels, and shredded office material. Among the clutter, Priya retrieves a crumpled document listing temporary access codes for the employee break room, along with a partially shredded memo referencing an upcoming audit. The exercise tests whether sensitive information discarded improperly can be exploited. The next day, Priya uses the recovered access codes to enter the break room undetected during a shift change, logging her entry on a controlled test system to simulate a breach.\n\nWhat social engineering technique is Priya’s exercise primarily simulating?",
        "options": [
            "Tailgating",
            "Eavesdropping",
            "Dumpster Diving ",
            "Shoulder Surfing"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 283,
        "question": "In Boston, Massachusetts, network administrator Daniel Carter is monitoring the IT infrastructure of New England Insurance, a prominent firm, after receiving alerts about sluggish system performance. While reviewing traffic patterns, Daniel observes an unusual volume of concurrent requests overwhelming critical servers. To validate his suspicion of a session hijacking attempt, he begins capturing and reviewing live network traffic to identify unauthorized session behaviors before escalating to the security team.\n\nWhat detection method should Daniel use to confirm the session hijacking attack in this scenario?",
        "options": [
            "Use an intrusion detection system (IDS)",
            "Check for predictable session tokens",
            "Monitor for ACK storms",
            "Perform manual packet analysis using packet sniffing tools"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 284,
        "question": "In Seattle, Washington, ethical hacker Mia Chen is tasked with testing the network defenses of Pacific Shipping Co., a major logistics firm. During her penetration test, Mia targets the company’s external-facing web server, which handles customer tracking requests. She observes that the security system filtering traffic to this server analyzes incoming SSH and DNS requests to block unauthorized access attempts. Mia plans to craft specific payloads to bypass this system to expose vulnerabilities to the IT department.\n\nWhich security system is Mia attempting to bypass during her penetration test of Pacific Shipping Co.’s web server?",
        "options": [
            "Stateful Multilayer Inspection Firewall",
            "Application-Level Firewall",
            "Packet Filtering Firewall",
            "Circuit-Level Gateway Firewall"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 285,
        "question": "During an internal red team simulation at a global insurance provider, Joe, a senior SOC analyst, is assigned to verify if a surge in anomalous SYN packets targeting the perimeter firewall is the result of spoofed IP traffic. The organization has ruled out DNS poisoning and malformed header issues. Joe must now analyze packet behavior in real-time to determine authenticity without relying on host-level authentication.\n\nTo identify spoofed traffic using techniques aligned with best practices taught in the organization, which approach should Joe take?",
        "options": [
            "TCP Flow Control Method",
            "IP Address Decoy",
            "Direct TTL Probes",
            "IP Identification Number (IPID) Monitoring"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 286,
        "question": "In a bustling tech firm in Seattle, Michael, an ethical hacker, is conducting a security assessment to identify potential risks. During his evaluation, he notices that sensitive employee details and system configurations have been exposed through public forums, likely due to careless online behavior. His manager suspects this could lead to unauthorized access or data theft. As part of his testing, what type of threat should Michael focus on to simulate the adversary’s method of gathering this exposed information?",
        "options": [
            "Corporate Espionage",
            "Social Engineering",
            "System and Network Attacks",
            "Information Leakage"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 287,
        "question": "At a cybersecurity consultancy firm in Boston, senior analyst Amanda Liu is called in to assess a malware outbreak affecting a regional healthcare provider. Despite using updated antivirus tools, the security team notices inconsistent detection across infected endpoints. Amanda discovers that while the malicious behavior is consistent system file tampering and suspicious outbound traffic each malware sample has a slightly different code structure and fails traditional hash-based comparison. Static analysis reveals that the underlying logic remains unchanged, but the code patterns vary unpredictably across infections.\n\nWhat type of virus is most likely responsible for this behavior?",
        "options": [
            "Cavity virus",
            "Macro virus",
            "Polymorphic virus",
            "Stealth virus"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 288,
        "question": "A cybersecurity team at a regional healthcare provider is conducting an internal red team exercise to assess their exposure to service enumeration attacks. Amanda, a senior penetration tester, is assigned to probe the internal network for services that may reveal usernames, group information, or system details without requiring prior authentication. She decides to target common services running on specific ports that are often misconfigured or loosely monitored.\n\nDuring her reconnaissance, Amanda identifies several open ports across various hosts and must now prioritize which ones to probe first for maximum information gain related to enumeration. Which of the following services should Amanda target as a priority to enumerate usernames and group information without authentication?",
        "options": [
            "TCP 139 and UDP 137, 138 ",
            "TCP 21 and UDP 137",
            "TCP 23 and UDP 137, 138",
            "TCP 25 and UDP 138"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 289,
        "question": "Under the neon glow of Seattle’s skyline, ethical hacker Elena Vasquez slips into her role as a cybersecurity consultant for Cascade Financial’s online banking platform. Tasked with probing the web server’s defenses, Elena simulates a series of rapid login attempts to the admin portal. She notes that the system allows unlimited tries without locking the account, exposing a gap that could invite relentless password guessing attacks. Determined to shield the bank’s assets, Elena drafts a recommendation to fortify the server’s authentication process against such threats.\n\nWhat countermeasure should Elena recommend to strengthen Cascade Financial’s web server against the vulnerability she identified?",
        "options": [
            "Implement 2FA or MFA",
            "Force users to periodically change passwords",
            "Use CAPTCHA challenges on login and registration pages",
            "Use strong, one-way hashing algorithms such as bcrypt, scrypt, or Argon2"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 290,
        "question": "In Denver, Colorado, ethical hacker Sophia Nguyen is hired by Rocky Mountain Insurance to assess the effectiveness of their network security controls. During her penetration test, she attempts to evade the company’s firewall by fragmenting malicious packets to avoid detection. The IT team, aware of such techniques, has implemented a security measure to analyze packet contents beyond standard headers. Sophia’s efforts are thwarted as the system identifies and blocks her fragmented packets.\n\nWhich security measure is the IT team most likely using to counter Sophia’s firewall evasion attempt?",
        "options": [
            "Deep Packet Inspection",
            "Anomaly-Based Detection",
            "Signature-Based Detection",
            "Stateful Packet Inspection"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 291,
        "question": "On July 25, 2025, during a security assessment at Apex Technologies in Boston, Massachusetts, ethical hacker Sophia Patel conducts a penetration test to evaluate the company’s defenses against a simulated DDoS attack targeting their e-commerce platform. The simulated attack floods the platform with traffic from multiple sources, attempting to overwhelm server resources. The IT team activates a specific tool that successfully mitigates the attack by distributing traffic across multiple servers and filtering malicious requests. Sophia’s test aims to verify the effectiveness of this tool in maintaining service availability.\n\nWhich DoS/DDoS protection tool is most likely being utilized by the IT team in this scenario?",
        "options": [
            "Web Application Firewall (WAF)",
            "Load Balancer",
            "Intrusion Prevention System (IPS)",
            "Firewall"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 292,
        "question": "As part of a penetration test for a financial firm’s smart headquarters in Denver, Colorado, ethical hacker Jordan Lee begins evaluating the IoT infrastructure responsible for lighting, HVAC, and badge-controlled access. Jordan documents details such as device models, manufacturer names, firmware versions, and supported protocols like Zigbee and BLE. This information is used to understand the device ecosystem. Which step of the IoT hacking methodology is being carried out in this phase?",
        "options": [
            "Information gathering",
            "Launch attacks",
            "Vulnerability scanning",
            "Gain remote access"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 293,
        "question": "On 10th of July this year, during a security penetration test at IntelliCore Systems in Raleigh, North Carolina, the ethical hacking team evaluates the stability of the company’s file-sharing server. Sofia crafts and transmits a sequence of oversized, malformed packets designed to test how the server handles unexpected input. Shortly after, the system begins crashing intermittently due to processing failures triggered by these anomalous network requests. The security team onsite is tasked with identifying the root cause behind the packet-induced instability and attributing it to a known DoS tactic.\n\nWhich of the following best explains the technique Sofia used to trigger the server crashes?",
        "options": [
            "ICMP Flood Attack",
            "Ping of Death (PoD)",
            "Smurf Attack",
            "ACK Flood Attack"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 294,
        "question": "On July 25, 2025, during a penetration test at Horizon Financial Services in Chicago, Illinois, cybersecurity specialist Laura Bennett is analyzing an attack simulation targeting the company’s online banking portal. The system logs reveal a coordinated barrage of traffic from multiple compromised systems, orchestrated through a central command-and-control server, flooding the portal and rendering it unavailable to legitimate users. The attack leverages a network of infected devices, likely recruited via malicious links on social media.\n\nWhat is the structure or concept most likely used to launch this coordinated attack?",
        "options": [
            "Smurf Attack",
            "Distributed Reflection Denial-of-Service (DRDoS)",
            "Botnet",
            "Central Source Propagation"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 295,
        "question": "Emily, a security engineer at a Chicago-based healthcare provider, is auditing the organization’s new cloud environment after a breach where sensitive patient records were exposed. Her investigation reveals that the root cause was the lack of encryption during data transmission between end-user devices and cloud storage. To mitigate this issue and align with HIPAA compliance requirements, Emily must prioritize addressing the correct cloud computing security risk.\n\nWhich cloud computing threat should Emily address to mitigate the risk of sensitive data being exposed during transmission?",
        "options": [
            "Multi-Tenancy and Physical Security",
            "Incidence Analysis and Forensic Support",
            "Service and Data Integration",
            "Infrastructure Security"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 296,
        "question": "During a security penetration test at ABC Financial Services in Miami, Florida, on July 9, 2025, ethical hacker Javier Morales targets the company’s online banking portal to assess its resilience. Over several hours, the portal’s web server begins to falter, with legitimate users reporting inability to log in or complete transactions. The IT team notices the server is struggling to accept new connections, as its maximum connection limit is nearly reached, despite no significant spike in overall network traffic. Javier’s controlled test, run from a secure system, logs interactions to simulate a real attack, aiming to evaluate the IT team’s ability to identify the threat. What DoS/DDoS attack technique is Javier’s exercise primarily simulating?",
        "options": [
            "Slowloris Attack",
            "UDP Flood Attack",
            "Peer-to-Peer Attack",
            "SYN Flood Attack"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 297,
        "question": "In Dallas, Texas, ethical hacker Ethan Brooks is hired by Lone Star Credit Union to assess the security of their online banking portal, which processes customer transactions. During his penetration test, Ethan probes the web server hosting the portal, experimenting with crafted URL requests. He notices that by altering the URL parameters in a specific way, the server returns data from areas of the system that should be restricted, revealing configuration files not intended for public access. Suspecting this behavior indicates a vulnerability, Ethan documents the issue to help the security team strengthen their defenses against potential unauthorized access.\n\nWhich technique is Ethan most likely using to uncover the vulnerability in Lone Star Credit Union’s web server?",
        "options": [
            "Password Cracking",
            "Web Cache Poisoning",
            "HTTP Response Splitting",
            "Directory Traversal"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 298,
        "question": "During a cybersecurity awareness drill at Quantum Analytics in San Francisco, California, the ethical hacking team tests the company’s defenses against social media-based threats. Nadia creates a fake LinkedIn profile posing as a senior HR manager from Quantum Analytics, using a stolen company logo and publicly available employee details. Nadia sends connection requests to several employees, including data analyst Priya Sharma, inviting them to join a private group called “Quantum Analytics Innovation Hub.” The group’s page prompts members to share their work email and department role for “exclusive project updates.”\n\nWhat social engineering threat to corporate networks is Nadia’s exercise primarily simulating?",
        "options": [
            "Loss of Productivity",
            "Involuntary Data Leakage",
            "Spam and Phishing",
            "Network Vulnerability Exploitation"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 299,
        "question": "You are Olivia Chen, an ethical hacker at CyberGuardians Inc., hired to test the wireless network of Skyline Media, a broadcasting company in Chicago, Illinois. Your mission is to breach their WPA2-protected Wi-Fi during a late-night penetration test. Using a laptop in monitor mode, you execute a command to transmit packets that force client devices to disconnect and reconnect, enabling you to capture a four-way handshake for cracking. Based on the described action, which tool are you using?",
        "options": [
            "Aircrack-ng",
            "Airbase-ng",
            "Aireplay-ng ",
            "Airodump-ng"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 300,
        "question": "In the crisp mountain air of Denver, Colorado, ethical hacker Lila Chen investigates the security framework of MediVault, a US-based healthcare platform used by regional clinics to manage patient data. During her assessment, Lila manipulates session parameters while navigating the patient portal’s dashboard. Her tests reveal a critical flaw: the system allows users to access sensitive medical records not associated with their own account, enabling unauthorized changes to private health data. Upon deeper inspection, Lila determines that the issue stems from the application allowing users to perform actions beyond their assigned roles – rather than failures in encryption, unsafe object handling, or server configuration.\n\nWhich OWASP Top 10 2021 vulnerability is Lila most likely exploiting in MediVault’s web application?",
        "options": [
            "Security Misconfiguration",
            "Insecure Deserialization",
            "Cryptographic Failures",
            "Broken Access Control "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    }
];
