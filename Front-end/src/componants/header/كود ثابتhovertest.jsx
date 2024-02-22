import ExpandMore from "@mui/icons-material/ExpandMore";
import { Box, List, ListItem, ListItemButton, Paper } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const Hovertest = () => {

return (

<Box

className="border"

sx={{

":hover .show-when-hover": {display: "block",},

position: "relative", display: "flex", alignItems: "center" }}
> 
<Typography variant="body1">Home</Typography>

<ExpandMore sx={{ fontSize: "16px", ml: 1 }} />

<Paper
className="show-when-hover border"
sx={{
position: "absolute",
top: "100%",
minWidth: "170px",

display: "none",
}}
>
<nav aria-label="secondary mailbox folders">
<List>
<ListItem disablePadding>
<ListItemButton>
<ListItemText primary="Trash" />
</ListItemButton>
</ListItem>
<ListItem disablePadding>
<ListItemButton component="a" href="#simple-list">
<ListItemText primary="Spam" />
</ListItemButton>
</ListItem>
</List>
</nav>
</Paper>

</Box>


);

};

export default  Hovertest;