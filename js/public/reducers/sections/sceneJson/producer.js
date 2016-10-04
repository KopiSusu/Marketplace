export default [  
  {
    "nestedKey" : "hero",
    "type" : "contentOnly Hero Image",
    "useData": "producers"
  },
  {
    "nestedKey" : "producers",
    "type" : "profileList",
    "title" : "PRODUCERS",
    "requestType": "User",
    "noNavigation": true,
    "queries": [
    
    ]
  },
  {
    "nestedKey" : "products",
    "type" : "cardList",
    "title" : "MENU",
    "search": true,
    "requestType": "User Meal",
    "noNavigation": true,
    "queries": [

    ]
  },
  {
    "nestedKey" : "map",
    "type" : "contentOnly Map",
    "useData": "producers"
  }
]





