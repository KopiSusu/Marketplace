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
    "nestedKey" : "navigation",
    "type" : "contentOnly navigation sections"
  },
  {
    "nestedKey" : "featured",
    "type" : "mixed",
    "class" : "featured",
    "title" : "Featured",
    "requestType": "User Meal",
    "useData": "producers",
    "queries": [
      "13hsxOcVzT",
      "JKJDIAMUxe",
      "yFAVY4MPFG",
      "yfjrIk9X7D",
      "4nNagUWxZm",
      "hwtvjancuO",
      "KYfTo0IOZw",
      "CFEmBDNAxC",
      "UhnWAmQPQn",
      "j77vAf9ZKA",
      "XPmaRjITwf",
      "B99QUaTbtE"
    ]
  },
  {
    "nestedKey" : "products",
    "type" : "cardList",
    "class" : "menu",
    "title" : "Menu",
    "search": true,
    "requestType": "User Meal",
    "queries": [
      "13hsxOcVzT",
      "JKJDIAMUxe",
      "yFAVY4MPFG",
      "yfjrIk9X7D",
      "4nNagUWxZm",
      "hwtvjancuO",
      "KYfTo0IOZw",
      "CFEmBDNAxC",
      "UhnWAmQPQn",
      "j77vAf9ZKA",
      "XPmaRjITwf",
      "B99QUaTbtE"
    ]
  },
  {
    "nestedKey" : "producers",
    "type" : "profileList ImageOnly",
    "class" : "producers",
    "title" : "Producers",
    "search": true,
    "requestType": "User",
    "queries": [
      "13hsxOcVzT",
      "JKJDIAMUxe",
      "yFAVY4MPFG",
      "yfjrIk9X7D",
      "4nNagUWxZm",
      "hwtvjancuO",
      "KYfTo0IOZw",
      "CFEmBDNAxC",
      "UhnWAmQPQn",
      "j77vAf9ZKA",
      "XPmaRjITwf",
      "B99QUaTbtE"
    ]
  },
  {
    "nestedKey" : "map",
    "type" : "contentOnly Map",
    "useData": "producers"
  }
]



// const featuredData = [
//   {
//     "type" : "cardList video",
//     "title" : "First Video Content",
//     "search": true,
//     "requestType": "User",
//     "nestedKey" : "Hero",
//     "type" : "contentOnly Hero Video",
//     "videoURL": "http://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_480p_h264.mov"
//   }
// ]

