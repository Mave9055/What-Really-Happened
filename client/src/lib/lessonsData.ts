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
    title: "Introduction: What Really Happened",
    subtitle: "Setting the Compass for the Revolution",
    duration: 60,
    goal: "Establish the framework of trauma-informed education and the 'contract' of the room.",
    heroImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80",
    sections: [
      {
        title: "The Framework",
        duration: 60,
        content: "This is not a support group. This is a trauma education series. We are here to look at the clinical mechanisms of CPTSD through a single case study.\n\nWe start with the primary rule: You are not the problem. Your nervous system's response to what happened is the data. We are moving from 'What is wrong with you?' to 'What happened to you?' and finally to 'How did your system learn to survive that?'\n\nThe door remains unlocked. You have permission to leave, to breathe, and to regulate. Your only job is to stay present enough to keep breathing."
      }
    ],
    handout: [
      "The Window of Tolerance",
      "The Three Pillars of Safety",
      "Course Roadmap: Sessions 1-17"
    ],
    settings: ["NA/AA", "Jails", "VA", "Public Health"],
    facilitatorAdaptations: [
      { setting: "General", note: "Focus on the shift from moral failure to physiological adaptation." }
    ]
  },
  {
    id: "session-01",
    sessionNumber: 1,
    title: "The Blueprint of Survival",
    subtitle: "How Early Trauma Shapes the Nervous System",
    duration: 75,
    goal: "Analyze how early adverse experiences shape nervous system development and survival adaptations.",
    heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663490036747/MeHgb4NZrdFby9hhugrRXs/session-01-hero-6MPVBfBEokjjx592Rxk4k9.webp",
    sections: [
      {
        title: "Session Content",
        duration: 75,
        content: "This session traces how early experiences—such as NICU isolation and childhood domestic violence—create the foundational nervous system blueprint. Participants learn that trauma is not just what happens to the body, but what fails to happen for the soul."
      }
    ],
    handout: [
      "Session 1: The Blueprint of Survival",
      "Early Attachment & Nervous System Development",
      "Survival Adaptations & Protective Mechanisms"
    ],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [
      {
        setting: "NA/AA or Rehab",
        note: "Connect early wiring to later substance use as a regulatory strategy."
      },
      {
        setting: "Jail / Corrections",
        note: "Normalize the survival mechanisms that may have led to justice involvement."
      },
      {
        setting: "VA / Military",
        note: "Acknowledge how early wiring intersects with military training and service."
      }
    ]
  },
  {
    id: "session-02",
    sessionNumber: 2,
    title: "The Masks We Wear",
    subtitle: "Fawning, Perfectionism & High-Functioning Survival",
    duration: 75,
    goal: "Identify protective personas and examine how high-functioning survivors use fawning and perfectionism to hide trauma.",
    heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663490036747/MeHgb4NZrdFby9hhugrRXs/session-01-hero-6MPVBfBEokjjx592Rxk4k9.webp",
    sections: [
      {
        title: "Session Content",
        duration: 75,
        content: "This session explores the fawn response and over-functioning as trauma-driven reflexes. Participants learn that society praises 'work ethic' that is often actually a trauma-driven reflex for emotional appeasement."
      }
    ],
    handout: [
      "Session 2: The Masks We Wear",
      "The Fawn Response & Trauma Bonding",
      "High-Functioning Survival & Burnout"
    ],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [
      {
        setting: "NA/AA or Rehab",
        note: "Connect fawning to people-pleasing in recovery groups."
      },
      {
        setting: "Jail / Corrections",
        note: "Explore how institutional compliance masks internal dysregulation."
      },
      {
        setting: "VA / Military",
        note: "Connect to military obedience and service-oriented identity."
      }
    ]
  },
  {
    id: "session-03",
    sessionNumber: 3,
    title: "When Love Hurts",
    subtitle: "Trauma Bonds & Relational Re-enactment",
    duration: 75,
    goal: "Explore how CPTSD disrupts attachment patterns, leading to trauma bonding and relational re-enactment.",
    heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663490036747/MeHgb4NZrdFby9hhugrRXs/session-01-hero-6MPVBfBEokjjx592Rxk4k9.webp",
    sections: [
      {
        title: "Session Content",
        duration: 75,
        content: "This session examines how relationships often mirror childhood chaos because the nervous system responds to danger with closeness. A trauma bond is a chemical addiction to the high of connection and the low of rejection."
      }
    ],
    handout: [
      "Session 3: When Love Hurts",
      "Trauma Bonds & Attachment Disruption",
      "Relational Re-enactment Patterns"
    ],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [
      {
        setting: "NA/AA or Rehab",
        note: "Connect trauma bonding to codependency in recovery."
      },
      {
        setting: "Jail / Corrections",
        note: "Explore institutional relationships and power dynamics."
      },
      {
        setting: "VA / Military",
        note: "Connect to military unit bonding and loyalty."
      }
    ]
  },
  {
    id: "session-04",
    sessionNumber: 4,
    title: "The War on Reality",
    subtitle: "Gaslighting, DARVO & Reality Distortion",
    duration: 75,
    goal: "Focus on gaslighting, reality distortion, and the mechanisms used to invalidate a survivor's testimony.",
    heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663490036747/MeHgb4NZrdFby9hhugrRXs/session-01-hero-6MPVBfBEokjjx592Rxk4k9.webp",
    sections: [
      {
        title: "Session Content",
        duration: 75,
        content: "This session teaches about gaslighting as a human rights violation that erodes identity. Participants learn the mechanisms of reality theft and how to recognize and name these patterns in their own lives."
      }
    ],
    handout: [
      "Session 4: The War on Reality",
      "Gaslighting & Reality Distortion",
      "DARVO & Narrative Theft"
    ],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [
      {
        setting: "NA/AA or Rehab",
        note: "Connect to denial and minimization in addictive systems."
      },
      {
        setting: "Jail / Corrections",
        note: "Explore institutional gaslighting and official narratives."
      },
      {
        setting: "VA / Military",
        note: "Connect to military command structures and institutional narratives."
      }
    ]
  },
  {
    id: "session-05",
    sessionNumber: 5,
    title: "Relapse Isn't a Betrayal",
    subtitle: "Addiction as Nervous System Regulation",
    duration: 75,
    goal: "Reframe addiction and relapse as desperate strategies for nervous system regulation rather than moral failures.",
    heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663490036747/MeHgb4NZrdFby9hhugrRXs/session-01-hero-6MPVBfBEokjjx592Rxk4k9.webp",
    sections: [
      {
        title: "Session Content",
        duration: 75,
        content: "This session teaches that substances are used to gain a moment of quiet from the sirens in the nervous system. Relapse is what happens when pain outlasts hope—not a character flaw, but a symptom of dysregulation."
      }
    ],
    handout: [
      "Session 5: Relapse Isn't a Betrayal",
      "Addiction as Regulation Strategy",
      "Compassionate Relapse Prevention"
    ],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [
      {
        setting: "NA/AA or Rehab",
        note: "Frame relapse as nervous system information, not moral failure."
      },
      {
        setting: "Jail / Corrections",
        note: "Explore substance use as survival mechanism in trauma."
      },
      {
        setting: "VA / Military",
        note: "Connect to self-medication for PTSD and moral injury."
      }
    ]
  },
  {
    id: "session-06",
    sessionNumber: 6,
    title: "What Healing Actually Looks Like",
    subtitle: "Narrative Integration & the Window of Tolerance",
    duration: 75,
    goal: "Develop a realistic, non-linear model of recovery involving narrative integration and self-attunement.",
    heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663490036747/MeHgb4NZrdFby9hhugrRXs/session-01-hero-6MPVBfBEokjjx592Rxk4k9.webp",
    sections: [
      {
        title: "Session Content",
        duration: 75,
        content: "This session teaches that healing began by swapping a bottle for a journal and asking what the body needed. Healing is a slow, messy rewiring and a ritual of choosing not to disappear."
      }
    ],
    handout: [
      "Session 6: What Healing Actually Looks Like",
      "Self-Attunement & Narrative Integration",
      "The Window of Tolerance"
    ],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [
      {
        setting: "NA/AA or Rehab",
        note: "Connect to recovery rituals and self-care practices."
      },
      {
        setting: "Jail / Corrections",
        note: "Explore healing within institutional constraints."
      },
      {
        setting: "VA / Military",
        note: "Connect to post-service identity integration."
      }
    ]
  },
  {
    id: "session-07",
    sessionNumber: 7,
    title: "The Breaking Point",
    subtitle: "Recognizing Crisis & Personal Warning Signs",
    duration: 75,
    goal: "Analyze the specific conditions that lead to nervous system collapse and identify personal warning signs.",
    heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663490036747/MeHgb4NZrdFby9hhugrRXs/session-01-hero-6MPVBfBEokjjx592Rxk4k9.webp",
    sections: [
      {
        title: "Session Content",
        duration: 75,
        content: "This session teaches participants to recognize the body-texture of crisis and identify their personal entry points into dysregulation before they reach the breaking point."
      }
    ],
    handout: [
      "Session 7: The Breaking Point",
      "Warning Signs & Crisis Recognition",
      "Personal Dysregulation Patterns"
    ],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [
      {
        setting: "NA/AA or Rehab",
        note: "Connect to relapse warning signs and recovery milestones."
      },
      {
        setting: "Jail / Corrections",
        note: "Explore crisis within institutional settings."
      },
      {
        setting: "VA / Military",
        note: "Connect to combat stress and operational tempo."
      }
    ]
  },
  {
    id: "session-08",
    sessionNumber: 8,
    title: "Rewriting the Legacy",
    subtitle: "Intergenerational Trauma & the Father Wound",
    duration: 75,
    goal: "Investigate inherited trauma narratives and the specific impact of intergenerational patterns.",
    heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663490036747/MeHgb4NZrdFby9hhugrRXs/session-01-hero-6MPVBfBEokjjx592Rxk4k9.webp",
    sections: [
      {
        title: "Session Content",
        duration: 75,
        content: "This session explores intergenerational healing and the choice to remain present despite being taught to be distrusted. Awareness allows pain to become a guidepost rather than a prison."
      }
    ],
    handout: [
      "Session 8: Rewriting the Legacy",
      "Intergenerational Trauma Patterns",
      "Breaking Cycles & Parental Presence"
    ],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [
      {
        setting: "NA/AA or Rehab",
        note: "Connect to family of origin patterns in addiction."
      },
      {
        setting: "Jail / Corrections",
        note: "Explore family separation and institutional cycles."
      },
      {
        setting: "VA / Military",
        note: "Connect to military family systems and service legacy."
      }
    ]
  },
  {
    id: "session-09",
    sessionNumber: 9,
    title: "Shame vs. Responsibility",
    subtitle: "Identity-Level Shame vs. Behavior-Level Accountability",
    duration: 75,
    goal: "Teach the difference between identity-level shame and behavior-level responsibility.",
    heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663490036747/MeHgb4NZrdFby9hhugrRXs/session-01-hero-6MPVBfBEokjjx592Rxk4k9.webp",
    sections: [
      {
        title: "Session Content",
        duration: 75,
        content: "This session provides language for accountability that does not lead to self-destruction. Participants learn to distinguish between 'I did something bad' (responsibility) and 'I am bad' (shame)."
      }
    ],
    handout: [
      "Session 9: Shame vs. Responsibility",
      "Identity-Level vs. Behavior-Level Accountability",
      "Compassionate Self-Responsibility"
    ],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [
      {
        setting: "NA/AA or Rehab",
        note: "Connect to Step 4 and amends work in recovery."
      },
      {
        setting: "Jail / Corrections",
        note: "Explore accountability within justice contexts."
      },
      {
        setting: "VA / Military",
        note: "Connect to moral injury and combat accountability."
      }
    ]
  },
  {
    id: "session-10",
    sessionNumber: 10,
    title: "Your Brain on Trauma",
    subtitle: "Neurological Mechanics: Amygdala, Prefrontal Cortex & HPA Axis",
    duration: 75,
    goal: "Explain the neurological mechanics of trauma in plain English.",
    heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663490036747/MeHgb4NZrdFby9hhugrRXs/session-01-hero-6MPVBfBEokjjx592Rxk4k9.webp",
    sections: [
      {
        title: "Session Content",
        duration: 75,
        content: "This session teaches amygdala hijack, prefrontal cortex suppression, and HPA axis dysregulation in accessible language. Participants learn the neurobiology of their own survival responses."
      }
    ],
    handout: [
      "Session 10: Your Brain on Trauma",
      "Amygdala, Prefrontal Cortex & HPA Axis",
      "Neurobiology of Survival Responses"
    ],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [
      {
        setting: "NA/AA or Rehab",
        note: "Connect to how substances affect these brain systems."
      },
      {
        setting: "Jail / Corrections",
        note: "Explain institutional stress responses through neurobiology."
      },
      {
        setting: "VA / Military",
        note: "Connect to combat neurobiology and hypervigilance."
      }
    ]
  },
  {
    id: "session-11",
    sessionNumber: 11,
    title: "The Anatomy of a Spiral",
    subtitle: "Sequential Stages of Trauma Spirals & Entry Points",
    duration: 75,
    goal: "Map the sequential stages of a trauma spiral so survivors can identify their personal entry points.",
    heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663490036747/MeHgb4NZrdFby9hhugrRXs/session-01-hero-6MPVBfBEokjjx592Rxk4k9.webp",
    sections: [
      {
        title: "Session Content",
        duration: 75,
        content: "This session teaches participants to recognize the stages of dysregulation before they bottom out. Understanding the anatomy of a spiral allows for early intervention and self-protection."
      }
    ],
    handout: [
      "Session 11: The Anatomy of a Spiral",
      "Stages of Dysregulation",
      "Personal Entry Points & Early Intervention"
    ],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [
      {
        setting: "NA/AA or Rehab",
        note: "Connect to relapse spirals and recovery milestones."
      },
      {
        setting: "Jail / Corrections",
        note: "Explore institutional spirals and crisis points."
      },
      {
        setting: "VA / Military",
        note: "Connect to combat stress spirals and decompensation."
      }
    ]
  },
  {
    id: "session-12",
    sessionNumber: 12,
    title: "Crisis, Suicide Risk, and Staying Alive",
    subtitle: "Safety Protocols & Mechanisms of Protection",
    duration: 70,
    goal: "Name the specific nervous-system mechanisms behind suicidal crisis and teach how to interrupt these patterns.",
    heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663490036747/MeHgb4NZrdFby9hhugrRXs/session-01-hero-6MPVBfBEokjjx592Rxk4k9.webp",
    sections: [
      {
        title: "Session Content",
        duration: 70,
        content: "The razor was in a drawer. This is not a person who wants to die; it is a nervous system drowning in diffuse agony choosing locatable pain over diffuse agony. The cut interrupts the alarm long enough for the system to briefly come offline. This session addresses the mechanisms of suicidal crisis, NSSI as regulation, and 'perceived burdensomeness'—the belief that the people you love would be better without you. This is a symptom, not a fact. Participants complete a Personal Safety Reference card to signal safety to the system before the pressure gets unsurvivable."
      }
    ],
    handout: [
      "Session 12: Crisis, Suicide Risk, and Staying Alive",
      "NSSI as Regulatory Strategy",
      "Personal Safety Reference Card",
      "Crisis Resources: 988 Lifeline, Crisis Text Line"
    ],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [
      { setting: "NA/AA or Rehab", note: "This is how the wiring that started before the first drink or drug can still produce crisis and self-harm." },
      { setting: "Jail / Corrections", note: "This is the nervous-system reality that can show up under extreme pressure." },
      { setting: "VA / Military", note: "This is the nervous-system stacking that can lead to crisis after repeated threat or moral injury." }
    ]
  },
  {
    id: "session-13",
    sessionNumber: 13,
    title: "The Lessons Nobody Taught Us",
    subtitle: "Developmental Skills Interrupted by Trauma",
    duration: 75,
    goal: "Identify trauma literacy gaps and developmental skills interrupted by early trauma.",
    heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663490036747/MeHgb4NZrdFby9hhugrRXs/session-01-hero-6MPVBfBEokjjx592Rxk4k9.webp",
    sections: [
      {
        title: "Session Content",
        duration: 75,
        content: "This session teaches the developmental skills like emotional regulation and boundary-setting that were interrupted by early trauma. Participants learn these are learnable skills, not character defects."
      }
    ],
    handout: [
      "Session 13: The Lessons Nobody Taught Us",
      "Developmental Skills & Trauma Interruption",
      "Emotional Regulation & Boundary-Setting"
    ],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [
      {
        setting: "NA/AA or Rehab",
        note: "Connect to recovery skills and relational healing."
      },
      {
        setting: "Jail / Corrections",
        note: "Explore institutional skill-building and rehabilitation."
      },
      {
        setting: "VA / Military",
        note: "Connect to post-service civilian skill development."
      }
    ]
  },
  {
    id: "session-14",
    sessionNumber: 14,
    title: "Speaking Truth to Power",
    subtitle: "Naming Harm & Advocacy Language",
    duration: 75,
    goal: "Practice naming harm accurately to institutional structures and develop advocacy language.",
    heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663490036747/MeHgb4NZrdFby9hhugrRXs/session-01-hero-6MPVBfBEokjjx592Rxk4k9.webp",
    sections: [
      {
        title: "Session Content",
        duration: 75,
        content: "This session teaches participants to name harm accurately without self-destruction. Participants develop language for advocacy that centers their own survival and healing."
      }
    ],
    handout: [
      "Session 14: Speaking Truth to Power",
      "Naming Harm & Institutional Accountability",
      "Advocacy Language & Self-Protection"
    ],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [
      {
        setting: "NA/AA or Rehab",
        note: "Connect to speaking up in group settings and recovery communities."
      },
      {
        setting: "Jail / Corrections",
        note: "Explore naming harm within institutional power structures."
      },
      {
        setting: "VA / Military",
        note: "Connect to military accountability and chain of command."
      }
    ]
  },
  {
    id: "session-15",
    sessionNumber: 15,
    title: "The Crucial Question",
    subtitle: "Meaning-Making & the Stigma Industrial Complex",
    duration: 75,
    goal: "Engage with meaning-making and construct a livable account of one's survival.",
    heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663490036747/MeHgb4NZrdFby9hhugrRXs/session-01-hero-6MPVBfBEokjjx592Rxk4k9.webp",
    sections: [
      {
        title: "Session Content",
        duration: 75,
        content: "This session focuses on meaning-making and how to construct a livable account of one's survival. Participants explore the Stigma Industrial Complex and how to resist narratives that diminish their humanity."
      }
    ],
    handout: [
      "Session 15: The Crucial Question",
      "Meaning-Making & Narrative Construction",
      "Resisting the Stigma Industrial Complex"
    ],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [
      {
        setting: "NA/AA or Rehab",
        note: "Connect to recovery narratives and identity reconstruction."
      },
      {
        setting: "Jail / Corrections",
        note: "Explore identity beyond institutional labels."
      },
      {
        setting: "VA / Military",
        note: "Connect to post-service identity and meaning-making."
      }
    ]
  },
  {
    id: "session-16",
    sessionNumber: 16,
    title: "The Revolution Must Be Trauma-Informed",
    subtitle: "Systemic Design & Institutional Change",
    duration: 75,
    goal: "Analyze how legal and institutional systems misread trauma symptoms and provide a call to action.",
    heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663490036747/MeHgb4NZrdFby9hhugrRXs/session-01-hero-6MPVBfBEokjjx592Rxk4k9.webp",
    sections: [
      {
        title: "Session Content",
        duration: 75,
        content: "This final session analyzes how legal and institutional systems (the legal echo chamber) misread trauma symptoms. Participants learn how to advocate for trauma-informed systemic design and become agents of change."
      }
    ],
    handout: [
      "Session 16: The Revolution Must Be Trauma-Informed",
      "Institutional Misreading of Trauma",
      "Trauma-Informed Systemic Design",
      "Call to Action for Systemic Change"
    ],
    settings: ["NA/AA rooms", "Jails", "Residential rehabs", "VA peer groups"],
    facilitatorAdaptations: [
      {
        setting: "NA/AA or Rehab",
        note: "Connect to trauma-informed recovery communities and systemic change."
      },
      {
        setting: "Jail / Corrections",
        note: "Explore trauma-informed corrections and institutional reform."
      },
      {
        setting: "VA / Military",
        note: "Connect to trauma-informed military culture and veteran support systems."
      }
    ]
  }
];

