module.exports = corps

let axios = require('axios')
let { link } = require('../../esi.json')
async function corps(ID) {
    let returningData;

    if (!ID) {
        console.error(`the function 'corps' requires a alliance ID!`)
        return Error('corps requires a alliance ID')
    }

    await axios.get(`${link}alliances/${ID}/corporations/?datasource=tranquility`)
        .then(response => {
            returningData = Promise.resolve(response.data)
        })
        .catch(function(e) {
            let error = e.response.data.error
            console.error(`From ESI:`,error)
            return Error(error)
        })

    return returningData;
}