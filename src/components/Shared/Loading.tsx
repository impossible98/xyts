import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "@mui/material/Box";

function Loading() {
    return (
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
                icon={faSpinner}
                size="6x"
            />
        </Box>
    );
}

export default Loading;
