/* =========================================================
   AUNG BUSINESS ACADEMY
   APP.JS - PROFESSIONAL V8
   Detailed Lessons + AI Business Coach + Sales Manager
   ========================================================= */

"use strict";

/* =========================================================
   BASIC HELPERS
   ========================================================= */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function escapeHTML(value) {
  if (value === null || value === undefined) return "";
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatMoney(value) {
  const number = Number(value) || 0;
  return number.toLocaleString("en-US") + " MMK";
}

function formatNumber(value) {
  return (Number(value) || 0).toLocaleString("en-US");
}

/* =========================================================
   LESSON DATA
   ========================================================= */

const LESSONS = [
  {
    id: 1,
    category: "Sales",
    categoryLabel: "Sales",
    title: "Sales Target ကို အောင်မြင်အောင် စီမံခန့်ခွဲခြင်း",
    subtitle: "Target ကို Number တစ်ခုအဖြစ်မမြင်ဘဲ Field Execution အဖြစ်ပြောင်းလဲခြင်း",
    minutes: 25,

    overview:
      "Sales Manager တစ်ယောက်အတွက် Target ရရှိခြင်းဟာ နံပါတ်တစ်ခုကိုကြည့်ပြီး Team ကို ဖိအားပေးခြင်းမဟုတ်ပါ။ Target ကို လူ၊ Customer၊ Channel၊ Product၊ Territory၊ Time နဲ့ Action Plan တွေအဖြစ် ခွဲခြမ်းပြီး လက်တွေ့အကောင်အထည်ဖော်နိုင်ရပါမယ်။",

    objectives: [
      "Monthly Target ကို Weekly / Daily Target အဖြစ် ခွဲနိုင်ရန်",
      "Target Gap ကို ရှာဖွေပြီး Root Cause ခွဲခြမ်းနိုင်ရန်",
      "Team Member တစ်ဦးချင်းစီအတွက် Action Plan ချမှတ်နိုင်ရန်",
      "Sales Target ကို Field Execution အဖြစ် ပြောင်းလဲနိုင်ရန်"
    ],

    sections: [
      {
        heading: "1. Target ဆိုတာဘာလဲ",
        content:
          "Target ဆိုတာ လကုန်မှာ ရောက်ရှိရမယ့် Result ဖြစ်ပါတယ်။ ဒါပေမယ့် Manager အနေနဲ့ Target ကို လကုန်မှာမှ စစ်တာဟာ နောက်ကျပါတယ်။ Target ကို လစဉ် → အပတ်စဉ် → နေ့စဉ် → Customer / Salesperson အလိုက် ခွဲပြီး နေ့စဉ်စောင့်ကြည့်ရပါမယ်။"
      },
      {
        heading: "2. Target ကို ခွဲခြမ်းနည်း",
        content:
          "ဥပမာ Monthly Sales Target 300 သိန်းရှိတယ်ဆိုပါစို့။ Working Days 26 ရက်ဆိုရင် Daily Target က 300 ÷ 26 = 11.54 သိန်းခန့် ဖြစ်ပါတယ်။ Weekly Target ကိုလည်း 300 ÷ 4 = 75 သိန်းခန့်အဖြစ် သတ်မှတ်နိုင်ပါတယ်။ ထိုနည်းလမ်းနဲ့ Team တစ်ခုချင်းစီ၊ Territory တစ်ခုချင်းစီကို ခွဲပေးနိုင်ပါတယ်။"
      },
      {
        heading: "3. Gap Management",
        content:
          "Actual Sales က Target ထက်နည်းနေတဲ့အခါ 'Target မပြည့်ဘူး' လို့ပဲ မပြောသင့်ပါ။ Gap ဘာကြောင့်ဖြစ်သလဲကို Customer, Distribution, Availability, Price, Competition, Team Execution စတဲ့အချက်တွေကနေ ခွဲခြမ်းရပါမယ်။"
      }
    ],

    example:
      "ဥပမာ Team Target = 300 သိန်း၊ Actual = 240 သိန်းဆိုရင် Achievement = 80% ဖြစ်ပါတယ်။ Gap = 60 သိန်း။ Manager က 'နောက်ဆုံးအပတ်မှာ ပိုရောင်းပါ' လို့ပြောတာထက် Gap 60 သိန်းကို Customer / Product / Salesperson / Territory အလိုက် ခွဲပြီး Recovery Plan ချရပါမယ်။",

    managerApplication:
      "Sales Manager အနေနဲ့ မနက်တိုင်း Target vs Actual ကို ကြည့်ပါ။ Gap ရှိတဲ့ Territory ကိုရှာပါ။ ထို့နောက် Salesperson တစ်ယောက်ချင်းစီနဲ့ 'ဘာကြောင့် Gap ဖြစ်တာလဲ၊ ဒီနေ့ ဘာလုပ်မလဲ၊ ဘယ် Customer ကို သွားမလဲ' ဆိုတာ သတ်မှတ်ပါ။",

    kpis: [
      "Sales Achievement %",
      "Daily Sales",
      "Weekly Sales",
      "Gap to Target",
      "Productivity per Salesperson",
      "Active Customer Count"
    ],

    checklist: [
      "Monthly Target သတ်မှတ်ပြီးပြီလား",
      "Weekly Target ခွဲပြီးပြီလား",
      "Daily Target သိထားလား",
      "Team တစ်ဦးချင်း Target ရှိလား",
      "Target Gap ကို နေ့စဉ်စစ်လား",
      "Gap အတွက် Action Plan ရှိလား"
    ],

    assignment:
      "မိမိလုပ်နေသော Sales Business အတွက် Monthly Target တစ်ခုသတ်မှတ်ပါ။ Working Days ထည့်ပြီး Daily Target တွက်ပါ။ ထို့နောက် Target မပြည့်ပါက အဓိက Gap ဖြစ်စေနိုင်သော အကြောင်းရင်း ၅ ခုရေးပါ။",

    takeaways: [
      "Target ကို လကုန်မှာ မစစ်ဘဲ နေ့စဉ်စစ်ပါ",
      "Target → Gap → Root Cause → Action Plan ဆိုတဲ့ Flow ကို အသုံးပြုပါ",
      "Manager ရဲ့တာဝန်က Target ပြောခြင်းမဟုတ်ဘဲ Target ရအောင် System တည်ဆောက်ခြင်းဖြစ်ပါတယ်"
    ]
  },

  {
    id: 2,
    category: "Sales",
    categoryLabel: "Sales",
    title: "Sales Team Performance Management",
    subtitle: "People + Numbers + Execution နဲ့ Team ကို ဦးဆောင်ခြင်း",
    minutes: 25,

    overview:
      "Team Performance Management ဆိုတာ Salesperson တွေရဲ့ Result ကို စောင့်ကြည့်ရုံမဟုတ်ပါ။ လူတစ်ယောက်ချင်းစီရဲ့ Skill, Activity, Productivity နဲ့ Result ကို ချိတ်ဆက်ပြီး Coaching လုပ်ခြင်းဖြစ်ပါတယ်။",

    objectives: [
      "Team Performance ကို Data နဲ့တိုင်းတာနိုင်ရန်",
      "High Performer / Low Performer ခွဲခြားနိုင်ရန်",
      "Coaching လိုအပ်သူကို ရှာနိုင်ရန်",
      "Micromanagement မလုပ်ဘဲ Accountability တည်ဆောက်နိုင်ရန်"
    ],

    sections: [
      {
        heading: "1. Performance ကို Result တစ်ခုတည်းနဲ့ မတိုင်းပါနဲ့",
        content:
          "Salesperson တစ်ယောက် Sales မရတာဟာ Skill မရှိလို့ဖြစ်နိုင်သလို Customer Coverage နည်းလို့လည်း ဖြစ်နိုင်ပါတယ်။ ဒါကြောင့် Result, Activity, Conversion, Distribution, Customer Visits စတဲ့ KPI မျိုးစုံကိုကြည့်ရပါမယ်။"
      },
      {
        heading: "2. Coaching Model",
        content:
          "Coaching မှာ Tell → Ask → Listen → Guide → Agree ဆိုတဲ့ Flow သုံးနိုင်ပါတယ်။ Manager က အဖြေကို တန်းမပြောဘဲ Salesperson ကို ကိုယ်တိုင် Problem နဲ့ Solution ရှာနိုင်အောင် မေးခွန်းထုတ်ပေးရပါမယ်။"
      },
      {
        heading: "3. Accountability",
        content:
          "Ownership ပေးပြီးတာနဲ့ Result ကို Review လုပ်ရပါမယ်။ 'ဘာလုပ်မလဲ' ဆိုတာထက် 'ဘယ်နေ့၊ ဘယ် Customer၊ ဘယ် Result' ဆိုပြီး တိတိကျကျ သတ်မှတ်ပါ။"
      }
    ],

    example:
      "Salesperson A က Target 100 သိန်းထဲက 95 သိန်းရပြီး Customer Coverage ကောင်းတယ်။ Salesperson B က 70 သိန်းပဲရပေမယ့် Visit Activity လည်းနည်းတယ်။ B ကို 'ပိုရောင်း' လို့ပြောတာထက် Customer Coverage နဲ့ Daily Activity ကို အရင်တိုးပေးရပါမယ်။",

    managerApplication:
      "Weekly 1-on-1 Performance Review ပြုလုပ်ပါ။ Result မရတဲ့သူကို အပြစ်တင်မယ့်အစား 'Problem ဘာလဲ၊ Root Cause ဘာလဲ၊ ဘာ Support လိုလဲ၊ နောက်တစ်ပတ်မှာ ဘာ Result ယူမလဲ' ဆိုပြီး Coaching လုပ်ပါ။",

    kpis: [
      "Achievement %",
      "Customer Visits",
      "New Customers",
      "Strike Rate",
      "Average Order Value",
      "Collection / AR"
    ],

    checklist: [
      "Team KPI ရှင်းလင်းလား",
      "Weekly Review လုပ်လား",
      "1-on-1 Coaching လုပ်လား",
      "Low Performer Root Cause သိလား",
      "Action Plan ရှိလား"
    ],

    assignment:
      "Team Member ၃ ယောက်ကို Performance အရ သုံးသပ်ပြီး တစ်ယောက်ချင်းစီအတွက် Coaching Point တစ်ခုစီရေးပါ။",

    takeaways: [
      "Good Manager က Result ကိုပဲမကြည့်ဘဲ လူကိုတိုးတက်အောင်လုပ်ပေးတယ်",
      "Coaching က Micromanagement မဟုတ်ပါ",
      "Clear Expectation + Regular Review + Accountability = Strong Team"
    ]
  },

  {
    id: 3,
    category: "Sales",
    categoryLabel: "Sales",
    title: "Customer Relationship Management",
    subtitle: "Customer ကို Order ယူတဲ့သူအဖြစ်မဟုတ်ဘဲ Business Partner အဖြစ် စီမံခြင်း",
    minutes: 25,

    overview:
      "Customer Relationship Management ရဲ့ အဓိကရည်ရွယ်ချက်က တစ်ကြိမ်ရောင်းပြီးဆုံးတာမဟုတ်ဘဲ Repeat Business, Customer Loyalty နဲ့ Long-term Value တည်ဆောက်ခြင်းဖြစ်ပါတယ်။",

    objectives: [
      "Customer Segmentation ပြုလုပ်နိုင်ရန်",
      "Key Customer ကို Prioritize လုပ်နိုင်ရန်",
      "Customer Need ကို နားလည်နိုင်ရန်",
      "Relationship ကို Business Result နဲ့ ချိတ်ဆက်နိုင်ရန်"
    ],

    sections: [
      {
        heading: "1. Customer Segmentation",
        content:
          "Customer တွေကို Sales Value, Growth Potential, Payment Behavior, Strategic Importance စတဲ့အချက်တွေအရ A/B/C အဖြစ်ခွဲနိုင်ပါတယ်။ A Customer တွေကို Manager ကိုယ်တိုင် Regular Visit လုပ်သင့်ပါတယ်။"
      },
      {
        heading: "2. Customer Need",
        content:
          "Customer က Product ပဲလိုချင်တာ မဟုတ်ပါ။ Margin, Availability, Credit, Delivery, Promotion, Service စတဲ့ Business Need တွေရှိပါတယ်။"
      },
      {
        heading: "3. Relationship Plan",
        content:
          "Key Account တစ်ခုချင်းစီအတွက် Sales Target, Product Mix, Growth Opportunity, Risk, Competitor Activity နဲ့ Next Action ကို ရေးထားသင့်ပါတယ်။"
      }
    ],

    example:
      "Customer တစ်ခုမှာ Sales ကောင်းပေမယ့် Competitor Brand ရဲ့ Share တက်လာတယ်ဆိုရင် Order ရနေသေးလို့ အဆင်ပြေတယ်လို့ မယူဆသင့်ပါ။ Share Risk ကို စောစောသိပြီး Counter Action လုပ်ရပါမယ်။",

    managerApplication:
      "Top 20 Customers ကို သတ်မှတ်ပြီး Monthly Customer Review ပြုလုပ်ပါ။ Sales Value တစ်ခုတည်းမကြည့်ဘဲ Growth, Share, Payment, Competitor Activity ကိုပါ ကြည့်ပါ။",

    kpis: [
      "Customer Sales",
      "Customer Growth %",
      "Repeat Order",
      "Average Order Value",
      "Customer Retention",
      "Share of Wallet"
    ],

    checklist: [
      "Top Customers သတ်မှတ်ထားလား",
      "Customer Plan ရှိလား",
      "Competitor Activity သိလား",
      "Customer Risk သိလား",
      "Next Action သတ်မှတ်ထားလား"
    ],

    assignment:
      "မိမိ Business ရဲ့ Top 10 Customer တွေကို စာရင်းလုပ်ပြီး A/B/C Segment ခွဲပါ။",

    takeaways: [
      "Customer Relationship = Relationship + Business",
      "Key Customer ကို Data နဲ့ Manage လုပ်ပါ",
      "Customer Risk ကို စောစောသိတာက Sales Manager ရဲ့ အားသာချက်ပါ"
    ]
  },

  {
    id: 4,
    category: "Sales",
    categoryLabel: "Sales",
    title: "Distribution & Market Coverage",
    subtitle: "Market ထဲမှာ Product ရှိနေအောင် System တည်ဆောက်ခြင်း",
    minutes: 25,

    overview:
      "Sales တက်ဖို့ Product ကောင်းရုံမလုံလောက်ပါ။ Right Product, Right Outlet, Right Quantity, Right Time ဖြစ်ရပါမယ်။ Distribution နဲ့ Market Coverage က Sales Growth ရဲ့ အခြေခံအုတ်မြစ်ဖြစ်ပါတယ်။",

    objectives: [
      "Distribution Gap ရှာနိုင်ရန်",
      "Numeric Distribution နဲ့ Weighted Distribution နားလည်ရန်",
      "Outlet Coverage Plan တည်ဆောက်နိုင်ရန်",
      "Distributor Performance စောင့်ကြည့်နိုင်ရန်"
    ],

    sections: [
      {
        heading: "1. Market Coverage",
        content:
          "မိမိ Territory ထဲမှာ ဘယ်လောက်သော Outlet တွေရှိပြီး ဘယ်လောက်ကို Product ရောက်နေသလဲဆိုတာ သိရပါမယ်။ Coverage မရှိဘဲ Sales Growth မတည်ငြိမ်နိုင်ပါ။"
      },
      {
        heading: "2. Distributor Management",
        content:
          "Distributor ရဲ့ Sales, Stock, AR, Coverage, Manpower, Vehicle Capacity, Working Capital စတာတွေကို Regular Review လုပ်ရပါမယ်။"
      },
      {
        heading: "3. Availability",
        content:
          "Customer က Product ဝယ်ချင်ပေမယ့် Stock မရှိရင် Sales Opportunity ဆုံးရှုံးပါတယ်။ ဒါကြောင့် Sales Forecast နဲ့ Stock Planning ကို ချိတ်ဆက်ရပါမယ်။"
      }
    ],

    example:
      "Territory မှာ Outlet 1,000 ရှိပြီး Product ရောက်တဲ့ Outlet 600 ပဲရှိတယ်ဆိုရင် Coverage 60% ဖြစ်ပါတယ်။ Competitor က 80% ရှိနေတယ်ဆိုရင် Distribution Gap က Growth Opportunity ဖြစ်ပါတယ်။",

    managerApplication:
      "Weekly Coverage Report ကြည့်ပြီး Low Coverage Area တွေကို Field Visit လုပ်ပါ။ Distributor နဲ့ Joint Business Plan ပြုလုပ်ပါ။",

    kpis: [
      "Numeric Distribution",
      "Weighted Distribution",
      "Active Outlet",
      "Strike Rate",
      "Stock Availability",
      "Distributor Sales"
    ],

    checklist: [
      "Territory Outlet Universe သိလား",
      "Active Outlet သိလား",
      "Coverage % သိလား",
      "Distributor Stock သိလား",
      "Competitor Coverage သိလား"
    ],

    assignment:
      "မိမိ Territory တစ်ခုကိုရွေးပြီး Total Outlets, Active Outlets, Coverage % တွက်ပါ။",

    takeaways: [
      "Distribution မရှိရင် Demand ကို Sales အဖြစ်မပြောင်းနိုင်ပါ",
      "Stock + Coverage + Execution = Sustainable Sales Growth"
    ]
  },

  {
    id: 5,
    category: "Strategy",
    categoryLabel: "Strategy",
    title: "Strategic Thinking for Managers",
    subtitle: "နေ့စဉ်အလုပ်ထက် Business Direction ကို မြင်နိုင်ခြင်း",
    minutes: 25,

    overview:
      "Strategic Thinking ဆိုတာ လက်ရှိ Problem ကို ဖြေရှင်းရုံမဟုတ်ဘဲ နောက် 3 လ၊ 6 လ၊ 12 လမှာ Business ဘယ်ကိုသွားမလဲဆိုတာ ကြိုတင်စဉ်းစားနိုင်ခြင်းဖြစ်ပါတယ်။",

    objectives: [
      "Business Situation ကို ခွဲခြမ်းနိုင်ရန်",
      "Priority သတ်မှတ်နိုင်ရန်",
      "Short-term နဲ့ Long-term ကို Balance လုပ်နိုင်ရန်",
      "Opportunity နဲ့ Risk ကို ကြိုတင်မြင်နိုင်ရန်"
    ],

    sections: [
      {
        heading: "1. Current Situation",
        content:
          "Sales, Profit, Market Share, Customer, Competitor, Distribution, Team စတဲ့အချက်တွေကို အရင်သုံးသပ်ပါ။"
      },
      {
        heading: "2. Priority",
        content:
          "အလုပ်အားလုံးကို တစ်ပြိုင်နက်တည်းလုပ်လို့မရပါ။ Business Impact မြင့်တဲ့အရာကို ဦးစားပေးရပါမယ်။"
      },
      {
        heading: "3. Strategic Choice",
        content:
          "ဘယ် Market ကို အာရုံစိုက်မလဲ၊ ဘယ် Customer ကို တိုးမလဲ၊ ဘယ် Product ကို Push မလဲဆိုတာ Data အပေါ်အခြေခံပြီး ဆုံးဖြတ်ရပါမယ်။"
      }
    ],

    example:
      "Sales ကျနေတဲ့ Territory တစ်ခုမှာ လူပိုထည့်တာဟာ Solution ဖြစ်ချင်မှဖြစ်ပါမယ်။ အရင်ဆုံး Distribution ကျတာလား၊ Product Availability ပြဿနာလား၊ Competitor Promotion လားဆိုတာ ရှာရပါမယ်။",

    managerApplication:
      "Weekly Operation Review အပြင် Monthly Strategic Review တစ်ကြိမ်လုပ်ပါ။ 'ဘာဖြစ်နေသလဲ' ထက် 'ဘာဖြစ်လာနိုင်သလဲ' ကိုပါ ဆွေးနွေးပါ။",

    kpis: [
      "Growth %",
      "Market Share",
      "Distribution",
      "Profitability",
      "Customer Growth",
      "Strategic Initiative Completion"
    ],

    checklist: [
      "Business Situation သိလား",
      "Top 3 Priorities ရှိလား",
      "Opportunity သိလား",
      "Risk သိလား",
      "Next 90 Days Plan ရှိလား"
    ],

    assignment:
      "မိမိ Business အတွက် SWOT Analysis ရေးပါ။ Strength 3 ခု၊ Weakness 3 ခု၊ Opportunity 3 ခု၊ Threat 3 ခု။",

    takeaways: [
      "Manager က Today ကို Manage လုပ်ရတယ်",
      "Leader က Tomorrow ကို Prepare လုပ်ရတယ်",
      "Data + Insight + Choice = Strategy"
    ]
  },

  {
    id: 6,
    category: "Strategy",
    categoryLabel: "Strategy",
    title: "Competitor Analysis",
    subtitle: "ပြိုင်ဘက်ကို သိပြီး မိမိရဲ့ Advantage တည်ဆောက်ခြင်း",
    minutes: 20,

    overview:
      "Competitor Analysis ဆိုတာ ပြိုင်ဘက်ကိုကြောက်ဖို့မဟုတ်ဘဲ သူတို့ရဲ့ Strength, Weakness, Price, Promotion, Distribution နဲ့ Customer Strategy ကို နားလည်ပြီး မိမိ Business အတွက် Counter Strategy တည်ဆောက်ခြင်းဖြစ်ပါတယ်။",

    objectives: [
      "Competitor Data စုဆောင်းနိုင်ရန်",
      "Competitor Strength / Weakness ခွဲခြမ်းရန်",
      "Counter Action Plan တည်ဆောက်ရန်"
    ],

    sections: [
      {
        heading: "1. ဘာတွေကြည့်မလဲ",
        content:
          "Price, Product, Promotion, Availability, Distribution, Sales Force, Customer Relationship, Service Quality စတာတွေကို စနစ်တကျကြည့်ပါ။"
      },
      {
        heading: "2. Competitor Information",
        content:
          "Field Team နဲ့ Customer Feedback က Competitor Intelligence ရဲ့ အရေးကြီးတဲ့ Source တွေဖြစ်ပါတယ်။"
      }
    ],

    example:
      "Competitor က Price မလျှော့ဘဲ Promotion Package ပိုကောင်းလာရင် Price War လုပ်ဖို့မလိုပါ။ မိမိ Customer အတွက် Value Proposition ကို ပြန်တည်ဆောက်နိုင်ပါတယ်။",

    managerApplication:
      "Monthly Competitor Review ပြုလုပ်ပြီး Top 3 Competitor Actions နဲ့ Counter Actions ကို သတ်မှတ်ပါ။",

    kpis: [
      "Market Share",
      "Price Index",
      "Competitor Availability",
      "Promotion Activity",
      "Customer Win/Loss"
    ],

    checklist: [
      "Top Competitors သိလား",
      "Price သိလား",
      "Promotion သိလား",
      "Distribution သိလား",
      "Counter Action ရှိလား"
    ],

    assignment:
      "Competitor 2 ခုကို Product, Price, Distribution, Promotion, Strength, Weakness နဲ့ နှိုင်းယှဉ်ပါ။",

    takeaways: [
      "Competitor ကို သိမှ Strategy ကောင်းကောင်းချနိုင်တယ်",
      "Information မရှိဘဲ Decision ချရင် Risk မြင့်တယ်"
    ]
  },

  {
    id: 7,
    category: "People",
    categoryLabel: "People",
    title: "Leadership & Coaching",
    subtitle: "Command မလုပ်ဘဲ Team ကို တိုးတက်အောင် ဦးဆောင်ခြင်း",
    minutes: 25,

    overview:
      "Leadership က ရာထူးမဟုတ်ပါ။ Team ကို Direction ပေးနိုင်ခြင်း၊ လူတွေကို တိုးတက်အောင်လုပ်ပေးနိုင်ခြင်း၊ Accountability တည်ဆောက်နိုင်ခြင်းနဲ့ Result ရအောင် ဦးဆောင်နိုင်ခြင်းဖြစ်ပါတယ်။",

    objectives: [
      "Coaching Leadership နားလည်ရန်",
      "Team Motivation တည်ဆောက်ရန်",
      "Feedback ပေးနိုင်ရန်",
      "Delegation ပြုလုပ်နိုင်ရန်"
    ],

    sections: [
      {
        heading: "1. Clear Expectations",
        content:
          "Team Member တစ်ယောက်ချင်းစီ ဘာလုပ်ရမယ်၊ ဘယ်အချိန်ပြီးရမယ်၊ ဘယ် Result ရရမယ်ဆိုတာ ရှင်းရပါမယ်။"
      },
      {
        heading: "2. Coaching",
        content:
          "Problem ဖြစ်တိုင်း Manager က ဖြေရှင်းပေးတာထက် Team Member ကို စဉ်းစားစေပြီး Solution ကို ကိုယ်တိုင်တည်ဆောက်နိုင်အောင် Coaching လုပ်ပါ။"
      },
      {
        heading: "3. Feedback",
        content:
          "Feedback ကို လူကိုတိုက်ခိုက်တာမဟုတ်ဘဲ Behavior နဲ့ Result ကို အခြေခံပြီး ပေးရပါမယ်။"
      }
    ],

    example:
      "Salesperson က Customer Visit နည်းနေတယ်ဆိုရင် 'မင်းအလုပ်မလုပ်ဘူး' လို့ မပြောဘဲ 'ဒီအပတ် Visit 18 ခုရှိဖို့ Target ထားတယ်။ လက်ရှိ 10 ခုရှိတယ်။ Gap 8 ခုကို ဘယ်လိုဖြည့်မလဲ?' လို့ ဆွေးနွေးပါ။",

    managerApplication:
      "Weekly 1-on-1 Coaching လုပ်ပါ။ Team Member တစ်ဦးချင်းစီရဲ့ Strength တစ်ခု၊ Development Area တစ်ခု၊ Next Action တစ်ခု သတ်မှတ်ပါ။",

    kpis: [
      "Team Achievement",
      "Employee Retention",
      "Productivity",
      "Training Completion",
      "Individual Improvement"
    ],

    checklist: [
      "Expectation ရှင်းလား",
      "Coaching လုပ်လား",
      "Feedback ပေးလား",
      "Delegation လုပ်လား",
      "Accountability ရှိလား"
    ],

    assignment:
      "Team Member တစ်ယောက်ကို ရွေးပြီး Coaching Conversation တစ်ခုကို ရေးသားလေ့ကျင့်ပါ။",

    takeaways: [
      "Strong Leader က လူတွေကို အားကိုးရအောင်လုပ်တယ်",
      "Micromanagement မဟုတ်ဘဲ Ownership တည်ဆောက်ပါ"
    ]
  },

  {
    id: 8,
    category: "People",
    categoryLabel: "People",
    title: "Performance Review & Feedback",
    subtitle: "Performance Gap ကို Development Opportunity အဖြစ်ပြောင်းခြင်း",
    minutes: 20,

    overview:
      "Performance Review က အပြစ်ရှာဖို့မဟုတ်ပါ။ Actual Performance နဲ့ Expected Performance ကြားက Gap ကို ရှာပြီး Improvement Plan တည်ဆောက်ဖို့ဖြစ်ပါတယ်။",

    objectives: [
      "Performance Gap သတ်မှတ်နိုင်ရန်",
      "Effective Feedback ပေးနိုင်ရန်",
      "Improvement Plan ရေးနိုင်ရန်"
    ],

    sections: [
      {
        heading: "1. Facts First",
        content:
          "Opinion မဟုတ်ဘဲ Data နဲ့ စတင်ပါ။ Target 100, Actual 75 ဆိုရင် Achievement 75% ဖြစ်တယ်ဆိုတဲ့ Fact ကနေ စပါ။"
      },
      {
        heading: "2. Root Cause",
        content:
          "Skill, Will, Resource, Process, Market စတဲ့ Root Cause တွေကို ခွဲပါ။"
      },
      {
        heading: "3. Development Plan",
        content:
          "Training တစ်ခုတည်းမဟုတ်ဘဲ Coaching, Field Accompaniment, Practice, Review စတဲ့နည်းလမ်းတွေသုံးပါ။"
      }
    ],

    example:
      "Salesperson တစ်ယောက် Closing Skill အားနည်းရင် Product Training ပေးတာထက် Manager ကိုယ်တိုင် Customer Visit အတူသွားပြီး Closing Conversation ကို လက်တွေ့ Coaching လုပ်တာ ပိုထိရောက်နိုင်ပါတယ်။",

    managerApplication:
      "Monthly Performance Review မှာ Result + Behavior + Development + Next Goal ဆိုတဲ့ Structure သုံးပါ။",

    kpis: [
      "Achievement %",
      "Activity Improvement",
      "Skill Improvement",
      "Coaching Completion"
    ],

    checklist: [
      "Data ရှိလား",
      "Root Cause သိလား",
      "Development Need သိလား",
      "Action Plan ရှိလား",
      "Follow-up Date ရှိလား"
    ],

    assignment:
      "Performance မပြည့်တဲ့ Team Member တစ်ယောက်အတွက် 30-Day Improvement Plan ရေးပါ။",

    takeaways: [
      "Feedback က Punishment မဟုတ်ပါ",
      "Performance Gap ကို Development Plan နဲ့ ဖြေရှင်းပါ"
    ]
  },

  {
    id: 9,
    category: "Finance",
    categoryLabel: "Finance",
    title: "Profit, Margin & Cost Management",
    subtitle: "Sales များရုံမဟုတ်ဘဲ Profit ရအောင် Business ကို စီမံခြင်း",
    minutes: 25,

    overview:
      "Business မှာ Revenue တက်တာကောင်းပေမယ့် Profit မတက်ရင် အောင်မြင်တယ်လို့ မဆိုနိုင်ပါ။ Sales Manager တစ်ယောက်အနေနဲ့ Gross Margin, Discount, Cost နဲ့ Profit ကို အခြေခံအဆင့်နားလည်ထားရပါမယ်။",

    objectives: [
      "Revenue နဲ့ Profit ကွာခြားချက်နားလည်ရန်",
      "Gross Margin တွက်နိုင်ရန်",
      "Discount ရဲ့ Profit Impact နားလည်ရန်",
      "Cost Control လုပ်နိုင်ရန်"
    ],

    sections: [
      {
        heading: "1. Revenue",
        content:
          "Revenue ဆိုတာ ရောင်းချမှုကရတဲ့ စုစုပေါင်းဝင်ငွေ ဖြစ်ပါတယ်။ Revenue များတယ်ဆိုတာ Profit များတယ်လို့ မဆိုလိုပါ။"
      },
      {
        heading: "2. Gross Profit",
        content:
          "Gross Profit = Sales Revenue - Cost of Goods Sold ဖြစ်ပါတယ်။"
      },
      {
        heading: "3. Gross Margin",
        content:
          "Gross Margin % = Gross Profit ÷ Sales Revenue × 100 ဖြစ်ပါတယ်။"
      }
    ],

    example:
      "Sales 100 သိန်း၊ Product Cost 75 သိန်းဆိုရင် Gross Profit = 25 သိန်း။ Gross Margin = 25% ဖြစ်ပါတယ်။ Discount 5 သိန်းပေးလိုက်ရင် Profit ကို တိုက်ရိုက်ထိခိုက်နိုင်ပါတယ်။",

    managerApplication:
      "Sales Target နဲ့အတူ Margin Target ကိုပါ Review လုပ်ပါ။ Volume တိုးပေမယ့် Margin ကျနေရင် Business Quality ကို ပြန်စစ်ပါ။",

    kpis: [
      "Revenue",
      "Gross Profit",
      "Gross Margin %",
      "Discount %",
      "Cost per Sale"
    ],

    checklist: [
      "Revenue သိလား",
      "Cost သိလား",
      "Gross Profit သိလား",
      "Margin % သိလား",
      "Discount Impact သိလား"
    ],

    assignment:
      "မိမိရောင်းတဲ့ Product တစ်ခုအတွက် Selling Price, Cost, Gross Profit, Margin % တွက်ပါ။",

    takeaways: [
      "Revenue က Top Line",
      "Profit က Business Survival အတွက် အရေးကြီးတယ်",
      "Sales Growth နဲ့ Profitability ကို တွဲကြည့်ပါ"
    ]
  },

  {
    id: 10,
    category: "Finance",
    categoryLabel: "Finance",
    title: "Break-even Analysis",
    subtitle: "Business ဘယ်လောက်ရောင်းရင် အရှုံးမရှိတော့မလဲ",
    minutes: 20,

    overview:
      "Break-even Point ဆိုတာ Revenue နဲ့ Total Cost တူညီသွားပြီး Profit = 0 ဖြစ်တဲ့အဆင့်ဖြစ်ပါတယ်။ Business Planning နဲ့ Sales Target သတ်မှတ်ရာမှာ အလွန်အသုံးဝင်ပါတယ်။",

    objectives: [
      "Fixed Cost နဲ့ Variable Cost ခွဲခြားနိုင်ရန်",
      "Break-even Point တွက်နိုင်ရန်",
      "Minimum Sales Requirement သတ်မှတ်နိုင်ရန်"
    ],

    sections: [
      {
        heading: "1. Fixed Cost",
        content:
          "Sales မရှိသော်လည်း ပေးရတဲ့ Cost ဖြစ်ပါတယ်။ ဥပမာ Salary, Rent, Basic Operating Cost စသည်တို့ဖြစ်ပါတယ်။"
      },
      {
        heading: "2. Variable Cost",
        content:
          "Sales တိုးလာတာနဲ့အမျှ တိုးလာတဲ့ Cost ဖြစ်ပါတယ်။ Product Cost, Delivery Cost စသည်တို့ပါဝင်နိုင်ပါတယ်။"
      },
      {
        heading: "3. Break-even",
        content:
          "Break-even Sales = Fixed Cost ÷ Contribution Margin Ratio ဖြစ်ပါတယ်။"
      }
    ],

    example:
      "Fixed Cost 50 သိန်း၊ Contribution Margin 25% ဆိုရင် Break-even Sales = 50 ÷ 25% = 200 သိန်း ဖြစ်ပါတယ်။",

    managerApplication:
      "Monthly Sales Target သတ်မှတ်ရာမှာ Break-even Sales ကို အနည်းဆုံးသိထားပါ။ Break-even ကျော်ပြီးမှ Profit Zone ထဲဝင်လာမယ်ဆိုတာ Team ကို နားလည်အောင်ရှင်းပြပါ။",

    kpis: [
      "Break-even Sales",
      "Contribution Margin",
      "Fixed Cost",
      "Profit"
    ],

    checklist: [
      "Fixed Cost သိလား",
      "Variable Cost သိလား",
      "Contribution Margin သိလား",
      "Break-even Sales သိလား"
    ],

    assignment:
      "မိမိ Business ရဲ့ Fixed Cost နဲ့ Margin ကို ခန့်မှန်းပြီး Break-even Sales တွက်ပါ။",

    takeaways: [
      "Break-even သိရင် Minimum Sales Requirement သိလာမယ်",
      "Profit Planning အတွက် အရေးကြီးတဲ့ Tool တစ်ခုဖြစ်တယ်"
    ]
  },

  {
    id: 11,
    category: "Sales",
    categoryLabel: "Sales",
    title: "Negotiation Skills",
    subtitle: "Price လျှော့ပေးခြင်းမဟုတ်ဘဲ Value နဲ့ Win-Win ရအောင် ညှိနှိုင်းခြင်း",
    minutes: 25,

    overview:
      "Negotiation က Customer တောင်းသမျှကို လိုက်ပေးခြင်းမဟုတ်ပါ။ Customer Need ကိုနားလည်ပြီး မိမိ Business ရဲ့ Margin နဲ့ Policy ကိုကာကွယ်ရင်း နှစ်ဖက်စလုံးအတွက် အကျိုးရှိတဲ့ Agreement တည်ဆောက်ခြင်းဖြစ်ပါတယ်။",

    objectives: [
      "Customer Need ရှာဖွေနိုင်ရန်",
      "Price Objection ကို ဖြေရှင်းနိုင်ရန်",
      "Value-based Negotiation ပြုလုပ်နိုင်ရန်",
      "Win-Win Agreement တည်ဆောက်နိုင်ရန်"
    ],

    sections: [
      {
        heading: "1. Listen First",
        content:
          "Customer က Price လျှော့ခိုင်းတယ်ဆိုတာ အမှန်တကယ် Price ပဲပြဿနာလား၊ Cash Flow, Margin, Competitor Offer စတာတွေကြောင့်လား သိရပါမယ်။"
      },
      {
        heading: "2. Trade Instead of Give",
        content:
          "Discount တောင်းရင် ဘာမှမရဘဲ လျှော့ပေးတာထက် Volume, Payment Term, Order Commitment, Visibility စတဲ့ အရာတစ်ခုခုနဲ့ Exchange လုပ်ပါ။"
      },
      {
        heading: "3. Value",
        content:
          "Price တစ်ခုတည်းမပြောဘဲ Availability, Service, Quality, Delivery, Support စတဲ့ Value တွေကို ရှင်းပြပါ။"
      }
    ],

    example:
      "Customer က 10% Discount တောင်းတယ်ဆိုရင် '5% ပဲပေးနိုင်တယ်' လို့တန်းမပြောဘဲ '10% ရဖို့ Monthly Volume Commitment ဘယ်လောက်ယူနိုင်မလဲ' လို့ ပြန်ဆွေးနွေးနိုင်ပါတယ်။",

    managerApplication:
      "Key Account Negotiation မလုပ်ခင် Minimum Acceptable Price, Target Outcome, Give-away, Must-have, Walk-away Point တွေ ကြိုသတ်မှတ်ပါ။",

    kpis: [
      "Gross Margin",
      "Average Discount",
      "Customer Growth",
      "Negotiation Win Rate"
    ],

    checklist: [
      "Customer Need သိလား",
      "BATNA / Alternative သိလား",
      "Minimum Acceptable Point သိလား",
      "Give & Take Plan ရှိလား"
    ],

    assignment:
      "Customer က Price Discount တောင်းတဲ့ Scenario တစ်ခုကိုရေးပြီး Win-Win Solution ၃ ခုထုတ်ပါ။",

    takeaways: [
      "Good Negotiation = Give + Get",
      "Price မဟုတ်ဘဲ Value ကို ရောင်းပါ"
    ]
  },

  {
    id: 12,
    category: "People",
    categoryLabel: "People",
    title: "Time Management & Priority",
    subtitle: "အလုပ်များတာနဲ့ Productive ဖြစ်တာ မတူပါ",
    minutes: 20,

    overview:
      "Manager တစ်ယောက်အနေနဲ့ အလုပ်အများကြီးလုပ်နိုင်တာထက် Business Impact မြင့်တဲ့အလုပ်တွေကို ဦးစားပေးလုပ်နိုင်ဖို့ ပိုအရေးကြီးပါတယ်။",

    objectives: [
      "Priority သတ်မှတ်နိုင်ရန်",
      "Urgent / Important ခွဲနိုင်ရန်",
      "Delegation ပြုလုပ်နိုင်ရန်",
      "Managerial Time ကို ကောင်းစွာအသုံးချနိုင်ရန်"
    ],

    sections: [
      {
        heading: "1. Important vs Urgent",
        content:
          "Urgent ဖြစ်တာတိုင်း Important မဟုတ်ပါ။ Manager က Strategic Planning, Team Development, Key Customer, Performance Management စတဲ့ High Impact Work တွေအတွက် အချိန်ထားရပါမယ်။"
      },
      {
        heading: "2. Delegation",
        content:
          "လုပ်နိုင်တာအားလုံးကို ကိုယ်တိုင်လုပ်မယ့်အစား Team Member ကို Ownership ပေးပါ။"
      }
    ],

    example:
      "နေ့တိုင်း Report ပြင်နေရတာကြောင့် Customer Visit မလုပ်နိုင်ဘူးဆိုရင် Report Preparation ကို Team ထဲမှာ Delegate လုပ်ပြီး Manager Time ကို Key Customer နဲ့ Team Coaching မှာ အသုံးချနိုင်ပါတယ်။",

    managerApplication:
      "နေ့စဉ် Morning Priority 3 ခု သတ်မှတ်ပါ။ ညနေမှာ Result Review လုပ်ပါ။",

    kpis: [
      "Priority Completion",
      "Customer Visits",
      "Coaching Hours",
      "Strategic Work Completion"
    ],

    checklist: [
      "Today's Top 3 သိလား",
      "Delegate လုပ်လို့ရတဲ့အလုပ်ခွဲထားလား",
      "High Impact Work အတွက် အချိန်ထားလား"
    ],

    assignment:
      "မနက်ဖြန်လုပ်ရမယ့်အလုပ် 10 ခုရေးပြီး Top 3 Priority ခွဲပါ။",

    takeaways: [
      "Busy ≠ Productive",
      "Manager ရဲ့အချိန်ကို High Impact Work မှာ သုံးပါ"
    ]
  },

  {
    id: 13,
    category: "Strategy",
    categoryLabel: "Strategy",
    title: "Goal Setting & Action Planning",
    subtitle: "Goal ကို လက်တွေ့ Action အဖြစ် ပြောင်းလဲခြင်း",
    minutes: 25,

    overview:
      "Goal က Direction ပေးပြီး Action Plan က အကောင်အထည်ဖော်ပေးပါတယ်။ Goal ကောင်းတစ်ခုရှိရုံနဲ့ Result မရပါ။ Owner, Deadline, KPI, Action တွေ သတ်မှတ်ထားရပါမယ်။",

    objectives: [
      "SMART Goal ရေးနိုင်ရန်",
      "Action Plan တည်ဆောက်နိုင်ရန်",
      "Owner နဲ့ Deadline သတ်မှတ်နိုင်ရန်",
      "Progress Review ပြုလုပ်နိုင်ရန်"
    ],

    sections: [
      {
        heading: "1. SMART Goal",
        content:
          "Specific, Measurable, Achievable, Relevant, Time-bound ဖြစ်ရပါမယ်။"
      },
      {
        heading: "2. Action Plan",
        content:
          "Action တစ်ခုချင်းစီအတွက် Owner, Deadline, Expected Result နဲ့ KPI ထည့်ပါ။"
      },
      {
        heading: "3. Review",
        content:
          "Plan ရေးပြီးထားတာနဲ့ မပြီးပါ။ Weekly Review လုပ်ပြီး လိုအပ်ရင် Action ပြန်ပြင်ရပါမယ်။"
      }
    ],

    example:
      "Goal = Next Month Sales 15% Growth။ Action = Top 20 Customers Review, 100 New Outlets Open, Distributor Stock Increase, Weekly Field Coaching စသည်ဖြင့် ခွဲနိုင်ပါတယ်။",

    managerApplication:
      "90-Day Business Plan တစ်ခုတည်ဆောက်ပြီး Month 1 / Month 2 / Month 3 အလိုက် Milestone ခွဲပါ။",

    kpis: [
      "Goal Achievement",
      "Action Completion %",
      "Growth %",
      "Milestone Completion"
    ],

    checklist: [
      "Goal ရှင်းလား",
      "KPI ရှိလား",
      "Owner ရှိလား",
      "Deadline ရှိလား",
      "Review Date ရှိလား"
    ],

    assignment:
      "မိမိရဲ့ 90-Day Sales Goal တစ်ခုရေးပြီး Action 5 ခုချမှတ်ပါ။",

    takeaways: [
      "Goal Without Action = Wish",
      "Action Without KPI = Activity",
      "Goal + Action + KPI + Review = Execution"
    ]
  },

  {
    id: 14,
    category: "Finance",
    categoryLabel: "Finance",
    title: "Business Dashboard & KPI Management",
    subtitle: "Data ကို Decision အဖြစ် ပြောင်းလဲခြင်း",
    minutes: 30,

    overview:
      "Dashboard ဆိုတာ Number တွေပြဖို့ပဲမဟုတ်ပါ။ Manager က ဘာဖြစ်နေတယ်၊ ဘာကြောင့်ဖြစ်တယ်၊ ဘာလုပ်ရမယ်ဆိုတာ မြန်မြန်ဆုံးဖြတ်နိုင်ဖို့ Data ကို စနစ်တကျ စုစည်းထားတဲ့ Management Tool ဖြစ်ပါတယ်။",

    objectives: [
      "Management KPI ရွေးချယ်နိုင်ရန်",
      "Dashboard တည်ဆောက်နိုင်ရန်",
      "Data Trend ဖတ်နိုင်ရန်",
      "Data ကနေ Action ချနိုင်ရန်"
    ],

    sections: [
      {
        heading: "1. KPI များလွန်းမထားပါနဲ့",
        content:
          "Manager Dashboard မှာ အရေးကြီးဆုံး KPI တွေကိုပဲထားပါ။ Sales, Achievement, Growth, Distribution, Margin, Collection စတာတွေက Sales Manager အတွက် အရေးကြီးတဲ့ KPI တွေဖြစ်နိုင်ပါတယ်။"
      },
      {
        heading: "2. Trend",
        content:
          "ဒီနေ့ Number တစ်ခုတည်းထက် Last Week, Last Month, Last Year နဲ့ နှိုင်းယှဉ်ကြည့်တာက ပိုအရေးကြီးပါတယ်။"
      },
      {
        heading: "3. Decision",
        content:
          "Dashboard ကြည့်ပြီး Action တစ်ခုခုထွက်လာရပါမယ်။ Number ကြည့်ပြီး အဆုံးမသတ်ဘဲ 'So What?' ကို မေးပါ။"
      }
    ],

    example:
      "Achievement 82% ဖြစ်နေတယ်ဆိုတာ သိရုံနဲ့ မလုံလောက်ပါ။ Territory A = 95%, B = 70%, C = 81% ဆိုရင် B ကို Focus လုပ်ရမယ်ဆိုတဲ့ Decision ထွက်လာရပါမယ်။",

    managerApplication:
      "Daily Dashboard = Monitor, Weekly Dashboard = Manage, Monthly Dashboard = Strategy ဆိုတဲ့ပုံစံနဲ့ အသုံးပြုပါ။",

    kpis: [
      "Sales Achievement",
      "Growth %",
      "Gap",
      "Distribution",
      "Margin %",
      "Collection",
      "Team Productivity"
    ],

    checklist: [
      "Key KPI ရှိလား",
      "Target vs Actual ကြည့်လား",
      "Trend ကြည့်လား",
      "Gap သိလား",
      "Action ထွက်လာလား"
    ],

    assignment:
      "မိမိအတွက် Sales Manager Dashboard မှာ ထည့်မယ့် KPI 7 ခုရွေးပါ။",

    takeaways: [
      "Data ကို Report အဖြစ်မထားဘဲ Decision အဖြစ်ပြောင်းပါ",
      "Good Manager knows the numbers",
      "Great Manager knows what the numbers mean"
    ]
  }
];

/* =========================================================
   COURSES
   ========================================================= */

const COURSES = [
  {
    id: 1,
    title: "Sales Management Mastery",
    category: "Sales",
    lessons: [1, 2, 3, 4, 11],
    description:
      "Sales Target, Team Performance, Customer Management, Distribution နှင့် Negotiation ကို လက်တွေ့လေ့လာပါ။"
  },
  {
    id: 2,
    title: "Business Strategy",
    category: "Strategy",
    lessons: [5, 6, 13, 14],
    description:
      "Strategic Thinking, Competitor Analysis, Goal Setting နှင့် KPI Management ကို လေ့လာပါ။"
  },
  {
    id: 3,
    title: "People & Leadership",
    category: "People",
    lessons: [2, 7, 8, 12],
    description:
      "Team Leadership, Coaching, Feedback, Performance နှင့် Time Management ကို လေ့လာပါ။"
  },
  {
    id: 4,
    title: "Business Finance",
    category: "Finance",
    lessons: [9, 10, 14],
    description:
      "Profit, Margin, Break-even နှင့် Business KPI တွေကို လက်တွေ့အသုံးချပါ။"
  }
];

/* =========================================================
   STATE
   ========================================================= */

let currentPage = "dashboard";
let currentLessonIndex = 0;

let completedLessons = JSON.parse(
  localStorage.getItem("aba_completed_lessons") || "[]"
);

let salesManagerData = JSON.parse(
  localStorage.getItem("aba_sales_manager_v1") || "null"
);

if (!salesManagerData) {
  salesManagerData = {
    target: 30000000,
    actual: 24000000,
    workingDays: 26,
    team: [
      {
        id: 1,
        name: "Sales Executive A",
        target: 7000000,
        actual: 6000000
      },
      {
        id: 2,
        name: "Sales Executive B",
        target: 7000000,
        actual: 5500000
      },
      {
        id: 3,
        name: "Sales Executive C",
        target: 8000000,
        actual: 6500000
      },
      {
        id: 4,
        name: "Sales Executive D",
        target: 8000000,
        actual: 6000000
      }
    ],
    actions: [
      {
        id: 1,
        title: "Top 20 Customer Review",
        owner: "Sales Manager",
        deadline: "This Week",
        done: false
      },
      {
        id: 2,
        title: "Low Performance Territory Coaching",
        owner: "Sales Manager",
        deadline: "Friday",
        done: false
      }
    ]
  };
}

/* =========================================================
   NAVIGATION
   ========================================================= */

function navigate(page) {
  currentPage = page;

  const pages = document.querySelectorAll(".page");

  pages.forEach((p) => {
    p.classList.remove("active");
  });

  const target = document.getElementById(page + "Page");

  if (target) {
    target.classList.add("active");
  }

  document.querySelectorAll("[data-page]").forEach((item) => {
    item.classList.remove("active");

    if (item.dataset.page === page) {
      item.classList.add("active");
    }
  });

  updatePageTitle(page);

  if (page === "dashboard") {
    renderDashboard();
  }

  if (page === "courses") {
    renderCourses();
  }

  if (page === "lessons") {
    renderLessons();
  }

  if (page === "progress") {
    renderProgress();
  }

  if (page === "sales") {
    renderSales();
  }

  if (page === "calculator") {
    renderCalculators();
  }

  if (page === "reports") {
    renderReports();
  }

  if (page === "ai") {
    renderAI();
  }

  if (page === "tools") {
    renderTools();
  }

  closeSidebar();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updatePageTitle(page) {
  const titles = {
    dashboard: "Dashboard",
    courses: "My Courses",
    lessons: "Learning Center",
    progress: "My Progress",
    sales: "Sales Manager",
    calculator: "Pricing Calculator",
    reports: "Reports",
    ai: "AI Business Coach",
    tools: "AI Tools",
    settings: "Settings"
  };

  const title = $("#pageTitle");

  if (title) {
    title.textContent = titles[page] || "Aung Business Academy";
  }
}

function goDashboard() {
  navigate("dashboard");
}

function openLessons() {
  navigate("lessons");
}

function continueLearning() {
  const next = LESSONS.find((lesson) => !completedLessons.includes(lesson.id));

  if (next) {
    openLessonById(next.id);
  } else {
    openLessons();
  }
}

function openBusinessPlan() {
  navigate("sales");
}

/* =========================================================
   DASHBOARD
   ========================================================= */

function renderDashboard() {
  updateDashboardStats();

  const dashboard = $("#dashboardPage");

  if (!dashboard) return;

  const dailyGoal = dashboard.querySelector(".daily-goal-value");

  if (dailyGoal) {
    dailyGoal.textContent = "0 / 30 min";
  }
}

function updateDashboardStats() {
  const completed = completedLessons.length;
  const total = LESSONS.length;
  const progress = total
    ? Math.round((completed / total) * 100)
    : 0;

  const statNumbers = document.querySelectorAll(
    "[data-stat], .stat-value"
  );

  statNumbers.forEach((el) => {
    const text = el.textContent.toLowerCase();

    if (
      text.includes("course") ||
      el.dataset.stat === "courses"
    ) {
      el.textContent = COURSES.length;
    }

    if (
      text.includes("lesson") ||
      el.dataset.stat === "lessons"
    ) {
      el.textContent = total;
    }

    if (el.dataset.stat === "completed") {
      el.textContent = completed;
    }

    if (el.dataset.stat === "progress") {
      el.textContent = progress + "%";
    }
  });

  const progressBars = document.querySelectorAll(
    ".progress-fill, .course-progress-fill"
  );

  progressBars.forEach((bar) => {
    if (
      bar.closest("#dashboardPage") ||
      bar.dataset.progress === "overall"
    ) {
      bar.style.width = progress + "%";
    }
  });
}

/* =========================================================
   COURSES
   ========================================================= */

function courseProgress(course) {
  if (!course.lessons.length) return 0;

  const completed = course.lessons.filter((id) =>
    completedLessons.includes(id)
  ).length;

  return Math.round(
    (completed / course.lessons.length) * 100
  );
}

function renderCourses() {
  const page = $("#coursesPage");

  if (!page) return;

  let container =
    page.querySelector("#coursesGrid") ||
    page.querySelector(".courses-grid") ||
    page.querySelector(".course-grid");

  if (!container) {
    container = document.createElement("div");
    container.className = "courses-grid";
    page.appendChild(container);
  }

  container.innerHTML = COURSES.map((course) => {
    const progress = courseProgress(course);

    return `
      <div class="course-card">
        <div class="course-card-top">
          <span class="course-badge">${escapeHTML(course.category)}</span>
          <span>${course.lessons.length} Lessons</span>
        </div>

        <h3>${escapeHTML(course.title)}</h3>

        <p>${escapeHTML(course.description)}</p>

        <div class="course-progress">
          <div class="progress-row">
            <span>Progress</span>
            <strong>${progress}%</strong>
          </div>

          <div class="progress-track">
            <div class="progress-fill" style="width:${progress}%"></div>
          </div>
        </div>

        <button class="primary-btn"
          onclick="openCourse(${course.id})">
          ${progress > 0 ? "Continue Course" : "Start Course"}
        </button>
      </div>
    `;
  }).join("");
}

function openCourse(courseId) {
  const course = COURSES.find((item) => item.id === courseId);

  if (!course) return;

  const firstLesson =
    course.lessons.find((id) => !completedLessons.includes(id)) ||
    course.lessons[0];

  openLessonById(firstLesson);
}

/* =========================================================
   LEARNING CENTER
   ========================================================= */

function renderLessons(filter = "All") {
  const page = $("#lessonsPage");

  if (!page) return;

  let container =
    page.querySelector("#lessonsGrid") ||
    page.querySelector("#lessonGrid") ||
    page.querySelector("#lessonsList") ||
    page.querySelector(".lessons-grid") ||
    page.querySelector(".lesson-grid");

  if (!container) {
    container = document.createElement("div");
    container.className = "lessons-grid";
    page.appendChild(container);
  }

  const filtered =
    filter === "All"
      ? LESSONS
      : LESSONS.filter(
          (lesson) =>
            lesson.category.toLowerCase() ===
            filter.toLowerCase()
        );

  if (!filtered.length) {
    container.innerHTML = `
      <div class="empty-state">
        <h3>သင်ခန်းစာ မတွေ့ပါ</h3>
        <p>အခြား Category တစ်ခုကို ရွေးကြည့်ပါ။</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered
    .map((lesson) => {
      const completed = completedLessons.includes(lesson.id);

      return `
        <div class="lesson-card ${
          completed ? "completed" : ""
        }">

          <div class="lesson-card-header">
            <span class="lesson-category">
              ${escapeHTML(lesson.categoryLabel)}
            </span>

            <span class="lesson-time">
              ${lesson.minutes} min
            </span>
          </div>

          <h3>${escapeHTML(lesson.title)}</h3>

          <p>${escapeHTML(lesson.subtitle)}</p>

          <div class="lesson-meta">
            <span>📚 ${lesson.sections.length} Topics</span>
            <span>${completed ? "✓ Completed" : "Not Started"}</span>
          </div>

          <button
            class="primary-btn"
            onclick="openLessonById(${lesson.id})">
            ${completed ? "Review Lesson" : "Start Lesson"}
          </button>

        </div>
      `;
    })
    .join("");

  setupLessonFilters(page);
}

function setupLessonFilters(page) {
  const filters = page.querySelectorAll(
    "[data-category], .lesson-filter, .filter-btn"
  );

  filters.forEach((button) => {
    if (button.dataset.lessonFilterBound === "true") {
      return;
    }

    button.dataset.lessonFilterBound = "true";

    button.addEventListener("click", () => {
      const filter =
        button.dataset.category ||
        button.dataset.filter ||
        button.textContent.trim();

      filters.forEach((item) =>
        item.classList.remove("active")
      );

      button.classList.add("active");

      renderLessons(filter);
    });
  });
}

function openCategory(category) {
  navigate("lessons");

  setTimeout(() => {
    renderLessons(category);
  }, 50);
}

function openLessonById(id) {
  const index = LESSONS.findIndex(
    (lesson) => lesson.id === Number(id)
  );

  if (index === -1) return;

  currentLessonIndex = index;
  openLesson(index);
}

function openLesson(index) {
  const lesson = LESSONS[index];

  if (!lesson) return;

  currentLessonIndex = index;

  const completed = completedLessons.includes(lesson.id);

  const body = `
    <div class="lesson-detail">

      <div class="lesson-detail-top">
        <span class="lesson-category">
          ${escapeHTML(lesson.categoryLabel)}
        </span>

        <span>⏱ ${lesson.minutes} minutes</span>
      </div>

      <h1>${escapeHTML(lesson.title)}</h1>

      <p class="lesson-subtitle">
        ${escapeHTML(lesson.subtitle)}
      </p>

      <section class="detail-section">
        <h3>📖 သင်ခန်းစာအကျဉ်းချုပ်</h3>
        <p>${escapeHTML(lesson.overview)}</p>
      </section>

      <section class="detail-section">
        <h3>🎯 ဒီသင်ခန်းစာပြီးရင် သိထားရမယ့်အချက်များ</h3>

        <ul>
          ${lesson.objectives
            .map((item) => `<li>${escapeHTML(item)}</li>`)
            .join("")}
        </ul>
      </section>

      <section class="detail-section">
        <h3>📚 အသေးစိတ်သင်ခန်းစာ</h3>

        ${lesson.sections
          .map(
            (section) => `
              <div class="lesson-topic">
                <h4>${escapeHTML(section.heading)}</h4>
                <p>${escapeHTML(section.content)}</p>
              </div>
            `
          )
          .join("")}
      </section>

      <section class="detail-section example-box">
        <h3>💡 လက်တွေ့ Business Example</h3>
        <p>${escapeHTML(lesson.example)}</p>
      </section>

      <section class="detail-section manager-box">
        <h3>👔 Sales Manager အနေနဲ့ ဘယ်လိုအသုံးချမလဲ</h3>
        <p>${escapeHTML(lesson.managerApplication)}</p>
      </section>

      <section class="detail-section">
        <h3>📊 အရေးကြီး KPI များ</h3>

        <div class="kpi-list">
          ${lesson.kpis
            .map(
              (kpi) => `
                <span class="kpi-chip">
                  ${escapeHTML(kpi)}
                </span>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="detail-section">
        <h3>✅ Manager Checklist</h3>

        <div class="checklist">
          ${lesson.checklist
            .map(
              (item) => `
                <label class="check-item">
                  <input type="checkbox">
                  <span>${escapeHTML(item)}</span>
                </label>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="detail-section assignment-box">
        <h3>📝 လက်တွေ့ Assignment</h3>
        <p>${escapeHTML(lesson.assignment)}</p>
      </section>

      <section class="detail-section takeaway-box">
        <h3>🔑 Key Takeaways</h3>

        <ul>
          ${lesson.takeaways
            .map((item) => `<li>${escapeHTML(item)}</li>`)
            .join("")}
        </ul>
      </section>

      <div class="lesson-navigation">

        <button
          class="secondary-btn"
          onclick="previousLesson()"
          ${index === 0 ? "disabled" : ""}>
          ← Previous
        </button>

        <button
          class="primary-btn"
          onclick="completeLesson(${lesson.id})">
          ${completed ? "✓ Completed" : "✓ Complete Lesson"}
        </button>

        <button
          class="secondary-btn"
          onclick="nextLesson()"
          ${index === LESSONS.length - 1 ? "disabled" : ""}>
          Next →
        </button>

      </div>

    </div>
  `;

  openModal(body, "lesson-modal");
}

function previousLesson() {
  if (currentLessonIndex > 0) {
    currentLessonIndex--;
    openLesson(currentLessonIndex);
  }
}

function nextLesson() {
  if (currentLessonIndex < LESSONS.length - 1) {
    currentLessonIndex++;
    openLesson(currentLessonIndex);
  }
}

function completeLesson(id) {
  id = Number(id);

  if (!completedLessons.includes(id)) {
    completedLessons.push(id);

    localStorage.setItem(
      "aba_completed_lessons",
      JSON.stringify(completedLessons)
    );

    showToast("သင်ခန်းစာပြီးမြောက်ပါပြီ ✓");
  }

  closeModal();

  renderLessons();
  renderProgress();
  updateDashboardStats();
}

/* =========================================================
   PROGRESS
   ========================================================= */

function renderProgress() {
  const page = $("#progressPage");

  if (!page) return;

  const completed = completedLessons.length;
  const total = LESSONS.length;
  const percent = Math.round((completed / total) * 100);

  const container =
    page.querySelector("#progressContent") ||
    page.querySelector(".progress-content") ||
    page;

  const existing =
    container.querySelector(".generated-progress");

  if (existing) {
    existing.remove();
  }

  const section = document.createElement("div");

  section.className = "generated-progress";

  section.innerHTML = `
    <div class="progress-summary">

      <div class="progress-big-card">
        <div class="progress-circle">
          <strong>${percent}%</strong>
        </div>

        <h3>Overall Learning Progress</h3>
        <p>${completed} / ${total} lessons completed</p>
      </div>

      <div class="progress-course-list">
        ${COURSES.map((course) => {
          const p = courseProgress(course);

          return `
            <div class="progress-course-item">
              <div class="progress-row">
                <span>${escapeHTML(course.title)}</span>
                <strong>${p}%</strong>
              </div>

              <div class="progress-track">
                <div
                  class="progress-fill"
                  style="width:${p}%">
                </div>
              </div>
            </div>
          `;
        }).join("")}
      </div>

    </div>
  `;

  container.appendChild(section);
}

/* =========================================================
   SALES MANAGER
   ========================================================= */

function saveSalesData() {
  localStorage.setItem(
    "aba_sales_manager_v1",
    JSON.stringify(salesManagerData)
  );
}

function getAchievement(target, actual) {
  if (!target) return 0;

  return Math.round(
    (Number(actual) / Number(target)) * 100
  );
}

function renderSales() {
  const page = $("#salesPage");

  if (!page) return;

  let container =
    page.querySelector("#salesManagerContent") ||
    page.querySelector(".sales-manager-content");

  if (!container) {
    container = document.createElement("div");
    container.className = "sales-manager-content";
    page.appendChild(container);
  }

  const target = Number(salesManagerData.target) || 0;
  const actual = Number(salesManagerData.actual) || 0;
  const workingDays =
    Number(salesManagerData.workingDays) || 26;

  const achievement = getAchievement(target, actual);
  const gap = Math.max(target - actual, 0);
  const dailyTarget = target / workingDays;

  container.innerHTML = `
    <div class="manager-header">
      <div>
        <span class="eyebrow">SALES MANAGEMENT</span>
        <h2>Sales Manager Command Center</h2>
        <p>People + Numbers + Execution</p>
      </div>

      <button
        class="secondary-btn"
        onclick="resetSalesData()">
        Reset
      </button>
    </div>

    <div class="kpi-card-grid">

      <div class="manager-kpi">
        <span>Monthly Target</span>
        <strong>${formatMoney(target)}</strong>
      </div>

      <div class="manager-kpi">
        <span>Actual Sales</span>
        <strong>${formatMoney(actual)}</strong>
      </div>

      <div class="manager-kpi">
        <span>Achievement</span>
        <strong>${achievement}%</strong>
      </div>

      <div class="manager-kpi">
        <span>Gap</span>
        <strong>${formatMoney(gap)}</strong>
      </div>

      <div class="manager-kpi">
        <span>Daily Target</span>
        <strong>${formatMoney(dailyTarget)}</strong>
      </div>

    </div>

    <div class="manager-panel">

      <h3>📊 KPI Setup</h3>

      <div class="form-grid">

        <div class="form-group">
          <label>Monthly Target</label>
          <input
            id="salesTargetInput"
            type="number"
            value="${target}">
        </div>

        <div class="form-group">
          <label>Actual Sales</label>
          <input
            id="salesActualInput"
            type="number"
            value="${actual}">
        </div>

        <div class="form-group">
          <label>Working Days</label>
          <input
            id="workingDaysInput"
            type="number"
            value="${workingDays}">
        </div>

      </div>

      <button
        class="primary-btn"
        onclick="saveSalesKPI()">
        Save KPI
      </button>

    </div>

    <div class="manager-panel">

      <div class="panel-header">
        <div>
          <h3>👥 Team Performance</h3>
          <p>Team Member KPI</p>
        </div>

        <button
          class="primary-btn"
          onclick="addTeamMember()">
          + Add Member
        </button>
      </div>

      <div class="table-wrapper">

        <table class="manager-table">

          <thead>
            <tr>
              <th>Name</th>
              <th>Target</th>
              <th>Actual</th>
              <th>Achievement</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            ${salesManagerData.team
              .map((member) => {
                const achievement = getAchievement(
                  member.target,
                  member.actual
                );

                return `
                  <tr>

                    <td>
                      <strong>${escapeHTML(member.name)}</strong>
                    </td>

                    <td>${formatMoney(member.target)}</td>

                    <td>${formatMoney(member.actual)}</td>

                    <td>
                      <span class="achievement-pill">
                        ${achievement}%
                      </span>
                    </td>

                    <td>
                      <button
                        class="danger-btn"
                        onclick="removeTeamMember(${member.id})">
                        Delete
                      </button>
                    </td>

                  </tr>
                `;
              })
              .join("")}
          </tbody>

        </table>

      </div>

    </div>

    <div class="manager-panel">

      <div class="panel-header">
        <div>
          <h3>🎯 Action Plan</h3>
          <p>Turn Gap into Execution</p>
        </div>

        <button
          class="primary-btn"
          onclick="addActionPlan()">
          + Action
        </button>
      </div>

      <div class="action-list">

        ${
          salesManagerData.actions.length
            ? salesManagerData.actions
                .map(
                  (action) => `
                    <div class="action-item ${
                      action.done ? "done" : ""
                    }">

                      <div>
                        <h4>${escapeHTML(action.title)}</h4>
                        <p>
                          Owner: ${escapeHTML(action.owner)}
                          · Deadline: ${escapeHTML(action.deadline)}
                        </p>
                      </div>

                      <div class="action-buttons">

                        <button
                          class="secondary-btn"
                          onclick="toggleActionPlan(${action.id})">
                          ${action.done ? "Undo" : "Done"}
                        </button>

                        <button
                          class="danger-btn"
                          onclick="deleteActionPlan(${action.id})">
                          Delete
                        </button>

                      </div>

                    </div>
                  `
                )
                .join("")
            : `
              <div class="empty-state">
                Action Plan မရှိသေးပါ။
              </div>
            `
        }

      </div>

    </div>
  `;
}

function saveSalesKPI() {
  const target = Number($("#salesTargetInput")?.value) || 0;
  const actual = Number($("#salesActualInput")?.value) || 0;
  const workingDays =
    Number($("#workingDaysInput")?.value) || 26;

  salesManagerData.target = target;
  salesManagerData.actual = actual;
  salesManagerData.workingDays = workingDays;

  saveSalesData();
  renderSales();

  showToast("Sales KPI သိမ်းပြီးပါပြီ ✓");
}

function addTeamMember() {
  const name = prompt("Team Member Name:");

  if (!name) return;

  const target =
    Number(prompt("Monthly Target (MMK):")) || 0;

  const actual =
    Number(prompt("Actual Sales (MMK):")) || 0;

  salesManagerData.team.push({
    id: Date.now(),
    name,
    target,
    actual
  });

  saveSalesData();
  renderSales();

  showToast("Team Member ထည့်ပြီးပါပြီ");
}

function removeTeamMember(id) {
  salesManagerData.team =
    salesManagerData.team.filter(
      (member) => member.id !== id
    );

  saveSalesData();
  renderSales();

  showToast("Team Member ဖျက်ပြီးပါပြီ");
}

function addActionPlan() {
  const title = prompt("Action Plan:");

  if (!title) return;

  const owner =
    prompt("Owner:", "Sales Manager") ||
    "Sales Manager";

  const deadline =
    prompt("Deadline:", "This Week") ||
    "This Week";

  salesManagerData.actions.push({
    id: Date.now(),
    title,
    owner,
    deadline,
    done: false
  });

  saveSalesData();
  renderSales();

  showToast("Action Plan ထည့်ပြီးပါပြီ");
}

function toggleActionPlan(id) {
  const action = salesManagerData.actions.find(
    (item) => item.id === id
  );

  if (!action) return;

  action.done = !action.done;

  saveSalesData();
  renderSales();
}

function deleteActionPlan(id) {
  salesManagerData.actions =
    salesManagerData.actions.filter(
      (item) => item.id !== id
    );

  saveSalesData();
  renderSales();
}

function resetSalesData() {
  if (!confirm("Sales Manager data ကို Reset လုပ်မလား?")) {
    return;
  }

  localStorage.removeItem("aba_sales_manager_v1");

  location.reload();
}

/* =========================================================
   CALCULATORS
   ========================================================= */

function renderCalculators() {
  // Existing HTML calculators remain usable.
}

function openProfitCalculator() {
  openModal(
    `
      <div class="calculator-modal">
        <h2>💰 Profit Calculator</h2>

        <div class="form-group">
          <label>Sales Revenue</label>
          <input id="profitSales" type="number">
        </div>

        <div class="form-group">
          <label>Total Cost</label>
          <input id="profitCost" type="number">
        </div>

        <button
          class="primary-btn"
          onclick="calculateProfitTool()">
          Calculate
        </button>

        <div id="profitResult" class="calculator-result"></div>
      </div>
    `
  );
}

function calculateProfitTool() {
  const sales =
    Number($("#profitSales")?.value) || 0;

  const cost =
    Number($("#profitCost")?.value) || 0;

  const profit = sales - cost;

  const margin =
    sales > 0
      ? (profit / sales) * 100
      : 0;

  const result = $("#profitResult");

  if (result) {
    result.innerHTML = `
      <h3>Result</h3>
      <p>Gross Profit: <strong>${formatMoney(profit)}</strong></p>
      <p>Margin: <strong>${margin.toFixed(2)}%</strong></p>
    `;
  }
}

function openPricingCalculator() {
  openModal(
    `
      <div class="calculator-modal">
        <h2>🏷 Pricing Calculator</h2>

        <div class="form-group">
          <label>Cost</label>
          <input id="pricingCost" type="number">
        </div>

        <div class="form-group">
          <label>Target Margin %</label>
          <input id="pricingMargin" type="number" value="25">
        </div>

        <button
          class="primary-btn"
          onclick="calculatePricingTool()">
          Calculate
        </button>

        <div id="pricingResult" class="calculator-result"></div>
      </div>
    `
  );
}

function calculatePricingTool() {
  const cost =
    Number($("#pricingCost")?.value) || 0;

  const margin =
    Number($("#pricingMargin")?.value) || 0;

  const price =
    margin >= 100
      ? 0
      : cost / (1 - margin / 100);

  const result = $("#pricingResult");

  if (result) {
    result.innerHTML = `
      <h3>Recommended Selling Price</h3>
      <strong>${formatMoney(price)}</strong>
    `;
  }
}

function openBreakEvenCalculator() {
  openModal(
    `
      <div class="calculator-modal">
        <h2>📈 Break-even Calculator</h2>

        <div class="form-group">
          <label>Fixed Cost</label>
          <input id="breakFixed" type="number">
        </div>

        <div class="form-group">
          <label>Contribution Margin %</label>
          <input id="breakMargin" type="number" value="25">
        </div>

        <button
          class="primary-btn"
          onclick="calculateBreakEven()">
          Calculate
        </button>

        <div id="breakResult" class="calculator-result"></div>
      </div>
    `
  );
}

function calculateBreakEven() {
  const fixed =
    Number($("#breakFixed")?.value) || 0;

  const margin =
    Number($("#breakMargin")?.value) || 0;

  const result = $("#breakResult");

  if (!margin) {
    result.innerHTML =
      "<p>Margin % ထည့်ပေးပါ။</p>";
    return;
  }

  const breakEven = fixed / (margin / 100);

  result.innerHTML = `
    <h3>Break-even Sales</h3>
    <strong>${formatMoney(breakEven)}</strong>
  `;
}

function openSalesTargetCalculator() {
  openModal(
    `
      <div class="calculator-modal">
        <h2>🎯 Sales Target Calculator</h2>

        <div class="form-group">
          <label>Monthly Target</label>
          <input id="targetCalc" type="number">
        </div>

        <div class="form-group">
          <label>Working Days</label>
          <input id="daysCalc" type="number" value="26">
        </div>

        <button
          class="primary-btn"
          onclick="calculateSalesTarget()">
          Calculate
        </button>

        <div id="targetResult" class="calculator-result"></div>
      </div>
    `
  );
}

function calculateSalesTarget() {
  const target =
    Number($("#targetCalc")?.value) || 0;

  const days =
    Number($("#daysCalc")?.value) || 26;

  const daily = target / days;
  const weekly = target / 4;

  const result = $("#targetResult");

  result.innerHTML = `
    <h3>Target Breakdown</h3>
    <p>Daily Target: <strong>${formatMoney(daily)}</strong></p>
    <p>Weekly Target: <strong>${formatMoney(weekly)}</strong></p>
  `;
}

/* =========================================================
   REPORTS
   ========================================================= */

function renderReports() {
  const page = $("#reportsPage");

  if (!page) return;

  let container =
    page.querySelector("#reportsContent") ||
    page.querySelector(".reports-content");

  if (!container) {
    container = document.createElement("div");
    container.className = "reports-content";
    page.appendChild(container);
  }

  const achievement = getAchievement(
    salesManagerData.target,
    salesManagerData.actual
  );

  container.innerHTML = `
    <div class="report-summary">

      <div class="report-card">
        <span>Sales Target</span>
        <strong>${formatMoney(
          salesManagerData.target
        )}</strong>
      </div>

      <div class="report-card">
        <span>Actual</span>
        <strong>${formatMoney(
          salesManagerData.actual
        )}</strong>
      </div>

      <div class="report-card">
        <span>Achievement</span>
        <strong>${achievement}%</strong>
      </div>

    </div>

    <div class="report-card large">
      <h3>Management Recommendation</h3>

      <p>
        ${
          achievement >= 100
            ? "Target ရရှိပြီးဖြစ်ပါသည်။ ယခုအဆင့်မှာ Profitability နဲ့ Sustainable Growth ကို အာရုံစိုက်ပါ။"
            : achievement >= 80
            ? "Performance ကောင်းမွန်သော်လည်း Gap ရှိနေပါသည်။ Top Customers, Distribution နှင့် Low Performer Areas ကို Focus လုပ်ပါ။"
            : "Target Gap ကြီးနေပါသည်။ Root Cause Analysis ပြုလုပ်ပြီး Immediate Recovery Action Plan ချမှတ်ပါ။"
        }
      </p>
    </div>
  `;
}

/* =========================================================
   AI BUSINESS COACH
   ========================================================= */

function renderAI() {
  const page = $("#aiPage");

  if (!page) return;

  const input =
    page.querySelector("#aiInput") ||
    page.querySelector("#coachInput");

  if (input && !input.dataset.bound) {
    input.dataset.bound = "true";

    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        sendAIMessage();
      }
    });
  }
}

function openAITool(topic) {
  navigate("ai");

  setTimeout(() => {
    const input =
      $("#aiInput") ||
      $("#coachInput");

    if (input) {
      input.value = topic;
      sendAIMessage();
    }
  }, 100);
}

function sendAIMessage() {
  const input =
    $("#aiInput") ||
    $("#coachInput");

  if (!input) return;

  const message = input.value.trim();

  if (!message) return;

  const chat =
    $("#aiChat") ||
    $("#coachChat") ||
    $(".ai-chat");

  if (!chat) return;

  const userMessage = document.createElement("div");

  userMessage.className = "chat-message user";

  userMessage.innerHTML = `
    <div class="chat-bubble">
      ${escapeHTML(message)}
    </div>
  `;

  chat.appendChild(userMessage);

  const response = getAIResponse(message);

  const assistantMessage =
    document.createElement("div");

  assistantMessage.className =
    "chat-message assistant";

  assistantMessage.innerHTML = `
    <div class="chat-bubble ai-response">
      ${response}
    </div>
  `;

  chat.appendChild(assistantMessage);

  input.value = "";

  chat.scrollTop = chat.scrollHeight;
}

function getAIResponse(message) {
  const text = message.toLowerCase();

  if (
    text.includes("target") ||
    text.includes("မပြည့်") ||
    text.includes("sales ကျ")
  ) {
    return `
      <h3>🎯 Sales Target မပြည့်ရင် ဘယ်လိုလုပ်မလဲ?</h3>

      <p>
        Target မပြည့်တာကို Result Problem လို့ပဲမကြည့်ဘဲ
        <strong>Root Cause → Gap → Action Plan → Follow-up</strong>
        ဆိုတဲ့ Framework နဲ့ ဖြေရှင်းပါ။
      </p>

      <h4>1️⃣ အရင်ဆုံး Number ကိုစစ်ပါ</h4>
      <ul>
        <li>Target ဘယ်လောက်လဲ?</li>
        <li>Actual ဘယ်လောက်လဲ?</li>
        <li>Achievement % ဘယ်လောက်လဲ?</li>
        <li>Gap ဘယ်လောက်လဲ?</li>
      </ul>

      <h4>2️⃣ Gap ရဲ့အကြောင်းရင်းရှာပါ</h4>
      <ul>
        <li>Customer Coverage နည်းလား?</li>
        <li>Product Availability မရှိလား?</li>
        <li>Distributor Stock ပြဿနာလား?</li>
        <li>Competitor Promotion တက်လာလား?</li>
        <li>Sales Team Execution အားနည်းလား?</li>
        <li>Price / Margin ပြဿနာလား?</li>
      </ul>

      <h4>3️⃣ Recovery Action Plan</h4>
      <p>
        Gap 50 သိန်းရှိတယ်ဆိုရင် "ပိုရောင်းပါ" လို့မပြောဘဲ
        Customer 10 ခုက 3 သိန်းစီ၊ New Customer 5 ခုက
        4 သိန်းစီ စသည်ဖြင့် Gap ကို Action အဖြစ် ခွဲပါ။
      </p>

      <h4>4️⃣ KPI</h4>
      <ul>
        <li>Daily Sales</li>
        <li>Customer Visits</li>
        <li>New Customers</li>
        <li>Strike Rate</li>
        <li>Distribution</li>
        <li>Achievement %</li>
      </ul>

      <h4>👔 Sales Manager Rule</h4>
      <p>
        <strong>Don't manage the target. Manage the activities
        that create the target.</strong>
      </p>
    `;
  }

  if (
    text.includes("team") ||
    text.includes("performance") ||
    text.includes("ဝန်ထမ်း") ||
    text.includes("salesperson")
  ) {
    return `
      <h3>👥 Team Performance တိုးတက်အောင် ဘယ်လိုလုပ်မလဲ?</h3>

      <p>
        Team Performance အတွက် <strong>People + Numbers + Execution</strong>
        သုံးခုကို တစ်ပြိုင်နက်တည်း စီမံရပါမယ်။
      </p>

      <h4>1️⃣ People</h4>
      <p>
        Team Member တစ်ယောက်ချင်းစီရဲ့ Strength, Weakness,
        Skill Gap နဲ့ Motivation ကို သိထားပါ။
      </p>

      <h4>2️⃣ Numbers</h4>
      <ul>
        <li>Target</li>
        <li>Actual</li>
        <li>Achievement %</li>
        <li>Customer Visits</li>
        <li>New Customer</li>
        <li>Conversion / Strike Rate</li>
      </ul>

      <h4>3️⃣ Coaching</h4>
      <p>
        "ဘာလို့ Target မပြည့်တာလဲ?" လို့ အပြစ်တင်မယ့်အစား
        "ဘယ်နေရာမှာ Gap ဖြစ်နေတာလဲ?"
        "ဘယ် Support လိုလဲ?"
        "ဒီအပတ်မှာ ဘာ Result ယူမလဲ?"
        ဆိုပြီး Coaching လုပ်ပါ။
      </p>

      <h4>4️⃣ Weekly Review</h4>
      <p>
        Weekly 1-on-1 Review တစ်ကြိမ်လုပ်ပြီး
        Strength 1 ခု၊ Development Area 1 ခု၊
        Next Action 1 ခု သတ်မှတ်ပါ။
      </p>

      <h4>👔 Leadership Principle</h4>
      <p>
        Clear Expectation + Coaching + Accountability
        = High Performance Team
      </p>
    `;
  }

  if (
    text.includes("margin") ||
    text.includes("profit") ||
    text.includes("အမြတ်") ||
    text.includes("ကုန်ကျ")
  ) {
    return `
      <h3>💰 Profit & Margin ကို ဘယ်လိုစီမံမလဲ?</h3>

      <h4>1️⃣ Gross Profit</h4>

      <p>
        Gross Profit = Sales Revenue − Cost of Goods Sold
      </p>

      <h4>2️⃣ Gross Margin %</h4>

      <p>
        Gross Margin % =
        Gross Profit ÷ Sales Revenue × 100
      </p>

      <h4>📌 Example</h4>

      <p>
        Sales = 100 သိန်း<br>
        Cost = 75 သိန်း<br>
        Gross Profit = 25 သိန်း<br>
        Gross Margin = 25%
      </p>

      <h4>3️⃣ Manager က ဘာတွေကြည့်ရမလဲ?</h4>

      <ul>
        <li>Discount %</li>
        <li>Product Mix</li>
        <li>Gross Margin</li>
        <li>Distribution Cost</li>
        <li>Sales Expense</li>
      </ul>

      <h4>👔 Manager Rule</h4>

      <p>
        Sales Volume တက်လာတာကောင်းပါတယ်။
        ဒါပေမယ့် Volume တက်ပြီး Margin ကျနေတယ်ဆိုရင်
        Business Quality ကို ပြန်စစ်ရပါမယ်။
      </p>
    `;
  }

  if (
    text.includes("distributor") ||
    text.includes("distribution")
  ) {
    return `
      <h3>🚚 Distributor Sales ကျရင် ဘယ်လိုလုပ်မလဲ?</h3>

      <p>
        Distributor Sales ကျတာကို Order ကျတာတစ်ခုတည်းလို့ မယူဆပါနဲ့။
        <strong>Stock → Coverage → Team → Customer → Competition</strong>
        အဆင့်လိုက်စစ်ပါ။
      </p>

      <h4>1️⃣ Stock</h4>
      <p>Distributor Warehouse မှာ Stock လုံလောက်သလား?</p>

      <h4>2️⃣ Coverage</h4>
      <p>Sales Team က Outlet တွေကို ပုံမှန် Cover လုပ်နေသလား?</p>

      <h4>3️⃣ Team</h4>
      <p>Manpower လုံလောက်သလား? Productivity ကောင်းသလား?</p>

      <h4>4️⃣ Customer</h4>
      <p>Top Customers တွေရဲ့ Order Frequency ကျသလား?</p>

      <h4>5️⃣ Competition</h4>
      <p>Competitor က Price / Promotion / Availability ပိုကောင်းလာသလား?</p>

      <h4>🎯 Action Plan</h4>
      <ul>
        <li>Top Customer Review</li>
        <li>Stock Replenishment</li>
        <li>Outlet Coverage Increase</li>
        <li>Field Coaching</li>
        <li>Competitor Check</li>
      </ul>
    `;
  }

  if (
    text.includes("interview") ||
    text.includes("အင်တာဗျူး") ||
    text.includes("job")
  ) {
    return `
      <h3>🎤 Sales Manager Interview Preparation</h3>

      <h4>အရေးကြီးဆုံး Framework</h4>

      <p>
        Interview မှာ ကိုယ့် Experience ကို
        <strong>Situation → Action → Result</strong>
        ပုံစံနဲ့ ပြောပါ။
      </p>

      <h4>မိမိ Strength ကို ဘယ်လိုပြောမလဲ?</h4>

      <p>
        "My biggest strength is my ability to convert sales targets
        into practical field execution."
      </p>

      <p>
        မြန်မာလိုဆိုရင် Target ကို Number အဖြစ်ပဲမကြည့်ဘဲ
        People, Numbers and Execution သုံးခုအဖြစ် ခွဲပြီး
        Team ကို Field Action အဖြစ် ပြောင်းလဲနိုင်တာက
        မိမိရဲ့ Strength ဖြစ်ပါတယ်။
      </p>

      <h4>Leadership Style</h4>

      <p>
        Coaching and Empowerment ကို အဓိကထားပြီး
        Clear Expectations, Direction, Regular Review,
        Feedback နဲ့ Accountability ကို အသုံးပြုပါတယ်။
        Micromanagement ကို မယုံကြည်ဘဲ Team ကို Ownership ပေးပါတယ်။
      </p>
    `;
  }

  if (
    text.includes("customer") ||
    text.includes("key account") ||
    text.includes("ဖောက်သည်")
  ) {
    return `
      <h3>🤝 Customer / Key Account Management</h3>

      <p>
        Customer ကို Order ယူတဲ့ Account တစ်ခုအဖြစ်မဟုတ်ဘဲ
        <strong>Business Partner</strong> အဖြစ် Manage လုပ်ပါ။
      </p>

      <h4>Customer Review Framework</h4>

      <ol>
        <li>Current Sales</li>
        <li>Growth Potential</li>
        <li>Product Mix</li>
        <li>Margin</li>
        <li>Competitor Share</li>
        <li>Payment / AR</li>
        <li>Next Opportunity</li>
      </ol>

      <h4>🎯 Manager Action</h4>

      <p>
        Top 20 Customers ကို သတ်မှတ်ပြီး Monthly Business Review
        လုပ်ပါ။ Customer တစ်ခုချင်းစီအတွက် Growth Opportunity
        နဲ့ Risk ကို သတ်မှတ်ပါ။
      </p>
    `;
  }

  if (
    text.includes("strategy") ||
    text.includes("strategic") ||
    text.includes("မဟာဗျူဟာ")
  ) {
    return `
      <h3>🧠 Strategic Thinking</h3>

      <p>
        Strategy ဆိုတာ အလုပ်များများလုပ်ခြင်းမဟုတ်ပါ။
        Business Impact အမြင့်ဆုံးအရာတွေကို ရွေးချယ်ပြီး
        Resource ကို အဲဒီနေရာမှာ အာရုံစိုက်ခြင်းဖြစ်ပါတယ်။
      </p>

      <h4>Strategic Framework</h4>

      <ol>
        <li>Current Situation</li>
        <li>Problem / Opportunity</li>
        <li>Root Cause</li>
        <li>Strategic Choice</li>
        <li>Action Plan</li>
        <li>KPI</li>
        <li>Review</li>
      </ol>

      <h4>မေးရမယ့်မေးခွန်း</h4>

      <p>
        "ဘာဖြစ်နေသလဲ?" ပြီးရင်
        "ဘာကြောင့်ဖြစ်တာလဲ?"
        "ဘာလုပ်ရင် Business Impact အများဆုံးရမလဲ?"
        "ဘယ် KPI နဲ့တိုင်းမလဲ?"
        ဆိုတာ ဆက်မေးပါ။
      </p>
    `;
  }

  return `
    <h3>🤖 Aung Business Coach</h3>

    <p>
      မေးခွန်းကို Business Manager အမြင်နဲ့
      <strong>Problem → Root Cause → Solution → Action → KPI</strong>
      ပုံစံနဲ့ ခွဲခြမ်းစဉ်းစားနိုင်ပါတယ်။
    </p>

    <h4>လက်တွေ့အသုံးချနိုင်တဲ့ မေးခွန်းများ</h4>

    <ul>
      <li>Target မပြည့်ရင် ဘာလုပ်မလဲ?</li>
      <li>Team Performance ဘယ်လိုတိုးမလဲ?</li>
      <li>Distributor Sales ကျရင် ဘာလုပ်မလဲ?</li>
      <li>Profit Margin ဘယ်လိုတွက်မလဲ?</li>
      <li>Key Customer ကို ဘယ်လို Manage မလဲ?</li>
      <li>Sales Manager Interview ဘယ်လိုဖြေရမလဲ?</li>
      <li>Business Strategy ဘယ်လိုချမလဲ?</li>
    </ul>

    <p>
      မေးခွန်းကို ပိုတိကျအောင်ရေးပေးရင်
      လက်တွေ့ Business Example နဲ့
      Action Plan အထိ အသေးစိတ်ဖြေပေးမယ်။
    </p>
  `;
}

/* =========================================================
   TOOLS
   ========================================================= */

function renderTools() {
  // AI Tools page remains compatible with existing HTML.
}

function openTools() {
  navigate("tools");
}

/* =========================================================
   PROFILE / SETTINGS
   ========================================================= */

function openProfile() {
  openModal(`
    <div class="profile-modal">
      <div class="profile-avatar">AZ</div>

      <h2>Aung Zar Ni Win</h2>

      <p>Business Manager</p>

      <div class="profile-info">
        <div>
          <span>Learning Progress</span>
          <strong>${Math.round(
            (completedLessons.length / LESSONS.length) * 100
          )}%</strong>
        </div>

        <div>
          <span>Completed Lessons</span>
          <strong>${completedLessons.length}</strong>
        </div>
      </div>
    </div>
  `);
}

function logoutUser() {
  showToast("Logout function ကို နောက်ပိုင်းမှာ Account System နဲ့ ချိတ်နိုင်ပါတယ်။");
}

function showNotification() {
  showToast("အသစ်ထည့်ထားသော Lesson နှင့် AI Coach ကို အသုံးပြုနိုင်ပါပြီ။");
}

/* =========================================================
   SEARCH
   ========================================================= */

function performSearch() {
  const input =
    $("#globalSearch") ||
    $("#academySearch");

  if (!input) return;

  const query = input.value.trim().toLowerCase();

  if (!query) return;

  const found = LESSONS.find(
    (lesson) =>
      lesson.title.toLowerCase().includes(query) ||
      lesson.subtitle.toLowerCase().includes(query) ||
      lesson.category.toLowerCase().includes(query)
  );

  if (found) {
    openLessonById(found.id);
  } else {
    showToast("သင်ခန်းစာ မတွေ့ပါ။");
  }
}

/* =========================================================
   SIDEBAR
   ========================================================= */

function toggleSidebar() {
  const sidebar = $("#sidebar");

  if (!sidebar) return;

  sidebar.classList.toggle("open");

  const overlay = $("#sidebarOverlay");

  if (overlay) {
    overlay.classList.toggle("show");
  }
}

function openSidebar() {
  const sidebar = $("#sidebar");

  if (!sidebar) return;

  sidebar.classList.add("open");

  const overlay = $("#sidebarOverlay");

  if (overlay) {
    overlay.classList.add("show");
  }
}

function closeSidebar() {
  const sidebar = $("#sidebar");

  if (sidebar) {
    sidebar.classList.remove("open");
  }

  const overlay = $("#sidebarOverlay");

  if (overlay) {
    overlay.classList.remove("show");
  }
}

/* =========================================================
   MODAL
   ========================================================= */

function openModal(content, extraClass = "") {
  const overlay =
    $("#modalOverlay") ||
    $("#appModal");

  const body =
    $("#modalBody") ||
    $("#appModalBody");

  if (!overlay || !body) {
    console.error("Modal element not found.");
    return;
  }

  body.innerHTML = content;

  overlay.classList.add("show", "active");

  if (extraClass) {
    overlay.classList.add(extraClass);
  }

  document.body.classList.add("modal-open");
}

function closeModal() {
  const overlay =
    $("#modalOverlay") ||
    $("#appModal");

  if (!overlay) return;

  overlay.classList.remove(
    "show",
    "active",
    "lesson-modal"
  );

  document.body.classList.remove("modal-open");
}

function showToast(message) {
  const toast = $("#toast");

  if (!toast) {
    console.log(message);
    return;
  }

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.__toastTimer);

  window.__toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

/* =========================================================
   DOM EVENTS
   ========================================================= */

function initializeNavigation() {
  document.addEventListener("click", (event) => {
    const nav = event.target.closest("[data-page]");

    if (nav) {
      event.preventDefault();

      const page = nav.dataset.page;

      if (page) {
        navigate(page);
      }
    }
  });

  const mobileMenu = $("#mobileMenu");

  if (mobileMenu) {
    mobileMenu.addEventListener("click", toggleSidebar);
  }

  const notificationBtn = $("#notificationBtn");

  if (notificationBtn) {
    notificationBtn.addEventListener(
      "click",
      showNotification
    );
  }

  const modalClose = $("#modalClose");

  if (modalClose) {
    modalClose.addEventListener(
      "click",
      closeModal
    );
  }

  const modalOverlay = $("#modalOverlay");

  if (modalOverlay) {
    modalOverlay.addEventListener("click", (event) => {
      if (event.target === modalOverlay) {
        closeModal();
      }
    });
  }

  const sidebarOverlay = $("#sidebarOverlay");

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener(
      "click",
      closeSidebar
    );
  }

  const search =
    $("#globalSearch") ||
    $("#academySearch");

  if (search) {
    search.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        performSearch();
      }
    });
  }
}

/* =========================================================
   INITIALIZE
   ========================================================= */

function initializeApp() {
  console.log(
    "Aung Business Academy V8 initialized."
  );

  initializeNavigation();

  renderDashboard();
  renderCourses();
  renderLessons();
  renderProgress();
  renderSales();
  renderReports();
  renderAI();
  renderTools();

  navigate("dashboard");
}

/* =========================================================
   GLOBAL EXPORTS
   ========================================================= */

window.navigate = navigate;
window.goDashboard = goDashboard;

window.openLessons = openLessons;
window.continueLearning = continueLearning;
window.openBusinessPlan = openBusinessPlan;
window.openCategory = openCategory;

window.openCourse = openCourse;

window.renderLessons = renderLessons;
window.openLessonById = openLessonById;
window.openLesson = openLesson;
window.previousLesson = previousLesson;
window.nextLesson = nextLesson;
window.completeLesson = completeLesson;

window.renderProgress = renderProgress;

window.renderSales = renderSales;
window.saveSalesKPI = saveSalesKPI;
window.addTeamMember = addTeamMember;
window.removeTeamMember = removeTeamMember;
window.addActionPlan = addActionPlan;
window.toggleActionPlan = toggleActionPlan;
window.deleteActionPlan = deleteActionPlan;
window.resetSalesData = resetSalesData;

window.openProfitCalculator = openProfitCalculator;
window.openPricingCalculator = openPricingCalculator;
window.openBreakEvenCalculator = openBreakEvenCalculator;
window.openSalesTargetCalculator = openSalesTargetCalculator;

window.calculateProfitTool = calculateProfitTool;
window.calculatePricingTool = calculatePricingTool;
window.calculateBreakEven = calculateBreakEven;
window.calculateSalesTarget = calculateSalesTarget;

window.sendAIMessage = sendAIMessage;
window.getAIResponse = getAIResponse;
window.openAITool = openAITool;

window.openTools = openTools;
window.openProfile = openProfile;
window.logoutUser = logoutUser;
window.showNotification = showNotification;

window.performSearch = performSearch;

window.toggleSidebar = toggleSidebar;
window.openSidebar = openSidebar;
window.closeSidebar = closeSidebar;

window.openModal = openModal;
window.closeModal = closeModal;
window.showToast = showToast;

/* =========================================================
   START
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  initializeApp
);
