import { z } from "zod";
import { PHASES, SIDES } from "./enums";

export const MeleeWeapon = z.object({
    name: z.string(),
    attack: z.union([z.string(), z.number()]),
    hit: z.number(),
    wound: z.number(),
    rend: z.number(),
    damage: z.number(),
    abilities: z.array(z.string()),
});

export const RangeWeapon = z.object({
    name: z.string(),
    range: z.number(),
    attack: z.union([z.string(), z.number()]),
    hit: z.number(),
    wound: z.number(),
    rend: z.number(),
    damage: z.union([z.string(), z.number()]),
    abilities: z.array(z.string()),
});

export const Ability = z.object({
    phase: z.enum(PHASES),
    side: z.enum(SIDES),
    phaseText: z.string(),
    text: z.string(),
});

export const Warscroll = z.object({
    preName: z.optional(z.string()),
    name: z.string(),
    postName: z.optional(z.string()),
    wounds: z.number(),
    move: z.number(),
    control: z.number(),
    save: z.number(),
    baseSize: z.number(),
    points: z.number(),
    numberOfModels: z.number(),
    description: z.string(),
    meleeWeapons: z.array(MeleeWeapon),
    rangeWeapons: z.array(RangeWeapon),
    abilities: z.array(Ability),
    keywords: z.array(z.string()),
});

// Types
export type Warscroll = z.infer<typeof Warscroll>;
