Axios = require('axios')

async function listAllChar(req, res){
    try{
    const {page, limit, name} = req.query;
    const allChars = await Axios.get(`https://rickandmortyapi.com/api/character`);
    const pageStart = page * limit;
    const pageEnd = (parseInt(page) + 1) * limit;    
    let resultsFiltereds = allChars.data.results;

    if(name){
         resultsFiltereds = allChars.data.results.filter((char) => {
            return char.name.toLowerCase().includes(name)
        })
    }

    const results = resultsFiltereds.slice(pageStart, pageEnd)
    const checkTotalPages = results.length/limit

    const resultsComplete = {
        info:{
            count:resultsFiltereds.length,
            totalPages: Math.ceil(resultsFiltereds.length/limit)
        },
        results: results
    }
    return res.status(200).json(resultsComplete);
    }catch(err){
        return res.status(500).json({
            error:"failed"
        })
    }
}

module.exports = {
    listAllChar
}