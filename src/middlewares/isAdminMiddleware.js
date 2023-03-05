const insAdminMiddleware = (req, res, next)=>{

    if(!req.session.userLogged || !req,session.userLogged.isAdmin){
        res.redirect("/");
    }

    next();
}

