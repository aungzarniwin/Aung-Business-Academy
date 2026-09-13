/* =========================================================
   AUNG BUSINESS ACADEMY
   LESSON SYSTEM V8.2
   30 LESSONS - SHOW ALL BY DEFAULT
   ========================================================= */

const ABA_30_LESSONS = [

  // BUSINESS BASICS
  {
    id: 1,
    category: "Business Basics",
    title: "Business Fundamentals",
    short: "စီးပွားရေးလုပ်ငန်းရဲ့ အခြေခံအချက်များ",
    icon: "📘",
    content: `
      <h2>Business Fundamentals</h2>
      <h3>အဓိကအယူအဆ</h3>
      <p>Business ဆိုတာ Customer ရဲ့ လိုအပ်ချက်ကို ဖြည့်ဆည်းပေးပြီး အမြတ်ရရှိအောင် တန်ဖိုးဖန်တီးတဲ့ လုပ်ငန်းစနစ်ဖြစ်ပါတယ်။</p>
      <h3>လက်တွေ့အသုံးချနည်း</h3>
      <ol>
        <li>Customer ဘယ်သူလဲ သတ်မှတ်ပါ။</li>
        <li>Customer ဘာလိုချင်လဲ ရှာဖွေပါ။</li>
        <li>ဘယ်လို Value ပေးမလဲ သတ်မှတ်ပါ။</li>
        <li>Revenue နဲ့ Cost ကိုတွက်ပါ။</li>
      </ol>
      <h3>Manager အတွက်</h3>
      <p>လုပ်ငန်းရဲ့ Sales, Cost, Customer, Profit တို့ကို အမြဲချိတ်ဆက်စဉ်းစားရပါမယ်။</p>
      <h3>Key Takeaway</h3>
      <p><strong>Customer Value + Good Execution + Profit = Sustainable Business</strong></p>
    `
  },

  {
    id: 2,
    category: "Business Basics",
    title: "Business Model",
    short: "လုပ်ငန်းက ဘယ်လိုငွေရှာသလဲ",
    icon: "🏢",
    content: `
      <h2>Business Model</h2>
      <h3>အဓိကအယူအဆ</h3>
      <p>Business Model ဆိုတာ လုပ်ငန်းတစ်ခုက Customer ကို ဘယ်လိုတန်ဖိုးပေးပြီး Revenue ရအောင် ဘယ်လိုလုပ်ဆောင်သလဲဆိုတာ ဖြစ်ပါတယ်။</p>
      <h3>စစ်ဆေးရန်</h3>
      <ol>
        <li>Customer</li>
        <li>Product / Service</li>
        <li>Distribution</li>
        <li>Revenue</li>
        <li>Cost</li>
      </ol>
      <h3>Manager Application</h3>
      <p>Sales Manager တစ်ယောက်အနေနဲ့ Sales တိုးရုံမဟုတ်ဘဲ Margin နဲ့ Cost ကိုပါကြည့်ရပါမယ်။</p>
    `
  },

  {
    id: 3,
    category: "Business Basics",
    title: "Value Proposition",
    short: "Customer ကို ဘာကြောင့် ကိုယ့် Product ရွေးသင့်သလဲ",
    icon: "💎",
    content: `
      <h2>Value Proposition</h2>
      <p>Customer က ကိုယ့် Product ကို ဘာကြောင့် ဝယ်သင့်သလဲဆိုတာ ရှင်းလင်းစွာပြောနိုင်ရပါမယ်။</p>
      <h3>နည်းလမ်း</h3>
      <ol>
        <li>Customer Problem ရှာပါ။</li>
        <li>ကိုယ့် Product က ဘယ်လိုဖြေရှင်းပေးလဲ သတ်မှတ်ပါ။</li>
        <li>Competitor ထက် ဘာကွာလဲ ဖော်ပြပါ။</li>
      </ol>
    `
  },

  {
    id: 4,
    category: "Business Basics",
    title: "Customer & Market",
    short: "Customer နဲ့ Market ကို နားလည်ခြင်း",
    icon: "👥",
    content: `
      <h2>Customer & Market</h2>
      <p>Market ကို နားလည်မှ Sales Plan ကောင်းကောင်းချနိုင်ပါတယ်။</p>
      <h3>စစ်ဆေးရန်</h3>
      <ul>
        <li>Customer ဘယ်သူလဲ</li>
        <li>ဘာဝယ်လဲ</li>
        <li>ဘယ်အချိန်ဝယ်လဲ</li>
        <li>ဘာကြောင့်ဝယ်လဲ</li>
        <li>Competitor ဘယ်သူလဲ</li>
      </ul>
    `
  },

  {
    id: 5,
    category: "Business Basics",
    title: "Business Planning",
    short: "လုပ်ငန်းအစီအစဉ်ချမှတ်ခြင်း",
    icon: "📝",
    content: `
      <h2>Business Planning</h2>
      <p>Plan က Goal ကို Action အဖြစ်ပြောင်းပေးတဲ့ Roadmap ဖြစ်ပါတယ်။</p>
      <ol>
        <li>Goal သတ်မှတ်ပါ။</li>
        <li>Current Situation သိပါ။</li>
        <li>Gap ရှာပါ။</li>
        <li>Action Plan ချပါ။</li>
        <li>KPI သတ်မှတ်ပါ။</li>
      </ol>
    `
  },

  // STRATEGY
  {
    id: 6,
    category: "Strategy",
    title: "Strategic Thinking",
    short: "ရေရှည်အတွက် မဟာဗျူဟာစဉ်းစားခြင်း",
    icon: "🎯",
    content: `
      <h2>Strategic Thinking</h2>
      <p>နေ့စဉ်အလုပ်တွေကိုသာ မကြည့်ဘဲ ရေရှည်မှာ ဘယ်နေရာရောက်ချင်လဲ စဉ်းစားရပါတယ်။</p>
      <h3>Manager Questions</h3>
      <ul>
        <li>ဘယ် Market ကို အာရုံစိုက်မလဲ?</li>
        <li>ဘယ် Customer ကို ဦးစားပေးမလဲ?</li>
        <li>Competitor ထက် ဘယ်လိုသာမလဲ?</li>
        <li>Resource ကို ဘယ်နေရာမှာ အသုံးချမလဲ?</li>
      </ul>
    `
  },

  {
    id: 7,
    category: "Strategy",
    title: "SWOT Analysis",
    short: "အားသာချက်၊ အားနည်းချက်၊ အခွင့်အရေး၊ ခြိမ်းခြောက်မှု",
    icon: "🔍",
    content: `
      <h2>SWOT Analysis</h2>
      <ul>
        <li><strong>Strength</strong> – အားသာချက်</li>
        <li><strong>Weakness</strong> – အားနည်းချက်</li>
        <li><strong>Opportunity</strong> – အခွင့်အရေး</li>
        <li><strong>Threat</strong> – ခြိမ်းခြောက်မှု</li>
      </ul>
      <p>Sales Manager အနေနဲ့ Territory တစ်ခုချင်းစီကို SWOT နဲ့သုံးသပ်နိုင်ပါတယ်။</p>
    `
  },

  {
    id: 8,
    category: "Strategy",
    title: "Market Analysis",
    short: "ဈေးကွက်အခြေအနေကို ခွဲခြမ်းစိတ်ဖြာခြင်း",
    icon: "📊",
    content: `
      <h2>Market Analysis</h2>
      <p>Market Size, Growth, Customer Behavior, Competitor Activity နဲ့ Price Movement တွေကို စောင့်ကြည့်ရပါတယ်။</p>
      <h3>Weekly Review</h3>
      <ul>
        <li>Sales Trend</li>
        <li>Competitor Price</li>
        <li>Competitor Promotion</li>
        <li>Distribution</li>
        <li>Customer Feedback</li>
      </ul>
    `
  },

  {
    id: 9,
    category: "Strategy",
    title: "Competitor Analysis",
    short: "ပြိုင်ဘက်လုပ်ငန်းများကို လေ့လာခြင်း",
    icon: "⚔️",
    content: `
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
    short: "ဈေးကွက်ချဲ့ထွင်ခြင်း",
    icon: "🌍",
    content: `
      <h2>Market Expansion</h2>
      <p>Market အသစ်ဝင်မယ်ဆိုရင် Customer Potential, Distribution, Competition နဲ့ Cost ကို အရင်စစ်ဆေးပါ။</p>
      <h3>Action Plan</h3>
      <ol>
        <li>Potential Area ရှာပါ။</li>
        <li>Customer Mapping လုပ်ပါ။</li>
        <li>Distributor / Channel စီစဉ်ပါ။</li>
        <li>Launch Target သတ်မှတ်ပါ။</li>
        <li>Weekly Review လုပ်ပါ။</li>
      </ol>
    `
  },

  // SALES
  {
    id: 11,
    category: "Sales",
    title: "Sales Fundamentals",
    short: "Sales ရဲ့ အခြေခံအယူအဆ",
    icon: "💰",
    content: `
      <h2>Sales Fundamentals</h2>
      <p>Sales ဆိုတာ Product ရောင်းတာတင်မဟုတ်ဘဲ Customer Need ကို နားလည်ပြီး Solution ပေးခြင်းဖြစ်ပါတယ်။</p>
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
    short: "Sales Target ကို Plan ချနည်း",
    icon: "🎯",
    content: `
      <h2>Sales Target Planning</h2>
      <p>Target ကို တစ်လုံးတည်းမကြည့်ဘဲ Customer, Territory, Product နဲ့ Salesperson အလိုက် ခွဲချရပါတယ်။</p>
      <h3>Formula</h3>
      <p><strong>Annual Target → Monthly Target → Weekly Target → Daily Action</strong></p>
      <h3>Manager Checklist</h3>
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
    short: "အရောင်းခန့်မှန်းခြင်း",
    icon: "📈",
    content: `
      <h2>Sales Forecasting</h2>
      <p>Forecast က လာမယ့်ကာလမှာ ဘယ်လောက်ရောင်းနိုင်မလဲဆိုတာ ခန့်မှန်းခြင်းဖြစ်ပါတယ်။</p>
      <h3>ကြည့်ရန်</h3>
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
    short: "Sales Performance ကို ခွဲခြမ်းစိတ်ဖြာခြင်း",
    icon: "📊",
    content: `
      <h2>Sales Performance Analysis</h2>
      <p>Manager တစ်ယောက်အနေနဲ့ Result ကိုသာ မကြည့်ဘဲ Result ဖြစ်လာတဲ့ Cause ကိုပါ ရှာရပါတယ်။</p>
      <h3>Analysis</h3>
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
    short: "Sales Territory ကို စီမံခန့်ခွဲခြင်း",
    icon: "🗺️",
    content: `
      <h2>Territory Management</h2>
      <p>Territory တစ်ခုချင်းစီမှာ Potential နဲ့ Opportunity မတူပါဘူး။</p>
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
    short: "Customer Relationship ကို စီမံခန့်ခွဲခြင်း",
    icon: "🤝",
    content: `
      <h2>Customer Management</h2>
      <p>Customer တစ်ယောက်ချင်းစီရဲ့ Value, Potential, Purchase Pattern နဲ့ Relationship ကို သိထားရပါတယ်။</p>
      <h3>လုပ်ဆောင်ရန်</h3>
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
    short: "အရေးကြီး Customer များကို စီမံခန့်ခွဲခြင်း",
    icon: "⭐",
    content: `
      <h2>Key Account Management</h2>
      <p>Key Account တွေက Revenue နဲ့ Business Relationship အတွက် အရေးကြီးတဲ့ Customer တွေဖြစ်ပါတယ်။</p>
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
    short: "Distributor ကို ထိရောက်စွာ စီမံခန့်ခွဲခြင်း",
    icon: "🚚",
    content: `
      <h2>Distributor Management</h2>
      <p>Distributor Management မှာ Sales, Stock, Collection, Coverage နဲ့ Execution ကို တစ်ပြိုင်နက်ကြည့်ရပါတယ်။</p>
      <h3>KPI</h3>
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
    short: "အောင်မြင်တဲ့ Negotiation နည်းလမ်း",
    icon: "🤝",
    content: `
      <h2>Negotiation</h2>
      <p>Negotiation ဆိုတာ ကိုယ့်ဘက်ကသာ အနိုင်ရဖို့မဟုတ်ဘဲ နှစ်ဖက်စလုံးအတွက် Value ရအောင် သဘောတူညီမှုရယူခြင်းဖြစ်ပါတယ်။</p>
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
    short: "Sales Team ကို Coaching လုပ်နည်း",
    icon: "🏆",
    content: `
      <h2>Sales Coaching</h2>
      <p>Manager က အလုပ်ကို ကိုယ်တိုင်လုပ်ပေးတာထက် Team ကို ကိုယ်တိုင်လုပ်နိုင်အောင် Coaching ပေးရပါတယ်။</p>
      <h3>Coaching Flow</h3>
      <ol>
        <li>Observe</li>
        <li>Identify Gap</li>
        <li>Explain</li>
        <li>Practice</li>
        <li>Follow-up</li>
      </ol>
    `
  },

  // MARKETING & BRAND
  {
    id: 21,
    category: "Marketing",
    title: "Marketing Basics",
    short: "Marketing ရဲ့ အခြေခံ",
    icon: "📣",
    content: `
      <h2>Marketing Basics</h2>
      <p>Marketing ဆိုတာ Customer ကို သိအောင်၊ စိတ်ဝင်စားအောင်၊ ဝယ်ယူအောင်နဲ့ ပြန်လည်ဝယ်ယူအောင် တည်ဆောက်တဲ့ လုပ်ငန်းစဉ်ဖြစ်ပါတယ်။</p>
      <h3>4Ps</h3>
      <ul>
        <li>Product</li>
        <li>Price</li>
        <li>Place</li>
        <li>Promotion</li>
      </ul>
    `
  },

  {
    id: 22,
    category: "Marketing",
    title: "Brand Basics",
    short: "Brand တည်ဆောက်ခြင်း",
    icon: "🏷️",
    content: `
      <h2>Brand Basics</h2>
      <p>Brand ဆိုတာ Logo တစ်ခုတည်းမဟုတ်ပါဘူး။ Customer ရဲ့ စိတ်ထဲမှာ ကိုယ့်လုပ်ငန်းနဲ့ပတ်သက်ပြီး ရှိနေတဲ့ Perception ဖြစ်ပါတယ်။</p>
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
    short: "Customer များကို အုပ်စုခွဲခြင်း",
    icon: "👥",
    content: `
      <h2>Customer Segmentation</h2>
      <p>Customer အားလုံးကို တူညီတဲ့ Strategy နဲ့ မဆက်ဆံသင့်ပါဘူး။</p>
      <h3>ခွဲခြားနိုင်သောအချက်များ</h3>
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
    short: "Promotion Campaign စီမံခြင်း",
    icon: "🎁",
    content: `
      <h2>Promotion Planning</h2>
      <p>Promotion တစ်ခုလုပ်တိုင်း Objective နဲ့ KPI ရှိရပါမယ်။</p>
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

  // PEOPLE
  {
    id: 25,
    category: "People",
    title: "Leadership",
    short: "ထိရောက်တဲ့ Leadership",
    icon: "👑",
    content: `
      <h2>Leadership</h2>
      <p>Leadership ဆိုတာ လူတွေကို အမိန့်ပေးတာထက် Direction ပေးပြီး Result ရအောင် ဦးဆောင်ခြင်းဖြစ်ပါတယ်။</p>
      <h3>ကောင်းမွန်တဲ့ Manager</h3>
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
    short: "ထိရောက်တဲ့ ဆက်သွယ်ပြောဆိုမှု",
    icon: "💬",
    content: `
      <h2>Effective Communication</h2>
      <p>Manager တစ်ယောက်အတွက် Clear Communication က Team Performance ကို တိုက်ရိုက်သက်ရောက်ပါတယ်။</p>
      <ol>
        <li>နားထောင်ပါ။</li>
        <li>အချက်အလက်ကို ရှင်းလင်းစွာပြောပါ။</li>
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
    short: "Team Member တွေကို ဖွံ့ဖြိုးတိုးတက်အောင်လုပ်ခြင်း",
    icon: "🌱",
    content: `
      <h2>Coaching & Development</h2>
      <p>Team Member တစ်ယောက်ချင်းစီရဲ့ Strength နဲ့ Development Gap ကို သိပြီး Personal Development Plan ချရပါတယ်။</p>
      <h3>Coaching Questions</h3>
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
    short: "ဝန်ထမ်း Performance စီမံခန့်ခွဲခြင်း",
    icon: "📋",
    content: `
      <h2>Performance Management</h2>
      <p>Performance Management ဆိုတာ Year-end appraisal တစ်ခါလုပ်တာမဟုတ်ဘဲ တစ်နှစ်ပတ်လုံး Performance ကို စီမံခြင်းဖြစ်ပါတယ်။</p>
      <ol>
        <li>Set KPI</li>
        <li>Monitor</li>
        <li>Review</li>
        <li>Coach</li>
        <li>Improve</li>
      </ol>
    `
  },

  // FINANCE
  {
    id: 29,
    category: "Finance",
    title: "Profit & Margin",
    short: "အမြတ်နဲ့ Margin ကို နားလည်ခြင်း",
    icon: "💵",
    content: `
      <h2>Profit & Margin</h2>
      <p><strong>Gross Profit = Sales - Cost</strong></p>
      <p><strong>Margin % = Gross Profit ÷ Sales × 100</strong></p>
      <h3>Manager အတွက်</h3>
      <p>Sales တိုးတာကောင်းပေမယ့် Margin ကျသွားရင် Business Quality ကျနိုင်ပါတယ်။</p>
    `
  },

  {
    id: 30,
    category: "Finance",
    title: "Break-even & P&L",
    short: "Break-even နဲ့ Profit & Loss",
    icon: "📊",
    content: `
      <h2>Break-even & P&L</h2>
      <p>Break-even Point ဆိုတာ အမြတ်မရ၊ အရှုံးမဖြစ်တဲ့ အဆင့်ဖြစ်ပါတယ်။</p>
      <p><strong>Break-even Units = Fixed Cost ÷ Contribution per Unit</strong></p>
      <h3>Manager အတွက်</h3>
      <p>Target ချတဲ့အခါ Sales Volume တစ်ခုတည်းမကြည့်ဘဲ Cost နဲ့ Contribution ကိုပါ ထည့်တွက်ရပါတယ်။</p>
    `
  }
];


/* =========================================================
   LESSON PAGE
   ========================================================= */

function ABA_renderAllLessons() {

  const page = document.getElementById("lessonsPage");

  if (!page) return;

  page.innerHTML = `
    <div class="aba-lessons-wrapper">

      <div class="aba-lesson-header">
        <div>
          <span class="aba-eyebrow">LEARNING CENTER</span>
          <h1>Business Lessons</h1>
          <p>အကြောင်းအရာကို နားလည်ရုံမဟုတ်ဘဲ လက်တွေ့အသုံးချနိုင်အောင် လေ့လာပါ။</p>
        </div>

        <div class="aba-lesson-total">
          <strong id="abaLessonTotal">${ABA_30_LESSONS.length}</strong>
          <span>Lessons</span>
        </div>
      </div>

      <div class="aba-lesson-controls">

        <input
          type="search"
          id="abaLessonSearch"
          placeholder="🔎 သင်ခန်းစာရှာရန်..."
        />

        <div class="aba-lesson-filters">

          <button class="aba-filter active" data-category="All">
            All
          </button>

          <button class="aba-filter" data-category="Business Basics">
            Business
          </button>

          <button class="aba-filter" data-category="Sales">
            Sales
          </button>

          <button class="aba-filter" data-category="Strategy">
            Strategy
          </button>

          <button class="aba-filter" data-category="Marketing">
            Marketing
          </button>

          <button class="aba-filter" data-category="People">
            People
          </button>

          <button class="aba-filter" data-category="Finance">
            Finance
          </button>

        </div>
      </div>

      <div id="abaLessonResultInfo" class="aba-result-info">
        Showing all ${ABA_30_LESSONS.length} lessons
      </div>

      <div
        id="abaLessonGrid"
        class="aba-lesson-grid"
      ></div>

    </div>
  `;

  ABA_addLessonCSS();
  ABA_bindLessonEvents();
  ABA_renderLessonCards("All", "");
}


/* =========================================================
   RENDER CARDS
   ========================================================= */

function ABA_renderLessonCards(category = "All", search = "") {

  const grid = document.getElementById("abaLessonGrid");
  const resultInfo = document.getElementById("abaLessonResultInfo");

  if (!grid) return;

  const keyword = String(search || "").trim().toLowerCase();

  let lessons = ABA_30_LESSONS.filter(lesson => {

    const categoryMatch =
      category === "All" ||
      lesson.category === category;

    const searchMatch =
      !keyword ||
      lesson.title.toLowerCase().includes(keyword) ||
      lesson.short.toLowerCase().includes(keyword) ||
      lesson.category.toLowerCase().includes(keyword);

    return categoryMatch && searchMatch;
  });

  grid.innerHTML = "";

  /*
   * IMPORTANT:
   * No pagination.
   * No max-height.
   * No hidden lessons.
   * Every matching lesson is rendered.
   */

  lessons.forEach((lesson, index) => {

    const completed =
      JSON.parse(
        localStorage.getItem("abaCompletedLessons") || "[]"
      ).includes(lesson.id);

    const card = document.createElement("article");

    card.className = "aba-lesson-card";

    card.innerHTML = `
      <div class="aba-lesson-icon">
        ${lesson.icon}
      </div>

      <div class="aba-lesson-number">
        Lesson ${String(lesson.id).padStart(2, "0")}
      </div>

      <div class="aba-lesson-category">
        ${lesson.category}
      </div>

      <h3>${lesson.title}</h3>

      <p>${lesson.short}</p>

      <div class="aba-lesson-card-bottom">

        <button
          class="aba-open-lesson"
          data-id="${lesson.id}"
        >
          ${completed ? "✓ ပြန်လေ့လာမည်" : "သင်ခန်းစာဖတ်မည် →"}
        </button>

        ${
          completed
            ? `<span class="aba-completed-badge">✓ Completed</span>`
            : ""
        }

      </div>
    `;

    grid.appendChild(card);
  });

  if (resultInfo) {

    if (category === "All" && !keyword) {

      resultInfo.textContent =
        `Showing all ${ABA_30_LESSONS.length} lessons`;

    } else {

      resultInfo.textContent =
        `${lessons.length} lessons found`;
    }
  }

  document.querySelectorAll(".aba-open-lesson").forEach(button => {

    button.addEventListener("click", () => {

      const id = Number(button.dataset.id);

      ABA_openLesson(id);

    });

  });
}


/* =========================================================
   OPEN LESSON
   ========================================================= */

function ABA_openLesson(id) {

  const lesson =
    ABA_30_LESSONS.find(item => item.id === Number(id));

  if (!lesson) return;

  let completed =
    JSON.parse(
      localStorage.getItem("abaCompletedLessons") || "[]"
    );

  const isCompleted = completed.includes(lesson.id);

  const modal =
    document.getElementById("modalOverlay");

  const body =
    document.getElementById("modalBody");

  if (!modal || !body) {

    alert(lesson.title + "\n\n" + lesson.short);

    return;
  }

  body.innerHTML = `

    <div class="aba-detail">

      <div class="aba-detail-icon">
        ${lesson.icon}
      </div>

      <div class="aba-detail-category">
        ${lesson.category}
      </div>

      ${lesson.content}

      <div class="aba-detail-actions">

        <button
          class="aba-complete-btn"
          id="abaCompleteLesson"
        >
          ${
            isCompleted
              ? "✓ Completed"
              : "✓ Complete Lesson"
          }
        </button>

      </div>

    </div>

  `;

  modal.classList.add("active");

  const completeButton =
    document.getElementById("abaCompleteLesson");

  if (completeButton) {

    completeButton.addEventListener("click", () => {

      let list =
        JSON.parse(
          localStorage.getItem("abaCompletedLessons") || "[]"
        );

      if (!list.includes(lesson.id)) {

        list.push(lesson.id);

        localStorage.setItem(
          "abaCompletedLessons",
          JSON.stringify(list)
        );

      }

      completeButton.textContent = "✓ Completed";

      ABA_renderLessonCards(
        document.querySelector(".aba-filter.active")?.dataset.category || "All",
        document.getElementById("abaLessonSearch")?.value || ""
      );

      if (typeof window.showToast === "function") {

        window.showToast("Lesson completed successfully!");

      }

    });

  }
}


/* =========================================================
   FILTER + SEARCH
   ========================================================= */

function ABA_bindLessonEvents() {

  document.querySelectorAll(".aba-filter").forEach(button => {

    button.addEventListener("click", () => {

      document
        .querySelectorAll(".aba-filter")
        .forEach(btn => btn.classList.remove("active"));

      button.classList.add("active");

      const category =
        button.dataset.category;

      const search =
        document.getElementById("abaLessonSearch")?.value || "";

      ABA_renderLessonCards(category, search);

    });

  });


  const searchInput =
    document.getElementById("abaLessonSearch");

  if (searchInput) {

    searchInput.addEventListener("input", () => {

      const category =
        document.querySelector(".aba-filter.active")
          ?.dataset.category || "All";

      ABA_renderLessonCards(
        category,
        searchInput.value
      );

    });

  }
}


/* =========================================================
   LESSON CSS
   ========================================================= */

function ABA_addLessonCSS() {

  if (document.getElementById("abaLessonCSS")) return;

  const style =
    document.createElement("style");

  style.id = "abaLessonCSS";

  style.textContent = `

    .aba-lessons-wrapper {
      width: 100%;
      padding-bottom: 60px;
    }

    .aba-lesson-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      margin-bottom: 25px;
    }

    .aba-eyebrow {
      font-size: 12px;
      font-weight: 800;
      color: #6d4aff;
      letter-spacing: 1.5px;
    }

    .aba-lesson-header h1 {
      margin: 7px 0;
      font-size: 32px;
      font-weight: 800;
      color: #172033;
    }

    .aba-lesson-header p {
      color: #718096;
      margin: 0;
    }

    .aba-lesson-total {
      min-width: 110px;
      padding: 18px;
      border-radius: 18px;
      background: linear-gradient(
        135deg,
        #6d4aff,
        #ec4899
      );
      color: white;
      text-align: center;
      box-shadow: 0 10px 25px rgba(109,74,255,.20);
    }

    .aba-lesson-total strong {
      display: block;
      font-size: 30px;
    }

    .aba-lesson-total span {
      font-size: 13px;
    }

    .aba-lesson-controls {
      background: #fff;
      border: 1px solid #e8eaf0;
      border-radius: 18px;
      padding: 18px;
      margin-bottom: 15px;
    }

    #abaLessonSearch {
      width: 100%;
      border: 1px solid #e2e5ec;
      border-radius: 12px;
      padding: 13px 15px;
      font-size: 15px;
      outline: none;
      margin-bottom: 15px;
    }

    #abaLessonSearch:focus {
      border-color: #6d4aff;
    }

    .aba-lesson-filters {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    .aba-filter {
      border: 1px solid #e5e7ef;
      background: #f7f8fb;
      color: #4a5568;
      border-radius: 999px;
      padding: 9px 15px;
      cursor: pointer;
      font-weight: 700;
    }

    .aba-filter.active {
      background: #6d4aff;
      color: white;
      border-color: #6d4aff;
    }

    .aba-result-info {
      color: #718096;
      font-size: 14px;
      margin: 18px 2px;
      font-weight: 600;
    }

    /*
      IMPORTANT:
      Grid has no fixed height.
      Therefore ALL lesson cards remain visible.
    */

    .aba-lesson-grid {
      display: grid !important;
      grid-template-columns:
        repeat(auto-fill, minmax(270px, 1fr));
      gap: 18px;
      width: 100%;
      height: auto !important;
      max-height: none !important;
      overflow: visible !important;
    }

    .aba-lesson-card {
      background: white;
      border: 1px solid #e8eaf0;
      border-radius: 18px;
      padding: 20px;
      min-height: 260px;
      display: flex;
      flex-direction: column;
      box-shadow: 0 5px 20px rgba(31,41,55,.05);
      transition: transform .2s ease, box-shadow .2s ease;
    }

    .aba-lesson-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 30px rgba(31,41,55,.10);
    }

    .aba-lesson-icon {
      width: 50px;
      height: 50px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f1edff;
      font-size: 25px;
      margin-bottom: 13px;
    }

    .aba-lesson-number {
      color: #6d4aff;
      font-size: 12px;
      font-weight: 800;
    }

    .aba-lesson-category {
      color: #9aa2b1;
      font-size: 11px;
      margin: 4px 0 8px;
      font-weight: 700;
      text-transform: uppercase;
    }

    .aba-lesson-card h3 {
      font-size: 18px;
      margin: 0 0 9px;
      color: #172033;
    }

    .aba-lesson-card p {
      color: #718096;
      font-size: 14px;
      line-height: 1.6;
      margin: 0;
      flex: 1;
    }

    .aba-lesson-card-bottom {
      margin-top: 18px;
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }

    .aba-open-lesson {
      border: none;
      background: #6d4aff;
      color: white;
      border-radius: 10px;
      padding: 10px 13px;
      cursor: pointer;
      font-weight: 700;
    }

    .aba-completed-badge {
      color: #16a34a;
      background: #ecfdf3;
      padding: 7px 10px;
      border-radius: 999px;
      font-size: 11px;
      font-weight: 700;
    }

    .aba-detail {
      line-height: 1.75;
      color: #374151;
    }

    .aba-detail-icon {
      font-size: 42px;
      margin-bottom: 10px;
    }

    .aba-detail-category {
      color: #6d4aff;
      font-size: 12px;
      font-weight: 800;
      margin-bottom: 12px;
      text-transform: uppercase;
    }

    .aba-detail h2 {
      color: #172033;
      margin-bottom: 18px;
    }

    .aba-detail h3 {
      color: #6d4aff;
      margin-top: 22px;
      margin-bottom: 8px;
    }

    .aba-detail-actions {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e8eaf0;
    }

    .aba-complete-btn {
      border: none;
      background: linear-gradient(
        135deg,
        #6d4aff,
        #ec4899
      );
      color: white;
      padding: 13px 20px;
      border-radius: 12px;
      font-weight: 800;
      cursor: pointer;
    }

    @media (max-width: 650px) {

      .aba-lesson-header {
        align-items: flex-start;
      }

      .aba-lesson-header h1 {
        font-size: 26px;
      }

      .aba-lesson-total {
        min-width: 85px;
      }

      .aba-lesson-total strong {
        font-size: 24px;
      }

      .aba-lesson-grid {
        grid-template-columns: 1fr !important;
      }

    }

  `;

  document.head.appendChild(style);
}


/* =========================================================
   FORCE BUILD WHEN LESSON PAGE IS OPENED
   ========================================================= */

function ABA_initLessonSystem() {

  const page =
    document.getElementById("lessonsPage");

  if (!page) return;

  /*
   * Always rebuild.
   * This prevents old lesson HTML / old JS
   * from hiding some lessons.
   */

  ABA_renderAllLessons();
}


/* =========================================================
   AUTO INIT
   ========================================================= */

if (document.readyState === "loading") {

  document.addEventListener(
    "DOMContentLoaded",
    ABA_initLessonSystem
  );

} else {

  ABA_initLessonSystem();

}


/* =========================================================
   MAKE AVAILABLE GLOBALLY
   ========================================================= */

window.ABA_30_LESSONS = ABA_30_LESSONS;
window.ABA_renderAllLessons = ABA_renderAllLessons;
window.ABA_renderLessonCards = ABA_renderLessonCards;
window.ABA_openLesson = ABA_openLesson;
