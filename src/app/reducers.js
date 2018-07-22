import InitialState from './initialstate';

/*
* Reducers
* */


//categories reducer

export const items = (state = InitialState.items, action) => {
    let obj={};

 

    switch(action.type) {
        case 'ADD_ITEM': //click on "добавить"
            return state.concat(
                {
                    id: action.id,
                    category_belogs: action.category,
                    item_name: action.name,
                    item_about: action.about,
                    temp: action.temp
                }
            );
            
        case 'CAT_CHOICE': //click on category
        
            return state.map(function(elem, index) {                
                if (elem.category_belongs==action.choiseGoodTipe||action.choiseGoodTipe=="все товары") {
                    elem.temp=false;
                    return elem
                }                       
                else {
                    elem.temp=true;
                    return elem
                }
               }
             );
        
        default:
        InitialState.items= state;
            return state;
                
    }
    
    
};

//* reducer

export const categories = (state = InitialState.categories) => {
    let obj={};
    
    return state;
    };
