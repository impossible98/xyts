import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

interface Props {
    name: string;
    version: string;
    link: string;
}

function AboutCard(props: Props) {
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
                    href={props.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    underline="hover"
                >
                    <FontAwesomeIcon
                        icon={faGithub}
                    />
                    Source Code
                </Link>
            </Typography>
        </Card>
    );
}

export default AboutCard;
