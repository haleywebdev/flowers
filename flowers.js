const flowersArray = [
    {
        id: 1,
        color: "white",
        species: "rose",
        price: 0.90
    },
    {
        id: 2,
        color: "red",
        species: "tulip",
        price: 1.10
    }
]

const addFlower = (flowerObject) => {
    const lastIndex = flowersArray.length - 1
    const currentLastFlower = flowersArray[lastIndex]
    const maxId = currentLastFlower.id
    const idForNewFlower = maxId + 1

    flowerObject.id = idForNewFlower
    flowersArray.push(flowerObject)
}

addFlower(flowersArray)

// console.log(flowersArray)

const findExpensiveFlowers = () => {
    const expensiveFlowers = []
    for (const flowerObj of flowersArray) {
        const affordableFlower = 1
        if (flowerObj.price >= affordableFlower)

            expensiveFlowers.push(flowerObj)
        }

            return expensiveFlowers
    }



module.exports = {
    findExpensiveFlowers, addFlower
}

