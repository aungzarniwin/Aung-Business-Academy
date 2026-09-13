/* =========================================================
   AUNG BUSINESS ACADEMY
   V8.1 CORE FIX
   Lesson + Sales Manager + AI Coach + Settings
   ========================================================= */

"use strict";

/* =========================
   BASIC HELPERS
========================= */

const $ = (selector, parent = document) =>
    parent.querySelector(selector);

const $$ = (selector, parent = document) =>
    [...parent.querySelectorAll(selector)];

function escapeHTML(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function money(value) {
    return Number(value || 0).toLocaleString("en-US") + " MMK";
}

function number(value) {
    return Number(value || 0).toLocaleString("en-US");
}

/* =========================
   STORAGE
========================= */

const STORAGE = {
    completed: "aba_completed_lessons",
    sales: "aba_sales_manager",
    settings: "aba_settings",
    actions: "aba_sales_actions"
};

function getStorage(key, fallback) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : fallback;
    } catch {
        return fallback;
    }
}

function setStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

/* =========================
   LESSON DATABASE
========================= */

const LESSONS = [

{
    id: 1,
    category: "Sales",
    title: "Sales Target ကို Plan ချနည်း",
    duration: "25 min",
    level: "Intermediate",
    summary: "Monthly Sales Target ကို Daily Target, Customer Target နဲ့ Team Target အဖြစ် ခွဲပြီး လက်တွေ့အကောင်အထည်ဖော်နည်း။",
    objectives: [
        "Monthly Target ကို နားလည်ရန်",
        "Daily Target တွက်ချက်ရန်",
        "Team နဲ့ Customer အလိုက် Target ခွဲရန်",
        "Gap ကို Action Plan ပြောင်းရန်"
    ],
    sections: [
        {
            heading: "1. Sales Target ဆိုတာဘာလဲ",
            body: "Sales Target ဆိုတာ သတ်မှတ်ထားတဲ့ကာလအတွင်း ရောင်းချရမယ့် Revenue သို့မဟုတ် Volume ရည်မှန်းချက်ဖြစ်ပါတယ်။ Manager တစ်ယောက်အနေနဲ့ Target ကို သိရုံနဲ့ မလုံလောက်ပါဘူး။ Target ကို လူ၊ နေရာ၊ Customer၊ Product နဲ့ Time အလိုက် ခွဲပြီး Field Execution ပြောင်းနိုင်ရပါမယ်။"
        },
        {
            heading: "2. Monthly Target ကို Daily Target ခွဲခြင်း",
            body: "ဥပမာ Monthly Target 30,000,000 MMK ရှိပြီး Working Days 26 ရက်ဆိုရင် Daily Target = 30,000,000 ÷ 26 = 1,153,846 MMK ခန့် ဖြစ်ပါတယ်။ ဒီ Daily Target ကို Sales Team တစ်ခုလုံးရဲ့ Daily Execution Standard အဖြစ်အသုံးပြုနိုင်ပါတယ်။"
        },
        {
            heading: "3. Gap Analysis",
            body: "Target 30,000,000 MMK ဖြစ်ပြီး Actual 22,500,000 MMK ဆိုရင် Gap = 7,500,000 MMK ဖြစ်ပါတယ်။ Manager က 'Sales မကောင်းဘူး' လို့ပဲ မပြောဘဲ ဘယ် Customer၊ ဘယ် Territory၊ ဘယ် Product နဲ့ ဘယ် Sales Rep မှာ Gap ဖြစ်နေတာလဲဆိုတာ ရှာရပါမယ်။"
        },
        {
            heading: "4. Manager Action",
            body: "Gap တွေ့ပြီးရင် Action Plan ချရပါမယ်။ Top Customer order တိုးခြင်း၊ inactive customer ပြန်ဖွင့်ခြင်း၊ outlet coverage တိုးခြင်း၊ product mix ပြောင်းခြင်း၊ sales team coaching လုပ်ခြင်းတို့ကို လုပ်နိုင်ပါတယ်။"
        }
    ],
    example: "Yangon Territory မှာ Monthly Target 100 သိန်း၊ Actual 75 သိန်းဆိုရင် Achievement 75% ဖြစ်ပါတယ်။ ကျန်တဲ့ 25 သိန်း Gap ကို Customer အလိုက်ခွဲပြီး Recovery Plan ချရပါမယ်။",
    managerUse: "Sales Manager အနေနဲ့ Morning Briefing, Weekly Review နဲ့ Month-End Recovery Plan တွေမှာ အသုံးပြုနိုင်ပါတယ်။",
    checklist: [
        "Monthly Target သိပြီလား",
        "Daily Target တွက်ပြီးပြီလား",
        "Top Customer Target ခွဲပြီးပြီလား",
        "Gap Customer ရှာပြီးပြီလား",
        "Recovery Action Plan ရှိပြီလား"
    ],
    assignment: "ကိုယ့် Sales Team ရဲ့ Monthly Target တစ်ခုယူပြီး Daily Target နဲ့ Gap Analysis လုပ်ပါ။",
    takeaways: [
        "Target ကို Number တစ်ခုအဖြစ်မထားပါနဲ့",
        "Target ကို Field Action အဖြစ်ပြောင်းပါ",
        "Gap ကို လူ၊ Customer၊ Territory အလိုက်ရှာပါ"
    ]
},

{
    id: 2,
    category: "Sales",
    title: "Sales Performance Analysis",
    duration: "30 min",
    level: "Advanced",
    summary: "Sales Result ကို Number နဲ့မဟုတ်ဘဲ Trend, Gap, Achievement နဲ့ Productivity အရ ခွဲခြမ်းစိတ်ဖြာနည်း။",
    objectives: [
        "Achievement % တွက်ရန်",
        "Gap Analysis လုပ်ရန်",
        "Trend ကိုဖော်ထုတ်ရန်",
        "Action Plan ပြောင်းရန်"
    ],
    sections: [
        {
            heading: "1. Achievement %",
            body: "Achievement % = Actual Sales ÷ Target × 100 ဖြစ်ပါတယ်။ 30,000,000 Target နဲ့ 27,000,000 Actual ဆိုရင် Achievement 90% ဖြစ်ပါတယ်။"
        },
        {
            heading: "2. Trend Analysis",
            body: "ဒီလ Sales ကိုပဲ မကြည့်ဘဲ Previous Month နဲ့ Previous Year ကို နှိုင်းယှဉ်ရပါမယ်။ Sales တက်နေသလား၊ ကျနေသလား၊ ဘာကြောင့်လဲဆိုတာ ရှာရပါမယ်။"
        },
        {
            heading: "3. Productivity",
            body: "Sales Rep တစ်ယောက်ချင်းစီရဲ့ Target, Actual, Outlet Visit, Order Conversion, Average Order Value စတာတွေကို တွဲကြည့်ရင် Productivity ပိုကောင်းလာပါတယ်။"
        }
    ],
    example: "Rep A = 110%, Rep B = 95%, Rep C = 60% ဆိုရင် C ကို အပြစ်တင်တာထက် C ရဲ့ Territory, Customer Mix, Visit Frequency နဲ့ Skill Gap ကို စစ်ရပါမယ်။",
    managerUse: "Weekly Sales Review နဲ့ Coaching Session တွေမှာ အသုံးပြုနိုင်ပါတယ်။",
    checklist: [
        "Target vs Actual",
        "Month-on-Month",
        "Year-on-Year",
        "Rep Performance",
        "Customer Performance"
    ],
    assignment: "Sales Rep 3 ယောက်ရဲ့ Performance ကို 100%, 80%, 60% အဖြစ်ယူပြီး Coaching Plan တစ်ခုရေးပါ။",
    takeaways: [
        "Number ကို အကြောင်းရင်းနဲ့တွဲကြည့်ပါ",
        "Low performer ကို Coaching လုပ်ပါ",
        "High performer ကို Best Practice ပြန်မျှဝေပါ"
    ]
},

{
    id: 3,
    category: "Sales",
    title: "Customer Management",
    duration: "25 min",
    level: "Intermediate",
    summary: "Customer ကို Strategic Account, Growth Account, Maintenance Account အဖြစ်ခွဲပြီး Sales တိုးအောင်စီမံနည်း။",
    objectives: [
        "Customer Segmentation",
        "Top Customer Management",
        "Growth Opportunity",
        "Customer Retention"
    ],
    sections: [
        {
            heading: "1. Customer Segmentation",
            body: "Customer အားလုံးကို တူညီတဲ့အချိန်ပမာဏနဲ့ မစီမံသင့်ပါဘူး။ Revenue, Growth Potential, Strategic Value အရ ခွဲသင့်ပါတယ်။"
        },
        {
            heading: "2. Key Account",
            body: "Key Account တွေအတွက် Customer Business Plan, Regular Visit, Negotiation Plan, Promotion Plan နဲ့ Joint Business Review စနစ်တွေထားသင့်ပါတယ်။"
        },
        {
            heading: "3. Retention",
            body: "Customer မပျောက်အောင် Price တစ်ခုတည်းနဲ့မထိန်းပါနဲ့။ Service, Availability, Delivery, Relationship နဲ့ Business Support တွေပါ ထည့်စဉ်းစားရပါမယ်။"
        }
    ],
    example: "Customer တစ်ခုက တစ်လ 50 သိန်းဝယ်နေပြီး Competitor ဆီကို 20 သိန်းပြောင်းသွားတယ်ဆိုရင် Share Recovery Plan ချရပါမယ်။",
    managerUse: "Top Customer Visit Plan နဲ့ Monthly Business Review မှာ အသုံးပြုနိုင်ပါတယ်။",
    checklist: [
        "Top 10 Customers",
        "Customer Growth",
        "Lost Customer",
        "Competitor Activity",
        "Recovery Plan"
    ],
    assignment: "ကိုယ့် Territory ရဲ့ Top 10 Customers ကို A/B/C Classification လုပ်ပါ။",
    takeaways: [
        "Customer အားလုံးကို တူညီစွာ မစီမံပါနဲ့",
        "Top Customers ကို Protect လုပ်ပါ",
        "Growth Customers ကို Develop လုပ်ပါ"
    ]
},

{
    id: 4,
    category: "Sales",
    title: "Negotiation Skill",
    duration: "30 min",
    level: "Advanced",
    summary: "Price Discount ပေးရုံမဟုတ်ဘဲ Value-based Negotiation နဲ့ Customer နဲ့ Win-Win Deal ပြုလုပ်နည်း။",
    objectives: [
        "Customer Need နားလည်ရန်",
        "Negotiation Preparation",
        "Value Selling",
        "Win-Win Deal"
    ],
    sections: [
        {
            heading: "1. Preparation",
            body: "Negotiation မဝင်ခင် Customer ရဲ့ Volume, Margin, Payment, Competitor Offer နဲ့ ကိုယ့်ရဲ့ Minimum Acceptable Position ကို သိထားရပါမယ်။"
        },
        {
            heading: "2. Don't Sell Only on Price",
            body: "Price လျှော့ပေးတာက အလွယ်ဆုံးဖြေရှင်းချက်ဖြစ်ပေမယ့် Long-term အတွက် Margin ကိုထိခိုက်စေနိုင်ပါတယ်။ Delivery, Service, Availability, Marketing Support စတဲ့ Value တွေကို အသုံးပြုပါ။"
        },
        {
            heading: "3. Win-Win",
            body: "Customer ဘက်က ပိုရချင်တာနဲ့ Company ဘက်က အမြတ်နဲ့ Volume ရချင်တာကို တစ်ပြိုင်နက်တည်း ဖြေရှင်းရပါမယ်။"
        }
    ],
    example: "Customer က Discount 10% တောင်းလာရင် Discount ပေးလိုက်တာထက် Volume Commitment တောင်းပြီး Conditional Support ပေးနိုင်ပါတယ်။",
    managerUse: "Key Account Negotiation နဲ့ Distributor Negotiation မှာ အသုံးပြုနိုင်ပါတယ်။",
    checklist: [
        "Customer Need",
        "Competitor Offer",
        "Minimum Price",
        "Volume Commitment",
        "Win-Win Solution"
    ],
    assignment: "Customer က 10% Discount တောင်းတဲ့ Scenario တစ်ခုကို Negotiation Script ရေးပါ။",
    takeaways: [
        "Price တစ်ခုတည်းနဲ့ မယှဉ်ပါနဲ့",
        "Value ကိုရောင်းပါ",
        "Give & Take ကိုသုံးပါ"
    ]
},

{
    id: 5,
    category: "Strategy",
    title: "Strategic Thinking",
    duration: "25 min",
    level: "Intermediate",
    summary: "နေ့စဉ် Sales Task ထက်ပိုပြီး Market, Competitor, Customer နဲ့ Business Direction ကို တွေးခေါ်နည်း။",
    objectives: [
        "Strategic Thinking",
        "Market Analysis",
        "Competitor Analysis",
        "Prioritization"
    ],
    sections: [
        {
            heading: "1. Strategy ဆိုတာ",
            body: "Strategy ဆိုတာ အလုပ်များများလုပ်တာမဟုတ်ပါဘူး။ Business Goal ရောက်အောင် ဘာကိုဦးစားပေးလုပ်မလဲဆိုတာ ဆုံးဖြတ်ခြင်းဖြစ်ပါတယ်။"
        },
        {
            heading: "2. Market Analysis",
            body: "Market Size, Growth, Customer Behavior, Competitor Activity နဲ့ Distribution Coverage တွေကိုကြည့်ရပါမယ်။"
        },
        {
            heading: "3. Priority",
            body: "အရေးကြီးတဲ့ Customer နဲ့ အကျိုးသက်ရောက်မှုနည်းတဲ့ Task ကို တန်းတူအချိန်မပေးသင့်ပါဘူး။ Impact နဲ့ Urgency အရ Prioritize လုပ်ပါ။"
        }
    ],
    example: "Sales ကျနေတဲ့ Territory တစ်ခုမှာ Rep အားလုံးကို အလုပ်ပိုလုပ်ခိုင်းတာထက် Lost Customers နဲ့ Distribution Gap ကို အရင်ရှာတာ ပို Strategic ဖြစ်ပါတယ်။",
    managerUse: "Annual Plan, Territory Plan, Business Review တွေမှာ အသုံးပြုနိုင်ပါတယ်။",
    checklist: [
        "Market",
        "Customer",
        "Competitor",
        "Opportunity",
        "Risk"
    ],
    assignment: "ကိုယ့် Territory ရဲ့ အကြီးဆုံး Sales Opportunity 3 ခုရေးပါ။",
    takeaways: [
        "Busy ဖြစ်တာနဲ့ Productive ဖြစ်တာမတူပါ",
        "Impact ကိုဦးစားပေးပါ",
        "Long-term ကိုပါစဉ်းစားပါ"
    ]
},

{
    id: 6,
    category: "Strategy",
    title: "Market Expansion",
    duration: "30 min",
    level: "Advanced",
    summary: "Territory အသစ်၊ Customer အသစ်နဲ့ Distribution အသစ်တွေကနေ Sales Growth ရှာဖွေနည်း။",
    objectives: [
        "New Market Identification",
        "Distribution Gap",
        "Customer Acquisition",
        "Growth Plan"
    ],
    sections: [
        {
            heading: "1. Market Gap",
            body: "ရှိပြီးသား Customer တွေကိုပဲ ထပ်ရောင်းတာနဲ့ Growth အကန့်အသတ်ရှိနိုင်ပါတယ်။ Coverage မရောက်သေးတဲ့ Area နဲ့ Customer ကို ရှာဖွေရပါမယ်။"
        },
        {
            heading: "2. Expansion Plan",
            body: "Area Prioritization → Customer List → Sales Coverage → Product Availability → Launch Activity ဆိုတဲ့အဆင့်နဲ့သွားနိုင်ပါတယ်။"
        },
        {
            heading: "3. Measure",
            body: "New Customer Count, New Revenue, Active Outlet, Distribution Coverage နဲ့ Repeat Order Rate ကို KPI အဖြစ်ထားနိုင်ပါတယ်။"
        }
    ],
    example: "Township တစ်ခုမှာ Active Outlet 200 ရှိပေမယ့် Company coverage 80 ပဲရှိရင် ကျန် 120 Outlet က Growth Opportunity ဖြစ်နိုင်ပါတယ်။",
    managerUse: "Area Sales Manager အနေနဲ့ Territory Expansion Plan မှာ အသုံးပြုနိုင်ပါတယ်။",
    checklist: [
        "Market Size",
        "Outlet Count",
        "Current Coverage",
        "Competitor Coverage",
        "Growth Potential"
    ],
    assignment: "ကိုယ့်မြို့နယ်တစ်ခုအတွက် Market Expansion Plan တစ်ခုရေးပါ။",
    takeaways: [
        "Growth ကို ရှာဖွေပါ",
        "Distribution က Sales ရဲ့ အခြေခံပါ",
        "New Customer ကို Repeat Customer ပြောင်းပါ"
    ]
},

{
    id: 7,
    category: "People",
    title: "Sales Team Leadership",
    duration: "30 min",
    level: "Advanced",
    summary: "Team ကို Micromanage မလုပ်ဘဲ Coaching, Empowerment နဲ့ Accountability တည်ဆောက်နည်း။",
    objectives: [
        "Leadership Style",
        "Coaching",
        "Performance Management",
        "Accountability"
    ],
    sections: [
        {
            heading: "1. Manager vs Leader",
            body: "Manager က Task နဲ့ Result ကိုစီမံပြီး Leader က လူတွေရဲ့ Capability နဲ့ Ownership ကိုတည်ဆောက်ပါတယ်။ Sales Manager တစ်ယောက်အနေနဲ့ နှစ်ခုလုံးလိုအပ်ပါတယ်။"
        },
        {
            heading: "2. Coaching",
            body: "အမှားတွေ့တိုင်း ကိုယ်တိုင်ဝင်လုပ်တာထက် Rep ကို Problem ကိုယ်တိုင်စဉ်းစားစေပြီး Solution ရှာစေပါ။"
        },
        {
            heading: "3. Accountability",
            body: "Expectation ကိုရှင်းရှင်းလင်းလင်း သတ်မှတ်ပြီး Review လုပ်ပါ။ Result မရရင် Reason → Action → Deadline သုံးခုနဲ့ follow up လုပ်ပါ။"
        }
    ],
    example: "Rep တစ်ယောက် Target 70% ပဲရရင် 'ဘာလို့မရတာလဲ' လို့မေးတာထက် 'Gap က ဘယ်နေရာမှာဖြစ်တာလဲ၊ ဒီအပတ် ဘာလုပ်မလဲ' လို့ Coaching လုပ်ပါ။",
    managerUse: "Weekly 1-on-1 နဲ့ Sales Meeting တွေမှာ အသုံးပြုနိုင်ပါတယ်။",
    checklist: [
        "Clear Expectation",
        "Regular Review",
        "Coaching",
        "Feedback",
        "Accountability"
    ],
    assignment: "Low Performer တစ်ယောက်အတွက် 30-Day Coaching Plan ရေးပါ။",
    takeaways: [
        "Micromanagement မလုပ်ပါနဲ့",
        "Ownership ပေးပါ",
        "Performance Review ပုံမှန်လုပ်ပါ"
    ]
},

{
    id: 8,
    category: "People",
    title: "Effective Communication",
    duration: "20 min",
    level: "Intermediate",
    summary: "Team, Customer နဲ့ Senior Management တို့ကို ရှင်းလင်းပြီး Professional ဆက်သွယ်နည်း။",
    objectives: [
        "Clear Communication",
        "Active Listening",
        "Feedback",
        "Business Reporting"
    ],
    sections: [
        {
            heading: "1. Clear Message",
            body: "ဘာလုပ်ရမယ်၊ ဘယ်အချိန်ပြီးရမယ်၊ ဘယ် Result ကိုလိုချင်တယ်ဆိုတာ ရှင်းလင်းရပါမယ်။"
        },
        {
            heading: "2. Listening",
            body: "Manager က အမြဲပြောနေသူမဟုတ်ပါဘူး။ Team ရဲ့ Field Reality ကို နားထောင်ပြီး Decision ချနိုင်ရပါမယ်။"
        },
        {
            heading: "3. Reporting",
            body: "Senior Management ကို Report တင်တဲ့အခါ Situation → Analysis → Action → Expected Result ပုံစံနဲ့ တင်ပြရင် Professional ဖြစ်ပါတယ်။"
        }
    ],
    example: "Sales ကျတဲ့အကြောင်း Report မှာ 'Market is difficult' လို့ပဲ မရေးဘဲ Competitor discount, customer stock, distribution gap နဲ့ action plan ကို ထည့်ရေးပါ။",
    managerUse: "Management Meeting, Customer Meeting နဲ့ Team Briefing မှာ အသုံးပြုနိုင်ပါတယ်။",
    checklist: [
        "Situation",
        "Problem",
        "Analysis",
        "Action",
        "Result"
    ],
    assignment: "Sales ကျဆင်းမှုအတွက် Management Report တစ်မျက်နှာရေးပါ။",
    takeaways: [
        "ရှင်းလင်းစွာပြောပါ",
        "နားထောင်ပါ",
        "Data နဲ့ပြောပါ"
    ]
},

{
    id: 9,
    category: "Finance",
    title: "Profit & Margin Basics",
    duration: "25 min",
    level: "Intermediate",
    summary: "Sales များတာနဲ့ Profit များတာမတူတဲ့အကြောင်းနဲ့ Margin ကို Manager တစ်ယောက်အနေနဲ့ နားလည်ရန်။",
    objectives: [
        "Revenue",
        "Cost",
        "Gross Profit",
        "Margin"
    ],
    sections: [
        {
            heading: "1. Revenue",
            body: "Revenue ဆိုတာ ရောင်းချမှုကနေ ရရှိတဲ့ Sales Value ဖြစ်ပါတယ်။"
        },
        {
            heading: "2. Gross Profit",
            body: "Gross Profit = Sales Revenue − Cost of Goods Sold ဖြစ်ပါတယ်။"
        },
        {
            heading: "3. Margin",
            body: "Gross Margin % = Gross Profit ÷ Sales × 100 ဖြစ်ပါတယ်။ Discount များလွန်းရင် Revenue တက်နိုင်ပေမယ့် Margin ကျနိုင်ပါတယ်။"
        }
    ],
    example: "Sales 10,000,000 MMK နဲ့ Cost 7,000,000 MMK ဆိုရင် Gross Profit 3,000,000 MMK ဖြစ်ပြီး Margin 30% ဖြစ်ပါတယ်။",
    managerUse: "Pricing, Promotion နဲ့ Negotiation ဆုံးဖြတ်ချက်တွေမှာ အသုံးပြုနိုင်ပါတယ်။",
    checklist: [
        "Revenue",
        "COGS",
        "Gross Profit",
        "Margin %",
        "Discount Impact"
    ],
    assignment: "Sales 50 သိန်း၊ Cost 35 သိန်းဆိုရင် Profit နဲ့ Margin တွက်ပါ။",
    takeaways: [
        "Revenue တစ်ခုတည်းမကြည့်ပါနဲ့",
        "Margin ကိုကာကွယ်ပါ",
        "Discount ရဲ့ Impact သိပါ"
    ]
},

{
    id: 10,
    category: "Finance",
    title: "Break-even Analysis",
    duration: "25 min",
    level: "Intermediate",
    summary: "Business က အရှုံးမရှိ အမြတ်မရှိ အမှတ်ကိုတွက်ပြီး Sales Target သတ်မှတ်နည်း။",
    objectives: [
        "Fixed Cost",
        "Variable Cost",
        "Contribution",
        "Break-even"
    ],
    sections: [
        {
            heading: "1. Fixed Cost",
            body: "Rent, Salary, Utilities စတဲ့ Sales Volume ပြောင်းလဲသော်လည်း အများအားဖြင့် မပြောင်းတဲ့ Cost တွေကို Fixed Cost လို့ခေါ်ပါတယ်။"
        },
        {
            heading: "2. Break-even",
            body: "Contribution Margin ကိုသိရင် Fixed Cost ကို ပြန်ကာမိဖို့ လိုအပ်တဲ့ Sales Level ကို တွက်နိုင်ပါတယ်။"
        },
        {
            heading: "3. Manager Use",
            body: "New Product Launch, New Branch, Promotion Campaign တွေမှာ Break-even Analysis က အရေးကြီးပါတယ်။"
        }
    ],
    example: "Fixed Cost 3,000,000 MMK နဲ့ Contribution Margin 30% ဆိုရင် Break-even Sales = 10,000,000 MMK ဖြစ်ပါတယ်။",
    managerUse: "Business Plan နဲ့ Investment Decision တွေမှာ အသုံးပြုနိုင်ပါတယ်။",
    checklist: [
        "Fixed Cost",
        "Variable Cost",
        "Contribution Margin",
        "Break-even Sales"
    ],
    assignment: "Fixed Cost 5,000,000 နဲ့ Margin 25% ဆိုရင် Break-even Sales တွက်ပါ။",
    takeaways: [
        "Cost ကိုနားလည်ပါ",
        "Margin ကိုနားလည်ပါ",
        "Break-even ကိုသိပြီးမှ Growth Plan ချပါ"
    ]
},

{
    id: 11,
    category: "People",
    title: "Goal Setting",
    duration: "20 min",
    level: "Beginner",
    summary: "SMART Goal နဲ့ Team Goal ကို လက်တွေ့အကောင်အထည်ဖော်နည်း။",
    objectives: [
        "SMART Goal",
        "KPI",
        "Deadline",
        "Review"
    ],
    sections: [
        {
            heading: "1. Specific",
            body: "Goal က ရှင်းလင်းရပါမယ်။ 'Sales တိုးမယ်' ထက် 'September Sales ကို 15% တိုးမယ်' က ပိုကောင်းပါတယ်။"
        },
        {
            heading: "2. Measurable",
            body: "Number နဲ့တိုင်းတာလို့ရရပါမယ်။"
        },
        {
            heading: "3. Review",
            body: "Goal သတ်မှတ်ပြီးတာနဲ့ မပြီးပါဘူး။ Weekly Review နဲ့ Corrective Action လုပ်ရပါမယ်။"
        }
    ],
    example: "Monthly Sales ကို 30,000,000 MMK ရောက်အောင် 26 working days အတွင်း Daily Average 1,153,846 MMK ရအောင်လုပ်ခြင်း။",
    managerUse: "Team KPI နဲ့ Individual Development Plan တွေမှာ အသုံးပြုနိုင်ပါတယ်။",
    checklist: [
        "Specific",
        "Measurable",
        "Achievable",
        "Relevant",
        "Time-bound"
    ],
    assignment: "ကိုယ့်အတွက် 30-Day Professional Goal တစ်ခုရေးပါ။",
    takeaways: [
        "Goal ကို Number နဲ့သတ်မှတ်ပါ",
        "Deadline ထားပါ",
        "Weekly Review လုပ်ပါ"
    ]
},

{
    id: 12,
    category: "Strategy",
    title: "Business Problem Solving",
    duration: "30 min",
    level: "Advanced",
    summary: "Business Problem ကို Symptom မဟုတ်ဘဲ Root Cause အထိရှာပြီး ဖြေရှင်းနည်း။",
    objectives: [
        "Problem Definition",
        "Root Cause",
        "5 Why",
        "Action Plan"
    ],
    sections: [
        {
            heading: "1. Define Problem",
            body: "Sales ကျတယ်ဆိုတာ Problem Statement မပြည့်စုံသေးပါဘူး။ ဘယ် Area၊ ဘယ် Product၊ ဘယ် Customer မှာ ဘယ်လောက်ကျတာလဲဆိုတာ သတ်မှတ်ပါ။"
        },
        {
            heading: "2. Root Cause",
            body: "5 Why Method နဲ့ အကြောင်းရင်းအဆင့်ဆင့်ရှာနိုင်ပါတယ်။"
        },
        {
            heading: "3. Action",
            body: "Root Cause ကိုသိပြီးမှ Action Plan ချပါ။ Action တစ်ခုစီမှာ Owner နဲ့ Deadline ထားပါ။"
        }
    ],
    example: "Sales ကျ → Order ကျ → Outlet Visit လျော့ → Rep Coverage မပြည့် → Route Plan မကောင်း ဆိုရင် Root Cause က Route Planning ဖြစ်နိုင်ပါတယ်။",
    managerUse: "Sales Recovery Plan နဲ့ Performance Improvement မှာ အသုံးပြုနိုင်ပါတယ်။",
    checklist: [
        "Problem",
        "Data",
        "Root Cause",
        "Owner",
        "Deadline"
    ],
    assignment: "ကိုယ့်လုပ်ငန်းမှာ ဖြစ်နေတဲ့ Problem တစ်ခုကို 5 Why နဲ့ခွဲပါ။",
    takeaways: [
        "Symptom ကိုပဲ မဖြေရှင်းပါနဲ့",
        "Root Cause ရှာပါ",
        "Action ကို Owner နဲ့တွဲပါ"
    ]
},

{
    id: 13,
    category: "Sales",
    title: "Distributor Management",
    duration: "30 min",
    level: "Advanced",
    summary: "Distributor ရဲ့ Stock, Sales-out, Coverage, AR နဲ့ Business Growth ကို စနစ်တကျစီမံနည်း။",
    objectives: [
        "Distributor KPI",
        "Stock Management",
        "Sales-out",
        "AR Management"
    ],
    sections: [
        {
            heading: "1. Stock",
            body: "Stock များလွန်းရင် Cash Flow နဲ့ Aging Risk ဖြစ်နိုင်ပြီး Stock နည်းလွန်းရင် Availability Problem ဖြစ်နိုင်ပါတယ်။"
        },
        {
            heading: "2. Sales-out",
            body: "Distributor ကို Company ကနေဝယ်တဲ့ Sales-in တစ်ခုတည်းမကြည့်ဘဲ Market ထဲက Sales-out ကိုပါ ကြည့်ရပါမယ်။"
        },
        {
            heading: "3. AR",
            body: "Credit Sales လုပ်တဲ့ Business တွေမှာ Collection နဲ့ Outstanding Aging ကို Sales Result နဲ့အတူ စီမံရပါမယ်။"
        }
    ],
    example: "Distributor Stock 45 Days ရှိပေမယ့် Sales-out ကျနေတယ်ဆိုရင် ထပ်ပြီး Stock Push လုပ်တာထက် Sell-out Recovery ကို အရင်လုပ်သင့်ပါတယ်။",
    managerUse: "Distributor Review နဲ့ Monthly Business Planning မှာ အသုံးပြုနိုင်ပါတယ်။",
    checklist: [
        "Stock Days",
        "Sales-in",
        "Sales-out",
        "Coverage",
        "AR"
    ],
    assignment: "Distributor တစ်ခုအတွက် Weekly KPI Dashboard ရေးပါ။",
    takeaways: [
        "Stock Push မလုပ်ပါနဲ့",
        "Sell-out ကိုကြည့်ပါ",
        "AR ကိုထိန်းပါ"
    ]
},

{
    id: 14,
    category: "People",
    title: "Manager Daily Routine",
    duration: "20 min",
    level: "Beginner",
    summary: "Sales Manager တစ်ယောက်ရဲ့ နေ့စဉ်၊ အပတ်စဉ်၊ လစဉ် Management Routine ကိုတည်ဆောက်နည်း။",
    objectives: [
        "Daily Routine",
        "Weekly Review",
        "Monthly Planning",
        "Time Management"
    ],
    sections: [
        {
            heading: "1. Morning",
            body: "Previous Day Result ကြည့်ခြင်း၊ Today Target သတ်မှတ်ခြင်း၊ Team Priority ပြောခြင်းတို့ကို လုပ်ပါ။"
        },
        {
            heading: "2. Day Time",
            body: "Customer Visit, Team Coaching, Market Observation နဲ့ Key Issue Resolution ကို ဦးစားပေးပါ။"
        },
        {
            heading: "3. Evening",
            body: "Actual Result, Gap, Customer Issue နဲ့ Tomorrow Action ကို Review လုပ်ပါ။"
        }
    ],
    example: "Morning 30 min KPI Review → Field Visit → Customer Meeting → Team Coaching → Evening 20 min Review ဆိုတဲ့ Routine တစ်ခုထားနိုင်ပါတယ်။",
    managerUse: "Time Management နဲ့ Sales Execution အတွက် အသုံးပြုနိုင်ပါတယ်။",
    checklist: [
        "Morning KPI",
        "Field Execution",
        "Customer Visit",
        "Team Coaching",
        "Daily Review"
    ],
    assignment: "ကိုယ့်အတွက် Sales Manager Daily Routine တစ်ခုရေးပါ။",
    takeaways: [
        "နေ့စဉ် KPI ကြည့်ပါ",
        "Field နဲ့ Team နှစ်ခုလုံးကို စီမံပါ",
        "နေ့တိုင်း Review လုပ်ပါ"
    ]
}

];

/* =========================
   STATE
========================= */

let currentPage = "dashboard";

let completedLessons = getStorage(
    STORAGE.completed,
    []
);

let salesData = getStorage(
    STORAGE.sales,
    {
        target: 30000000,
        actual: 22500000,
        workingDays: 26,
        team: [
            { name: "Sales Rep A", target: 10000000, actual: 9000000 },
            { name: "Sales Rep B", target: 10000000, actual: 7500000 },
            { name: "Sales Rep C", target: 10000000, actual: 6000000 }
        ]
    }
);

let settingsData = getStorage(
    STORAGE.settings,
    {
        dailyGoal: 30,
        language: "Myanmar",
        notifications: true
    }
);

let actions = getStorage(
    STORAGE.actions,
    [
        {
            id: 1,
            text: "Top Customer Recovery Plan",
            owner: "Sales Manager",
            deadline: "This Week",
            status: "In Progress"
        },
        {
            id: 2,
            text: "Low Performer Coaching",
            owner: "Sales Manager",
            deadline: "Friday",
            status: "Pending"
        }
    ]
);

/* =========================
   APP CSS
========================= */

function injectAppCSS() {

    if ($("#abaV81Styles")) return;

    const style = document.createElement("style");

    style.id = "abaV81Styles";

    style.textContent = `
        .aba-page {
            display:none !important;
            animation: abaFade .2s ease;
        }

        .aba-page.aba-active {
            display:block !important;
        }

        @keyframes abaFade {
            from { opacity:0; transform:translateY(4px); }
            to { opacity:1; transform:translateY(0); }
        }

        .aba-section-head {
            margin-bottom:24px;
        }

        .aba-section-head h1 {
            margin:0 0 7px;
            font-size:28px;
            font-weight:800;
        }

        .aba-section-head p {
            color:#718096;
            margin:0;
        }

        .aba-grid {
            display:grid;
            grid-template-columns:repeat(auto-fit,minmax(230px,1fr));
            gap:18px;
        }

        .aba-card {
            background:#fff;
            border:1px solid #e8eaf0;
            border-radius:18px;
            padding:20px;
            box-shadow:0 5px 20px rgba(31,41,55,.05);
        }

        .aba-card h3 {
            margin:0 0 8px;
            font-size:18px;
        }

        .aba-card p {
            color:#718096;
            line-height:1.7;
            margin:0;
        }

        .aba-kpi {
            font-size:27px;
            font-weight:800;
            margin:8px 0;
        }

        .aba-label {
            color:#718096;
            font-size:13px;
            font-weight:600;
        }

        .aba-progress {
            height:9px;
            background:#edf0f6;
            border-radius:20px;
            overflow:hidden;
            margin-top:12px;
        }

        .aba-progress span {
            display:block;
            height:100%;
            background:linear-gradient(90deg,#6d4aff,#ec4899);
            border-radius:20px;
        }

        .aba-filter {
            display:flex;
            flex-wrap:wrap;
            gap:8px;
            margin:18px 0 24px;
        }

        .aba-filter button,
        .aba-btn {
            border:0;
            border-radius:10px;
            padding:10px 15px;
            cursor:pointer;
            background:#f1efff;
            color:#5434d6;
            font-weight:700;
        }

        .aba-filter button.active,
        .aba-btn.primary {
            background:#6d4aff;
            color:white;
        }

        .aba-lesson {
            cursor:pointer;
            transition:.2s;
        }

        .aba-lesson:hover {
            transform:translateY(-3px);
            box-shadow:0 12px 28px rgba(31,41,55,.10);
        }

        .aba-tag {
            display:inline-block;
            padding:5px 9px;
            border-radius:20px;
            background:#f3f0ff;
            color:#6545df;
            font-size:11px;
            font-weight:800;
            margin-bottom:12px;
        }

        .aba-small {
            font-size:13px;
            color:#718096;
        }

        .aba-table-wrap {
            overflow-x:auto;
        }

        .aba-table {
            width:100%;
            border-collapse:collapse;
            min-width:650px;
        }

        .aba-table th,
        .aba-table td {
            padding:13px;
            border-bottom:1px solid #edf0f5;
            text-align:left;
        }

        .aba-table th {
            font-size:12px;
            color:#718096;
            text-transform:uppercase;
        }

        .aba-form-grid {
            display:grid;
            grid-template-columns:repeat(auto-fit,minmax(190px,1fr));
            gap:14px;
        }

        .aba-field label {
            display:block;
            font-size:12px;
            font-weight:700;
            margin-bottom:6px;
        }

        .aba-field input,
        .aba-field select,
        .aba-field textarea {
            width:100%;
            border:1px solid #dfe3eb;
            border-radius:10px;
            padding:11px 12px;
            outline:none;
            background:#fff;
        }

        .aba-field textarea {
            min-height:90px;
            resize:vertical;
        }

        .aba-actions {
            display:flex;
            flex-wrap:wrap;
            gap:8px;
            margin-top:15px;
        }

        .aba-action {
            display:flex;
            justify-content:space-between;
            gap:15px;
            padding:14px;
            border:1px solid #edf0f5;
            border-radius:12px;
            margin-top:10px;
        }

        .aba-status {
            font-size:11px;
            font-weight:800;
            color:#6d4aff;
            white-space:nowrap;
        }

        .aba-chat {
            min-height:380px;
            max-height:520px;
            overflow-y:auto;
            background:#f7f8fc;
            border-radius:16px;
            padding:16px;
        }

        .aba-message {
            max-width:90%;
            padding:14px 16px;
            border-radius:15px;
            margin-bottom:12px;
            line-height:1.7;
        }

        .aba-message.user {
            margin-left:auto;
            background:#6d4aff;
            color:white;
        }

        .aba-message.ai {
            background:white;
            border:1px solid #e7eaf1;
        }

        .aba-message h4 {
            margin:0 0 8px;
        }

        .aba-message ul,
        .aba-message ol {
            padding-left:20px;
        }

        .aba-chat-input {
            display:flex;
            gap:8px;
            margin-top:12px;
        }

        .aba-chat-input input {
            flex:1;
            border:1px solid #dfe3eb;
            border-radius:12px;
            padding:13px;
        }

        .aba-modal {
            position:fixed;
            inset:0;
            background:rgba(15,23,42,.55);
            z-index:9999;
            display:none;
            align-items:center;
            justify-content:center;
            padding:20px;
        }

        .aba-modal.show {
            display:flex;
        }

        .aba-modal-box {
            width:min(850px,100%);
            max-height:90vh;
            overflow-y:auto;
            background:#fff;
            border-radius:20px;
            padding:25px;
            position:relative;
        }

        .aba-close {
            position:absolute;
            right:18px;
            top:14px;
            border:0;
            background:#f1f3f7;
            width:35px;
            height:35px;
            border-radius:50%;
            cursor:pointer;
            font-size:20px;
        }

        .aba-detail-section {
            margin-top:22px;
        }

        .aba-detail-section h3 {
            margin-bottom:8px;
        }

        .aba-detail-section p,
        .aba-detail-section li {
            line-height:1.8;
            color:#4a5568;
        }

        .aba-toast {
            position:fixed;
            right:20px;
            bottom:25px;
            background:#172033;
            color:white;
            padding:13px 18px;
            border-radius:10px;
            z-index:10000;
            display:none;
        }

        .aba-toast.show {
            display:block;
        }

        @media(max-width:650px) {
            .aba-section-head h1 {
                font-size:23px;
            }

            .aba-card {
                padding:16px;
            }

            .aba-chat-input {
                flex-direction:column;
            }
        }
    `;

    document.head.appendChild(style);
}

/* =========================
   PAGE SYSTEM
========================= */

function getMainContainer() {

    let main = $("main");

    if (main) return main;

    main = $(".main-content");

    if (main) return main;

    main = $(".content");

    if (main) return main;

    main = document.createElement("main");

    document.body.appendChild(main);

    return main;
}

function createPage(id) {

    let page = document.getElementById(id);

    if (!page) {
        page = document.createElement("section");
        page.id = id;
        getMainContainer().appendChild(page);
    }

    page.classList.add("aba-page");

    return page;
}

function setupPages() {

    const pages = {
        lessonsPage: buildLessonsPage,
        salesPage: buildSalesPage,
        aiPage: buildAIPage,
        settingsPage: buildSettingsPage
    };

    Object.entries(pages).forEach(([id, builder]) => {

        const page = createPage(id);

        if (!page.dataset.abaBuilt) {
            builder(page);
            page.dataset.abaBuilt = "true";
        }
    });
}

/* =========================
   LESSON PAGE
========================= */

function buildLessonsPage(page) {

    page.innerHTML = `
        <div class="aba-section-head">
            <h1>LEARNING CENTER</h1>
            <p>Business Lessons</p>
            <p>အကြောင်းအရာကို နားလည်ရုံမဟုတ်ဘဲ လက်တွေ့အသုံးချနိုင်အောင် လေ့လာပါ။</p>
        </div>

        <div class="aba-filter">
            <button class="active" data-lesson-filter="All">All</button>
            <button data-lesson-filter="Sales">Sales</button>
            <button data-lesson-filter="Strategy">Strategy</button>
            <button data-lesson-filter="People">People</button>
            <button data-lesson-filter="Finance">Finance</button>
        </div>

        <div id="abaLessonGrid" class="aba-grid"></div>
    `;

    $$("[data-lesson-filter]", page).forEach(button => {

        button.addEventListener("click", () => {

            $$("[data-lesson-filter]", page)
                .forEach(b => b.classList.remove("active"));

            button.classList.add("active");

            renderLessons(button.dataset.lessonFilter);
        });
    });

    renderLessons("All");
}

function renderLessons(category = "All") {

    const grid = $("#abaLessonGrid");

    if (!grid) return;

    const list = category === "All"
        ? LESSONS
        : LESSONS.filter(x => x.category === category);

    grid.innerHTML = list.map(lesson => {

        const done = completedLessons.includes(lesson.id);

        return `
            <div class="aba-card aba-lesson"
                 data-lesson-id="${lesson.id}">

                <span class="aba-tag">
                    ${escapeHTML(lesson.category)}
                </span>

                <h3>${escapeHTML(lesson.title)}</h3>

                <p>${escapeHTML(lesson.summary)}</p>

                <div style="margin-top:14px"
                     class="aba-small">
                    ⏱ ${escapeHTML(lesson.duration)}
                    &nbsp; • &nbsp;
                    ${escapeHTML(lesson.level)}
                </div>

                <div style="margin-top:15px">
                    ${
                        done
                        ? `<span class="aba-tag">✓ Completed</span>`
                        : `<button class="aba-btn primary">Learn Lesson →</button>`
                    }
                </div>
            </div>
        `;

    }).join("");

    $$(".aba-lesson", grid).forEach(card => {

        card.addEventListener("click", () => {

            openLesson(
                Number(card.dataset.lessonId)
            );

        });

    });
}

/* =========================
   LESSON MODAL
========================= */

function getModal() {

    let modal = $("#abaLessonModal");

    if (!modal) {

        modal = document.createElement("div");

        modal.id = "abaLessonModal";

        modal.className = "aba-modal";

        modal.innerHTML = `
            <div class="aba-modal-box">

                <button class="aba-close"
                        id="abaModalClose">
                    ×
                </button>

                <div id="abaLessonModalContent"></div>

            </div>
        `;

        document.body.appendChild(modal);

        $("#abaModalClose").addEventListener(
            "click",
            closeLesson
        );

        modal.addEventListener("click", e => {

            if (e.target === modal) {
                closeLesson();
            }

        });
    }

    return modal;
}

function openLesson(id) {

    const lesson = LESSONS.find(x => x.id === id);

    if (!lesson) return;

    const done = completedLessons.includes(id);

    const modal = getModal();

    const content = $("#abaLessonModalContent");

    content.innerHTML = `
        <span class="aba-tag">
            ${escapeHTML(lesson.category)}
        </span>

        <h1>${escapeHTML(lesson.title)}</h1>

        <p class="aba-small">
            ⏱ ${escapeHTML(lesson.duration)}
            &nbsp; • &nbsp;
            ${escapeHTML(lesson.level)}
        </p>

        <div class="aba-detail-section">
            <h3>🎯 Learning Objectives</h3>
            <ul>
                ${lesson.objectives.map(x =>
                    `<li>${escapeHTML(x)}</li>`
                ).join("")}
            </ul>
        </div>

        ${lesson.sections.map(section => `
            <div class="aba-detail-section">
                <h3>${escapeHTML(section.heading)}</h3>
                <p>${escapeHTML(section.body)}</p>
            </div>
        `).join("")}

        <div class="aba-detail-section">
            <h3>💼 Myanmar Business Example</h3>
            <p>${escapeHTML(lesson.example)}</p>
        </div>

        <div class="aba-detail-section">
            <h3>👔 Sales Manager Application</h3>
            <p>${escapeHTML(lesson.managerUse)}</p>
        </div>

        <div class="aba-detail-section">
            <h3>✅ Manager Checklist</h3>
            <ul>
                ${lesson.checklist.map(x =>
                    `<li>${escapeHTML(x)}</li>`
                ).join("")}
            </ul>
        </div>

        <div class="aba-detail-section">
            <h3>📝 Assignment</h3>
            <p>${escapeHTML(lesson.assignment)}</p>
        </div>

        <div class="aba-detail-section">
            <h3>⭐ Key Takeaways</h3>
            <ul>
                ${lesson.takeaways.map(x =>
                    `<li>${escapeHTML(x)}</li>`
                ).join("")}
            </ul>
        </div>

        <div class="aba-actions">
            <button
                class="aba-btn primary"
                id="abaCompleteLesson">
                ${done ? "✓ Completed" : "Mark Lesson Complete"}
            </button>
        </div>
    `;

    $("#abaCompleteLesson").addEventListener(
        "click",
        () => completeLesson(id)
    );

    modal.classList.add("show");
}

function closeLesson() {

    const modal = $("#abaLessonModal");

    if (modal) {
        modal.classList.remove("show");
    }
}

function completeLesson(id) {

    if (!completedLessons.includes(id)) {

        completedLessons.push(id);

        setStorage(
            STORAGE.completed,
            completedLessons
        );

        showToast("Lesson completed successfully ✓");
    }

    closeLesson();

    renderLessons();

    updateDashboardStats();
}

/* =========================
   SALES MANAGER
========================= */

function buildSalesPage(page) {

    page.innerHTML = `
        <div class="aba-section-head">
            <h1>Sales Manager</h1>
            <p>Sales Performance & Team Management</p>
        </div>

        <div id="abaSalesKPIs"
             class="aba-grid"></div>

        <div class="aba-card" style="margin-top:20px">

            <h3>Monthly Sales KPI</h3>

            <div class="aba-form-grid"
                 style="margin-top:15px">

                <div class="aba-field">
                    <label>Monthly Target</label>
                    <input id="abaSalesTarget"
                           type="number">
                </div>

                <div class="aba-field">
                    <label>Actual Sales</label>
                    <input id="abaSalesActual"
                           type="number">
                </div>

                <div class="aba-field">
                    <label>Working Days</label>
                    <input id="abaWorkingDays"
                           type="number">
                </div>

            </div>

            <div class="aba-actions">
                <button class="aba-btn primary"
                        id="abaSaveSales">
                    Save KPI
                </button>
            </div>

        </div>

        <div class="aba-card" style="margin-top:20px">

            <h3>Team Performance</h3>

            <div class="aba-table-wrap"
                 style="margin-top:15px">

                <table class="aba-table">
                    <thead>
                        <tr>
                            <th>Sales Rep</th>
                            <th>Target</th>
                            <th>Actual</th>
                            <th>Achievement</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody id="abaTeamTable"></tbody>

                </table>

            </div>

        </div>

        <div class="aba-card" style="margin-top:20px">

            <h3>Action Plan</h3>

            <div id="abaActionList"></div>

            <div class="aba-form-grid"
                 style="margin-top:15px">

                <div class="aba-field">
                    <label>Action</label>
                    <input id="abaActionText"
                           placeholder="Enter action plan">
                </div>

                <div class="aba-field">
                    <label>Owner</label>
                    <input id="abaActionOwner"
                           value="Sales Manager">
                </div>

                <div class="aba-field">
                    <label>Deadline</label>
                    <input id="abaActionDeadline"
                           placeholder="e.g. Friday">
                </div>

            </div>

            <div class="aba-actions">
                <button class="aba-btn primary"
                        id="abaAddAction">
                    + Add Action
                </button>
            </div>

        </div>
    `;

    $("#abaSaveSales").addEventListener(
        "click",
        saveSalesKPI
    );

    $("#abaAddAction").addEventListener(
        "click",
        addSalesAction
    );

    renderSalesManager();
}

function renderSalesManager() {

    const target = Number(salesData.target || 0);
    const actual = Number(salesData.actual || 0);
    const days = Number(salesData.workingDays || 1);

    const achievement =
        target > 0
            ? (actual / target) * 100
            : 0;

    const gap =
        Math.max(target - actual, 0);

    const dailyTarget =
        target / days;

    const dailyGap =
        gap / days;

    const kpi = $("#abaSalesKPIs");

    if (kpi) {

        kpi.innerHTML = `

            <div class="aba-card">
                <span class="aba-label">MONTHLY TARGET</span>
                <div class="aba-kpi">
                    ${money(target)}
                </div>
            </div>

            <div class="aba-card">
                <span class="aba-label">ACTUAL SALES</span>
                <div class="aba-kpi">
                    ${money(actual)}
                </div>
            </div>

            <div class="aba-card">
                <span class="aba-label">ACHIEVEMENT</span>
                <div class="aba-kpi">
                    ${achievement.toFixed(1)}%
                </div>

                <div class="aba-progress">
                    <span style="width:${Math.min(achievement,100)}%">
                    </span>
                </div>
            </div>

            <div class="aba-card">
                <span class="aba-label">GAP</span>
                <div class="aba-kpi">
                    ${money(gap)}
                </div>
                <p>
                    Daily Recovery:
                    ${money(dailyGap)}
                </p>
            </div>

            <div class="aba-card">
                <span class="aba-label">DAILY TARGET</span>
                <div class="aba-kpi">
                    ${money(dailyTarget)}
                </div>
            </div>

        `;
    }

    if ($("#abaSalesTarget"))
        $("#abaSalesTarget").value = target;

    if ($("#abaSalesActual"))
        $("#abaSalesActual").value = actual;

    if ($("#abaWorkingDays"))
        $("#abaWorkingDays").value = days;

    const table = $("#abaTeamTable");

    if (table) {

        table.innerHTML = salesData.team.map(rep => {

            const ach =
                rep.target > 0
                    ? (rep.actual / rep.target) * 100
                    : 0;

            return `
                <tr>
                    <td>${escapeHTML(rep.name)}</td>
                    <td>${money(rep.target)}</td>
                    <td>${money(rep.actual)}</td>
                    <td>${ach.toFixed(1)}%</td>
                    <td>
                        <span class="aba-tag">
                            ${
                                ach >= 100
                                ? "Excellent"
                                : ach >= 80
                                ? "On Track"
                                : "Needs Coaching"
                            }
                        </span>
                    </td>
                </tr>
            `;

        }).join("");
    }

    renderActions();
}

function saveSalesKPI() {

    salesData.target =
        Number($("#abaSalesTarget").value || 0);

    salesData.actual =
        Number($("#abaSalesActual").value || 0);

    salesData.workingDays =
        Number($("#abaWorkingDays").value || 1);

    setStorage(
        STORAGE.sales,
        salesData
    );

    renderSalesManager();

    showToast("Sales KPI saved ✓");
}

function renderActions() {

    const list = $("#abaActionList");

    if (!list) return;

    if (!actions.length) {

        list.innerHTML =
            `<p class="aba-small">No action plan yet.</p>`;

        return;
    }

    list.innerHTML = actions.map(action => `
        <div class="aba-action">

            <div>
                <strong>
                    ${escapeHTML(action.text)}
                </strong>

                <div class="aba-small">
                    Owner: ${escapeHTML(action.owner)}
                    &nbsp; • &nbsp;
                    Deadline: ${escapeHTML(action.deadline)}
                </div>
            </div>

            <span class="aba-status">
                ${escapeHTML(action.status)}
            </span>

        </div>
    `).join("");
}

function addSalesAction() {

    const text =
        $("#abaActionText").value.trim();

    if (!text) {

        showToast("Please enter an action.");

        return;
    }

    actions.push({
        id: Date.now(),
        text,
        owner:
            $("#abaActionOwner").value.trim()
            || "Sales Manager",
        deadline:
            $("#abaActionDeadline").value.trim()
            || "This Week",
        status: "Pending"
    });

    setStorage(
        STORAGE.actions,
        actions
    );

    $("#abaActionText").value = "";

    $("#abaActionDeadline").value = "";

    renderActions();

    showToast("Action plan added ✓");
}

/* =========================
   AI BUSINESS COACH
========================= */

function buildAIPage(page) {

    page.innerHTML = `
        <div class="aba-section-head">
            <h1>AI Business Coach</h1>
            <p>Business, Sales & Management ကို အသေးစိတ်မေးမြန်းနိုင်ပါတယ်။</p>
        </div>

        <div class="aba-card">

            <div id="abaAIChat"
                 class="aba-chat">

                <div class="aba-message ai">
                    <h4>👋 Aung Business Coach</h4>

                    <p>
                        မင်္ဂလာပါ။ Sales, Marketing, Leadership,
                        Customer Management, Negotiation,
                        Business Strategy နဲ့ KPI တွေကို
                        အသေးစိတ် မေးနိုင်ပါတယ်။
                    </p>

                    <p>
                        ဥပမာ —
                        "Sales target မရရင် ဘာလုပ်ရမလဲ?"
                    </p>
                </div>

            </div>

            <div class="aba-filter">

                <button data-ai-prompt="Sales Target မရရင် ဘာလုပ်ရမလဲ">
                    Sales Target
                </button>

                <button data-ai-prompt="Low performer Sales Rep ကို ဘယ်လို coaching လုပ်ရမလဲ">
                    Team Coaching
                </button>

                <button data-ai-prompt="Customer က discount တောင်းရင် ဘယ်လို negotiation လုပ်ရမလဲ">
                    Negotiation
                </button>

                <button data-ai-prompt="Distributor sales ကျရင် ဘာတွေစစ်ရမလဲ">
                    Distributor
                </button>

            </div>

            <div class="aba-chat-input">

                <input
                    id="abaAIInput"
                    placeholder="Business question ကို ရိုက်ထည့်ပါ...">

                <button
                    class="aba-btn primary"
                    id="abaAISend">
                    Ask AI
                </button>

            </div>

        </div>
    `;

    $("#abaAISend").addEventListener(
        "click",
        sendAIMessage
    );

    $("#abaAIInput").addEventListener(
        "keydown",
        e => {

            if (e.key === "Enter") {
                sendAIMessage();
            }

        }
    );

    $$("[data-ai-prompt]", page).forEach(button => {

        button.addEventListener("click", () => {

            $("#abaAIInput").value =
                button.dataset.aiPrompt;

            sendAIMessage();

        });

    });
}

function sendAIMessage() {

    const input = $("#abaAIInput");

    if (!input) return;

    const question =
        input.value.trim();

    if (!question) return;

    const chat = $("#abaAIChat");

    chat.insertAdjacentHTML(
        "beforeend",
        `
        <div class="aba-message user">
            ${escapeHTML(question)}
        </div>
        `
    );

    const answer =
        getAIResponse(question);

    chat.insertAdjacentHTML(
        "beforeend",
        `
        <div class="aba-message ai">
            ${answer}
        </div>
        `
    );

    input.value = "";

    chat.scrollTop = chat.scrollHeight;
}

function getAIResponse(question) {

    const q = question.toLowerCase();

    if (
        q.includes("target") ||
        q.includes("sales ကျ") ||
        q.includes("sales မရ")
    ) {

        return `
            <h4>📊 Sales Target Recovery Plan</h4>

            <p>
                Target မရတဲ့အခါ Team ကို အပြစ်တင်တာထက်
                Gap ကို Data နဲ့ရှာပြီး Recovery Action
                ချတာက Manager အတွက် ပိုအရေးကြီးပါတယ်။
            </p>

            <h4>1. Gap တွက်ပါ</h4>

            <p>
                Target − Actual = Gap
            </p>

            <h4>2. Gap ကို ခွဲပါ</h4>

            <ul>
                <li>Territory Gap</li>
                <li>Customer Gap</li>
                <li>Product Gap</li>
                <li>Sales Rep Gap</li>
                <li>Distribution Gap</li>
            </ul>

            <h4>3. Action Plan</h4>

            <ol>
                <li>Top Customer Recovery</li>
                <li>Inactive Customer ပြန်ဖွင့်ခြင်း</li>
                <li>Outlet Coverage တိုးခြင်း</li>
                <li>Low Performer Coaching</li>
                <li>Daily Sales Review</li>
            </ol>

            <h4>4. KPI</h4>

            <ul>
                <li>Achievement %</li>
                <li>Daily Sales</li>
                <li>Active Customers</li>
                <li>New Customers</li>
                <li>Average Order Value</li>
            </ul>

            <p>
                <strong>Manager Rule:</strong>
                Problem ကိုရှာ → Root Cause ရှာ →
                Action သတ်မှတ် → Owner ထား → Deadline ထား →
                Result Review လုပ်ပါ။
            </p>
        `;
    }

    if (
        q.includes("coaching") ||
        q.includes("low performer") ||
        q.includes("team")
    ) {

        return `
            <h4>👥 Sales Team Coaching Framework</h4>

            <p>
                Low Performer ကို အပြစ်တင်တာထက်
                Skill Gap နဲ့ Execution Gap ကို ခွဲခြားပါ။
            </p>

            <h4>Step 1 — Diagnose</h4>

            <ul>
                <li>Target နားလည်မှုရှိလား</li>
                <li>Customer Coverage လုံလောက်လား</li>
                <li>Product Knowledge ရှိလား</li>
                <li>Negotiation Skill လိုအပ်လား</li>
                <li>Time Management ကောင်းလား</li>
            </ul>

            <h4>Step 2 — Coach</h4>

            <ol>
                <li>Expectation ရှင်းပြပါ</li>
                <li>Problem ကို Rep ကိုယ်တိုင်ပြောစေပါ</li>
                <li>Solution ကိုအတူရှာပါ</li>
                <li>Action Plan ချပါ</li>
                <li>Deadline သတ်မှတ်ပါ</li>
            </ol>

            <h4>Step 3 — Review</h4>

            <p>
                Weekly Review လုပ်ပြီး Target Achievement,
                Visit, Conversion နဲ့ Customer Growth ကို
                တိုင်းတာပါ။
            </p>
        `;
    }

    if (
        q.includes("discount") ||
        q.includes("negotiation") ||
        q.includes("စျေး")
    ) {

        return `
            <h4>🤝 Negotiation Strategy</h4>

            <p>
                Customer က Discount တောင်းတဲ့အခါ
                ချက်ချင်း Price လျှော့မပေးသင့်ပါဘူး။
            </p>

            <h4>အရင်မေးရမယ့်အချက်များ</h4>

            <ul>
                <li>Customer Volume ဘယ်လောက်လဲ?</li>
                <li>Competitor Offer ဘယ်လောက်လဲ?</li>
                <li>Payment Terms ဘယ်လိုလဲ?</li>
                <li>Customer က ဘာ Value လိုချင်တာလဲ?</li>
            </ul>

            <h4>Win-Win Example</h4>

            <p>
                10% Discount တောင်းလာရင်
                Discount ကို ချက်ချင်းမပေးဘဲ
                Volume Commitment, Payment Condition,
                Promotion Support စတာတွေနဲ့
                Exchange လုပ်နိုင်ပါတယ်။
            </p>

            <h4>Manager Principle</h4>

            <p>
                Price ကိုပဲ မရောင်းပါနဲ့။
                <strong>Value ကိုရောင်းပါ။</strong>
            </p>
        `;
    }

    if (
        q.includes("distributor") ||
        q.includes("stock") ||
        q.includes("ar")
    ) {

        return `
            <h4>🚚 Distributor Diagnosis</h4>

            <p>
                Distributor Sales ကျရင် Stock Push လုပ်တာတစ်ခုတည်း
                မလုပ်သင့်ပါဘူး။ အောက်ပါ KPI တွေကို စစ်ပါ။
            </p>

            <ul>
                <li>Stock Days</li>
                <li>Sales-in</li>
                <li>Sales-out</li>
                <li>Active Outlet</li>
                <li>Distribution Coverage</li>
                <li>AR / Outstanding</li>
                <li>Competitor Activity</li>
            </ul>

            <h4>Action</h4>

            <ol>
                <li>Stock Aging စစ်ပါ</li>
                <li>Sales-out Data ကြည့်ပါ</li>
                <li>Inactive Outlet ရှာပါ</li>
                <li>Competitor Activity စစ်ပါ</li>
                <li>Recovery Plan ချပါ</li>
            </ol>
        `;
    }

    return `
        <h4>💡 Business Coach Answer</h4>

        <p>
            ဒီ Business Problem ကို Manager Framework နဲ့
            ဖြေရှင်းနိုင်ပါတယ်။
        </p>

        <h4>1. Define the Problem</h4>
        <p>
            ဘာဖြစ်နေတယ်ဆိုတာ Data နဲ့ တိတိကျကျသတ်မှတ်ပါ။
        </p>

        <h4>2. Analyze</h4>
        <p>
            People, Customer, Product, Market, Process
            ဆိုပြီး ခွဲခြမ်းစိတ်ဖြာပါ။
        </p>

        <h4>3. Find Root Cause</h4>
        <p>
            Symptom ကိုမဟုတ်ဘဲ အဓိကအကြောင်းရင်းကိုရှာပါ။
        </p>

        <h4>4. Action Plan</h4>

        <ol>
            <li>Action တစ်ခုသတ်မှတ်ပါ</li>
            <li>Owner သတ်မှတ်ပါ</li>
            <li>Deadline သတ်မှတ်ပါ</li>
            <li>KPI သတ်မှတ်ပါ</li>
            <li>Result Review လုပ်ပါ</li>
        </ol>

        <p>
            မေးခွန်းကို ပိုတိကျအောင်
            <strong>Business Problem + Current Result + Target</strong>
            ပုံစံနဲ့ရေးပေးရင် ပိုအသေးစိတ်
            Action Plan ထုတ်ပေးနိုင်ပါတယ်။
        </p>
    `;
}

/* =========================
   SETTINGS
========================= */

function buildSettingsPage(page) {

    page.innerHTML = `
        <div class="aba-section-head">
            <h1>Settings</h1>
            <p>Aung Business Academy preferences</p>
        </div>

        <div class="aba-grid">

            <div class="aba-card">

                <h3>👤 Profile</h3>

                <div class="aba-form-grid"
                     style="margin-top:15px">

                    <div class="aba-field">
                        <label>Name</label>
                        <input value="Aung Zar Ni Win"
                               readonly>
                    </div>

                    <div class="aba-field">
                        <label>Role</label>
                        <input value="Business Manager"
                               readonly>
                    </div>

                </div>

            </div>

            <div class="aba-card">

                <h3>📚 Learning</h3>

                <div class="aba-field"
                     style="margin-top:15px">

                    <label>
                        Daily Learning Goal (Minutes)
                    </label>

                    <input
                        id="abaDailyGoal"
                        type="number"
                        min="5"
                        value="${settingsData.dailyGoal}">

                </div>

            </div>

            <div class="aba-card">

                <h3>🌐 Language</h3>

                <div class="aba-field"
                     style="margin-top:15px">

                    <label>App Language</label>

                    <select id="abaLanguage">

                        <option
                            ${
                                settingsData.language === "Myanmar"
                                ? "selected"
                                : ""
                            }>
                            Myanmar
                        </option>

                        <option
                            ${
                                settingsData.language === "English"
                                ? "selected"
                                : ""
                            }>
                            English
                        </option>

                    </select>

                </div>

            </div>

            <div class="aba-card">

                <h3>🔔 Notifications</h3>

                <div style="margin-top:15px">

                    <label>
                        <input
                            type="checkbox"
                            id="abaNotifications"
                            ${
                                settingsData.notifications
                                ? "checked"
                                : ""
                            }>
                        Enable learning notifications
                    </label>

                </div>

            </div>

        </div>

        <div class="aba-actions"
             style="margin-top:20px">

            <button
                class="aba-btn primary"
                id="abaSaveSettings">
                Save Settings
            </button>

        </div>
    `;

    $("#abaSaveSettings").addEventListener(
        "click",
        saveSettings
    );
}

function saveSettings() {

    settingsData.dailyGoal =
        Number($("#abaDailyGoal").value || 30);

    settingsData.language =
        $("#abaLanguage").value;

    settingsData.notifications =
        $("#abaNotifications").checked;

    setStorage(
        STORAGE.settings,
        settingsData
    );

    showToast("Settings saved ✓");
}

/* =========================
   NAVIGATION
========================= */

function normalizePage(text) {

    const value =
        String(text || "")
            .trim()
            .toLowerCase();

    if (value.includes("dashboard"))
        return "dashboard";

    if (value.includes("course"))
        return "courses";

    if (
        value.includes("lesson") ||
        value.includes("learning")
    )
        return "lessons";

    if (value.includes("progress"))
        return "progress";

    if (value.includes("sales"))
        return "sales";

    if (
        value.includes("pricing") ||
        value.includes("calculator")
    )
        return "calculator";

    if (value.includes("report"))
        return "reports";

    if (
        value.includes("ai business") ||
        value.includes("coach")
    )
        return "ai";

    if (value.includes("ai tool"))
        return "tools";

    if (value.includes("setting"))
        return "settings";

    return null;
}

function setupNavigation() {

    const candidates = $$(
        "[data-page], .nav-item, .sidebar a, .sidebar button"
    );

    candidates.forEach(item => {

        let page =
            item.dataset.page ||
            item.dataset.target ||
            normalizePage(item.textContent);

        if (!page) return;

        item.dataset.abaPage = page;

        item.addEventListener("click", e => {

            e.preventDefault();

            navigate(page);

        });

    });
}

function findExistingPage(page) {

    const map = {
        dashboard: [
            "#dashboardPage",
            '[data-page-section="dashboard"]'
        ],
        courses: [
            "#coursesPage",
            '[data-page-section="courses"]'
        ],
        lessons: [
            "#lessonsPage",
            '[data-page-section="lessons"]'
        ],
        progress: [
            "#progressPage",
            '[data-page-section="progress"]'
        ],
        sales: [
            "#salesPage",
            '[data-page-section="sales"]'
        ],
        calculator: [
            "#calculatorPage",
            '[data-page-section="calculator"]'
        ],
        reports: [
            "#reportsPage",
            '[data-page-section="reports"]'
        ],
        ai: [
            "#aiPage",
            '[data-page-section="ai"]'
        ],
        tools: [
            "#toolsPage",
            '[data-page-section="tools"]'
        ],
        settings: [
            "#settingsPage",
            '[data-page-section="settings"]'
        ]
    };

    for (const selector of map[page] || []) {

        const found = $(selector);

        if (found) return found;
    }

    return null;
}

function navigate(page) {

    currentPage = page;

    /*
       Hide existing pages
    */

    $$(
        "#dashboardPage, #coursesPage, #lessonsPage, #progressPage, #salesPage, #calculatorPage, #reportsPage, #aiPage, #toolsPage, #settingsPage, [data-page-section]"
    ).forEach(section => {

        section.classList.remove("aba-active");

        if (
            section.id === "lessonsPage" ||
            section.id === "salesPage" ||
            section.id === "aiPage" ||
            section.id === "settingsPage"
        ) {
            section.classList.add("aba-page");
        }
    });

    /*
       Show requested page
    */

    let target =
        findExistingPage(page);

    /*
       If core page does not exist,
       create a simple fallback.
    */

    if (!target) {

        if (page === "lessons") {
            target = createPage("lessonsPage");
            buildLessonsPage(target);
        }

        if (page === "sales") {
            target = createPage("salesPage");
            buildSalesPage(target);
        }

        if (page === "ai") {
            target = createPage("aiPage");
            buildAIPage(target);
        }

        if (page === "settings") {
            target = createPage("settingsPage");
            buildSettingsPage(target);
        }
    }

    if (target) {

        target.classList.add("aba-active");

        /*
           Important:
           Existing CSS may use display:none.
           Force our active page visible.
        */

        target.style.display = "block";
    }

    /*
       Active navigation
    */

    $$("[data-aba-page]").forEach(item => {

        item.classList.toggle(
            "active",
            item.dataset.abaPage === page
        );

    });

    /*
       Page-specific refresh
    */

    if (page === "lessons")
        renderLessons("All");

    if (page === "sales")
        renderSalesManager();

    if (page === "settings")
        buildSettingsPage($("#settingsPage"));

    updatePageTitle(page);

    closeSidebarIfPossible();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function updatePageTitle(page) {

    const names = {
        dashboard: "Dashboard",
        courses: "My Courses",
        lessons: "Lessons",
        progress: "My Progress",
        sales: "Sales Manager",
        calculator: "Pricing Calculator",
        reports: "Reports",
        ai: "AI Business Coach",
        tools: "AI Tools",
        settings: "Settings"
    };

    document.title =
        "Aung Business Academy - " +
        (names[page] || "Business Academy");
}

/* =========================
   DASHBOARD STATS
========================= */

function updateDashboardStats() {

    const completed =
        completedLessons.length;

    const total =
        LESSONS.length;

    const percentage =
        total
            ? Math.round(
                completed / total * 100
            )
            : 0;

    const possibleSelectors = [
        "#completedLessons",
        "#completedCount",
        "[data-stat='completed']"
    ];

    possibleSelectors.forEach(selector => {

        const el = $(selector);

        if (el) {
            el.textContent = completed;
        }

    });

    $$("[data-stat='lessons']").forEach(el => {
        el.textContent = total;
    });

    $$("[data-stat='progress']").forEach(el => {
        el.textContent = percentage + "%";
    });
}

/* =========================
   AI TOOLS
========================= */

function setupAITools() {

    const toolsPage =
        findExistingPage("tools");

    if (!toolsPage) return;

    if (
        toolsPage.dataset.abaToolsBuilt
    ) return;

    toolsPage.dataset.abaToolsBuilt = "true";

    toolsPage.innerHTML = `
        <div class="aba-section-head">
            <h1>AI Tools</h1>
            <p>Sales Manager နဲ့ Business Management အတွက် အသုံးဝင်တဲ့ Tools</p>
        </div>

        <div class="aba-grid">

            <div class="aba-card">
                <h3>📊 Sales Target Calculator</h3>
                <p>
                    Monthly Target ကို Daily Target
                    အဖြစ်တွက်ချက်ပါ။
                </p>
                <div class="aba-actions">
                    <button class="aba-btn primary"
                            data-tool-action="sales">
                        Open Tool
                    </button>
                </div>
            </div>

            <div class="aba-card">
                <h3>💰 Profit Calculator</h3>
                <p>
                    Sales, Cost နဲ့ Gross Profit
                    ကိုတွက်ချက်ပါ။
                </p>
                <div class="aba-actions">
                    <button class="aba-btn primary"
                            data-tool-action="profit">
                        Open Tool
                    </button>
                </div>
            </div>

            <div class="aba-card">
                <h3>📈 Break-even Calculator</h3>
                <p>
                    Business Break-even Sales ကို
                    တွက်ချက်ပါ။
                </p>
                <div class="aba-actions">
                    <button class="aba-btn primary"
                            data-tool-action="break">
                        Open Tool
                    </button>
                </div>
            </div>

            <div class="aba-card">
                <h3>🤖 AI Business Coach</h3>
                <p>
                    Business Problem ကို
                    Step-by-step မေးမြန်းနိုင်ပါတယ်။
                </p>
                <div class="aba-actions">
                    <button class="aba-btn primary"
                            data-tool-action="coach">
                        Ask Coach
                    </button>
                </div>
            </div>

        </div>
    `;

    $$("[data-tool-action]", toolsPage)
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const action =
                        button.dataset.toolAction;

                    if (action === "coach")
                        navigate("ai");

                    if (action === "sales")
                        showCalculator("Sales Target");

                    if (action === "profit")
                        showCalculator("Profit");

                    if (action === "break")
                        showCalculator("Break-even");

                }
            );

        });
}

function showCalculator(type) {

    let formula = "";

    if (type === "Sales Target") {
        formula = `
            <h3>Sales Target Calculator</h3>
            <p>
                Monthly Target ÷ Working Days
                = Daily Target
            </p>
        `;
    }

    if (type === "Profit") {
        formula = `
            <h3>Profit Calculator</h3>
            <p>
                Sales − Cost = Gross Profit
            </p>
        `;
    }

    if (type === "Break-even") {
        formula = `
            <h3>Break-even Calculator</h3>
            <p>
                Fixed Cost ÷ Contribution Margin
                = Break-even Sales
            </p>
        `;
    }

    const modal = getSimpleModal();

    $("#abaSimpleModalContent").innerHTML =
        formula;

    modal.classList.add("show");
}

function getSimpleModal() {

    let modal = $("#abaSimpleModal");

    if (!modal) {

        modal = document.createElement("div");

        modal.id = "abaSimpleModal";

        modal.className = "aba-modal";

        modal.innerHTML = `
            <div class="aba-modal-box">

                <button class="aba-close"
                        id="abaSimpleClose">
                    ×
                </button>

                <div id="abaSimpleModalContent"></div>

            </div>
        `;

        document.body.appendChild(modal);

        $("#abaSimpleClose").onclick =
            () => modal.classList.remove("show");
    }

    return modal;
}

/* =========================
   SIDEBAR / MOBILE
========================= */

function setupMobileMenu() {

    const menu =
        $("#mobileMenu") ||
        $(".mobile-menu") ||
        $(".menu-toggle");

    if (!menu) return;

    menu.addEventListener(
        "click",
        () => {

            const sidebar =
                $("#sidebar") ||
                $(".sidebar");

            if (sidebar) {
                sidebar.classList.toggle("open");
                sidebar.classList.toggle("active");
            }

        }
    );
}

function closeSidebarIfPossible() {

    const sidebar =
        $("#sidebar") ||
        $(".sidebar");

    if (!sidebar) return;

    sidebar.classList.remove("open");
}

/* =========================
   TOAST
========================= */

function showToast(message) {

    let toast = $("#abaToast");

    if (!toast) {

        toast =
            document.createElement("div");

        toast.id = "abaToast";

        toast.className =
            "aba-toast";

        document.body.appendChild(toast);
    }

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(
        window.abaToastTimer
    );

    window.abaToastTimer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 2500);
}

/* =========================
   SEARCH
========================= */

function setupSearch() {

    const search =
        $("#globalSearch") ||
        $("#academySearch");

    if (!search) return;

    search.addEventListener(
        "input",
        () => {

            const value =
                search.value.trim().toLowerCase();

            if (!value) return;

            const result =
                LESSONS.find(lesson =>
                    (
                        lesson.title +
                        " " +
                        lesson.summary +
                        " " +
                        lesson.category
                    )
                    .toLowerCase()
                    .includes(value)
                );

            if (result) {

                navigate("lessons");

                setTimeout(() => {
                    openLesson(result.id);
                }, 150);
            }

        }
    );
}

/* =========================
   GLOBAL EXPORTS
========================= */

window.navigate = navigate;
window.openLesson = openLesson;
window.closeLesson = closeLesson;
window.completeLesson = completeLesson;
window.sendAIMessage = sendAIMessage;
window.saveSalesKPI = saveSalesKPI;
window.addSalesAction = addSalesAction;
window.saveSettings = saveSettings;
window.showToast = showToast;

/* =========================
   INITIALIZE
========================= */

function initializeAungAcademy() {

    injectAppCSS();

    setupPages();

    setupNavigation();

    setupMobileMenu();

    setupSearch();

    setupAITools();

    updateDashboardStats();

    /*
       If existing dashboard exists,
       show it first.
    */

    navigate("dashboard");

    console.log(
        "Aung Business Academy V8.1 initialized successfully."
    );
}

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
