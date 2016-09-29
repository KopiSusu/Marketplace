export default [
	{
		"nestedKey" : "topText",
		"type" : "contentOnly",
		"text" : "Bed Stuy Eats is a community of <style>amazing cooks in your neighborhood<style>. Order amazing meals and pick them up right around the corner.",
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
		"nestedKey" : "Navigation",
		"type" : "contentOnly navigation sections"
	},
	{
		"nestedKey" : "Meals",
		"type" : "cardList",
		"title" : "MENU",
		"requestType": "User Meal",
		"queries": [
			"v7G5jxYzOM",
			"8Sp8Rky0qN",
			"f56N56Oyht",
			"WLRGQJ8wSY",
			"4MIWhy53xN",
			"8ZHiQfrQPX",
			"WOXHTevgju",
			"USKnp2Sd02",
			"B2vr7TB3Ju",
			"eAX7GDaOZF",
			"Gto3aQQk09"
		]
	},
	{
		"nestedKey" : "Chefs",
		"type" : "profileList Map ImageOnly Slideover",
		"title" : "Featured Chefs",
		"requestType": "User",
		"callbackTypes": "Review",
		"queries": [
			"v7G5jxYzOM",
			"8Sp8Rky0qN",
			"f56N56Oyht",
			"WLRGQJ8wSY",
			"4MIWhy53xN",
			"8ZHiQfrQPX",
			"WOXHTevgju",
			"USKnp2Sd02",
			"B2vr7TB3Ju",
			"eAX7GDaOZF",
			"Gto3aQQk09"
		]
	},
	{
		"nestedKey" : "Map",
		"type" : "contentOnly Map",
		"useData": "Chefs"
	}
]