import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import UsersProductTable from "../components/UserProductTable";

export default function Product () {
    return (
        <Box sx={{ display: "flex" }}>  
            <Sidebar/>
            <UsersProductTable/>
        </Box>
    )
}