// ==========================================
// AUNG BUSINESS ACADEMY
// APP.JS V3
// ==========================================


// ==========================================
// LESSON DATA
// ==========================================

const lessons = [

  {
    title: "Business ဆိုတာဘာလဲ?",
    description: "Business ရဲ့ အခြေခံသဘောတရား",
    premium: false,
    content: `
      <h2>📚 Business ဆိုတာဘာလဲ?</h2>

      <p>
        Business ဆိုတာ Customer တစ်ယောက်ရဲ့ လိုအပ်ချက်ကို
        Product သို့မဟုတ် Service နဲ့ ဖြည့်ဆည်းပေးပြီး
        Revenue နဲ့ Profit ရရှိအောင် လုပ်ဆောင်တဲ့စနစ် ဖြစ်ပါတယ်။
      </p>

      <h3>Business တစ်ခုမှာ အရေးကြီးတာ ၅ ခု</h3>

      <ol>
        <li>Customer</li>
        <li>Product / Service</li>
        <li>Marketing</li>
        <li>Sales</li>
        <li>Profit</li>
      </ol>

      <p>
        Business အောင်မြင်ဖို့ Product ကောင်းရုံနဲ့ မလုံလောက်ပါဘူး။
        Customer ကိုနားလည်ပြီး Marketing နဲ့ Sales ကိုပါ
        စနစ်တကျလုပ်ဖို့လိုပါတယ်။
      </p>
    `
  },


  {
    title: "Business Idea ဘယ်လိုရွေးမလဲ?",
    description: "ကိုယ်နဲ့ကိုက်ညီတဲ့ Business Idea ရွေးချယ်နည်း",
    premium: false,
    content: `
      <h2>💡 Business Idea ရွေးချယ်နည်း</h2>

      <p>
        Business Idea ကောင်းတစ်ခုဆိုတာ ကိုယ်ကြိုက်တာတစ်ခုတည်း
        မဟုတ်ပါဘူး။ Customer လိုအပ်ချက်နဲ့ Market Demand
        ရှိတဲ့ Idea ဖြစ်ရပါမယ်။
      </p>

      <h3>စစ်ဆေးရမယ့်အချက်များ</h3>

      <ol>
        <li>Customer ဘယ်သူလဲ?</li>
        <li>သူတို့ဘာလိုအပ်လဲ?</li>
        <li>ဘယ်လောက်ပေးဝယ်နိုင်လဲ?</li>
        <li>Competitor ရှိလား?</li>
        <li>ကိုယ်က ဘာကွာခြားအောင်လုပ်နိုင်လဲ?</li>
      </ol>
    `
  },


  {
    title: "Customer ဘယ်လိုရှာမလဲ?",
    description: "Target Customer သတ်မှတ်နည်း",
    premium: false,
    content: `
      <h2>👥 Customer ရှာနည်း</h2>

      <p>
        Business တစ်ခုစမယ်ဆိုရင် "လူတိုင်းက Customer"
        လို့မယူဆသင့်ပါဘူး။
        ကိုယ့် Product ကို အမှန်တကယ်ဝယ်နိုင်မယ့်
        Target Customer ကို သတ်မှတ်ရပါမယ်။
      </p>

      <h3>Target Customer ကို သတ်မှတ်ရာမှာ</h3>

      <ul>
        <li>အသက်</li>
        <li>နေရာ</li>
        <li>ဝင်ငွေ</li>
        <li>အလုပ်အကိုင်</li>
        <li>ဝယ်ယူမှုအလေ့အထ</li>
      </ul>
    `
  },


  {
    title: "Product ဘယ်လိုရွေးမလဲ?",
    description: "Customer လိုအပ်ချက်နဲ့ကိုက်တဲ့ Product ရွေးနည်း",
    premium: false,
    content: `
      <h2>📦 Product ရွေးချယ်နည်း</h2>

      <p>
        Product တစ်ခုရွေးတဲ့အခါ ကိုယ်ကြိုက်တာထက်
        Customer လိုချင်တာကို ပိုအာရုံစိုက်ပါ။
      </p>

      <h3>Product ကောင်းတစ်ခုမှာ</h3>

      <ul>
        <li>Customer Problem ဖြေရှင်းပေးနိုင်ရမယ်</li>
        <li>Quality သင့်တင့်ရမယ်</li>
        <li>Price သင့်တင့်ရမယ်</li>
        <li>Competitor ထက် အားသာချက်ရှိရမယ်</li>
      </ul>
    `
  },


  {
    title: "Sales တိုးအောင် ဘယ်လိုလုပ်မလဲ?",
    description: "Sales တိုးတက်အောင်လုပ်နည်း",
    premium: false,
    content: `
      <h2>📈 Sales တိုးအောင်လုပ်နည်း</h2>

      <p>
        Sales တိုးဖို့ Customer ပိုများလာအောင်လုပ်ရုံမက
        ရှိပြီးသား Customer တွေဆီကနေ
        Repeat Purchase ရအောင်လည်းလုပ်ရပါတယ်။
      </p>

      <h3>Sales Growth ရဲ့ အခြေခံ</h3>

      <ol>
        <li>New Customers ရှာပါ</li>
        <li>Conversion တိုးပါ</li>
        <li>Average Order Value တိုးပါ</li>
        <li>Repeat Purchase တိုးပါ</li>
      </ol>
    `
  },


  {
    title: "Marketing Strategy",
    description: "Business အတွက် Marketing Strategy",
    premium: true,
    content: `
      <h2>📣 Marketing Strategy</h2>

      <p>
        ဒီ Lesson က Premium Content ဖြစ်ပါတယ်။
      </p>

      <p>
        Marketing Strategy အပြည့်အစုံမှာ
        Target Customer, Positioning, Content,
        Promotion, Channel Strategy နဲ့ Measurement
        စတာတွေ ပါဝင်ပါတယ်။
      </p>
    `
  },


  {
    title: "Pricing Strategy",
    description: "Product Price သတ်မှတ်နည်း",
    premium: true,
    content: `
      <h2>💰 Pricing Strategy</h2>

      <p>
        ဒီ Lesson က Premium Content ဖြစ်ပါတယ်။
      </p>
    `
  },


  {
    title: "Profit & Cost Management",
    description: "Cost နဲ့ Profit စီမံခန့်ခွဲနည်း",
    premium: true,
    content: `
      <h2>💵 Profit & Cost Management</h2>

      <p>
        ဒီ Lesson က Premium Content ဖြစ်ပါတယ်။
      </p>
    `
  },


  {
    title: "Business Plan",
    description: "Business Plan ရေးဆွဲနည်း",
    premium: true,
    content: `
      <h2>📋 Business Plan</h2>

      <p>
        ဒီ Lesson က Premium Content ဖြစ်ပါတယ်။
      </p>
    `
  },


  {
    title: "Business Growth Strategy",
    description: "Business ကို Scale လုပ်နည်း",
    premium: true,
    content: `
      <h2>🚀 Business Growth Strategy</h2>

      <p>
        ဒီ Lesson က Premium Content ဖြစ်ပါတယ်။
      </p>
    `
  }

];


// ==========================================
// APP START
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

  updateDashboard();

});


// ==========================================
// DASHBOARD
// ==========================================

function updateDashboard() {

  const lessonCount =
    document.getElementById("lessonCount");

  if (lessonCount) {
    lessonCount.textContent = lessons.length;
  }

  updateProgress();

}


// ==========================================
// START LEARNING
// ==========================================

function startLearning() {

  openLessons();

}


// ==========================================
// LESSON LIST
// ==========================================

function openLessons() {

  const container =
    document.querySelector(".app");

  container.innerHTML = `

    <div class="header">

      <div class="logo">
        📚 Business Lessons
      </div>

      <p>
        Learn business step by step.
      </p>

    </div>


    <button
      onclick="location.reload()"
      style="
        padding:12px 18px;
        border:none;
        border-radius:10px;
        cursor:pointer;
        margin-bottom:20px;
      "
    >
      ← Back Home
    </button>


    <div
      class="lesson-list"
      style="
        display:grid;
        grid-template-columns:
        repeat(auto-fit,minmax(250px,1fr));
        gap:18px;
      "
    >

      ${lessons.map((lesson, index) => `

        <div
          class="menu-card"
          onclick="openLesson(${index})"
          style="cursor:pointer;"
        >

          <div class="icon">
            ${lesson.premium ? "🔒" : "📖"}
          </div>

          <h3>
            ${index + 1}. ${lesson.title}
          </h3>

          <p>
            ${lesson.description}
          </p>

          <button>
            ${
              lesson.premium
              ? "🔒 Premium"
              : "Start Lesson →"
            }
          </button>

        </div>

      `).join("")}

    </div>

  `;

}


// ==========================================
// OPEN LESSON
// ==========================================

function openLesson(index) {

  const lesson = lessons[index];

  if (lesson.premium) {

    showPremiumLock();

    return;

  }


  const container =
    document.querySelector(".app");


  container.innerHTML = `

    <div class="header">

      <div class="logo">
        📚 Aung Business Academy
      </div>

    </div>


    <button
      onclick="openLessons()"
      style="
        padding:12px 18px;
        border:none;
        border-radius:10px;
        cursor:pointer;
        margin-bottom:20px;
      "
    >
      ← Back to Lessons
    </button>


    <article
      style="
        background:white;
        padding:30px;
        border-radius:20px;
        box-shadow:
        0 5px 20px rgba(0,0,0,0.06);
        line-height:1.8;
      "
    >

      ${lesson.content}


      <hr style="margin:30px 0;">


      <button
        onclick="completeLesson(${index})"
        style="
          background:#172033;
          color:white;
          border:none;
          padding:13px 20px;
          border-radius:10px;
          cursor:pointer;
        "
      >
        ✅ Complete Lesson
      </button>

    </article>

  `;

}


// ==========================================
// COMPLETE LESSON
// ==========================================

function completeLesson(index) {

  let completed =
    JSON.parse(
      localStorage.getItem(
        "completedLessonList"
      )
    ) || [];


  if (!completed.includes(index)) {

    completed.push(index);

    localStorage.setItem(
      "completedLessonList",
      JSON.stringify(completed)
    );

  }


  alert("🎉 Lesson Completed!");

  openLessons();

}


// ==========================================
// PROGRESS
// ==========================================

function updateProgress() {

  const progress =
    document.getElementById("progress");

  if (!progress) return;


  const completed =
    JSON.parse(
      localStorage.getItem(
        "completedLessonList"
      )
    ) || [];


  const freeLessons =
    lessons.filter(
      lesson => !lesson.premium
    ).length;


  const completedFree =
    completed.filter(index =>
      lessons[index] &&
      !lessons[index].premium
    ).length;


  const percentage =
    freeLessons === 0
    ? 0
    : Math.round(
        (completedFree / freeLessons) * 100
      );


  progress.textContent =
    percentage + "%";

}


// ==========================================
// BUSINESS TOOLS
// ==========================================

function openTools() {

  const container =
    document.querySelector(".app");


  container.innerHTML = `

    <div class="header">

      <div class="logo">
        🧰 Business Tools
      </div>

      <p>
        Practical tools for your business.
      </p>

    </div>


    <button
      onclick="location.reload()"
      style="
        padding:12px 18px;
        border:none;
        border-radius:10px;
        cursor:pointer;
        margin-bottom:20px;
      "
    >
      ← Back Home
    </button>


    <div
      style="
        display:grid;
        grid-template-columns:
        repeat(auto-fit,minmax(250px,1fr));
        gap:18px;
      "
    >

      <div
        class="menu-card"
        onclick="openProfitCalculator()"
        style="cursor:pointer;"
      >

        <div class="icon">💰</div>

        <h3>Profit Calculator</h3>

        <p>
          Revenue, Cost, Profit နဲ့
          Profit Margin တွက်ပါ။
        </p>

        <button>
          Open Calculator →
        </button>

      </div>


      <div
        class="menu-card premium"
        onclick="showPremiumLock()"
        style="cursor:pointer;"
      >

        <div class="icon">💵</div>

        <h3>Pricing Calculator</h3>

        <p>
          🔒 Premium Tool
        </p>

        <button>
          🔒 Premium
        </button>

      </div>


      <div
        class="menu-card premium"
        onclick="showPremiumLock()"
        style="cursor:pointer;"
      >

        <div class="icon">📊</div>

        <h3>Break-even Calculator</h3>

        <p>
          🔒 Premium Tool
        </p>

        <button>
          🔒 Premium
        </button>

      </div>


      <div
        class="menu-card premium"
        onclick="showPremiumLock()"
        style="cursor:pointer;"
      >

        <div class="icon">🎯</div>

        <h3>Sales Target Calculator</h3>

        <p>
          🔒 Premium Tool
        </p>

        <button>
          🔒 Premium
        </button>

      </div>

    </div>

  `;

}


// ==========================================
// PROFIT CALCULATOR
// ==========================================

function openProfitCalculator() {

  const container =
    document.querySelector(".app");


  container.innerHTML = `

    <div class="header">

      <div class="logo">
        💰 Profit Calculator
      </div>

      <p>
        သင့် Business ရဲ့ အမြတ်ကို
        အလွယ်တကူတွက်ပါ။
      </p>

    </div>


    <button
      onclick="openTools()"
      style="
        padding:12px 18px;
        border:none;
        border-radius:10px;
        cursor:pointer;
        margin-bottom:20px;
      "
    >
      ← Back to Tools
    </button>


    <div
      style="
        background:white;
        padding:25px;
        border-radius:20px;
        box-shadow:
        0 5px 20px rgba(0,0,0,0.06);
      "
    >

      <label>
        Cost per Product
        (ဝယ်ဈေး)
      </label>

      <input
        id="costPrice"
        type="number"
        placeholder="ဥပမာ - 2000"
        style="
          width:100%;
          padding:13px;
          margin:8px 0 18px;
          border:1px solid #ddd;
          border-radius:10px;
        "
      >


      <label>
        Selling Price
        (ရောင်းဈေး)
      </label>

      <input
        id="sellingPrice"
        type="number"
        placeholder="ဥပမာ - 3000"
        style="
          width:100%;
          padding:13px;
          margin:8px 0 18px;
          border:1px solid #ddd;
          border-radius:10px;
        "
      >


      <label>
        Quantity Sold
        (ရောင်းရသည့်အရေအတွက်)
      </label>

      <input
        id="quantity"
        type="number"
        placeholder="ဥပမာ - 100"
        style="
          width:100%;
          padding:13px;
          margin:8px 0 20px;
          border:1px solid #ddd;
          border-radius:10px;
        "
      >


      <button
        onclick="calculateProfit()"
        style="
          width:100%;
          padding:14px;
          background:#172033;
          color:white;
          border:none;
          border-radius:10px;
          font-weight:bold;
          cursor:pointer;
        "
      >
        Calculate Profit
      </button>


      <div
        id="profitResult"
        style="margin-top:25px;"
      ></div>

    </div>

  `;

}


// ==========================================
// CALCULATE PROFIT
// ==========================================

function calculateProfit() {

  const cost =
    Number(
      document.getElementById(
        "costPrice"
      ).value
    );


  const selling =
    Number(
      document.getElementById(
        "sellingPrice"
      ).value
    );


  const quantity =
    Number(
      document.getElementById(
        "quantity"
      ).value
    );


  if (
    cost < 0 ||
    selling <= 0 ||
    quantity <= 0
  ) {

    alert(
      "ကျေးဇူးပြုပြီး အချက်အလက်အားလုံးကို မှန်ကန်စွာထည့်ပါ။"
    );

    return;

  }


  const revenue =
    selling * quantity;


  const totalCost =
    cost * quantity;


  const profit =
    revenue - totalCost;


  const margin =
    revenue > 0
    ? (profit / revenue) * 100
    : 0;


  const result =
    document.getElementById(
      "profitResult"
    );


  result.innerHTML = `

    <div
      style="
        background:#f5f7fa;
        padding:20px;
        border-radius:15px;
      "
    >

      <h3>
        📊 Business Result
      </h3>


      <p>
        💵 Total Revenue:
        <strong>
          ${revenue.toLocaleString()} Ks
        </strong>
      </p>


      <p>
        📦 Total Cost:
        <strong>
          ${totalCost.toLocaleString()} Ks
        </strong>
      </p>


      <p>
        💰 Total Profit:
        <strong>
          ${profit.toLocaleString()} Ks
        </strong>
      </p>


      <p>
        📈 Profit Margin:
        <strong>
          ${margin.toFixed(2)}%
        </strong>
      </p>

    </div>

  `;

}


// ==========================================
// AI BUSINESS COACH
// ==========================================

function openAI() {

  showPremiumLock();

}


// ==========================================
// PREMIUM
// ==========================================

function openPremium() {

  showPremiumLock();

}


// ==========================================
// PREMIUM LOCK
// ==========================================

function showPremiumLock() {

  alert(
    "🔒 PREMIUM CONTENT\n\n" +
    "ဒီ Content / Tool ကို Premium Member များသာ\n" +
    "အသုံးပြုနိုင်ပါတယ်။\n\n" +
    "👑 Premium Subscription — Coming Soon"
  );

}
