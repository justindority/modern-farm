console.log("Welcome to the main module")

import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
// import { createCorn } from "./seeds/corn.js"
// import { createPotato } from "./seeds/potato.js"
// import { createSoybean } from "./seeds/soybean.js"
// import { createSunflower } from "./seeds/sunflower.js"
// import { createWheat } from "./seeds/wheat.js"
import { addPlant, usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { catalog } from "./catalog.js"


// const plan = createPlan()
// console.log(plan)


// const asparagus = createAsparagus()
// console.log(asparagus)

const plan = createPlan()
plantSeeds(plan)
const test = usePlants()
const final = harvestPlants(test)
const html = catalog(final)
console.log(html)

const HTMLelement = document.querySelector(".container")
HTMLelement.innerHTML = html



