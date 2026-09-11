// =====================================================
// AUNG BUSINESS ACADEMY
// APP.JS V4
// English Titles + Myanmar Explanations
// =====================================================

"use strict";

// =====================================================
// STORAGE
// =====================================================

const STORAGE_KEY = "aung_business_academy_v4";

let academyData = {
    completedLessons: [],
    completedCategories: [],
    lastOpened: null
};

try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
        academyData = {
            ...academyData,
            ...JSON.parse(saved)
        };
    }
} catch (error) {
    console.log("Storage error:", error);
}

function saveData() {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(academyData)
    );
}


// =====================================================
// 10 MAIN LESSONS
// =====================================================

const lessons = [

    {
        id: 1,
        title: "Business Basics",
        category: "Leadership & Strategy",
        description: "Learn the foundation of starting and growing a business.",
        content: `
            <h3>What is a Business?</h3>

            <p>
                စီးပွားရေးဆိုတာ ဖောက်သည်တွေရဲ့ လိုအပ်ချက်နဲ့
                ပြဿနာတွေကို ဖြေရှင်းပေးနိုင်တဲ့
                ထုတ်ကုန် သို့မဟုတ် ဝန်ဆောင်မှုကို ပေးအပ်ပြီး
                ဝင်ငွေနဲ့ အမြတ်ရရှိအောင် လုပ်ဆောင်ခြင်းဖြစ်ပါတယ်။
            </p>

            <h3>Three Important Things</h3>

            <ul>
                <li>ဖောက်သည် (Customer)</li>
                <li>ထုတ်ကုန် / ဝန်ဆောင်မှု (Product / Service)</li>
                <li>အမြတ် (Profit)</li>
            </ul>

            <div class="aba-learning-box">
                <strong>Key Point:</strong>
                အောင်မြင်တဲ့ Business တစ်ခုဟာ
                ဖောက်သည်တွေရဲ့ တကယ့်လိုအပ်ချက်ကို
                ဖြေရှင်းပေးနိုင်ရပါမယ်။
            </div>
        `
    },


    {
        id: 2,
        title: "Understanding Customers",
        category: "Marketing",
        description: "Understand who your customers are and what they need.",
        content: `
            <h3>Know Your Customer</h3>

            <p>
                ရောင်းချမှုမစတင်ခင်မှာ
                ကိုယ့်ရဲ့ Customer က ဘယ်သူလဲ၊
                သူတို့ရဲ့ လိုအပ်ချက်က ဘာလဲ၊
                ဘယ်လိုပြဿနာတွေရှိလဲဆိုတာ
                နားလည်ထားဖို့ အရေးကြီးပါတယ်။
            </p>

            <h3>Customer Questions</h3>

            <ul>
                <li>ကိုယ့် Customer က ဘယ်သူလဲ?</li>
                <li>သူတို့မှာ ဘာပြဿနာရှိလဲ?</li>
                <li>သူတို့ ဘာ Solution လိုချင်လဲ?</li>
                <li>ဘာကြောင့် ကိုယ့်ဆီက ဝယ်သင့်လဲ?</li>
            </ul>

            <div class="aba-learning-box">
                <strong>Key Point:</strong>
                Customer ကို ပိုနားလည်လေလေ
                Sales လုပ်ရတာ ပိုလွယ်ကူလာလေလေ ဖြစ်ပါတယ်။
            </div>
        `
    },


    {
        id: 3,
        title: "Brand Basics",
        category: "Branding",
        description: "Learn how to build a strong and memorable brand.",
        content: `
            <h3>What is a Brand?</h3>

            <p>
                Brand ဆိုတာ Logo တစ်ခုတည်းမဟုတ်ပါဘူး။
                Customer တစ်ယောက်က ကိုယ့် Business ကို
                ဘယ်လိုမြင်သလဲ၊ ဘယ်လိုခံစားသလဲ၊
                ဘယ်လောက်ယုံကြည်သလဲဆိုတဲ့
                Customer ရဲ့ အမြင်နဲ့ အတွေ့အကြုံတွေပါဝင်ပါတယ်။
            </p>

            <h3>Strong Brand Elements</h3>

            <ul>
                <li>ရှင်းလင်းတဲ့ Brand Positioning</li>
                <li>တစ်သမတ်တည်းဖြစ်တဲ့ Brand Identity</li>
                <li>Customer Trust</li>
                <li>ကောင်းမွန်တဲ့ Customer Experience</li>
            </ul>

            <div class="aba-learning-box">
                <strong>Key Point:</strong>
                Brand ဆိုတာ Logo ထက်ပိုပါတယ်။
                Customer ရဲ့ ယုံကြည်မှုနဲ့ အတွေ့အကြုံက
                Brand ရဲ့ တန်ဖိုးကို ဖန်တီးပေးပါတယ်။
            </div>
        `
    },


    {
        id: 4,
        title: "Marketing Basics",
        category: "Marketing",
        description: "Understand the fundamentals of marketing.",
        content: `
            <h3>What is Marketing?</h3>

            <p>
                Marketing ဆိုတာ ကိုယ့်ရဲ့ Product သို့မဟုတ်
                Service ကို လိုအပ်နေတဲ့ Customer တွေဆီ
                ရောက်ရှိအောင် ဆွဲဆောင်ပေးပြီး
                ဝယ်ယူလိုစိတ် ဖြစ်ပေါ်လာအောင်
                လုပ်ဆောင်တဲ့ လုပ်ငန်းစဉ်ဖြစ်ပါတယ်။
            </p>

            <h3>Basic Marketing Questions</h3>

            <ul>
                <li>ဘာကို ရောင်းမလဲ?</li>
                <li>ဘယ်သူ့ကို ရောင်းမလဲ?</li>
                <li>Customer တွေကို ဘယ်မှာရှာမလဲ?</li>
                <li>ဘာကြောင့် ကိုယ့် Product ကို ဝယ်သင့်လဲ?</li>
            </ul>

            <div class="aba-learning-box">
                <strong>Key Point:</strong>
                Marketing က Customer ကို ရှာဖွေခြင်း၊
                ဆွဲဆောင်ခြင်းနဲ့ Demand ဖန်တီးခြင်းတို့ကို
                အဓိကလုပ်ဆောင်ပါတယ်။
            </div>
        `
    },


    {
        id: 5,
        title: "Sales Fundamentals",
        category: "Sales",
        description: "Learn the fundamentals of professional selling.",
        content: `
            <h3>Sales Process</h3>

            <ol>
                <li>Potential Customer ရှာဖွေခြင်း</li>
                <li>Customer လိုအပ်ချက်ကို နားလည်ခြင်း</li>
                <li>Solution ကို ရှင်းပြခြင်း</li>
                <li>Customer Objection ကို ဖြေရှင်းခြင်း</li>
                <li>Sale Closing ပြုလုပ်ခြင်း</li>
                <li>Follow-up ပြန်လုပ်ခြင်း</li>
            </ol>

            <h3>Professional Selling</h3>

            <p>
                Professional Sales ဆိုတာ Product ကို
                အတင်းအကျပ် ရောင်းချခြင်းမဟုတ်ပါဘူး။
                Customer ရဲ့ ပြဿနာကို နားလည်ပြီး
                သင့်တော်တဲ့ Solution ကို ပေးနိုင်ခြင်းဖြစ်ပါတယ်။
            </p>

            <div class="aba-learning-box">
                <strong>Key Point:</strong>
                Customer ရဲ့ Problem ကို ကောင်းကောင်းနားလည်နိုင်ရင်
                Sales Closing လုပ်ဖို့ ပိုလွယ်ကူပါတယ်။
            </div>
        `
    },


    {
        id: 6,
        title: "Customer Service",
        category: "Service Delivery",
        description: "Build customer loyalty through excellent service.",
        content: `
            <h3>Great Customer Service</h3>

            <p>
                Customer Service က Sale ပြီးတဲ့အချိန်မှာ
                အဆုံးသတ်သွားတာမဟုတ်ပါဘူး။
                Customer ကို ဆက်လက်ဂရုစိုက်ပြီး
                ပြဿနာရှိရင် မြန်မြန်ဖြေရှင်းပေးခြင်းက
                Customer Loyalty ကို တိုးတက်စေပါတယ်။
            </p>

            <ul>
                <li>Customer ကို သေချာနားထောင်ပါ</li>
                <li>မြန်မြန်တုံ့ပြန်ပါ</li>
                <li>ရှင်းလင်းစွာ ဆက်သွယ်ပါ</li>
                <li>ပြဿနာကို ဖြေရှင်းပေးပါ</li>
                <li>Follow-up ပြန်လုပ်ပါ</li>
            </ul>

            <div class="aba-learning-box">
                <strong>Key Point:</strong>
                ကောင်းမွန်တဲ့ Customer Service က
                Repeat Customer နဲ့ Customer Referral
                ရရှိစေပါတယ်။
            </div>
        `
    },


    {
        id: 7,
        title: "People Management",
        category: "Management & HR",
        description: "Learn how to manage and develop people effectively.",
        content: `
            <h3>Effective People Management</h3>

            <p>
                Manager က လူတွေကို အမိန့်ပေးရုံနဲ့
                အောင်မြင်တဲ့ Team တစ်ခု မတည်ဆောက်နိုင်ပါဘူး။
                Team Member တစ်ယောက်ချင်းစီကို
                လမ်းညွှန်ပေးခြင်း၊ Coaching လုပ်ခြင်းနဲ့
                တာဝန်ယူမှုရှိအောင် ဖွံ့ဖြိုးပေးဖို့ လိုပါတယ်။
            </p>

            <ul>
                <li>Clear Expectations သတ်မှတ်ပါ</li>
                <li>တာဝန်နဲ့ Ownership ပေးပါ</li>
                <li>Coaching လုပ်ပါ</li>
                <li>Performance ကို Review လုပ်ပါ</li>
                <li>Feedback ပေးပါ</li>
                <li>အောင်မြင်မှုကို အသိအမှတ်ပြုပါ</li>
            </ul>

            <div class="aba-learning-box">
                <strong>Leadership Principle:</strong>
                ကောင်းမွန်တဲ့ Manager တစ်ယောက်ဟာ
                Team ကို Micromanage လုပ်တာထက်
                လူတွေကို Develop လုပ်ပေးရပါတယ်။
            </div>
        `
    },


    {
        id: 8,
        title: "Profit & Loss",
        category: "Financial Statements",
        description: "Understand revenue, costs and business profit.",
        content: `
            <h3>Basic Formula</h3>

            <div class="aba-learning-box">
                <strong>
                    Profit = Revenue − Total Costs
                </strong>
            </div>

            <h3>Example</h3>

            <p>
                ဥပမာ -
            </p>

            <p>
                Revenue = 10,000,000 Ks
            </p>

            <p>
                Total Costs = 7,000,000 Ks
            </p>

            <p>
                Profit = 3,000,000 Ks
            </p>

            <h3>Why It Matters</h3>

            <p>
                Business တစ်ခုမှာ Sales များတာတစ်ခုတည်းနဲ့
                အောင်မြင်တယ်လို့ မဆိုနိုင်ပါဘူး။
                ကုန်ကျစရိတ်ကို ထိန်းချုပ်ပြီး
                အမှန်တကယ် အမြတ်ရရှိနေတာလားဆိုတာ
                သိထားဖို့ အရေးကြီးပါတယ်။
            </p>

            <div class="aba-learning-box">
                <strong>Key Point:</strong>
                Revenue များတာထက်
                Sustainable Profit ရရှိနိုင်ခြင်းက
                Business အတွက် ပိုအရေးကြီးပါတယ်။
            </div>
        `
    },


    {
        id: 9,
        title: "Time Management",
        category: "Personal Productivity",
        description: "Manage your time and focus on high-value activities.",
        content: `
            <h3>Effective Time Management</h3>

            <p>
                Time Management ဆိုတာ အချိန်ပိုရအောင်
                ဖန်တီးတာမဟုတ်ပါဘူး။
                ရရှိထားတဲ့အချိန်ကို အရေးကြီးဆုံး
                အလုပ်တွေအတွက် မှန်ကန်စွာ အသုံးချခြင်းဖြစ်ပါတယ်။
            </p>

            <ul>
                <li>အရေးကြီးဆုံးအလုပ်ကို ဦးစားပေးပါ</li>
                <li>နေ့စဉ် Plan ပြုလုပ်ပါ</li>
                <li>အာရုံစူးစိုက်ပြီး အလုပ်လုပ်ပါ</li>
                <li>မလိုအပ်တဲ့ အလုပ်တွေကို လျှော့ချပါ</li>
                <li>နေ့ကုန်မှာ Result ကို Review လုပ်ပါ</li>
            </ul>

            <div class="aba-learning-box">
                <strong>Key Point:</strong>
                Productivity ဆိုတာ အလုပ်များများလုပ်တာမဟုတ်ပါဘူး။
                တန်ဖိုးရှိတဲ့ Result ကို ရရှိအောင်
                မှန်ကန်တဲ့အလုပ်ကို လုပ်နိုင်ခြင်းဖြစ်ပါတယ်။
            </div>
        `
    },


    {
        id: 10,
        title: "Business Growth",
        category: "Leadership & Strategy",
        description: "Learn the basic principles of growing a business.",
        content: `
            <h3>Business Growth</h3>

            <p>
                Business Growth ဆိုတာ Sales တိုးလာတာတစ်ခုတည်းမဟုတ်ပါဘူး။
                Customer ပိုများလာခြင်း၊ Revenue တိုးလာခြင်း၊
                Profit တိုးလာခြင်းနဲ့ Market Expansion ဖြစ်လာခြင်းတို့
                အားလုံးပါဝင်ပါတယ်။
            </p>

            <h3>Ways to Grow a Business</h3>

            <ul>
                <li>Customer အသစ်များ ရှာဖွေခြင်း</li>
                <li>Customer တစ်ယောက်ချင်းစီရဲ့ Sales တိုးခြင်း</li>
                <li>Product အသစ်များ ထည့်သွင်းခြင်း</li>
                <li>Market အသစ်များ ဝင်ရောက်ခြင်း</li>
                <li>Distribution ပိုမိုကောင်းမွန်အောင်လုပ်ခြင်း</li>
                <li>Customer Retention တိုးတက်အောင်လုပ်ခြင်း</li>
            </ul>

            <div class="aba-learning-box">
                <strong>Key Point:</strong>
                ရေရှည် Business Growth ရဖို့
                Customer + Revenue + Profit + Execution
                လေးခုလုံးကို ကောင်းမွန်စွာ စီမံခန့်ခွဲရပါတယ်။
            </div>
        `
    }

];


// =====================================================
// CATEGORY LESSONS
// =====================================================

const categoryData = {

    "Leadership Basics": {
        category: "Leadership & Strategy",
        description: "Learn the foundation of effective leadership.",
        lessons: [
            "Leadership Mindset",
            "Setting Expectations",
            "Delegation",
            "Accountability"
        ]
    },

    "Strategic Thinking": {
        category: "Leadership & Strategy",
        description: "Learn how managers think strategically.",
        lessons: [
            "Business Vision",
            "SWOT Analysis",
            "Competitive Thinking",
            "Strategic Planning"
        ]
    },

    "Decision Making": {
        category: "Leadership & Strategy",
        description: "Develop better business decision-making skills.",
        lessons: [
            "Problem Identification",
            "Data-Based Decisions",
            "Risk Assessment",
            "Decision Execution"
        ]
    },

    "Team Leadership": {
        category: "Leadership & Strategy",
        description: "Build and lead high-performing teams.",
        lessons: [
            "Team Building",
            "Communication",
            "Motivation",
            "Performance Culture"
        ]
    },

    "Brand Basics": {
        category: "Branding",
        description: "Understand the fundamentals of branding.",
        lessons: [
            "What is a Brand?",
            "Brand Promise",
            "Brand Trust",
            "Brand Experience"
        ]
    },

    "Brand Positioning": {
        category: "Branding",
        description: "Position your brand clearly in the market.",
        lessons: [
            "Target Market",
            "Value Proposition",
            "Competitive Positioning",
            "Brand Differentiation"
        ]
    },

    "Brand Identity": {
        category: "Branding",
        description: "Create a consistent brand identity.",
        lessons: [
            "Logo",
            "Colors",
            "Typography",
            "Brand Guidelines"
        ]
    },

    "Marketing Basics": {
        category: "Marketing",
        description: "Learn the fundamentals of marketing.",
        lessons: [
            "Marketing Fundamentals",
            "4Ps of Marketing",
            "Target Customers",
            "Marketing Funnel"
        ]
    },

    "Digital Marketing": {
        category: "Marketing",
        description: "Learn modern digital marketing methods.",
        lessons: [
            "Social Media",
            "Content",
            "Digital Advertising",
            "Analytics"
        ]
    },

    "Content Marketing": {
        category: "Marketing",
        description: "Learn how content attracts customers.",
        lessons: [
            "Content Strategy",
            "Content Types",
            "Storytelling",
            "Content Calendar"
        ]
    },

    "Marketing Strategy": {
        category: "Marketing",
        description: "Build a practical marketing strategy.",
        lessons: [
            "Market Analysis",
            "Customer Segmentation",
            "Campaign Planning",
            "Marketing KPIs"
        ]
    },

    "Sales Basics": {
        category: "Sales",
        description: "Build strong sales fundamentals.",
        lessons: [
            "Prospecting",
            "Needs Analysis",
            "Presentation",
            "Closing"
        ]
    },

    "Customer Finding": {
        category: "Sales",
        description: "Learn how to find potential customers.",
        lessons: [
            "Customer Profiles",
            "Lead Generation",
            "Prospecting",
            "Lead Qualification"
        ]
    },

    "Sales Strategy": {
        category: "Sales",
        description: "Build a winning sales strategy.",
        lessons: [
            "Sales Planning",
            "Territory Management",
            "Sales Pipeline",
            "Sales Forecast"
        ]
    },

    "Negotiation": {
        category: "Sales",
        description: "Improve your negotiation skills.",
        lessons: [
            "Preparation",
            "Customer Needs",
            "Objection Handling",
            "Closing Negotiations"
        ]
    },

    "Sales Management": {
        category: "Sales",
        description: "Learn professional sales team management.",
        lessons: [
            "Sales Target",
            "KPI Management",
            "Coaching",
            "Sales Review"
        ]
    },

    "Customer Service": {
        category: "Service Delivery",
        description: "Deliver excellent customer service.",
        lessons: [
            "Service Mindset",
            "Communication",
            "Complaint Handling",
            "Customer Retention"
        ]
    },

    "Service Quality": {
        category: "Service Delivery",
        description: "Improve service quality and consistency.",
        lessons: [
            "Quality Standards",
            "Process Control",
            "Service Measurement",
            "Continuous Improvement"
        ]
    },

    "Customer Experience": {
        category: "Service Delivery",
        description: "Create better customer experiences.",
        lessons: [
            "Customer Journey",
            "Touchpoints",
            "Customer Feedback",
            "Experience Improvement"
        ]
    },

    "People Management": {
        category: "Management & HR",
        description: "Manage people effectively.",
        lessons: [
            "Leadership",
            "Delegation",
            "Motivation",
            "Performance"
        ]
    },

    "Recruitment": {
        category: "Management & HR",
        description: "Understand effective recruitment.",
        lessons: [
            "Job Description",
            "Candidate Screening",
            "Interviewing",
            "Selection"
        ]
    },

    "Performance Management": {
        category: "Management & HR",
        description: "Build a strong performance culture.",
        lessons: [
            "KPIs",
            "Performance Review",
            "Feedback",
            "Development Plans"
        ]
    },

    "Coaching": {
        category: "Management & HR",
        description: "Develop people through coaching.",
        lessons: [
            "Coaching Mindset",
            "Questioning",
            "Feedback",
            "Development"
        ]
    },

    "Revenue": {
        category: "Financial Statements",
        description: "Understand business revenue.",
        lessons: [
            "Sales Revenue",
            "Revenue Growth",
            "Revenue Sources",
            "Revenue Analysis"
        ]
    },

    "Profit & Loss": {
        category: "Financial Statements",
        description: "Understand business profit and loss.",
        lessons: [
            "Revenue",
            "Cost",
            "Gross Profit",
            "Net Profit"
        ]
    },

    "Cash Flow": {
        category: "Financial Statements",
        description: "Understand business cash flow.",
        lessons: [
            "Cash Inflow",
            "Cash Outflow",
            "Working Capital",
            "Cash Planning"
        ]
    },

    "Financial Analysis": {
        category: "Financial Statements",
        description: "Analyze business financial performance.",
        lessons: [
            "Profit Margin",
            "Cost Analysis",
            "Financial Ratios",
            "Business Health"
        ]
    },

    "Time Management": {
        category: "Personal Productivity",
        description: "Manage your time effectively.",
        lessons: [
            "Prioritization",
            "Daily Planning",
            "Focus",
            "Time Review"
        ]
    },

    "Goal Setting": {
        category: "Personal Productivity",
        description: "Set meaningful and measurable goals.",
        lessons: [
            "SMART Goals",
            "Action Plans",
            "KPIs",
            "Goal Review"
        ]
    },

    "Daily Planning": {
        category: "Personal Productivity",
        description: "Plan your day for better productivity.",
        lessons: [
            "Daily Priorities",
            "Task Planning",
            "Time Blocking",
            "Daily Review"
        ]
    }

};


// =====================================================
// DASHBOARD
// =====================================================

function updateDashboard() {

    const lessonCount =
        document.getElementById("lessonCount");

    const progress =
        document.getElementById("progress");

    const completed =
        academyData.completedLessons.length;

    const total =
        lessons.length;

    const percentage =
        total === 0
            ? 0
            : Math.round(
                (completed / total) * 100
            );

    if (lessonCount) {
        lessonCount.textContent =
            completed;
    }

    if (progress) {
        progress.textContent =
            percentage + "%";
    }

    document
        .querySelectorAll("[data-progress]")
        .forEach(element => {
            element.textContent =
                percentage + "%";
        });
}


// =====================================================
// DASHBOARD
// =====================================================

function goDashboard() {

    closeModal();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    const title =
        document.querySelector(".topbar h1");

    if (title) {
        title.textContent =
            "Dashboard";
    }
}


// =====================================================
// MENU
// =====================================================

function toggleMenu(id) {

    const menu =
        document.getElementById(id);

    if (!menu) {
        return;
    }

    menu.classList.toggle("show");

    const parent =
        menu.previousElementSibling;

    if (parent) {

        const arrow =
            parent.querySelector(".arrow");

        if (arrow) {

            arrow.textContent =
                menu.classList.contains("show")
                    ? "▴"
                    : "▾";
        }
    }
}


function toggleSidebar() {

    const sidebar =
        document.querySelector(".sidebar");

    if (!sidebar) {
        return;
    }

    sidebar.classList.toggle(
        "mobile-open"
    );
}


// =====================================================
// LESSON LIST
// =====================================================

function openLessons() {

    const html = `

        <div
            class="aba-modal-overlay"
            id="abaModalOverlay">

            <div class="aba-modal">

                <div class="aba-modal-header">

                    <div>

                        <div class="aba-badge">
                            BUSINESS ACADEMY
                        </div>

                        <h2>
                            📚 Business Lessons
                        </h2>

                        <p>
                            Learn business step by step.
                        </p>

                    </div>

                    <button
                        class="aba-modal-close"
                        onclick="closeModal()">
                        ×
                    </button>

                </div>

                <div class="aba-modal-body">

                    <div class="aba-lesson-grid">

                        ${lessons.map(
                            lesson => {

                                const completed =
                                    academyData
                                    .completedLessons
                                    .includes(
                                        lesson.id
                                    );

                                return `

                                    <div
                                        class="aba-lesson-card">

                                        <div
                                            class="aba-badge">

                                            Lesson
                                            ${lesson.id}

                                        </div>

                                        <h3>
                                            ${lesson.title}
                                        </h3>

                                        <p>
                                            ${lesson.description}
                                        </p>

                                        <small>
                                            ${lesson.category}
                                        </small>

                                        <button
                                            class="aba-primary-btn"
                                            onclick="startLesson(${lesson.id})">

                                            ${
                                                completed
                                                ? "Review Lesson"
                                                : "Start Lesson →"
                                            }

                                        </button>

                                        ${
                                            completed
                                            ? `
                                                <div
                                                    class="aba-completed">

                                                    ✓ Completed

                                                </div>
                                            `
                                            : ""
                                        }

                                    </div>

                                `;

                            }
                        ).join("")}

                    </div>

                </div>

            </div>

        </div>
    `;

    showModal(html);
}


// =====================================================
// START LESSON
// =====================================================

function startLesson(id) {

    const lesson =
        lessons.find(
            item => item.id === id
        );

    if (!lesson) {
        return;
    }

    academyData.lastOpened =
        id;

    saveData();

    const completed =
        academyData.completedLessons
        .includes(id);

    const html = `

        <div
            class="aba-modal-overlay"
            id="abaModalOverlay">

            <div class="aba-modal">

                <div class="aba-modal-header">

                    <div>

                        <div class="aba-badge">
                            Lesson ${lesson.id}
                        </div>

                        <h2>
                            ${lesson.title}
                        </h2>

                        <p>
                            ${lesson.category}
                        </p>

                    </div>

                    <button
                        class="aba-modal-close"
                        onclick="openLessons()">
                        ×
                    </button>

                </div>

                <div class="aba-modal-body">

                    <div
                        class="aba-lesson-detail">

                        ${lesson.content}

                    </div>

                    ${
                        completed
                        ? `
                            <div
                                class="aba-learning-box">

                                ✓ ဒီသင်ခန်းစာကို
                                ပြီးမြောက်ပြီးပါပြီ။

                            </div>
                        `
                        : `
                            <button
                                class="aba-primary-btn"
                                onclick="completeLesson(${lesson.id})">

                                ✓ Mark Lesson as Completed

                            </button>
                        `
                    }

                    <button
                        class="aba-secondary-btn"
                        onclick="openLessons()">

                        ← Back to Lessons

                    </button>

                </div>

            </div>

        </div>
    `;

    showModal(html);
}


// =====================================================
// COMPLETE LESSON
// =====================================================

function completeLesson(id) {

    if (
        !academyData.completedLessons
            .includes(id)
    ) {

        academyData.completedLessons
            .push(id);

        saveData();

        updateDashboard();

        showToast(
            "Lesson completed successfully! 🎉"
        );
    }

    openLessons();
}


// =====================================================
// CATEGORY
// =====================================================

function openCategory(name) {

    const data =
        categoryData[name];

    if (!data) {

        showToast(
            "This lesson is being prepared."
        );

        return;
    }

    const html = `

        <div
            class="aba-modal-overlay"
            id="abaModalOverlay">

            <div class="aba-modal">

                <div class="aba-modal-header">

                    <div>

                        <div class="aba-badge">
                            ${data.category}
                        </div>

                        <h2>
                            ${name}
                        </h2>

                        <p>
                            ${data.description}
                        </p>

                    </div>

                    <button
                        class="aba-modal-close"
                        onclick="closeModal()">

                        ×

                    </button>

                </div>

                <div class="aba-modal-body">

                    <h3>
                        Course Content
                    </h3>

                    <div
                        class="aba-lesson-grid">

                        ${data.lessons.map(
                            (lesson, index) => `

                            <div
                                class="aba-lesson-card">

                                <div
                                    class="aba-badge">

                                    ${index + 1}

                                </div>

                                <h3>
                                    ${lesson}
                                </h3>

                                <p>
                                    ဒီ Lesson မှာ
                                    ${lesson}
                                    နဲ့ ပတ်သက်တဲ့
                                    လက်တွေ့ Business
                                    Knowledge တွေကို
                                    လေ့လာနိုင်ပါတယ်။
                                </p>

                                <button
                                    class="aba-primary-btn"
                                    onclick="completeCategory('${name}-${index}')">

                                    Start Lesson →

                                </button>

                            </div>

                        `
                        ).join("")}

                    </div>

                </div>

            </div>

        </div>
    `;

    showModal(html);
}


// =====================================================
// CATEGORY COMPLETE
// =====================================================

function completeCategory(id) {

    if (
        !academyData.completedCategories
            .includes(id)
    ) {

        academyData.completedCategories
            .push(id);

        saveData();
    }

    showToast(
        "Lesson completed! 🎉"
    );
}


// =====================================================
// BUSINESS PLAN
// =====================================================

function openBusinessPlan() {

    const html = `

        <div
            class="aba-modal-overlay"
            id="abaModalOverlay">

            <div class="aba-modal">

                <div class="aba-modal-header">

                    <div>

                        <div class="aba-badge">
                            BUSINESS PLAN
                        </div>

                        <h2>
                            📋 Business Plan Builder
                        </h2>

                        <p>
                            Create your business plan step by step.
                        </p>

                    </div>

                    <button
                        class="aba-modal-close"
                        onclick="closeModal()">

                        ×

                    </button>

                </div>

                <div class="aba-modal-body">

                    <div class="aba-form">

                        <label>
                            Business Name
                        </label>

                        <input
                            id="businessName"
                            placeholder="Enter business name">

                        <label>
                            Product / Service
                        </label>

                        <input
                            id="businessProduct"
                            placeholder="What do you sell?">

                        <label>
                            Target Customer
                        </label>

                        <input
                            id="businessCustomer"
                            placeholder="Who is your customer?">

                        <label>
                            Monthly Sales Target
                        </label>

                        <input
                            id="businessSales"
                            type="number"
                            placeholder="Example: 10000000">

                        <label>
                            Monthly Cost
                        </label>

                        <input
                            id="businessCost"
                            type="number"
                            placeholder="Example: 7000000">

                        <button
                            class="aba-primary-btn"
                            onclick="generateBusinessPlan()">

                            Generate Business Plan →

                        </button>

                    </div>

                </div>

            </div>

        </div>
    `;

    showModal(html);
}


// =====================================================
// GENERATE BUSINESS PLAN
// =====================================================

function generateBusinessPlan() {

    const name =
        document.getElementById(
            "businessName"
        ).value ||
        "My Business";

    const product =
        document.getElementById(
            "businessProduct"
        ).value ||
        "Product / Service";

    const customer =
        document.getElementById(
            "businessCustomer"
        ).value ||
        "Target Customers";

    const sales =
        Number(
            document.getElementById(
                "businessSales"
            ).value
        ) || 0;

    const cost =
        Number(
            document.getElementById(
                "businessCost"
            ).value
        ) || 0;

    const profit =
        sales - cost;

    const html = `

        <div
            class="aba-modal-overlay"
            id="abaModalOverlay">

            <div class="aba-modal">

                <div class="aba-modal-header">

                    <div>

                        <div class="aba-badge">
                            BUSINESS PLAN
                        </div>

                        <h2>
                            ${name}
                        </h2>

                    </div>

                    <button
                        class="aba-modal-close"
                        onclick="openBusinessPlan()">

                        ×

                    </button>

                </div>

                <div class="aba-modal-body">

                    <div class="aba-result">

                        <div class="aba-result-item">
                            <span>
                                Product / Service
                            </span>

                            <strong>
                                ${product}
                            </strong>
                        </div>

                        <div class="aba-result-item">
                            <span>
                                Target Customer
                            </span>

                            <strong>
                                ${customer}
                            </strong>
                        </div>

                        <div class="aba-result-item">
                            <span>
                                Monthly Sales
                            </span>

                            <strong>
                                ${formatMoney(sales)} Ks
                            </strong>
                        </div>

                        <div class="aba-result-item">
                            <span>
                                Monthly Cost
                            </span>

                            <strong>
                                ${formatMoney(cost)} Ks
                            </strong>
                        </div>

                        <div class="aba-result-item">
                            <span>
                                Estimated Profit
                            </span>

                            <strong>
                                ${formatMoney(profit)} Ks
                            </strong>
                        </div>

                    </div>

                    <button
                        class="aba-primary-btn"
                        onclick="openBusinessPlan()">

                        ← Create Another Plan

                    </button>

                </div>

            </div>

        </div>
    `;

    showModal(html);
}


// =====================================================
// BUSINESS TOOLS
// =====================================================

function openTools() {

    const html = `

        <div
            class="aba-modal-overlay"
            id="abaModalOverlay">

            <div class="aba-modal">

                <div class="aba-modal-header">

                    <div>

                        <div class="aba-badge">
                            BUSINESS TOOLS
                        </div>

                        <h2>
                            🧮 Business Tools
                        </h2>

                        <p>
                            Practical calculators for business owners.
                        </p>

                    </div>

                    <button
                        class="aba-modal-close"
                        onclick="closeModal()">

                        ×

                    </button>

                </div>

                <div class="aba-modal-body">

                    <div class="aba-tools-grid">

                        <div class="aba-tool-card">

                            <div class="aba-tool-icon">
                                💰
                            </div>

                            <h3>
                                Pricing Calculator
                            </h3>

                            <p>
                                Calculate selling price and margin.
                            </p>

                            <button
                                class="aba-primary-btn"
                                onclick="pricingCalculator()">

                                Open

                            </button>

                        </div>


                        <div class="aba-tool-card">

                            <div class="aba-tool-icon">
                                📈
                            </div>

                            <h3>
                                Profit Calculator
                            </h3>

                            <p>
                                Calculate business profit.
                            </p>

                            <button
                                class="aba-primary-btn"
                                onclick="profitCalculator()">

                                Open

                            </button>

                        </div>


                        <div class="aba-tool-card">

                            <div class="aba-tool-icon">
                                🎯
                            </div>

                            <h3>
                                Sales Target Calculator
                            </h3>

                            <p>
                                Calculate daily sales targets.
                            </p>

                            <button
                                class="aba-primary-btn"
                                onclick="salesTargetCalculator()">

                                Open

                            </button>

                        </div>


                        <div class="aba-tool-card">

                            <div class="aba-tool-icon">
                                ⚖️
                            </div>

                            <h3>
                                Break-Even Calculator
                            </h3>

                            <p>
                                Calculate your break-even point.
                            </p>

                            <button
                                class="aba-primary-btn"
                                onclick="breakEvenCalculator()">

                                Open

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    `;

    showModal(html);
}


// =====================================================
// PRICING CALCULATOR
// =====================================================

function pricingCalculator() {

    const html = `

        <div
            class="aba-modal-overlay"
            id="abaModalOverlay">

            <div class="aba-modal">

                <div class="aba-modal-header">

                    <h2>
                        💰 Pricing Calculator
                    </h2>

                    <button
                        class="aba-modal-close"
                        onclick="openTools()">

                        ×

                    </button>

                </div>

                <div class="aba-modal-body">

                    <div class="aba-calculator">

                        <label>
                            Cost Price
                        </label>

                        <input
                            id="priceCost"
                            type="number"
                            placeholder="Example: 10000">

                        <label>
                            Desired Profit Margin (%)
                        </label>

                        <input
                            id="priceMargin"
                            type="number"
                            placeholder="Example: 30">

                        <button
                            class="aba-primary-btn"
                            onclick="calculatePrice()">

                            Calculate

                        </button>

                        <div id="priceResult"></div>

                    </div>

                </div>

            </div>

        </div>
    `;

    showModal(html);
}


function calculatePrice() {

    const cost =
        Number(
            document.getElementById(
                "priceCost"
            ).value
        );

    const margin =
        Number(
            document.getElementById(
                "priceMargin"
            ).value
        );

    if (
        cost <= 0 ||
        margin < 0 ||
        margin >= 100
    ) {

        document.getElementById(
            "priceResult"
        ).innerHTML = `

            <div class="aba-error">
                ကျေးဇူးပြုပြီး မှန်ကန်တဲ့
                Number တွေ ထည့်ပေးပါ။
            </div>
        `;

        return;
    }

    const sellingPrice =
        cost / (1 - margin / 100);

    document.getElementById(
        "priceResult"
    ).innerHTML = `

        <div class="aba-result">

            <div class="aba-result-item">

                <span>
                    Recommended Selling Price
                </span>

                <strong>
                    ${formatMoney(
                        sellingPrice
                    )} Ks
                </strong>

            </div>

        </div>
    `;
}


// =====================================================
// PROFIT CALCULATOR
// =====================================================

function profitCalculator() {

    const html = `

        <div
            class="aba-modal-overlay"
            id="abaModalOverlay">

            <div class="aba-modal">

                <div class="aba-modal-header">

                    <h2>
                        📈 Profit Calculator
                    </h2>

                    <button
                        class="aba-modal-close"
                        onclick="openTools()">

                        ×

                    </button>

                </div>

                <div class="aba-modal-body">

                    <div class="aba-calculator">

                        <label>
                            Total Revenue
                        </label>

                        <input
                            id="profitRevenue"
                            type="number"
                            placeholder="Revenue">

                        <label>
                            Total Cost
                        </label>

                        <input
                            id="profitCost"
                            type="number"
                            placeholder="Cost">

                        <button
                            class="aba-primary-btn"
                            onclick="calculateProfit()">

                            Calculate

                        </button>

                        <div id="profitResult"></div>

                    </div>

                </div>

            </div>

        </div>
    `;

    showModal(html);
}


function calculateProfit() {

    const revenue =
        Number(
            document.getElementById(
                "profitRevenue"
            ).value
        );

    const cost =
        Number(
            document.getElementById(
                "profitCost"
            ).value
        );

    const profit =
        revenue - cost;

    const margin =
        revenue > 0
            ? (profit / revenue) * 100
            : 0;

    document.getElementById(
        "profitResult"
    ).innerHTML = `

        <div class="aba-result">

            <div class="aba-result-item">

                <span>
                    Profit
                </span>

                <strong>
                    ${formatMoney(profit)} Ks
                </strong>

            </div>

            <div class="aba-result-item">

                <span>
                    Profit Margin
                </span>

                <strong>
                    ${margin.toFixed(2)}%
                </strong>

            </div>

        </div>
    `;
}


// =====================================================
// SALES TARGET
// =====================================================

function salesTargetCalculator() {

    const html = `

        <div
            class="aba-modal-overlay"
            id="abaModalOverlay">

            <div class="aba-modal">

                <div class="aba-modal-header">

                    <h2>
                        🎯 Sales Target Calculator
                    </h2>

                    <button
                        class="aba-modal-close"
                        onclick="openTools()">

                        ×

                    </button>

                </div>

                <div class="aba-modal-body">

                    <div class="aba-calculator">

                        <label>
                            Monthly Sales Target
                        </label>

                        <input
                            id="salesTarget"
                            type="number"
                            placeholder="Example: 30000000">

                        <label>
                            Working Days
                        </label>

                        <input
                            id="workingDays"
                            type="number"
                            value="26">

                        <button
                            class="aba-primary-btn"
                            onclick="calculateSalesTarget()">

                            Calculate

                        </button>

                        <div
                            id="salesTargetResult">
                        </div>

                    </div>

                </div>

            </div>

        </div>
    `;

    showModal(html);
}


function calculateSalesTarget() {

    const target =
        Number(
            document.getElementById(
                "salesTarget"
            ).value
        );

    const days =
        Number(
            document.getElementById(
                "workingDays"
            ).value
        );

    if (
        target <= 0 ||
        days <= 0
    ) {

        document.getElementById(
            "salesTargetResult"
        ).innerHTML = `

            <div class="aba-error">
                ကျေးဇူးပြုပြီး မှန်ကန်တဲ့
                Number တွေ ထည့်ပေးပါ။
            </div>
        `;

        return;
    }

    const daily =
        target / days;

    document.getElementById(
        "salesTargetResult"
    ).innerHTML = `

        <div class="aba-result">

            <div class="aba-result-item">

                <span>
                    Monthly Target
                </span>

                <strong>
                    ${formatMoney(target)} Ks
                </strong>

            </div>

            <div class="aba-result-item">

                <span>
                    Daily Target
                </span>

                <strong>
                    ${formatMoney(daily)} Ks
                </strong>

            </div>

        </div>
    `;
}


// =====================================================
// BREAK EVEN
// =====================================================

function breakEvenCalculator() {

    const html = `

        <div
            class="aba-modal-overlay"
            id="abaModalOverlay">

            <div class="aba-modal">

                <div class="aba-modal-header">

                    <h2>
                        ⚖️ Break-Even Calculator
                    </h2>

                    <button
                        class="aba-modal-close"
                        onclick="openTools()">

                        ×

                    </button>

                </div>

                <div class="aba-modal-body">

                    <div class="aba-calculator">

                        <label>
                            Fixed Costs
                        </label>

                        <input
                            id="fixedCost"
                            type="number"
                            placeholder="Example: 5000000">

                        <label>
                            Selling Price Per Unit
                        </label>

                        <input
                            id="unitPrice"
                            type="number"
                            placeholder="Example: 10000">

                        <label>
                            Variable Cost Per Unit
                        </label>

                        <input
                            id="variableCost"
                            type="number"
                            placeholder="Example: 6000">

                        <button
                            class="aba-primary-btn"
                            onclick="calculateBreakEven()">

                            Calculate

                        </button>

                        <div
                            id="breakEvenResult">
                        </div>

                    </div>

                </div>

            </div>

        </div>
    `;

    showModal(html);
}


function calculateBreakEven() {

    const fixed =
        Number(
            document.getElementById(
                "fixedCost"
            ).value
        );

    const price =
        Number(
            document.getElementById(
                "unitPrice"
            ).value
        );

    const variable =
        Number(
            document.getElementById(
                "variableCost"
            ).value
        );

    const contribution =
        price - variable;

    if (
        fixed <= 0 ||
        price <= 0 ||
        contribution <= 0
    ) {

        document.getElementById(
            "breakEvenResult"
        ).innerHTML = `

            <div class="aba-error">
                Selling Price က
                Variable Cost ထက်
                မြင့်ရပါမယ်။
            </div>
        `;

        return;
    }

    const units =
        fixed / contribution;

    const sales =
        units * price;

    document.getElementById(
        "breakEvenResult"
    ).innerHTML = `

        <div class="aba-result">

            <div class="aba-result-item">

                <span>
                    Break-Even Units
                </span>

                <strong>
                    ${Math.ceil(units)}
                </strong>

            </div>

            <div class="aba-result-item">

                <span>
                    Break-Even Sales
                </span>

                <strong>
                    ${formatMoney(sales)} Ks
                </strong>

            </div>

        </div>
    `;
}


// =====================================================
// AI BUSINESS COACH
// =====================================================

function openAI() {

    const html = `

        <div
            class="aba-modal-overlay"
            id="abaModalOverlay">

            <div class="aba-modal">

                <div class="aba-modal-header">

                    <div>

                        <div class="aba-badge">
                            AI BUSINESS COACH
                        </div>

                        <h2>
                            🤖 AI Business Coach
                        </h2>

                        <p>
                            Your future AI business assistant.
                        </p>

                    </div>

                    <button
                        class="aba-modal-close"
                        onclick="closeModal()">

                        ×

                    </button>

                </div>

                <div class="aba-modal-body">

                    <div class="aba-ai-box">

                        <div class="aba-ai-icon">
                            🤖
                        </div>

                        <h3>
                            AI Business Coach
                        </h3>

                        <p>
                            Business Strategy,
                            Sales, Marketing,
                            Leadership နဲ့
                            Business Management
                            အကြောင်းတွေကို
                            AI နဲ့ မေးမြန်းနိုင်မယ့်
                            Feature ဖြစ်ပါတယ်။
                        </p>

                        <div class="aba-ai-features">

                            <div>
                                ✓ Business Strategy
                            </div>

                            <div>
                                ✓ Sales Coaching
                            </div>

                            <div>
                                ✓ Marketing Ideas
                            </div>

                            <div>
                                ✓ Financial Thinking
                            </div>

                            <div>
                                ✓ Leadership Advice
                            </div>

                        </div>

                        <div class="aba-premium-lock">

                            🔒 AI Coach ကို
                            Premium Version မှာ
                            အသုံးပြုနိုင်ပါမယ်။

                        </div>

                    </div>

                </div>

            </div>

        </div>
    `;

    showModal(html);
}


// =====================================================
// PREMIUM
// =====================================================

function openPremium() {

    const html = `

        <div
            class="aba-modal-overlay"
            id="abaModalOverlay">

            <div class="aba-modal">

                <div class="aba-modal-header">

                    <div>

                        <div class="aba-badge">
                            PREMIUM
                        </div>

                        <h2>
                            👑 Premium Academy
                        </h2>

                        <p>
                            Unlock the complete business learning system.
                        </p>

                    </div>

                    <button
                        class="aba-modal-close"
                        onclick="closeModal()">

                        ×

                    </button>

                </div>

                <div class="aba-modal-body">

                    <div class="aba-premium-box">

                        <div class="aba-premium-large-icon">
                            👑
                        </div>

                        <h2>
                            Aung Business Academy Premium
                        </h2>

                        <p>
                            သင့်ရဲ့ Business Knowledge နဲ့
                            Management Skill ကို
                            ပိုမိုတိုးတက်အောင် လေ့လာနိုင်ပါမယ်။
                        </p>

                        <div class="aba-premium-list">

                            <div>
                                ✓ Advanced Business Courses
                            </div>

                            <div>
                                ✓ AI Business Coach
                            </div>

                            <div>
                                ✓ Advanced Business Tools
                            </div>

                            <div>
                                ✓ Business Plan Builder
                            </div>

                            <div>
                                ✓ Sales & Marketing Templates
                            </div>

                            <div>
                                ✓ Premium Resources
                            </div>

                        </div>

                        <div class="aba-price">
                            PREMIUM
                        </div>

                        <button
                            class="aba-primary-btn"
                            onclick="showToast('Premium system coming soon!')">

                            Coming Soon

                        </button>

                    </div>

                </div>

            </div>

        </div>
    `;

    showModal(html);
}


// =====================================================
// PROFILE
// =====================================================

function openProfile() {

    const completed =
        academyData.completedLessons.length;

    const percentage =
        Math.round(
            (completed / lessons.length) * 100
        );

    const html = `

        <div
            class="aba-modal-overlay"
            id="abaModalOverlay">

            <div class="aba-modal">

                <div class="aba-modal-header">

                    <h2>
                        👤 My Profile
                    </h2>

                    <button
                        class="aba-modal-close"
                        onclick="closeModal()">

                        ×

                    </button>

                </div>

                <div class="aba-modal-body">

                    <div class="aba-profile-box">

                        <div class="aba-profile-avatar">
                            A
                        </div>

                        <h2>
                            Aung
                        </h2>

                        <p>
                            Business Learner
                        </p>

                        <div class="aba-profile-stats">

                            <div>

                                <strong>
                                    ${completed}
                                </strong>

                                <span>
                                    Lessons
                                </span>

                            </div>

                            <div>

                                <strong>
                                    ${percentage}%
                                </strong>

                                <span>
                                    Progress
                                </span>

                            </div>

                            <div>

                                <strong>
                                    4
                                </strong>

                                <span>
                                    Tools
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    `;

    showModal(html);
}


// =====================================================
// NOTIFICATIONS
// =====================================================

function openNotifications() {

    const html = `

        <div
            class="aba-modal-overlay"
            id="abaModalOverlay">

            <div class="aba-modal">

                <div class="aba-modal-header">

                    <h2>
                        🔔 Notifications
                    </h2>

                    <button
                        class="aba-modal-close"
                        onclick="closeModal()">

                        ×

                    </button>

                </div>

                <div class="aba-modal-body">

                    <div
                        class="aba-notification-box">

                        <div
                            class="aba-notification-item">

                            📚 New business lessons
                            are available.

                        </div>

                        <div
                            class="aba-notification-item">

                            🧮 Business Tools
                            are ready to use.

                        </div>

                        <div
                            class="aba-notification-item">

                            🤖 AI Business Coach
                            is coming soon.

                        </div>

                        <div
                            class="aba-notification-item">

                            👑 Premium Academy
                            is under development.

                        </div>

                    </div>

                </div>

            </div>

        </div>
    `;

    showModal(html);
}


// =====================================================
// MODAL
// =====================================================

function showModal(html) {

    closeModal();

    document.body.insertAdjacentHTML(
        "beforeend",
        html
    );

    document.body.style.overflow =
        "hidden";
}


function closeModal() {

    const modal =
        document.getElementById(
            "abaModalOverlay"
        );

    if (modal) {
        modal.remove();
    }

    document.body.style.overflow =
        "";
}


// =====================================================
// TOAST
// =====================================================

function showToast(message) {

    const oldToast =
        document.querySelector(
            ".aba-toast"
        );

    if (oldToast) {
        oldToast.remove();
    }

    const toast =
        document.createElement(
            "div"
        );

    toast.className =
        "aba-toast";

    toast.textContent =
        message;

    document.body.appendChild(
        toast
    );

    setTimeout(() => {

        toast.classList.add(
            "show"
        );

    }, 50);

    setTimeout(() => {

        toast.classList.remove(
            "show"
        );

        setTimeout(() => {

            toast.remove();

        }, 300);

    }, 2500);
}


// =====================================================
// NUMBER FORMAT
// =====================================================

function formatMoney(value) {

    return Number(
        value || 0
    ).toLocaleString(
        "en-US",
        {
            maximumFractionDigits: 0
        }
    );
}


// =====================================================
// AUTOMATIC CATEGORY CONNECTION
// =====================================================

function connectSubmenuButtons() {

    const buttons =
        document.querySelectorAll(
            ".submenu button"
        );

    buttons.forEach(button => {

        if (
            button.dataset.abaConnected
        ) {
            return;
        }

        const text =
            button.textContent
                .trim()
                .replace(
                    /\s+/g,
                    " "
                );

        button.addEventListener(
            "click",
            function(event) {

                event.preventDefault();

                event.stopPropagation();

                if (
                    text ===
                    "Business Plan"
                ) {

                    openBusinessPlan();

                    return;
                }

                if (
                    categoryData[text]
                ) {

                    openCategory(
                        text
                    );

                    return;
                }

                showToast(
                    `${text} course is coming soon.`
                );
            }
        );

        button.dataset.abaConnected =
            "true";
    });
}


// =====================================================
// NAVIGATION
// =====================================================

function connectNavigation() {

    const navItems =
        document.querySelectorAll(
            ".nav-item"
        );

    navItems.forEach(item => {

        item.addEventListener(
            "click",
            function() {

                if (
                    window.innerWidth <= 900 &&
                    !item.closest(
                        ".nav-group"
                    )
                ) {

                    toggleSidebar();

                }

            }
        );

    });
}


// =====================================================
// MODAL OUTSIDE CLICK
// =====================================================

document.addEventListener(
    "click",
    function(event) {

        const overlay =
            document.getElementById(
                "abaModalOverlay"
            );

        if (
            overlay &&
            event.target === overlay
        ) {

            closeModal();

        }

    }
);


// =====================================================
// ESC KEY
// =====================================================

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            closeModal();

        }

    }
);


// =====================================================
// START APP
// =====================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        updateDashboard();

        connectSubmenuButtons();

        connectNavigation();

        console.log(
            "Aung Business Academy V4 loaded successfully."
        );

    }
);


// =====================================================
// GLOBAL FUNCTIONS
// =====================================================

window.toggleMenu =
    toggleMenu;

window.toggleSidebar =
    toggleSidebar;

window.goDashboard =
    goDashboard;

window.openLessons =
    openLessons;

window.startLesson =
    startLesson;

window.completeLesson =
    completeLesson;

window.openCategory =
    openCategory;

window.completeCategory =
    completeCategory;

window.openBusinessPlan =
    openBusinessPlan;

window.generateBusinessPlan =
    generateBusinessPlan;

window.openTools =
    openTools;

window.pricingCalculator =
    pricingCalculator;

window.calculatePrice =
    calculatePrice;

window.profitCalculator =
    profitCalculator;

window.calculateProfit =
    calculateProfit;

window.salesTargetCalculator =
    salesTargetCalculator;

window.calculateSalesTarget =
    calculateSalesTarget;

window.breakEvenCalculator =
    breakEvenCalculator;

window.calculateBreakEven =
    calculateBreakEven;

window.openAI =
    openAI;

window.openPremium =
    openPremium;

window.openProfile =
    openProfile;

window.openNotifications =
    openNotifications;

window.closeModal =
    closeModal;

window.showToast =
    showToast;
