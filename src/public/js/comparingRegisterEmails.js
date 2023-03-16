

const comparingRegisterEmails = (email, confirmEmail)=>{

    if(email !== confirmEmail){
        return false;
    }

    return true;
}

module.exports = comparingRegisterEmails;