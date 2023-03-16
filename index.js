//Action is an object with type property
//Action creator - object that returns an action

const CAKE_ORDERED = 'CAKE_ORDERED'

function orderCake(){
    return {
        type: CAKE_ORDERED, 
        quantity:1,
    }
}

