```javascript
/* =========================================================
   AUNG BUSINESS ACADEMY
   PROFESSIONAL BUSINESS LESSON ENGINE
   230 LESSONS
   23 MODULES × 10 LESSONS
   ========================================================= */

(function () {
  "use strict";

  /* =========================================================
     1. MODULES
     ========================================================= */

  const MODULES = [
    {
      name: "Business Basics",
      icon: "🏢",
      lessons: [
        "Understanding Business",
        "Business Models",
        "Value Creation",
        "Revenue & Cost",
        "Profit Fundamentals",
        "Business Resources",
        "Business Environment",
        "Business Growth",
        "Business Risk",
        "Building a Strong Business Foundation"
      ]
    },

    {
      name: "Strategic Thinking",
      icon: "♟️",
      lessons: [
        "What Is Strategy?",
        "Strategic Thinking",
        "Vision & Mission",
        "Competitive Advantage",
        "SWOT Analysis",
        "Market Positioning",
        "Strategic Priorities",
        "Business Decision Making",
        "Strategic Execution",
        "Building a Winning Strategy"
      ]
    },

    {
      name: "Brand Basics",
      icon: "🏷️",
      lessons: [
        "Understanding Branding",
        "Brand Identity",
        "Brand Positioning",
        "Brand Promise",
        "Customer Perception",
        "Brand Trust",
        "Brand Differentiation",
        "Brand Consistency",
        "Brand Experience",
        "Building a Strong Brand"
      ]
    },

    {
      name: "Marketing Basics",
      icon: "📣",
      lessons: [
        "Understanding Marketing",
        "Market Segmentation",
        "Target Customers",
        "Customer Needs",
        "Marketing Mix",
        "Product Strategy",
        "Promotion Strategy",
        "Distribution Strategy",
        "Marketing Measurement",
        "Building a Marketing Plan"
      ]
    },

    {
      name: "Sales Basics",
      icon: "💰",
      lessons: [
        "Understanding Sales",
        "Sales Process",
        "Sales Funnel",
        "Prospecting",
        "Lead Management",
        "Customer Qualification",
        "Sales Presentation",
        "Closing Sales",
        "Sales Follow-Up",
        "Building a Winning Sales System"
      ]
    },

    {
      name: "Sales Management",
      icon: "👨‍💼",
      lessons: [
        "Role of a Sales Manager",
        "Sales Target Management",
        "Sales Planning",
        "Territory Management",
        "Sales Team Structure",
        "Sales KPI Management",
        "Sales Forecasting",
        "Field Force Management",
        "Sales Review Meetings",
        "Building a High-Performance Sales Team"
      ]
    },

    {
      name: "Negotiation",
      icon: "🤝",
      lessons: [
        "Negotiation Fundamentals",
        "Negotiation Preparation",
        "Understanding Customer Needs",
        "BATNA & Alternatives",
        "Price Negotiation",
        "Value-Based Negotiation",
        "Handling Difficult Negotiations",
        "Win-Win Negotiation",
        "Negotiation Mistakes",
        "Advanced Negotiation Strategy"
      ]
    },

    {
      name: "Customer Service",
      icon: "❤️",
      lessons: [
        "Customer Service Fundamentals",
        "Customer Expectations",
        "Customer Communication",
        "Active Listening",
        "Handling Complaints",
        "Service Recovery",
        "Customer Satisfaction",
        "Customer Retention",
        "Customer Loyalty",
        "Building Customer-Centric Culture"
      ]
    },

    {
      name: "People Management",
      icon: "👥",
      lessons: [
        "People Management Fundamentals",
        "Leadership vs Management",
        "Setting Expectations",
        "Delegation",
        "Coaching Employees",
        "Performance Management",
        "Employee Motivation",
        "Conflict Management",
        "Team Development",
        "Building a High-Performance Culture"
      ]
    },

    {
      name: "Profit & Loss",
      icon: "📊",
      lessons: [
        "Understanding Profit",
        "Revenue Management",
        "Cost Management",
        "Gross Profit",
        "Gross Margin",
        "Operating Expenses",
        "Break-Even Analysis",
        "Profitability Analysis",
        "Profit Improvement",
        "Building a Profit-Focused Business"
      ]
    },

    {
      name: "Goal Setting",
      icon: "🎯",
      lessons: [
        "Why Goals Matter",
        "SMART Goals",
        "Business Objectives",
        "Sales Targets",
        "Activity Targets",
        "KPI Goals",
        "Monthly Planning",
        "Quarterly Planning",
        "Goal Review",
        "Building a Goal-Driven Organization"
      ]
    },

    {
      name: "Customer Relationship Management",
      icon: "🤝",
      lessons: [
        "Understanding CRM",
        "Customer Database",
        "Customer Segmentation",
        "Customer Value",
        "Key Account Management",
        "Customer Visit Planning",
        "Customer Follow-Up",
        "Customer Retention Strategy",
        "CRM Performance",
        "Building Long-Term Customer Relationships"
      ]
    },

    {
      name: "Distribution Management",
      icon: "🚚",
      lessons: [
        "Distribution Fundamentals",
        "Distributor Management",
        "Route-to-Market",
        "Territory Coverage",
        "Outlet Management",
        "Stock Availability",
        "Order Management",
        "Distribution KPI",
        "Distributor Performance",
        "Building an Effective Distribution System"
      ]
    },

    {
      name: "Retail & Trade Marketing",
      icon: "🏪",
      lessons: [
        "Retail Fundamentals",
        "Outlet Classification",
        "Trade Channels",
        "Merchandising",
        "Visibility Management",
        "Promotion Execution",
        "Planogram Basics",
        "Trade Spend",
        "Retail Performance",
        "Building a Winning Trade Strategy"
      ]
    },

    {
      name: "Business Analytics",
      icon: "📈",
      lessons: [
        "Understanding Business Data",
        "Data Collection",
        "Sales Analysis",
        "Trend Analysis",
        "Growth Analysis",
        "Variance Analysis",
        "KPI Dashboard",
        "Excel for Business",
        "Data-Based Decisions",
        "Building a Business Analytics Mindset"
      ]
    },

    {
      name: "Financial Management",
      icon: "💵",
      lessons: [
        "Financial Management Basics",
        "Cash Flow",
        "Working Capital",
        "Accounts Receivable",
        "Inventory Cost",
        "Budget Management",
        "Financial Controls",
        "Financial Risk",
        "Financial Performance",
        "Building Financial Discipline"
      ]
    },

    {
      name: "Operations Management",
      icon: "⚙️",
      lessons: [
        "Operations Fundamentals",
        "Process Management",
        "Productivity",
        "Quality Management",
        "Inventory Management",
        "Supply Planning",
        "Process Improvement",
        "SOP Management",
        "Operational KPIs",
        "Building Operational Excellence"
      ]
    },

    {
      name: "Leadership",
      icon: "👑",
      lessons: [
        "Understanding Leadership",
        "Leadership Mindset",
        "Leading by Example",
        "Decision Making",
        "Communication Leadership",
        "Situational Leadership",
        "Empowering Teams",
        "Leadership Accountability",
        "Developing Future Leaders",
        "Becoming a Strong Business Leader"
      ]
    },

    {
      name: "Communication",
      icon: "🗣️",
      lessons: [
        "Business Communication",
        "Clear Communication",
        "Professional Listening",
        "Presentation Skills",
        "Meeting Communication",
        "Giving Feedback",
        "Difficult Conversations",
        "Persuasive Communication",
        "Executive Communication",
        "Becoming an Effective Communicator"
      ]
    },

    {
      name: "Productivity",
      icon: "⚡",
      lessons: [
        "Personal Productivity",
        "Time Management",
        "Priority Management",
        "Important vs Urgent",
        "Daily Planning",
        "Weekly Planning",
        "Focus Management",
        "Delegation for Productivity",
        "Productivity Measurement",
        "Building a High-Performance Work System"
      ]
    },

    {
      name: "Problem Solving",
      icon: "🧩",
      lessons: [
        "Problem Solving Fundamentals",
        "Identifying the Real Problem",
        "Root Cause Analysis",
        "5 Whys",
        "Fishbone Analysis",
        "Problem Prioritization",
        "Solution Generation",
        "Decision Evaluation",
        "Corrective Action",
        "Building a Problem-Solving Culture"
      ]
    },

    {
      name: "Business Planning",
      icon: "📋",
      lessons: [
        "Business Planning Fundamentals",
        "Annual Business Planning",
        "Sales Planning",
        "Marketing Planning",
        "Resource Planning",
        "Budget Planning",
        "Risk Planning",
        "Execution Planning",
        "Business Review",
        "Building a Complete Business Plan"
      ]
    },

    {
      name: "Decision Making & Problem Solving",
      icon: "🧠",
      lessons: [
        "Managerial Decision Making",
        "Decision Quality",
        "Data-Based Decisions",
        "Decision Under Pressure",
        "Risk vs Reward",
        "Scenario Planning",
        "Business Trade-Offs",
        "Strategic Problem Solving",
        "Decision Review",
        "Becoming a Better Decision Maker"
      ]
    }
  ];

  /* =========================================================
     2. BUILD 230 LESSONS
     ========================================================= */

  const LESSONS = [];

  MODULES.forEach(function (module, moduleIndex) {
    module.lessons.forEach(function (title, lessonIndex) {

      LESSONS.push({
        id: moduleIndex * 10 + lessonIndex + 1,
        module: module.name,
        moduleIndex: moduleIndex,
        lessonIndex: lessonIndex,
        icon: module.icon,
        title: title
      });

    });
  });

  console.log("========================================");
  console.log("AUNG BUSINESS ACADEMY");
  console.log("Professional Lesson Engine");
  console.log("Business Lessons:", LESSONS.length);
  console.log("========================================");

  /* =========================================================
     3. STORAGE
     ========================================================= */

  const STORAGE_KEY = "aung_business_academy_completed_v15";

  function getCompleted() {
    try {
      return JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
      );
    } catch (error) {
      return [];
    }
  }

  function saveCompleted(list) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(list)
    );
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
  }

  /* =========================================================
     4. HELPERS
     ========================================================= */

  function escapeHTML(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function getAchievement(actual, target) {
    if (!target) return 0;
    return Math.round((actual / target) * 100);
  }

  function getProgress() {
    return Math.round(
      (getCompleted().length / LESSONS.length) * 100
    );
  }

  /* =========================================================
     5. LESSON CONTENT ENGINE
     ========================================================= */

  function buildDetailedContent(lesson) {

    const title = lesson.title;
    const module = lesson.module;

    const baseTarget = 100;
    const baseActual = 82;
    const achievement = getAchievement(
      baseActual,
      baseTarget
    );

    const gap = baseTarget - baseActual;

    return {

      objective: `
        ဒီသင်ခန်းစာပြီးဆုံးတဲ့အချိန်မှာ
        <strong>${escapeHTML(title)}</strong>
        ကို အဓိပ္ပါယ်သိရုံမက
        လက်တွေ့ Business Environment ထဲမှာ
        Manager တစ်ယောက်အနေနဲ့
        အသုံးချနိုင်ရမယ်။

        အထူးသဖြင့်
        <strong>${escapeHTML(module)}</strong>
        နဲ့ ဆက်စပ်ပြီး
        လူ၊ နံပါတ်၊ Customer၊ Market နဲ့
        Business Result ကို
        ချိတ်ဆက်စဉ်းစားနိုင်ဖို့
        ရည်ရွယ်ထားပါတယ်။
      `,

      explanation: `
        <p>
          <strong>${escapeHTML(title)}</strong>
          ဆိုတာ Business Management မှာ
          သိထားရုံနဲ့ မလုံလောက်တဲ့
          လက်တွေ့အသုံးချရတဲ့ Skill တစ်ခုဖြစ်ပါတယ်။
        </p>

        <p>
          Manager တစ်ယောက်အနေနဲ့
          အခြေအနေတစ်ခုကို မြင်တဲ့အခါ
          “ဘာဖြစ်နေတာလဲ” ဆိုတာတင်မကဘဲ
          “ဘာကြောင့်ဖြစ်တာလဲ”၊
          “Business Result ကို ဘယ်လောက်ထိခိုက်လဲ”၊
          “ဘယ်လို Action ယူရမလဲ”
          ဆိုတာအထိ စဉ်းစားနိုင်ရပါမယ်။
        </p>

        <p>
          Professional Management ရဲ့ အဓိကအချက်က
          Activity များတာမဟုတ်ဘဲ
          <strong>Result ရအောင် Activity ကို
          စနစ်တကျ စီမံနိုင်ခြင်း</strong> ဖြစ်ပါတယ်။
        </p>

        <p>
          ဥပမာ Sales Team တစ်ခုမှာ
          Target မပြည့်တဲ့အခါ
          “Team က ကြိုးစားမှုမရှိဘူး”
          လို့ တန်းဆုံးဖြတ်တာ မလုပ်သင့်ပါဘူး။
          Target Gap ရဲ့ Root Cause ကို
          Data နဲ့ စစ်ဆေးရပါမယ်။
        </p>

        <p>
          Customer Coverage လျော့နေတာလား။
          Stock မရှိတာလား။
          Price ပြဿနာလား။
          Competitor Promotion ပြင်းနေတာလား။
          Salesperson Skill Gap ရှိနေတာလား။
          Distributor Execution အားနည်းနေတာလား။
        </p>

        <p>
          ဒီလို Root Cause ကို ခွဲခြမ်းပြီးမှ
          Corrective Action ချမှတ်ရပါမယ်။
          ဒါကြောင့် Business Manager တစ်ယောက်အတွက်
          Knowledge + Data + Judgment + Execution
          လေးခုလုံးလိုအပ်ပါတယ်။
        </p>
      `,

      concepts: [
        "Business Objective ကို ရှင်းရှင်းလင်းလင်း သတ်မှတ်ခြင်း",
        "Target နဲ့ Actual ကို နှိုင်းယှဉ်ခြင်း",
        "Gap ကို ခွဲခြမ်းခြင်း",
        "Root Cause ကို ရှာဖွေခြင်း",
        "Priority သတ်မှတ်ခြင်း",
        "Action Plan တည်ဆောက်ခြင်း",
        "Owner နဲ့ Deadline သတ်မှတ်ခြင်း",
        "Result ကို ပြန်လည်တိုင်းတာခြင်း"
      ],

      table: [
        {
          metric: "Target",
          target: "100",
          actual: "100",
          gap: "0",
          status: "On Target"
        },
        {
          metric: "Actual Result",
          target: "100",
          actual: "82",
          gap: "-18",
          status: "Below Target"
        },
        {
          metric: "Customer Coverage",
          target: "100",
          actual: "88",
          gap: "-12",
          status: "Attention"
        },
        {
          metric: "Productivity",
          target: "100",
          actual: "76",
          gap: "-24",
          status: "Action Required"
        }
      ],

      caseStudy: `
        <strong>Case Study — ABC Distribution</strong>

        ABC Distribution မှာ
        Monthly Sales Target ကို
        100 Units သတ်မှတ်ထားပါတယ်။

        Actual Sales က 82 Units ပဲ ရပါတယ်။

        Manager က
        “Sales Team မကြိုးစားဘူး”
        လို့ တန်းသတ်မှတ်မယ့်အစား
        Data ကို ခွဲကြည့်ပါတယ်။

        Customer Coverage = 88%

        Product Availability = 91%

        Salesperson Productivity = 76%

        Competitor Activity = High

        ဒီ Data အရ
        Sales Gap 18 Units ရဲ့
        အဓိကပြဿနာဟာ
        လူအင်အားတစ်ခုတည်းမဟုတ်ဘဲ
        Coverage + Productivity +
        Competitive Pressure တို့
        ပေါင်းစပ်သက်ရောက်နေတာ
        ဖြစ်နိုင်ပါတယ်။

        ဒါကြောင့် Manager က
        Training တစ်ခုတည်းပေးတာထက်
        Route Plan ပြန်ပြင်ခြင်း၊
        Priority Outlet သတ်မှတ်ခြင်း၊
        Daily Productivity Review လုပ်ခြင်း၊
        Competitor Counter Action ပြုလုပ်ခြင်း
        စတဲ့ Action တွေကို
        တစ်ပြိုင်နက်လုပ်ဆောင်ရပါမယ်။
      `,

      application: `
        <p>
          လက်တွေ့လုပ်ငန်းခွင်မှာ
          ဒီ Concept ကို အသုံးချတဲ့အခါ
          အောက်ပါ Flow ကို အသုံးပြုပါ။
        </p>

        <ol>
          <li>Problem ကို သတ်မှတ်ပါ။</li>
          <li>Data စုပါ။</li>
          <li>Target နဲ့ Actual နှိုင်းယှဉ်ပါ။</li>
          <li>Gap ကိုတွက်ပါ။</li>
          <li>Root Cause ရှာပါ။</li>
          <li>Action Plan တည်ဆောက်ပါ။</li>
          <li>Owner သတ်မှတ်ပါ။</li>
          <li>Deadline သတ်မှတ်ပါ။</li>
          <li>Result ကို ပြန်စစ်ပါ။</li>
        </ol>

        <p>
          ဒီ Flow ကို နေ့စဉ်၊ အပတ်စဉ်၊ လစဉ်
          Business Management မှာ
          အသုံးချနိုင်ပါတယ်။
        </p>
      `,

      managerThinking: `
        <div class="manager-thinking-box">
          <h4>👨‍💼 Manager တစ်ယောက်အနေနဲ့ စဉ်းစားရန်</h4>

          <p>
            <strong>Question 1:</strong>
            ငါ့ Business မှာ အခုအချိန်မှာ
            အကြီးဆုံး Gap က ဘာလဲ?
          </p>

          <p>
            <strong>Question 2:</strong>
            ဒီ Gap ရဲ့ Root Cause ကို
            Data နဲ့ သက်သေပြနိုင်လား?
          </p>

          <p>
            <strong>Question 3:</strong>
            Action မလုပ်ရင်
            Business Result ဘယ်လောက်ထိခိုက်မလဲ?
          </p>

          <p>
            <strong>Question 4:</strong>
            ဘယ်သူက ဘာကို ဘယ်နေ့အပြီး
            လုပ်ရမလဲ?
          </p>

          <p>
            <strong>Question 5:</strong>
            Action လုပ်ပြီးတဲ့နောက်
            Result ကို ဘယ် KPI နဲ့တိုင်းမလဲ?
          </p>
        </div>
      `,

      mistakes: [
        "Data မကြည့်ဘဲ ခန့်မှန်းပြီး ဆုံးဖြတ်ခြင်း",
        "Problem နဲ့ Root Cause ကို ရောထွေးခြင်း",
        "Target ပဲပြောပြီး Action Plan မရှိခြင်း",
        "Owner မသတ်မှတ်ခြင်း",
        "Deadline မရှိခြင်း",
        "Review မလုပ်ခြင်း",
        "Activity များတာကို Result ကောင်းတယ်လို့ ထင်ခြင်း"
      ],

      actionPlan: `
        <h4>🛠️ ဒီနေ့ လက်တွေ့လုပ်ရန်</h4>

        <ol>
          <li>
            သင့် Business ရဲ့ အရေးကြီးဆုံး KPI တစ်ခုကို ရွေးပါ။
          </li>

          <li>
            Target နဲ့ Actual ကို ရေးပါ။
          </li>

          <li>
            Gap ကိုတွက်ပါ။
          </li>

          <li>
            Gap ရဲ့ Root Cause 3 ခု ရှာပါ။
          </li>

          <li>
            အရေးကြီးဆုံး Root Cause တစ်ခုကို
            ရွေးပါ။
          </li>

          <li>
            Action 3 ခု ရေးပါ။
          </li>

          <li>
            Owner + Deadline သတ်မှတ်ပါ။
          </li>

          <li>
            နောက် Review Date သတ်မှတ်ပါ။
          </li>
        </ol>
      `,

      quiz: [
        {
          q: "Target မပြည့်တဲ့အခါ ပထမဆုံး ဘာလုပ်သင့်သလဲ?",
          options: [
            "ဝန်ထမ်းကို အပြစ်တင်မယ်",
            "Data နဲ့ Gap ကို စစ်မယ်",
            "Promotion ချက်ချင်းလုပ်မယ်",
            "Target လျှော့မယ်"
          ],
          answer: 1
        },

        {
          q: "Root Cause ဆိုတာ ဘာလဲ?",
          options: [
            "အပေါ်ယံလက္ခဏာ",
            "တကယ့်အခြေခံအကြောင်းရင်း",
            "Monthly Target",
            "Sales Report"
          ],
          answer: 1
        },

        {
          q: "Action Plan မှာ ဘာတွေပါသင့်သလဲ?",
          options: [
            "Action ပဲ",
            "Owner ပဲ",
            "Action + Owner + Deadline",
            "Problem ပဲ"
          ],
          answer: 2
        }
      ],

      reflection: `
        <div class="reflection-box">
          <h4>🔄 Reflection</h4>

          <p>
            1. ဒီနေ့သင်ခန်းစာထဲက
            ကိုယ့်လုပ်ငန်းမှာ ချက်ချင်းအသုံးချနိုင်တာ
            ဘာလဲ?
          </p>

          <p>
            2. လက်ရှိ Business Problem တစ်ခုကို
            Data နဲ့ ပြန်ကြည့်ရင်
            ဘာတွေပြောင်းလဲမြင်လာမလဲ?
          </p>

          <p>
            3. ကိုယ်တိုင် Manager ဖြစ်ရင်
            ဘယ် Action ကို အရင်လုပ်မလဲ?
          </p>
        </div>
      `,

      summary: `
        <p>
          <strong>${escapeHTML(title)}</strong>
          ရဲ့ အဓိကအချက်က
          Knowledge ကို Action အဖြစ်
          ပြောင်းလဲနိုင်ခြင်း ဖြစ်ပါတယ်။
        </p>

        <p>
          Professional Manager တစ်ယောက်ဟာ
          Problem → Data → Analysis →
          Decision → Action → Review
          ဆိုတဲ့ Management Cycle ကို
          စနစ်တကျ အသုံးချနိုင်ရပါမယ်။
        </p>
      `,

      graph: {
        target: 100,
        actual: 82,
        coverage: 88,
        productivity: 76
      },

      achievement: achievement,
      gap: gap
    };
  }

  /* =========================================================
     6. FIND LESSON PAGE
     ========================================================= */

  function findLessonsPage() {

    const selectors = [
      "#page-lessons",
      "#lessons",
      "#lessonPage",
      ".lessons-page",
      ".lessons-content",
      "[data-page='lessons']",
      "main"
    ];

    for (const selector of selectors) {
      const element =
        document.querySelector(selector);

      if (element) return element;
    }

    return document.body;
  }

  /* =========================================================
     7. LESSON MODAL
     ========================================================= */

  function openLesson(id) {

    const lesson =
      LESSONS.find(function (item) {
        return item.id === id;
      });

    if (!lesson) return;

    const content =
      buildDetailedContent(lesson);

    const old =
      document.getElementById(
        "aungProfessionalLessonModal"
      );

    if (old) old.remove();

    const modal =
      document.createElement("div");

    modal.id =
      "aungProfessionalLessonModal";

    modal.innerHTML = `

      <div class="aba-modal-overlay">

        <div class="aba-lesson-modal">

          <div class="aba-lesson-header">

            <div class="aba-lesson-module">
              ${lesson.icon}
              ${escapeHTML(lesson.module)}
            </div>

            <h1>
              ${escapeHTML(lesson.title)}
            </h1>

            <div class="aba-lesson-meta">
              Lesson ${lesson.id} / ${LESSONS.length}
              &nbsp; • &nbsp;
              ⏱️ Approximately 15 Minutes
            </div>

            <button
              class="aba-close-btn"
              id="abaCloseLesson"
            >
              ✕
            </button>

          </div>


          <div class="aba-lesson-body">


            <!-- OBJECTIVE -->

            <section class="aba-section">

              <div class="aba-section-title">
                🎯 Learning Objectives
              </div>

              <div class="aba-objective">
                ${content.objective}
              </div>

            </section>


            <!-- EXPLANATION -->

            <section class="aba-section">

              <div class="aba-section-title">
                📖 Detailed Explanation
              </div>

              <div class="aba-text">
                ${content.explanation}
              </div>

            </section>


            <!-- CONCEPTS -->

            <section class="aba-section">

              <div class="aba-section-title">
                🧠 Key Business Concepts
              </div>

              <div class="aba-concept-grid">

                ${content.concepts.map(
                  function (item, index) {

                    return `
                      <div class="aba-concept-card">

                        <div class="aba-concept-number">
                          ${index + 1}
                        </div>

                        <div>
                          ${escapeHTML(item)}
                        </div>

                      </div>
                    `;

                  }
                ).join("")}

              </div>

            </section>


            <!-- DATA -->

            <section class="aba-section">

              <div class="aba-section-title">
                📊 Business Data Analysis
              </div>

              <div class="aba-table-wrap">

                <table class="aba-data-table">

                  <thead>

                    <tr>
                      <th>Metric</th>
                      <th>Target</th>
                      <th>Actual</th>
                      <th>Gap</th>
                      <th>Status</th>
                    </tr>

                  </thead>

                  <tbody>

                    ${content.table.map(
                      function (row) {

                        return `
                          <tr>

                            <td>
                              ${escapeHTML(row.metric)}
                            </td>

                            <td>
                              ${row.target}
                            </td>

                            <td>
                              ${row.actual}
                            </td>

                            <td>
                              ${row.gap}
                            </td>

                            <td>
                              ${escapeHTML(row.status)}
                            </td>

                          </tr>
                        `;

                      }
                    ).join("")}

                  </tbody>

                </table>

              </div>

            </section>


            <!-- GRAPH -->

            <section class="aba-section">

              <div class="aba-section-title">
                📈 Performance Graph
              </div>

              <div class="aba-graph">

                <div class="aba-bar-row">

                  <div class="aba-bar-label">
                    Target
                  </div>

                  <div class="aba-bar-track">
                    <div
                      class="aba-bar target"
                      style="width:100%"
                    >
                      100%
                    </div>
                  </div>

                </div>


                <div class="aba-bar-row">

                  <div class="aba-bar-label">
                    Actual
                  </div>

                  <div class="aba-bar-track">
                    <div
                      class="aba-bar actual"
                      style="width:82%"
                    >
                      82%
                    </div>
                  </div>

                </div>


                <div class="aba-bar-row">

                  <div class="aba-bar-label">
                    Coverage
                  </div>

                  <div class="aba-bar-track">
                    <div
                      class="aba-bar coverage"
                      style="width:88%"
                    >
                      88%
                    </div>
                  </div>

                </div>


                <div class="aba-bar-row">

                  <div class="aba-bar-label">
                    Productivity
                  </div>

                  <div class="aba-bar-track">
                    <div
                      class="aba-bar productivity"
                      style="width:76%"
                    >
                      76%
                    </div>
                  </div>

                </div>

              </div>

              <div class="aba-graph-note">

                Target = 100% |
                Actual = 82% |
                Gap = -18%

                <br>

                Manager ရဲ့အလုပ်က
                Graph ကိုကြည့်ပြီး
                Gap ဖြစ်ရတဲ့အကြောင်းရင်းကို
                ရှာဖွေပြီး Action ပြောင်းပေးခြင်း ဖြစ်ပါတယ်။

              </div>

            </section>


            <!-- CASE STUDY -->

            <section class="aba-section">

              <div class="aba-section-title">
                🧩 Real Business Case Study
              </div>

              <div class="aba-case-study">
                ${content.caseStudy}
              </div>

            </section>


            <!-- APPLICATION -->

            <section class="aba-section">

              <div class="aba-section-title">
                💼 Real Business Application
              </div>

              <div class="aba-text">
                ${content.application}
              </div>

            </section>


            <!-- MANAGER -->

            <section class="aba-section">

              <div class="aba-section-title">
                👨‍💼 Manager Thinking
              </div>

              ${content.managerThinking}

            </section>


            <!-- MISTAKES -->

            <section class="aba-section">

              <div class="aba-section-title">
                ⚠️ Common Mistakes
              </div>

              <div class="aba-mistake-list">

                ${content.mistakes.map(
                  function (mistake) {

                    return `
                      <div class="aba-mistake">
                        ❌ ${escapeHTML(mistake)}
                      </div>
                    `;

                  }
                ).join("")}

              </div>

            </section>


            <!-- ACTION PLAN -->

            <section class="aba-section">

              <div class="aba-section-title">
                🛠️ Manager Action Plan
              </div>

              <div class="aba-action-plan">
                ${content.actionPlan}
              </div>

            </section>


            <!-- PRACTICE -->

            <section class="aba-section">

              <div class="aba-section-title">
                ✍️ Practical Exercise
              </div>

              <div class="aba-practice">

                <p>
                  <strong>Exercise:</strong>
                </p>

                <p>
                  သင့်လက်ရှိလုပ်ငန်းမှာ
                  Target တစ်ခုကိုရွေးပြီး
                  အောက်ပါအချက်များကို
                  ကိုယ်တိုင်ရေးပါ။
                </p>

                <div class="aba-exercise-grid">

                  <div>
                    Target
                  </div>

                  <div>
                    Actual
                  </div>

                  <div>
                    Gap
                  </div>

                  <div>
                    Root Cause
                  </div>

                  <div>
                    Action
                  </div>

                  <div>
                    Deadline
                  </div>

                </div>

              </div>

            </section>


            <!-- QUIZ -->

            <section class="aba-section">

              <div class="aba-section-title">
                🧪 Knowledge Check
              </div>

              <div id="abaQuizContainer">

                ${content.quiz.map(
                  function (quiz, index) {

                    return `

                      <div
                        class="aba-quiz"
                        data-answer="${quiz.answer}"
                      >

                        <div class="aba-quiz-question">
                          ${index + 1}.
                          ${escapeHTML(quiz.q)}
                        </div>

                        <div class="aba-quiz-options">

                          ${quiz.options.map(
                            function (
                              option,
                              optionIndex
                            ) {

                              return `
                                <button
                                  class="aba-quiz-option"
                                  data-index="${optionIndex}"
                                >
                                  ${escapeHTML(option)}
                                </button>
                              `;

                            }
                          ).join("")}

                        </div>

                      </div>

                    `;

                  }
                ).join("")}

              </div>

            </section>


            <!-- REFLECTION -->

            <section class="aba-section">

              ${content.reflection}

            </section>


            <!-- SUMMARY -->

            <section class="aba-section">

              <div class="aba-section-title">
                📌 Lesson Summary
              </div>

              <div class="aba-summary">
                ${content.summary}
              </div>

            </section>


            <!-- COMPLETION -->

            <section class="aba-completion">

              <div class="aba-completion-icon">
                ${isCompleted(lesson.id) ? "✅" : "🏆"}
              </div>

              <h3>
                ${isCompleted(lesson.id)
                  ? "Lesson Completed"
                  : "Complete This Lesson"}
              </h3>

              <p>
                ဒီ Lesson ကို လေ့လာပြီးဆုံးပါက
                Complete Lesson ကိုနှိပ်ပါ။
              </p>

              <button
                id="abaCompleteLesson"
                class="aba-complete-button"
              >
                ${
                  isCompleted(lesson.id)
                    ? "✅ Completed"
                    : "✓ Complete Lesson"
                }
              </button>

            </section>


            <!-- NAVIGATION -->

            <div class="aba-lesson-navigation">

              ${
                lesson.id > 1
                  ? `
                    <button
                      id="abaPreviousLesson"
                      class="aba-nav-button"
                    >
                      ← Previous Lesson
                    </button>
                  `
                  : "<span></span>"
              }


              ${
                lesson.id < LESSONS.length
                  ? `
                    <button
                      id="abaNextLesson"
                      class="aba-nav-button primary"
                    >
                      Next Lesson →
                    </button>
                  `
                  : "<span></span>"
              }

            </div>

          </div>

        </div>

      </div>
    `;

    document.body.appendChild(modal);

    /* CLOSE */

    document
      .getElementById("abaCloseLesson")
      .addEventListener("click", function () {
        modal.remove();
      });


    /* COMPLETE */

    const completeButton =
      document.getElementById(
        "abaCompleteLesson"
      );

    if (completeButton) {

      completeButton.addEventListener(
        "click",
        function () {

          markCompleted(lesson.id);

          completeButton.textContent =
            "✅ Completed";

          completeButton.classList.add(
            "completed"
          );

        }
      );

    }


    /* PREVIOUS */

    const previous =
      document.getElementById(
        "abaPreviousLesson"
      );

    if (previous) {

      previous.addEventListener(
        "click",
        function () {

          modal.remove();

          setTimeout(function () {
            openLesson(lesson.id - 1);
          }, 100);

        }
      );

    }


    /* NEXT */

    const next =
      document.getElementById(
        "abaNextLesson"
      );

    if (next) {

      next.addEventListener(
        "click",
        function () {

          modal.remove();

          setTimeout(function () {
            openLesson(lesson.id + 1);
          }, 100);

        }
      );

    }


    /* QUIZ */

    document
      .querySelectorAll(
        "#abaProfessionalLessonModal .aba-quiz"
      )
      .forEach(function (quizElement) {

        const answer =
          Number(
            quizElement.dataset.answer
          );

        quizElement
          .querySelectorAll(
            ".aba-quiz-option"
          )
          .forEach(function (button) {

            button.addEventListener(
              "click",
              function () {

                const selected =
                  Number(
                    button.dataset.index
                  );

                quizElement
                  .querySelectorAll(
                    ".aba-quiz-option"
                  )
                  .forEach(function (btn) {
                    btn.disabled = true;
                  });

                if (selected === answer) {

                  button.classList.add(
                    "correct"
                  );

                  button.textContent =
                    "✅ " + button.textContent;

                } else {

                  button.classList.add(
                    "wrong"
                  );

                  button.textContent =
                    "❌ " + button.textContent;

                }

              }
            );

          });

      });

  }

  /* =========================================================
     8. LESSON CARD STYLE
     ========================================================= */

  function injectStyles() {

    if (
      document.getElementById(
        "aungProfessionalLessonStyles"
      )
    ) return;

    const style =
      document.createElement("style");

    style.id =
      "aungProfessionalLessonStyles";

    style.textContent = `

      .aba-lesson-grid {
        display:grid;
        grid-template-columns:
          repeat(auto-fit,minmax(280px,1fr));
        gap:18px;
      }

      .aba-lesson-card {
        background:#ffffff;
        border:1px solid #e2e8f0;
        border-radius:18px;
        padding:20px;
        cursor:pointer;
        transition:.2s ease;
        box-shadow:
          0 6px 18px rgba(15,23,42,.06);
      }

      .aba-lesson-card:hover {
        transform:translateY(-4px);
        box-shadow:
          0 14px 30px rgba(15,23,42,.12);
      }

      .aba-lesson-card.completed {
        border-color:#22c55e;
      }

      .aba-card-top {
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-bottom:12px;
      }

      .aba-card-module {
        font-size:12px;
        font-weight:800;
        color:#2563eb;
      }

      .aba-card-number {
        font-size:12px;
        color:#64748b;
      }

      .aba-card-title {
        font-size:18px;
        line-height:1.55;
        color:#0f172a;
        font-weight:800;
      }

      .aba-card-bottom {
        margin-top:16px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        font-size:13px;
      }

      .aba-start {
        color:#2563eb;
        font-weight:800;
      }

      .aba-done {
        color:#16a34a;
        font-weight:800;
      }

      .aba-modal-overlay {
        position:fixed;
        inset:0;
        z-index:999999;
        background:
          rgba(15,23,42,.78);
        overflow-y:auto;
        padding:20px;
      }

      .aba-lesson-modal {
        max-width:1000px;
        margin:20px auto;
        background:#ffffff;
        border-radius:24px;
        overflow:hidden;
        box-shadow:
          0 25px 70px rgba(0,0,0,.3);
      }

      .aba-lesson-header {
        position:relative;
        background:
          linear-gradient(
            135deg,
            #0f172a,
            #1d4ed8
          );
        color:white;
        padding:34px;
      }

      .aba-lesson-header h1 {
        margin:8px 50px 12px 0;
        font-size:30px;
        line-height:1.4;
      }

      .aba-lesson-module {
        font-size:13px;
        font-weight:800;
        opacity:.9;
      }

      .aba-lesson-meta {
        font-size:13px;
        opacity:.8;
      }

      .aba-close-btn {
        position:absolute;
        right:22px;
        top:22px;
        width:42px;
        height:42px;
        border:0;
        border-radius:50%;
        background:
          rgba(255,255,255,.15);
        color:white;
        font-size:20px;
        cursor:pointer;
      }

      .aba-lesson-body {
        padding:30px;
      }

      .aba-section {
        margin-bottom:34px;
      }

      .aba-section-title {
        font-size:22px;
        font-weight:900;
        color:#0f172a;
        margin-bottom:16px;
      }

      .aba-text {
        color:#334155;
        line-height:2;
        font-size:15px;
      }

      .aba-objective {
        background:#eff6ff;
        border-left:5px solid #2563eb;
        padding:20px;
        border-radius:12px;
        line-height:2;
        color:#334155;
      }

      .aba-concept-grid {
        display:grid;
        grid-template-columns:
          repeat(auto-fit,minmax(220px,1fr));
        gap:12px;
      }

      .aba-concept-card {
        display:flex;
        gap:12px;
        align-items:center;
        background:#f8fafc;
        border:1px solid #e2e8f0;
        border-radius:12px;
        padding:14px;
        line-height:1.6;
        color:#334155;
      }

      .aba-concept-number {
        width:32px;
        height:32px;
        min-width:32px;
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius:50%;
        background:#2563eb;
        color:white;
        font-weight:800;
      }

      .aba-table-wrap {
        overflow-x:auto;
      }

      .aba-data-table {
        width:100%;
        border-collapse:collapse;
        min-width:650px;
      }

      .aba-data-table th {
        background:#0f172a;
        color:white;
        padding:14px;
        text-align:left;
      }

      .aba-data-table td {
        padding:14px;
        border:1px solid #e2e8f0;
        color:#334155;
      }

      .aba-data-table tr:nth-child(even) {
        background:#f8fafc;
      }

      .aba-graph {
        background:#f8fafc;
        border:1px solid #e2e8f0;
        border-radius:16px;
        padding:22px;
      }

      .aba-bar-row {
        display:grid;
        grid-template-columns:120px 1fr;
        gap:12px;
        align-items:center;
        margin:16px 0;
      }

      .aba-bar-label {
        font-size:13px;
        font-weight:800;
        color:#334155;
      }

      .aba-bar-track {
        background:#e2e8f0;
        height:34px;
        border-radius:8px;
        overflow:hidden;
      }

      .aba-bar {
        height:100%;
        display:flex;
        align-items:center;
        padding-left:12px;
        color:white;
        font-weight:800;
        font-size:12px;
        border-radius:8px;
      }

      .aba-bar.target {
        background:#0f172a;
      }

      .aba-bar.actual {
        background:#2563eb;
      }

      .aba-bar.coverage {
        background:#16a34a;
      }

      .aba-bar.productivity {
        background:#ea580c;
      }

      .aba-graph-note {
        margin-top:15px;
        padding:15px;
        background:#eff6ff;
        border-radius:10px;
        line-height:1.8;
        color:#334155;
      }

      .aba-case-study {
        background:#fffbeb;
        border-left:5px solid #f59e0b;
        border-radius:12px;
        padding:22px;
        line-height:2;
        color:#334155;
      }

      .manager-thinking-box {
        background:#f5f3ff;
        border-left:5px solid #7c3aed;
        padding:22px;
        border-radius:12px;
        line-height:2;
        color:#334155;
      }

      .aba-mistake-list {
        display:grid;
        gap:10px;
      }

      .aba-mistake {
        padding:14px 16px;
        background:#fef2f2;
        border:1px solid #fecaca;
        border-radius:10px;
        color:#991b1b;
        line-height:1.6;
      }

      .aba-action-plan {
        background:#ecfdf5;
        border-left:5px solid #16a34a;
        border-radius:12px;
        padding:22px;
        line-height:2;
        color:#14532d;
      }

      .aba-practice {
        background:#f8fafc;
        border:1px solid #e2e8f0;
        border-radius:14px;
        padding:22px;
        line-height:2;
        color:#334155;
      }

      .aba-exercise-grid {
        display:grid;
        grid-template-columns:
          repeat(auto-fit,minmax(140px,1fr));
        gap:10px;
        margin-top:18px;
      }

      .aba-exercise-grid div {
        background:white;
        border:1px dashed #94a3b8;
        border-radius:10px;
        padding:18px 10px;
        text-align:center;
        font-weight:800;
        color:#475569;
      }

      .aba-quiz {
        background:#f8fafc;
        border:1px solid #e2e8f0;
        border-radius:14px;
        padding:20px;
        margin-bottom:15px;
      }

      .aba-quiz-question {
        font-weight:800;
        color:#0f172a;
        margin-bottom:14px;
        line-height:1.6;
      }

      .aba-quiz-options {
        display:grid;
        gap:8px;
      }

      .aba-quiz-option {
        border:1px solid #cbd5e1;
        background:white;
        border-radius:10px;
        padding:12px 14px;
        text-align:left;
        cursor:pointer;
        color:#334155;
      }

      .aba-quiz-option:hover {
        background:#eff6ff;
      }

      .aba-quiz-option.correct {
        background:#dcfce7;
        border-color:#22c55e;
        color:#166534;
      }

      .aba-quiz-option.wrong {
        background:#fee2e2;
        border-color:#ef4444;
        color:#991b1b;
      }

      .reflection-box {
        background:#f0fdf4;
        border-left:5px solid #22c55e;
        padding:22px;
        border-radius:12px;
        line-height:2;
        color:#334155;
      }

      .aba-summary {
        background:#f1f5f9;
        padding:22px;
        border-radius:14px;
        line-height:2;
        color:#334155;
      }

      .aba-completion {
        text-align:center;
        background:
          linear-gradient(
            135deg,
            #eff6ff,
            #f8fafc
          );
        border:1px solid #dbeafe;
        border-radius:18px;
        padding:30px 20px;
      }

      .aba-completion-icon {
        font-size:42px;
        margin-bottom:10px;
      }

      .aba-completion h3 {
        color:#0f172a;
        margin-bottom:8px;
      }

      .aba-completion p {
        color:#64748b;
        line-height:1.7;
      }

      .aba-complete-button {
        margin-top:15px;
        padding:14px 25px;
        border:0;
        border-radius:12px;
        background:#2563eb;
        color:white;
        font-size:16px;
        font-weight:800;
        cursor:pointer;
      }

      .aba-complete-button:hover {
        background:#1d4ed8;
      }

      .aba-complete-button.completed {
        background:#16a34a;
      }

      .aba-lesson-navigation {
        display:flex;
        justify-content:space-between;
        gap:15px;
        margin-top:30px;
      }

      .aba-nav-button {
        border:1px solid #cbd5e1;
        background:white;
        color:#334155;
        padding:13px 20px;
        border-radius:10px;
        font-weight:800;
        cursor:pointer;
      }

      .aba-nav-button.primary {
        background:#0f172a;
        color:white;
        border-color:#0f172a;
      }

      @media(max-width:700px) {

        .aba-modal-overlay {
          padding:0;
        }

        .aba-lesson-modal {
          margin:0;
          border-radius:0;
          min-height:100vh;
        }

        .aba-lesson-header {
          padding:25px 20px;
        }

        .aba-lesson-header h1 {
          font-size:23px;
        }

        .aba-lesson-body {
          padding:20px;
        }

        .aba-section-title {
          font-size:19px;
        }

        .aba-bar-row {
          grid-template-columns:1fr;
          gap:6px;
        }

        .aba-lesson-navigation {
          flex-direction:column;
        }

        .aba-nav-button {
          width:100%;
        }

      }

    `;

    document.head.appendChild(style);
  }

  /* =========================================================
     9. RENDER LESSONS
     ========================================================= */

  function renderLessons() {

    const page = findLessonsPage();

    if (!page) return;

    let container =
      document.getElementById(
        "aungProfessional230Lessons"
      );

    if (!container) {

      container =
        document.createElement("div");

      container.id =
        "aungProfessional230Lessons";

      container.style.cssText = `
        width:100%;
        margin:25px 0;
      `;

      page.appendChild(container);
    }

    container.innerHTML = `

      <div style="
        background:
          linear-gradient(
            135deg,
            #0f172a,
            #1d4ed8
          );
        color:white;
        padding:28px;
        border-radius:20px;
        margin-bottom:20px;
      ">

        <div style="
          font-size:12px;
          font-weight:800;
          opacity:.75;
          margin-bottom:8px;
        ">
          AUNG BUSINESS ACADEMY
        </div>

        <h2 style="
          margin:0 0 8px 0;
          font-size:28px;
        ">
          📚 Professional Business Academy
        </h2>

        <p style="
          margin:0;
          opacity:.9;
          line-height:1.8;
        ">
          230 Business Lessons —
          Professional 15-Minute Learning System
        </p>

        <div style="
          display:flex;
          flex-wrap:wrap;
          gap:10px;
          margin-top:18px;
        ">

          <span style="
            padding:8px 13px;
            border-radius:20px;
            background:rgba(255,255,255,.15);
          ">
            📚 230 Lessons
          </span>

          <span style="
            padding:8px 13px;
            border-radius:20px;
            background:rgba(255,255,255,.15);
          ">
            📊 Tables
          </span>

          <span style="
            padding:8px 13px;
            border-radius:20px;
            background:rgba(255,255,255,.15);
          ">
            📈 Graphs
          </span>

          <span style="
            padding:8px 13px;
            border-radius:20px;
            background:rgba(255,255,255,.15);
          ">
            💼 Case Studies
          </span>

          <span style="
            padding:8px 13px;
            border-radius:20px;
            background:rgba(255,255,255,.15);
          ">
            👨‍💼 Manager Thinking
          </span>

        </div>

      </div>


      <div style="
        display:flex;
        flex-wrap:wrap;
        gap:10px;
        margin-bottom:20px;
      ">

        <input
          id="abaLessonSearch"
          type="search"
          placeholder="🔎 Search lessons..."
          style="
            flex:1;
            min-width:230px;
            padding:13px 15px;
            border:1px solid #cbd5e1;
            border-radius:10px;
            outline:none;
          "
        />

        <select
          id="abaModuleFilter"
          style="
            padding:13px 15px;
            border:1px solid #cbd5e1;
            border-radius:10px;
            background:white;
          "
        >

          <option value="all">
            All Modules
          </option>

          ${MODULES.map(
            function (module) {

              return `
                <option value="${escapeHTML(module.name)}">
                  ${module.icon}
                  ${escapeHTML(module.name)}
                </option>
              `;

            }
          ).join("")}

        </select>

        <select
          id="abaStatusFilter"
          style="
            padding:13px 15px;
            border:1px solid #cbd5e1;
            border-radius:10px;
            background:white;
          "
        >

          <option value="all">
            All Lessons
          </option>

          <option value="remaining">
            Remaining
          </option>

          <option value="completed">
            Completed
          </option>

        </select>

      </div>


      <div
        id="abaLessonResultInfo"
        style="
          margin-bottom:15px;
          color:#64748b;
          font-size:14px;
          font-weight:700;
        "
      >
      </div>


      <div
        id="abaLessonGrid"
        class="aba-lesson-grid"
      >
      </div>

    `;

    const grid =
      document.getElementById(
        "abaLessonGrid"
      );

    const search =
      document.getElementById(
        "abaLessonSearch"
      );

    const moduleFilter =
      document.getElementById(
        "abaModuleFilter"
      );

    const statusFilter =
      document.getElementById(
        "abaStatusFilter"
      );

    function refresh() {

      const searchText =
        (search.value || "")
          .toLowerCase()
          .trim();

      const selectedModule =
        moduleFilter.value;

      const status =
        statusFilter.value;

      const completed =
        getCompleted();

      const filtered =
        LESSONS.filter(function (lesson) {

          const matchesSearch =
            !searchText ||
            lesson.title
              .toLowerCase()
              .includes(searchText) ||
            lesson.module
              .toLowerCase()
              .includes(searchText);

          const matchesModule =
            selectedModule === "all" ||
            lesson.module ===
              selectedModule;

          const matchesStatus =
            status === "all" ||
            (
              status === "completed" &&
              completed.includes(lesson.id)
            ) ||
            (
              status === "remaining" &&
              !completed.includes(lesson.id)
            );

          return (
            matchesSearch &&
            matchesModule &&
            matchesStatus
          );

        });

      document.getElementById(
        "abaLessonResultInfo"
      ).textContent =
        `Showing ${filtered.length} of ${LESSONS.length} lessons`;

      grid.innerHTML = "";

      if (!filtered.length) {

        grid.innerHTML = `
          <div style="
            grid-column:1/-1;
            text-align:center;
            padding:50px 20px;
            color:#64748b;
          ">
            <div style="
              font-size:45px;
              margin-bottom:10px;
            ">
              🔎
            </div>

            <h3>
              No lessons found
            </h3>

            <p>
              Search or filter ပြန်ပြောင်းကြည့်ပါ။
            </p>

          </div>
        `;

        return;
      }

      filtered.forEach(function (lesson) {

        const done =
          completed.includes(
            lesson.id
          );

        const card =
          document.createElement("div");

        card.className =
          "aba-lesson-card" +
          (done ? " completed" : "");

        card.innerHTML = `

          <div class="aba-card-top">

            <div class="aba-card-module">
              ${lesson.icon}
              ${escapeHTML(lesson.module)}
            </div>

            <div class="aba-card-number">
              ${lesson.id}/${LESSONS.length}
            </div>

          </div>

          <div class="aba-card-title">
            ${escapeHTML(lesson.title)}
          </div>

          <div class="aba-card-bottom">

            <div>
              ${
                done
                  ? `<span class="aba-done">
                       ✓ Completed
                     </span>`
                  : `<span class="aba-start">
                       📖 Start Lesson →
                     </span>`
              }
            </div>

            <div>
              ⏱️ 15 min
            </div>

          </div>

        `;

        card.addEventListener(
          "click",
          function () {
            openLesson(lesson.id);
          }
        );

        grid.appendChild(card);

      });

    }

    search.addEventListener(
      "input",
      refresh
    );

    moduleFilter.addEventListener(
      "change",
      refresh
    );

    statusFilter.addEventListener(
      "change",
      refresh
    );

    refresh();
  }

  /* =========================================================
     10. DASHBOARD UPDATE
     ========================================================= */

  function updateDashboard() {

    const completed =
      getCompleted().length;

    const total =
      LESSONS.length;

    const percent =
      Math.round(
        (completed / total) * 100
      );

    const selectors = [
      "#completedLessons",
      "#completedCount",
      "[data-completed-lessons]"
    ];

    selectors.forEach(function (selector) {

      document
        .querySelectorAll(selector)
        .forEach(function (element) {
          element.textContent =
            completed;
        });

    });

    document
      .querySelectorAll(
        "#progressPercent,[data-progress-percent]"
      )
      .forEach(function (element) {
        element.textContent =
          percent + "%";
      });

    document
      .querySelectorAll(
        ".progress-bar-fill,[data-progress-bar]"
      )
      .forEach(function (element) {
        element.style.width =
          percent + "%";
      });

  }

  /* =========================================================
     11. NAVIGATION HOOK
     ========================================================= */

  function setupNavigation() {

    document
      .querySelectorAll(
        "[data-page='lessons'], #nav-lessons, .nav-lessons"
      )
      .forEach(function (button) {

        button.addEventListener(
          "click",
          function () {

            setTimeout(function () {
              renderLessons();
            }, 100);

            setTimeout(function () {
              renderLessons();
            }, 700);

          }
        );

      });

  }

  /* =========================================================
     12. INITIALIZATION
     ========================================================= */

  function init() {

    injectStyles();

    setupNavigation();

    updateDashboard();

    setTimeout(function () {
      renderLessons();
    }, 500);

    setTimeout(function () {
      renderLessons();
    }, 1500);

    setTimeout(function () {
      renderLessons();
    }, 3000);

  }

  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      init
    );

  } else {

    init();

  }

  /* =========================================================
     13. PUBLIC API
     ========================================================= */

  window.AungBusinessAcademy = {

    lessons: LESSONS,

    modules: MODULES,

    totalLessons: LESSONS.length,

    openLesson: openLesson,

    markCompleted: markCompleted,

    getCompleted: getCompleted,

    getProgress: getProgress,

    refresh: renderLessons

  };

})();
```
