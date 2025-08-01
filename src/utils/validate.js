export const validate=(email,pass)=>{

    const isValidPass=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?!.*\s).{8,}$/.test(pass);
    const isValidEmail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    if(!isValidEmail){return "Email is not valid" }
    if(!isValidPass){return "Password is not valid"}

    return null;

}