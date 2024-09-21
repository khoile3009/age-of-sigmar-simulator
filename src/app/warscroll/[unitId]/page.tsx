"use client";
import { useState } from "react";
import { Container, Paper, styled, Typography } from "@mui/material";
import { CLANRAT_MOCK_DATA } from "@/data/clanrat";
import Grid from "@mui/material/Grid2";
import { MetricCard } from "@/components/MetricCard";
import { UnitDetailCard } from "@/components/UnitDetailCard";
import { MelleWeaponTable } from "@/components/WeaponTable";

export default function Home() {
    const { name, wounds, save, control, move, description, meleeWeapons } =
        CLANRAT_MOCK_DATA;
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
            <MelleWeaponTable tableData={meleeWeapons} />
        </Container>
    );
}
