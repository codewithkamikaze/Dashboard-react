import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Header from "../../components/Header";
import { rows } from "./data";

const Team = () => {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 50,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1.5,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "Age",
      width: 80,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => (
        <Box
          sx={{
            p: "5px",
            width: "100px",
            borderRadius: "4px",
            textAlign: "center",
            display: "flex",
            justifyContent: "space-evenly",
            backgroundColor:
              access === "Admin"
                ? theme.palette.primary.dark
                : access === "Manager"
                  ? theme.palette.secondary.dark
                  : theme.palette.success.main,
          }}
        >
          {access === "Admin" && (
            <AdminPanelSettingsOutlined
              sx={{ color: "#fff" }}
              fontSize="small"
            />
          )}
          {access === "Manager" && (
            <SecurityOutlined sx={{ color: "#fff" }} fontSize="small" />
          )}
          {access === "User" && (
            <LockOpenOutlined sx={{ color: "#fff" }} fontSize="small" />
          )}
          <Typography sx={{ fontSize: "13px", color: "#fff" }}>
            {access}
          </Typography>
        </Box>
      ),
    },
  ];

  return (
    <Box>
      <Header title="TEAM" subTitle="Managing the Team Members" />

      <Box sx={{ height: 600, width: "100%", mt: 2 }}>
        <DataGrid
          rows={rows}
          // @ts-ignore
          columns={columns}
          checkboxSelection
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Team;
