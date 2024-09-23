import { CLANRAT_MOCK_DATA } from "./clanrat";
import { Warscroll } from "./schema";

export function getWarscrollData(): Warscroll {
    return Warscroll.parse(CLANRAT_MOCK_DATA);
}
