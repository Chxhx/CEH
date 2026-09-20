const questionsBatch8 = [
    {
        "id": 701,
        "question": "A cybersecurity firm in Reston, Virginia is contracted to investigate a cluster of endpoint alerts affecting multiple employees of a satellite communications manufacturer. The affected employees all work in orbital systems engineering and regularly access a specialized industry forum used for regulatory updates and technical advisories.\n\nSecurity logs indicate that each compromised workstation visited the same trusted industry website shortly before establishing unusual outbound connections. The site continues to operate normally for general visitors. Further analysis shows that a recently added script conditionally loads additional content only when specific environmental attributes - such as originating organization and browser profile - match predefined conditions. The observed activity stems from routine browsing of a site frequently visited by professionals within that sector.\n\nWhich web application attack category best describes this technique?",
        "options": [
            "Cross-Site Scripting (XSS)",
            "Watering Hole Attack",
            "JavaScript Hijacking",
            "Magecart Attack"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 702,
        "question": "At a smart grid development company in Portland, Oregon, analysts isolated several infected executable files from different endpoints. Each infected file demonstrated the same payload behavior, including registry persistence and outbound communication attempts.\n\nHowever, binary comparison revealed that no consistent decryptor routines, recurring code segments, or stable structural patterns could be traced between the samples. Although the operational intent remained unchanged, the internal composition of each infection appeared uniquely reconstructed.\n\nDetermine the virus subtype that most accurately matches this behavior.",
        "options": [
            "Logic Bomb Virus",
            "Sparse Infector Virus",
            "Metamorphic Virus ",
            "Polymorphic Virus"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 703,
        "question": "During a red team simulation at Dominion Energy Analytics in Richmond, Virginia, an assessor crafts a malicious document containing embedded code designed to take advantage of a known application weakness. After transmitting the document to a targeted employee, the embedded code executes successfully when the file is opened. Immediately following successful code execution, the compromised workstation begins initiating outbound connections to a remote system controlled by the red team, allowing instructions to be issued and data to be exchanged.\n\nWithin the Cyber Kill Chain methodology, which stage does the establishment of this remote communication channel represent?",
        "options": [
            "Actions on Objectives",
            "Command and Control",
            "Installation",
            "Exploitation"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 704,
        "question": "Ethan works as a penetration tester at CyberGuard Solutions, a cybersecurity consulting firm in Raleigh, North Carolina. During an authorized security assessment of a regional insurance company, Ethan was provided with a set of password hashes to evaluate the strength of employee-generated credentials.\n\nTo test resistance against word-based password creation patterns, Ethan supplied a single custom wordlist containing common organizational terms and department names into his cracking tool. The tool automatically generated password candidates by linking multiple entries from that same list in varying combinations before attempting to match them against the hashes.\n\nThis approach proved highly effective against passwords formed by concatenating familiar words.\n\nWhich of the following password-cracking techniques is Ethan using?",
        "options": [
            "PRINCE Attack",
            "Combinator Attack ",
            "Markow-Chain Attack",
            "Fingerprint Attack"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 705,
        "question": "As part of an authorized security assessment at a maritime logistics firm in Charleston, South Carolina, an ethical hacker evaluated the organization's resilience to coordinated endpoint compromise.\n\nEmployees received a carefully crafted email attachment disguised as a routine operational update. After execution on several systems, monitoring tools later revealed that the infected machines periodically contacted an external host controlled by the tester.\n\nOver time, the compromised systems began receiving commands from a centralized control server and simultaneously generated coordinated network traffic toward designated targets when instructed, without any direct user interaction.\n\nFrom a malware classification standpoint, what component is being simulated in this scenario?",
        "options": [
            "Spyware",
            "Scareware",
            "Potentially Unwanted Applications (PUAs)",
            "Botnet Agents "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 706,
        "question": "A health-tech startup in Raleigh, North Carolina operates a Kubernetes cluster supporting patient-facing microservices. During an authorized security assessment, a certified ethical hacker reviews internal cluster activity records available to operations personnel.\n\nWhile analyzing these records, the tester notices that authentication artifacts associated with service accounts are recorded within system-generated output. The tester determines that if an individual obtained access to these records, they could reuse the captured authentication material to interact with cluster resources under the same privileges.\n\nWhich Kubernetes vulnerability best corresponds to this condition?",
        "options": [
            "No Certificate Revocation",
            "Unauthenticated HTTPS Connections",
            "No Non-repudiation",
            "Exposed Bearer Tokens in Logs "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 707,
        "question": "A multinational payment processor conducts a long-term risk assessment to evaluate the durability of its encrypted archives against future computational advances. Internal analysts warn that if large-scale quantum computers become operational, currently deployed public-key schemes protecting stored customer data may become vulnerable to rapid key recovery.\n\nTo maintain long-term confidentiality of archived financial records, the security architecture team must implement a defensive strategy that directly addresses cryptographic resilience rather than relying solely on network segmentation or development policy controls.\n\nDetermine the most appropriate mitigation to protect stored data against quantum-enabled decryption capabilities.",
        "options": [
            "Use quantum-specific firewalls to protect quantum communication channels",
            "Break data into fragments and distribute it across multiple locations",
            "Encrypt stored data with quantum-resistant algorithms ",
            "Include quantum-resistance checks in SDLC and code review processes"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 708,
        "question": "Olivia works as a senior red team specialist at SecureMatrix Labs in Portland, Oregon. During a controlled adversarial simulation, she deployed a stealth persistence mechanism on a test workstation to evaluate advanced defensive detection capabilities.\n\nAfter rebooting the system, the operating system continued to function normally, but subsequent investigation revealed that the OS was executing within an underlying control layer established before full system initialization. This layer intercepted low-level CPU instructions and mediated direct hardware interactions prior to their delivery to the operating system.\n\nWhich type of rootkit best describes the mechanism deployed in this scenario?",
        "options": [
            "Application-Level/User-Mode Rootkit",
            "Kernel-Level Rootkit",
            "Hypervisor-Level Rootkit ",
            "Boot-Loader-Level Rootkit"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 709,
        "question": "A large online retail platform in Seattle, Washington, maintains continuous telemetry of inbound network flows to detect abnormal surges that may indicate a distributed denial-of-service condition.\n\nDuring a recent monitoring exercise, the security engineering team implemented a statistical mechanism that continuously evaluates streaming traffic metrics and mathematically determines the exact point at which normal behavior shifts into an anomalous state. Rather than comparing traffic against static baselines or clustering historical profiles, the system dynamically identifies the precise moment when distribution characteristics deviate beyond an established threshold.\n\nThis approach is designed to flag sudden structural changes in traffic behavior in near real time, even if the overall traffic volume appears similar to prior peaks.\n\nWhich detection technique is being applied in this scenario?",
        "options": [
            "Wavelet-Based Signal Analysis",
            "Traffic Pattern Analysis",
            "Activity Profiling",
            "Sequential Change-Point Detection "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 710,
        "question": "During an authorized security assessment at a municipal power distribution facility in Omaha, Nebraska, a certified ethical hacker performs passive traffic analysis between the control center and several remote substations.\n\nThe tester observes structured request-response messages used to read coil status and write register values on industrial controllers. All communication occurs over TCP port 502, and the protocol does not provide built-in encryption or authentication.\n\nBased on these characteristics, which OT communication protocol is operating within this environment?",
        "options": [
            "IEC 60870-S-104",
            "MODBUS ",
            "DNP3",
            "OPC UA"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 711,
        "question": "During an internal investigation at a healthcare billing firm in Denver, Colorado, the security team analyzes suspicious activity involving a senior accountant's corporate smartphone. The user reports that the device behaved normally and that no links were clicked or applications installed during the timeframe in question.\n\nTelecom monitoring reveals that the device received several binary-formatted SMS messages shortly before the incident. These messages were not visible in the messaging application. Within minutes of receiving them, the phone began transmitting cellular location identifiers and device-related data to an unfamiliar external system. The transmissions occurred automatically and did not require any user interaction.\n\nWhich mobile attack technique most accurately explains this behavior?",
        "options": [
            "Call Spoofing",
            "QTP Hijacking",
            "SMiShing",
            "SIMjacker "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 712,
        "question": "A multinational manufacturing company in San Jose, California has deployed a perimeter firewall to protect its internal production networks. During a red team exercise, testers observe that the device monitors active TCP communications and allows traffic to continue only when packets correspond to recognized, previously established connections.\n\nThe firewall evaluates multiple header attributes across ongoing communications while operating inline at the network boundary.\n\nFrom a firewall architecture perspective, what type of Firewall is most likely in use at this perimeter?",
        "options": [
            "Stateful Multilayer Inspection Firewall ",
            "Circuit-Level Gateway Firewall",
            "Application-Level Firewall",
            "Packet Filtering Firewall"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 713,
        "question": "Arjun Mehta, a red team specialist at Sentinel Dynamics, is conducting a controlled reconnaissance assessment against the company's perimeter network. During testing, the security operations team observes that the firewall logs display several different originating systems associated with the same scanning activity, Arjun's objective is to ensure that his actual testing machine cannot be easily distinguished from other recorded entries. What technique is Arjun using in this scenario?",
        "options": [
            "Source Routing",
            "IP Address Decoy ",
            "Source Port Manipulation",
            "IP Address Spoofing"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 714,
        "question": "During an authorized security assessment of a smart home product manufacturer in San Jose, California, a certified ethical hacker evaluates the web-based management interface used to configure connected IoT cameras and lighting controllers.\n\nThe tester discovers that when an internal user visits a specially crafted external website, the browser automatically initiates requests to a locally hosted device management interface within the user's private network.\n\nWhich attack technique best explains this behavior?",
        "options": [
            "Forged Malicious Device Attack",
            "SDR-Based Attack",
            "DNS Rebinding Attack ",
            "Distributed Denial-of-Service (DDoS) Attack"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 715,
        "question": "A mid-sized insurance provider in Hartford, Connecticut authorizes a controlled red team engagement to evaluate its public-facing customer portal. Before progressing to active exploitation, the assessment team concentrates on understanding how the site is organized and how its content is interconnected.\n\nUsing automated tooling, they systematically retrieve publicly accessible pages along with associated resources such as scripts, media files, and referenced directories. The collected material allows the team to analyze navigation paths, hidden references, and structural relationships without repeatedly interacting with the live production system.\n\nThis preparatory effort is intended to build a detailed structural understanding of the application before later testing phases begin.\n\nWithin the web server attack methodology, which stage is most accurately demonstrated in this scenario?",
        "options": [
            "Website Mirroring ",
            "Information Gathering",
            "Web Server Footprinting",
            "Vulnerability Scanning"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 716,
        "question": "A smart building management company in Seattle, Washington deploys wireless door sensors and badge-based access systems throughout its corporate headquarters. During a security assessment, an analyst captures legitimate radio transmissions between employee access badges and the entry control units.\n\nLater that evening, without modifying or decrypting the original communication, the analyst retransmits the previously captured signal toward a secured entrance. The access control system accepts the transmission as valid and unlocks the door, even though the legitimate badge is not present.\n\nDetermine the attack technique demonstrated in this assessment.",
        "options": [
            "BlueBorne Attack",
            "Replay Attack ",
            "Rolling Code Attack",
            "Sybil Attack"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 717,
        "question": "Following a suspected data breach at a pharmaceutical research lab in Cambridge, Massachusetts, forensic examiners identified several research documents that had been removed from normal directory listings on a compromised server.\n\nWhen analysts examined the physical storage sectors previously associated with those files, they found that the sector contents no longer matched the historical allocation records, and no recognizable fragments of the original material could be reconstructed. The disk structure itself remained intact, and the storage medium showed no signs of hardware-level destruction.\n\nWhich anti-forensics technique best explains the attacker's actions in this scenario?",
        "options": [
            "Data hiding in file system structures",
            "Data/file deletion",
            "Overwriting data/metadata ",
            "Artifact wiping"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 718,
        "question": "In Miami, Florida, cybersecurity analyst Laura Bennett is investigating unauthorized access incidents affecting Sunshine Credit Union's online banking platform. Audit logs reveal that compromised accounts consistently involve users who accessed the portal through specially crafted links sent via email.\n\nThe links direct victims to the legitimate website, where they proceed to authenticate successfully. Shortly afterward, unauthorized access to the same accounts is observed without any additional credential guessing or brute-force activity.\n\nFurther examination shows that a value associated with the user's interaction with the application remains unchanged throughout the authentication process and can be introduced before the user completes sign-in.\n\nWhich countermeasure should Laura implement to prevent this type of account takeover?",
        "options": [
            "Use restrictive cache directives such as \"Cache-Control: no-cache\"",
            "Implement SSL to encrypt all information in transit via the network",
            "Regenerate the session ID after a successful login ",
            "Do not create sessions for unauthenticated users"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 719,
        "question": "A national e-commerce retailer experiences a sustained distributed attack that saturates its edge connectivity with high-volume traffic originating from thousands of globally dispersed hosts. Internal mitigation attempts such as ACL tuning and rate limiting fail to restore service stability.\n\nAfter escalating the issue, the organization coordinates with its upstream connectivity provider, which begins rerouting inbound traffic through a large-scale filtering infrastructure capable of absorbing and scrubbing malicious traffic before forwarding legitimate requests back to the retailer's network.\n\nWhat defensive approach is being applied in this scenario?",
        "options": [
            "Implementing RFC 3704 filtering at the network edge",
            "Enabling Cisco IPS Source IP reputation filtering",
            "Leveraging DDoS prevention offerings from an ISP or DDoS mitigation service ",
            "Deploying Black Hole filtering at the routing layer"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 720,
        "question": "A manufacturing company in Columbus, Ohio, reported a surge in internal support tickets after employees received an alarming email appearing to originate from an independent cybersecurity researcher.\n\nThe message claimed that a newly discovered malware strain was actively targeting corporate email systems and stated that several Fortune 500 organizations had already been compromised. It encouraged recipients to immediately circulate the message within their departments \"to minimize exposure,\" warning that failure to act quickly could result in data loss.\n\nThe email did not request credentials, payment, or direct downloads. However, it relied heavily on dramatic language and cited unverifiable statistics to increase urgency and credibility.\n\nFrom a social engineering classification standpoint, how should this technique be categorized?",
        "options": [
            "Scareware designed to trick users into installing rogue software",
            "Spam Email used for mass unsolicited distribution",
            "Chain Letters that incentivize forwarding messages",
            "Hoax Letters that spread false security warnings "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 721,
        "question": "An internal audit at a pharmaceutical research company in San Diego, California, revealed that a directory server was reachable from a restricted testing subnet. Security analyst Daniel Harper initiated a basic directory query using simple authentication to validate connectivity. The query succeeded, confirming that the server was responding to unauthenticated search requests.\n\nTo understand the structural layout of the directory before performing deeper queries, Daniel needed to retrieve the base-level naming context entries exposed by the server. His objective was to identify the root domain components and configuration partitions before constructing targeted search filters.\n\nWhich command should Daniel execute to obtain the directory naming context information?",
        "options": [
            "ldapsearch -x -h -b \"DC=htb,DC=local\" \"objectclass=*\"",
            "ldapsearch -h -x",
            "ldapsearch -h -x -b \"DC=htb,DC=local\"",
            "ldapsearch -h -x -s base namingcontexts "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 722,
        "question": "During a red team engagement against a multinational financial services organization, an ethical hacker conducts network reconnaissance against externally accessible systems. Instead of sending scan traffic directly from the originating assessment machine, the tester routes all reconnaissance packets through an intermediary external system before they reach the target network.\n\nWhen the organization's security team reviews monitoring data, the activity appears to originate from infrastructure unrelated to the tester's actual geographic or organizational location.\n\nFrom a reconnaissance methodology perspective, what is the primary objective of using this intermediary system?",
        "options": [
            "To establish persistent access within the target network",
            "To bypass authentication controls protecting internal applications",
            "To conceal the origin of reconnaissance activity and reduce attribution risk",
            "To spoof packet source addresses at the IP layer"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 723,
        "question": "An organization authorizes a wireless penetration test to evaluate the resilience of its WPA2-protected network. The assigned ethical hacker prepares the wireless adapter for packet capture and begins monitoring traffic from a nearby access point.\n\nTo accelerate the assessment, the tester transmits crafted 802.11 frames that momentarily interrupt active client connections. Shortly afterward, new authentication exchanges are observed in the capture logs, providing the necessary material for subsequent analysis.\n\nThe activity described corresponds to which component of the Aircrack-ng suite?",
        "options": [
            "airodump-ng",
            "airmon-ng",
            "aircrack-ng",
            "aireplay-ng "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 724,
        "question": "A national logistics company in Atlanta, Georgia maintains a segmented research VLAN inside its primary data center to study emerging supply-chain targeting tactics. The environment includes enterprise-grade server platforms hosting web applications, database services populated with curated operational data, and identity services configured to resemble production access structures.\n\nDuring a red team engagement, external adversaries who gained initial access were observed interacting with systems inside this VLAN for several days. They escalated privileges, accessed structured data repositories, moved between internal hosts, and attempted to reach additional internal segments. All activity occurred within the controlled environment and was instrumented to capture attacker techniques in depth.\n\nWhich honeypot deployment model most accurately describes this research environment?",
        "options": [
            "Low-interaction Honeypot",
            "High-interaction Honeypot ",
            "Pure Honeypot",
            "Medium-interaction Honeypot"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 725,
        "question": "A university authorizes a wireless protocol resilience assessment on its WPA2-secured network. An ethical hacker positions a testing device within range of an access point and observes the key negotiation exchange between the client and the access point.\n\nBy selectively retransmitting a previously captured handshake message at a precise moment in the exchange, the tester causes the client device to reinstall an already negotiated encryption key. Subsequent traffic patterns reveal that certain protections expected from unique session parameters are no longer consistently enforced.\n\nWhat kind of wireless attack technique is being illustrated in this scenario.",
        "options": [
            "Key Reinstallation Attack (KRACK) ",
            "Replay Attack",
            "Man-in-the-Middle Attack",
            "WPA2 PSK Offline Cracking"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 726,
        "question": "A financial institution in Chicago deploys an internal HTTPS-based customer portal that uses response compression to optimize bandwidth. During an authorized security assessment, a tester gains a vantage point along the communication path between internal clients and the gateway device.\n\nBy repeatedly initiating controlled requests and analyzing subtle differences in encrypted response sizes, the tester correlates variations in compressed output with specific input patterns. Over time, this analysis enables extraction of portions of a protected authentication value transmitted within the secure channel.\n\nWhich session hijacking technique best describes this activity?",
        "options": [
            "Forbidden attack",
            "CRIME attack ",
            "Man-in-the-Browser (MITB) attack",
            "Man-in-the-Middle (MITM) attack"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 727,
        "question": "A threat intelligence review at a manufacturing firm in Pittsburgh, Pennsylvania, revealed repeated external queries targeting the organization's public name servers. Although no intrusion occurred, analysts observed that the queries appeared designed to systematically map internal naming conventions and infrastructure patterns.\n\nThe security team determined that the issue was not excessive traffic volume but rather the exposure of internal namespace details through responses handled by the same server used for both internal and external resolution. To reduce the risk of disclosing sensitive structural information to outside systems, the team redesigned their DNS deployment.\n\nWhich countermeasure best addresses the risk described in this scenario?",
        "options": [
            "Randomizing DNS source ports and query identifiers",
            "Implementing a split DNS architecture ",
            "Implementing rate limiting on DNS servers",
            "Enabling DNS logging and anomaly detection"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 728,
        "question": "A telecommunications provider in Toronto operates a monitoring platform that analyzes inbound traffic streams during suspected denial-of-service conditions. The system converts traffic measurements into signal components and evaluates their energy across multiple frequency ranges to distinguish abnormal traffic bursts from background network noise.\n\nRather than focusing on traffic baselines or identifying the exact statistical breakpoint where behavior changes, the platform identifies anomalies by decomposing traffic signals into spectral components for analysis.\n\nWhich DDoS detection technique is being used in this scenario?",
        "options": [
            "Traffic Pattern Analysis",
            "Sequential Change-Point Detection",
            "Activity Profiling",
            "Wavelet-Based Signal Analysis "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 729,
        "question": "A publicly traded blockchain startup conducts a forensic review after irregular transaction reversals are detected on its distributed ledger platform. Network telemetry indicates that a single coordinated entity controlled a dominant share of the computational power participating in block validation during the affected time window.\n\nAs a result, certain confirmed transactions were replaced with alternate versions, enabling double-spending before the broader network regained balance. No individual node isolation or transaction front-running behavior is observed - rather, the anomaly stems from disproportionate influence over block creation.\n\nIdentify the blockchain attack most consistent with this incident.",
        "options": [
            "Eclipse Attack",
            "Finney Attack",
            "51% Attack ",
            "DeFi Sandwich Attack"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 730,
        "question": "A municipal data center in Phoenix, Arizona, deploys a network intrusion detection system to monitor traffic entering its public records portal. During a scheduled red team exercise, authorized testers successfully exploit a vulnerable web service and gain restricted administrative access.\n\nPost-exercise review reveals that the IDS generated a high-severity alert precisely at the time the exploit traffic reached the server. Log correlation confirms that the alert corresponded directly to the malicious activity performed during the test window.\n\nHow should this IDS outcome be classified?",
        "options": [
            "False Negative",
            "True Positive ",
            "False Positive",
            "True Negative"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 731,
        "question": "During an authorized security assessment for a regional transportation authority in Sacramento, California, an ethical hacker is tasked with evaluating externally exposed web service interfaces used to exchange scheduling data with third-party transit applications.\n\nAs part of the engagement, the ethical hacker retrieves publicly accessible service description files and systematically analyzes them to understand the operations supported by the service. By reviewing these definitions, the tester identifies undocumented methods, expected input parameters, and response schemas that were not clearly outlined in the public integration documentation.\n\nThe activity provides a detailed understanding of the service's available capabilities before deeper testing begins.\n\nFrom the options below, identify the web service attack technique demonstrated in this scenario.",
        "options": [
            "SOAP Injection",
            "Application Logic Attacks",
            "XML Injection",
            "WSDL Probing Attacks "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 732,
        "question": "A regional insurance claims platform in Sacramento, California is protected by a web application firewall that evaluates inbound requests for suspicious query structures. During an authorized assessment, a tester observes that conventional injection attempts are consistently rejected.\n\nThe tester then adjusts the format and composition of the request while preserving its intended database behavior. After this modification, the request passes through the filtering mechanism and is processed by the backend system without disruption.\n\nWhich firewall evasion technique is being demonstrated?",
        "options": [
            "Splitting payload components using HTTP Parameter Fragmentation (HPF)",
            "Transforming query structure to evade pattern-based inspection ",
            "Combining multiple evasion methods through an integration approach",
            "Using HTTP Parameter Pollution (HPP) to override query parameters"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 733,
        "question": "Granite Ridge Technologies in New Jersey is preparing to formalize its information security governance model. Executive leadership requires adoption of an internationally recognized framework that ensures confidentiality, integrity, and availability of information while enabling the organization to systematically identify, assess, and manage information security risks. The framework must also support compliance with regulatory and contractual obligations and demonstrate commitment to stakeholders.\n\nWhich standard best fulfills these requirements?",
        "options": [
            "ISO/IEC 27001:2022 ",
            "ISO/IEC 27005:2022",
            "ISO/IEC 27701:2019",
            "ISO/IEC 27002:2022"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 734,
        "question": "A municipal services portal in Lexington, Kentucky includes a search parameter that retrieves citizen service requests. During an authorized security review, an analyst alters the parameter value by introducing single quotation marks, logical expressions such as AND 1=1, and variations like AND 1=2, observing how the application responds to each modification.\n\nBy comparing differences in the application's output and behavior after each structured input change, the analyst evaluates whether the parameter affects the underlying query processing.\n\nWhich SQL injection detection method is being applied?",
        "options": [
            "Static Testing",
            "Dynamic Testing ",
            "Function Testing",
            "Fuzz Testing"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 735,
        "question": "As part of a controlled red-team engagement, an ethical hacker evaluates the resilience of a corporate campus against radio-frequency disruption. The tester activates a portable multi-antenna signal suppression device from a nearby building.\n\nThe interference affects wireless communication across several departments within an estimated coverage radius of approximately 120 meters. The disruption persists for slightly over an hour before the device requires recharge. Analysis confirms that multiple frequency bands, including Wi-Fi and cellular standards, were simultaneously impacted.\n\nBased on the operational characteristics observed, identify the jamming device most consistent with this activity.",
        "options": [
            "PCB-1016 Jammer",
            "CPB-2612H-SG Jammer",
            "CPB-2920 Jammer ",
            "PCB-4510 Jammer"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 736,
        "question": "During a scheduled red team engagement at a regional investment firm in Phoenix, Arizona, security consultants were permitted limited after-hours access to employee workstations. As part of the evaluation, a small intermediary device was placed inline between a keyboard and its connected desktop system.\n\nOver time, the device began forwarding captured keystroke activity through the company's established wireless environment, allowing the assessment team to collect periodic log data without interacting further with the workstation.\n\nWhat type of keylogger does this scenario describe?",
        "options": [
            "Hardware Keylogger",
            "Acoustic/CAM Keylogger",
            "Wi-Fi Keylogger ",
            "Bluetooth Keylogger"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 737,
        "question": "During an internal assessment, a penetration tester sends specially crafted TCP packets to a target system without initiating a standard three-way handshake. Packet captures show that when these probes reach closed ports, the host responds with a TCP RST segment. However, when the probes reach open ports, the host does not return any response.\n\nFurther inspection of the probe structure reveals that the packets contain an uncommon combination of TCP control bits rather than a single flag.\n\nWhat scanning technique is being performed?",
        "options": [
            "FIN Scan",
            "UDP Scan",
            "TCP Connect Scan",
            "XMAS Scan "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 738,
        "question": "A regional investment firm in Denver, Colorado, recently migrated to a fully switched Ethernet infrastructure. During an authorized security evaluation, a consultant connected a test device to an access-layer switch and initiated a scripted network interaction.\n\nWithin minutes, administrators observed irregular switching behavior. Frames that were normally delivered directly between specific workstations began appearing across multiple switch ports. Users reported brief connectivity instability, but no configuration changes were made to the switch. After the activity subsided, forwarding operations gradually stabilized.\n\nBased on the observed behavior, which sniffing technique was most likely performed?",
        "options": [
            "Switch Port Stealing",
            "ARP Poisoning",
            "MAC Flooding ",
            "DNS Poisoning"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 739,
        "question": "A network administrator reviews logs and observes that an attacker sends packets requesting the target system's internal clock value. The response includes timing information that can be used to calculate round-trip delay and analyze host characteristics. What host discovery technique is being used in this scenario?",
        "options": [
            "UDP Ping Scan",
            "ICMP ECHO Ping Sweep",
            "IP Protocol Scan",
            "ICMP Timestamp Ping Scan "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 740,
        "question": "A private equity firm in Minneapolis, Minnesota allows employees to access internal reporting tools from their personally owned smartphones under its BYOD program. During a routine security assessment, a consultant observes that when an employee leaves their unlocked phone unattended, a colleague can immediately open the firm's financial application and review client investment records without any additional verification step inside the application.\n\nThe operating system itself requires a passcode to unlock the device, but once unlocked, corporate applications open directly to sensitive dashboards.\n\nIdentify the BYOD security guideline that would directly mitigate this exposure.",
        "options": [
            "Use encryption mechanism to store data",
            "Set a strong passcode on the device and change it relatively often",
            "Maintain a clear separation between business and personal data",
            "Set passwords for apps to restrict others from accessing them"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    }
];
