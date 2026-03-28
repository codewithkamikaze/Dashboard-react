import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Alert,
  Button,
  MenuItem,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import Header from "../../components/Header";

const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegExp = /^[0-9]{10,15}$/;

const roles = [
  { value: "Admin", label: "Admin" },
  { value: "Manager", label: "Manager" },
  { value: "User", label: "User" },
];

const Form = () => {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      contactNumber: "",
      address1: "",
      address2: "",
      role: "User",
    },
  });

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  const handleClick = () => setOpen(true);

  const onSubmit = (data) => {
    console.log("Submitted data:", data);
    handleClick();
    reset();
  };

  const watchFields = watch();

  return (
    <Box>
      <Header title="CREATE USER" subTitle="Create a New User Profile" />

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        noValidate
        autoComplete="off"
      >
        {/* First & Last Name */}
        <Stack direction="row" sx={{ gap: 2 }}>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: true, minLength: 3, maxLength: 30 }}
            render={({ field }) => (
              <TextField
                {...field}
                label="First Name"
                variant="filled"
                sx={{ flex: 1 }}
                error={Boolean(errors.firstName)}
                helperText={
                  errors.firstName
                    ? errors.firstName.type === "required"
                      ? "First name is required"
                      : "3-30 characters required"
                    : `${field.value.length}/30`
                }
              />
            )}
          />

          <Controller
            name="lastName"
            control={control}
            rules={{ required: true, minLength: 3, maxLength: 30 }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Last Name"
                variant="filled"
                sx={{ flex: 1 }}
                error={Boolean(errors.lastName)}
                helperText={
                  errors.lastName
                    ? errors.lastName.type === "required"
                      ? "Last name is required"
                      : "3-30 characters required"
                    : `${field.value.length}/30`
                }
              />
            )}
          />
        </Stack>

        {/* Email */}
        <Controller
          name="email"
          control={control}
          rules={{ required: true, pattern: regEmail }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              variant="filled"
              error={Boolean(errors.email)}
              helperText={
                errors.email
                  ? errors.email.type === "required"
                    ? "Email is required"
                    : "Invalid email format"
                  : ""
              }
            />
          )}
        />

        {/* Contact Number */}
        <Controller
          name="contactNumber"
          control={control}
          rules={{ required: true, pattern: phoneRegExp }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Contact Number"
              variant="filled"
              error={Boolean(errors.contactNumber)}
              helperText={
                errors.contactNumber
                  ? errors.contactNumber.type === "required"
                    ? "Contact number is required"
                    : "10-15 digits only"
                  : `${field.value.length}/15`
              }
            />
          )}
        />

        {/* Address */}
        <Controller
          name="address1"
          control={control}
          rules={{ minLength: 3 }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Address 1"
              variant="filled"
              error={Boolean(errors.address1)}
              helperText={
                errors.address1
                  ? "Minimum 3 characters required"
                  : `${field.value.length}`
              }
            />
          )}
        />
        <Controller
          name="address2"
          control={control}
          rules={{ minLength: 3 }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Address 2"
              variant="filled"
              error={Boolean(errors.address2)}
              helperText={
                errors.address2
                  ? "Minimum 3 characters required"
                  : `${field.value.length}`
              }
            />
          )}
        />

        {/* Role */}
        <Controller
          name="role"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              select
              label="Role"
              variant="filled"
              error={Boolean(errors.role)}
              helperText={errors.role ? "Role is required" : ""}
            >
              {roles.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          )}
        />

        {/* Submit */}
        <Box sx={{ textAlign: "right" }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ textTransform: "capitalize" }}
          >
            Create New User
          </Button>

          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Account created successfully
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </Box>
  );
};

export default Form;
