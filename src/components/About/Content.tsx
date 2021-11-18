import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import AboutCard from "@/components/About/Card";
import Header from "@/components/Shared/Header";
import { APP_NAME } from "@/utils/constants";

function AboutContent() {
    return (
        <Container>
            <Header title="About" />
            <Grid
                container
                spacing={3}
            >
                <Grid
                    item
                >
                    <AboutCard
                        name={APP_NAME}
                        version={__VERSION__}
                        link="aaa"
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export default AboutContent;
