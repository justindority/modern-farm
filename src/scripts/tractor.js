import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

export const plantSeeds = (plans) => {
    // console.log(plans)
    for(const plan of plans){
        for(const planArray of plan){
            if(planArray === 'Asparagus'){
                let asp = createAsparagus()
                addPlant(asp)
            } else if (planArray === 'Corn'){
                let corn = createCorn()
                addPlant(corn)
            } else if (planArray === 'Soybean'){
                let soy = createSoybean()
                addPlant(soy)
            } else if (planArray === 'Potato'){
                let pot = createPotato()
                addPlant(pot)
            } else if (planArray === 'Wheat'){
                let wheat = createWheat()
                addPlant(wheat)
            } else if (planArray === 'Sunflower'){
                let sun = createSunflower()
                addPlant(sun)
            }
        }
    }
}