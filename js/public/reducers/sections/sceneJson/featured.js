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

// export default [
//   // {
//   //   "nestedKey" : "topText",
//   //   "type" : "contentOnly",
//   //   "text" : "A curated marketplace of the absolute best small batch foods",
//   //   "style": {
//   //     "fontSize": "22px",
//   //     "lineHeight": "1.5"
//   //   },
//   //   "contentStyle": {
//   //     "color": "#fff",
//   //     "backgroundColor": "#FFC13C",
//   //     "paddingLeft": "3px",
//   //     "paddingRight": "3px"
//   //   }
//   // },
//   // {
//   //   "nestedKey" : "email",
//   //   "type" : "contentOnly capture email"
//   // },
//   {
//     "nestedKey" : "navigation",
//     "pages" : ["featured", "products", "producers"],
//     "type" : "contentOnly navigation"
//   },
//   {
//     "nestedKey" : "featured",
//     "type" : "contentList",
//     "class" : "featured",
//     "title" : "Featured",
//     "requestType": "User Meal",
//     "useData": "hardData",
//     "hardData": featuredData
//   }
// ]

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
    "pages" : ["featured", "products", "producers"],
    "initalSelected": "featured",
    "type" : "contentOnly navigation"
  },
  {
    "nestedKey" : "Hero",
    "type" : "contentOnly Hero Image Text",
    "title": "Project X",
    "body": "Discover independent food makers, their stories, and their products.",
    "imageURL": "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb"
  },
  {
    "nestedKey" : "email",
    "type" : "contentOnly capture email"
  },
  {
    "nestedKey" : "Meals",
    "type" : "cardList",
    "title" : "TASTE",
    "subTitle": "See what's on tap in our shop.",
    "class" : "menu",
    "noNavigation": true,
    "requestType": "Meal",
    "queries": [
      "fD9Mw9j0fs",
      "XTHjE1ASp3",
      "iSnHmJbAX0",
      "2fQuUG1oIc",
      "cZ7kjz8bTL",
      "ZatqsF6WK0"
    ]
  },
  {
    "nestedKey" : "Cooks",
    "type" : "profileList ImageOnly",
    "title" : "SHAKING & BAKING",
    "subTitle": "These are the people making waves right now.",
    "class" : "producers",
    "noNavigation": true,
    "requestType": "User",
    "queries": [
      "13hsxOcVzT",
      "B99QUaTbtE",
      "KYfTo0IOZw"
    ]
  }
]




