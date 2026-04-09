export interface Lesson {
  id: string;
  sessionNumber: number;
  title: string;
  subtitle: string;
  duration: number;
  goal: string;
  heroImage: string;
  sections: Section[];
  handout: string[];
  settings: string[];
  facilitatorAdaptations: FacilitatorAdaptation[];
}

export interface Section {
  title: string;
  duration: number;
  content: string;
}

export interface FacilitatorAdaptation {
  setting: string;
  note: string;
}

export const lessonsData: Lesson[] = [
  {
    id: "session-00",
    sessionNumber: 0,
    title: "Opening Grounding & Safety Framework",
    subtitle: "Universal Pilot Edition - Foundation",
    duration: 60,
    goal: "Establish safety, regulation, and informed consent framework for all subsequent sessions.",
    heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663490036747/MeHgb4NZrdFby9hhugrRXs/hero-main-baXdwLJooTu5wKug6Exhe8.webp",
    sections: [
      {
        title: "I. Welcome & Informed Consent",
        duration: 5,
        content: "Facilitator reads the locked consent language. Participants are informed this is psychoeducation, not therapy. They have the right to pass on any sharing, use Plan B (leave the room) at any time, and all feedback is anonymous."
      },
      {
        title: "II. The 3-2-1 Scan + Gravity Check",
        duration: 10,
        content: "Guided grounding technique: Notice 3 things you see, 2 things you feel physically, 1 thing you hear. Then press feet into ground, feel the chair, remember you are here and in control."
      },
      {
        title: "III. Voo Breath & Straw Breath",
        duration: 8,
        content: "Vagal toning exercises to activate the parasympathetic nervous system. Voo breath (low humming) and straw breath (slow exhale through pursed lips) to regulate the body."
      },
      {
        title: "IV. Plan B Introduction",
        duration: 5,
        content: "Bright yellow card introduced. Participants learn they can use Plan B (leave) at any time without explanation or judgment. This is their tool for safety."
      },
      {
        title: "V. Closing Grounding",
        duration: 10,
        content: "Wiggle toes, stretch, press palms together, feel skin boundary. Facilitator: 'You are leaving as [your name]. You are safe. You are present. You are here.'"
      },
      {
        title: "VI. Pilot Feedback Card",
        duration: 2,
        content: "Hand out anonymous feedback cards with 3 questions: (1) On a scale 1-10, how safe did you feel? (2) What worked? (3) What would help?"
      }
    ],
    handout: [
      "Plan B Card (bright yellow) - permission to leave at any time",
      "Grounding Techniques: 3-2-1 Scan, Gravity Check, Voo Breath, Straw Breath",
      "Informed Consent Language - Psychoeducation, not therapy"
    ],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [
      {
        setting: "NA/AA or Rehab",
        note: "Emphasize that this framework precedes any substance use. The nervous system wiring we study started before the first drink or drug."
      },
      {
        setting: "Jail / Corrections",
        note: "Frame Plan B as genuine autonomy in a system that demands control. This is real choice."
      },
      {
        setting: "VA / Military",
        note: "Connect grounding to combat readiness. These techniques are tools for nervous system regulation, just like tactical breathing."
      }
    ]
  },
  {
    id: "session-01",
    sessionNumber: 1,
    title: "The Glass Box Blueprint",
    subtitle: "How Early Isolation Wires the Nervous System",
    duration: 75,
    goal: "Introduce the case study and show how the first thirty days of life can wire a nervous system for distance and danger.",
    heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663490036747/MeHgb4NZrdFby9hhugrRXs/session-01-hero-6MPVBfBEokjjx592Rxk4k9.webp",
    sections: [
      {
        title: "I. Opening Grounding – Re-anchor",
        duration: 5,
        content: "Use the exact 3-2-1 Scan + Gravity Check + Voo Breath from Session 00. End with: 'You are here. You are in control of this space.'"
      },
      {
        title: "II. Quick Frame Reminder",
        duration: 3,
        content: "We are in psychoeducation mode. We study one documented life so we can see the machinery of trauma without flooding our own nervous systems. Mechanism over narrative. Right to pass. Plan B is always available."
      },
      {
        title: "III. Introducing the Case Study",
        duration: 12,
        content: "Today we meet Daniel. Born three pounds four ounces, seven weeks early. He spent the first thirty days of his life in a glass incubator — no mother's heartbeat, no skin-to-skin, no human touch. Just wires, alarms, and a priest giving him last rites. His body learned its very first lesson: Distance equals safety. Proximity equals danger."
      },
      {
        title: "IV. The Mechanism: How Early Isolation Wires the Brain",
        duration: 25,
        content: "NICU = chronic cortisol flood + zero oxytocin → disorganized attachment template. Body learns: 'If I stay still and quiet, maybe I survive.' Later echoes: hiding under blanket → sleep paralysis → adult freeze responses. The body keeps the score: screams at night, bed-wetting until age 11, hypervigilance."
      },
      {
        title: "V. Closing Grounding & Transition",
        duration: 10,
        content: "Exact same closing script: wiggle toes, stretch, feel skin boundary. 'You are leaving as [your name]. You are safe. You are present. You are here.'"
      },
      {
        title: "VI. Pilot Feedback Card",
        duration: 2,
        content: "Hand out anonymous feedback cards with 3 questions."
      }
    ],
    handout: [
      "The Glass Box Blueprint – Key Mechanisms",
      "Original wiring: Distance = safety",
      "Survival strategy installed: Freeze / fawn / don't take up space",
      "Later echoes: Sleep paralysis, screams, adult dissociation, over-functioning",
      "Lesson: The nervous system is not defective — it is loyal to the first lessons it was taught."
    ],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [
      {
        setting: "Rehab / NA/AA",
        note: "This is how the disease of trauma starts before the first drink or drug."
      },
      {
        setting: "Jail",
        note: "This is the wiring that shows up as freeze or fawn when the system expects compliance."
      },
      {
        setting: "VA / Military",
        note: "This is the same nervous-system wiring that shows up after combat, moral injury, or repeated deployments — the body learns 'distance = safety' long before the first tour."
      }
    ]
  },
  {
    id: "session-02",
    sessionNumber: 2,
    title: "Mapping the Survival Template",
    subtitle: "From Glass Box to War-Zone Childhood",
    duration: 75,
    goal: "Show how the original Glass Box Blueprint stacked with repeated relational violence and chaos in childhood to create the next layer of loyal survival adaptations.",
    heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663490036747/MeHgb4NZrdFby9hhugrRXs/session-02-hero-6MPVBfBEokjjx592Rxk4k9.webp",
    sections: [
      {
        title: "I. Opening Grounding – Re-anchor",
        duration: 5,
        content: "Use the exact 3-2-1 Scan + Gravity Check + Voo / Straw Breath from Session 00. End with: 'You are here. You are in control of this space. Plan B is always available.'"
      },
      {
        title: "II. Quick Frame & Plan B Reminder",
        duration: 4,
        content: "We remain in psychoeducation mode. We study one documented life so we can see the machinery without flooding our own nervous systems. Mechanism over narrative. Right to pass. Yellow Light or Red Light — use it."
      },
      {
        title: "III. Core Teaching: Mapping the Survival Template",
        duration: 35,
        content: "Last session we saw how the first thirty days in the glass box wired Daniel's nervous system with the original blueprint: distance equals safety, proximity equals danger. Today we watch that blueprint meet the next layer of threat — a war-zone childhood. By age five, after his parents split, a new man moved into the house. Violence became unpredictable and brutal. Screams ripped through the night. Daniel, at six years old, learned the only strategy that kept him alive: hide under a thin blanket, stay completely still, make no sound, take up no space. His body executed the Glass Box lesson perfectly — freeze. He watched his mother get beaten. He heard bones snap. He wanted to run to her but fear locked him in place. The same total freeze that would later show up in adult life as dissociation or shutdown under pressure. CPS came to school once. When asked about bruises, the children said, 'Only when we are bad.' They thought it was normal. Some nights they ran barefoot into the dark — gravel tearing their feet — trying to reach an uncle's house. Mom always lagged behind, pulled back by the same arm that had hurt her. The body kept the score. Bed-wetting continued until age eleven — a somatic signal of a nervous system that never felt safe enough to relax, even in sleep. At age ten the freeze response evolved into sleep paralysis — waking frozen, unable to move or scream, feeling a crushing presence on the chest. Later it became night screams: full-body alarms while he was unconscious, his nervous system still scanning for the next threat. None of this was broken. It was loyal. The nervous system was doing exactly what it was designed to do: keep a small human alive in an environment where danger could erupt without warning and love could disappear in a heartbeat."
      },
      {
        title: "IV. Group Reflection Prompt",
        duration: 8,
        content: "Only if room is regulated. 'Notice how the nervous system was not broken. It was executing the only strategies available to a child who had no power, no escape, and no consistent safety. Take a moment in silence. No sharing required.'"
      },
      {
        title: "V. Closing Grounding & Transition",
        duration: 8,
        content: "Exact same closing script as locked Session 01: wiggle toes, stretch, feel skin boundary, 'You are leaving as [your name]. You are safe. You are present. You are here.'"
      },
      {
        title: "VI. Pilot Feedback Card",
        duration: 2,
        content: "Hand out before they leave with 3 questions + one new data point: On a scale of 1–10, how clear was today's mechanism (the stacking of the survival template)?"
      }
    ],
    handout: [
      "Survival Template Layers:",
      "Layer 1 (Glass Box): Distance = safety",
      "Layer 2 (War-Zone Childhood): Freeze / fawn / hypervigilance / somatic echoes (bed-wetting, paralysis, screams)",
      "The nervous system is loyal — it maximized short-term survival in chaos."
    ],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [
      {
        setting: "NA/AA or Rehab",
        note: "This is how the wiring that started before the first drink or drug kept stacking — the nervous system doing its job in a war zone at home."
      },
      {
        setting: "Jail / Corrections",
        note: "This is the same template that shows up as freeze or over-compliance when the system demands control."
      },
      {
        setting: "VA / Military",
        note: "This is the nervous-system stacking that happens after repeated threat — same wiring that shows up in combat, moral injury, or back home when the body still thinks it's under fire."
      }
    ]
  },
  {
    id: "session-04",
    sessionNumber: 4,
    title: "Trauma Bonds and the Adult Echo",
    subtitle: "When the Survival Template Meets Intimate Relationships",
    duration: 75,
    goal: "Show how the childhood survival template stacked into adult intimate relationships, creating a trauma bond that felt familiar even when destructive.",
    heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663490036747/MeHgb4NZrdFby9hhugrRXs/hero-main-baXdwLJooTu5wKug6Exhe8.webp",
    sections: [
      {
        title: "I. Opening Grounding – Re-anchor",
        duration: 5,
        content: "Use the exact 3-2-1 Scan + Gravity Check + Voo / Straw Breath from Session 00. End with: 'You are here. You are in control of this space. Plan B is always available.'"
      },
      {
        title: "II. Quick Frame & Plan B Reminder",
        duration: 4,
        content: "We remain in psychoeducation mode. We study one documented life so we can see the machinery without flooding our own nervous systems. Mechanism over narrative. Right to pass. Yellow Light or Red Light — use it."
      },
      {
        title: "III. Core Teaching: Trauma Bonds and the Adult Echo",
        duration: 35,
        content: "By now we have seen the Glass Box Blueprint and how it stacked with war-zone childhood into a survival template of freeze, fawn, hypervigilance, and over-functioning. Today we watch that same template meet intimate adult relationships. At seventeen, a stupid bet at the steakhouse led Daniel into a twenty-year marriage. Three months in, his partner became pregnant. His nervous system, still wired for 'perform or be abandoned,' went into overdrive: two jobs, paid-off trailer, car with no payments — anything to prove he could provide the safety he never had. What began as responsibility quickly became a trauma bond. A trauma bond is not built on mutual respect or steady safety. It is built on intermittent reinforcement — cycles of chaos, conflict, and brief moments of relief that the nervous system mistakes for love. To a system wired in the Glass Box and war-zone childhood, calm actually felt dangerous. Chaos felt familiar. The adrenaline spikes that once kept him alive in the house of screams now registered as 'connection.' The childhood fawn response evolved into chronic over-functioning. Daniel became hyper-responsible, indispensable, the one who fixed everything — exactly the competence trap that had once earned temporary safety from unpredictable caregivers. When he tried to set boundaries or leave, the fear of losing his children (another abandonment) pulled him back. The kids became weapons in the cycle. His partner learned exactly where his soft spots were. Pain or stress was turned back on him: 'You think you're suffering? Try being me.' Relief was intermittent and unpredictable — just enough to keep the nervous system hooked. When he relapsed, she did not offer support. She punished. Kicked him out. The nervous system learned the lesson it had learned as a child: do not bring pain here. Hide it. Perform harder. Numb it when performance is no longer enough. Eventually he was hiding in literal closets when her family visited. Legally married with four children, yet erased — the adult version of the six-year-old under the blanket. None of this was broken. The nervous system was still executing the only blueprint it had ever been given: Fawn and over-function to earn safety. Stay in the chaos because chaos is familiar. Dissociate or numb when the performance finally cracks. The trauma bond felt like love because the nervous system recognized the pattern it had practiced for decades. It was loyal. It was doing its job — protecting him the only way it knew how."
      },
      {
        title: "IV. Regulated Reflection Prompt",
        duration: 8,
        content: "Optional, silent only. 'Take a quiet moment. Notice how the nervous system was not defective — it was loyal, executing the only templates it had been given. No sharing required.'"
      },
      {
        title: "V. Closing Grounding & Transition",
        duration: 8,
        content: "Exact same closing script as previous locked sessions: wiggle toes, stretch, press palms, feel skin boundary. 'You are leaving as [your name]. You are safe. You are present. You are here.'"
      },
      {
        title: "VI. Pilot Feedback Card",
        duration: 2,
        content: "Hand out before they leave with same 5 questions + one new targeted question: On a scale of 1–10, how manageable was the material intensity today?"
      }
    ],
    handout: [
      "Survival Template Layers – Layer 4: Adult Echoes",
      "Childhood wiring (Glass Box + war zone) → fawn / competence trap",
      "Adult echo: Trauma bond formed through intermittent reinforcement",
      "Nervous system response: Over-function to earn safety, stay in chaos because it feels familiar, numb or dissociate when performance fails",
      "Loyalty message: The system was still trying to protect him with the only strategies it had ever been taught."
    ],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [
      {
        setting: "NA/AA or Rehab",
        note: "This is how the wiring that started before the first drink or drug showed up in relationships — using the same fawn and over-functioning to try to stay safe."
      },
      {
        setting: "Jail / Corrections",
        note: "This is the same template that can show up as over-compliance or staying in chaotic situations because the nervous system learned 'perform or be abandoned.'"
      },
      {
        setting: "VA / Military",
        note: "This is the nervous-system stacking that shows up in intimate relationships after combat or moral injury — the body still using old blueprints to regulate threat, even at home."
      }
    ]
  }
];
