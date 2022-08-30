
const initialState = [
    { name: 'Kouyate',
        lastName: 'Karim'
    },
    { name: 'Fode',
    lastName: 'Doumbia'
    },

    { name: 'Affali',
    lastName: 'Stephane'
    }
]

export function userReducer(state = initialState, action) {

    switch(action.type) {
        case "ADD-USER":{
            return [...state, action.payload];
        }

        default: {
            return state;
        }
    }
   
}