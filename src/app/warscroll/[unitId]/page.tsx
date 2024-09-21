"use client";
import { useState } from "react";
import { Container, Paper, styled, Typography } from "@mui/material";
import { CLANRAT_MOCK_DATA } from "@/data/clanrat";
import Grid from "@mui/material/Grid2";
import { MetricCard } from "@/components/MetricCard";
import { UnitDetailCard } from "@/components/UnitDetailCard";
import { MelleWeaponTable, RangeWeaponTable } from "@/components/WeaponTable";
import { AbilityCard } from "@/components/AbilityCard";

export default function Home() {
    const {
        name,
        wounds,
        save,
        control,
        move,
        description,
        meleeWeapons,
        rangeWeapons,
        abilities,
    } = CLANRAT_MOCK_DATA;
    return (
        <Container maxWidth="md">
            <UnitDetailCard
                name={name}
                description={description}
                wounds={wounds}
                save={save}
                control={control}
                move={move}
            />
            <RangeWeaponTable tableData={rangeWeapons} />
            <MelleWeaponTable tableData={meleeWeapons} />
            <Grid container spacing={2} style={{ marginTop: "10px" }}>
                {abilities.map((ability) => (
                    <Grid size={4}>
                        <AbilityCard ability={ability} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
