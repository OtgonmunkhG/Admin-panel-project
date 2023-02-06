import { Box } from "@mui/system";
import NewUser from "../components/NewUser";
import Sidebar from "../components/Sidebar";

export default function CreateNewUser ({URL, setUsers}) {
    return (
        <Box sx={{ display: "flex" }}>
            <Sidebar/>
            <NewUser URL={URL} setUsers={setUsers}/>
        </Box>
    )
}