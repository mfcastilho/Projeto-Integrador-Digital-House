

const comparingRegisterPasswords = (password, confirmPassword)=>{

    if(password !== confirmPassword){
        return false;
    }

    return true;
}

module.exports = comparingRegisterPasswords;