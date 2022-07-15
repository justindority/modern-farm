
export const harvestPlants = (plantsArray) => {
    console.log(plantsArray)
    let outputArray = []
    for(const plant of plantsArray){
        let count = 0
        if(plant.type === "Corn"){
            count = 3
            // console.log(output)
        } else {
            count = plant.output
        }
        // console.log(plant, output)
        for(let i = 0; i < count; i++){
            // console.log(plant)
            // console.log(plant, count, i)
            let harvestObject = plant
            outputArray.push(plant)
        }
    }
    return outputArray
}