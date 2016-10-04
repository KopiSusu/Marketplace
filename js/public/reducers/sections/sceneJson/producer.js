export default [  
  {
    "nestedKey" : "hero",
    "type" : "contentOnly Hero Image",
    "useData": "producers"
  },
  {
    "nestedKey" : "producers",
    "type" : "profileList",
    "title" : "Profile",
    "class" : "singleProfile",
    "requestType": "User",
    "noNavigation": true,
    "queries": [
    
    ]
  },
  {
    "nestedKey" : "products",
    "type" : "cardList",
    "title" : "menu",
    "class" : "menu",
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





