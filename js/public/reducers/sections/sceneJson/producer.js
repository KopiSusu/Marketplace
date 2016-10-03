export default [
  {
    "nestedKey" : "topText",
    "type" : "contentOnly",
    "text" : "A curated marketplace of the absolute best small batch foods",
    "style": {
      "fontSize": "22px",
      "lineHeight": "1.5"
    },
    "contentStyle": {
      "color": "#fff",
      "backgroundColor": "#FFC13C",
      "paddingLeft": "3px",
      "paddingRight": "3px"
    }
  },
  {
    "nestedKey" : "producers",
    "type" : "profileList ImageOnly",
    "title" : "PRODUCERS",
    "requestType": "User",
    "queries": [
    
    ]
  },
  {
    "nestedKey" : "products",
    "type" : "cardList",
    "title" : "MENU",
    "search": true,
    "requestType": "User Meal",
    "queries": [

    ]
  },
  {
    "nestedKey" : "map",
    "type" : "contentOnly Map",
    "useData": "Producers"
  }
]





