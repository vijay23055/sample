const generateid = (length)=>{
    const chara = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890qwertyuioplkjhgfdsazxcvbnm"

    let str =""

    for(let i=0; i<length; i++)
        str += chara[Math.floor(Math.random()*100)%62]

    return str
}

export {generateid}