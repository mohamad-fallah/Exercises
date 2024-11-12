"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

function createData(
  size: string,
  thickness: number,
  mode: string,
  unit: string,
  place: string,
  update: string,
  price: string,
  swing: string
) {
  return { size, thickness, mode, unit, place, update, price, swing };
}

const rows = [
  createData(
    "30*20",
    2,
    "6متری",
    "کیلوگرم",
    "کارخانه",
    "1403/8/20",
    "39,410",
    "0%"
  ),
  createData(
    "40*40",
    2,
    "6متری",
    "کیلوگرم",
    "کارخانه",
    "1403/8/20",
    "39,410",
    "0%"
  ),
  createData(
    "50*50",
    2,
    "6متری",
    "کیلوگرم",
    "کارخانه",
    "1403/8/20",
    "39,410",
    "0%"
  ),
  createData(
    "40*40",
    2.5,
    "6متری",
    "کیلوگرم",
    "کارخانه",
    "1403/8/20",
    "39,410",
    "0%"
  ),
  createData(
    "40*40",
    3,
    "6متری",
    "کیلوگرم",
    "کارخانه",
    "1403/8/20",
    "39,410",
    "0%"
  ),
];

export default function CustomizedTables() {
  return (
    <Box p={3} display="flex" justifyContent="center" alignItems="center">
      <Box width="100%" maxWidth="900px">
        <TableContainer
          component={Paper}
          sx={{
            borderRadius: "12px",
            border: "1px solid #ddd",
            backgroundColor: "#f9f4ef",
          }}
        >
          <Table >
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  colSpan={9}
                  sx={{
                    backgroundColor: "#ffffff",
                    color: "#D32F2F",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  لوله گاز خانگی آخرین بروزرسانی : روز های قبل ( 1403/8/20 )
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{
                      color: "#999",
                      fontSize: "14px",
                      marginLeft: 1,
                      marginRight: 60,
                    }}
                  ></Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: "#f1e8dd",
                    color: "#6d4c41",
                    fontWeight: "bold",
                    padding: "6px 8px",
                  }}
                >
                  سایز
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: "#f1e8dd",
                    color: "#6d4c41",
                    fontWeight: "bold",
                    padding: "6px 8px",
                  }}
                >
                  ضخامت
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: "#f1e8dd",
                    color: "#6d4c41",
                    fontWeight: "bold",
                    padding: "6px 8px",
                  }}
                >
                  حالت
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: "#f1e8dd",
                    color: "#6d4c41",
                    fontWeight: "bold",
                    padding: "6px 8px",
                  }}
                >
                  واحد
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: "#f1e8dd",
                    color: "#6d4c41",
                    fontWeight: "bold",
                    padding: "6px 8px",
                  }}
                >
                  محل تحویل
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: "#f1e8dd",
                    color: "#6d4c41",
                    fontWeight: "bold",
                    padding: "6px 8px",
                  }}
                >
                  تاریخ بروزرسانی
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: "#f1e8dd",
                    color: "#6d4c41",
                    fontWeight: "bold",
                    padding: "6px 8px",
                  }}
                >
                  قیمت (تومان)
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: "#f1e8dd",
                    color: "#6d4c41",
                    fontWeight: "bold",
                    padding: "6px 8px",
                  }}
                >
                  نوسانات
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: "#f1e8dd",
                    color: "#6d4c41",
                    fontWeight: "bold",
                    padding: "6px 8px",
                  }}
                >
                  نمودار
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={`${row.size}-${index}`}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#fbf8f6" : "#ffffff",
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    sx={{ fontSize: 14, color: "#333", padding: "6px 8px" }}
                  >
                    {row.size}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: 14, color: "#333", padding: "6px 8px" }}
                  >
                    {row.thickness}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: 14, color: "#333", padding: "6px 8px" }}
                  >
                    {row.mode}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: 14, color: "#333", padding: "6px 8px" }}
                  >
                    {row.unit}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: 14, color: "#333", padding: "6px 8px" }}
                  >
                    {row.place}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: 14, color: "#333", padding: "6px 8px" }}
                  >
                    {row.update}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: 14, color: "#333", padding: "6px 8px" }}
                  >
                    {row.price}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: 14, color: "#333", padding: "6px 8px" }}
                  >
                    {row.swing}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: 14, color: "#333", padding: "6px 8px" }}
                  >
                    <TrendingUpIcon sx={{ color: "#4CAF50" }} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
