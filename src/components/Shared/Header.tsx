import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";

interface Props {
    title: string;
}

function Header(props: Props) {
    return (
        <Box
            sx={{
                margin: "1.5em 0 1.5em 0",
            }}
        >
            <Typography
                component="div"
                gutterBottom
                variant="h3"
            >
                {props.title}
            </Typography>
        </Box>
    );
}

export default React.memo(Header);
