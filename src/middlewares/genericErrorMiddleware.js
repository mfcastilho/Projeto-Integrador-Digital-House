const genericErrorMiddleware = (error, req, res, next)=>{
    res.status(500).render("not-found.ejs", {error:error})
}

module.exports = genericErrorMiddleware;