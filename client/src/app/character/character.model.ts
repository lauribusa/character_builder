export class CharacterStats {

    name: String;
    class: String;
    level: Number;
    id: Number;
    xp: Number;
    gold: String;
    maxHP: Number;
    curHP: Number;
    maxSP: Number;
    curSP: Number;
    str: Number;
    int: Number;
    con: Number;
    agl: Number;

    equip: {
        rightHand: {
            name: String;
            img: String;
            atk: Number;
            def: Number;
            matk: Number;
            mdef: Number;
            spd: Number;
            hit: Number;
        };
        leftHand: {
            name: String;
            img: String;
            atk: Number;
            def: Number;
            matk: Number;
            mdef: Number;
            spd: Number;
            hit: Number;
        };
        headArmor: {
            name: String;
            img: String;
            atk: Number;
            def: Number;
            matk: Number;
            mdef: Number;
            spd: Number;
            hit: Number;
        };
        bodyArmor: {
            name: String;
            img: String;
            atk: Number;
            def: Number;
            matk: Number;
            mdef: Number;
            spd: Number;
            hit: Number;
        };
        legArmor: {
            name: String;
            img: String;
            atk: Number;
            def: Number;
            matk: Number;
            mdef: Number;
            spd: Number;
            hit: Number;
        };
    };

    skills: [
        [0], {
            name: String;
            desc: String;
        },
        [1], {
            name: String;
            desc: String;
        },
        [2], {
            name: String;
            desc: String;
        },
        [3], {
            name: String;
            desc: String;
        },
        [4], {
            name: String;
            desc: String;
        }
    ];
}
