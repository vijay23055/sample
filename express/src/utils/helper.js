const findId = (data, id)=>{
    for (let i =0; i<data.length; i++)
        {
            if(data[i].id == id)
            {
                return i
            }
            else
                return -1
        }
}

export { 
    findId 
}