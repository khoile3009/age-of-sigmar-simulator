import { Box, Paper, styled, Typography } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid2";
import { MetricCard } from "./MetricCard";
const Card = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
        backgroundColor: "#1A2027",
    }),
}));

export function UnitDetailCard({
    name,
    description,
    wounds,
    save,
    move,
    control,
}: {
    name: string;
    description: string;
    wounds: number;
    save: number;
    move: number;
    control: number;
}) {
    return (
        <Card>
            <Grid container spacing={2}>
                <Grid container spacing={1} size={4}>
                    <Grid size={6}>
                        <MetricCard metricName="Wounds" metricValue={wounds} />
                    </Grid>
                    <Grid size={6}>
                        <MetricCard
                            metricName="Move"
                            metricValue={`${move}"`}
                        />
                    </Grid>
                    <Grid size={6}>
                        <MetricCard
                            metricName="Control"
                            metricValue={control}
                        />
                    </Grid>
                    <Grid size={6}>
                        <MetricCard
                            metricName="Save"
                            metricValue={`${save}+`}
                        />
                    </Grid>
                </Grid>
                <Grid size={8}>
                    <Box>
                        <Typography variant="h4">{name}</Typography>
                        <Typography>{description}</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Card>
    );
}
