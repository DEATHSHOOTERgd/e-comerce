import { Table, TableCell, TableContainer, TableHead, TableRow, TableBody } from "@mui/material";
import { FC } from "react";

interface CustomTableProps{
    titles:string[],
    cells:CellProperies[],
    data:any[]
}

interface CellProperies{
    source:string;
    isImage?:boolean;
    pipe?:(data:any)=>string;
    Component?:FC<{value:string}>
}

const CustomTable = ({titles, cells, data}:CustomTableProps)=>{
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {titles.map((title, index)=>(<TableCell key={index}>{title}</TableCell>))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((datum, index) => (
                        <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        {cells.map((cell, index)=>(
                            <TableCell key={index} component="th" scope="row">
                                {cell.Component ? <cell.Component value={datum[cell.source]}/>:(cell.pipe ? cell.pipe(datum[cell.source]):datum[cell.source])    
                            }
                            </TableCell>
                        ))
                        }
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CustomTable;