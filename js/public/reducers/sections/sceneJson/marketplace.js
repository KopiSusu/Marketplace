const featuredData = [
  {
    "id" : 1,
    "type" : "videoCard",
    "title" : "First Video Content",
    "description": "Videos are a amazing way to market your content, try using one of our fast and furious video things",
    "videoURL": "http://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_480p_h264.mov"
  },
  {
    "id" : 2,
    "type" : "videoCard",
    "title" : "Second Video Content",
    "description": "This is a second Video, just to show you how amazing videos can be!",
    "videoURL": "http://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_480p_h264.mov"
  },
  {
    "id" : 3,
    "type" : "videoCard",
    "title" : "Third Video Content",
    "description": "So many videos that im not sure what to add as description text!",
    "videoURL": "http://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_480p_h264.mov"
  }
]

export default [
  // {
  //   "nestedKey" : "topText",
  //   "type" : "contentOnly",
  //   "text" : "A curated marketplace of the absolute best small batch foods",
  //   "style": {
  //     "fontSize": "22px",
  //     "lineHeight": "1.5"
  //   },
  //   "contentStyle": {
  //     "color": "#fff",
  //     "backgroundColor": "#FFC13C",
  //     "paddingLeft": "3px",
  //     "paddingRight": "3px"
  //   }
  // },
  // {
  //   "nestedKey" : "email",
  //   "type" : "contentOnly capture email"
  // },
  {
    "nestedKey" : "navigation",
    "type" : "contentOnly navigation"
  },
  {
    "nestedKey" : "featured",
    "type" : "contentList",
    "class" : "featured",
    "title" : "Featured",
    "requestType": "User Meal",
    "useData": "hardData",
    "hardData": featuredData
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




