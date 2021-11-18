import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import VersionCard from "@/components/About/Card";
import Header from "@/components/Shared/Header";
import { APP_NAME, XYTS_REPOSITORY_URL } from "@/utils/constants";

function AboutContent() {
    return (
        <Container>
            <Header
                title="About" />
            <Grid
                container
                spacing={3}
            >
                <Grid
                    item
                >
                    <VersionCard
                        name={APP_NAME}
                        version={__VERSION__}
                        link={XYTS_REPOSITORY_URL}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export default AboutContent;
