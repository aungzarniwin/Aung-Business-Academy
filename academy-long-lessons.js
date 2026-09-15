/* =========================================================
   AUNG BUSINESS ACADEMY
   PROFESSIONAL LONG LESSON ENGINE
   VERSION 9.0
   230 BUSINESS LESSONS
   BURMESE DETAILED CONTENT SYSTEM
   ========================================================= */

(function () {
  "use strict";

  /* =========================================================
     1. MODULES — 23 MODULES × 10 LESSONS = 230
     ========================================================= */

  const MODULES = [
    {
      name: "Business Basics",
      icon: "🏢",
      lessons: [
        "What Is Business?",
        "Business Model Fundamentals",
        "Customer Value",
        "Revenue Model",
        "Cost Structure",
        "Profit Fundamentals",
        "Cash Flow Basics",
        "Business Growth",
        "Business Risk",
        "Building a Sustainable Business"
      ]
    },
    {
      name: "Strategic Thinking",
      icon: "🎯",
      lessons: [
        "Strategic Thinking Fundamentals",
        "Vision and Mission",
        "Goal Setting",
        "SWOT Analysis",
        "Competitive Advantage",
        "Market Positioning",
        "Strategic Priorities",
        "Decision Making",
        "Strategic Execution",
        "Strategy Review"
      ]
    },
    {
      name: "Leadership & Strategy",
      icon: "👑",
      lessons: [
        "Leadership Fundamentals",
        "Manager vs Leader",
        "Leadership Styles",
        "Building Trust",
        "Delegation",
        "Accountability",
        "Coaching",
        "Motivating Teams",
        "Leadership Communication",
        "Developing Future Leaders"
      ]
    },
    {
      name: "Branding",
      icon: "🏷️",
      lessons: [
        "Brand Fundamentals",
        "Brand Identity",
        "Brand Positioning",
        "Brand Promise",
        "Customer Perception",
        "Brand Differentiation",
        "Brand Consistency",
        "Brand Experience",
        "Brand Loyalty",
        "Building a Strong Brand"
      ]
    },
    {
      name: "Marketing",
      icon: "📣",
      lessons: [
        "Marketing Fundamentals",
        "Market Research",
        "Customer Segmentation",
        "Target Customer",
        "Marketing Mix",
        "Product Strategy",
        "Promotion Strategy",
        "Digital Marketing",
        "Marketing Campaigns",
        "Marketing Measurement"
      ]
    },
    {
      name: "Sales Fundamentals",
      icon: "💰",
      lessons: [
        "Sales Fundamentals",
        "Sales Process",
        "Prospecting",
        "Lead Qualification",
        "Needs Analysis",
        "Sales Presentation",
        "Handling Objections",
        "Closing Techniques",
        "Follow-Up",
        "Sales Performance"
      ]
    },
    {
      name: "Sales Management",
      icon: "📊",
      lessons: [
        "Sales Management Fundamentals",
        "Sales Target Setting",
        "Sales Forecasting",
        "Sales Territory Management",
        "Sales Team Structure",
        "Sales KPI",
        "Sales Review",
        "Field Execution",
        "Sales Coaching",
        "Sales Manager Dashboard"
      ]
    },
    {
      name: "Negotiation",
      icon: "🤝",
      lessons: [
        "Negotiation Fundamentals",
        "Preparation",
        "BATNA",
        "Value Creation",
        "Price Negotiation",
        "Win-Win Negotiation",
        "Handling Difficult Negotiators",
        "Supplier Negotiation",
        "Customer Negotiation",
        "Negotiation Strategy"
      ]
    },
    {
      name: "Customer Service",
      icon: "❤️",
      lessons: [
        "Customer Service Fundamentals",
        "Customer Expectations",
        "Customer Journey",
        "Service Quality",
        "Complaint Handling",
        "Customer Recovery",
        "Customer Communication",
        "Customer Retention",
        "Customer Loyalty",
        "Service Excellence"
      ]
    },
    {
      name: "People Management",
      icon: "👥",
      lessons: [
        "People Management Fundamentals",
        "Recruitment",
        "Onboarding",
        "Performance Management",
        "Employee Motivation",
        "Team Culture",
        "Conflict Management",
        "Employee Development",
        "Succession Planning",
        "People Analytics"
      ]
    },
    {
      name: "Financial Statements",
      icon: "📑",
      lessons: [
        "Understanding Financial Statements",
        "Income Statement",
        "Balance Sheet",
        "Cash Flow Statement",
        "Gross Profit",
        "Operating Profit",
        "Working Capital",
        "Financial Ratios",
        "Budget Control",
        "Financial Decision Making"
      ]
    },
    {
      name: "Profit & Loss",
      icon: "📈",
      lessons: [
        "Profit & Loss Fundamentals",
        "Revenue Analysis",
        "COGS",
        "Gross Margin",
        "Operating Expenses",
        "Break-Even Analysis",
        "Contribution Margin",
        "Profit Improvement",
        "Cost Reduction",
        "Profitability Management"
      ]
    },
    {
      name: "Goal Setting",
      icon: "🎯",
      lessons: [
        "Goal Setting Fundamentals",
        "SMART Goals",
        "Outcome vs Activity",
        "KPI Goals",
        "Personal Goals",
        "Team Goals",
        "Monthly Goals",
        "Quarterly Goals",
        "Goal Review",
        "Goal Achievement System"
      ]
    },
    {
      name: "Negotiation & Communication",
      icon: "🗣️",
      lessons: [
        "Business Communication",
        "Active Listening",
        "Questioning Skills",
        "Presentation Skills",
        "Meeting Management",
        "Email Communication",
        "Difficult Conversations",
        "Persuasion",
        "Executive Communication",
        "Communication Strategy"
      ]
    },
    {
      name: "Customer Relationship",
      icon: "🤝",
      lessons: [
        "Relationship Management",
        "Key Account Management",
        "Customer Classification",
        "Customer Value",
        "Account Planning",
        "Customer Visit Planning",
        "Relationship Mapping",
        "Customer Development",
        "Customer Risk",
        "Strategic Accounts"
      ]
    },
    {
      name: "Distribution Management",
      icon: "🚚",
      lessons: [
        "Distribution Fundamentals",
        "Distributor Selection",
        "Distributor Management",
        "Route to Market",
        "Territory Coverage",
        "Stock Management",
        "Order Management",
        "Distribution KPI",
        "Distributor Review",
        "Distribution Growth"
      ]
    },
    {
      name: "Retail Management",
      icon: "🏪",
      lessons: [
        "Retail Fundamentals",
        "Outlet Classification",
        "Store Execution",
        "Merchandising",
        "Shelf Management",
        "Availability",
        "Visibility",
        "Promotion Execution",
        "Retail KPI",
        "Retail Growth"
      ]
    },
    {
      name: "Modern Trade",
      icon: "🛒",
      lessons: [
        "Modern Trade Fundamentals",
        "Key Account Planning",
        "Listing",
        "Trade Terms",
        "Promotion Planning",
        "Planogram",
        "Sell-In vs Sell-Out",
        "Modern Trade Negotiation",
        "MT Performance",
        "Modern Trade Strategy"
      ]
    },
    {
      name: "Business Planning",
      icon: "📋",
      lessons: [
        "Business Planning Fundamentals",
        "Annual Business Plan",
        "Monthly Business Plan",
        "Sales Plan",
        "Marketing Plan",
        "Resource Planning",
        "Risk Planning",
        "Scenario Planning",
        "Execution Planning",
        "Business Plan Review"
      ]
    },
    {
      name: "Data & Analytics",
      icon: "📊",
      lessons: [
        "Business Data Fundamentals",
        "Data Collection",
        "Data Cleaning",
        "Excel for Managers",
        "Sales Analysis",
        "Trend Analysis",
        "Variance Analysis",
        "Dashboard Design",
        "Data-Based Decisions",
        "Business Analytics"
      ]
    },
    {
      name: "Productivity",
      icon: "⚡",
      lessons: [
        "Personal Productivity",
        "Time Management",
        "Priority Management",
        "Daily Planning",
        "Weekly Planning",
        "Meeting Productivity",
        "Delegation for Productivity",
        "Focus Management",
        "Work System",
        "High Performance Habits"
      ]
    },
    {
      name: "Business Planning & Growth",
      icon: "🚀",
      lessons: [
        "Growth Fundamentals",
        "Growth Strategy",
        "Market Expansion",
        "Product Expansion",
        "Customer Expansion",
        "Revenue Growth",
        "Scaling Operations",
        "Growth Risks",
        "Growth Metrics",
        "Building a Growth Engine"
      ]
    },
    {
      name: "Professional Manager",
      icon: "💼",
      lessons: [
        "Manager Mindset",
        "Executive Presence",
        "Professional Decision Making",
        "Business Review",
        "Performance Culture",
        "Managing Up",
        "Cross Functional Leadership",
        "Crisis Management",
        "Career Development",
        "Becoming a High-Impact Manager"
      ]
    }
  ];

  /* =========================================================
     2. LESSON FOCUS LIBRARY
     Each module has 10 specific focus areas.
     ========================================================= */

  const FOCUS = {

    "Business Basics": [
      "Business တစ်ခုရဲ့ အခြေခံအဓိပ္ပါယ်၊ Customer Problem နဲ့ Value Creation ကို နားလည်ခြင်း",
      "Business Model တည်ဆောက်ရာမှာ Customer, Value, Revenue နဲ့ Cost တို့ကို ချိတ်ဆက်စဉ်းစားခြင်း",
      "Customer က ဘာကြောင့် ကိုယ့် Product/Service ကို ဝယ်သင့်သလဲဆိုတဲ့ Value Proposition တည်ဆောက်ခြင်း",
      "Revenue ရရှိစေတဲ့ Channel, Pricing နဲ့ Revenue Stream တွေကို စနစ်တကျစဉ်းစားခြင်း",
      "Fixed Cost နဲ့ Variable Cost ခွဲခြားပြီး Cost Structure ကို ထိန်းချုပ်ခြင်း",
      "Revenue တိုးလာရုံနဲ့ Profit မဖြစ်နိုင်တဲ့အကြောင်းနဲ့ Profit Driver တွေကို နားလည်ခြင်း",
      "Cash Inflow, Cash Outflow နဲ့ Working Capital ကို စီမံခြင်း",
      "Business Growth ကို Revenue, Customer, Product နဲ့ Market အရ တိုင်းတာခြင်း",
      "Market, Customer, Finance, Operation နဲ့ People Risk တွေကို ကြိုတင်စီမံခြင်း",
      "ရေရှည်တည်တံ့နိုင်တဲ့ Business System တစ်ခုကို တည်ဆောက်ခြင်း"
    ],

    "Strategic Thinking": [
      "နေ့စဉ်လုပ်ငန်းကိစ္စထက် ရေရှည်အကျိုးသက်ရောက်မှုကို စဉ်းစားတဲ့ Strategic Thinking",
      "Vision နဲ့ Mission ကို လုပ်ငန်းရဲ့ Direction အဖြစ် အသုံးချခြင်း",
      "Business Goal ကို Measurable Target အဖြစ် ပြောင်းလဲခြင်း",
      "Strength, Weakness, Opportunity, Threat ကို စနစ်တကျခွဲခြမ်းခြင်း",
      "Competitor များထက် ထူးခြားတဲ့ Competitive Advantage တည်ဆောက်ခြင်း",
      "Customer ရဲ့စိတ်ထဲမှာ ကိုယ့် Brand/Product ကို ဘယ်လို Position ချမလဲဆိုတာ ဆုံးဖြတ်ခြင်း",
      "အရေးကြီးဆုံး Strategic Priorities တွေကို ရွေးချယ်ပြီး Resource မဖြုန်းခြင်း",
      "Data, Risk နဲ့ Business Impact အပေါ်အခြေခံပြီး Decision ချခြင်း",
      "Strategy ကို Field Execution နဲ့ ချိတ်ဆက်ခြင်း",
      "Strategy Review နဲ့ ပြောင်းလဲနေတဲ့ Market အပေါ် Adapt လုပ်ခြင်း"
    ],

    "Leadership & Strategy": [
      "Leadership ဆိုတာ Authority မဟုတ်ဘဲ Direction, Influence နဲ့ Accountability ဖြစ်ကြောင်း နားလည်ခြင်း",
      "Manager နဲ့ Leader ရဲ့ အခန်းကဏ္ဍကွာခြားချက်ကို သိရှိခြင်း",
      "အခြေအနေအလိုက် Leadership Style ပြောင်းလဲအသုံးချခြင်း",
      "Team အတွင်း Trust တည်ဆောက်ပြီး Psychological Safety ဖန်တီးခြင်း",
      "အလုပ်တာဝန်ခွဲပေးရာမှာ Delegation နဲ့ Control ကို မှန်ကန်စွာချိန်ညှိခြင်း",
      "Result မကောင်းတဲ့အခါ Accountability တည်ဆောက်ခြင်း",
      "Coaching Conversation ဖြင့် ဝန်ထမ်းရဲ့ Capability တိုးတက်စေခြင်း",
      "Motivation Driver မတူညီတဲ့ Team Members တွေကို စီမံခြင်း",
      "Clear, Concise, Consistent Leadership Communication",
      "Future Leaders တွေကို ကြိုတင်တည်ဆောက်ခြင်း"
    ],

    "Branding": [
      "Brand ဆိုတာ Logo မဟုတ်ဘဲ Customer ရဲ့ Mind ထဲမှာရှိတဲ့ Perception ဖြစ်ကြောင်း နားလည်ခြင်း",
      "Brand Identity ကို Visual, Verbal နဲ့ Behavioral Element များဖြင့် တည်ဆောက်ခြင်း",
      "Competitor များကြား Brand Positioning ကို ရှင်းလင်းစွာ သတ်မှတ်ခြင်း",
      "Brand Promise ကို Customer Experience နဲ့ ချိတ်ဆက်ခြင်း",
      "Customer Perception ကို တိုင်းတာပြီး Brand Gap ကို ရှာဖွေခြင်း",
      "Differentiation ကို Product Feature ထက် Customer Value အပေါ် တည်ဆောက်ခြင်း",
      "Channel အားလုံးမှာ Brand Consistency ထိန်းသိမ်းခြင်း",
      "Customer ထိတွေ့မှုတိုင်းကို Brand Experience အဖြစ် စီမံခြင်း",
      "Customer Loyalty တည်ဆောက်ဖို့ Trust နဲ့ Consistency ကို အသုံးချခြင်း",
      "ရေရှည် Brand Equity တည်ဆောက်ခြင်း"
    ],

    "Marketing": [
      "Marketing ရဲ့ အဓိကအလုပ်က Customer Need နဲ့ Business Objective ကို ချိတ်ဆက်ခြင်း",
      "Market Research ကနေ Customer နဲ့ Competitor Insight ရယူခြင်း",
      "Customer ကို Segment ခွဲပြီး Resource ကို ထိရောက်စွာ အသုံးချခြင်း",
      "Target Customer ကို Demographic ထက် Behavior နဲ့ Need အရ သတ်မှတ်ခြင်း",
      "Product, Price, Place, Promotion ကို Integrated Marketing Mix အဖြစ် အသုံးချခြင်း",
      "Product Strategy ကို Customer Problem နဲ့ Product Life Cycle အပေါ် တည်ဆောက်ခြင်း",
      "Promotion ကို Awareness ထက် Conversion အထိ စီမံခြင်း",
      "Digital Channel ကို Content, Reach, Engagement နဲ့ Conversion အဖြစ် တိုင်းတာခြင်း",
      "Campaign Objective, Audience, Offer, Channel နဲ့ KPI တို့ကို ချိတ်ဆက်ခြင်း",
      "Marketing ROI နဲ့ Incremental Sales ကို တိုင်းတာခြင်း"
    ],

    "Sales Fundamentals": [
      "Sales ကို Product ပြောရောင်းခြင်းထက် Customer Problem ဖြေရှင်းပေးခြင်းအဖြစ် နားလည်ခြင်း",
      "Prospect မှ Customer ဖြစ်လာတဲ့ Sales Process တစ်ခုလုံးကို နားလည်ခြင်း",
      "သင့်တော်တဲ့ Prospect ကို ရှာဖွေပြီး Sales Pipeline ဖြည့်ခြင်း",
      "Lead တစ်ခုရဲ့ Potential, Need, Authority နဲ့ Timing ကို စစ်ဆေးခြင်း",
      "Customer Need ကို မေးခွန်းကောင်းများဖြင့် ရှာဖွေခြင်း",
      "Feature များထက် Business Benefit အဖြစ် Presentation ပြုလုပ်ခြင်း",
      "Price, Quality, Competitor, Timing စတဲ့ Objection တွေကို စနစ်တကျဖြေရှင်းခြင်း",
      "Closing ကို Pressure မပေးဘဲ Buying Decision ကို ရှင်းလင်းစေခြင်း",
      "Sale ပြီးနောက် Follow-up ဖြင့် Repeat Business တည်ဆောက်ခြင်း",
      "Conversion, Average Order, Pipeline နဲ့ Achievement တို့ဖြင့် Sales Performance တိုင်းတာခြင်း"
    ],

    "Sales Management": [
      "Sales Manager ရဲ့ အလုပ်က ကိုယ်တိုင်ရောင်းတာမဟုတ်ဘဲ Team ကနေ Result ထွက်အောင် System တည်ဆောက်ခြင်း",
      "Target ကို Territory, Channel, Customer နဲ့ Salesperson အလိုက် ခွဲဝေခြင်း",
      "Historical Data, Pipeline နဲ့ Market Signal ကို အသုံးပြုပြီး Forecast ပြုလုပ်ခြင်း",
      "Territory တစ်ခုချင်းစီရဲ့ Potential နဲ့ Coverage ကို ခွဲခြမ်းခြင်း",
      "Team Structure ကို Role, Territory နဲ့ Workload အပေါ် တည်ဆောက်ခြင်း",
      "Leading KPI နဲ့ Lagging KPI နှစ်မျိုးလုံးကို အသုံးချခြင်း",
      "Daily, Weekly, Monthly Sales Review System တည်ဆောက်ခြင်း",
      "Plan ကို Field Execution အဖြစ် ပြောင်းလဲခြင်း",
      "Coaching ဖြင့် Salesperson Capability တိုးတက်စေခြင်း",
      "Manager Dashboard ကနေ Actionable Insight ထုတ်ယူခြင်း"
    ],

    "Negotiation": [
      "Negotiation ရဲ့ အခြေခံက Position မဟုတ်ဘဲ Interest ကို နားလည်ခြင်း",
      "Negotiation မစခင် Objective, Limit, BATNA နဲ့ Concession Plan ပြင်ဆင်ခြင်း",
      "BATNA က Negotiation Power ကို ဘယ်လိုပြောင်းလဲပေးသလဲဆိုတာ နားလည်ခြင်း",
      "Price တစ်ခုတည်းမဟုတ်ဘဲ Terms, Volume, Service နဲ့ Timing တို့မှ Value ဖန်တီးခြင်း",
      "Price Discount မပေးဘဲ Value-Based Negotiation ပြုလုပ်ခြင်း",
      "နှစ်ဖက်လုံးအကျိုးရှိတဲ့ Win-Win Agreement တည်ဆောက်ခြင်း",
      "Aggressive, Silent, Manipulative စတဲ့ Negotiator များကို စီမံခြင်း",
      "Supplier Cost, MOQ, Payment Terms နဲ့ Lead Time တို့ကို ညှိနှိုင်းခြင်း",
      "Customer Terms နဲ့ Commercial Value ကို Balance လုပ်ခြင်း",
      "Negotiation Strategy ကို Data နဲ့ Scenario အပေါ် တည်ဆောက်ခြင်း"
    ],

    "Customer Service": [
      "Customer Service ကို Transaction ပြီးတဲ့အချိန်မှာ စတာမဟုတ်ဘဲ Customer Journey တစ်လျှောက် စီမံခြင်း",
      "Customer Expectation ကို သိပြီး Overpromise မလုပ်ဘဲ Deliver လုပ်ခြင်း",
      "Customer Journey ရဲ့ Touchpoint တိုင်းမှာ Friction ကို ရှာဖွေခြင်း",
      "Service Quality ကို Speed, Accuracy, Reliability နဲ့ Empathy အရ တိုင်းတာခြင်း",
      "Complaint ကို အပြစ်ရှာစရာမဟုတ်ဘဲ Improvement Signal အဖြစ် အသုံးချခြင်း",
      "Service Failure ဖြစ်တဲ့အခါ Customer Recovery ပြုလုပ်ခြင်း",
      "Customer Communication မှာ Clarity နဲ့ Ownership တည်ဆောက်ခြင်း",
      "Customer Retention ကို Repeat Purchase နဲ့ Churn အရ တိုင်းတာခြင်း",
      "Loyalty တည်ဆောက်ဖို့ Trust, Convenience နဲ့ Consistency အသုံးချခြင်း",
      "Service Excellence ကို System အဖြစ် တည်ဆောက်ခြင်း"
    ],

    "People Management": [
      "People Management ရဲ့ အဓိကက လူကို Control လုပ်ခြင်းမဟုတ်ဘဲ Performance Environment တည်ဆောက်ခြင်း",
      "Right Person ကို Right Role ထဲရောက်အောင် Recruitment ပြုလုပ်ခြင်း",
      "Onboarding ကာလမှာ Role, KPI, Culture နဲ့ Expectation ရှင်းလင်းခြင်း",
      "Performance Management ကို Annual Review တစ်ခုတည်းမဟုတ်ဘဲ Continuous Process အဖြစ် လုပ်ခြင်း",
      "Motivation ကို Salary တစ်ခုတည်းနဲ့ မသတ်မှတ်ဘဲ Purpose, Recognition နဲ့ Growth ထည့်သွင်းစဉ်းစားခြင်း",
      "Team Culture ကို Leader Behavior နဲ့ Daily Management System ဖြင့် တည်ဆောက်ခြင်း",
      "Conflict ကို လူပုဂ္ဂိုလ်အဖြစ် မမြင်ဘဲ Issue အဖြစ် ဖြေရှင်းခြင်း",
      "Employee Capability Development Plan တည်ဆောက်ခြင်း",
      "High Potential Employees များအတွက် Succession Plan ပြုလုပ်ခြင်း",
      "People Data ကို အသုံးပြုပြီး Hiring, Retention နဲ့ Performance Decision ချခြင်း"
    ],

    "Financial Statements": [
      "Financial Statements သုံးခုကို Manager အနေနဲ့ Business Decision ချနိုင်အောင် ဖတ်တတ်ခြင်း",
      "Income Statement က Revenue ကနေ Profit အထိ ဘယ်လိုရောက်သလဲဆိုတာ နားလည်ခြင်း",
      "Balance Sheet မှာ Asset, Liability နဲ့ Equity တို့ရဲ့ ဆက်နွယ်မှုကို နားလည်ခြင်း",
      "Cash Flow Statement က Profit နဲ့ Cash မတူကြောင်း ပြသပုံကို နားလည်ခြင်း",
      "Gross Profit က Business ရဲ့ Core Economics ကို ပြသပုံကို ခွဲခြမ်းခြင်း",
      "Operating Profit က Operating Efficiency ကို တိုင်းတာပုံကို နားလည်ခြင်း",
      "Working Capital ပိတ်မိရင် Business Growth ကို ဘယ်လိုထိခိုက်သလဲ သိရှိခြင်း",
      "Financial Ratio များဖြင့် Business Health ကို အလျင်အမြန် စစ်ဆေးခြင်း",
      "Budget နဲ့ Actual ကို နှိုင်းယှဉ်ပြီး Cost Control ပြုလုပ်ခြင်း",
      "Financial Data ကနေ Managerial Decision ထုတ်ယူခြင်း"
    ],

    "Profit & Loss": [
      "Profit & Loss Statement ကို Business Performance Tool အဖြစ် အသုံးချခြင်း",
      "Revenue ကို Volume, Price, Mix အဖြစ် ခွဲခြမ်းခြင်း",
      "COGS ကို Product Economics နဲ့ ချိတ်ဆက်ပြီး ထိန်းချုပ်ခြင်း",
      "Gross Margin တိုးဖို့ Price, Cost နဲ့ Product Mix ကို စီမံခြင်း",
      "Operating Expense ကို Necessary, Productive နဲ့ Waste အဖြစ် ခွဲခြားခြင်း",
      "Break-Even Point ကို အသုံးပြုပြီး Minimum Sales Requirement သိရှိခြင်း",
      "Contribution Margin က Product/Customer Decision ကို ဘယ်လိုကူညီသလဲ နားလည်ခြင်း",
      "Profit Improvement Opportunity ကို Revenue နဲ့ Cost နှစ်ဖက်လုံးက ရှာဖွေခြင်း",
      "Cost Reduction ကို Business Quality မထိခိုက်စေဘဲ ပြုလုပ်ခြင်း",
      "Profitability ကို Customer, Product, Channel အလိုက် စီမံခြင်း"
    ],

    "Goal Setting": [
      "Goal ကို Wish မဟုတ်ဘဲ Measurable Business Outcome အဖြစ် သတ်မှတ်ခြင်း",
      "SMART Goal Framework ကို Business Context မှာ အသုံးချခြင်း",
      "Outcome Goal နဲ့ Activity Goal ကွာခြားချက်ကို သိရှိခြင်း",
      "KPI နဲ့ Goal ကို ချိတ်ဆက်ပြီး Measurement System တည်ဆောက်ခြင်း",
      "Personal Goal ကို Career Direction နဲ့ ချိတ်ဆက်ခြင်း",
      "Team Goal ကို Individual Contribution အဖြစ် ခွဲဝေခြင်း",
      "Monthly Goal ကို Weekly နဲ့ Daily Execution အဖြစ် ပြောင်းလဲခြင်း",
      "Quarterly Goal ကို Strategic Priority အဖြစ် စီမံခြင်း",
      "Goal Review ကနေ Gap နဲ့ Root Cause ရှာဖွေခြင်း",
      "Goal Achievement System ကို Habit, Review နဲ့ Accountability ဖြင့် တည်ဆောက်ခြင်း"
    ],

    "Negotiation & Communication": [
      "Business Communication ရဲ့ ရည်ရွယ်ချက်က Information ပေးခြင်းထက် Action ရရှိစေခြင်း",
      "Active Listening ဖြင့် Meaning, Emotion နဲ့ Hidden Need ကို နားလည်ခြင်း",
      "Open, Probing, Clarifying နဲ့ Closing Questions များကို မှန်ကန်စွာ အသုံးချခြင်း",
      "Presentation ကို Audience, Objective နဲ့ Decision အပေါ် တည်ဆောက်ခြင်း",
      "Meeting ကို Agenda, Decision, Owner နဲ့ Deadline ဖြင့် စီမံခြင်း",
      "Business Email ကို Clear, Concise, Actionable ဖြစ်အောင် ရေးခြင်း",
      "Difficult Conversation ကို Emotion မတက်ဘဲ Fact နဲ့ Expectation အပေါ် ဆွေးနွေးခြင်း",
      "Persuasion ကို Logic, Evidence နဲ့ Value Proposition အပေါ် တည်ဆောက်ခြင်း",
      "Senior Management ကို Executive-Level Communication ပြုလုပ်ခြင်း",
      "Communication Strategy ကို Stakeholder အလိုက် ပြောင်းလဲအသုံးချခြင်း"
    ],

    "Customer Relationship": [
      "Customer Relationship Management ရဲ့ ရည်ရွယ်ချက်က Long-Term Commercial Value တိုးစေခြင်း",
      "Key Account ကို Revenue, Potential, Strategic Importance အရ စီမံခြင်း",
      "Customer Classification ဖြင့် Time နဲ့ Resource ကို ဦးစားပေးခြင်း",
      "Customer Value ကို Revenue တစ်ခုတည်းမဟုတ်ဘဲ Margin, Growth နဲ့ Relationship အရ တွက်ချက်ခြင်း",
      "Account Plan တစ်ခုကို Customer Objective နဲ့ Business Opportunity အပေါ် တည်ဆောက်ခြင်း",
      "Customer Visit ကို Courtesy Visit မဟုတ်ဘဲ Business Review အဖြစ် အသုံးချခြင်း",
      "Decision Maker, Influencer, User နဲ့ Blocker တို့ကို Relationship Map ပြုလုပ်ခြင်း",
      "Existing Customer ထဲက Growth Opportunity ရှာဖွေခြင်း",
      "Customer Risk ကို Dependency, Payment, Competition နဲ့ Relationship အရ စောင့်ကြည့်ခြင်း",
      "Strategic Account ကို Joint Business Plan ဖြင့် တိုးချဲ့ခြင်း"
    ],

    "Distribution Management": [
      "Distribution System က Product ကို Market ထဲရောက်အောင် ဘယ်လိုချိတ်ဆက်သလဲ နားလည်ခြင်း",
      "Distributor ရွေးချယ်ရာမှာ Financial, Capability, Coverage နဲ့ Reputation စစ်ဆေးခြင်း",
      "Distributor Relationship ကို Control မဟုတ်ဘဲ Joint Business Management အဖြစ် တည်ဆောက်ခြင်း",
      "Route to Market ကို Direct, Distributor, Wholesale, Retail Channel အလိုက် စီမံခြင်း",
      "Territory Coverage ကို Outlet Universe နဲ့ Call Frequency အရ တိုင်းတာခြင်း",
      "Stock Level, Stock Aging နဲ့ Inventory Health ကို ထိန်းချုပ်ခြင်း",
      "Order Cycle ကို Accurate Forecast နဲ့ ချိတ်ဆက်ခြင်း",
      "Distribution KPI ကို Numeric Distribution, Weighted Distribution, Fill Rate စသည်ဖြင့် တိုင်းတာခြင်း",
      "Distributor Business Review ကို Data အပေါ် တည်ဆောက်ခြင်း",
      "Distribution Growth ကို Coverage, Productivity နဲ့ Availability ဖြင့် တိုးချဲ့ခြင်း"
    ],

    "Retail Management": [
      "Retail Business ရဲ့ အခြေခံ Economics နဲ့ Shopper Behavior ကို နားလည်ခြင်း",
      "Outlet ကို Potential, Format, Location နဲ့ Sales အရ Classification ပြုလုပ်ခြင်း",
      "Store Execution ကို Availability, Visibility, Pricing နဲ့ Compliance ဖြင့် စီမံခြင်း",
      "Merchandising ကို Shopper Attention နဲ့ Conversion တိုးစေဖို့ အသုံးချခြင်း",
      "Shelf Space ကို Sales Potential နဲ့ Product Role အရ စီမံခြင်း",
      "Out-of-Stock ကို ရှာဖွေပြီး Availability တိုးစေခြင်း",
      "Visibility Asset များကို Strategic Location တွင် အသုံးချခြင်း",
      "Promotion ကို Correct Price, Stock, POSM နဲ့ Staff Execution ဖြင့် အကောင်အထည်ဖော်ခြင်း",
      "Retail KPI ကို Sales, Calls, Availability, Visibility အရ စောင့်ကြည့်ခြင်း",
      "High Potential Outlet တွေကနေ Retail Growth ဖန်တီးခြင်း"
    ],

    "Modern Trade": [
      "Modern Trade ရဲ့ Central Buying, Store Execution နဲ့ Commercial Model ကို နားလည်ခြင်း",
      "Key Account Plan ကို Customer Strategy နဲ့ Supplier Objective ချိတ်ဆက်ခြင်း",
      "Listing Decision ကို Category Potential နဲ့ Commercial Terms အပေါ် စီမံခြင်း",
      "Trade Terms ကို Discount မဟုတ်ဘဲ Total Commercial Investment အဖြစ် စီမံခြင်း",
      "Promotion Calendar ကို Shopper Need နဲ့ Business Objective အပေါ် တည်ဆောက်ခြင်း",
      "Planogram က Shopper Navigation နဲ့ Category Growth ကို ဘယ်လိုအကျိုးသက်ရောက်သလဲ နားလည်ခြင်း",
      "Sell-In နဲ့ Sell-Out မညီမျှမှုကို စောင့်ကြည့်ခြင်း",
      "Modern Trade Negotiation ကို Data နဲ့ ROI အပေါ် တည်ဆောက်ခြင်း",
      "MT Performance ကို Account, SKU, Promotion နဲ့ Store အလိုက် ခွဲခြမ်းခြင်း",
      "Modern Trade Strategy ကို Joint Business Planning ဖြင့် တိုးချဲ့ခြင်း"
    ],

    "Business Planning": [
      "Business Plan ကို Wish List မဟုတ်ဘဲ Strategy-to-Execution Roadmap အဖြစ် တည်ဆောက်ခြင်း",
      "Annual Business Plan မှာ Market, Objective, Strategy, Resource နဲ့ Financial Target ထည့်သွင်းခြင်း",
      "Monthly Plan ကို Annual Strategy နဲ့ ချိတ်ဆက်ခြင်း",
      "Sales Plan ကို Volume, Value, Customer, Channel အလိုက် ခွဲဝေခြင်း",
      "Marketing Plan ကို Customer Journey နဲ့ Sales Objective ချိတ်ဆက်ခြင်း",
      "Resource Plan မှာ People, Money, Time နဲ့ Capability ကို ခွဲဝေခြင်း",
      "Risk Plan နဲ့ Business Continuity ကို ကြိုတင်ပြင်ဆင်ခြင်း",
      "Best Case, Base Case, Worst Case Scenario Planning ပြုလုပ်ခြင်း",
      "Execution Plan ကို Owner, Timeline, KPI နဲ့ Review System ဖြင့် တည်ဆောက်ခြင်း",
      "Business Plan Review ကနေ Course Correction ပြုလုပ်ခြင်း"
    ],

    "Data & Analytics": [
      "Business Data ကို Record မဟုတ်ဘဲ Decision Input အဖြစ် နားလည်ခြင်း",
      "Data Collection မှာ Accuracy, Timeliness နဲ့ Relevance ထိန်းသိမ်းခြင်း",
      "Duplicate, Missing, Wrong Format စတဲ့ Data Quality Problem များကို ပြင်ဆင်ခြင်း",
      "Manager တစ်ယောက်အတွက် Excel ရဲ့ အခြေခံ Analysis Function များကို အသုံးချခြင်း",
      "Sales Data ကို Volume, Value, Growth, Mix အဖြစ် ခွဲခြမ်းခြင်း",
      "Trend ကို Single Month မဟုတ်ဘဲ Time Series ဖြင့် ရှာဖွေခြင်း",
      "Target vs Actual Variance ကို Root Cause အထိ လိုက်ခြင်း",
      "Dashboard ကို Data အများကြီးမဟုတ်ဘဲ Decision အတွက် ဒီဇိုင်းပြုလုပ်ခြင်း",
      "Data မှ Insight ထုတ်ပြီး Action သတ်မှတ်ခြင်း",
      "Business Analytics ကို Forecast, Segmentation နဲ့ Optimization အတွက် အသုံးချခြင်း"
    ],

    "Productivity": [
      "Productivity ဆိုတာ အလုပ်များများလုပ်ခြင်းမဟုတ်ဘဲ အရေးကြီးတဲ့ Result ရရှိစေခြင်း",
      "Time Management ကို Calendar, Priority နဲ့ Energy အပေါ် တည်ဆောက်ခြင်း",
      "Urgent နဲ့ Important ကို ခွဲပြီး Priority သတ်မှတ်ခြင်း",
      "Daily Planning ကို Top 3 Outcomes အပေါ် တည်ဆောက်ခြင်း",
      "Weekly Planning ဖြင့် Reactive Work လျော့ချခြင်း",
      "Meeting Time ကို Decision နဲ့ Output အပေါ် စီမံခြင်း",
      "Delegation ဖြင့် Manager ရဲ့ Low-Value Work လျော့ချခြင်း",
      "Focus Management ဖြင့် Deep Work Time ကာကွယ်ခြင်း",
      "Repeatable Work System နဲ့ SOP တည်ဆောက်ခြင်း",
      "High Performance Habit ကို Consistency နဲ့ Review ဖြင့် တည်ဆောက်ခြင်း"
    ],

    "Business Planning & Growth": [
      "Business Growth ကို Revenue တိုးခြင်းတစ်ခုတည်းမဟုတ်ဘဲ Quality Growth အဖြစ် နားလည်ခြင်း",
      "Growth Strategy ကို Customer, Product, Market နဲ့ Channel အပေါ် တည်ဆောက်ခြင်း",
      "Existing Market ထဲမှာ Coverage နဲ့ Share တိုးခြင်း",
      "Product Expansion ဖြင့် Customer Need အသစ်များ ဖြည့်ဆည်းခြင်း",
      "Existing Customer Base ထဲက Customer Expansion ပြုလုပ်ခြင်း",
      "Revenue Growth ကို Volume, Price, Mix နဲ့ New Business အဖြစ် ခွဲခြမ်းခြင်း",
      "Growth အတွက် Operation, People, Technology နဲ့ Process ကို Scale လုပ်ခြင်း",
      "Fast Growth ရဲ့ Cash, Quality, People နဲ့ Control Risk များကို စီမံခြင်း",
      "Growth Metrics ကို Leading နဲ့ Lagging Indicator အဖြစ် တည်ဆောက်ခြင်း",
      "Repeatable Growth Engine တစ်ခုကို System အဖြစ် တည်ဆောက်ခြင်း"
    ],

    "Professional Manager": [
      "Manager Mindset ကို Individual Contributor ကနေ Business Owner Mindset သို့ ပြောင်းလဲခြင်း",
      "Executive Presence ကို Confidence, Clarity, Judgment နဲ့ Professional Behavior ဖြင့် တည်ဆောက်ခြင်း",
      "Professional Decision Making ကို Fact, Risk, Impact နဲ့ Speed အပေါ် တည်ဆောက်ခြင်း",
      "Business Review မှာ Result, Gap, Root Cause နဲ့ Action ကို ခွဲခြမ်းခြင်း",
      "Performance Culture ကို Clear Expectations, Feedback နဲ့ Accountability ဖြင့် တည်ဆောက်ခြင်း",
      "Managing Up မှာ Boss ကို Impress လုပ်ခြင်းထက် Business Alignment တည်ဆောက်ခြင်း",
      "Cross-Functional Leadership မှာ Authority မရှိဘဲ Influence ပြုလုပ်ခြင်း",
      "Crisis Management ကို Calm, Fact, Priority နဲ့ Communication ဖြင့် စီမံခြင်း",
      "Career Development ကို Capability, Visibility နဲ့ Business Impact အပေါ် တည်ဆောက်ခြင်း",
      "High-Impact Manager ဖြစ်လာဖို့ Business Result နဲ့ People Development နှစ်ခုလုံး တိုးတက်စေခြင်း"
    ]
  };

  /* =========================================================
     3. MODULE-SPECIFIC KPI LIBRARY
     ========================================================= */

  const KPI_LIBRARY = {
    "Business Basics": ["Revenue", "Gross Profit", "Cash Flow", "Customer Count", "Repeat Purchase"],
    "Strategic Thinking": ["Market Share", "Growth Rate", "Strategic Priority Completion", "Competitive Position", "ROI"],
    "Leadership & Strategy": ["Team Achievement", "Employee Retention", "Coaching Completion", "Productivity", "Engagement"],
    "Branding": ["Awareness", "Consideration", "Preference", "Repeat Purchase", "Brand Equity"],
    "Marketing": ["Reach", "Engagement", "Leads", "Conversion", "Marketing ROI"],
    "Sales Fundamentals": ["Conversion Rate", "Average Order", "Pipeline", "Win Rate", "Sales Achievement"],
    "Sales Management": ["Target Achievement", "Forecast Accuracy", "Coverage", "Productivity", "Team Conversion"],
    "Negotiation": ["Gross Margin", "Discount Rate", "Terms", "Agreement Value", "Concession Cost"],
    "Customer Service": ["CSAT", "Response Time", "Resolution Time", "Repeat Rate", "Complaint Rate"],
    "People Management": ["Turnover", "Productivity", "Training Completion", "Performance", "Internal Promotion"],
    "Financial Statements": ["Revenue", "Gross Profit", "Operating Profit", "Current Ratio", "Cash Flow"],
    "Profit & Loss": ["Revenue", "COGS", "Gross Margin", "OPEX", "Net Profit"],
    "Goal Setting": ["Goal Achievement", "KPI Achievement", "Completion Rate", "Gap", "Consistency"],
    "Negotiation & Communication": ["Response Time", "Decision Time", "Meeting Output", "Message Accuracy", "Stakeholder Alignment"],
    "Customer Relationship": ["Revenue/Account", "Margin/Account", "Retention", "Share of Wallet", "Account Growth"],
    "Distribution Management": ["Numeric Distribution", "Fill Rate", "Stock Availability", "Order Frequency", "Distributor Sales"],
    "Retail Management": ["Outlet Sales", "Availability", "Visibility", "Strike Rate", "Promotion Compliance"],
    "Modern Trade": ["Sell-In", "Sell-Out", "Distribution", "Promotion ROI", "Gross Margin"],
    "Business Planning": ["Plan Achievement", "Budget Variance", "Milestone Completion", "ROI", "Risk Closure"],
    "Data & Analytics": ["Data Accuracy", "Growth", "Variance", "Forecast Accuracy", "Decision Cycle Time"],
    "Productivity": ["High-Value Hours", "Task Completion", "Meeting Hours", "Delegation Rate", "Priority Achievement"],
    "Business Planning & Growth": ["Revenue Growth", "Customer Growth", "Market Expansion", "Margin Growth", "Productivity"],
    "Professional Manager": ["Business Result", "Team Result", "Decision Speed", "Execution Rate", "Talent Development"]
  };

  /* =========================================================
     4. BUSINESS TOOLS
     ========================================================= */

  const TOOL_LIBRARY = {
    "Business Basics": [
      "Business Model Canvas",
      "Customer Value Map",
      "Revenue-Cost Map",
      "Cash Flow Tracker",
      "Business Health Check"
    ],
    "Strategic Thinking": [
      "SWOT",
      "PESTEL",
      "Competitive Map",
      "Priority Matrix",
      "Strategy Scorecard"
    ],
    "Leadership & Strategy": [
      "Leadership Style Matrix",
      "Delegation Matrix",
      "Coaching Model",
      "Accountability Matrix",
      "Leadership Scorecard"
    ],
    "Branding": [
      "Brand Positioning Map",
      "Brand Pyramid",
      "Brand Promise",
      "Customer Perception Map",
      "Brand Consistency Audit"
    ],
    "Marketing": [
      "STP",
      "4P",
      "Customer Journey",
      "Campaign Funnel",
      "Marketing ROI"
    ],
    "Sales Fundamentals": [
      "Sales Funnel",
      "Qualification Matrix",
      "Needs Analysis",
      "Objection Map",
      "Closing Plan"
    ],
    "Sales Management": [
      "Sales Funnel",
      "Target Cascade",
      "Forecast Model",
      "Territory Map",
      "Sales Dashboard"
    ],
    "Negotiation": [
      "BATNA",
      "ZOPA",
      "Concession Matrix",
      "Value Exchange",
      "Negotiation Plan"
    ],
    "Customer Service": [
      "Customer Journey Map",
      "Service Recovery Model",
      "Complaint Log",
      "CSAT",
      "Retention Dashboard"
    ],
    "People Management": [
      "Performance Matrix",
      "9-Box",
      "Development Plan",
      "1-on-1",
      "Succession Map"
    ],
    "Financial Statements": [
      "Income Statement",
      "Balance Sheet",
      "Cash Flow",
      "Ratio Analysis",
      "Budget vs Actual"
    ],
    "Profit & Loss": [
      "P&L",
      "Gross Margin Analysis",
      "Break-Even",
      "Contribution Margin",
      "Profit Bridge"
    ],
    "Goal Setting": [
      "SMART",
      "KPI Tree",
      "Goal Cascade",
      "Weekly Scorecard",
      "Review Cycle"
    ],
    "Negotiation & Communication": [
      "Communication Map",
      "Stakeholder Map",
      "Meeting Agenda",
      "Question Funnel",
      "Executive Summary"
    ],
    "Customer Relationship": [
      "Account Plan",
      "Stakeholder Map",
      "Customer Potential Matrix",
      "Joint Business Plan",
      "Account Review"
    ],
    "Distribution Management": [
      "Route-to-Market",
      "Coverage Map",
      "Stock Aging",
      "Distributor Scorecard",
      "Distribution Dashboard"
    ],
    "Retail Management": [
      "Outlet Classification",
      "Merchandising Audit",
      "Availability Check",
      "Promotion Audit",
      "Retail Scorecard"
    ],
    "Modern Trade": [
      "Joint Business Plan",
      "Promotion ROI",
      "Planogram",
      "Sell-In/Sell-Out",
      "Account Scorecard"
    ],
    "Business Planning": [
      "Annual Business Plan",
      "Scenario Plan",
      "Resource Plan",
      "Risk Register",
      "Execution Tracker"
    ],
    "Data & Analytics": [
      "Excel",
      "Pivot Table",
      "Variance Analysis",
      "Dashboard",
      "Trend Analysis"
    ],
    "Productivity": [
      "Eisenhower Matrix",
      "Time Block",
      "Weekly Review",
      "Delegation Matrix",
      "Habit Tracker"
    ],
    "Business Planning & Growth": [
      "Growth Matrix",
      "Market Expansion Map",
      "Product Expansion Map",
      "Customer Expansion",
      "Growth Dashboard"
    ],
    "Professional Manager": [
      "Manager Scorecard",
      "Business Review",
      "Decision Matrix",
      "Stakeholder Map",
      "Career Development Plan"
    ]
  };

  /* =========================================================
     5. LESSON OBJECT CREATION
     ========================================================= */

  const LESSONS = [];

  MODULES.forEach((module, moduleIndex) => {
    module.lessons.forEach((title, lessonIndex) => {
      LESSONS.push({
        id: `m${moduleIndex + 1}-l${lessonIndex + 1}`,
        module: module.name,
        moduleIndex: moduleIndex,
        lessonIndex: lessonIndex,
        icon: module.icon,
        title: title,
        focus:
          (FOCUS[module.name] && FOCUS[module.name][lessonIndex]) ||
          `${title} ကို Business Manager အမြင်ဖြင့် လက်တွေ့အသုံးချနိုင်အောင် လေ့လာခြင်း`,
        kpis:
          KPI_LIBRARY[module.name] ||
          ["Target", "Actual", "Gap", "Growth", "Productivity"],
        tools:
          TOOL_LIBRARY[module.name] ||
          ["Action Plan", "KPI Dashboard", "Review System"]
      });
    });
  });

  /* =========================================================
     6. STORAGE
     ========================================================= */

  const STORAGE_KEY = "aung_business_academy_completed_v20";

  function getCompleted() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    } catch (e) {
      return [];
    }
  }

  function saveCompleted(list) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (e) {
      console.warn("Progress could not be saved.", e);
    }
  }

  function isCompleted(id) {
    return getCompleted().includes(id);
  }

  function markCompleted(id) {
    const list = getCompleted();

    if (!list.includes(id)) {
      list.push(id);
      saveCompleted(list);
    }

    updateDashboard();
    renderLessons();

    const btn = document.querySelector(
      "#aungProfessionalLessonModal .aba-complete-btn"
    );

    if (btn) {
      btn.innerHTML = "✓ သင်ခန်းစာပြီးဆုံးပါပြီ";
      btn.classList.add("completed");
    }
  }

  function getProgress() {
    const total = LESSONS.length;
    const completed = getCompleted().length;
    const percentage = total
      ? Math.round((completed / total) * 100)
      : 0;

    return {
      total,
      completed,
      percentage,
      remaining: total - completed
    };
  }

  /* =========================================================
     7. HELPERS
     ========================================================= */

  function escapeHTML(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function nl2br(text) {
    return escapeHTML(text).replace(/\n/g, "<br>");
  }

  function getModule(lesson) {
    return MODULES[lesson.moduleIndex];
  }

  function getLessonNumber(lesson) {
    return lesson.moduleIndex * 10 + lesson.lessonIndex + 1;
  }

  function getPreviousLesson(id) {
    const index = LESSONS.findIndex(x => x.id === id);
    return index > 0 ? LESSONS[index - 1] : null;
  }

  function getNextLesson(id) {
    const index = LESSONS.findIndex(x => x.id === id);
    return index >= 0 && index < LESSONS.length - 1
      ? LESSONS[index + 1]
      : null;
  }

  function getAchievement(progress) {
    if (progress.percentage >= 100) return "🏆 Academy Master";
    if (progress.percentage >= 75) return "🥇 Business Strategist";
    if (progress.percentage >= 50) return "🥈 Professional Manager";
    if (progress.percentage >= 25) return "🥉 Rising Manager";
    return "🌱 Business Learner";
  }

  /* =========================================================
     8. CONTENT GENERATORS
     ========================================================= */

  function createConcepts(lesson) {
    return [
      `${lesson.title} ရဲ့ အဓိကအဓိပ္ပါယ်`,
      "Business Objective နဲ့ ချိတ်ဆက်ပုံ",
      "Customer Impact",
      "Financial Impact",
      "Operational Impact",
      "People Impact",
      "KPI နဲ့ Measurement",
      "Managerial Decision Making"
    ];
  }

  function createFramework(lesson) {
    const title = lesson.title;

    return [
      {
        step: "၁",
        title: "အခြေအနေကို နားလည်ပါ",
        text: `${title} နဲ့ ပတ်သက်တဲ့ လက်ရှိအခြေအနေ၊ Customer, Market, Team နဲ့ Business Data ကို အရင်စုဆောင်းပါ။`
      },
      {
        step: "၂",
        title: "ပြဿနာကို သတ်မှတ်ပါ",
        text: `ဖြစ်နေတဲ့ Problem ကို အထင်အမြင်နဲ့ မသတ်မှတ်ဘဲ Data နဲ့ Evidence အပေါ် အခြေခံပြီး Problem Statement ပြုလုပ်ပါ။`
      },
      {
        step: "၃",
        title: "Root Cause ရှာပါ",
        text: `လက်ရှိဖြစ်နေတဲ့ Gap ရဲ့ အပေါ်ယံအကြောင်းရင်းနဲ့ အောက်ခံ Root Cause ကို ခွဲခြားပါ။`
      },
      {
        step: "၄",
        title: "Priority သတ်မှတ်ပါ",
        text: `Business Impact, Urgency, Resource နဲ့ Risk အပေါ် အခြေခံပြီး ဘာကိုအရင်လုပ်မလဲ ဆုံးဖြတ်ပါ။`
      },
      {
        step: "၅",
        title: "Action ပြုလုပ်ပါ",
        text: `Action တစ်ခုချင်းစီအတွက် Owner, Deadline, KPI နဲ့ Expected Result သတ်မှတ်ပါ။`
      },
      {
        step: "၆",
        title: "Review လုပ်ပါ",
        text: `Result ကို Target နဲ့ နှိုင်းယှဉ်ပြီး Gap ရှိပါက Course Correction ပြုလုပ်ပါ။`
      }
    ];
  }

  function createTable(lesson) {
    const k = lesson.kpis;

    return [
      {
        metric: k[0],
        target: "100%",
        actual: "82%",
        gap: "-18%",
        action: "Root Cause စစ်ဆေးပြီး Priority Action ပြုလုပ်ရန်"
      },
      {
        metric: k[1],
        target: "100%",
        actual: "88%",
        gap: "-12%",
        action: "Process / Customer / Team Gap ရှာဖွေရန်"
      },
      {
        metric: k[2],
        target: "100%",
        actual: "76%",
        gap: "-24%",
        action: "အဓိက Bottleneck ကို ဖြေရှင်းရန်"
      },
      {
        metric: k[3],
        target: "+10%",
        actual: "+6%",
        gap: "-4%",
        action: "Growth Driver တစ်ခု ထပ်တိုးရန်"
      },
      {
        metric: k[4],
        target: "95%",
        actual: "84%",
        gap: "-11%",
        action: "Weekly Review ဖြင့် ထိန်းချုပ်ရန်"
      }
    ];
  }

  function createCaseStudy(lesson) {
    const title = lesson.title;

    return {
      company: "ABC Distribution Co., Ltd.",
      situation:
        `ABC Distribution မှာ ${title} နဲ့ ပတ်သက်တဲ့ စနစ်တကျ Management မရှိသေးတာကြောင့် Sales Team ရဲ့ Performance က လူတစ်ဦးချင်းအလိုက် ကွာခြားနေပါတယ်။ Manager က Result ကိုသာကြည့်ပြီး Process ကို မစစ်ဆေးတဲ့အတွက် ပြဿနာတွေ ထပ်ခါထပ်ခါ ဖြစ်နေပါတယ်။`,
      problem:
        `Target မပြည့်တဲ့အခါ "Team မကြိုးစားဘူး" လို့ သတ်မှတ်လိုက်တာက အလွယ်ဆုံးဖြေရှင်းချက်ဖြစ်ပေမယ့် Root Cause မဟုတ်နိုင်ပါ။ ${title} ကို Business System အဖြစ် ပြန်တည်ဆောက်ဖို့ လိုအပ်လာပါတယ်။`,
      action:
        `Manager က Customer Data, Sales Data, Team Feedback နဲ့ Field Observation ကို စုစည်းပြီး Gap ကို ခွဲခြမ်းပါတယ်။ ထို့နောက် KPI, Owner, Deadline နဲ့ Weekly Review System ထည့်သွင်းပါတယ်။`,
      result:
        "၄ ပတ်အတွင်း Execution Consistency တိုးလာပြီး Team အတွင်း Accountability ပိုကောင်းလာပါတယ်။ Manager ရဲ့ အလုပ်ကလည်း Fire Fighting ထက် Coaching နဲ့ Planning ပိုလုပ်နိုင်လာပါတယ်။",
      lesson:
        `ဒီ Case Study ရဲ့ အဓိက Lesson က ${title} ကို တစ်ကြိမ်တည်းလုပ်ပြီးပြီးသွားတဲ့ Task အဖြစ် မမြင်ဘဲ Repeatable Management System အဖြစ် တည်ဆောက်ရမယ်ဆိုတာ ဖြစ်ပါတယ်။`
    };
  }

  function createApplication(lesson) {
    return [
      `၁။ ${lesson.title} နဲ့ ဆက်စပ်တဲ့ လက်ရှိ Business Situation ကို ရေးပါ။`,
      `၂။ လက်ရှိ Performance Data ၃ ခုမှ ၅ ခုအထိ စုပါ။`,
      "၃။ Target နဲ့ Actual ကို နှိုင်းယှဉ်ပြီး Gap တွေကို ရှာပါ။",
      "၄။ Gap တစ်ခုချင်းစီရဲ့ Root Cause ကို မေးခွန်း ၅ ကြိမ်ဖြင့် စစ်ပါ။",
      "၅။ Business Impact အမြင့်ဆုံး Problem ကို Priority #1 သတ်မှတ်ပါ။",
      "၆။ Action Plan တစ်ခုတည်ဆောက်ပြီး Owner နဲ့ Deadline သတ်မှတ်ပါ။",
      "၇။ Weekly Review မှာ Result ကို ပြန်စစ်ပါ။",
      "၈။ အလုပ်ဖြစ်တဲ့ Process ကို SOP အဖြစ် Documentation ပြုလုပ်ပါ။"
    ];
  }

  function createManagerThinking(lesson) {
    return [
      `ဒီအခြေအနေမှာ ${lesson.title} ကို မစီမံရင် Business ရဲ့ ဘယ် Result ကို အများဆုံးထိခိုက်မလဲ?`,
      "လက်ရှိပြဿနာက People Problem လား၊ Process Problem လား၊ Data Problem လား?",
      "Manager အနေနဲ့ ဘယ် KPI ကို အရင်ကြည့်ပြီး ဘယ် KPI ကို နောက်မှကြည့်သင့်လဲ?",
      "ဒီ Decision ကို လုပ်လိုက်ရင် Customer, Revenue, Cost နဲ့ Team အပေါ် ဘယ်လိုသက်ရောက်မလဲ?",
      "ဒီအလုပ်ကို ကိုယ်တိုင်လုပ်ရမလား၊ Team ကို Delegate လုပ်ရမလား?",
      "ဒီနေ့ Action က ၃ လအကြာ Business Result ကို ဘယ်လိုပြောင်းလဲပေးနိုင်မလဲ?"
    ];
  }

  function createMistakes(lesson) {
    return [
      `${lesson.title} ကို Theory အနေနဲ့သာ လေ့လာပြီး Field မှာ မအသုံးချခြင်း`,
      "Data မကြည့်ဘဲ အထင်အမြင်နဲ့ Decision ချခြင်း",
      "Target နဲ့ Actual ကိုသာ ကြည့်ပြီး Root Cause မရှာခြင်း",
      "Owner နဲ့ Deadline မသတ်မှတ်ဘဲ Action Plan ပြုလုပ်ခြင်း",
      "Short-Term Result အတွက် Long-Term Business Health ကို လျစ်လျူရှုခြင်း",
      "Customer နဲ့ Team Feedback ကို မယူခြင်း",
      "Review Cycle မရှိလို့ အလုပ်ဖြစ်/မဖြစ် မသိနိုင်ခြင်း"
    ];
  }

  function createActionPlan(lesson) {
    return [
      {
        no: 1,
        action: "Baseline ပြုလုပ်ခြင်း",
        owner: "Manager",
        deadline: "Day 1",
        kpi: lesson.kpis[0]
      },
      {
        no: 2,
        action: "Data စုဆောင်းခြင်း",
        owner: "Team",
        deadline: "Day 2",
        kpi: lesson.kpis[1]
      },
      {
        no: 3,
        action: "Gap Analysis",
        owner: "Manager",
        deadline: "Day 3",
        kpi: lesson.kpis[2]
      },
      {
        no: 4,
        action: "Root Cause Analysis",
        owner: "Manager + Team",
        deadline: "Day 4",
        kpi: "Root Cause"
      },
      {
        no: 5,
        action: "Priority Action",
        owner: "Assigned Owner",
        deadline: "Day 5",
        kpi: lesson.kpis[3]
      },
      {
        no: 6,
        action: "Execution",
        owner: "Team",
        deadline: "Week 1",
        kpi: lesson.kpis[4]
      },
      {
        no: 7,
        action: "Weekly Review",
        owner: "Manager",
        deadline: "Every Week",
        kpi: "Achievement"
      },
      {
        no: 8,
        action: "SOP / Improvement",
        owner: "Manager",
        deadline: "Week 4",
        kpi: "Consistency"
      }
    ];
  }

  function createQuiz(lesson) {
    return [
      {
        q: `${lesson.title} ကို Manager အနေနဲ့ လေ့လာရတဲ့ အဓိကရည်ရွယ်ချက်က ဘာလဲ?`,
        a: "Business Result နဲ့ Decision Quality တိုးတက်စေရန်"
      },
      {
        q: "Business Problem တစ်ခုကို စတင်ခွဲခြမ်းတဲ့အခါ ဘာကိုအရင်ကြည့်သင့်သလဲ?",
        a: "Fact နဲ့ Data"
      },
      {
        q: "Target မပြည့်တဲ့အခါ ဘာကို ထပ်မံစစ်ဆေးသင့်သလဲ?",
        a: "Root Cause"
      },
      {
        q: "Action Plan တစ်ခုမှာ ဘာတွေပါသင့်သလဲ?",
        a: "Action, Owner, Deadline, KPI"
      },
      {
        q: "Manager အတွက် Review System ရဲ့ အဓိကအကျိုးကျေးဇူးက ဘာလဲ?",
        a: "Result ကိုတိုင်းတာပြီး Course Correction ပြုလုပ်နိုင်ခြင်း"
      }
    ];
  }

  function createReflection(lesson) {
    return [
      `လက်ရှိအလုပ်မှာ ${lesson.title} နဲ့ ပတ်သက်ပြီး ဘာတွေကောင်းနေပြီလဲ?`,
      "ဘယ်အပိုင်းမှာ အကြီးဆုံး Gap ရှိနေသလဲ?",
      "ဒီသင်ခန်းစာထဲက ဘယ် Framework ကို လက်တွေ့စမ်းမလဲ?",
      "နောက် ၇ ရက်အတွင်း ဘယ် Business Result ကို ပြောင်းလဲချင်သလဲ?"
    ];
  }

  function buildDetailedContent(lesson) {
    const module = getModule(lesson);
    const framework = createFramework(lesson);
    const table = createTable(lesson);
    const caseStudy = createCaseStudy(lesson);

    return {
      objective: [
        `${lesson.title} ကို Professional Manager တစ်ယောက်အနေနဲ့ နားလည်ပြီး လက်တွေ့အသုံးချနိုင်ရန် ဒီသင်ခန်းစာကို လေ့လာရပါမယ်။`,
        `${lesson.focus} ကို Business Result, Customer Value, Financial Impact, Team Performance နဲ့ Execution အမြင်များနဲ့ ချိတ်ဆက်ပြီး စဉ်းစားနိုင်ဖို့ ရည်ရွယ်ပါတယ်။`,
        "သင်ခန်းစာပြီးဆုံးတဲ့အခါ Theory ကိုသိရုံမက Data → Analysis → Decision → Action → Review ဆိုတဲ့ Management Cycle ကို ကိုယ်တိုင်အသုံးချနိုင်ရပါမယ်။"
      ],

      whyItMatters:
        `${lesson.title} ဟာ ${module.name} ထဲက သီးခြား Topic တစ်ခုသာမဟုတ်ပါဘူး။ Manager တစ်ယောက်အနေနဲ့ Business Result ကို တာဝန်ယူတဲ့အခါ Customer, People, Process, Finance နဲ့ Strategy တို့ကို ချိတ်ဆက်စဉ်းစားနိုင်ဖို့ အရေးကြီးတဲ့ Management Capability တစ်ခု ဖြစ်ပါတယ်။`,

      explanation: [
        `${lesson.focus} ကို နားလည်ဖို့ အရင်ဆုံး "ဘာကြောင့် ဒီအရာက Business အတွက် အရေးကြီးတာလဲ" ဆိုတာ သိရပါမယ်။ Manager တစ်ယောက်ရဲ့ အလုပ်ဟာ Task တွေကို အများကြီးလုပ်တာမဟုတ်ဘဲ Business Outcome ကို တိုးတက်စေတဲ့ Decision တွေချမှတ်ခြင်း ဖြစ်ပါတယ်။`,
        `Business တစ်ခုမှာ Problem တစ်ခုဖြစ်လာတဲ့အခါ အပေါ်ယံမြင်ရတဲ့ Symptom ကိုပဲ ပြင်လိုက်ရင် ပြဿနာက ပြန်ဖြစ်နိုင်ပါတယ်။ ဒါကြောင့် Data ကို စုဆောင်းပြီး Gap ကို သတ်မှတ်ကာ Root Cause အထိ ဆင်းသွားဖို့ လိုအပ်ပါတယ်။`,
        `${lesson.title} ကို အသုံးချတဲ့အခါ Customer Perspective ကိုလည်း ထည့်စဉ်းစားရပါမယ်။ Business အတွက် အကျိုးရှိတဲ့ Decision ဖြစ်ပေမယ့် Customer Value လျော့သွားရင် ရေရှည်မှာ Revenue နဲ့ Loyalty ကို ထိခိုက်နိုင်ပါတယ်။`,
        `တစ်ဖက်မှာလည်း Financial Perspective မပါဘဲ Decision ချလို့မရပါဘူး။ Revenue တိုးပေမယ့် Margin လျော့နိုင်သလို Sales တိုးပေမယ့် Cash Flow ပိတ်မိနိုင်ပါတယ်။ ဒါကြောင့် Result ကို Volume တစ်ခုတည်းနဲ့ မတိုင်းဘဲ Quality of Result ကိုပါ ကြည့်ရပါမယ်။`,
        `Team Perspective ကလည်း အရေးကြီးပါတယ်။ Manager တစ်ယောက်က Result ကို ကိုယ်တိုင်လုပ်ပေးနိုင်ပေမယ့် Team က ထပ်မလုပ်နိုင်ရင် Sustainable Result မဖြစ်ပါဘူး။ System, SOP, Coaching နဲ့ Accountability တွေ ထည့်သွင်းရပါမယ်။`,
        `ဒီသင်ခန်းစာရဲ့ အဓိက Management Principle က "Measure → Understand → Decide → Execute → Review" ဖြစ်ပါတယ်။ Measurement မရှိရင် Problem ကို မှန်မှန်မသိနိုင်ပါဘူး။ Understanding မရှိရင် Decision မှားနိုင်ပါတယ်။ Execution မရှိရင် Strategy က စာရွက်ပေါ်မှာပဲ ရှိနေပါမယ်။`,
        `Professional Manager တစ်ယောက်ဟာ "ဘာလုပ်ရမလဲ" ဆိုတာတင်မက "ဘာကြောင့်လုပ်ရမလဲ၊ ဘယ်လိုတိုင်းတာမလဲ၊ ဘယ်သူလုပ်မလဲ၊ ဘယ်အချိန်ပြန်စစ်မလဲ" ဆိုတာတွေကို တစ်ခါတည်း စဉ်းစားတတ်ရပါမယ်။`,
        `အထူးသဖြင့် ${lesson.title} ကို Weekly Management Routine ထဲထည့်သွင်းထားရင် တစ်ကြိမ်တည်းသင်ယူထားတဲ့ Knowledge က Daily Management System အဖြစ် ပြောင်းလဲလာပါမယ်။`
      ],

      concepts: createConcepts(lesson),

      framework,

      kpis: lesson.kpis,

      table,

      graph: {
        labels: [
          lesson.kpis[0],
          lesson.kpis[1],
          lesson.kpis[2],
          lesson.kpis[3],
          lesson.kpis[4]
        ],
        values: [82, 88, 76, 91, 84]
      },

      caseStudy,

      application: createApplication(lesson),

      managerThinking: createManagerThinking(lesson),

      mistakes: createMistakes(lesson),

      actionPlan: createActionPlan(lesson),

      practicalExercise: {
        title: `${lesson.title} — Manager Field Exercise`,
        scenario:
          `သင့် Team / Business Unit မှာ ${lesson.title} နဲ့ ဆက်စပ်တဲ့ Performance Gap တစ်ခု ရှိနေတယ်လို့ သတ်မှတ်ပါ။`,
        tasks: [
          "လက်ရှိအခြေအနေကို စာကြောင်း ၃ ကြောင်းနဲ့ ရေးပါ။",
          "အဓိက KPI ၃ ခု ရွေးပါ။",
          "Target နဲ့ Actual ထည့်ပါ။",
          "Gap ရဲ့ Root Cause ၃ ခု ရေးပါ။",
          "အကျိုးသက်ရောက်မှုအမြင့်ဆုံး Root Cause ကို ရွေးပါ။",
          "Action Plan တစ်ခုရေးပါ။",
          "Owner နဲ့ Deadline သတ်မှတ်ပါ။",
          "၇ ရက်အကြာ Result ကို ဘယ်လိုတိုင်းတာမလဲ သတ်မှတ်ပါ။"
        ]
      },

      quiz: createQuiz(lesson),

      reflection: createReflection(lesson),

      checklist: [
        `${lesson.title} ရဲ့ အဓိကအဓိပ္ပါယ်ကို ရှင်းပြနိုင်ပြီ`,
        "Business Objective နဲ့ ချိတ်ဆက်နိုင်ပြီ",
        "KPI တစ်ခုထက်ပိုပြီး တိုင်းတာနိုင်ပြီ",
        "Root Cause Analysis လုပ်နိုင်ပြီ",
        "Action Plan ရေးနိုင်ပြီ",
        "Review System ထည့်သွင်းနိုင်ပြီ"
      ],

      summary: [
        `${lesson.title} ကို သိထားရုံနဲ့ Manager မဖြစ်ပါဘူး။ Business Situation ထဲမှာ အသုံးချနိုင်မှ Management Capability ဖြစ်လာပါတယ်။`,
        "Manager တစ်ယောက်အနေနဲ့ Data ကို ကြည့်၊ Gap ကို နားလည်၊ Root Cause ကို ရှာ၊ Priority ကို သတ်မှတ်၊ Action ကို Execute လုပ်ပြီး Result ကို Review လုပ်ရပါမယ်။",
        "ဒီ Lesson ရဲ့ Knowledge ကို Weekly Routine တစ်ခုအဖြစ် ပြောင်းလဲအသုံးချနိုင်ရင် ရေရှည် Business Performance ကို ပိုမိုကောင်းမွန်စေနိုင်ပါတယ်။"
      ]
    };
  }

  /* =========================================================
     9. DYNAMIC CSS
     ========================================================= */

  function injectStyles() {
    if (document.getElementById("aba-long-lesson-styles")) return;

    const style = document.createElement("style");
    style.id = "aba-long-lesson-styles";

    style.textContent = `
      .aba-lesson-grid{
        display:grid;
        grid-template-columns:repeat(auto-fill,minmax(280px,1fr));
        gap:18px;
        margin-top:20px;
      }

      .aba-lesson-card{
        background:#fff;
        border:1px solid #e5e7eb;
        border-radius:18px;
        padding:20px;
        cursor:pointer;
        transition:.2s ease;
        box-shadow:0 5px 18px rgba(15,23,42,.06);
        position:relative;
        overflow:hidden;
      }

      .aba-lesson-card:hover{
        transform:translateY(-3px);
        box-shadow:0 12px 30px rgba(15,23,42,.11);
      }

      .aba-lesson-card.completed{
        border-color:#22c55e;
      }

      .aba-lesson-icon{
        width:46px;
        height:46px;
        border-radius:14px;
        display:flex;
        align-items:center;
        justify-content:center;
        background:#eff6ff;
        font-size:24px;
        margin-bottom:14px;
      }

      .aba-lesson-number{
        font-size:12px;
        color:#64748b;
        font-weight:700;
        margin-bottom:7px;
      }

      .aba-lesson-title{
        font-size:17px;
        font-weight:800;
        color:#0f172a;
        line-height:1.45;
        margin-bottom:9px;
      }

      .aba-lesson-module{
        font-size:13px;
        color:#475569;
        line-height:1.5;
      }

      .aba-status{
        position:absolute;
        top:14px;
        right:14px;
        font-size:12px;
        font-weight:800;
      }

      .aba-status.done{
        color:#16a34a;
      }

      .aba-status.open{
        color:#64748b;
      }

      .aba-lesson-toolbar{
        display:flex;
        gap:10px;
        flex-wrap:wrap;
        margin:20px 0;
      }

      .aba-lesson-toolbar input,
      .aba-lesson-toolbar select{
        min-height:44px;
        border:1px solid #dbe3ef;
        border-radius:12px;
        padding:0 13px;
        background:#fff;
        font-size:14px;
        outline:none;
      }

      .aba-lesson-toolbar input{
        flex:1;
        min-width:220px;
      }

      .aba-lesson-progress{
        background:#0f172a;
        color:#fff;
        padding:18px;
        border-radius:18px;
        margin-bottom:20px;
      }

      .aba-progress-row{
        display:flex;
        justify-content:space-between;
        gap:12px;
        margin-bottom:10px;
        font-size:14px;
      }

      .aba-progress-track{
        height:9px;
        background:rgba(255,255,255,.16);
        border-radius:20px;
        overflow:hidden;
      }

      .aba-progress-fill{
        height:100%;
        background:#22c55e;
        border-radius:20px;
        transition:.3s ease;
      }

      .aba-modal-overlay{
        position:fixed;
        inset:0;
        z-index:99999;
        background:rgba(2,6,23,.72);
        display:flex;
        align-items:center;
        justify-content:center;
        padding:18px;
      }

      .aba-modal{
        width:min(1050px,100%);
        max-height:94vh;
        overflow:auto;
        background:#f8fafc;
        border-radius:24px;
        box-shadow:0 25px 80px rgba(0,0,0,.35);
      }

      .aba-modal-header{
        position:sticky;
        top:0;
        z-index:5;
        background:#0f172a;
        color:#fff;
        padding:22px 24px;
        display:flex;
        justify-content:space-between;
        gap:20px;
        align-items:flex-start;
      }

      .aba-modal-header h2{
        margin:0 0 7px;
        font-size:22px;
        line-height:1.4;
      }

      .aba-modal-header p{
        margin:0;
        opacity:.75;
        font-size:13px;
      }

      .aba-close{
        width:42px;
        height:42px;
        border:0;
        border-radius:12px;
        background:rgba(255,255,255,.12);
        color:#fff;
        font-size:23px;
        cursor:pointer;
        flex:none;
      }

      .aba-modal-body{
        padding:22px;
      }

      .aba-section{
        background:#fff;
        border:1px solid #e2e8f0;
        border-radius:18px;
        padding:21px;
        margin-bottom:18px;
      }

      .aba-section h3{
        margin:0 0 14px;
        color:#0f172a;
        font-size:18px;
      }

      .aba-section p{
        color:#334155;
        line-height:1.85;
        margin:0 0 12px;
      }

      .aba-objective{
        border-left:5px solid #2563eb;
      }

      .aba-focus{
        background:#eff6ff;
        border:1px solid #bfdbfe;
        border-radius:14px;
        padding:15px;
        color:#1e3a8a;
        line-height:1.8;
        margin-top:12px;
      }

      .aba-list{
        margin:0;
        padding-left:21px;
      }

      .aba-list li{
        margin-bottom:10px;
        line-height:1.7;
        color:#334155;
      }

      .aba-concept-grid{
        display:grid;
        grid-template-columns:repeat(2,1fr);
        gap:10px;
      }

      .aba-concept{
        padding:13px;
        border-radius:12px;
        background:#f8fafc;
        border:1px solid #e2e8f0;
        color:#334155;
        line-height:1.5;
      }

      .aba-framework{
        display:grid;
        gap:12px;
      }

      .aba-framework-item{
        display:grid;
        grid-template-columns:42px 1fr;
        gap:12px;
        padding:15px;
        border-radius:14px;
        background:#f8fafc;
        border:1px solid #e2e8f0;
      }

      .aba-framework-number{
        width:38px;
        height:38px;
        border-radius:12px;
        background:#0f172a;
        color:#fff;
        display:flex;
        align-items:center;
        justify-content:center;
        font-weight:800;
      }

      .aba-framework-item strong{
        display:block;
        margin-bottom:5px;
        color:#0f172a;
      }

      .aba-framework-item span{
        color:#475569;
        line-height:1.65;
      }

      .aba-table-wrap{
        overflow-x:auto;
      }

      .aba-table{
        width:100%;
        border-collapse:collapse;
        min-width:700px;
      }

      .aba-table th,
      .aba-table td{
        padding:12px;
        border-bottom:1px solid #e2e8f0;
        text-align:left;
        font-size:13px;
        vertical-align:top;
      }

      .aba-table th{
        background:#f8fafc;
        color:#334155;
        font-weight:800;
      }

      .aba-kpi-grid{
        display:grid;
        grid-template-columns:repeat(5,1fr);
        gap:10px;
      }

      .aba-kpi{
        padding:14px;
        border-radius:14px;
        background:#f8fafc;
        border:1px solid #e2e8f0;
        text-align:center;
      }

      .aba-kpi strong{
        display:block;
        color:#0f172a;
        font-size:18px;
        margin-bottom:6px;
      }

      .aba-kpi span{
        color:#64748b;
        font-size:12px;
        line-height:1.4;
      }

      .aba-case{
        border-left:5px solid #f59e0b;
      }

      .aba-case-block{
        margin-bottom:14px;
      }

      .aba-case-block strong{
        display:block;
        color:#92400e;
        margin-bottom:5px;
      }

      .aba-action-table td:first-child{
        font-weight:800;
        color:#0f172a;
      }

      .aba-quiz{
        border:1px solid #e2e8f0;
        border-radius:14px;
        padding:16px;
        margin-bottom:12px;
      }

      .aba-quiz-question{
        font-weight:800;
        color:#0f172a;
        margin-bottom:9px;
        line-height:1.6;
      }

      .aba-answer{
        background:#f0fdf4;
        border:1px solid #bbf7d0;
        color:#166534;
        padding:10px 12px;
        border-radius:10px;
        line-height:1.6;
      }

      .aba-checklist{
        display:grid;
        gap:9px;
      }

      .aba-check-item{
        padding:12px 14px;
        border-radius:12px;
        background:#f8fafc;
        border:1px solid #e2e8f0;
        color:#334155;
      }

      .aba-bottom-nav{
        display:flex;
        justify-content:space-between;
        gap:10px;
        margin-top:18px;
      }

      .aba-nav-btn,
      .aba-complete-btn{
        min-height:46px;
        border:0;
        border-radius:12px;
        padding:0 17px;
        cursor:pointer;
        font-weight:800;
      }

      .aba-nav-btn{
        background:#e2e8f0;
        color:#0f172a;
      }

      .aba-nav-btn.primary{
        background:#0f172a;
        color:#fff;
      }

      .aba-complete-btn{
        background:#16a34a;
        color:#fff;
        flex:1;
      }

      .aba-complete-btn.completed{
        background:#15803d;
      }

      .aba-footer-note{
        text-align:center;
        padding:10px 0 2px;
        color:#64748b;
        font-size:12px;
      }

      @media(max-width:700px){
        .aba-modal-overlay{
          padding:0;
          align-items:flex-end;
        }

        .aba-modal{
          max-height:97vh;
          border-radius:22px 22px 0 0;
        }

        .aba-modal-header{
          padding:17px;
        }

        .aba-modal-header h2{
          font-size:18px;
        }

        .aba-modal-body{
          padding:13px;
        }

        .aba-section{
          padding:16px;
          border-radius:15px;
        }

        .aba-concept-grid{
          grid-template-columns:1fr;
        }

        .aba-kpi-grid{
          grid-template-columns:repeat(2,1fr);
        }

        .aba-bottom-nav{
          flex-wrap:wrap;
        }

        .aba-complete-btn{
          order:-1;
          flex-basis:100%;
        }

        .aba-lesson-grid{
          grid-template-columns:1fr;
        }
      }
    `;

    document.head.appendChild(style);
  }

  /* =========================================================
     10. FIND LESSON PAGE
     ========================================================= */

  function findLessonsPage() {
    const selectors = [
      "#lessons",
      "#lessonPage",
      "#lessonsPage",
      "[data-page='lessons']",
      ".lessons-page"
    ];

    for (const selector of selectors) {
      const el = document.querySelector(selector);
      if (el) return el;
    }

    return null;
  }

  /* =========================================================
     11. RENDER LESSONS
     ========================================================= */

  function renderLessons() {
    const page = findLessonsPage();

    if (!page) return;

    let root = page.querySelector("#abaLessonEngine");

    if (!root) {
      root = document.createElement("div");
      root.id = "abaLessonEngine";
      page.appendChild(root);
    }

    const progress = getProgress();

    root.innerHTML = `
      <div class="aba-lesson-progress">
        <div class="aba-progress-row">
          <strong>📚 Aung Business Academy</strong>
          <span>${progress.completed} / ${progress.total} Lessons</span>
        </div>

        <div class="aba-progress-row">
          <span>${getAchievement(progress)}</span>
          <strong>${progress.percentage}%</strong>
        </div>

        <div class="aba-progress-track">
          <div
            class="aba-progress-fill"
            style="width:${progress.percentage}%"
          ></div>
        </div>
      </div>

      <div class="aba-lesson-toolbar">
        <input
          id="abaLessonSearch"
          type="search"
          placeholder="🔎 Lesson ရှာရန်..."
        />

        <select id="abaModuleFilter">
          <option value="all">📚 Module အားလုံး</option>
          ${MODULES.map((m, i) =>
            `<option value="${i}">${m.icon} ${escapeHTML(m.name)}</option>`
          ).join("")}
        </select>

        <select id="abaStatusFilter">
          <option value="all">📌 Status အားလုံး</option>
          <option value="open">မပြီးသေးသော Lessons</option>
          <option value="done">ပြီးဆုံးသော Lessons</option>
        </select>
      </div>

      <div class="aba-lesson-grid" id="abaLessonGrid"></div>

      <div class="aba-footer-note">
        Aung Business Academy • 230 Professional Business Lessons
      </div>
    `;

    const search = root.querySelector("#abaLessonSearch");
    const moduleFilter = root.querySelector("#abaModuleFilter");
    const statusFilter = root.querySelector("#abaStatusFilter");
    const grid = root.querySelector("#abaLessonGrid");

    function paint() {
      const q = (search.value || "").toLowerCase().trim();
      const mod = moduleFilter.value;
      const status = statusFilter.value;

      const filtered = LESSONS.filter(lesson => {
        const completed = isCompleted(lesson.id);

        const matchesSearch =
          !q ||
          lesson.title.toLowerCase().includes(q) ||
          lesson.module.toLowerCase().includes(q) ||
          lesson.focus.toLowerCase().includes(q);

        const matchesModule =
          mod === "all" ||
          Number(mod) === lesson.moduleIndex;

        const matchesStatus =
          status === "all" ||
          (status === "done" && completed) ||
          (status === "open" && !completed);

        return matchesSearch && matchesModule && matchesStatus;
      });

      if (!filtered.length) {
        grid.innerHTML = `
          <div class="aba-section">
            <h3>မတွေ့ပါ</h3>
            <p>ရှာဖွေထားတဲ့ Lesson နဲ့ ကိုက်ညီတဲ့ သင်ခန်းစာ မရှိပါ။</p>
          </div>
        `;
        return;
      }

      grid.innerHTML = filtered.map(lesson => {
        const completed = isCompleted(lesson.id);

        return `
          <article
            class="aba-lesson-card ${completed ? "completed" : ""}"
            data-lesson-id="${lesson.id}"
          >
            <div class="aba-status ${completed ? "done" : "open"}">
              ${completed ? "✓ ပြီး" : "○ မပြီး"}
            </div>

            <div class="aba-lesson-icon">
              ${lesson.icon}
            </div>

            <div class="aba-lesson-number">
              Lesson ${getLessonNumber(lesson)} • Module ${lesson.moduleIndex + 1}
            </div>

            <div class="aba-lesson-title">
              ${escapeHTML(lesson.title)}
            </div>

            <div class="aba-lesson-module">
              ${escapeHTML(lesson.module)}
            </div>
          </article>
        `;
      }).join("");

      grid.querySelectorAll(".aba-lesson-card").forEach(card => {
        card.addEventListener("click", () => {
          openLesson(card.dataset.lessonId);
        });
      });
    }

    search.addEventListener("input", paint);
    moduleFilter.addEventListener("change", paint);
    statusFilter.addEventListener("change", paint);

    paint();
  }

  /* =========================================================
     12. OPEN LESSON MODAL
     ========================================================= */

  function openLesson(id) {
    const lesson = LESSONS.find(x => x.id === id);

    if (!lesson) return;

    const content = buildDetailedContent(lesson);
    const previous = getPreviousLesson(id);
    const next = getNextLesson(id);
    const completed = isCompleted(id);

    const old = document.getElementById("aungProfessionalLessonModal");

    if (old) old.remove();

    const modal = document.createElement("div");

    modal.id = "aungProfessionalLessonModal";
    modal.className = "aba-modal-overlay";

    modal.innerHTML = `
      <div class="aba-modal" role="dialog" aria-modal="true">

        <div class="aba-modal-header">
          <div>
            <h2>
              ${lesson.icon}
              ${escapeHTML(lesson.title)}
            </h2>

            <p>
              ${escapeHTML(lesson.module)}
              • Lesson ${getLessonNumber(lesson)} / ${LESSONS.length}
            </p>
          </div>

          <button
            class="aba-close"
            type="button"
            aria-label="Close"
          >×</button>
        </div>

        <div class="aba-modal-body">

          <!-- OBJECTIVES -->
          <section class="aba-section aba-objective">
            <h3>🎯 Learning Objectives</h3>

            <ul class="aba-list">
              ${content.objective.map(x =>
                `<li>${escapeHTML(x)}</li>`
              ).join("")}
            </ul>

            <div class="aba-focus">
              <strong>Lesson Focus:</strong><br>
              ${escapeHTML(lesson.focus)}
            </div>
          </section>

          <!-- WHY -->
          <section class="aba-section">
            <h3>💡 Why This Matters</h3>
            <p>${escapeHTML(content.whyItMatters)}</p>
          </section>

          <!-- EXPLANATION -->
          <section class="aba-section">
            <h3>📖 Detailed Explanation</h3>

            ${content.explanation.map(x =>
              `<p>${escapeHTML(x)}</p>`
            ).join("")}
          </section>

          <!-- CONCEPTS -->
          <section class="aba-section">
            <h3>🧠 Key Business Concepts</h3>

            <div class="aba-concept-grid">
              ${content.concepts.map((x, i) =>
                `<div class="aba-concept">
                  <strong>${i + 1}.</strong> ${escapeHTML(x)}
                </div>`
              ).join("")}
            </div>
          </section>

          <!-- FRAMEWORK -->
          <section class="aba-section">
            <h3>🛠️ Professional Manager Framework</h3>

            <div class="aba-framework">
              ${content.framework.map(x =>
                `<div class="aba-framework-item">
                  <div class="aba-framework-number">${x.step}</div>
                  <div>
                    <strong>${escapeHTML(x.title)}</strong>
                    <span>${escapeHTML(x.text)}</span>
                  </div>
                </div>`
              ).join("")}
            </div>
          </section>

          <!-- KPI -->
          <section class="aba-section">
            <h3>📊 Key KPIs</h3>

            <div class="aba-kpi-grid">
              ${content.kpis.map((x, i) =>
                `<div class="aba-kpi">
                  <strong>${i + 1}</strong>
                  <span>${escapeHTML(x)}</span>
                </div>`
              ).join("")}
            </div>
          </section>

          <!-- DATA -->
          <section class="aba-section">
            <h3>📈 Business Data Analysis</h3>

            <div class="aba-table-wrap">
              <table class="aba-table">
                <thead>
                  <tr>
                    <th>KPI</th>
                    <th>Target</th>
                    <th>Actual</th>
                    <th>Gap</th>
                    <th>Manager Action</th>
                  </tr>
                </thead>

                <tbody>
                  ${content.table.map(row =>
                    `<tr>
                      <td>${escapeHTML(row.metric)}</td>
                      <td>${escapeHTML(row.target)}</td>
                      <td>${escapeHTML(row.actual)}</td>
                      <td>${escapeHTML(row.gap)}</td>
                      <td>${escapeHTML(row.action)}</td>
                    </tr>`
                  ).join("")}
                </tbody>
              </table>
            </div>
          </section>

          <!-- PERFORMANCE GRAPH -->
          <section class="aba-section">
            <h3>📊 Performance Snapshot</h3>

            ${content.graph.labels.map((label, i) => `
              <div style="margin-bottom:14px">
                <div style="
                  display:flex;
                  justify-content:space-between;
                  margin-bottom:6px;
                  font-size:13px;
                  color:#334155;
                  font-weight:700;
                ">
                  <span>${escapeHTML(label)}</span>
                  <span>${content.graph.values[i]}%</span>
                </div>

                <div style="
                  height:10px;
                  background:#e2e8f0;
                  border-radius:20px;
                  overflow:hidden;
                ">
                  <div style="
                    width:${content.graph.values[i]}%;
                    height:100%;
                    background:#2563eb;
                    border-radius:20px;
                  "></div>
                </div>
              </div>
            `).join("")}
          </section>

          <!-- CASE STUDY -->
          <section class="aba-section aba-case">
            <h3>🏢 Real Business Case Study</h3>

            <div class="aba-case-block">
              <strong>Company</strong>
              <p>${escapeHTML(content.caseStudy.company)}</p>
            </div>

            <div class="aba-case-block">
              <strong>Situation</strong>
              <p>${escapeHTML(content.caseStudy.situation)}</p>
            </div>

            <div class="aba-case-block">
              <strong>Problem</strong>
              <p>${escapeHTML(content.caseStudy.problem)}</p>
            </div>

            <div class="aba-case-block">
              <strong>Manager Action</strong>
              <p>${escapeHTML(content.caseStudy.action)}</p>
            </div>

            <div class="aba-case-block">
              <strong>Result</strong>
              <p>${escapeHTML(content.caseStudy.result)}</p>
            </div>

            <div class="aba-case-block">
              <strong>Key Lesson</strong>
              <p>${escapeHTML(content.caseStudy.lesson)}</p>
            </div>
          </section>

          <!-- APPLICATION -->
          <section class="aba-section">
            <h3>🚀 Real Business Application</h3>

            <ol class="aba-list">
              ${content.application.map(x =>
                `<li>${escapeHTML(x)}</li>`
              ).join("")}
            </ol>
          </section>

          <!-- MANAGER THINKING -->
          <section class="aba-section">
            <h3>👔 Manager Thinking</h3>

            <ol class="aba-list">
              ${content.managerThinking.map(x =>
                `<li>${escapeHTML(x)}</li>`
              ).join("")}
            </ol>
          </section>

          <!-- MISTAKES -->
          <section class="aba-section">
            <h3>⚠️ Common Mistakes</h3>

            <ul class="aba-list">
              ${content.mistakes.map(x =>
                `<li>${escapeHTML(x)}</li>`
              ).join("")}
            </ul>
          </section>

          <!-- ACTION PLAN -->
          <section class="aba-section">
            <h3>📋 Manager Action Plan</h3>

            <div class="aba-table-wrap">
              <table class="aba-table aba-action-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Action</th>
                    <th>Owner</th>
                    <th>Deadline</th>
                    <th>KPI</th>
                  </tr>
                </thead>

                <tbody>
                  ${content.actionPlan.map(row =>
                    `<tr>
                      <td>${row.no}</td>
                      <td>${escapeHTML(row.action)}</td>
                      <td>${escapeHTML(row.owner)}</td>
                      <td>${escapeHTML(row.deadline)}</td>
                      <td>${escapeHTML(row.kpi)}</td>
                    </tr>`
                  ).join("")}
                </tbody>
              </table>
            </div>
          </section>

          <!-- EXERCISE -->
          <section class="aba-section">
            <h3>📝 Practical Exercise</h3>

            <p>
              <strong>
                ${escapeHTML(content.practicalExercise.title)}
              </strong>
            </p>

            <p>
              ${escapeHTML(content.practicalExercise.scenario)}
            </p>

            <ol class="aba-list">
              ${content.practicalExercise.tasks.map(x =>
                `<li>${escapeHTML(x)}</li>`
              ).join("")}
            </ol>
          </section>

          <!-- QUIZ -->
          <section class="aba-section">
            <h3>🧪 Knowledge Check</h3>

            ${content.quiz.map((item, i) => `
              <div class="aba-quiz">
                <div class="aba-quiz-question">
                  ${i + 1}. ${escapeHTML(item.q)}
                </div>

                <div class="aba-answer">
                  <strong>အဖြေ:</strong>
                  ${escapeHTML(item.a)}
                </div>
              </div>
            `).join("")}
          </section>

          <!-- REFLECTION -->
          <section class="aba-section">
            <h3>🪞 Manager Reflection</h3>

            <ol class="aba-list">
              ${content.reflection.map(x =>
                `<li>${escapeHTML(x)}</li>`
              ).join("")}
            </ol>
          </section>

          <!-- CHECKLIST -->
          <section class="aba-section">
            <h3>✅ Manager Checklist</h3>

            <div class="aba-checklist">
              ${content.checklist.map(x =>
                `<div class="aba-check-item">☐ ${escapeHTML(x)}</div>`
              ).join("")}
            </div>
          </section>

          <!-- SUMMARY -->
          <section class="aba-section">
            <h3>📌 Lesson Summary</h3>

            ${content.summary.map(x =>
              `<p>${escapeHTML(x)}</p>`
            ).join("")}
          </section>

          <!-- NAVIGATION -->
          <div class="aba-bottom-nav">

            <button
              type="button"
              class="aba-nav-btn"
              data-action="previous"
              ${previous ? "" : "disabled"}
            >
              ← Previous
            </button>

            <button
              type="button"
              class="aba-complete-btn ${completed ? "completed" : ""}"
              data-action="complete"
            >
              ${completed
                ? "✓ သင်ခန်းစာပြီးဆုံးပါပြီ"
                : "✓ သင်ခန်းစာပြီးဆုံးကြောင်း မှတ်မည်"}
            </button>

            <button
              type="button"
              class="aba-nav-btn primary"
              data-action="next"
              ${next ? "" : "disabled"}
            >
              Next →
            </button>

          </div>

        </div>
      </div>
    `;

    document.body.appendChild(modal);

    document.body.style.overflow = "hidden";

    function closeModal() {
      modal.remove();
      document.body.style.overflow = "";
    }

    modal.querySelector(".aba-close").addEventListener(
      "click",
      closeModal
    );

    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeModal();
      }
    });

    const completeButton = modal.querySelector(
      "[data-action='complete']"
    );

    if (completeButton) {
      completeButton.addEventListener("click", function () {
        markCompleted(id);

        this.innerHTML = "✓ သင်ခန်းစာပြီးဆုံးပါပြီ";
        this.classList.add("completed");
      });
    }

    const previousButton = modal.querySelector(
      "[data-action='previous']"
    );

    if (previousButton && previous) {
      previousButton.addEventListener("click", function () {
        openLesson(previous.id);
      });
    }

    const nextButton = modal.querySelector(
      "[data-action='next']"
    );

    if (nextButton && next) {
      nextButton.addEventListener("click", function () {
        openLesson(next.id);
      });
    }

    document.addEventListener(
      "keydown",
      function escapeHandler(event) {
        if (event.key === "Escape") {
          closeModal();
          document.removeEventListener(
            "keydown",
            escapeHandler
          );
        }
      }
    );
  }

  /* =========================================================
     13. DASHBOARD UPDATE
     ========================================================= */

  function updateDashboard() {
    const progress = getProgress();

    const selectors = [
      "#completedLessons",
      "#lessonsCompleted",
      "[data-completed-lessons]"
    ];

    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.textContent = progress.completed;
      });
    });

    document.querySelectorAll(
      "#lessonProgress, #lessonsProgress, [data-lesson-progress]"
    ).forEach(el => {
      el.textContent = `${progress.percentage}%`;
    });

    document.querySelectorAll(
      ".aba-progress-fill[data-dashboard-progress]"
    ).forEach(el => {
      el.style.width = `${progress.percentage}%`;
    });
  }

  /* =========================================================
     14. NAVIGATION HOOK
     ========================================================= */

  function hookNavigation() {
    document.addEventListener("click", function (event) {
      const target = event.target.closest(
        "[data-page='lessons'], [data-nav='lessons'], #navLessons, #lessonsNav"
      );

      if (target) {
        setTimeout(() => {
          renderLessons();
          updateDashboard();
        }, 80);
      }
    });
  }

  /* =========================================================
     15. INIT
     ========================================================= */

  function init() {
    injectStyles();

    updateDashboard();

    renderLessons();

    hookNavigation();

    window.AungBusinessAcademy = {
      lessons: LESSONS,
      modules: MODULES,
      totalLessons: LESSONS.length,
      openLesson,
      markCompleted,
      getCompleted,
      getProgress,
      buildDetailedContent,
      renderLessons,
      refresh: function () {
        renderLessons();
        updateDashboard();
      }
    };

    console.log(
      `Aung Business Academy loaded: ${LESSONS.length} lessons`
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
