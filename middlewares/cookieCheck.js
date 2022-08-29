module.exports = (req, res, next) => {
    if(req.cookies.cookie){
        
        req.session.color = req.cookies.cookie;
    }
    next()
}