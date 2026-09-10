// ==========================================
// AUNG BUSINESS ACADEMY
// APP.JS V4
// Pricing Calculator Added
// ==========================================


// ================================
// LESSON DATA
// ================================

const lessons = [
  {
    title: "Business ဆိုတာဘာလဲ?",
    premium: false,
    content: `
      <h2>📖 Business ဆိုတာဘာလဲ?</h2>
      <p>Business ဆိုတာ Customer ရဲ့ လိုအပ်ချက်ကို ဖြည့်ဆည်းပေးပြီး Revenue နဲ့ Profit ရရှိအောင် တည်ဆောက်ထားတဲ့ စီးပွားရေးလုပ်ငန်း ဖြစ်ပါတယ်။</p>

      <h3>Business ရဲ့ အခြေခံ 4 ခု</h3>
      <ul>
        <li>Product / Service</li>
        <li>Customer</li>
        <li>Sales</li>
        <li>Profit</li>
      </ul>
    `
  },

  {
    title: "Business Idea ဘယ်လိုရွေးမလဲ?",
    premium: false,
    content: `
      <h2>💡 Business Idea</h2>
      <p>Business Idea ကောင်းတစ်ခုဆိုတာ ကိုယ်ကြိုက်တာတစ်ခုတည်း မဟုတ်ဘဲ Customer လိုအပ်ချက်နဲ့ Market Demand ရှိတဲ့ Idea ဖြစ်ရပါမယ်။</p>

      <h3>စဉ်းစားရမယ့်အချက်များ</h3>
      <ul>
        <li>Customer ဘာလိုချင်သလဲ?</li>
        <li>ဘယ်သူတွေ ဝယ်မလဲ?</li>
        <li>Competitor တွေ ဘယ်လိုရောင်းနေကြလဲ?</li>
        <li>Profit ရနိုင်မလား?</li>
      </ul>
    `
  },

  {
    title: "Customer ဘယ်လိုရှာမလဲ?",
    premium: false,
    content: `
      <h2>👥 Customer Finding</h2>
      <p>Business တစ်ခုအောင်မြင်ဖို့ Customer ကို ရှာနိုင်ဖို့ အရေးကြီးပါတယ်။</p>

      <h3>Customer ရှာနိုင်တဲ့နေရာများ</h3>
      <ul>
        <li>Facebook</li>
        <li>TikTok</li>
        <li>Telegram</li>
        <li>Marketplace</li>
        <li>Direct Sales</li>
        <li>Referral</li>
      </ul>
    `
  },

  {
    title: "Product ဘယ်လိုရွေးမလဲ?",
    premium: false,
    content: `
      <h2>📦 Product Selection</h2>
      <p>ရောင်းမယ့် Product ကို Customer Demand၊ Competition၊ Cost နဲ့ Profit ကိုကြည့်ပြီး ရွေးချယ်သင့်ပါတယ်။</p>

      <h3>Product စစ်ဆေးရန်</h3>
      <ul>
        <li>Demand ရှိပါသလား?</li>
        <li>ပြန်ဝယ်တဲ့ Customer ရှိပါသလား?</li>
        <li>Margin ကောင်းပါသလား?</li>
        <li>Competition ဘယ်လောက်ရှိပါသလဲ?</li>
      </ul>
    `
  },

  {
    title: "Sales တိုးအောင် ဘယ်လိုလုပ်မလဲ?",
    premium: false,
    content: `
      <h2>📈 Sales Growth</h2>
      <p>Sales တိုးဖို့ Customer အသစ်ရှာခြင်း၊ Existing Customer ကို ပြန်ရောင်းခြင်းနဲ့ Average Order Value တိုးခြင်းတို့ကို အသုံးပြုနိုင်ပါတယ်။</p>

      <h3>Sales Growth Formula</h3>
      <p>More Customers + More Orders + Higher Value = Higher Sales</p>
    `
  },

  {
    title: "Marketing Strategy",
    premium: true,
    content: `
      <h2>🎯 Marketing Strategy</h2>
      <p>Premium Lesson မှာ Marketing Strategy ကို အသေးစိတ်လေ့လာနိုင်ပါတယ်။</p>
    `
  },

  {
    title: "Pricing Strategy",
    premium: true,
    content: `
      <h2>💰 Pricing Strategy</h2>
      <p>Premium Lesson မှာ Product Pricing Strategy ကို အသေးစိတ်လေ့လာနိုင်ပါတယ်။</p>
    `
  },

  {
    title: "Profit & Cost Management",
    premium: true,
    content: `
      <h2>💵 Profit & Cost Management</h2>
      <p>Premium Lesson မှာ Cost နဲ့ Profit Management ကို အသေးစိတ်လေ့လာနိုင်ပါတယ်။</p>
    `
  },

  {
    title: "Business Plan",
    premium: true,
    content: `
      <h2>📋 Business Plan</h2>
      <p>Premium Member များအတွက် Complete Business Plan တည်ဆောက်နည်းကို သင်ကြားပေးပါမယ်။</p>
    `
  },

  {
    title: "Business Growth Strategy",
    premium: true,
    content: `
      <h2>🚀 Business Growth Strategy</h2>
      <p>Business ကို Scale Up လုပ်နည်းနဲ့ Growth Strategy တွေကို Premium Academy မှာ လေ့လာနိုင်ပါတယ်။</p>
    `
  }
];


// ================================
// START APP
// ================================

document.addEventListener("DOMContentLoaded", function () {
  updateDashboard();
});


// ================================
// DASHBOARD
// ================================

function updateDashboard() {
  const lessonCount = document.getElementById("lessonCount");
  const progress = document.getElementById("progress");

  if (lessonCount) {
    lessonCount.textContent = lessons.length;
  }

  if (progress) {
    progress.textContent = updateProgress();
  }
}


// ================================
// START LEARNING
// ================================

function startLearning() {
  openLessons();
}


// ================================
// LESSON LIST
// ================================

function openLessons() {

  let html = `
    <div class="header">
      <h1>📚 Business Lessons</h1>
      <p>Learn business step by step.</p>
    </div>

    <div class="menu-grid">
  `;

  lessons.forEach((lesson, index) => {

    const icon = lesson.premium ? "🔒" : "📖";

    html += `
      <div class="menu-card" onclick="openLesson(${index})">
        <h3>${icon} ${lesson.title}</h3>
        <p>
          ${lesson.premium ? "Premium Lesson" : "Free Lesson"}
        </p>
      </div>
    `;
  });

  html += `
    </div>

    <div style="margin-top:20px;">
      <button onclick="location.reload()">🏠 Back Home</button>
    </div>
  `;

  document.querySelector(".app").innerHTML = html;
}


// ================================
// OPEN LESSON
// ================================

function openLesson(index) {

  const lesson = lessons[index];

  if (lesson.premium) {
    showPremiumLock();
    return;
  }

  const completedLessons =
    JSON.parse(localStorage.getItem("completedLessonList")) || [];

  const alreadyCompleted =
    completedLessons.includes(index);

  let html = `
    <div class="header">
      <h1>${lesson.title}</h1>
    </div>

    <div class="premium-box">
      ${lesson.content}
    </div>

    <div style="margin-top:20px;">
      ${
        alreadyCompleted
          ? `<button disabled>✅ Completed</button>`
          : `<button onclick="completeLesson(${index})">✅ Complete Lesson</button>`
      }

      <button onclick="openLessons()">⬅️ Back to Lessons</button>
    </div>
  `;

  document.querySelector(".app").innerHTML = html;
}


// ================================
// COMPLETE LESSON
// ================================

function completeLesson(index) {

  let completedLessons =
    JSON.parse(localStorage.getItem("completedLessonList")) || [];

  if (!completedLessons.includes(index)) {
    completedLessons.push(index);
  }

  localStorage.setItem(
    "completedLessonList",
    JSON.stringify(completedLessons)
  );

  alert("🎉 Lesson Completed!");

  openLessons();
}


// ================================
// UPDATE PROGRESS
// ================================

function updateProgress() {

  const completedLessons =
    JSON.parse(localStorage.getItem("completedLessonList")) || [];

  const freeLessons =
    lessons.filter(lesson => !lesson.premium);

  if (freeLessons.length === 0) {
    return "0%";
  }

  const completedFreeLessons =
    completedLessons.filter(index => !lessons[index].premium);

  const percentage =
    Math.round(
      (completedFreeLessons.length / freeLessons.length) * 100
    );

  return percentage + "%";
}


// ================================
// BUSINESS TOOLS
// ================================

function openTools() {

  const html = `
    <div class="header">
      <h1>🛠️ Business Tools</h1>
      <p>Practical tools for your business.</p>
    </div>

    <div class="menu-grid">

      <div class="menu-card" onclick="openProfitCalculator()">
        <h3>💰 Profit Calculator</h3>
        <p>Calculate sales, cost and profit.</p>
        <strong>FREE</strong>
      </div>

      <div class="menu-card" onclick="showPremiumLock()">
        <h3>💵 Pricing Calculator</h3>
        <p>Calculate the right selling price.</p>
        <strong>🔒 PREMIUM</strong>
      </div>

      <div class="menu-card" onclick="showPremiumLock()">
        <h3>📊 Break-even Calculator</h3>
        <p>Find your break-even point.</p>
        <strong>🔒 PREMIUM</strong>
      </div>

      <div class="menu-card" onclick="showPremiumLock()">
        <h3>🎯 Sales Target Calculator</h3>
        <p>Calculate your sales target.</p>
        <strong>🔒 PREMIUM</strong>
      </div>

    </div>

    <div style="margin-top:20px;">
      <button onclick="location.reload()">🏠 Back Home</button>
    </div>
  `;

  document.querySelector(".app").innerHTML = html;
}


// ================================
// PROFIT CALCULATOR
// ================================

function openProfitCalculator() {

  const html = `
    <div class="header">
      <h1>💰 Profit Calculator</h1>
      <p>Calculate your business profit.</p>
    </div>

    <div class="premium-box">

      <label>Cost per Product</label>
      <input
        type="number"
        id="costPrice"
        placeholder="Example: 2000"
      >

      <br><br>

      <label>Selling Price</label>
      <input
        type="number"
        id="sellingPrice"
        placeholder="Example: 3000"
      >

      <br><br>

      <label>Quantity Sold</label>
      <input
        type="number"
        id="quantity"
        placeholder="Example: 100"
      >

      <br><br>

      <button onclick="calculateProfit()">
        🧮 Calculate Profit
      </button>

      <div id="profitResult" style="margin-top:20px;"></div>

    </div>

    <div style="margin-top:20px;">
      <button onclick="openTools()">⬅️ Back to Tools</button>
    </div>
  `;

  document.querySelector(".app").innerHTML = html;
}


// ================================
// CALCULATE PROFIT
// ================================

function calculateProfit() {

  const cost =
    parseFloat(document.getElementById("costPrice").value);

  const selling =
    parseFloat(document.getElementById("sellingPrice").value);

  const quantity =
    parseFloat(document.getElementById("quantity").value);

  if (
    isNaN(cost) ||
    isNaN(selling) ||
    isNaN(quantity) ||
    cost < 0 ||
    selling < 0 ||
    quantity <= 0
  ) {

    alert("ကျေးဇူးပြု၍ အချက်အလက်များ မှန်ကန်စွာ ထည့်ပါ။");

    return;
  }

  const revenue = selling * quantity;

  const totalCost = cost * quantity;

  const profit = revenue - totalCost;

  const margin =
    revenue > 0
      ? (profit / revenue) * 100
      : 0;

  document.getElementById("profitResult").innerHTML = `
    <div class="premium-box">

      <h3>📊 Result</h3>

      <p>
        💵 Total Sales:
        <strong>${revenue.toLocaleString()} Ks</strong>
      </p>

      <p>
        📦 Total Cost:
        <strong>${totalCost.toLocaleString()} Ks</strong>
      </p>

      <p>
        💰 Total Profit:
        <strong>${profit.toLocaleString()} Ks</strong>
      </p>

      <p>
        📈 Profit Margin:
        <strong>${margin.toFixed(2)}%</strong>
      </p>

    </div>
  `;
}


// ================================
// PRICING CALCULATOR
// ================================

function openPricingCalculator() {

  const html = `
    <div class="header">
      <h1>💵 Pricing Calculator</h1>
      <p>Find the right selling price for your product.</p>
    </div>

    <div class="premium-box">

      <h3>📌 Enter Your Cost & Target Margin</h3>

      <label>Product Cost per Unit</label>

      <input
        type="number"
        id="pricingCost"
        placeholder="Example: 2000"
      >

      <br><br>

      <label>Other Cost per Unit</label>

      <input
        type="number"
        id="otherCost"
        placeholder="Example: 300"
      >

      <br><br>

      <label>Desired Profit Margin (%)</label>

      <input
        type="number"
        id="profitMargin"
        placeholder="Example: 30"
      >

      <br><br>

      <button onclick="calculatePricing()">
        🧮 Calculate Selling Price
      </button>

      <div id="pricingResult" style="margin-top:20px;"></div>

    </div>

    <div style="margin-top:20px;">
      <button onclick="openTools()">⬅️ Back to Tools</button>
    </div>
  `;

  document.querySelector(".app").innerHTML = html;
}


// ================================
// CALCULATE PRICING
// ================================

function calculatePricing() {

  const productCost =
    parseFloat(document.getElementById("pricingCost").value);

  const otherCost =
    parseFloat(document.getElementById("otherCost").value) || 0;

  const margin =
    parseFloat(document.getElementById("profitMargin").value);

  if (
    isNaN(productCost) ||
    productCost < 0 ||
    isNaN(margin) ||
    margin < 0 ||
    margin >= 100
  ) {

    alert(
      "Product Cost နဲ့ Profit Margin ကို မှန်ကန်စွာ ထည့်ပါ။\n\nProfit Margin သည် 0% မှ 99% အတွင်း ဖြစ်ရပါမယ်။"
    );

    return;
  }

  const totalCost =
    productCost + otherCost;

  /*
    Selling Price Formula

    Selling Price =
    Total Cost / (1 - Profit Margin / 100)
  */

  const sellingPrice =
    totalCost / (1 - margin / 100);

  const profit =
    sellingPrice - totalCost;

  const markup =
    totalCost > 0
      ? (profit / totalCost) * 100
      : 0;

  document.getElementById("pricingResult").innerHTML = `

    <div class="premium-box">

      <h3>🎯 Recommended Price</h3>

      <p>
        📦 Total Cost / Unit:
        <strong>
          ${totalCost.toLocaleString()} Ks
        </strong>
      </p>

      <p>
        💵 Recommended Selling Price:
        <strong>
          ${sellingPrice.toLocaleString(undefined, {
            maximumFractionDigits: 0
          })} Ks
        </strong>
      </p>

      <p>
        💰 Profit / Unit:
        <strong>
          ${profit.toLocaleString(undefined, {
            maximumFractionDigits: 0
          })} Ks
        </strong>
      </p>

      <p>
        📈 Profit Margin:
        <strong>
          ${margin.toFixed(2)}%
        </strong>
      </p>

      <p>
        📊 Markup:
        <strong>
          ${markup.toFixed(2)}%
        </strong>
      </p>

    </div>

  `;
}


// ================================
// PREMIUM
// ================================

function openAI() {
  showPremiumLock();
}


function openPremium() {
  showPremiumLock();
}


// ================================
// PREMIUM LOCK
// ================================

function showPremiumLock() {

  alert(
    "🔒 PREMIUM CONTENT\n\n" +
    "ဒီ Content / Tool ကို Premium Member များသာ\n" +
    "အသုံးပြုနိုင်ပါတယ်။\n\n" +
    "👑 Premium Subscription — Coming Soon"
  );
}
