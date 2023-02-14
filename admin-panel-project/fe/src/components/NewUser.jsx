import { Container } from "@mui/system";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NewUser() {
  const URL = "http://localhost:8080/register";

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.age.value);
    const data = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      email: e.target.email.value,
      age: e.target.age.value,
      phonenumber: e.target.phonenumber.value,
      gender: e.target.gender.value,
      password: e.target.password.value,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    if (FETCHED_JSON.status === "success") {
      navigate("/user");
    }
  };

  return (
    <Container maxWidth="lg" sx={{ margin: "0 auto", paddingBottom: 5 }}>
      <Typography variant="h3" sx={{ marginBottom: 2 }}>
        ADD USER
      </Typography>
      <Box maxWidth="md" sx={{ margin: "0 auto" }}>
        <form onSubmit={handleSubmit}>
          <FormControl
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
            fullWidth={true}
          >
            <TextField
              type={"text"}
              label={"First name"}
              variant={"outlined"}
              fullWidth={true}
              name="firstname"
            />
            <TextField
              type={"text"}
              label={"Last name"}
              variant={"outlined"}
              fullWidth={true}
              name="lastname"
            />
            <TextField
              type={"email"}
              label={"Email"}
              variant={"outlined"}
              fullWidth={true}
              name="email"
            />
            <TextField
              type={"number"}
              label={"Age"}
              variant={"outlined"}
              fullWidth={true}
              name="age"
            />
            <TextField
              type={"tel"}
              label={"Phone number"}
              variant={"outlined"}
              fullWidth={true}
              name="phonenumber"
            />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
              name="gender"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <TextField
              type={"text"}
              label={"Role"}
              variant={"outlined"}
              fullWidth={true}
              name="role"
            />
            {/* <TextField
              type={"file"}
              label={"Upload image"}
              variant={"outlined"}
              fullWidth={true}
            /> */}

            <TextField
              type={"password"}
              label={"Password"}
              variant={"outlined"}
              fullWidth={true}
              name="password"
            />
          </FormControl>

          <Button
            variant={"outlined"}
            type={"submit"}
            style={{ marginTop: 10 }}
            color={"primary"}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}
