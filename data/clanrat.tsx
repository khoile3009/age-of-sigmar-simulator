export const CLANRAT_MOCK_DATA = {
    name: "Clanrats",
    wounds: 1,
    move: 5,
    control: 1,
    save: 5,
    baseSize: 25,
    points: 100,
    numberOfModels: 10,
    imageUrl:
        "https://whfb.lexicanum.com/mediawiki/images/thumb/0/09/Skaven_Clanrat_HR.jpg/300px-Skaven_Clanrat_HR.jpg",
    description:
        "Clanrats overcome their foes through sheer numbers rather than through skill at arms. Individually, they are little threat to a seasoned warrior, but when they gather in their verminous swarms, they can pull down even the champions of the enemy.",
    meleeWeapons: [
        {
            name: "Lightning Hammer",
            attack: 3,
            hit: 3,
            wound: 2,
            rend: 1,
            damage: 2,
            abilities: ["Crit(Mortal)"],
        },
        {
            name: "Dracoth's Claws and Fang",
            attack: 3,
            hit: 4,
            wound: 2,
            rend: 2,
            damage: 2,
            abilities: ["Companion"],
        },
    ],
    rangeWeapons: [
        {
            name: "Stormblast",
            range: 10,
            attack: 1,
            hit: 3,
            wound: 3,
            rend: 2,
            damage: "D3",
            abilities: ["Crit(2 Hits)", "Companion"],
        },
    ],
    abilities: [
        {
            phase: "hero",
            side: "any",
            phaseText: "Any Hero Phase",
            text: `***THE BANNER OF THE REFORGED:***
            When the Knight-Vexillor plants their banner, the fortifying energu that emanates from it's hardens flesh and seals sundered armour, empowering the faithful with new resolve.\n\n***Declare:*** Pick D3 friendly ***Stormcast Enternals*** unit to be the targets.\n\n***Effect:*** Add 3 to each target's control score for the rest of the turn. In addition, ***Heal (D3)*** each target.
            `,
        },
        {
            phase: "hero",
            side: "any",
            phaseText: "Any Hero Phase",
            text: `***THE BANNER OF THE REFORGED:***
            When the Knight-Vexillor plants their banner, the fortifying energu that emanates from it's hardens flesh and seals sundered armour, empowering the faithful with new resolve.\n\n***Declare:*** Pick D3 friendly ***Stormcast Enternals*** unit to be the targets.\n\n***Effect:*** Add 3 to each target's control score for the rest of the turn. In addition, ***Heal (D3)*** each target.
            `,
        },
        {
            phase: "hero",
            side: "any",
            phaseText: "Any Hero Phase",
            text: `***THE BANNER OF THE REFORGED:***
            When the Knight-Vexillor plants their banner, the fortifying energu that emanates from it's hardens flesh and seals sundered armour, empowering the faithful with new resolve.\n\n***Declare:*** Pick D3 friendly ***Stormcast Enternals*** unit to be the targets.\n\n***Effect:*** Add 3 to each target's control score for the rest of the turn. In addition, ***Heal (D3)*** each target.
            `,
        },

        {
            phase: "hero",
            side: "any",
            phaseText: "Any Hero Phase",
            text: `***THE BANNER OF THE REFORGED:***
            When the Knight-Vexillor plants their banner, the fortifying energu that emanates from it's hardens flesh and seals sundered armour, empowering the faithful with new resolve.\n\n***Declare:*** Pick D3 friendly ***Stormcast Enternals*** unit to be the targets.\n\n***Effect:*** Add 3 to each target's control score for the rest of the turn. In addition, ***Heal (D3)*** each target.
            `,
        },
        {
            phase: "hero",
            side: "any",
            phaseText: "Any Hero Phase",
            text: `***THE BANNER OF THE REFORGED:***
            When the Knight-Vexillor plants their banner, the fortifying energu that emanates from it's hardens flesh and seals sundered armour, empowering the faithful with new resolve.\n\n***Declare:*** Pick D3 friendly ***Stormcast Enternals*** unit to be the targets.\n\n***Effect:*** Add 3 to each target's control score for the rest of the turn. In addition, ***Heal (D3)*** each target.
            `,
        },
    ],
};
