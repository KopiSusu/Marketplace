const featuredData = [
  {
    "id" : 1,
    "type" : "videoCard",
    "title" : "Pilot Light TV: Anisha",
    "description": "Meet Anisha Samant, a former computer programmer grows fresh ingredients in her ...",
    "posterURL": "https://i.ytimg.com/vi_webp/ETqFn3wubl0/sddefault.webp",
    "videoURL": "https://s3.amazonaws.com/homemade-images/Pilot%20Light%20Tv%20Episode%20%233-%20Anisha%20Samant.mp4"
  },
  {
    "id" : 2,
    "type" : "audioCard",
    "title" : "Mike’s Hot Honey: A Hobby to 100,000 Units",
    "description": "We spent some time with Michael Kurtz in Union Square park recently. This man and his team are...",
    "audioURL": "https://s3.amazonaws.com/homemade-images/Mike%E2%80%99s%20Hot%20Honey%20-%20A%20Hobby%20to%20100%2C000%20Units_270720713_soundcloud.mp3"
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
    "search": true,
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
    "search": true,
    "requestType": "User",
    "queries": [
      "13hsxOcVzT",
      "B99QUaTbtE",
      "KYfTo0IOZw"
    ]
  },
  {
    "nestedKey" : "Content",
    "type" : "contentList",
    "title": "FEATURED CONTENT",
    "class" : "featured",
    "title" : "FEATURED CONTENT",
    "requestType": "User Meal",
    "noNavigation": true,
    "useData": "hardData",
    "hardData": featuredData
  }
]

// shipping cost = $6.95 nyc
                //  $10.00 florida
                //  $13.00 cali
// Social media
// Instagram --> build tool for this?
// Site built on shopify <-- good customer support. Havnt Tried squarespace <-- wants dedicated website for drinks (currently seperate) 
// <-- build a wrapper instagram.


