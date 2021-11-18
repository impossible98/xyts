import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import { colors } from "@/utils/colors";
import { REPOSITORY_ISSUE_URL } from "@/utils/constants";

interface Props {
    message?: string;
    detail?: string;
}

function ErrorCard(props: Props) {
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
            <Link
                to={REPOSITORY_ISSUE_URL}
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
                    {props.message
                        ? (
                            <Typography
                                gutterBottom
                                variant="subtitle1"
                            >
                                {props.message}
                            </Typography>
                        )
                        : null}
                    {props.detail
                        ? (
                            <Typography
                                gutterBottom
                                variant="body1"
                            >
                                {props.detail}
                            </Typography>
                        )
                        : null}

                    <FontAwesomeIcon
                        icon={faGithub}
                        size="2x"
                    />
                    Issue
                </Box>
            </Link>
        </Card>
    );
}

export default ErrorCard;
