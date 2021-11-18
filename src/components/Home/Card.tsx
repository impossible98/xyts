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
                // maxWidth: "1.5em",
                // minWidth: "256px",
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
        </Card>
    );
}

export default HomeCard;
