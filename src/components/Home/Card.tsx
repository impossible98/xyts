import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "@mui/material/Card";
import CardMedia from '@mui/material/CardMedia';
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

interface Props {
    title: string;
    year: string;
    coverImageLink: string;
    // name: string;
    // version: string;
    // link: string;
}

function HomeCard(props: Props) {
    return (
        <Card
            sx={{
                borderRadius: "10px",
                maxWidth: "1.5em",
                minWidth: "256px",
            }}
        >

            <CardMedia
                component="img"
                height="140"
                image={props.coverImageLink}
                alt="green iguana"
            />
            <Typography
                gutterBottom
                variant="subtitle1"
            >
                {props.title} - {props.year}
            </Typography>
            {/* <Typography
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
            </Typography> */}
        </Card>
    );
}

export default HomeCard;
