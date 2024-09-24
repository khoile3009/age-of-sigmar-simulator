import Grid from "@mui/material/Grid2";
import { AbilityCard } from "@/components/AbilityCard";
import { Ability } from "@/data/schema";

export function AbilityList({ abilities }: { abilities: Ability[] }) {
    return (
        <Grid container spacing={1} style={{ marginTop: "10px" }}>
            {abilities.map((ability) => (
                <Grid size={4}>
                    <AbilityCard ability={ability} />
                </Grid>
            ))}
        </Grid>
    );
}
