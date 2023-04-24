function validateByRegex(pattern,state){
    const regex = new RegExp(pattern);
    return regex.test(state)
}

export {validateByRegex}