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
            ability: ["Crit(Mortal)"],
        },
        {
            name: "Dracoth's Claws and Fang",
            attack: 3,
            hit: 4,
            wound: 2,
            rend: 2,
            damage: 2,
            ability: ["Companion"],
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
            ability: ["Crit(2 Hits)", "Companion"],
        },
    ],
};
