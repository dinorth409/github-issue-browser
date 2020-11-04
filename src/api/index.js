import axios from 'axios'

const url = 'https://api.github.com/repos/walmartlabs/thorax/issues'

export const fetchIssues = async () => {
    try {
        const { data } = await axios.get(url)
        return data
    } catch (error) {
        console.log(error)
    }
}