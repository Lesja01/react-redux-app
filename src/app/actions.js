/*
 * Action creators
 * */

//categories actions
export const addItem = (id, category="x", text, about='#', temp=false) => ({
    type: 'ADD_ITEM',
    id: id,
    category: category,
    name: text,
    about: about,
    temp:temp
})
export const choiceCategory = (choiseGoodTipe) => ({
	type: 'CAT_CHOICE',
    choiseGoodTipe:choiseGoodTipe
});

// * actions
