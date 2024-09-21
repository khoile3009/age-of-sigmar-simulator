import { Card } from "@mui/material";
import Markdown from "react-markdown";

type Ability = {
    phase: string;
    side: string;
    phaseText: string;
    text: string;
};

const PHASE_BACKGROUND_COLOR = new Map<string, string>([
    ["turnStart", "black"],
    ["hero", "#cf9802"],
    ["movement", "gray"],
    ["shooting", "green"],
    ["charge", "orange"],
    ["combat", "red"],
    ["turnEnd", "purple"],
]);

export function AbilityCard({ ability }: { ability: Ability }) {
    const { phase, phaseText, text } = ability;
    const backgroundColor = PHASE_BACKGROUND_COLOR.get(phase);
    return (
        <Card>
            <div
                style={{
                    backgroundColor: backgroundColor,
                    padding: "5px",
                    color: "white",
                }}
            >
                <b>{phaseText}</b>
            </div>
            <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                <Markdown>{text}</Markdown>
            </div>
        </Card>
    );
}
