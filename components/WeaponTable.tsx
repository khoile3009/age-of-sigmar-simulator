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
    }>;
}) {
    return (
        <TableContainer component={Paper} style={{ marginTop: "5px" }}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Melee Weapons</StyledTableCell>
                        <StyledTableCell align="center">Atk</StyledTableCell>
                        <StyledTableCell align="right">Hit</StyledTableCell>
                        <StyledTableCell align="right">Wnd</StyledTableCell>
                        <StyledTableCell align="right">Rnd</StyledTableCell>
                        <StyledTableCell align="right">Dmg</StyledTableCell>
                        <StyledTableCell align="right">Ability</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell>{row.name}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
