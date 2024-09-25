import { Box, Paper, styled, Typography } from "@mui/material";
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
    wards,
    points,
}: {
    preName: string | null | undefined;
    name: string;
    postName: string | null | undefined;
    description: string;
    wounds: number;
    save: number;
    move: number;
    wards: number | undefined | null;
    control: number;
    baseSize: number;
    points: number;
}) {
    const metrics = [
        { name: "Wounds", value: wounds },
        { name: "Move", value: move },
        { name: "Points", value: points },
        { name: "Control", value: control },
        { name: "Save", value: save },
        { name: "Wards", value: wards },
    ];
    return (
        <Card style={{ marginTop: "10px" }}>
            <Grid container spacing={1}>
                <Grid size={8}>
                    <Box>
                        <Typography variant="h4">{name}</Typography>
                        <Typography fontSize={14}>{description}</Typography>
                    </Box>
                </Grid>
                <Grid container spacing={1} size={4}>
                    {metrics.map((metric) =>
                        metric.value ? (
                            <Grid size={4}>
                                <MetricCard
                                    metricName={metric.name}
                                    metricValue={metric.value}
                                />
                            </Grid>
                        ) : null
                    )}
                </Grid>
            </Grid>
        </Card>
    );
}
