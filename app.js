/* =========================================================
   AUNG BUSINESS ACADEMY V8.0 PROFESSIONAL
   Main Application
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

function formatMoney(number) {
  return new Intl.NumberFormat("en-US").format(
    Number(number) || 0
  );
}

/* =========================================================
   COURSES
   ========================================================= */

const COURSES = [
  {
    id: "sales",
    title: "Sales Management Mastery",
    icon: "💼",
    lessons: 6,
    description:
      "Sales Target, KPI, Team Management, Customer Management နှင့် Sales Execution ကို လေ့လာရန်။"
  },

  {
    id: "strategy",
    title: "Business Strategy",
    icon: "♟️",
    lessons: 3,
    description:
      "Market Analysis, Strategic Thinking နှင့် Business Planning ကို လေ့လာရန်။"
  },

  {
    id: "marketing",
    title: "Marketing & Brand",
    icon: "📣",
    lessons: 3,
    description:
      "Marketing, Brand Positioning နှင့် Customer Value ကို လေ့လာရန်။"
  },

  {
    id: "leadership",
    title: "People & Leadership",
    icon: "👥",
    lessons: 2,
    description:
      "Leadership, Coaching, Accountability နှင့် Team Development ကို လေ့လာရန်။"
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
    title: "Sales Target ကို ဘယ်လို Management လုပ်မလဲ?",
    duration: "20 min",

    summary:
      "Sales Target ဆိုတာ Manager တစ်ယောက်အတွက် နံပါတ်တစ်ခုသာမဟုတ်ဘဲ Team, Customer, Distribution, Productivity နဲ့ Execution ကို ချိတ်ဆက်ပေးတဲ့ Management System ဖြစ်ပါတယ်။",

    objectives: [
      "Monthly Target ကို Daily / Weekly Target အဖြစ် ခွဲနိုင်ရန်",
      "Target Gap ကို စောစောသိနိုင်ရန်",
      "Team Member တစ်ဦးချင်းစီ၏ Contribution ကို စီမံနိုင်ရန်",
      "Gap Recovery Action Plan တည်ဆောက်နိုင်ရန်"
    ],

    sections: [
      {
        title: "1. Target Management ရဲ့ အဓိကအဓိပ္ပါယ်",
        content:
          "Sales Manager အနေနဲ့ Monthly Target ကို သိရုံနဲ့ မလုံလောက်ပါဘူး။ Target ဘယ်လောက်ရှိတယ်၊ လက်ရှိ Actual ဘယ်လောက်ရပြီ၊ Achievement % ဘယ်လောက်ရှိတယ်၊ Gap ဘယ်လောက်ကျန်တယ်၊ ကျန်တဲ့ရက်တွေမှာ တစ်ရက်ကို ဘယ်လောက်ရောင်းရမလဲဆိုတာကို အမြဲသိထားရပါမယ်။"
      },

      {
        title: "2. Target ကို Breakdown လုပ်ခြင်း",
        content:
          "ဥပမာ Monthly Target = 30,000,000 MMK ဖြစ်ပြီး Working Days = 26 ရက်ဆိုရင် Daily Target = 30,000,000 ÷ 26 = 1,153,846 MMK ခန့် ဖြစ်ပါတယ်။ ဒီ Daily Target ကို Team Member, Territory, Channel, Customer Group အလိုက် ထပ်ခွဲနိုင်ပါတယ်။"
      },

      {
        title: "3. Gap Management",
        content:
          "Actual Sales က Target ထက်နောက်ကျနေရင် Gap ကို ဖုံးကွယ်မထားသင့်ပါဘူး။ Gap ရဲ့ Root Cause ကိုရှာရပါမယ်။ ဥပမာ Customer Order လျော့ခြင်း၊ Stock Out၊ Price Issue၊ Competitor Promotion၊ Sales Rep Productivity ကျခြင်း၊ Distribution မပြည့်ခြင်း စတာတွေ ဖြစ်နိုင်ပါတယ်။"
      },

      {
        title: "4. Manager ရဲ့ Role",
        content:
          "Manager က ကိုယ်တိုင် အားလုံးရောင်းဖို့မဟုတ်ပါဘူး။ Team ကို Target ရောက်အောင် System တည်ဆောက်ပေးရပါတယ်။ People + Numbers + Execution ဆိုတဲ့ သုံးခုကို တစ်ပြိုင်တည်း Manage လုပ်နိုင်ရပါမယ်။"
      }
    ],

    example:
      "ဥပမာ Monthly Target 30 million ဖြစ်ပြီး လကုန်ရန် 10 ရက်ပဲကျန်တယ်။ Actual 22 million ရပြီဆိုရင် Gap = 8 million ဖြစ်ပါတယ်။ 10 ရက်အတွင်း 8 million ပြန်ရဖို့ Daily Recovery Target = 800,000 MMK ဖြစ်ပါတယ်။ ဒီအချိန်မှာ Customer Priority List, Team Daily Call Plan, High-Value Customer Visit, Distributor Stock Check နဲ့ Daily Review ကို ချက်ချင်းစတင်ရပါမယ်။",

    managerApplication:
      "Sales Manager အနေနဲ့ Morning Meeting မှာ Yesterday Actual, Today Target, Key Customer, Key Risk နဲ့ Required Action ကို တိုတိုရှင်းရှင်း ပြောပါ။ Evening မှာ Actual vs Plan ကို ပြန်စစ်ပြီး Gap Recovery ကို Update လုပ်ပါ။",

    checklist: [
      "Monthly Target သိပါသလား?",
      "Actual Sales ကို Daily Update လုပ်ပါသလား?",
      "Achievement % သိပါသလား?",
      "Gap ကို သိပါသလား?",
      "Remaining Days သိပါသလား?",
      "Recovery Target တွက်ထားပါသလား?",
      "Team Member တစ်ဦးချင်းစီ၏ Contribution သိပါသလား?"
    ],

    assignment:
      "သင့်ကိုယ်ပိုင် Sales Target တစ်ခုသတ်မှတ်ပြီး Monthly → Weekly → Daily Target အဖြစ် ခွဲပါ။ Actual Sales ရှိပါက Achievement % နှင့် Gap ကို တွက်ပါ။",

    takeaways: [
      "Target ကို နံပါတ်တစ်ခုအဖြစ်မမြင်ဘဲ Management System အဖြစ်မြင်ပါ။",
      "Gap ကို စောစောတွေ့လေ Recovery လုပ်ရတာလွယ်လေ။",
      "Daily Execution က Monthly Result ကို ဖန်တီးပါတယ်။"
    ]
  },

  {
    id: 2,
    category: "Sales Basics",
    course: "Sales Management Mastery",
    title: "Sales KPI & Performance Management",
    duration: "25 min",

    summary:
      "KPI ဆိုတာ Team ကိုဖိအားပေးဖို့ သုံးတဲ့ Number မဟုတ်ဘဲ Performance ကို နားလည်ပြီး Coaching လုပ်နိုင်ဖို့ သုံးတဲ့ Management Tool ဖြစ်ပါတယ်။",

    objectives: [
      "Sales KPI များကို နားလည်ရန်",
      "Leading KPI နှင့် Lagging KPI ခွဲခြားရန်",
      "Underperformer ကို Coaching လုပ်ရန်",
      "Performance Review System တည်ဆောက်ရန်"
    ],

    sections: [
      {
        title: "1. KPI ဆိုတာဘာလဲ?",
        content:
          "KPI = Key Performance Indicator ဖြစ်ပါတယ်။ Sales Team အတွက် Revenue, Volume, Achievement %, Productive Calls, Numeric Distribution, New Customers, Collection, Average Order Value စတာတွေဟာ KPI ဖြစ်နိုင်ပါတယ်။"
      },

      {
        title: "2. Lagging KPI",
        content:
          "Revenue, Volume, Achievement % စတာတွေဟာ အများအားဖြင့် Result ကို ပြတဲ့ Lagging KPI ဖြစ်ပါတယ်။ Result မကောင်းမှ သိရတာမျိုး ဖြစ်နိုင်တဲ့အတွက် Leading KPI တွေနဲ့ တွဲပြီး Manage လုပ်ရပါမယ်။"
      },

      {
        title: "3. Leading KPI",
        content:
          "Customer Visits, Productive Calls, New Outlet Opening, Proposal Sent, Follow-up Rate စတာတွေဟာ Result မရခင်မှာ Manager ကို Warning Signal ပေးနိုင်တဲ့ Leading KPI တွေ ဖြစ်ပါတယ်။"
      },

      {
        title: "4. Performance Review",
        content:
          "Performance Review မှာ 'Target မပြည့်ဘူး' လို့ပြောရုံမဟုတ်ဘဲ ဘာကြောင့်မပြည့်တာလဲ၊ ဘာကိုပြောင်းရမလဲ၊ ဘယ်နေ့မှာပြောင်းလဲမှုကိုမြင်ရမလဲဆိုတာကို သတ်မှတ်ရပါမယ်။"
      }
    ],

    example:
      "Sales Rep တစ်ယောက် Achievement 70% ပဲရှိတယ်ဆိုပါစို့။ Manager က Target မပြည့်ဘူးလို့ပြောရုံနဲ့ မပြီးပါဘူး။ Customer Calls က 90% ရှိလား၊ Productive Calls က ဘယ်လောက်လဲ၊ Average Order Value ကျနေလား၊ New Customers ရှာနေလား စတာတွေကို ခွဲကြည့်ရပါမယ်။",

    managerApplication:
      "Weekly Review ကို 3 ပိုင်းခွဲပါ — What happened? Why happened? What will we do next? ဒီ Framework က Blaming Culture ကို လျှော့ပြီး Problem Solving Culture ကို တိုးစေပါတယ်။",

    checklist: [
      "Result KPI ရှိပါသလား?",
      "Leading KPI ရှိပါသလား?",
      "Individual KPI ရှိပါသလား?",
      "Weekly Review လုပ်ပါသလား?",
      "Underperformer တစ်ဦးချင်းစီအတွက် Coaching Plan ရှိပါသလား?"
    ],

    assignment:
      "Team Member တစ်ဦးကို ရွေးပြီး Result KPI 3 ခုနဲ့ Leading KPI 3 ခု သတ်မှတ်ပါ။",

    takeaways: [
      "KPI သည် Control Tool မဟုတ်ဘဲ Coaching Tool ဖြစ်သည်။",
      "Result မရခင် Leading KPI ကို စောင့်ကြည့်ပါ။",
      "Performance Review မှာ Cause → Action → Follow-up ပါရမယ်။"
    ]
  },

  {
    id: 3,
    category: "Strategic Thinking",
    course: "Business Strategy",
    title: "Business Strategy ကို လက်တွေ့စဉ်းစားနည်း",
    duration: "25 min",

    summary:
      "Strategy ဆိုတာ လုပ်စရာတွေ အများကြီးလုပ်ခြင်းမဟုတ်ပါဘူး။ ဘာကို အာရုံစိုက်မလဲ၊ ဘာကို မလုပ်ဘူးလဲဆိုတာ ဆုံးဖြတ်ခြင်းဖြစ်ပါတယ်။",

    objectives: [
      "Market ကို Analyze လုပ်ရန်",
      "Competitor ကို နားလည်ရန်",
      "Priority Customer / Product သတ်မှတ်ရန်",
      "Resource Allocation ပြုလုပ်ရန်"
    ],

    sections: [
      {
        title: "1. Where Are We?",
        content:
          "လက်ရှိ Business Performance, Market Share, Customer Base, Product Mix, Distribution Coverage နဲ့ Competitor Position ကို သုံးသပ်ပါ။"
      },

      {
        title: "2. Where Do We Want To Go?",
        content:
          "12 လအတွင်း Revenue, Market Share, Customer Base, Profit Margin သို့မဟုတ် Distribution ဘယ်လောက်အထိ ရောက်ချင်လဲဆိုတာ ရှင်းရှင်းလင်းလင်း သတ်မှတ်ရပါမယ်။"
      },

      {
        title: "3. How Will We Get There?",
        content:
          "Target ရောက်ဖို့ Channel Strategy, Product Strategy, Pricing Strategy, People Strategy နဲ့ Execution Plan ကို တည်ဆောက်ရပါမယ်။"
      }
    ],

    example:
      "Competitor တစ်ယောက်က Price Discount အမြဲပေးနေတယ်ဆိုရင် ကိုယ့် Business က Discount နဲ့ပဲ လိုက်ပြိုင်စရာ မလိုပါဘူး။ Service, Availability, Product Quality, Relationship, Faster Delivery စတဲ့ Value Proposition တစ်ခုနဲ့ Differentiation လုပ်နိုင်ပါတယ်။",

    managerApplication:
      "Monthly Business Review မှာ Sales Result တင်မကဘဲ Competitor Activity, Customer Behavior, Market Trend နဲ့ Risk ကိုပါ ထည့်သွင်းသုံးသပ်ပါ။",

    checklist: [
      "Current Position သိပါသလား?",
      "Desired Position သတ်မှတ်ထားပါသလား?",
      "Competitor သိပါသလား?",
      "Customer Priority သိပါသလား?",
      "Resource Allocation ရှင်းပါသလား?"
    ],

    assignment:
      "သင့်လုပ်ငန်းအတွက် 'Where are we? Where do we want to go? How will we get there?' ဆိုတဲ့ မေးခွန်း ၃ ခုကို ဖြေပါ။",

    takeaways: [
      "Strategy = Focus + Choice + Resource Allocation",
      "Competitor ကို Copy မလုပ်ဘဲ Differentiation ရှာပါ။",
      "Strategy မရှိရင် Team က Busy ဖြစ်ပေမယ့် Productive မဖြစ်နိုင်ပါ။"
    ]
  },

  {
    id: 4,
    category: "Marketing Basics",
    course: "Marketing & Brand",
    title: "Customer Value & Marketing Basics",
    duration: "20 min",

    summary:
      "Marketing ဆိုတာ Advertisement လုပ်တာတစ်ခုတည်းမဟုတ်ပါဘူး။ Customer ဘာလိုချင်လဲ သိပြီး သူတို့အတွက် Value တစ်ခုဖန်တီးပေးနိုင်ခြင်း ဖြစ်ပါတယ်။",

    objectives: [
      "Target Customer သတ်မှတ်ရန်",
      "Customer Need နားလည်ရန်",
      "Value Proposition ဖန်တီးရန်",
      "Marketing Message တည်ဆောက်ရန်"
    ],

    sections: [
      {
        title: "1. Customer ကို သိခြင်း",
        content:
          "Customer ရဲ့ Need, Pain Point, Budget, Buying Behavior, Decision Maker နဲ့ Purchase Frequency ကို နားလည်ရပါမယ်။"
      },

      {
        title: "2. Value Proposition",
        content:
          "Customer က 'ဘာကြောင့် သင့် Product ကိုဝယ်သင့်တာလဲ?' ဆိုတဲ့ မေးခွန်းအတွက် ရှင်းလင်းတဲ့အဖြေရှိရပါမယ်။"
      },

      {
        title: "3. Marketing Message",
        content:
          "Message က Product Feature ကိုသာ ပြောတာထက် Customer Benefit ကို ပြောသင့်ပါတယ်။ Feature = ဘာရှိလဲ။ Benefit = Customer အတွက် ဘာအကျိုးရှိလဲ။"
      }
    ],

    example:
      "ကားတစ်စီးမှာ 'Battery 60 kWh' ဆိုတာ Feature ဖြစ်ပါတယ်။ 'တစ်ကြိမ် Charge လုပ်ပြီး Daily City Driving အတွက် သက်သာစွာအသုံးပြုနိုင်ခြင်း' ဆိုတာ Customer Benefit ကို ပြောတာဖြစ်ပါတယ်။",

    managerApplication:
      "Sales Team ကို Product Feature ပြောတတ်ရုံမဟုတ်ဘဲ Customer Benefit ပြောတတ်အောင် Train လုပ်ပါ။",

    checklist: [
      "Target Customer ဘယ်သူလဲ?",
      "Customer Pain Point ဘာလဲ?",
      "Product Value ဘာလဲ?",
      "Competitor ထက် ဘာကွာလဲ?",
      "Sales Team က Benefit ကို ရှင်းပြနိုင်ပါသလား?"
    ],

    assignment:
      "သင့် Product တစ်ခုကို ရွေးပြီး Feature 3 ခု၊ Benefit 3 ခုရေးပါ။",

    takeaways: [
      "Marketing = Customer Value",
      "Feature မဟုတ်ဘဲ Benefit ကို ရောင်းပါ။",
      "Customer Need မသိရင် Marketing Message မထိရောက်နိုင်ပါ။"
    ]
  },

  {
    id: 5,
    category: "Negotiation",
    course: "Sales Management Mastery",
    title: "Professional Negotiation Skills",
    duration: "25 min",

    summary:
      "Negotiation ဆိုတာ ကိုယ်ကနိုင်ပြီး တစ်ဖက်ရှုံးအောင်လုပ်တာမဟုတ်ဘဲ နှစ်ဖက်လုံးအတွက် Commercially Sustainable Agreement ရအောင် ညှိနှိုင်းခြင်းဖြစ်ပါတယ်။",

    objectives: [
      "Customer Position နားလည်ရန်",
      "BATNA စဉ်းစားရန်",
      "Price Objection ကို Handle လုပ်ရန်",
      "Win-Win Agreement တည်ဆောက်ရန်"
    ],

    sections: [
      {
        title: "1. Preparation",
        content:
          "Negotiation မဝင်ခင် Customer Need, Purchase Volume, Budget, Competitor Offer, Decision Maker နဲ့ ကိုယ့်ရဲ့ Minimum Acceptable Position ကို သိထားရပါမယ်။"
      },

      {
        title: "2. Ask Before Answer",
        content:
          "Customer က 'ဈေးကြီးတယ်' လို့ပြောရင် ချက်ချင်း Discount မပေးပါနဲ့။ ဘာကြောင့် ဈေးကြီးတယ်လို့မြင်တာလဲ၊ ဘယ် Product နဲ့ Compare လုပ်နေလဲ၊ Budget Range ဘယ်လောက်လဲဆိုတာ မေးပါ။"
      },

      {
        title: "3. Trade Instead of Give",
        content:
          "Discount ပေးမယ်ဆိုရင် ဘာတစ်ခုရမလဲဆိုတာ သတ်မှတ်ပါ။ Volume Commitment, Payment Term, Contract Period, Order Frequency စတာတွေနဲ့ Trade လုပ်နိုင်ပါတယ်။"
      }
    ],

    example:
      "Customer က 10% Discount တောင်းလာရင် '10% ပေးမယ်' လို့ချက်ချင်း မပြောဘဲ 10% Discount ကို Monthly Volume Commitment နဲ့ ချိတ်ဆက်နိုင်ပါတယ်။",

    managerApplication:
      "Sales Team ကို Discount Approval မပေးခင် Commercial Impact ကိုတွက်တတ်အောင် သင်ပေးပါ။ Revenue တိုးပေမယ့် Margin ကျသွားရင် Business အတွက် မကောင်းနိုင်ပါ။",

    checklist: [
      "Customer Need သိပါသလား?",
      "Competitor Offer သိပါသလား?",
      "Minimum Acceptable Position သိပါသလား?",
      "Discount အစား Trade ရှိပါသလား?",
      "Margin Impact တွက်ထားပါသလား?"
    ],

    assignment:
      "Customer က Price Discount 10% တောင်းတဲ့ Scenario တစ်ခုအတွက် Negotiation Plan တည်ဆောက်ပါ။",

    takeaways: [
      "Prepare → Ask → Understand → Trade → Close",
      "Discount ပေးတာထက် Value ကို ရောင်းပါ။",
      "Every concession should have a return."
    ]
  },

  {
    id: 6,
    category: "Customer Service",
    course: "Sales Management Mastery",
    title: "Customer Relationship Management",
    duration: "20 min",

    summary:
      "Customer Management ဆိုတာ Order ရတဲ့အချိန်မှာပဲ ဆက်ဆံတာမဟုတ်ပါဘူး။ Long-term relationship, trust, service quality နဲ့ business growth ကို စီမံတာဖြစ်ပါတယ်။",

    objectives: [
      "Customer Segmentation ပြုလုပ်ရန်",
      "Key Account Priority သတ်မှတ်ရန်",
      "Customer Visit Plan တည်ဆောက်ရန်",
      "Relationship Strength တိုးရန်"
    ],

    sections: [
      {
        title: "1. Customer Segmentation",
        content:
          "Customer အားလုံးကို အချိန်တူတူ မပေးနိုင်ပါဘူး။ Revenue, Potential, Strategic Importance, Growth Opportunity အလိုက် A/B/C သို့မဟုတ် Key/Regular/Low Potential အဖြစ် ခွဲနိုင်ပါတယ်။"
      },

      {
        title: "2. Key Account Management",
        content:
          "Key Account မှာ Sales တစ်ခုတည်းမဟုတ်ဘဲ Customer Business Model, Decision Maker, Buying Cycle, Competitor Presence နဲ့ Future Potential ကို နားလည်ရပါတယ်။"
      },

      {
        title: "3. Follow-up",
        content:
          "Customer Visit ပြီးရင် Next Action, Owner, Deadline သတ်မှတ်ထားရပါမယ်။ Follow-up မရှိတဲ့ Customer Visit က Relationship Activity ဖြစ်ပေမယ့် Business Result မဖြစ်နိုင်ပါ။"
      }
    ],

    example:
      "Key Customer တစ်ဦးမှာ လက်ရှိ Monthly Sales 5 million ရှိပြီး Potential 10 million ရှိတယ်ဆိုရင် Target ကို 5 million အဖြစ်ထားတာထက် Potential Gap ကို သုံးသပ်ပြီး Growth Plan တည်ဆောက်သင့်ပါတယ်။",

    managerApplication:
      "Top Customers အတွက် Monthly Customer Plan တစ်ခုထားပါ။ Sales, Collection, Stock, Complaint, Competitor Activity, New Opportunity စတာတွေကို Review လုပ်ပါ။",

    checklist: [
      "Customer Segment ရှိပါသလား?",
      "Top Customers သိပါသလား?",
      "Customer Potential သိပါသလား?",
      "Decision Maker သိပါသလား?",
      "Next Action ရှိပါသလား?"
    ],

    assignment:
      "သင့်ရဲ့ Top 10 Customers ကို Revenue နဲ့ Potential အလိုက် Rank လုပ်ပါ။",

    takeaways: [
      "Customer relationship must create business value.",
      "Top Customer ကို Priority ပေးပါ။",
      "Every visit must end with a next action."
    ]
  },

  {
    id: 7,
    category: "People Management",
    course: "People & Leadership",
    title: "Coaching & Empowerment Leadership",
    duration: "25 min",

    summary:
      "ကောင်းမွန်တဲ့ Manager က Team ကို ကိုယ်တိုင်အလုပ်လုပ်ပေးတာမဟုတ်ဘဲ Team ကို ကိုယ်တိုင်ဆုံးဖြတ်ပြီး Result ထုတ်နိုင်အောင် တည်ဆောက်ပေးတာဖြစ်ပါတယ်။",

    objectives: [
      "Coaching နှင့် Micromanagement ခွဲခြားရန်",
      "Clear Expectation သတ်မှတ်ရန်",
      "Feedback ပေးနိုင်ရန်",
      "Ownership တည်ဆောက်ရန်"
    ],

    sections: [
      {
        title: "1. Set Clear Expectations",
        content:
          "ဘာလုပ်ရမလဲ၊ ဘယ်အချိန်ပြီးရမလဲ၊ Success ဆိုတာ ဘယ်လိုပုံစံလဲဆိုတာ ရှင်းပြရပါမယ်။"
      },

      {
        title: "2. Coach Instead of Command",
        content:
          "ပြဿနာတိုင်းအတွက် Manager က Answer ပေးတာထက် 'မင်းအမြင်နဲ့ ဘာကြောင့်ဖြစ်တာလဲ?', 'နောက်တစ်ကြိမ် ဘာပြောင်းမလဲ?' ဆိုပြီး မေးခွန်းနဲ့ Coach လုပ်ပါ။"
      },

      {
        title: "3. Accountability",
        content:
          "Empowerment ဆိုတာ လွတ်ထားတာမဟုတ်ပါဘူး။ Ownership ပေးပြီး Regular Review, KPI နဲ့ Feedback System ထားတာဖြစ်ပါတယ်။"
      }
    ],

    example:
      "Sales Rep တစ်ယောက် Target မပြည့်ရင် Manager က 'ဘာလို့မရတာလဲ?' လို့အပြစ်တင်တာထက် 'မင်းရဲ့ Analysis အရ Gap ရဲ့ အဓိကအကြောင်းရင်း ၂ ခုကဘာလဲ?' လို့မေးပြီး Action Plan ကို Rep ကိုယ်တိုင် တည်ဆောက်စေပါ။",

    managerApplication:
      "Weekly One-on-One Coaching 15–30 မိနစ်ပြုလုပ်ပါ။ Performance, Challenge, Support Needed, Next Action ဆိုတဲ့ Framework သုံးပါ။",

    checklist: [
      "Expectation ရှင်းပါသလား?",
      "Team ကို Decision Space ပေးပါသလား?",
      "Weekly Coaching ရှိပါသလား?",
      "Feedback ပေးပါသလား?",
      "Accountability ရှိပါသလား?"
    ],

    assignment:
      "Underperforming Team Member တစ်ဦးအတွက် 30-Day Coaching Plan တည်ဆောက်ပါ။",

    takeaways: [
      "Manager = Controller မဟုတ်ဘဲ Coach ဖြစ်သင့်သည်။",
      "Empowerment + Accountability တွဲဖက်ရမည်။",
      "People Development က Long-term Sales Result ကို ဖန်တီးတယ်။"
    ]
  },

  {
    id: 8,
    category: "Profit & Loss",
    course: "Business Strategy",
    title: "Revenue, Cost, Profit & Margin",
    duration: "25 min",

    summary:
      "Sales များတာနဲ့ Business အမြဲအောင်မြင်တာ မဟုတ်ပါဘူး။ Revenue တိုးသော်လည်း Cost နှင့် Discount များလွန်းရင် Profit ကျနိုင်ပါတယ်။",

    objectives: [
      "Revenue နားလည်ရန်",
      "Gross Profit တွက်ရန်",
      "Gross Margin % တွက်ရန်",
      "Discount ရဲ့ Financial Impact သိရန်"
    ],

    sections: [
      {
        title: "1. Revenue",
        content:
          "Revenue = Selling Price × Quantity ဖြစ်ပါတယ်။ Revenue တိုးလာခြင်းဟာ Business Growth အတွက်ကောင်းပေမယ့် Profitability ကို သီးခြားကြည့်ရပါမယ်။"
      },

      {
        title: "2. Gross Profit",
        content:
          "Gross Profit = Revenue − Cost of Goods Sold ဖြစ်ပါတယ်။"
      },

      {
        title: "3. Gross Margin",
        content:
          "Gross Margin % = Gross Profit ÷ Revenue × 100 ဖြစ်ပါတယ်။ Manager တစ်ယောက်အတွက် Margin ကို သိထားခြင်းက Pricing နဲ့ Discount Decision တွေအတွက် အရေးကြီးပါတယ်။"
      }
    ],

    example:
      "Revenue 10,000,000 MMK ဖြစ်ပြီး Product Cost 7,000,000 MMK ဆိုရင် Gross Profit = 3,000,000 MMK ဖြစ်ပါတယ်။ Gross Margin = 30% ဖြစ်ပါတယ်။",

    managerApplication:
      "Sales Team က Revenue တစ်ခုတည်းကို မလိုက်ဘဲ Revenue + Margin + Collection + Customer Quality ကို တွဲပြီး Manage လုပ်ပါ။",

    checklist: [
      "Revenue သိပါသလား?",
      "COGS သိပါသလား?",
      "Gross Profit သိပါသလား?",
      "Gross Margin % သိပါသလား?",
      "Discount Impact တွက်ပါသလား?"
    ],

    assignment:
      "Product တစ်ခုအတွက် Selling Price, Cost, Gross Profit နဲ့ Gross Margin % ကို တွက်ပါ။",

    takeaways: [
      "Revenue is not Profit.",
      "Discount သည် Margin ကို တိုက်ရိုက်ထိခိုက်စေနိုင်သည်။",
      "Sales Manager တစ်ယောက်သည် Commercial Thinking ရှိရမည်။"
    ]
  },

  {
    id: 9,
    category: "Goal Setting",
    course: "People & Leadership",
    title: "SMART Goals & Execution",
    duration: "20 min",

    summary:
      "Goal က ရှင်းလင်းပြီး တိုင်းတာနိုင်မှ Team က Execution လုပ်နိုင်ပါတယ်။",

    objectives: [
      "SMART Goal တည်ဆောက်ရန်",
      "Goal ကို KPI အဖြစ် ပြောင်းရန်",
      "Deadline နှင့် Owner သတ်မှတ်ရန်",
      "Review Cycle တည်ဆောက်ရန်"
    ],

    sections: [
      {
        title: "SMART",
        content:
          "Specific, Measurable, Achievable, Relevant, Time-bound ဆိုတဲ့ အချက် ၅ ခုနဲ့ Goal ကို သတ်မှတ်ပါ။"
      },

      {
        title: "Goal → KPI → Action",
        content:
          "Goal တစ်ခုရှိရုံနဲ့ မပြီးပါဘူး။ KPI ဘာလဲ၊ ဘယ်သူလုပ်မလဲ၊ ဘယ်နေ့ပြီးမလဲ၊ ဘယ်လိုတိုင်းမလဲဆိုတာ သတ်မှတ်ရပါတယ်။"
      }
    ],

    example:
      "Sales ကို တိုးချင်တယ်ဆိုတာ Goal မရှင်းပါဘူး။ 'နောက် ၃ လအတွင်း Monthly Sales ကို 20% တိုးမယ်' ဆိုတာ ပိုပြီး Measurable ဖြစ်ပါတယ်။",

    managerApplication:
      "Monthly Goal ကို Weekly Action Plan အဖြစ် ခွဲပြီး Owner တစ်ဦးစီ သတ်မှတ်ပါ။",

    checklist: [
      "Specific ဖြစ်ပါသလား?",
      "Measurable ဖြစ်ပါသလား?",
      "Owner ရှိပါသလား?",
      "Deadline ရှိပါသလား?",
      "Review Date ရှိပါသလား?"
    ],

    assignment:
      "သင့်ရဲ့ နောက် 90 ရက် Business Goal တစ်ခုကို SMART ပုံစံနဲ့ရေးပါ။",

    takeaways: [
      "Clear Goal → Clear Action → Clear Result",
      "Owner မရှိတဲ့ Goal က အကောင်အထည်ဖော်ရန် ခက်တတ်သည်။"
    ]
  },

  {
    id: 10,
    category: "Sales Basics",
    course: "Sales Management Mastery",
    title: "Territory & Distribution Management",
    duration: "25 min",

    summary:
      "Territory Management ရဲ့ အဓိကရည်ရွယ်ချက်က Market Coverage နဲ့ Productivity ကို တိုးတက်အောင်လုပ်ခြင်းဖြစ်ပါတယ်။",

    objectives: [
      "Territory ကို Segment လုပ်ရန်",
      "Coverage Plan တည်ဆောက်ရန်",
      "PJP အခြေခံနားလည်ရန်",
      "Distribution Gap ရှာရန်"
    ],

    sections: [
      {
        title: "Territory Segmentation",
        content:
          "Area ကို Potential, Customer Density, Sales Volume, Travel Time နဲ့ Channel အလိုက် ခွဲပါ။"
      },

      {
        title: "PJP",
        content:
          "Planned Journey Plan က Sales Rep ရဲ့ Customer Visit ကို စနစ်တကျ စီမံပေးပါတယ်။ Priority Customer ကို Priority Visit ပေးသင့်ပါတယ်။"
      },

      {
        title: "Distribution Gap",
        content:
          "Market ထဲမှာ Potential ရှိသော်လည်း Product မရောက်သေးတဲ့ Customer / Outlet တွေကို ရှာပြီး Distribution Expansion လုပ်ပါ။"
      }
    ],

    example:
      "Area တစ်ခုမှာ Outlet 1,000 ရှိပြီး Active Outlet 600 ပဲရှိရင် Numeric Distribution Gap 400 ရှိပါတယ်။ Product Potential ကောင်းရင် New Outlet Opening က Sales Growth Driver ဖြစ်နိုင်ပါတယ်။",

    managerApplication:
      "Weekly Market Visit မှာ Coverage, Availability, Competitor, Price, Display နဲ့ Stock Situation ကို စစ်ပါ။",

    checklist: [
      "Territory Potential သိပါသလား?",
      "PJP ရှိပါသလား?",
      "Coverage % သိပါသလား?",
      "New Customer Opening ရှိပါသလား?",
      "Competitor Activity သိပါသလား?"
    ],

    assignment:
      "သင့် Territory တစ်ခုကို Customer Potential အလိုက် A/B/C ခွဲပြီး Visit Frequency သတ်မှတ်ပါ။",

    takeaways: [
      "Right Customer + Right Frequency + Right Execution",
      "Distribution Expansion သည် Sales Growth Driver ဖြစ်နိုင်သည်။"
    ]
  },

  {
    id: 11,
    category: "Strategic Thinking",
    course: "Business Strategy",
    title: "Root Cause Analysis",
    duration: "20 min",

    summary:
      "Problem ကိုမြင်ရုံနဲ့ ဖြေရှင်းလို့မရပါဘူး။ Root Cause ကို ရှာနိုင်မှ Sustainable Solution ရနိုင်ပါတယ်။",

    objectives: [
      "Symptom နှင့် Root Cause ခွဲရန်",
      "5 Why Method သုံးရန်",
      "Data ဖြင့် Problem Analyze လုပ်ရန်",
      "Corrective Action တည်ဆောက်ရန်"
    ],

    sections: [
      {
        title: "Problem vs Root Cause",
        content:
          "Sales ကျတယ်ဆိုတာ Problem Result ဖြစ်ပါတယ်။ ဘာကြောင့် Sales ကျတာလဲဆိုတဲ့အောက်မှာ Customer Demand, Stock Availability, Price, Competitor, Team Productivity စတာတွေ ရှိနိုင်ပါတယ်။"
      },

      {
        title: "5 Why",
        content:
          "ဘာကြောင့်လဲဆိုတာ အကြိမ်ကြိမ်မေးပြီး Root Cause နီးစပ်အောင် ရှာနိုင်ပါတယ်။"
      }
    ],

    example:
      "Sales ကျ → Customer Order ကျ → Competitor Discount ပေး → Customer Switching ဖြစ် → ကိုယ့် Value Proposition မရှင်း။ ဒီလို Root Cause Chain ကို ရှာနိုင်ရင် Solution က Discount လိုက်ပေးတာထက် Value Strategy ပြောင်းတာ ဖြစ်နိုင်ပါတယ်။",

    managerApplication:
      "Business Review မှာ Problem တစ်ခုကို အနည်းဆုံး Root Cause 2–3 ခု ခွဲပြီး Evidence ရှာပါ။",

    checklist: [
      "Problem ကို Data နဲ့သတ်မှတ်ထားသလား?",
      "Root Cause ခွဲထားသလား?",
      "Evidence ရှိသလား?",
      "Action က Root Cause ကို ဖြေရှင်းသလား?"
    ],

    assignment:
      "သင့် Business မှာ ဖြစ်ခဲ့တဲ့ Problem တစ်ခုကို 5 Why Method နဲ့ Analyze လုပ်ပါ။",

    takeaways: [
      "Treat the cause, not only the symptom.",
      "Data + Observation + Questions = Better Diagnosis."
    ]
  },

  {
    id: 12,
    category: "People Management",
    course: "People & Leadership",
    title: "Team Motivation & Accountability",
    duration: "20 min",

    summary:
      "Motivation ဆိုတာ Salary တစ်ခုတည်းမဟုတ်ပါဘူး။ Clear Goal, Recognition, Growth, Fairness, Ownership နဲ့ Manager Support တွေလည်း အရေးကြီးပါတယ်။",

    objectives: [
      "Team Motivation Driver သိရန်",
      "Recognition System တည်ဆောက်ရန်",
      "Accountability တိုးရန်",
      "Low Performance ကို Handle လုပ်ရန်"
    ],

    sections: [
      {
        title: "Recognition",
        content:
          "Result ကောင်းရင် Public Recognition ပေးနိုင်သလို Improvement ရှိတဲ့ Team Member ကိုလည်း အသိအမှတ်ပြုနိုင်ပါတယ်။"
      },

      {
        title: "Accountability",
        content:
          "Expectation → Measurement → Review → Feedback → Consequence ဆိုတဲ့ System ရှိရပါမယ်။"
      }
    ],

    example:
      "Sales Rep တစ်ယောက်က Target မပြည့်ပေမယ့် Productive Call 40% ကနေ 80% အထိတိုးလာရင် Improvement ကို Recognize လုပ်ပြီး Result Gap အတွက် Coaching Plan ထပ်ပေးနိုင်ပါတယ်။",

    managerApplication:
      "Team Meeting မှာ Result ကောင်းသူကိုသာ မချီးကျူးဘဲ Best Improvement, Best Customer Service, Best Execution စတဲ့ Category များထားပါ။",

    checklist: [
      "Recognition ရှိပါသလား?",
      "Expectation ရှင်းပါသလား?",
      "Performance Review ရှိပါသလား?",
      "Development Opportunity ရှိပါသလား?"
    ],

    assignment:
      "Team အတွက် Monthly Recognition System တစ်ခုရေးဆွဲပါ။",

    takeaways: [
      "Motivation + Accountability နှစ်ခုလုံးလိုအပ်သည်။",
      "Recognize behavior you want repeated."
    ]
  },

  {
    id: 13,
    category: "Profit & Loss",
    course: "Business Strategy",
    title: "Break-even & Commercial Decision Making",
    duration: "25 min",

    summary:
      "Break-even ဆိုတာ Business က Profit မရသေးသော်လည်း Loss မဖြစ်တော့တဲ့ Sales Level ဖြစ်ပါတယ်။",

    objectives: [
      "Fixed Cost နားလည်ရန်",
      "Contribution Margin နားလည်ရန်",
      "Break-even Units တွက်ရန်",
      "Commercial Decision တွင် အသုံးချရန်"
    ],

    sections: [
      {
        title: "Break-even Formula",
        content:
          "Break-even Units = Fixed Costs ÷ Contribution per Unit ဖြစ်ပါတယ်။ Contribution per Unit = Selling Price − Variable Cost per Unit ဖြစ်ပါတယ်။"
      },

      {
        title: "Managerial Use",
        content:
          "New Product Launch, Promotion, Discount, Sales Incentive နဲ့ Distribution Expansion တို့မှာ Break-even Analysis က Decision Quality တိုးစေပါတယ်။"
      }
    ],

    example:
      "Fixed Cost = 10,000,000 MMK၊ Selling Price = 50,000 MMK၊ Variable Cost = 30,000 MMK ဆိုရင် Contribution = 20,000 MMK။ Break-even Units = 10,000,000 ÷ 20,000 = 500 Units ဖြစ်ပါတယ်။",

    managerApplication:
      "Promotion တစ်ခုလုပ်မယ်ဆိုရင် 'Sales တိုးမလား?' တစ်ခုတည်းမေးမယ့်အစား 'Incremental Profit ဘယ်လောက်ရမလဲ?' ကိုပါ စဉ်းစားပါ။",

    checklist: [
      "Fixed Cost သိပါသလား?",
      "Variable Cost သိပါသလား?",
      "Contribution သိပါသလား?",
      "Break-even Units သိပါသလား?"
    ],

    assignment:
      "Product တစ်ခုအတွက် Break-even Units ကို Calculator နဲ့တွက်ပါ။",

    takeaways: [
      "Revenue Growth ≠ Profit Growth",
      "Commercial Decision ကို Numbers နဲ့ Support လုပ်ပါ။"
    ]
  },

  {
    id: 14,
    category: "Goal Setting",
    course: "People & Leadership",
    title: "Manager ၏ 30-60-90 Day Action Plan",
    duration: "25 min",

    summary:
      "Manager အသစ်တစ်ယောက်အနေနဲ့ အစောပိုင်း 90 ရက်မှာ Quick Fix လုပ်တာထက် Business, People, Process ကို နားလည်ပြီး Sustainable Improvement Plan တည်ဆောက်သင့်ပါတယ်။",

    objectives: [
      "30-Day Diagnosis Plan တည်ဆောက်ရန်",
      "60-Day Improvement Plan တည်ဆောက်ရန်",
      "90-Day Growth Plan တည်ဆောက်ရန်",
      "Management Rhythm တည်ဆောက်ရန်"
    ],

    sections: [
      {
        title: "First 30 Days",
        content:
          "Business, Team, Customer, Market, Competitor, Process, KPI နဲ့ Culture ကို နားလည်ပါ။ အချက်အလက်မပြည့်ခင် အကြီးစားဆုံးဖြတ်ချက်တွေ မလုပ်သင့်ပါ။"
      },

      {
        title: "Day 31–60",
        content:
          "Quick Wins ကို Implement လုပ်ပါ။ KPI Improvement, Customer Coverage, Team Coaching, Process Improvement စတာတွေကို စတင်ပါ။"
      },

      {
        title: "Day 61–90",
        content:
          "Sustainable System တည်ဆောက်ပါ။ Dashboard, Review Rhythm, Team Development, Growth Strategy နဲ့ Long-term Action Plan ထားပါ။"
      }
    ],

    example:
      "Sales Manager အသစ်အနေနဲ့ ပထမ 30 ရက်မှာ Team Member တစ်ဦးချင်းစီနဲ့ One-on-One ပြုလုပ်ပြီး Territory, Customer, Target Gap, Strength/Weakness ကို သိအောင်လုပ်ပါ။",

    managerApplication:
      "30-60-90 Plan ကို Manager ကိုယ်တိုင်ရေးပြီး Team ကို Share လုပ်ပါ။ အပတ်စဉ် Progress Review ပြုလုပ်ပါ။",

    checklist: [
      "Business diagnosis ပြီးပြီလား?",
      "Team capability သိပြီလား?",
      "Top Customer သိပြီလား?",
      "Quick Win ရှာပြီးပြီလား?",
      "90-Day KPI သတ်မှတ်ပြီးပြီလား?"
    ],

    assignment:
      "သင့်အတွက် 30-60-90 Day Manager Action Plan တစ်ခုရေးပါ။",

    takeaways: [
      "30 Days = Understand",
      "60 Days = Improve",
      "90 Days = Scale"
    ]
  }

];

/* =========================================================
   STATE
   ========================================================= */

let currentPage = "dashboardPage";
let currentLessonIndex = 0;
let currentLessonFilter = "all";

let completedLessons =
  JSON.parse(
    localStorage.getItem("aba_completed_lessons") || "[]"
  );

let salesData =
  JSON.parse(
    localStorage.getItem("aba_sales_manager_v1") || "null"
  );

if (!salesData) {
  salesData = {
    target: 30000000,
    actual: 22500000,
    workingDays: 26,
    month: new Date().toISOString().slice(0, 7),

    team: [
      {
        id: 1,
        name: "Aung",
        role: "Sales Executive",
        target: 10000000,
        actual: 8500000
      },
      {
        id: 2,
        name: "Mg Mg",
        role: "Sales Executive",
        target: 10000000,
        actual: 7000000
      },
      {
        id: 3,
        name: "Ko Ko",
        role: "Sales Executive",
        target: 10000000,
        actual: 7000000
      }
    ],

    actions: [
      {
        id: 1,
        title: "Top 10 Customers Visit",
        detail: "High-value customers ကို visit လုပ်ပြီး order opportunity ရှာရန်",
        done: false
      },
      {
        id: 2,
        title: "Distributor Stock Review",
        detail: "Stock availability နှင့် fast-moving products ကို စစ်ရန်",
        done: false
      },
      {
        id: 3,
        title: "Underperformer Coaching",
        detail: "Low achievement team members အတွက် coaching session လုပ်ရန်",
        done: false
      }
    ]
  };

  saveSalesData();
}

/* =========================================================
   NAVIGATION
   ========================================================= */

function navigate(pageId) {

  const pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.remove("active");
  });

  const target = $(pageId);

  if (target) {
    target.classList.add("active");
  }

  document
    .querySelectorAll(".nav-item")
    .forEach(item => {

      item.classList.toggle(
        "active",
        item.dataset.page === pageId
      );

    });

  currentPage = pageId;

  updatePageTitle(pageId);

  if (pageId === "dashboardPage") {
    updateDashboardStats();
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
      "သင့် Business Knowledge ကို တစ်ဆင့်ချင်းတိုးတက်အောင်လုပ်ပါ"
    ],

    coursesPage: [
      "My Courses",
      "Structured Business Learning"
    ],

    lessonsPage: [
      "Lessons",
      "Detailed Burmese Business Lessons"
    ],

    progressPage: [
      "My Progress",
      "Your learning development"
    ],

    salesPage: [
      "Sales Manager",
      "Target → Actual → Gap → Action"
    ],

    calculatorPage: [
      "Business Calculators",
      "Commercial decision tools"
    ],

    reportsPage: [
      "Reports",
      "Business intelligence"
    ],

    aiPage: [
      "AI Business Coach",
      "Detailed business coaching"
    ],

    toolsPage: [
      "AI Tools",
      "Business productivity tools"
    ],

    settingsPage: [
      "Settings",
      "Academy preferences"
    ]
  };

  const title = titles[pageId] || titles.dashboardPage;

  $("pageTitle").textContent = title[0];
  $("pageSubtitle").textContent = title[1];
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

  const nextIndex =
    LESSONS.findIndex(
      lesson => !completedLessons.includes(lesson.id)
    );

  currentLessonIndex =
    nextIndex >= 0 ? nextIndex : 0;

  navigate("lessonsPage");

  setTimeout(() => {
    openLesson(currentLessonIndex);
  }, 100);
}

function openBusinessPlan() {
  navigate("salesPage");
}

function updateDashboardStats() {

  $("statCourses").textContent = COURSES.length;

  $("statLessons").textContent = LESSONS.length;

  $("statCompleted").textContent =
    completedLessons.length;

  const progress =
    Math.round(
      (completedLessons.length / LESSONS.length) * 100
    );

  $("statProgress").textContent =
    `${progress}%`;

  const bar = $("dashboardProgressBar");

  if (bar) {
    bar.style.width = `${progress}%`;
  }

  const text = $("dashboardProgressText");

  if (text) {
    text.textContent =
      `${progress}% completed`;
  }

  const circle = $("dailyCircle");

  if (circle) {

    const daily =
      Math.min(
        100,
        completedLessons.length * 8
      );

    circle.parentElement.style.background =
      `conic-gradient(
        var(--primary) ${daily}%,
        #eeeef5 ${daily}%
      )`;

    circle.textContent =
      `${daily}%`;
  }

  if ($("dailyMinutes")) {
    $("dailyMinutes").textContent =
      Math.min(
        30,
        completedLessons.length * 5
      );
  }
}

/* =========================================================
   COURSES
   ========================================================= */

function renderCourses() {

  const container = $("coursesContainer");

  if (!container) return;

  container.innerHTML =
    COURSES.map(course => {

      const progress =
        courseProgress(course);

      return `
        <div class="course-card">

          <div class="course-card-top">

            <div class="course-card-icon">
              ${course.icon}
            </div>

            <div>
              <h3>${escapeHTML(course.title)}</h3>
              <p>${escapeHTML(course.description)}</p>
            </div>

          </div>

          <div class="course-meta">
            <span>📚 ${course.lessons} Lessons</span>
            <span>📈 ${progress}% Complete</span>
          </div>

          <div class="progress-line">
            <span style="width:${progress}%"></span>
          </div>

          <br>

          <button
            class="primary-btn"
            onclick="openCourse('${course.id}')"
          >
            Start Course →
          </button>

        </div>
      `;

    }).join("");
}

function courseProgress(course) {

  const courseLessons =
    LESSONS.filter(
      lesson => lesson.course === course.title
    );

  if (!courseLessons.length) return 0;

  const completed =
    courseLessons.filter(
      lesson => completedLessons.includes(lesson.id)
    ).length;

  return Math.round(
    (completed / courseLessons.length) * 100
  );
}

function openCourse(courseId) {

  const course =
    COURSES.find(
      item => item.id === courseId
    );

  if (!course) return;

  navigate("lessonsPage");

  currentLessonFilter =
    course.title;

  renderLessons();
}

/* =========================================================
   LESSONS
   ========================================================= */

function renderLessons() {

  const container = $("lessonsContainer");

  if (!container) return;

  let lessons = LESSONS;

  if (
    currentLessonFilter !== "all"
  ) {

    if (
      COURSES.some(
        course =>
          course.title === currentLessonFilter
      )
    ) {

      lessons =
        LESSONS.filter(
          lesson =>
            lesson.course === currentLessonFilter
        );

    } else {

      lessons =
        LESSONS.filter(
          lesson =>
            lesson.category === currentLessonFilter
        );
    }
  }

  container.innerHTML =
    lessons.map((lesson) => {

      const index =
        LESSONS.findIndex(
          item => item.id === lesson.id
        );

      const done =
        completedLessons.includes(
          lesson.id
        );

      return `
        <div class="lesson-card">

          <span class="lesson-number">
            LESSON ${String(lesson.id).padStart(2, "0")}
          </span>

          <h3>
            ${escapeHTML(lesson.title)}
          </h3>

          <p>
            ${escapeHTML(lesson.summary)}
          </p>

          <div class="lesson-meta">
            <span>⏱ ${lesson.duration}</span>

            ${
              done
              ? `<span class="lesson-completed">✓ Completed</span>`
              : `<span>${escapeHTML(lesson.category)}</span>`
            }

          </div>

          <button
            class="primary-btn"
            onclick="openLesson(${index})"
          >
            ${done ? "Review Lesson" : "Start Lesson"}
          </button>

        </div>
      `;

    }).join("");
}

function filterLessons(category, button) {

  currentLessonFilter = category;

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

function openCategory(category) {

  currentLessonFilter = category;

  navigate("lessonsPage");

  setTimeout(() => {

    document
      .querySelectorAll(".filter-btn")
      .forEach(btn => {

        btn.classList.toggle(
          "active",
          btn.textContent.trim() === category ||
          (
            category === "Sales Basics" &&
            btn.textContent.trim() === "Sales"
          ) ||
          (
            category === "Strategic Thinking" &&
            btn.textContent.trim() === "Strategy"
          ) ||
          (
            category === "People Management" &&
            btn.textContent.trim() === "People"
          ) ||
          (
            category === "Profit & Loss" &&
            btn.textContent.trim() === "Finance"
          )
        );

      });

    renderLessons();

  }, 50);
}

function openLessonById(id) {

  const index =
    LESSONS.findIndex(
      lesson => lesson.id === id
    );

  if (index >= 0) {
    openLesson(index);
  }
}

function openLesson(index) {

  currentLessonIndex = index;

  const lesson =
    LESSONS[index];

  if (!lesson) return;

  const done =
    completedLessons.includes(
      lesson.id
    );

  const sectionsHTML =
    lesson.sections
      .map(section => `
        <div class="detail-section">

          <h3>
            ${escapeHTML(section.title)}
          </h3>

          <p>
            ${escapeHTML(section.content)}
          </p>

        </div>
      `)
      .join("");

  const objectivesHTML =
    lesson.objectives
      .map(item => `
        <li>${escapeHTML(item)}</li>
      `)
      .join("");

  const checklistHTML =
    lesson.checklist
      .map(item => `
        <li>☐ ${escapeHTML(item)}</li>
      `)
      .join("");

  const takeawaysHTML =
    lesson.takeaways
      .map(item => `
        <li>${escapeHTML(item)}</li>
      `)
      .join("");

  openModal(`

    <div class="lesson-detail-head">

      <span class="category">
        ${escapeHTML(lesson.category)}
      </span>

      <h2>
        ${escapeHTML(lesson.title)}
      </h2>

      <p>
        ⏱ ${lesson.duration}
        &nbsp; • &nbsp;
        ${done ? "✓ Completed" : "In Progress"}
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
        ${objectivesHTML}
      </ul>

    </div>

    ${sectionsHTML}

    <div class="detail-section">

      <h3>💼 Real Business Example</h3>

      <div class="example-box">
        ${escapeHTML(lesson.example)}
      </div>

    </div>

    <div class="detail-section">

      <h3>👨‍💼 Manager Application</h3>

      <p>
        ${escapeHTML(lesson.managerApplication)}
      </p>

    </div>

    <div class="detail-section">

      <h3>✅ Manager Checklist</h3>

      <ul>
        ${checklistHTML}
      </ul>

    </div>

    <div class="detail-section">

      <h3>📝 Practical Assignment</h3>

      <div class="assignment-box">
        ${escapeHTML(lesson.assignment)}
      </div>

    </div>

    <div class="detail-section">

      <h3>⭐ Key Takeaways</h3>

      <div class="takeaway-box">
        <ul>
          ${takeawaysHTML}
        </ul>
      </div>

    </div>

    <div class="lesson-navigation">

      <button
        class="secondary-btn"
        onclick="previousLesson()"
        ${index === 0 ? "disabled" : ""}
      >
        ← Previous
      </button>

      <button
        class="primary-btn"
        onclick="completeLesson()"
      >
        ${done ? "✓ Completed" : "Mark as Completed"}
      </button>

      <button
        class="secondary-btn"
        onclick="nextLesson()"
        ${index === LESSONS.length - 1 ? "disabled" : ""}
      >
        Next →
      </button>

    </div>

  `);
}

function completeLesson() {

  const lesson =
    LESSONS[currentLessonIndex];

  if (!lesson) return;

  if (
    !completedLessons.includes(
      lesson.id
    )
  ) {

    completedLessons.push(
      lesson.id
    );

    localStorage.setItem(
      "aba_completed_lessons",
      JSON.stringify(
        completedLessons
      )
    );

    showToast(
      "Lesson completed successfully ✓"
    );

  } else {

    showToast(
      "ဒီ Lesson ကို ပြီးဆုံးထားပြီးပါပြီ။"
    );
  }

  updateDashboardStats();

  renderLessons();

  renderProgress();

  setTimeout(() => {

    if (
      currentLessonIndex <
      LESSONS.length - 1
    ) {

      nextLesson();

    } else {

      closeModal();
    }

  }, 500);
}

function previousLesson() {

  if (
    currentLessonIndex <= 0
  ) return;

  currentLessonIndex--;

  openLesson(
    currentLessonIndex
  );
}

function nextLesson() {

  if (
    currentLessonIndex >=
    LESSONS.length - 1
  ) {

    closeModal();

    showToast(
      "All lessons completed 🎉"
    );

    return;
  }

  currentLessonIndex++;

  openLesson(
    currentLessonIndex
  );
}

/* =========================================================
   PROGRESS
   ========================================================= */

function renderProgress() {

  const completed =
    completedLessons.length;

  const percentage =
    Math.round(
      (completed / LESSONS.length) * 100
    );

  if ($("overallProgress")) {
    $("overallProgress").textContent =
      `${percentage}%`;
  }

  if ($("overallProgressBar")) {
    $("overallProgressBar").style.width =
      `${percentage}%`;
  }

  if ($("progressCompleted")) {
    $("progressCompleted").textContent =
      completed;
  }

  if ($("progressSummary")) {

    $("progressSummary").textContent =
      `Lesson ${completed} ခု ပြီးဆုံးထားပြီး ${
        LESSONS.length - completed
      } ခု ကျန်ရှိပါတယ်။`;

  }

  const list =
    $("progressLessonList");

  if (!list) return;

  list.innerHTML =
    LESSONS.map(
      lesson => {

        const done =
          completedLessons.includes(
            lesson.id
          );

        return `
          <div class="action-item ${
            done ? "completed" : ""
          }">

            <button
              class="action-check"
              onclick="openLessonById(${lesson.id})"
            >
              ${done ? "✓" : "→"}
            </button>

            <div class="action-content">

              <div class="action-title">
                Lesson ${lesson.id} —
                ${escapeHTML(lesson.title)}
              </div>

              <div class="action-detail">
                ${done ? "Completed" : "Not completed"}
              </div>

            </div>

          </div>
        `;
      }
    ).join("");
}

/* =========================================================
   SALES MANAGER
   ========================================================= */

function saveSalesData() {

  localStorage.setItem(
    "aba_sales_manager_v1",
    JSON.stringify(salesData)
  );
}

function renderSales() {

  const target =
    Number(salesData.target) || 0;

  const actual =
    Number(salesData.actual) || 0;

  const workingDays =
    Number(salesData.workingDays) || 1;

  const achievement =
    target > 0
      ? (actual / target) * 100
      : 0;

  const gap =
    Math.max(
      target - actual,
      0
    );

  const dailyTarget =
    target / workingDays;

  $("salesTargetDisplay").textContent =
    formatMoney(target);

  $("salesActualDisplay").textContent =
    formatMoney(actual);

  $("salesAchievementDisplay").textContent =
    `${achievement.toFixed(1)}%`;

  $("salesGapDisplay").textContent =
    formatMoney(gap);

  $("salesDailyTargetDisplay").textContent =
    formatMoney(dailyTarget);

  if ($("salesTargetInput")) {
    $("salesTargetInput").value =
      target;
  }

  if ($("salesActualInput")) {
    $("salesActualInput").value =
      actual;
  }

  if ($("workingDaysInput")) {
    $("workingDaysInput").value =
      workingDays;
  }

  if ($("salesMonthInput")) {
    $("salesMonthInput").value =
      salesData.month;
  }

  renderTeam();

  renderActionPlans();
}

function saveSalesKPI(event) {

  event.preventDefault();

  salesData.target =
    Number(
      $("salesTargetInput").value
    ) || 0;

  salesData.actual =
    Number(
      $("salesActualInput").value
    ) || 0;

  salesData.workingDays =
    Number(
      $("workingDaysInput").value
    ) || 1;

  salesData.month =
    $("salesMonthInput").value;

  saveSalesData();

  renderSales();

  showToast(
    "Sales KPI saved successfully ✓"
  );
}

function renderTeam() {

  const tbody =
    $("teamTableBody");

  if (!tbody) return;

  tbody.innerHTML =
    salesData.team.map(member => {

      const target =
        Number(member.target) || 0;

      const actual =
        Number(member.actual) || 0;

      const achievement =
        target > 0
          ? (actual / target) * 100
          : 0;

      let statusClass =
        "status-danger";

      let statusText =
        "Needs Action";

      if (achievement >= 100) {

        statusClass =
          "status-good";

        statusText =
          "Excellent";

      } else if (achievement >= 80) {

        statusClass =
          "status-warning";

        statusText =
          "Watch";

      }

      return `
        <tr>

          <td>
            <strong>
              ${escapeHTML(member.name)}
            </strong>
          </td>

          <td>
            ${escapeHTML(member.role)}
          </td>

          <td>
            ${formatMoney(target)}
          </td>

          <td>
            ${formatMoney(actual)}
          </td>

          <td>
            <strong>
              ${achievement.toFixed(1)}%
            </strong>
          </td>

          <td>
            <span class="status-badge ${statusClass}">
              ${statusText}
            </span>
          </td>

          <td>
            <button
              class="action-delete"
              onclick="removeTeamMember(${member.id})"
            >
              ×
            </button>
          </td>

        </tr>
      `;

    }).join("");
}

function addTeamMember() {

  const name =
    prompt(
      "Team Member Name:"
    );

  if (!name) return;

  const role =
    prompt(
      "Role:",
      "Sales Executive"
    ) || "Sales Executive";

  const target =
    Number(
      prompt(
        "Monthly Target (MMK):",
        "10000000"
      )
    ) || 0;

  const actual =
    Number(
      prompt(
        "Actual Sales (MMK):",
        "0"
      )
    ) || 0;

  salesData.team.push({

    id: Date.now(),

    name,

    role,

    target,

    actual

  });

  saveSalesData();

  renderTeam();

  showToast(
    "Team member added ✓"
  );
}

function removeTeamMember(id) {

  if (
    !confirm(
      "ဒီ Team Member ကို ဖျက်မလား?"
    )
  ) return;

  salesData.team =
    salesData.team.filter(
      member =>
        member.id !== id
    );

  saveSalesData();

  renderTeam();

  showToast(
    "Team member removed"
  );
}

/* =========================================================
   ACTION PLAN
   ========================================================= */

function renderActionPlans() {

  const container =
    $("actionPlanList");

  if (!container) return;

  container.innerHTML =
    salesData.actions.map(
      action => {

        return `
          <div class="action-item ${
            action.done
              ? "completed"
              : ""
          }">

            <button
              class="action-check"
              onclick="toggleActionPlan(${action.id})"
            >
              ${action.done ? "✓" : ""}
            </button>

            <div class="action-content">

              <div class="action-title">
                ${escapeHTML(action.title)}
              </div>

              <div class="action-detail">
                ${escapeHTML(action.detail)}
              </div>

            </div>

            <button
              class="action-delete"
              onclick="deleteActionPlan(${action.id})"
            >
              ×
            </button>

          </div>
        `;
      }
    ).join("");
}

function addActionPlan() {

  const title =
    prompt(
      "Action Title:"
    );

  if (!title) return;

  const detail =
    prompt(
      "Action Detail:"
    ) || "";

  salesData.actions.push({

    id: Date.now(),

    title,

    detail,

    done: false

  });

  saveSalesData();

  renderActionPlans();

  showToast(
    "Action plan added ✓"
  );
}

function toggleActionPlan(id) {

  const action =
    salesData.actions.find(
      item =>
        item.id === id
    );

  if (!action) return;

  action.done =
    !action.done;

  saveSalesData();

  renderActionPlans();
}

function deleteActionPlan(id) {

  salesData.actions =
    salesData.actions.filter(
      action =>
        action.id !== id
    );

  saveSalesData();

  renderActionPlans();
}

function resetSalesData() {

  if (
    !confirm(
      "Sales Manager data အားလုံးကို Reset လုပ်မလား?"
    )
  ) return;

  localStorage.removeItem(
    "aba_sales_manager_v1"
  );

  location.reload();
}

function exportSalesReport() {

  const target =
    Number(salesData.target) || 0;

  const actual =
    Number(salesData.actual) || 0;

  const achievement =
    target > 0
      ? (actual / target) * 100
      : 0;

  const gap =
    Math.max(
      target - actual,
      0
    );

  let csv =
`Aung Business Academy - Sales Manager Report

Month,${salesData.month}
Monthly Target,${target}
Actual Sales,${actual}
Achievement %,${achievement.toFixed(2)}
Gap,${gap}

Team Member,Role,Target,Actual,Achievement
`;

  salesData.team.forEach(
    member => {

      const memberAchievement =
        member.target > 0
          ? (
              member.actual /
              member.target
            ) * 100
          : 0;

      csv +=
`${member.name},${member.role},${member.target},${member.actual},${memberAchievement.toFixed(2)}%
`;

    }
  );

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
    `sales-report-${salesData.month || "report"}.csv`;

  link.click();

  URL.revokeObjectURL(url);

  showToast(
    "Sales report exported ✓"
  );
}

/* =========================================================
   CALCULATORS
   ========================================================= */

function openProfitCalculator() {

  openModal(`

    <div class="lesson-detail-head">
      <span class="category">
        BUSINESS FINANCE
      </span>

      <h2>💰 Profit Calculator</h2>

      <p>
        Revenue နှင့် Cost မှ Gross Profit တွက်ပါ။
      </p>
    </div>

    <div class="form-grid">

      <div class="form-group">
        <label>Total Revenue</label>
        <input
          type="number"
          id="profitRevenue"
          placeholder="10000000"
        >
      </div>

      <div class="form-group">
        <label>Total Cost</label>
        <input
          type="number"
          id="profitCost"
          placeholder="7000000"
        >
      </div>

    </div>

    <button
      class="primary-btn"
      onclick="calculateProfitTool()"
    >
      Calculate
    </button>

    <div
      id="profitResult"
      class="takeaway-box"
      style="margin-top:20px"
    >
      Revenue နှင့် Cost ထည့်ပြီး Calculate နှိပ်ပါ။
    </div>

  `);
}

function calculateProfitTool() {

  const revenue =
    Number(
      $("profitRevenue").value
    ) || 0;

  const cost =
    Number(
      $("profitCost").value
    ) || 0;

  const profit =
    revenue - cost;

  const margin =
    revenue > 0
      ? (profit / revenue) * 100
      : 0;

  $("profitResult").innerHTML =
`
<strong>Gross Profit:</strong>
${formatMoney(profit)} MMK
<br><br>
<strong>Gross Margin:</strong>
${margin.toFixed(2)}%
`;
}

function openPricingCalculator() {

  openModal(`

    <div class="lesson-detail-head">

      <span class="category">
        PRICING
      </span>

      <h2>🏷️ Pricing Calculator</h2>

      <p>
        Cost နဲ့ Desired Margin အပေါ်မူတည်ပြီး Selling Price တွက်ပါ။
      </p>

    </div>

    <div class="form-grid">

      <div class="form-group">
        <label>Cost</label>
        <input
          type="number"
          id="pricingCost"
          placeholder="70000"
        >
      </div>

      <div class="form-group">
        <label>Desired Margin %</label>
        <input
          type="number"
          id="pricingMargin"
          placeholder="30"
        >
      </div>

    </div>

    <button
      class="primary-btn"
      onclick="calculatePricingTool()"
    >
      Calculate Selling Price
    </button>

    <div
      id="pricingResult"
      class="takeaway-box"
      style="margin-top:20px"
    >
      Cost နှင့် Margin ထည့်ပါ။
    </div>

  `);
}

function calculatePricingTool() {

  const cost =
    Number(
      $("pricingCost").value
    ) || 0;

  const margin =
    Number(
      $("pricingMargin").value
    ) || 0;

  if (margin >= 100) {

    $("pricingResult").innerHTML =
      "Margin % သည် 100 ထက်နည်းရပါမည်။";

    return;
  }

  const price =
    cost /
    (1 - margin / 100);

  $("pricingResult").innerHTML =
`
<strong>Recommended Selling Price:</strong>
${formatMoney(price)} MMK

<br><br>

<strong>Expected Profit:</strong>
${formatMoney(price - cost)} MMK
`;
}

function openBreakEvenCalculator() {

  openModal(`

    <div class="lesson-detail-head">

      <span class="category">
        COMMERCIAL FINANCE
      </span>

      <h2>⚖️ Break-even Calculator</h2>

      <p>
        Fixed Cost, Selling Price နှင့် Variable Cost မှ
        Break-even Units တွက်ပါ။
      </p>

    </div>

    <div class="form-grid">

      <div class="form-group">
        <label>Fixed Cost</label>
        <input
          type="number"
          id="beFixed"
          placeholder="10000000"
        >
      </div>

      <div class="form-group">
        <label>Selling Price / Unit</label>
        <input
          type="number"
          id="bePrice"
          placeholder="50000"
        >
      </div>

      <div class="form-group">
        <label>Variable Cost / Unit</label>
        <input
          type="number"
          id="beVariable"
          placeholder="30000"
        >
      </div>

    </div>

    <button
      class="primary-btn"
      onclick="calculateBreakEven()"
    >
      Calculate
    </button>

    <div
      id="beResult"
      class="takeaway-box"
      style="margin-top:20px"
    >
      Information ထည့်ပါ။
    </div>

  `);
}

function calculateBreakEven() {

  const fixed =
    Number(
      $("beFixed").value
    ) || 0;

  const price =
    Number(
      $("bePrice").value
    ) || 0;

  const variable =
    Number(
      $("beVariable").value
    ) || 0;

  const contribution =
    price - variable;

  if (
    contribution <= 0
  ) {

    $("beResult").innerHTML =
      "Selling Price သည် Variable Cost ထက် မြင့်ရပါမည်။";

    return;
  }

  const units =
    fixed /
    contribution;

  const revenue =
    units * price;

  $("beResult").innerHTML =
`
<strong>Break-even Units:</strong>
${units.toFixed(0)} Units

<br><br>

<strong>Break-even Revenue:</strong>
${formatMoney(revenue)} MMK
`;
}

function openSalesTargetCalculator() {

  openModal(`

    <div class="lesson-detail-head">

      <span class="category">
        SALES MANAGEMENT
      </span>

      <h2>🎯 Sales Target Calculator</h2>

      <p>
        Monthly Target ကို Daily Target အဖြစ် ခွဲပါ။
      </p>

    </div>

    <div class="form-grid">

      <div class="form-group">
        <label>Monthly Target</label>
        <input
          type="number"
          id="targetMonthly"
          placeholder="30000000"
        >
      </div>

      <div class="form-group">
        <label>Working Days</label>
        <input
          type="number"
          id="targetDays"
          placeholder="26"
        >
      </div>

    </div>

    <button
      class="primary-btn"
      onclick="calculateSalesTarget()"
    >
      Calculate
    </button>

    <div
      id="targetResult"
      class="takeaway-box"
      style="margin-top:20px"
    >
      Information ထည့်ပါ။
    </div>

  `);
}

function calculateSalesTarget() {

  const monthly =
    Number(
      $("targetMonthly").value
    ) || 0;

  const days =
    Number(
      $("targetDays").value
    ) || 1;

  const daily =
    monthly / days;

  const weekly =
    daily * 6;

  $("targetResult").innerHTML =
`
<strong>Daily Target:</strong>
${formatMoney(daily)} MMK

<br><br>

<strong>Approx. 6-Day Weekly Target:</strong>
${formatMoney(weekly)} MMK
`;
}

/* =========================================================
   AI BUSINESS COACH
   ========================================================= */

function sendAIMessage(event) {

  event.preventDefault();

  const input =
    $("aiInput");

  const question =
    input.value.trim();

  if (!question) return;

  addUserMessage(question);

  input.value = "";

  setTimeout(() => {

    const response =
      getAIResponse(question);

    addBotMessage(response);

  }, 350);
}

function askQuickQuestion(question) {

  $("aiInput").value =
    question;

  sendAIMessage(
    new Event("submit")
  );
}

function addUserMessage(text) {

  const chat =
    $("chatMessages");

  const div =
    document.createElement("div");

  div.className =
    "chat-message user";

  div.innerHTML =
`
    <div class="message-content">
      ${escapeHTML(text)}
    </div>
`;

  chat.appendChild(div);

  chat.scrollTop =
    chat.scrollHeight;
}

function addBotMessage(html) {

  const chat =
    $("chatMessages");

  const div =
    document.createElement("div");

  div.className =
    "chat-message bot";

  div.innerHTML =
`
    <div class="message-avatar">
      🤖
    </div>

    <div class="message-content">

      <strong>
        AI Business Coach
      </strong>

      ${html}

    </div>
`;

  chat.appendChild(div);

  chat.scrollTop =
    chat.scrollHeight;
}

function getAIResponse(question) {

  const q =
    question.toLowerCase();

  /* TARGET */

  if (
    q.includes("target") ||
    q.includes("မပြည့်") ||
    q.includes("sales ကျ") ||
    q.includes("achievement")
  ) {

    return `
      <p>
        Sales Target မပြည့်တဲ့အခါ
        အရင်ဆုံး Team ကို အပြစ်မတင်ဘဲ
        <b>Gap → Root Cause → Action → Follow-up</b>
        Framework နဲ့ သုံးသပ်သင့်ပါတယ်။
      </p>

      <h4>1. Gap ကိုတွက်ပါ</h4>

      <ul>
        <li>Target ဘယ်လောက်လဲ?</li>
        <li>Actual ဘယ်လောက်လဲ?</li>
        <li>Achievement % ဘယ်လောက်လဲ?</li>
        <li>Gap ဘယ်လောက်လဲ?</li>
        <li>Remaining Days ဘယ်လောက်လဲ?</li>
      </ul>

      <h4>2. Root Cause ခွဲပါ</h4>

      <ul>
        <li>Customer Order ကျသလား?</li>
        <li>Stock Availability ပြဿနာလား?</li>
        <li>Competitor Activity ကြောင့်လား?</li>
        <li>Price / Discount Issue လား?</li>
        <li>Sales Rep Productivity ကျနေလား?</li>
        <li>Distribution Coverage မပြည့်လား?</li>
      </ul>

      <h4>3. Recovery Action</h4>

      <ol>
        <li>Top Customers ကို Priority Visit လုပ်ပါ။</li>
        <li>High-value orders ကို Follow-up လုပ်ပါ။</li>
        <li>Distributor Stock ကို စစ်ပါ။</li>
        <li>Underperformer ကို Coaching လုပ်ပါ။</li>
        <li>Remaining Gap ကို Daily Recovery Target အဖြစ် ခွဲပါ။</li>
      </ol>

      <h4>4. Manager KPI</h4>

      <ul>
        <li>Achievement %</li>
        <li>Daily Sales</li>
        <li>Productive Calls</li>
        <li>New Customers</li>
        <li>Distribution Coverage</li>
      </ul>

      <div class="takeaway-box">
        <b>Manager Rule:</b>
        Target မပြည့်တာကို နောက်ဆုံးရက်မှ မသိပါနဲ့။
        Weekly / Daily Run-rate နဲ့ စောစော Detect လုပ်ပါ။
      </div>
    `;
  }

  /* TEAM */

  if (
    q.includes("team") ||
    q.includes("performance") ||
    q.includes("ဝန်ထမ်း") ||
    q.includes("staff")
  ) {

    return `
      <p>
        Team Performance တိုးဖို့
        <b>Clear Expectation + KPI + Coaching + Accountability</b>
        လိုအပ်ပါတယ်။
      </p>

      <h4>1. People ကို Diagnose လုပ်ပါ</h4>

      <ul>
        <li>ဘယ်သူက Target ပြည့်သလဲ?</li>
        <li>ဘယ်သူက Underperform လုပ်နေလဲ?</li>
        <li>Skill Gap လား?</li>
        <li>Will / Motivation Gap လား?</li>
        <li>Territory / Customer Problem လား?</li>
      </ul>

      <h4>2. Coaching Framework</h4>

      <ol>
        <li>What is the current performance?</li>
        <li>What is the gap?</li>
        <li>Why is the gap happening?</li>
        <li>What action will you take?</li>
        <li>When will we review?</li>
      </ol>

      <h4>3. Manager က မလုပ်သင့်တာ</h4>

      <ul>
        <li>Micromanagement</li>
        <li>Public blaming</li>
        <li>Unclear instructions</li>
        <li>Only result ကိုကြည့်ခြင်း</li>
      </ul>

      <div class="example-box">
        <b>Practical Example:</b><br>
        Sales Rep Achievement 65% ဖြစ်နေရင်
        "Target မပြည့်ဘူး" လို့ပဲ မပြောပါနဲ့။
        Calls, Conversion, Average Order Value,
        Customer Coverage နဲ့ Territory Potential ကို
        ခွဲပြီး Coaching လုပ်ပါ။
      </div>
    `;
  }

  /* DISTRIBUTOR */

  if (
    q.includes("distributor") ||
    q.includes("ဖြန့်") ||
    q.includes("distribution")
  ) {

    return `
      <p>
        Distributor Sales ကျသွားရင်
        Secondary Sales, Stock, Coverage, Collection နဲ့
        Market Execution ကို ခွဲပြီး Analyze လုပ်သင့်ပါတယ်။
      </p>

      <h4>Analysis Framework</h4>

      <ol>
        <li>
          <b>Stock:</b>
          Distributor မှာ Stock လုံလောက်သလား?
        </li>

        <li>
          <b>Secondary Sales:</b>
          Market ထဲမှာ Consumer / Outlet Demand ရှိသလား?
        </li>

        <li>
          <b>Coverage:</b>
          Outlet Coverage ကျသလား?
        </li>

        <li>
          <b>Competitor:</b>
          Competitor Promotion / Price / Availability ရှိသလား?
        </li>

        <li>
          <b>People:</b>
          Sales Rep Productivity ကျသလား?
        </li>

        <li>
          <b>Collection:</b>
          Credit / AR Issue ရှိသလား?
        </li>
      </ol>

      <h4>Action Plan</h4>

      <ul>
        <li>Distributor Joint Visit</li>
        <li>Stock Aging Review</li>
        <li>Top Outlet Visit</li>
        <li>Competitor Price Check</li>
        <li>Coverage Recovery Plan</li>
        <li>Weekly Distributor Review</li>
      </ul>

      <div class="takeaway-box">
        Distributor Sales ကျတာကို Order တင်ပေးဖို့နဲ့ပဲ မဖြေရှင်းပါနဲ့။
        Market Demand နဲ့ Secondary Movement ကိုပါ စစ်ပါ။
      </div>
    `;
  }

  /* MARGIN */

  if (
    q.includes("margin") ||
    q.includes("အမြတ်") ||
    q.includes("profit") ||
    q.includes("gross")
  ) {

    return `
      <p>
        Gross Margin ကိုနားလည်ဖို့
        Revenue, COGS နဲ့ Gross Profit သုံးခုကို
        အရင်သိရပါမယ်။
      </p>

      <h4>Formula</h4>

      <div class="example-box">
        Gross Profit = Revenue − COGS
        <br><br>
        Gross Margin % =
        Gross Profit ÷ Revenue × 100
      </div>

      <h4>Example</h4>

      <p>
        Revenue = 10,000,000 MMK
        <br>
        COGS = 7,000,000 MMK
        <br>
        Gross Profit = 3,000,000 MMK
        <br>
        Gross Margin = 30%
      </p>

      <h4>Managerial Meaning</h4>

      <ul>
        <li>Revenue တိုးသော်လည်း Margin ကျနိုင်သည်။</li>
        <li>Discount များလွန်းရင် Margin ထိခိုက်နိုင်သည်။</li>
        <li>Product Mix က Margin ကို ပြောင်းနိုင်သည်။</li>
        <li>Sales Decision တွင် Profitability ပါ ထည့်စဉ်းစားရမည်။</li>
      </ul>
    `;
  }

  /* INTERVIEW */

  if (
    q.includes("interview") ||
    q.includes("အင်တာဗျူး") ||
    q.includes("manager interview")
  ) {

    return `
      <p>
        Sales Manager Interview အတွက်
        <b>People + Numbers + Execution</b>
        Framework ကို အဓိကထားပြင်ဆင်ပါ။
      </p>

      <h4>1. Your Strength</h4>

      <p>
        "My biggest strength is my ability to convert
        sales targets into practical field execution."
      </p>

      <h4>2. Leadership Style</h4>

      <p>
        "My leadership style is coaching and empowerment.
        I set clear expectations, provide direction,
        monitor performance and develop people."
      </p>

      <h4>3. Target မပြည့်ရင်?</h4>

      <ol>
        <li>Analyze the gap.</li>
        <li>Identify root causes.</li>
        <li>Coach the team.</li>
        <li>Build recovery actions.</li>
        <li>Monitor daily execution.</li>
      </ol>

      <h4>4. Interview Formula</h4>

      <div class="takeaway-box">
        Situation → Action → Result → Learning
      </div>
    `;
  }

  /* MARKETING */

  if (
    q.includes("marketing") ||
    q.includes("brand") ||
    q.includes("customer")
  ) {

    return `
      <p>
        Marketing Problem ကို ဖြေရှင်းရာမှာ
        Customer ကို အရင်နားလည်ပြီးမှ Product / Message / Channel
        ကို ဆုံးဖြတ်သင့်ပါတယ်။
      </p>

      <h4>Customer Analysis</h4>

      <ul>
        <li>Who is the target customer?</li>
        <li>What problem do they have?</li>
        <li>What do they value?</li>
        <li>Who is the competitor?</li>
        <li>Why should they choose us?</li>
      </ul>

      <h4>Marketing Action</h4>

      <ol>
        <li>Define target segment.</li>
        <li>Define customer pain point.</li>
        <li>Create value proposition.</li>
        <li>Select channel.</li>
        <li>Measure conversion.</li>
      </ol>

      <div class="example-box">
        Product Feature ကိုပဲ မပြောဘဲ
        Customer Benefit ကို ပြောပါ။
        Feature = ဘာရှိလဲ။
        Benefit = Customer အတွက် ဘာအကျိုးရှိလဲ။
      </div>
    `;
  }

  /* STRATEGY */

  if (
    q.includes("strategy") ||
    q.includes("business plan") ||
    q.includes("မဟာဗျူဟာ")
  ) {

    return `
      <p>
        Business Strategy တည်ဆောက်ရာမှာ
        <b>Where are we → Where do we want to go →
        How will we get there?</b>
        ဆိုတဲ့ Framework ကိုသုံးနိုင်ပါတယ်။
      </p>

      <h4>Step 1 — Current Position</h4>

      <ul>
        <li>Revenue</li>
        <li>Market Share</li>
        <li>Customer Base</li>
        <li>Product Mix</li>
        <li>Competitor Position</li>
      </ul>

      <h4>Step 2 — Desired Position</h4>

      <ul>
        <li>Revenue Goal</li>
        <li>Market Growth</li>
        <li>Customer Growth</li>
        <li>Profit Target</li>
      </ul>

      <h4>Step 3 — Strategic Actions</h4>

      <ol>
        <li>Customer Strategy</li>
        <li>Product Strategy</li>
        <li>Pricing Strategy</li>
        <li>Channel Strategy</li>
        <li>People Strategy</li>
      </ol>

      <div class="takeaway-box">
        Strategy ဆိုတာ အရာအားလုံးလုပ်ခြင်းမဟုတ်ပါဘူး။
        အရေးကြီးဆုံးအရာကို ရွေးပြီး Resource ကို အဲဒီနေရာမှာ
        Concentrate လုပ်ခြင်းဖြစ်ပါတယ်။
      </div>
    `;
  }

  /* DEFAULT */

  return `
    <p>
      ဒီမေးခွန်းကို Business Manager Framework နဲ့
      ဖြေရှင်းမယ်ဆိုရင် အောက်ပါအဆင့်တွေကနေ စနိုင်ပါတယ်။
    </p>

    <h4>1. Problem Definition</h4>

    <p>
      ပြဿနာကို ရှင်းရှင်းလင်းလင်း သတ်မှတ်ပါ။
      Result ပြဿနာလား၊ Process ပြဿနာလား၊ People ပြဿနာလား
      ခွဲပါ။
    </p>

    <h4>2. Root Cause Analysis</h4>

    <ul>
      <li>People</li>
      <li>Process</li>
      <li>Product</li>
      <li>Price</li>
      <li>Customer</li>
      <li>Competitor</li>
      <li>Market</li>
    </ul>

    <h4>3. Action Plan</h4>

    <ol>
      <li>Priority သတ်မှတ်ပါ။</li>
      <li>Owner သတ်မှတ်ပါ။</li>
      <li>Deadline သတ်မှတ်ပါ။</li>
      <li>KPI သတ်မှတ်ပါ။</li>
      <li>Weekly Review လုပ်ပါ။</li>
    </ol>

    <h4>4. Manager Rule</h4>

    <div class="takeaway-box">
      People → Numbers → Execution → Review → Improvement
    </div>

    <p>
      ပိုပြီးတိကျတဲ့ Business Advice ရချင်ရင်
      သင့်ရဲ့ Target, Actual Sales, Team Size,
      Customer Type နဲ့ လက်ရှိ Problem ကို ထည့်ပြောပါ။
      အဲဒီအချက်အလက်တွေပေါ်မူတည်ပြီး Action Plan ကို
      ပိုအသေးစိတ် တည်ဆောက်နိုင်ပါတယ်။
    </p>
  `;
}

/* =========================================================
   AI TOOLS
   ========================================================= */

function openAITool(tool) {

  const questions = {

    "Sales Strategy":
      "Sales Strategy တည်ဆောက်ပေးပါ",

    "Team Coach":
      "Team Performance တိုးတက်အောင် Coaching Plan တည်ဆောက်ပေးပါ",

    "Business Analyzer":
      "Business Problem ကို Root Cause Analysis လုပ်ပေးပါ",

    "Marketing Planner":
      "Marketing Action Plan တည်ဆောက်ပေးပါ",

    "Negotiation Coach":
      "Customer Negotiation Strategy တည်ဆောက်ပေးပါ",

    "Interview Coach":
      "Sales Manager Interview Preparation Plan ပေးပါ"

  };

  navigate("aiPage");

  setTimeout(() => {

    $("aiInput").value =
      questions[tool] ||
      tool;

    sendAIMessage(
      new Event("submit")
    );

  }, 100);
}

/* =========================================================
   PROFILE
   ========================================================= */

function openProfile() {

  openModal(`

    <div class="lesson-detail-head">

      <span class="category">
        PROFILE
      </span>

      <h2>Aung Zar Ni Win</h2>

      <p>
        Business Manager
      </p>

    </div>

    <div class="profile-setting">

      <div class="large-avatar">
        AZ
      </div>

      <div>

        <h3>
          Aung Zar Ni Win
        </h3>

        <p>
          Aung Business Academy Learner
        </p>

      </div>

    </div>

    <div class="detail-section">

      <h3>Learning Focus</h3>

      <ul>
        <li>Sales Management</li>
        <li>Business Strategy</li>
        <li>Leadership</li>
        <li>Marketing</li>
        <li>Financial Thinking</li>
      </ul>

    </div>

  `);
}

/* =========================================================
   REPORTS
   ========================================================= */

function renderReports() {
  // Reports page uses live Sales Manager data.
  // More advanced charts can be added later.
}

/* =========================================================
   SEARCH
   ========================================================= */

function performSearch() {

  const input =
    $("globalSearch");

  const query =
    input.value.trim().toLowerCase();

  if (!query) return;

  const found =
    LESSONS.find(
      lesson =>
        lesson.title
          .toLowerCase()
          .includes(query) ||
        lesson.summary
          .toLowerCase()
          .includes(query) ||
        lesson.category
          .toLowerCase()
          .includes(query)
    );

  if (found) {

    navigate("lessonsPage");

    setTimeout(() => {

      const index =
        LESSONS.findIndex(
          lesson =>
            lesson.id === found.id
        );

      openLesson(index);

    }, 100);

  } else {

    showToast(
      "Lesson မတွေ့ပါ။ AI Coach ကို မေးကြည့်ပါ။"
    );

    navigate("aiPage");

  }
}

/* =========================================================
   SIDEBAR
   ========================================================= */

function toggleSidebar() {

  const sidebar =
    $("sidebar");

  if (!sidebar) return;

  sidebar.classList.toggle(
    "open"
  );

  $("sidebarOverlay")
    .classList.toggle(
      "show"
    );
}

function openSidebar() {

  $("sidebar")
    .classList.add("open");

  $("sidebarOverlay")
    .classList.add("show");
}

function closeSidebar() {

  $("sidebar")
    ?.classList.remove("open");

  $("sidebarOverlay")
    ?.classList.remove("show");
}

/* =========================================================
   MODAL
   ========================================================= */

function openModal(content) {

  $("modalBody").innerHTML =
    content;

  $("modalOverlay")
    .classList.add("show");
}

function closeModal() {

  $("modalOverlay")
    .classList.remove("show");
}

/* =========================================================
   TOAST
   ========================================================= */

let toastTimer;

function showToast(message) {

  const toast =
    $("toast");

  toast.textContent =
    message;

  toast.classList.add("show");

  clearTimeout(
    toastTimer
  );

  toastTimer =
    setTimeout(() => {

      toast.classList.remove(
        "show"
      );

    }, 2500);
}

/* =========================================================
   LOGOUT
   ========================================================= */

function logoutUser() {

  showToast(
    "Logout system will be connected with authentication later."
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

  updateDashboardStats();

  renderReports();

  navigate("dashboardPage");

  /* Mobile menu */

  $("mobileMenu")
    ?.addEventListener(
      "click",
      toggleSidebar
    );

  $("sidebarOverlay")
    ?.addEventListener(
      "click",
      closeSidebar
    );

  /* Modal close */

  $("modalClose")
    ?.addEventListener(
      "click",
      closeModal
    );

  $("modalOverlay")
    ?.addEventListener(
      "click",
      event => {

        if (
          event.target ===
          $("modalOverlay")
        ) {
          closeModal();
        }

      }
    );

  /* Notification */

  $("notificationBtn")
    ?.addEventListener(
      "click",
      () => {

        showToast(
          "No new notifications."
        );

      }
    );

  /* Search */

  $("globalSearch")
    ?.addEventListener(
      "keydown",
      event => {

        if (
          event.key === "Enter"
        ) {
          performSearch();
        }

      }
    );

  /* Navigation */

  document
    .querySelectorAll(
      ".nav-item[data-page]"
    )
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

}

/* =========================================================
   GLOBAL FUNCTIONS
   ========================================================= */

window.navigate = navigate;

window.goDashboard = goDashboard;
window.openLessons = openLessons;
window.continueLearning = continueLearning;
window.openBusinessPlan = openBusinessPlan;

window.openCategory = openCategory;

window.openCourse = openCourse;

window.renderLessons = renderLessons;
window.filterLessons = filterLessons;

window.openLesson = openLesson;
window.openLessonById = openLessonById;

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
window.exportSalesReport = exportSalesReport;

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

window.sendAIMessage =
  sendAIMessage;

window.askQuickQuestion =
  askQuickQuestion;

window.openAITool =
  openAITool;

window.openProfile =
  openProfile;

window.openModal =
  openModal;

window.closeModal =
  closeModal;

window.showToast =
  showToast;

window.toggleSidebar =
  toggleSidebar;

window.openSidebar =
  openSidebar;

window.closeSidebar =
  closeSidebar;

window.logoutUser =
  logoutUser;

/* =========================================================
   START
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  initializeApp
);
