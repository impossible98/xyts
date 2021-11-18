import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import * as React from "react";

import { getList } from "@/api/mod";

import HomeCard from "@/components/Home/Card";
import Header from "@/components/Shared/Header";

interface List {
    status?: string;
    status_message?: string;
}

function Home() {
    const [list, setList] = React.useState<List>([]);

    React.useEffect(() => {
        (async () => {
            const res = await getList();

            const list = res.data.movies.map((item: any) => {
                return item;
            });
            setList(list);
        })();
    }, []);

    return (
        <Container>
            <Header title="Home"/>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    {list.map(item => (
                        <HomeCard key={item.id} title={item.title} year={item.year} coverImageLink={item.large_cover_image}/>
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
}

export default Home;
