"use client";
import { useState } from "react";
import { Box, Card, Container, Paper, styled, Typography } from "@mui/material";
import { CLANRAT_MOCK_DATA } from "@/data/clanrat";
import Grid from "@mui/material/Grid2";
import { UnitDetailCard } from "@/components/UnitDetailCard";
import { MelleWeaponTable, RangeWeaponTable } from "@/components/WeaponTable";
import { AbilityCard } from "@/components/AbilityCard";
import { getWarscrollData } from "@/data/mockApiCall";
import { KeywordList } from "@/components/KeywordList";

export default function Home() {
    const {
        preName,
        name,
        postName,
        wounds,
        save,
        control,
        move,
        baseSize,
        points,
        description,
        meleeWeapons,
        rangeWeapons,
        abilities,
        keywords,
    } = getWarscrollData();
    return (
        <Container maxWidth="md">
            <UnitDetailCard
                name={name}
                description={description}
                wounds={wounds}
                save={save}
                control={control}
                move={move}
                preName={preName}
                postName={postName}
                baseSize={baseSize}
                points={points}
            />
            <RangeWeaponTable tableData={rangeWeapons} />
            <MelleWeaponTable tableData={meleeWeapons} />
            <Grid container spacing={1} style={{ marginTop: "10px" }}>
                {abilities.map((ability) => (
                    <Grid size={4}>
                        <AbilityCard ability={ability} />
                    </Grid>
                ))}
            </Grid>
            <KeywordList keywords={keywords} />
        </Container>
    );
}
