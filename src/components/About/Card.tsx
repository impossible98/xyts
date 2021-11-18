import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

interface Props {
    name: string;
    version: string;
    link: string;
}

function VersionCard(props: Props) {
    return (
        <Card
            sx={{
                borderRadius: "10px",
                padding: "1.5em",
                maxWidth: "1.5em",
                minWidth: "256px",
            }}
        >
            <Typography
                gutterBottom
                variant="subtitle1"
            >
                {props.name}
            </Typography>
            <Typography
                gutterBottom
                variant="body1"
            >
                version: {props.version}
            </Typography>
            <Typography
                gutterBottom
                variant="body1"
            >
                <Link
                    to={props.link}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <FontAwesomeIcon
                        icon={faGithub}
                    />
                    <Typography
                        component="span"
                        gutterBottom
                        variant="body1"
                        sx={{
                            marginLeft: "0.5em",
                        }}
                    >
                        Source Code
                    </Typography>

                </Link>
            </Typography>
        </Card>
    );
}

export default VersionCard;
