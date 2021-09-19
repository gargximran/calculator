import axios from 'axios'

import { serviceUrl } from "./";

const sumService = (inputData) => (
    new Promise((resolve, reject) => {
        axios.post(`${serviceUrl}/calculate`, inputData)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err?.response?.data)
            })
    })
)

export default sumService