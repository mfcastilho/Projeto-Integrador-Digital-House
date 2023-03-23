const { check } = require("express-validator");

creditCardFormValidationMiddleware = [
    check("number_card")
        .trim().bail()
        .notEmpty().withMessage("O campo não pode ficar vazio")
        .isNumeric({min:16, max:16}).withMessage("o número do cartão tem que ter 16 caracteres"),

    check("card_expiring_date")
        .trim().bail()
        .notEmpty().withMessage("o cammpo não pode ficar vazio")
        .isNumeric().withMessage("o campo só aceita números"),

    check("card_holder_name")
        .trim().bail()
        .notEmpty().withMessage("o campo não pode ficar vazio")
        .isString().withMessage("esse campo não aceita números"),

    check("security_code")
        .trim().bail()
        .notEmpty().withMessage("o campo não pode ficar sozinho")
        .isNumeric({min:3, max:3}).withMessage("o campo só aceita números"),

    check("installments")
        .notEmpty("o campo não pode ficar sem ser selecionado")    
       
]


module.exports = creditCardFormValidationMiddleware;