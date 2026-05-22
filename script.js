



// 1. FOOD DATABASE


const foodDB = {
  // ----- Fruits -----
  "apple":       { cal: 52,  pro: 0.3,  carb: 14,  fat: 0.2,  tip: "Apples are rich in fiber and antioxidants. A great low-calorie snack!" },
  "banana":      { cal: 89,  pro: 1.1,  carb: 23,  fat: 0.3,  tip: "Bananas are an excellent source of potassium, great for post-workout." },
  "mango":       { cal: 60,  pro: 0.8,  carb: 15,  fat: 0.4,  tip: "Mangoes are high in Vitamin C and make a delicious tropical treat." },
  "orange":      { cal: 47,  pro: 0.9,  carb: 12,  fat: 0.1,  tip: "Oranges are packed with Vitamin C, great for immunity." },
  "grapes":      { cal: 69,  pro: 0.7,  carb: 18,  fat: 0.2,  tip: "Grapes contain antioxidants that support heart health." },
  "strawberry":  { cal: 32,  pro: 0.7,  carb: 7.7, fat: 0.3,  tip: "Strawberries are low-calorie and rich in Vitamin C and folate." },
  "watermelon":  { cal: 30,  pro: 0.6,  carb: 7.6, fat: 0.2,  tip: "Watermelon is 92% water — perfect for hydration in summer!" },
  "papaya":      { cal: 43,  pro: 0.5,  carb: 11,  fat: 0.3,  tip: "Papaya contains papain enzyme which aids digestion." },
  "guava":       { cal: 68,  pro: 2.6,  carb: 14,  fat: 1.0,  tip: "Guava is rich in dietary fiber and has more Vitamin C than oranges!" },
  "pineapple":   { cal: 50,  pro: 0.5,  carb: 13,  fat: 0.1,  tip: "Pineapple contains bromelain which helps in digestion and reduces inflammation." },

  // ----- Vegetables -----
  "potato":      { cal: 77,  pro: 2.0,  carb: 17,  fat: 0.1,  tip: "Potatoes are a good source of Vitamin B6 and potassium. Avoid deep frying!" },
  "carrot":      { cal: 41,  pro: 0.9,  carb: 10,  fat: 0.2,  tip: "Carrots are rich in beta-carotene, great for eye health." },
  "tomato":      { cal: 18,  pro: 0.9,  carb: 3.9, fat: 0.2,  tip: "Tomatoes contain lycopene, a powerful antioxidant good for the heart." },
  "spinach":     { cal: 23,  pro: 2.9,  carb: 3.6, fat: 0.4,  tip: "Spinach is high in iron and calcium. Perfect for a nutritious diet." },
  "onion":       { cal: 40,  pro: 1.1,  carb: 9.3, fat: 0.1,  tip: "Onions contain quercetin, an antioxidant that helps reduce inflammation." },
  "cucumber":    { cal: 15,  pro: 0.7,  carb: 3.6, fat: 0.1,  tip: "Cucumbers are 95% water — very hydrating and low calorie." },
  "broccoli":    { cal: 34,  pro: 2.8,  carb: 7.0, fat: 0.4,  tip: "Broccoli is rich in Vitamin C, K, and fiber. A superfood vegetable!" },
  "peas":        { cal: 81,  pro: 5.4,  carb: 14,  fat: 0.4,  tip: "Peas are a good plant-based protein source and rich in Vitamin K." },

  // ----- Grains & Staples -----
  "rice":        { cal: 130, pro: 2.7,  carb: 28,  fat: 0.3,  tip: "Rice is a good energy source. Brown rice has more fiber than white rice." },
  "wheat":       { cal: 340, pro: 13,   carb: 71,  fat: 2.5,  tip: "Whole wheat is a great source of complex carbohydrates and B vitamins." },
  "bread":       { cal: 265, pro: 9.0,  carb: 49,  fat: 3.2,  tip: "Whole grain bread provides sustained energy and is rich in fiber." },
  "oats":        { cal: 389, pro: 17,   carb: 66,  fat: 7.0,  tip: "Oats are high in beta-glucan fiber which helps lower cholesterol." },
  "pasta":       { cal: 157, pro: 5.8,  carb: 31,  fat: 0.9,  tip: "Pasta is a good carbohydrate source. Pair with vegetables for a balanced meal." },
  "roti":        { cal: 297, pro: 9.9,  carb: 55,  fat: 3.7,  tip: "Roti (chapati) made from whole wheat flour is nutritious and filling." },
  "dal":         { cal: 116, pro: 9.0,  carb: 20,  fat: 0.4,  tip: "Dal (lentils) is an excellent plant-based protein and iron source." },

  // ----- Protein Foods -----
  "egg":         { cal: 155, pro: 13,   carb: 1.1, fat: 11,   tip: "Eggs are a complete protein source with all essential amino acids." },
  "chicken":     { cal: 165, pro: 31,   carb: 0.0, fat: 3.6,  tip: "Chicken breast is one of the best lean protein sources for muscle building." },
  "fish":        { cal: 136, pro: 20,   carb: 0.0, fat: 5.9,  tip: "Fish is rich in Omega-3 fatty acids, excellent for heart and brain health." },
  "paneer":      { cal: 265, pro: 18,   carb: 3.4, fat: 20,   tip: "Paneer is a great vegetarian protein source and rich in calcium." },
  "tofu":        { cal: 76,  pro: 8.0,  carb: 2.0, fat: 4.8,  tip: "Tofu is a low-calorie, high-protein plant food, perfect for vegetarians." },
  "mutton":      { cal: 294, pro: 25,   carb: 0.0, fat: 21,   tip: "Mutton is high in protein and iron but also high in saturated fat. Eat in moderation." },

  // ----- Dairy -----
  "milk":        { cal: 61,  pro: 3.2,  carb: 4.8, fat: 3.3,  tip: "Milk is a great source of calcium and Vitamin D for strong bones." },
  "curd":        { cal: 98,  pro: 11,   carb: 3.4, fat: 4.3,  tip: "Curd (yogurt) contains probiotics which help improve gut health." },
  "butter":      { cal: 717, pro: 0.9,  carb: 0.1, fat: 81,   tip: "Butter is very high in fat and calories. Use sparingly." },
  "cheese":      { cal: 402, pro: 25,   carb: 1.3, fat: 33,   tip: "Cheese is rich in calcium and protein but also high in saturated fat." },

  // ----- Snacks & Others -----
  "peanut":      { cal: 567, pro: 26,   carb: 16,  fat: 49,   tip: "Peanuts are high in protein and healthy fats, great as a small snack." },
  "almond":      { cal: 579, pro: 21,   carb: 22,  fat: 50,   tip: "Almonds are rich in Vitamin E, magnesium, and healthy fats." },
  "coconut":     { cal: 354, pro: 3.3,  carb: 15,  fat: 33,   tip: "Coconut contains medium-chain triglycerides (MCTs), a healthy fat source." },
  "honey":       { cal: 304, pro: 0.3,  carb: 82,  fat: 0.0,  tip: "Honey has natural sugars and antioxidants. Use instead of refined sugar." },
  "sugar":       { cal: 387, pro: 0.0,  carb: 100, fat: 0.0,  tip: "Pure sugar with no nutrients. Limit sugar intake to maintain healthy weight." },
  "samosa":      { cal: 308, pro: 5.9,  carb: 32,  fat: 18,   tip: "Samosas are tasty but high in calories and fat due to deep frying. Eat occasionally." },
  "idli":        { cal: 58,  pro: 1.9,  carb: 12,  fat: 0.1,  tip: "Idli is a light, steamed food — low in calories and easy to digest." },
  "dosa":        { cal: 168, pro: 3.6,  carb: 26,  fat: 6.1,  tip: "Dosa made from fermented batter is nutritious and good for gut health." },
  "biryani":     { cal: 290, pro: 9.0,  carb: 40,  fat: 11,   tip: "Biryani is delicious but calorie-dense. Enjoy in moderation." },
};

// Currently searched food — used by addToPlate()
let currentFood = null;



// 2. FOOD SEARCH

function searchFood() {
  const query = document.getElementById('food-input').value.trim().toLowerCase();

  document.getElementById('result-box').style.display = 'none';
  document.getElementById('error-msg').style.display  = 'none';

  if (!query) { alert('Please enter a food name first!'); return; }

  // SYLLABUS: Destructuring — pull food properties from the DB object
  const food = foodDB[query];

  if (!food) {
    document.getElementById('error-msg').style.display = 'block';
    currentFood = null;
    return;
  }

  // Destructuring the food object
  const { cal, pro, carb, fat, tip } = food;

  document.getElementById('food-name-heading').textContent = `${capitalize(query)} — per 100g`;
  document.getElementById('cal-val').textContent  = cal;
  document.getElementById('pro-val').textContent  = pro;
  document.getElementById('carb-val').textContent = carb;
  document.getElementById('fat-val').textContent  = fat;
  document.getElementById('food-tip').textContent = tip;

  document.getElementById('result-box').style.display = 'block';

  // Save current food for "Add to Plate"
  currentFood = { name: capitalize(query), cal, pro, carb, fat };
}

// SYLLABUS: Event Handling — keydown listener
document.getElementById('food-input').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') searchFood();
});



// 3. MY DAILY PLATE — Meal Tracker


// Internal array that holds plate items
let plateItems = [];

// -- Add item to plate --
const addToPlate = () => {
  if (!currentFood) { alert('Search for a food first!'); return; }

  // Push a copy with a unique ID (timestamp)
  plateItems.push({ ...currentFood, id: Date.now() });

  renderPlate();
};

// -- Remove item from plate --
const removeFromPlate = (id) => {
  // Higher-Order Function: Array.filter to remove the item
  plateItems = plateItems.filter(item => item.id !== id);
  renderPlate();
};

// -- Clear entire plate --
const clearPlate = () => {
  plateItems = [];
  renderPlate();
};

// -- Render the plate list and totals --
const renderPlate = () => {
  const list    = document.getElementById('plate-list');
  const totals  = document.getElementById('plate-totals');
  const isEmpty = plateItems.length === 0;

  // Clear list
  list.innerHTML = '';

  if (isEmpty) {
    // DOM Manipulation: createElement + appendChild
    const emptyLi = document.createElement('li');
    emptyLi.className   = 'plate-empty';
    emptyLi.id          = 'plate-empty';
    emptyLi.textContent = 'No items yet. Search for a food and click "Add to My Plate"!';
    list.appendChild(emptyLi);
    totals.style.display = 'none';
    return;
  }

  
  plateItems.forEach(({ id, name, cal, pro, carb, fat }) => {
    const li = document.createElement('li');
    li.className    = 'plate-item';
    li.dataset.id   = id;               // used by event delegation

    // Inner HTML for the row
    li.innerHTML = `
      <div class="plate-item-info">
        <span class="plate-item-name">${name}</span>
        <span class="plate-item-macros">
          🔥 ${cal} kcal &nbsp;|&nbsp;
          🥩 ${pro}g protein &nbsp;|&nbsp;
          🍞 ${carb}g carbs &nbsp;|&nbsp;
          🧈 ${fat}g fat
        </span>
      </div>
      <button class="plate-delete-btn" data-id="${id}">✕</button>
    `;
    list.appendChild(li);
  });

  
  const totalsData = plateItems.reduce(
    (acc, item) => ({
      cal:  acc.cal  + item.cal,
      pro:  acc.pro  + item.pro,
      carb: acc.carb + item.carb,
      fat:  acc.fat  + item.fat,
    }),
    { cal: 0, pro: 0, carb: 0, fat: 0 }   // initial accumulator
  );

  
  const { cal, pro, carb, fat } = totalsData;

  document.getElementById('total-cal').textContent  = cal.toFixed(1);
  document.getElementById('total-pro').textContent  = pro.toFixed(1);
  document.getElementById('total-carb').textContent = carb.toFixed(1);
  document.getElementById('total-fat').textContent  = fat.toFixed(1);

  totals.style.display = 'block';
};


document.getElementById('plate-list').addEventListener('click', (e) => {
  // Check if the click actually hit a delete button (bubbling)
  if (e.target.classList.contains('plate-delete-btn')) {
    // SYLLABUS: Destructuring — pull dataset value
    const { id } = e.target.dataset;
    removeFromPlate(Number(id));   // convert string → number for strict match
  }
});



// 4. BMI CALCULATOR

function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight-input').value);
  const height = parseFloat(document.getElementById('height-input').value);

  if (!weight || !height || weight <= 0 || height <= 0) {
    alert('Please enter valid weight and height values.');
    return;
  }

  const heightM    = height / 100;
  const bmi        = weight / (heightM * heightM);
  const bmiRounded = bmi.toFixed(1);

  let category, cssClass, message;

  if (bmi < 18.5) {
    category = 'Underweight';
    cssClass  = 'underweight';
    message   = 'You are below the healthy weight range. Consider consulting a doctor or dietitian to increase calorie intake safely.';
  } else if (bmi < 25) {
    category = 'Normal Weight ✅';
    cssClass  = 'normal';
    message   = 'Great! Your weight is in the healthy range. Keep maintaining a balanced diet and regular exercise.';
  } else if (bmi < 30) {
    category = 'Overweight ⚠️';
    cssClass  = 'overweight';
    message   = 'You are slightly above the healthy range. Try increasing physical activity and eating a balanced diet.';
  } else {
    category = 'Obese 🚨';
    cssClass  = 'obese';
    message   = 'Your BMI indicates obesity. Please consult a healthcare professional for a safe weight management plan.';
  }

  const scoreEl = document.getElementById('bmi-score');
  scoreEl.textContent = bmiRounded;
  scoreEl.className   = `bmi-score ${cssClass}`;

  document.getElementById('bmi-category').textContent = category;
  document.getElementById('bmi-category').className   = `bmi-category ${cssClass}`;
  document.getElementById('bmi-message').textContent  = message;

  const barPercent = Math.min(Math.max(((bmi - 10) / 30) * 100, 0), 100);
  document.getElementById('bmi-bar').style.width = `${barPercent}%`;

  // SYLLABUS: Destructuring — map cssClass to colour
  const barColors = {
    underweight: '#60a5fa',
    normal:      '#22c55e',
    overweight:  '#facc15',
    obese:       '#f87171',
  };
  document.getElementById('bmi-bar').style.background = barColors[cssClass];
  document.getElementById('bmi-result').style.display = 'block';
}



// 5. HYDRATION REMINDER
//   


const createGlassTracker = () => {
  let glassCount = 0;   // private state, hidden from global scope

  return {
    drink:    () => { glassCount++;   return glassCount; },
    reset:    () => { glassCount = 0; return glassCount; },
    getCount: () => glassCount,
  };
};

// Create a single tracker instance
const glassTracker = createGlassTracker();

// Drink a glass — closure updates private counter
const drinkGlass = () => {
  const count = glassTracker.drink();
  document.getElementById('glass-count').textContent = count;
  if (count >= 8) {
    document.getElementById('glass-count').style.color = '#22c55e';
  }
};

// Reset glasses
const resetGlasses = () => {
  const count = glassTracker.reset();
  document.getElementById('glass-count').textContent = count;
  document.getElementById('glass-count').style.color = '';
};

// BOM setInterval reference (stored so we can clearInterval it)
let reminderIntervalId = null;

const startReminder = () => {
  if (reminderIntervalId) return;   // already running

  const mins = Number(document.getElementById('reminder-interval').value);
  const ms   = mins * 60 * 1000;

  
  reminderIntervalId = setInterval(() => {
    
    alert(`💧 Hydration Reminder!\nTime to drink a glass of water!\nYou've had ${glassTracker.getCount()} glass(es) today. Keep it up!`);
  }, ms);

  document.getElementById('start-reminder-btn').style.display = 'none';
  document.getElementById('stop-reminder-btn').style.display  = 'inline-block';
  document.getElementById('reminder-status').innerHTML =
    `Reminder is <strong style="color:var(--green)">on</strong> — every <strong>${mins} min</strong>.`;
};

const stopReminder = () => {
  
  clearInterval(reminderIntervalId);
  reminderIntervalId = null;

  document.getElementById('start-reminder-btn').style.display = 'inline-block';
  document.getElementById('stop-reminder-btn').style.display  = 'none';
  document.getElementById('reminder-status').innerHTML =
    'Reminder is <strong>off</strong>. Press Start to begin.';
};



// 6. DYNAMIC HEALTH TIPS

// Array of tip objects — the single source of truth
const healthTips = [
  { icon: '💧', title: 'Drink Enough Water',    text: 'Aim for 8–10 glasses of water per day. Staying hydrated boosts energy and metabolism.' },
  { icon: '🥦', title: 'Eat More Vegetables',   text: 'Fill half your plate with vegetables. They are low in calories but rich in vitamins and fiber.' },
  { icon: '🌅', title: "Don't Skip Breakfast",  text: 'A healthy breakfast kickstarts your metabolism and prevents overeating later in the day.' },
  { icon: '🚶', title: 'Move Every Day',         text: 'Even a 30-minute walk daily improves heart health and helps maintain a healthy weight.' },
  { icon: '😴', title: 'Sleep Well',             text: '7–9 hours of quality sleep helps regulate hunger hormones and supports recovery.' },
  { icon: '🍬', title: 'Limit Sugar Intake',     text: 'Too much added sugar leads to weight gain. Swap sweets for fruits when possible.' },
  { icon: '🥑', title: 'Choose Healthy Fats',    text: 'Nuts, seeds, and avocados have good fats. Avoid trans fats found in fried/packaged food.' },
  { icon: '🍽️', title: 'Watch Your Portions',   text: 'Eating the right amount matters as much as what you eat. Use smaller plates to help.' },
];


const renderTips = () => {
  const grid = document.getElementById('tips-grid');

  
  healthTips.forEach(({ icon, title, text }) => {   // Destructuring each tip object

    // createElement — creates a <div> in memory
    const card = document.createElement('div');
    card.className = 'tip-card';

    // createElement for icon, heading, paragraph
    const iconEl  = document.createElement('div');
    iconEl.className   = 'tip-icon';
    iconEl.textContent = icon;

    const h4 = document.createElement('h4');
    h4.textContent = title;

    const p = document.createElement('p');
    p.textContent = text;

    // appendChild — attach children to card, card to grid
    card.appendChild(iconEl);
    card.appendChild(h4);
    card.appendChild(p);
    grid.appendChild(card);     // finally mount to the DOM
  });
};



// 7. SESSION — BOM + JSON Handling

const loadSession = () => {
 
  const raw     = localStorage.getItem('nutrical_session');
  const session = raw ? JSON.parse(raw) : null;

  const userBlock   = document.getElementById('nav-user');
  const loginBtn    = document.getElementById('nav-login-btn');
  const greetingEl  = document.getElementById('nav-greeting');

  if (session) {
    
    const { name } = session;
    greetingEl.textContent   = `👋 ${name}`;
    userBlock.style.display  = 'flex';
    loginBtn.style.display   = 'none';
  } else {
    userBlock.style.display = 'none';
    loginBtn.style.display  = 'inline-block';
  }
};

const logout = () => {
  localStorage.removeItem('nutrical_session');
  
  window.location.reload();
};



// 8. HELPERS



const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);



// 9. INITIALISATION — runs once when the page loads

const init = () => {
  renderTips();     
  loadSession();    
  renderPlate();   
};

// SYLLABUS: Event Handling — DOMContentLoaded fires when HTML is parsed
document.addEventListener('DOMContentLoaded', init);
