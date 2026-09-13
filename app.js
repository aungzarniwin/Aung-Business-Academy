/* =========================================================
   AUNG BUSINESS ACADEMY
   APP.JS - PROFESSIONAL V8
   Lessons + Sales Manager + AI Coach + Settings
   ========================================================= */

"use strict";

/* =========================
   BASIC HELPERS
========================= */

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

function formatMoney(number) {
  const n = Number(number) || 0;
  return n.toLocaleString("en-US") + " MMK";
}

function formatNumber(number) {
  return (Number(number) || 0).toLocaleString("en-US");
}

/* =========================
   STORAGE
========================= */

const STORAGE = {
  lessons: "aba_completed_lessons",
  sales: "aba_sales_manager_v1",
  actionPlans: "aba_action_plans_v1",
  team: "aba_team_v1",
  settings: "aba_settings_v1"
};

let completedLessons = JSON.parse(
  localStorage.getItem(STORAGE.lessons) || "[]"
);

let currentLessonIndex = 0;
let currentPage = "dashboardPage";

/* =========================
   COURSES
========================= */

const COURSES = [
  {
    id: 1,
    title: "Sales Management Mastery",
    category: "Sales",
    lessons: [1, 2, 3, 4, 5],
    description: "Sales target, KPI, team management နှင့် field execution ကို လက်တွေ့ကျကျ လေ့လာပါ။",
    icon: "🎯"
  },
  {
    id: 2,
    title: "Business Strategy",
    category: "Strategy",
    lessons: [6, 7, 8],
    description: "Market analysis, strategy နှင့် action planning ကို နားလည်ပါ။",
    icon: "♟️"
  },
  {
    id: 3,
    title: "People & Leadership",
    category: "People",
    lessons: [9, 10, 11],
    description: "Team leadership, coaching, motivation နှင့် performance management။",
    icon: "👥"
  },
  {
    id: 4,
    title: "Finance for Managers",
    category: "Finance",
    lessons: [12, 13, 14],
    description: "Profit, margin, break-even နှင့် business numbers ကို manager တစ်ယောက်အနေနဲ့ နားလည်ပါ။",
    icon: "💰"
  }
];

/* =========================
   DETAILED LESSONS
========================= */

const LESSONS = [

  {
    id: 1,
    courseId: 1,
    category: "Sales",
    title: "Sales Target ကို Achievement ဖြစ်အောင် ပြောင်းလဲခြင်း",
    minutes: 25,
    icon: "🎯",
    overview:
      "Sales Manager တစ်ယောက်ရဲ့ အဓိကတာဝန်က Target ရရှိဖို့အတွက် number တစ်ခုတည်းကိုကြည့်တာမဟုတ်ပါဘူး။ Target ကို လူ၊ customer၊ territory၊ product နဲ့ daily execution အဖြစ် ခွဲပြီး လက်တွေ့လုပ်ဆောင်နိုင်ဖို့ ဖြစ်ပါတယ်။",

    objectives: [
      "Monthly Target ကို Daily Target အဖြစ် ခွဲနိုင်ရန်",
      "Achievement Gap ကို ရှာဖွေနိုင်ရန်",
      "Team တစ်ခုချင်းစီအတွက် Action Plan ပြုလုပ်နိုင်ရန်",
      "Target မပြည့်တဲ့အခါ root cause ရှာနိုင်ရန်"
    ],

    sections: [
      {
        heading: "၁။ Target ကို ဘယ်လိုစတင်ခွဲမလဲ?",
        body:
          "ဥပမာ Monthly Target 30,000,000 MMK ရှိတယ်ဆိုပါစို့။ Working Days 26 ရက်ဆိုရင် Daily Target = 30,000,000 ÷ 26 = 1,153,846 MMK ခန့် ဖြစ်ပါတယ်။ ဒီလိုခွဲလိုက်တဲ့အခါ Sales Manager အနေနဲ့ 'ဒီနေ့ ဘယ်လောက်ရောင်းရမလဲ' ဆိုတာ ရှင်းလင်းသွားပါတယ်။"
      },
      {
        heading: "၂။ Gap Analysis",
        body:
          "Actual Sales ကို Target နဲ့ နှိုင်းယှဉ်ပြီး Gap ကို ရှာပါ။ Target 30 million၊ Actual 22 million ဆိုရင် Gap = 8 million ဖြစ်ပါတယ်။ ဒါပေမယ့် Gap ကို သိရုံနဲ့ မလုံလောက်ပါဘူး။ Gap ဖြစ်ရတဲ့အကြောင်းရင်းကို People, Customer, Product, Distribution, Competition ဆိုပြီး ခွဲစိတ်ရပါမယ်။"
      },
      {
        heading: "၃။ People - Numbers - Execution",
        body:
          "Professional Sales Manager တစ်ယောက်က People, Numbers, Execution သုံးခုကို အမြဲကြည့်ပါတယ်။ People ဆိုတာ team capability၊ Numbers ဆိုတာ target/KPI၊ Execution ဆိုတာ field activity ဖြစ်ပါတယ်။"
      }
    ],

    example:
      "Distributor တစ်ခုရဲ့ sales က 20% ကျနေတယ်ဆိုပါစို့။ 'ရောင်းအားကျနေတယ်' လို့ပဲ မပြောဘဲ SKU availability, outlet coverage, salesman productivity, competitor activity, stock level, credit issue စတာတွေကို စစ်ဆေးရပါမယ်။",

    managerApplication:
      "မနက်တိုင်း team ကို target တစ်ခုတည်း ပြောမယ့်အစား ယနေ့ target၊ customer priority၊ route plan၊ expected orders နဲ့ closing action ကို သတ်မှတ်ပေးပါ။ ညနေမှာ Actual vs Plan ပြန်စစ်ပါ။",

    checklist: [
      "Monthly Target သိပြီလား?",
      "Daily Target ခွဲပြီးပြီလား?",
      "Actual Sales သိပြီလား?",
      "Gap ကို သိပြီလား?",
      "Gap ရဲ့ root cause ရှာပြီးပြီလား?",
      "Action Plan သတ်မှတ်ပြီးပြီလား?"
    ],

    assignment:
      "ကိုယ့် business အတွက် Monthly Target တစ်ခုသတ်မှတ်ပြီး Daily Target၊ Gap နဲ့ Action Plan တစ်ခု ရေးပါ။",

    takeaways: [
      "Target ကို number အဖြစ်ပဲ မကြည့်ပါနဲ့။",
      "Target → Daily Activity → Customer → Order → Revenue အဖြစ် ခွဲပါ။",
      "Gap ရှိတိုင်း root cause ကို ရှာပါ။",
      "Action Plan မရှိတဲ့ KPI review က အကျိုးမရှိပါ။"
    ]
  },

  {
    id: 2,
    courseId: 1,
    category: "Sales",
    title: "Sales KPI နှင့် Performance Management",
    minutes: 30,
    icon: "📊",
    overview:
      "Sales KPI ဆိုတာ sales team ရဲ့ performance ကို တိုင်းတာဖို့ အသုံးပြုတဲ့ measurable indicators ဖြစ်ပါတယ်။",

    objectives: [
      "Achievement % တွက်နိုင်ရန်",
      "Productivity KPI သတ်မှတ်နိုင်ရန်",
      "Team performance gap ခွဲနိုင်ရန်",
      "Weekly review ပြုလုပ်နိုင်ရန်"
    ],

    sections: [
      {
        heading: "Achievement %",
        body:
          "Achievement % = Actual Sales ÷ Target × 100 ဖြစ်ပါတယ်။ ဥပမာ Target 50 million၊ Actual 45 million ဆိုရင် Achievement = 90% ဖြစ်ပါတယ်။"
      },
      {
        heading: "Activity KPI",
        body:
          "Sales result တစ်ခုတည်းမကြည့်ဘဲ productive calls, customer visits, new outlets, order conversion, SKU per outlet, collection performance စတဲ့ leading indicators တွေကိုလည်း ကြည့်ရပါမယ်။"
      },
      {
        heading: "Weekly Review",
        body:
          "Weekly review မှာ Result, Gap, Root Cause, Action, Owner, Deadline ဆိုတဲ့ framework ကို သုံးပါ။"
      }
    ],

    example:
      "Salesman A က Achievement 95% ရပေမယ့် new outlet မတိုးဘူး။ Salesman B က Achievement 85% ဖြစ်ပေမယ့် new outlet 20 ခုတိုးလာတယ်ဆိုရင် Manager အနေနဲ့ result တစ်ခုတည်းနဲ့ judgment မလုပ်သင့်ပါဘူး။",

    managerApplication:
      "Team review မှာ KPI ၃–၅ ခုထက်ပိုပြီး အများကြီး မထည့်ပါနဲ့။ Business objective နဲ့ တိုက်ရိုက်ဆက်စပ်တဲ့ KPI တွေကိုသာ သတ်မှတ်ပါ။",

    checklist: [
      "Target",
      "Actual",
      "Achievement %",
      "Gap",
      "Productivity",
      "New Customer",
      "Collection"
    ],

    assignment:
      "ကိုယ့် Sales Team အတွက် KPI 5 ခု သတ်မှတ်ပြီး တစ်ပတ်စာ review sheet တစ်ခု ဖန်တီးပါ။",

    takeaways: [
      "KPI က behavior ကို drive လုပ်တယ်။",
      "Result KPI + Activity KPI နှစ်မျိုးလုံးလိုတယ်။",
      "Review ပြီးတိုင်း Action Owner နဲ့ Deadline ရှိရမယ်။"
    ]
  },

  {
    id: 3,
    courseId: 1,
    category: "Sales",
    title: "Distributor Management နှင့် Route-to-Market",
    minutes: 30,
    icon: "🚚",
    overview:
      "Distributor management က FMCG, Beverage, Automobile parts နှင့် distribution business တွေအတွက် အရေးကြီးပါတယ်။ Distributor တစ်ခုက sales number တစ်ခုထက်ပိုပြီး market coverage ကို ထိန်းထားရပါတယ်။",

    objectives: [
      "Distributor performance စစ်ဆေးနိုင်ရန်",
      "Stock / Sales / Collection ခွဲခြမ်းနိုင်ရန်",
      "Market coverage တိုးနိုင်ရန်",
      "Distributor action plan ပြုလုပ်နိုင်ရန်"
    ],

    sections: [
      {
        heading: "Distributor Health Check",
        body:
          "Sales volume, stock days, outstanding AR, collection, active outlets, salesman productivity နဲ့ competitor pressure ကို ပုံမှန်စစ်ဆေးပါ။"
      },
      {
        heading: "Stock Management",
        body:
          "Stock အများကြီးရှိတာက အမြဲကောင်းတာမဟုတ်ပါဘူး။ Slow-moving stock များရင် cash flow ပိတ်နိုင်ပါတယ်။ Stock level ကို demand နဲ့ ချိန်ညှိရပါမယ်။"
      },
      {
        heading: "Coverage",
        body:
          "Market coverage က customer list အရေအတွက်သာ မဟုတ်ပါဘူး။ Active buying outlets ဘယ်လောက်ရှိသလဲ၊ frequency ဘယ်လောက်ရှိသလဲဆိုတာကိုပါ ကြည့်ရပါတယ်။"
      }
    ],

    example:
      "Distributor sales ကျလာရင် order မရတာတစ်ခုတည်းကို မကြည့်ပါနဲ့။ Stock-out ဖြစ်နေလား၊ salesman မပြည့်ဘူးလား၊ competitor promotion ရှိလား၊ credit limit ပြည့်နေပြီလားဆိုတာ စစ်ပါ။",

    managerApplication:
      "Distributor review ကို monthly meeting တစ်ခုအဖြစ်သာ မထားဘဲ weekly business review ပြုလုပ်ပါ။",

    checklist: [
      "Stock",
      "Sales",
      "Collection",
      "AR",
      "Coverage",
      "Manpower",
      "Competitor"
    ],

    assignment:
      "Distributor တစ်ခုကို Health Check ပြုလုပ်ဖို့ KPI 8 ခု စာရင်းရေးပါ။",

    takeaways: [
      "Distributor = Partner ဖြစ်ပါတယ်။",
      "Sales တစ်ခုတည်းမကြည့်ပါနဲ့။",
      "Stock + Sales + Cash + Coverage ကို အတူကြည့်ပါ။"
    ]
  },

  {
    id: 4,
    courseId: 1,
    category: "Sales",
    title: "Sales Team Coaching & Leadership",
    minutes: 30,
    icon: "👥",
    overview:
      "Manager က team ကို အလုပ်ခိုင်းတဲ့သူတစ်ယောက်မဟုတ်ဘဲ performance တိုးတက်အောင် coaching လုပ်ပေးတဲ့ leader ဖြစ်ရပါမယ်။",

    objectives: [
      "Coaching conversation ပြုလုပ်နိုင်ရန်",
      "Poor performance root cause ရှာနိုင်ရန်",
      "Team accountability တည်ဆောက်နိုင်ရန်",
      "Micromanagement မလုပ်ဘဲ control ရနိုင်ရန်"
    ],

    sections: [
      {
        heading: "Coaching Model",
        body:
          "အရင်ဆုံး 'ဘာဖြစ်နေလဲ?' ကိုမေးပါ။ ပြီးရင် 'ဘာကြောင့်ဖြစ်တာလဲ?'၊ 'ဘယ်လိုပြင်မလဲ?'၊ 'ဘယ်အချိန်ပြီးမလဲ?' ဆိုတဲ့ မေးခွန်းတွေကို သုံးပါ။"
      },
      {
        heading: "Expectation",
        body:
          "Clear expectation မရှိရင် accountability တောင်းလို့မရပါဘူး။ Target, activity, deadline နဲ့ expected behavior ကို ရှင်းရှင်းလင်းလင်း ပြောပါ။"
      },
      {
        heading: "Feedback",
        body:
          "Feedback ကို လူကိုတိုက်ခိုက်တာမဟုတ်ဘဲ behavior နဲ့ result ကို အခြေခံပြီး ပေးပါ။"
      }
    ],

    example:
      "Salesman တစ်ယောက် target မပြည့်ရင် 'မင်းအလုပ်မကြိုးစားဘူး' လို့ မပြောဘဲ 'ဒီလ target 20 million၊ actual 14 million ဖြစ်နေတယ်။ Gap 6 million ဖြစ်တယ်။ ဘယ် customer segment မှာ အဓိကကျနေတာလဲ?' လို့ စတင်ဆွေးနွေးပါ။",

    managerApplication:
      "Weekly 1-on-1 coaching session တစ်ခုစီထားပြီး team member တစ်ယောက်ချင်းစီရဲ့ strength, gap, action plan နဲ့ development goal ကို review လုပ်ပါ။",

    checklist: [
      "Clear expectation",
      "Performance data",
      "Root cause",
      "Coaching",
      "Action",
      "Follow-up"
    ],

    assignment:
      "Performance မကောင်းတဲ့ team member တစ်ယောက်အတွက် coaching conversation plan ရေးပါ။",

    takeaways: [
      "Manager က answer ပေးသူမဟုတ်ဘဲ thinking ဖြစ်အောင် မေးတတ်သူဖြစ်ရမယ်။",
      "Ownership ပေးပါ။",
      "Follow-up မရှိရင် coaching မပြီးပါ။"
    ]
  },

  {
    id: 5,
    courseId: 1,
    category: "Sales",
    title: "Sales Review Meeting ကို Professional လုပ်ခြင်း",
    minutes: 25,
    icon: "📋",
    overview:
      "Sales meeting က long discussion ဖြစ်ဖို့မဟုတ်ဘဲ business decision ချဖို့ ဖြစ်ပါတယ်။",

    objectives: [
      "Review meeting structure သိရန်",
      "Data-based discussion ပြုလုပ်ရန်",
      "Action owner သတ်မှတ်နိုင်ရန်",
      "Follow-up system တည်ဆောက်နိုင်ရန်"
    ],

    sections: [
      {
        heading: "Meeting Structure",
        body:
          "Result → Gap → Reason → Action → Owner → Deadline ဆိုတဲ့ sequence ကို သုံးပါ။"
      },
      {
        heading: "Data First",
        body:
          "Opinion မပြောခင် actual number ကို အရင်ပြပါ။"
      },
      {
        heading: "Action Ownership",
        body:
          "Action တစ်ခုစီအတွက် ဘယ်သူလုပ်မလဲ၊ ဘယ်နေ့ပြီးမလဲဆိုတာ မဖြစ်မနေ သတ်မှတ်ပါ။"
      }
    ],

    example:
      "North Territory target 100 million၊ actual 82 million ဖြစ်ရင် meeting မှာ 18 million gap ရဲ့ customer/product/coverage root cause ကို ခွဲပြီး action plan သတ်မှတ်ပါ။",

    managerApplication:
      "Meeting ပြီးရင် action tracker တစ်ခုထားပြီး next meeting မှာ completion status ပြန်စစ်ပါ။",

    checklist: [
      "Agenda",
      "Actual",
      "Gap",
      "Root Cause",
      "Action",
      "Owner",
      "Deadline"
    ],

    assignment:
      "30 မိနစ်စာ Weekly Sales Review agenda တစ်ခု ရေးပါ။",

    takeaways: [
      "Meeting ရဲ့ output က decision ဖြစ်ရမယ်။",
      "Action owner မရှိရင် action မဖြစ်နိုင်ပါ။"
    ]
  },

  {
    id: 6,
    courseId: 2,
    category: "Strategy",
    title: "Strategic Thinking အခြေခံ",
    minutes: 30,
    icon: "♟️",
    overview:
      "Strategy ဆိုတာ အလုပ်အများကြီးလုပ်တာမဟုတ်ဘဲ အရေးကြီးဆုံးအရာကို ရွေးပြီး resource ကို focus လုပ်ခြင်း ဖြစ်ပါတယ်။",

    objectives: [
      "Business situation ကို analyze လုပ်နိုင်ရန်",
      "Priority သတ်မှတ်နိုင်ရန်",
      "Opportunity နှင့် risk ခွဲနိုင်ရန်"
    ],

    sections: [
      {
        heading: "Where Are We?",
        body:
          "Current sales, market share, customer base, competitor position နဲ့ financial performance ကို သိပါ။"
      },
      {
        heading: "Where Do We Want to Go?",
        body:
          "12 months အတွင်း ဘယ်လို result ရချင်လဲဆိုတာ measurable target နဲ့ သတ်မှတ်ပါ။"
      },
      {
        heading: "How Will We Get There?",
        body:
          "People, product, price, distribution, marketing နဲ့ execution အားသာချက်တွေကို အသုံးချပြီး strategy တည်ဆောက်ပါ။"
      }
    ],

    example:
      "Sales ကျနေတာကို promotion ပေးလိုက်ရုံနဲ့ မဖြေရှင်းနိုင်ပါ။ Market share ကျတာလား၊ distribution ကျတာလား၊ price competitiveness မရှိတာလား ခွဲခြမ်းရပါမယ်။",

    managerApplication:
      "Monthly business review မှာ operational issue နဲ့ strategic issue ကို ခွဲပြီး ဆွေးနွေးပါ။",

    checklist: [
      "Current Situation",
      "Goal",
      "Gap",
      "Opportunity",
      "Risk",
      "Strategy",
      "Execution"
    ],

    assignment:
      "ကိုယ့် business အတွက် SWOT analysis တစ်ခုလုပ်ပါ။",

    takeaways: [
      "Strategy = Choice.",
      "အားလုံးကို မလုပ်နိုင်ပါ။ အရေးကြီးဆုံးကို ရွေးပါ။"
    ]
  },

  {
    id: 7,
    courseId: 2,
    category: "Strategy",
    title: "Market & Competitor Analysis",
    minutes: 25,
    icon: "🔎",
    overview:
      "Market ကိုနားမလည်ဘဲ sales strategy ချမှတ်ရင် execution မှားနိုင်ပါတယ်။",

    objectives: [
      "Competitor analysis ပြုလုပ်နိုင်ရန်",
      "Customer trend ရှာနိုင်ရန်",
      "Market opportunity ရှာနိုင်ရန်"
    ],

    sections: [
      {
        heading: "Competitor",
        body:
          "Competitor price, product, promotion, distribution, service နဲ့ sales force ကို စောင့်ကြည့်ပါ။"
      },
      {
        heading: "Customer",
        body:
          "Customer ဘာကြောင့်ဝယ်သလဲ၊ ဘာကြောင့် brand ပြောင်းသလဲဆိုတာ သိဖို့ customer feedback စုပါ။"
      },
      {
        heading: "Opportunity",
        body:
          "Underserved customer segments, new locations, new channels နဲ့ new products တွေကို ရှာပါ။"
      }
    ],

    example:
      "Competitor က price discount ပေးနေတယ်ဆိုရင် discount လိုက်ပေးတာတစ်ခုတည်း မဟုတ်ဘဲ service, availability, relationship နဲ့ product value ကို ပြန်သုံးသပ်ပါ။",

    managerApplication:
      "Field team ကနေ competitor intelligence ကို weekly collect လုပ်ပြီး management decision အတွက် အသုံးပြုပါ။",

    checklist: [
      "Price",
      "Product",
      "Promotion",
      "Distribution",
      "Customer",
      "Competitor"
    ],

    assignment:
      "Competitor 3 ခုကို Price/Product/Promotion/Distribution အလိုက် နှိုင်းယှဉ်ပါ။",

    takeaways: [
      "Market information က management decision အတွက် asset တစ်ခုပါ။"
    ]
  },

  {
    id: 8,
    courseId: 2,
    category: "Strategy",
    title: "Action Plan တည်ဆောက်ခြင်း",
    minutes: 25,
    icon: "🚀",
    overview:
      "Strategy ကို result ဖြစ်အောင် Action Plan လိုပါတယ်။",

    objectives: [
      "Action ကို measurable ဖြစ်အောင်ရေးနိုင်ရန်",
      "Owner နှင့် deadline သတ်မှတ်နိုင်ရန်",
      "Follow-up system တည်ဆောက်နိုင်ရန်"
    ],

    sections: [
      {
        heading: "SMART Action",
        body:
          "Action က Specific, Measurable, Achievable, Relevant, Time-bound ဖြစ်ရပါမယ်။"
      },
      {
        heading: "Owner",
        body:
          "Action တစ်ခုစီမှာ responsible person တစ်ယောက်ရှိရပါမယ်။"
      },
      {
        heading: "Follow-up",
        body:
          "Action plan ရေးထားရုံနဲ့ မပြီးပါ။ Weekly status review လုပ်ရပါမယ်။"
      }
    ],

    example:
      "New outlets 50 ခုတိုးမယ်ဆိုတာ action ဖြစ်နိုင်ပေမယ့် ဘယ် territory, ဘယ် salesman, ဘယ်နေ့အပြီးဆိုတာပါ ထည့်ရပါမယ်။",

    managerApplication:
      "Action plan ကို team dashboard မှာ ထည့်ပြီး weekly review ပြုလုပ်ပါ။",

    checklist: [
      "Action",
      "Owner",
      "KPI",
      "Deadline",
      "Status"
    ],

    assignment:
      "လက်ရှိ business problem တစ်ခုအတွက် 5-step action plan ရေးပါ။",

    takeaways: [
      "Good strategy without execution = no result."
    ]
  },

  {
    id: 9,
    courseId: 3,
    category: "People",
    title: "People Management",
    minutes: 30,
    icon: "👥",
    overview:
      "Team performance ကို မြှင့်တင်ဖို့ လူတစ်ယောက်ချင်းစီရဲ့ capability နဲ့ motivation ကို နားလည်ရပါမယ်။",

    objectives: [
      "Team capability ကို စစ်ဆေးနိုင်ရန်",
      "Delegation ပြုလုပ်နိုင်ရန်",
      "Accountability တည်ဆောက်နိုင်ရန်"
    ],

    sections: [
      {
        heading: "Right Person",
        body:
          "Role အလိုက် skill, experience, attitude နဲ့ performance ကို သုံးသပ်ပါ။"
      },
      {
        heading: "Delegation",
        body:
          "Manager ကိုယ်တိုင်အရာအားလုံးလုပ်တာထက် team member ကို ownership ပေးပြီး result ကို monitor လုပ်ပါ။"
      },
      {
        heading: "Accountability",
        body:
          "Expectation + Measurement + Review + Consequence ဆိုတဲ့ structure နဲ့ accountability တည်ဆောက်ပါ။"
      }
    ],

    example:
      "Senior salesperson တစ်ယောက်ကို territory planning တာဝန်ပေးပြီး weekly result ကို review လုပ်နိုင်ပါတယ်။",

    managerApplication:
      "Team member တစ်ယောက်ချင်းစီအတွက် development goal တစ်ခု သတ်မှတ်ပါ။",

    checklist: [
      "Role",
      "Skill",
      "Goal",
      "Ownership",
      "Review"
    ],

    assignment:
      "Team member 3 ယောက်အတွက် development plan ရေးပါ။",

    takeaways: [
      "Strong team = strong business execution."
    ]
  },

  {
    id: 10,
    courseId: 3,
    category: "People",
    title: "Motivation & Employee Engagement",
    minutes: 25,
    icon: "🔥",
    overview:
      "Motivation ဆိုတာ salary တစ်ခုတည်းနဲ့ မပြီးပါ။ Recognition, growth, ownership နဲ့ fairness လည်း အရေးကြီးပါတယ်။",

    objectives: [
      "Team motivation drivers သိရန်",
      "Recognition ပေးနိုင်ရန်",
      "Performance culture တည်ဆောက်ရန်"
    ],

    sections: [
      {
        heading: "Recognition",
        body:
          "Result ကောင်းတာကိုသာမက behavior ကောင်းတာကိုပါ အသိအမှတ်ပြုပါ။"
      },
      {
        heading: "Growth",
        body:
          "Training, coaching နဲ့ career development opportunity ပေးပါ။"
      },
      {
        heading: "Fairness",
        body:
          "Target, reward, workload နဲ့ performance evaluation တွေမှာ fairness ရှိရပါမယ်။"
      }
    ],

    example:
      "Salesman တစ်ယောက် target မပြည့်သေးပေမယ့် new customer acquisition အရမ်းကောင်းရင် အဲဒီ behavior ကို recognize လုပ်နိုင်ပါတယ်။",

    managerApplication:
      "Weekly team meeting မှာ Best Execution / Best Improvement ကို အသိအမှတ်ပြုပါ။",

    checklist: [
      "Recognition",
      "Growth",
      "Fairness",
      "Communication"
    ],

    assignment:
      "Team motivation အတွက် 30-day recognition plan တစ်ခုရေးပါ။",

    takeaways: [
      "People perform better when expectations and recognition are clear."
    ]
  },

  {
    id: 11,
    courseId: 3,
    category: "People",
    title: "Difficult Conversation & Conflict Management",
    minutes: 30,
    icon: "🤝",
    overview:
      "Manager တစ်ယောက်အနေနဲ့ difficult conversation ကို ရှောင်လို့မရပါ။ အရေးကြီးတာက professional ဖြစ်အောင် handle လုပ်နိုင်ဖို့ပါ။",

    objectives: [
      "Performance issue ဆွေးနွေးနိုင်ရန်",
      "Conflict ကို fact-based ဖြေရှင်းနိုင်ရန်",
      "Professional communication ပြုလုပ်နိုင်ရန်"
    ],

    sections: [
      {
        heading: "Fact First",
        body:
          "Emotion မစခင် data နဲ့ fact ကို အရင်တင်ပြပါ။"
      },
      {
        heading: "Listen",
        body:
          "Employee explanation ကို အရင်နားထောင်ပြီး root cause ကို ရှာပါ။"
      },
      {
        heading: "Agree Action",
        body:
          "နောက်ဆုံးမှာ clear action, deadline နဲ့ follow-up သတ်မှတ်ပါ။"
      }
    ],

    example:
      "Repeated late reporting ဖြစ်နေရင် 'မင်းအမြဲနောက်ကျတယ်' လို့မပြောဘဲ reporting deadline နဲ့ actual submission dates ကို ပြပါ။",

    managerApplication:
      "Issue ကို လူနဲ့မရောဘဲ behavior/result အဖြစ် ဆွေးနွေးပါ။",

    checklist: [
      "Fact",
      "Listen",
      "Root Cause",
      "Agreement",
      "Action",
      "Follow-up"
    ],

    assignment:
      "Performance issue တစ်ခုအတွက် conversation script တစ်ခုရေးပါ။",

    takeaways: [
      "Professional conflict management builds trust."
    ]
  },

  {
    id: 12,
    courseId: 4,
    category: "Finance",
    title: "Profit & Margin အခြေခံ",
    minutes: 30,
    icon: "💰",
    overview:
      "Sales များတာနဲ့ Profit များတယ်လို့ မဆိုနိုင်ပါ။ Manager တစ်ယောက်အနေနဲ့ revenue, cost, gross profit နဲ့ margin ကို နားလည်ရပါမယ်။",

    objectives: [
      "Gross Profit တွက်နိုင်ရန်",
      "Margin % တွက်နိုင်ရန်",
      "Discount ရဲ့ impact နားလည်ရန်"
    ],

    sections: [
      {
        heading: "Gross Profit",
        body:
          "Gross Profit = Sales Revenue - Cost of Goods Sold ဖြစ်ပါတယ်။"
      },
      {
        heading: "Margin",
        body:
          "Margin % = Gross Profit ÷ Sales Revenue × 100 ဖြစ်ပါတယ်။"
      },
      {
        heading: "Discount Impact",
        body:
          "Discount တိုးလာတာနဲ့ revenue ကိုသာမက gross margin ကိုပါ ထိခိုက်နိုင်ပါတယ်။"
      }
    ],

    example:
      "Selling Price 100,000 MMK၊ Cost 70,000 MMK ဆိုရင် Gross Profit = 30,000 MMK၊ Margin = 30% ဖြစ်ပါတယ်။",

    managerApplication:
      "Promotion မလုပ်ခင် sales uplift ဘယ်လောက်လိုမလဲ၊ margin impact ဘယ်လောက်ရှိမလဲ တွက်ပါ။",

    checklist: [
      "Revenue",
      "COGS",
      "Gross Profit",
      "Margin",
      "Discount"
    ],

    assignment:
      "Product 3 ခုရဲ့ selling price, cost, profit, margin ကို တွက်ပါ။",

    takeaways: [
      "Revenue is not the same as profit.",
      "Growth must be profitable."
    ]
  },

  {
    id: 13,
    courseId: 4,
    category: "Finance",
    title: "Break-even Analysis",
    minutes: 25,
    icon: "⚖️",
    overview:
      "Break-even point ဆိုတာ business က profit မရှိ၊ loss မရှိတဲ့ sales level ဖြစ်ပါတယ်။",

    objectives: [
      "Fixed Cost နှင့် Variable Cost ခွဲနိုင်ရန်",
      "Break-even sales တွက်နိုင်ရန်",
      "Business risk နားလည်ရန်"
    ],

    sections: [
      {
        heading: "Fixed Cost",
        body:
          "Rent, basic salary, office cost စတဲ့ sales volume ပြောင်းလဲမှုနဲ့ တိုက်ရိုက်မပြောင်းတဲ့ cost တွေကို fixed cost လို့ခေါ်ပါတယ်။"
      },
      {
        heading: "Variable Cost",
        body:
          "Sales volume တိုးလာတာနဲ့အမျှ တိုးလာတဲ့ product cost, commission စတဲ့ cost တွေ ဖြစ်ပါတယ်။"
      },
      {
        heading: "Break-even",
        body:
          "Break-even Sales = Fixed Cost ÷ Contribution Margin Ratio ဖြစ်ပါတယ်။"
      }
    ],

    example:
      "Fixed Cost 10 million၊ contribution margin ratio 25% ဆိုရင် break-even sales = 40 million MMK ဖြစ်ပါတယ်။",

    managerApplication:
      "New business/project မစခင် break-even point ကို တွက်ပြီး minimum sales requirement သတ်မှတ်ပါ။",

    checklist: [
      "Fixed Cost",
      "Variable Cost",
      "Contribution",
      "Break-even"
    ],

    assignment:
      "ကိုယ့် business အတွက် approximate break-even sales ကို တွက်ပါ။",

    takeaways: [
      "Know the minimum sales required to survive."
    ]
  },

  {
    id: 14,
    courseId: 4,
    category: "Finance",
    title: "Business Goal Setting",
    minutes: 25,
    icon: "🏆",
    overview:
      "Goal setting က business direction ကို ရှင်းလင်းစေပြီး team ကို တစ်ခုတည်းသော objective အပေါ် focus ဖြစ်စေပါတယ်။",

    objectives: [
      "SMART goal ရေးနိုင်ရန်",
      "Goal ကို KPI အဖြစ်ပြောင်းနိုင်ရန်",
      "Monthly/Weekly action သတ်မှတ်နိုင်ရန်"
    ],

    sections: [
      {
        heading: "SMART",
        body:
          "Specific, Measurable, Achievable, Relevant, Time-bound ဖြစ်ရပါမယ်။"
      },
      {
        heading: "Break Down",
        body:
          "Annual goal → Quarterly → Monthly → Weekly → Daily action အဖြစ် ခွဲပါ။"
      },
      {
        heading: "Review",
        body:
          "Goal တစ်ခုကို သတ်မှတ်ပြီး မပြန်ကြည့်ရင် အလုပ်မဖြစ်ပါ။ Weekly review ပြုလုပ်ပါ။"
      }
    ],

    example:
      "Annual sales 1.2 billion ဆိုရင် monthly average 100 million ဖြစ်ပါတယ်။ Monthly target ကို territory/team/customer အလိုက် ဆက်ခွဲပါ။",

    managerApplication:
      "Goal တစ်ခုစီအတွက် owner, KPI, deadline နဲ့ review frequency သတ်မှတ်ပါ။",

    checklist: [
      "Goal",
      "KPI",
      "Owner",
      "Deadline",
      "Review"
    ],

    assignment:
      "နောက် 90 ရက်အတွက် Business Goal 3 ခု သတ်မှတ်ပါ။",

    takeaways: [
      "A goal without a measurement is only a wish.",
      "Break big goals into small execution steps."
    ]
  }

];

/* =========================
   NAVIGATION
========================= */

function navigate(pageId) {
  const pages = document.querySelectorAll(".page");

  pages.forEach((page) => {
    page.classList.remove("active");
  });

  const target = $(pageId);

  if (target) {
    target.classList.add("active");
    currentPage = pageId;
  }

  document.querySelectorAll("[data-page]").forEach((item) => {
    item.classList.toggle(
      "active",
      item.getAttribute("data-page") === pageId
    );
  });

  updatePageTitle(pageId);
  closeSidebar();

  if (pageId === "dashboardPage") {
    renderDashboard();
  }

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

  if (pageId === "aiPage") {
    renderAIPage();
  }

  if (pageId === "toolsPage") {
    renderTools();
  }

  if (pageId === "settingsPage") {
    renderSettings();
  }
}

function updatePageTitle(pageId) {
  const titles = {
    dashboardPage: "Dashboard",
    coursesPage: "My Courses",
    lessonsPage: "Learning Center",
    progressPage: "My Progress",
    salesPage: "Sales Manager",
    calculatorPage: "Pricing Calculator",
    reportsPage: "Reports",
    aiPage: "AI Business Coach",
    toolsPage: "AI Tools",
    settingsPage: "Settings"
  };

  const title = titles[pageId] || "Aung Business Academy";

  const titleElement = $("pageTitle");

  if (titleElement) {
    titleElement.textContent = title;
  }
}

function goDashboard() {
  navigate("dashboardPage");
}

function openLessons() {
  navigate("lessonsPage");
}

function continueLearning() {
  const nextLesson = LESSONS.find(
    (lesson) => !completedLessons.includes(lesson.id)
  );

  if (nextLesson) {
    openLessonById(nextLesson.id);
  } else {
    showToast("🎉 သင်ခန်းစာအားလုံး ပြီးပါပြီ!");
  }
}

/* =========================
   DASHBOARD
========================= */

function renderDashboard() {
  updateDashboardStats();

  const courseProgressElement = $("courseProgress");

  if (courseProgressElement) {
    const course = COURSES[0];
    const progress = getCourseProgress(course);

    courseProgressElement.style.width = progress + "%";
  }
}

function updateDashboardStats() {
  const completed = completedLessons.length;
  const progress = Math.round(
    (completed / LESSONS.length) * 100
  );

  const courseCount = $("courseCount");
  const lessonCount = $("lessonCount");
  const completedCount = $("completedCount");
  const progressPercent = $("progressPercent");

  if (courseCount) courseCount.textContent = COURSES.length;
  if (lessonCount) lessonCount.textContent = LESSONS.length;
  if (completedCount) completedCount.textContent = completed;
  if (progressPercent) progressPercent.textContent = progress + "%";

  const progressBar = $("overallProgress");

  if (progressBar) {
    progressBar.style.width = progress + "%";
  }
}

/* =========================
   COURSES
========================= */

function getCourseProgress(course) {
  if (!course.lessons.length) return 0;

  const completed = course.lessons.filter((id) =>
    completedLessons.includes(id)
  ).length;

  return Math.round(
    (completed / course.lessons.length) * 100
  );
}

function renderCourses() {
  const container =
    $("coursesContainer") ||
    $("courseGrid") ||
    document.querySelector("#coursesPage .content");

  if (!container) return;

  const cards = COURSES.map((course) => {
    const progress = getCourseProgress(course);

    return `
      <div class="course-card">
        <div class="course-icon">${course.icon}</div>
        <div class="course-content">
          <span class="badge">${escapeHTML(course.category)}</span>
          <h3>${escapeHTML(course.title)}</h3>
          <p>${escapeHTML(course.description)}</p>

          <div class="progress-row">
            <span>${progress}% Complete</span>
            <span>${course.lessons.length} Lessons</span>
          </div>

          <div class="progress-track">
            <div class="progress-fill" style="width:${progress}%"></div>
          </div>

          <button class="primary-btn" onclick="openCourse(${course.id})">
            ${progress > 0 ? "Continue Course" : "Start Course"}
          </button>
        </div>
      </div>
    `;
  }).join("");

  if (container.id === "coursesContainer" || container.id === "courseGrid") {
    container.innerHTML = cards;
  } else {
    const grid = container.querySelector(".course-grid");

    if (grid) {
      grid.innerHTML = cards;
    }
  }
}

function openCourse(courseId) {
  const course = COURSES.find((item) => item.id === courseId);

  if (!course) return;

  navigate("lessonsPage");

  setTimeout(() => {
    const select = $("lessonCategory");

    if (select) {
      select.value = course.category;
    }

    renderLessons();
  }, 50);
}

/* =========================
   LESSON CENTER
========================= */

function renderLessons() {
  const container =
    $("lessonsContainer") ||
    $("lessonGrid") ||
    document.querySelector("#lessonsPage .lesson-grid");

  if (!container) return;

  const categoryElement = $("lessonCategory");
  const searchElement = $("lessonSearch");

  const category =
    categoryElement && categoryElement.value
      ? categoryElement.value
      : "All";

  const search =
    searchElement && searchElement.value
      ? searchElement.value.toLowerCase()
      : "";

  let filtered = LESSONS.filter((lesson) => {
    const categoryMatch =
      category === "All" || lesson.category === category;

    const searchMatch =
      !search ||
      lesson.title.toLowerCase().includes(search) ||
      lesson.overview.toLowerCase().includes(search);

    return categoryMatch && searchMatch;
  });

  const html = filtered.map((lesson) => {
    const completed = completedLessons.includes(lesson.id);

    return `
      <div class="lesson-card ${completed ? "completed" : ""}">
        <div class="lesson-card-top">
          <div class="lesson-icon">${lesson.icon}</div>

          ${
            completed
              ? `<span class="completed-badge">✓ Completed</span>`
              : `<span class="lesson-time">⏱ ${lesson.minutes} min</span>`
          }
        </div>

        <span class="badge">${escapeHTML(lesson.category)}</span>

        <h3>${escapeHTML(lesson.title)}</h3>

        <p>${escapeHTML(lesson.overview)}</p>

        <div class="lesson-card-footer">
          <span>${lesson.sections.length} Topics</span>

          <button
            class="secondary-btn"
            onclick="openLessonById(${lesson.id})"
          >
            ${completed ? "Review Lesson" : "Start Lesson"}
          </button>
        </div>
      </div>
    `;
  }).join("");

  if (container.id === "lessonsContainer" || container.id === "lessonGrid") {
    container.innerHTML =
      html ||
      `<div class="empty-state">
        <h3>သင်ခန်းစာမတွေ့ပါ</h3>
        <p>Search သို့မဟုတ် category ကို ပြန်စစ်ပါ။</p>
      </div>`;
  }
}

function openLessonById(id) {
  const index = LESSONS.findIndex(
    (lesson) => lesson.id === Number(id)
  );

  if (index === -1) return;

  currentLessonIndex = index;
  openLesson(LESSONS[index]);
}

function openLesson(lesson) {
  if (!lesson) return;

  const completed = completedLessons.includes(lesson.id);

  const sections = lesson.sections.map((section) => `
    <section class="lesson-detail-section">
      <h3>${escapeHTML(section.heading)}</h3>
      <p>${escapeHTML(section.body)}</p>
    </section>
  `).join("");

  const objectives = lesson.objectives.map((item) =>
    `<li>✓ ${escapeHTML(item)}</li>`
  ).join("");

  const checklist = lesson.checklist.map((item) =>
    `<li>☐ ${escapeHTML(item)}</li>`
  ).join("");

  const takeaways = lesson.takeaways.map((item) =>
    `<li>• ${escapeHTML(item)}</li>`
  ).join("");

  const html = `
    <div class="lesson-detail">

      <div class="lesson-detail-header">
        <div class="lesson-big-icon">${lesson.icon}</div>

        <div>
          <span class="badge">${escapeHTML(lesson.category)}</span>

          <h2>${escapeHTML(lesson.title)}</h2>

          <div class="lesson-meta">
            ⏱ ${lesson.minutes} minutes
            &nbsp; • &nbsp;
            ${lesson.sections.length} topics
          </div>
        </div>
      </div>

      <div class="lesson-callout">
        <strong>သင်ခန်းစာအနှစ်ချုပ်</strong>
        <p>${escapeHTML(lesson.overview)}</p>
      </div>

      <div class="lesson-detail-section">
        <h3>🎯 ဒီသင်ခန်းစာပြီးရင် ဘာလုပ်နိုင်မလဲ?</h3>
        <ul class="lesson-list">
          ${objectives}
        </ul>
      </div>

      ${sections}

      <div class="lesson-example">
        <h3>💡 လက်တွေ့ဥပမာ</h3>
        <p>${escapeHTML(lesson.example)}</p>
      </div>

      <div class="lesson-manager-box">
        <h3>👔 Sales Manager အနေနဲ့ ဘယ်လိုအသုံးချမလဲ?</h3>
        <p>${escapeHTML(lesson.managerApplication)}</p>
      </div>

      <div class="lesson-detail-section">
        <h3>✅ Manager Checklist</h3>
        <ul class="lesson-list">
          ${checklist}
        </ul>
      </div>

      <div class="lesson-assignment">
        <h3>📝 လက်တွေ့ Assignment</h3>
        <p>${escapeHTML(lesson.assignment)}</p>
      </div>

      <div class="lesson-detail-section">
        <h3>⭐ Key Takeaways</h3>
        <ul class="lesson-list">
          ${takeaways}
        </ul>
      </div>

      <div class="lesson-navigation">

        <button
          class="secondary-btn"
          onclick="previousLesson()"
          ${currentLessonIndex === 0 ? "disabled" : ""}
        >
          ← Previous
        </button>

        <button
          class="primary-btn"
          onclick="completeLesson(${lesson.id})"
        >
          ${completed ? "✓ Completed" : "✓ Mark as Complete"}
        </button>

        <button
          class="secondary-btn"
          onclick="nextLesson()"
          ${currentLessonIndex === LESSONS.length - 1 ? "disabled" : ""}
        >
          Next →
        </button>

      </div>

    </div>
  `;

  openModal(html, "lesson-modal");
}

function previousLesson() {
  if (currentLessonIndex <= 0) return;

  currentLessonIndex--;
  openLesson(LESSONS[currentLessonIndex]);
}

function nextLesson() {
  if (currentLessonIndex >= LESSONS.length - 1) return;

  currentLessonIndex++;
  openLesson(LESSONS[currentLessonIndex]);
}

function completeLesson(id) {
  id = Number(id);

  if (!completedLessons.includes(id)) {
    completedLessons.push(id);

    localStorage.setItem(
      STORAGE.lessons,
      JSON.stringify(completedLessons)
    );

    showToast("🎉 သင်ခန်းစာပြီးမြောက်ပါပြီ!");
  }

  updateDashboardStats();
  renderLessons();
  closeModal();
}

/* =========================
   PROGRESS
========================= */

function renderProgress() {
  const container =
    $("progressContainer") ||
    $("progressContent") ||
    document.querySelector("#progressPage .content");

  if (!container) return;

  const percentage = Math.round(
    (completedLessons.length / LESSONS.length) * 100
  );

  const courseRows = COURSES.map((course) => {
    const progress = getCourseProgress(course);

    return `
      <div class="progress-course-row">
        <div class="progress-course-title">
          <strong>${course.icon} ${escapeHTML(course.title)}</strong>
          <span>${progress}%</span>
        </div>

        <div class="progress-track">
          <div class="progress-fill" style="width:${progress}%"></div>
        </div>
      </div>
    `;
  }).join("");

  const html = `
    <div class="progress-overview">
      <div class="progress-big-number">${percentage}%</div>
      <h3>Overall Learning Progress</h3>
      <p>${completedLessons.length} / ${LESSONS.length} lessons completed</p>

      <div class="progress-track large">
        <div class="progress-fill" style="width:${percentage}%"></div>
      </div>
    </div>

    <div class="progress-course-list">
      ${courseRows}
    </div>
  `;

  if (
    container.id === "progressContainer" ||
    container.id === "progressContent"
  ) {
    container.innerHTML = html;
  }
}

/* =========================
   SALES MANAGER DATA
========================= */

function getSalesData() {
  const defaultData = {
    target: 30000000,
    actual: 22500000,
    workingDays: 26,
    daysPassed: 20
  };

  try {
    return {
      ...defaultData,
      ...(JSON.parse(localStorage.getItem(STORAGE.sales)) || {})
    };
  } catch {
    return defaultData;
  }
}

function saveSalesData(data) {
  localStorage.setItem(
    STORAGE.sales,
    JSON.stringify(data)
  );
}

function getTeamData() {
  try {
    return JSON.parse(
      localStorage.getItem(STORAGE.team)
    ) || [
      {
        id: 1,
        name: "Sales Executive A",
        target: 10000000,
        actual: 8500000
      },
      {
        id: 2,
        name: "Sales Executive B",
        target: 10000000,
        actual: 7200000
      },
      {
        id: 3,
        name: "Sales Executive C",
        target: 10000000,
        actual: 6800000
      }
    ];
  } catch {
    return [];
  }
}

function saveTeamData(team) {
  localStorage.setItem(
    STORAGE.team,
    JSON.stringify(team)
  );
}

/* =========================
   SALES MANAGER
========================= */

function renderSales() {
  const container =
    $("salesManagerContent") ||
    $("salesContent") ||
    document.querySelector("#salesPage .content");

  if (!container) return;

  const data = getSalesData();

  const target = Number(data.target) || 0;
  const actual = Number(data.actual) || 0;
  const workingDays = Number(data.workingDays) || 1;

  const achievement =
    target > 0
      ? (actual / target) * 100
      : 0;

  const gap = target - actual;

  const dailyTarget =
    target / workingDays;

  const html = `
    <div class="sales-manager">

      <div class="section-heading">
        <div>
          <span class="eyebrow">PROFESSIONAL MODULE</span>
          <h2>Sales Manager Dashboard</h2>
          <p>Target ကို Numbers → People → Execution အဖြစ် စီမံပါ။</p>
        </div>
      </div>

      <div class="kpi-grid">

        <div class="kpi-card">
          <span>Monthly Target</span>
          <strong>${formatMoney(target)}</strong>
          <small>Current Target</small>
        </div>

        <div class="kpi-card">
          <span>Actual Sales</span>
          <strong>${formatMoney(actual)}</strong>
          <small>Current Achievement</small>
        </div>

        <div class="kpi-card">
          <span>Achievement</span>
          <strong>${achievement.toFixed(1)}%</strong>
          <small>Actual ÷ Target</small>
        </div>

        <div class="kpi-card">
          <span>Gap</span>
          <strong>${formatMoney(Math.max(gap, 0))}</strong>
          <small>${gap > 0 ? "Remaining" : "Target Achieved"}</small>
        </div>

        <div class="kpi-card">
          <span>Daily Target</span>
          <strong>${formatMoney(dailyTarget)}</strong>
          <small>${workingDays} working days</small>
        </div>

      </div>

      <div class="sales-panel">

        <div class="panel-header">
          <div>
            <h3>📈 KPI Input</h3>
            <p>Monthly performance ကို update လုပ်ပါ။</p>
          </div>
        </div>

        <div class="sales-form">

          <label>
            Monthly Target
            <input
              id="salesTargetInput"
              type="number"
              value="${target}"
            />
          </label>

          <label>
            Actual Sales
            <input
              id="salesActualInput"
              type="number"
              value="${actual}"
            />
          </label>

          <label>
            Working Days
            <input
              id="salesWorkingDaysInput"
              type="number"
              value="${workingDays}"
            />
          </label>

          <button
            class="primary-btn"
            onclick="saveSalesKPI()"
          >
            Save KPI
          </button>

        </div>

        <div class="sales-progress">
          <div class="progress-row">
            <strong>Achievement Progress</strong>
            <span>${achievement.toFixed(1)}%</span>
          </div>

          <div class="progress-track large">
            <div
              class="progress-fill"
              style="width:${Math.min(achievement, 100)}%"
            ></div>
          </div>
        </div>

      </div>

      <div class="sales-panel">

        <div class="panel-header">
          <div>
            <h3>👥 Team Performance</h3>
            <p>Team member တစ်ယောက်ချင်းစီကို track လုပ်ပါ။</p>
          </div>

          <button
            class="secondary-btn"
            onclick="addTeamMember()"
          >
            + Add Team Member
          </button>
        </div>

        ${renderTeamTable()}

      </div>

      <div class="sales-panel">

        <div class="panel-header">
          <div>
            <h3>🚀 Action Plan</h3>
            <p>Gap ကို result ဖြစ်အောင် action အဖြစ်ပြောင်းပါ။</p>
          </div>

          <button
            class="secondary-btn"
            onclick="addActionPlan()"
          >
            + Add Action
          </button>
        </div>

        ${renderActionPlans()}

      </div>

      <div class="sales-panel">

        <div class="panel-header">
          <div>
            <h3>⚡ Sales Manager Framework</h3>
          </div>
        </div>

        <div class="framework-grid">

          <div>
            <strong>1. PEOPLE</strong>
            <p>Team capability, coaching, motivation, accountability</p>
          </div>

          <div>
            <strong>2. NUMBERS</strong>
            <p>Target, actual, achievement, gap, KPI</p>
          </div>

          <div>
            <strong>3. EXECUTION</strong>
            <p>Customer, route, coverage, orders, follow-up</p>
          </div>

        </div>

      </div>

    </div>
  `;

  if (
    container.id === "salesManagerContent" ||
    container.id === "salesContent"
  ) {
    container.innerHTML = html;
  }
}

function saveSalesKPI() {
  const target =
    Number($("salesTargetInput")?.value) || 0;

  const actual =
    Number($("salesActualInput")?.value) || 0;

  const workingDays =
    Number($("salesWorkingDaysInput")?.value) || 1;

  saveSalesData({
    target,
    actual,
    workingDays,
    daysPassed: getSalesData().daysPassed
  });

  renderSales();

  showToast("✓ Sales KPI updated");
}

function renderTeamTable() {
  const team = getTeamData();

  if (!team.length) {
    return `
      <div class="empty-state">
        <p>Team member မရှိသေးပါ။</p>
      </div>
    `;
  }

  return `
    <div class="table-wrapper">

      <table class="data-table">

        <thead>
          <tr>
            <th>Team Member</th>
            <th>Target</th>
            <th>Actual</th>
            <th>Achievement</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          ${team.map((member) => {

            const achievement =
              member.target > 0
                ? (member.actual / member.target) * 100
                : 0;

            return `
              <tr>

                <td>${escapeHTML(member.name)}</td>

                <td>${formatMoney(member.target)}</td>

                <td>${formatMoney(member.actual)}</td>

                <td>
                  <strong>${achievement.toFixed(1)}%</strong>
                </td>

                <td>
                  <button
                    class="icon-btn"
                    onclick="removeTeamMember(${member.id})"
                  >
                    🗑
                  </button>
                </td>

              </tr>
            `;
          }).join("")}

        </tbody>

      </table>

    </div>
  `;
}

function addTeamMember() {
  const name = prompt("Team member name:");

  if (!name) return;

  const target =
    Number(prompt("Monthly Target (MMK):")) || 0;

  const actual =
    Number(prompt("Actual Sales (MMK):")) || 0;

  const team = getTeamData();

  team.push({
    id: Date.now(),
    name,
    target,
    actual
  });

  saveTeamData(team);
  renderSales();

  showToast("✓ Team member added");
}

function removeTeamMember(id) {
  const team = getTeamData().filter(
    (member) => member.id !== id
  );

  saveTeamData(team);
  renderSales();

  showToast("Team member removed");
}

/* =========================
   ACTION PLANS
========================= */

function getActionPlans() {
  try {
    return JSON.parse(
      localStorage.getItem(STORAGE.actionPlans)
    ) || [
      {
        id: 1,
        title: "Top 20 customers visit",
        owner: "Sales Team",
        deadline: "This Week",
        done: false
      },
      {
        id: 2,
        title: "Low-performing territory root cause analysis",
        owner: "Sales Manager",
        deadline: "Friday",
        done: false
      }
    ];
  } catch {
    return [];
  }
}

function saveActionPlans(plans) {
  localStorage.setItem(
    STORAGE.actionPlans,
    JSON.stringify(plans)
  );
}

function renderActionPlans() {
  const plans = getActionPlans();

  if (!plans.length) {
    return `
      <div class="empty-state">
        <p>Action Plan မရှိသေးပါ။</p>
      </div>
    `;
  }

  return `
    <div class="action-list">

      ${plans.map((plan) => `
        <div class="action-item ${plan.done ? "done" : ""}">

          <button
            class="check-btn"
            onclick="toggleActionPlan(${plan.id})"
          >
            ${plan.done ? "✓" : "○"}
          </button>

          <div class="action-content">
            <strong>${escapeHTML(plan.title)}</strong>

            <span>
              Owner: ${escapeHTML(plan.owner)}
              &nbsp; • &nbsp;
              ${escapeHTML(plan.deadline)}
            </span>
          </div>

          <button
            class="icon-btn"
            onclick="deleteActionPlan(${plan.id})"
          >
            🗑
          </button>

        </div>
      `).join("")}

    </div>
  `;
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

  const plans = getActionPlans();

  plans.push({
    id: Date.now(),
    title,
    owner,
    deadline,
    done: false
  });

  saveActionPlans(plans);
  renderSales();

  showToast("✓ Action plan added");
}

function toggleActionPlan(id) {
  const plans = getActionPlans();

  const plan = plans.find(
    (item) => item.id === id
  );

  if (plan) {
    plan.done = !plan.done;
  }

  saveActionPlans(plans);
  renderSales();
}

function deleteActionPlan(id) {
  const plans = getActionPlans().filter(
    (item) => item.id !== id
  );

  saveActionPlans(plans);
  renderSales();
}

/* =========================
   CALCULATORS
========================= */

function openProfitCalculator() {
  openModal(`
    <div class="calculator-modal">
      <h2>💰 Profit Calculator</h2>

      <label>Sales Revenue</label>
      <input id="profitSales" type="number" placeholder="10000000">

      <label>Cost</label>
      <input id="profitCost" type="number" placeholder="7000000">

      <button class="primary-btn" onclick="calculateProfitTool()">
        Calculate
      </button>

      <div id="profitResult"></div>
    </div>
  `);
}

function calculateProfitTool() {
  const sales =
    Number($("profitSales")?.value) || 0;

  const cost =
    Number($("profitCost")?.value) || 0;

  const profit = sales - cost;

  const margin =
    sales > 0
      ? (profit / sales) * 100
      : 0;

  $("profitResult").innerHTML = `
    <div class="calculator-result">
      <strong>Gross Profit: ${formatMoney(profit)}</strong>
      <span>Margin: ${margin.toFixed(2)}%</span>
    </div>
  `;
}

function openPricingCalculator() {
  openModal(`
    <div class="calculator-modal">
      <h2>🏷️ Pricing Calculator</h2>

      <label>Cost</label>
      <input id="priceCost" type="number">

      <label>Desired Margin %</label>
      <input id="priceMargin" type="number" value="30">

      <button class="primary-btn" onclick="calculatePricingTool()">
        Calculate
      </button>

      <div id="priceResult"></div>
    </div>
  `);
}

function calculatePricingTool() {
  const cost =
    Number($("priceCost")?.value) || 0;

  const margin =
    Number($("priceMargin")?.value) || 0;

  if (margin >= 100) {
    $("priceResult").innerHTML =
      `<p class="danger-text">Margin must be below 100%.</p>`;
    return;
  }

  const price =
    cost / (1 - margin / 100);

  $("priceResult").innerHTML = `
    <div class="calculator-result">
      <strong>Recommended Price: ${formatMoney(price)}</strong>
    </div>
  `;
}

function openBreakEvenCalculator() {
  openModal(`
    <div class="calculator-modal">
      <h2>⚖️ Break-even Calculator</h2>

      <label>Fixed Cost</label>
      <input id="beFixed" type="number">

      <label>Contribution Margin %</label>
      <input id="beMargin" type="number" value="25">

      <button class="primary-btn" onclick="calculateBreakEven()">
        Calculate
      </button>

      <div id="beResult"></div>
    </div>
  `);
}

function calculateBreakEven() {
  const fixed =
    Number($("beFixed")?.value) || 0;

  const margin =
    Number($("beMargin")?.value) || 0;

  if (margin <= 0) {
    $("beResult").innerHTML =
      `<p class="danger-text">Margin must be greater than 0.</p>`;
    return;
  }

  const breakEven =
    fixed / (margin / 100);

  $("beResult").innerHTML = `
    <div class="calculator-result">
      <strong>Break-even Sales: ${formatMoney(breakEven)}</strong>
    </div>
  `;
}

function openSalesTargetCalculator() {
  openModal(`
    <div class="calculator-modal">
      <h2>🎯 Sales Target Calculator</h2>

      <label>Monthly Target</label>
      <input id="stTarget" type="number">

      <label>Working Days</label>
      <input id="stDays" type="number" value="26">

      <button class="primary-btn" onclick="calculateSalesTarget()">
        Calculate
      </button>

      <div id="stResult"></div>
    </div>
  `);
}

function calculateSalesTarget() {
  const target =
    Number($("stTarget")?.value) || 0;

  const days =
    Number($("stDays")?.value) || 1;

  const daily = target / days;

  $("stResult").innerHTML = `
    <div class="calculator-result">
      <strong>Daily Target: ${formatMoney(daily)}</strong>
      <span>Working Days: ${days}</span>
    </div>
  `;
}

/* =========================
   REPORTS
========================= */

function renderReports() {
  const container =
    $("reportsContent") ||
    document.querySelector("#reportsPage .content");

  if (!container) return;

  const sales = getSalesData();

  const achievement =
    sales.target > 0
      ? (sales.actual / sales.target) * 100
      : 0;

  container.innerHTML = `
    <div class="reports-grid">

      <div class="report-card">
        <span>Sales Target</span>
        <strong>${formatMoney(sales.target)}</strong>
      </div>

      <div class="report-card">
        <span>Actual Sales</span>
        <strong>${formatMoney(sales.actual)}</strong>
      </div>

      <div class="report-card">
        <span>Achievement</span>
        <strong>${achievement.toFixed(1)}%</strong>
      </div>

      <div class="report-card">
        <span>Gap</span>
        <strong>${formatMoney(
          Math.max(sales.target - sales.actual, 0)
        )}</strong>
      </div>

    </div>

    <div class="sales-panel">
      <h3>Management Report</h3>
      <p>
        Sales Manager အနေနဲ့ report ကို
        Result → Gap → Reason → Action
        အဖြစ်ဖတ်ပါ။
      </p>
    </div>
  `;
}

/* =========================
   AI BUSINESS COACH
========================= */

function renderAIPage() {
  const chat =
    $("aiChatMessages") ||
    $("chatMessages");

  if (!chat) return;

  if (!chat.dataset.initialized) {
    chat.innerHTML = `
      <div class="ai-message assistant">
        <div class="ai-avatar">🤖</div>

        <div class="ai-bubble">
          <strong>Aung Business Coach</strong>

          <p>
            မင်္ဂလာပါ။ Business, Sales Management,
            Team Management, KPI, Strategy, Finance
            နဲ့ Career/Interview ဆိုင်ရာ မေးခွန်းတွေကို
            detail နဲ့ ဖြေပေးနိုင်ပါတယ်။
          </p>

          <p>
            ဥပမာ —
            <br>• Target မပြည့်ရင် ဘာလုပ်မလဲ?
            <br>• Team performance ဘယ်လိုတိုးမလဲ?
            <br>• Distributor sales ကျရင်?
            <br>• Margin ဘယ်လိုတွက်မလဲ?
            <br>• Sales Manager interview ဘယ်လိုဖြေမလဲ?
          </p>
        </div>
      </div>
    `;

    chat.dataset.initialized = "true";
  }
}

function sendAIMessage() {
  const input =
    $("aiInput") ||
    $("chatInput") ||
    $("aiMessageInput");

  if (!input) return;

  const message = input.value.trim();

  if (!message) return;

  const chat =
    $("aiChatMessages") ||
    $("chatMessages");

  if (!chat) return;

  chat.insertAdjacentHTML(
    "beforeend",
    `
      <div class="ai-message user">
        <div class="ai-bubble">
          ${escapeHTML(message)}
        </div>
      </div>
    `
  );

  input.value = "";

  const response = getAIResponse(message);

  setTimeout(() => {
    chat.insertAdjacentHTML(
      "beforeend",
      `
        <div class="ai-message assistant">
          <div class="ai-avatar">🤖</div>

          <div class="ai-bubble">
            ${response}
          </div>
        </div>
      `
    );

    chat.scrollTop = chat.scrollHeight;
  }, 300);
}

function getAIResponse(question) {
  const q = question.toLowerCase();

  if (
    q.includes("target") &&
    (
      q.includes("မပြည့်") ||
      q.includes("မရ") ||
      q.includes("မီ")
    )
  ) {
    return `
      <strong>🎯 Target မပြည့်ရင် ဒီ Framework နဲ့ ဖြေရှင်းပါ</strong>

      <h4>1. Result ကို အရင်သတ်မှတ်ပါ</h4>
      <p>
        Target, Actual, Achievement %, Gap ကို အရင်တွက်ပါ။
        ဥပမာ Target 30M၊ Actual 22M ဆိုရင် Gap 8M ဖြစ်ပါတယ်။
      </p>

      <h4>2. Root Cause ကို ခွဲပါ</h4>
      <ul>
        <li>People — Sales team productivity ကျနေလား?</li>
        <li>Customer — Key customer order ကျနေလား?</li>
        <li>Product — SKU availability မရှိဘူးလား?</li>
        <li>Distribution — Coverage ကျနေလား?</li>
        <li>Competition — Competitor activity တက်လာလား?</li>
      </ul>

      <h4>3. Action Plan</h4>
      <ol>
        <li>Top customers ကို prioritize လုပ်ပါ။</li>
        <li>Low-performing territory ကို field visit လုပ်ပါ။</li>
        <li>Stock-out issue ရှိရင် distributor နဲ့ ဖြေရှင်းပါ။</li>
        <li>Sales team တစ်ယောက်ချင်းစီကို coaching လုပ်ပါ။</li>
        <li>Daily target နဲ့ follow-up ပြန်လုပ်ပါ။</li>
      </ol>

      <h4>4. KPI</h4>
      <p>
        Daily Sales, Productive Calls, New Customers,
        Order Conversion, Active Outlets နဲ့ Collection ကို
        track လုပ်ပါ။
      </p>

      <h4>👔 Sales Manager Rule</h4>
      <p>
        <strong>Don't only ask "Why are sales down?"</strong>
        <br>
        Instead ask:
        <strong>"Where is the gap, why is it happening,
        what action will close the gap, who owns it,
        and when will it be completed?"</strong>
      </p>
    `;
  }

  if (
    q.includes("team") &&
    (
      q.includes("performance") ||
      q.includes("တိုး") ||
      q.includes("ကောင်း")
    )
  ) {
    return `
      <strong>👥 Team Performance တိုးတက်အောင်လုပ်နည်း</strong>

      <h4>1. Clear Expectations</h4>
      <p>
        Team member တစ်ယောက်ချင်းစီအတွက် Target,
        KPI, Territory နဲ့ expected activity ကို ရှင်းပါ။
      </p>

      <h4>2. Measure</h4>
      <p>
        Result KPI နဲ့ Activity KPI နှစ်မျိုးလုံးသုံးပါ။
      </p>

      <ul>
        <li>Sales Achievement</li>
        <li>Customer Visits</li>
        <li>Productive Calls</li>
        <li>New Outlets</li>
        <li>Order Conversion</li>
        <li>Collection</li>
      </ul>

      <h4>3. Coach</h4>
      <p>
        Poor performance ဖြစ်တဲ့သူကို အပြစ်တင်မယ့်အစား
        root cause ရှာပြီး coaching လုပ်ပါ။
      </p>

      <h4>4. Accountability</h4>
      <p>
        Action တစ်ခုစီအတွက် Owner + Deadline + KPI
        သတ်မှတ်ပါ။
      </p>

      <h4>5. Review</h4>
      <p>
        Weekly review ပြုလုပ်ပြီး မပြီးသေးတဲ့ action ကို
        follow-up ပြန်လုပ်ပါ။
      </p>

      <strong>Manager Formula:</strong>
      <p>
        People + Clear Target + Coaching + Accountability
        + Follow-up = Better Performance
      </p>
    `;
  }

  if (
    q.includes("distributor") ||
    q.includes("ဖြန့်ချိ") ||
    q.includes("stock")
  ) {
    return `
      <strong>🚚 Distributor Sales ကျရင် စစ်ရမယ့်အချက်များ</strong>

      <h4>1. Sales</h4>
      <p>
        Current sales ကို previous month,
        target နဲ့ same period last year နဲ့ နှိုင်းယှဉ်ပါ။
      </p>

      <h4>2. Stock</h4>
      <p>
        Fast-moving SKU တွေ stock-out ဖြစ်နေလား၊
        slow-moving stock များနေလား စစ်ပါ။
      </p>

      <h4>3. Manpower</h4>
      <p>
        Salesman headcount, attendance,
        route coverage နဲ့ productivity ကို စစ်ပါ။
      </p>

      <h4>4. Coverage</h4>
      <p>
        Active outlets လျော့သွားလား၊
        new outlets မတိုးတော့ဘူးလား စစ်ပါ။
      </p>

      <h4>5. Collection / Credit</h4>
      <p>
        Outstanding AR ကြောင့် order ပိတ်နေလား
        စစ်ပါ။
      </p>

      <h4>6. Competitor</h4>
      <p>
        Competitor price, promotion,
        visibility နဲ့ availability ကို စစ်ပါ။
      </p>

      <strong>Action:</strong>
      <p>
        Root cause တစ်ခုချင်းစီအတွက်
        Owner + Deadline + KPI သတ်မှတ်ပြီး
        weekly distributor review ပြုလုပ်ပါ။
      </p>
    `;
  }

  if (
    q.includes("margin") ||
    q.includes("အမြတ်")
  ) {
    return `
      <strong>💰 Margin ကို Detail နဲ့ နားလည်မယ်</strong>

      <h4>Formula</h4>

      <p>
        Gross Profit = Sales Revenue - Cost
      </p>

      <p>
        Margin % =
        Gross Profit ÷ Sales Revenue × 100
      </p>

      <h4>Example</h4>

      <p>
        Selling Price = 100,000 MMK
        <br>
        Cost = 70,000 MMK
        <br>
        Gross Profit = 30,000 MMK
        <br>
        Margin = 30%
      </p>

      <h4>Manager အတွက် အရေးကြီးတာ</h4>

      <p>
        Sales volume တက်ပေမယ့် discount အများကြီးပေးထားရင်
        revenue တက်ပြီး profit ကျနိုင်ပါတယ်။
      </p>

      <p>
        Promotion မလုပ်ခင် volume uplift,
        discount impact နဲ့ margin impact ကို
        အရင်တွက်ပါ။
      </p>
    `;
  }

  if (
    q.includes("interview") ||
    q.includes("အင်တာဗျုး")
  ) {
    return `
      <strong>🎤 Sales Manager Interview Preparation</strong>

      <h4>Answer Structure</h4>

      <ol>
        <li>Situation</li>
        <li>Challenge</li>
        <li>Action</li>
        <li>Result</li>
        <li>Learning</li>
      </ol>

      <h4>Example: Target Achievement</h4>

      <p>
        "My biggest strength is my ability to convert
        sales targets into practical field execution.
        I focus on three things: people, numbers and execution."
      </p>

      <p>
        ပြီးရင် ကိုယ့်အတွေ့အကြုံက real example တစ်ခုထည့်ပါ။
        ဥပမာ target gap ရှိတဲ့ territory ကို
        analysis → coaching → customer plan →
        field execution → result ဆိုတဲ့ sequence နဲ့ ပြောပါ။
      </p>

      <h4>Leadership Question</h4>

      <p>
        Coaching and empowerment ဆိုတဲ့ leadership style ကို
        ရှင်းပြနိုင်ပါတယ်။ Clear expectations ပေးပြီး
        team ကို ownership ပေးကာ regular performance review
        လုပ်တယ်လို့ ဖြေပါ။
      </p>
    `;
  }

  if (
    q.includes("strategy") ||
    q.includes("မဟာဗျူဟာ")
  ) {
    return `
      <strong>♟️ Business Strategy ကို ဒီလိုစဉ်းစားပါ</strong>

      <h4>1. Where are we?</h4>
      <p>Current sales, market, customer, competitor position ကို သိပါ။</p>

      <h4>2. Where do we want to go?</h4>
      <p>Clear measurable goal သတ်မှတ်ပါ။</p>

      <h4>3. What is the gap?</h4>
      <p>Current result နဲ့ desired result ကြားက gap ကို တွက်ပါ။</p>

      <h4>4. How will we win?</h4>
      <p>
        Product, Price, Distribution, People,
        Customer experience နဲ့ Execution ကို အသုံးချပါ။
      </p>

      <h4>5. How do we measure?</h4>
      <p>
        KPI + weekly review + action tracker သုံးပါ။
      </p>
    `;
  }

  return `
    <strong>🤖 Aung Business Coach – Detailed Answer Framework</strong>

    <p>
      သင့်မေးခွန်းကို business problem တစ်ခုအဖြစ်
      အောက်ပါ framework နဲ့ စဉ်းစားနိုင်ပါတယ်။
    </p>

    <h4>1. Define the Problem</h4>
    <p>
      ဘာဖြစ်နေလဲ? Number နဲ့ သတ်မှတ်ပါ။
    </p>

    <h4>2. Find the Root Cause</h4>
    <p>
      People, Customer, Product, Process,
      Distribution, Competition, Finance
      ဆိုပြီး ခွဲစိတ်ပါ။
    </p>

    <h4>3. Build an Action Plan</h4>
    <p>
      Action + Owner + KPI + Deadline သတ်မှတ်ပါ။
    </p>

    <h4>4. Execute</h4>
    <p>
      Field execution ကို စောင့်ကြည့်ပြီး
      obstacle တွေကို မြန်မြန်ဖြေရှင်းပါ။
    </p>

    <h4>5. Measure</h4>
    <p>
      Actual vs Target ပြန်တိုင်းပြီး
      action plan ကို ပြန်ပြင်ပါ။
    </p>

    <div class="ai-tip">
      💡 မေးခွန်းကို ပိုတိကျအောင်
      "Target 30M ရှိတယ်၊ Actual 22M ဖြစ်နေတယ်၊
      Team 5 ယောက်ရှိတယ်။ ဘယ်လို Action Plan ချမလဲ?"
      လို့ မေးရင် ပိုပြီး detail ကျတဲ့ business plan
      ထုတ်ပေးနိုင်ပါတယ်။
    </div>
  `;
}

/* =========================
   AI TOOLS
========================= */

function renderTools() {
  const container =
    $("toolsContent") ||
    document.querySelector("#toolsPage .content");

  if (!container) return;

  container.innerHTML = `
    <div class="tools-grid">

      <div class="tool-card">
        <div class="tool-icon">💰</div>
        <h3>Profit Calculator</h3>
        <p>Revenue, cost, gross profit နှင့် margin တွက်ပါ။</p>
        <button class="primary-btn" onclick="openProfitCalculator()">
          Open Tool
        </button>
      </div>

      <div class="tool-card">
        <div class="tool-icon">🏷️</div>
        <h3>Pricing Calculator</h3>
        <p>Desired margin အပေါ်မူတည်ပြီး selling price တွက်ပါ။</p>
        <button class="primary-btn" onclick="openPricingCalculator()">
          Open Tool
        </button>
      </div>

      <div class="tool-card">
        <div class="tool-icon">⚖️</div>
        <h3>Break-even Calculator</h3>
        <p>Business break-even sales ကို တွက်ပါ။</p>
        <button class="primary-btn" onclick="openBreakEvenCalculator()">
          Open Tool
        </button>
      </div>

      <div class="tool-card">
        <div class="tool-icon">🎯</div>
        <h3>Sales Target Calculator</h3>
        <p>Monthly target ကို daily target အဖြစ်ခွဲပါ။</p>
        <button class="primary-btn" onclick="openSalesTargetCalculator()">
          Open Tool
        </button>
      </div>

      <div class="tool-card featured">
        <div class="tool-icon">🤖</div>
        <h3>AI Business Coach</h3>
        <p>
          Business problem ကို detail analysis,
          action plan, KPI နဲ့ ဖြေရှင်းပါ။
        </p>
        <button class="primary-btn" onclick="navigate('aiPage')">
          Ask AI Coach
        </button>
      </div>

    </div>
  `;
}

function openTools() {
  navigate("toolsPage");
}

function openAITool() {
  navigate("aiPage");
}

/* =========================
   SETTINGS
========================= */

function getSettings() {
  try {
    return JSON.parse(
      localStorage.getItem(STORAGE.settings)
    ) || {
      name: "Aung Zar Ni Win",
      role: "Business Manager",
      dailyGoal: 30,
      notifications: true
    };
  } catch {
    return {
      name: "Aung Zar Ni Win",
      role: "Business Manager",
      dailyGoal: 30,
      notifications: true
    };
  }
}

function saveSettings(settings) {
  localStorage.setItem(
    STORAGE.settings,
    JSON.stringify(settings)
  );
}

function renderSettings() {
  const container =
    $("settingsContent") ||
    document.querySelector("#settingsPage .content");

  if (!container) return;

  const settings = getSettings();

  container.innerHTML = `
    <div class="settings-grid">

      <div class="settings-card">

        <h3>👤 Profile</h3>

        <label>
          Name
          <input
            id="settingsName"
            value="${escapeHTML(settings.name)}"
          >
        </label>

        <label>
          Role
          <input
            id="settingsRole"
            value="${escapeHTML(settings.role)}"
          >
        </label>

        <button
          class="primary-btn"
          onclick="saveProfileSettings()"
        >
          Save Profile
        </button>

      </div>

      <div class="settings-card">

        <h3>🎯 Learning Settings</h3>

        <label>
          Daily Goal (minutes)
          <input
            id="dailyGoal"
            type="number"
            value="${settings.dailyGoal}"
          >
        </label>

        <label class="switch-row">
          <span>Notifications</span>

          <input
            id="notifications"
            type="checkbox"
            ${settings.notifications ? "checked" : ""}
          >
        </label>

        <button
          class="primary-btn"
          onclick="saveLearningSettings()"
        >
          Save Settings
        </button>

      </div>

      <div class="settings-card">

        <h3>📱 App Information</h3>

        <p>
          <strong>Aung Business Academy</strong>
        </p>

        <p>Version: V8.0 Professional</p>

        <p>
          Business learning platform for
          Sales, Strategy, People & Finance.
        </p>

      </div>

    </div>
  `;
}

function saveProfileSettings() {
  const settings = getSettings();

  settings.name =
    $("settingsName")?.value ||
    "Aung Zar Ni Win";

  settings.role =
    $("settingsRole")?.value ||
    "Business Manager";

  saveSettings(settings);

  showToast("✓ Profile saved");
}

function saveLearningSettings() {
  const settings = getSettings();

  settings.dailyGoal =
    Number($("dailyGoal")?.value) || 30;

  settings.notifications =
    Boolean($("notifications")?.checked);

  saveSettings(settings);

  showToast("✓ Settings saved");
}

function openProfile() {
  navigate("settingsPage");
}

/* =========================
   BUSINESS CATEGORY
========================= */

function openCategory(category) {
  navigate("lessonsPage");

  setTimeout(() => {
    const select = $("lessonCategory");

    if (select) {
      select.value = category;
    }

    renderLessons();
  }, 50);
}

function openBusinessPlan() {
  navigate("aiPage");

  setTimeout(() => {
    const input =
      $("aiInput") ||
      $("chatInput") ||
      $("aiMessageInput");

    if (input) {
      input.value =
        "ကျွန်တော့် business အတွက် 90-day action plan တစ်ခု detail နဲ့ရေးပေးပါ";
      input.focus();
    }
  }, 100);
}

/* =========================
   SEARCH
========================= */

function performSearch() {
  const input =
    $("globalSearch") ||
    $("academySearch");

  if (!input) return;

  const value = input.value.trim().toLowerCase();

  if (!value) return;

  const lesson = LESSONS.find(
    (item) =>
      item.title.toLowerCase().includes(value) ||
      item.category.toLowerCase().includes(value)
  );

  if (lesson) {
    navigate("lessonsPage");

    setTimeout(() => {
      openLessonById(lesson.id);
    }, 100);

    return;
  }

  showToast("🔎 Result မတွေ့ပါ");
}

/* =========================
   SIDEBAR
========================= */

function toggleSidebar() {
  const sidebar = $("sidebar");

  if (!sidebar) return;

  sidebar.classList.toggle("open");

  const overlay = $("sidebarOverlay");

  if (overlay) {
    overlay.classList.toggle(
      "active",
      sidebar.classList.contains("open")
    );
  }
}

function openSidebar() {
  const sidebar = $("sidebar");

  if (!sidebar) return;

  sidebar.classList.add("open");

  const overlay = $("sidebarOverlay");

  if (overlay) {
    overlay.classList.add("active");
  }
}

function closeSidebar() {
  const sidebar = $("sidebar");

  if (sidebar) {
    sidebar.classList.remove("open");
  }

  const overlay = $("sidebarOverlay");

  if (overlay) {
    overlay.classList.remove("active");
  }
}

/* =========================
   MODAL
========================= */

function openModal(content, className = "") {
  const overlay = $("modalOverlay");
  const body = $("modalBody");

  if (!overlay || !body) return;

  body.innerHTML = content;

  overlay.classList.add("active");

  if (className) {
    overlay.classList.add(className);
  }
}

function closeModal() {
  const overlay = $("modalOverlay");

  if (!overlay) return;

  overlay.classList.remove("active");
  overlay.classList.remove("lesson-modal");
}

function showToast(message) {
  const toast = $("toast");

  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.__toastTimer);

  window.__toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

/* =========================
   NOTIFICATION
========================= */

function showNotification() {
  showToast("🔔 You are up to date.");
}

/* =========================
   LOGOUT
========================= */

function logoutUser() {
  showToast(
    "Logout is not connected yet. This version is local-only."
  );
}

/* =========================
   EVENT BINDINGS
========================= */

function bindEvents() {

  document.addEventListener("click", (event) => {

    const nav = event.target.closest("[data-page]");

    if (nav) {
      const page = nav.getAttribute("data-page");

      if (page) {
        navigate(page);
      }
    }

    if (
      event.target.id === "modalOverlay"
    ) {
      closeModal();
    }
  });

  const mobileMenu = $("mobileMenu");

  if (mobileMenu) {
    mobileMenu.addEventListener(
      "click",
      toggleSidebar
    );
  }

  const overlay = $("sidebarOverlay");

  if (overlay) {
    overlay.addEventListener(
      "click",
      closeSidebar
    );
  }

  const modalClose = $("modalClose");

  if (modalClose) {
    modalClose.addEventListener(
      "click",
      closeModal
    );
  }

  const notificationBtn =
    $("notificationBtn");

  if (notificationBtn) {
    notificationBtn.addEventListener(
      "click",
      showNotification
    );
  }

  const search =
    $("globalSearch") ||
    $("academySearch");

  if (search) {
    search.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        performSearch();
      }
    });
  }

  const lessonCategory =
    $("lessonCategory");

  if (lessonCategory) {
    lessonCategory.addEventListener(
      "change",
      renderLessons
    );
  }

  const lessonSearch =
    $("lessonSearch");

  if (lessonSearch) {
    lessonSearch.addEventListener(
      "input",
      renderLessons
    );
  }

  const aiInput =
    $("aiInput") ||
    $("chatInput") ||
    $("aiMessageInput");

  if (aiInput) {
    aiInput.addEventListener("keydown", (event) => {
      if (
        event.key === "Enter" &&
        !event.shiftKey
      ) {
        event.preventDefault();
        sendAIMessage();
      }
    });
  }
}

/* =========================
   INITIALIZE
========================= */

function initializeApp() {

  updateDashboardStats();

  renderDashboard();
  renderCourses();
  renderLessons();
  renderProgress();
  renderSales();
  renderReports();
  renderAIPage();
  renderTools();
  renderSettings();

  bindEvents();

  navigate("dashboardPage");
}

/* =========================
   GLOBAL EXPORTS
   Required for inline onclick
========================= */

window.navigate = navigate;
window.goDashboard = goDashboard;
window.openLessons = openLessons;
window.continueLearning = continueLearning;

window.openCourse = openCourse;
window.openLessonById = openLessonById;
window.openLesson = openLesson;
window.previousLesson = previousLesson;
window.nextLesson = nextLesson;
window.completeLesson = completeLesson;

window.openCategory = openCategory;
window.openBusinessPlan = openBusinessPlan;

window.saveSalesKPI = saveSalesKPI;
window.addTeamMember = addTeamMember;
window.removeTeamMember = removeTeamMember;

window.addActionPlan = addActionPlan;
window.toggleActionPlan = toggleActionPlan;
window.deleteActionPlan = deleteActionPlan;

window.openProfitCalculator = openProfitCalculator;
window.calculateProfitTool = calculateProfitTool;

window.openPricingCalculator = openPricingCalculator;
window.calculatePricingTool = calculatePricingTool;

window.openBreakEvenCalculator = openBreakEvenCalculator;
window.calculateBreakEven = calculateBreakEven;

window.openSalesTargetCalculator = openSalesTargetCalculator;
window.calculateSalesTarget = calculateSalesTarget;

window.sendAIMessage = sendAIMessage;
window.getAIResponse = getAIResponse;

window.openTools = openTools;
window.openAITool = openAITool;

window.openProfile = openProfile;
window.saveProfileSettings = saveProfileSettings;
window.saveLearningSettings = saveLearningSettings;

window.performSearch = performSearch;

window.toggleSidebar = toggleSidebar;
window.openSidebar = openSidebar;
window.closeSidebar = closeSidebar;

window.openModal = openModal;
window.closeModal = closeModal;

window.showToast = showToast;
window.showNotification = showNotification;
window.logoutUser = logoutUser;

/* =========================
   DOM READY
========================= */

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initializeApp
  );
} else {
  initializeApp();
}
