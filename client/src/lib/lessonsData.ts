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
  },
  {
    id: "session-03",
    sessionNumber: 3,
    title: "The Competence Trap",
    subtitle: "How Fawn and Over-Functioning Became Survival",
    duration: 75,
    goal: "Show how the childhood survival template evolved into chronic over-functioning and the competence trap — a sophisticated nervous-system strategy that once maximized short-term safety but carried a hidden long-term cost.",
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
        title: "III. Core Teaching: The Competence Trap",
        duration: 35,
        content: "Last session we saw the original Glass Box Blueprint stack with war-zone childhood to create a survival template of freeze, fawn, and hypervigilance. Today we watch that fawn response evolve into something more sophisticated — and more costly. By his teens, Daniel's nervous system had learned that freezing kept him alive under immediate threat, but fawning (becoming useful, indispensable, the one who over-functions) could sometimes de-escalate unpredictable adults or earn temporary safety. That fawn response turned into chronic over-functioning. He started working back-of-house restaurant jobs as a teenager — grueling hours, grease, heat, physical exhaustion. He pushed his body until it literally collapsed because his internal wiring said: 'The second you stop being useful, you will be discarded.' The competence trap was now fully formed. The trap works like this: The more the survivor over-functions to appease or protect, the higher the baseline of expectation becomes. Society rewards it — calls it strong work ethic, team player, reliable. But the nervous system is still running on panic, not choice. Eventually the exhausted, disregulated system hits a wall. When it slows down or breaks, the same people who benefited from the over-functioning now punish the 'failure.' The survivor is labeled defective and discarded — exactly what the childhood nervous system feared most. Daniel lived this trap for decades. He performed, provided, fixed, and carried everyone — because the Glass Box and war-zone lessons had taught him that usefulness was the only reliable form of safety. When he finally began to crack, the old blueprint had no off-switch. Early substance use entered here as another layer of regulation. Alcohol at 16, then opioids by 17 — not for recreation, but to quiet the constant internal roar when performance alone could no longer keep the nervous system regulated. The fawn had become competence; the competence had become exhaustion; the exhaustion was managed with chemicals. None of this was broken. The nervous system was still executing the only strategies it had ever been taught: Fawn and become indispensable so they won't abandon or destroy you. Over-function to earn safety. Numb or collapse when the performance finally fails. This is the competence trap — a loyal, intelligent survival adaptation that once kept a child alive in chaos and later became a cage in adulthood."
      },
      {
        title: "IV. Regulated Reflection Prompt",
        duration: 8,
        content: "Optional, silent only. 'Take a quiet moment. Notice how the nervous system was not defective — it was loyal, executing the only strategies available. No sharing required.'"
      },
      {
        title: "V. Closing Grounding & Transition",
        duration: 8,
        content: "Exact same closing script as previous locked sessions."
      },
      {
        title: "VI. Pilot Feedback Card",
        duration: 2,
        content: "Same 6 questions as the locked Session 04 (safety, Plan B usage, exit feeling, mechanism clarity, relevance, material intensity)."
      }
    ],
    handout: [
      "Survival Template Layers – Layer 3: The Competence Trap",
      "Childhood fawn → adult over-functioning",
      "Nervous system learns: 'Be useful or be discarded'",
      "Society rewards the trap until the system cracks",
      "Hidden cost: burnout, health collapse, substance use as regulation",
      "Loyalty message: The nervous system was still doing its job — maximizing survival with the only tools it had been given."
    ],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [
      {
        setting: "NA/AA or Rehab",
        note: "This is how the wiring that started before the first drink or drug turned into over-functioning and the competence trap — performing to survive until substances became the next regulator."
      },
      {
        setting: "Jail / Corrections",
        note: "This is the same fawn/over-functioning template that can show up as over-compliance or 'being the strong one' under institutional pressure."
      },
      {
        setting: "VA / Military",
        note: "This is the nervous-system stacking many service members recognize — fawn and hyper-responsibility used to protect the mission or the unit, even when it costs the self."
      }
    ]
  },
  {
    id: "session-05",
    sessionNumber: 5,
    title: "The Breaking Point",
    subtitle: "When the Loyal Template Begins to Crack",
    duration: 75,
    goal: "Show how the stacked survival template eventually reached its limit — not because the nervous system failed, but because the loyal adaptations that once kept Daniel alive could no longer sustain him in an adult world.",
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
        title: "III. Core Teaching: The Breaking Point",
        duration: 35,
        content: "By now we have watched the survival template stack from the Glass Box through childhood and into the adult trauma bond. The nervous system stayed loyal — fawning, over-functioning, numbing, performing — because those strategies once kept him alive. Today we reach the moment the loyal template begins to crack. The costs had been stacking for years. Chronic over-functioning drained Daniel's body and mind. Health issues appeared. Sleep was shattered. Dissociation became more frequent. The competence trap that once earned temporary safety now demanded superhuman output just to maintain the status quo. When he tried to set boundaries or leave the marriage, terror of losing his children — another abandonment — pulled him back. The nervous system doubled down on the only blueprint it knew: perform harder, hide the pain, numb when performance failed. External pressures mounted. Court involvement. Family ultimatums. The relationship became a pressure cooker of intermittent reinforcement and punishment. In 2015, his partner and mother tag-teamed him into court-ordered rehab — not for healing, but for control. The counselor saw it immediately: 'You'll relapse. You're not here by choice. This is pain with desperate coping mechanisms attached.' He kicked daily opiates. Spent six months on Suboxone. Then quit that too. The pain remained, so the nervous system switched weapons. From 2015 to 2021, meth became the new regulator — sometimes injected, sometimes traded for alcohol — anything to keep the old template running just a little longer. The breaking point was not dramatic or cinematic. It was the slow, grinding realization that the strategies that had once maximized survival were now destroying him. The nervous system was still trying to protect him — still executing the Glass Box and war-zone lessons with perfect loyalty — but the adult world had grown larger than the old blueprint could hold. Burnout. Deepening dissociation. Loss of self. The gap between the competent mask he wore and the exhausted human underneath finally became too wide to ignore. The nervous system had not failed. It had simply reached the edge of what those early adaptations could sustain. This is the breaking point: the loyal template cracking under the weight of its own success. Not because Daniel was broken, but because the survival strategies that once kept him alive in the incubator and the violent house could no longer carry him through an adult life built on the same unpredictable threat."
      },
      {
        title: "IV. Regulated Reflection Prompt",
        duration: 8,
        content: "Optional, silent only. 'Take a quiet moment. Notice how the nervous system remained loyal even as the old template began to crack. No sharing required.'"
      },
      {
        title: "V. Closing Grounding & Transition",
        duration: 8,
        content: "Exact same closing script as previous locked sessions."
      },
      {
        title: "VI. Pilot Feedback Card",
        duration: 2,
        content: "Same 7 questions (safety, Plan B usage, exit feeling, mechanism clarity, relevance, material intensity, hope)."
      }
    ],
    handout: [
      "Survival Template Layers – Layer 5: The Breaking Point",
      "Accumulated cost of fawn / competence trap / numbing",
      "Nervous system doubles down on old strategies (perform harder, hide pain, switch substances)",
      "External pressures expose the limits",
      "Internal conflict grows (mask vs. exhaustion)",
      "Loyalty message: The nervous system was still doing its job — it had simply reached the edge of what the old blueprint could sustain."
    ],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [
      {
        setting: "NA/AA or Rehab",
        note: "This is the moment the wiring that started before the first drink or drug finally hits the wall — the old survival strategies stop working."
      },
      {
        setting: "Jail / Corrections",
        note: "This is the same stacking that can show up as burnout, shutdown, or intensified use when the system demands performance but the old template can't keep up."
      },
      {
        setting: "VA / Military",
        note: "This is the nervous-system point many service members recognize — when the strategies that kept you alive in combat or on deployment start cracking under the weight of everyday life."
      }
    ]
  },
  {
    id: "session-08",
    sessionNumber: 8,
    title: "Rebuilding Safety",
    subtitle: "New Practices for Nervous-System Regulation and Boundary Setting",
    duration: 75,
    goal: "Show how the nervous system, after the turning point, begins to deepen new wiring through repeatable, practical regulation and boundary practices that provide consistent new evidence of safety.",
    heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663490036747/MeHgb4NZrdFby9hhugrRXs/session-01-hero-6MPVBfBEokjjx592Rxk4k9.webp",
    sections: [
      {
        title: "I. Opening Grounding - Re-anchor",
        duration: 5,
        content: "Use the exact 3-2-1 Scan + Gravity Check + Voo / Straw Breath from Session 00. End with: You are here. You are in control of this space. Plan B is always available."
      },
      {
        title: "II. Quick Frame & Plan B Reminder",
        duration: 4,
        content: "We remain in psychoeducation mode. We study one documented life so we can see the machinery without flooding our own nervous systems. Mechanism over narrative. Right to pass. Yellow Light or Red Light - use it."
      },
      {
        title: "III. Core Teaching: Rebuilding Safety",
        duration: 35,
        content: "By now we have watched the loyal survival template stack from the Glass Box through childhood, trauma bonds, weaponized intimacy, and the breaking point. Today we watch how that turning begins to deepen through repeatable practices that give the nervous system new evidence of safety. After the crack, Daniel did not have a sudden breakthrough. He began small, consistent experiments. He returned to the exact grounding tools we practiced in Session 00 - pressing his feet into the floor (gravity press), the 3-2-1 scan, the voo breath - whenever the old panic or shutdown rose. These were not fixing him. They were delivering new data: I can feel my body in the present moment and still be safe. He started making the agonizing choice to accept boring, full peace instead of the familiar chaos of the old trauma bond. In his darkest moments he held the specific names of his four children - Maverick, Shayla, Tegan, Adalie - and decided, one more minute, not to disappear. He began experimenting with small boundaries - saying no in tiny, tolerable ways instead of defaulting to fawn and over-functioning. Each time he did this without collapse, the nervous system received new evidence: I can set a limit and the world does not end. These practices were not magic. They were biology. Repeated safe experiences strengthen new neural pathways (neuroplasticity). They reduce chronic allostatic load. They open small windows of ventral vagal regulation - the biological state of calm presence and flexible connection instead of pure survival. The nervous system remained loyal to its history - it had kept him alive for decades. These new practices simply gave it accumulating evidence that safer responses were now possible. This is how rebuilding safety happens: not by erasing the old template, but by giving the loyal nervous system consistent, tolerable new data, one grounded breath, one small boundary, one deliberate choice at a time."
      },
      {
        title: "IV. Regulated Reflection Prompt",
        duration: 8,
        content: "Optional, silent only. Take a quiet moment. Notice how the nervous system can remain loyal to its history while beginning to receive new evidence of safety through simple, repeatable practices. No sharing required."
      },
      {
        title: "V. Closing Grounding & Transition",
        duration: 8,
        content: "Exact same closing script as all locked sessions: wiggle toes, stretch, press palms, feel skin boundary. You are leaving as [your name]. You are safe. You are present. You are here."
      },
      {
        title: "VI. Pilot Feedback Card",
        duration: 2,
        content: "Continue the existing 8 questions + one new low-burden question: On a scale of 1-10, how supported did the practices feel today?"
      }
    ],
    handout: [
      "Survival Template Layers - Layer 8: Rebuilding Safety & New Practices",
      "Expand Session 00 tools into daily life (gravity press, 3-2-1 scan, voo breath)",
      "Small, tolerable boundary experiments (challenging fawn/competence)",
      "Choose presence and peace over old chaos or numbing",
      "Accumulating new safety data reduces allostatic load and opens ventral vagal regulation",
      "Loyalty message: The nervous system remains loyal to its history - these practices simply give it new, consistent evidence that safer responses are now possible."
    ],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [
      {
        setting: "NA/AA or Rehab",
        note: "This is how the wiring that started before the first drink or drug begins to get new, daily evidence of safety through simple practices anyone can try."
      },
      {
        setting: "Jail / Corrections",
        note: "This is the same nervous-system updating that can happen even under structure - choosing small regulation and boundary steps instead of the old survival patterns."
      },
      {
        setting: "VA / Military",
        note: "This is the nervous-system rebuilding many service members recognize - moving from high-alert wiring to repeatable practices that let the body learn safety again."
      }
    ]
  },
  {
    id: "session-07",
    sessionNumber: 7,
    title: "Turning Toward the Body",
    subtitle: "Reclaiming Regulation and the First Steps of New Wiring",
    duration: 75,
    goal: "Show the moment the loyal survival template begins to shift - when the nervous system, after reaching its breaking point, starts receiving new evidence of safety and experiments with updated regulation.",
    heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663490036747/MeHgb4NZrdFby9hhugrRXs/session-01-hero-6MPVBfBEokjjx592Rxk4k9.webp",
    sections: [
      {
        title: "I. Opening Grounding - Re-anchor",
        duration: 5,
        content: "Use the exact 3-2-1 Scan + Gravity Check + Voo / Straw Breath from Session 00. End with: You are here. You are in control of this space. Plan B is always available."
      },
      {
        title: "II. Quick Frame & Plan B Reminder",
        duration: 4,
        content: "We remain in psychoeducation mode. We study one documented life so we can see the machinery without flooding our own nervous systems. Mechanism over narrative. Right to pass. Yellow Light or Red Light - use it."
      },
      {
        title: "III. Core Teaching: Turning Toward the Body",
        duration: 35,
        content: "By now we have watched the survival template stack from the Glass Box through childhood, the trauma bond, and weaponized intimacy until it reached its breaking point. Today we reach the moment the loyal nervous system begins to turn toward the body and receive new evidence. After the crack, Daniel sat with the awareness that the old strategies - fawn, over-function, numb, perform - could no longer carry him. The nervous system had been loyal for decades. It had kept him alive in the incubator, under the blanket, in the marriage, and through the losses. But those same strategies were now exhausting him. The first steps of new wiring were not dramatic. There was no single cinematic rescue. They were small, specific, and repeated. He began using the exact grounding tools we practiced in Session 00 - pressing his feet into the floor, the gravity check, the voo breath - when the old panic rose. He started making the agonizing choice to accept boring, full peace instead of the familiar chaos of the trauma bond. In his darkest moments, he held the names of his four children - Maverick, Shayla, Tegan, Adalie - in his mind and decided, one more minute, not to disappear. These were not fixing the nervous system. They were giving it new data. The nervous system had spent a lifetime learning: proximity equals danger, pain must be hidden, usefulness equals safety. Now it began receiving repeated, tolerable experiences of: I can feel my feet on the floor and still be safe. I can allow a small release of energy without being punished. I can choose presence instead of performance. This is the biology of neuroplasticity in action. When the nervous system gets consistent new evidence of safety - even in tiny doses - it starts updating its predictions. Allostatic load begins to ease. Glimpses of ventral vagal regulation (the rest-and-connect state) become possible. The old dorsal vagal shutdown and sympathetic hyper-arousal lose their monopoly. The nervous system did not suddenly become fixed. It remained loyal - and it began incorporating new evidence that the old blueprint was no longer the only option. This is the turning point: the loyal nervous system receiving its first consistent experiences of safety and regulation, one small decision at a time."
      },
      {
        title: "IV. Regulated Reflection Prompt",
        duration: 8,
        content: "Optional, silent only. Take a quiet moment. Notice how the nervous system remained loyal while beginning to receive new evidence of safety. No sharing required."
      },
      {
        title: "V. Closing Grounding & Transition",
        duration: 8,
        content: "Exact same closing script as all locked sessions: wiggle toes, stretch, press palms, feel skin boundary. You are leaving as [your name]. You are safe. You are present. You are here."
      },
      {
        title: "VI. Pilot Feedback Card",
        duration: 2,
        content: "Continue the existing 7 questions + one new low-burden question: On a scale of 1-10, how possible did trying a new response feel today?"
      }
    ],
    handout: [
      "Survival Template Layers - Layer 7: Turning Toward the Body & New Wiring Begins",
      "Awareness that old strategies have reached their limit",
      "Small, repeated experiments with regulation (grounding tools, choosing peace over chaos)",
      "Nervous system receives new data of safety",
      "Biology of change: neuroplasticity, reduced allostatic load, ventral vagal glimpses",
      "Loyalty message: The nervous system stayed loyal - and it is capable of updating when given new, consistent evidence of safety."
    ],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [
      {
        setting: "NA/AA or Rehab",
        note: "This is the turning point where the wiring that started before the first drink or drug begins to get new data - small, consistent safety experiences that let the nervous system update."
      },
      {
        setting: "Jail / Corrections",
        note: "This is the same nervous-system shift that can happen when someone starts choosing different responses even under pressure or structure."
      },
      {
        setting: "VA / Military",
        note: "This is the nervous-system turning point many service members recognize - when the old combat wiring starts getting new evidence that it is safe to come off high alert."
      }
    ]
  },
  {
    id: "session-09",
    sessionNumber: 9,
    title: "Living the New Wiring",
    subtitle: "Applying Regulation and Boundaries in Real Life",
    duration: 80,
    goal: "Show how the nervous system moves from early new-wiring practices into real-life application - using regulation tools and small boundary experiments in daily situations to accumulate more safety data and gently challenge the old template.",
    heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663490036747/MeHgb4NZrdFby9hhugrRXs/session-01-hero-6MPVBfBEokjjx592Rxk4k9.webp",
    sections: [
      {
        title: "I. Opening Grounding - Re-anchor",
        duration: 5,
        content: "Use the exact 3-2-1 Scan + Gravity Check + Voo / Straw Breath from Session 00. End with: You are here. You are in control of this space. Plan B is always available."
      },
      {
        title: "II. Quick Frame & Plan B Reminder",
        duration: 4,
        content: "We remain in psychoeducation mode. We study one documented life so we can see the machinery without flooding our own nervous systems. Mechanism over narrative. Right to pass. Yellow Light or Red Light - use it."
      },
      {
        title: "III. Core Teaching: Living the New Wiring",
        duration: 50,
        content: "By now we have watched the loyal survival template stack from the Glass Box through childhood, trauma bonds, weaponized intimacy, and the breaking point. We saw the first turning toward the body in Session 07 and the beginning of new practices in Session 08. Today we watch how those new practices start to move into real daily life. After the crack, Daniel did not suddenly become a different person. He began applying the regulation tools and small boundaries in ordinary moments - one day at a time. He used the gravity press and voo breath at work when the old urge to over-function and please everyone rose. He practiced the 3-2-1 scan in the car before walking into situations that used to trigger fawn or shutdown. These were not big heroic moments. They were small, repeatable choices that gave his nervous system new data: I can feel my body in the present moment and still be safe. I do not have to perform perfectly to earn the right to exist. He also began experimenting with tiny boundaries. Instead of automatically saying yes to every request that triggered the old competence trap, he practiced saying not right now or I need a minute. Each time he did this without collapse or abandonment, the nervous system received accumulating evidence that the old rule usefulness equals safety was no longer the only option. In his relationships with his children, he started showing up as a regulated father instead of the exhausted, over-functioning one. He held their names - Maverick, Shayla, Tegan, Adalie - in his mind not just to survive the dark moments, but to anchor himself in the present. The nervous system learned, little by little, that presence and peace were possible without the old chaos or numbing. These real-life applications were biology in action. Repeated safe experiences strengthened new neural pathways. Allostatic load slowly decreased. The old dorsal vagal shutdown and sympathetic over-drive lost some of their automatic grip. Glimpses of ventral vagal regulation - calm, flexible presence - became more accessible. The nervous system remained loyal to its entire history. It had kept Daniel alive through the incubator, the war-zone home, the trauma bond, and the breaking point. These new practices did not erase that loyalty. They simply gave the nervous system new, consistent evidence that safer, more regulated responses were now possible in an adult world. This is how new wiring is lived: not in perfect transformation, but in small, daily choices that deliver new safety data to a loyal nervous system."
      },
      {
        title: "IV. Regulated Reflection Prompt",
        duration: 8,
        content: "Optional, silent only. Take a quiet moment. Notice how the nervous system can stay loyal to its history while beginning to live new, regulated responses in daily life. No sharing required."
      },
      {
        title: "V. Closing Grounding & Transition",
        duration: 8,
        content: "Exact same closing script as all locked sessions: wiggle toes, stretch, press palms, feel skin boundary. You are leaving as [your name]. You are safe. You are present. You are here."
      },
      {
        title: "VI. Pilot Feedback Card",
        duration: 2,
        content: "Continue the existing 9 questions + one new low-burden question: On a scale of 1-10, how supported did the practices feel today?"
      }
    ],
    handout: [
      "Survival Template Layers - Layer 9: Living the New Wiring",
      "Apply Session 00 tools in real daily moments (work, car, relationships)",
      "Small, tolerable boundary experiments (not right now, I need a minute)",
      "Choose regulated presence over old fawn/performance/chaos",
      "Accumulating new safety data strengthens new neural pathways",
      "Loyalty message: The nervous system remains loyal to its history - these real-life practices simply give it new, consistent evidence that safer responses are now possible."
    ],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [
      {
        setting: "NA/AA or Rehab",
        note: "This is how the wiring that started before the first drink or drug begins to show up differently in everyday life - using regulation and small boundaries instead of the old patterns."
      },
      {
        setting: "Jail / Corrections",
        note: "This is the same nervous-system updating that can happen even under structure - choosing regulation and boundaries in daily moments instead of defaulting to old survival responses."
      },
      {
        setting: "VA / Military",
        note: "This is the nervous-system shift many service members recognize - moving from high-alert wiring to practical regulation and boundaries that work in real life after service."
      }
    ]
  },
  {
    id: "session-10",
    sessionNumber: 10,
    title: "Sustaining the New Wiring",
    subtitle: "Navigating Triggers and Maintaining Regulation",
    duration: 80,
    goal: "Show how the nervous system moves from early new-wiring practices into long-term maintenance - learning to navigate real-life triggers while sustaining regulation, boundaries, and the updated template.",
    heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663490036747/MeHgb4NZrdFby9hhugrRXs/session-01-hero-6MPVBfBEokjjx592Rxk4k9.webp",
    sections: [
      {
        title: "I. Opening Grounding - Re-anchor",
        duration: 5,
        content: "Use the exact 3-2-1 Scan + Gravity Check + Voo / Straw Breath from Session 00. End with: You are here. You are in control of this space. Plan B is always available."
      },
      {
        title: "II. Quick Frame & Plan B Reminder",
        duration: 4,
        content: "We remain in psychoeducation mode. We study one documented life so we can see the machinery without flooding our own nervous systems. Mechanism over narrative. Right to pass. Yellow Light or Red Light - use it."
      },
      {
        title: "III. Core Teaching: Sustaining the New Wiring",
        duration: 50,
        content: "By now we have watched the loyal survival template stack from the Glass Box through childhood, trauma bonds, weaponized intimacy, the breaking point, the first turning toward the body, the beginning of new practices, and living those practices in daily life. Today we watch how that new wiring is sustained when real-life triggers still show up. After the crack and the first small changes, Daniel discovered that the old blueprint did not disappear overnight. Triggers still came - a tone of voice that sounded like the war-zone house, a request that pulled on the old fawn response, a moment of stress that made the competence trap feel safer than the new peace. The nervous system was still loyal. It had kept him alive for decades. When a trigger hit, the old patterns tried to fire automatically: freeze, fawn, over-function, numb, or dissociate. But now Daniel had new tools and new evidence. He used the gravity press and voo breath the moment he felt the old pull. He did the 3-2-1 scan in the middle of a difficult conversation. He practiced small boundaries even when the old fear of abandonment rose. Each time he did this, he was giving his nervous system repeated, consistent data: I can feel the trigger and still choose a different response. The world does not end. He also learned to notice the early warning signs his body had always given him - the tight chest, the racing thoughts, the urge to perform or disappear - and to treat them as information instead of commands. He began to respond to those signals with the tools from Session 00 instead of automatically obeying the old survival template. In his relationships with his children, he practiced showing up regulated even when old guilt or shame tried to pull him back into over-functioning. He held their names in his mind not just to survive the dark moments, but to anchor himself in the present and show up as the father he wanted to be. These were not perfect days. There were still slips. There were still moments when the old wiring won for a minute or an hour. But each time he returned to the new practices, the nervous system received more evidence that the updated template was safer and more sustainable in an adult world. This is how sustaining the new wiring happens: not by never being triggered again, but by learning to meet the triggers with the new tools and the new evidence. The loyal nervous system does not erase its history - it simply adds new, consistent data that allows it to respond differently over time. Neuroplasticity works through repetition. Every time Daniel chose the gravity press instead of the old fawn, every time he set a small boundary instead of over-functioning, every time he stayed present instead of dissociating, he was strengthening the new pathways and gently weakening the automatic grip of the old ones. The nervous system remained loyal to everything it had learned in the Glass Box and the war-zone home. These new practices simply gave it accumulating evidence that a different way was now possible - and safer - in daily life."
      },
      {
        title: "IV. Regulated Reflection Prompt",
        duration: 8,
        content: "Optional, silent only. Take a quiet moment. Notice how the nervous system can stay loyal to its history while learning to meet triggers with new, regulated responses. No sharing required."
      },
      {
        title: "V. Closing Grounding & Transition",
        duration: 8,
        content: "Exact same closing script as all locked sessions: wiggle toes, stretch, press palms, feel skin boundary. You are leaving as [your name]. You are safe. You are present. You are here."
      },
      {
        title: "VI. Pilot Feedback Card",
        duration: 2,
        content: "Continue the existing 10 questions + one new low-burden question: On a scale of 1-10, how manageable did triggers feel with the new practices today?"
      }
    ],
    handout: [
      "Survival Template Layers - Layer 10: Sustaining the New Wiring",
      "Triggers still arise - old patterns try to fire",
      "Meet triggers with Session 00 tools and small boundaries",
      "Notice early warning signs and respond with new choices",
      "Repetition strengthens new neural pathways",
      "Loyalty message: The nervous system remains loyal to its history - these real-life practices give it consistent new evidence that safer responses are now possible and sustainable."
    ],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [
      {
        setting: "NA/AA or Rehab",
        note: "This is how the wiring that started before the first drink or drug is sustained in real life - using regulation and boundaries when old triggers still show up."
      },
      {
        setting: "Jail / Corrections",
        note: "This is the same nervous-system maintenance that can happen even under structure - sustaining new responses when old survival patterns get triggered."
      },
      {
        setting: "VA / Military",
        note: "This is the nervous-system maintenance many service members recognize - sustaining regulation and boundaries when everyday triggers or old high-alert wiring reactivates."
      }
    ]
  }
];
