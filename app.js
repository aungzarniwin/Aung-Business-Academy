/* =========================================================
   AUNG BUSINESS ACADEMY
   Original Business Lesson Version
   Business English / Long Lesson System NOT USED
   ========================================================= */

(function () {
  "use strict";

  /* =========================================================
     BASIC DATA
     ========================================================= */

  const APP_NAME = "Aung Business Academy";

  const lessons = [
    {
      id: 1,
      title: "Business Basics",
      icon: "💼",
      category: "Business",
      description: "လုပ်ငန်းတစ်ခုကို အခြေခံကနေ နားလည်ပြီး စနစ်တကျ စီမံခန့်ခွဲနိုင်ရန်",
      content: `
        <h2>💼 Business Basics</h2>

        <p>
          Business ဆိုတာ ထုတ်ကုန် (Product) သို့မဟုတ် ဝန်ဆောင်မှု (Service)
          တစ်ခုကို Customer လိုအပ်ချက်နဲ့ ကိုက်ညီအောင် ပေးပြီး
          အမြတ်အစွန်း ရရှိအောင် စီမံခန့်ခွဲခြင်း ဖြစ်ပါတယ်။
        </p>

        <h3>Business တစ်ခုမှာ အရေးကြီးတဲ့ အချက်များ</h3>

        <ul>
          <li>Customer</li>
          <li>Product / Service</li>
          <li>Price</li>
          <li>Sales</li>
          <li>Marketing</li>
          <li>People</li>
          <li>Cost</li>
          <li>Profit</li>
        </ul>

        <div class="lesson-note">
          <strong>Manager Thinking:</strong>
          Business Manager တစ်ယောက်အနေနဲ့ ရောင်းအားတစ်ခုတည်းကို မကြည့်ဘဲ
          Revenue, Cost, Profit, Customer နဲ့ Team ကို တစ်ပြိုင်နက်တည်း
          စဉ်းစားနိုင်ရပါမယ်။
        </div>

        <h3>လက်တွေ့အသုံးချရန်</h3>

        <p>
          ကိုယ်လုပ်နေတဲ့ Business ကို Customer ဘယ်သူလဲ၊
          သူတို့ဘာလိုချင်လဲ၊ ဘာကြောင့် ကိုယ့် Product ကို ဝယ်သင့်လဲ
          ဆိုတာကို ရှင်းရှင်းလင်းလင်း သတ်မှတ်ပါ။
        </p>

        <h3>မှတ်ထားရန်</h3>

        <p>
          <strong>Customer → Value → Sales → Revenue → Profit</strong>
          ဆိုတဲ့ Flow ကို Business Manager တစ်ယောက်အနေနဲ့ နားလည်ထားရပါမယ်။
        </p>
      `
    },

    {
      id: 2,
      title: "Strategic Thinking",
      icon: "🎯",
      category: "Strategy",
      description: "ရေရှည်အောင်မြင်ရန် Strategy နဲ့ ဆုံးဖြတ်ချက်ချနိုင်ခြင်း",
      content: `
        <h2>🎯 Strategic Thinking</h2>

        <p>
          Strategic Thinking ဆိုတာ လက်ရှိပြဿနာတစ်ခုကိုပဲ ဖြေရှင်းတာမဟုတ်ဘဲ
          အနာဂတ်မှာ ဘာဖြစ်လာနိုင်မလဲဆိုတာ ကြိုတင်စဉ်းစားပြီး
          မှန်ကန်တဲ့ Direction ကို ရွေးချယ်ခြင်း ဖြစ်ပါတယ်။
        </p>

        <h3>Strategy ရဲ့ အဓိကအချက်များ</h3>

        <ol>
          <li>လက်ရှိအခြေအနေကို သိရမယ်</li>
          <li>Goal ကို သတ်မှတ်ရမယ်</li>
          <li>Competitor ကို နားလည်ရမယ်</li>
          <li>Customer ကို နားလည်ရမယ်</li>
          <li>Action Plan တည်ဆောက်ရမယ်</li>
          <li>Result ကို ပြန်တိုင်းတာရမယ်</li>
        </ol>

        <div class="lesson-note">
          <strong>Manager Tip:</strong>
          "ဘာလုပ်မလဲ" ထက် "ဘာကြောင့် ဒီလိုလုပ်မလဲ" ဆိုတာကို
          စဉ်းစားတတ်တဲ့ Manager ဖြစ်အောင် လေ့ကျင့်ပါ။
        </div>
      `
    },

    {
      id: 3,
      title: "Brand Basics",
      icon: "🏷️",
      category: "Brand",
      description: "Brand ကို Customer စိတ်ထဲမှာ ခိုင်မာအောင် တည်ဆောက်ခြင်း",
      content: `
        <h2>🏷️ Brand Basics</h2>

        <p>
          Brand ဆိုတာ Logo တစ်ခုတည်း မဟုတ်ပါဘူး။
          Customer က ကိုယ့် Product / Company ကို တွေ့တဲ့အခါ
          စိတ်ထဲမှာ ဖြစ်ပေါ်လာတဲ့ ယုံကြည်မှု၊ အတွေ့အကြုံနဲ့
          ခံစားချက်တွေ အားလုံးပေါင်းစပ်ထားတာ ဖြစ်ပါတယ်။
        </p>

        <h3>Strong Brand ရဲ့ အချက်များ</h3>

        <ul>
          <li>Quality</li>
          <li>Consistency</li>
          <li>Trust</li>
          <li>Customer Experience</li>
          <li>Clear Positioning</li>
        </ul>

        <p>
          Sales Team က Customer နဲ့ တိုက်ရိုက်ထိတွေ့နေတဲ့အတွက်
          Brand Image ကို ထိန်းသိမ်းရာမှာ အရေးကြီးပါတယ်။
        </p>
      `
    },

    {
      id: 4,
      title: "Marketing Basics",
      icon: "📣",
      category: "Marketing",
      description: "Customer ကို ရှာဖွေခြင်း၊ ဆွဲဆောင်ခြင်းနှင့် ထိန်းသိမ်းခြင်း",
      content: `
        <h2>📣 Marketing Basics</h2>

        <p>
          Marketing ဆိုတာ Product ကို ကြော်ငြာရုံသာ မဟုတ်ပါဘူး။
          Customer ဘာလိုချင်တယ်ဆိုတာ သိပြီး
          သင့်တော်တဲ့ Product, Price, Place, Promotion ကို
          စီမံပေးခြင်း ဖြစ်ပါတယ်။
        </p>

        <h3>4Ps of Marketing</h3>

        <ul>
          <li><strong>Product</strong> – ဘာကိုရောင်းမလဲ</li>
          <li><strong>Price</strong> – ဘယ်လောက်နဲ့ရောင်းမလဲ</li>
          <li><strong>Place</strong> – ဘယ်နေရာကနေ ရောင်းမလဲ</li>
          <li><strong>Promotion</strong> – ဘယ်လိုဆက်သွယ်မလဲ</li>
        </ul>

        <div class="lesson-note">
          Marketing က Customer ကို ရှာပေးပြီး
          Sales က Customer ကို ဝယ်ယူစေပါတယ်။
        </div>
      `
    },

    {
      id: 5,
      title: "Sales Basics",
      icon: "💰",
      category: "Sales",
      description: "Sales Process ကို နားလည်ပြီး ရောင်းအားတိုးတက်အောင်လုပ်ခြင်း",
      content: `
        <h2>💰 Sales Basics</h2>

        <p>
          Sales ဆိုတာ Product ကို အတင်းရောင်းခြင်းမဟုတ်ပါဘူး။
          Customer ရဲ့ Need ကို နားလည်ပြီး
          သင့်တော်တဲ့ Solution ကို ပေးခြင်း ဖြစ်ပါတယ်။
        </p>

        <h3>Sales Process</h3>

        <ol>
          <li>Prospecting</li>
          <li>Approaching</li>
          <li>Need Identification</li>
          <li>Presentation</li>
          <li>Objection Handling</li>
          <li>Closing</li>
          <li>Follow-up</li>
        </ol>

        <p>
          Professional Salesperson တစ်ယောက်ဟာ Product အကြောင်းပြောတာထက်
          Customer ရဲ့ Problem ကို ပိုပြီးနားထောင်ရပါတယ်။
        </p>
      `
    },

    {
      id: 6,
      title: "Negotiation Skills",
      icon: "🤝",
      category: "Sales",
      description: "Customer နှင့် Win-Win Negotiation ပြုလုပ်နိုင်ရန်",
      content: `
        <h2>🤝 Negotiation Skills</h2>

        <p>
          Negotiation ဆိုတာ ကိုယ့်ဘက်က အမြဲအနိုင်ရဖို့ မဟုတ်ပါဘူး။
          နှစ်ဖက်စလုံးအတွက် အကျိုးရှိတဲ့ Win-Win Solution ကို
          ရှာဖွေခြင်း ဖြစ်ပါတယ်။
        </p>

        <h3>Negotiation မလုပ်ခင်</h3>

        <ul>
          <li>ကိုယ့် Objective ကို သိပါ</li>
          <li>Customer Objective ကို သိပါ</li>
          <li>Minimum acceptable point ကို သတ်မှတ်ပါ</li>
          <li>Alternative Option ပြင်ဆင်ထားပါ</li>
        </ul>

        <div class="lesson-note">
          စကားပြောတာထက် နားထောင်နိုင်မှုက Negotiation မှာ ပိုအရေးကြီးပါတယ်။
        </div>
      `
    },

    {
      id: 7,
      title: "Customer Service",
      icon: "❤️",
      category: "Customer",
      description: "Customer ကို ရေရှည်ထိန်းသိမ်းနိုင်ရန်",
      content: `
        <h2>❤️ Customer Service</h2>

        <p>
          Customer တစ်ယောက်ကို ရောင်းပြီးသွားတာနဲ့
          Sales အလုပ်ပြီးသွားတာ မဟုတ်ပါဘူး။
          ရောင်းပြီးနောက်ပိုင်း Service က Customer Loyalty ကို တည်ဆောက်ပေးပါတယ်။
        </p>

        <h3>Customer Service အတွက်</h3>

        <ul>
          <li>နားထောင်ပါ</li>
          <li>မြန်မြန်တုံ့ပြန်ပါ</li>
          <li>ပြဿနာကို လက်ခံပါ</li>
          <li>Solution ပေးပါ</li>
          <li>Follow-up လုပ်ပါ</li>
        </ul>
      `
    },

    {
      id: 8,
      title: "People Management",
      icon: "👥",
      category: "Management",
      description: "Team ကို ဦးဆောင်ပြီး Performance တိုးတက်အောင်လုပ်ခြင်း",
      content: `
        <h2>👥 People Management</h2>

        <p>
          Manager က အလုပ်အားလုံးကို ကိုယ်တိုင်လုပ်ရတာ မဟုတ်ပါဘူး။
          Team ကို ရည်မှန်းချက်နဲ့ လုပ်ဆောင်နိုင်အောင်
          ဦးဆောင်ပေးရတာ ဖြစ်ပါတယ်။
        </p>

        <h3>ကောင်းမွန်တဲ့ Manager တစ်ယောက်</h3>

        <ul>
          <li>Clear Expectation ပေးတယ်</li>
          <li>Team ကို Coaching လုပ်တယ်</li>
          <li>Regular Review လုပ်တယ်</li>
          <li>Feedback ပေးတယ်</li>
          <li>Ownership ပေးတယ်</li>
          <li>Accountability ရှိအောင်လုပ်တယ်</li>
        </ul>

        <div class="lesson-note">
          <strong>Don't Micromanage.</strong>
          Team ကို အရာရာလိုက်ထိန်းချုပ်မယ့်အစား
          Goal နဲ့ Standard ကို ရှင်းလင်းပေးပြီး
          အကောင်အထည်ဖော်နိုင်အောင် Empower လုပ်ပါ။
        </div>
      `
    },

    {
      id: 9,
      title: "Profit & Loss",
      icon: "📊",
      category: "Finance",
      description: "Revenue, Cost နှင့် Profit ကို နားလည်ခြင်း",
      content: `
        <h2>📊 Profit & Loss</h2>

        <p>
          Business တစ်ခုမှာ Sales များတာနဲ့ အမြတ်များတယ်လို့
          မဆိုနိုင်ပါဘူး။ Cost ကိုလည်း ထိန်းချုပ်နိုင်ရပါမယ်။
        </p>

        <h3>အခြေခံ Formula</h3>

        <p>
          <strong>Profit = Revenue − Cost</strong>
        </p>

        <p>
          Revenue တိုးအောင်လုပ်ရမယ်။ တစ်ချိန်တည်းမှာ
          မလိုအပ်တဲ့ Cost တွေကိုလည်း ထိန်းချုပ်ရမယ်။
        </p>

        <h3>Manager တစ်ယောက် သိထားရမယ့်အချက်</h3>

        <ul>
          <li>Sales Revenue</li>
          <li>Gross Profit</li>
          <li>Operating Cost</li>
          <li>Net Profit</li>
          <li>Profit Margin</li>
        </ul>
      `
    },

    {
      id: 10,
      title: "Goal Setting",
      icon: "🎯",
      category: "Management",
      description: "ရည်မှန်းချက်ကို လက်တွေ့ Action Plan အဖြစ် ပြောင်းလဲခြင်း",
      content: `
        <h2>🎯 Goal Setting</h2>

        <p>
          Goal က ရှင်းလင်းမှ Team က ဘာလုပ်ရမယ်ဆိုတာ သိနိုင်ပါတယ်။
        </p>

        <h3>SMART Goal</h3>

        <ul>
          <li><strong>S</strong> – Specific</li>
          <li><strong>M</strong> – Measurable</li>
          <li><strong>A</strong> – Achievable</li>
          <li><strong>R</strong> – Relevant</li>
          <li><strong>T</strong> – Time-bound</li>
        </ul>

        <div class="lesson-note">
          Goal တစ်ခုသတ်မှတ်ပြီးတာနဲ့
          Daily / Weekly Action ကို ပြောင်းရေးနိုင်ရပါမယ်။
        </div>
      `
    },

    {
      id: 11,
      title: "Sales Target Management",
      icon: "📈",
      category: "Sales Management",
      description: "Sales Target ကို လစဉ်၊ အပတ်စဉ်၊ နေ့စဉ် Action အဖြစ် ပြောင်းခြင်း",
      content: `
        <h2>📈 Sales Target Management</h2>

        <p>
          Target ဆိုတာ Number တစ်ခုထည့်ထားရုံနဲ့ မပြီးပါဘူး။
          Target ကို လူ၊ Customer၊ Territory၊ Product နဲ့ Time အလိုက်
          ခွဲပြီး Field Execution ပြုလုပ်ရပါတယ်။
        </p>

        <h3>Target Breakdown</h3>

        <ol>
          <li>Annual Target</li>
          <li>Monthly Target</li>
          <li>Weekly Target</li>
          <li>Daily Target</li>
        </ol>

        <p>
          Target နောက်ကျလာရင် Month အဆုံးမှ ပြေးလိုက်တာထက်
          Week တစ်ပတ်ချင်းစီမှာ Gap ကို ရှာပြီး ပြင်ဆင်တာ ပိုကောင်းပါတယ်။
        </p>
      `
    },

    {
      id: 12,
      title: "KPI Management",
      icon: "📋",
      category: "Sales Management",
      description: "Team Performance ကို KPI နဲ့ တိုင်းတာခြင်း",
      content: `
        <h2>📋 KPI Management</h2>

        <p>
          KPI ဆိုတာ Team က Target ရောက်မရောက်
          တိုင်းတာနိုင်တဲ့ Key Performance Indicator ဖြစ်ပါတယ်။
        </p>

        <h3>Sales KPI ဥပမာများ</h3>

        <ul>
          <li>Sales Volume</li>
          <li>Revenue</li>
          <li>Numeric Distribution</li>
          <li>Active Customers</li>
          <li>Strike Rate</li>
          <li>Collection</li>
          <li>New Customer Acquisition</li>
        </ul>

        <div class="lesson-note">
          KPI ကို ပြသဖို့အတွက်ပဲ မသုံးဘဲ
          Team Coaching နဲ့ Action Planning အတွက် အသုံးချပါ။
        </div>
      `
    },

    {
      id: 13,
      title: "Problem Solving",
      icon: "🧠",
      category: "Management",
      description: "Business Problem ကို Root Cause အထိ ရှာဖွေဖြေရှင်းခြင်း",
      content: `
        <h2>🧠 Problem Solving</h2>

        <p>
          ပြဿနာဖြစ်တိုင်း လူကို အပြစ်တင်တာက Problem Solving မဟုတ်ပါဘူး။
          Problem ရဲ့ Root Cause ကို ရှာဖွေရပါတယ်။
        </p>

        <h3>Problem Solving Process</h3>

        <ol>
          <li>Problem ကို သတ်မှတ်ပါ</li>
          <li>Data စုပါ</li>
          <li>Root Cause ရှာပါ</li>
          <li>Solution များ စဉ်းစားပါ</li>
          <li>Best Solution ရွေးပါ</li>
          <li>Action လုပ်ပါ</li>
          <li>Result ပြန်တိုင်းပါ</li>
        </ol>
      `
    },

    {
      id: 14,
      title: "Sales Manager Action Plan",
      icon: "🚀",
      category: "Sales Management",
      description: "Sales Manager တစ်ယောက်အနေနဲ့ လက်တွေ့အကောင်အထည်ဖော်ရန်",
      content: `
        <h2>🚀 Sales Manager Action Plan</h2>

        <p>
          Sales Manager တစ်ယောက်ရဲ့ အဓိကတာဝန်က
          Target ကို Team ရဲ့ Field Execution အဖြစ် ပြောင်းလဲပေးနိုင်ခြင်း ဖြစ်ပါတယ်။
        </p>

        <h3>နေ့စဉ်</h3>

        <ul>
          <li>Sales Result စစ်ဆေးပါ</li>
          <li>Market Situation ကြည့်ပါ</li>
          <li>Team ကို Follow-up လုပ်ပါ</li>
          <li>Customer Issue ဖြေရှင်းပါ</li>
        </ul>

        <h3>အပတ်စဉ်</h3>

        <ul>
          <li>Target vs Achievement စစ်ပါ</li>
          <li>Gap Analysis လုပ်ပါ</li>
          <li>Team Review လုပ်ပါ</li>
          <li>Next Week Action Plan ချပါ</li>
        </ul>

        <h3>လစဉ်</h3>

        <ul>
          <li>Monthly Performance Review</li>
          <li>Customer Review</li>
          <li>Territory Review</li>
          <li>Competitor Review</li>
          <li>Next Month Strategy</li>
        </ul>

        <div class="lesson-note">
          <strong>Final Thought:</strong>
          Sales Manager က Number ကိုပဲ ကြည့်တဲ့သူ မဟုတ်ပါဘူး။
          People + Customer + Market + Execution + Profit
          အားလုံးကို ချိတ်ဆက်စီမံနိုင်တဲ့ Business Leader ဖြစ်ရပါမယ်။
        </div>
      `
    }
  ];

  /* =========================================================
     STATE
     ========================================================= */

  let currentSection = "dashboard";
  let currentLesson = null;

  let completedLessons = JSON.parse(
    localStorage.getItem("aba_completed_lessons") || "[]"
  );

  /* =========================================================
     HELPERS
     ========================================================= */

  function getCompletedCount() {
    return completedLessons.length;
  }

  function getProgress() {
    if (!lessons.length) return 0;
    return Math.round((getCompletedCount() / lessons.length) * 100);
  }

  function isCompleted(id) {
    return completedLessons.includes(id);
  }

  function escapeHTML(text) {
    const div = document.createElement("div");
    div.textContent = text || "";
    return div.innerHTML;
  }

  function saveProgress() {
    localStorage.setItem(
      "aba_completed_lessons",
      JSON.stringify(completedLessons)
    );
  }

  function getMainContainer() {
    return (
      document.querySelector("#app-content") ||
      document.querySelector("#main-content") ||
      document.querySelector("#content") ||
      document.querySelector(".main-content") ||
      document.querySelector("main") ||
      document.body
    );
  }

  /* =========================================================
     GLOBAL STYLE
     ========================================================= */

  function injectStyles() {
    if (document.getElementById("aba-original-style")) return;

    const style = document.createElement("style");
    style.id = "aba-original-style";

    style.textContent = `
      .aba-page {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
      }

      .aba-page-header {
        margin-bottom: 22px;
      }

      .aba-page-header h1 {
        margin: 0 0 6px;
        font-size: 28px;
      }

      .aba-page-header p {
        margin: 0;
        color: #64748b;
      }

      .aba-grid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 16px;
      }

      .aba-card {
        background: #fff;
        border-radius: 16px;
        padding: 20px;
        border: 1px solid #e5e7eb;
        box-shadow: 0 5px 20px rgba(0,0,0,.05);
      }

      .aba-stat-number {
        font-size: 30px;
        font-weight: 800;
        margin-top: 8px;
      }

      .aba-stat-label {
        color: #64748b;
        font-size: 14px;
      }

      .aba-course-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 16px;
      }

      .aba-lesson-card {
        background: #fff;
        border: 1px solid #e5e7eb;
        border-radius: 16px;
        padding: 18px;
        cursor: pointer;
        transition: .2s ease;
      }

      .aba-lesson-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(0,0,0,.08);
      }

      .aba-lesson-icon {
        font-size: 30px;
        margin-bottom: 10px;
      }

      .aba-lesson-card h3 {
        margin: 0 0 8px;
      }

      .aba-lesson-card p {
        color: #64748b;
        line-height: 1.6;
        margin-bottom: 12px;
      }

      .aba-badge {
        display: inline-block;
        padding: 5px 9px;
        border-radius: 999px;
        font-size: 12px;
        background: #eef2ff;
        color: #4338ca;
      }

      .aba-complete {
        background: #ecfdf5;
        color: #047857;
      }

      .aba-reader {
        background: #fff;
        border: 1px solid #e5e7eb;
        border-radius: 18px;
        padding: 26px;
        margin-top: 20px;
        box-shadow: 0 8px 30px rgba(0,0,0,.06);
      }

      .aba-reader-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 20px;
      }

      .aba-reader-content {
        font-size: 16px;
        line-height: 1.9;
        color: #27303f;
      }

      .aba-reader-content h2 {
        margin-top: 0;
        font-size: 27px;
      }

      .aba-reader-content h3 {
        margin-top: 28px;
        margin-bottom: 10px;
      }

      .aba-reader-content p {
        margin: 0 0 16px;
      }

      .aba-reader-content li {
        margin-bottom: 8px;
      }

      .lesson-note {
        background: #f8fafc;
        border-left: 4px solid #4f46e5;
        padding: 15px 18px;
        margin: 20px 0;
        border-radius: 8px;
      }

      .aba-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 22px;
      }

      .aba-btn {
        border: 0;
        border-radius: 10px;
        padding: 11px 16px;
        cursor: pointer;
        font-weight: 700;
      }

      .aba-btn-primary {
        background: #4f46e5;
        color: #fff;
      }

      .aba-btn-secondary {
        background: #eef2f7;
        color: #334155;
      }

      .aba-btn-success {
        background: #059669;
        color: #fff;
      }

      .aba-progress {
        height: 10px;
        background: #e5e7eb;
        border-radius: 99px;
        overflow: hidden;
        margin-top: 10px;
      }

      .aba-progress-bar {
        height: 100%;
        background: #4f46e5;
        border-radius: 99px;
      }

      .aba-list-row {
        background: #fff;
        border: 1px solid #e5e7eb;
        padding: 15px;
        border-radius: 12px;
        margin-bottom: 10px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
      }

      .aba-tool-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 16px;
      }

      .aba-tool {
        background: #fff;
        border: 1px solid #e5e7eb;
        border-radius: 16px;
        padding: 20px;
      }

      .aba-input {
        width: 100%;
        padding: 12px;
        border: 1px solid #d1d5db;
        border-radius: 9px;
        margin: 7px 0 12px;
      }

      @media (max-width: 900px) {
        .aba-grid,
        .aba-course-grid,
        .aba-tool-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }

      @media (max-width: 600px) {
        .aba-page {
          padding: 14px;
        }

        .aba-grid,
        .aba-course-grid,
        .aba-tool-grid {
          grid-template-columns: 1fr;
        }

        .aba-reader {
          padding: 18px;
        }

        .aba-reader-content {
          font-size: 15px;
        }

        .aba-reader-top {
          align-items: flex-start;
          flex-direction: column;
        }
      }
    `;

    document.head.appendChild(style);
  }

  /* =========================================================
     DASHBOARD
     ========================================================= */

  function renderDashboard() {
    const container = getMainContainer();
    const progress = getProgress();

    container.innerHTML = `
      <div class="aba-page">

        <div class="aba-page-header">
          <h1>🏠 Dashboard</h1>
          <p>Welcome to Aung Business Academy</p>
        </div>

        <div class="aba-grid">

          <div class="aba-card">
            <div class="aba-stat-label">Courses</div>
            <div class="aba-stat-number">4</div>
          </div>

          <div class="aba-card">
            <div class="aba-stat-label">Lessons</div>
            <div class="aba-stat-number">${lessons.length}</div>
          </div>

          <div class="aba-card">
            <div class="aba-stat-label">Completed</div>
            <div class="aba-stat-number">${getCompletedCount()}</div>
          </div>

          <div class="aba-card">
            <div class="aba-stat-label">Progress</div>
            <div class="aba-stat-number">${progress}%</div>
          </div>

        </div>

        <div class="aba-card" style="margin-top:20px;">
          <h2>📚 Sales Management Mastery</h2>
          <p style="color:#64748b;margin:8px 0 15px;">
            Sales Management နှင့် Business Management အခြေခံများကို
            လေ့လာနိုင်ပါတယ်။
          </p>

          <div class="aba-progress">
            <div class="aba-progress-bar" style="width:${progress}%"></div>
          </div>

          <p style="margin-top:8px;">Course Progress: ${progress}%</p>

          <button class="aba-btn aba-btn-primary"
                  onclick="AungBusinessAcademy.showSection('lessons')">
            📖 Continue Learning
          </button>
        </div>

        <div class="aba-card" style="margin-top:20px;">
          <h2>🎯 Daily Goal</h2>
          <p style="color:#64748b;">0 / 30 minutes</p>
        </div>

      </div>
    `;
  }

  /* =========================================================
     LESSON LIST
     ========================================================= */

  function renderLessons() {
    const container = getMainContainer();

    let html = `
      <div class="aba-page">

        <div class="aba-page-header">
          <h1>📖 Lessons</h1>
          <p>Business နှင့် Sales Management သင်ခန်းစာများ</p>
        </div>

        <div class="aba-course-grid">
    `;

    lessons.forEach(function (lesson) {
      html += `
        <div class="aba-lesson-card"
             onclick="AungBusinessAcademy.openLesson(${lesson.id})">

          <div class="aba-lesson-icon">${lesson.icon}</div>

          <h3>${escapeHTML(lesson.title)}</h3>

          <p>${escapeHTML(lesson.description)}</p>

          <span class="aba-badge">
            ${isCompleted(lesson.id) ? "✓ Completed" : "Start Lesson"}
          </span>

        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;

    container.innerHTML = html;
  }

  /* =========================================================
     OPEN LESSON
     ========================================================= */

  function openLesson(id) {
    const lesson = lessons.find(function (item) {
      return item.id === Number(id);
    });

    if (!lesson) return;

    currentLesson = lesson;

    const container = getMainContainer();

    const currentIndex = lessons.findIndex(
      item => item.id === lesson.id
    );

    const previous = lessons[currentIndex - 1];
    const next = lessons[currentIndex + 1];

    container.innerHTML = `
      <div class="aba-page">

        <div class="aba-actions" style="margin-top:0;margin-bottom:15px;">
          <button class="aba-btn aba-btn-secondary"
                  onclick="AungBusinessAcademy.showSection('lessons')">
            ← Back to Lessons
          </button>
        </div>

        <div class="aba-reader">

          <div class="aba-reader-top">
            <div>
              <div class="aba-badge">
                Lesson ${currentIndex + 1} / ${lessons.length}
              </div>

              <h1 style="margin:10px 0 5px;">
                ${lesson.icon} ${escapeHTML(lesson.title)}
              </h1>

              <p style="color:#64748b;margin:0;">
                ${escapeHTML(lesson.category)}
              </p>
            </div>

            <div>
              ${
                isCompleted(lesson.id)
                  ? `<span class="aba-badge aba-complete">✓ Completed</span>`
                  : `<span class="aba-badge">Not Completed</span>`
              }
            </div>
          </div>

          <div class="aba-reader-content">
            ${lesson.content}
          </div>

          <div class="aba-actions">

            ${
              previous
                ? `
                  <button class="aba-btn aba-btn-secondary"
                          onclick="AungBusinessAcademy.openLesson(${previous.id})">
                    ← Previous
                  </button>
                `
                : ""
            }

            ${
              isCompleted(lesson.id)
                ? `
                  <button class="aba-btn aba-btn-secondary"
                          onclick="AungBusinessAcademy.markIncomplete(${lesson.id})">
                    ↩ Mark Incomplete
                  </button>
                `
                : `
                  <button class="aba-btn aba-btn-success"
                          onclick="AungBusinessAcademy.markCompleted(${lesson.id})">
                    ✓ Mark as Completed
                  </button>
                `
            }

            ${
              next
                ? `
                  <button class="aba-btn aba-btn-primary"
                          onclick="AungBusinessAcademy.openLesson(${next.id})">
                    Next →
                  </button>
                `
                : ""
            }

          </div>

        </div>

      </div>
    `;

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  /* =========================================================
     PROGRESS
     ========================================================= */

  function renderProgress() {
    const container = getMainContainer();
    const progress = getProgress();

    let rows = "";

    lessons.forEach(function (lesson, index) {
      rows += `
        <div class="aba-list-row"
             onclick="AungBusinessAcademy.openLesson(${lesson.id})">

          <div>
            <strong>${index + 1}. ${escapeHTML(lesson.title)}</strong>
            <div style="color:#64748b;font-size:13px;margin-top:4px;">
              ${escapeHTML(lesson.category)}
            </div>
          </div>

          <span class="aba-badge ${
            isCompleted(lesson.id) ? "aba-complete" : ""
          }">
            ${isCompleted(lesson.id) ? "✓ Done" : "Start"}
          </span>

        </div>
      `;
    });

    container.innerHTML = `
      <div class="aba-page">

        <div class="aba-page-header">
          <h1>📊 My Progress</h1>
          <p>Your learning progress</p>
        </div>

        <div class="aba-card">

          <h2>${progress}% Complete</h2>

          <div class="aba-progress">
            <div class="aba-progress-bar"
                 style="width:${progress}%"></div>
          </div>

          <p style="margin-top:10px;">
            ${getCompletedCount()} / ${lessons.length} lessons completed
          </p>

        </div>

        <div style="margin-top:20px;">
          ${rows}
        </div>

      </div>
    `;
  }

  /* =========================================================
     MY COURSES
     ========================================================= */

  function renderCourses() {
    const container = getMainContainer();

    container.innerHTML = `
      <div class="aba-page">

        <div class="aba-page-header">
          <h1>📚 My Courses</h1>
          <p>Business Management learning programs</p>
        </div>

        <div class="aba-course-grid">

          <div class="aba-card">
            <h2>📈 Sales Management Mastery</h2>
            <p>
              Sales Management, KPI, Target, Team Leadership,
              Customer Management နှင့် Field Execution။
            </p>
            <button class="aba-btn aba-btn-primary"
                    onclick="AungBusinessAcademy.showSection('lessons')">
              View Lessons
            </button>
          </div>

          <div class="aba-card">
            <h2>💼 Business Management</h2>
            <p>
              Business Basics, Strategy, People Management နှင့်
              Profit Management။
            </p>
          </div>

          <div class="aba-card">
            <h2>📣 Marketing & Brand</h2>
            <p>
              Marketing, Brand, Customer နှင့် Sales Fundamentals။
            </p>
          </div>

          <div class="aba-card">
            <h2>🚀 Leadership</h2>
            <p>
              Leadership, Coaching, Goal Setting နှင့်
              Problem Solving။
            </p>
          </div>

        </div>

      </div>
    `;
  }

  /* =========================================================
     SALES MANAGER
     ========================================================= */

  function renderSalesManager() {
    const container = getMainContainer();

    container.innerHTML = `
      <div class="aba-page">

        <div class="aba-page-header">
          <h1>💼 Sales Manager</h1>
          <p>Sales Manager အတွက် Practical Management Tools</p>
        </div>

        <div class="aba-grid">

          <div class="aba-card">
            <h3>🎯 Target</h3>
            <p>Target Planning & Achievement</p>
          </div>

          <div class="aba-card">
            <h3>👥 Team</h3>
            <p>Team Coaching & Performance</p>
          </div>

          <div class="aba-card">
            <h3>📊 KPI</h3>
            <p>Performance Monitoring</p>
          </div>

          <div class="aba-card">
            <h3>📈 Market</h3>
            <p>Market Execution & Growth</p>
          </div>

        </div>

      </div>
    `;
  }

  /* =========================================================
     PRICING CALCULATOR
     ========================================================= */

  function renderPricing() {
    const container = getMainContainer();

    container.innerHTML = `
      <div class="aba-page">

        <div class="aba-page-header">
          <h1>🧮 Pricing Calculator</h1>
          <p>Profit & Margin တွက်ချက်ရန်</p>
        </div>

        <div class="aba-tool-grid">

          <div class="aba-tool">

            <h3>💰 Profit Calculator</h3>

            <label>Cost Price</label>
            <input id="abaCost"
                   class="aba-input"
                   type="number"
                   placeholder="0">

            <label>Selling Price</label>
            <input id="abaSelling"
                   class="aba-input"
                   type="number"
                   placeholder="0">

            <button class="aba-btn aba-btn-primary"
                    onclick="AungBusinessAcademy.calculateProfit()">
              Calculate
            </button>

            <div id="abaProfitResult"
                 style="margin-top:15px;font-weight:700;">
            </div>

          </div>

          <div class="aba-tool">

            <h3>📊 Margin Calculator</h3>

            <label>Cost</label>
            <input id="abaMarginCost"
                   class="aba-input"
                   type="number"
                   placeholder="0">

            <label>Sales</label>
            <input id="abaMarginSales"
                   class="aba-input"
                   type="number"
                   placeholder="0">

            <button class="aba-btn aba-btn-primary"
                    onclick="AungBusinessAcademy.calculateMargin()">
              Calculate
            </button>

            <div id="abaMarginResult"
                 style="margin-top:15px;font-weight:700;">
            </div>

          </div>

        </div>

      </div>
    `;
  }

  function calculateProfit() {
    const cost = Number(document.getElementById("abaCost").value || 0);
    const selling = Number(document.getElementById("abaSelling").value || 0);

    const profit = selling - cost;

    document.getElementById("abaProfitResult").innerHTML =
      "Profit = " + profit.toLocaleString();
  }

  function calculateMargin() {
    const cost = Number(
      document.getElementById("abaMarginCost").value || 0
    );

    const sales = Number(
      document.getElementById("abaMarginSales").value || 0
    );

    if (!sales) {
      document.getElementById("abaMarginResult").innerHTML =
        "Sales amount ထည့်ပါ။";
      return;
    }

    const margin = ((sales - cost) / sales) * 100;

    document.getElementById("abaMarginResult").innerHTML =
      "Margin = " + margin.toFixed(2) + "%";
  }

  /* =========================================================
     REPORTS
     ========================================================= */

  function renderReports() {
    const container = getMainContainer();

    container.innerHTML = `
      <div class="aba-page">

        <div class="aba-page-header">
          <h1>📈 Reports</h1>
          <p>Business Performance Overview</p>
        </div>

        <div class="aba-grid">

          <div class="aba-card">
            <h3>Sales</h3>
            <div class="aba-stat-number">0</div>
          </div>

          <div class="aba-card">
            <h3>Revenue</h3>
            <div class="aba-stat-number">0</div>
          </div>

          <div class="aba-card">
            <h3>Profit</h3>
            <div class="aba-stat-number">0</div>
          </div>

          <div class="aba-card">
            <h3>Growth</h3>
            <div class="aba-stat-number">0%</div>
          </div>

        </div>

      </div>
    `;
  }

  /* =========================================================
     AI BUSINESS COACH
     ========================================================= */

  function renderAICoach() {
    const container = getMainContainer();

    container.innerHTML = `
      <div class="aba-page">

        <div class="aba-page-header">
          <h1>🤖 AI Business Coach</h1>
          <p>Business Problem ကို စဉ်းစားဖြေရှင်းရန်</p>
        </div>

        <div class="aba-card">

          <h3>💡 Business Question</h3>

          <textarea id="abaAIQuestion"
                    class="aba-input"
                    rows="6"
                    placeholder="သင့် Business Problem ကို ရေးပါ..."></textarea>

          <button class="aba-btn aba-btn-primary"
                  onclick="AungBusinessAcademy.askCoach()">
            🤖 Get Coaching Advice
          </button>

          <div id="abaAIAnswer"
               style="margin-top:20px;line-height:1.8;">
          </div>

        </div>

      </div>
    `;
  }

  function askCoach() {
    const question =
      document.getElementById("abaAIQuestion").value.trim();

    const answer = document.getElementById("abaAIAnswer");

    if (!question) {
      answer.innerHTML = "မေးခွန်းတစ်ခု ရေးထည့်ပါ။";
      return;
    }

    answer.innerHTML = `
      <div class="lesson-note">
        <strong>Business Coach Thinking:</strong><br><br>

        1. Problem ကို တိတိကျကျ သတ်မှတ်ပါ။<br>
        2. Data နဲ့ အခြေအနေမှန်ကို စစ်ဆေးပါ။<br>
        3. Root Cause ကို ရှာပါ။<br>
        4. Solution 2–3 ခု စဉ်းစားပါ။<br>
        5. အကျိုးအမြတ်အကောင်းဆုံး Solution ကို ရွေးပါ။<br>
        6. Action Plan ချပြီး Result ကို ပြန်တိုင်းတာပါ။<br><br>

        <strong>သင့်မေးခွန်း:</strong><br>
        ${escapeHTML(question)}
      </div>
    `;
  }

  /* =========================================================
     AI TOOLS
     ========================================================= */

  function renderAITools() {
    const container = getMainContainer();

    container.innerHTML = `
      <div class="aba-page">

        <div class="aba-page-header">
          <h1>🛠 AI Tools</h1>
          <p>Business Productivity Tools</p>
        </div>

        <div class="aba-tool-grid">

          <div class="aba-tool">
            <h3>🎯 Sales Target Planner</h3>
            <p>Sales Target ကို Daily / Weekly အဖြစ် ခွဲတွက်ပါ။</p>
          </div>

          <div class="aba-tool">
            <h3>📊 Profit Calculator</h3>
            <p>Cost နဲ့ Selling Price ကနေ Profit တွက်ပါ။</p>
          </div>

          <div class="aba-tool">
            <h3>📈 Margin Calculator</h3>
            <p>Business Margin ကို တွက်ချက်ပါ။</p>
          </div>

        </div>

      </div>
    `;
  }

  /* =========================================================
     SETTINGS
     ========================================================= */

  function renderSettings() {
    const container = getMainContainer();

    container.innerHTML = `
      <div class="aba-page">

        <div class="aba-page-header">
          <h1>⚙️ Settings</h1>
          <p>Aung Business Academy Settings</p>
        </div>

        <div class="aba-card">

          <h3>👤 Profile</h3>

          <p style="margin-top:10px;">
            <strong>Name:</strong> Aung Zar Ni Win
          </p>

          <p>
            <strong>Role:</strong> Business Manager
          </p>

          <p>
            <strong>Version:</strong> V8.0 Professional
          </p>

        </div>

        <div class="aba-card" style="margin-top:20px;">

          <h3>🔄 Learning Progress</h3>

          <p style="color:#64748b;margin:10px 0;">
            Lesson Progress ကို ပြန်စချင်ရင် အောက်က Button ကိုနှိပ်ပါ။
          </p>

          <button class="aba-btn aba-btn-secondary"
                  onclick="AungBusinessAcademy.resetProgress()">
            Reset Lesson Progress
          </button>

        </div>

      </div>
    `;
  }

  /* =========================================================
     SECTION ROUTER
     ========================================================= */

  function showSection(section) {
    currentSection = section;

    switch (section) {
      case "dashboard":
        renderDashboard();
        break;

      case "courses":
      case "my-courses":
        renderCourses();
        break;

      case "lessons":
        renderLessons();
        break;

      case "progress":
      case "my-progress":
        renderProgress();
        break;

      case "sales":
      case "sales-manager":
        renderSalesManager();
        break;

      case "pricing":
      case "pricing-calculator":
        renderPricing();
        break;

      case "reports":
        renderReports();
        break;

      case "ai":
      case "ai-coach":
      case "ai-business-coach":
        renderAICoach();
        break;

      case "ai-tools":
        renderAITools();
        break;

      case "settings":
        renderSettings();
        break;

      default:
        renderDashboard();
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  /* =========================================================
     NAVIGATION
     ========================================================= */

  function setupNavigation() {

    document.addEventListener("click", function (event) {

      const element = event.target.closest(
        "[data-section], [data-page], [data-target], a, button"
      );

      if (!element) return;

      const section =
        element.getAttribute("data-section") ||
        element.getAttribute("data-page") ||
        element.getAttribute("data-target");

      if (section) {

        const cleanSection = section
          .replace("#", "")
          .replace("page-", "")
          .trim();

        if (
          [
            "dashboard",
            "courses",
            "my-courses",
            "lessons",
            "progress",
            "my-progress",
            "sales",
            "sales-manager",
            "pricing",
            "pricing-calculator",
            "reports",
            "ai",
            "ai-coach",
            "ai-business-coach",
            "ai-tools",
            "settings"
          ].includes(cleanSection)
        ) {
          event.preventDefault();
          showSection(cleanSection);
          return;
        }
      }

      const text = (element.textContent || "")
        .trim()
        .toLowerCase();

      let detected = null;

      if (text.includes("dashboard")) detected = "dashboard";
      else if (
        text.includes("my courses") ||
        text.includes("courses")
      ) detected = "courses";
      else if (text === "lessons" || text.includes("lesson")) detected = "lessons";
      else if (
        text.includes("my progress") ||
        text.includes("progress")
      ) detected = "progress";
      else if (
        text.includes("sales manager")
      ) detected = "sales-manager";
      else if (
        text.includes("pricing")
      ) detected = "pricing";
      else if (
        text.includes("reports")
      ) detected = "reports";
      else if (
        text.includes("business coach")
      ) detected = "ai-business-coach";
      else if (
        text.includes("ai tools")
      ) detected = "ai-tools";
      else if (
        text.includes("settings")
      ) detected = "settings";

      if (detected) {
        event.preventDefault();
        showSection(detected);
      }

    });
  }

  /* =========================================================
     INITIALIZE
     ========================================================= */

  function init() {

    injectStyles();

    setupNavigation();

    showSection("dashboard");

    console.log(
      APP_NAME +
      " loaded successfully. " +
      lessons.length +
      " original Business Lessons loaded."
    );
  }

  /* =========================================================
     PUBLIC API
     ========================================================= */

  window.AungBusinessAcademy = {

    lessons: lessons,

    showSection: showSection,

    openLesson: openLesson,

    markCompleted: function (id) {

      id = Number(id);

      if (!completedLessons.includes(id)) {
        completedLessons.push(id);
      }

      saveProgress();

      if (currentLesson && currentLesson.id === id) {
        openLesson(id);
      } else {
        renderProgress();
      }
    },

    markIncomplete: function (id) {

      id = Number(id);

      completedLessons =
        completedLessons.filter(item => item !== id);

      saveProgress();

      if (currentLesson && currentLesson.id === id) {
        openLesson(id);
      } else {
        renderProgress();
      }
    },

    calculateProfit: calculateProfit,

    calculateMargin: calculateMargin,

    askCoach: askCoach,

    resetProgress: function () {

      if (
        !confirm(
          "Lesson progress အားလုံးကို Reset လုပ်မလား?"
        )
      ) {
        return;
      }

      completedLessons = [];

      saveProgress();

      showSection("progress");
    },

    getProgress: function () {
      return {
        total: lessons.length,
        completed: getCompletedCount(),
        percentage: getProgress()
      };
    }
  };

  /* =========================================================
     START
     ========================================================= */

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
