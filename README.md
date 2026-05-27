# MealPilot 🍽️

### AI-Powered Food Decision Intelligence Platform

MealPilot is an intelligent AI food assistant that helps users decide whether to:

* 🍳 Cook at home
* 🛒 Order groceries
* 🍔 Order food
* 🍽️ Dine out

based on:

* pantry ingredients
* nutrition goals
* cooking time
* grocery feasibility
* ingredient availability
* budget
* user intent

Built using:

* Angular
* TailwindCSS
* Dify AI Orchestration
* Swiggy MCP APIs

---

# ✨ Features

## 🧠 AI Decision Intelligence

MealPilot intelligently decides the best food action instead of blindly suggesting recipes or food delivery.

---

## 🍳 Smart Meal Recommendations

Suggests meals based on:

* pantry ingredients
* cuisine preference
* nutrition goals
* cooking time
* budget

---

## 🛒 Grocery Optimization

Automatically:

* identifies missing ingredients
* optimizes grocery quantities
* minimizes food waste
* prepares Instamart-style grocery cart

---

## 🚚 Swiggy Food Fallback

If cooking becomes impractical, MealPilot intelligently recommends:

* realistic food delivery options
* healthy alternatives
* budget-friendly meals

---

## 🍽️ Dineout Intelligence

Understands restaurant intent and recommends:

* cafe-style dining
* family restaurants
* ambience-based dineout suggestions
* cuisine-aware restaurant categories

---

## ⚡ Multi-Agent AI Architecture

MealPilot uses a modular AI orchestration workflow:

* Meal Intelligence
* Grocery Optimization
* Ingredient Availability
* Decision Intelligence
* Swiggy Food Fallback
* JSON Response Formatter

---

# 🏗️ Tech Stack

## Frontend

* Angular
* TailwindCSS

## AI Orchestration

* Dify

## AI Models

* GPT-4o-mini

## APIs / Ecosystem

* Swiggy MCP
* Instamart
* Swiggy Food
* Dineout

---

# 📸 Demo Scenarios

## 1️⃣ Smart Cooking

**Input:**
Paneer, tomatoes, wheat

**Query:**
Suggest high protein dinner

**Output:**

* smart meal recommendations
* pantry utilization
* grocery suggestions
* cooking recommendation

---

## 2️⃣ Grocery + Cooking Intelligence

**Input:**
No pantry ingredients

**Query:**
Healthy dinner ideas

**Output:**
MealPilot intelligently recommends:

* groceries + cooking
  instead of directly pushing food delivery.

---

## 3️⃣ Dineout Intelligence

**Query:**
Suggest South Indian restaurants for dinner tonight

**Output:**

* contextual dineout suggestions
* ambience-aware recommendations
* budget-aware restaurant categories

---

# 🧠 Why MealPilot?

Existing platforms solve only one problem:

* recipe apps → recipes
* grocery apps → shopping
* food delivery apps → ordering

MealPilot combines all of them into one:

# AI-powered food decision platform.

---

# 🚀 Future Roadmap

* Real-time Swiggy ordering integration
* Live Instamart inventory
* Weekly AI meal planning
* Pantry memory
* Nutrition tracking
* Family personalization
* Voice assistant
* Autonomous grocery replenishment

---

# ⚙️ Setup

## 1. Clone Repository

```bash
git clone [https://github.com/yourusername/mealpilot.git](https://github.com/Prasanna-Yarra/MEALPILOT.git)
cd mealpilot
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Start Angular App

```bash
ng serve
```

Open:

```text
http://localhost:4200
```

---

# 🔑 Environment Variables

Create:

```text
src/environments/environment.ts
```

Example:

```ts
export const environment = {
  production: false,
  difyApiUrl: 'YOUR_DIFY_API_URL',
  difyApiKey: 'YOUR_DIFY_API_KEY'
};
```

---

# 🌐 Deployment

Recommended:

| Service    | Purpose          |
| ---------- | ---------------- |
| Vercel     | Angular frontend |
| Dify Cloud | AI orchestration |

---

# 🤝 Built For

Swiggy Builders Club / MCP Hackathon

---

# 📄 License

MIT License

---

# ❤️ Made with AI + Swiggy MCP

MealPilot transforms food decisions into intelligent AI-driven experiences.
