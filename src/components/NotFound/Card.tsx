import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import { colors } from "@/utils/colors";

function NotFoundCard() {
    return (
        <Card
            sx={{
                position: "absolute",
                textAlign: "center",
                left: "0px",
                top: "0px",
                right: "0px",
                bottom: "0px",
                margin: "auto",
                borderRadius: "10px",
                width: "512px",
                height: "512px",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    textAlign: "center",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <FontAwesomeIcon
                    icon={faExclamationCircle}
                    color={colors.red}
                    size="6x"
                />
                <Typography
                    gutterBottom
                    variant="subtitle1"
                >
                    404 Not Found
                </Typography>
                <Typography
                    gutterBottom
                    variant="body1"
                >
                    Go to Home
                </Typography>
            </Box>
        </Card>
    );
}

export default NotFoundCard;
