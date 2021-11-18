import axios from "axios";

async function getList() {
    try {
        const response = await axios.get("https://yts.mx/api/v2/list_movies.json");
        return response.data;
    } catch (err) {
        console.error(err);
    }
}

export { getList };
