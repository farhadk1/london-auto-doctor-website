// Comprehensive automotive electrical services data

export interface ServiceCategory {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon: string;
  pricing: {
    from: number;
    to?: number;
    unit: "fixed" | "hourly" | "callout";
  };
  features: string[];
  duration: string;
  availability: "emergency" | "scheduled" | "both";
  commonIssues: string[];
  process: string[];
  warranty: string;
}

export const ALL_SERVICES: ServiceCategory[] = [
  {
    id: "battery-services",
    title: "Battery Services",
    slug: "battery-services",
    description:
      "Comprehensive battery testing, replacement, and charging system diagnostics for all vehicle types. We use professional-grade equipment to accurately diagnose battery health and charging system performance.",
    shortDescription: "Testing, replacement, and charging system diagnostics",
    icon: "/Icons-Web/Battery Services.png",
    pricing: {
      from: 45,
      to: 150,
      unit: "fixed",
    },
    features: [
      "Professional battery testing with digital analyzers",
      "Battery replacement for all vehicle types",
      "Charging system diagnostics",
      "Alternator output testing",
      "Starter motor current draw testing",
      "12-month warranty on batteries",
      "Free battery health checks",
    ],
    duration: "30-60 minutes",
    availability: "both",
    commonIssues: [
      "Car won't start",
      "Battery warning light",
      "Dim headlights",
      "Slow engine cranking",
      "Battery keeps dying",
      "Corrosion on terminals",
    ],
    process: [
      "Visual inspection of battery and terminals",
      "Battery load testing with professional equipment",
      "Charging system voltage testing",
      "Alternator output and ripple testing",
      "Starter motor current draw analysis",
      "Battery replacement if required",
      "System verification and testing",
    ],
    warranty: "12 months on parts, 6 months on labor",
  },

  {
    id: "electrical-diagnostics",
    title: "Electrical Diagnostics",
    slug: "electrical-diagnostics",
    description:
      "Advanced electrical fault finding using professional diagnostic equipment. We specialize in tracing complex electrical problems across all vehicle systems including engine management, lighting, and comfort systems.",
    shortDescription: "Advanced fault finding and electrical system analysis",
    icon: "/Icons-Web/Electrical Diagnostics.png",
    pricing: {
      from: 75,
      to: 120,
      unit: "hourly",
    },
    features: [
      "Professional diagnostic scanners",
      "Multi-meter and oscilloscope testing",
      "Wiring diagram consultation",
      "ECU fault code reading and clearing",
      "Circuit tracing and fault isolation",
      "Comprehensive diagnostic reports",
      "No-fault-found guarantee",
    ],
    duration: "1-3 hours",
    availability: "scheduled",
    commonIssues: [
      "Check engine lights",
      "Intermittent electrical faults",
      "Non-functioning components",
      "Strange electrical behavior",
      "ECU error codes",
      "Blown fuses repeatedly",
    ],
    process: [
      "Initial consultation and symptom analysis",
      "Visual inspection of electrical systems",
      "Diagnostic scanner connection",
      "Circuit testing with professional tools",
      "Fault isolation and root cause analysis",
      "Repair recommendations and quotes",
      "System verification after repairs",
    ],
    warranty: "3 months on diagnostic work",
  },

  {
    id: "alternator-repair",
    title: "Alternator Repair",
    slug: "alternator-repair",
    description:
      "Specialist alternator testing, repair, and replacement services. We service all types of alternators from standard units to high-output performance alternators for modified vehicles.",
    shortDescription: "Charging system repair and alternator replacement",
    icon: "/Icons-Web/Alternator Repair.png",
    pricing: {
      from: 85,
      to: 350,
      unit: "fixed",
    },
    features: [
      "Alternator output testing",
      "Brush and slip ring replacement",
      "Diode testing and replacement",
      "Bearing replacement service",
      "High-output alternator installation",
      "Charging system optimization",
      "Performance alternator upgrades",
    ],
    duration: "1-2 hours",
    availability: "scheduled",
    commonIssues: [
      "Battery warning light",
      "Dim headlights at idle",
      "Battery not charging",
      "Whining noise from alternator",
      "Electrical accessories failing",
      "Overcharging battery",
    ],
    process: [
      "Charging system voltage testing",
      "Alternator output and ripple testing",
      "Visual inspection for damage",
      "Belt tension and condition check",
      "Internal component testing",
      "Repair or replacement as needed",
      "System verification and load testing",
    ],
    warranty: "12 months on replacement alternators",
  },

  {
    id: "starter-motor",
    title: "Starter Motor Services",
    slug: "starter-motor",
    description:
      "Complete starter motor testing, repair, and replacement services. We handle everything from simple solenoid issues to complete starter motor rebuilds and high-torque starter upgrades.",
    shortDescription: "Starter motor testing, repair, and replacement",
    icon: "/Icons-Web/Starter Motor Services.png",
    pricing: {
      from: 75,
      to: 280,
      unit: "fixed",
    },
    features: [
      "Starter motor current draw testing",
      "Solenoid testing and replacement",
      "Brush and commutator servicing",
      "High-torque starter installations",
      "Flywheel ring gear inspection",
      "Starting system optimization",
      "Performance starter upgrades",
    ],
    duration: "1-2 hours",
    availability: "both",
    commonIssues: [
      "Engine won't crank",
      "Clicking noise when starting",
      "Grinding noise on startup",
      "Slow cranking speed",
      "Starter motor stuck engaged",
      "Intermittent starting problems",
    ],
    process: [
      "Battery and charging system check",
      "Starter motor current draw testing",
      "Solenoid operation testing",
      "Visual inspection for damage",
      "Flywheel ring gear inspection",
      "Repair or replacement as required",
      "Starting system verification",
    ],
    warranty: "12 months on replacement starters",
  },

  {
    id: "lighting-systems",
    title: "Lighting Systems",
    slug: "lighting-systems",
    description:
      "Professional automotive lighting services including headlight restoration, LED conversions, and complete lighting system repairs. We work on all types of vehicle lighting from basic bulb replacement to complex HID and LED systems.",
    shortDescription: "Headlights, indicators, and interior lighting repair",
    icon: "/Icons-Web/Lighting Systems.png",
    pricing: {
      from: 25,
      to: 200,
      unit: "fixed",
    },
    features: [
      "Headlight restoration and alignment",
      "LED conversion and upgrades",
      "HID system repair and replacement",
      "Indicator and hazard light repair",
      "Interior lighting solutions",
      "Brake light and tail light repair",
      "Custom lighting installations",
    ],
    duration: "30 minutes - 2 hours",
    availability: "both",
    commonIssues: [
      "Dim or yellowed headlights",
      "Blown bulbs and fuses",
      "Flickering lights",
      "HID ballast failures",
      "LED driver failures",
      "Indicator not working",
    ],
    process: [
      "Visual inspection of all lighting",
      "Electrical circuit testing",
      "Bulb and fuse inspection",
      "Switch and relay testing",
      "Repair or replacement as needed",
      "Headlight alignment check",
      "System functionality verification",
    ],
    warranty: "6 months on parts and labor",
  },

  {
    id: "security-systems",
    title: "Security & Alarm Systems",
    slug: "security-systems",
    description:
      "Professional installation and repair of vehicle security systems including alarms, immobilizers, and central locking systems. We specialize in both factory and aftermarket security solutions.",
    shortDescription: "Alarm systems, immobilizers, and security installations",
    icon: "/Icons-Web/Security Alarm Systems-2.png",
    pricing: {
      from: 95,
      to: 450,
      unit: "fixed",
    },
    features: [
      "Alarm system installation and repair",
      "Immobilizer programming and repair",
      "Central locking system repair",
      "Remote control programming",
      "Aftermarket security upgrades",
      "Tracking system installation",
      "Keyless entry solutions",
    ],
    duration: "1-4 hours",
    availability: "scheduled",
    commonIssues: [
      "Alarm not arming/disarming",
      "Central locking not working",
      "Key fob not responding",
      "Immobilizer preventing start",
      "False alarm triggers",
      "Security light flashing",
    ],
    process: [
      "Security system diagnostics",
      "Key fob and remote testing",
      "Central locking operation check",
      "Immobilizer system testing",
      "Wiring inspection and repair",
      "Programming and calibration",
      "Full system functionality test",
    ],
    warranty: "12 months on installations",
  },

  {
    id: "air-conditioning",
    title: "Air Conditioning Electrical",
    slug: "air-conditioning",
    description:
      "Electrical diagnostics and repair for automotive air conditioning systems. We handle AC clutch problems, blower motor issues, and complete electrical system diagnostics for climate control.",
    shortDescription: "AC electrical systems and climate control repair",
    icon: "/Icons-Web/Air Conditioning Electrical-2.png",
    pricing: {
      from: 55,
      to: 180,
      unit: "fixed",
    },
    features: [
      "AC compressor clutch testing",
      "Blower motor replacement",
      "Climate control diagnostics",
      "Pressure switch testing",
      "Wiring harness repair",
      "Control panel repair",
      "Sensor replacement",
    ],
    duration: "1-2 hours",
    availability: "scheduled",
    commonIssues: [
      "AC not turning on",
      "Blower motor not working",
      "Intermittent cooling",
      "Climate control not responding",
      "AC clutch not engaging",
      "Temperature sensor faults",
    ],
    process: [
      "Climate control system inspection",
      "Electrical circuit testing",
      "Compressor clutch operation test",
      "Blower motor and resistor testing",
      "Sensor and switch verification",
      "Repair faulty components",
      "System operation verification",
    ],
    warranty: "6 months on parts and labor",
  },

  {
    id: "wiring-repairs",
    title: "Wiring & Harness Repair",
    slug: "wiring-repairs",
    description:
      "Professional automotive wiring repair and custom harness fabrication. We repair damaged wiring, upgrade electrical systems, and create custom wiring solutions for modified vehicles.",
    shortDescription: "Professional wiring repair and custom installations",
    icon: "/Icons-Web/Wiring Harness Repair.png",
    pricing: {
      from: 45,
      to: 95,
      unit: "hourly",
    },
    features: [
      "Wiring harness repair and replacement",
      "Custom wiring fabrication",
      "Connector repair and replacement",
      "Circuit protection upgrades",
      "Electrical system modifications",
      "Power distribution upgrades",
      "Professional wiring standards",
    ],
    duration: "1-4 hours",
    availability: "scheduled",
    commonIssues: [
      "Damaged wiring looms",
      "Corroded connectors",
      "Rodent damage to wiring",
      "Blown fuses repeatedly",
      "Electrical shorts",
      "Poor connections",
    ],
    process: [
      "Wiring inspection and testing",
      "Fault location and isolation",
      "Damaged section removal",
      "Professional repair techniques",
      "Connector cleaning/replacement",
      "Circuit protection verification",
      "Complete system testing",
    ],
    warranty: "6 months on repair work",
  },

  {
    id: "dashboard-repairs",
    title: "Dashboard & Instrument Repair",
    slug: "dashboard-repairs",
    description:
      "Specialized repair services for dashboard electronics, instrument clusters, and warning light systems. We handle everything from faulty gauges to complete dashboard electrical rebuilds.",
    shortDescription: "Instrument cluster and dashboard electrical repair",
    icon: "/Icons-Web/Dashboard Instrument Repair.png",
    pricing: {
      from: 85,
      to: 250,
      unit: "fixed",
    },
    features: [
      "Instrument cluster repair",
      "Gauge calibration and testing",
      "Warning light diagnostics",
      "Dashboard electrical repair",
      "LCD/LED display repair",
      "Switch and control repair",
      "Dashboard wiring repair",
    ],
    duration: "2-4 hours",
    availability: "scheduled",
    commonIssues: [
      "Gauges not working",
      "Warning lights staying on",
      "Dashboard lights not working",
      "Speedometer not working",
      "Fuel gauge inaccurate",
      "Display screen blank",
    ],
    process: [
      "Dashboard system diagnostics",
      "Instrument cluster testing",
      "Individual gauge verification",
      "Wiring and connector inspection",
      "Component repair or replacement",
      "Calibration and programming",
      "Full functionality verification",
    ],
    warranty: "6 months on repair work",
  },

  {
    id: "van-security-services",
    title: "Van Security Services",
    slug: "van-security-services",
    description:
      "Comprehensive van security solutions including advanced locking systems, immobilizers, and security camera installations. We specialize in protecting commercial vans from theft with multi-layered security approaches.",
    shortDescription: "Advanced van security systems and theft protection",
    icon: "/Icons-Web/Van-Security-Services.png",
    pricing: {
      from: 145,
      to: 450,
      unit: "fixed",
    },
    features: [
      "Improved lock system upgrades",
      "Advanced immobilizer system installation",
      "Security dashcam installation and setup",
      "Multi-point locking mechanisms",
      "Anti-theft alarm systems",
      "GPS tracking system integration",
      "Deadlock and slam lock installation",
    ],
    duration: "2-6 hours",
    availability: "scheduled",
    commonIssues: [
      "Van break-ins and theft attempts",
      "Inadequate factory security",
      "Tool and equipment theft",
      "Insurance requirements for security",
      "Remote monitoring needs",
      "Keyless entry vulnerabilities",
    ],
    process: [
      "Van security assessment and risk analysis",
      "Custom security solution design",
      "Professional installation of security systems",
      "Immobilizer and alarm system integration",
      "Dashcam positioning and wiring",
      "System testing and configuration",
      "Customer training and handover",
    ],
    warranty: "12 months on installations and systems",
  },

  {
    id: "emergency-services",
    title: "Emergency Electrical Services",
    slug: "emergency",
    description:
      "Out of hours Emergency Services available! across London. We provide rapid response for electrical breakdowns, jump starts, and urgent repairs to get you back on the road quickly.",
    shortDescription: "Out of hours Emergency Services available!",
    icon: "/Icons-Web/Emergency Electrical Services.png",
    pricing: {
      from: 75,
      to: 150,
      unit: "callout",
    },
    features: [
      "Out hours emergency callout",
      "Jump start services",
      "Emergency battery replacement",
      "Roadside electrical diagnostics",
      "Temporary repair solutions",
      "Priority response times",
      "Mobile workshop equipped",
    ],
    duration: "30 minutes - 2 hours",
    availability: "emergency",
    commonIssues: [
      "Complete electrical failure",
      "Dead battery situations",
      "Alternator failure",
      "Starter motor failure",
      "Blown main fuses",
      "Emergency breakdown",
    ],
    process: [
      "Rapid response deployment",
      "On-site safety assessment",
      "Quick diagnostic evaluation",
      "Emergency repair or replacement",
      "Temporary solution if needed",
      "Get vehicle mobile again",
      "Follow-up permanent repair scheduling",
    ],
    warranty: "Emergency repairs: 30 days",
  },

  {
    id: "coding-programming",
    title: "Coding and Programming",
    slug: "coding-programming",
    description:
      "Professional ECU coding, module programming, and software configuration services. We specialize in vehicle adaptations, feature activations, and ECU remapping for enhanced functionality and performance.",
    shortDescription:
      "ECU coding, module programming, and software configuration",
    icon: "/Icons-Web/Coding and Programming.png",
    pricing: {
      from: 95,
      to: 250,
      unit: "fixed",
    },
    features: [
      "ECU coding and remapping",
      "Module programming and configuration",
      "Feature activation and adaptations",
      "Software updates and calibrations",
      "Key programming and immobilizer coding",
      "Component coding after replacement",
      "Custom vehicle configurations",
    ],
    duration: "1-3 hours",
    availability: "scheduled",
    commonIssues: [
      "Features not working after module replacement",
      "Key programming requirements",
      "Immobilizer programming needed",
      "Software updates required",
      "Component adaptations needed",
      "Performance optimization requests",
    ],
    process: [
      "Vehicle identification and compatibility check",
      "Current software version analysis",
      "Backup of existing configurations",
      "Programming and coding procedures",
      "Feature activation and testing",
      "System verification and calibration",
      "Documentation and customer handover",
    ],
    warranty: "3 months on programming work",
  },

  {
    id: "car-audio-radio",
    title: "Car Audio Systems & Radio",
    slug: "car-audio-radio",
    description:
      "Complete car audio electrical services including radio installation, speaker wiring, amplifier setup, and audio system diagnostics. We handle both factory and aftermarket audio systems with professional installation standards.",
    shortDescription: "Audio system installation, repair, and electrical work",
    icon: "/Icons-Web/Car Audio System and Radio.png",
    pricing: {
      from: 45,
      to: 300,
      unit: "fixed",
    },
    features: [
      "Radio and head unit installation",
      "Speaker wiring and installation",
      "Amplifier and subwoofer setup",
      "Bluetooth and hands-free integration",
      "Audio system diagnostics",
      "Custom wiring harness fabrication",
      "Sound system upgrades",
    ],
    duration: "1-4 hours",
    availability: "scheduled",
    commonIssues: [
      "Radio not working after installation",
      "Poor audio quality or distortion",
      "Speakers not functioning",
      "Bluetooth connectivity issues",
      "Amplifier not powering on",
      "Electrical interference in audio",
    ],
    process: [
      "Audio system assessment and planning",
      "Wiring harness preparation",
      "Professional installation procedures",
      "Power and signal wire connections",
      "System integration and testing",
      "Audio quality verification",
      "Customer demonstration and handover",
    ],
    warranty: "12 months on installations",
  },

  {
    id: "airbag-diagnostics",
    title: "Airbag Fault Diagnostics",
    slug: "airbag-diagnostics",
    description:
      "Specialized airbag system diagnostics and electrical repair services. We diagnose airbag warning lights, sensor faults, and wiring issues to ensure your safety systems function correctly.",
    shortDescription: "Airbag system diagnostics and safety system repair",
    icon: "/Icons-Web/Airbag Repair.png",
    pricing: {
      from: 85,
      to: 200,
      unit: "fixed",
    },
    features: [
      "Airbag fault code reading and diagnosis",
      "Crash sensor testing and replacement",
      "Airbag wiring harness repair",
      "Seat belt pre-tensioner diagnostics",
      "Control module testing",
      "Safety system verification",
      "Post-repair system reset",
    ],
    duration: "1-2 hours",
    availability: "scheduled",
    commonIssues: [
      "Airbag warning light on dashboard",
      "Airbag system fault codes",
      "Crash sensor malfunction",
      "Seat belt pre-tensioner faults",
      "Airbag control module errors",
      "Wiring damage after accidents",
    ],
    process: [
      "Safety system diagnostic scan",
      "Fault code analysis and interpretation",
      "Component testing and inspection",
      "Wiring continuity verification",
      "Sensor and module testing",
      "Repair or replacement as needed",
      "System reset and verification",
    ],
    warranty: "6 months on diagnostic and repair work",
  },

  {
    id: "windows-mirrors",
    title: "Windows & Mirrors",
    slug: "windows-mirrors",
    description:
      "Electric window and mirror electrical system repair services. We fix window regulators, motor replacements, mirror adjustments, and all electrical components related to window and mirror operation.",
    shortDescription: "Electric windows, mirrors, and regulator repair",
    icon: "/Icons-Web/Electric Window and Mirror.png",
    pricing: {
      from: 55,
      to: 220,
      unit: "fixed",
    },
    features: [
      "Window regulator motor replacement",
      "Electric mirror motor repair",
      "Window switch diagnostics and repair",
      "Mirror adjustment motor replacement",
      "Heated mirror element repair",
      "Auto-folding mirror programming",
      "Window and mirror wiring repair",
    ],
    duration: "1-3 hours",
    availability: "scheduled",
    commonIssues: [
      "Windows not going up/down",
      "Window moving slowly or stuck",
      "Mirrors not adjusting electrically",
      "Heated mirrors not working",
      "Auto-folding mirrors not functioning",
      "Window switches not responding",
    ],
    process: [
      "Window and mirror operation testing",
      "Switch and control diagnostics",
      "Motor and regulator inspection",
      "Electrical circuit verification",
      "Component replacement as needed",
      "Programming and calibration",
      "Full functionality verification",
    ],
    warranty: "12 months on parts and labor",
  },
];

// Helper functions for service data
export function getServiceBySlug(slug: string): ServiceCategory | undefined {
  return ALL_SERVICES.find((service) => service.slug === slug);
}

export function getEmergencyServices(): ServiceCategory[] {
  return ALL_SERVICES.filter(
    (service) =>
      service.availability === "emergency" || service.availability === "both"
  );
}

export function getScheduledServices(): ServiceCategory[] {
  return ALL_SERVICES.filter(
    (service) =>
      service.availability === "scheduled" || service.availability === "both"
  );
}
