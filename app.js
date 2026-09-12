// ======================================================
// AUNG BUSINESS ACADEMY
// PROFESSIONAL BUSINESS LEARNING SYSTEM
// FULL APP.JS — V10
// ======================================================

"use strict";

/* ======================================================
   STORAGE
====================================================== */

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

/* ======================================================
   COURSE LIBRARY
====================================================== */

const COURSES = [

  /* ====================================================
     1. SALES MANAGEMENT
  ==================================================== */

  {
    id: "sales-management",
    title: "Sales Management Mastery",
    category: "sales",
    icon: "↗",
    color: "blue",
    premium: false,
    description:
      "Sales Target, Team Coaching, Territory, Customer Management နှင့် Sales Performance ကို လက်တွေ့အသုံးချနိုင်ရန် သင်ယူပါ။",
    lessons: [

      {
        title: "Sales Management Fundamentals",
        content: `
          <h3>Sales Management ဆိုတာဘာလဲ?</h3>
          <p>Sales Management ဆိုတာ Sales Team, Customer, Market နဲ့ Execution ကို စနစ်တကျ စီမံခန့်ခွဲပြီး Business Target ကို အောင်မြင်အောင်လုပ်ခြင်း ဖြစ်ပါတယ်။</p>

          <h4>Manager ရဲ့ အဓိကတာဝန်များ</h4>
          <ul>
            <li>Sales Target Management</li>
            <li>People Management</li>
            <li>Customer Management</li>
            <li>Territory Management</li>
            <li>Performance Management</li>
          </ul>

          <div class="lesson-highlight">
            <strong>Manager Mindset</strong>
            <p>Target ပဲကြည့်တာမဟုတ်ဘဲ People + Customer + Market + Execution အားလုံးကို ချိတ်ဆက်စီမံရပါမယ်။</p>
          </div>
        `
      },

      {
        title: "Target Planning",
        content: `
          <h3>Target Planning</h3>
          <p>Annual Target ကို Monthly, Weekly, Daily Target အဖြစ် ခွဲပြီး လက်တွေ့အကောင်အထည်ဖော်နိုင်အောင် စီမံရပါမယ်။</p>

          <h4>Target ချမှတ်ရာတွင် ကြည့်ရမည့်အချက်များ</h4>
          <ul>
            <li>Previous Performance</li>
            <li>Market Potential</li>
            <li>Customer Base</li>
            <li>Growth Opportunity</li>
            <li>Seasonality</li>
          </ul>

          <p><strong>Annual Target → Monthly Target → Weekly Target → Daily Execution</strong></p>
        `
      },

      {
        title: "Sales Execution",
        content: `
          <h3>Sales Execution</h3>
          <p>Plan တစ်ခုရှိရုံနဲ့ မလုံလောက်ပါဘူး။ Field မှာ Execution ကောင်းရပါမယ်။</p>

          <ul>
            <li>Daily Visit Plan</li>
            <li>Customer Coverage</li>
            <li>Order Generation</li>
            <li>Follow-up</li>
            <li>Execution Review</li>
          </ul>

          <div class="lesson-highlight">
            <strong>Execution Formula</strong>
            <p>Plan → Execute → Monitor → Review → Improve</p>
          </div>
        `
      },

      {
        title: "Sales Team Coaching",
        content: `
          <h3>Sales Team Coaching</h3>
          <p>Sales Manager တစ်ယောက်အနေနဲ့ Team ကို အမိန့်ပေးခြင်းထက် Coaching & Empowerment လုပ်ပေးနိုင်ရပါမယ်။</p>

          <ul>
            <li>Coaching</li>
            <li>Feedback</li>
            <li>Empowerment</li>
            <li>Accountability</li>
          </ul>

          <p>Team Member တစ်ယောက်ရဲ့ Performance Gap ကိုရှာပြီး Root Cause အပေါ်မူတည်ပြီး Coaching Plan ပြုလုပ်ပါ။</p>
        `
      },

      {
        title: "Territory Management",
        content: `
          <h3>Territory Management</h3>

          <p>Territory တစ်ခုကို စီမံရာမှာ Territory Potential နဲ့ Customer Density ကို နားလည်ရပါမယ်။</p>

          <ul>
            <li>Territory Potential</li>
            <li>Customer Density</li>
            <li>Route Planning</li>
            <li>Coverage Frequency</li>
            <li>Sales Opportunity</li>
          </ul>

          <p>Potential မြင့်တဲ့ Territory ကို Resource ပိုမိုကောင်းမွန်စွာ ခွဲဝေပေးသင့်ပါတယ်။</p>
        `
      },

      {
        title: "Customer Management",
        content: `
          <h3>Customer Management</h3>

          <p>Customer တစ်ယောက်ချင်းစီရဲ့ Value, Potential, Purchase Pattern နဲ့ Business Need ကို သိထားရပါမယ်။</p>

          <ul>
            <li>Customer Value</li>
            <li>Customer Potential</li>
            <li>Purchase Pattern</li>
            <li>Business Need</li>
            <li>Relationship Management</li>
          </ul>
        `
      },

      {
        title: "Sales Performance Review",
        content: `
          <h3>Sales Performance Review</h3>

          <p>Performance Review မှာ Target, Actual နဲ့ Gap ကို အရင်ဆုံးကြည့်ရပါမယ်။</p>

          <div class="lesson-highlight">
            <strong>Performance Formula</strong>
            <p>Target vs Actual → Gap → Root Cause → Action Plan</p>
          </div>

          <h4>Root Cause Categories</h4>
          <ul>
            <li>People</li>
            <li>Product</li>
            <li>Customer</li>
            <li>Territory</li>
            <li>Execution</li>
          </ul>
        `
      }
    ]
  },

  /* ====================================================
     2. LEADERSHIP
  ==================================================== */

  {
    id: "leadership",
    title: "Leadership Excellence",
    category: "leadership",
    icon: "★",
    color: "purple",
    premium: true,
    description:
      "Leadership Mindset, Coaching, Communication, Performance Management နှင့် Conflict Management ကို လေ့လာပါ။",
    lessons: [

      {
        title: "Leadership Fundamentals",
        content: `
          <h3>Leadership ဆိုတာ Position မဟုတ်ပါ</h3>
          <p>Leadership ဆိုတာ လူတွေရဲ့ အတွေးအခေါ်၊ လုပ်ဆောင်ချက်နဲ့ Result ကို အပြုသဘောဆောင်စွာ Influence လုပ်နိုင်ခြင်း ဖြစ်ပါတယ်။</p>

          <ul>
            <li>Influence</li>
            <li>Direction</li>
            <li>Trust</li>
            <li>Accountability</li>
          </ul>
        `
      },

      {
        title: "Leadership Mindset",
        content: `
          <h3>Leadership Mindset</h3>

          <ul>
            <li>Ownership</li>
            <li>Accountability</li>
            <li>Continuous Improvement</li>
            <li>Positive Leadership</li>
          </ul>

          <p>ပြဿနာတွေကို အပြစ်တင်မယ့်အစား Solution ရှာတဲ့ Mindset ရှိရပါမယ်။</p>
        `
      },

      {
        title: "Coaching & Empowerment",
        content: `
          <h3>Coaching & Empowerment</h3>

          <p>Manager တစ်ယောက်ရဲ့ အလုပ်က Team Member အားလုံးကို ကိုယ်တိုင်လုပ်ပေးခြင်း မဟုတ်ပါ။ ကိုယ်တိုင်ဆုံးဖြတ်ပြီး လုပ်နိုင်အောင် ဖွံ့ဖြိုးပေးခြင်း ဖြစ်ပါတယ်။</p>

          <p><strong>Clear Expectations + Ownership + Feedback</strong></p>

          <p>Micromanagement မလုပ်ဘဲ Ownership နဲ့ Accountability ပေးပါ။</p>
        `
      },

      {
        title: "Performance Management",
        content: `
          <h3>Performance Management</h3>

          <p>KPI, Target, Actual နဲ့ Gap ကို ပုံမှန် Review လုပ်ရပါမယ်။</p>

          <ul>
            <li>KPI</li>
            <li>Target</li>
            <li>Actual</li>
            <li>Gap</li>
            <li>Action Plan</li>
          </ul>
        `
      },

      {
        title: "Communication Skills",
        content: `
          <h3>Communication Skills</h3>

          <ul>
            <li>Active Listening</li>
            <li>Clear Direction</li>
            <li>Constructive Feedback</li>
            <li>Respectful Communication</li>
          </ul>

          <p>ကောင်းမွန်တဲ့ Communication က Team Performance ကို တိုက်ရိုက်သက်ရောက်စေပါတယ်။</p>
        `
      },

      {
        title: "Conflict Management",
        content: `
          <h3>Conflict Management</h3>

          <div class="lesson-highlight">
            <strong>Conflict Flow</strong>
            <p>Fact → Root Cause → Solution → Agreement</p>
          </div>

          <p>Conflict ဖြစ်တဲ့အခါ လူကို အပြစ်တင်တာထက် ပြဿနာရဲ့ အကြောင်းရင်းကို ရှာဖွေပြီး ဖြေရှင်းချက်ပေါ် အာရုံစိုက်ပါ။</p>
        `
      }
    ]
  },

  /* ====================================================
     3. HR
  ==================================================== */

  {
    id: "hr-management",
    title: "HR Management",
    category: "hr",
    icon: "♟",
    color: "pink",
    premium: true,
    description:
      "Recruitment, Performance, Training, Motivation နှင့် Employee Retention ကို စနစ်တကျ လေ့လာပါ။",
    lessons: [

      {
        title: "HR Fundamentals",
        content: `
          <h3>HR Fundamentals</h3>
          <p>HR Management ရဲ့ အဓိကရည်ရွယ်ချက်က People Capability ကို မြှင့်တင်ပြီး Business Result ရရှိအောင်လုပ်ခြင်း ဖြစ်ပါတယ်။</p>
        `
      },

      {
        title: "Recruitment & Selection",
        content: `
          <h3>Recruitment & Selection</h3>
          <p>လူရွေးချယ်ရာမှာ Skill တစ်ခုတည်းမကြည့်ဘဲ Attitude, Potential နဲ့ Job Fit ကိုပါကြည့်ရပါမယ်။</p>

          <ul>
            <li>Skill</li>
            <li>Attitude</li>
            <li>Potential</li>
            <li>Job Fit</li>
          </ul>
        `
      },

      {
        title: "Employee Performance",
        content: `
          <h3>Employee Performance</h3>
          <p>Performance ကို Clear KPI နဲ့ Measurable Target သတ်မှတ်ပြီး Review လုပ်ပါ။</p>
        `
      },

      {
        title: "Training & Development",
        content: `
          <h3>Training & Development</h3>

          <p>Skill Gap Analysis ပြုလုပ်ပြီး Training, Coaching နဲ့ Follow-up ပြုလုပ်ပါ။</p>

          <p><strong>Skill Gap → Training → Coaching → Follow-up</strong></p>
        `
      },

      {
        title: "Employee Motivation",
        content: `
          <h3>Employee Motivation</h3>

          <ul>
            <li>Recognition</li>
            <li>Growth Opportunity</li>
            <li>Trust</li>
            <li>Ownership</li>
          </ul>

          <p>လူတိုင်းကို တစ်မျိုးတည်းနဲ့ Motivate လုပ်လို့မရပါ။ Individual Motivation Driver ကို နားလည်ရပါမယ်။</p>
        `
      },

      {
        title: "Employee Retention",
        content: `
          <h3>Employee Retention</h3>

          <ul>
            <li>Career Development</li>
            <li>Manager Support</li>
            <li>Work Environment</li>
            <li>Recognition</li>
          </ul>
        `
      }
    ]
  },

  /* ====================================================
     4. MARKETING
  ==================================================== */

  {
    id: "marketing",
    title: "Marketing Fundamentals",
    category: "marketing",
    icon: "◆",
    color: "red",
    premium: true,
    description:
      "Customer Segmentation, Target Customer, Positioning, Marketing Mix နှင့် Promotion Strategy ကို လေ့လာပါ။",
    lessons: [

      {
        title: "Marketing Fundamentals",
        content: `
          <h3>Marketing ဆိုတာဘာလဲ?</h3>
          <p>Marketing ဆိုတာ Customer Need ကို နားလည်ပြီး Customer အတွက် Value ဖန်တီးပေးခြင်း ဖြစ်ပါတယ်။</p>
        `
      },

      {
        title: "Customer Segmentation",
        content: `
          <h3>Customer Segmentation</h3>

          <ul>
            <li>Need</li>
            <li>Behavior</li>
            <li>Location</li>
            <li>Income</li>
            <li>Potential</li>
          </ul>
        `
      },

      {
        title: "Target Customer",
        content: `
          <h3>Target Customer</h3>

          <p>Target Customer ကို သတ်မှတ်ရာမှာ အောက်ပါမေးခွန်းတွေကို ဖြေပါ။</p>

          <ul>
            <li>Who?</li>
            <li>What do they need?</li>
            <li>Why do they buy?</li>
            <li>Where can we reach them?</li>
          </ul>
        `
      },

      {
        title: "Brand Positioning",
        content: `
          <h3>Brand Positioning</h3>

          <p>Customer ရဲ့ စိတ်ထဲမှာ မိမိ Brand ကို ဘယ်လို Position ချထားမလဲဆိုတာ Brand Positioning ဖြစ်ပါတယ်။</p>
        `
      },

      {
        title: "Marketing Mix",
        content: `
          <h3>Marketing Mix — 4P</h3>

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
          <h3>Promotion Strategy</h3>

          <p>Discount တစ်ခုတည်းကို အားကိုးမယ့်အစား Customer Value, Communication နဲ့ Offer Strategy ကို အသုံးချပါ။</p>
        `
      },

      {
        title: "Marketing Performance",
        content: `
          <h3>Marketing Performance</h3>

          <ul>
            <li>Reach</li>
            <li>Engagement</li>
            <li>Leads</li>
            <li>Conversion</li>
            <li>Revenue</li>
          </ul>
        `
      }
    ]
  },

  /* ====================================================
     5. BUSINESS BASICS
  ==================================================== */

  {
    id: "business-basics",
    title: "Business Basics",
    category: "business",
    icon: "●",
    color: "green",
    premium: false,
    description:
      "Business Model, Value Proposition, Revenue, Cost နဲ့ Profit အခြေခံများကို လေ့လာပါ။",
    lessons: [

      {
        title: "What is Business?",
        content: `
          <h3>Business ဆိုတာဘာလဲ?</h3>
          <p>Business ဆိုတာ Customer Problem ကို ဖြေရှင်းပေးပြီး Value ဖန်တီးကာ Revenue ရရှိစေတဲ့ စနစ်တစ်ခု ဖြစ်ပါတယ်။</p>
        `
      },

      {
        title: "Business Model",
        content: `
          <h3>Business Model</h3>

          <ul>
            <li>Customer</li>
            <li>Value Proposition</li>
            <li>Revenue</li>
            <li>Cost</li>
            <li>Key Activities</li>
          </ul>
        `
      },

      {
        title: "Value Proposition",
        content: `
          <h3>Value Proposition</h3>

          <p>Customer က ဘာကြောင့် မိမိ Product/Service ကို ဝယ်သင့်သလဲဆိုတာ Value Proposition က ဖြေဆိုပေးပါတယ်။</p>
        `
      },

      {
        title: "Revenue & Cost",
        content: `
          <h3>Revenue & Cost</h3>

          <p>Revenue တိုးလာတာနဲ့ Profit တိုးလာတာ အမြဲတမ်းတူညီမနေပါ။ Cost Structure ကိုပါ စီမံရပါမယ်။</p>
        `
      }
    ]
  },

  /* ====================================================
     6. BUSINESS STRATEGY
  ==================================================== */

  {
    id: "business-strategy",
    title: "Business Strategy",
    category: "strategy",
    icon: "◆",
    color: "teal",
    premium: true,
    description:
      "Strategic Thinking, Market Analysis, Competitive Advantage နှင့် Growth Strategy ကို လေ့လာပါ။",
    lessons: [

      {
        title: "Strategic Thinking",
        content: `
          <h3>Strategic Thinking</h3>
          <p>လက်ရှိလုပ်ဆောင်ချက်တင်မကဘဲ Long-term Result ကိုပါ စဉ်းစားခြင်း ဖြစ်ပါတယ်။</p>
        `
      },

      {
        title: "Market Analysis",
        content: `
          <h3>Market Analysis</h3>

          <ul>
            <li>Market Size</li>
            <li>Customer Need</li>
            <li>Competitor</li>
            <li>Market Trend</li>
          </ul>
        `
      },

      {
        title: "Competitive Advantage",
        content: `
          <h3>Competitive Advantage</h3>
          <p>ပြိုင်ဘက်တွေထက် Customer အတွက် ပိုကောင်းတဲ့ Value ပေးနိုင်တဲ့ အားသာချက်ကို ရှာဖွေပါ။</p>
        `
      },

      {
        title: "Growth Strategy",
        content: `
          <h3>Growth Strategy</h3>

          <ul>
            <li>New Customers</li>
            <li>Existing Customer Value</li>
            <li>New Products</li>
            <li>New Markets</li>
          </ul>
        `
      },

      {
        title: "Strategic Action Plan",
        content: `
          <h3>Strategic Action Plan</h3>

          <p>Strategy ကို လက်တွေ့လုပ်ဆောင်ရန် အောက်ပါအချက်များကို သတ်မှတ်ပါ။</p>

          <ul>
            <li>What?</li>
            <li>Who?</li>
            <li>When?</li>
            <li>How?</li>
            <li>How to Measure?</li>
          </ul>
        `
      }
    ]
  },

  /* ====================================================
     7. BRAND
  ==================================================== */

  {
    id: "brand-basics",
    title: "Brand Basics",
    category: "marketing",
    icon: "◆",
    color: "orange",
    premium: true,
    description:
      "Brand Identity, Positioning နဲ့ Customer Experience ကို အခြေခံကနေ လေ့လာပါ။",
    lessons: [

      {
        title: "What is a Brand?",
        content: `
          <h3>Brand ဆိုတာ Logo တစ်ခုတည်းမဟုတ်ပါ</h3>
          <p>Brand ဆိုတာ Customer ရဲ့ စိတ်ထဲမှာ မိမိ Business အပေါ်ရှိတဲ့ Perception ဖြစ်ပါတယ်။</p>
        `
      },

      {
        title: "Brand Identity",
        content: `
          <h3>Brand Identity</h3>

          <ul>
            <li>Name</li>
            <li>Logo</li>
            <li>Color</li>
            <li>Message</li>
            <li>Tone</li>
            <li>Experience</li>
          </ul>
        `
      },

      {
        title: "Brand Positioning",
        content: `
          <h3>Brand Positioning</h3>
          <p>Customer ရဲ့ စိတ်ထဲမှာ မိမိ Brand ကို ဘယ်လိုနေရာယူစေချင်သလဲဆိုတာ သတ်မှတ်ပါ။</p>
        `
      },

      {
        title: "Customer Experience",
        content: `
          <h3>Customer Experience</h3>
          <p>Brand Promise နဲ့ Customer ရရှိတဲ့ Experience တူညီရပါမယ်။</p>
        `
      }
    ]
  },

  /* ====================================================
     8. NEGOTIATION
  ==================================================== */

  {
    id: "negotiation",
    title: "Negotiation Skills",
    category: "business",
    icon: "⇄",
    color: "indigo",
    premium: true,
    description:
      "Preparation, Objection Handling, Win-Win Negotiation နှင့် Closing Skills ကို လေ့လာပါ။",
    lessons: [

      {
        title: "Negotiation Fundamentals",
        content: `
          <h3>Negotiation ဆိုတာ အနိုင်ယူခြင်းမဟုတ်ပါ</h3>
          <p>နှစ်ဖက်စလုံးအတွက် လက်ခံနိုင်တဲ့ Agreement တစ်ခု ရရှိအောင် ဆွေးနွေးခြင်း ဖြစ်ပါတယ်။</p>
        `
      },

      {
        title: "Preparation",
        content: `
          <h3>Negotiation Preparation</h3>

          <ul>
            <li>Objective</li>
            <li>Minimum Acceptable Result</li>
            <li>Customer Need</li>
            <li>Alternative Options</li>
          </ul>
        `
      },

      {
        title: "Handling Objections",
        content: `
          <h3>Handling Objections</h3>

          <p>Objection ကို ချက်ချင်းပြန်ငြင်းမယ့်အစား နားထောင်ပြီး Root Concern ကို ရှာပါ။</p>
        `
      },

      {
        title: "Win-Win Negotiation",
        content: `
          <h3>Win-Win Negotiation</h3>

          <p>Price တစ်ခုတည်းမဟုတ်ဘဲ အောက်ပါအချက်တွေကိုပါ Negotiation လုပ်နိုင်ပါတယ်။</p>

          <ul>
            <li>Payment Terms</li>
            <li>Volume</li>
            <li>Service</li>
            <li>Delivery</li>
            <li>Long-term Value</li>
          </ul>
        `
      },

      {
        title: "Closing",
        content: `
          <h3>Negotiation Closing</h3>

          <ul>
            <li>Next Step</li>
            <li>Responsibility</li>
            <li>Timeline</li>
            <li>Agreement</li>
          </ul>
        `
      }
    ]
  },

  /* ====================================================
     9. CUSTOMER SERVICE
  ==================================================== */

  {
    id: "customer-service",
    title: "Customer Service Excellence",
    category: "business",
    icon: "♥",
    color: "cyan",
    premium: true,
    description:
      "Customer Need, Complaint Handling နဲ့ Customer Loyalty တည်ဆောက်ခြင်းကို လေ့လာပါ။",
    lessons: [

      {
        title: "Customer Service Fundamentals",
        content: `
          <h3>Customer Service</h3>
          <p>Customer Service ဆိုတာ Customer ရဲ့ Problem ကို ကောင်းမွန်စွာ ဖြေရှင်းပေးခြင်း ဖြစ်ပါတယ်။</p>
        `
      },

      {
        title: "Customer Needs",
        content: `
          <h3>Customer Needs</h3>
          <p>Active Listening ပြုလုပ်ပြီး Customer ရဲ့ အမှန်တကယ်လိုအပ်ချက်ကို နားလည်ပါ။</p>
        `
      },

      {
        title: "Complaint Handling",
        content: `
          <h3>Complaint Handling</h3>

          <div class="lesson-highlight">
            <strong>5-Step Service Recovery</strong>
            <p>Listen → Understand → Apologize → Solve → Follow-up</p>
          </div>
        `
      },

      {
        title: "Customer Loyalty",
        content: `
          <h3>Customer Loyalty</h3>

          <ul>
            <li>Consistency</li>
            <li>Trust</li>
            <li>Fast Response</li>
            <li>Value</li>
          </ul>
        `
      }
    ]
  },

  /* ====================================================
     10. PEOPLE MANAGEMENT
  ==================================================== */

  {
    id: "people-management",
    title: "People Management",
    category: "hr",
    icon: "♟",
    color: "violet",
    premium: true,
    description:
      "Delegation, Motivation, Accountability နှင့် Team Development ကို လေ့လာပါ။",
    lessons: [

      {
        title: "People Management Fundamentals",
        content: `
          <h3>People Management</h3>
          <p>People Management ဆိုတာ လူတွေကို Control လုပ်ခြင်းမဟုတ်ဘဲ Capability နဲ့ Performance ကို မြှင့်တင်ပေးခြင်း ဖြစ်ပါတယ်။</p>
        `
      },

      {
        title: "Delegation",
        content: `
          <h3>Delegation</h3>
          <p>တာဝန်ပေးရုံမက Responsibility နဲ့ Authority ကိုပါ သင့်တော်စွာ ပေးရပါမယ်။</p>
        `
      },

      {
        title: "Motivation",
        content: `
          <h3>Motivation</h3>
          <p>Team Member တစ်ယောက်ချင်းစီရဲ့ Motivation Driver မတူညီနိုင်ပါတယ်။</p>
        `
      },

      {
        title: "Accountability",
        content: `
          <h3>Accountability</h3>
          <p>Clear Expectation + Measurement + Follow-up က Accountability တည်ဆောက်ရာမှာ အရေးကြီးပါတယ်။</p>
        `
      },

      {
        title: "Team Development",
        content: `
          <h3>Team Development</h3>

          <ul>
            <li>Training</li>
            <li>Coaching</li>
            <li>Feedback</li>
            <li>Challenging Assignments</li>
          </ul>
        `
      }
    ]
  },

  /* ====================================================
     11. BUSINESS FINANCE
  ==================================================== */

  {
    id: "business-finance",
    title: "Business Finance",
    category: "finance",
    icon: "▣",
    color: "yellow",
    premium: true,
    description:
      "Revenue, Cost, Profit, Margin, Cash Flow နဲ့ Budget vs Actual ကို လေ့လာပါ။",
    lessons: [

      {
        title: "Finance Fundamentals",
        content: `
          <h3>Finance Fundamentals</h3>

          <ul>
            <li>Revenue</li>
            <li>Cost</li>
            <li>Profit</li>
            <li>Cash Flow</li>
          </ul>
        `
      },

      {
        title: "Revenue Management",
        content: `
          <h3>Revenue Management</h3>

          <p>Revenue ကို Product, Customer, Territory နဲ့ Channel အလိုက် ခွဲပြီး Analysis လုပ်နိုင်ရပါမယ်။</p>
        `
      },

      {
        title: "Cost Management",
        content: `
          <h3>Cost Management</h3>
          <p>Cost တစ်ခုချင်းစီက Profit ကို ဘယ်လိုသက်ရောက်သလဲဆိုတာ နားလည်ရပါမယ်။</p>
        `
      },

      {
        title: "Profit & Margin",
        content: `
          <h3>Profit & Margin</h3>

          <div class="lesson-highlight">
            <strong>Gross Profit = Revenue − Cost</strong>
          </div>

          <p>Margin ကို Percentage အဖြစ် စောင့်ကြည့်ရပါမယ်။</p>
        `
      },

      {
        title: "Cash Flow Management",
        content: `
          <h3>Cash Flow Management</h3>

          <p>Profit ရှိနေပေမယ့် Cash မရှိနိုင်ပါတယ်။</p>

          <ul>
            <li>Receivable</li>
            <li>Payable</li>
            <li>Inventory</li>
            <li>Cash Position</li>
          </ul>
        `
      },

      {
        title: "Budget vs Actual",
        content: `
          <h3>Budget vs Actual</h3>

          <p>Budget နဲ့ Actual ကို နှိုင်းယှဉ်ပြီး Variance ရဲ့ Root Cause ကို ရှာပါ။</p>
        `
      }
    ]
  },

  /* ====================================================
     12. PROFIT & LOSS
  ==================================================== */

  {
    id: "profit-loss",
    title: "Profit & Loss Management",
    category: "finance",
    icon: "₭",
    color: "emerald",
    premium: true,
    description:
      "P&L, Gross Profit, Operating Expenses နဲ့ Break-even ကို လေ့လာပါ။",
    lessons: [

      {
        title: "P&L Fundamentals",
        content: `
          <h3>Profit & Loss Statement</h3>
          <p>P&L က Revenue, Cost နဲ့ Final Result ကို ပြသပေးပါတယ်။</p>
        `
      },

      {
        title: "Gross Profit",
        content: `
          <h3>Gross Profit</h3>

          <div class="lesson-highlight">
            <strong>Gross Profit = Revenue − COGS</strong>
          </div>
        `
      },

      {
        title: "Operating Expenses",
        content: `
          <h3>Operating Expenses</h3>

          <ul>
            <li>Salary</li>
            <li>Rent</li>
            <li>Transport</li>
            <li>Marketing</li>
            <li>Administration</li>
          </ul>
        `
      },

      {
        title: "Break-even",
        content: `
          <h3>Break-even Point</h3>
          <p>Loss မဖြစ်တော့တဲ့ Sales Level ကို Break-even Point လို့ ခေါ်ပါတယ်။</p>
        `
      }
    ]
  },

  /* ====================================================
     13. GOAL SETTING
  ==================================================== */

  {
    id: "goal-setting",
    title: "Goal Setting & Execution",
    category: "business",
    icon: "◎",
    color: "blue",
    premium: false,
    description:
      "SMART Goals, Action Planning, Execution Discipline နဲ့ Review System ကို လေ့လာပါ။",
    lessons: [

      {
        title: "Goal Setting Fundamentals",
        content: `
          <h3>Goal ဆိုတာဘာလဲ?</h3>
          <p>Goal ဆိုတာ Measurable Destination တစ်ခု ဖြစ်ပါတယ်။</p>
        `
      },

      {
        title: "SMART Goals",
        content: `
          <h3>SMART Goal</h3>

          <ul>
            <li>Specific</li>
            <li>Measurable</li>
            <li>Achievable</li>
            <li>Relevant</li>
            <li>Time-bound</li>
          </ul>
        `
      },

      {
        title: "Action Planning",
        content: `
          <h3>Action Planning</h3>
          <p>Goal ကို Weekly Action နဲ့ Daily Action အဖြစ် ခွဲပါ။</p>
        `
      },

      {
        title: "Execution Discipline",
        content: `
          <h3>Execution Discipline</h3>
          <p>Motivation ထက် Consistency နဲ့ Discipline က ပိုအရေးကြီးပါတယ်။</p>
        `
      },

      {
        title: "Review & Improve",
        content: `
          <h3>Review & Improve</h3>
          <p>Weekly Review ပြုလုပ်ပြီး Action Plan ကို ပြန်လည်တိုးတက်အောင် ပြင်ဆင်ပါ။</p>
        `
      }
    ]
  },

  /* ====================================================
     14. BUSINESS PLAN
  ==================================================== */

  {
    id: "business-plan",
    title: "Business Plan Mastery",
    category: "strategy",
    icon: "▤",
    color: "gold",
    premium: true,
    description:
      "Business Idea ကနေ Market, Customer, Marketing, Operations နဲ့ Financial Plan အထိ Business Plan ရေးဆွဲနည်းကို လေ့လာပါ။",
    lessons: [

      {
        title: "Business Plan Fundamentals",
        content: `
          <h3>Business Plan ဆိုတာဘာလဲ?</h3>
          <p>Business Plan ဆိုတာ Business ကို ဘယ်လိုတည်ဆောက်မလဲ၊ ဘယ်သူ့ကို ရောင်းမလဲ၊ ဘယ်လို Revenue ရမလဲ၊ ဘယ်လို Profit ရမလဲဆိုတာ စနစ်တကျ ရေးဆွဲထားတဲ့ Plan ဖြစ်ပါတယ်။</p>

          <h4>Business Plan Core</h4>
          <ul>
            <li>Business Idea</li>
            <li>Customer</li>
            <li>Market</li>
            <li>Product / Service</li>
            <li>Revenue Model</li>
            <li>Financial Plan</li>
          </ul>
        `
      },

      {
        title: "Market & Customer Plan",
        content: `
          <h3>Market & Customer Plan</h3>

          <p>Business တစ်ခုစတင်မယ်ဆိုရင် Customer ဘယ်သူလဲဆိုတာ အရင်ဆုံး သိရပါမယ်။</p>

          <ul>
            <li>Target Customer</li>
            <li>Customer Need</li>
            <li>Market Size</li>
            <li>Competitor</li>
            <li>Market Opportunity</li>
          </ul>
        `
      },

      {
        title: "Product & Value Proposition",
        content: `
          <h3>Product & Value Proposition</h3>

          <p>Customer ရဲ့ ဘာ Problem ကို ဖြေရှင်းပေးမှာလဲ?</p>

          <p>Customer က ဘာကြောင့် မိမိ Product ကို ရွေးချယ်သင့်လဲ?</p>

          <div class="lesson-highlight">
            <strong>Problem → Solution → Value → Customer</strong>
          </div>
        `
      },

      {
        title: "Marketing & Sales Plan",
        content: `
          <h3>Marketing & Sales Plan</h3>

          <ul>
            <li>Target Customer</li>
            <li>Pricing</li>
            <li>Distribution</li>
            <li>Promotion</li>
            <li>Sales Channel</li>
            <li>Customer Acquisition</li>
          </ul>
        `
      },

      {
        title: "Operations Plan",
        content: `
          <h3>Operations Plan</h3>

          <p>Business ကို နေ့စဉ်လည်ပတ်ဖို့ ဘာတွေလိုအပ်မလဲဆိုတာ စီမံပါ။</p>

          <ul>
            <li>People</li>
            <li>Process</li>
            <li>Supplier</li>
            <li>Inventory</li>
            <li>Distribution</li>
            <li>Quality Control</li>
          </ul>
        `
      },

      {
        title: "Financial Plan",
        content: `
          <h3>Financial Plan</h3>

          <ul>
            <li>Startup Cost</li>
            <li>Revenue Forecast</li>
            <li>Operating Cost</li>
            <li>Profit Forecast</li>
            <li>Cash Flow</li>
            <li>Break-even</li>
          </ul>
        `
      }
    ]
  },

  /* ====================================================
     15. PERSONAL PRODUCTIVITY
  ==================================================== */

  {
    id: "personal-productivity",
    title: "Personal Productivity",
    category: "business",
    icon: "⚡",
    color: "cyan",
    premium: true,
    description:
      "Time Management, Priority Setting, Focus, Daily Planning နဲ့ Personal Performance ကို မြှင့်တင်ပါ။",
    lessons: [

      {
        title: "Productivity Fundamentals",
        content: `
          <h3>Productivity ဆိုတာဘာလဲ?</h3>

          <p>အလုပ်များများလုပ်တာဟာ Productivity မြင့်တာမဟုတ်ပါ။ အရေးကြီးတဲ့ Result ကို အချိန်နဲ့ Resource မှန်မှန် အသုံးချပြီး ရရှိအောင်လုပ်နိုင်ခြင်း ဖြစ်ပါတယ်။</p>

          <div class="lesson-highlight">
            <strong>Productivity = Important Work + Focus + Consistency</strong>
          </div>
        `
      },

      {
        title: "Priority Management",
        content: `
          <h3>Priority Management</h3>

          <p>အလုပ်အားလုံးကို တစ်ချိန်တည်း အရေးကြီးတယ်လို့ မယူဆပါနဲ့။</p>

          <ul>
            <li>Urgent</li>
            <li>Important</li>
            <li>High Impact</li>
            <li>Low Impact</li>
          </ul>
        `
      },

      {
        title: "Time Management",
        content: `
          <h3>Time Management</h3>

          <p>တစ်နေ့တာမှာ အရေးကြီးဆုံးအလုပ် 3 ခုကို သတ်မှတ်ပြီး အရင်လုပ်ပါ။</p>

          <p><strong>Plan → Focus → Execute → Review</strong></p>
        `
      },

      {
        title: "Focus & Deep Work",
        content: `
          <h3>Focus</h3>

          <p>အလုပ်တစ်ခုလုပ်နေချိန်မှာ Distraction လျှော့ပြီး တစ်ခုတည်းကို အာရုံစိုက်ပါ။</p>

          <ul>
            <li>Phone Distraction လျှော့ပါ</li>
            <li>Single-task လုပ်ပါ</li>
            <li>Time Block သတ်မှတ်ပါ</li>
            <li>Important Work ကို အစောပိုင်းလုပ်ပါ</li>
          </ul>
        `
      },

      {
        title: "Daily Planning",
        content: `
          <h3>Daily Planning</h3>

          <p>နေ့စဉ်မနက်မှာ Top 3 Priorities ကို ရေးပါ။</p>

          <ol>
            <li>Most Important Task</li>
            <li>Second Priority</li>
            <li>Third Priority</li>
          </ol>
        `
      },

      {
        title: "Review & Improve",
        content: `
          <h3>Weekly Productivity Review</h3>

          <ul>
            <li>ဘာတွေပြီးခဲ့လဲ?</li>
            <li>ဘာတွေမပြီးသေးလဲ?</li>
            <li>ဘာကြောင့်မပြီးတာလဲ?</li>
            <li>နောက်တစ်ပတ် ဘာပြောင်းမလဲ?</li>
          </ul>
        `
      }
    ]
  }

];

/* ======================================================
   STATE
====================================================== */

const DEFAULT_STATE = {
  currentPage: "dashboard",
  currentCourseId: null,
  currentLessonIndex: 0,

  completedLessons: [],
  lessonDates: {},

  activity: [],

  streak: 0,
  lastLearningDate: null,

  dailyGoal: {
    minutes: 0,
    target: 30,
    date: null
  },

  sales: {
    target: 0,
    actual: 0,
    history: [],
    priorities: []
  },

  calculator: {
    product: "",
    cost: 0,
    margin: 20
  },

  settings: {
    reminder: true,
    tracking: true
  }
};

let state = loadState();

/* ======================================================
   STORAGE HELPERS
====================================================== */

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function mergeObjects(base, incoming) {
  if (!incoming || typeof incoming !== "object") {
    return deepClone(base);
  }

  const result = deepClone(base);

  Object.keys(incoming).forEach(key => {
    if (
      incoming[key] &&
      typeof incoming[key] === "object" &&
      !Array.isArray(incoming[key]) &&
      result[key] &&
      typeof result[key] === "object" &&
      !Array.isArray(result[key])
    ) {
      result[key] = mergeObjects(result[key], incoming[key]);
    } else {
      result[key] = incoming[key];
    }
  });

  return result;
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      return deepClone(DEFAULT_STATE);
    }

    const parsed = JSON.parse(saved);

    return mergeObjects(DEFAULT_STATE, parsed);

  } catch (error) {
    console.warn("Aung Business Academy: State load failed.", error);
    return deepClone(DEFAULT_STATE);
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.warn("Aung Business Academy: State save failed.", error);
  }
}

/* ======================================================
   BASIC HELPERS
====================================================== */

function $(selector) {
  return document.querySelector(selector);
}

function $all(selector) {
  return Array.from(document.querySelectorAll(selector));
}

function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatNumber(number) {
  return Number(number || 0).toLocaleString("en-US");
}

function formatMMK(number) {
  return `${formatNumber(number)} Ks`;
}

function getToday() {
  return new Date().toISOString().slice(0, 10);
}

function getCourse(courseId) {
  return COURSES.find(course => course.id === courseId) || null;
}

function totalLessons() {
  return COURSES.reduce(
    (total, course) => total + course.lessons.length,
    0
  );
}

function completedCount() {
  return Array.isArray(state.completedLessons)
    ? state.completedLessons.length
    : 0;
}

function overallProgress() {
  const total = totalLessons();

  if (!total) {
    return 0;
  }

  return Math.round((completedCount() / total) * 100);
}

function getCourseCompletedCount(courseId) {
  const course = getCourse(courseId);

  if (!course) {
    return 0;
  }

  return course.lessons.filter((_, index) =>
    state.completedLessons.includes(`${courseId}:${index}`)
  ).length;
}

function getCourseProgress(courseId) {
  const course = getCourse(courseId);

  if (!course || !course.lessons.length) {
    return 0;
  }

  return Math.round(
    (getCourseCompletedCount(courseId) / course.lessons.length) * 100
  );
}

function lessonKey(courseId, index) {
  return `${courseId}:${index}`;
}

function isLessonCompleted(courseId, index) {
  return state.completedLessons.includes(
    lessonKey(courseId, index)
  );
}

/* ======================================================
   PREMIUM
====================================================== */

function hasPremiumAccess() {
  try {
    if (
      window.AungPremium &&
      typeof window.AungPremium.hasAccess === "function"
    ) {
      return Boolean(window.AungPremium.hasAccess());
    }

    if (
      window.AungPremium &&
      typeof window.AungPremium.isPremiumActive === "function"
    ) {
      return Boolean(window.AungPremium.isPremiumActive());
    }
  } catch (error) {
    console.warn("Premium check failed:", error);
  }

  return false;
}

function openPremiumAccess() {
  try {
    if (
      window.AungPremium &&
      typeof window.AungPremium.openPremiumModal === "function"
    ) {
      window.AungPremium.openPremiumModal();
      return;
    }
  } catch (error) {
    console.warn("Premium modal failed:", error);
  }

  openModal(
    "Premium Course",
    `
      <p>ဒီသင်ခန်းစာကို အသုံးပြုရန် Premium Subscription လိုအပ်ပါတယ်။</p>
      <p class="muted">Premium ရယူပြီး Business Academy ရဲ့ သင်ခန်းစာအားလုံးကို အသုံးပြုနိုင်ပါတယ်။</p>
    `,
    "Subscribe"
  );
}

/* ======================================================
   PAGE NAVIGATION
====================================================== */

function navigate(page, options = {}) {
  if (!VALID_PAGES.includes(page)) {
    page = "dashboard";
  }

  state.currentPage = page;

  if (options.courseId) {
    state.currentCourseId = options.courseId;
  }

  if (typeof options.lessonIndex === "number") {
    state.currentLessonIndex = options.lessonIndex;
  }

  saveState();

  renderPage();
  updateNavigation();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function updateNavigation() {
  $all("[data-page]").forEach(button => {
    const page = button.dataset.page;

    button.classList.toggle(
      "active",
      page === state.currentPage
    );
  });

  const breadcrumb = $("#breadcrumb");

  if (breadcrumb) {
    const names = {
      dashboard: "Dashboard",
      courses: "Courses",
      lessons: "Lessons",
      progress: "My Progress",
      sales: "Sales Manager",
      calculator: "Pricing Calculator",
      reports: "Reports",
      "ai-coach": "AI Business Coach",
      "ai-tools": "AI Tools",
      settings: "Settings"
    };

    breadcrumb.textContent =
      names[state.currentPage] || "Dashboard";
  }
}

/* ======================================================
   CURRENT LEARNING
====================================================== */

function getCurrentLearning() {
  if (
    state.currentCourseId &&
    getCourse(state.currentCourseId)
  ) {
    const current = getCourse(state.currentCourseId);

    const nextIndex = current.lessons.findIndex(
      (_, index) => !isLessonCompleted(current.id, index)
    );

    if (nextIndex !== -1) {
      return {
        course: current,
        index: nextIndex
      };
    }
  }

  /* Find latest active lesson */
  if (state.activity.length) {
    const latest = state.activity[0];

    if (
      latest &&
      latest.courseId &&
      getCourse(latest.courseId)
    ) {
      const course = getCourse(latest.courseId);

      const index = course.lessons.findIndex(
        (_, i) => !isLessonCompleted(course.id, i)
      );

      if (index !== -1) {
        return {
          course,
          index
        };
      }
    }
  }

  /* Free courses first */
  for (const course of COURSES) {
    if (course.premium && !hasPremiumAccess()) {
      continue;
    }

    const index = course.lessons.findIndex(
      (_, i) => !isLessonCompleted(course.id, i)
    );

    if (index !== -1) {
      return {
        course,
        index
      };
    }
  }

  return {
    course: COURSES[0],
    index: 0
  };
}

/* ======================================================
   DASHBOARD
====================================================== */

function renderDashboard() {

  const statCourses = $("#statCourses");
  const statLessons = $("#statLessons");
  const statCompleted = $("#statCompleted");
  const statProgress = $("#statProgress");

  if (statCourses) {
    statCourses.textContent = COURSES.length;
  }

  if (statLessons) {
    statLessons.textContent = totalLessons();
  }

  if (statCompleted) {
    statCompleted.textContent = completedCount();
  }

  if (statProgress) {
    statProgress.textContent = `${overallProgress()}%`;
  }

  const learning = getCurrentLearning();

  if (learning.course) {

    const title = $("#dashboardCourseTitle");
    const description = $("#dashboardCourseDescription");
    const progressText = $("#dashboardProgressText");
    const progressPercent = $("#dashboardProgressPercent");
    const progressBar = $("#dashboardProgressBar");

    const courseProgress =
      getCourseProgress(learning.course.id);

    if (title) {
      title.textContent = learning.course.title;
    }

    if (description) {
      description.textContent =
        learning.course.description;
    }

    if (progressText) {
      progressText.textContent =
        `${getCourseCompletedCount(learning.course.id)} / ${learning.course.lessons.length} lessons`;
    }

    if (progressPercent) {
      progressPercent.textContent =
        `${courseProgress}%`;
    }

    if (progressBar) {
      progressBar.style.width =
        `${courseProgress}%`;
    }
  }

  renderDailyGoal();
  renderActivity();
}

/* ======================================================
   DAILY GOAL
====================================================== */

function renderDailyGoal() {

  const today = getToday();

  if (state.dailyGoal.date !== today) {
    state.dailyGoal.date = today;
    state.dailyGoal.minutes = 0;
    saveState();
  }

  const target =
    Number(state.dailyGoal.target) || 30;

  const minutes =
    Number(state.dailyGoal.minutes) || 0;

  const percentage = Math.min(
    100,
    Math.round((minutes / target) * 100)
  );

  const goalPercent = $("#goalPercent");
  const goalMinutes = $("#goalMinutes");

  if (goalPercent) {
    goalPercent.textContent = `${percentage}%`;
  }

  if (goalMinutes) {
    goalMinutes.textContent =
      `${minutes} / ${target} min`;
  }
}

/* ======================================================
   ACTIVITY
====================================================== */

function addActivity(course, lessonIndex) {

  const lesson = course.lessons[lessonIndex];

  state.activity.unshift({
    id: Date.now(),
    courseId: course.id,
    courseTitle: course.title,
    lessonTitle: lesson.title,
    date: new Date().toISOString()
  });

  state.activity =
    state.activity.slice(0, 20);

  saveState();
}

function renderActivity() {

  const container = $("#activityList");

  if (!container) {
    return;
  }

  if (!state.activity.length) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">◷</div>
        <h4>No learning activity yet</h4>
        <p>သင်ခန်းစာတစ်ခု စတင်လေ့လာလိုက်ပါ။</p>
      </div>
    `;
    return;
  }

  container.innerHTML =
    state.activity
      .slice(0, 6)
      .map(item => `
        <div class="activity-item">

          <div class="activity-icon">✓</div>

          <div class="activity-content">
            <strong>${escapeHTML(item.lessonTitle)}</strong>
            <span>${escapeHTML(item.courseTitle)}</span>
          </div>

          <small>
            ${formatActivityDate(item.date)}
          </small>

        </div>
      `)
      .join("");
}

function formatActivityDate(date) {

  try {
    return new Date(date).toLocaleDateString(
      "en-GB",
      {
        day: "2-digit",
        month: "short"
      }
    );
  } catch {
    return "";
  }
}

/* ======================================================
   COURSES
====================================================== */

let activeCourseFilter = "all";

function renderCourses(filter = activeCourseFilter) {

  activeCourseFilter = filter;

  const container = $("#coursesGrid");

  if (!container) {
    return;
  }

  let courses = COURSES;

  if (filter !== "all") {
    courses = COURSES.filter(
      course => course.category === filter
    );
  }

  container.innerHTML =
    courses.map(course => {

      const progress =
        getCourseProgress(course.id);

      const completed =
        getCourseCompletedCount(course.id);

      const locked =
        course.premium && !hasPremiumAccess();

      return `
        <article
          class="course-card ${locked ? "is-locked" : ""}"
          data-course-id="${escapeHTML(course.id)}"
        >

          <div class="course-card-top">

            <div
              class="course-icon ${escapeHTML(course.color)}"
            >
              ${escapeHTML(course.icon)}
            </div>

            ${
              course.premium
                ? `<span class="course-badge premium">PREMIUM</span>`
                : `<span class="course-badge free">FREE</span>`
            }

          </div>

          <h3>${escapeHTML(course.title)}</h3>

          <p>
            ${escapeHTML(course.description)}
          </p>

          <div class="course-meta">
            <span>${course.lessons.length} Lessons</span>
            <span>${progress}%</span>
          </div>

          <div class="progress-track">
            <div
              class="progress-fill"
              style="width:${progress}%"
            ></div>
          </div>

          <div class="course-footer">

            <span>
              ${completed}/${course.lessons.length} completed
            </span>

            <button
              class="course-open-btn"
              data-course-open="${escapeHTML(course.id)}"
            >
              ${
                locked
                  ? "Unlock Course"
                  : progress > 0
                    ? "Continue"
                    : "Start Course"
              }
            </button>

          </div>

        </article>
      `;
    }).join("");

  updateCourseFilters();
}

function updateCourseFilters() {

  $all(".filter-tab").forEach(button => {

    button.classList.toggle(
      "active",
      button.dataset.filter === activeCourseFilter
    );

  });
}

/* ======================================================
   LESSONS
====================================================== */

function renderLessons() {

  const list = $("#lessonCourseList");
  const content = $("#lessonContent");

  if (!list || !content) {
    return;
  }

  list.innerHTML =
    COURSES.map(course => {

      const locked =
        course.premium && !hasPremiumAccess();

      const progress =
        getCourseProgress(course.id);

      return `
        <button
          class="lesson-course-item ${
            state.currentCourseId === course.id
              ? "active"
              : ""
          }"
          data-lesson-course="${escapeHTML(course.id)}"
        >

          <span class="lesson-course-icon">
            ${escapeHTML(course.icon)}
          </span>

          <span class="lesson-course-info">
            <strong>
              ${escapeHTML(course.title)}
            </strong>

            <small>
              ${progress}% · ${course.lessons.length} lessons
            </small>
          </span>

          ${
            locked
              ? `<span class="lock-icon">🔒</span>`
              : ""
          }

        </button>
      `;
    }).join("");

  if (!state.currentCourseId) {

    const learning = getCurrentLearning();

    state.currentCourseId =
      learning.course.id;

    state.currentLessonIndex =
      learning.index;
  }

  renderLessonContent();
}

function renderLessonContent() {

  const content = $("#lessonContent");

  if (!content) {
    return;
  }

  const course =
    getCourse(state.currentCourseId);

  if (!course) {

    content.innerHTML = `
      <div class="empty-state">
        <h3>Select a course</h3>
        <p>ဘယ် Course ကို စလေ့လာမလဲ ရွေးချယ်ပါ။</p>
      </div>
    `;

    return;
  }

  const locked =
    course.premium && !hasPremiumAccess();

  if (locked) {

    content.innerHTML = `
      <div class="premium-lock">

        <div class="premium-lock-icon">🔒</div>

        <h2>Premium Course</h2>

        <p>
          ဒီ Course ကို လေ့လာရန် Premium Subscription
          လိုအပ်ပါတယ်။
        </p>

        <button
          class="primary-btn"
          id="lessonPremiumBtn"
        >
          Subscribe Now
        </button>

      </div>
    `;

    return;
  }

  let index =
    Number(state.currentLessonIndex) || 0;

  if (index < 0) {
    index = 0;
  }

  if (index >= course.lessons.length) {
    index = course.lessons.length - 1;
  }

  state.currentLessonIndex = index;

  const lesson =
    course.lessons[index];

  const completed =
    isLessonCompleted(course.id, index);

  const progress =
    Math.round(
      ((index + 1) / course.lessons.length) * 100
    );

  content.innerHTML = `

    <div class="lesson-header">

      <div>

        <span class="lesson-category">
          ${escapeHTML(course.title)}
        </span>

        <h2>
          ${escapeHTML(lesson.title)}
        </h2>

      </div>

      <span class="lesson-number">
        ${index + 1} / ${course.lessons.length}
      </span>

    </div>

    <div class="lesson-progress">
      <div
        class="progress-track"
      >
        <div
          class="progress-fill"
          style="width:${progress}%"
        ></div>
      </div>
    </div>

    <div class="lesson-body">
      ${lesson.content}
    </div>

    <div class="lesson-actions">

      <button
        class="secondary-btn"
        data-lesson-action="previous"
        ${index === 0 ? "disabled" : ""}
      >
        ← Previous
      </button>

      <button
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

  saveState();
}

/* ======================================================
   COMPLETE LESSON
====================================================== */

function completeCurrentLesson() {

  const course =
    getCourse(state.currentCourseId);

  if (!course) {
    return;
  }

  const index =
    Number(state.currentLessonIndex) || 0;

  const key =
    lessonKey(course.id, index);

  if (!state.completedLessons.includes(key)) {

    state.completedLessons.push(key);

    state.lessonDates[key] =
      new Date().toISOString();

    state.dailyGoal.minutes += 15;

    updateStreak();

    addActivity(course, index);

    showToast(
      "Lesson completed successfully ✓"
    );
  }

  saveState();

  if (index < course.lessons.length - 1) {

    state.currentLessonIndex =
      index + 1;

  } else {

    const currentCourseIndex =
      COURSES.findIndex(
        item => item.id === course.id
      );

    const nextCourse =
      COURSES[currentCourseIndex + 1];

    if (nextCourse) {

      if (
        !nextCourse.premium ||
        hasPremiumAccess()
      ) {
        state.currentCourseId =
          nextCourse.id;

        state.currentLessonIndex = 0;
      }
    }
  }

  saveState();

  renderAll();
}

/* ======================================================
   STREAK
====================================================== */

function updateStreak() {

  const today =
    getToday();

  if (!state.lastLearningDate) {

    state.streak = 1;
    state.lastLearningDate = today;

    return;
  }

  if (state.lastLearningDate === today) {
    return;
  }

  const last =
    new Date(state.lastLearningDate);

  const current =
    new Date(today);

  const difference =
    Math.round(
      (current - last) /
      (1000 * 60 * 60 * 24)
    );

  if (difference === 1) {
    state.streak += 1;
  } else {
    state.streak = 1;
  }

  state.lastLearningDate = today;
}

/* ======================================================
   PROGRESS PAGE
====================================================== */

function renderProgress() {

  const progress =
    overallProgress();

  const overall =
    $("#overallProgress");

  const completed =
    $("#progressCompleted");

  const remaining =
    $("#progressRemaining");

  const streak =
    $("#progressStreak");

  if (overall) {
    overall.textContent =
      `${progress}%`;
  }

  if (completed) {
    completed.textContent =
      completedCount();
  }

  if (remaining) {
    remaining.textContent =
      totalLessons() - completedCount();
  }

  if (streak) {
    streak.textContent =
      `${state.streak || 0} days`;
  }

  const list =
    $("#courseProgressList");

  if (!list) {
    return;
  }

  list.innerHTML =
    COURSES.map(course => {

      const courseProgress =
        getCourseProgress(course.id);

      const count =
        getCourseCompletedCount(course.id);

      return `
        <div class="course-progress-row">

          <div class="course-progress-info">

            <strong>
              ${escapeHTML(course.title)}
            </strong>

            <span>
              ${count}/${course.lessons.length} lessons
            </span>

          </div>

          <div class="course-progress-bar">

            <div class="progress-track">

              <div
                class="progress-fill"
                style="width:${courseProgress}%"
              ></div>

            </div>

          </div>

          <strong>
            ${courseProgress}%
          </strong>

        </div>
      `;

    }).join("");
}

/* ======================================================
   SALES MANAGER
====================================================== */

function renderSales() {

  const target =
    Number(state.sales.target) || 0;

  const actual =
    Number(state.sales.actual) || 0;

  const achievement =
    target > 0
      ? Math.round((actual / target) * 100)
      : 0;

  const gap =
    actual - target;

  const targetDisplay =
    $("#salesTargetDisplay");

  const actualDisplay =
    $("#salesActualDisplay");

  const achievementDisplay =
    $("#salesAchievementDisplay");

  const gapDisplay =
    $("#salesGapDisplay");

  if (targetDisplay) {
    targetDisplay.textContent =
      formatMMK(target);
  }

  if (actualDisplay) {
    actualDisplay.textContent =
      formatMMK(actual);
  }

  if (achievementDisplay) {
    achievementDisplay.textContent =
      `${achievement}%`;
  }

  if (gapDisplay) {
    gapDisplay.textContent =
      formatMMK(gap);
  }

  const targetInput =
    $("#salesTargetInput");

  const actualInput =
    $("#salesActualInput");

  if (
    targetInput &&
    document.activeElement !== targetInput
  ) {
    targetInput.value =
      target || "";
  }

  if (
    actualInput &&
    document.activeElement !== actualInput
  ) {
    actualInput.value =
      actual || "";
  }

  renderSalesPriorities();
  renderSalesChart();
}

function updateSales() {

  const targetInput =
    $("#salesTargetInput");

  const actualInput =
    $("#salesActualInput");

  if (!targetInput || !actualInput) {
    return;
  }

  const target =
    Math.max(
      0,
      Number(
        String(targetInput.value)
          .replace(/,/g, "")
      ) || 0
    );

  const actual =
    Math.max(
      0,
      Number(
        String(actualInput.value)
          .replace(/,/g, "")
      ) || 0
    );

  state.sales.target = target;
  state.sales.actual = actual;

  state.sales.history.push({
    date: getToday(),
    target,
    actual
  });

  state.sales.history =
    state.sales.history.slice(-12);

  saveState();

  renderSales();

  showToast(
    "Sales performance updated ✓"
  );
}

/* ======================================================
   SALES PRIORITIES
====================================================== */

function renderSalesPriorities() {

  const list =
    $("#priorityList");

  if (!list) {
    return;
  }

  if (!state.sales.priorities.length) {

    list.innerHTML = `
      <div class="empty-state compact">
        <p>ဒီနေ့အတွက် Sales Priority မရှိသေးပါ။</p>
      </div>
    `;

    return;
  }

  list.innerHTML =
    state.sales.priorities
      .map((priority, index) => `
        <div class="priority-item">

          <div class="priority-check">
            ${index + 1}
          </div>

          <span>
            ${escapeHTML(priority)}
          </span>

          <button
            class="priority-remove"
            data-priority-remove="${index}"
            aria-label="Remove priority"
          >
            ×
          </button>

        </div>
      `)
      .join("");
}

function addSalesPriority() {

  const input =
    $("#priorityInput");

  if (!input) {
    return;
  }

  const value =
    input.value.trim();

  if (!value) {
    showToast("Priority တစ်ခုရေးပါ။");
    return;
  }

  state.sales.priorities.push(value);

  state.sales.priorities =
    state.sales.priorities.slice(-10);

  input.value = "";

  saveState();

  renderSalesPriorities();

  showToast("Priority added ✓");
}

function removeSalesPriority(index) {

  if (
    index < 0 ||
    index >= state.sales.priorities.length
  ) {
    return;
  }

  state.sales.priorities.splice(index, 1);

  saveState();

  renderSalesPriorities();
}

/* ======================================================
   SALES CHART
====================================================== */

function renderSalesChart() {

  const canvas =
    $("#salesChart");

  if (!canvas) {
    return;
  }

  const ctx =
    canvas.getContext("2d");

  if (!ctx) {
    return;
  }

  const width =
    canvas.clientWidth || 600;

  const height =
    canvas.clientHeight || 260;

  const ratio =
    window.devicePixelRatio || 1;

  canvas.width =
    width * ratio;

  canvas.height =
    height * ratio;

  ctx.setTransform(
    ratio,
    0,
    0,
    ratio,
    0,
    0
  );

  ctx.clearRect(
    0,
    0,
    width,
    height
  );

  const history =
    state.sales.history.slice(-7);

  if (!history.length) {

    ctx.font = "14px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "#64748b";

    ctx.fillText(
      "Update Sales Target & Actual to view performance",
      width / 2,
      height / 2
    );

    return;
  }

  const padding = 36;

  const chartWidth =
    width - padding * 2;

  const chartHeight =
    height - padding * 2;

  const maxValue =
    Math.max(
      1,
      ...history.flatMap(item => [
        item.target,
        item.actual
      ])
    );

  /* Grid */

  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 1;

  for (let i = 0; i <= 4; i++) {

    const y =
      padding +
      (chartHeight / 4) * i;

    ctx.beginPath();
    ctx.moveTo(padding, y);
    ctx.lineTo(width - padding, y);
    ctx.stroke();

  }

  /* Lines */

  drawSalesLine(
    ctx,
    history,
    "target",
    maxValue,
    width,
    height
  );

  drawSalesLine(
    ctx,
    history,
    "actual",
    maxValue,
    width,
    height
  );
}

function drawSalesLine(
  ctx,
  history,
  property,
  maxValue,
  width,
  height
) {

  const padding = 36;

  const chartWidth =
    width - padding * 2;

  const chartHeight =
    height - padding * 2;

  ctx.beginPath();

  history.forEach((item, index) => {

    const x =
      history.length === 1
        ? width / 2
        : padding +
          (chartWidth /
            (history.length - 1)) *
          index;

    const y =
      height -
      padding -
      (item[property] / maxValue) *
      chartHeight;

    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }

  });

  ctx.strokeStyle =
    property === "target"
      ? "#94a3b8"
      : "#2563eb";

  ctx.lineWidth = 3;
  ctx.stroke();

  history.forEach((item, index) => {

    const x =
      history.length === 1
        ? width / 2
        : padding +
          (chartWidth /
            (history.length - 1)) *
          index;

    const y =
      height -
      padding -
      (item[property] / maxValue) *
      chartHeight;

    ctx.beginPath();

    ctx.arc(
      x,
      y,
      4,
      0,
      Math.PI * 2
    );

    ctx.fillStyle =
      property === "target"
        ? "#94a3b8"
        : "#2563eb";

    ctx.fill();

  });
}

/* ======================================================
   PRICING CALCULATOR
====================================================== */

function calculatePrice() {

  const productInput =
    $("#productName");

  const costInput =
    $("#productCost");

  const marginInput =
    $("#productMargin");

  const resultProduct =
    $("#resultProduct");

  const resultPrice =
    $("#resultPrice");

  const resultCost =
    $("#resultCost");

  const resultProfit =
    $("#resultProfit");

  const resultMargin =
    $("#resultMargin");

  if (
    !costInput ||
    !marginInput
  ) {
    return;
  }

  const product =
    productInput
      ? productInput.value.trim()
      : "";

  const cost =
    Math.max(
      0,
      Number(
        String(costInput.value)
          .replace(/,/g, "")
      ) || 0
    );

  const margin =
    Math.min(
      99.9,
      Math.max(
        0,
        Number(marginInput.value) || 0
      )
    );

  if (cost <= 0) {
    showToast("Product Cost ထည့်ပါ။");
    return;
  }

  const price =
    cost /
    (1 - margin / 100);

  const profit =
    price - cost;

  state.calculator = {
    product,
    cost,
    margin
  };

  saveState();

  if (resultProduct) {
    resultProduct.textContent =
      product || "Product";
  }

  if (resultPrice) {
    resultPrice.textContent =
      formatMMK(Math.round(price));
  }

  if (resultCost) {
    resultCost.textContent =
      formatMMK(Math.round(cost));
  }

  if (resultProfit) {
    resultProfit.textContent =
      formatMMK(Math.round(profit));
  }

  if (resultMargin) {
    resultMargin.textContent =
      `${margin}%`;
  }
}

/* ======================================================
   REPORTS
====================================================== */

function renderReports() {

  const reportCourses =
    $("#reportCourses");

  const reportLessons =
    $("#reportLessons");

  const reportCompleted =
    $("#reportCompleted");

  const reportStreak =
    $("#reportStreak");

  const reportSalesTarget =
    $("#reportSalesTarget");

  const reportSalesActual =
    $("#reportSalesActual");

  const reportSalesAchievement =
    $("#reportSalesAchievement");

  if (reportCourses) {
    reportCourses.textContent =
      COURSES.length;
  }

  if (reportLessons) {
    reportLessons.textContent =
      totalLessons();
  }

  if (reportCompleted) {
    reportCompleted.textContent =
      completedCount();
  }

  if (reportStreak) {
    reportStreak.textContent =
      `${state.streak || 0} days`;
  }

  const target =
    Number(state.sales.target) || 0;

  const actual =
    Number(state.sales.actual) || 0;

  const achievement =
    target > 0
      ? Math.round((actual / target) * 100)
      : 0;

  if (reportSalesTarget) {
    reportSalesTarget.textContent =
      formatMMK(target);
  }

  if (reportSalesActual) {
    reportSalesActual.textContent =
      formatMMK(actual);
  }

  if (reportSalesAchievement) {
    reportSalesAchievement.textContent =
      `${achievement}%`;
  }
}

/* ======================================================
   AI BUSINESS COACH
====================================================== */

function addChatMessage(
  message,
  sender = "ai"
) {

  const container =
    $("#chatMessages");

  if (!container) {
    return;
  }

  const item =
    document.createElement("div");

  item.className =
    `chat-message ${sender}`;

  item.innerHTML = `
    <div class="chat-bubble">
      ${escapeHTML(message)}
    </div>
  `;

  container.appendChild(item);

  container.scrollTop =
    container.scrollHeight;
}

function getAIResponse(question) {

  const q =
    String(question)
      .toLowerCase()
      .trim();

  if (!q) {
    return "မေးခွန်းတစ်ခု ရေးပေးပါ။";
  }

  if (
    q.includes("sales") ||
    q.includes("ရောင်း")
  ) {
    return "Sales တိုးချင်ရင် Target → Customer Coverage → Order Generation → Follow-up → Performance Review ဆိုတဲ့ Execution System ကို အရင်တည်ဆောက်ပါ။";
  }

  if (
    q.includes("team") ||
    q.includes("ဝန်ထမ်း") ||
    q.includes("employee")
  ) {
    return "Team Management မှာ Clear Expectation, Coaching, Empowerment နဲ့ Accountability ကို အဓိကထားပါ။ Micromanagement မလုပ်ဘဲ Ownership ပေးပါ။";
  }

  if (
    q.includes("customer") ||
    q.includes("ဖောက်သည်")
  ) {
    return "Customer ကို Value, Potential, Purchase Pattern နဲ့ Business Need အလိုက် Segment လုပ်ပြီး Customer Value မြှင့်တင်ဖို့ Action Plan ချပါ။";
  }

  if (
    q.includes("profit") ||
    q.includes("အမြတ်")
  ) {
    return "Profit တိုးဖို့ Revenue တိုးခြင်းတင်မက Cost, Gross Margin နဲ့ Operating Expenses ကိုပါ စောင့်ကြည့်ပါ။";
  }

  if (
    q.includes("marketing") ||
    q.includes("စျေးကွက်")
  ) {
    return "Marketing မှာ Target Customer ကို အရင်ဆုံး သတ်မှတ်ပြီး Customer Need, Positioning, 4P နဲ့ Performance Metrics ကို ချိတ်ဆက်စီမံပါ။";
  }

  if (
    q.includes("business plan") ||
    q.includes("လုပ်ငန်းအစီအစဉ်")
  ) {
    return "Business Plan ကို Customer → Problem → Solution → Market → Marketing → Operations → Revenue → Cost → Profit ဆိုတဲ့ Flow နဲ့ တည်ဆောက်ပါ။";
  }

  if (
    q.includes("leadership") ||
    q.includes("ခေါင်းဆောင်")
  ) {
    return "ကောင်းမွန်တဲ့ Leadership ဆိုတာ Direction ပေးခြင်းတင်မကဘဲ People ကို Develop လုပ်ခြင်း၊ Ownership ပေးခြင်းနဲ့ Accountability တည်ဆောက်ခြင်း ဖြစ်ပါတယ်။";
  }

  if (
    q.includes("price") ||
    q.includes("pricing") ||
    q.includes("စျေးနှုန်း")
  ) {
    return "Pricing သတ်မှတ်ရာမှာ Cost, Desired Margin, Customer Value နဲ့ Market Price ကို အတူတူစဉ်းစားပါ။ Pricing Calculator ကိုလည်း အသုံးပြုနိုင်ပါတယ်။";
  }

  if (
    q.includes("goal") ||
    q.includes("ရည်မှန်းချက်")
  ) {
    return "Goal ကို SMART ဖြစ်အောင်သတ်မှတ်ပြီး Monthly → Weekly → Daily Action အဖြစ် ခွဲပါ။ Weekly Review ပြုလုပ်ပါ။";
  }

  return "အရေးကြီးတဲ့ Business Decision တစ်ခုချမယ်ဆိုရင် Goal, Customer, Numbers, People နဲ့ Execution ဆိုတဲ့ အချက် ၅ ချက်ကို အရင်စဉ်းစားပါ။";
}

function sendAIQuestion() {

  const input =
    $("#chatInput");

  if (!input) {
    return;
  }

  const question =
    input.value.trim();

  if (!question) {
    return;
  }

  addChatMessage(
    question,
    "user"
  );

  input.value = "";

  setTimeout(() => {

    addChatMessage(
      getAIResponse(question),
      "ai"
    );

  }, 350);
}

function useAITool(tool) {

  const prompts = {

    sales:
      "Sales Target မပြည့်တဲ့အခါ ဘယ်လို Action Plan ချရမလဲ?",

    customer:
      "Customer Management ကို ဘယ်လိုတိုးတက်အောင်လုပ်ရမလဲ?",

    team:
      "Sales Team ကို ဘယ်လို Coaching လုပ်ရမလဲ?",

    business:
      "Business Growth အတွက် ဘာတွေကို အရင်စဉ်းစားသင့်လဲ?"
  };

  const prompt =
    prompts[tool] ||
    prompts.business;

  navigate("ai-coach");

  setTimeout(() => {

    const input =
      $("#chatInput");

    if (input) {
      input.value = prompt;
      input.focus();
    }

  }, 100);
}

/* ======================================================
   GLOBAL SEARCH
====================================================== */

function performSearch(value) {

  const query =
    String(value || "")
      .trim()
      .toLowerCase();

  if (!query) {
    return;
  }

  const results =
    COURSES.filter(course => {

      const courseText =
        [
          course.title,
          course.description,
          course.category,
          ...course.lessons.map(
            lesson => lesson.title
          )
        ]
          .join(" ")
          .toLowerCase();

      return courseText.includes(query);
    });

  if (!results.length) {

    showToast(
      "Search result မတွေ့ပါ။"
    );

    return;
  }

  const first =
    results[0];

  state.currentCourseId =
    first.id;

  state.currentLessonIndex = 0;

  navigate("lessons", {
    courseId: first.id
  });
}

/* ======================================================
   RECOMMENDATIONS
====================================================== */

function openRecommendation(alias) {

  const mapping = {
    sales: "sales-management",
    leadership: "leadership",
    marketing: "marketing"
  };

  const courseId =
    mapping[alias] || alias;

  const course =
    getCourse(courseId);

  if (!course) {
    return;
  }

  if (
    course.premium &&
    !hasPremiumAccess()
  ) {
    openPremiumAccess();
    return;
  }

  state.currentCourseId =
    course.id;

  state.currentLessonIndex = 0;

  navigate("lessons");
}

/* ======================================================
   MODAL
====================================================== */

function openModal(
  title,
  text,
  actionText = "OK",
  actionCallback = null
) {

  const overlay =
    $("#modalOverlay");

  const modalTitle =
    $("#modalTitle");

  const modalText =
    $("#modalText");

  const modalAction =
    $("#modalAction");

  if (!overlay) {
    return;
  }

  if (modalTitle) {
    modalTitle.textContent = title;
  }

  if (modalText) {
    modalText.innerHTML = text;
  }

  if (modalAction) {

    modalAction.textContent =
      actionText;

    modalAction.onclick =
      () => {

        if (typeof actionCallback === "function") {
          actionCallback();
        }

        closeModal();
      };
  }

  overlay.classList.add("open");
  overlay.setAttribute(
    "aria-hidden",
    "false"
  );
}

function closeModal() {

  const overlay =
    $("#modalOverlay");

  if (!overlay) {
    return;
  }

  overlay.classList.remove("open");

  overlay.setAttribute(
    "aria-hidden",
    "true"
  );
}

/* ======================================================
   TOAST
====================================================== */

let toastTimer = null;

function showToast(message) {

  const toast =
    $("#toast");

  if (!toast) {
    return;
  }

  toast.textContent =
    message;

  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer =
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2600);
}

/* ======================================================
   RESET DATA
====================================================== */

function resetAllData() {

  openModal(
    "Reset Academy Data?",
    `
      <p>
        Learning Progress, Sales Data, Calculator Data
        နဲ့ Activity အားလုံးကို Reset လုပ်မလား?
      </p>
      <p>
        ဒီလုပ်ဆောင်ချက်ကို ပြန်လည် Undo လုပ်လို့မရပါ။
      </p>
    `,
    "Reset Data",
    () => {

      state =
        deepClone(DEFAULT_STATE);

      saveState();

      renderAll();

      showToast(
        "All local data reset successfully."
      );
    }
  );
}

/* ======================================================
   SETTINGS
====================================================== */

function renderSettings() {

  const reminder =
    $("#reminderToggle");

  const tracking =
    $("#trackingToggle");

  if (reminder) {
    reminder.checked =
      Boolean(state.settings.reminder);
  }

  if (tracking) {
    tracking.checked =
      Boolean(state.settings.tracking);
  }
}

/* ======================================================
   PAGE RENDER
====================================================== */

function renderPage() {

  $all(".page").forEach(page => {
    page.classList.remove("active");
  });

  const current =
    document.getElementById(
      `page-${state.currentPage}`
    );

  if (current) {
    current.classList.add("active");
  }

  switch (state.currentPage) {

    case "dashboard":
      renderDashboard();
      break;

    case "courses":
      renderCourses();
      break;

    case "lessons":
      renderLessons();
      break;

    case "progress":
      renderProgress();
      break;

    case "sales":
      renderSales();
      break;

    case "calculator":
      calculatePrice();
      break;

    case "reports":
      renderReports();
      break;

    case "settings":
      renderSettings();
      break;
  }
}

function renderAll() {

  renderPage();

  updateNavigation();

  /* Keep dashboard data fresh */
  renderDashboard();

  if (state.currentPage === "courses") {
    renderCourses();
  }

  if (state.currentPage === "lessons") {
    renderLessons();
  }

  if (state.currentPage === "progress") {
    renderProgress();
  }

  if (state.currentPage === "sales") {
    renderSales();
  }

  if (state.currentPage === "reports") {
    renderReports();
  }

  if (state.currentPage === "settings") {
    renderSettings();
  }
}

/* ======================================================
   EVENT DELEGATION
====================================================== */

function setupEventDelegation() {

  document.addEventListener(
    "click",
    event => {

      /* Navigation */

      const pageButton =
        event.target.closest("[data-page]");

      if (pageButton) {

        event.preventDefault();

        navigate(
          pageButton.dataset.page
        );

        closeMobileSidebar();

        return;
      }

      /* Course open */

      const courseButton =
        event.target.closest(
          "[data-course-open]"
        );

      if (courseButton) {

        const courseId =
          courseButton.dataset.courseOpen;

        const course =
          getCourse(courseId);

        if (!course) {
          return;
        }

        if (
          course.premium &&
          !hasPremiumAccess()
        ) {
          openPremiumAccess();
          return;
        }

        state.currentCourseId =
          courseId;

        state.currentLessonIndex =
          getCourseCompletedCount(courseId);

        if (
          state.currentLessonIndex >=
          course.lessons.length
        ) {
          state.currentLessonIndex =
            course.lessons.length - 1;
        }

        navigate("lessons");

        return;
      }

      /* Course card */

      const courseCard =
        event.target.closest(
          ".course-card"
        );

      if (
        courseCard &&
        !event.target.closest("button")
      ) {

        const courseId =
          courseCard.dataset.courseId;

        const course =
          getCourse(courseId);

        if (
          course &&
          course.premium &&
          !hasPremiumAccess()
        ) {
          openPremiumAccess();
          return;
        }

        if (course) {

          state.currentCourseId =
            course.id;

          state.currentLessonIndex =
            Math.max(
              0,
              getCourseCompletedCount(course.id)
            );

          navigate("lessons");
        }

        return;
      }

      /* Lesson course */

      const lessonCourse =
        event.target.closest(
          "[data-lesson-course]"
        );

      if (lessonCourse) {

        const courseId =
          lessonCourse.dataset.lessonCourse;

        const course =
          getCourse(courseId);

        if (!course) {
          return;
        }

        if (
          course.premium &&
          !hasPremiumAccess()
        ) {
          openPremiumAccess();
          return;
        }

        state.currentCourseId =
          courseId;

        state.currentLessonIndex = 0;

        saveState();

        renderLessons();

        return;
      }

      /* Lesson actions */

      const lessonAction =
        event.target.closest(
          "[data-lesson-action]"
        );

      if (lessonAction) {

        const action =
          lessonAction.dataset.lessonAction;

        const course =
          getCourse(state.currentCourseId);

        if (!course) {
          return;
        }

        let index =
          Number(state.currentLessonIndex) || 0;

        if (action === "complete") {

          completeCurrentLesson();
          return;

        }

        if (
          action === "previous" &&
          index > 0
        ) {
          state.currentLessonIndex =
            index - 1;
        }

        if (
          action === "next" &&
          index < course.lessons.length - 1
        ) {
          state.currentLessonIndex =
            index + 1;
        }

        saveState();

        renderLessonContent();

        return;
      }

      /* Continue Learning */

      const continueButton =
        event.target.closest(
          "#continueLearningBtn"
        );

      if (continueButton) {

        const learning =
          getCurrentLearning();

        if (!learning.course) {
          return;
        }

        if (
          learning.course.premium &&
          !hasPremiumAccess()
        ) {
          openPremiumAccess();
          return;
        }

        state.currentCourseId =
          learning.course.id;

        state.currentLessonIndex =
          learning.index;

        navigate("lessons");

        return;
      }

      /* Recommendations */

      const recommendation =
        event.target.closest(
          ".recommendation-item"
        );

      if (recommendation) {

        openRecommendation(
          recommendation.dataset.course
        );

        return;
      }

      /* Filter */

      const filter =
        event.target.closest(
          ".filter-tab"
        );

      if (filter) {

        renderCourses(
          filter.dataset.filter || "all"
        );

        return;
      }

      /* Priority remove */

      const priorityRemove =
        event.target.closest(
          "[data-priority-remove]"
        );

      if (priorityRemove) {

        removeSalesPriority(
          Number(
            priorityRemove.dataset.priorityRemove
          )
        );

        return;
      }

      /* AI question */

      const aiQuestion =
        event.target.closest(
          ".ai-question"
        );

      if (aiQuestion) {

        const question =
          aiQuestion.dataset.question ||
          aiQuestion.textContent.trim();

        navigate("ai-coach");

        setTimeout(() => {

          const input =
            $("#chatInput");

          if (input) {

            input.value =
              question;

            sendAIQuestion();
          }

        }, 100);

        return;
      }

      /* AI tool */

      const aiTool =
        event.target.closest(
          ".ai-tool-card"
        );

      if (aiTool) {

        useAITool(
          aiTool.dataset.tool
        );

        return;
      }

      /* Premium lesson */

      if (
        event.target.closest(
          "#lessonPremiumBtn"
        )
      ) {
        openPremiumAccess();
        return;
      }

      /* Modal close */

      if (
        event.target.closest(
          "#modalClose"
        ) ||
        event.target.closest(
          "#modalCancel"
        )
      ) {
        closeModal();
        return;
      }

      /* Mobile menu */

      if (
        event.target.closest(
          "#mobileMenuBtn"
        )
      ) {
        toggleMobileSidebar();
        return;
      }

      /* Notification */

      if (
        event.target.closest(
          "#notificationBtn"
        )
      ) {
        showToast(
          "You are all caught up ✓"
        );
        return;
      }

    }
  );
}

/* ======================================================
   INPUT EVENTS
====================================================== */

function setupInputEvents() {

  const sendChat =
    $("#sendChatBtn");

  if (sendChat) {
    sendChat.addEventListener(
      "click",
      sendAIQuestion
    );
  }

  const chatInput =
    $("#chatInput");

  if (chatInput) {

    chatInput.addEventListener(
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

  const updateSalesButton =
    $("#updateSalesBtn");

  if (updateSalesButton) {

    updateSalesButton.addEventListener(
      "click",
      updateSales
    );
  }

  const priorityButton =
    $("#addPriorityBtn");

  if (priorityButton) {

    priorityButton.addEventListener(
      "click",
      addSalesPriority
    );
  }

  const priorityInput =
    $("#priorityInput");

  if (priorityInput) {

    priorityInput.addEventListener(
      "keydown",
      event => {

        if (event.key === "Enter") {

          event.preventDefault();

          addSalesPriority();
        }

      }
    );
  }

  const calculatorButton =
    $("#calculateBtn");

  if (calculatorButton) {

    calculatorButton.addEventListener(
      "click",
      calculatePrice
    );
  }

  [
    "#productCost",
    "#productMargin",
    "#productName"
  ].forEach(selector => {

    const input =
      $(selector);

    if (!input) {
      return;
    }

    input.addEventListener(
      "keydown",
      event => {

        if (event.key === "Enter") {
          calculatePrice();
        }

      }
    );

  });

  const resetButton =
    $("#resetDataBtn");

  if (resetButton) {

    resetButton.addEventListener(
      "click",
      resetAllData
    );
  }

  const reminder =
    $("#reminderToggle");

  if (reminder) {

    reminder.addEventListener(
      "change",
      () => {

        state.settings.reminder =
          reminder.checked;

        saveState();

        showToast(
          "Reminder setting updated."
        );
      }
    );
  }

  const tracking =
    $("#trackingToggle");

  if (tracking) {

    tracking.addEventListener(
      "change",
      () => {

        state.settings.tracking =
          tracking.checked;

        saveState();

        showToast(
          "Tracking setting updated."
        );
      }
    );
  }

  const search =
    $("#globalSearch");

  if (search) {

    search.addEventListener(
      "keydown",
      event => {

        if (event.key === "Enter") {

          event.preventDefault();

          performSearch(
            search.value
          );
        }

      }
    );
  }
}

/* ======================================================
   MOBILE SIDEBAR
====================================================== */

function toggleMobileSidebar() {

  const sidebar =
    $(".sidebar");

  if (!sidebar) {
    return;
  }

  sidebar.classList.toggle(
    "mobile-open"
  );

  document.body.classList.toggle(
    "sidebar-open"
  );
}

function closeMobileSidebar() {

  const sidebar =
    $(".sidebar");

  if (sidebar) {
    sidebar.classList.remove(
      "mobile-open"
    );
  }

  document.body.classList.remove(
    "sidebar-open"
  );
}

/* ======================================================
   WINDOW EVENTS
====================================================== */

function setupWindowEvents() {

  window.addEventListener(
    "resize",
    () => {

      if (
        state.currentPage === "sales"
      ) {
        renderSalesChart();
      }

    }
  );

  document.addEventListener(
    "keydown",
    event => {

      if (event.key === "Escape") {

        closeModal();
        closeMobileSidebar();

      }

    }
  );

  const overlay =
    $("#modalOverlay");

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

/* ======================================================
   PREMIUM SAFE INIT
====================================================== */

function waitForPremium() {

  /*
   * premium.js is intentionally loaded after app.js.
   * We do not synchronously require it.
   */

  setTimeout(() => {

    try {

      if (
        typeof window.AungPremium !==
        "undefined"
      ) {

        renderAll();

      }

    } catch (error) {

      console.warn(
        "Premium initialization warning:",
        error
      );

    }

  }, 300);
}

/* ======================================================
   INITIAL WELCOME MESSAGE
====================================================== */

function initializeAIChat() {

  const messages =
    $("#chatMessages");

  if (!messages) {
    return;
  }

  if (messages.children.length === 0) {

    addChatMessage(
      "မင်္ဂလာပါ။ ကျွန်တော်က Aung Business Academy ရဲ့ AI Business Coach ပါ။ Sales, Team, Customer, Profit, Marketing နဲ့ Business Strategy အကြောင်း မေးနိုင်ပါတယ်။",
      "ai"
    );

  }
}

/* ======================================================
   INITIALIZE
====================================================== */

function initApp() {

  /* Validate page */

  if (
    !VALID_PAGES.includes(
      state.currentPage
    )
  ) {
    state.currentPage =
      "dashboard";
  }

  /* Validate course */

  if (
    state.currentCourseId &&
    !getCourse(state.currentCourseId)
  ) {
    state.currentCourseId = null;
    state.currentLessonIndex = 0;
  }

  /* Validate arrays */

  if (
    !Array.isArray(
      state.completedLessons
    )
  ) {
    state.completedLessons = [];
  }

  if (
    !Array.isArray(
      state.activity
    )
  ) {
    state.activity = [];
  }

  if (
    !Array.isArray(
      state.sales.priorities
    )
  ) {
    state.sales.priorities = [];
  }

  if (
    !Array.isArray(
      state.sales.history
    )
  ) {
    state.sales.history = [];
  }

  /* Remove invalid completed lesson keys */

  const validLessonKeys =
    new Set();

  COURSES.forEach(course => {

    course.lessons.forEach(
      (_, index) => {

        validLessonKeys.add(
          lessonKey(
            course.id,
            index
          )
        );

      }
    );

  });

  state.completedLessons =
    state.completedLessons.filter(
      key => validLessonKeys.has(key)
    );

  saveState();

  setupEventDelegation();
  setupInputEvents();
  setupWindowEvents();

  renderAll();

  initializeAIChat();

  waitForPremium();

  console.log(
    `Aung Business Academy loaded: ${COURSES.length} courses / ${totalLessons()} lessons`
  );
}

/* ======================================================
   GLOBAL API
====================================================== */

window.AungBusinessAcademy = {

  courses: COURSES,

  getState: () =>
    deepClone(state),

  saveState,

  navigate,

  openCourse: courseId => {

    const course =
      getCourse(courseId);

    if (!course) {
      return;
    }

    if (
      course.premium &&
      !hasPremiumAccess()
    ) {
      openPremiumAccess();
      return;
    }

    state.currentCourseId =
      courseId;

    state.currentLessonIndex = 0;

    saveState();

    navigate("lessons");
  },

  completeLesson:
    completeCurrentLesson,

  calculatePrice,

  updateSales,

  addPriority:
    addSalesPriority,

  removePriority:
    removeSalesPriority,

  search:
    performSearch,

  showToast,

  openPremium:
    openPremiumAccess,

  reset:
    resetAllData
};

/* ======================================================
   START
====================================================== */

if (
  document.readyState === "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    initApp
  );

} else {

  initApp();

}
