import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Box sx={{ display: 'flex', mr: "auto", alignItems: 'center', gap: 1 }}>
            <Link to="/">
                <img src="openai.png" alt="openai" width={'30px'} height={'30px'} className="image-color" />
            </Link>
            <Typography sx={{ mr: "auto", fontWeight: '800', textShadow: "2px 2px 20px #000" }}>
                <span style={{ fontSize: "30px" }}>CHATRA</span>-GPT
            </Typography>

        </Box>
    );
};

export default Logo;