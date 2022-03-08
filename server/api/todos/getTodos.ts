import axios from "axios";
import runtimeConfig from "#config";

export default async () => {
    const result = await axios.get(runtimeConfig.api + '/todos')
        .then((response) => {
            // console.log(response)
            return response
        })
    return result.data
}
