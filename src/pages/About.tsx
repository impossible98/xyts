import { Box } from "@mui/material/box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import * as React from "react";

import { getList } from "@/api/mod";

import HomeCard from "@/components/Home/Card";

interface List {
    status?: string;
    status_message?: string;
}



function About() {
    const [list, setList] = React.useState<List>([]);

    React.useEffect(() => {
        (async () => {
            const res = await getList();

            const list = res.data.movies.map((item) => {
                return item;
            });
            setList(list);
        })();
    }, []);


    return (
        <Container>
            <h1>About</h1>

            <Grid
                container
                spacing={3}>
                <Grid
                    item>
                    {
                        list.map(item => (
                            <HomeCard
                                key={item.id}
                                title={item.title}
                                year={item.year}
                                coverImageLink={item.large_cover_image} />))
                    }

                </Grid>


                {/* <ul>
                {
                    list.map(item => (<li key={item.id}> {item.title}</li>))
                }
            </ul> */}
            </Grid>
        </Container>
    );
}

export default About;
