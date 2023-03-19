
const ErrorController = {
    error500:(req, res, next)=>{
        const errorCode = req.query.code || 500;
        res.status(errorCode).render("error", {
            pageTitle: "Error",
            errorCode: errorCode
        });

    }
}

module.exports = ErrorController;