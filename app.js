/* =========================================================
   AUNG BUSINESS ACADEMY
   FULL APP JS V8.3
   Navigation + Lessons + Sales + AI Coach + Settings
   ========================================================= */

(() => {
  "use strict";

  /* =======================================================
     DATA
     ======================================================= */

  const LESSONS = [
    {
      id: 1,
      category: "Business Basics",
      title: "Business Fundamentals",
      icon: "📘",
      desc: "စီးပွားရေးလုပ်ငန်းရဲ့ အခြေခံအယူအဆများ",
      body: `
        <h2>Business Fundamentals</h2>
        <p>Business ဆိုတာ Customer ရဲ့လိုအပ်ချက်ကို ဖြည့်ဆည်းပေးပြီး တန်ဖိုးဖန်တီးကာ အမြတ်ရရှိအောင် လုပ်ဆောင်တဲ့ စနစ်တစ်ခုဖြစ်ပါတယ်။</p>
        <h3>လေ့လာရန်</h3>
        <ol>
          <li>Customer ကို နားလည်ပါ။</li>
          <li>Customer Need ကို ရှာပါ။</li>
          <li>Value Proposition သတ်မှတ်ပါ။</li>
          <li>Revenue နဲ့ Cost ကို နားလည်ပါ။</li>
          <li>Profit ကို စောင့်ကြည့်ပါ။</li>
        </ol>
        <h3>Manager Application</h3>
        <p>Sales တိုးရုံမဟုတ်ဘဲ Customer, Cost, Margin နဲ့ Profit ကို တစ်ပြိုင်နက်ကြည့်ပါ။</p>
      `
    },
    {
      id: 2,
      category: "Business Basics",
      title: "Business Model",
      icon: "🏢",
      desc: "လုပ်ငန်းက ဘယ်လိုတန်ဖိုးဖန်တီးပြီး ငွေရှာသလဲ",
      body: `
        <h2>Business Model</h2>
        <p>Business Model ဆိုတာ Customer ကို ဘယ်လို Value ပေးပြီး Revenue ရရှိအောင် လုပ်ဆောင်သလဲဆိုတဲ့ စနစ်ဖြစ်ပါတယ်။</p>
        <h3>အဓိက ၅ ချက်</h3>
        <ol>
          <li>Customer</li>
          <li>Product / Service</li>
          <li>Distribution</li>
          <li>Revenue</li>
          <li>Cost</li>
        </ol>
      `
    },
    {
      id: 3,
      category: "Business Basics",
      title: "Value Proposition",
      icon: "💎",
      desc: "Customer က ကိုယ့် Product ကို ဘာကြောင့်ရွေးသင့်သလဲ",
      body: `
        <h2>Value Proposition</h2>
        <p>Customer က ကိုယ့် Product ကို ဘာကြောင့်ဝယ်သင့်သလဲဆိုတာ ရှင်းလင်းစွာဖော်ပြနိုင်ရပါမယ်။</p>
        <h3>လက်တွေ့နည်းလမ်း</h3>
        <ol>
          <li>Customer Problem ရှာပါ။</li>
          <li>Product က ဘယ်လိုဖြေရှင်းပေးလဲ သတ်မှတ်ပါ။</li>
          <li>Competitor နဲ့ ဘာကွာလဲ ရှာပါ။</li>
        </ol>
      `
    },
    {
      id: 4,
      category: "Business Basics",
      title: "Customer & Market",
      icon: "👥",
      desc: "Customer နဲ့ Market ကို နားလည်ခြင်း",
      body: `
        <h2>Customer & Market</h2>
        <p>Market ကို နားလည်မှ Sales Plan ကောင်းကောင်းချနိုင်ပါတယ်။</p>
        <ul>
          <li>Customer ဘယ်သူလဲ?</li>
          <li>ဘာဝယ်လဲ?</li>
          <li>ဘယ်အချိန်ဝယ်လဲ?</li>
          <li>ဘာကြောင့်ဝယ်လဲ?</li>
          <li>Competitor ဘယ်သူလဲ?</li>
        </ul>
      `
    },
    {
      id: 5,
      category: "Business Basics",
      title: "Business Planning",
      icon: "📝",
      desc: "လုပ်ငန်းအစီအစဉ်ချမှတ်ခြင်း",
      body: `
        <h2>Business Planning</h2>
        <p>Plan ဆိုတာ Goal ကို Action အဖြစ်ပြောင်းပေးတဲ့ Roadmap ဖြစ်ပါတယ်။</p>
        <ol>
          <li>Goal သတ်မှတ်ပါ။</li>
          <li>Current Situation သိပါ။</li>
          <li>Gap ရှာပါ။</li>
          <li>Action Plan ချပါ။</li>
          <li>KPI သတ်မှတ်ပါ။</li>
        </ol>
      `
    },

    {
      id: 6,
      category: "Strategy",
      title: "Strategic Thinking",
      icon: "🎯",
      desc: "ရေရှည်အတွက် မဟာဗျူဟာစဉ်းစားခြင်း",
      body: `
        <h2>Strategic Thinking</h2>
        <p>နေ့စဉ်အလုပ်ကိုသာ မကြည့်ဘဲ ရေရှည် Business Direction ကို စဉ်းစားရပါတယ်။</p>
        <ul>
          <li>ဘယ် Market ကို အာရုံစိုက်မလဲ?</li>
          <li>ဘယ် Customer ကို ဦးစားပေးမလဲ?</li>
          <li>Competitor ထက် ဘယ်လိုသာမလဲ?</li>
          <li>Resource ကို ဘယ်မှာသုံးမလဲ?</li>
        </ul>
      `
    },
    {
      id: 7,
      category: "Strategy",
      title: "SWOT Analysis",
      icon: "🔍",
      desc: "အားသာချက်၊ အားနည်းချက်၊ အခွင့်အရေး၊ ခြိမ်းခြောက်မှု",
      body: `
        <h2>SWOT Analysis</h2>
        <ul>
          <li><strong>Strength</strong> – အားသာချက်</li>
          <li><strong>Weakness</strong> – အားနည်းချက်</li>
          <li><strong>Opportunity</strong> – အခွင့်အရေး</li>
          <li><strong>Threat</strong> – ခြိမ်းခြောက်မှု</li>
        </ul>
        <p>Territory သို့မဟုတ် Business Unit တစ်ခုချင်းစီကို SWOT နဲ့ သုံးသပ်နိုင်ပါတယ်။</p>
      `
    },
    {
      id: 8,
      category: "Strategy",
      title: "Market Analysis",
      icon: "📊",
      desc: "ဈေးကွက်အခြေအနေ ခွဲခြမ်းစိတ်ဖြာခြင်း",
      body: `
        <h2>Market Analysis</h2>
        <p>Market Size, Growth, Customer Behavior နဲ့ Competitor Activity တွေကို စောင့်ကြည့်ရပါတယ်။</p>
        <ul>
          <li>Sales Trend</li>
          <li>Competitor Price</li>
          <li>Promotion</li>
          <li>Distribution</li>
          <li>Customer Feedback</li>
        </ul>
      `
    },
    {
      id: 9,
      category: "Strategy",
      title: "Competitor Analysis",
      icon: "⚔️",
      desc: "ပြိုင်ဘက်လုပ်ငန်းများကို လေ့လာခြင်း",
      body: `
        <h2>Competitor Analysis</h2>
        <p>Competitor ကို သိမှ ကိုယ့် Strategy ကို မှန်ကန်စွာ ပြင်ဆင်နိုင်ပါတယ်။</p>
        <ol>
          <li>Price</li>
          <li>Product</li>
          <li>Promotion</li>
          <li>Distribution</li>
          <li>Sales Team</li>
        </ol>
      `
    },
    {
      id: 10,
      category: "Strategy",
      title: "Market Expansion",
      icon: "🌍",
      desc: "ဈေးကွက်ချဲ့ထွင်ခြင်း",
      body: `
        <h2>Market Expansion</h2>
        <p>Market အသစ်ဝင်မယ်ဆိုရင် Customer Potential, Distribution နဲ့ Competition ကို အရင်စစ်ဆေးပါ။</p>
        <ol>
          <li>Potential Area ရှာပါ။</li>
          <li>Customer Mapping လုပ်ပါ။</li>
          <li>Channel စီစဉ်ပါ။</li>
          <li>Launch Target သတ်မှတ်ပါ။</li>
          <li>Weekly Review လုပ်ပါ။</li>
        </ol>
      `
    },

    {
      id: 11,
      category: "Sales",
      title: "Sales Fundamentals",
      icon: "💰",
      desc: "Sales ရဲ့ အခြေခံအယူအဆ",
      body: `
        <h2>Sales Fundamentals</h2>
        <p>Sales ဆိုတာ Product ရောင်းခြင်းတင်မဟုတ်ဘဲ Customer Need ကို နားလည်ပြီး Solution ပေးခြင်းဖြစ်ပါတယ်။</p>
        <ol>
          <li>Prospecting</li>
          <li>Need Analysis</li>
          <li>Presentation</li>
          <li>Objection Handling</li>
          <li>Closing</li>
          <li>Follow-up</li>
        </ol>
      `
    },
    {
      id: 12,
      category: "Sales",
      title: "Sales Target Planning",
      icon: "🎯",
      desc: "Sales Target ကို Plan ချနည်း",
      body: `
        <h2>Sales Target Planning</h2>
        <p>Target ကို တစ်လုံးတည်းမကြည့်ဘဲ Customer, Territory, Product နဲ့ Salesperson အလိုက် ခွဲချရပါတယ်။</p>
        <p><strong>Annual Target → Monthly → Weekly → Daily Action</strong></p>
        <ul>
          <li>Target</li>
          <li>Actual</li>
          <li>Gap</li>
          <li>Action</li>
          <li>Follow-up</li>
        </ul>
      `
    },
    {
      id: 13,
      category: "Sales",
      title: "Sales Forecasting",
      icon: "📈",
      desc: "အရောင်းခန့်မှန်းခြင်း",
      body: `
        <h2>Sales Forecasting</h2>
        <p>လာမယ့်ကာလမှာ ဘယ်လောက်ရောင်းနိုင်မလဲဆိုတာ Data အပေါ်အခြေခံပြီး ခန့်မှန်းခြင်းဖြစ်ပါတယ်။</p>
        <ul>
          <li>Previous Sales</li>
          <li>Current Trend</li>
          <li>Pipeline</li>
          <li>Market Condition</li>
          <li>Seasonality</li>
        </ul>
      `
    },
    {
      id: 14,
      category: "Sales",
      title: "Sales Performance Analysis",
      icon: "📊",
      desc: "Sales Performance ကို ခွဲခြမ်းစိတ်ဖြာခြင်း",
      body: `
        <h2>Sales Performance Analysis</h2>
        <p>Result ကိုသာ မကြည့်ဘဲ Result ဖြစ်လာတဲ့ Cause ကိုပါ ရှာရပါတယ်။</p>
        <ul>
          <li>Target vs Actual</li>
          <li>Growth %</li>
          <li>Achievement %</li>
          <li>Product Mix</li>
          <li>Territory Performance</li>
        </ul>
      `
    },
    {
      id: 15,
      category: "Sales",
      title: "Territory Management",
      icon: "🗺️",
      desc: "Sales Territory ကို စီမံခန့်ခွဲခြင်း",
      body: `
        <h2>Territory Management</h2>
        <ol>
          <li>Customer Mapping</li>
          <li>Outlet Classification</li>
          <li>Route Planning</li>
          <li>Visit Frequency</li>
          <li>Performance Review</li>
        </ol>
      `
    },
    {
      id: 16,
      category: "Sales",
      title: "Customer Management",
      icon: "🤝",
      desc: "Customer Relationship ကို စီမံခန့်ခွဲခြင်း",
      body: `
        <h2>Customer Management</h2>
        <p>Customer တစ်ယောက်ချင်းစီရဲ့ Value, Potential နဲ့ Purchase Pattern ကို သိထားရပါတယ်။</p>
        <ul>
          <li>Customer Classification</li>
          <li>Regular Visit</li>
          <li>Need Identification</li>
          <li>Problem Solving</li>
          <li>Follow-up</li>
        </ul>
      `
    },
    {
      id: 17,
      category: "Sales",
      title: "Key Account Management",
      icon: "⭐",
      desc: "အရေးကြီး Customer များကို စီမံခန့်ခွဲခြင်း",
      body: `
        <h2>Key Account Management</h2>
        <ol>
          <li>Account Mapping</li>
          <li>Decision Maker Identification</li>
          <li>Joint Business Plan</li>
          <li>Negotiation</li>
          <li>Performance Review</li>
        </ol>
      `
    },
    {
      id: 18,
      category: "Sales",
      title: "Distributor Management",
      icon: "🚚",
      desc: "Distributor ကို ထိရောက်စွာ စီမံခန့်ခွဲခြင်း",
      body: `
        <h2>Distributor Management</h2>
        <p>Sales, Stock, Collection, Coverage နဲ့ Execution ကို တစ်ပြိုင်နက်ကြည့်ရပါတယ်။</p>
        <ul>
          <li>Sales</li>
          <li>Stock</li>
          <li>Coverage</li>
          <li>Collection</li>
          <li>Active Outlets</li>
        </ul>
      `
    },
    {
      id: 19,
      category: "Sales",
      title: "Negotiation",
      icon: "🤝",
      desc: "အောင်မြင်တဲ့ Negotiation နည်းလမ်း",
      body: `
        <h2>Negotiation</h2>
        <p>နှစ်ဖက်စလုံးအတွက် Value ရအောင် သဘောတူညီမှုရယူခြင်းဖြစ်ပါတယ်။</p>
        <ol>
          <li>Prepare</li>
          <li>Understand Needs</li>
          <li>Present Value</li>
          <li>Handle Objections</li>
          <li>Close Agreement</li>
        </ol>
      `
    },
    {
      id: 20,
      category: "Sales",
      title: "Sales Coaching",
      icon: "🏆",
      desc: "Sales Team ကို Coaching လုပ်နည်း",
      body: `
        <h2>Sales Coaching</h2>
        <p>Manager က ကိုယ်တိုင်လုပ်ပေးတာထက် Team ကို ကိုယ်တိုင်လုပ်နိုင်အောင် Coaching ပေးရပါတယ်။</p>
        <ol>
          <li>Observe</li>
          <li>Identify Gap</li>
          <li>Explain</li>
          <li>Practice</li>
          <li>Follow-up</li>
        </ol>
      `
    },

    {
      id: 21,
      category: "Marketing",
      title: "Marketing Basics",
      icon: "📣",
      desc: "Marketing ရဲ့ အခြေခံ",
      body: `
        <h2>Marketing Basics</h2>
        <p>Marketing ဆိုတာ Customer ကို သိအောင်၊ စိတ်ဝင်စားအောင်၊ ဝယ်ယူအောင် တည်ဆောက်တဲ့ လုပ်ငန်းစဉ်ဖြစ်ပါတယ်။</p>
        <p><strong>Product + Price + Place + Promotion</strong></p>
      `
    },
    {
      id: 22,
      category: "Marketing",
      title: "Brand Basics",
      icon: "🏷️",
      desc: "Brand တည်ဆောက်ခြင်း",
      body: `
        <h2>Brand Basics</h2>
        <p>Brand ဆိုတာ Logo တစ်ခုတည်းမဟုတ်ဘဲ Customer ရဲ့ စိတ်ထဲမှာရှိတဲ့ Perception ဖြစ်ပါတယ်။</p>
        <ul>
          <li>Brand Promise</li>
          <li>Brand Identity</li>
          <li>Customer Experience</li>
          <li>Consistency</li>
        </ul>
      `
    },
    {
      id: 23,
      category: "Marketing",
      title: "Customer Segmentation",
      icon: "👥",
      desc: "Customer များကို အုပ်စုခွဲခြင်း",
      body: `
        <h2>Customer Segmentation</h2>
        <ul>
          <li>Location</li>
          <li>Purchase Volume</li>
          <li>Business Type</li>
          <li>Customer Value</li>
          <li>Buying Behavior</li>
        </ul>
      `
    },
    {
      id: 24,
      category: "Marketing",
      title: "Promotion Planning",
      icon: "🎁",
      desc: "Promotion Campaign စီမံခြင်း",
      body: `
        <h2>Promotion Planning</h2>
        <ol>
          <li>Objective</li>
          <li>Target Customer</li>
          <li>Offer</li>
          <li>Communication</li>
          <li>Duration</li>
          <li>Measurement</li>
        </ol>
      `
    },

    {
      id: 25,
      category: "People",
      title: "Leadership",
      icon: "👑",
      desc: "ထိရောက်တဲ့ Leadership",
      body: `
        <h2>Leadership</h2>
        <p>Leadership ဆိုတာ လူတွေကို အမိန့်ပေးတာထက် Direction ပေးပြီး Result ရအောင် ဦးဆောင်ခြင်းဖြစ်ပါတယ်။</p>
        <ul>
          <li>Clear Expectations</li>
          <li>Regular Feedback</li>
          <li>Coaching</li>
          <li>Empowerment</li>
          <li>Accountability</li>
        </ul>
      `
    },
    {
      id: 26,
      category: "People",
      title: "Effective Communication",
      icon: "💬",
      desc: "ထိရောက်တဲ့ ဆက်သွယ်ပြောဆိုမှု",
      body: `
        <h2>Effective Communication</h2>
        <ol>
          <li>နားထောင်ပါ။</li>
          <li>ရှင်းလင်းစွာ ပြောပါ။</li>
          <li>Expectation သတ်မှတ်ပါ။</li>
          <li>Feedback ပေးပါ။</li>
          <li>နားလည်မှုကို Confirm လုပ်ပါ။</li>
        </ol>
      `
    },
    {
      id: 27,
      category: "People",
      title: "Coaching & Development",
      icon: "🌱",
      desc: "Team Member တွေကို ဖွံ့ဖြိုးတိုးတက်အောင်လုပ်ခြင်း",
      body: `
        <h2>Coaching & Development</h2>
        <ul>
          <li>ဘာကောင်းနေသလဲ?</li>
          <li>ဘာကိုတိုးတက်ဖို့လိုသလဲ?</li>
          <li>ဘာကြောင့်ဖြစ်နေလဲ?</li>
          <li>ဘယ်လို Action ယူမလဲ?</li>
        </ul>
      `
    },
    {
      id: 28,
      category: "People",
      title: "Performance Management",
      icon: "📋",
      desc: "ဝန်ထမ်း Performance စီမံခန့်ခွဲခြင်း",
      body: `
        <h2>Performance Management</h2>
        <ol>
          <li>Set KPI</li>
          <li>Monitor</li>
          <li>Review</li>
          <li>Coach</li>
          <li>Improve</li>
        </ol>
      `
    },

    {
      id: 29,
      category: "Finance",
      title: "Profit & Margin",
      icon: "💵",
      desc: "အမြတ်နဲ့ Margin ကို နားလည်ခြင်း",
      body: `
        <h2>Profit & Margin</h2>
        <p><strong>Gross Profit = Sales - Cost</strong></p>
        <p><strong>Margin % = Gross Profit ÷ Sales × 100</strong></p>
        <p>Sales တိုးတာကောင်းပေမယ့် Margin ကျသွားရင် Business Quality ကျနိုင်ပါတယ်။</p>
      `
    },
    {
      id: 30,
      category: "Finance",
      title: "Break-even & P&L",
      icon: "📊",
      desc: "Break-even နဲ့ Profit & Loss",
      body: `
        <h2>Break-even & P&L</h2>
        <p><strong>Break-even Units = Fixed Cost ÷ Contribution per Unit</strong></p>
        <p>Sales Volume တစ်ခုတည်းမကြည့်ဘဲ Cost နဲ့ Contribution ကိုပါ ထည့်တွက်ရပါတယ်။</p>
      `
    }
  ];

  /* =======================================================
     STORAGE
     ======================================================= */

  const completedKey = "aba_completed_lessons";
  const salesKey = "aba_sales_data";
  const settingsKey = "aba_settings";

  function getCompleted() {
    try {
      return JSON.parse(localStorage.getItem(completedKey) || "[]");
    } catch {
      return [];
    }
  }

  function saveCompleted(list) {
    localStorage.setItem(completedKey, JSON.stringify(list));
  }

  function getSales() {
    try {
      return JSON.parse(localStorage.getItem(salesKey) || "{}");
    } catch {
      return {};
    }
  }

  function saveSales(data) {
    localStorage.setItem(salesKey, JSON.stringify(data));
  }

  function getSettings() {
    try {
      return JSON.parse(localStorage.getItem(settingsKey) || "{}");
    } catch {
      return {};
    }
  }

  function saveSettings(data) {
    localStorage.setItem(settingsKey, JSON.stringify(data));
  }

  /* =======================================================
     UTILITIES
     ======================================================= */

  function $(selector) {
    return document.querySelector(selector);
  }

  function $all(selector) {
    return Array.from(document.querySelectorAll(selector));
  }

  function escapeHTML(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function showToast(message) {
    let toast = $("#toast");

    if (!toast) {
      toast = document.createElement("div");
      toast.id = "abaDynamicToast";
      toast.style.cssText = `
        position:fixed;
        right:20px;
        bottom:25px;
        z-index:99999;
        background:#172033;
        color:#fff;
        padding:13px 18px;
        border-radius:12px;
        box-shadow:0 10px 30px rgba(0,0,0,.2);
        font-weight:700;
        transition:.25s;
      `;
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.style.opacity = "1";

    clearTimeout(window.abaToastTimer);

    window.abaToastTimer = setTimeout(() => {
      toast.style.opacity = "0";
    }, 2500);
  }

  /* =======================================================
     NAVIGATION
     ======================================================= */

  const pageNames = [
    "dashboard",
    "courses",
    "lessons",
    "progress",
    "sales",
    "calculator",
    "reports",
    "ai",
    "tools",
    "settings"
  ];

  function getPage(name) {
    return document.getElementById(name + "Page");
  }

  function navigate(pageName) {
    const cleanName = String(pageName || "")
      .replace("Page", "")
      .trim()
      .toLowerCase();

    const target =
      pageNames.includes(cleanName)
        ? cleanName
        : "dashboard";

    pageNames.forEach(name => {
      const page = getPage(name);

      if (page) {
        page.style.display =
          name === target ? "block" : "none";
      }
    });

    $all("[data-page]").forEach(item => {
      const itemPage =
        String(item.dataset.page || "")
          .replace("Page", "")
          .toLowerCase();

      item.classList.toggle(
        "active",
        itemPage === target
      );
    });

    if (target === "lessons") {
      buildLessonsPage(true);
    }

    if (target === "sales") {
      buildSalesPage(true);
    }

    if (target === "ai") {
      buildAIPage(true);
    }

    if (target === "settings") {
      buildSettingsPage(true);
    }

    if (target === "progress") {
      updateProgressPage();
    }

    closeMobileMenu();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  window.navigate = navigate;
  window.goDashboard = () => navigate("dashboard");

  /* =======================================================
     NAVIGATION BINDING
     ======================================================= */

  function bindNavigation() {
    $all("[data-page]").forEach(item => {

      item.addEventListener("click", event => {
        event.preventDefault();

        const page =
          item.dataset.page;

        if (page) {
          navigate(page);
        }
      });

    });

    /*
     * Compatibility with older buttons.
     */

    $all(".nav-item").forEach(item => {

      if (item.dataset.page) return;

      const text =
        item.textContent.trim().toLowerCase();

      const map = {
        "dashboard": "dashboard",
        "my courses": "courses",
        "lessons": "lessons",
        "my progress": "progress",
        "sales manager": "sales",
        "pricing calculator": "calculator",
        "reports": "reports",
        "ai business coach": "ai",
        "ai tools": "tools",
        "settings": "settings"
      };

      const page = map[text];

      if (!page) return;

      item.addEventListener("click", event => {
        event.preventDefault();
        navigate(page);
      });

    });
  }

  /* =======================================================
     LESSONS
     ======================================================= */

  function buildLessonsPage(force = false) {
    const page = getPage("lessons");

    if (!page) return;

    if (!force && page.dataset.abaBuilt === "true") {
      renderLessons();
      return;
    }

    page.innerHTML = `
      <div class="aba-module">

        <div class="aba-module-header">
          <div>
            <div class="aba-label">LEARNING CENTER</div>
            <h1>Business Lessons</h1>
            <p>
              အကြောင်းအရာကို နားလည်ရုံမဟုတ်ဘဲ
              လက်တွေ့အသုံးချနိုင်အောင် လေ့လာပါ။
            </p>
          </div>

          <div class="aba-count-box">
            <strong>${LESSONS.length}</strong>
            <span>Lessons</span>
          </div>
        </div>

        <div class="aba-card aba-lesson-toolbar">

          <input
            id="abaLessonSearch"
            type="search"
            placeholder="🔎 သင်ခန်းစာရှာရန်..."
          >

          <div class="aba-filters">

            <button class="aba-filter active"
                    data-lesson-category="All">
              All
            </button>

            <button class="aba-filter"
                    data-lesson-category="Business Basics">
              Business
            </button>

            <button class="aba-filter"
                    data-lesson-category="Sales">
              Sales
            </button>

            <button class="aba-filter"
                    data-lesson-category="Strategy">
              Strategy
            </button>

            <button class="aba-filter"
                    data-lesson-category="Marketing">
              Marketing
            </button>

            <button class="aba-filter"
                    data-lesson-category="People">
              People
            </button>

            <button class="aba-filter"
                    data-lesson-category="Finance">
              Finance
            </button>

          </div>

        </div>

        <div id="abaLessonInfo"
             class="aba-muted"
             style="margin:16px 0;">
        </div>

        <div id="abaLessonGrid"
             class="aba-grid">
        </div>

      </div>
    `;

    page.dataset.abaBuilt = "true";

    bindLessonControls();
    renderLessons();
  }

  function bindLessonControls() {

    $all("[data-lesson-category]").forEach(button => {

      button.addEventListener("click", () => {

        $all("[data-lesson-category]")
          .forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        renderLessons();
      });

    });

    const search = $("#abaLessonSearch");

    if (search) {
      search.addEventListener("input", renderLessons);
    }
  }

  function renderLessons() {

    const grid = $("#abaLessonGrid");

    if (!grid) return;

    const active =
      $(".aba-filter.active[data-lesson-category]");

    const category =
      active?.dataset.lessonCategory || "All";

    const search =
      ($("#abaLessonSearch")?.value || "")
        .trim()
        .toLowerCase();

    const filtered = LESSONS.filter(lesson => {

      const categoryOK =
        category === "All" ||
        lesson.category === category;

      const searchOK =
        !search ||
        lesson.title.toLowerCase().includes(search) ||
        lesson.desc.toLowerCase().includes(search) ||
        lesson.category.toLowerCase().includes(search);

      return categoryOK && searchOK;
    });

    grid.innerHTML = "";

    filtered.forEach(lesson => {

      const completed =
        getCompleted().includes(lesson.id);

      const card =
        document.createElement("div");

      card.className = "aba-lesson-card";

      card.innerHTML = `
        <div class="aba-lesson-icon">
          ${lesson.icon}
        </div>

        <div class="aba-small-label">
          LESSON ${String(lesson.id).padStart(2, "0")}
        </div>

        <div class="aba-category">
          ${escapeHTML(lesson.category)}
        </div>

        <h3>${escapeHTML(lesson.title)}</h3>

        <p>${escapeHTML(lesson.desc)}</p>

        <div class="aba-lesson-actions">

          <button
            class="aba-primary-btn"
            data-open-lesson="${lesson.id}">
            ${completed
              ? "✓ ပြန်လေ့လာမည်"
              : "သင်ခန်းစာဖတ်မည် →"}
          </button>

          ${
            completed
              ? `<span class="aba-done">✓ Completed</span>`
              : ""
          }

        </div>
      `;

      grid.appendChild(card);
    });

    const info = $("#abaLessonInfo");

    if (info) {
      info.textContent =
        `Showing ${filtered.length} of ${LESSONS.length} lessons`;
    }

    $all("[data-open-lesson]").forEach(button => {

      button.addEventListener("click", () => {

        openLesson(
          Number(button.dataset.openLesson)
        );

      });

    });
  }

  function openLesson(id) {

    const lesson =
      LESSONS.find(item => item.id === id);

    if (!lesson) return;

    const completed =
      getCompleted().includes(id);

    openModal(`
      <div class="aba-detail">

        <div style="font-size:45px;">
          ${lesson.icon}
        </div>

        <div class="aba-category">
          ${escapeHTML(lesson.category)}
        </div>

        ${lesson.body}

        <hr>

        <button
          class="aba-primary-btn"
          id="abaCompleteLesson">
          ${completed
            ? "✓ Completed"
            : "✓ Complete Lesson"}
        </button>

      </div>
    `);

    const button =
      $("#abaCompleteLesson");

    if (button) {

      button.addEventListener("click", () => {

        const list = getCompleted();

        if (!list.includes(id)) {
          list.push(id);
          saveCompleted(list);
        }

        button.textContent = "✓ Completed";

        renderLessons();
        updateProgressPage();

        showToast("Lesson completed!");

      });

    }
  }

  /* =======================================================
     SALES MANAGER
     ======================================================= */

  function buildSalesPage(force = false) {

    const page = getPage("sales");

    if (!page) return;

    if (!force && page.dataset.abaBuilt === "true") {
      return;
    }

    page.innerHTML = `
      <div class="aba-module">

        <div class="aba-module-header">
          <div>
            <div class="aba-label">SALES MANAGEMENT</div>
            <h1>Sales Manager</h1>
            <p>
              Sales Target, Performance နဲ့ Team Execution ကို
              တစ်နေရာတည်းမှာ စီမံပါ။
            </p>
          </div>
        </div>

        <div class="aba-grid aba-kpi-grid">

          <div class="aba-stat-card">
            <span>Monthly Target</span>
            <strong id="salesTargetDisplay">0</strong>
          </div>

          <div class="aba-stat-card">
            <span>Actual Sales</span>
            <strong id="salesActualDisplay">0</strong>
          </div>

          <div class="aba-stat-card">
            <span>Achievement</span>
            <strong id="salesAchievementDisplay">0%</strong>
          </div>

          <div class="aba-stat-card">
            <span>Gap</span>
            <strong id="salesGapDisplay">0</strong>
          </div>

        </div>

        <div class="aba-grid">

          <div class="aba-card">

            <h3>Sales Performance</h3>

            <label>Monthly Target</label>
            <input
              id="salesTargetInput"
              type="number"
              placeholder="ဥပမာ 25000000">

            <label>Actual Sales</label>
            <input
              id="salesActualInput"
              type="number"
              placeholder="ဥပမာ 20000000">

            <button
              class="aba-primary-btn"
              id="saveSalesBtn">
              Save Performance
            </button>

          </div>

          <div class="aba-card">

            <h3>Manager Action Plan</h3>

            <textarea
              id="salesActionInput"
              rows="7"
              placeholder="ဒီအပတ်မှာ Team အတွက် ဘာ Action လုပ်မလဲ?"></textarea>

            <button
              class="aba-primary-btn"
              id="saveSalesActionBtn">
              Save Action Plan
            </button>

            <div id="salesActionDisplay"
                 class="aba-saved-text">
            </div>

          </div>

        </div>

      </div>
    `;

    page.dataset.abaBuilt = "true";

    const data = getSales();

    $("#salesTargetInput").value =
      data.target || "";

    $("#salesActualInput").value =
      data.actual || "";

    $("#salesActionInput").value =
      data.action || "";

    updateSalesDisplay();

    $("#saveSalesBtn")?.addEventListener("click", () => {

      const target =
        Number($("#salesTargetInput").value || 0);

      const actual =
        Number($("#salesActualInput").value || 0);

      const old =
        getSales();

      saveSales({
        ...old,
        target,
        actual
      });

      updateSalesDisplay();

      showToast("Sales performance saved!");

    });

    $("#saveSalesActionBtn")?.addEventListener("click", () => {

      const data = getSales();

      data.action =
        $("#salesActionInput").value;

      saveSales(data);

      updateSalesDisplay();

      showToast("Action plan saved!");

    });
  }

  function updateSalesDisplay() {

    const data = getSales();

    const target =
      Number(data.target || 0);

    const actual =
      Number(data.actual || 0);

    const achievement =
      target > 0
        ? (actual / target) * 100
        : 0;

    const gap =
      target - actual;

    if ($("#salesTargetDisplay"))
      $("#salesTargetDisplay").textContent =
        formatNumber(target);

    if ($("#salesActualDisplay"))
      $("#salesActualDisplay").textContent =
        formatNumber(actual);

    if ($("#salesAchievementDisplay"))
      $("#salesAchievementDisplay").textContent =
        achievement.toFixed(1) + "%";

    if ($("#salesGapDisplay"))
      $("#salesGapDisplay").textContent =
        formatNumber(gap);

    if ($("#salesActionDisplay"))
      $("#salesActionDisplay").textContent =
        data.action || "";
  }

  function formatNumber(number) {
    return Number(number || 0)
      .toLocaleString("en-US");
  }

  /* =======================================================
     AI BUSINESS COACH
     ======================================================= */

  function buildAIPage(force = false) {

    const page = getPage("ai");

    if (!page) return;

    if (!force && page.dataset.abaBuilt === "true") {
      return;
    }

    page.innerHTML = `
      <div class="aba-module">

        <div class="aba-module-header">
          <div>
            <div class="aba-label">AI BUSINESS COACH</div>
            <h1>AI Business Coach</h1>
            <p>
              Sales, Business, Team Management နဲ့
              Problem Solving အတွက် AI Coach အဖြစ် အသုံးပြုပါ။
            </p>
          </div>
        </div>

        <div class="aba-card aba-ai-card">

          <div id="abaChatMessages"
               class="aba-chat-messages">

            <div class="aba-message assistant">
              <strong>AI Business Coach</strong>
              <p>
                မင်္ဂလာပါ။ Business, Sales, Leadership,
                Customer Management နဲ့ Strategy
                အကြောင်း မေးနိုင်ပါတယ်။
              </p>
            </div>

          </div>

          <div class="aba-ai-input">

            <textarea
              id="abaAIInput"
              rows="3"
              placeholder="ဥပမာ - Sales Target မပြည့်ရင် ဘာလုပ်ရမလဲ?"></textarea>

            <button
              class="aba-primary-btn"
              id="abaAISend">
              Ask Coach
            </button>

          </div>

        </div>

      </div>
    `;

    page.dataset.abaBuilt = "true";

    $("#abaAISend")?.addEventListener(
      "click",
      sendAIQuestion
    );

    $("#abaAIInput")?.addEventListener(
      "keydown",
      event => {

        if (
          event.key === "Enter" &&
          !event.shiftKey
        ) {
          event.preventDefault();
          sendAIQuestion();
        }

      }
    );
  }

  function sendAIQuestion() {

    const input =
      $("#abaAIInput");

    if (!input) return;

    const question =
      input.value.trim();

    if (!question) return;

    addAIMessage("user", question);

    input.value = "";

    setTimeout(() => {

      addAIMessage(
        "assistant",
        getCoachResponse(question)
      );

    }, 300);
  }

  function addAIMessage(type, text) {

    const box =
      $("#abaChatMessages");

    if (!box) return;

    const message =
      document.createElement("div");

    message.className =
      "aba-message " + type;

    message.innerHTML = `
      <strong>
        ${
          type === "user"
            ? "You"
            : "AI Business Coach"
        }
      </strong>

      <p>${escapeHTML(text)}</p>
    `;

    box.appendChild(message);

    box.scrollTop =
      box.scrollHeight;
  }

  function getCoachResponse(question) {

    const q =
      question.toLowerCase();

    if (
      q.includes("target") ||
      q.includes("sales")
    ) {
      return `
Sales Target မပြည့်တဲ့အခါ Result ကိုပဲကြည့်မနေဘဲ
Target Gap ရဲ့အကြောင်းရင်းကို ခွဲခြမ်းစိတ်ဖြာပါ။

၁။ Target vs Actual ကို စစ်ပါ။
၂။ Territory / Customer အလိုက် Gap ရှာပါ။
၃။ Product / Channel Performance စစ်ပါ။
၄။ Team Member တစ်ယောက်ချင်းစီရဲ့ Performance စစ်ပါ။
၅။ Action Plan ချပါ။
၆။ Daily / Weekly Follow-up လုပ်ပါ။

Manager KPI အနေနဲ့ Achievement %, Growth %, Coverage,
Active Customer နဲ့ Productivity ကို စောင့်ကြည့်ပါ။
      `.trim();
    }

    if (
      q.includes("team") ||
      q.includes("staff") ||
      q.includes("employee")
    ) {
      return `
Team Performance တိုးတက်အောင်လုပ်ဖို့
Micromanagement ထက် Coaching & Empowerment ကို အသုံးပြုပါ။

၁။ Clear Expectation ပေးပါ။
၂။ KPI သတ်မှတ်ပါ။
၃။ Field Performance ကို Observe လုပ်ပါ။
၄။ Gap ကို Feedback ပေးပါ။
၅။ Action Plan ပေးပါ။
၆။ Follow-up လုပ်ပါ။

Team Member ကို ပြဿနာပြောတဲ့အခါ
"ဘာဖြစ်လို့မလုပ်နိုင်တာလဲ?" ထက်
"ဘယ်အခက်အခဲရှိလဲ၊ ဘယ်လိုကူညီပေးရမလဲ?"
လို့မေးတာ ပိုထိရောက်ပါတယ်။
      `.trim();
    }

    if (
      q.includes("customer") ||
      q.includes("client")
    ) {
      return `
Customer Management မှာ Customer ကို
အရောင်းပမာဏတစ်ခုတည်းနဲ့ မကြည့်ပါနဲ့။

Customer Value, Potential, Purchase Frequency,
Margin, Relationship နဲ့ Future Opportunity ကို
အတူတကွသုံးသပ်ပါ။

အရေးကြီး Customer တွေအတွက်
Customer Plan + Visit Plan + Follow-up Plan
သီးခြားထားပါ။
      `.trim();
    }

    if (
      q.includes("profit") ||
      q.includes("margin")
    ) {
      return `
Profit တိုးဖို့ Sales တိုးတာတစ်ခုတည်း မလုံလောက်ပါဘူး။

Gross Profit = Sales - Cost

Margin % = Gross Profit ÷ Sales × 100

ဒါကြောင့် Sales Manager အနေနဲ့
Volume + Price + Product Mix + Discount + Cost
အားလုံးကို ကြည့်ရပါမယ်။
      `.trim();
    }

    return `
သင့်မေးခွန်းကို Manager Perspective နဲ့ ဖြေရှင်းမယ်ဆိုရင်—

၁။ Problem ကို တိတိကျကျ သတ်မှတ်ပါ။
၂။ Data နဲ့ Current Situation ကို စစ်ပါ။
၃။ Root Cause ရှာပါ။
၄။ Solution ၂ ခုမှ ၃ ခု စဉ်းစားပါ။
၅။ အကောင်းဆုံး Action Plan ရွေးပါ။
၆။ KPI သတ်မှတ်ပြီး Follow-up လုပ်ပါ။

Business Manager တစ်ယောက်အနေနဲ့
Problem → Root Cause → Action → KPI → Review
ဆိုတဲ့ Flow နဲ့ စဉ်းစားပါ။
    `.trim();
  }

  /* =======================================================
     SETTINGS
     ======================================================= */

  function buildSettingsPage(force = false) {

    const page = getPage("settings");

    if (!page) return;

    if (!force && page.dataset.abaBuilt === "true") {
      return;
    }

    const settings =
      getSettings();

    page.innerHTML = `
      <div class="aba-module">

        <div class="aba-module-header">
          <div>
            <div class="aba-label">ACCOUNT SETTINGS</div>
            <h1>Settings</h1>
            <p>
              သင့် Academy Profile နဲ့ Learning Preferences
              ကို စီမံပါ။
            </p>
          </div>
        </div>

        <div class="aba-grid">

          <div class="aba-card">

            <h3>Profile</h3>

            <label>Name</label>

            <input
              id="abaSettingName"
              value="${escapeHTML(
                settings.name || "Aung Zar Ni Win"
              )}">

            <label>Role</label>

            <input
              id="abaSettingRole"
              value="${escapeHTML(
                settings.role || "Business Manager"
              )}">

            <button
              id="abaSaveSettings"
              class="aba-primary-btn">
              Save Settings
            </button>

          </div>

          <div class="aba-card">

            <h3>Learning</h3>

            <div class="aba-setting-row">
              <span>Daily Learning Goal</span>

              <select id="abaDailyGoal">

                <option value="15">15 Minutes</option>
                <option value="30">30 Minutes</option>
                <option value="45">45 Minutes</option>
                <option value="60">60 Minutes</option>

              </select>

            </div>

            <div class="aba-setting-row">
              <span>Show Completed Lessons</span>

              <input
                type="checkbox"
                id="abaShowCompleted"
                ${
                  settings.showCompleted !== false
                    ? "checked"
                    : ""
                }>
            </div>

          </div>

        </div>

      </div>
    `;

    page.dataset.abaBuilt = "true";

    $("#abaDailyGoal").value =
      settings.dailyGoal || "30";

    $("#abaSaveSettings")?.addEventListener(
      "click",
      () => {

        saveSettings({
          name:
            $("#abaSettingName").value,

          role:
            $("#abaSettingRole").value,

          dailyGoal:
            $("#abaDailyGoal").value,

          showCompleted:
            $("#abaShowCompleted").checked
        });

        showToast("Settings saved!");

      }
    );
  }

  /* =======================================================
     PROGRESS
     ======================================================= */

  function updateProgressPage() {

    const page =
      getPage("progress");

    if (!page) return;

    const completed =
      getCompleted();

    const percent =
      LESSONS.length
        ? Math.round(
            (completed.length / LESSONS.length) * 100
          )
        : 0;

    const percentElement =
      page.querySelector(
        "#abaProgressPercent"
      );

    const completedElement =
      page.querySelector(
        "#abaCompletedLessons"
      );

    if (percentElement)
      percentElement.textContent =
        percent + "%";

    if (completedElement)
      completedElement.textContent =
        completed.length;
  }

  /* =======================================================
     MODAL
     ======================================================= */

  function openModal(content) {

    const modal =
      $("#modalOverlay");

    const body =
      $("#modalBody");

    if (modal && body) {

      body.innerHTML =
        content;

      modal.classList.add("active");

      return;
    }

    /*
     * Fallback modal if old HTML doesn't
     * contain modalOverlay.
     */

    let fallback =
      $("#abaFallbackModal");

    if (!fallback) {

      fallback =
        document.createElement("div");

      fallback.id =
        "abaFallbackModal";

      fallback.innerHTML = `
        <div class="aba-fallback-inner">

          <button
            id="abaFallbackClose">
            ×
          </button>

          <div id="abaFallbackBody"></div>

        </div>
      `;

      document.body.appendChild(fallback);

      $("#abaFallbackClose")
        ?.addEventListener(
          "click",
          () => fallback.remove()
        );
    }

    $("#abaFallbackBody").innerHTML =
      content;
  }

  function bindModal() {

    $("#modalClose")?.addEventListener(
      "click",
      () => {
        $("#modalOverlay")?.classList.remove("active");
      }
    );

    $("#modalOverlay")?.addEventListener(
      "click",
      event => {

        if (
          event.target ===
          $("#modalOverlay")
        ) {
          $("#modalOverlay").classList.remove(
            "active"
          );
        }

      }
    );
  }

  /* =======================================================
     MOBILE MENU
     ======================================================= */

  function closeMobileMenu() {

    $("#sidebar")?.classList.remove("open");
    $("#sidebarOverlay")?.classList.remove("active");

  }

  function bindMobileMenu() {

    $("#mobileMenu")?.addEventListener(
      "click",
      () => {

        $("#sidebar")?.classList.toggle("open");

        $("#sidebarOverlay")
          ?.classList.toggle("active");

      }
    );

    $("#sidebarOverlay")?.addEventListener(
      "click",
      closeMobileMenu
    );
  }

  /* =======================================================
     SEARCH
     ======================================================= */

  function bindGlobalSearch() {

    const search =
      $("#globalSearch");

    if (!search) return;

    search.addEventListener(
      "keydown",
      event => {

        if (event.key !== "Enter") return;

        const value =
          search.value.trim();

        if (!value) return;

        navigate("lessons");

        setTimeout(() => {

          const lessonSearch =
            $("#abaLessonSearch");

          if (lessonSearch) {

            lessonSearch.value =
              value;

            renderLessons();

          }

        }, 100);

      }
    );
  }

  /* =======================================================
     INJECT COMPATIBILITY CSS
     ======================================================= */

  function injectCompatibilityCSS() {

    if ($("#abaV83CSS")) return;

    const style =
      document.createElement("style");

    style.id = "abaV83CSS";

    style.textContent = `

      .aba-module {
        width:100%;
        padding:5px 0 60px;
      }

      .aba-module-header {
        display:flex;
        justify-content:space-between;
        align-items:center;
        gap:20px;
        margin-bottom:25px;
      }

      .aba-label {
        color:#6d4aff;
        font-size:12px;
        font-weight:800;
        letter-spacing:1.5px;
      }

      .aba-module-header h1 {
        margin:6px 0;
        color:#172033;
      }

      .aba-module-header p {
        color:#718096;
        margin:0;
      }

      .aba-count-box {
        min-width:100px;
        text-align:center;
        padding:16px;
        border-radius:18px;
        color:white;
        background:linear-gradient(
          135deg,
          #6d4aff,
          #ec4899
        );
      }

      .aba-count-box strong {
        display:block;
        font-size:28px;
      }

      .aba-card {
        background:#fff;
        border:1px solid #e8eaf0;
        border-radius:18px;
        padding:20px;
        margin-bottom:18px;
        box-shadow:0 5px 20px rgba(0,0,0,.04);
      }

      .aba-grid {
        display:grid;
        grid-template-columns:
          repeat(auto-fit,minmax(260px,1fr));
        gap:18px;
        width:100%;
      }

      .aba-lesson-toolbar {
        margin-bottom:16px;
      }

      .aba-lesson-toolbar input {
        width:100%;
        padding:13px 15px;
        border:1px solid #e5e7eb;
        border-radius:12px;
        margin-bottom:15px;
        font-size:15px;
        outline:none;
      }

      .aba-filters {
        display:flex;
        flex-wrap:wrap;
        gap:8px;
      }

      .aba-filter {
        border:1px solid #e5e7eb;
        background:#f7f8fb;
        color:#4a5568;
        border-radius:999px;
        padding:9px 15px;
        font-weight:700;
        cursor:pointer;
      }

      .aba-filter.active {
        background:#6d4aff;
        color:#fff;
        border-color:#6d4aff;
      }

      .aba-lesson-card {
        background:#fff;
        border:1px solid #e8eaf0;
        border-radius:18px;
        padding:20px;
        min-height:260px;
        display:flex;
        flex-direction:column;
        box-shadow:0 5px 20px rgba(0,0,0,.04);
      }

      .aba-lesson-icon {
        width:52px;
        height:52px;
        border-radius:14px;
        display:flex;
        align-items:center;
        justify-content:center;
        background:#f1edff;
        font-size:26px;
        margin-bottom:14px;
      }

      .aba-small-label {
        color:#6d4aff;
        font-size:11px;
        font-weight:800;
      }

      .aba-category {
        color:#9aa2b1;
        font-size:11px;
        font-weight:800;
        margin:5px 0 9px;
        text-transform:uppercase;
      }

      .aba-lesson-card h3 {
        color:#172033;
        margin:0 0 8px;
      }

      .aba-lesson-card p {
        color:#718096;
        line-height:1.6;
        flex:1;
      }

      .aba-lesson-actions {
        display:flex;
        gap:8px;
        align-items:center;
        flex-wrap:wrap;
        margin-top:16px;
      }

      .aba-primary-btn {
        border:0;
        border-radius:11px;
        padding:11px 16px;
        background:#6d4aff;
        color:#fff;
        font-weight:800;
        cursor:pointer;
      }

      .aba-primary-btn:hover {
        background:#5434d6;
      }

      .aba-done {
        color:#16a34a;
        background:#ecfdf3;
        padding:7px 10px;
        border-radius:999px;
        font-size:11px;
        font-weight:800;
      }

      .aba-stat-card {
        background:#fff;
        border:1px solid #e8eaf0;
        border-radius:18px;
        padding:20px;
      }

      .aba-stat-card span {
        color:#718096;
        font-size:13px;
      }

      .aba-stat-card strong {
        display:block;
        margin-top:7px;
        font-size:26px;
        color:#172033;
      }

      .aba-card label {
        display:block;
        margin:13px 0 6px;
        font-weight:700;
        color:#374151;
      }

      .aba-card input,
      .aba-card textarea,
      .aba-card select {
        width:100%;
        border:1px solid #e5e7eb;
        border-radius:10px;
        padding:11px;
        font-family:inherit;
        margin-bottom:10px;
      }

      .aba-saved-text {
        margin-top:15px;
        padding:12px;
        background:#f7f8fb;
        border-radius:10px;
        white-space:pre-wrap;
      }

      .aba-ai-card {
        min-height:500px;
      }

      .aba-chat-messages {
        min-height:350px;
        max-height:500px;
        overflow-y:auto;
        padding:5px;
      }

      .aba-message {
        padding:13px 15px;
        border-radius:14px;
        margin-bottom:10px;
        max-width:85%;
      }

      .aba-message.assistant {
        background:#f1edff;
        margin-right:auto;
      }

      .aba-message.user {
        background:#6d4aff;
        color:#fff;
        margin-left:auto;
      }

      .aba-message p {
        white-space:pre-line;
        margin:7px 0 0;
        line-height:1.6;
      }

      .aba-ai-input {
        border-top:1px solid #e8eaf0;
        padding-top:15px;
        margin-top:15px;
      }

      .aba-setting-row {
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:15px;
        padding:14px 0;
        border-bottom:1px solid #eee;
      }

      .aba-muted {
        color:#718096;
      }

      #abaFallbackModal {
        position:fixed;
        inset:0;
        z-index:99999;
        background:rgba(0,0,0,.55);
        display:flex;
        align-items:center;
        justify-content:center;
        padding:20px;
      }

      .aba-fallback-inner {
        width:min(700px,100%);
        max-height:90vh;
        overflow:auto;
        background:#fff;
        border-radius:20px;
        padding:25px;
        position:relative;
      }

      #abaFallbackClose {
        position:absolute;
        right:15px;
        top:12px;
        border:0;
        background:#f3f4f6;
        width:36px;
        height:36px;
        border-radius:50%;
        font-size:22px;
        cursor:pointer;
      }

      @media(max-width:650px) {

        .aba-module-header {
          align-items:flex-start;
        }

        .aba-module-header h1 {
          font-size:25px;
        }

        .aba-count-box {
          min-width:80px;
        }

        .aba-grid {
          grid-template-columns:1fr;
        }

      }

    `;

    document.head.appendChild(style);
  }

  /* =======================================================
     INITIALIZE
     ======================================================= */

  function initializeAungAcademy() {

    injectCompatibilityCSS();

    bindNavigation();
    bindModal();
    bindMobileMenu();
    bindGlobalSearch();

    /*
     * Build modules once.
     * Existing page IDs from index.html are preserved.
     */

    buildLessonsPage();
    buildSalesPage();
    buildAIPage();
    buildSettingsPage();

    /*
     * Hide custom pages initially.
     * Dashboard remains visible.
     */

    [
      "courses",
      "lessons",
      "progress",
      "sales",
      "calculator",
      "reports",
      "ai",
      "tools",
      "settings"
    ].forEach(name => {

      const page =
        getPage(name);

      if (page) {
        page.style.display =
          "none";
      }

    });

    const dashboard =
      getPage("dashboard");

    if (dashboard) {
      dashboard.style.display =
        "block";
    }

    updateProgressPage();

    /*
     * Expose useful functions globally.
     */

    window.ABA = {
      lessons: LESSONS,
      navigate,
      openLesson,
      renderLessons,
      showToast,
      getCompleted,
      saveCompleted
    };

    console.log(
      "Aung Business Academy V8.3 initialized successfully."
    );

  }

  /* =======================================================
     START
     ======================================================= */

  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      initializeAungAcademy
    );

  } else {

    initializeAungAcademy();

  }

})();
