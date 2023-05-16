const { check } = require("express-validator");

creditCardFormValidationMiddleware = [
    
    check("number_card")
        .trim().bail()
        .notEmpty().withMessage("O campo não pode ficar vazio").bail(),

    check("card_expiring_date")
        .trim().bail()
        .notEmpty().withMessage("o campo não pode ficar vazio").bail(),

    check("card_holder_name")
        .trim().bail()
        .notEmpty().withMessage("o campo não pode ficar vazio").bail()
        .isString().withMessage("esse campo não aceita números"),

    check("security_code")
        .trim().bail()
        .notEmpty().withMessage("o campo não pode ficar sozinho").bail()
        .isNumeric().withMessage("o campo só aceita números").bail()
        .isLength({min:3, max:3}).withMessage("o campo tem que ter exatamente 3 caracteres")
      
]


module.exports = creditCardFormValidationMiddleware;