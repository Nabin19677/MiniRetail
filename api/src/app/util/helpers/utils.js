export const roomIdGen = (length)=>{
    let alphaNum = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = '';
    for (let i = length; i > 0; --i) result += alphaNum[Math.floor(Math.random() * alphaNum.length)];
    return result;
}