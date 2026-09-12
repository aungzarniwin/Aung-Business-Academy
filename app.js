// ======================================================
// AUNG BUSINESS ACADEMY
// FULL BUSINESS LESSON LIBRARY
// ======================================================

"use strict";

const STORAGE_KEY = "aungBusinessAcademyV8";

const VALID_PAGES = [
  "dashboard",
  "courses",
  "lessons",
  "progress",
  "sales",
  "calculator",
  "reports",
  "ai-coach",
  "ai-tools",
  "settings"
];

// ======================================================
// COURSE DATA
// ======================================================

const COURSES = [

  // ====================================================
  // 1. SALES MANAGEMENT
  // ====================================================

  {
    id: "sales-management",
    title: "Sales Management Mastery",
    category: "sales",
    color: "blue",
    icon: "↗",
    premium: false,
    description:
      "Sales planning, target management, field execution, customer management and team coaching.",
    lessons: [
      {
        title: "Sales Management Fundamentals",
        content: `
          <p>Sales Management ဆိုတာ Target ရရှိအောင် People, Customer, Market နဲ့ Execution ကို စနစ်တကျ စီမံခန့်ခွဲခြင်း ဖြစ်ပါတယ်။</p>
          <h4>Manager တစ်ယောက်ရဲ့ အဓိကတာဝန်များ</h4>
          <ul>
            <li>Sales Target Management</li>
            <li>People Management</li>
            <li>Customer Management</li>
            <li>Territory Management</li>
            <li>Performance Management</li>
          </ul>
        `
      },
      {
        title: "Target Planning",
        content: `
          <p>Annual Target ကို Monthly, Weekly နဲ့ Daily Target အဖြစ် ခွဲခြမ်းစီမံပါ။</p>
          <p>Previous Performance, Market Potential, Customer Base နဲ့ Growth Opportunity တွေကို ထည့်သွင်းစဉ်းစားရပါမယ်။</p>
        `
      },
      {
        title: "Sales Execution",
        content: `
          <p>Strategy ကောင်းရုံနဲ့ မလုံလောက်ပါဘူး။ Field Execution က Sales Result ကို တိုက်ရိုက်သက်ရောက်စေပါတယ်။</p>
          <ul>
            <li>Daily Visit Plan</li>
            <li>Customer Coverage</li>
            <li>Order Generation</li>
            <li>Follow-up</li>
            <li>Execution Review</li>
          </ul>
        `
      },
      {
        title: "Sales Team Coaching",
        content: `
          <p>Manager တစ်ယောက်ရဲ့ အဓိကတာဝန်က Team Member တွေကို အလုပ်ခိုင်းရုံမဟုတ်ဘဲ Capability ကို မြှင့်တင်ပေးခြင်း ဖြစ်ပါတယ်။</p>
          <p>Coaching, Feedback, Empowerment နဲ့ Accountability ကို ပေါင်းစပ်အသုံးပြုပါ။</p>
        `
      },
      {
        title: "Territory Management",
        content: `
          <p>Territory တစ်ခုချင်းစီရဲ့ Potential, Customer Coverage နဲ့ Sales Opportunity ကို ခွဲခြမ်းစိတ်ဖြာပါ။</p>
          <ul>
            <li>Territory Potential</li>
            <li>Customer Density</li>
            <li>Route Planning</li>
            <li>Coverage Frequency</li>
          </ul>
        `
      },
      {
        title: "Customer Management",
        content: `
          <p>Customer တစ်ယောက်ချင်းစီရဲ့ Value, Potential, Purchase Pattern နဲ့ Business Need ကို နားလည်ရပါမယ်။</p>
          <p>Customer Relationship ကို ရေရှည် Business Partnership အဖြစ် တည်ဆောက်ပါ။</p>
        `
      },
      {
        title: "Sales Performance Review",
        content: `
          <p>Target, Actual နဲ့ Gap ကို ပုံမှန်စောင့်ကြည့်ပါ။</p>
          <p>Gap ဖြစ်ရတဲ့ Root Cause ကို People, Product, Customer, Territory နဲ့ Execution အလိုက် ခွဲခြမ်းစိတ်ဖြာပါ။</p>
        `
      }
    ]
  },

  // ====================================================
  // 2. LEADERSHIP
  // ====================================================

  {
    id: "leadership",
    title: "Leadership Excellence",
    category: "leadership",
    color: "purple",
    icon: "★",
    premium: true,
    description:
      "Build leadership, communication, coaching, empowerment and performance management skills.",
    lessons: [
      {
        title: "Leadership Fundamentals",
        content: `
          <p>Leadership ဆိုတာ Position တစ်ခုမဟုတ်ပါ။ လူတွေကို ရည်မှန်းချက်တစ်ခုအတွက် လိုက်ပါလာအောင် Influence လုပ်နိုင်ခြင်း ဖြစ်ပါတယ်။</p>
        `
      },
      {
        title: "Leadership Mindset",
        content: `
          <p>Manager တစ်ယောက်အနေနဲ့ Problem ကို အပြစ်တင်ခြင်းထက် Solution ကို ရှာဖွေတဲ့ Mindset ရှိရပါမယ်။</p>
          <ul>
            <li>Ownership</li>
            <li>Accountability</li>
            <li>Continuous Improvement</li>
            <li>Positive Leadership</li>
          </ul>
        `
      },
      {
        title: "Coaching & Empowerment",
        content: `
          <p>Micromanagement မလုပ်ဘဲ Clear Expectations ပေးပြီး Team Member တွေကို Ownership ပေးပါ။</p>
          <p>Performance Review နဲ့ Feedback ကို ပုံမှန်ပြုလုပ်ပါ။</p>
        `
      },
      {
        title: "Performance Management",
        content: `
          <p>KPI, Target, Actual နဲ့ Gap ကို ပုံမှန်စောင့်ကြည့်ပါ။</p>
          <p>Performance Gap ရှိပါက Root Cause ရှာပြီး Action Plan ပြုလုပ်ပါ။</p>
        `
      },
      {
        title: "Communication Skills",
        content: `
          <p>Effective Manager တစ်ယောက်အတွက် Clear Communication က အလွန်အရေးကြီးပါတယ်။</p>
          <ul>
            <li>Active Listening</li>
            <li>Clear Direction</li>
            <li>Constructive Feedback</li>
            <li>Conflict Management</li>
          </ul>
        `
      },
      {
        title: "Conflict Management",
        content: `
          <p>Conflict ဖြစ်တဲ့အခါ လူကို မတိုက်ခိုက်ဘဲ Problem ကို အာရုံစိုက်ပါ။</p>
          <p>Fact → Root Cause → Solution → Agreement ဆိုတဲ့ အဆင့်အတိုင်း ဖြေရှင်းပါ။</p>
        `
      }
    ]
  },

  // ====================================================
  // 3. HR MANAGEMENT
  // ====================================================

  {
    id: "hr-management",
    title: "HR Management",
    category: "hr",
    color: "pink",
    icon: "♟",
    premium: true,
    description:
      "Practical HR management, recruitment, performance, employee development and retention.",
    lessons: [
      {
        title: "HR Fundamentals",
        content: `
          <p>HR Management ဆိုတာ ဝန်ထမ်းတွေကို စီမံခန့်ခွဲခြင်းသာမက Organization ရဲ့ People Capability ကို တိုးတက်အောင်လုပ်ခြင်း ဖြစ်ပါတယ်။</p>
        `
      },
      {
        title: "Recruitment & Selection",
        content: `
          <p>လူခန့်ရာမှာ Experience တစ်ခုတည်းကို မကြည့်ဘဲ Skill, Attitude, Potential နဲ့ Job Fit ကိုပါ စဉ်းစားပါ။</p>
        `
      },
      {
        title: "Employee Performance",
        content: `
          <p>ဝန်ထမ်းတစ်ယောက်ရဲ့ Performance ကို Clear KPI နဲ့ Measurable Target တွေသတ်မှတ်ပြီး စောင့်ကြည့်ပါ။</p>
        `
      },
      {
        title: "Training & Development",
        content: `
          <p>Training လုပ်တာထက် Capability Gap ကို သိပြီး လိုအပ်တဲ့ Training ကို ပေးခြင်းက ပိုထိရောက်ပါတယ်။</p>
          <ul>
            <li>Skill Gap Analysis</li>
            <li>Coaching</li>
            <li>Training</li>
            <li>Follow-up</li>
          </ul>
        `
      },
      {
        title: "Employee Motivation",
        content: `
          <p>လစာတစ်ခုတည်းက Motivation မဟုတ်ပါဘူး။ Recognition, Growth Opportunity, Trust နဲ့ Ownership ကလည်း အရေးကြီးပါတယ်။</p>
        `
      },
      {
        title: "Employee Retention",
        content: `
          <p>Employee ထွက်သွားရတဲ့ Root Cause ကို သိရှိပြီး Career Development, Manager Support နဲ့ Work Environment ကို တိုးတက်အောင်လုပ်ပါ။</p>
        `
      }
    ]
  },

  // ====================================================
  // 4. MARKETING
  // ====================================================

  {
    id: "marketing",
    title: "Marketing Fundamentals",
    category: "marketing",
    color: "red",
    icon: "◆",
    premium: true,
    description:
      "Learn practical marketing, customer segmentation, positioning, promotion and growth.",
    lessons: [
      {
        title: "Marketing Fundamentals",
        content: `
          <p>Marketing ဆိုတာ Product ရောင်းခြင်းတစ်ခုတည်းမဟုတ်ပါ။ Customer Need ကို နားလည်ပြီး Value ပေးနိုင်အောင် စီမံခြင်း ဖြစ်ပါတယ်။</p>
        `
      },
      {
        title: "Customer Segmentation",
        content: `
          <p>Customer အားလုံးကို တစ်ပုံစံတည်း မဆက်ဆံသင့်ပါဘူး။ Need, Behavior, Location, Income နဲ့ Potential အလိုက် Segment ခွဲပါ။</p>
        `
      },
      {
        title: "Target Customer",
        content: `
          <p>ဘယ် Customer ကို အဓိက Target လုပ်မလဲ သတ်မှတ်ပါ။</p>
          <ul>
            <li>Who?</li>
            <li>What need?</li>
            <li>Why buy?</li>
            <li>Where to reach?</li>
          </ul>
        `
      },
      {
        title: "Brand Positioning",
        content: `
          <p>Customer ရဲ့စိတ်ထဲမှာ ကိုယ့် Brand ကို ဘယ်လို Position လုပ်ချင်သလဲ သတ်မှတ်ပါ။</p>
        `
      },
      {
        title: "Marketing Mix",
        content: `
          <p>4P ကို နားလည်ထားရပါမယ်။</p>
          <ul>
            <li>Product</li>
            <li>Price</li>
            <li>Place</li>
            <li>Promotion</li>
          </ul>
        `
      },
      {
        title: "Promotion Strategy",
        content: `
          <p>Promotion လုပ်ရာမှာ Discount တစ်ခုတည်းကို မမှီခိုပါနဲ့။ Customer Value နဲ့ Brand Position ကို ထိန်းထားပါ။</p>
        `
      },
      {
        title: "Marketing Performance",
        content: `
          <p>Marketing Activity တစ်ခုချင်းစီရဲ့ Result ကို Reach, Engagement, Leads, Conversion နဲ့ Revenue အလိုက် တိုင်းတာပါ။</p>
        `
      }
    ]
  },

  // ====================================================
  // 5. BUSINESS BASICS
  // ====================================================

  {
    id: "business-basics",
    title: "Business Basics",
    category: "business",
    color: "green",
    icon: "●",
    premium: false,
    description:
      "Understand how a business works, creates value and generates sustainable revenue.",
    lessons: [
      {
        title: "What is Business?",
        content: `
          <p>Business ဆိုတာ Customer Problem ကို ဖြေရှင်းပေးပြီး Value ဖန်တီးကာ Revenue ရရှိအောင်လုပ်တဲ့ System တစ်ခု ဖြစ်ပါတယ်။</p>
        `
      },
      {
        title: "Business Model",
        content: `
          <p>Business Model မှာ Customer, Value Proposition, Revenue, Cost နဲ့ Key Activities တွေကို နားလည်ရပါမယ်။</p>
        `
      },
      {
        title: "Value Proposition",
        content: `
          <p>Customer က ဘာကြောင့် ကိုယ့် Product ကို ဝယ်သင့်သလဲဆိုတာ ရှင်းလင်းတဲ့ Value Proposition ရှိရပါမယ်။</p>
        `
      },
      {
        title: "Revenue & Cost",
        content: `
          <p>Revenue တိုးတာနဲ့ Profit တိုးတာ မတူပါဘူး။ Revenue နဲ့ Cost နှစ်ခုလုံးကို စောင့်ကြည့်ရပါမယ်။</p>
        `
      }
    ]
  },

  // ====================================================
  // 6. BUSINESS STRATEGY
  // ====================================================

  {
    id: "business-strategy",
    title: "Business Strategy",
    category: "strategy",
    color: "teal",
    icon: "◆",
    premium: true,
    description:
      "Market analysis, competitive advantage, strategic planning and business growth.",
    lessons: [
      {
        title: "Strategic Thinking",
        content: `
          <p>Strategic Thinking ဆိုတာ နေ့စဉ်အလုပ်တွေထက် ရေရှည် Result ကို အာရုံစိုက်စဉ်းစားခြင်း ဖြစ်ပါတယ်။</p>
        `
      },
      {
        title: "Market Analysis",
        content: `
          <p>Market Size, Customer Need, Competitor နဲ့ Market Trend တွေကို လေ့လာပါ။</p>
        `
      },
      {
        title: "Competitive Advantage",
        content: `
          <p>ပြိုင်ဘက်တွေထက် ဘာကို ပိုကောင်းအောင် လုပ်နိုင်မလဲဆိုတာ သတ်မှတ်ပါ။</p>
        `
      },
      {
        title: "Growth Strategy",
        content: `
          <p>Growth ရဖို့ Customer အသစ်ရရှိခြင်း၊ Existing Customer Value တိုးခြင်း၊ Product အသစ်နဲ့ Market အသစ်တွေကို စဉ်းစားပါ။</p>
        `
      },
      {
        title: "Strategic Action Plan",
        content: `
          <p>Strategy ကို Action Plan အဖြစ် ပြောင်းပါ။ ဘာလုပ်မလဲ၊ ဘယ်သူလုပ်မလဲ၊ ဘယ်အချိန်ပြီးမလဲ၊ ဘယ်လိုတိုင်းမလဲ သတ်မှတ်ပါ။</p>
        `
      }
    ]
  },

  // ====================================================
  // 7. BRAND BASICS
  // ====================================================

  {
    id: "brand-basics",
    title: "Brand Basics",
    category: "marketing",
    color: "orange",
    icon: "◆",
    premium: true,
    description:
      "Build a strong brand identity, positioning and customer perception.",
    lessons: [
      {
        title: "What is a Brand?",
        content: `
          <p>Brand ဆိုတာ Logo တစ်ခုတည်းမဟုတ်ပါ။ Customer ရဲ့စိတ်ထဲမှာ ကိုယ့်လုပ်ငန်းနဲ့ပတ်သက်ပြီး ရှိနေတဲ့ Perception ဖြစ်ပါတယ်။</p>
        `
      },
      {
        title: "Brand Identity",
        content: `
          <p>Brand Name, Logo, Color, Message, Tone နဲ့ Customer Experience တို့ကို Consistent ဖြစ်အောင် ထိန်းပါ။</p>
        `
      },
      {
        title: "Brand Positioning",
        content: `
          <p>Customer ရဲ့စိတ်ထဲမှာ ကိုယ့် Brand ကို ဘယ်နေရာမှာ ရှိစေချင်သလဲ ရှင်းလင်းစွာ သတ်မှတ်ပါ။</p>
        `
      },
      {
        title: "Customer Experience",
        content: `
          <p>Brand Promise ကို Customer Experience နဲ့ ကိုက်ညီအောင် အကောင်အထည်ဖော်ပါ။</p>
        `
      }
    ]
  },

  // ====================================================
  // 8. NEGOTIATION
  // ====================================================

  {
    id: "negotiation",
    title: "Negotiation Skills",
    category: "business",
    color: "indigo",
    icon: "⇄",
    premium: true,
    description:
      "Master negotiation preparation, communication, objection handling and closing.",
    lessons: [
      {
        title: "Negotiation Fundamentals",
        content: `
          <p>Negotiation ဆိုတာ ကိုယ့်လိုချင်တာရဖို့ တစ်ဖက်လူကို အနိုင်ယူခြင်းမဟုတ်ပါ။ နှစ်ဖက်စလုံးအတွက် အကျိုးရှိတဲ့ Agreement ရှာခြင်း ဖြစ်ပါတယ်။</p>
        `
      },
      {
        title: "Preparation",
        content: `
          <p>Negotiation မဝင်ခင် Objective, Minimum Acceptable Result, Customer Need နဲ့ Alternatives ကို ကြိုတင်ပြင်ဆင်ပါ။</p>
        `
      },
      {
        title: "Handling Objections",
        content: `
          <p>Customer Objection ကို တိုက်ရိုက်ငြင်းမယ့်အစား နားထောင်ပြီး Root Concern ကို ရှာပါ။</p>
        `
      },
      {
        title: "Win-Win Negotiation",
        content: `
          <p>Price တစ်ခုတည်းကို မညှိဘဲ Payment Terms, Volume, Service, Delivery နဲ့ Long-term Value တွေကို တွဲပြီးညှိနှိုင်းပါ။</p>
        `
      },
      {
        title: "Closing",
        content: `
          <p>Agreement ရရှိပြီးတဲ့အခါ Next Step, Responsibility နဲ့ Timeline ကို ရှင်းလင်းစွာ Confirm လုပ်ပါ။</p>
        `
      }
    ]
  },

  // ====================================================
  // 9. CUSTOMER SERVICE
  // ====================================================

  {
    id: "customer-service",
    title: "Customer Service Excellence",
    category: "business",
    color: "cyan",
    icon: "♥",
    premium: true,
    description:
      "Create excellent customer experience, handle complaints and build loyalty.",
    lessons: [
      {
        title: "Customer Service Fundamentals",
        content: `
          <p>Customer Service ဆိုတာ Customer ကို ပြန်ဖြေခြင်းထက် Customer Problem ကို ဖြေရှင်းပေးနိုင်ခြင်း ဖြစ်ပါတယ်။</p>
        `
      },
      {
        title: "Customer Needs",
        content: `
          <p>Customer က ပြောတဲ့အရာထက် သူ့ရဲ့ အမှန်တကယ်လိုအပ်ချက်ကို နားလည်ဖို့ Active Listening အသုံးပြုပါ။</p>
        `
      },
      {
        title: "Complaint Handling",
        content: `
          <p>Complaint ရှိလာရင် Listen → Understand → Apologize → Solve → Follow-up ဆိုတဲ့ အဆင့်ကို အသုံးပြုပါ။</p>
        `
      },
      {
        title: "Customer Loyalty",
        content: `
          <p>Customer Loyalty ရရှိဖို့ Consistency, Trust, Fast Response နဲ့ Value Creation ကို အဓိကထားပါ။</p>
        `
      }
    ]
  },

  // ====================================================
  // 10. PEOPLE MANAGEMENT
  // ====================================================

  {
    id: "people-management",
    title: "People Management",
    category: "hr",
    color: "violet",
    icon: "♟",
    premium: true,
    description:
      "Manage people effectively through delegation, coaching, motivation and accountability.",
    lessons: [
      {
        title: "People Management Fundamentals",
        content: `
          <p>People Management ဆိုတာ လူတွေကို Control လုပ်ခြင်းမဟုတ်ဘဲ လူတွေရဲ့ Capability နဲ့ Performance ကို မြှင့်တင်ခြင်း ဖြစ်ပါတယ်။</p>
        `
      },
      {
        title: "Delegation",
        content: `
          <p>အလုပ်အားလုံးကို Manager ကိုယ်တိုင် မလုပ်ပါနဲ့။ Responsibility နဲ့ Authority ကို သင့်တော်သလို Delegate လုပ်ပါ။</p>
        `
      },
      {
        title: "Motivation",
        content: `
          <p>Employee တစ်ယောက်ချင်းစီရဲ့ Motivation Driver မတူနိုင်ပါဘူး။ Recognition, Growth, Achievement နဲ့ Ownership ကို အသုံးချပါ။</p>
        `
      },
      {
        title: "Accountability",
        content: `
          <p>Expectation ကို ကြိုတင်ရှင်းပြပြီး Result ကို တိုင်းတာပါ။ Accountability ရှိတဲ့ Culture တစ်ခု တည်ဆောက်ပါ။</p>
        `
      },
      {
        title: "Team Development",
        content: `
          <p>Team ကို Training, Coaching, Feedback နဲ့ Challenging Assignments တွေကနေတစ်ဆင့် တိုးတက်အောင်လုပ်ပါ။</p>
        `
      }
    ]
  },

  // ====================================================
  // 11. FINANCE
  // ====================================================

  {
    id: "business-finance",
    title: "Business Finance",
    category: "finance",
    color: "yellow",
    icon: "▣",
    premium: true,
    description:
      "Understand revenue, cost, profit, margin, cash flow and financial decision making.",
    lessons: [
      {
        title: "Finance Fundamentals",
        content: `
          <p>Business Manager တစ်ယောက်အနေနဲ့ Revenue, Cost, Profit နဲ့ Cash Flow အခြေခံကို နားလည်ထားရပါမယ်။</p>
        `
      },
      {
        title: "Revenue Management",
        content: `
          <p>Revenue ကို Product, Customer, Territory နဲ့ Channel အလိုက် ခွဲခြမ်းစိတ်ဖြာပါ။</p>
        `
      },
      {
        title: "Cost Management",
        content: `
          <p>Cost တစ်ခုချင်းစီဟာ Business Result ကို ဘယ်လိုသက်ရောက်နေသလဲ စောင့်ကြည့်ပါ။</p>
        `
      },
      {
        title: "Profit & Margin",
        content: `
          <p>Gross Profit = Revenue − Cost</p>
          <p>Margin ကို စောင့်ကြည့်ခြင်းက Sales တိုးလာပေမယ့် Profit ကျသွားတဲ့ ပြဿနာကို ကာကွယ်ပေးနိုင်ပါတယ်။</p>
        `
      },
      {
        title: "Cash Flow Management",
        content: `
          <p>Profit ရှိပေမယ့် Cash မရှိတဲ့ Business ဖြစ်နိုင်ပါတယ်။ Receivable, Payable နဲ့ Inventory ကို စောင့်ကြည့်ပါ။</p>
        `
      },
      {
        title: "Budget vs Actual",
        content: `
          <p>Budget နဲ့ Actual ကို ပုံမှန်နှိုင်းယှဉ်ပြီး Variance ဖြစ်ရတဲ့ Root Cause ကို ရှာပါ။</p>
        `
      }
    ]
  },

  // ====================================================
  // 12. PROFIT & LOSS
  // ====================================================

  {
    id: "profit-loss",
    title: "Profit & Loss Management",
    category: "finance",
    color: "emerald",
    icon: "₭",
    premium: true,
    description:
      "Understand P&L, gross profit, operating expenses and profitability.",
    lessons: [
      {
        title: "P&L Fundamentals",
        content: `
          <p>Profit & Loss Statement က Business ရဲ့ ဝင်ငွေနဲ့ ကုန်ကျစရိတ်တွေကြားက Result ကို ပြပေးပါတယ်။</p>
        `
      },
      {
        title: "Gross Profit",
        content: `
          <p>Gross Profit = Revenue − Cost of Goods Sold</p>
          <p>Gross Margin ကို စောင့်ကြည့်ခြင်းက Product Profitability ကို နားလည်စေပါတယ်။</p>
        `
      },
      {
        title: "Operating Expenses",
        content: `
          <p>Salary, Rent, Transport, Marketing နဲ့ Administration စတဲ့ Operating Expenses တွေကို ထိန်းချုပ်ပါ။</p>
        `
      },
      {
        title: "Break-even",
        content: `
          <p>Break-even Point ဆိုတာ Profit မရသေးသော်လည်း Loss မဖြစ်တော့တဲ့ Sales Level ဖြစ်ပါတယ်။</p>
        `
      }
    ]
  },

  // ====================================================
  // 13. GOAL SETTING
  // ====================================================

  {
    id: "goal-setting",
    title: "Goal Setting & Execution",
    category: "business",
    color: "blue",
    icon: "◎",
    premium: false,
    description:
      "Set meaningful goals, create action plans and execute consistently.",
    lessons: [
      {
        title: "Goal Setting Fundamentals",
        content: `
          <p>Goal ဆိုတာ ရည်ရွယ်ချက်တစ်ခုတည်း မဟုတ်ပါဘူး။ Result ကို တိုင်းတာနိုင်အောင် သတ်မှတ်ထားတဲ့ Destination ဖြစ်ပါတယ်။</p>
        `
      },
      {
        title: "SMART Goals",
        content: `
          <p>Goal တစ်ခုကို Specific, Measurable, Achievable, Relevant, Time-bound ဖြစ်အောင် သတ်မှတ်ပါ။</p>
        `
      },
      {
        title: "Action Planning",
        content: `
          <p>Goal ကြီးတစ်ခုကို Weekly နဲ့ Daily Action တွေအဖြစ် ခွဲပါ။</p>
        `
      },
      {
        title: "Execution Discipline",
        content: `
          <p>Goal ရဖို့ Motivation ထက် Consistency နဲ့ Discipline က ပိုအရေးကြီးပါတယ်။</p>
        `
      },
      {
        title: "Review & Improve",
        content: `
          <p>အပတ်စဉ် Result ကို Review လုပ်ပြီး ဘာအလုပ်ဖြစ်တယ်၊ ဘာမဖြစ်ဘူးဆိုတာ သိရှိကာ Action Plan ကို ပြန်ပြင်ပါ။</p>
        `
      }
    ]
  }

];

// ======================================================
// STATE
// ======================================================

let state = null;
let academyInitialized = false;

// ======================================================
// DATE
// ======================================================

function todayKey() {
  const d = new Date();

  return [
    d.getFullYear(),
    String(d.getMonth() + 1).padStart(2, "0"),
    String(d.getDate()).padStart(2, "0")
  ].join("-");
}

function yesterdayKey() {
  const d = new Date();
  d.setDate(d.getDate() - 1);

  return [
    d.getFullYear(),
    String(d.getMonth() + 1).padStart(2, "0"),
    String(d.getDate()).padStart(2, "0")
  ].join("-");
}

// ======================================================
// DEFAULT STATE
// ======================================================

function createDefaultState() {
  return {
    currentPage: "dashboard",

    currentCourseId:
      COURSES[0]?.id || null,

    currentLessonIndex: 0,

    completedLessons: [],

    lessonDates: {},

    activity: [],

    streak: 0,

    lastLearningDate: null,

    dailyGoal: {
      minutes: 0,
      target: 30,
      date: todayKey()
    },

    sales: {
      target: 100,
      actual: 0,
      history: [],
      priorities: []
    },

    calculator: {
      product: "Product",
      cost: 10000,
      margin: 20
    },

    settings: {
      reminder: true,
      tracking: true
    }
  };
}

// ======================================================
// STORAGE
// ======================================================

function saveState() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(state)
    );
  } catch (e) {
    console.error(e);
  }
}

function loadState() {
  try {
    const saved =
      localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      return createDefaultState();
    }

    const data = JSON.parse(saved);
    const defaults = createDefaultState();

    return {
      ...defaults,
      ...data,

      dailyGoal: {
        ...defaults.dailyGoal,
        ...(data.dailyGoal || {})
      },

      sales: {
        ...defaults.sales,
        ...(data.sales || {})
      },

      calculator: {
        ...defaults.calculator,
        ...(data.calculator || {})
      },

      settings: {
        ...defaults.settings,
        ...(data.settings || {})
      },

      completedLessons:
        Array.isArray(data.completedLessons)
          ? data.completedLessons
          : [],

      activity:
        Array.isArray(data.activity)
          ? data.activity
          : []
    };

  } catch (e) {
    return createDefaultState();
  }
}

// ======================================================
// HELPERS
// ======================================================

function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getCourse(id) {
  return COURSES.find(
    course => course.id === id
  );
}

function getCurrentCourse() {
  return getCourse(
    state?.currentCourseId
  );
}

function totalLessons() {
  return COURSES.reduce(
    (sum, course) =>
      sum + course.lessons.length,
    0
  );
}

function completedCount() {
  return state?.completedLessons?.length || 0;
}

function courseCompleted(courseId) {
  const course = getCourse(courseId);

  if (!course) return 0;

  return course.lessons.filter(
    (_, index) =>
      state.completedLessons.includes(
        `${courseId}-${index}`
      )
  ).length;
}

function courseProgress(courseId) {
  const course = getCourse(courseId);

  if (!course || !course.lessons.length) {
    return 0;
  }

  return Math.round(
    courseCompleted(courseId) /
    course.lessons.length *
    100
  );
}

function overallProgress() {
  const total = totalLessons();

  if (!total) return 0;

  return Math.round(
    completedCount() /
    total *
    100
  );
}

// ======================================================
// PREMIUM
// ======================================================

function isPremiumCourse(course) {
  return !!course?.premium;
}

function hasPremiumAccess() {
  try {
    if (
      window.AungPremium &&
      typeof window.AungPremium.hasAccess ===
        "function"
    ) {
      return !!window.AungPremium.hasAccess();
    }

    if (
      window.AungPremium &&
      typeof window.AungPremium.isPremiumActive ===
        "function"
    ) {
      return !!window.AungPremium.isPremiumActive();
    }
  } catch (e) {}

  return false;
}

function openPremiumAccess() {
  try {
    if (
      window.AungPremium &&
      typeof window.AungPremium.openPremiumModal ===
        "function"
    ) {
      window.AungPremium.openPremiumModal();
      return;
    }
  } catch (e) {}

  showModal(
    "👑 Premium Access",
    `
      <h3>Premium Course ဖြစ်ပါတယ်။</h3>
      <p>ဒီ Course ကို လေ့လာရန် Premium Access လိုအပ်ပါတယ်။</p>
    `
  );
}

// ======================================================
// NAVIGATION
// ======================================================

function navigate(page) {
  const target =
    VALID_PAGES.includes(page)
      ? page
      : "dashboard";

  document
    .querySelectorAll(".page")
    .forEach(pageEl =>
      pageEl.classList.remove("active")
    );

  const pageEl =
    document.getElementById(
      `page-${target}`
    );

  if (pageEl) {
    pageEl.classList.add("active");
  }

  document
    .querySelectorAll(".nav-item")
    .forEach(item =>
      item.classList.toggle(
        "active",
        item.dataset.page === target
      )
    );

  const breadcrumb =
    document.getElementById(
      "breadcrumbCurrent"
    );

  if (breadcrumb) {
    const item =
      document.querySelector(
        `.nav-item[data-page="${target}"]`
      );

    breadcrumb.textContent =
      item
        ? item.textContent.trim()
        : target;
  }

  state.currentPage = target;

  saveState();

  if (target === "dashboard")
    renderDashboard();

  if (target === "courses")
    renderCourses();

  if (target === "lessons")
    renderLessons();

  if (target === "progress")
    renderProgress();

  if (target === "sales")
    renderSales();

  if (target === "calculator")
    renderCalculator();

  if (target === "reports")
    renderReports();

  if (target === "settings")
    renderSettings();

  closeSidebar();
}

// ======================================================
// DASHBOARD
// ======================================================

function renderDashboard() {

  const set = (id, value) => {
    const el =
      document.getElementById(id);

    if (el) el.textContent = value;
  };

  set("statCourses", COURSES.length);
  set("statLessons", totalLessons());
  set("statCompleted", completedCount());
  set(
    "statProgress",
    `${overallProgress()}%`
  );

  const current =
    getCurrentLearning();

  if (current) {
    set(
      "dashboardCourseTitle",
      current.course.title
    );

    set(
      "dashboardCourseDescription",
      current.course.description
    );

    set(
      "dashboardProgressText",
      `${courseCompleted(current.course.id)} of ${current.course.lessons.length} lessons`
    );

    set(
      "dashboardProgressPercent",
      `${courseProgress(current.course.id)}%`
    );

    const bar =
      document.getElementById(
        "dashboardProgressBar"
      );

    if (bar) {
      bar.style.width =
        `${courseProgress(current.course.id)}%`;
    }

    const button =
      document.getElementById(
        "continueLearningBtn"
      );

    if (button) {
      button.dataset.course =
        current.course.id;

      button.dataset.lesson =
        current.index;

      button.textContent =
        current.locked
          ? "🔒 Unlock Premium →"
          : "Continue Learning →";
    }
  }

  renderDailyGoal();
  renderActivity();
}

// ======================================================
// CONTINUE LEARNING
// ======================================================

function getCurrentLearning() {

  for (let c = 0; c < COURSES.length; c++) {

    const course = COURSES[c];

    const index =
      course.lessons.findIndex(
        (_, i) =>
          !state.completedLessons.includes(
            `${course.id}-${i}`
          )
      );

    if (index !== -1) {
      return {
        course,
        index,
        lesson: course.lessons[index],
        locked:
          isPremiumCourse(course) &&
          !hasPremiumAccess()
      };
    }
  }

  return null;
}

// ======================================================
// DAILY GOAL
// ======================================================

function renderDailyGoal() {

  if (!state.dailyGoal) {
    state.dailyGoal =
      createDefaultState().dailyGoal;
  }

  if (
    state.dailyGoal.date !==
    todayKey()
  ) {
    state.dailyGoal.date =
      todayKey();

    state.dailyGoal.minutes = 0;

    saveState();
  }

  const minutes =
    Number(state.dailyGoal.minutes) || 0;

  const target =
    Number(state.dailyGoal.target) || 30;

  const percentage =
    Math.min(
      100,
      Math.round(
        minutes / target * 100
      )
    );

  const percent =
    document.getElementById(
      "goalPercent"
    );

  const minute =
    document.getElementById(
      "goalMinutes"
    );

  if (percent)
    percent.textContent =
      `${percentage}%`;

  if (minute)
    minute.textContent =
      `${minutes} / ${target} min`;
}

// ======================================================
// ACTIVITY
// ======================================================

function renderActivity() {

  const container =
    document.getElementById(
      "activityList"
    );

  if (!container) return;

  if (!state.activity.length) {
    container.innerHTML = `
      <div class="empty-state">
        <div>📚</div>
        <strong>No activity yet</strong>
        <span>Start your first lesson.</span>
      </div>
    `;
    return;
  }

  container.innerHTML =
    state.activity
      .slice(0, 5)
      .map(item => `
        <div class="activity-item">
          <div class="activity-icon">✓</div>

          <div class="activity-content">
            <strong>
              ${escapeHTML(item.title)}
            </strong>

            <span>
              ${escapeHTML(item.course)}
            </span>
          </div>

          <small>
            ${escapeHTML(item.time)}
          </small>
        </div>
      `)
      .join("");
}

// ======================================================
// COURSES
// ======================================================

function renderCourses(filter = "all") {

  const container =
    document.getElementById(
      "coursesGrid"
    );

  if (!container) return;

  let courses = COURSES;

  if (filter !== "all") {
    courses =
      COURSES.filter(
        course =>
          course.category === filter
      );
  }

  container.innerHTML =
    courses
      .map(course => {

        const progress =
          courseProgress(course.id);

        const completed =
          courseCompleted(course.id);

        const locked =
          isPremiumCourse(course) &&
          !hasPremiumAccess();

        return `
          <div class="course-card">

            <div class="course-card-top">

              <div class="course-icon ${course.color}">
                ${course.icon}
              </div>

              <span class="course-badge">
                ${
                  course.premium
                    ? "👑 PREMIUM"
                    : "FREE"
                }
              </span>

            </div>

            <h2>
              ${escapeHTML(course.title)}
            </h2>

            <p>
              ${escapeHTML(course.description)}
            </p>

            <div class="course-meta">
              <span>
                ▣ ${course.lessons.length} Lessons
              </span>

              <strong>
                ${progress}%
              </strong>
            </div>

            <div class="progress-bar">
              <div
                class="progress-fill"
                style="width:${progress}%"
              ></div>
            </div>

            <div class="course-card-footer">

              <span>
                ${completed}/${course.lessons.length}
                completed
              </span>

              <button
                type="button"
                class="secondary-btn open-course"
                data-course="${course.id}"
              >
                ${
                  locked
                    ? "🔒 Premium"
                    : progress
                      ? "Continue"
                      : "Start Course"
                }
              </button>

            </div>

          </div>
        `;
      })
      .join("");
}

// ======================================================
// LESSONS
// ======================================================

function renderLessons() {

  const list =
    document.getElementById(
      "lessonCourseList"
    );

  const content =
    document.getElementById(
      "lessonContent"
    );

  if (!list || !content) return;

  list.innerHTML =
    COURSES
      .map(course => {

        const progress =
          courseProgress(course.id);

        const completed =
          courseCompleted(course.id);

        const active =
          state.currentCourseId ===
          course.id
            ? "active"
            : "";

        return `
          <button
            type="button"
            class="lesson-course-item ${active}"
            data-course="${course.id}"
          >

            <div class="lesson-course-icon ${course.color}">
              ${course.icon}
            </div>

            <div class="lesson-course-info">

              <strong>
                ${
                  course.premium &&
                  !hasPremiumAccess()
                    ? "🔒 "
                    : ""
                }
                ${escapeHTML(course.title)}
              </strong>

              <span>
                ${
                  course.premium
                    ? "👑 Premium"
                    : "FREE"
                }
                •
                ${completed}/${course.lessons.length}
                completed
              </span>

              <div class="mini-progress">
                <div
                  style="width:${progress}%"
                ></div>
              </div>

            </div>

          </button>
        `;
      })
      .join("");

  const course =
    getCurrentCourse();

  if (!course) return;

  let index =
    Number(state.currentLessonIndex) || 0;

  if (index < 0)
    index = 0;

  if (
    index >= course.lessons.length
  ) {
    index =
      course.lessons.length - 1;
  }

  state.currentLessonIndex = index;

  const lesson =
    course.lessons[index];

  if (
    course.premium &&
    !hasPremiumAccess()
  ) {

    content.innerHTML = `
      <div
        class="empty-state"
        style="text-align:center;padding:50px 20px;"
      >

        <div style="font-size:56px">
          🔒
        </div>

        <h2>
          Premium Course
        </h2>

        <p>
          ${escapeHTML(course.title)}
        </p>

        <button
          type="button"
          class="primary-btn"
          id="lessonPremiumButton"
        >
          👑 Unlock Premium
        </button>

      </div>
    `;

    document
      .getElementById(
        "lessonPremiumButton"
      )
      ?.addEventListener(
        "click",
        openPremiumAccess
      );

    return;
  }

  const key =
    `${course.id}-${index}`;

  const completed =
    state.completedLessons.includes(key);

  content.innerHTML = `

    <div class="lesson-content-header">

      <div>

        <span class="lesson-number">
          LESSON ${index + 1}
        </span>

        <h2>
          ${escapeHTML(lesson.title)}
        </h2>

        <p>
          ${escapeHTML(course.title)}
        </p>

      </div>

      <span class="course-badge">
        ${
          course.premium
            ? "👑 PREMIUM"
            : course.category.toUpperCase()
        }
      </span>

    </div>

    <div class="lesson-body">

      <div class="lesson-visual ${course.color}">
        ${course.icon}
      </div>

      <h3>
        ${escapeHTML(lesson.title)}
      </h3>

      <div class="lesson-text">
        ${lesson.content}
      </div>

    </div>

    <div class="lesson-footer">

      <button
        type="button"
        class="secondary-btn"
        data-lesson-action="previous"
        ${index === 0 ? "disabled" : ""}
      >
        ← Previous
      </button>

      <button
        type="button"
        class="primary-btn"
        data-lesson-action="complete"
      >
        ${
          completed
            ? "✓ Completed"
            : "Mark as Complete"
        }
      </button>

      <button
        type="button"
        class="secondary-btn"
        data-lesson-action="next"
        ${
          index === course.lessons.length - 1
            ? "disabled"
            : ""
        }
      >
        Next →
      </button>

    </div>
  `;
}

// ======================================================
// OPEN COURSE
// ======================================================

function openCourse(id) {

  const course = getCourse(id);

  if (!course) return;

  if (
    course.premium &&
    !hasPremiumAccess()
  ) {
    openPremiumAccess();
    return;
  }

  state.currentCourseId =
    course.id;

  const firstUncompleted =
    course.lessons.findIndex(
      (_, index) =>
        !state.completedLessons.includes(
          `${course.id}-${index}`
        )
    );

  state.currentLessonIndex =
    firstUncompleted >= 0
      ? firstUncompleted
      : course.lessons.length - 1;

  saveState();

  navigate("lessons");
}

// ======================================================
// LESSON NAVIGATION
// ======================================================

function previousLesson() {

  if (
    state.currentLessonIndex <= 0
  ) {
    showToast(
      "ဒါက ပထမဆုံး Lesson ဖြစ်ပါတယ်။"
    );
    return;
  }

  state.currentLessonIndex--;

  saveState();

  renderLessons();
}

function nextLesson() {

  const course =
    getCurrentCourse();

  if (!course) return;

  if (
    state.currentLessonIndex >=
    course.lessons.length - 1
  ) {
    showToast(
      "ဒီ Course ရဲ့ နောက်ဆုံး Lesson ရောက်နေပါပြီ။"
    );
    return;
  }

  state.currentLessonIndex++;

  saveState();

  renderLessons();
}

// ======================================================
// COMPLETE LESSON
// ======================================================

function completeCurrentLesson() {

  const course =
    getCurrentCourse();

  if (!course) return;

  if (
    course.premium &&
    !hasPremiumAccess()
  ) {
    openPremiumAccess();
    return;
  }

  const index =
    state.currentLessonIndex;

  const key =
    `${course.id}-${index}`;

  if (
    state.completedLessons.includes(key)
  ) {
    showToast(
      "ဒီ Lesson ကို ပြီးဆုံးပြီးသားပါ။"
    );
    return;
  }

  state.completedLessons.push(key);

  state.lessonDates[key] =
    Date.now();

  state.dailyGoal.minutes =
    Math.min(
      Number(state.dailyGoal.target) || 30,
      Number(state.dailyGoal.minutes) + 15
    );

  const today =
    todayKey();

  if (
    state.lastLearningDate !== today
  ) {

    if (
      state.lastLearningDate ===
      yesterdayKey()
    ) {
      state.streak =
        Number(state.streak || 0) + 1;
    } else {
      state.streak = 1;
    }

    state.lastLearningDate =
      today;
  }

  state.activity.unshift({
    title:
      course.lessons[index].title,

    course:
      course.title,

    time:
      "Just now",

    timestamp:
      Date.now()
  });

  state.activity =
    state.activity.slice(0, 10);

  if (
    index <
    course.lessons.length - 1
  ) {

    state.currentLessonIndex =
      index + 1;

  } else {

    const courseIndex =
      COURSES.findIndex(
        item =>
          item.id === course.id
      );

    const next =
      COURSES[courseIndex + 1];

    if (next) {

      state.currentCourseId =
        next.id;

      state.currentLessonIndex =
        0;

    }
  }

  saveState();

  showToast(
    "သင်ခန်းစာ ပြီးဆုံးပါပြီ ✓"
  );

  renderAll();
  renderLessons();
}

// ======================================================
// PROGRESS
// ======================================================

function renderProgress() {

  const set = (id, value) => {
    const el =
      document.getElementById(id);

    if (el)
      el.textContent = value;
  };

  set(
    "overallProgress",
    `${overallProgress()}%`
  );

  set(
    "progressCompleted",
    completedCount()
  );

  set(
    "progressRemaining",
    totalLessons() -
    completedCount()
  );

  set(
    "progressStreak",
    state.streak
  );

  const container =
    document.getElementById(
      "courseProgressList"
    );

  if (!container) return;

  container.innerHTML =
    COURSES
      .map(course => {

        const progress =
          courseProgress(course.id);

        return `
          <div class="course-progress-row">

            <div class="course-progress-name">

              <div class="small-icon ${course.color}">
                ${course.icon}
              </div>

              <div>

                <strong>
                  ${escapeHTML(course.title)}
                </strong>

                <span>
                  ${courseCompleted(course.id)}/${course.lessons.length}
                  lessons
                </span>

              </div>

            </div>

            <div class="course-progress-bar">
              <div>
                <span
                  style="width:${progress}%"
                ></span>
              </div>
            </div>

            <strong>
              ${progress}%
            </strong>

          </div>
        `;
      })
      .join("");
}

// ======================================================
// SALES
// ======================================================

function renderSales() {

  const target =
    Number(state.sales.target) || 0;

  const actual =
    Number(state.sales.actual) || 0;

  const achievement =
    target
      ? Math.round(
          actual / target * 100
        )
      : 0;

  const gap =
    Math.max(
      target - actual,
      0
    );

  const set = (id, value) => {
    const el =
      document.getElementById(id);

    if (el)
      el.textContent = value;
  };

  set(
    "salesTargetDisplay",
    target
  );

  set(
    "salesActualDisplay",
    actual
  );

  set(
    "salesAchievementDisplay",
    `${achievement}%`
  );

  set(
    "salesGapDisplay",
    gap
  );

  const targetInput =
    document.getElementById(
      "salesTargetInput"
    );

  const actualInput =
    document.getElementById(
      "salesActualInput"
    );

  if (targetInput)
    targetInput.value = target;

  if (actualInput)
    actualInput.value = actual;
}

// ======================================================
// CALCULATOR
// ======================================================

function formatMoney(value) {
  return `${Math.round(
    Number(value) || 0
  ).toLocaleString()} Ks`;
}

function calculatePrice() {

  const product =
    document.getElementById(
      "productName"
    );

  const cost =
    document.getElementById(
      "productCost"
    );

  const margin =
    document.getElementById(
      "productMargin"
    );

  if (!product || !cost || !margin)
    return;

  const name =
    product.value.trim() ||
    "Product";

  const c =
    Number(cost.value) || 0;

  const m =
    Math.min(
      99.99,
      Math.max(
        0,
        Number(margin.value) || 0
      )
    );

  const price =
    c / (1 - m / 100);

  const profit =
    price - c;

  state.calculator = {
    product: name,
    cost: c,
    margin: m
  };

  saveState();

  const set = (id, value) => {
    const el =
      document.getElementById(id);

    if (el)
      el.textContent = value;
  };

  set("resultProduct", name);
  set("resultPrice", formatMoney(price));
  set("resultCost", formatMoney(c));
  set("resultProfit", formatMoney(profit));
  set("resultMargin", `${m}%`);
}

function renderCalculator() {

  const data =
    state.calculator;

  const product =
    document.getElementById(
      "productName"
    );

  const cost =
    document.getElementById(
      "productCost"
    );

  const margin =
    document.getElementById(
      "productMargin"
    );

  if (!product || !cost || !margin)
    return;

  product.value =
    data.product;

  cost.value =
    data.cost;

  margin.value =
    data.margin;

  calculatePrice();
}

// ======================================================
// REPORTS
// ======================================================

function renderReports() {

  const set = (id, value) => {
    const el =
      document.getElementById(id);

    if (el)
      el.textContent = value;
  };

  set(
    "reportCourses",
    COURSES.length
  );

  set(
    "reportLessons",
    totalLessons()
  );

  set(
    "reportCompleted",
    completedCount()
  );

  set(
    "reportStreak",
    state.streak
  );

  set(
    "reportSalesTarget",
    state.sales.target
  );

  set(
    "reportSalesActual",
    state.sales.actual
  );

  const achievement =
    state.sales.target
      ? Math.round(
          state.sales.actual /
          state.sales.target *
          100
        )
      : 0;

  set(
    "reportSalesAchievement",
    `${achievement}%`
  );
}

// ======================================================
// SETTINGS
// ======================================================

function renderSettings() {

  const reminder =
    document.getElementById(
      "reminderToggle"
    );

  const tracking =
    document.getElementById(
      "trackingToggle"
    );

  if (reminder)
    reminder.checked =
      !!state.settings.reminder;

  if (tracking)
    tracking.checked =
      !!state.settings.tracking;
}

// ======================================================
// TOAST
// ======================================================

function showToast(message) {

  const toast =
    document.getElementById(
      "toast"
    );

  const text =
    document.getElementById(
      "toastMessage"
    );

  if (!toast || !text) return;

  text.textContent =
    message;

  toast.classList.add("show");

  clearTimeout(
    showToast.timer
  );

  showToast.timer =
    setTimeout(
      () =>
        toast.classList.remove("show"),
      2500
    );
}

// ======================================================
// MODAL
// ======================================================

function closeModal() {

  document
    .getElementById(
      "modalOverlay"
    )
    ?.classList.remove("show");
}

function showModal(
  title,
  text
) {

  const overlay =
    document.getElementById(
      "modalOverlay"
    );

  const modalTitle =
    document.getElementById(
      "modalTitle"
    );

  const modalText =
    document.getElementById(
      "modalText"
    );

  if (!overlay) return;

  if (modalTitle)
    modalTitle.textContent =
      title;

  if (modalText)
    modalText.innerHTML =
      text;

  overlay.classList.add("show");
}

// ======================================================
// SIDEBAR
// ======================================================

function openSidebar() {

  document
    .getElementById("sidebar")
    ?.classList.add("open");

  document
    .getElementById("sidebarOverlay")
    ?.classList.add("show");
}

function closeSidebar() {

  document
    .getElementById("sidebar")
    ?.classList.remove("open");

  document
    .getElementById("sidebarOverlay")
    ?.classList.remove("show");
}

// ======================================================
// AI COACH
// ======================================================

function aiResponse(question) {

  const q =
    question.toLowerCase();

  if (
    q.includes("sales") ||
    q.includes("အရောင်း") ||
    q.includes("target")
  ) {
    return `
      <strong>Sales Management</strong>
      <p>Target ကို Daily, Weekly နဲ့ Monthly အဖြစ် ခွဲပါ။</p>
      <p>People, Customer, Territory နဲ့ Execution အလိုက် Gap ကိုရှာပြီး Action Plan ချပါ။</p>
    `;
  }

  if (
    q.includes("team") ||
    q.includes("အဖွဲ့") ||
    q.includes("employee") ||
    q.includes("ဝန်ထမ်း")
  ) {
    return `
      <strong>People Management</strong>
      <p>Clear Expectations ပေးပြီး Coaching, Feedback နဲ့ Empowerment ကို အသုံးပြုပါ။</p>
    `;
  }

  if (
    q.includes("marketing") ||
    q.includes("စျေးကွက်")
  ) {
    return `
      <strong>Marketing Strategy</strong>
      <p>Customer Need ကို နားလည်ပြီး Segment, Positioning, Marketing Mix နဲ့ Promotion ကို စနစ်တကျ ချမှတ်ပါ။</p>
    `;
  }

  if (
    q.includes("profit") ||
    q.includes("finance") ||
    q.includes("အမြတ်")
  ) {
    return `
      <strong>Finance Management</strong>
      <p>Revenue, Cost, Profit, Margin နဲ့ Cash Flow ကို အမြဲစောင့်ကြည့်ပါ။</p>
    `;
  }

  if (
    q.includes("customer") ||
    q.includes("ဖောက်သည်")
  ) {
    return `
      <strong>Customer Management</strong>
      <p>Customer Need ကို နားလည်ပြီး Value, Service နဲ့ Follow-up ကောင်းကောင်းပေးပါ။</p>
    `;
  }

  return `
    <strong>Business Coach</strong>
    <p>ပြဿနာတစ်ခုကို ဖြေရှင်းရာမှာ <b>People + Numbers + Execution</b> သုံးခုကို အရင်ကြည့်ပါ။</p>
  `;
}

function sendAIMessage(question) {

  const container =
    document.getElementById(
      "chatMessages"
    );

  if (!container || !question.trim())
    return;

  container.insertAdjacentHTML(
    "beforeend",
    `
      <div class="chat-message user">

        <div class="message-avatar">
          AZ
        </div>

        <div class="message-content">

          <strong>You</strong>

          <p>
            ${escapeHTML(question)}
          </p>

        </div>

      </div>
    `
  );

  setTimeout(() => {

    container.insertAdjacentHTML(
      "beforeend",
      `
        <div class="chat-message assistant">

          <div class="message-avatar">
            AI
          </div>

          <div class="message-content">

            <strong>
              Business Coach
            </strong>

            <div>
              ${aiResponse(question)}
            </div>

          </div>

        </div>
      `
    );

    container.scrollTop =
      container.scrollHeight;

  }, 300);
}

// ======================================================
// EVENT SYSTEM
// ======================================================

function initializeApp() {

  if (academyInitialized)
    return;

  document.addEventListener(
    "click",
    event => {

      const target =
        event.target;

      if (!(target instanceof Element))
        return;

      const nav =
        target.closest(".nav-item");

      if (nav) {

        event.preventDefault();

        navigate(
          nav.dataset.page
        );

        return;
      }

      const go =
        target.closest("[data-go]");

      if (go) {

        event.preventDefault();

        navigate(
          go.dataset.go
        );

        return;
      }

      const open =
        target.closest(".open-course");

      if (open) {

        event.preventDefault();

        openCourse(
          open.dataset.course
        );

        return;
      }

      const lessonCourse =
        target.closest(
          ".lesson-course-item"
        );

      if (lessonCourse) {

        openCourse(
          lessonCourse.dataset.course
        );

        return;
      }

      const continueBtn =
        target.closest(
          "#continueLearningBtn"
        );

      if (continueBtn) {

        const data =
          getCurrentLearning();

        if (!data) return;

        if (data.locked) {

          openPremiumAccess();

          return;
        }

        state.currentCourseId =
          data.course.id;

        state.currentLessonIndex =
          data.index;

        saveState();

        navigate("lessons");

        return;
      }

      const action =
        target.closest(
          "[data-lesson-action]"
        );

      if (action) {

        const type =
          action.dataset.lessonAction;

        if (type === "previous")
          previousLesson();

        if (type === "next")
          nextLesson();

        if (type === "complete")
          completeCurrentLesson();

        return;
      }

      const aiQuestion =
        target.closest(
          ".ai-question"
        );

      if (aiQuestion) {

        const input =
          document.getElementById(
            "chatInput"
          );

        if (input) {

          input.value =
            aiQuestion.textContent.trim();

          document
            .getElementById(
              "sendChatBtn"
            )
            ?.click();
        }

        return;
      }

      const aiTool =
        target.closest(
          ".ai-tool-card"
        );

      if (aiTool) {

        navigate("ai-coach");

        const input =
          document.getElementById(
            "chatInput"
          );

        if (input) {

          const messages = {
            sales:
              "Sales Target တိုးတက်အောင် Action Plan ရေးပေးပါ။",

            customer:
              "Customer Growth Strategy ရေးပေးပါ။",

            team:
              "Sales Team Coaching Plan ရေးပေးပါ။",

            business:
              "Business Growth Strategy ရေးပေးပါ။"
          };

          input.value =
            messages[
              aiTool.dataset.tool
            ] || "";

          document
            .getElementById(
              "sendChatBtn"
            )
            ?.click();
        }

        return;
      }
    }
  );

  // FILTERS

  document
    .querySelectorAll(".filter-tab")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          document
            .querySelectorAll(
              ".filter-tab"
            )
            .forEach(item =>
              item.classList.remove(
                "active"
              )
            );

          button.classList.add(
            "active"
          );

          renderCourses(
            button.dataset.filter ||
              "all"
          );
        }
      );
    });

  // SALES

  document
    .getElementById(
      "updateSalesBtn"
    )
    ?.addEventListener(
      "click",
      () => {

        state.sales.target =
          Number(
            document.getElementById(
              "salesTargetInput"
            )?.value
          ) || 0;

        state.sales.actual =
          Number(
            document.getElementById(
              "salesActualInput"
            )?.value
          ) || 0;

        state.sales.history.push(
          state.sales.actual
        );

        state.sales.history =
          state.sales.history.slice(-7);

        saveState();

        renderSales();
        renderReports();

        showToast(
          "Sales performance updated."
        );
      }
    );

  // CALCULATOR

  document
    .getElementById(
      "calculateBtn"
    )
    ?.addEventListener(
      "click",
      calculatePrice
    );

  // AI

  const send =
    document.getElementById(
      "sendChatBtn"
    );

  const input =
    document.getElementById(
      "chatInput"
    );

  if (send && input) {

    send.addEventListener(
      "click",
      () => {

        const value =
          input.value.trim();

        if (!value) return;

        sendAIMessage(value);

        input.value = "";
      }
    );

    input.addEventListener(
      "keydown",
      event => {

        if (event.key === "Enter") {

          event.preventDefault();

          send.click();
        }
      }
    );
  }

  // MOBILE

  document
    .getElementById(
      "mobileMenu"
    )
    ?.addEventListener(
      "click",
      openSidebar
    );

  document
    .getElementById(
      "sidebarOverlay"
    )
    ?.addEventListener(
      "click",
      closeSidebar
    );

  // SETTINGS

  document
    .getElementById(
      "reminderToggle"
    )
    ?.addEventListener(
      "change",
      event => {

        state.settings.reminder =
          event.target.checked;

        saveState();
      }
    );

  document
    .getElementById(
      "trackingToggle"
    )
    ?.addEventListener(
      "change",
      event => {

        state.settings.tracking =
          event.target.checked;

        saveState();
      }
    );

  // RESET

  document
    .getElementById(
      "resetDataBtn"
    )
    ?.addEventListener(
      "click",
      () => {

        if (
          !confirm(
            "Learning Progress အားလုံး Reset လုပ်မှာ သေချာပါသလား?"
          )
        ) return;

        localStorage.removeItem(
          STORAGE_KEY
        );

        state =
          createDefaultState();

        saveState();

        renderAll();

        navigate(
          "dashboard"
        );

        showToast(
          "Academy Data Reset ပြီးပါပြီ။"
        );
      }
    );

  // NOTIFICATION

  document
    .getElementById(
      "notificationBtn"
    )
    ?.addEventListener(
      "click",
      () =>
        showToast(
          "လက်ရှိ Notification မရှိသေးပါ။"
        )
    );

  // MODAL

  document
    .getElementById(
      "modalClose"
    )
    ?.addEventListener(
      "click",
      closeModal
    );

  document
    .getElementById(
      "modalOverlay"
    )
    ?.addEventListener(
      "click",
      event => {

        if (
          event.target ===
          event.currentTarget
        ) {
          closeModal();
        }
      }
    );

  academyInitialized = true;
}

// ======================================================
// RENDER ALL
// ======================================================

function renderAll() {

  if (!state) return;

  renderDashboard();
  renderCourses();
  renderLessons();
  renderProgress();
  renderSales();
  renderCalculator();
  renderReports();
  renderSettings();
}

// ======================================================
// INIT
// ======================================================

function initAcademy() {

  if (academyInitialized)
    return;

  state =
    loadState();

  if (
    !getCourse(
      state.currentCourseId
    )
  ) {

    state.currentCourseId =
      COURSES[0]?.id || null;

    state.currentLessonIndex = 0;
  }

  initializeApp();

  renderAll();

  navigate(
    VALID_PAGES.includes(
      state.currentPage
    )
      ? state.currentPage
      : "dashboard"
  );

  saveState();

  console.log(
    "Aung Business Academy initialized"
  );

  console.log(
    `Courses: ${COURSES.length}`
  );

  console.log(
    `Lessons: ${totalLessons()}`
  );
}

// ======================================================
// START
// ======================================================

if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    initAcademy,
    { once: true }
  );

} else {

  initAcademy();
}

// ======================================================
// GLOBAL API
// ======================================================

window.AungAcademy = {

  courses: COURSES,

  get state() {
    return state;
  },

  navigate,

  renderAll,

  renderDashboard,

  renderCourses,

  renderLessons,

  renderProgress,

  renderSales,

  renderCalculator,

  renderReports,

  openCourse,

  completeCurrentLesson,

  previousLesson,

  nextLesson,

  getCurrentCourse,

  getTotalLessons:
    totalLessons,

  getCompletedCount:
    completedCount,

  getOverallProgress:
    overallProgress,

  getCourseProgress:
    courseProgress,

  isPremiumCourse,

  hasPremiumAccess,

  openPremiumAccess
};

window.isPremiumCourse =
  isPremiumCourse;

window.hasPremiumAccess =
  hasPremiumAccess;

window.openPremiumAccess =
  openPremiumAccess;

window.closeModal =
  closeModal;
