export const otpGen = (otpLength=4)=>{
    let digits = '0123456789';
    let otp = '';

    for(let i = 0; i < otpLength; i++){
        otp = otp + Math.floor(Math.random()*digits.length)
    }
    return otp;
}