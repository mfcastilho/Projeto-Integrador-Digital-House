const isLoginMiddleware = (req, res, next)=> {

    if(req.session.userLogged){
        res.locals.userLogged = req.session.userLogged;
    }

    return next();
}

module.exports = isLoginMiddleware;