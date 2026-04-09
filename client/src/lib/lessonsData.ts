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
  facilitatorScript?: string;
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

const heroImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663490036747/MeHgb4NZrdFby9hhugrRXs/session-01-hero-6MPVBfBEokjjx592Rxk4k9.webp";

export const lessonsData: Lesson[] = [
  {
    id: "session-00",
    sessionNumber: 0,
    title: "Introduction: What Really Happened",
    subtitle: "Setting the Compass for the Revolution",
    duration: 60,
    goal: "Establish the framework of trauma-informed education.",
    heroImage,
    sections: [
      {
        title: "Session Content",
        duration: 60,
        content:
          "This is not a support group. This is a trauma education series. We move from 'What is wrong with you?' to 'How did your system learn to survive?' The door remains unlocked. You have permission to leave, to breathe, and to regulate.",
      },
    ],
    handout: ["The Window of Tolerance", "The Three Pillars of Safety"],
    settings: ["Public Health", "VA"],
    facilitatorAdaptations: [{ setting: "General", note: "Focus on physiological adaptation." }],
  },
  {
    id: "session-01",
    sessionNumber: 1,
    title: "The Load-Bearing Belief",
    subtitle: "I Am The Problem",
    duration: 60,
    goal: "Identify the primary maladaptive belief.",
    heroImage,
    sections: [
      {
        title: "Session Content",
        duration: 60,
        content:
          "To survive an unreliable world, a child's brain performs a trade: 'The world is fine—I am the problem.' This maintains the illusion of control. If I am the problem, I can fix myself to be safe.",
      },
    ],
    handout: ["Identifying the Inner Critic", "Logic Loop Worksheet"],
    settings: ["Clinical", "Peer Support"],
    facilitatorAdaptations: [{ setting: "General", note: "Watch for high activation." }],
  },
  {
    id: "session-02",
    sessionNumber: 2,
    title: "The Masks We Wear",
    subtitle: "Fawning, Perfectionism & High-Functioning Survival",
    duration: 75,
    goal: "Identify protective personas and examine how high-functioning survivors use fawning and perfectionism to hide trauma.",
    heroImage,
    sections: [{ title: "Session Content", duration: 75, content: "This session explores the fawn response and over-functioning as trauma-driven reflexes." }],
    handout: ["Session 2: The Masks We Wear"],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [{ setting: "General", note: "Connect patterns to everyday survival behaviors." }],
  },
  {
    id: "session-03",
    sessionNumber: 3,
    title: "When Love Hurts",
    subtitle: "Trauma Bonds & Relational Re-enactment",
    duration: 75,
    goal: "Explore how CPTSD disrupts attachment patterns, leading to trauma bonding and relational re-enactment.",
    heroImage,
    sections: [{ title: "Session Content", duration: 75, content: "This session examines how relationships mirror childhood chaos and teach participants to name trauma-bond cycles." }],
    handout: ["Session 3: When Love Hurts"],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [{ setting: "General", note: "Normalize attachment confusion without pathologizing participants." }],
  },
  {
    id: "session-04",
    sessionNumber: 4,
    title: "The War on Reality",
    subtitle: "Gaslighting, DARVO & Reality Distortion",
    duration: 75,
    goal: "Focus on gaslighting, reality distortion, and mechanisms used to invalidate survivor testimony.",
    heroImage,
    sections: [{ title: "Session Content", duration: 75, content: "This session teaches gaslighting as identity erosion and shows how to name DARVO patterns in real time." }],
    handout: ["Session 4: The War on Reality"],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [{ setting: "General", note: "Emphasize reality-checking and witness language." }],
  },
  {
    id: "session-05",
    sessionNumber: 5,
    title: "Relapse Isn't a Betrayal",
    subtitle: "Addiction as Nervous System Regulation",
    duration: 75,
    goal: "Reframe addiction and relapse as regulation attempts rather than moral failures.",
    heroImage,
    sections: [{ title: "Session Content", duration: 75, content: "This session reframes relapse as dysregulation data and teaches compassionate interruption strategies." }],
    handout: ["Session 5: Relapse Isn't a Betrayal"],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [{ setting: "General", note: "Translate recovery language into nervous-system language." }],
  },
  {
    id: "session-06",
    sessionNumber: 6,
    title: "What Healing Actually Looks Like",
    subtitle: "Narrative Integration & the Window of Tolerance",
    duration: 75,
    goal: "Develop a realistic non-linear model of recovery.",
    heroImage,
    sections: [{ title: "Session Content", duration: 75, content: "This session teaches healing as repeated small choices, body-based regulation, and narrative integration." }],
    handout: ["Session 6: What Healing Actually Looks Like"],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [{ setting: "General", note: "Track progress by stabilization, not perfection." }],
  },
  {
    id: "session-07",
    sessionNumber: 7,
    title: "The Breaking Point",
    subtitle: "Recognizing Crisis & Personal Warning Signs",
    duration: 75,
    goal: "Analyze conditions that lead to nervous system collapse and identify warning signs.",
    heroImage,
    sections: [{ title: "Session Content", duration: 75, content: "This session helps participants identify crisis body cues early and map their personal escalation sequence." }],
    handout: ["Session 7: The Breaking Point"],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [{ setting: "General", note: "Keep focus on patterns and prevention." }],
  },
  {
    id: "session-08",
    sessionNumber: 8,
    title: "Rewriting the Legacy",
    subtitle: "Intergenerational Trauma & the Father Wound",
    duration: 75,
    goal: "Investigate inherited trauma narratives and intergenerational patterning.",
    heroImage,
    sections: [{ title: "Session Content", duration: 75, content: "This session explores inherited scripts and how conscious naming breaks cycle repetition." }],
    handout: ["Session 8: Rewriting the Legacy"],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [{ setting: "General", note: "Support grief and responsibility differentiation." }],
  },
  {
    id: "session-09",
    sessionNumber: 9,
    title: "Shame vs. Responsibility",
    subtitle: "Identity-Level Shame vs. Behavior-Level Accountability",
    duration: 75,
    goal: "Teach the difference between shame identity and behavior accountability.",
    heroImage,
    sections: [{ title: "Session Content", duration: 75, content: "This session provides language for accountability without self-erasure." }],
    handout: ["Session 9: Shame vs. Responsibility"],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [{ setting: "General", note: "Model non-shaming correction language." }],
  },
  {
    id: "session-10",
    sessionNumber: 10,
    title: "Your Brain on Trauma",
    subtitle: "Neurological Mechanics: Amygdala, Prefrontal Cortex & HPA Axis",
    duration: 75,
    goal: "Explain trauma neurobiology in plain language.",
    heroImage,
    sections: [{ title: "Session Content", duration: 75, content: "This session teaches amygdala hijack, prefrontal suppression, and HPA dysregulation as adaptive survival learning." }],
    handout: ["Session 10: Your Brain on Trauma"],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [{ setting: "General", note: "Keep examples concrete and body-based." }],
  },
  {
    id: "session-11",
    sessionNumber: 11,
    title: "The Anatomy of a Spiral",
    subtitle: "Sequential Stages of Trauma Spirals & Entry Points",
    duration: 75,
    goal: "Map the sequence of trauma spirals so interruption points become visible.",
    heroImage,
    sections: [{ title: "Session Content", duration: 75, content: "This session maps spiral stages from trigger to collapse and identifies earliest practical interventions." }],
    handout: ["Session 11: The Anatomy of a Spiral"],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [{ setting: "General", note: "Prioritize pattern recognition over disclosure." }],
  },
  {
    id: "session-12",
    sessionNumber: 12,
    title: "Crisis, Suicide Risk, and Staying Alive",
    subtitle: "Complete Facilitator Script",
    duration: 70,
    goal: "Name suicidal-crisis mechanisms, keep group safety intact, and ensure every participant leaves with a completed safety reference.",
    heroImage,
    facilitatorScript: `WHAT REALLY HAPPENED
Understanding CPTSD Through a Clinical Case Study
SESSION 12 | FACILITATOR SCRIPT

Crisis, Suicide Risk, and Staying Alive

This session goes to the bottom. We're going together, and we're coming back.

Core mechanisms named in this session:
- NSSI as regulation (not moral failure)
- Perceived burdensomeness as symptom (not fact)
- Acquired capability as history-linked risk factor
- Crisis body-texture: wired frayed, perpetually braced

Required clinical actions:
- Complete Personal Safety Reference card before participants leave
- Deliver crisis resources directly: 988 and HOME to 741741
- Close with grounding and explicit permission to use support

Discussion focus:
Recognize mechanisms without requiring personal disclosure.

Closing anchors:
1) The belief that others are better without you is a symptom, not arithmetic.
2) Staying alive is the accumulation of small specific decisions.
`,
    sections: [
      {
        title: "How to Use This Script",
        duration: 3,
        content: `This document is a word-for-word facilitator script for the 70-minute twelfth session of What Really Happened. Deliver it as written until the language is yours.

SCRIPT KEY
Regular text = speak this aloud
[Stage directions] = action, pause, or movement cue — do not read aloud
FACILITATOR NOTE = read before the session, not during
WATCH FOR = warning signs to monitor in the room
DEEP DIVE = optional expansion if time and group readiness allow

The standard journal prompt is replaced in this session by a Personal Safety Reference card. Every participant completes it before leaving.`,
      },
      {
        title: "Pre-Session Facilitator Notes",
        duration: 4,
        content: `This session names suicidal crisis, self-harm, hospitalization, and the experience of wanting to disappear from inside a nervous system in prolonged emergency mode.

You are not a crisis counselor. You are a facilitator. Name mechanisms clearly, hold the room, and connect participants with appropriate support if needed.

Deliver NSSI language without flinching and without coldness. Name it as nervous-system regulation, not moral failure.

Perceived burdensomeness ("they would be better without me") is a symptom, not a fact. If this appears present-tense in the room, connect privately after session close.

WATCH FOR:
- Very still responses during self-harm material.
- Activated, braced posture during burdensomeness material.
- Dark humor deflection during hospitalization material.
- Refusal to complete the Personal Safety Reference card.
- Tearful responses to "peace boring, sign healing."`,
      },
      {
        title: "Part 1: Opening Grounding",
        duration: 5,
        content: `Before we go anywhere in this session — plant yourself here.

Feel your feet on the floor.
Feel the weight of your body in the seat.
Take one breath in through the nose. Slow and full.
Hold it two counts.
Let it go through the mouth.

This session goes to the bottom. We're going together, and we're coming back.
You don't have to white-knuckle anything. You just have to stay present enough to keep breathing.

The door stays unlocked. If something gets loud: feet, three things, one breath.`,
      },
      {
        title: "Part 2: Lecture — Crisis, Suicide Risk, and Staying Alive",
        duration: 25,
        content: `2A. The Razor (8 min)
Pressure. Impulse. Action. Physiological shift. Relief.

Name the mechanism: non-suicidal self-injury (NSSI) as regulation. The goal is not death; the goal is interruption of unbearable diffuse agony via locatable pain.

Name the compounding loop: shame and guilt. "The guilt sharper than the blade."

Introduce perceived burdensomeness as a core mechanism in Interpersonal Theory of Suicide. Repeat: symptom, not fact.

2B. The History (9 min)
First hospitalization in 1999 at age 17. Early exposure to uncle's attempts. Multiple unprocessed losses.

Introduce acquired capability: lowered fear of pain/death through repeated exposure. Risk factor, not character trait.

Name crisis body-texture: "wired frayed, perpetually braced" — often misread as fine, angry, or withdrawn.

2C. What Actually Kept Him Here (8 min)
Not one dramatic intervention. Accumulation of small specific decisions:
Sobriety. Breathwork. Grounding. EMDR. Somatic work. Choosing boring.

"Peace boring, sign healing — not wrong."

Primary protective factor: named love for his children and repeated decisions not to disappear.`,
      },
      {
        title: "Part 3: Group Discussion",
        duration: 20,
        content: `Do not push for personal disclosure. Keep focus on mechanism recognition.

Prompt 1: What does your system reach for when it cannot find relief?
Prompt 2: What does guilt for your pain costing others do to your right-to-exist narrative?
Prompt 3: How does early exposure to another person's crisis live in a body over decades?
Prompt 4: What changes if "absence of crisis" becomes safety instead of emptiness?
Prompt 5: Which gets least honest conversation: ideation, attempt, or self-harm — and why?

If someone discloses active ideation, acknowledge briefly and connect privately after close.`,
      },
      {
        title: "Part 4: Personal Safety Reference",
        duration: 10,
        content: `This replaces the journal prompt and is required before participants leave.

Card fields:
1) When I notice pressure building, the first thing I do is:
2) One person I can contact before it gets worse:
3) One thing that has helped regulate me before:

If I am in crisis:
988 Suicide & Crisis Lifeline — call or text 988
Crisis Text Line — text HOME to 741741

"I do not have to earn the right to use those numbers."`,
      },
      {
        title: "Part 5: Closing Grounding + Safety Resources",
        duration: 10,
        content: `Feet on the floor.
Weight in the chair.
Look at one non-threat object in the room.
One slow breath in and out.

Two close statements:
1) Perceived burdensomeness is a symptom, not arithmetic, not fact.
2) Staying is accumulated small decisions, not one dramatic choice.

Close with permission to use crisis resources without qualification.
Remain available after dismissal; this session carries highest acute-risk probability.`,
      },
      {
        title: "Appendix: Clinical Reference Notes",
        duration: 3,
        content: `Key terms: perceived burdensomeness, thwarted belonging, NSSI, acquired capability, passive ideation, active ideation, nervous system collapse.

Clinical aims of Session 12:
- Remove shame from NSSI by naming regulatory function.
- Reframe burdensomeness and belonging distortions as symptoms.
- Make acquired capability visible as history-linked risk factor.
- Bridge checklist-risk language with real body-texture experience.
- Provide realistic survival model via repeated small decisions.
- Ensure every participant leaves with direct crisis resources and a personal safety reference.`,
      },
    ],
    handout: [
      "Perceived burdensomeness: symptom, not fact.",
      "Thwarted belonging: belief of non-belonging that amplifies risk.",
      "NSSI: self-harm used to regulate overwhelming states.",
      "Acquired capability: reduced fear of pain/death via exposure history.",
      "Passive ideation: wishing to disappear without method/plan.",
      "Active ideation: method/timing/plan present.",
      "Crisis resources: 988 and HOME to 741741.",
    ],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [
      { setting: "NA/AA or Rehab", note: "Frame crisis as nervous-system stacking before substance use, during use, and in early recovery." },
      { setting: "Jail / Corrections", note: "Keep language practical and body-based under high-surveillance conditions." },
      { setting: "VA / Military", note: "Normalize acquired capability and bracing responses after repeated threat and moral injury." },
    ],
  },
  {
    id: "session-13",
    sessionNumber: 13,
    title: "The Lessons Nobody Taught Us",
    subtitle: "Developmental Skills Interrupted by Trauma",
    duration: 75,
    goal: "Identify trauma-literacy gaps and developmental skills interrupted by early trauma.",
    heroImage,
    sections: [{ title: "Session Content", duration: 75, content: "This session teaches foundational relational and regulation skills that trauma often interrupted." }],
    handout: ["Session 13: The Lessons Nobody Taught Us"],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [{ setting: "General", note: "Emphasize skill acquisition over self-blame." }],
  },
  {
    id: "session-14",
    sessionNumber: 14,
    title: "Speaking Truth to Power",
    subtitle: "Naming Harm & Advocacy Language",
    duration: 75,
    goal: "Practice naming harm accurately to institutions and develop advocacy language.",
    heroImage,
    sections: [{ title: "Session Content", duration: 75, content: "This session builds language for naming harm clearly while protecting personal safety and dignity." }],
    handout: ["Session 14: Speaking Truth to Power"],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [{ setting: "General", note: "Pair advocacy with boundaries and regulation planning." }],
  },
  {
    id: "session-15",
    sessionNumber: 15,
    title: "The Crucial Question",
    subtitle: "Meaning-Making & the Stigma Industrial Complex",
    duration: 75,
    goal: "Engage meaning-making and construct a livable account of survival.",
    heroImage,
    sections: [{ title: "Session Content", duration: 75, content: "This session explores stigma systems and helps participants build narratives that preserve dignity and agency." }],
    handout: ["Session 15: The Crucial Question"],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [{ setting: "General", note: "Support agency-focused identity reconstruction." }],
  },
  {
    id: "session-16",
    sessionNumber: 16,
    title: "The Revolution Must Be Trauma-Informed",
    subtitle: "Systemic Design & Institutional Change",
    duration: 75,
    goal: "Analyze institutional misreadings of trauma symptoms and define system-level reforms.",
    heroImage,
    sections: [{ title: "Session Content", duration: 75, content: "Final session on trauma-informed institutional redesign and collective action." }],
    handout: ["Session 16: The Revolution Must Be Trauma-Informed"],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [{ setting: "General", note: "Translate insight into concrete advocacy and design proposals." }],
  },
];
