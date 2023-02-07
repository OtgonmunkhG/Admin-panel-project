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
import { convertLength } from "@mui/material/styles/cssUtils";
import { useState } from "react";

export default function NewUser({ URL, setUsers }) {
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    fetchAll();
  }, []);
  async function fetchAll() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data.data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("hello");
    console.log(e.target.name.value);
  }
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
            />
            <TextField
              name="name"
              type={"text"}
              label={"Last name"}
              variant={"outlined"}
              fullWidth={true}
            />
            <TextField
              name={"email"}
              type={"email"}
              label={"Email"}
              variant={"outlined"}
              fullWidth={true}
            />
            <TextField
              name="age"
              type={"number"}
              label={"Age"}
              variant={"outlined"}
              fullWidth={true}
            />
            <TextField
              name="phonenumber"
              type={"tel"}
              label={"Phone number"}
              variant={"outlined"}
              fullWidth={true}
            />
            <FormControlLabel
              name="gender"
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <TextField
              name="role"
              type={"text"}
              label={"Role"}
              variant={"outlined"}
              fullWidth={true}
            />
            {/* <TextField
              type={"file"}
              label={"Upload image"}
              variant={"outlined"}
              fullWidth={true}
            /> */}

            <TextField
              name="password"
              type={"password"}
              label={"Password"}
              variant={"outlined"}
              fullWidth={true}
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
