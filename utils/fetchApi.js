import axios from "axios";
export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'fde059f3b9mshde59f905e0cc250p1427aejsn850ad897fea3'
        },
    });

    return data;
}
