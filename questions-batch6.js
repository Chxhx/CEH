const questionsBatch6 = [
    {
        "id": 501,
        "question": "The various hping commands are as follows. During an authorized penetration test, a security analyst executes a TCP-based probe using hping without attempting to complete the three-way handshake. Packet analysis shows that closed ports return a TCP RST response, while open ports do not generate any reply. The crafted packets contain a non-standard combination of TCP control bits rather than relying on a single control flag. Which scanning technique is being performed?",
        "options": [
            "UDP scan on port 80",
            "ICMP ping",
            "FIN,PUSH and URG scan on port 80",
            "CK scan on port 80"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 502,
        "question": "Justin Fletcher is conducting an authorized assessment for EverSafe Technologies in Las Vegas. During the active reconnaissance phase, he interacts directly with the organization's infrastructure to retrieve structural details about how its public-facing systems are logically organized. His activity generates entries within the target environment's monitoring systems. Which type of active footprinting technique is Justin performing?",
        "options": [
            "User and service enumeration",
            "Network/port scanning",
            "DNS interrogation",
            "Social engineering"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 503,
        "question": "A defense contractor in Arlington, Virginia, initiated an internal awareness exercise to test employee susceptibility to human-based manipulation. During the assessment, an individual posing as an external recruitment consultant began casually engaging several engineers at a nearby industry networking event. Over multiple conversations, the individual gradually steered discussions toward current research initiatives, development timelines, and internal project code names. No direct requests for credentials or system access were made. Instead, the information was obtained incrementally through carefully crafted questions embedded within informal dialogue. Which social engineering technique is most accurately demonstrated in this scenario?",
        "options": [
            "Quid Pro Quo",
            "Baiting",
            "Elicitation",
            "Honey Trap"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 504,
        "question": "A U.S.-based online securities trading firm in New York is reviewing its transaction authentication process. The security team confirms that each transaction is processed by first generating a hash of the transaction data. The hash value is then signed using the sender's private key. During verification, the recipient uses the corresponding public key to validate the signature before approving the transaction. The system documentation specifies that the same algorithm supports encryption, digital signatures, and key exchange mechanisms within the organization's secure communications infrastructure. Which encryption algorithm is being used in this implementation?",
        "options": [
            "DSA",
            "RSA ",
            "ElGamal",
            "Diffie-Hellman"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 505,
        "question": "A financial clearinghouse in Newark, New Jersey, initiated a structured vulnerability review across its enterprise servers. The scanning platform was configured to collect detailed information about installed updates, local security configurations, and system policy settings on each target machine. The resulting report contained granular host-level findings, including configuration inconsistencies and patch gaps that required direct system-level inspection to obtain. Based on the activity described, what type of vulnerability scanning is being performed?",
        "options": [
            "Credentialed Scanning",
            "Application Scanning",
            "Automated Scanning",
            "Non-Credentialed Scanning"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 506,
        "question": "A digital forensics consultant in Portland, Oregon examines an iPhone seized as part of a corporate data leakage investigation. The device contains third-party extensions and system modifications not typically permitted by the operating system vendor. The owner explains that whenever the device is powered off and restarted, it boots normally and remains fully functional for everyday tasks such as calls and messaging. However, the custom extensions and system-level tweaks do not function until a specific jailbreak application installed on the device is manually executed. No external computer is required during this reactivation process. Determine the type of jailbreaking technique implemented on this device.",
        "options": [
            "Semi-Tethered Jailbreaking",
            "Untethered Jailbreaking",
            "Semi-Untethered Jailbreaking ",
            "Tethered Jailbreaking"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 507,
        "question": "A large-scale inventory management platform implements a pattern-based inspection layer to prevent malicious database interactions. During authorized testing, repeated payloads containing recognizable structural sequences are denied before reaching the application logic. While analyzing the inspection behavior, the tester observes that blocked requests share a consistent textual arrangement of components. The tester then alters how those components are presented within the payload while preserving the intended database operation. After this adjustment, the request bypasses the inspection layer and executes successfully, producing results consistent with earlier attempts. Determine the evasion method that best accounts for this behavior.",
        "options": [
            "Introducing inline comment delimiters to fragment instruction sequences",
            "Modifying spacing and delimiter placement to disrupt detection patterns ",
            "Constructing the payload dynamically through segmented string operations",
            "Transforming literal parameters using alternate character encoding schemes"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 508,
        "question": "Following reports of inconsistent IP-to-MAC mappings on an internal access switch at a manufacturing company in Detroit, Michigan, the network security team enabled additional validation controls. Soon afterward, the switch began automatically discarding certain ARP replies that did not match previously recorded IP address assignments. Log entries indicated that packets were being denied due to validation failures tied to existing address-to-port mappings learned earlier from legitimate host configuration traffic. Which switch-level security feature is most likely responsible for enforcing this ARP validation behavior?",
        "options": [
            "Activating Dynamic ARP Inspection to validate ARP packets ",
            "Configuring BPDU Guard to protect spanning-tree topology",
            "Enabling DHCP Snooping to track address assignments",
            "Displaying the DHCP Snooping binding table for verification"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 509,
        "question": "During a compliance audit at a logistics company in Columbus, Ohio, the mobile security team discovers that several field-issued Android devices are responding to remote commands from an unknown external system. The affected devices are not connected via USB, and no enterprise mobility policies were recently modified. Network monitoring reveals that the devices have remote debugging enabled and are accepting connections over the wireless network on a specific high-numbered port commonly associated with remote device communication. Investigators determine that the external system was able to capture screenshots, list installed applications, forward ports, and install additional packages without requiring physical access to the devices. Which attack technique most accurately explains this compromise?",
        "options": [
            "Android Rooting",
            "FRP Bypass",
            "ADB Exploitation via TCP 5555 ",
            "Device Administration API Abuse"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 510,
        "question": "A technology consulting firm in Portland, Oregon began experiencing repeated topology recalculations across its switching infrastructure. Shortly after a newly connected device came online in a conference room, spanning-tree convergence events were triggered across multiple distribution switches. Engineers determined that the access-layer interface connected to that device was influencing path-selection decisions, introducing a more favorable bridge priority value into the environment and affecting the established hierarchy. To preserve the intended switching structure and prevent unauthorized devices from altering root selection decisions, which control should be employed?",
        "options": [
            "Configuring Loop Guard on non-designated ports",
            "Activating UDLD (Unidirectional Link Detection) on uplinks",
            "Enabling BPDU Guard on edge ports",
            "Applying Root Guard on designated interfaces "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 511,
        "question": "A national retail chain headquartered in Minneapolis, Minnesota operates a customer rewards portal supported by front-end delivery layers designed to improve performance during peak shopping periods. During an authorized security assessment, a tester submits a specially crafted request containing unusual header combinations and a modified query parameter while accessing a promotional page. Shortly afterward, other legitimate users requesting the same promotional page through standard browsers begin receiving altered content that differs from what the application normally generates. When the tester accesses the underlying origin system directly, the response reflects the expected legitimate version. After some time and additional routine traffic, the unexpected content is no longer served. Identify the attack technique best explains this observed behavior?",
        "options": [
            "DNS Rebinding Attack",
            "DNS Server Hijacking",
            "Web Cache Poisoning Attack ",
            "SQL Injection Vulnerability"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 512,
        "question": "A cybersecurity team at a cloud infrastructure provider in San Jose, California, initiated a structured vulnerability evaluation across its production environment. The scanning process began by identifying communication protocols active on each host. Once the protocols were cataloged, the platform analyzed which services were associated with those ports and dynamically selected only the vulnerability tests relevant to those detected services. The scanning logic adjusted automatically based on discoveries made during execution. Which vulnerability assessment approach is illustrated in this scenario?",
        "options": [
            "Tree-Based Assessment",
            "Service-Based Solutions",
            "Product-Based Solutions",
            "Inference-Based Assessment "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 513,
        "question": "A regional healthcare provider in Portland, Oregon, recently migrated its patient scheduling portal to a new cloud platform. Within days, multiple patients reported that when searching online for the clinic's appointment system, they were directed to a website that looked identical to the official portal. The fraudulent page appeared prominently in search engine results and prompted users to log in using their patient credentials. The URL closely resembled the legitimate domain name, and no internal DNS servers had been altered within the organization's infrastructure. Security analysts later determined that the attacker had created a convincing replica of the portal and manipulated search visibility so that unsuspecting users would voluntarily navigate to the malicious site. Which type of social engineering technique best explains this attack?",
        "options": [
            "Whaling",
            "Spimming",
            "Spear Phishing",
            "Pharming "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 514,
        "question": "A digital media company in Seattle, Washington deploys an Nginx-based infrastructure to support its internal analytics dashboard and content publishing portal. During an authorized red team engagement, a tester evaluates the web-based administrative interface used to upload configuration bundles and manage application components. While analyzing a file-upload feature, the tester observes that certain user-supplied parameters submitted with uploaded content are incorporated into backend processing routines with limited validation. By adjusting specific values in the request, he alters how the server-side component interprets those inputs. Subsequent log analysis shows that the modified input affected system-level operations executed under the web service context, despite no direct shell access being obtained. Which Nginx-related vulnerability best describes the weakness identified in this scenario?",
        "options": [
            "Server-side request forgery (SSRF) vulnerability",
            "Improper certificate validation",
            "NULL pointer dereference in HTTP/3",
            "OS command injection in nginxWebUI "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 515,
        "question": "A fintech startup in Austin, Texas, deploys several virtual machines within a public cloud environment. During an authorized cloud security assessment, a tester uploads a small script to one of the instances through web application vulnerability. After executing the script locally on the instance, the tester retrieves temporary access credentials associated with the instance's assigned role. These credentials are then used to enumerate storage resources and access additional cloud services within the same account. Which cloud attack technique best corresponds to this activity?",
        "options": [
            "Wrapping Attack",
            "CPDoS Attack",
            "IMDS Attack",
            "Cloud Snooper Attack"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 516,
        "question": "A technology consulting firm in Denver, Colorado, recently experienced a wave of suspicious account compromise incidents. Several employees reported receiving an email that appeared identical to a legitimate cloud storage notification they had received earlier that week.\n\nThe message reused the original branding, formatting, sender display name, and subject line. However, it informed recipients that the previously shared document had been \"updated due to synchronization errors\" and instructed them to reauthenticate using the embedded link.\n\nThe link directed users to a convincing replica of the organization's authentication portal. Investigation revealed that the attacker had reused content from a genuine prior communication and modified only the embedded hyperlink.\n\nWhich type of social engineering attack does this scenario most accurately represent?",
        "options": [
            "Clone Phishing ",
            "Consent Phishing",
            "Tabnabbing",
            "Search Engine Phishing"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 517,
        "question": "A state benefits processing platform in Sacramento, California, implemented a multi-step identity verification process before granting access to sensitive citizen records, During a controlled assessment, security analyst Daniel Kim observed that by altering specific request parameters within the transaction sequence, it was possible to bypass an intermediate verification stage and retrieve restricted account data. Further analysis revealed that the authentication workflow advanced through sequential client-driven interactions, but the server did not enforce strict validation of completion for each required stage before granting access. Based on the scenario, which vulnerability classification best describes the issue identified?",
        "options": [
            "Application Flaws",
            "Poor Patch Management",
            "Misconfigurations / Weak Configurations",
            "Design Flaws "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 518,
        "question": "As part of an internal security assessment at First Union Bank in Chicago, Rachel Morgan is evaluating whether unauthorized packet capture tools are operating within the loan processing segment of the network. During traffic observation, she notices behavior suggesting that a particular host may be processing frames beyond its intended destination scope. To verify whether the network interface is accepting traffic not explicitly addressed to it, Rachel decides to transmit specially crafted packets designed to provoke an abnormal response from a system operating in promiscuous mode. Which detection technique should Rachel use to confirm the presence of a sniffer?",
        "options": [
            "Ping method by sending packets with an incorrect MAC address",
            "DNS method by monitoring reverse DNS lookup traffic",
            "ARP method by sending non-broadcast ARP requests",
            "Sniffer detection using an NSE script to check for promiscuous mode"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 519,
        "question": "A regional law firm authorizes a wireless resilience evaluation after employees report intermittent connectivity disruptions in conference rooms. An ethical hacker assigned to the assessment analyses client behaviour while transmitting carefully crafted 802.11 management frames toward the organization's primary access point. Each transmission immediately causes several connected laptops to lose association with the network, requiring users to reconnect manually. Connectivity interruptions occur only when the crafted frames are sent. Identify the wireless attack illustrated by this activity.",
        "options": [
            "Jamming Attack",
            "Evil Twin Attack",
            "Deauthentication Attack",
            "Eavesdropping Attack"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 520,
        "question": "An ethical hacker conducting an authorized assessment of a multinational advisory firm begins collecting intelligence exclusively from publicly accessible online platforms where employees share professional background details and engage in industry related discussions. By correlating individual role descriptions, publicly endorsed technical competencies, collaborative conversations referencing internal initiatives, and recurring terminology used to describe projects and departments, the tester develops a structured view of reporting relationships, identifies commonly deployed technologies, and infers internal naming conventions.\n\nFrom a reconnaissance methodology perspective, which technique is being applied?",
        "options": [
            "Footprinting through Social Networking Sites",
            "Footprinting through Internet Research Services",
            "Footprinting through Search Engines",
            "Footprinting through Social Engineering"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 521,
        "question": "At a digital marketing firm in Atlanta, Georgia, employees began reporting that access to a widely used cloud collaboration portal was intermittently redirecting them to a counterfeit interface hosted on an unfamiliar IP address. Security engineers observed that when multiple users across different departments attempted to access the legitimate domain, they consistently received the same incorrect IP resolution. The anomalous behavior persisted across sessions and affected numerous internal clients until the organization's name resolution service was restarted, after which normal resolution resumed. What DNS manipulation technique best explains this scenario?",
        "options": [
            "Injecting malicious records through DNS Cache Poisoning ",
            "Conducting Internet DNS Spoofing from a remote network",
            "Executing Proxy Server DNS Poisoning to alter resolution paths",
            "Performing Intranet DNS Spoofing within the local network"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 522,
        "question": "A regional healthcare provider in Minneapolis, Minnesota, began experiencing intermittent connectivity issues across a newly activated access-layer network segment. Shortly after a contractor connected a diagnostic device to an unused switch port, multiple employee workstations failed to receive valid network configurations. System logs showed repeated address negotiation attempts from affected hosts, while monitoring tools recorded a rapid sequence of configuration requests originating from a single switch interface. Within minutes, additional clients on the segment encountered similar assignment failures. From a sniffing standpoint, which technique most accurately explains this behavior?",
        "options": [
            "MAC Spoofing",
            "DHCP Starvation ",
            "IRDP Spoofing",
            "Rogue DHCP Server"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 523,
        "question": "A regional logistics provider in Charlotte, North Carolina, operates its shipment tracking and partner API services on an Apache web platform configured to support a modern multiplexed communication protocol to improve efficiency under concurrent load. During a controlled stress assessment, testers simulate sustained client activity that repeatedly initiates and completes numerous lightweight exchanges over persistent connections. Over time, system monitoring reveals that memory utilization steadily increases despite stable request volume and no proportional rise in active sessions. Even after the simulated clients disconnect normally, resource usage does not return to baseline levels. After several cycles, the service becomes sluggish and must be restarted to restore normal responsiveness. No unusual disk activity or database errors are observed during the test window. The behavior is only present when the multiplexed protocol mode is enabled; reverting to legacy handing eliminates the issue. Which Apache vulnerability best explains this behavior?",
        "options": [
            "Insecure Default Configuration",
            "HTTP/2 Stream Memory Not Reclaimed on RST",
            "mod_macro Buffer Over-read",
            "DoS in HTTR/2 with Initial Window Size 0"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 524,
        "question": "During an authorized wireless security assessment, an ethical hacker captures traffic between client devices and a corporate access point to evaluate the strength of the implemented encryption mechanism. Packet analysis reveals that before protected data exchange begins, the client and access point complete a structured four-message key negotiation process. Subsequent traffic is encrypted using an AES-based counter mode protocol that integrates message authentication for integrity protection. Based on these observations, identify the wireless encryption standard deployed on the network.",
        "options": [
            "WPA",
            "WEP",
            "WPA2 ",
            "WPA3"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 525,
        "question": "A financial technology firm in Atlanta, Georgia, launches an internal investigation after multiple employees report that a popular messaging application on their Android devices has begun displaying excessive advertisements and behaving unpredictably. Security analysts discover that users had installed a utility application from a third-party marketplace weeks earlier. Further examination shows that this application silently replaced certain legitimate apps already present on the device. The compromised applications were then used to generate large volumes of advertisements and collect user data for external transmission. Based on the observed behavior, what malware is most consistent with this incident?",
        "options": [
            "Mamont",
            "Pegasus",
            "Agent Smith ",
            "GoldPickaxe"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 526,
        "question": "At a private aerospace research facility in Mesa, Arizona, an executive raises concerns after sensitive discussion points from speakerphone meetings begin surfacing externally. The device shows no indicators of active audio recording, and application permission history does not reflect recent camera or microphone authorization changes. A forensic mobile analysis identifies that an installed application has been continuously reading motion sensor output while the phone's loudspeaker is active. The collected sensor data was later transmitted to a remote server, where acoustic characteristics were reconstructed from the recorded measurements. Identify the attack technique responsible for this compromise.",
        "options": [
            "Camfecting",
            "Android Camera Hijack Attack",
            "Spearphone Attack ",
            "StormBreaker Abuse"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 527,
        "question": "During a strategic security briefing at Meridian Global Analytics in Washington, D.C., executives review a series of coordinated activities targeting national infrastructure. These activities include manipulating digital media to influence public perception, disrupting communication networks, and degrading critical systems to weaken institutional stability without direct conventional military engagement. What form of conflict best describes this type of coordinated activity?",
        "options": [
            "Hacktivism",
            "Cyberterrorism",
            "Cyber espionage",
            "Information warfare "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 528,
        "question": "A competing technology firm begins releasing products that closely mirror the design, pricing strategy, and feature roadmap of ApexDynamics Inc. An internal review reveals that detailed information about ApexDynamics's upcoming initiatives had been gradually collected through publicly available sources and external disclosures before product launch. Which footprinting-related threat does this scenario best represent?",
        "options": [
            "Corporate Espionage",
            "Business Loss ",
            "Information Leakage",
            "Social Engineering"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 529,
        "question": "A cloud storage provider discovers that an unauthorized party obtained a complete backup of encrypted database files containing archived client communications. The attacker did not compromise the encryption keys, nor is there evidence that any original plaintext records were exposed. A forensic cryptography specialist reviewing the breach considers the possibility that the adversary is attempting to analyze the encrypted data in isolation, searching for statistical irregularities or structural repetition within the encrypted output to infer meaningful information. To properly assess the organization's exposure, the specialist must determine which cryptanalytic approach best matches an attack conducted using only the intercepted encrypted data.",
        "options": [
            "Ciphertext-only attack ",
            "Chosen-ciphertext attack",
            "Chosen-plaintext attack",
            "Known-plaintext attack"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 530,
        "question": "A regional e-commerce company in Dallas, Texas, operates an Apache-based web server to manage product catalogs and promotional campaigns. During an authorized assessment, a security consultant analyzes how the platform processes a referral parameter embedded in product-sharing links. While reviewing responses through an intercepting proxy, he observes that values supplied in the referral parameter are incorporated into metadata returned to the browser. By introducing carefully crafted; into the parameter, he notices that the structure of the server's outbound response changes in an unexpected manner. Further testing shows that the manipulated input causes the server to generate multiple logically distinct response segments within what should have been a single transaction. When the crafted link is accessed through a standard browser, the client interprets the injected portion as a separate directive, resulting in redirection behavior influenced by the attacker-controlled input. Identity the web server attack technique being demonstrated in this scenario.",
        "options": [
            "Frontjacking Attack",
            "HTTP Response-Splitting Attack ",
            "Directory Traversal Attack",
            "Web Cache Poisoning Attack"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 531,
        "question": "An energy infrastructure company in Tulsa, Oklahoma, initiated a controlled phishing simulation targeting multiple operational departments.\n\nThe test email claimed to originate from the corporate compliance office and instructed employees to \"complete a mandatory regulatory update within the next 30 minutes to avoid account suspension.\" The message used a broad salutation instead of employee names and lacked the standard corporate signature footer normally appended to official communications.\n\nAdditionally, security analysts observed that the embedded Hyperlink displayed the organization's domain in the message body; however, when examined more closely, the actual destination resolved to a shortened external URL redirecting to an unrelated host.\n\nFrom a defensive analysis standpoint, which indicator provides the strongest technical validation that the message is malicious?",
        "options": [
            "Use of Generic Greetings rather than individualized addressing",
            "Identification of Hover Mismatch URLs in the embedded link ",
            "Absence of a formal corporate Missing Signature",
            "Presence of aggressive Urgency Language"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 532,
        "question": "A retail brand based in San Diego, California, authorized a controlled mobile security exercise to evaluate risks associated with third-party application distribution channels. Testers acquired a version of the company's customer rewards application from an unofficial marketplace frequently used by overseas customers. The application's visual layout and functionality were indistinguishable from the officially released version available in mainstream app stores. Behavioral monitoring conducted in a sandbox environment revealed that, in addition to its normal operations, the application initiated outbound connections unrelated to its documented features. A binary comparison against the vendor-supplied build confirmed structural differences between the two versions. What mobile-based social engineering technique does this scenario most accurately represent?",
        "options": [
            "Deploying Fake Security Applications disguised as protection tools",
            "Publishing Malicious Apps designed to mimic trusted brands",
            "Repackaging Legitimate Apps after modifying their internal structure ",
            "Conducting SMiShing campaigns through fraudulent text messages"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 533,
        "question": "A multinational healthcare provider headquartered in Boston, Massachusetts, relies on federated authentication to allow employees to access multiple cloud-hosted applications using a single sign-on portal. During an authorized red team engagement, a security consultant gains access to the organization's identity infrastructure and extracts signing material used in trust relationships between the internal identity provider and external cloud services. Using this material, the constant generates authentication responses that grant administrative-level access to several cloud applications without interacting with user credential or triggering multifactor authentication challenges. The access appears legitimate within the cloud service logs. Which cloud attack technique best aligns with this behavior?",
        "options": [
            "Cloud Hopper Attack",
            "Golden SAML Attack ",
            "Living off the Cloud (LotC) Attack",
            "Man-in-the-Cloud (MITC) Attack"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 534,
        "question": "Prior to a federal audit, a cybersecurity consulting firm conducted an exposure review for a software company in Salt Lake City, Utah. The engagement focused on evaluating infrastructure reachable through the organization's publicly registered domain records. The consultants identified open service ports on several servers, examined their patch levels for outdated components, and reviewed available DNS zone information to understand how systems were presented to remote systems. Based on the activities described, what type of vulnerability scanning is being performed?",
        "options": [
            "Network-based Scanning",
            "Internal Scanning",
            "External Scanning ",
            "Manual Scanning"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 535,
        "question": "A healthcare analytics firm in Denver, Colorado, hosts several internal applications on an IIS web server. During an authorized security assessment, a tester evaluates a lesser-used endpoint designed for administrative operations. By sending crafted HTTP requests directly to this endpoint, the tester is able to invoke server-side management functions without interacting with the standard login workflow presented by the primary user interface. Further review indicates that certain restricted operations can be executed when accessed through alternate request paths, suggesting inconsistent enforcement of access controls within the application. Which IIS vulnerability is most accurately demonstrated in this scenario?",
        "options": [
            "Authentication bypass vulnerability ",
            "CRLF cross-site scripting vulnerability",
            "Trust boundary violation vulnerability",
            "File and directory permissions vulnerability"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 536,
        "question": "A digital publishing firm in Charlotte, North Carolina, noticed suspicious probing activity against its public website. To proactively assess exposure, the security team initiated a focused scan of the company's HTTP servers. The chosen tool examined server headers, identified installed web server software through file signatures and favicon analysis, checked for outdated components, and searched for potentially dangerous files and misconfigurations. The scan also supported SSL connections and generated exportable reports in multiple formats for documentation. Which vulnerability assessment tool most closely aligns with the capabilities described?",
        "options": [
            "Nikto ",
            "Nessus",
            "Qualys VM",
            "OpenVAS"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 537,
        "question": "Upon completing a vulnerability evaluation for a financial services firm in Cincinnati, Ohio, the security team finalized its formal report for executive review. One portion of the document grouped identified weaknesses into severity tiers and highlighted systems with elevated exposure levels across the environment. This part of the report emphasized the relative impact and prioritization of identified weaknesses across affected assets. Which component of the vulnerability assessment report is represented in this scenario?",
        "options": [
            "Recommendations",
            "Risk Assessment ",
            "Findings",
            "Assessment Overview"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 538,
        "question": "https://www.ruten.com.tw/item/show? 21615500697\n\nClark is a talented coder and as such has found a vulnerability in a well-known application. Unconcerned about the ethics of the situation, he has developed an exploit that can leverage this unknown vulnerability.\n\nBased on this information, which of the following is most correct?",
        "options": [
            "Clark has violated U.S. Code Section 1027.",
            "Clark has developed a zero-day. ",
            "Clark is a suicide hacker.",
            "Clark is a white hat hacker."
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 539,
        "question": "In an ethical hacking methodology and framework, which of the following step is known for “active and passive information gathering”",
        "options": [
            "Obfuscation",
            "Exploitation",
            "Reconnaissance ",
            "Denial of service"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 540,
        "question": "Which of the following is the most important step for the ethical hacker to perform during the pre-assessment?",
        "options": [
            "Hack the web server.",
            "Gather information about the target.",
            "Obtain verbal permission to hack.",
            "Obtain written permission to hack."
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 541,
        "question": "This type of security test might seek to target the CEO’s laptop or the organization’s backup tapes to extract critical information, usernames, and passwords.",
        "options": [
            "Stolen equipment ",
            "Insider attack",
            "Physical entry",
            "Outsider attack"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 542,
        "question": "Which of the following hacking frameworks describes adversary tactics, techniques, and procedures (TTPs) used in cyberattacks?",
        "options": [
            "NIST CSF 2.0",
            "ISSF",
            "MITRE ATT&CK ",
            "ISO 28901"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 543,
        "question": "You have been asked to perform a penetration test for a local company. You have had several meetings with the client and are now almost ready to begin the assessment.\n\nWhich of the following is the document that would contain verbiage which describes what type of testing is allowed and when you will perform testing and limits your liabilities as a penetration tester?",
        "options": [
            "Project scope",
            "Nondisclosure agreement",
            "Service-level agreement",
            "Rules of engagement "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 544,
        "question": "Which of the following addresses the secrecy and privacy of information?",
        "options": [
            "Availability",
            "Integrity",
            "Confidentiality ",
            "Authentication"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 545,
        "question": "After the completion of the pen test, you have provided the client with a list of controls to implement to reduce the identified risk.\n\nWhat term best describes the risk that remains after the controls have been implemented?",
        "options": [
            "Inherent risk",
            "Residual risk ",
            "Gap analysis",
            "Total risk"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 546,
        "question": "During a security review, you have discovered that there are no documented security policies for the area you are assessing.\n\nWhich of the following would be the most appropriate course of action?",
        "options": [
            "Create policies while testing",
            "Stop the audit",
            "Identify and evaluate current practices",
            "Increase the level of testing"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 547,
        "question": "During which step of the incident response process would you be tasked with building the team, identifying roles, and testing the communication system?",
        "options": [
            "Containment",
            "Notification",
            "Preparation ",
            "Recovery"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 548,
        "question": "Your ethical hacking firm has been hired to conduct a penetration test.\n\nWhich of the following documents limits the scope of your activities?",
        "options": [
            "PCI-DSS",
            "Nondisclosure agreement",
            "Memorandum of understanding",
            "Terms of engagement "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 549,
        "question": "Which of the following is a proprietary information security standard that requires organizations to follow security best practices and use 12 high-level requirements, aligned across six goals?",
        "options": [
            "SOX",
            "PCI-DSS ",
            "Risk Management Framework",
            "FISMA"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 550,
        "question": "Which of the following protocols is used when an attacker attempts to launch a man-in-the-middle attack by manipulating sequence and acknowledgment numbers?",
        "options": [
            "ICMP",
            "TCP",
            "UDP",
            "IP"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 551,
        "question": "Which of the following tools is used to analyze the files produced by several packet-capture programs such as tcpdump, WinDump, Wireshark, and EtherPeek?",
        "options": [
            "OpenVAS",
            "Nessus",
            "tcptraceroute",
            "tcptrace"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 552,
        "question": "Which of the following is one primary difference between a malicious hacker and an ethical hacker?",
        "options": [
            "Malicious hackers use different tools and techniques than ethical hackers use.",
            "Ethical hackers obtain permission before bringing down servers or stealing credit card databases.",
            "Malicious hackers are more advanced than ethical hackers because they can use any technique to attack a system or network.",
            "Ethical hackers use the same methods but strive to do no harm."
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 553,
        "question": "Which of the following best describes an attack that altered the contents of two critical files?",
        "options": [
            "Availability",
            "Authentication",
            "Confidentially",
            "Integrity"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 554,
        "question": "Which individuals believe that hacking and defacing websites can promote social change?",
        "options": [
            "Gray hat hackers",
            "Hacktivists",
            "Ethical hackers",
            "Black hat hackers"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 555,
        "question": "This type of security test usually takes on an adversarial role and looks to see what an outsider can access and control.",
        "options": [
            "Penetration test",
            "Policy assessment",
            "High-level evaluation",
            "Network evaluation"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 556,
        "question": "Your company performs PCI-DSS audits and penetration testing for third-party clients. During an approved pen test you have discovered a folder on an employee’s computer that appears to have hundreds of credit card numbers and other forms of personally identifiable information (PII).\n\nWhich of the following is the best course of action?",
        "options": [
            "Make a copy of the data and store it on your local machine.",
            "Stop the pen test immediately and contact management.",
            "Continue the pen test and include this information in your report.",
            "Contact the employee and ask why they have the data."
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 557,
        "question": "Which of the following is a common framework applied by business management and other personnel to identify potential events that may affect the enterprise, manage the associated risks and opportunities, and provide reasonable assurance that objectives will be achieved?",
        "options": [
            "Risk management framework",
            "Qualitative risk assessment",
            "PC-DSS",
            "NIST SP 800-37"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 558,
        "question": "When referring to the domain name service, what is a zone?",
        "options": [
            "A collection of domains",
            "The zone namespace",
            "A collection of alias records",
            "A collection of resource records"
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 559,
        "question": "You have gone to an organization’s website to gather information, such as employee names, email addresses, and phone numbers.\n\nWhich step of the hacker’s methodology does this correspond to?",
        "options": [
            "Fingerprinting",
            "Reconnaissance ",
            "Scanning and enumeration",
            "Gaining access"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 560,
        "question": "Kevin and his friends are going through a local IT firm’s garbage.\n\nWhich of the following best describes this activity?",
        "options": [
            "Intelligence gathering",
            "Reconnaissance",
            "Dumpster diving ",
            "Social engineering"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 561,
        "question": "You’ve just performed a port scan against an internal device during a routine pen test. Nmap returned the following response: Starting NMAP 7.30 at 2021-10-10 11:06 NMAP scan report for 192.168.123.100 Host is up (1.00s latency). Not shown: 993 closed ports PORT STATE SERVICE 80/tcp open http 161/tcp open snmp 515/tcp open Ipd MAC Address: 00:1B:A9:01:3a:21\n\nBased on this scan result, which of the following is most likely correct?",
        "options": [
            "The host is a printer. ",
            "The host is most likely a Windows computer.",
            "The host is a Cisco router.",
            "The host is most likely a Linux computer."
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 562,
        "question": "A web app deserializes untrusted data leading to RCE.\n\nWhat flaw exists?",
        "options": [
            "SSTI",
            "Insecure deserialization ",
            "SQLi",
            "XSS"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 563,
        "question": "An attacker abuses PowerShell heavily.\n\nWhich log helps most?",
        "options": [
            "DNS logs",
            "Firewall logs",
            "Syslog",
            "PowerShell script block logs "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 564,
        "question": "What does TTL manipulation help evade?",
        "options": [
            "Encryption",
            "Firewall",
            "IDS ",
            "Router"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 565,
        "question": "What does an ACK scan mainly identify?",
        "options": [
            "Services",
            "Firewall rules ",
            "Closed ports",
            "Open ports"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 566,
        "question": "What does AXFR allow?",
        "options": [
            "Zone transfer ",
            "Encryption",
            "DNS tunneling",
            "Resolution"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 567,
        "question": "Which tool dumps Windows hashes?",
        "options": [
            "Mimikatz ",
            "John",
            "Hydra",
            "Aircrack-ng"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 568,
        "question": "Which Nmap scan is stealthiest?",
        "options": [
            "Xmas",
            "TCP Connect",
            "SYN ",
            "UDP"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 569,
        "question": "Which attack abuses business logic?",
        "options": [
            "XSS",
            "Logic flaw ",
            "CSRF",
            "SQLi"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 570,
        "question": "What does ATT&CK tactic “Persistence” mean?",
        "options": [
            "Initial exploit",
            "Data theft",
            "Cleanup",
            "Long-term access "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 571,
        "question": "Which defense MOST disrupts ransomware spread?",
        "options": [
            "Backup",
            "IDS",
            "Network segmentation ",
            "AV"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 572,
        "question": "Attackers exploit SMBv1 to spread malware across hosts.\n\nWhat attack behavior is this?",
        "options": [
            "Worm-like propagation ",
            "Phishing",
            "Credential stuffing",
            "DoS"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 573,
        "question": "A Linux system allows SSH login using deprecated ciphers.\n\nWhat risk exists?",
        "options": [
            "DoS",
            "XSS",
            "Downgrade attacks ",
            "SQLi"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 574,
        "question": "A system’s audit logs are not centralized.\n\nWhich attack phase is hardest to detect?",
        "options": [
            "Initial access",
            "Lateral movement ",
            "Delivery",
            "Recon"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 575,
        "question": "What is the purpose of banner grabbing?",
        "options": [
            "Sniffing",
            "Cracking",
            "Identification ",
            "Exploitation"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 576,
        "question": "What is sandbox evasion?",
        "options": [
            "Malware hiding ",
            "Firewall bypass",
            "Encryption",
            "IDS bypass"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 577,
        "question": "What is data exfiltration?",
        "options": [
            "Extraction ",
            "Deletion",
            "Encryption",
            "Corruption"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 578,
        "question": "Which vulnerability exploits memory corruption?",
        "options": [
            "XSS",
            "Buffer overflow ",
            "CSRF",
            "SQLi"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 579,
        "question": "Which protocol is insecure by default?",
        "options": [
            "HTTPS",
            "SFTP",
            "SSH",
            "Telnet "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 580,
        "question": "What is RID cycling?",
        "options": [
            "SQLi",
            "DoS",
            "DNS attack",
            "SMB enumeration "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 581,
        "question": "Which attack exploits weak cipher suites?",
        "options": [
            "DoS",
            "Spoofing",
            "Downgrade",
            "Replay"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 582,
        "question": "Which attack abuses scheduled tasks?",
        "options": [
            "Reconnaissance",
            "Persistence ",
            "Sniffing",
            "DoS"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 583,
        "question": "What indicates advanced persistent threat behavior?",
        "options": [
            "Long dwell time",
            "Malware spam",
            "One-time exploit",
            "Brute force"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 584,
        "question": "An attacker abuses weak password reuse across services using leaked credentials.\n\nWhat attack is this?",
        "options": [
            "Replay",
            "Credential stuffing",
            "Brute force",
            "Dictionary attack"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 585,
        "question": "Massive outbound HTTPS traffic hides inside normal web traffic. Likely objective?",
        "options": [
            "DoS",
            "Data exfiltration ",
            "Scanning",
            "Recon"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 586,
        "question": "A Python API allows unlimited file upload size. What attack is possible?",
        "options": [
            "DoS ",
            "XSS",
            "SQLi",
            "CSRF"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 587,
        "question": "A Linux system allows passwordless sudo for multiple commands.\n\nWhat security principle is violated?",
        "options": [
            "Zero trust",
            "Defense in depth",
            "CIA",
            "Least privilege "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 588,
        "question": "A Windows endpoint generates alerts for credential dumping tools.\n\nWhat asset is targeted?",
        "options": [
            "Network",
            "Logs",
            "Availability",
            "Credentials "
        ],
        "correctAnswer": 3,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 589,
        "question": "A compromised endpoint communicates with C2 using DNS queries.\n\nWhat system-level indicator exists?",
        "options": [
            "DNS anomalies ",
            "Memory leaks",
            "CPU spikes",
            "Disk usage"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 590,
        "question": "A system allows execution from /tmp directory.\n\nWhat risk exists?",
        "options": [
            "Malware execution ",
            "SQLi",
            "XSS",
            "DoS"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 591,
        "question": "What does a NULL scan send?",
        "options": [
            "No flags set ",
            "SYN packet",
            "ACK packet",
            "RST packet"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 592,
        "question": "What is CVSS used for?",
        "options": [
            "Auditing",
            "Encryption",
            "Severity scoring ",
            "Exploitation"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 593,
        "question": "What does DEP block?",
        "options": [
            "Encryption",
            "Logging",
            "Execution in data memory ",
            "Scanning"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 594,
        "question": "What is lateral movement?",
        "options": [
            "Data exfiltration",
            "Pivoting ",
            "Privilege escalation",
            "Network traversal"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 595,
        "question": "What is SMB relay attack?",
        "options": [
            "DoS",
            "Spoofing",
            "MITM ",
            "Replay"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 596,
        "question": "Which attack manipulates hidden fields?",
        "options": [
            "SQLi",
            "XSS",
            "Parameter tampering ",
            "CSRF"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 597,
        "question": "Which encoding often bypasses filters?",
        "options": [
            "ROT13",
            "Base64",
            "Unicode ",
            "Hex"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 598,
        "question": "Which attack targets WPA WPS PIN?",
        "options": [
            "Wireshark",
            "Reaver ",
            "Aircrack",
            "Kismet"
        ],
        "correctAnswer": 1,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 599,
        "question": "Which wireless attack captures handshake?",
        "options": [
            "Deauth ",
            "Jamming",
            "Spoofing",
            "Replay"
        ],
        "correctAnswer": 0,
        "userAnswer": null,
        "bookmarked": false
    },
    {
        "id": 600,
        "question": "What is MAC spoofing used for?",
        "options": [
            "Encryption",
            "IDS",
            "Bypass filters ",
            "Logging"
        ],
        "correctAnswer": 2,
        "userAnswer": null,
        "bookmarked": false
    }
];
