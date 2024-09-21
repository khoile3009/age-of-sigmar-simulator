import { Box, Paper, styled, Typography } from "@mui/material";

const Card = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
        backgroundColor: "#1A2027",
    }),
}));

export function MetricCard({
    metricName,
    metricValue,
}: {
    metricName: string;
    metricValue: any;
}) {
    return (
        <Card>
            <Box alignContent="center" flexDirection="column">
                <Typography fontWeight={700}>{metricName}</Typography>
                <Typography>{metricValue}</Typography>
            </Box>
        </Card>
    );
}
