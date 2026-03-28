import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: theme.palette.mode === "dark" ? "#121212" : "#f5f5f5",
        px: 2,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: 120, sm: 200 },
          fontWeight: "bold",
          color: theme.palette.error.main,
          lineHeight: 1,
          letterSpacing: "-5px",
          textShadow:
            "2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff",
          mb: 2,
          transform: "rotate(-5deg)",
          transition: "transform 0.3s ease, text-shadow 0.3s ease",
          "&:hover": {
            transform: "rotate(0deg) scale(1.05)",
            textShadow:
              "4px 4px 10px rgba(0,0,0,0.3), -4px -4px 10px rgba(0,0,0,0.3)",
          },
        }}
      >
        404
      </Typography>

      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          mb: 3,
          color: theme.palette.text.primary,
          letterSpacing: 1,
        }}
      >
        Oops! Page Not Found
      </Typography>

      <Typography
        variant="body1"
        sx={{ color: theme.palette.text.secondary, mb: 4 }}
      >
        The page you are looking for might have been removed <br />
        or is temporarily unavailable.
      </Typography>

      <Button
        variant="contained"
        color="error"
        size="large"
        onClick={() => navigate("/")}
        sx={{
          px: 5,
          py: 1.5,
          fontWeight: "bold",
          borderRadius: 3,
          textTransform: "uppercase",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
          transition: "transform 0.3s ease",
          "&:hover": { transform: "scale(1.05)" },
        }}
      >
        Go Home
      </Button>
    </Box>
  );
};

export default NotFound;
