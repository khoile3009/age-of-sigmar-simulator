import { Box, Card, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export function KeywordList({ keywords }: { keywords: string[] }) {
    return (
        <Grid container spacing={1} style={{ marginTop: "10px" }}>
            <Grid size={1.5}>
                <Card style={{ backgroundColor: "black" }}>
                    <Typography
                        align="center"
                        padding="5px"
                        fontWeight={700}
                        color="white"
                    >
                        Keywords
                    </Typography>
                </Card>
            </Grid>
            <Grid size={10.5}>
                <Box flexDirection="row" display="flex" flexWrap="wrap">
                    {keywords.map((keyword) => (
                        <Card
                            style={{
                                margin: "5px",
                                marginTop: 0,
                                padding: "5px",
                            }}
                        >
                            <Typography>{keyword}</Typography>
                        </Card>
                    ))}
                </Box>
            </Grid>
        </Grid>
    );
}
