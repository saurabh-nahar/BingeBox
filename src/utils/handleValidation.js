export const handleValidation = (email, password) => {

    const checkEmail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email);

    const checkPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/.test(password);

    if(!checkEmail){
        return "invalid email address"
    }else if(!checkPassword){
        return "invalid password"
    }else{
        return null
    }

}