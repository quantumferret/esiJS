module.exports = info

const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

async function info(ID) {
    let returningData;

    if (!ID || typeof ID !== 'number') {
        console.error(`The function 'info' requires a alliance ID!`)
        throw Error('info requires alliance ID')
    }

    await axios.get(`${link}alliances/${ID}/?datasource=${dataSource}`)
        .then(response => {
            returningData = Promise.resolve(response.data)
        })
        .catch(function(e) {
            let error = e.response.data.error
            console.error(`From ESI:`,error)
            throw Error(error)
        })
    return returningData
}