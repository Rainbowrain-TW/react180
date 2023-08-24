const answers = [
    [
        {
            "score": "1",
            "text": "Yes."
        },
        {
            "score": "2",
            "text": "No."
        },
        {
            "score": "0",
            "text": "What is a hipster?"
        },
        {
            "score": "3",
            "text": "I don't do labels."
        }
    ],
    [
        {
            "score": "1",
            "text": "Hybrid"
        },
        {
            "score": "0",
            "text": "BART"
        },
        {
            "score": "2",
            "text": "Feet"
        },
        {
            "score": "3",
            "text": "Fixie"
        }
    ],
    [
        {
            "score": "3",
            "text": "I'm holding one right now!"
        },
        {
            "score": "2",
            "text": "I had one a few weeks ago."
        },
        {
            "score": "1",
            "text": "Not since college"
        },
        {
            "score": "0",
            "text": "What the hell is a PBR?"
        }
    ],
    [
        {
            "score": "3",
            "text": "Papalotes."
        },
        {
            "score": "0",
            "text": "Chipotle."
        },
        {
            "score": "2",
            "text": "La Taqueria."
        },
        {
            "score": "1",
            "text": "Taco Bell."
        }
    ],
    [
        {
            "score": "1",
            "text": "I totally dig the ones on the cars!"
        },
        {
            "score": "0",
            "text": "Ew!"
        },
        {
            "score": "2",
            "text": "I have a tattoo of one on my finger."
        },
        {
            "score": "3",
            "text": "Why don’t you bask in the glory of my mustache and tell me how you feel about it?"
        }
    ],
    [
        {
            "score": "1",
            "text": "Home to my Nespresso machine."
        },
        {
            "score": "2",
            "text": "The Creamery in SOMA."
        },
        {
            "score": "0",
            "text": "Starbucks... there are three in eyesight of wherever I am!"
        },
        {
            "score": "3",
            "text": "Four Barrel Coffee in the Mission."
        }
    ],
    [
        {
            "score": "1",
            "text": "Baggier the better."
        },
        {
            "score": "0",
            "text": "Comfortable, tailored fit."
        },
        {
            "score": "2",
            "text": "Skinny and form fitting."
        },
        {
            "score": "3",
            "text": "It is unacceptable to have even one air molecule between my legs and my jeans."
        }
    ],
    [
        {
            "score": "2",
            "text": "I am poor!"
        },
        {
            "score": "3",
            "text": "I am not defined by my parents' bank account."
        },
        {
            "score": "1",
            "text": "I keep my financial status to myself."
        },
        {
            "score": "0",
            "text": "I have no problem flashing my cash."
        }
    ],
    [
        {
            "score": "2",
            "text": "Yes."
        },
        {
            "score": "1",
            "text": "No."
        },
        {
            "score": "3",
            "text": "I went to school but I dropped out to focus more on my craft."
        },
        {
            "score": "0",
            "text": "Who goes to art school?!"
        }
    ],
    [
        {
            "score": "3",
            "text": "Elbo Room."
        },
        {
            "score": "2",
            "text": "Great American Music Hall."
        },
        {
            "score": "0",
            "text": "Mezzanine."
        },
        {
            "score": "1",
            "text": "DNA Lounge."
        }
    ],
    [
        {
            "score": "1",
            "text": "Classically preppy."
        },
        {
            "score": "2",
            "text": "I live in my designer hoodie."
        },
        {
            "score": "3",
            "text": "Underweight lumberjack."
        },
        {
            "score": "0",
            "text": "Lululemon addict."
        }
    ],
    [
        {
            "score": "0",
            "text": "Actually, I don't have a Mac."
        },
        {
            "score": "3",
            "text": "Seat belt buckle, cross-shoulder Chrome bag."
        },
        {
            "score": "1",
            "text": "Briefcase."
        },
        {
            "score": "2",
            "text": "Timbuk2 messenger bag."
        }
    ],
    [
        {
            "score": "3",
            "text": "Flannel would be my uniform, if I believed in uniforms."
        },
        {
            "score": "2",
            "text": "I have a few items I pull out occasionally."
        },
        {
            "score": "0",
            "text": "I have some flannel pyjamas."
        },
        {
            "score": "1",
            "text": "Not since the 90s!"
        }
    ],
    [
        {
            "score": "0",
            "text": "An outdoor area, often made of wood, adjoining a house."
        },
        {
            "score": "2",
            "text": "A presentation about your company often given to potential investors."
        },
        {
            "score": "3",
            "text": "Cool, cutting edge or hip."
        },
        {
            "score": "1",
            "text": "To knock someone out."
        }
    ]
]

const quests = [
    { quest: "1. Are you a hipster?", options: answers[0] },
    { quest: "2. How do you get around?", options: answers[1] },
    { quest: "3. When was your last PBR", options: answers[2] },
    { quest: "4. Best place for a burrito?", options: answers[3] },
    { quest: "5. How do you feel about mustaches?", options: answers[4] },
    { quest: "6. Coffee time! Where are you headed?", options: answers[5] },
    { quest: "7. Tell me about your favorite jean style.", options: answers[6] },
    { quest: "8. Do you pretend to be poor?", options: answers[7] },
    { quest: "9. Did you go to art school?", options: answers[8] },
    { quest: "10. Best spot in town to catch some tunes?", options: answers[9] },
    { quest: "11. How would you describe your style?", options: answers[10] },
    { quest: "12. Nice Mac! How do you carry it around?", options: answers[11] },
    { quest: "13. How often do you wear flannel?", options: answers[12] },
    { quest: "14. The word 'deck' means:", options: answers[13] }
]

export default quests;