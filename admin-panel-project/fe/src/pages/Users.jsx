import { Box } from "@mui/material";
import UsersTable from "../components/UsersTabel";

export default function Users() {
    return(
        <Box sx={{width: "100%"}} size={{width: 100}}>
            <UsersTable />
        </Box>
    )
}