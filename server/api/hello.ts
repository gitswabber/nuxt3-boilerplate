/*import type { IncomingMessage, ServerResponse } from 'http'

export default async (req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 200
    res.end('Works!')
}*/
import axios from "axios";
import runtimeConfig from "#config";

export default async () => {
    const result = await axios.get(runtimeConfig.api + '/hello')
        .then((response) => {
            console.log()
            console.log(response)
            return response
        })
    console.log(result.data)
    return result.data
}
