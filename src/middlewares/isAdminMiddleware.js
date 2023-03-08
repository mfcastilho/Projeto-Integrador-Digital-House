const isAdminMiddleware = (req, res, next)=>{

    const { userLogged } = req.session
    
    if(!userLogged || !userLogged.isAdmin){
        return res.redirect("/");
    }

    return next();
}

module.exports = isAdminMiddleware;
