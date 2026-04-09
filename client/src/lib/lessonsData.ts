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
    goal: "Establish the framework of trauma-informed education.",
    heroImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80",
    sections: [{
      title: "The Framework",
      duration: 60,
      content: "This is not a support group. This is a trauma education series. We move from 'What is wrong with you?' to 'How did your system learn to survive?' The door remains unlocked. You have permission to leave, to breathe, and to regulate."
    }],
    handout: ["The Window of Tolerance", "The Three Pillars of Safety"],
    settings: ["Public Health", "VA"],
    facilitatorAdaptations: [{ setting: "General", note: "Focus on physiological adaptation." }]
  },
  {
    id: "session-01",
    sessionNumber: 1,
    title: "The Load-Bearing Belief",
    subtitle: "I Am The Problem",
    duration: 60,
    goal: "Identify the primary maladaptive belief.",
    heroImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80",
    sections: [{
      title: "The Logic of the System",
      duration: 60,
      content: "To survive an unreliable world, a child's brain performs a trade: 'The world is fine—I am the problem.' This maintains the illusion of control. If I am the problem, I can fix myself to be safe."
    }],
    handout: ["Identifying the Inner Critic", "Logic Loop Worksheet"],
    settings: ["Clinical", "Peer Support"],
    facilitatorAdaptations: [{ setting: "General", note: "Watch for high activation." }]
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
        note: "Connect to combat stress spirals and decompensation."
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
    title: "Decoding the Damage, Rewriting the Truth",
    subtitle: "The Science and Story of Reclaiming Your Life",
    duration: 90,
    goal: "Hand every survivor the blueprint of their own nervous system and the tools to rewrite their truth.",
    heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663490036747/MeHgb4NZrdFby9hhugrRXs/session-01-hero-6MPVBfBEokjjx592Rxk4k9.webp",
    sections: [
      {
        title: "Welcome, Architects of Your Own Mind",
        duration: 5,
        content: "Welcome back, students. We have walked through fire together—Daniel’s incubator isolation, the war zone of his childhood home, the masks of fawning and perfectionism, the trauma bonds that felt like love, the gaslighting that stole his reality, the relapses that were screams for silence, the grief after Garrett’s death, and the long climb toward self-attunement.\n\nToday we step out of the story and into the machinery behind it. We decode the damage—not to pathologize Daniel, but to hand every survivor the blueprint of their own nervous system. Understanding how trauma rewired your brain is the first real act of taking the pen back and rewriting your truth.\n\nThis is a full 60–90 minute deep-dive lecture. We will move slowly and deliberately. There will be pauses for your body to process, time for science to land in your bones, and space for you to begin your own rewiring in real time.\n\nYou are not here to be fixed. You are here to become the conscious architect of your own mind."
      },
      {
        title: "Part 1: The Brain Rewired – Trauma’s Invisible Blueprint",
        duration: 18,
        content: "Trauma does not live only in memories. It lives in tissue. It physically reshapes three key brain regions that once kept Daniel alive and still quietly run much of his operating system.\n\n**The Amygdala – Your Overactive Smoke Detector**\nIn a safe environment, the amygdala acts as a precise alarm. After prolonged trauma—incubator isolation, screams, broken bones, police visits, constant threat—it becomes hypersensitive. A slammed door, a certain tone of voice, a neutral text message can trigger a full flood of cortisol and adrenaline before the thinking brain even engages.\n\nThis is not “overreacting.” This is a nervous system that learned early: safety is conditional and threat is everywhere. Chronic stress enlarges and sensitizes the amygdala while weakening its connection to the prefrontal cortex, turning neutral stimuli into perceived danger.\n\n**The Hippocampus – The Fragmented Librarian**\nThe hippocampus tags memories with time, place, and context so you can distinguish “then” from “now.” High cortisol from chronic trauma shrinks it and impairs its function. Daniel could forget everyday details but remember the exact shade of rage in his father’s eyes with terrifying clarity. This fragmentation fuels emotional flashbacks that feel vividly present.\n\n**The Prefrontal Cortex (PFC) – The Silenced CEO**\nThe PFC handles impulse control, emotional regulation, long-term planning, and rational decision-making. Trauma dials it down. When the amygdala screams, the PFC struggles to say, “This is not the same threat.” That disconnection explains why Daniel reached for meth—not primarily for euphoria, but for a temporary off-switch when emotional chaos became unbearable.\n\n**[Grounding Pause – 60–90 seconds]**\nGently press your fingertips together and notice the precise sensation of contact. Inhale slowly through the nose for 4 counts, hold for 2, exhale for 6. As you breathe out, imagine releasing one layer of mental static. This simple practice activates the parasympathetic nervous system and gently signals safety to your amygdala.\n\n**The Revolutionary Good News: Neuroplasticity**\nYour brain is not stone. It is living clay. Neuroplasticity—the brain’s lifelong ability to form new neural connections—means what trauma wired, deliberate repeated practice can rewire. Every new response, every moment of naming a feeling instead of numbing it, every boundary, every journal entry strengthens the hippocampus and reconnects the PFC to the amygdala. Recovery is intentional neuro-engineering."
      },
      {
        title: "Part 2: Decoding Daniel – From Survival Scripts to Strategic Living",
        duration: 15,
        content: "**Emotional Flashbacks**\nA coworker’s casual comment triggers full-body shame and panic. The amygdala has hijacked the PFC. The body believes the threat is current. These are not mood swings—they are time travelers from the past.\n\n**Addiction as Regulation, Not Moral Failure**\nMeth was a desperate attempt to silence a brain stuck in terror. The overwhelmed PFC could not regulate the storm, so the nervous system reached for the fastest available tool. Relapse was often the old survival script running when newer strategies were not yet strong enough.\n\n**Fawn Fatigue and Self-Betrayal**\nDaniel’s people-pleasing and over-giving were survival adaptations. Saying “no” once felt like inviting danger, so “yes” became the default—even at the cost of his own needs. Naming this pattern out loud is where neuroplasticity begins."
      },
      {
        title: "Part 3: Rewiring Tools – Your Brain’s Daily Update Button",
        duration: 18,
        content: "You cannot positive-think your way out of trauma. You must build new neural highways through consistent, embodied practice.\n\n**Journaling as Hippocampal Integration**\nWriting connects fragmented memories with language and meaning. Daniel wrote unsent “rage letters” to those who had rewritten his reality, then burned them. Each act moved him from “this happened to me” to “this is what I now make of it.”\n\n**Storytelling as Narrative Reconstruction**\nTrauma lives as chaos in the body. Storytelling creates coherence. Renaming experiences—“I am broken” becomes “I adapted brilliantly to survive”; “divorce was failure” becomes “divorce was my first act of reclaiming autonomy”—literally forges new pathways. Language is neuroplasticity in action.\n\n**[Embodied Practice – 2 minutes]**\nWrite one sentence: “The story I inherited was ________. The story I am writing now is ________.” Speak it aloud if you can. Feel the shift in your body."
      },
      {
        title: "Part 4: Relapse & Failure – Survival Scripts, Not Life Sentences",
        duration: 10,
        content: "Old script: “I relapsed because I’m weak and broken.”\nNew truth: “My nervous system reached for an old survival tool when it was overwhelmed. Now I’m upgrading the toolkit.”\n\nFailure is data, not defect. Every setback shows which pathways still dominate and where new scaffolding is needed. Daniel’s therapist said: “You’re not failing. You’re adapting. Let’s upgrade your strategy.”"
      },
      {
        title: "Professor’s Challenge & Practical Integration",
        duration: 20,
        content: "**Audit the Inherited Stories**\n- Were you called “too sensitive” when your amygdala was on high alert for real danger?\n- Labeled “unstable” when your hippocampus couldn’t separate past from present?\n- Punished for “impulsivity” or “laziness” when your PFC was exhausted by hypervigilance?\n\nThese were never character flaws. They were misreadings of a brain doing its best to survive.\n\n**Rewrite Your Script – Guided Exercise (10–12 minutes journaling)**\n1. **Audit the Brain** – Map your current patterns: triggers (amygdala), memory gaps/flashbacks (hippocampus), impulsive/shutdown responses (PFC).\n2. **Edit the Labels** – “Damaged” → “Wired for survival—now rewiring for thriving.” “Too much” → “Deeply feeling and perceptive.” “Weak” → “Still learning new tools.”\n3. **Publish Your Truth** – Write it, speak it, burn it, sing it, share it. Become the conscious author of your story.\n\n**[Extended Journaling Pause – 5–7 minutes]**\nUse the prompts above. Let whatever arises come. Tears are integration, not weakness."
      },
      {
        title: "Discussion Questions",
        duration: 15,
        content: "1. How does understanding the specific neurological impacts of trauma shift your self-compassion and reduce shame?\n2. What creative, embodied practices (movement, art, music, ritual, etc.) have you used or could you use to harness neuroplasticity?\n3. Why does shifting language from deficit-based to strength- or process-based terms create real changes in brain function and emotional experience?"
      }
    ],
    handout: [
      "Amygdala: Brain’s alarm system; becomes hypersensitive in trauma.",
      "Hippocampus: Memory contextualizer; often shrinks under chronic stress.",
      "Prefrontal Cortex (PFC): Executive function and regulation center; often underactive in trauma.",
      "Neuroplasticity: Brain’s ability to form new neural connections throughout life.",
      "Emotional Flashback: Intense reliving of past trauma that feels present.",
      "Narrative Integration: Turning chaotic trauma into a coherent, empowering personal story.",
      "Fawn Response: Appeasement and over-functioning to maintain safety."
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
