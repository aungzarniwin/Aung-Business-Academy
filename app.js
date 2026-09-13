/* =========================================================
   AUNG BUSINESS ACADEMY V8
   Professional Business Academy
   Detailed Lessons + AI Coach + Sales Manager
========================================================= */

"use strict";

/* =========================================================
   HELPERS
========================================================= */

const $ = (id) => document.getElementById(id);

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
   COURSES
========================================================= */

const COURSES = [

  {
    id: 1,
    title: "Sales Management Mastery",
    icon: "🎯",
    description:
      "Sales target planning, execution, KPI, team management, distributor management နှင့် sales leadership ကို လေ့လာပါ။",
    lessonIds: [1, 2, 3, 4, 8]
  },

  {
    id: 2,
    title: "Business Strategy",
    icon: "♟",
    description:
      "Market analysis, strategic thinking, competitive advantage နှင့် business planning ကို လေ့လာပါ။",
    lessonIds: [5, 6, 14]
  },

  {
    id: 3,
    title: "Marketing & Brand",
    icon: "📣",
    description:
      "Brand positioning, customer understanding, marketing planning နှင့် promotion strategy ကို လေ့လာပါ။",
    lessonIds: [7, 9]
  },

  {
    id: 4,
    title: "People & Leadership",
    icon: "👥",
    description:
      "Coaching, delegation, performance management, motivation နှင့် leadership ကို လေ့လာပါ။",
    lessonIds: [10, 11, 12, 13]
  }

];


/* =========================================================
   DETAILED LESSONS
========================================================= */

const LESSONS = [

  {
    id: 1,
    category: "Sales Basics",
    course: "Sales Management Mastery",
    title: "Sales Target ကို Execution Plan အဖြစ် ပြောင်းလဲခြင်း",
    minutes: 18,

    summary:
      "Sales Manager တစ်ယောက်အတွက် Target ရရှိခြင်းဟာ Number တစ်ခုကိုကြည့်ရုံနဲ့ မပြီးပါဘူး။ Target ကို လူ၊ Customer၊ Product၊ Territory နဲ့ Daily Execution အဖြစ် ခွဲပြီး အကောင်အထည်ဖော်ရပါတယ်။",

    objectives: [
      "Monthly target ကို daily/weekly target အဖြစ် ခွဲတတ်ရန်",
      "Target gap ကို မြန်မြန်သိရှိနိုင်ရန်",
      "Sales team တစ်ခုချင်းစီ၏ contribution ကို သတ်မှတ်တတ်ရန်",
      "Execution plan တစ်ခုကို KPI နဲ့ချိတ်ဆက်တတ်ရန်"
    ],

    sections: [
      {
        title: "1. Target ကို Number တစ်ခုအနေနဲ့ မကြည့်ပါနဲ့",
        text:
          "ဥပမာ Monthly Sales Target က 300 သိန်း ဖြစ်တယ်ဆိုပါစို့။ Sales Manager အနေနဲ့ 300 သိန်းဆိုတဲ့ number ကိုပဲကြည့်နေမယ်ဆိုရင် Team ကို ဘာလုပ်ခိုင်းရမလဲဆိုတာ မရှင်းနိုင်ပါဘူး။ 300 သိန်းကို Territory, Salesperson, Customer, Product နဲ့ Time အလိုက် ခွဲဖို့လိုပါတယ်။"
      },

      {
        title: "2. Target Breakdown",
        text:
          "ပထမဆုံး Monthly Target ကို Working Days နဲ့ ခွဲပါ။ 300 သိန်း / 26 days = တစ်နေ့ပျမ်းမျှ 11.54 သိန်း ဖြစ်ပါတယ်။ ပြီးရင် Salesperson တစ်ယောက်ချင်းစီ၊ Territory တစ်ခုချင်းစီနဲ့ Customer group အလိုက် ထပ်ခွဲနိုင်ပါတယ်။"
      },

      {
        title: "3. Gap Management",
        text:
          "Month ရဲ့ 15 ရက်နေ့မှာ Target 300 သိန်းထဲက 120 သိန်းပဲရသေးတယ်ဆိုရင် Achievement က 40% ဖြစ်ပါတယ်။ Time elapsed က 58% ခန့်ရှိနေတဲ့အတွက် Business Risk ရှိနေပြီလို့ယူဆရပါမယ်။ ဒီအချိန်မှာ 'ပိုကြိုးစားပါ' ဆိုတာထက် Root Cause နဲ့ Action Plan လိုပါတယ်။"
      }
    ],

    example:
      "Automobile Sales Example — Monthly Target 20 units ဖြစ်ပြီး Day 15 မှာ 7 units ပဲရောင်းထားတယ်။ Achievement = 35% ဖြစ်ပါတယ်။ ကျန် 15 ရက်မှာ 13 units ရောင်းရမယ်။ ဒီအချိန်မှာ Lead, Test Drive, Quotation, Finance Approval, Closing Pipeline ကို တစ်ဆင့်ချင်း စစ်ရပါမယ်။",

    managerApplication:
      "Sales Manager အနေနဲ့ Morning Review မှာ Target vs Actual, Pipeline, Customer Visits, New Leads နဲ့ Closing Plan ကို ကြည့်ပါ။ Weekly Review မှာ Territory တစ်ခုချင်းစီရဲ့ Gap နဲ့ Recovery Plan ကို သတ်မှတ်ပါ။",

    kpis: [
      "Target Achievement %",
      "Daily Sales",
      "Weekly Sales",
      "Sales Pipeline",
      "Conversion Rate",
      "Customer Visit",
      "New Customer",
      "Closing Rate"
    ],

    checklist: [
      "Monthly Target သတ်မှတ်ပြီးပြီလား?",
      "Target ကို Daily Target အဖြစ်ခွဲပြီးပြီလား?",
      "Team Member တစ်ယောက်ချင်း Target ရှိလား?",
      "Gap ကို Weekly စစ်လား?",
      "Recovery Action Plan ရှိလား?"
    ],

    assignment:
      "သင့်ရဲ့ လက်ရှိလုပ်ငန်း Monthly Target ကိုယူပြီး Daily Target, Weekly Target နဲ့ Team Member Target အဖြစ် ခွဲရေးပါ။ Gap ဖြစ်ရင် Recovery Action 3 ခုရေးပါ.",

    takeaways: [
      "Target → Breakdown → Execution → Review → Recovery",
      "Number တစ်ခုတည်းမကြည့်ဘဲ Driver ကိုရှာပါ",
      "Gap ကို စောစောသိလေလေ Recovery လုပ်ဖို့ လွယ်လေလေ"
    ]
  },


  {
    id: 2,
    category: "Sales Basics",
    course: "Sales Management Mastery",
    title: "Sales KPI Management",
    minutes: 20,

    summary:
      "KPI ဆိုတာ Sales Team ကို ဖိအားပေးဖို့အတွက်မဟုတ်ပါဘူး။ Result မကောင်းရတဲ့ အကြောင်းရင်းကို စောစောသိပြီး Action ယူနိုင်ဖို့အတွက် အသုံးပြုတာဖြစ်ပါတယ်။",

    objectives: [
      "Lagging KPI နဲ့ Leading KPI ကွာခြားချက်ကို သိရန်",
      "Sales Dashboard တည်ဆောက်တတ်ရန်",
      "Performance Gap ရှာတတ်ရန်",
      "KPI ကို Coaching နဲ့ချိတ်ဆက်တတ်ရန်"
    ],

    sections: [
      {
        title: "Lagging KPI",
        text:
          "Sales Revenue, Volume, Achievement % စတာတွေဟာ Result ထွက်ပြီးမှ မြင်ရတဲ့ KPI တွေပါ။ ဒီ KPI တွေက အရေးကြီးပေမယ့် ပြဿနာဖြစ်ပြီးမှ သိရတတ်ပါတယ်။"
      },

      {
        title: "Leading KPI",
        text:
          "Customer Visits, New Leads, Test Drives, Quotations, Productive Calls, Order Conversion စတာတွေက Result မထွက်ခင် ကြိုတင်စောင့်ကြည့်နိုင်တဲ့ KPI တွေပါ။ Sales Manager တစ်ယောက်အနေနဲ့ Leading KPI ကို ပိုစောင့်ကြည့်သင့်ပါတယ်။"
      },

      {
        title: "KPI Review",
        text:
          "Daily မှာ activity KPI, Weekly မှာ pipeline နှင့် achievement, Monthly မှာ final result ကို review လုပ်ပါ။ KPI များလွန်းရင် Team က မလိုအပ်တဲ့ reporting အလုပ်တွေမှာ အချိန်ကုန်နိုင်ပါတယ်။"
      }
    ],

    example:
      "Salesperson တစ်ယောက်ရဲ့ Monthly Sales ကျနေတယ်။ သူ့ကို 'ပိုရောင်းပါ' လို့ပြောမယ့်အစား Customer Visits 80 → 45 ဖြစ်သွားလား၊ Quotation 30 → 12 ဖြစ်သွားလား၊ Conversion 25% → 10% ဖြစ်သွားလား စစ်ပါ။",

    managerApplication:
      "Weekly One-to-One Review တစ်ခုလုပ်ပြီး KPI Gap → Root Cause → Coaching → Action → Follow-up ဆိုတဲ့ cycle နဲ့ manage လုပ်ပါ။",

    kpis: [
      "Revenue",
      "Volume",
      "Achievement %",
      "Customer Visits",
      "Leads",
      "Quotation",
      "Conversion",
      "Average Order Value"
    ],

    checklist: [
      "Leading KPI သတ်မှတ်ထားလား?",
      "Lagging KPI သတ်မှတ်ထားလား?",
      "Daily/Weekly/Monthly Review ရှိလား?",
      "Gap ဖြစ်ရင် Root Cause ရှာလား?",
      "Action Plan နဲ့ Follow-up ရှိလား?"
    ],

    assignment:
      "သင့် Sales Team အတွက် Leading KPI 5 ခုနဲ့ Lagging KPI 3 ခု ရွေးပြီး Weekly Dashboard တစ်ခုဖန်တီးပါ။",

    takeaways: [
      "KPI = Measurement + Diagnosis + Action",
      "Leading KPI ကို စောစောစစ်ပါ",
      "KPI Review ကို Coaching နဲ့တွဲပါ"
    ]
  },


  {
    id: 3,
    category: "Sales Basics",
    course: "Sales Management Mastery",
    title: "Sales Gap Analysis & Recovery Plan",
    minutes: 22,

    summary:
      "Sales Gap ဆိုတာ Target နဲ့ Actual ကြားက ကွာဟချက်ပါ။ Gap ကိုသိရုံနဲ့ မလုံလောက်ပါဘူး။ Gap ရဲ့ Root Cause ကိုရှာပြီး Recovery Plan ချမှတ်ရပါတယ်။",

    objectives: [
      "Gap ကို value နှင့် percentage နှစ်မျိုးစလုံးတွက်တတ်ရန်",
      "Root Cause ခွဲခြမ်းတတ်ရန်",
      "Recovery Plan တည်ဆောက်တတ်ရန်",
      "Priority Action သတ်မှတ်တတ်ရန်"
    ],

    sections: [
      {
        title: "Gap Calculation",
        text:
          "Target 300 သိန်း၊ Actual 240 သိန်းဆိုရင် Gap = 60 သိန်း ဖြစ်ပါတယ်။ Achievement = 80% ဖြစ်ပါတယ်။ Gap ကို percentage အနေနဲ့လည်းကြည့်ပြီး ဘယ်လောက်ပြန်ရဖို့လိုတယ်ဆိုတာ တွက်ရပါမယ်။"
      },

      {
        title: "Root Cause Categories",
        text:
          "Sales Gap ကို People, Product, Price, Place, Promotion, Process နဲ့ Customer စတဲ့ category တွေအလိုက် စစ်နိုင်ပါတယ်။"
      },

      {
        title: "Recovery Plan",
        text:
          "Recovery Plan မှာ Action, Owner, Deadline, Expected Result နဲ့ Measurement ပါရပါမယ်။ 'Sales တိုးအောင်လုပ်မယ်' ဆိုတာ Action Plan မဟုတ်ပါဘူး။ 'Top 20 customers ကို 3 ရက်အတွင်း visit လုပ်ပြီး additional order 20 သိန်း ရယူမယ်' ဆိုတာ Action Plan ဖြစ်ပါတယ်။"
      }
    ],

    example:
      "Distributor Sales 30% ကျသွားတယ်ဆိုရင် Order ကျတာလား၊ Stock မရှိတာလား၊ Credit Limit ပြဿနာလား၊ Market Demand ကျတာလား၊ Competitor Promotion ရှိတာလား စစ်ပါ။",

    managerApplication:
      "Gap ဖြစ်တိုင်း လူကို အပြစ်တင်တာထက် Systematic Root Cause Analysis လုပ်ပါ။ 5 Why Method ကို အသုံးပြုနိုင်ပါတယ်။",

    kpis: [
      "Gap Value",
      "Gap %",
      "Recovery Sales",
      "New Orders",
      "Pipeline Value",
      "Customer Reactivation"
    ],

    checklist: [
      "Gap Value တွက်ပြီးပြီလား?",
      "Gap % သိပြီလား?",
      "Root Cause သတ်မှတ်ပြီးပြီလား?",
      "Owner သတ်မှတ်ပြီးပြီလား?",
      "Deadline ရှိလား?"
    ],

    assignment:
      "လက်ရှိလုပ်ငန်းမှာ ဖြစ်နိုင်တဲ့ Sales Gap တစ်ခုကိုရွေးပြီး Root Cause 5 ခုနဲ့ Recovery Action 5 ခုရေးပါ။",

    takeaways: [
      "Gap ကို စောစောသိပါ",
      "Root Cause မသိဘဲ Action မချပါနဲ့",
      "Action Plan မှာ Owner + Deadline + KPI ပါရမယ်"
    ]
  },


  {
    id: 4,
    category: "Sales Basics",
    course: "Sales Management Mastery",
    title: "Customer & Key Account Management",
    minutes: 20,

    summary:
      "Key Account Management မှာ Customer နဲ့ Relationship တစ်ခုတည်းမဟုတ်ဘဲ Business Growth Opportunity ကို စနစ်တကျ Manage လုပ်ရပါတယ်။",

    objectives: [
      "Customer segmentation လုပ်တတ်ရန်",
      "Top customer ကို priority ပေးတတ်ရန်",
      "Customer plan တည်ဆောက်တတ်ရန်",
      "Long-term relationship တည်ဆောက်တတ်ရန်"
    ],

    sections: [
      {
        title: "Customer Segmentation",
        text:
          "Customer အားလုံးကို အချိန်တူတူပေးဖို့မလိုပါဘူး။ Revenue, Growth Potential, Strategic Importance, Payment Quality နဲ့ Relationship အပေါ်မူတည်ပြီး A/B/C segmentation လုပ်နိုင်ပါတယ်။"
      },

      {
        title: "Account Plan",
        text:
          "Account Plan မှာ Customer Business, Current Sales, Potential, Competitor, Decision Maker, Current Issue, Growth Opportunity နဲ့ Action Plan ပါရပါမယ်။"
      },

      {
        title: "Relationship vs Business",
        text:
          "Customer နဲ့ ရင်းနှီးတာက အကျိုးရှိပေမယ့် Business Result မရှိရင် Key Account Management မပြည့်စုံပါဘူး။ Relationship ကို Business Value နဲ့ချိတ်ဆက်ပါ။"
      }
    ],

    example:
      "Top Customer တစ်ခုရဲ့ monthly purchase 50 သိန်းကနေ 35 သိန်းကျသွားတယ်ဆိုရင် Customer visit → stock check → competitor check → pricing → service issue → payment issue စစ်ပြီး recovery plan ချပါ။",

    managerApplication:
      "Top 20 Customers အတွက် Customer Plan တစ်ခုစီထားပြီး Monthly Review လုပ်ပါ။",

    kpis: [
      "Customer Revenue",
      "Growth %",
      "Purchase Frequency",
      "Share of Wallet",
      "Retention",
      "Payment",
      "New Opportunity"
    ],

    checklist: [
      "Top Customers သိလား?",
      "Customer Potential သိလား?",
      "Competitor သိလား?",
      "Decision Maker သိလား?",
      "Next Action ရှိလား?"
    ],

    assignment:
      "Top Customer 5 ယောက်အတွက် Account Plan တစ်ခုစီရေးပါ။",

    takeaways: [
      "Customer အားလုံးကို တူညီစွာမစီမံပါနဲ့",
      "Relationship + Business Value နှစ်ခုစလုံးလိုတယ်",
      "Account Plan ကို ပုံမှန် Update လုပ်ပါ"
    ]
  },


  {
    id: 5,
    category: "Strategic Thinking",
    course: "Business Strategy",
    title: "Strategic Thinking for Managers",
    minutes: 22,

    summary:
      "Strategic Thinking ဆိုတာ နေ့စဉ်ပြဿနာတွေကို ဖြေရှင်းတာထက် ဘယ်နေရာမှာ အာရုံစိုက်ရင် Business Result ပိုကောင်းမလဲဆိုတာ စဉ်းစားနိုင်ခြင်းဖြစ်ပါတယ်။",

    objectives: [
      "Long-term နှင့် short-term thinking ခွဲခြားရန်",
      "Business priority သတ်မှတ်ရန်",
      "Trade-off စဉ်းစားတတ်ရန်",
      "Competitive advantage ရှာတတ်ရန်"
    ],

    sections: [
      {
        title: "Where to Play",
        text:
          "ဘယ် Customer, ဘယ် Territory, ဘယ် Product Category ကို အဓိကထားမလဲဆိုတာ ဆုံးဖြတ်ပါ။ အားလုံးကို တစ်ပြိုင်တည်း လုပ်ဖို့ကြိုးစားရင် Resource ပျံ့သွားနိုင်ပါတယ်။"
      },

      {
        title: "How to Win",
        text:
          "Price, Service, Distribution, Product Quality, Brand, Speed စတဲ့ ဘယ်အချက်နဲ့ Competitor ထက် အားသာမလဲဆိုတာ ရွေးချယ်ပါ။"
      }
    ],

    example:
      "Territory အားလုံးကို တူညီစွာ invest မလုပ်ဘဲ High Potential Territory 3 ခုကို Sales Force နဲ့ Marketing Budget ပိုပေးပြီး growth ရယူနိုင်ပါတယ်။",

    managerApplication:
      "Quarterly Business Review မှာ Market → Customer → Competitor → Internal Capability → Opportunity → Risk အစီအစဉ်နဲ့ စဉ်းစားပါ။",

    kpis: [
      "Market Growth",
      "Market Share",
      "Revenue Growth",
      "Customer Growth",
      "Profitability"
    ],

    checklist: [
      "Priority Market သိလား?",
      "Target Customer သိလား?",
      "Competitor Advantage သိလား?",
      "Resource Allocation မှန်လား?",
      "Risk သိလား?"
    ],

    assignment:
      "သင့်လုပ်ငန်းအတွက် Where to Play နဲ့ How to Win ကို တစ်မျက်နှာစာရေးပါ။",

    takeaways: [
      "Strategy = Choice",
      "Priority မရှိရင် Strategy မဖြစ်ဘူး",
      "Resource ကို High Impact Area မှာ စုစည်းပါ"
    ]
  },


  {
    id: 6,
    category: "Strategic Thinking",
    course: "Business Strategy",
    title: "Market & Competitor Analysis",
    minutes: 18,

    summary:
      "Competitor ကို ကြည့်တာဟာ သူတို့ဘာလုပ်လဲ သိဖို့တင်မဟုတ်ပါဘူး။ Customer ဘာကြောင့် သူတို့ဆီကို ရွေးချယ်သွားလဲဆိုတာ သိဖို့ဖြစ်ပါတယ်။",

    objectives: [
      "Competitor mapping လုပ်တတ်ရန်",
      "Market signal စောင့်ကြည့်တတ်ရန်",
      "Competitor weakness ရှာတတ်ရန်",
      "Competitive response plan ချတတ်ရန်"
    ],

    sections: [
      {
        title: "Competitor Matrix",
        text:
          "Price, Product, Availability, Service, Brand, Promotion, Credit, Distribution စတဲ့ factor တွေနဲ့ Competitor တစ်ယောက်ချင်းစီကို နှိုင်းယှဉ်ပါ။"
      },

      {
        title: "Market Intelligence",
        text:
          "Field Sales Team က Market Intelligence ရဲ့ အဓိက source ဖြစ်ပါတယ်။ Customer Feedback, Competitor Price, Promotion, New Product, Stock Availability စတာတွေကို စုဆောင်းပါ။"
      }
    ],

    example:
      "Competitor က price မလျှော့ဘဲ promotion ပိုကောင်းလာတယ်ဆိုရင် Customer ရဲ့ Decision Driver က price မဟုတ်ဘဲ value proposition ဖြစ်နိုင်ပါတယ်။",

    managerApplication:
      "Weekly Sales Meeting မှာ Competitor Update 10 မိနစ်ထည့်ပြီး Sales Team ထံက Market Intelligence စုဆောင်းပါ။",

    kpis: [
      "Market Share",
      "Competitor Price",
      "Competitor Availability",
      "Customer Win/Loss",
      "New Competitor Activity"
    ],

    checklist: [
      "Top 3 Competitors သိလား?",
      "သူတို့ရဲ့ Strength သိလား?",
      "Weakness သိလား?",
      "Customer က ဘာကြောင့်ရွေးလဲ သိလား?"
    ],

    assignment:
      "Competitor 3 ခုကို Price, Product, Distribution, Promotion, Service အလိုက် နှိုင်းယှဉ်ပါ။",

    takeaways: [
      "Competitor ကိုမကြည့်ဘဲ Strategy မချပါနဲ့",
      "Field Intelligence ကို အသုံးချပါ",
      "Customer Decision Driver ကိုရှာပါ"
    ]
  },


  {
    id: 7,
    category: "Brand Basics",
    course: "Marketing & Brand",
    title: "Brand Positioning",
    minutes: 17,

    summary:
      "Brand ဆိုတာ Logo တစ်ခုမဟုတ်ပါဘူး။ Customer စိတ်ထဲမှာ Brand အပေါ်ရှိနေတဲ့ Perception နဲ့ Promise ဖြစ်ပါတယ်။",

    objectives: [
      "Brand Positioning နားလည်ရန်",
      "Target Customer သတ်မှတ်ရန်",
      "Value Proposition တည်ဆောက်ရန်",
      "Sales Team က Brand Message တူညီစွာပြောနိုင်ရန်"
    ],

    sections: [
      {
        title: "Target Customer",
        text:
          "Customer အားလုံးကို target လုပ်ရင် Positioning မရှင်းနိုင်ပါဘူး။ ဘယ်သူ့အတွက် ဘာ Value ပေးမလဲဆိုတာ ရှင်းရပါမယ်။"
      },

      {
        title: "Value Proposition",
        text:
          "Customer က 'ဘာကြောင့် ဒီ Brand ကို ရွေးသင့်လဲ?' ဆိုတဲ့မေးခွန်းကို တိုတိုနဲ့ရှင်းနိုင်ရပါမယ်။"
      }
    ],

    example:
      "Automobile Brand တစ်ခုအတွက် Value Proposition က Fuel Efficiency, Reliability, Service Network, Resale Value စတဲ့ Customer Need ပေါ်မူတည်နိုင်ပါတယ်။",

    managerApplication:
      "Sales Team တစ်ခုလုံးက Brand Value ကို တူညီစွာရှင်းပြနိုင်အောင် Sales Pitch နဲ့ Product Training လုပ်ပါ။",

    kpis: [
      "Brand Awareness",
      "Consideration",
      "Conversion",
      "Customer Retention",
      "Repeat Purchase"
    ],

    checklist: [
      "Target Customer သိလား?",
      "Brand Promise ရှင်းလား?",
      "Competitor နဲ့ ကွာခြားချက်ရှိလား?",
      "Sales Team က တူညီတဲ့ Message ပြောလား?"
    ],

    assignment:
      "သင့်လုပ်ငန်းအတွက် Customer ကို ဘယ် Value ပေးသလဲဆိုတာ Sentence 2 ကြောင်းနဲ့ရေးပါ။",

    takeaways: [
      "Brand = Customer Perception",
      "Positioning ရှင်းရမယ်",
      "Sales Message နဲ့ Brand Message တူညီရမယ်"
    ]
  },


  {
    id: 8,
    category: "Negotiation",
    course: "Sales Management Mastery",
    title: "Professional Sales Negotiation",
    minutes: 23,

    summary:
      "Negotiation မှာ Price ကိုပဲ လျှော့ပေးရတာ မဟုတ်ပါဘူး။ Customer ရဲ့ Need, Value, Volume, Payment, Timing, Service စတဲ့ အချက်များကို အသုံးပြုပြီး Win-Win Deal တည်ဆောက်ရပါတယ်။",

    objectives: [
      "Customer Need ရှာတတ်ရန်",
      "BATNA စဉ်းစားတတ်ရန်",
      "Price Discount မပေးခင် Value ပြနိုင်ရန်",
      "Win-Win Agreement ရယူတတ်ရန်"
    ],

    sections: [
      {
        title: "Don't Discount Too Early",
        text:
          "Customer က Price Discount တောင်းတဲ့အခါ ချက်ချင်း Discount မပေးပါနဲ့။ Volume, Payment Term, Contract Period, Product Mix, Service Level စတာတွေနဲ့ Exchange လုပ်နိုင်ပါတယ်။"
      },

      {
        title: "Give-Get Principle",
        text:
          "ကိုယ်ဘက်က တစ်ခု ပေးမယ်ဆိုရင် Customer ဘက်က တစ်ခု ပြန်ရယူပါ။ ဥပမာ 5% discount ပေးရင် Volume Commitment ရယူနိုင်ပါတယ်။"
      }
    ],

    example:
      "Customer က 10% discount တောင်းတယ်။ Salesperson က ချက်ချင်း 10% မပေးဘဲ 'Volume ကို 30% တိုးပေးနိုင်ရင် 5% support ပေးနိုင်ပါတယ်' လို့ ပြန်ညှိနိုင်ပါတယ်။",

    managerApplication:
      "Sales Team ကို Discount Approval Matrix, Negotiation Rule နဲ့ Give-Get principle သင်ပေးပါ။",

    kpis: [
      "Average Discount",
      "Gross Margin",
      "Volume Growth",
      "Deal Value",
      "Customer Retention"
    ],

    checklist: [
      "Customer Need သိလား?",
      "Value ကိုရှင်းပြပြီးပြီလား?",
      "Give-Get ရှိလား?",
      "Margin ကာကွယ်ထားလား?",
      "Agreement ကို Written Confirmation လုပ်လား?"
    ],

    assignment:
      "Customer က 10% discount တောင်းလာတဲ့ Situation တစ်ခုအတွက် Give-Get negotiation script တစ်ခုရေးပါ။",

    takeaways: [
      "Discount မဟုတ်ဘဲ Value ကိုညှိပါ",
      "Give → Get principle သုံးပါ",
      "Margin ကို အမြဲကာကွယ်ပါ"
    ]
  },


  {
    id: 9,
    category: "Marketing Basics",
    course: "Marketing & Brand",
    title: "Promotion & Campaign Planning",
    minutes: 20,

    summary:
      "Promotion က Sales တိုးဖို့အတွက် Discount ပေးရုံမဟုတ်ပါဘူး။ Objective, Target Customer, Offer, Channel, Budget နဲ့ Measurement ပါဝင်ရပါတယ်။",

    objectives: [
      "Campaign Objective သတ်မှတ်ရန်",
      "Target Customer ရွေးချယ်ရန်",
      "Promotion Mechanic တည်ဆောက်ရန်",
      "ROI တိုင်းတာရန်"
    ],

    sections: [
      {
        title: "Campaign Objective",
        text:
          "Volume Growth, New Customer Acquisition, Stock Clearance, Trial, Brand Awareness စတဲ့ Objective တစ်ခုကို ရှင်းရှင်းလင်းလင်း သတ်မှတ်ပါ။"
      },

      {
        title: "Measurement",
        text:
          "Campaign မစခင် Baseline သိထားရပါမယ်။ Campaign ပြီးတဲ့အခါ Incremental Sales, Cost, ROI, New Customer, Repeat Purchase စတာတွေကို တိုင်းပါ။"
      }
    ],

    example:
      "Promotion Budget 10 သိန်းသုံးပြီး Incremental Gross Profit 18 သိန်းရတယ်ဆိုရင် Campaign က Cost နဲ့ Return ကို စနစ်တကျတွက်ပြီးမှ ဆက်လုပ်သင့်ပါတယ်။",

    managerApplication:
      "Sales Team နဲ့ Marketing Team တို့ Campaign Brief တစ်ခုတည်းကို အသုံးပြုပြီး Target, Offer, Execution, Measurement ကို align လုပ်ပါ။",

    kpis: [
      "Incremental Sales",
      "ROI",
      "New Customers",
      "Conversion",
      "Repeat Purchase"
    ],

    checklist: [
      "Objective ရှိလား?",
      "Target Customer ရှိလား?",
      "Budget သတ်မှတ်ထားလား?",
      "Measurement ရှိလား?"
    ],

    assignment:
      "သင့်လုပ်ငန်းအတွက် Promotion Campaign တစ်ခုကို Objective → Offer → Target → Budget → KPI အဖြစ်ရေးပါ။",

    takeaways: [
      "Promotion မစခင် Objective သတ်မှတ်ပါ",
      "Discount နဲ့ Sales တိုးတာကို ROI နဲ့စစ်ပါ",
      "Campaign ပြီးရင် Post Analysis လုပ်ပါ"
    ]
  },


  {
    id: 10,
    category: "People Management",
    course: "People & Leadership",
    title: "Coaching & Empowerment Leadership",
    minutes: 22,

    summary:
      "Manager ရဲ့အလုပ်က Team အတွက် အလုပ်အားလုံးကို ကိုယ်တိုင်လုပ်တာမဟုတ်ပါဘူး။ Team ကို ပိုကောင်းလာအောင် Coaching, Direction, Accountability ပေးတာဖြစ်ပါတယ်။",

    objectives: [
      "Coaching နဲ့ Micromanagement ကွာခြားချက်သိရန်",
      "Performance conversation လုပ်တတ်ရန်",
      "Team ကို Ownership ပေးတတ်ရန်",
      "Feedback ပေးတတ်ရန်"
    ],

    sections: [
      {
        title: "Set Clear Expectations",
        text:
          "Team Member က ဘာလုပ်ရမယ်၊ ဘယ်အချိန်ပြီးရမယ်၊ ဘယ် KPI နဲ့တိုင်းမယ်ဆိုတာ ရှင်းရပါမယ်။"
      },

      {
        title: "Coach, Don't Control",
        text:
          "အလုပ်တိုင်းကို Manager က ဘယ်လိုလုပ်ရမယ်လို့ပြောနေတာထက် 'ဘာကြောင့် ဒီ Result မရတာလဲ?' 'နောက်တစ်ခါ ဘာပြောင်းမလဲ?' ဆိုတဲ့မေးခွန်းတွေနဲ့ Team Member ကို စဉ်းစားစေပါ။"
      }
    ],

    example:
      "Salesperson တစ်ယောက် Target မရတဲ့အခါ 'မကြိုးစားဘူး' လို့ပြောမယ့်အစား 'ဘယ် Customer Segment မှာ Gap အများဆုံးလဲ?' 'ဘယ် Action က Result ပေးနိုင်မလဲ?' လို့မေးပါ။",

    managerApplication:
      "Weekly One-to-One Coaching ကို 20–30 မိနစ်လုပ်ပြီး Performance → Problem → Root Cause → Solution → Commitment အစီအစဉ်နဲ့ သွားပါ။",

    kpis: [
      "Team Achievement",
      "Productivity",
      "Staff Retention",
      "Training Completion",
      "Individual Improvement"
    ],

    checklist: [
      "Expectation ရှင်းလား?",
      "Feedback ပေးလား?",
      "Ownership ပေးလား?",
      "Follow-up လုပ်လား?"
    ],

    assignment:
      "Team Member တစ်ယောက်အတွက် Coaching Conversation တစ်ခုကို Practice လုပ်ပါ။",

    takeaways: [
      "Clear Direction",
      "Regular Coaching",
      "Ownership",
      "Accountability"
    ]
  },


  {
    id: 11,
    category: "People Management",
    course: "People & Leadership",
    title: "Performance Management",
    minutes: 20,

    summary:
      "Performance Management ဆိုတာ Annual Appraisal တစ်ခုပဲမဟုတ်ပါဘူး။ Goal Setting, Monitoring, Coaching, Feedback နဲ့ Improvement ကို Continuous Cycle အဖြစ်လုပ်ရပါတယ်။",

    objectives: [
      "Performance expectation သတ်မှတ်ရန်",
      "Performance gap identify လုပ်ရန်",
      "Improvement plan တည်ဆောက်ရန်",
      "Fair evaluation လုပ်ရန်"
    ],

    sections: [
      {
        title: "Performance Gap",
        text:
          "Expected Performance နဲ့ Actual Performance ကြားက Gap ကို တိတိကျကျသိရပါမယ်။"
      },

      {
        title: "Improvement Plan",
        text:
          "Gap ဖြစ်ရင် Training လိုလား၊ Coaching လိုလား၊ Resource လိုလား၊ Motivation ပြဿနာလား၊ Capability ပြဿနာလား ခွဲခြမ်းရပါမယ်။"
      }
    ],

    example:
      "Salesperson တစ်ယောက် Target 100% အစား 65% ပဲရတယ်။ Customer Visits လည်း 50% ပဲရှိတယ်ဆိုရင် Capability မဟုတ်ဘဲ Activity Management ပြဿနာ ဖြစ်နိုင်ပါတယ်။",

    managerApplication:
      "Performance ကို Person နဲ့မချိတ်ဘဲ Evidence နဲ့တိုင်းပါ။ Data + Behavior + Result သုံးခုစလုံးကြည့်ပါ။",

    kpis: [
      "Target Achievement",
      "Activity",
      "Quality",
      "Behavior",
      "Improvement"
    ],

    checklist: [
      "Objective ရှင်းလား?",
      "Evidence ရှိလား?",
      "Gap ရှင်းလား?",
      "Improvement Plan ရှိလား?"
    ],

    assignment:
      "Performance နိမ့်နေတဲ့ Team Member တစ်ယောက်အတွက် 30-Day Improvement Plan တစ်ခုရေးပါ။",

    takeaways: [
      "Performance ကို Data နဲ့တိုင်းပါ",
      "Problem နဲ့ Person ကို ခွဲကြည့်ပါ",
      "Improvement ကို Follow-up လုပ်ပါ"
    ]
  },


  {
    id: 12,
    category: "People Management",
    course: "People & Leadership",
    title: "Delegation & Time Management",
    minutes: 17,

    summary:
      "Manager တစ်ယောက်အနေနဲ့ အလုပ်အားလုံးကို ကိုယ်တိုင်လုပ်နေရင် Team မကြီးထွားနိုင်သလို Manager ရဲ့ Strategic Time လည်း ပျောက်ဆုံးသွားနိုင်ပါတယ်။",

    objectives: [
      "Delegation Matrix တည်ဆောက်ရန်",
      "Urgent vs Important ခွဲရန်",
      "Team Member Capability တိုးတက်စေရန်",
      "Managerial Time ကို Strategic Work အတွက်သုံးရန်"
    ],

    sections: [
      {
        title: "What to Delegate",
        text:
          "Routine Reporting, Data Collection, Follow-up စတဲ့ အလုပ်တွေကို Team Member တွေကို Ownership ပေးနိုင်ပါတယ်။ Strategy, Key Customer, Critical Decision တွေကို Manager က ဆက်ကိုင်ထားနိုင်ပါတယ်။"
      },

      {
        title: "Delegation Rule",
        text:
          "Task, Expected Result, Deadline, Authority, Checkpoint နဲ့ Accountability ကို ရှင်းရပါမယ်။"
      }
    ],

    example:
      "Weekly Sales Report ကို Manager ကိုယ်တိုင် Excel ပြင်နေမယ့်အစား Sales Executive က Data Prepare လုပ်ပြီး Manager က Analysis နဲ့ Decision ပဲလုပ်နိုင်ပါတယ်။",

    managerApplication:
      "အပတ်စဉ် 'What only I can do?' ဆိုတဲ့မေးခွန်းကို မေးပြီး Manager-only tasks ကို သတ်မှတ်ပါ။",

    kpis: [
      "Manager Strategic Time",
      "Team Productivity",
      "Task Completion",
      "Delegation Success"
    ],

    checklist: [
      "Routine Task တွေ Delegate လုပ်လား?",
      "Deadline ရှိလား?",
      "Authority ရှိလား?",
      "Checkpoint ရှိလား?"
    ],

    assignment:
      "သင်နေ့စဉ်လုပ်နေတဲ့ အလုပ် 10 ခုကိုရေးပြီး Delegate လုပ်နိုင်တဲ့ 3 ခုရွေးပါ။",

    takeaways: [
      "Delegation = Task Transfer + Ownership",
      "Manager ရဲ့အချိန်ကို Strategy အတွက်သုံးပါ",
      "Delegate လုပ်ပြီး Follow-up လုပ်ပါ"
    ]
  },


  {
    id: 13,
    category: "People Management",
    course: "People & Leadership",
    title: "Motivation & Team Culture",
    minutes: 18,

    summary:
      "Team Motivation က Salary တစ်ခုတည်းနဲ့ မတည်ဆောက်နိုင်ပါဘူး။ Recognition, Fairness, Growth, Purpose, Leadership Trust နဲ့ Accountability လည်း အရေးကြီးပါတယ်။",

    objectives: [
      "Motivation Driver များသိရန်",
      "Recognition Culture တည်ဆောက်ရန်",
      "Team Trust တည်ဆောက်ရန်",
      "Accountability Culture တည်ဆောက်ရန်"
    ],

    sections: [
      {
        title: "Recognition",
        text:
          "Result ကောင်းတဲ့အခါ Public Recognition ပေးနိုင်သလို Improvement ကိုလည်း သတိပြုအသိအမှတ်ပြုနိုင်ပါတယ်။"
      },

      {
        title: "Fairness",
        text:
          "Rule တူ၊ KPI တူ၊ Standard တူ ဖြစ်ဖို့အရေးကြီးပါတယ်။ Favoritism ရှိတယ်လို့ Team ကခံစားရရင် Trust ကျနိုင်ပါတယ်။"
      }
    ],

    example:
      "Top Performer တစ်ယောက်ကို ဆုချီးမြှင့်တာနဲ့အတူ အခြား Team Member တွေကိုလည်း ဘာကြောင့်အောင်မြင်သလဲဆိုတာ Share လုပ်စေခြင်းက Learning Culture တည်ဆောက်နိုင်ပါတယ်။",

    managerApplication:
      "Monthly Team Meeting မှာ Best Performance, Best Improvement, Best Customer Service စတဲ့ Recognition Category များထားပါ။",

    kpis: [
      "Employee Retention",
      "Engagement",
      "Performance",
      "Absenteeism",
      "Team Collaboration"
    ],

    checklist: [
      "Recognition ရှိလား?",
      "Fairness ရှိလား?",
      "Career Growth ပြောလား?",
      "Feedback Culture ရှိလား?"
    ],

    assignment:
      "သင့် Team အတွက် Monthly Recognition System တစ်ခု တည်ဆောက်ပါ။",

    takeaways: [
      "Motivation = Money တစ်ခုတည်းမဟုတ်",
      "Fairness က Trust တည်ဆောက်တယ်",
      "Recognition က Behavior ကို reinforce လုပ်တယ်"
    ]
  },


  {
    id: 14,
    category: "Finance",
    course: "Business Strategy",
    title: "Profit, Margin & Break-even",
    minutes: 24,

    summary:
      "Sales တိုးတာနဲ့ Business အမြဲအောင်မြင်တာ မဟုတ်ပါဘူး။ Revenue, Gross Profit, Margin, Fixed Cost, Variable Cost နဲ့ Break-even ကို နားလည်မှ Business Decision ကောင်းကောင်းချနိုင်ပါတယ်။",

    objectives: [
      "Revenue နဲ့ Profit ကွာခြားချက်သိရန်",
      "Gross Margin တွက်တတ်ရန်",
      "Fixed/Variable Cost ခွဲတတ်ရန်",
      "Break-even Point နားလည်ရန်"
    ],

    sections: [
      {
        title: "Revenue",
        text:
          "Revenue ဆိုတာ Customer ဆီက ရရှိတဲ့ Sales Value ဖြစ်ပါတယ်။ Revenue များတာနဲ့ Profit များတယ်လို့ တိုက်ရိုက်မဆိုနိုင်ပါဘူး။"
      },

      {
        title: "Gross Profit",
        text:
          "Gross Profit = Sales Revenue - Cost of Goods Sold ဖြစ်ပါတယ်။ ဥပမာ Sales 100 သိန်း၊ Product Cost 75 သိန်းဆိုရင် Gross Profit 25 သိန်း ဖြစ်ပါတယ်။"
      },

      {
        title: "Gross Margin",
        text:
          "Gross Margin % = Gross Profit / Sales × 100 ဖြစ်ပါတယ်။ အထက်က Example မှာ 25 / 100 × 100 = 25% ဖြစ်ပါတယ်။"
      },

      {
        title: "Break-even",
        text:
          "Break-even ဆိုတာ Profit မရသေးသလို Loss လည်းမဖြစ်သေးတဲ့ Sales Level ဖြစ်ပါတယ်။ Fixed Cost ကို Contribution Margin နဲ့စားပြီး Break-even Units သို့မဟုတ် Sales ကိုတွက်နိုင်ပါတယ်။"
      }
    ],

    example:
      "Monthly Fixed Cost = 20 သိန်း၊ Unit Selling Price = 10,000 MMK၊ Variable Cost = 6,000 MMK ဆိုရင် Unit Contribution = 4,000 MMK ဖြစ်ပါတယ်။ Break-even Units = 2,000 units ဖြစ်ပါတယ်။",

    managerApplication:
      "Sales Manager အနေနဲ့ Target တိုးဖို့ပဲ မကြည့်ဘဲ Discount ပေးပြီးနောက် Margin ဘယ်လောက်ကျသွားမလဲ၊ Incremental Sales က Profit ကို ဘယ်လောက်တိုးပေးမလဲဆိုတာ စဉ်းစားပါ။",

    kpis: [
      "Revenue",
      "Gross Profit",
      "Gross Margin %",
      "Contribution",
      "Fixed Cost",
      "Break-even"
    ],

    checklist: [
      "Revenue သိလား?",
      "COGS သိလား?",
      "Gross Margin သိလား?",
      "Discount Impact သိလား?",
      "Break-even သိလား?"
    ],

    assignment:
      "သင့်လုပ်ငန်းရဲ့ Product တစ်ခုကိုရွေးပြီး Selling Price, Cost, Gross Profit နဲ့ Gross Margin တွက်ပါ။",

    takeaways: [
      "Revenue ≠ Profit",
      "Discount မပေးခင် Margin စစ်ပါ",
      "Business Decision ကို Profit နဲ့ချိတ်ပါ"
    ]
  }

];


/* =========================================================
   STATE
========================================================= */

let currentPage = "dashboardPage";

let completedLessons =
  JSON.parse(
    localStorage.getItem("aba_completed_lessons") || "[]"
  );

let currentLessonIndex = 0;

let activeLessonFilter = "all";


/* =========================================================
   SALES MANAGER DATA
========================================================= */

const SALES_STORAGE_KEY = "aba_sales_manager_v1";

const DEFAULT_SALES_DATA = {

  target: 30000000,

  actual: 22500000,

  workingDays: 26,

  elapsedDays: 18,

  team: [
    {
      id: 1,
      name: "Sales Executive A",
      target: 8000000,
      actual: 6500000
    },
    {
      id: 2,
      name: "Sales Executive B",
      target: 7000000,
      actual: 5400000
    },
    {
      id: 3,
      name: "Sales Executive C",
      target: 8000000,
      actual: 6100000
    },
    {
      id: 4,
      name: "Sales Executive D",
      target: 7000000,
      actual: 4500000
    }
  ],

  actions: [
    {
      id: 1,
      title: "Top 20 customers ကို visit ပြီး additional order ရယူရန်",
      owner: "Sales Team",
      due: "3 Days",
      done: false
    },
    {
      id: 2,
      title: "Low-performing territory ရဲ့ root cause analysis ပြုလုပ်ရန်",
      owner: "Sales Manager",
      due: "2 Days",
      done: false
    },
    {
      id: 3,
      title: "Pending quotation များကို closing plan ပြုလုပ်ရန်",
      owner: "Sales Team",
      due: "Tomorrow",
      done: false
    }
  ]

};

let salesData =
  JSON.parse(
    localStorage.getItem(SALES_STORAGE_KEY) ||
    JSON.stringify(DEFAULT_SALES_DATA)
  );


function saveSalesData() {

  localStorage.setItem(
    SALES_STORAGE_KEY,
    JSON.stringify(salesData)
  );

}


/* =========================================================
   NAVIGATION
========================================================= */

function navigate(pageId) {

  const pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.remove("active");
  });

  const page = $(pageId);

  if (page) {
    page.classList.add("active");
  }

  const navItems =
    document.querySelectorAll(".nav-item");

  navItems.forEach(item => {

    item.classList.toggle(
      "active",
      item.dataset.page === pageId
    );

  });

  currentPage = pageId;

  updatePageTitle(pageId);

  if (pageId === "coursesPage") {
    renderCourses();
  }

  if (pageId === "lessonsPage") {
    renderLessons();
  }

  if (pageId === "progressPage") {
    renderProgress();
  }

  if (pageId === "salesPage") {
    renderSales();
  }

  if (pageId === "reportsPage") {
    renderReports();
  }

  closeSidebar();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


function updatePageTitle(pageId) {

  const titles = {

    dashboardPage: [
      "Dashboard",
      "Business growth starts with better decisions."
    ],

    coursesPage: [
      "My Courses",
      "Your professional learning path."
    ],

    lessonsPage: [
      "Lessons",
      "Detailed business learning center."
    ],

    progressPage: [
      "My Progress",
      "Measure your learning progress."
    ],

    salesPage: [
      "Sales Manager",
      "Target → People → Execution → Result"
    ],

    calculatorPage: [
      "Pricing Calculator",
      "Practical business calculation tools."
    ],

    reportsPage: [
      "Reports",
      "Business performance analytics."
    ],

    aiPage: [
      "AI Business Coach",
      "Your practical business advisor."
    ],

    toolsPage: [
      "AI Tools",
      "Business decision support tools."
    ],

    settingsPage: [
      "Settings",
      "Application settings."
    ]

  };

  const data = titles[pageId] || titles.dashboardPage;

  if ($("pageTitle")) {
    $("pageTitle").textContent = data[0];
  }

  if ($("pageSubtitle")) {
    $("pageSubtitle").textContent = data[1];
  }

}


/* =========================================================
   DASHBOARD
========================================================= */

function goDashboard() {
  navigate("dashboardPage");
}

function openLessons() {
  navigate("lessonsPage");
}

function continueLearning() {
  navigate("lessonsPage");
}

function openBusinessPlan() {
  navigate("salesPage");
}

function updateDashboardStats() {

  const total = LESSONS.length;

  const completed =
    completedLessons.length;

  const progress =
    total === 0
      ? 0
      : Math.round((completed / total) * 100);

  if ($("statCourses"))
    $("statCourses").textContent = COURSES.length;

  if ($("statLessons"))
    $("statLessons").textContent = total;

  if ($("statCompleted"))
    $("statCompleted").textContent = completed;

  if ($("statProgress"))
    $("statProgress").textContent = progress + "%";

  if ($("dashboardCourseProgress"))
    $("dashboardCourseProgress").style.width =
      progress + "%";

  if ($("dashboardCoursePercent"))
    $("dashboardCoursePercent").textContent =
      progress + "% completed";

}


/* =========================================================
   CATEGORIES
========================================================= */

function openCategory(category) {

  activeLessonFilter = category;

  navigate("lessonsPage");

  setTimeout(() => {

    renderLessons();

  }, 50);

}


/* =========================================================
   COURSES
========================================================= */

function courseProgress(course) {

  const total = course.lessonIds.length;

  if (!total) return 0;

  const completed =
    course.lessonIds.filter(id =>
      completedLessons.includes(id)
    ).length;

  return Math.round(
    completed / total * 100
  );

}


function renderCourses() {

  const container = $("coursesList");

  if (!container) return;

  container.innerHTML =
    COURSES.map(course => {

      const progress =
        courseProgress(course);

      return `

        <div class="course-card">

          <div class="course-card-top">

            <div class="course-icon">
              ${course.icon}
            </div>

            <div>
              <h3>${escapeHTML(course.title)}</h3>
              <span class="eyebrow">
                ${course.lessonIds.length} LESSONS
              </span>
            </div>

          </div>

          <p>
            ${escapeHTML(course.description)}
          </p>

          <div class="progress-line">
            <div style="width:${progress}%"></div>
          </div>

          <div class="course-card-footer">

            <span>${progress}% completed</span>

            <button
              class="text-btn"
              onclick="openCourse(${course.id})"
            >
              Open Course →
            </button>

          </div>

        </div>

      `;

    }).join("");

}


function openCourse(courseId) {

  const course =
    COURSES.find(c => c.id === courseId);

  if (!course) return;

  navigate("lessonsPage");

  activeLessonFilter = course.title;

  setTimeout(() => {

    renderLessons();

  }, 50);

}


/* =========================================================
   LESSONS
========================================================= */

function renderLessons() {

  const container = $("lessonsList");

  if (!container) return;

  let list = LESSONS;

  if (activeLessonFilter !== "all") {

    const course =
      COURSES.find(
        c => c.title === activeLessonFilter
      );

    if (course) {

      list =
        LESSONS.filter(
          lesson =>
            course.lessonIds.includes(lesson.id)
        );

    } else {

      list =
        LESSONS.filter(
          lesson =>
            lesson.category === activeLessonFilter
        );

    }

  }

  container.innerHTML =
    list.map(lesson => {

      const completed =
        completedLessons.includes(lesson.id);

      return `

        <div class="lesson-card ${completed ? "completed" : ""}">

          <div class="lesson-number">
            ${completed ? "✓" : lesson.id}
          </div>

          <span class="lesson-category">
            ${escapeHTML(lesson.category)}
          </span>

          <h3>
            ${escapeHTML(lesson.title)}
          </h3>

          <p>
            ${escapeHTML(lesson.summary)}
          </p>

          <div class="lesson-meta">

            <span class="lesson-time">
              ⏱ ${lesson.minutes} min
            </span>

            <button
              class="lesson-open"
              onclick="openLessonById(${lesson.id})"
            >
              ${completed ? "Review →" : "Start Lesson →"}
            </button>

          </div>

        </div>

      `;

    }).join("");

}


function filterLessons(filter, button) {

  activeLessonFilter = filter;

  document
    .querySelectorAll(".filter-btn")
    .forEach(btn =>
      btn.classList.remove("active")
    );

  if (button) {
    button.classList.add("active");
  }

  renderLessons();

}


function openLessonById(id) {

  const index =
    LESSONS.findIndex(
      lesson => lesson.id === id
    );

  if (index < 0) return;

  currentLessonIndex = index;

  openLesson();

}


function openLesson() {

  const lesson =
    LESSONS[currentLessonIndex];

  if (!lesson) return;

  const completed =
    completedLessons.includes(lesson.id);

  const sectionHTML =
    lesson.sections
      .map(section => `

        <div class="detail-section">

          <h3>
            ${escapeHTML(section.title)}
          </h3>

          <p>
            ${escapeHTML(section.text)}
          </p>

        </div>

      `)
      .join("");

  const objectives =
    lesson.objectives
      .map(item =>
        `<li>${escapeHTML(item)}</li>`
      )
      .join("");

  const kpis =
    lesson.kpis
      .map(item =>
        `<li>${escapeHTML(item)}</li>`
      )
      .join("");

  const checklist =
    lesson.checklist
      .map(item =>
        `<li>☐ ${escapeHTML(item)}</li>`
      )
      .join("");

  const takeaways =
    lesson.takeaways
      .map(item =>
        `<li>${escapeHTML(item)}</li>`
      )
      .join("");

  $("modalBody").innerHTML = `

    <div class="lesson-detail-header">

      <span class="category">
        ${escapeHTML(lesson.category)}
      </span>

      <h1>
        ${escapeHTML(lesson.title)}
      </h1>

      <p>
        ⏱ ${lesson.minutes} minutes
      </p>

    </div>


    <div class="detail-section">

      <h3>📌 Lesson Overview</h3>

      <p>
        ${escapeHTML(lesson.summary)}
      </p>

    </div>


    <div class="detail-section">

      <h3>🎯 Learning Objectives</h3>

      <ul>
        ${objectives}
      </ul>

    </div>


    ${sectionHTML}


    <div class="detail-section">

      <h3>💼 Practical Example</h3>

      <div class="example-box">
        ${escapeHTML(lesson.example)}
      </div>

    </div>


    <div class="detail-section">

      <h3>👨‍💼 Sales Manager Application</h3>

      <div class="action-box">
        ${escapeHTML(lesson.managerApplication)}
      </div>

    </div>


    <div class="detail-section">

      <h3>📊 Recommended KPIs</h3>

      <ul>
        ${kpis}
      </ul>

    </div>


    <div class="detail-section">

      <h3>✅ Manager Checklist</h3>

      <ul>
        ${checklist}
      </ul>

    </div>


    <div class="detail-section">

      <h3>📝 Practical Assignment</h3>

      <div class="warning-box">
        ${escapeHTML(lesson.assignment)}
      </div>

    </div>


    <div class="detail-section">

      <h3>💡 Key Takeaways</h3>

      <ul>
        ${takeaways}
      </ul>

    </div>


    <div class="lesson-actions">

      <button
        class="prev-btn"
        onclick="previousLesson()"
        ${currentLessonIndex === 0 ? "disabled" : ""}
      >
        ← Previous
      </button>

      <button
        class="complete-btn"
        onclick="completeLesson(${lesson.id})"
      >
        ${completed ? "✓ Completed" : "✓ Mark Complete"}
      </button>

      <button
        class="next-btn"
        onclick="nextLesson()"
        ${currentLessonIndex === LESSONS.length - 1 ? "disabled" : ""}
      >
        Next →
      </button>

    </div>

  `;

  openModal();

}


function previousLesson() {

  if (currentLessonIndex <= 0) return;

  currentLessonIndex--;

  openLesson();

}


function nextLesson() {

  if (
    currentLessonIndex >=
    LESSONS.length - 1
  ) return;

  currentLessonIndex++;

  openLesson();

}


function completeLesson(id) {

  if (!completedLessons.includes(id)) {

    completedLessons.push(id);

    localStorage.setItem(
      "aba_completed_lessons",
      JSON.stringify(completedLessons)
    );

    showToast(
      "Lesson completed successfully ✓"
    );

  }

  updateDashboardStats();

  renderProgress();

  renderLessons();

  openLesson();

}


/* =========================================================
   PROGRESS
========================================================= */

function renderProgress() {

  const total = LESSONS.length;

  const completed =
    completedLessons.length;

  const remaining =
    Math.max(total - completed, 0);

  const progress =
    total
      ? Math.round(completed / total * 100)
      : 0;

  if ($("progressNumber"))
    $("progressNumber").textContent =
      progress + "%";

  if ($("progressCompleted"))
    $("progressCompleted").textContent =
      completed;

  if ($("progressRemaining"))
    $("progressRemaining").textContent =
      remaining;

  if ($("progressText"))
    $("progressText").textContent =
      `${total} lessons ထဲမှ ${completed} lessons ပြီးဆုံးထားပါသည်။`;

  if ($("progressRing"))
    $("progressRing").style.background =
      `conic-gradient(
        var(--primary) ${progress * 3.6}deg,
        #eee ${progress * 3.6}deg
      )`;

}


/* =========================================================
   SALES MANAGER
========================================================= */

function calculateAchievement(target, actual) {

  if (!target) return 0;

  return Math.round(
    (actual / target) * 100
  );

}


function renderSales() {

  const container =
    $("salesManagerContent");

  if (!container) return;

  const target =
    Number(salesData.target) || 0;

  const actual =
    Number(salesData.actual) || 0;

  const workingDays =
    Number(salesData.workingDays) || 1;

  const elapsedDays =
    Number(salesData.elapsedDays) || 1;

  const achievement =
    calculateAchievement(
      target,
      actual
    );

  const gap =
    Math.max(target - actual, 0);

  const dailyTarget =
    target / workingDays;

  const remainingDays =
    Math.max(
      workingDays - elapsedDays,
      1
    );

  const recoveryDaily =
    gap / remainingDays;

  const progressWidth =
    Math.min(achievement, 100);

  container.innerHTML = `

    <!-- KPI -->
    <div class="kpi-grid">

      <div class="kpi-card">
        <span>MONTHLY TARGET</span>
        <strong>${formatMoney(target)}</strong>
      </div>

      <div class="kpi-card">
        <span>ACTUAL SALES</span>
        <strong>${formatMoney(actual)}</strong>
      </div>

      <div class="kpi-card">
        <span>ACHIEVEMENT</span>
        <strong class="${achievement >= 100 ? "positive" : ""}">
          ${achievement}%
        </strong>
      </div>

      <div class="kpi-card">
        <span>SALES GAP</span>
        <strong class="${gap > 0 ? "negative" : "positive"}">
          ${formatMoney(gap)}
        </strong>
      </div>

      <div class="kpi-card">
        <span>DAILY TARGET</span>
        <strong>${formatMoney(dailyTarget)}</strong>
      </div>

    </div>


    <div class="sales-layout">

      <div>

        <!-- KPI SETTINGS -->
        <div class="panel">

          <div class="panel-header">
            <h3>🎯 Sales KPI Setup</h3>

            <span class="eyebrow">
              TARGET MANAGEMENT
            </span>
          </div>

          <div class="form-grid">

            <div class="form-group">
              <label>Monthly Target (MMK)</label>

              <input
                id="salesTargetInput"
                type="number"
                value="${target}"
              >
            </div>

            <div class="form-group">
              <label>Actual Sales (MMK)</label>

              <input
                id="salesActualInput"
                type="number"
                value="${actual}"
              >
            </div>

            <div class="form-group">
              <label>Working Days</label>

              <input
                id="workingDaysInput"
                type="number"
                value="${workingDays}"
              >
            </div>

            <div class="form-group">
              <label>Elapsed Days</label>

              <input
                id="elapsedDaysInput"
                type="number"
                value="${elapsedDays}"
              >
            </div>

          </div>

          <button
            class="save-btn"
            onclick="saveSalesKPI()"
          >
            Save KPI
          </button>

          <div class="achievement-bar">

            <div style="width:${progressWidth}%"></div>

          </div>

          <div class="achievement-text">

            <span>
              ${achievement}% Achievement
            </span>

            <span>
              Recovery Daily:
              ${formatMoney(recoveryDaily)}
            </span>

          </div>

        </div>


        <!-- TEAM -->
        <div class="panel">

          <div class="panel-header">

            <h3>👥 Team Performance</h3>

            <button
              class="secondary-btn"
              onclick="addTeamMember()"
            >
              + Add Member
            </button>

          </div>

          <div style="overflow-x:auto">

            <table class="team-table">

              <thead>

                <tr>
                  <th>NAME</th>
                  <th>TARGET</th>
                  <th>ACTUAL</th>
                  <th>ACHIEVEMENT</th>
                  <th>ACTION</th>
                </tr>

              </thead>

              <tbody>

                ${
                  salesData.team.map(member => {

                    const memberAchievement =
                      calculateAchievement(
                        member.target,
                        member.actual
                      );

                    return `

                      <tr>

                        <td>
                          <strong>
                            ${escapeHTML(member.name)}
                          </strong>
                        </td>

                        <td>
                          ${formatMoney(member.target)}
                        </td>

                        <td>
                          ${formatMoney(member.actual)}
                        </td>

                        <td class="team-achievement">
                          ${memberAchievement}%
                        </td>

                        <td>

                          <button
                            class="danger-btn"
                            onclick="removeTeamMember(${member.id})"
                          >
                            Remove
                          </button>

                        </td>

                      </tr>

                    `;

                  }).join("")

                }

              </tbody>

            </table>

          </div>

        </div>

      </div>


      <div>

        <!-- ACTION PLAN -->
        <div class="panel">

          <div class="panel-header">

            <h3>⚡ Action Plan</h3>

            <button
              class="secondary-btn"
              onclick="addActionPlan()"
            >
              + Add
            </button>

          </div>

          <div class="action-list">

            ${
              salesData.actions.length
                ? salesData.actions.map(action => `

                  <div class="action-item ${action.done ? "done" : ""}">

                    <input
                      type="checkbox"
                      ${action.done ? "checked" : ""}
                      onchange="toggleActionPlan(${action.id})"
                    >

                    <div style="flex:1">

                      <strong>
                        ${escapeHTML(action.title)}
                      </strong>

                      <small>
                        Owner: ${escapeHTML(action.owner)}
                        · Due: ${escapeHTML(action.due)}
                      </small>

                    </div>

                    <button
                      class="danger-btn"
                      onclick="deleteActionPlan(${action.id})"
                    >
                      ×
                    </button>

                  </div>

                `).join("")
                :
                `
                  <p style="color:#718096;font-size:11px">
                    Action Plan မရှိသေးပါ။
                  </p>
                `
            }

          </div>

        </div>


        <!-- MANAGEMENT SUMMARY -->
        <div class="panel">

          <div class="panel-header">
            <h3>📌 Manager Summary</h3>
          </div>

          <div class="action-box">

            <strong>Current Situation</strong>

            <p style="margin-top:7px">

              Target:
              <strong>${formatMoney(target)}</strong>

              <br>

              Actual:
              <strong>${formatMoney(actual)}</strong>

              <br>

              Achievement:
              <strong>${achievement}%</strong>

              <br>

              Gap:
              <strong>${formatMoney(gap)}</strong>

            </p>

          </div>

          <div class="warning-box" style="margin-top:12px">

            <strong>Recommended Action</strong>

            <p style="margin-top:7px">

              ကျန်ရှိသော
              <strong>${remainingDays} days</strong>
              အတွင်း

              <strong>
                ${formatMoney(recoveryDaily)}
              </strong>

              ခန့်ကို နေ့စဉ် ပြန်လည်ရရှိရန် လိုအပ်ပါသည်။

              <br><br>

              Priority ကို
              <strong>
                Top Customers → High Probability Pipeline → Low Performance Territory
              </strong>
              အစီအစဉ်နဲ့ထားပါ။

            </p>

          </div>

          <button
            class="save-btn"
            onclick="exportSalesReport()"
          >
            Export Sales Report
          </button>

          <button
            class="secondary-btn"
            style="margin-left:5px"
            onclick="resetSalesData()"
          >
            Reset
          </button>

        </div>

      </div>

    </div>

  `;

}


function saveSalesKPI() {

  salesData.target =
    Number($("salesTargetInput").value) || 0;

  salesData.actual =
    Number($("salesActualInput").value) || 0;

  salesData.workingDays =
    Number($("workingDaysInput").value) || 1;

  salesData.elapsedDays =
    Number($("elapsedDaysInput").value) || 1;

  saveSalesData();

  renderSales();

  showToast("Sales KPI updated successfully ✓");

}


function addTeamMember() {

  const name =
    prompt("Team Member Name:");

  if (!name) return;

  const target =
    Number(
      prompt("Monthly Target (MMK):", "5000000")
    );

  const actual =
    Number(
      prompt("Actual Sales (MMK):", "0")
    );

  salesData.team.push({

    id: Date.now(),

    name,

    target:
      target || 0,

    actual:
      actual || 0

  });

  saveSalesData();

  renderSales();

  showToast("Team member added ✓");

}


function removeTeamMember(id) {

  salesData.team =
    salesData.team.filter(
      member => member.id !== id
    );

  saveSalesData();

  renderSales();

}


function addActionPlan() {

  const title =
    prompt("Action Plan:");

  if (!title) return;

  const owner =
    prompt("Owner:", "Sales Manager") ||
    "Sales Manager";

  const due =
    prompt("Due:", "3 Days") ||
    "3 Days";

  salesData.actions.push({

    id: Date.now(),

    title,

    owner,

    due,

    done: false

  });

  saveSalesData();

  renderSales();

  showToast("Action Plan added ✓");

}


function toggleActionPlan(id) {

  const action =
    salesData.actions.find(
      item => item.id === id
    );

  if (!action) return;

  action.done =
    !action.done;

  saveSalesData();

  renderSales();

}


function deleteActionPlan(id) {

  salesData.actions =
    salesData.actions.filter(
      item => item.id !== id
    );

  saveSalesData();

  renderSales();

}


function resetSalesData() {

  const confirmed =
    confirm(
      "Sales Manager data အားလုံးကို Reset လုပ်မလား?"
    );

  if (!confirmed) return;

  salesData =
    JSON.parse(
      JSON.stringify(DEFAULT_SALES_DATA)
    );

  saveSalesData();

  renderSales();

  showToast("Sales Manager reset ✓");

}


function exportSalesReport() {

  const target =
    Number(salesData.target) || 0;

  const actual =
    Number(salesData.actual) || 0;

  const achievement =
    calculateAchievement(
      target,
      actual
    );

  let csv =
    "Aung Business Academy - Sales Manager Report\n\n";

  csv += "KPI,Value\n";

  csv +=
    `Monthly Target,${target}\n`;

  csv +=
    `Actual Sales,${actual}\n`;

  csv +=
    `Achievement,${achievement}%\n`;

  csv +=
    `Gap,${Math.max(target - actual, 0)}\n`;

  csv += "\nTeam Performance\n";

  csv +=
    "Name,Target,Actual,Achievement\n";

  salesData.team.forEach(member => {

    const achievement =
      calculateAchievement(
        member.target,
        member.actual
      );

    csv +=
      `"${member.name}",${member.target},${member.actual},${achievement}%\n`;

  });

  const blob =
    new Blob(
      [csv],
      {
        type: "text/csv;charset=utf-8;"
      }
    );

  const url =
    URL.createObjectURL(blob);

  const link =
    document.createElement("a");

  link.href = url;

  link.download =
    "Aung-Business-Academy-Sales-Report.csv";

  link.click();

  URL.revokeObjectURL(url);

}


/* =========================================================
   CALCULATORS
========================================================= */

function openProfitCalculator() {

  openModal();

  $("modalBody").innerHTML = `

    <div class="lesson-detail-header">

      <span class="category">
        BUSINESS CALCULATOR
      </span>

      <h1>Profit & Margin Calculator</h1>

      <p>
        Revenue နဲ့ Cost ကနေ Profit နဲ့ Margin တွက်ပါ။
      </p>

    </div>

    <div class="form-grid">

      <div class="form-group">
        <label>Sales Revenue (MMK)</label>
        <input id="profitRevenue" type="number" placeholder="10000000">
      </div>

      <div class="form-group">
        <label>Total Cost (MMK)</label>
        <input id="profitCost" type="number" placeholder="7500000">
      </div>

    </div>

    <button
      class="save-btn"
      onclick="calculateProfitTool()"
    >
      Calculate
    </button>

    <div id="profitResult"></div>

  `;

}


function calculateProfitTool() {

  const revenue =
    Number($("profitRevenue").value) || 0;

  const cost =
    Number($("profitCost").value) || 0;

  const profit =
    revenue - cost;

  const margin =
    revenue
      ? (profit / revenue) * 100
      : 0;

  $("profitResult").innerHTML = `

    <div class="action-box" style="margin-top:18px">

      <strong>Result</strong>

      <p style="margin-top:8px">

        Revenue:
        <strong>${formatMoney(revenue)}</strong>

        <br>

        Cost:
        <strong>${formatMoney(cost)}</strong>

        <br>

        Profit:
        <strong>${formatMoney(profit)}</strong>

        <br>

        Margin:
        <strong>${margin.toFixed(2)}%</strong>

      </p>

    </div>

  `;

}


function openPricingCalculator() {

  openModal();

  $("modalBody").innerHTML = `

    <div class="lesson-detail-header">

      <span class="category">
        PRICING
      </span>

      <h1>Pricing Calculator</h1>

      <p>
        Cost နဲ့ Desired Margin အပေါ်မူတည်ပြီး Selling Price တွက်ပါ။
      </p>

    </div>

    <div class="form-group">

      <label>Cost Price (MMK)</label>

      <input
        id="pricingCost"
        type="number"
        placeholder="750000"
      >

    </div>

    <div class="form-group" style="margin-top:12px">

      <label>Desired Margin %</label>

      <input
        id="pricingMargin"
        type="number"
        placeholder="25"
      >

    </div>

    <button
      class="save-btn"
      onclick="calculatePricingTool()"
    >
      Calculate
    </button>

    <div id="pricingResult"></div>

  `;

}


function calculatePricingTool() {

  const cost =
    Number($("pricingCost").value) || 0;

  const margin =
    Number($("pricingMargin").value) || 0;

  if (margin >= 100) {

    $("pricingResult").innerHTML = `
      <div class="warning-box">
        Margin 100% သို့မဟုတ် ထို့ထက်ပို၍ မတွက်နိုင်ပါ။
      </div>
    `;

    return;

  }

  const sellingPrice =
    cost / (1 - margin / 100);

  const profit =
    sellingPrice - cost;

  $("pricingResult").innerHTML = `

    <div class="action-box" style="margin-top:18px">

      <strong>Recommended Price</strong>

      <p style="margin-top:8px">

        Cost:
        <strong>${formatMoney(cost)}</strong>

        <br>

        Margin:
        <strong>${margin}%</strong>

        <br>

        Selling Price:
        <strong>${formatMoney(sellingPrice)}</strong>

        <br>

        Gross Profit:
        <strong>${formatMoney(profit)}</strong>

      </p>

    </div>

  `;

}


function openBreakEvenCalculator() {

  openModal();

  $("modalBody").innerHTML = `

    <div class="lesson-detail-header">

      <span class="category">
        FINANCE
      </span>

      <h1>Break-even Calculator</h1>

      <p>
        Fixed Cost နဲ့ Unit Contribution ကနေ Break-even Units တွက်ပါ။
      </p>

    </div>

    <div class="form-group">

      <label>Fixed Cost (MMK)</label>

      <input
        id="breakFixed"
        type="number"
        placeholder="2000000"
      >

    </div>

    <div class="form-group" style="margin-top:12px">

      <label>Selling Price / Unit</label>

      <input
        id="breakPrice"
        type="number"
        placeholder="10000"
      >

    </div>

    <div class="form-group" style="margin-top:12px">

      <label>Variable Cost / Unit</label>

      <input
        id="breakVariable"
        type="number"
        placeholder="6000"
      >

    </div>

    <button
      class="save-btn"
      onclick="calculateBreakEven()"
    >
      Calculate
    </button>

    <div id="breakResult"></div>

  `;

}


function calculateBreakEven() {

  const fixed =
    Number($("breakFixed").value) || 0;

  const price =
    Number($("breakPrice").value) || 0;

  const variable =
    Number($("breakVariable").value) || 0;

  const contribution =
    price - variable;

  if (contribution <= 0) {

    $("breakResult").innerHTML = `
      <div class="warning-box">
        Selling Price က Variable Cost ထက် မြင့်ရပါမယ်။
      </div>
    `;

    return;

  }

  const units =
    Math.ceil(
      fixed / contribution
    );

  const sales =
    units * price;

  $("breakResult").innerHTML = `

    <div class="action-box" style="margin-top:18px">

      <strong>Break-even Result</strong>

      <p style="margin-top:8px">

        Unit Contribution:
        <strong>${formatMoney(contribution)}</strong>

        <br>

        Break-even Units:
        <strong>${formatNumber(units)}</strong>

        <br>

        Break-even Sales:
        <strong>${formatMoney(sales)}</strong>

      </p>

    </div>

  `;

}


function openSalesTargetCalculator() {

  openModal();

  $("modalBody").innerHTML = `

    <div class="lesson-detail-header">

      <span class="category">
        SALES MANAGEMENT
      </span>

      <h1>Sales Target Calculator</h1>

      <p>
        Monthly Target ကို Daily Target နဲ့ Recovery Target အဖြစ်တွက်ပါ။
      </p>

    </div>

    <div class="form-grid">

      <div class="form-group">
        <label>Monthly Target</label>
        <input id="targetMonthly" type="number" placeholder="30000000">
      </div>

      <div class="form-group">
        <label>Working Days</label>
        <input id="targetDays" type="number" placeholder="26">
      </div>

      <div class="form-group">
        <label>Actual Sales</label>
        <input id="targetActual" type="number" placeholder="18000000">
      </div>

      <div class="form-group">
        <label>Remaining Days</label>
        <input id="targetRemaining" type="number" placeholder="8">
      </div>

    </div>

    <button
      class="save-btn"
      onclick="calculateSalesTarget()"
    >
      Calculate
    </button>

    <div id="targetResult"></div>

  `;

}


function calculateSalesTarget() {

  const target =
    Number($("targetMonthly").value) || 0;

  const days =
    Number($("targetDays").value) || 1;

  const actual =
    Number($("targetActual").value) || 0;

  const remaining =
    Number($("targetRemaining").value) || 1;

  const daily =
    target / days;

  const gap =
    Math.max(target - actual, 0);

  const recovery =
    gap / remaining;

  $("targetResult").innerHTML = `

    <div class="action-box" style="margin-top:18px">

      <strong>Target Plan</strong>

      <p style="margin-top:8px">

        Normal Daily Target:
        <strong>${formatMoney(daily)}</strong>

        <br>

        Current Gap:
        <strong>${formatMoney(gap)}</strong>

        <br>

        Recovery Daily Target:
        <strong>${formatMoney(recovery)}</strong>

      </p>

    </div>

  `;

}


/* =========================================================
   REPORTS
========================================================= */

function renderReports() {

  const container =
    $("reportsContent");

  if (!container) return;

  const target =
    Number(salesData.target) || 0;

  const actual =
    Number(salesData.actual) || 0;

  const achievement =
    calculateAchievement(
      target,
      actual
    );

  const teamAverage =
    salesData.team.length
      ? Math.round(
          salesData.team.reduce(
            (sum, member) =>
              sum +
              calculateAchievement(
                member.target,
                member.actual
              ),
            0
          ) /
          salesData.team.length
        )
      : 0;

  const completedActions =
    salesData.actions.filter(
      action => action.done
    ).length;

  container.innerHTML = `

    <div class="report-grid">

      <div class="report-card">

        <span>SALES ACHIEVEMENT</span>

        <strong>${achievement}%</strong>

        <small>
          Target vs Actual
        </small>

      </div>

      <div class="report-card">

        <span>TEAM AVERAGE</span>

        <strong>${teamAverage}%</strong>

        <small>
          Average Team Achievement
        </small>

      </div>

      <div class="report-card">

        <span>ACTION PLAN</span>

        <strong>
          ${completedActions}/${salesData.actions.length}
        </strong>

        <small>
          Completed Actions
        </small>

      </div>

    </div>


    <div class="panel" style="margin-top:18px">

      <div class="panel-header">

        <h3>Management Insight</h3>

      </div>

      <div class="action-box">

        ${
          achievement >= 100
            ? "Sales Target ပြည့်မီနေပါတယ်။ ယခုအချိန်မှာ Margin, Customer Retention နဲ့ Next Month Pipeline ကို အာရုံစိုက်ပါ။"
            : achievement >= 80
            ? "Performance က အတော်ကောင်းနေပါတယ်။ ကျန် Gap ကို Top Customers နဲ့ High Probability Pipeline ကနေ ပြန်လည်ရယူပါ။"
            : "Achievement နိမ့်နေပါတယ်။ Target ကို ထပ်မံဖိအားပေးမယ့်အစား Root Cause Analysis လုပ်ပြီး Recovery Action Plan ချမှတ်ပါ။"
        }

      </div>

    </div>

  `;

}


/* =========================================================
   AI BUSINESS COACH
========================================================= */

function usePrompt(text) {

  const input = $("aiInput");

  if (!input) return;

  input.value = text;

  sendAIMessage();

}


function sendAIMessage() {

  const input =
    $("aiInput");

  if (!input) return;

  const question =
    input.value.trim();

  if (!question) return;

  addUserMessage(question);

  input.value = "";

  setTimeout(() => {

    const answer =
      getAIResponse(question);

    addAIMessage(answer);

  }, 250);

}


function addUserMessage(text) {

  const chat =
    $("chatMessages");

  if (!chat) return;

  const div =
    document.createElement("div");

  div.className =
    "chat-message user";

  div.innerHTML = `

    <div class="message-content">

      <strong>You</strong>

      <p>
        ${escapeHTML(text)}
      </p>

    </div>

  `;

  chat.appendChild(div);

  chat.scrollTop =
    chat.scrollHeight;

}


function addAIMessage(html) {

  const chat =
    $("chatMessages");

  if (!chat) return;

  const div =
    document.createElement("div");

  div.className =
    "chat-message ai";

  div.innerHTML = `

    <div class="chat-avatar">
      🤖
    </div>

    <div class="message-content">

      <strong>
        Aung AI Business Coach
      </strong>

      ${html}

    </div>

  `;

  chat.appendChild(div);

  chat.scrollTop =
    chat.scrollHeight;

}


/*
  Offline detailed business knowledge engine.
  This is intentionally structured so a Gemini API can later
  replace/extend getAIResponse() without changing the UI.
*/

function getAIResponse(question) {

  const q =
    question.toLowerCase();


  /* TARGET */

  if (
    q.includes("target") &&
    (
      q.includes("မပြည့်") ||
      q.includes("မရ") ||
      q.includes("ကျ") ||
      q.includes("gap")
    )
  ) {

    return `

      <h4>🎯 အကျဉ်းချုပ်</h4>

      <p>
        Sales Target မပြည့်တဲ့အခါ Team ကို
        “ပိုကြိုးစားပါ” လို့ပဲ ပြောတာမလုံလောက်ပါဘူး။
        <strong>Gap → Root Cause → Recovery Plan → Follow-up</strong>
        အစီအစဉ်နဲ့သွားရပါမယ်။
      </p>

      <h4>1. Gap ကို အရင်တွက်ပါ</h4>

      <p>
        ဥပမာ Target = 300 သိန်း၊ Actual = 220 သိန်းဆိုရင်
        Gap = 80 သိန်း ဖြစ်ပါတယ်။
        Achievement = 73.3% ခန့် ဖြစ်ပါတယ်။
      </p>

      <h4>2. Root Cause 5 ခု စစ်ပါ</h4>

      <ol>
        <li>People — Sales Team activity လျော့နေလား?</li>
        <li>Customer — Customer demand ကျနေလား?</li>
        <li>Product — Stock / Product issue ရှိလား?</li>
        <li>Price — Competitor price/promotion ကြောင့်လား?</li>
        <li>Execution — Visit, quotation, follow-up မလုံလောက်လား?</li>
      </ol>

      <h4>3. Recovery Plan</h4>

      <ul>
        <li>Top Customers ကို Priority ပေးပါ</li>
        <li>High-probability Pipeline ကို Closing Focus လုပ်ပါ</li>
        <li>Low-performing Territory ကို သီးခြား Action Plan ချပါ</li>
        <li>နေ့စဉ် Recovery Target သတ်မှတ်ပါ</li>
        <li>Daily Review ပြုလုပ်ပါ</li>
      </ul>

      <h4>4. KPI</h4>

      <ul>
        <li>Achievement %</li>
        <li>Daily Sales</li>
        <li>Customer Visits</li>
        <li>Pipeline Value</li>
        <li>Quotation</li>
        <li>Conversion Rate</li>
      </ul>

      <div class="action-box">
        <strong>Manager Action:</strong>
        “Target မပြည့်ဘူး” လို့မပြောခင်
        “ဘယ် Driver က Target မရအောင်လုပ်နေတာလဲ?”
        ဆိုတာကိုရှာပါ။
      </div>

    `;

  }


  /* TEAM */

  if (
    q.includes("team") ||
    q.includes("ဝန်ထမ်း") ||
    q.includes("performance") ||
    q.includes("လူတွေ")
  ) {

    return `

      <h4>👥 Team Performance တိုးတက်အောင်လုပ်နည်း</h4>

      <p>
        Team Performance ကို တိုးတက်စေဖို့
        <strong>Clear Expectations + Coaching + KPI + Accountability</strong>
        လိုအပ်ပါတယ်။
      </p>

      <h4>1. Expectation ရှင်းပါ</h4>

      <p>
        Team Member တစ်ယောက်ချင်းစီအတွက် Target,
        Activity KPI, Deadline နဲ့ Expected Result ကို ရှင်းပြပါ။
      </p>

      <h4>2. Data နဲ့ Diagnose လုပ်ပါ</h4>

      <ul>
        <li>Target Achievement</li>
        <li>Customer Visits</li>
        <li>New Leads</li>
        <li>Quotation</li>
        <li>Conversion</li>
        <li>Collection / AR</li>
      </ul>

      <h4>3. Coaching Conversation</h4>

      <ol>
        <li>ဘာ Result ရနေသလဲ?</li>
        <li>ဘာ Gap ဖြစ်နေလဲ?</li>
        <li>ဘာကြောင့်ဖြစ်တာလဲ?</li>
        <li>ဘာ Action လုပ်မလဲ?</li>
        <li>ဘယ်နေ့ Follow-up လုပ်မလဲ?</li>
      </ol>

      <h4>4. Micromanagement မလုပ်ပါနဲ့</h4>

      <p>
        Manager က အလုပ်တိုင်းကို ဘယ်လိုလုပ်ရမယ်လို့
        ထိန်းချုပ်တာထက် Outcome နဲ့ Accountability ကို
        သတ်မှတ်ပြီး Ownership ပေးပါ။
      </p>

      <div class="action-box">
        <strong>Best Management Formula:</strong>
        Clear Direction → Coaching → Ownership → Review → Feedback
      </div>

    `;

  }


  /* DISTRIBUTOR */

  if (
    q.includes("distributor") ||
    q.includes("ဖြန့်ချိ") ||
    q.includes("distribution")
  ) {

    return `

      <h4>🚚 Distributor Sales ကျတဲ့အခါ စစ်ရမယ့်အချက်များ</h4>

      <p>
        Distributor Sales ကျတာကို Order Value တစ်ခုတည်းကြည့်ပြီး
        ဆုံးဖြတ်မလုပ်ပါနဲ့။ <strong>Stock → Order → Outlet → Coverage →
        Collection → Competitor</strong> အဆင့်လိုက်စစ်ပါ။
      </p>

      <h4>1. Stock</h4>

      <ul>
        <li>Warehouse Stock ဘယ်လောက်ရှိလဲ?</li>
        <li>Fast Moving SKU ရှိလား?</li>
        <li>Out-of-stock ဖြစ်နေလား?</li>
      </ul>

      <h4>2. Outlet Coverage</h4>

      <ul>
        <li>Active Outlets ဘယ်လောက်ရှိလဲ?</li>
        <li>New Outlet ရှာနေသလား?</li>
        <li>Lost Outlet ရှိလား?</li>
      </ul>

      <h4>3. Competitor</h4>

      <ul>
        <li>Competitor Promotion</li>
        <li>Price Difference</li>
        <li>Credit Terms</li>
        <li>Availability</li>
      </ul>

      <h4>4. Distributor Health</h4>

      <ul>
        <li>Inventory Days</li>
        <li>Collection / AR</li>
        <li>Working Capital</li>
        <li>Sales Force Productivity</li>
      </ul>

      <div class="action-box">
        <strong>Manager Action:</strong>
        Distributor တစ်ခုရဲ့ Sales ကျရင်
        Distributor ကို အပြစ်တင်တာထက်
        Joint Business Review လုပ်ပြီး Root Cause နဲ့
        Recovery Target သတ်မှတ်ပါ။
      </div>

    `;

  }


  /* PROFIT */

  if (
    q.includes("margin") ||
    q.includes("profit") ||
    q.includes("အမြတ်") ||
    q.includes("အမြတ်နှုန်း")
  ) {

    return `

      <h4>💰 Profit & Margin Management</h4>

      <p>
        Sales များတာနဲ့ Profit များတယ်လို့ မဆိုနိုင်ပါဘူး။
        Discount, Cost, Product Mix နဲ့ Channel Mix က
        Margin ကို အများကြီးသက်ရောက်ပါတယ်။
      </p>

      <h4>Formula</h4>

      <p>
        Gross Profit = Sales - COGS
        <br>
        Gross Margin % = Gross Profit ÷ Sales × 100
      </p>

      <h4>ဥပမာ</h4>

      <p>
        Sales = 100 သိန်း
        <br>
        Cost = 75 သိန်း
        <br>
        Gross Profit = 25 သိန်း
        <br>
        Gross Margin = 25%
      </p>

      <h4>Margin တိုးရန်</h4>

      <ul>
        <li>Unnecessary Discount လျှော့ပါ</li>
        <li>High-margin Product Mix တိုးပါ</li>
        <li>Cost Control လုပ်ပါ</li>
        <li>Price Architecture ပြန်စစ်ပါ</li>
        <li>Low-margin Customer/Channel ကို Review လုပ်ပါ</li>
      </ul>

      <div class="warning-box">
        <strong>သတိပြုရန်:</strong>
        Revenue တိုးဖို့ Discount ပေးလိုက်တာကြောင့်
        Gross Profit ပိုကျသွားနိုင်ပါတယ်။
      </div>

    `;

  }


  /* NEGOTIATION */

  if (
    q.includes("negotiation") ||
    q.includes("ညှိ") ||
    q.includes("discount") ||
    q.includes("လျှော့")
  ) {

    return `

      <h4>🤝 Professional Negotiation Framework</h4>

      <p>
        Customer က Discount တောင်းတဲ့အခါ
        ချက်ချင်း Discount မပေးပါနဲ့။
        <strong>Value → Need → Give & Get → Agreement</strong>
        နဲ့သွားပါ။
      </p>

      <h4>Customer က “ဈေးလျှော့ပေးပါ” ဆိုရင်</h4>

      <ol>
        <li>Customer ရဲ့ real concern ကိုမေးပါ</li>
        <li>Value ကိုပြန်ရှင်းပါ</li>
        <li>Volume / Payment / Contract / Mix ကိုညှိပါ</li>
        <li>Discount ပေးရင် တစ်ခုခု ပြန်ရယူပါ</li>
      </ol>

      <h4>ဥပမာ</h4>

      <p>
        “5% discount ပေးနိုင်ပါတယ်။
        အဲဒီအတွက် Monthly Volume ကို
        20% တိုးပေးနိုင်မလား?”
      </p>

      <div class="action-box">
        <strong>Rule:</strong>
        Give without Get မလုပ်ပါနဲ့။
        Margin ကို အမြဲကာကွယ်ပါ။
      </div>

    `;

  }


  /* LEADERSHIP */

  if (
    q.includes("leadership") ||
    q.includes("leader") ||
    q.includes("ခေါင်းဆောင်")
  ) {

    return `

      <h4>👑 Effective Sales Leadership</h4>

      <p>
        Sales Manager ရဲ့ Leadership Style ကို
        <strong>Coaching & Empowerment</strong> အခြေခံထားနိုင်ပါတယ်။
      </p>

      <h4>Manager က လုပ်ရမယ့် 5 ခု</h4>

      <ol>
        <li>Set Clear Expectations</li>
        <li>Provide Direction</li>
        <li>Monitor Performance</li>
        <li>Coach People</li>
        <li>Build Accountability</li>
      </ol>

      <h4>Micromanagement မလုပ်ရတဲ့အကြောင်း</h4>

      <p>
        Manager က အလုပ်တိုင်းကို ကိုယ်တိုင်ဆုံးဖြတ်ပေးနေရင်
        Team ရဲ့ Ownership ကျသွားနိုင်ပါတယ်။
        Outcome, KPI နဲ့ Deadline ကို သတ်မှတ်ပြီး
        Team ကို Solution စဉ်းစားစေပါ။
      </p>

      <div class="action-box">
        <strong>Leadership Formula:</strong>
        Direction + Coaching + Empowerment + Accountability
      </div>

    `;

  }


  /* INTERVIEW */

  if (
    q.includes("interview") ||
    q.includes("အင်တာဗျူး") ||
    q.includes("မေးခွန်း")
  ) {

    return `

      <h4>🎤 Sales Manager Interview Preparation</h4>

      <h4>1. Strength</h4>

      <p>
        “My biggest strength is my ability to convert
        sales targets into practical field execution.”
      </p>

      <p>
        မြန်မာလိုဆိုရင် Target ကို Number အနေနဲ့ပဲ မကြည့်ဘဲ
        People, Numbers နဲ့ Execution အဖြစ် ပြောင်းပြီး
        Result ရအောင်လုပ်နိုင်တာကို Strength အဖြစ် ပြောနိုင်ပါတယ်။
      </p>

      <h4>2. Leadership Style</h4>

      <p>
        Coaching and Empowerment ဖြစ်တယ်လို့ ပြောနိုင်ပါတယ်။
        Clear Expectations → Direction → Monitoring →
        Coaching → Accountability အစီအစဉ်နဲ့ရှင်းပါ။
      </p>

      <h4>3. Target မပြည့်ရင်?</h4>

      <p>
        Gap Analysis → Root Cause → Action Plan →
        Daily Follow-up ဆိုတဲ့ Framework ကို ပြောပါ။
      </p>

      <h4>4. Team Member Performance ကျရင်?</h4>

      <p>
        Data ကိုစစ်ပြီး Capability, Activity, Motivation,
        Resource ပြဿနာတွေထဲက ဘယ်ဟာလဲရှာပြီး Coaching Plan ချပါ။
      </p>

      <div class="action-box">
        Interview Answer တွေကို Theory ထက်
        “Situation → Action → Result” ပုံစံနဲ့
        ကိုယ့်ရဲ့ real experience နဲ့ပြောရင် ပိုအားကောင်းပါတယ်။
      </div>

    `;

  }


  /* DEFAULT */

  return `

    <h4>🧠 Business Problem Solving Framework</h4>

    <p>
      ဒီမေးခွန်းအတွက် Business Manager အနေနဲ့
      အောက်ပါ Framework ကို အသုံးပြုနိုင်ပါတယ်။
    </p>

    <h4>1. Define the Problem</h4>

    <p>
      ပြဿနာက ဘာလဲဆိုတာ တိတိကျကျသတ်မှတ်ပါ။
      “Sales ကျတယ်” ဆိုတာထက်
      “North Territory Sales 20% ကျပြီး
      Active Customer 15% လျော့သွားတယ်”
      ဆိုရင် ပိုကောင်းပါတယ်။
    </p>

    <h4>2. Analyze the Root Cause</h4>

    <ul>
      <li>People</li>
      <li>Customer</li>
      <li>Product</li>
      <li>Price</li>
      <li>Process</li>
      <li>Competitor</li>
      <li>Market</li>
    </ul>

    <h4>3. Build an Action Plan</h4>

    <ol>
      <li>Action</li>
      <li>Owner</li>
      <li>Deadline</li>
      <li>Expected Result</li>
      <li>KPI</li>
    </ol>

    <h4>4. Review</h4>

    <p>
      Action Plan ကို Daily/Weekly Review လုပ်ပြီး
      Result မရရင် Strategy ကို ပြန်ပြင်ပါ။
    </p>

    <div class="action-box">
      <strong>Manager Rule:</strong>
      Problem → Data → Root Cause → Action → KPI → Follow-up
    </div>

    <p style="margin-top:12px">
      ပိုတိကျတဲ့အဖြေရဖို့
      သင့် Business Situation၊ Target၊ Team Size နဲ့
      လက်ရှိ Problem ကို ထည့်မေးနိုင်ပါတယ်။
    </p>

  `;

}


/* =========================================================
   AI TOOLS
========================================================= */

function openTools() {
  navigate("toolsPage");
}


function openAITool(tool) {

  navigate("aiPage");

  setTimeout(() => {

    let prompt = "";

    if (tool === "Sales Strategy") {
      prompt =
        "Sales target တိုးဖို့ Sales Strategy တစ်ခုကို အသေးစိတ်ရေးပေးပါ";
    }

    if (tool === "Team Coach") {
      prompt =
        "Sales team performance တိုးတက်အောင် Coaching Plan အသေးစိတ်ရေးပေးပါ";
    }

    if (tool === "Marketing Advisor") {
      prompt =
        "Marketing Campaign တစ်ခုကို Objective, Target, Budget, KPI နဲ့ အသေးစိတ်တည်ဆောက်ပေးပါ";
    }

    if (tool === "Business Problem Solver") {
      prompt =
        "Business problem တစ်ခုကို Root Cause Analysis နဲ့ Action Plan အဖြစ် ဘယ်လိုဖြေရှင်းမလဲ?";
    }

    if (prompt) {
      usePrompt(prompt);
    }

  }, 100);

}


/* =========================================================
   PROFILE
========================================================= */

function openProfile() {

  openModal();

  $("modalBody").innerHTML = `

    <div class="lesson-detail-header">

      <span class="category">
        PROFILE
      </span>

      <h1>Aung Zar Ni Win</h1>

      <p>
        Business Manager
      </p>

    </div>

    <div class="form-group">

      <label>Name</label>

      <input
        value="Aung Zar Ni Win"
        readonly
      >

    </div>

    <div class="form-group" style="margin-top:12px">

      <label>Position</label>

      <input
        value="Business Manager"
        readonly
      >

    </div>

    <div class="action-box" style="margin-top:18px">

      Aung Business Academy ကို
      Business Management, Sales Leadership,
      Strategy နဲ့ Practical Execution တိုးတက်ဖို့ အသုံးပြုနိုင်ပါတယ်။

    </div>

  `;

}


/* =========================================================
   NOTIFICATION
========================================================= */

function showNotification() {

  showToast(
    "No new notifications."
  );

}


/* =========================================================
   SEARCH
========================================================= */

function performSearch(value) {

  const keyword =
    value.trim().toLowerCase();

  if (!keyword) return;

  const result =
    LESSONS.find(
      lesson =>
        lesson.title
          .toLowerCase()
          .includes(keyword) ||
        lesson.summary
          .toLowerCase()
          .includes(keyword) ||
        lesson.category
          .toLowerCase()
          .includes(keyword)
    );

  if (result) {

    navigate("lessonsPage");

    setTimeout(() => {

      openLessonById(result.id);

    }, 100);

    return;

  }

  showToast(
    "Lesson မတွေ့ပါ။"
  );

}


/* =========================================================
   SIDEBAR
========================================================= */

function toggleSidebar() {

  const sidebar =
    $("sidebar");

  if (!sidebar) return;

  sidebar.classList.toggle("open");

}


function openSidebar() {

  const sidebar =
    $("sidebar");

  if (sidebar) {
    sidebar.classList.add("open");
  }

}


function closeSidebar() {

  const sidebar =
    $("sidebar");

  if (sidebar) {
    sidebar.classList.remove("open");
  }

}


/* =========================================================
   MODAL
========================================================= */

function openModal() {

  $("modalOverlay")
    .classList.add("show");

  document.body.style.overflow =
    "hidden";

}


function closeModal() {

  $("modalOverlay")
    .classList.remove("show");

  document.body.style.overflow =
    "";

}


/* =========================================================
   TOAST
========================================================= */

let toastTimer;

function showToast(message) {

  const toast =
    $("toast");

  if (!toast) return;

  toast.textContent =
    message;

  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer =
    setTimeout(() => {

      toast.classList.remove("show");

    }, 2500);

}


/* =========================================================
   LOGOUT
========================================================= */

function logoutUser() {

  showToast(
    "Logout feature will be connected to authentication later."
  );

}


/* =========================================================
   INITIALIZE
========================================================= */

function initializeApp() {

  renderCourses();

  renderLessons();

  renderProgress();

  renderSales();

  renderReports();

  updateDashboardStats();

  navigate("dashboardPage");

}


/* =========================================================
   DOM EVENTS
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    initializeApp();


    /* Sidebar navigation */

    document
      .querySelectorAll(".nav-item")
      .forEach(item => {

        item.addEventListener(
          "click",
          () => {

            navigate(
              item.dataset.page
            );

          }
        );

      });


    /* Mobile menu */

    const mobileMenu =
      $("mobileMenu");

    if (mobileMenu) {

      mobileMenu.addEventListener(
        "click",
        toggleSidebar
      );

    }


    /* Notification */

    const notificationBtn =
      $("notificationBtn");

    if (notificationBtn) {

      notificationBtn.addEventListener(
        "click",
        showNotification
      );

    }


    /* Search */

    const search =
      $("globalSearch");

    if (search) {

      search.addEventListener(
        "keydown",
        event => {

          if (
            event.key === "Enter"
          ) {

            performSearch(
              search.value
            );

          }

        }
      );

    }


    /* Modal close */

    const close =
      $("modalClose");

    if (close) {

      close.addEventListener(
        "click",
        closeModal
      );

    }


    const overlay =
      $("modalOverlay");

    if (overlay) {

      overlay.addEventListener(
        "click",
        event => {

          if (
            event.target === overlay
          ) {

            closeModal();

          }

        }
      );

    }

  }
);


/* =========================================================
   GLOBAL EXPORTS
========================================================= */

window.navigate = navigate;

window.goDashboard = goDashboard;

window.openLessons = openLessons;

window.continueLearning =
  continueLearning;

window.openBusinessPlan =
  openBusinessPlan;

window.openCategory =
  openCategory;

window.openCourse =
  openCourse;

window.filterLessons =
  filterLessons;

window.openLessonById =
  openLessonById;

window.openLesson =
  openLesson;

window.previousLesson =
  previousLesson;

window.nextLesson =
  nextLesson;

window.completeLesson =
  completeLesson;

window.openProfitCalculator =
  openProfitCalculator;

window.openPricingCalculator =
  openPricingCalculator;

window.openBreakEvenCalculator =
  openBreakEvenCalculator;

window.openSalesTargetCalculator =
  openSalesTargetCalculator;

window.calculateProfitTool =
  calculateProfitTool;

window.calculatePricingTool =
  calculatePricingTool;

window.calculateBreakEven =
  calculateBreakEven;

window.calculateSalesTarget =
  calculateSalesTarget;

window.saveSalesKPI =
  saveSalesKPI;

window.addTeamMember =
  addTeamMember;

window.removeTeamMember =
  removeTeamMember;

window.addActionPlan =
  addActionPlan;

window.toggleActionPlan =
  toggleActionPlan;

window.deleteActionPlan =
  deleteActionPlan;

window.resetSalesData =
  resetSalesData;

window.exportSalesReport =
  exportSalesReport;

window.sendAIMessage =
  sendAIMessage;

window.usePrompt =
  usePrompt;

window.openAITool =
  openAITool;

window.openTools =
  openTools;

window.openProfile =
  openProfile;

window.openModal =
  openModal;

window.closeModal =
  closeModal;

window.logoutUser =
  logoutUser;
