import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../images/unixube-logo.png"
// import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2}  sx={{ position:  "sticky", background: 'rgb(15, 23, 42)', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" className="h-16" />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
