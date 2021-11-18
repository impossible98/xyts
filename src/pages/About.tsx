import Container from "@mui/material/Container";
import * as React from "react";

import { getList } from "@/api/mod";

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



    const status = list.status;
    const status_message = list.status_message

    return (
        <Container>
            <h1>About</h1>
            <p>{status}</p>
            <p> {status_message}</p>

            <ul>
                {list.map(i => (
                    <li key={i.id}> {i.title}</li>
                ))}
            </ul>

        </Container>
    );
}

export default About;
