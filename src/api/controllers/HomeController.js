const Handlr = api.handler;

module.exports = {
    welcome: async function(req,res){
        return res
        .status(200)
        .json({result: 'ok!', message: 'Welcome to my express service!'})
    },

    test: async function(req,res){
        if (!req.query) {
            return res
            .status(400)
            .send(Handlr.EmptyParameters())
        }

        return res
        .status(200)
        .json({result: 'ok!', message: req.query})
    }
}