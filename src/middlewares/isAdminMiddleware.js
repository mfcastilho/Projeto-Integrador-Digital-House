const isAdminMiddleware = (req, res, next)=>{

    const { userLogged } = req.session
    
    if(!userLogged || !userLogged.is_admin){
        return res.redirect("/");
    }

    return next();
}

module.exports = isAdminMiddleware;
