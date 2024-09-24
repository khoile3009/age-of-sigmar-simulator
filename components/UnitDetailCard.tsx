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
    return (
        <Card>
            <Grid container spacing={1}>
                <Grid size={8}>
                    <Box>
                        <Typography variant="h4">{name}</Typography>
                        <Typography fontSize={14}>{description}</Typography>
                    </Box>
                </Grid>
                <Grid container spacing={1} size={4}>
                    <Grid size={4}>
                        <MetricCard metricName="Wounds" metricValue={wounds} />
                    </Grid>
                    <Grid size={4}>
                        <MetricCard
                            metricName="Move"
                            metricValue={`${move}"`}
                        />
                    </Grid>
                    <Grid size={4}>
                        <MetricCard metricName="Points" metricValue={points} />
                    </Grid>
                    <Grid size={4}>
                        <MetricCard
                            metricName="Control"
                            metricValue={control}
                        />
                    </Grid>
                    <Grid size={4}>
                        <MetricCard
                            metricName="Save"
                            metricValue={`${save}+`}
                        />
                    </Grid>
                    {wards ? (
                        <MetricCard
                            metricName="Wards"
                            metricValue={`${wards}+`}
                        />
                    ) : null}
                </Grid>
            </Grid>
        </Card>
    );
}
