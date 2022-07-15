const fieldArray = []

export const addPlant = (seed) => {
    if(Array.isArray(seed) === true){
        for(const corn of seed){
            fieldArray.push(corn)
        }
    } else {
    fieldArray.push(seed)
    }
    // console.log(fieldArray)
}

export const usePlants = () => {
    let fieldCopy = fieldArray.slice(0)
    return fieldCopy
}

