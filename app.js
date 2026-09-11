
      // =====================================================
// AUNG BUSINESS ACADEMY
// APP.JS V3
// =====================================================

"use strict";

// =====================================================
// STORAGE
// =====================================================

const STORAGE_KEY = "aung_business_academy_v3";

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
// LESSON DATABASE
// =====================================================

const lessons = [
    {
        id: 1,
        title: "Business Basics",
        category: "Leadership & Strategy",
        description: "Learn the foundation of starting and growing a business.",
        content: `
            <h3>What is a Business?</h3>
            <p>A business creates value for customers and earns revenue by providing products or services.</p>

            <h3>Three Important Things</h3>
            <ul>
                <li>Customer</li>
                <li>Product or Service</li>
                <li>Profit</li>
            </ul>

            <div class="aba-learning-box">
                <strong>Key Point:</strong>
                A successful business solves a real customer problem.
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
            <p>Before selling, understand your customer's needs, problems, budget and buying behavior.</p>

            <ul>
                <li>Who is your customer?</li>
                <li>What problem do they have?</li>
                <li>What solution are they looking for?</li>
                <li>Why should they buy from you?</li>
            </ul>

            <div class="aba-learning-box">
                <strong>Key Point:</strong>
                The better you understand customers, the easier it becomes to sell.
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
            <p>A brand is the perception customers have about your business.</p>

            <h3>Strong Brand Elements</h3>
            <ul>
                <li>Clear positioning</li>
                <li>Consistent identity</li>
                <li>Customer trust</li>
                <li>Strong value proposition</li>
            </ul>

            <div class="aba-learning-box">
                <strong>Key Point:</strong>
                A brand is more than a logo. It is the customer's experience and perception.
            </div>
        `
    },

    {
        id: 4,
        title: "Marketing Basics",
        category: "Marketing",
        description: "Understand the fundamentals of marketing.",
        content: `
            <h3>Marketing</h3>
            <p>Marketing is the process of attracting customers and creating demand for your product or service.</p>

            <h3>Basic Marketing Questions</h3>
            <ul>
                <li>What are you selling?</li>
                <li>Who are you selling to?</li>
                <li>Where can you find customers?</li>
                <li>Why should they choose you?</li>
            </ul>
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
                <li>Find prospects</li>
                <li>Understand needs</li>
                <li>Present the solution</li>
                <li>Handle objections</li>
                <li>Close the sale</li>
                <li>Follow up</li>
            </ol>

            <div class="aba-learning-box">
                <strong>Key Point:</strong>
                Professional selling is about solving customer problems, not simply pushing products.
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

            <ul>
                <li>Listen carefully</li>
                <li>Respond quickly</li>
                <li>Communicate clearly</li>
                <li>Solve problems</li>
                <li>Follow up</li>
            </ul>

            <div class="aba-learning-box">
                <strong>Key Point:</strong>
                Good service creates repeat customers and referrals.
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

            <ul>
                <li>Set clear expectations</li>
                <li>Delegate responsibility</li>
                <li>Coach team members</li>
                <li>Review performance</li>
                <li>Give feedback</li>
                <li>Recognize achievement</li>
            </ul>

            <div class="aba-learning-box">
                <strong>Leadership Principle:</strong>
                Great managers develop people instead of micromanaging them.
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
                <strong>Profit = Revenue − Total Costs</strong>
            </div>

            <h3>Example</h3>

            <p>Revenue = 10,000,000 Ks</p>
            <p>Total Costs = 7,000,000 Ks</p>
            <p>Profit = 3,000,000 Ks</p>

            <p>Understanding profit is essential for business decision-making.</p>
        `
    },

    {
        id: 9,
        title: "Time Management",
        category: "Personal Productivity",
        description: "Manage your time and focus on high-value activities.",
        content: `
            <h3>Effective Time Management</h3>

            <ul>
                <li>Set priorities</li>
                <li>Plan your day</li>
                <li>Focus on important tasks</li>
                <li>Avoid unnecessary activities</li>
                <li>Review your results</li>
            </ul>

            <div class="aba-learning-box">
                <strong>Key Point:</strong>
                Productivity is not about being busy. It is about producing meaningful results.
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

            <p>Business growth can come from:</p>

            <ul>
                <li>More customers</li>
                <li>Higher sales per customer</li>
                <li>New products</li>
                <li>New markets</li>
                <li>Better distribution</li>
                <li>Improved customer retention</li>
            </ul>

            <div class="aba-learning-box">
                <strong>Key Point:</strong>
                Sustainable growth requires customers, revenue, profit and strong execution.
            </div>
        `
    }
];


// =====================================================
// CATEGORY DATABASE
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

    const lessonCount = document.getElementById("lessonCount");
    const progress = document.getElementById("progress");

    const completed = academyData.completedLessons.length;
    const total = lessons.length;

    const percentage = total === 0
        ? 0
        : Math.round((completed / total) * 100);

    if (lessonCount) {
        lessonCount.textContent = completed;
    }

    if (progress) {
        progress.textContent = percentage + "%";
    }

    const progressElements = document.querySelectorAll(
        "[data-progress]"
    );

    progressElements.forEach(element => {
        element.textContent = percentage + "%";
    });
}


// =====================================================
// DASHBOARD NAVIGATION
// =====================================================

function goDashboard() {

    closeModal();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    const title = document.querySelector(".topbar h1");

    if (title) {
        title.textContent = "Dashboard";
    }
}


// =====================================================
// SIDEBAR MENU
// =====================================================

function toggleMenu(id) {

    const menu = document.getElementById(id);

    if (!menu) {
        return;
    }

    menu.classList.toggle("show");

    const parent = menu.previousElementSibling;

    if (parent) {
        const arrow = parent.querySelector(".arrow");

        if (arrow) {
            arrow.textContent =
                menu.classList.contains("show")
                    ? "▴"
                    : "▾";
        }
    }
}


function toggleSidebar() {

    const sidebar = document.querySelector(".sidebar");

    if (!sidebar) {
        return;
    }

    sidebar.classList.toggle("mobile-open");
}


// =====================================================
// LESSONS
// =====================================================

function openLessons() {

    const html = `
        <div class="aba-modal-overlay" id="abaModalOverlay">
            <div class="aba-modal">

                <div class="aba-modal-header">
                    <div>
                        <h2>📚 Business Lessons</h2>
                        <p>Learn business step by step.</p>
                    </div>

                    <button
                        class="aba-modal-close"
                        onclick="closeModal()">
                        ×
                    </button>
                </div>

                <div class="aba-modal-body">

                    <div class="aba-lesson-grid">

                        ${lessons.map(lesson => {

                            const completed =
                                academyData.completedLessons.includes(
                                    lesson.id
                                );

                            return `
                                <div class="aba-lesson-card">

                                    <div class="aba-badge">
                                        Lesson ${lesson.id}
                                    </div>

                                    <h3>${lesson.title}</h3>

                                    <p>
                                        ${lesson.description}
                                    </p>

                                    <small>
                                        ${lesson.category}
                                    </small>

                                    <button
                                        class="aba-primary-btn"
                                        onclick="startLesson(${lesson.id})">

                                        ${completed
                                            ? "Review Lesson"
                                            : "Start Lesson →"}

                                    </button>

                                    ${completed
                                        ? `<div class="aba-completed">
                                            ✓ Completed
                                           </div>`
                                        : ""}

                                </div>
                            `;

                        }).join("")}

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

    const lesson = lessons.find(
        item => item.id === id
    );

    if (!lesson) {
        return;
    }

    academyData.lastOpened = id;
    saveData();

    const completed =
        academyData.completedLessons.includes(id);

    const html = `
        <div class="aba-modal-overlay" id="abaModalOverlay">

            <div class="aba-modal">

                <div class="aba-modal-header">

                    <div>
                        <div class="aba-badge">
                            Lesson ${lesson.id}
                        </div>

                        <h2>${lesson.title}</h2>

                        <p>${lesson.category}</p>
                    </div>

                    <button
                        class="aba-modal-close"
                        onclick="openLessons()">
                        ×
                    </button>

                </div>

                <div class="aba-modal-body">

                    <div class="aba-lesson-detail">

                        ${lesson.content}

                    </div>

                    ${
                        completed
                        ? `
                            <div class="aba-learning-box">
                                ✓ You have already completed this lesson.
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

    if (!academyData.completedLessons.includes(id)) {

        academyData.completedLessons.push(id);

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

    const data = categoryData[name];

    if (!data) {

        showToast(
            "This lesson is being prepared."
        );

        return;
    }

    const html = `
        <div class="aba-modal-overlay" id="abaModalOverlay">

            <div class="aba-modal">

                <div class="aba-modal-header">

                    <div>
                        <div class="aba-badge">
                            ${data.category}
                        </div>

                        <h2>${name}</h2>

                        <p>${data.description}</p>
                    </div>

                    <button
                        class="aba-modal-close"
                        onclick="closeModal()">
                        ×
                    </button>

                </div>

                <div class="aba-modal-body">

                    <h3>Course Content</h3>

                    <div class="aba-lesson-grid">

                        ${data.lessons.map(
                            (lesson, index) => `

                            <div class="aba-lesson-card">

                                <div class="aba-badge">
                                    ${index + 1}
                                </div>

                                <h3>${lesson}</h3>

                                <p>
                                    Learn practical
                                    ${lesson.toLowerCase()}
                                    skills.
                                </p>

                                <button
                                    class="aba-primary-btn"
                                    onclick="completeCategory('${name}-${index}')">

                                    Start Lesson →

                                </button>

                            </div>

                        `).join("")}

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

    if (!academyData.completedCategories.includes(id)) {

        academyData.completedCategories.push(id);

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
        <div class="aba-modal-overlay" id="abaModalOverlay">

            <div class="aba-modal">

                <div class="aba-modal-header">

                    <div>
                        <div class="aba-badge">
                            BUSINESS PLAN
                        </div>

                        <h2>📋 Business Plan Builder</h2>

                        <p>Create your business plan step by step.</p>
                    </div>

                    <button
                        class="aba-modal-close"
                        onclick="closeModal()">
                        ×
                    </button>

                </div>

                <div class="aba-modal-body">

                    <div class="aba-form">

                        <label>Business Name</label>

                        <input
                            id="businessName"
                            placeholder="Enter business name">

                        <label>Product / Service</label>

                        <input
                            id="businessProduct"
                            placeholder="What do you sell?">

                        <label>Target Customer</label>

                        <input
                            id="businessCustomer"
                            placeholder="Who is your customer?">

                        <label>Monthly Sales Target</label>

                        <input
                            id="businessSales"
                            type="number"
                            placeholder="Example: 10000000">

                        <label>Monthly Cost</label>

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
        document.getElementById("businessName").value ||
        "My Business";

    const product =
        document.getElementById("businessProduct").value ||
        "Product / Service";

    const customer =
        document.getElementById("businessCustomer").value ||
        "Target Customers";

    const sales =
        Number(
            document.getElementById("businessSales").value
        ) || 0;

    const cost =
        Number(
            document.getElementById("businessCost").value
        ) || 0;

    const profit = sales - cost;

    const html = `
        <div class="aba-modal-overlay" id="abaModalOverlay">

            <div class="aba-modal">

                <div class="aba-modal-header">

                    <div>
                        <div class="aba-badge">
                            BUSINESS PLAN
                        </div>

                        <h2>${name}</h2>
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
                            <span>Product / Service</span>
                            <strong>${product}</strong>
                        </div>

                        <div class="aba-result-item">
                            <span>Target Customer</span>
                            <strong>${customer}</strong>
                        </div>

                        <div class="aba-result-item">
                            <span>Monthly Sales</span>
                            <strong>${formatMoney(sales)} Ks</strong>
                        </div>

                        <div class="aba-result-item">
                            <span>Monthly Cost</span>
                            <strong>${formatMoney(cost)} Ks</strong>
                        </div>

                        <div class="aba-result-item">
                            <span>Estimated Profit</span>
                            <strong>${formatMoney(profit)} Ks</strong>
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
        <div class="aba-modal-overlay" id="abaModalOverlay">

            <div class="aba-modal">

                <div class="aba-modal-header">

                    <div>
                        <div class="aba-badge">
                            BUSINESS TOOLS
                        </div>

                        <h2>🧮 Business Tools</h2>

                        <p>Practical calculators for business owners.</p>
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

                            <h3>Pricing Calculator</h3>

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

                            <h3>Profit Calculator</h3>

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

                            <h3>Sales Target Calculator</h3>

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

                            <h3>Break-Even Calculator</h3>

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
        <div class="aba-modal-overlay" id="abaModalOverlay">

            <div class="aba-modal">

                <div class="aba-modal-header">

                    <h2>💰 Pricing Calculator</h2>

                    <button
                        class="aba-modal-close"
                        onclick="openTools()">
                        ×
                    </button>

                </div>

                <div class="aba-modal-body">

                    <div class="aba-calculator">

                        <label>Cost Price</label>

                        <input
                            id="priceCost"
                            type="number"
                            placeholder="Example: 10000">

                        <label>Desired Profit Margin (%)</label>

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
            document.getElementById("priceCost").value
        );

    const margin =
        Number(
            document.getElementById("priceMargin").value
        );

    if (cost <= 0 || margin >= 100) {

        document.getElementById("priceResult").innerHTML =
            `<div class="aba-error">
                Please enter valid numbers.
             </div>`;

        return;
    }

    const sellingPrice =
        cost / (1 - margin / 100);

    document.getElementById("priceResult").innerHTML = `

        <div class="aba-result">

            <div class="aba-result-item">

                <span>Recommended Selling Price</span>

                <strong>
                    ${formatMoney(sellingPrice)} Ks
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
        <div class="aba-modal-overlay" id="abaModalOverlay">

            <div class="aba-modal">

                <div class="aba-modal-header">

                    <h2>📈 Profit Calculator</h2>

                    <button
                        class="aba-modal-close"
                        onclick="openTools()">
                        ×
                    </button>

                </div>

                <div class="aba-modal-body">

                    <div class="aba-calculator">

                        <label>Total Revenue</label>

                        <input
                            id="profitRevenue"
                            type="number"
                            placeholder="Revenue">

                        <label>Total Cost</label>

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
            document.getElementById("profitRevenue").value
        );

    const cost =
        Number(
            document.getElementById("profitCost").value
        );

    const profit = revenue - cost;

    const margin =
        revenue > 0
            ? (profit / revenue) * 100
            : 0;

    document.getElementById("profitResult").innerHTML = `

        <div class="aba-result">

            <div class="aba-result-item">
                <span>Profit</span>
                <strong>${formatMoney(profit)} Ks</strong>
            </div>

            <div class="aba-result-item">
                <span>Profit Margin</span>
                <strong>${margin.toFixed(2)}%</strong>
            </div>

        </div>
    `;
}


// =====================================================
// SALES TARGET CALCULATOR
// =====================================================

function salesTargetCalculator() {

    const html = `
        <div class="aba-modal-overlay" id="abaModalOverlay">

            <div class="aba-modal">

                <div class="aba-modal-header">

                    <h2>🎯 Sales Target Calculator</h2>

                    <button
                        class="aba-modal-close"
                        onclick="openTools()">
                        ×
                    </button>

                </div>

                <div class="aba-modal-body">

                    <div class="aba-calculator">

                        <label>Monthly Sales Target</label>

                        <input
                            id="salesTarget"
                            type="number"
                            placeholder="Example: 30000000">

                        <label>Working Days</label>

                        <input
                            id="workingDays"
                            type="number"
                            value="26">

                        <button
                            class="aba-primary-btn"
                            onclick="calculateSalesTarget()">

                            Calculate

                        </button>

                        <div id="salesTargetResult"></div>

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
            document.getElementById("salesTarget").value
        );

    const days =
        Number(
            document.getElementById("workingDays").value
        );

    if (target <= 0 || days <= 0) {

        document.getElementById(
            "salesTargetResult"
        ).innerHTML =
            `<div class="aba-error">
                Please enter valid numbers.
             </div>`;

        return;
    }

    const daily = target / days;

    document.getElementById(
        "salesTargetResult"
    ).innerHTML = `

        <div class="aba-result">

            <div class="aba-result-item">

                <span>Monthly Target</span>

                <strong>
                    ${formatMoney(target)} Ks
                </strong>

            </div>

            <div class="aba-result-item">

                <span>Daily Target</span>

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
        <div class="aba-modal-overlay" id="abaModalOverlay">

            <div class="aba-modal">

                <div class="aba-modal-header">

                    <h2>⚖️ Break-Even Calculator</h2>

                    <button
                        class="aba-modal-close"
                        onclick="openTools()">
                        ×
                    </button>

                </div>

                <div class="aba-modal-body">

                    <div class="aba-calculator">

                        <label>Fixed Costs</label>

                        <input
                            id="fixedCost"
                            type="number"
                            placeholder="Example: 5000000">

                        <label>Selling Price Per Unit</label>

                        <input
                            id="unitPrice"
                            type="number"
                            placeholder="Example: 10000">

                        <label>Variable Cost Per Unit</label>

                        <input
                            id="variableCost"
                            type="number"
                            placeholder="Example: 6000">

                        <button
                            class="aba-primary-btn"
                            onclick="calculateBreakEven()">

                            Calculate

                        </button>

                        <div id="breakEvenResult"></div>

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
            document.getElementById("fixedCost").value
        );

    const price =
        Number(
            document.getElementById("unitPrice").value
        );

    const variable =
        Number(
            document.getElementById("variableCost").value
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
        ).innerHTML =
            `<div class="aba-error">
                Selling price must be higher than variable cost.
             </div>`;

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

                <span>Break-Even Units</span>

                <strong>
                    ${Math.ceil(units)}
                </strong>

            </div>

            <div class="aba-result-item">

                <span>Break-Even Sales</span>

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
        <div class="aba-modal-overlay" id="abaModalOverlay">

            <div class="aba-modal">

                <div class="aba-modal-header">

                    <div>

                        <div class="aba-badge">
                            AI BUSINESS COACH
                        </div>

                        <h2>🤖 AI Business Coach</h2>

                        <p>Your future AI business assistant.</p>

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

                        <h3>AI Business Coach</h3>

                        <p>
                            Get business advice, sales strategy,
                            marketing ideas and management guidance.
                        </p>

                        <div class="aba-ai-features">

                            <div>✓ Business Strategy</div>
                            <div>✓ Sales Coaching</div>
                            <div>✓ Marketing Ideas</div>
                            <div>✓ Financial Thinking</div>
                            <div>✓ Leadership Advice</div>

                        </div>

                        <div class="aba-premium-lock">

                            🔒 AI Coach is coming in the
                            Premium version.

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
        <div class="aba-modal-overlay" id="abaModalOverlay">

            <div class="aba-modal">

                <div class="aba-modal-header">

                    <div>

                        <div class="aba-badge">
                            PREMIUM
                        </div>

                        <h2>👑 Premium Academy</h2>

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
                            Take your business knowledge
                            to the next level.
                        </p>

                        <div class="aba-premium-list">

                            <div>✓ Advanced Business Courses</div>
                            <div>✓ AI Business Coach</div>
                            <div>✓ Advanced Business Tools</div>
                            <div>✓ Business Plan Builder</div>
                            <div>✓ Sales & Marketing Templates</div>
                            <div>✓ Premium Resources</div>

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

    const html = `
        <div class="aba-modal-overlay" id="abaModalOverlay">

            <div class="aba-modal">

                <div class="aba-modal-header">

                    <h2>👤 My Profile</h2>

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

                        <h2>Aung</h2>

                        <p>Business Learner</p>

                        <div class="aba-profile-stats">

                            <div>
                                <strong>
                                    ${completed}
                                </strong>
                                <span>Lessons</span>
                            </div>

                            <div>
                                <strong>
                                    ${Math.round(
                                        (completed / lessons.length) * 100
                                    )}%
                                </strong>
                                <span>Progress</span>
                            </div>

                            <div>
                                <strong>
                                    4
                                </strong>
                                <span>Tools</span>
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
        <div class="aba-modal-overlay" id="abaModalOverlay">

            <div class="aba-modal">

                <div class="aba-modal-header">

                    <h2>🔔 Notifications</h2>

                    <button
                        class="aba-modal-close"
                        onclick="closeModal()">
                        ×
                    </button>

                </div>

                <div class="aba-modal-body">

                    <div class="aba-notification-box">

                        <div class="aba-notification-item">
                            📚 New business lessons are available.
                        </div>

                        <div class="aba-notification-item">
                            🧮 Business Tools are ready to use.
                        </div>

                        <div class="aba-notification-item">
                            🤖 AI Business Coach is coming soon.
                        </div>

                        <div class="aba-notification-item">
                            👑 Premium Academy is under development.
                        </div>

                    </div>

                </div>

            </div>

        </div>
    `;

    showModal(html);
}


// =====================================================
// MODAL SYSTEM
// =====================================================

function showModal(html) {

    closeModal();

    document.body.insertAdjacentHTML(
        "beforeend",
        html
    );

    document.body.style.overflow = "hidden";
}


function closeModal() {

    const modal =
        document.getElementById(
            "abaModalOverlay"
        );

    if (modal) {
        modal.remove();
    }

    document.body.style.overflow = "";
}


// =====================================================
// TOAST
// =====================================================

function showToast(message) {

    const oldToast =
        document.querySelector(".aba-toast");

    if (oldToast) {
        oldToast.remove();
    }

    const toast =
        document.createElement("div");

    toast.className = "aba-toast";

    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("show");

    }, 50);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {
            toast.remove();
        }, 300);

    }, 2500);
}


// =====================================================
// NUMBER FORMAT
// =====================================================

function formatMoney(value) {

    return Number(value || 0).toLocaleString(
        "en-US",
        {
            maximumFractionDigits: 0
        }
    );
}


// =====================================================
// AUTOMATIC SUBMENU CONNECTION
// IMPORTANT
// =====================================================

function connectSubmenuButtons() {

    const buttons =
        document.querySelectorAll(
            ".submenu button"
        );

    buttons.forEach(button => {

        if (button.dataset.abaConnected) {
            return;
        }

        const text =
            button.textContent
                .trim()
                .replace(/\s+/g, " ");

        button.addEventListener(
            "click",
            function(event) {

                event.preventDefault();
                event.stopPropagation();

                if (text === "Business Plan") {
                    openBusinessPlan();
                    return;
                }

                if (categoryData[text]) {
                    openCategory(text);
                    return;
                }

                showToast(
                    `${text} course is coming soon.`
                );
            }
        );

        button.dataset.abaConnected = "true";
    });
}


// =====================================================
// NAVIGATION CONNECTION
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
                    !item.closest(".nav-group")
                ) {

                    toggleSidebar();

                }

            }
        );

    });
}


// =====================================================
// CLOSE MODAL BY CLICKING OUTSIDE
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

        if (event.key === "Escape") {
            closeModal();
        }

    }
);


// =====================================================
// INITIALIZATION
// =====================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        updateDashboard();

        connectSubmenuButtons();

        connectNavigation();

        console.log(
            "Aung Business Academy V3 loaded successfully."
        );

    }
);


// =====================================================
// EXPORT GLOBAL FUNCTIONS
// =====================================================

window.toggleMenu = toggleMenu;
window.toggleSidebar = toggleSidebar;

window.goDashboard = goDashboard;

window.openLessons = openLessons;
window.startLesson = startLesson;
window.completeLesson = completeLesson;

window.openCategory = openCategory;
window.completeCategory = completeCategory;

window.openBusinessPlan = openBusinessPlan;
window.generateBusinessPlan = generateBusinessPlan;

window.openTools = openTools;

window.pricingCalculator = pricingCalculator;
window.calculatePrice = calculatePrice;

window.profitCalculator = profitCalculator;
window.calculateProfit = calculateProfit;

window.salesTargetCalculator = salesTargetCalculator;
window.calculateSalesTarget = calculateSalesTarget;

window.breakEvenCalculator = breakEvenCalculator;
window.calculateBreakEven = calculateBreakEven;

window.openAI = openAI;
window.openPremium = openPremium;

window.openProfile = openProfile;
window.openNotifications = openNotifications;

window.closeModal = closeModal;
window.showToast = showToast;
