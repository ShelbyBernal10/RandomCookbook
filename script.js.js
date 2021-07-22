const meat = {
    1: 'Honey Lime Chicken',
    2: 'Srirach Lime Chicken',
    3: 'Balsamic Chicken & Mushrooms',
    4: 'Mushroom Chicken',
    5: 'Spinach Artichoke Chicken',
    6: 'Adobe Chicken & Onions',
    7: 'Baked Chicken Parmesan',
    8: 'Honey Mustard Breaded Chicken',
    9: 'BBQ Chicken Drummies',
    10: 'Honey Mustard Breaded Salmon',
    11: 'Ribeye Steak',
    12: 'BBQ Baby Back Ribs',
    13: 'Pork Schnitzel w/ Brats',
    14: 'French Onion Chicken'
}

const handhelds = {
    1: 'Beef Smash Burgers',
    2: 'Turkey Burgers',
    3: 'BBQ Pulled Chicken Sandwiches',
    4: 'Buffalo Chicken Sandwiches',
    5: 'Air Fryer Buffalo Chicken Sandwiches',
    6: 'Chicken Parm Sandwiches',
    7: 'Chicken Philly Cheesesteaks',
    8: 'Turkey Meatball Subs',
    9: 'French Onion Soup Sandwiches',
    10: 'Turkey Sloppy Joe Sandwiches',
    11: 'Cuban Pulled Pork Sandwiches',
    12: 'Brats w/ Sauerkraut',
    13: 'Swineapple Hot Dogs',
    14: 'Baked Tuna Balls',
    15: 'Air Fryer Fish & Chips',
    16: 'Homemade Pizza',
    17: 'Shrimp Po Boys'
}

const mexican = {
    1: 'California Burritos',
    2: 'Chicken Street Tacos',
    3: 'Citrus Slaw Shrimp Tacos',
    4: 'Vampire Tacos w/ Marinated Steak',
    5: 'Bang Bang Shrimp Tacos',
    6: 'Creamy Chili Verde Chicken Enchiladas',
    7: 'Nathans Signature Bomb AF Chicken Quesadillas',
    8: 'Low Carb Chicken Burrito Bowls',
    9: 'Air Fryer Catfish Tacos',
    10: 'Air Fryer Chimichangas',
    11: 'Mexican Salad'
}

const pasta = {
    1: 'Chicken Lasagna Roll Ups',
    2: 'Chicken Cacciatore',
    3: 'Turkey Sausage Cheese Lasagna',
    4: 'Turkey Meatball Stroganoff',
    5: 'Shrimp Pasta w/ Pink Sauce',
    6: 'Tortellini Bake',
    7: 'Eggplant Parmesan w/ Pasta Marinara',
    8: 'Low Carb Spaghetti Squash Pasta',
    9: 'Sloppy Joe Mac n Cheese',
    10: 'Italian Mac n Cheese',
    11: 'Buffalo Chicken Mac n Cheese',
    12: 'Shrimp & Scallop Scampi',
    13: 'Orza Pasta Salad',
    14: 'Baked Ziti',
    15: 'Baked Feta & Cherry Tomato Pasta'
}

const asian = {
    1: 'Pad Thai w/ Chicken & Egg',
    2: 'Kimchi Fried Rice or Udon',
    3: 'Bibimbap w/ Rice or Fideo Noodle',
    4: 'Chicken & Tofu Fried Rice',
    5: 'Honey Garlic Udon Stir Fry',
    6: 'Tomato Dry Ramen w/ Chicken & Egg',
    7: 'Tomato Miso Ramen Soup',
    8: 'Korean BBQ Nachos',
    9: 'Szechuan Wontons w/ Kimchi Fried Rice',
    10: 'Steamed Shumai Dim Sum',
    11: 'Mapo Tofu w/ Pork & Rice',
    12: 'Salmon Poke Bowls',
    13: 'KBBQ Pork Belly & Bulgogi',
    14: 'Chinese Hotpot',
    15: 'Japanese Pork Cutlet w/ Curry'
}

const flavorBlasting = {
    1: 'Chicken Coconut Curry',
    2: 'Chicken Biryani',
    3: 'Chicken Shwarma Skewers w/ Bellpepper & Onion',
    4: 'Chicken Shwarma w/ Rice Pilaf and Nann',
    5: 'Moroccon Chicken w/ Chickpeas',
    6: 'Jambalaya w/ Chicken & Sausage',
    7: 'Beer Can Peri Peri Chicken & Fries',
    8: 'Pineapple Chicken Rice Pilaf'
}

const whitePeople = {
    1: 'Stuffed Bell Peppers w/ Turkey',
    2: 'Chicken Parm Stuffed Bell Pepeprs',
    3: 'Chicken & Dumpling Crock Pot',
    4: 'Crock Pot Beef Stew',
    5: 'Cheesy Mash Stuffed Beef Pie',
    6: 'Chili Cheese Dirty Dogs'
}

const breaky = {
    1: 'Chorizo Sweet Potato Hash',
    2: 'Corned Beef Hash',
    3: 'Breakfast Burritos w/ Pink Sauce',
    4: 'Easy Cheesy Breakfast Casserole',
    5: 'Poor Girls Eggs Benedict',
    6: 'Overnight Oats w/ Berries & Nuts'
}

const veggies = {
    1: 'Baked Asparagus',
    2: 'Roasted Brussel Sprouts',
    3: 'Baked Green Beans',
    4: 'Grilled Zuchini',
    5: 'Brocolli w/ Lemon & Balsamic',
    6: 'Roasted Potates, Red Bellpeppers, & Onions',
    7: 'Roasted Sweet Potato Fries',
    8: 'Creamed Brussel Sprouts',
    9: 'Cheesey Scalloped Potatoes',
    10: 'Nathans Signature Mashed Potaotes',
    11: 'Smashed Potatoes',
    12: 'Lemon Orzo Pasta Side'
}

const meatBtn = document.querySelector('#meat-btn');
const handheldsBtn = document.querySelector('#handhelds-btn');
const mexicanBtn = document.querySelector('#mexican-btn');
const pastaBtn = document.querySelector('#pasta-btn');
const asianBtn = document.querySelector('#asian-btn');
const flavorBlastingBtn = document.querySelector('#flavor-blasting-btn');
const whitePeopleBtn = document.querySelector('#white-people-btn');
const breakyBtn = document.querySelector('#breaky-btn');
const veggieBtn = document.querySelector('#veggie-btn');

const foodPickCont = document.querySelector('.food-pick-cont');


function length(obj) {
    const foodLength = Object.keys(obj).length;
    return foodLength;
}

const meatLength = length(meat);
const handheldsLength = length(handhelds);
const mexicanFoodLength = length(mexican);
const pastaFoodLength = length(pasta);
const asianFoodLength = length(asian);
const flavorBlastingFoodLength = length(flavorBlasting);
const whitePeopleFoodLength = length(whitePeople);
const breakyLength = length(breaky);
const veggiesLength = length(veggies);

function chooseRandFood(objLength, obj) {
    let randNum = Math.floor(Math.random() * objLength);
    let objValues = Object.values(obj);
    let foodPick = document.createElement('h2');
    foodPick.innerHTML = objValues[randNum];
    foodPickCont.append(foodPick);
    foodPick.classList.add('food-pick')
}

meatBtn.addEventListener('click', function () {
    chooseRandFood(meatLength, meat)
})

handheldsBtn.addEventListener('click', function () {
    chooseRandFood(handheldsLength, handhelds)
})

mexicanBtn.addEventListener('click', function () {
    chooseRandFood(mexicanFoodLength, mexican)
})

pastaBtn.addEventListener('click', function () {
    chooseRandFood(pastaFoodLength, pasta)
})

asianBtn.addEventListener('click', function () {
    chooseRandFood(asianFoodLength, asian)
})

flavorBlastingBtn.addEventListener('click', function () {
    chooseRandFood(flavorBlastingFoodLength, flavorBlasting)
})

whitePeopleBtn.addEventListener('click', function () {
    chooseRandFood(whitePeopleFoodLength, whitePeople)
})

veggieBtn.addEventListener('click', function () {
    chooseRandFood(veggiesLength, veggies)
})

breakyBtn.addEventListener('click', function () {
    chooseRandFood(breakyLength, breaky)
})


// resetBtn.addEventListener('click', function (e) {
//     const foodChoices = document.querySelector('.food-pick-cont')
//     foodChoices.remove();
// })


