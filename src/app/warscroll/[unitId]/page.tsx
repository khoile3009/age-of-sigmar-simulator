"use client";
import { Container } from "@mui/material";
import { UnitDetailCard } from "@/components/UnitDetailCard";
import { MelleWeaponTable, RangeWeaponTable } from "@/components/WeaponTable";

import { getWarscrollData } from "@/data/mockApiCall";
import { KeywordList } from "@/components/KeywordList";
import { AbilityList } from "@/components/AbilityList";

export default function Home() {
    const {
        preName,
        name,
        postName,
        wounds,
        save,
        control,
        move,
        wards,
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
                wards={wards}
                preName={preName}
                postName={postName}
                baseSize={baseSize}
                points={points}
            />
            <RangeWeaponTable tableData={rangeWeapons} />
            <MelleWeaponTable tableData={meleeWeapons} />
            <AbilityList abilities={abilities} />
            <KeywordList keywords={keywords} />
        </Container>
    );
}
