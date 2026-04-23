export const projects = [
  {
    id: 1,
    name: "UWARG ZeroPilot",
    terminal_name: "zeropilot",
    image: "/zeropilot.png",
    description:
      "A FreeRTOS-based STM32 flight controller in C++ enabling real-time coordination of telemetry, sensor fusion, and flight control subsystems, on a custom PCB for autonomous UAVs.",
    tags: ["cpp", "stm32", "freertos", "cmsis", "altium", "fusion-360"],
    source_code: "https://github.com/UWARG/efs-zeropilot-3.5b",
    demo: "https://www.youtube.com/watch?v=xD9T_sf2wwk",
  },
  {
    id: 2,
    name: "Using ANNs to Measure Photometric Redshifts",
    terminal_name: "photoz_ann",
    image: "/photoredshift.png",
    description:
      "A research paper focusing on the creation and application of a neural network in redshift estimation using photometric computational methods.",
    tags: ["python", "keras", "tensorflow", "pandas", "numpy"],
    pdf: "https://drive.google.com/file/d/1YwQ7B9eATSoJ0vtQPd-kzHGHHeeipQoG/view",
  },
  {
    id: 3,
    name: "Analysis of Cost Functions for ANNs",
    terminal_name: "costfuncs_ann",
    image: "/costfuncs.png",
    description:
      "A research paper examining the comparative performance of two different cost functions, using the MNIST dataset. Neural network written from scratch using only NumPy and Pandas.",
    tags: ["python", "pandas", "numpy", "latex"],
    pdf: "https://drive.google.com/file/d/1Oj0iTWaKzmvsy4kuwETxS2l28agQdVGA/view?usp=sharing",
  },
  {
    id: 4,
    name: "HCP (Hardware Context Protocol)",
    terminal_name: "hcp",
    image: "/hcp.jpg",
    description:
      "An SDK and protocol that enables LLMs to interface with real-world hardware through a JSON-based context exchange and an SDK-generated TCP networking layer. Winner of Best Hardware Hack @ CalHacks 2025.",
    tags: ["python", "tcp", "cv", "llms", "robotics", "inverse-kinematics"],
    source_code: "https://github.com/SuperMK15/hardware-context-protocol",
    demo: "https://www.youtube.com/watch?v=Zj-G-9aPG8w",
  },
  {
    id: 5,
    name: "OpenAgentCLI",
    terminal_name: "openagentcli",
    image: "/openagentcli.png",
    description:
      "A command-line AI coding agent with a FastMCP server and native tool-calling capabilities. Enables automated coding workflows and project exploration.",
    tags: ["python", "llms", "mcp"],
    source_code: "https://github.com/SuperMK15/OpenAgentCLI",
  },
  {
    id: 6,
    name: "Sensor Fusion Workshop",
    terminal_name: "sensor-fusion-workshop",
    image: "/sensor-fusion.png",
    description:
      "A comprehensive workshop covering Bayesian sensor fusion. Builds from Bayes Filter to Kalman Filter to Extended Kalman Filter to a Multiplicative EKF for UAV AHRS.",
    tags: ["controls", "python", "numpy", "matplotlib"],
    source_code: "https://github.com/SuperMK15/sensor-fusion-workshop",
    pdf: "https://drive.google.com/drive/folders/1uJTYJ5P7zC7NB3LOnxZfa1VnnWiUh6cI?usp=sharing",
  },
  {
    id: 7,
    name: "Drone Tuning",
    terminal_name: "drone-tuning",
    image: "/drone-tuning.jpg",
    description:
      "A comprehensive guide for tuning flight controllers of drones. Covers PID tuning, autotuning, input shaping, in-flight harmonic notch filtering using FFTs, MAGFit calibration, and windspeed estimation.",
    tags: ["controls", "pid", "fft", "harmonic-notch", "ardupilot"],
    pdf: "https://uwarg-docs.atlassian.net/wiki/x/DACM2w",
  },
  {
    id: 8,
    name: "WATIsGrass: UW Tunnels",
    terminal_name: "watisgrass",
    image: "/watisgrass.png",
    description:
      "A web application using the Google Maps API and Dijkstra's algorithm to find the shortest path between buildings on the UWaterloo campus via the tunnel system.",
    tags: ["react", "tailwind", "typescript", "google-maps-api"],
    source_code: "https://github.com/SuperMK15/WATIsGrass",
    demo: "https://watisgrass.vercel.app/",
  },
  {
    id: 9,
    name: "GitAgent",
    terminal_name: "gitagent",
    image: "/gitagent.png",
    description:
      "An agentic AI for GitHub repos, automating code refactoring, commenting, README, and Dockerfile generation. Winner of Best AI Agent, Best Use Of GenAI & 3rd Place Overall @ DeltaHacks XI.",
    tags: ["python", "cohere", "github-api", "streamlit"],
    source_code: "https://github.com/SuperMK15/GitAgent",
    demo: "https://gitagent.streamlit.app/",
  },
  {
    id: 10,
    name: "AI ATC",
    terminal_name: "ai-atc",
    image: "/ai-atc.png",
    description:
      "A web application using the Cohere LLM to simulate an air traffic controller with real-time responses, full audio transcription and text-to-speech.",
    tags: ["react", "tailwind", "cohere", "typescript", "web-speech-api"],
    source_code: "https://github.com/SuperMK15/AI-ATC",
    demo: "https://ai-atc.vercel.app/",
  },
  {
    id: 11,
    name: "OCMC Participant Portal",
    terminal_name: "ocmc-portal",
    image: "/ocmc.png",
    description:
      "MERN-stack web app for the Ontario Competitive Mathematics Committee. Allows 300+ participants to view news, register for contests and track scores.",
    tags: ["next", "node", "express", "mongodb", "tailwind", "redux"],
    demo: "https://www.ontariocmc.ca/",
  },
  {
    id: 12,
    name: "Stud.AI - AI Study Tool",
    terminal_name: "studai",
    image: "/studai.png",
    description:
      "An AI study tool using NLP and image processing to generate practice questions from student-provided notes.",
    tags: ["react", "node", "mongodb", "tailwind", "redux", "cohere"],
    source_code: "https://github.com/SuperMK15/StudAI/",
    demo: "https://studai-8en7.onrender.com/",
  },
  {
    id: 13,
    name: "Arduino Projects",
    terminal_name: "arduino-projects",
    image: "/arduino.png",
    description:
      "A collection of Arduino projects including interfacing to a variety of analog and digital sensors, and several output devices.",
    tags: ["arduino", "cpp"],
    source_code: "https://github.com/SuperMK15/hardware-projects/",
  },
  {
    id: 14,
    name: "WorkSheeps - AI Powered Markbook",
    terminal_name: "worksheeps",
    image: "/worksheeps.png",
    description:
      "An AI-based markbook for teachers to track student performance across different test subject areas. Uses NLP and data visualization to generate personalised worksheets targeting weak areas.",
    tags: ["react", "node", "kintone", "tailwind", "Auth0", "cohere"],
    source_code: "https://github.com/SuperMK15/WorkSheeps/",
    demo: "https://worksheeps.tech/",
  },
  {
    id: 15,
    name: "SpriteSheet Maker",
    terminal_name: "spritesheet-maker",
    image: "/spritesheet-maker.png",
    description:
      "A web application that allows users to upload multiple images, arrange them and generate a downloadable spritesheet usable in a video game engine. Provides functionality to adjust image sizing and padding.",
    tags: ["react", "tailwind", "python", "flask"],
    source_code: "https://github.com/SuperMK15/SpritesheetMaker",
    demo: "https://spritesheetmaker.onrender.com/",
  },
  {
    id: 16,
    name: "SFML 2D Legend of Zelda Style Game",
    terminal_name: "loz-game",
    image: "/loz.png",
    description:
      "A 2D game made using C++ and SFML in an object-oriented fashion, inspired by the Legend of Zelda series. Features 4 levels, complete with music and sound effects.",
    tags: ["sfml", "cpp"],
    source_code: "https://github.com/SuperMK15/SFML-LoZ-Game/",
  },
  {
    id: 17,
    name: "Aviation Weather App",
    terminal_name: "aviation-weather",
    image: "/avia.png",
    description:
      "A web application made with ReactJS used to check aviation weather that can fetch and decode METAR reports. Made while training for my PPL at 3 Canadian Forces Flying Training School in Portage la Prairie, Manitoba, Canada.",
    tags: ["react", "css", "checkwx"],
    source_code: "https://github.com/SuperMK15/Aviation-Weather-App/",
    demo: "https://aviation-weather-app.onrender.com/",
  },
  {
    id: 18,
    name: "UWaterloo CSC Trivia Night Application",
    terminal_name: "csc-trivia",
    image: "/csc-trivia.png",
    description:
      "A web application used to host UWaterloo's Computer Science Club's Trivia Nights. Pulls questions from a JSON file and displays them in a convenient format for the event.",
    tags: ["react", "css", "json"],
    source_code: "https://github.com/SuperMK15/csc-trivia-app/",
    demo: "https://csc-trivia-app.onrender.com/",
  },
  {
    id: 19,
    name: "Canada Chess Parent & Teacher Portal",
    terminal_name: "chess-portal",
    image: "/canadachess.png",
    description:
      "A MERN-stack web application made for Canada Chess Youth Club, a nationwide organization that teaches the art of chess. Allows parents and teachers to assess student potential, register for classes and track progress.",
    tags: ["react", "node", "express", "mongodb", "css", "redux", "aws"],
    demo: "https://client.canadachess.ca/",
  },
  {
    id: 20,
    name: "Food4Kids Inventory Management System",
    terminal_name: "food4kids",
    image: "/food4kids.png",
    description:
      "A LAMP-stack web application made for Food4Kids, a non-profit organization that provides food to children in need. Allows volunteers to manage inventory, track expiry dates and generate weekly reports.",
    tags: ["php", "css", "mysql", "xampp"],
    source_code: "https://github.com/SuperMK15/Food4Kids/",
  },
  {
    id: 21,
    name: "IB Results Checker",
    terminal_name: "ib-results",
    image: "/selenium.png",
    description:
      "An automation script written in Selenium that automatically logs users into the IBO candidate portal and navigates to the results page, to check IB results as soon as they are released.",
    tags: ["python", "selenium"],
    source_code: "https://github.com/SuperMK15/ib-results-checker/",
  },
] as const;

export type Project = (typeof projects)[number];

export const experiences = [
  {
    id: 1,
    org: "AWS",
    role: "Software Development Engineer Intern",
    terminal_name: "aws",
    date: "SEPT 2025 - APRIL 2026",
    description:
      "Worked as a Software Development Engineer Intern on the AWS Keyspaces team, developing core infrastructure for a fully managed, serverless Cassandra-compatible database enabling highly available, multi-region data workloads at scale.",
    bullets: [
      "Architected a connection-level management layer in Kotlin atop a Java-based distributed messaging bus for a serverless Cassandra service, implementing ML-driven load-balancing and load-shedding policies that provided fine-grained traffic control across 10+ regions and 20+ Availability Zones.",
      "Engineered an agentic AI/ML automation system in Python utilizing RL/LSTM policies and LLMs to autonomously remediate host throttling via dynamic connection redistribution, reducing on-call burden by 25%.",
      "Developed a global table anti-entropy (AE) resolution tool in Kotlin/Python, automating a manual 1-day/week operator workflow into a single-click, 30-minute operation for data aggregation, divergence repair, and reporting.",
      "Implemented a storage-node admission controller and validated at scale, replacing unbounded thread pools with fixed-size executors and per-partition bucketed scheduling; greatly improved hot-partition performance for ATSO writes (10x reduction in p99 latency metrics) via fair-share queuing and in-flight depth throttling, reducing service-level 500s, heap-usage, and latency spikes.",
    ],
  },
  {
    id: 2,
    org: "BETA Technologies",
    role: "Embedded Flight Software Intern",
    terminal_name: "beta",
    date: "MAY 2025 - AUGUST 2025",
    description:
      "Worked on the embedded software team at BETA Technologies, focusing on developing and testing flight software for electric vertical takeoff and landing (eVTOL) aircraft.",
    bullets: [
      "Developed safety-critical firmware in C for TMS570 MCUs to control next-generation eVTOL lift electric engines, including interfacing with 3 Flight Control Computers and cross-channel inverters over the CAN bus protocol.",
      "Implemented drivers and application logic including phase voltage/current sampling from an HSADC with mibSPI-triggered DMA, RS485/ARINC429/CAN communication, an RTOS scheduler profiler and more.",
      "Engineered robust PBIT/CBIT diagnostics for real-time inverter and engine health monitoring, enhancing system reliability and supporting FAA-compliant DO-178C safety objectives.",
      "Architected an inverter software-in-the-loop (SITL) with a custom engine plant model and fully mocked hardware abstraction layer, enabling rapid firmware & controls validation/debugging independent of physical hardware.",
    ],
  },
  {
    id: 3,
    org: "Nokia",
    role: "AI/ML & Automation Intern",
    terminal_name: "nokia",
    date: "SEPTEMBER 2024 - DECEMBER 2024",
    description:
      "Developed a PoC for Nokia's next generation autonomous networks.",
    bullets: [
      "Developed autonomous applications based on the OODA control loop for next-gen telecommunications networks, focusing on UPF congestion and network slice management to approach an L5 autonomous network.",
      "Leveraged cloud-native technologies including Docker and Kubernetes, coding custom Kubernetes operators in Go to enable intent-based networking and MLOps for seamless cloud runtime management.",
      "Developed a Crossplane-based edge cloud automation solution, cutting deployment time by over 95% from 2 hours to under 5 minutes, resulting in reduced infrastructure costs and eliminating 100% of human errors.",
    ],
  },
  {
    id: 4,
    org: "UWARG",
    role: "Technical Director",
    terminal_name: "uwarg",
    date: "SEPTEMBER 2023 - PRESENT",
    description:
      "Leading the technical direction of the University of Waterloo's Aerial Robotics Group (UWARG), overseeing the design and development of autonomous UAVs for research and competition purposes.",
    bullets: [
      "Led system architecture, technical direction and flight-testing efforts for a student UAV design team of over 100 students, placing first in the Aerial Evolution Association of Canada (AEAC) 2024 & 2025 competitions.",
      "Architected ZeroPilot, a FreeRTOS-based STM32 flight controller in C++ enabling real-time coordination of telemetry, EKF sensor fusion, and fly-by-wire flight control subsystems, flying successfully in flight tests.",
      "Led development and integration of DMA-enabled UART, SPI, and I2C drivers using STM32 HAL for drone peripherals including GPS, RFD900, Magnetometer, Barometer, IMU, Power Module.",
    ],
  },
  {
    id: 5,
    org: "3Cycle",
    role: "Embedded Developer",
    terminal_name: "3cycle",
    date: "OCTOBER 2023 - SEPT 2024",
    description:
      "Worked on embedded systems for automation of shredding and filament processing to develop a sustainable circular ecosystem for 3D printing waste recycling.",
  },
  {
    id: 6,
    org: "OCMC",
    role: "Chief Technology Officer",
    terminal_name: "ocmc_cto",
    date: "MAY 2023 - SEPT 2025",
    description:
      "Led the technology team for the Ontario Competitive Mathematics Committee. Built a full-stack MERN application from the ground up handling user registration, contest administration, online challenges, score tracking, and news distribution for 2000+ registered participants.",
  },
  {
    id: 7,
    org: "Wingham CFS & 540 Golden Hawks RCACS",
    role: "Familiarization Pilot & Flight Theory Instructor",
    terminal_name: "famil_pilot",
    date: "SEPTEMBER 2022 - PRESENT",
    description:
      "On contract with the Department of National Defence (DND) as a Civilian Instructor. Serving as a glider familiarization pilot at a designated CFS in Wingham and teaching flight theory at 540 Sqn.",
  },
] as const;

export const certifications = [
  { id: 1, name: "FreeRTOS", credential_link: "https://www.linkedin.com/learning/certificates/9aa73d4e698cb906de4d4d66668aae825c2ce09fbe90154e6f4692df480128f6" },
  { id: 2, name: "RISC-V Architecture", credential_link: "https://www.linkedin.com/learning/certificates/3c9fcefad92a6340b8abe18438fac4608ddf4df82a1ce7589056ccbfe472eeba" },
  { id: 3, name: "Rust Essential Training", credential_link: "https://www.linkedin.com/learning/certificates/9ff46b6dbfe97562a069bdf5ef111fc78c3f51d32e60458ea0ff5693299f501e" },
  { id: 4, name: "Kubernetes", credential_link: "https://www.linkedin.com/learning/certificates/6cd901c88eb3112a5021944bb575f1a24cd21346f6acc47981b166c5640a2057" },
  { id: 5, name: "Docker", credential_link: "https://www.linkedin.com/learning/certificates/e24bb5d6d1902c8ce7a4109c83780d69399667e1b6c1b0a309b2edadab1e4edb" },
  { id: 6, name: "Neural Networks Foundations", credential_link: "https://www.linkedin.com/learning/certificates/02278e8106e8ce39f7090828cd6feab8e551b7b08731d3010f831ff4bf3a8d9e" },
  { id: 7, name: "Deep Learning Foundations", credential_link: "https://www.linkedin.com/learning/certificates/10ceccb4c5afb9b6ad180880b96c671dd16d1d33d57b84f1f840b723676daace" },
  { id: 8, name: "CNNs", credential_link: "https://www.linkedin.com/learning/certificates/c66ee2bb2af0b7a21dd6e92bb2e5249b31b3136b09f8602ea144604fd8721e7d" },
  { id: 9, name: "RNNs", credential_link: "https://www.linkedin.com/learning/certificates/23ccf2c96f248c31189225198b900af2eb90e13b6a31b128e5b545aa448d7924" },
  { id: 10, name: "GANs", credential_link: "https://www.linkedin.com/learning/certificates/d405c06cf7314984636e0a43ed46cdbc278ed93e29aa31eba17395aa9451c037" },
  { id: 11, name: "Neural Networks in C++", credential_link: "https://www.linkedin.com/learning/certificates/037d16b0fef5b6f6ae2f8f644b517624590246cb71fce5a73dabe49b1cef8e60" },
  { id: 12, name: "C for Embedded Applications", credential_link: "https://www.linkedin.com/learning/certificates/f019272db9d8af8d4217cc35e1785746fd88a9928b28ba6f8f116f7e9b1779fa" },
  { id: 13, name: "Arduino: Foundations", credential_link: "https://www.linkedin.com/learning/certificates/bae11d99ea2b0811009faf3db0f9b44fd3b4f110e0383a159e818160fdc0c5e5" },
  { id: 14, name: "Arduino: Interfacing with Hardware", credential_link: "https://www.linkedin.com/learning/certificates/7a98d6e0967efc372360df20acd98b522088142b4fa2f1aa81232bc64f82f63d" },
  { id: 15, name: "Arduino: Analog Devices", credential_link: "https://www.linkedin.com/learning/certificates/a626825db797680be1f3876ac7afb30bc8651287767cc93f66775addb71cfb01" },
  { id: 16, name: "Arduino: PWM", credential_link: "https://www.linkedin.com/learning/certificates/7f07497da6864f04729d8f9af8535933bf0e818b017ff16c308a3a573b865e7d" },
] as const;
