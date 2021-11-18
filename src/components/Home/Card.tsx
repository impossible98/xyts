import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface Props {
    title: string;
    year: string;
    coverImageLink: string;
}

function HomeCard(props: Props) {
    return (
        <Card
            sx={{
                borderRadius: "10px",
                maxHeight: "1.5em",
                maxWidth: "1.5em",
                minHeight: "256px",
                minWidth: "256px",
            }}
        >
            <CardMedia
                component="img"
                height="128px"
                image={props.coverImageLink}
                alt="green iguana"
            />
            <Typography
                gutterBottom
                variant="subtitle1"
                sx={{
                    textAlign: "center",
                }}
            >
                {props.title} ({props.year})
            </Typography>
        </Card>
    );
}

export default HomeCard;
