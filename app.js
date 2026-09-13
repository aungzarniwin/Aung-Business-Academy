/* =========================================================
   AUNG BUSINESS ACADEMY
   APP.JS - V8.5 CLICK FIX + LEARNING CENTER
   ========================================================= */

"use strict";

/* =========================================================
   GLOBAL CONFIG
   ========================================================= */

const ABA = {
    version: "8.5",
    storage: {
        completed: "aba_completed_lessons",
        sales: "aba_sales_data",
        settings: "aba_settings"
    }
};

/* =========================================================
   LESSON DATA
   ========================================================= */

const LESSONS = [
    {
        id: 1,
        category: "Business Basics",
        title: "Business ဆိုတာဘာလဲ",
        content: `
            <h3>Business ဆိုတာဘာလဲ?</h3>
            <p>Business ဆိုတာ Customer ရဲ့လိုအပ်ချက်ကို ဖြည့်ဆည်းပေးပြီး Value ဖန်တီးကာ အမြတ်ရရှိအောင် လုပ်ဆောင်ခြင်းဖြစ်ပါတယ်။</p>
            <p>Business တစ်ခုအောင်မြင်ဖို့ Customer, Product, Price, Distribution နဲ့ People တွေကို စနစ်တကျစီမံရပါတယ်။</p>
        `
    },
    {
        id: 2,
        category: "Business Basics",
        title: "Customer ကို နားလည်ခြင်း",
        content: `
            <h3>Customer Understanding</h3>
            <p>Customer ဘာလိုချင်သလဲ၊ ဘာကြောင့်ဝယ်သလဲ၊ ဘာကြောင့်မဝယ်သလဲဆိုတာ နားလည်ဖို့လိုပါတယ်။</p>
            <p>Customer Need ကိုနားလည်တဲ့ Business က Market မှာ ပိုပြီး Competitive ဖြစ်နိုင်ပါတယ်။</p>
        `
    },
    {
        id: 3,
        category: "Business Basics",
        title: "Value Proposition",
        content: `
            <h3>Value Proposition</h3>
            <p>Customer က သင့် Product သို့မဟုတ် Service ကို ဘာကြောင့်ရွေးချယ်သင့်သလဲဆိုတဲ့ အဓိကအကြောင်းပြချက်ကို Value Proposition လို့ခေါ်ပါတယ်။</p>
        `
    },
    {
        id: 4,
        category: "Business Basics",
        title: "Business Model",
        content: `
            <h3>Business Model</h3>
            <p>Business Model ဆိုတာ Business က ဘယ်လို Value ဖန်တီးမလဲ၊ Customer ဆီဘယ်လိုရောက်မလဲ၊ Revenue ဘယ်လိုရမလဲဆိုတာ သတ်မှတ်ထားတဲ့ပုံစံဖြစ်ပါတယ်။</p>
        `
    },
    {
        id: 5,
        category: "Business Basics",
        title: "Revenue နှင့် Profit",
        content: `
            <h3>Revenue vs Profit</h3>
            <p><strong>Revenue</strong> ဆိုတာ ရောင်းအားကရတဲ့ စုစုပေါင်းဝင်ငွေပါ။</p>
            <p><strong>Profit</strong> ဆိုတာ Revenue ထဲက Cost တွေကိုနုတ်ပြီး ကျန်တဲ့အမြတ်ပါ။</p>
        `
    },

    {
        id: 6,
        category: "Strategic Thinking",
        title: "Business Strategy အခြေခံ",
        content: `
            <h3>Strategy ဆိုတာဘာလဲ?</h3>
            <p>Strategy ဆိုတာ ရည်မှန်းချက်ကိုရောက်ရှိဖို့ ဘယ်လိုယှဉ်ပြိုင်မလဲ၊ ဘယ်နေရာမှာ အာရုံစိုက်မလဲဆိုတာ ဆုံးဖြတ်ခြင်းဖြစ်ပါတယ်။</p>
        `
    },
    {
        id: 7,
        category: "Strategic Thinking",
        title: "SWOT Analysis",
        content: `
            <h3>SWOT Analysis</h3>
            <p><strong>Strengths</strong> - ကိုယ့်ရဲ့အားသာချက်</p>
            <p><strong>Weaknesses</strong> - အားနည်းချက်</p>
            <p><strong>Opportunities</strong> - အခွင့်အရေး</p>
            <p><strong>Threats</strong> - ခြိမ်းခြောက်မှု</p>
        `
    },
    {
        id: 8,
        category: "Strategic Thinking",
        title: "Competitive Advantage",
        content: `
            <h3>Competitive Advantage</h3>
            <p>Competitor တွေထက် ကိုယ့် Business ကို ထူးခြားစေတဲ့ အားသာချက်ကို Competitive Advantage လို့ခေါ်ပါတယ်။</p>
        `
    },
    {
        id: 9,
        category: "Strategic Thinking",
        title: "Goal Setting",
        content: `
            <h3>SMART Goal</h3>
            <p>Goal တစ်ခုသတ်မှတ်ရာမှာ Specific, Measurable, Achievable, Relevant, Time-bound ဖြစ်သင့်ပါတယ်။</p>
        `
    },
    {
        id: 10,
        category: "Strategic Thinking",
        title: "Business Planning",
        content: `
            <h3>Business Planning</h3>
            <p>Business Plan မှာ Goal, Target Customer, Product, Marketing, Sales, Cost, Revenue နဲ့ Action Plan တွေပါဝင်သင့်ပါတယ်။</p>
        `
    },

    {
        id: 11,
        category: "Sales",
        title: "Sales Management အခြေခံ",
        content: `
            <h3>Sales Management</h3>
            <p>Sales Manager ရဲ့အဓိကတာဝန်က Target ကို Team Execution အဖြစ် ပြောင်းလဲပေးနိုင်ဖို့ ဖြစ်ပါတယ်။</p>
            <p>People + Numbers + Execution ဆိုတဲ့ အချက်သုံးချက်ကို အမြဲကြည့်ရပါတယ်။</p>
        `
    },
    {
        id: 12,
        category: "Sales",
        title: "Sales Target ချမှတ်ခြင်း",
        content: `
            <h3>Sales Target</h3>
            <p>Monthly Target ကို Weekly Target နဲ့ Daily Execution အဖြစ် ခွဲချနိုင်ရင် Team Performance ကို ပိုမိုကောင်းမွန်စွာ ထိန်းချုပ်နိုင်ပါတယ်။</p>
        `
    },
    {
        id: 13,
        category: "Sales",
        title: "Sales Funnel",
        content: `
            <h3>Sales Funnel</h3>
            <p>Prospect → Contact → Presentation → Negotiation → Closing → Repeat Customer ဆိုတဲ့ အဆင့်တွေနဲ့ Sales Funnel ကို စီမံနိုင်ပါတယ်။</p>
        `
    },
    {
        id: 14,
        category: "Sales",
        title: "Customer Visit Planning",
        content: `
            <h3>Customer Visit Planning</h3>
            <p>Customer Visit မတိုင်ခင် Objective သတ်မှတ်ပါ။ Visit ပြီးတဲ့အခါ Action Point, Responsible Person နဲ့ Deadline သတ်မှတ်ပါ။</p>
        `
    },
    {
        id: 15,
        category: "Sales",
        title: "Sales Team Coaching",
        content: `
            <h3>Sales Team Coaching</h3>
            <p>Manager က Team ကို Micromanage လုပ်တာထက် Clear Expectation, Coaching, Feedback နဲ့ Accountability ကို တည်ဆောက်သင့်ပါတယ်။</p>
        `
    },

    {
        id: 16,
        category: "Marketing",
        title: "Marketing အခြေခံ",
        content: `
            <h3>Marketing</h3>
            <p>Marketing ဆိုတာ Customer ကိုနားလည်ပြီး သင့် Product ရဲ့ Value ကို သင့်တော်တဲ့ Market ဆီ ရောက်အောင် ဆက်သွယ်ပေးခြင်းဖြစ်ပါတယ်။</p>
        `
    },
    {
        id: 17,
        category: "Marketing",
        title: "4Ps Marketing",
        content: `
            <h3>Marketing Mix - 4Ps</h3>
            <p><strong>Product</strong> - ဘာရောင်းမလဲ</p>
            <p><strong>Price</strong> - ဘယ်လောက်နဲ့ရောင်းမလဲ</p>
            <p><strong>Place</strong> - ဘယ်နေရာမှာရောင်းမလဲ</p>
            <p><strong>Promotion</strong> - ဘယ်လိုကြော်ငြာမလဲ</p>
        `
    },
    {
        id: 18,
        category: "Marketing",
        title: "Brand Building",
        content: `
            <h3>Brand Building</h3>
            <p>Brand ဆိုတာ Logo တစ်ခုတည်းမဟုတ်ပါဘူး။ Customer ရဲ့စိတ်ထဲမှာ သင့် Business နဲ့ပတ်သက်ပြီး ဖြစ်ပေါ်နေတဲ့ Perception ဖြစ်ပါတယ်။</p>
        `
    },
    {
        id: 19,
        category: "Marketing",
        title: "Digital Marketing",
        content: `
            <h3>Digital Marketing</h3>
            <p>Facebook, TikTok, YouTube, Website နဲ့ Search တို့ကို အသုံးပြုပြီး Customer ကို ရောက်ရှိအောင် Marketing လုပ်နိုင်ပါတယ်။</p>
        `
    },
    {
        id: 20,
        category: "Marketing",
        title: "Customer Acquisition",
        content: `
            <h3>Customer Acquisition</h3>
            <p>Customer အသစ်ရရှိဖို့ Advertising, Referral, Content, Sales Outreach နဲ့ Partnership စတဲ့ Channel တွေကို အသုံးပြုနိုင်ပါတယ်။</p>
        `
    },

    {
        id: 21,
        category: "People Management",
        title: "Leadership အခြေခံ",
        content: `
            <h3>Leadership</h3>
            <p>Leader တစ်ယောက်ဟာ အမိန့်ပေးသူတစ်ယောက်ထက် Team ကို Direction ပေးပြီး Performance ရရှိအောင် လူတွေကို ဖွံ့ဖြိုးပေးနိုင်သူ ဖြစ်ပါတယ်။</p>
        `
    },
    {
        id: 22,
        category: "People Management",
        title: "Team Motivation",
        content: `
            <h3>Team Motivation</h3>
            <p>Team Motivation အတွက် Recognition, Clear Goal, Fair Reward, Growth Opportunity နဲ့ Regular Feedback တွေလိုအပ်ပါတယ်။</p>
        `
    },
    {
        id: 23,
        category: "People Management",
        title: "Performance Management",
        content: `
            <h3>Performance Management</h3>
            <p>KPI သတ်မှတ်ပြီး Regular Review ပြုလုပ်ပါ။ Gap ရှိရင် Root Cause ရှာပြီး Corrective Action ချမှတ်ပါ။</p>
        `
    },
    {
        id: 24,
        category: "People Management",
        title: "Delegation",
        content: `
            <h3>Delegation</h3>
            <p>Manager က အလုပ်အားလုံးကို ကိုယ်တိုင်လုပ်တာမဟုတ်ပါဘူး။ သင့်တော်တဲ့လူကို သင့်တော်တဲ့တာဝန်ပေးပြီး Result ကို Follow-up လုပ်ရပါတယ်။</p>
        `
    },
    {
        id: 25,
        category: "People Management",
        title: "Conflict Management",
        content: `
            <h3>Conflict Management</h3>
            <p>Conflict ဖြစ်လာတဲ့အခါ လူကိုမတိုက်ခိုက်ဘဲ Problem ကို အာရုံစိုက်ပါ။ နှစ်ဖက်စလုံးရဲ့အမြင်ကို နားထောင်ပြီး Fact အပေါ်မှာ ဆုံးဖြတ်ပါ။</p>
        `
    },

    {
        id: 26,
        category: "Finance",
        title: "Profit Margin",
        content: `
            <h3>Profit Margin</h3>
            <p>Profit Margin = Profit ÷ Revenue × 100</p>
            <p>Margin ကိုသိထားခြင်းက Pricing နဲ့ Business Decision တွေအတွက် အရေးကြီးပါတယ်။</p>
        `
    },
    {
        id: 27,
        category: "Finance",
        title: "Break-even Point",
        content: `
            <h3>Break-even</h3>
            <p>Break-even ဆိုတာ Revenue နဲ့ Total Cost တူညီတဲ့အချိန် ဖြစ်ပါတယ်။ အဲ့ဒီအချိန်မှာ Profit မရသေးသလို Loss လည်း မဖြစ်သေးပါဘူး။</p>
        `
    },
    {
        id: 28,
        category: "Finance",
        title: "Cash Flow",
        content: `
            <h3>Cash Flow</h3>
            <p>Profit ရှိနေရုံနဲ့ မလုံလောက်ပါဘူး။ Business ရဲ့ Cash Inflow နဲ့ Cash Outflow ကိုလည်း စနစ်တကျ စီမံရပါတယ်။</p>
        `
    },
    {
        id: 29,
        category: "Finance",
        title: "Cost Control",
        content: `
            <h3>Cost Control</h3>
            <p>Cost လျှော့ချရာမှာ Business Growth ကို ထိခိုက်မသွားအောင် လိုအပ်တဲ့ Cost နဲ့ မလိုအပ်တဲ့ Cost ကို ခွဲခြားရပါတယ်။</p>
        `
    },
    {
        id: 30,
        category: "Finance",
        title: "Business KPI Dashboard",
        content: `
            <h3>KPI Dashboard</h3>
            <p>Sales, Revenue, Profit, Margin, Customer, Conversion Rate နဲ့ Team Performance စတဲ့ KPI တွေကို Dashboard မှာ စောင့်ကြည့်နိုင်ပါတယ်။</p>
        `
    }
];

/* =========================================================
   PAGE MAP
   ========================================================= */

const PAGE_MAP = {
    "dashboard": "dashboardPage",
    "my courses": "coursesPage",
    "courses": "coursesPage",
    "lessons": "lessonsPage",
    "my progress": "progressPage",
    "progress": "progressPage",
    "sales manager": "salesPage",
    "sales": "salesPage",
    "pricing calculator": "calculatorPage",
    "calculator": "calculatorPage",
    "reports": "reportsPage",
    "ai business coach": "aiPage",
    "ai coach": "aiPage",
    "ai": "aiPage",
    "ai tools": "toolsPage",
    "tools": "toolsPage",
    "settings": "settingsPage"
};

/* =========================================================
   HELPERS
   ========================================================= */

function $(selector) {
    return document.querySelector(selector);
}

function $all(selector) {
    return Array.from(document.querySelectorAll(selector));
}

function normalizeText(value) {
    return String(value || "")
        .replace(/\s+/g, " ")
        .trim()
        .toLowerCase();
}

function escapeHTML(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function getCompletedLessons() {
    try {
        const data = JSON.parse(
            localStorage.getItem(ABA.storage.completed) || "[]"
        );

        return Array.isArray(data) ? data.map(Number) : [];
    } catch (error) {
        return [];
    }
}

function saveCompletedLessons(data) {
    localStorage.setItem(
        ABA.storage.completed,
        JSON.stringify(data)
    );
}

function showToast(message) {
    let toast = document.getElementById("toast");

    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        document.body.appendChild(toast);
    }

    toast.textContent = message;

    toast.style.position = "fixed";
    toast.style.left = "50%";
    toast.style.bottom = "25px";
    toast.style.transform = "translateX(-50%)";
    toast.style.zIndex = "99999";
    toast.style.background = "#172033";
    toast.style.color = "#fff";
    toast.style.padding = "12px 20px";
    toast.style.borderRadius = "12px";
    toast.style.fontSize = "14px";
    toast.style.boxShadow = "0 10px 30px rgba(0,0,0,.2)";

    clearTimeout(window.__abaToastTimer);

    window.__abaToastTimer = setTimeout(() => {
        toast.style.opacity = "0";

        setTimeout(() => {
            toast.style.opacity = "1";
        }, 250);
    }, 2200);
}

/* =========================================================
   CLICK FIX CSS
   ========================================================= */

function installClickFixCSS() {

    if (document.getElementById("abaClickFixCSS")) {
        return;
    }

    const style = document.createElement("style");

    style.id = "abaClickFixCSS";

    style.textContent = `
        /* AUNG BUSINESS ACADEMY CLICK FIX */

        .sidebar {
            position: fixed !important;
            z-index: 10000 !important;
            pointer-events: auto !important;
        }

        .sidebar * {
            pointer-events: auto !important;
        }

        .sidebar .nav-item,
        .sidebar a,
        .sidebar button {
            position: relative !important;
            z-index: 10001 !important;
            pointer-events: auto !important;
            cursor: pointer !important;
        }

        .bottom-nav,
        .mobile-bottom-nav {
            position: fixed !important;
            z-index: 10000 !important;
        }

        .bottom-nav *,
        .mobile-bottom-nav * {
            pointer-events: auto !important;
        }

        #sidebarOverlay {
            z-index: 9990 !important;
        }

        .main,
        .main-content,
        .content,
        .app-main {
            position: relative;
            z-index: 1;
        }

        .aba-page {
            width: 100%;
        }

        .aba-clickable {
            cursor: pointer !important;
        }

        .aba-lesson-card {
            cursor: pointer !important;
            transition: .2s ease;
        }

        .aba-lesson-card:hover {
            transform: translateY(-2px);
        }

        .aba-lesson-card button {
            position: relative;
            z-index: 2;
        }

        .aba-modal {
            position: fixed;
            inset: 0;
            z-index: 50000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            background: rgba(15,23,42,.65);
        }

        .aba-modal-box {
            width: min(700px, 100%);
            max-height: 85vh;
            overflow-y: auto;
            background: white;
            border-radius: 20px;
            padding: 28px;
            box-shadow: 0 25px 70px rgba(0,0,0,.3);
        }

        .aba-modal-close {
            float: right;
            border: 0;
            background: #f1f3f7;
            width: 38px;
            height: 38px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 20px;
        }

        .aba-btn {
            border: 0;
            border-radius: 10px;
            padding: 10px 16px;
            cursor: pointer;
            font-weight: 600;
        }

        .aba-primary {
            background: #6d4aff;
            color: white;
        }

        .aba-success {
            background: #16a34a;
            color: white;
        }

        .aba-search {
            width: 100%;
            padding: 13px 15px;
            border: 1px solid #e5e7eb;
            border-radius: 12px;
            outline: none;
            font-size: 15px;
        }

        .aba-search:focus {
            border-color: #6d4aff;
            box-shadow: 0 0 0 3px rgba(109,74,255,.1);
        }

        .aba-filter-row {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin: 15px 0 20px;
        }

        .aba-filter {
            border: 1px solid #e5e7eb;
            background: white;
            padding: 8px 13px;
            border-radius: 20px;
            cursor: pointer;
        }

        .aba-filter.active {
            background: #6d4aff;
            color: white;
            border-color: #6d4aff;
        }

        .aba-lesson-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 16px;
        }

        .aba-lesson-card {
            background: white;
            border: 1px solid #e8eaf0;
            border-radius: 16px;
            padding: 18px;
            box-shadow: 0 5px 18px rgba(15,23,42,.04);
        }

        .aba-lesson-number {
            display: inline-flex;
            width: 35px;
            height: 35px;
            align-items: center;
            justify-content: center;
            background: #f0ebff;
            color: #6d4aff;
            border-radius: 10px;
            font-weight: 700;
            margin-bottom: 12px;
        }

        .aba-category {
            font-size: 12px;
            color: #6d4aff;
            font-weight: 700;
            margin-bottom: 7px;
        }

        .aba-lesson-title {
            font-size: 17px;
            font-weight: 700;
            margin-bottom: 10px;
            color: #172033;
        }

        .aba-completed {
            color: #16a34a;
            font-size: 12px;
            font-weight: 700;
        }

        .aba-stat-grid {
            display: grid;
            grid-template-columns: repeat(4,1fr);
            gap: 15px;
            margin: 20px 0;
        }

        .aba-stat {
            background: white;
            border: 1px solid #e8eaf0;
            border-radius: 15px;
            padding: 18px;
        }

        .aba-stat strong {
            display: block;
            font-size: 27px;
            margin-top: 5px;
        }

        .aba-ai-box {
            background: white;
            border: 1px solid #e8eaf0;
            border-radius: 18px;
            padding: 20px;
        }

        .aba-ai-input {
            display: flex;
            gap: 10px;
            margin-top: 15px;
        }

        .aba-ai-input input {
            flex: 1;
            border: 1px solid #e5e7eb;
            border-radius: 10px;
            padding: 12px;
        }

        @media(max-width:900px) {
            .aba-lesson-grid {
                grid-template-columns: repeat(2,minmax(0,1fr));
            }

            .aba-stat-grid {
                grid-template-columns: repeat(2,1fr);
            }
        }

        @media(max-width:600px) {
            .aba-lesson-grid {
                grid-template-columns: 1fr;
            }

            .aba-stat-grid {
                grid-template-columns: repeat(2,1fr);
            }

            .aba-modal-box {
                padding: 20px;
            }
        }
    `;

    document.head.appendChild(style);
}

/* =========================================================
   PAGE FINDER
   ========================================================= */

function getPageElement(pageName) {

    const id = PAGE_MAP[normalizeText(pageName)] || pageName;

    if (!id) {
        return null;
    }

    return document.getElementById(id);
}

/* =========================================================
   RESOLVE NAVIGATION TARGET
   ========================================================= */

function resolveNavigationTarget(element) {

    if (!element) {
        return null;
    }

    /* data-page */

    let page =
        element.getAttribute("data-page") ||
        element.getAttribute("data-target") ||
        element.getAttribute("data-section");

    if (page) {

        page = normalizeText(page)
            .replace("#", "")
            .replace("page", "");

        if (PAGE_MAP[page]) {
            return page;
        }

        if (document.getElementById(page + "Page")) {
            return page;
        }
    }

    /* href */

    const href = element.getAttribute("href");

    if (href && href.startsWith("#")) {

        const hash = normalizeText(
            href.substring(1)
        ).replace("page", "");

        if (PAGE_MAP[hash]) {
            return hash;
        }

        if (document.getElementById(hash + "Page")) {
            return hash;
        }
    }

    /* text */

    const text = normalizeText(
        element.innerText ||
        element.textContent ||
        ""
    );

    if (PAGE_MAP[text]) {
        return text;
    }

    return null;
}

/* =========================================================
   NAVIGATION
   ========================================================= */

function navigate(pageName) {

    let page = normalizeText(pageName);

    page = page
        .replace(/^#/, "")
        .replace(/page$/, "");

    if (!PAGE_MAP[page]) {

        const direct =
            pageName
                ? document.getElementById(pageName)
                : null;

        if (direct) {
            page = pageName.replace(/Page$/, "").toLowerCase();
        } else {
            return;
        }
    }

    const pageId =
        PAGE_MAP[page] ||
        page + "Page";

    const target =
        document.getElementById(pageId);

    if (!target) {
        console.warn(
            "Aung Academy: Page not found:",
            pageId
        );
        return;
    }

    /* Hide pages */

    const pages = [
        "dashboardPage",
        "coursesPage",
        "lessonsPage",
        "progressPage",
        "salesPage",
        "calculatorPage",
        "reportsPage",
        "aiPage",
        "toolsPage",
        "settingsPage"
    ];

    pages.forEach(id => {

        const el = document.getElementById(id);

        if (!el) return;

        el.style.display =
            id === pageId
                ? ""
                : "none";
    });

    /* Active nav */

    $all(
        ".nav-item, .sidebar a, .sidebar button, .bottom-nav a, .bottom-nav button"
    ).forEach(item => {

        const itemPage =
            resolveNavigationTarget(item);

        if (itemPage === page) {
            item.classList.add("active");
            item.setAttribute(
                "aria-current",
                "page"
            );
        } else {
            item.classList.remove("active");
            item.removeAttribute("aria-current");
        }
    });

    /* Build dynamic pages */

    if (page === "lessons") {
        buildLessonsPage();
    }

    if (page === "sales") {
        buildSalesPage();
    }

    if (page === "ai") {
        buildAIPage();
    }

    if (page === "settings") {
        buildSettingsPage();
    }

    if (page === "progress") {
        buildProgressPage();
    }

    /* Close mobile sidebar */

    closeMobileSidebar();

    /* Scroll top */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    document.body.dataset.currentPage = page;
}

/* =========================================================
   GLOBAL CLICK HANDLER
   ========================================================= */

function installGlobalClickHandler() {

    if (window.__abaGlobalClickInstalled) {
        return;
    }

    window.__abaGlobalClickInstalled = true;

    document.addEventListener(
        "click",
        function(event) {

            const clickable =
                event.target.closest(
                    "[data-page], [data-target], [data-section], .nav-item, .sidebar a, .sidebar button, .bottom-nav a, .bottom-nav button"
                );

            if (!clickable) {
                return;
            }

            const page =
                resolveNavigationTarget(clickable);

            if (!page) {
                return;
            }

            event.preventDefault();

            navigate(page);
        },
        false
    );
}

/* =========================================================
   OLD HTML COMPATIBILITY
   ========================================================= */

window.navigate = navigate;

window.showPage = function(page) {
    navigate(page);
};

window.openPage = function(page) {
    navigate(page);
};

window.switchPage = function(page) {
    navigate(page);
};

window.goDashboard = function() {
    navigate("dashboard");
};

window.goLessons = function() {
    navigate("lessons");
};

window.goSales = function() {
    navigate("sales");
};

window.goAI = function() {
    navigate("ai");
};

window.goSettings = function() {
    navigate("settings");
};

/* =========================================================
   LESSON PAGE
   ========================================================= */

let lessonFilter = "All";
let lessonSearch = "";

function buildLessonsPage() {

    const page =
        document.getElementById("lessonsPage");

    if (!page) {
        return;
    }

    page.innerHTML = `
        <div class="aba-page">

            <div style="margin-bottom:20px;">
                <h1 style="margin-bottom:6px;">
                    Learning Center
                </h1>

                <p style="color:#718096;">
                    Aung Business Academy မှ Business Management
                    သင်ခန်းစာများကို လေ့လာပါ။
                </p>
            </div>

            <div class="aba-stat-grid">

                <div class="aba-stat">
                    <small>Total Lessons</small>
                    <strong>${LESSONS.length}</strong>
                </div>

                <div class="aba-stat">
                    <small>Completed</small>
                    <strong id="abaCompletedCount">
                        ${getCompletedLessons().length}
                    </strong>
                </div>

                <div class="aba-stat">
                    <small>Remaining</small>
                    <strong id="abaRemainingCount">
                        ${LESSONS.length - getCompletedLessons().length}
                    </strong>
                </div>

                <div class="aba-stat">
                    <small>Progress</small>
                    <strong id="abaLessonProgress">
                        ${Math.round(
                            getCompletedLessons().length /
                            LESSONS.length *
                            100
                        )}%
                    </strong>
                </div>

            </div>

            <div style="
                background:white;
                border:1px solid #e8eaf0;
                border-radius:18px;
                padding:20px;
            ">

                <input
                    id="abaLessonSearch"
                    class="aba-search"
                    type="search"
                    placeholder="သင်ခန်းစာရှာရန်..."
                    value="${escapeHTML(lessonSearch)}"
                >

                <div
                    id="abaLessonFilters"
                    class="aba-filter-row"
                ></div>

                <div
                    id="abaLessonGrid"
                    class="aba-lesson-grid"
                ></div>

            </div>

        </div>
    `;

    renderLessonFilters();
    renderLessons();

    const search =
        document.getElementById(
            "abaLessonSearch"
        );

    if (search) {

        search.addEventListener(
            "input",
            function() {

                lessonSearch =
                    this.value || "";

                renderLessons();
            }
        );
    }
}

function renderLessonFilters() {

    const box =
        document.getElementById(
            "abaLessonFilters"
        );

    if (!box) {
        return;
    }

    const categories = [
        "All",
        ...new Set(
            LESSONS.map(
                lesson => lesson.category
            )
        )
    ];

    box.innerHTML =
        categories.map(category => `
            <button
                type="button"
                class="aba-filter ${
                    lessonFilter === category
                        ? "active"
                        : ""
                }"
                data-filter="${escapeHTML(category)}"
            >
                ${escapeHTML(category)}
            </button>
        `).join("");

    box.querySelectorAll(
        ".aba-filter"
    ).forEach(button => {

        button.addEventListener(
            "click",
            function() {

                lessonFilter =
                    this.dataset.filter;

                renderLessonFilters();
                renderLessons();
            }
        );
    });
}

function renderLessons() {

    const grid =
        document.getElementById(
            "abaLessonGrid"
        );

    if (!grid) {
        return;
    }

    const completed =
        getCompletedLessons();

    const search =
        normalizeText(lessonSearch);

    const filtered =
        LESSONS.filter(lesson => {

            const categoryMatch =
                lessonFilter === "All" ||
                lesson.category === lessonFilter;

            const searchMatch =
                !search ||
                normalizeText(
                    lesson.title
                ).includes(search) ||
                normalizeText(
                    lesson.category
                ).includes(search);

            return categoryMatch &&
                searchMatch;
        });

    if (!filtered.length) {

        grid.innerHTML = `
            <div style="
                grid-column:1/-1;
                padding:40px;
                text-align:center;
                color:#718096;
            ">
                သင်ခန်းစာ မတွေ့ပါ။
            </div>
        `;

        return;
    }

    grid.innerHTML =
        filtered.map(lesson => {

            const isCompleted =
                completed.includes(lesson.id);

            return `
                <div
                    class="aba-lesson-card"
                    data-lesson-id="${lesson.id}"
                    role="button"
                    tabindex="0"
                >

                    <div class="aba-lesson-number">
                        ${lesson.id}
                    </div>

                    <div class="aba-category">
                        ${escapeHTML(
                            lesson.category
                        )}
                    </div>

                    <div class="aba-lesson-title">
                        ${escapeHTML(
                            lesson.title
                        )}
                    </div>

                    <div style="
                        font-size:13px;
                        color:#718096;
                        margin-bottom:14px;
                    ">
                        သင်ခန်းစာဖတ်ရန် နှိပ်ပါ
                    </div>

                    ${
                        isCompleted
                            ? `
                                <div class="aba-completed">
                                    ✓ ပြီးမြောက်ပြီး
                                </div>
                              `
                            : `
                                <button
                                    type="button"
                                    class="aba-btn aba-primary"
                                    data-open-lesson="${lesson.id}"
                                >
                                    စတင်လေ့လာမည်
                                </button>
                              `
                    }

                </div>
            `;
        }).join("");

    grid.querySelectorAll(
        "[data-lesson-id]"
    ).forEach(card => {

        card.addEventListener(
            "click",
            function(event) {

                if (
                    event.target.closest(
                        "button"
                    )
                ) {
                    return;
                }

                openLesson(
                    Number(
                        this.dataset.lessonId
                    )
                );
            }
        );

        card.addEventListener(
            "keydown",
            function(event) {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    openLesson(
                        Number(
                            this.dataset.lessonId
                        )
                    );
                }
            }
        );
    });

    grid.querySelectorAll(
        "[data-open-lesson]"
    ).forEach(button => {

        button.addEventListener(
            "click",
            function(event) {

                event.stopPropagation();

                openLesson(
                    Number(
                        this.dataset.openLesson
                    )
                );
            }
        );
    });
}

function openLesson(id) {

    const lesson =
        LESSONS.find(
            item => item.id === Number(id)
        );

    if (!lesson) {
        return;
    }

    const completed =
        getCompletedLessons();

    const isCompleted =
        completed.includes(lesson.id);

    openModal(`
        <button
            type="button"
            class="aba-modal-close"
            id="abaLessonClose"
        >
            ×
        </button>

        <div style="
            color:#6d4aff;
            font-size:13px;
            font-weight:700;
            margin-bottom:8px;
        ">
            LESSON ${lesson.id}
        </div>

        <h2 style="margin-bottom:8px;">
            ${escapeHTML(
                lesson.title
            )}
        </h2>

        <div style="
            color:#6d4aff;
            font-weight:600;
            margin-bottom:22px;
        ">
            ${escapeHTML(
                lesson.category
            )}
        </div>

        <div style="
            line-height:1.8;
            color:#374151;
        ">
            ${lesson.content}
        </div>

        <div style="
            margin-top:25px;
            padding-top:20px;
            border-top:1px solid #eee;
        ">

            ${
                isCompleted
                    ? `
                        <button
                            type="button"
                            class="aba-btn aba-success"
                            disabled
                        >
                            ✓ ဒီသင်ခန်းစာ ပြီးမြောက်ပြီး
                        </button>
                      `
                    : `
                        <button
                            type="button"
                            class="aba-btn aba-primary"
                            id="abaCompleteLesson"
                        >
                            ✓ သင်ခန်းစာပြီးမြောက်ကြောင်း မှတ်မည်
                        </button>
                      `
            }

        </div>
    `);

    const close =
        document.getElementById(
            "abaLessonClose"
        );

    if (close) {
        close.addEventListener(
            "click",
            closeModal
        );
    }

    const complete =
        document.getElementById(
            "abaCompleteLesson"
        );

    if (complete) {

        complete.addEventListener(
            "click",
            function() {

                const data =
                    getCompletedLessons();

                if (!data.includes(lesson.id)) {
                    data.push(lesson.id);
                }

                saveCompletedLessons(data);

                closeModal();

                renderLessons();

                updateLessonStats();

                showToast(
                    "သင်ခန်းစာပြီးမြောက်ပါပြီ ✓"
                );
            }
        );
    }
}

function updateLessonStats() {

    const completed =
        getCompletedLessons();

    const completedEl =
        document.getElementById(
            "abaCompletedCount"
        );

    const remainingEl =
        document.getElementById(
            "abaRemainingCount"
        );

    const progressEl =
        document.getElementById(
            "abaLessonProgress"
        );

    if (completedEl) {
        completedEl.textContent =
            completed.length;
    }

    if (remainingEl) {
        remainingEl.textContent =
            LESSONS.length -
            completed.length;
    }

    if (progressEl) {
        progressEl.textContent =
            Math.round(
                completed.length /
                LESSONS.length *
                100
            ) + "%";
    }
}

/* =========================================================
   PROGRESS PAGE
   ========================================================= */

function buildProgressPage() {

    const page =
        document.getElementById(
            "progressPage"
        );

    if (!page) {
        return;
    }

    const completed =
        getCompletedLessons();

    const percent =
        Math.round(
            completed.length /
            LESSONS.length *
            100
        );

    page.innerHTML = `
        <div class="aba-page">

            <h1>My Progress</h1>

            <p style="
                color:#718096;
                margin-top:6px;
            ">
                သင့်ရဲ့ Learning Progress ကို
                ဒီနေရာမှာ ကြည့်နိုင်ပါတယ်။
            </p>

            <div class="aba-stat-grid">

                <div class="aba-stat">
                    <small>Total Lessons</small>
                    <strong>${LESSONS.length}</strong>
                </div>

                <div class="aba-stat">
                    <small>Completed</small>
                    <strong>${completed.length}</strong>
                </div>

                <div class="aba-stat">
                    <small>Remaining</small>
                    <strong>
                        ${LESSONS.length - completed.length}
                    </strong>
                </div>

                <div class="aba-stat">
                    <small>Progress</small>
                    <strong>${percent}%</strong>
                </div>

            </div>

            <div style="
                background:white;
                border:1px solid #e8eaf0;
                border-radius:18px;
                padding:22px;
            ">

                <h3 style="margin-bottom:15px;">
                    Course Progress
                </h3>

                <div style="
                    height:12px;
                    background:#edf0f5;
                    border-radius:20px;
                    overflow:hidden;
                ">
                    <div style="
                        width:${percent}%;
                        height:100%;
                        background:#6d4aff;
                        border-radius:20px;
                    "></div>
                </div>

                <p style="
                    margin-top:12px;
                    color:#718096;
                ">
                    ${percent}% ပြီးမြောက်ပြီးပါပြီ။
                </p>

            </div>

        </div>
    `;
}

/* =========================================================
   SALES MANAGER PAGE
   ========================================================= */

function buildSalesPage() {

    const page =
        document.getElementById(
            "salesPage"
        );

    if (!page) {
        return;
    }

    page.innerHTML = `
        <div class="aba-page">

            <h1>Sales Manager</h1>

            <p style="
                color:#718096;
                margin-top:6px;
            ">
                Sales Team နဲ့ Performance ကို
                စနစ်တကျ စီမံခန့်ခွဲရန်။
            </p>

            <div class="aba-stat-grid">

                <div class="aba-stat">
                    <small>Sales Target</small>
                    <strong>100%</strong>
                </div>

                <div class="aba-stat">
                    <small>Achievement</small>
                    <strong>0%</strong>
                </div>

                <div class="aba-stat">
                    <small>Team Members</small>
                    <strong>0</strong>
                </div>

                <div class="aba-stat">
                    <small>Customers</small>
                    <strong>0</strong>
                </div>

            </div>

            <div style="
                display:grid;
                grid-template-columns:
                repeat(auto-fit,minmax(250px,1fr));
                gap:16px;
            ">

                ${[
                    [
                        "People Management",
                        "Team Coaching, KPI, Motivation"
                    ],
                    [
                        "Sales Execution",
                        "Target, Route Plan, Customer Visit"
                    ],
                    [
                        "Performance",
                        "Achievement, Gap Analysis"
                    ],
                    [
                        "Market Development",
                        "Distribution, Coverage, Competitor"
                    ]
                ].map(item => `
                    <div style="
                        background:white;
                        border:1px solid #e8eaf0;
                        border-radius:16px;
                        padding:20px;
                    ">
                        <h3>${item[0]}</h3>
                        <p style="
                            color:#718096;
                            margin-top:8px;
                            line-height:1.6;
                        ">
                            ${item[1]}
                        </p>
                    </div>
                `).join("")}

            </div>

        </div>
    `;
}

/* =========================================================
   AI BUSINESS COACH PAGE
   ========================================================= */

function buildAIPage() {

    const page =
        document.getElementById(
            "aiPage"
        );

    if (!page) {
        return;
    }

    page.innerHTML = `
        <div class="aba-page">

            <h1>AI Business Coach</h1>

            <p style="
                color:#718096;
                margin-top:6px;
            ">
                Business, Sales, Marketing နဲ့
                Management အကြောင်း မေးမြန်းနိုင်ပါတယ်။
            </p>

            <div class="aba-ai-box"
                style="margin-top:20px;">

                <div id="abaAIResponse"
                    style="
                        min-height:220px;
                        background:#f8f9fc;
                        border-radius:14px;
                        padding:18px;
                        line-height:1.8;
                    ">

                    <strong>
                        Aung Business AI Coach
                    </strong>

                    <p style="
                        margin-top:10px;
                        color:#718096;
                    ">
                        သင့် Business ပြဿနာကို
                        မေးမြန်းနိုင်ပါတယ်။
                    </p>

                </div>

                <div class="aba-ai-input">

                    <input
                        id="abaAIInput"
                        type="text"
                        placeholder="ဥပမာ - Sales Target မပြည့်ရင် ဘာလုပ်ရမလဲ?"
                    >

                    <button
                        type="button"
                        class="aba-btn aba-primary"
                        id="abaAISend"
                    >
                        မေးမည်
                    </button>

                </div>

            </div>

        </div>
    `;

    const input =
        document.getElementById(
            "abaAIInput"
        );

    const send =
        document.getElementById(
            "abaAISend"
        );

    if (send) {
        send.addEventListener(
            "click",
            askAICoach
        );
    }

    if (input) {
        input.addEventListener(
            "keydown",
            function(event) {

                if (event.key === "Enter") {
                    askAICoach();
                }
            }
        );
    }
}

function askAICoach() {

    const input =
        document.getElementById(
            "abaAIInput"
        );

    const response =
        document.getElementById(
            "abaAIResponse"
        );

    if (!input || !response) {
        return;
    }

    const question =
        input.value.trim();

    if (!question) {
        showToast(
            "မေးခွန်းတစ်ခု ရိုက်ထည့်ပါ။"
        );
        return;
    }

    response.innerHTML = `
        <strong>Business Coach အကြံပြုချက်</strong>

        <p style="margin-top:12px;">
            သင့်မေးခွန်း -
            <strong>
                ${escapeHTML(question)}
            </strong>
        </p>

        <div style="
            margin-top:15px;
            padding:15px;
            background:white;
            border-radius:12px;
            border-left:4px solid #6d4aff;
        ">

            <p>
                ၁။ လက်ရှိ Situation ကို Data နဲ့
                အရင်ဆုံး Analyze လုပ်ပါ။
            </p>

            <p>
                ၂။ Root Cause ကိုရှာပါ။
            </p>

            <p>
                ၃။ Action Plan ကို
                Responsible Person + Deadline နဲ့
                သတ်မှတ်ပါ။
            </p>

            <p>
                ၄။ Weekly Review ပြုလုပ်ပြီး
                Result ကိုတိုင်းတာပါ။
            </p>

        </div>
    `;

    input.value = "";
}

/* =========================================================
   SETTINGS PAGE
   ========================================================= */

function buildSettingsPage() {

    const page =
        document.getElementById(
            "settingsPage"
        );

    if (!page) {
        return;
    }

    page.innerHTML = `
        <div class="aba-page">

            <h1>Settings</h1>

            <p style="
                color:#718096;
                margin-top:6px;
            ">
                Aung Business Academy Settings
            </p>

            <div style="
                margin-top:20px;
                background:white;
                border:1px solid #e8eaf0;
                border-radius:18px;
                padding:22px;
            ">

                <h3>Profile</h3>

                <div style="
                    margin-top:18px;
                    display:grid;
                    gap:15px;
                ">

                    <div>
                        <label
                            style="
                                display:block;
                                margin-bottom:6px;
                                font-weight:600;
                            "
                        >
                            Name
                        </label>

                        <input
                            id="abaSettingName"
                            value="Aung Zar Ni Win"
                            style="
                                width:100%;
                                padding:12px;
                                border:1px solid #e5e7eb;
                                border-radius:10px;
                            "
                        >
                    </div>

                    <div>
                        <label
                            style="
                                display:block;
                                margin-bottom:6px;
                                font-weight:600;
                            "
                        >
                            Position
                        </label>

                        <input
                            id="abaSettingPosition"
                            value="Business Manager"
                            style="
                                width:100%;
                                padding:12px;
                                border:1px solid #e5e7eb;
                                border-radius:10px;
                            "
                        >
                    </div>

                    <button
                        type="button"
                        class="aba-btn aba-primary"
                        id="abaSaveSettings"
                    >
                        Save Settings
                    </button>

                </div>

            </div>

            <div style="
                margin-top:16px;
                background:white;
                border:1px solid #e8eaf0;
                border-radius:18px;
                padding:22px;
            ">

                <h3>Academy Information</h3>

                <p style="
                    color:#718096;
                    margin-top:10px;
                    line-height:1.7;
                ">
                    Aung Business Academy<br>
                    Version ${ABA.version}<br>
                    Professional Business Learning Platform
                </p>

            </div>

        </div>
    `;

    const save =
        document.getElementById(
            "abaSaveSettings"
        );

    if (save) {

        save.addEventListener(
            "click",
            function() {

                const name =
                    document.getElementById(
                        "abaSettingName"
                    )?.value || "";

                const position =
                    document.getElementById(
                        "abaSettingPosition"
                    )?.value || "";

                localStorage.setItem(
                    ABA.storage.settings,
                    JSON.stringify({
                        name,
                        position
                    })
                );

                showToast(
                    "Settings သိမ်းပြီးပါပြီ ✓"
                );
            }
        );
    }
}

/* =========================================================
   MODAL
   ========================================================= */

function openModal(content) {

    let overlay =
        document.getElementById(
            "abaDynamicModal"
        );

    if (!overlay) {

        overlay =
            document.createElement(
                "div"
            );

        overlay.id =
            "abaDynamicModal";

        overlay.className =
            "aba-modal";

        document.body.appendChild(
            overlay
        );
    }

    overlay.innerHTML = `
        <div class="aba-modal-box">
            ${content}
        </div>
    `;

    overlay.style.display = "flex";

    overlay.addEventListener(
        "click",
        function(event) {

            if (
                event.target === overlay
            ) {
                closeModal();
            }
        }
    );
}

function closeModal() {

    const overlay =
        document.getElementById(
            "abaDynamicModal"
        );

    if (overlay) {
        overlay.style.display =
            "none";
    }
}

/* =========================================================
   MOBILE SIDEBAR
   ========================================================= */

function closeMobileSidebar() {

    const sidebar =
        document.getElementById(
            "sidebar"
        );

    const overlay =
        document.getElementById(
            "sidebarOverlay"
        );

    if (sidebar) {
        sidebar.classList.remove(
            "open",
            "active",
            "show"
        );
    }

    if (overlay) {
        overlay.classList.remove(
            "active",
            "show",
            "open"
        );

        overlay.style.pointerEvents =
            "none";

        overlay.style.opacity =
            "0";
    }

    document.body.classList.remove(
        "sidebar-open"
    );
}

function toggleMobileSidebar() {

    const sidebar =
        document.getElementById(
            "sidebar"
        );

    if (!sidebar) {
        return;
    }

    const isOpen =
        sidebar.classList.contains(
            "open"
        );

    if (isOpen) {
        closeMobileSidebar();
        return;
    }

    sidebar.classList.add("open");

    const overlay =
        document.getElementById(
            "sidebarOverlay"
        );

    if (overlay) {

        overlay.classList.add(
            "active"
        );

        overlay.style.pointerEvents =
            "auto";

        overlay.style.opacity =
            "1";
    }

    document.body.classList.add(
        "sidebar-open"
    );
}

function bindMobileMenu() {

    const menu =
        document.getElementById(
            "mobileMenu"
        );

    if (menu) {

        menu.addEventListener(
            "click",
            function(event) {

                event.preventDefault();

                toggleMobileSidebar();
            }
        );
    }

    const overlay =
        document.getElementById(
            "sidebarOverlay"
        );

    if (overlay) {

        overlay.addEventListener(
            "click",
            closeMobileSidebar
        );
    }
}

/* =========================================================
   MODAL COMPATIBILITY
   ========================================================= */

function bindExistingModal() {

    const close =
        document.getElementById(
            "modalClose"
        );

    const overlay =
        document.getElementById(
            "modalOverlay"
        );

    if (close) {

        close.addEventListener(
            "click",
            function() {

                if (overlay) {
                    overlay.style.display =
                        "none";
                }
            }
        );
    }

    if (overlay) {

        overlay.addEventListener(
            "click",
            function(event) {

                if (
                    event.target === overlay
                ) {
                    overlay.style.display =
                        "none";
                }
            }
        );
    }
}

/* =========================================================
   GLOBAL SEARCH
   ========================================================= */

function bindGlobalSearch() {

    const search =
        document.getElementById(
            "globalSearch"
        ) ||
        document.getElementById(
            "academySearch"
        );

    if (!search) {
        return;
    }

    search.addEventListener(
        "keydown",
        function(event) {

            if (event.key !== "Enter") {
                return;
            }

            const value =
                normalizeText(
                    search.value
                );

            if (!value) {
                return;
            }

            const lesson =
                LESSONS.find(item =>
                    normalizeText(
                        item.title
                    ).includes(value)
                );

            if (lesson) {

                navigate("lessons");

                setTimeout(
                    () => openLesson(
                        lesson.id
                    ),
                    150
                );

                return;
            }

            if (
                value.includes("sales")
            ) {
                navigate("sales");
                return;
            }

            if (
                value.includes("ai")
            ) {
                navigate("ai");
                return;
            }

            if (
                value.includes("setting")
            ) {
                navigate("settings");
                return;
            }

            showToast(
                "ရှာဖွေထားသောအချက်အလက် မတွေ့ပါ။"
            );
        }
    );
}

/* =========================================================
   NOTIFICATION
   ========================================================= */

function bindNotification() {

    const button =
        document.getElementById(
            "notificationBtn"
        );

    if (!button) {
        return;
    }

    button.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            showToast(
                "လက်ရှိ Notification မရှိသေးပါ။"
            );
        }
    );
}

/* =========================================================
   ENSURE PAGE VISIBILITY
   ========================================================= */

function showDashboardInitially() {

    const pages = [
        "dashboardPage",
        "coursesPage",
        "lessonsPage",
        "progressPage",
        "salesPage",
        "calculatorPage",
        "reportsPage",
        "aiPage",
        "toolsPage",
        "settingsPage"
    ];

    pages.forEach(
        id => {

            const page =
                document.getElementById(
                    id
                );

            if (!page) {
                return;
            }

            page.style.display =
                id === "dashboardPage"
                    ? ""
                    : "none";
        }
    );
}

/* =========================================================
   FIX OLD SIDEBAR OVERLAY
   ========================================================= */

function fixSidebarOverlay() {

    const overlay =
        document.getElementById(
            "sidebarOverlay"
        );

    if (!overlay) {
        return;
    }

    overlay.style.pointerEvents =
        "none";

    overlay.style.opacity =
        "0";

    overlay.style.zIndex =
        "9990";
}

/* =========================================================
   FALLBACK NAVIGATION FOR OLD HTML
   ========================================================= */

function bindFallbackNavigation() {

    const items =
        $all(
            ".nav-item, .sidebar a, .sidebar button"
        );

    items.forEach(item => {

        if (
            item.dataset.abaBound === "true"
        ) {
            return;
        }

        item.dataset.abaBound =
            "true";

        item.addEventListener(
            "click",
            function(event) {

                const page =
                    resolveNavigationTarget(
                        this
                    );

                if (!page) {
                    return;
                }

                event.preventDefault();

                navigate(page);
            },
            false
        );
    });
}

/* =========================================================
   INITIALIZATION
   ========================================================= */

function initializeAungAcademy() {

    installClickFixCSS();

    installGlobalClickHandler();

    fixSidebarOverlay();

    bindMobileMenu();

    bindExistingModal();

    bindGlobalSearch();

    bindNotification();

    bindFallbackNavigation();

    showDashboardInitially();

    /* Build pages once */

    buildLessonsPage();
    buildProgressPage();
    buildSalesPage();
    buildAIPage();
    buildSettingsPage();

    /* Return dashboard */

    navigate("dashboard");

    console.log(
        "Aung Business Academy V8.5 initialized successfully."
    );
}

/* =========================================================
   DOM READY
   ========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeAungAcademy
    );

} else {

    initializeAungAcademy();
}

/* =========================================================
   ESC KEY - CLOSE MODAL
   ========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {
            closeModal();
            closeMobileSidebar();
        }
    }
);
