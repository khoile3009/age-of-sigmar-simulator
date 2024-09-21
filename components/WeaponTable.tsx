import {
    Paper,
    styled,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

export function MelleWeaponTable({
    tableData,
}: {
    tableData: Array<{
        name: string;
        attack: number | string;
        hit: number;
        wound: number;
        rend: number;
        damage: number | string;
        abilities: string[];
    }>;
}) {
    return (
        <TableContainer component={Paper} style={{ marginTop: "10px" }}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Melee Weapons</StyledTableCell>
                        <StyledTableCell align="center">Atk</StyledTableCell>
                        <StyledTableCell align="center">Hit</StyledTableCell>
                        <StyledTableCell align="center">Wnd</StyledTableCell>
                        <StyledTableCell align="center">Rnd</StyledTableCell>
                        <StyledTableCell align="center">Dmg</StyledTableCell>
                        <StyledTableCell align="center">
                            Ability
                        </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {row.attack}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {row.hit}+
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {row.wound}+
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {row.rend}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {row.damage}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {row.abilities.join(", ")}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export function RangeWeaponTable({
    tableData,
}: {
    tableData: Array<{
        name: string;
        range: number;
        attack: number | string;
        hit: number;
        wound: number;
        rend: number;
        damage: number | string;
        abilities: string[];
    }>;
}) {
    return (
        <TableContainer component={Paper} style={{ marginTop: "10px" }}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Ranged Weapons</StyledTableCell>
                        <StyledTableCell align="center">Rng</StyledTableCell>
                        <StyledTableCell align="center">Atk</StyledTableCell>
                        <StyledTableCell align="center">Hit</StyledTableCell>
                        <StyledTableCell align="center">Wnd</StyledTableCell>
                        <StyledTableCell align="center">Rnd</StyledTableCell>
                        <StyledTableCell align="center">Dmg</StyledTableCell>
                        <StyledTableCell align="center">
                            Ability
                        </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {row.range}"
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {row.attack}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {row.hit}+
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {row.wound}+
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {row.rend}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {row.damage}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {row.abilities.join(", ")}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
