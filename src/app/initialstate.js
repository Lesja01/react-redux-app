const InitialState = {

    items:
        [
            {
                id              : 1,
                category_belongs: "продукты",
                item_name        :'Консервы',
                item_about       :'3 банки хорощих loremipsum',
                temp            : false
            },
            {
                id              : 2,
                category_belongs: "мебель",
                item_name        :'диван',
                item_about       :'старый большой диван отдам ы',
                temp            : false
            },
            {
                id              : 3,
                category_belongs: "мебель",
                item_name        :'стул',
                item_about       :' большой стул синий',
                temp            : false
            },
            {
                id              : 4,
                category_belongs: "техника",
                item_name        :'элетрочайник',
                item_about       :'поменяю электрочайник с моей доплатой',
                temp            : false
            }
        ],
    categories:
        [
            {
                id: 0,
                category_name: "все товары"
            },
            {
                id: 1,
                category_name: "одежда"
            },
            {
                id: 2,
                category_name: "обувь"
            },
            {
                id: 3,
                category_name: "мебель"
            },
            {
                id: 4,
                category_name: "техника"
            },
            {
                id: 5,
                category_name: "сад, огород"
            },
            {
                id: 6,
                category_name: "детские товары"
            }
        ]
};

export default InitialState;