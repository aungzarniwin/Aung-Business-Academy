/* =========================================================
   AUNG BUSINESS ACADEMY
   PROFESSIONAL LONG LESSON UPGRADE
   =========================================================
   
   PURPOSE:
   - Keep existing 230 Business Lessons
   - Do NOT create new lesson titles
   - Do NOT modify Business English 30
   - Expand existing lesson content into 15–20 minute lessons
   - Add explanation, tables, graphs, case studies,
     manager thinking, action plans, quiz and reflection
   ========================================================= */

(function () {
  "use strict";

  console.log("Aung Business Academy — Long Lesson Upgrade Loading...");

  /* =========================================================
     1. BUSINESS DATA
     ========================================================= */

  const moduleKeywords = {

    "Business Basics": {
      focus: "လုပ်ငန်းအခြေခံစနစ်၊ Business Model၊ Customer၊ Value၊ Revenue နှင့် Cost",
      metrics: ["Customers", "Revenue", "Cost", "Profit"],
      example: "Retail / Distribution Business"
    },

    "Strategic Thinking": {
      focus: "ရေရှည်အမြင်၊ Strategy၊ Competition၊ Market Position နှင့် Growth",
      metrics: ["Market Share", "Growth", "Revenue", "Profit"],
      example: "FMCG Market Expansion"
    },

    "Brand Basics": {
      focus: "Brand Identity၊ Brand Positioning၊ Customer Perception နှင့် Brand Value",
      metrics: ["Awareness", "Trial", "Repeat", "Preference"],
      example: "Consumer Brand"
    },

    "Marketing Basics": {
      focus: "Customer Need၊ Market Segmentation၊ Promotion နှင့် Marketing Mix",
      metrics: ["Reach", "Leads", "Conversion", "Sales"],
      example: "Consumer Marketing Campaign"
    },

    "Sales Basics": {
      focus: "Sales Process၊ Prospecting၊ Customer Need၊ Presentation နှင့် Closing",
      metrics: ["Calls", "Visits", "Orders", "Sales"],
      example: "FMCG Sales Team"
    },

    "Sales Management": {
      focus: "Sales Target၊ Team Management၊ Distribution၊ Execution နှင့် Performance",
      metrics: ["Target", "Actual", "Achievement", "Gap"],
      example: "Area Sales Management"
    },

    "Negotiation": {
      focus: "Negotiation Strategy၊ Customer Interest၊ Value Exchange နှင့် Agreement",
      metrics: ["Opening", "Offer", "Counter Offer", "Agreement"],
      example: "Distributor / Key Account Negotiation"
    },

    "Customer Service": {
      focus: "Customer Experience၊ Complaint Handling၊ Service Quality နှင့် Retention",
      metrics: ["Response Time", "Resolution", "Satisfaction", "Retention"],
      example: "Customer Complaint Management"
    },

    "People Management": {
      focus: "Team Structure၊ Coaching၊ Motivation၊ Performance နှင့် Accountability",
      metrics: ["Productivity", "Attendance", "Performance", "Retention"],
      example: "Sales Team Management"
    },

    "Profit & Loss": {
      focus: "Revenue၊ Cost၊ Gross Profit၊ Operating Cost နှင့် Net Profit",
      metrics: ["Revenue", "Gross Profit", "OPEX", "Net Profit"],
      example: "Distribution Business P&L"
    },

    "Goal Setting": {
      focus: "SMART Goal၊ KPI၊ Target Setting၊ Tracking နှင့် Review",
      metrics: ["Goal", "KPI", "Actual", "Achievement"],
      example: "Monthly Sales Goal"
    },

    "Customer Relationship Management": {
      focus: "Customer Segmentation၊ Relationship၊ Retention၊ Loyalty နှင့် Customer Value",
      metrics: ["Customers", "Frequency", "Retention", "Value"],
      example: "Key Customer Management"
    },

    "Distribution Management": {
      focus: "Distributor၊ Stock၊ Coverage၊ Delivery၊ Availability နှင့် Route-to-Market",
      metrics: ["Coverage", "Stock", "Delivery", "Availability"],
      example: "FMCG Distribution"
    },

    "Retail & Trade Marketing": {
      focus: "Outlet၊ Visibility၊ Availability၊ Promotion နှင့် Trade Execution",
      metrics: ["Outlets", "Availability", "Visibility", "Sales"],
      example: "Retail Execution"
    },

    "Business Analytics": {
      focus: "Data Collection၊ KPI၊ Trend၊ Comparison၊ Root Cause နှင့် Decision Making",
      metrics: ["Target", "Actual", "Variance", "Trend"],
      example: "Sales Performance Analysis"
    },

    "Financial Management": {
      focus: "Cash Flow၊ Budget၊ Cost Control၊ Investment နှင့် Financial Decision",
      metrics: ["Cash In", "Cash Out", "Budget", "Variance"],
      example: "Business Financial Control"
    },

    "Operations Management": {
      focus: "Process၊ Productivity၊ Quality၊ Cost၊ Time နှင့် Continuous Improvement",
      metrics: ["Output", "Time", "Cost", "Quality"],
      example: "Business Operations"
    },

    "Leadership": {
      focus: "Vision၊ Direction၊ Coaching၊ Empowerment၊ Accountability နှင့် Team Performance",
      metrics: ["Goal", "Team", "Performance", "Development"],
      example: "Sales Leadership"
    },

    "Communication": {
      focus: "Clear Message၊ Listening၊ Feedback၊ Presentation နှင့် Business Communication",
      metrics: ["Message", "Understanding", "Feedback", "Action"],
      example: "Manager Communication"
    },

    "Productivity": {
      focus: "Priority၊ Time Management၊ Planning၊ Execution နှင့် Result",
      metrics: ["Tasks", "Time", "Priority", "Result"],
      example: "Manager Daily Productivity"
    },

    "Problem Solving": {
      focus: "Problem Identification၊ Root Cause၊ Analysis၊ Solution နှင့် Follow-up",
      metrics: ["Problem", "Cause", "Solution", "Result"],
      example: "Sales Performance Problem"
    },

    "Business Planning": {
      focus: "Business Objective၊ Strategy၊ Action Plan၊ Budget နှင့် Execution",
      metrics: ["Objective", "Plan", "Budget", "Result"],
      example: "Annual Business Plan"
    },

    "Decision Making & Problem Solving": {
      focus: "Data-based Decision၊ Risk၊ Alternatives၊ Evaluation နှင့် Action",
      metrics: ["Options", "Risk", "Decision", "Result"],
      example: "Management Decision"
    }
  };


  /* =========================================================
     2. GENERIC BUSINESS NUMBERS
     ========================================================= */

  const dataSets = [
    [60, 72, 80, 91, 100],
    [50, 65, 70, 82, 95],
    [100, 108, 115, 125, 138],
    [45, 55, 63, 75, 88]
  ];


  /* =========================================================
     3. HELPER FUNCTIONS
     ========================================================= */

  function escapeHTML(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }


  function getModuleInfo(module) {
    return moduleKeywords[module] || {
      focus: "Business Management နှင့် Professional Management",
      metrics: ["Target", "Actual", "Gap", "Result"],
      example: "Business Management"
    };
  }


  function percentage(actual, target) {
    if (!target) return 0;
    return Math.round((actual / target) * 100);
  }


  function makeGraph(values) {

    let html = `
      <div class="long-graph">
        <div class="long-graph-title">📈 Performance Trend</div>
        <div class="long-bars">
    `;

    values.forEach(function (value, index) {

      const height = Math.max(20, Math.min(100, value));

      html += `
        <div class="long-bar-column">
          <div class="long-bar-value">${value}</div>
          <div class="long-bar" style="height:${height}%"></div>
          <div class="long-bar-label">Period ${index + 1}</div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;

    return html;
  }


  function makeTable(module, title) {

    const info = getModuleInfo(module);

    const target = 100;
    const actual = 82;
    const gap = target - actual;
    const achievement = percentage(actual, target);

    return `
      <div class="long-table-wrapper">

        <h3>📊 ${escapeHTML(title)} — Business Analysis Table</h3>

        <table class="long-table">

          <thead>
            <tr>
              <th>Metric</th>
              <th>Target</th>
              <th>Actual</th>
              <th>Gap</th>
              <th>Achievement</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>${escapeHTML(info.metrics[0])}</td>
              <td>100</td>
              <td>82</td>
              <td>-18</td>
              <td>${achievement}%</td>
            </tr>

            <tr>
              <td>${escapeHTML(info.metrics[1])}</td>
              <td>100</td>
              <td>88</td>
              <td>-12</td>
              <td>88%</td>
            </tr>

            <tr>
              <td>${escapeHTML(info.metrics[2])}</td>
              <td>100</td>
              <td>76</td>
              <td>-24</td>
              <td>76%</td>
            </tr>

            <tr>
              <td>${escapeHTML(info.metrics[3])}</td>
              <td>100</td>
              <td>94</td>
              <td>-6</td>
              <td>94%</td>
            </tr>

          </tbody>

        </table>

        <p class="table-note">
          <strong>Manager Note:</strong>
          Target မပြည့်တာကို နံပါတ်တစ်ခုတည်းကြည့်ပြီး
          “Team မကောင်းဘူး” လို့ မဆုံးဖြတ်သင့်ပါ။
          Metric တစ်ခုချင်းစီရဲ့ Gap ကိုရှာပြီး Root Cause ကို
          ခွဲခြမ်းစစ်ဆေးရပါမယ်။
        </p>

      </div>
    `;
  }


  /* =========================================================
     4. LONG LESSON CONTENT
     ========================================================= */

  function buildLongLesson(module, title, index) {

    const info = getModuleInfo(module);

    const graphData =
      dataSets[index % dataSets.length];

    return `

      <div class="long-lesson-container">

        <!-- HEADER -->

        <div class="long-lesson-header">

          <div class="long-lesson-badge">
            PROFESSIONAL BUSINESS LESSON
          </div>

          <h1>${escapeHTML(title)}</h1>

          <div class="long-lesson-meta">

            <span>📚 ${escapeHTML(module)}</span>

            <span>⏱️ 15–20 Minutes</span>

            <span>🎯 Practical Management Learning</span>

          </div>

        </div>


        <!-- OBJECTIVE -->

        <section class="long-section">

          <h2>🎯 Learning Objectives</h2>

          <p>
            ဒီသင်ခန်းစာပြီးဆုံးတဲ့အခါ
            ${escapeHTML(title)} ကို သီအိုရီအနေနဲ့သာမက
            လက်တွေ့ Business Management မှာ အသုံးချနိုင်အောင်
            နားလည်သွားရပါမယ်။
          </p>

          <ul>

            <li>
              ${escapeHTML(title)} ရဲ့ အဓိကအဓိပ္ပါယ်ကို
              နားလည်နိုင်ရန်
            </li>

            <li>
              Business Situation တစ်ခုမှာ
              ဘယ်လိုအသုံးချရမလဲ သိရှိရန်
            </li>

            <li>
              Data နှင့် KPI ကို အသုံးပြုပြီး
              Performance ကို ခွဲခြမ်းနိုင်ရန်
            </li>

            <li>
              Manager တစ်ယောက်အနေနဲ့
              မှန်ကန်တဲ့ Action Plan ချနိုင်ရန်
            </li>

          </ul>

        </section>


        <!-- DETAILED EXPLANATION -->

        <section class="long-section">

          <h2>📖 Detailed Explanation</h2>

          <p>
            ${escapeHTML(title)} ဟာ
            ${escapeHTML(module)} ထဲမှာ
            အရေးကြီးတဲ့ Management Concept တစ်ခုဖြစ်ပါတယ်။
          </p>

          <p>
            Business တစ်ခုမှာ အောင်မြင်မှုရဖို့
            “အလုပ်လုပ်နေတယ်” ဆိုတာတစ်ခုတည်းနဲ့ မလုံလောက်ပါဘူး။
            ဘာကိုလုပ်နေသလဲ၊ ဘာကြောင့်လုပ်နေသလဲ၊
            ဘယ်လို Result ရလာသလဲ၊
            Result မကောင်းရင် ဘာကိုပြန်ပြင်ရမလဲဆိုတာ
            စနစ်တကျ သိထားဖို့လိုပါတယ်။
          </p>

          <p>
            ${escapeHTML(info.focus)}
            တွေကို တစ်ခုနဲ့တစ်ခု ချိတ်ဆက်စဉ်းစားရပါမယ်။
            Business Manager တစ်ယောက်အနေနဲ့
            Activity ကိုသာမကြည့်ဘဲ
            Activity က Result ဖြစ်လာအောင်
            ဘယ်လို Conversion ဖြစ်သွားသလဲကို
            စောင့်ကြည့်ရပါမယ်။
          </p>

          <p>
            ဥပမာအားဖြင့် Sales Team တစ်ခုမှာ
            Customer Visit 100 ကြိမ်လုပ်ထားတာနဲ့
            Sales Result ကောင်းမယ်လို့ မဆိုနိုင်ပါဘူး။
            Visit Quality၊ Customer Need၊ Product Availability၊
            Price၊ Negotiation၊ Follow-up နဲ့ Closing တို့ကိုပါ
            ဆက်စပ်ကြည့်ရပါတယ်။
          </p>

          <p>
            ဒါကြောင့် Manager တစ်ယောက်ရဲ့ အဓိကတာဝန်က
            “အလုပ်များအောင်လုပ်ပေးခြင်း” မဟုတ်ဘဲ
            “မှန်ကန်တဲ့ Activity ကနေ မှန်ကန်တဲ့ Result
            ထွက်လာအောင် System တည်ဆောက်ပေးခြင်း” ဖြစ်ပါတယ်။
          </p>

        </section>


        <!-- KEY CONCEPTS -->

        <section class="long-section">

          <h2>🧠 Key Concepts</h2>

          <div class="long-concept-grid">

            <div class="long-concept-card">
              <strong>1. Objective</strong>
              <p>
                ဘာ Result ရချင်တာလဲဆိုတာ
                ရှင်းရှင်းလင်းလင်း သတ်မှတ်ပါ။
              </p>
            </div>

            <div class="long-concept-card">
              <strong>2. Measurement</strong>
              <p>
                Result ကို တိုင်းတာနိုင်မယ့် KPI
                သတ်မှတ်ပါ။
              </p>
            </div>

            <div class="long-concept-card">
              <strong>3. Execution</strong>
              <p>
                Plan ကို Field မှာ
                လက်တွေ့အကောင်အထည်ဖော်ပါ။
              </p>
            </div>

            <div class="long-concept-card">
              <strong>4. Review</strong>
              <p>
                Actual Result ကို
                Target နဲ့ ပြန်နှိုင်းယှဉ်ပါ။
              </p>
            </div>

            <div class="long-concept-card">
              <strong>5. Improvement</strong>
              <p>
                Gap ရှိရင် Root Cause ရှာပြီး
                Action ပြန်ချပါ။
              </p>
            </div>

          </div>

        </section>


        <!-- BUSINESS FRAMEWORK -->

        <section class="long-section">

          <h2>🔄 Business Management Framework</h2>

          <div class="long-flow">

            <div>🎯 Target</div>
            <span>→</span>
            <div>📋 Plan</div>
            <span>→</span>
            <div>🚀 Execute</div>
            <span>→</span>
            <div>📊 Measure</div>
            <span>→</span>
            <div>🔍 Analyze</div>
            <span>→</span>
            <div>🛠️ Improve</div>

          </div>

          <p>
            ဒီ Cycle ကို ထပ်ခါထပ်ခါ ပြန်လုပ်နိုင်တဲ့
            Manager ဟာ Business Performance ကို
            ပိုမိုတိုးတက်အောင် စီမံနိုင်ပါတယ်။
          </p>

        </section>


        <!-- TABLE -->

        <section class="long-section">

          ${makeTable(module, title)}

        </section>


        <!-- GRAPH -->

        <section class="long-section">

          <h2>📈 Performance Graph</h2>

          <p>
            အောက်ပါ Graph ကိုကြည့်ပြီး
            Performance Trend တက်လာသလား၊
            ကျလာသလား၊ ဘယ် Period မှာ
            ပြဿနာဖြစ်လာသလဲဆိုတာ စောင့်ကြည့်နိုင်ပါတယ်။
          </p>

          ${makeGraph(graphData)}

        </section>


        <!-- CASE STUDY -->

        <section class="long-section">

          <h2>💼 Real Business Case Study</h2>

          <div class="case-study">

            <h3>
              Case: ${escapeHTML(info.example)}
            </h3>

            <p>
              Company တစ်ခုမှာ ${escapeHTML(title)}
              နဲ့ပတ်သက်ပြီး Performance ကျဆင်းလာပါတယ်။
              Manager က Team ကို အပြစ်တင်မယ့်အစား
              Data ကို အရင်စစ်ဆေးပါတယ်။
            </p>

            <p>
              ပထမဆုံး Target နဲ့ Actual ကို နှိုင်းယှဉ်ပါတယ်။
              ပြီးရင် ဘယ် Area၊ ဘယ် Customer၊
              ဘယ် Product၊ ဘယ် Team Member မှာ
              Gap အများဆုံးဖြစ်နေလဲ ခွဲခြမ်းပါတယ်။
            </p>

            <p>
              နောက်တစ်ဆင့်မှာ Root Cause ကိုရှာပါတယ်။
              ဥပမာ Product Availability မရှိတာလား၊
              Customer Demand ပြောင်းတာလား၊
              Team Execution အားနည်းတာလား၊
              Competitor Activity တက်လာတာလား
              ဆိုတာတွေကို စစ်ဆေးပါတယ်။
            </p>

            <p>
              Root Cause ရပြီးမှ Action Plan ချပါတယ်။
              ဒီလို Data → Analysis → Action
              လုပ်တဲ့ Process က Professional Manager
              တစ်ယောက်အတွက် အရေးကြီးပါတယ်။
            </p>

          </div>

        </section>


        <!-- ROOT CAUSE -->

        <section class="long-section">

          <h2>🔍 Root Cause Analysis</h2>

          <table class="long-table">

            <thead>
              <tr>
                <th>Problem</th>
                <th>Possible Cause</th>
                <th>How to Check</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Result ကျ</td>
                <td>Execution အားနည်း</td>
                <td>Field Review</td>
                <td>Coaching</td>
              </tr>

              <tr>
                <td>Sales ကျ</td>
                <td>Availability မရှိ</td>
                <td>Stock Check</td>
                <td>Replenishment</td>
              </tr>

              <tr>
                <td>Customer လျော့</td>
                <td>Service Problem</td>
                <td>Customer Feedback</td>
                <td>Service Recovery</td>
              </tr>

              <tr>
                <td>Team KPI မပြည့်</td>
                <td>Planning မကောင်း</td>
                <td>PJP / KPI Review</td>
                <td>Re-plan</td>
              </tr>

            </tbody>

          </table>

        </section>


        <!-- MANAGER THINKING -->

        <section class="long-section manager-thinking">

          <h2>👨‍💼 Manager Thinking</h2>

          <p>
            Manager တစ်ယောက်အနေနဲ့
            Result မကောင်းတဲ့အခါ
            “ဘယ်သူ့အပြစ်လဲ?” ဆိုတာထက်
            “ဘာကြောင့်ဖြစ်တာလဲ?” ဆိုတာကို
            အရင်မေးရပါမယ်။
          </p>

          <div class="thinking-box">

            <p>❌ Weak Thinking</p>

            <strong>
              “Target မပြည့်ဘူး။ Team မကောင်းဘူး။”
            </strong>

          </div>

          <div class="thinking-box">

            <p>✅ Professional Thinking</p>

            <strong>
              “Gap က ဘယ်နေရာမှာဖြစ်တာလဲ?
              Root Cause က ဘာလဲ?
              ဘယ် Action က Result ကို ပြန်တက်စေမလဲ?”
            </strong>

          </div>

        </section>


        <!-- PRACTICAL APPLICATION -->

        <section class="long-section">

          <h2>🛠️ Practical Application</h2>

          <p>
            ဒီသင်ခန်းစာကို ကိုယ့်အလုပ်မှာ
            အောက်ပါအတိုင်း အသုံးချနိုင်ပါတယ်။
          </p>

          <ol>

            <li>
              လက်ရှိ Business KPI 3 ခုကို ရွေးပါ။
            </li>

            <li>
              Target နဲ့ Actual ကို ရေးပါ။
            </li>

            <li>
              Gap ကို တွက်ပါ။
            </li>

            <li>
              Gap ဖြစ်ရတဲ့ Root Cause 3 ခု ရှာပါ။
            </li>

            <li>
              အရေးကြီးဆုံး Cause တစ်ခုကို ရွေးပါ။
            </li>

            <li>
              Action Plan တစ်ခု ချပါ။
            </li>

            <li>
              7 ရက် သို့မဟုတ် 30 ရက်အကြာမှာ
              Result ပြန်တိုင်းပါ။
            </li>

          </ol>

        </section>


        <!-- ACTION PLAN -->

        <section class="long-section">

          <h2>📋 7-Day Action Plan</h2>

          <table class="long-table">

            <thead>
              <tr>
                <th>Day</th>
                <th>Action</th>
                <th>Expected Result</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Day 1</td>
                <td>Current Situation Review</td>
                <td>Problem သိရှိ</td>
              </tr>

              <tr>
                <td>Day 2</td>
                <td>Data Collection</td>
                <td>Evidence ရရှိ</td>
              </tr>

              <tr>
                <td>Day 3</td>
                <td>Root Cause Analysis</td>
                <td>Cause သိရှိ</td>
              </tr>

              <tr>
                <td>Day 4</td>
                <td>Action Planning</td>
                <td>Plan ရရှိ</td>
              </tr>

              <tr>
                <td>Day 5</td>
                <td>Field Execution</td>
                <td>Action စတင်</td>
              </tr>

              <tr>
                <td>Day 6</td>
                <td>Review</td>
                <td>Progress သိရှိ</td>
              </tr>

              <tr>
                <td>Day 7</td>
                <td>Improve</td>
                <td>Next Action ချနိုင်</td>
              </tr>

            </tbody>

          </table>

        </section>


        <!-- COMMON MISTAKES -->

        <section class="long-section">

          <h2>⚠️ Common Management Mistakes</h2>

          <ul class="mistake-list">

            <li>
              ❌ Data မကြည့်ဘဲ ဆုံးဖြတ်ခြင်း
            </li>

            <li>
              ❌ Target မပြည့်တာကို လူကိုပဲ အပြစ်တင်ခြင်း
            </li>

            <li>
              ❌ Root Cause မရှာဘဲ Quick Fix လုပ်ခြင်း
            </li>

            <li>
              ❌ Action Plan ရှိပေမယ့် Follow-up မလုပ်ခြင်း
            </li>

            <li>
              ❌ KPI များလွန်းပြီး Priority မသတ်မှတ်ခြင်း
            </li>

            <li>
              ❌ Team ကို Coaching မလုပ်ဘဲ
              Micromanagement လုပ်ခြင်း
            </li>

          </ul>

        </section>


        <!-- EXERCISE -->

        <section class="long-section">

          <h2>✍️ Practical Exercise</h2>

          <p>
            ကိုယ့်လုပ်ငန်း သို့မဟုတ် ကိုယ့်အလုပ်ထဲက
            လက်ရှိ Problem တစ်ခုကို ရွေးပါ။
          </p>

          <div class="exercise-box">

            <p><strong>Problem:</strong></p>
            <p>________________________________</p>

            <p><strong>Target:</strong></p>
            <p>________________________________</p>

            <p><strong>Actual:</strong></p>
            <p>________________________________</p>

            <p><strong>Gap:</strong></p>
            <p>________________________________</p>

            <p><strong>Root Cause:</strong></p>
            <p>________________________________</p>

            <p><strong>Action:</strong></p>
            <p>________________________________</p>

          </div>

        </section>


        <!-- QUIZ -->

        <section class="long-section">

          <h2>❓ Knowledge Check</h2>

          <div class="quiz-question">

            <p>
              <strong>Q1.</strong>
              Business Result မကောင်းတဲ့အခါ
              Manager တစ်ယောက်အနေနဲ့
              ဘာကိုအရင်စစ်ဆေးသင့်သလဲ?
            </p>

            <p>① လူကိုအပြစ်တင်ခြင်း</p>
            <p>② Data နှင့် Root Cause</p>
            <p>③ Target လျှော့ခြင်း</p>
            <p>④ အလုပ်ရပ်ခြင်း</p>

            <p>
              <strong>Answer: ② Data နှင့် Root Cause</strong>
            </p>

          </div>


          <div class="quiz-question">

            <p>
              <strong>Q2.</strong>
              Target နဲ့ Actual ကြားက ကွာခြားချက်ကို
              ဘာလို့ခေါ်သလဲ?
            </p>

            <p>
              <strong>Answer: Gap / Variance</strong>
            </p>

          </div>


          <div class="quiz-question">

            <p>
              <strong>Q3.</strong>
              Root Cause သိပြီးနောက် ဘာလုပ်သင့်သလဲ?
            </p>

            <p>
              <strong>
                Answer: Action Plan ချပြီး Execute + Follow-up လုပ်ရပါမယ်။
              </strong>
            </p>

          </div>

        </section>


        <!-- REFLECTION -->

        <section class="long-section">

          <h2>🤔 Manager Reflection</h2>

          <div class="reflection-box">

            <p>
              1. ကိုယ့်အလုပ်မှာ လက်ရှိအကြီးဆုံး Business Gap က ဘာလဲ?
            </p>

            <p>
              2. အဲဒီ Gap ရဲ့ Root Cause က ဘာဖြစ်နိုင်လဲ?
            </p>

            <p>
              3. Data နဲ့ သက်သေပြနိုင်လား?
            </p>

            <p>
              4. ဒီအပတ်အတွင်း ဘာ Action တစ်ခု စလုပ်နိုင်လဲ?
            </p>

            <p>
              5. Result ကို ဘယ်လိုတိုင်းတာမလဲ?
            </p>

          </div>

        </section>


        <!-- SUMMARY -->

        <section class="long-section summary-section">

          <h2>📌 Lesson Summary</h2>

          <p>
            ${escapeHTML(title)} ကို
            မှန်ကန်စွာအသုံးချနိုင်ဖို့
            Concept တစ်ခုတည်း သိထားရုံနဲ့ မလုံလောက်ပါဘူး။
          </p>

          <p>
            <strong>
              Target → Plan → Execute → Measure →
              Analyze → Improve
            </strong>
          </p>

          <p>
            ဒီ Management Cycle ကို
            Business မှာ ပုံမှန်အသုံးချနိုင်ရင်
            Performance ကို တဖြည်းဖြည်းတိုးတက်အောင်
            စီမံနိုင်ပါတယ်။
          </p>

          <div class="final-message">

            🎯 <strong>Professional Manager Rule</strong>

            <br><br>

            “Don't manage by assumption.
            Manage by data, analysis and action.”

            <br><br>

            “ထင်မြင်ချက်နဲ့ မစီမံပါနဲ့။
            Data၊ Analysis နဲ့ Action ကို အသုံးပြုပြီး
            စီမံပါ။”

          </div>

        </section>

      </div>
    `;
  }


  /* =========================================================
     5. CSS
     ========================================================= */

  function injectStyles() {

    if (document.getElementById("aung-long-lesson-style")) {
      return;
    }

    const style = document.createElement("style");

    style.id = "aung-long-lesson-style";

    style.textContent = `

      .long-lesson-container {
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
        padding: 10px 0 40px;
        color: #1e293b;
        line-height: 1.8;
      }

      .long-lesson-header {
        padding: 28px;
        margin-bottom: 22px;
        border-radius: 18px;
        background: linear-gradient(
          135deg,
          #0f172a,
          #1e293b
        );
        color: white;
        box-shadow: 0 10px 30px rgba(15,23,42,.15);
      }

      .long-lesson-header h1 {
        margin: 12px 0;
        font-size: 30px;
        line-height: 1.35;
      }

      .long-lesson-badge {
        display: inline-block;
        padding: 6px 12px;
        border-radius: 20px;
        background: rgba(255,255,255,.12);
        font-size: 12px;
        letter-spacing: 1px;
        font-weight: 700;
      }

      .long-lesson-meta {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        margin-top: 14px;
      }

      .long-lesson-meta span {
        padding: 7px 12px;
        border-radius: 20px;
        background: rgba(255,255,255,.1);
        font-size: 13px;
      }

      .long-section {
        background: white;
        border: 1px solid #e2e8f0;
        border-radius: 16px;
        padding: 25px;
        margin-bottom: 18px;
        box-shadow: 0 4px 16px rgba(15,23,42,.05);
      }

      .long-section h2 {
        margin: 0 0 15px;
        font-size: 22px;
        color: #0f172a;
      }

      .long-section h3 {
        margin: 0 0 12px;
        font-size: 18px;
      }

      .long-section p {
        margin: 0 0 14px;
      }

      .long-section ul,
      .long-section ol {
        padding-left: 25px;
      }

      .long-section li {
        margin-bottom: 9px;
      }

      .long-concept-grid {
        display: grid;
        grid-template-columns:
          repeat(auto-fit, minmax(180px, 1fr));
        gap: 14px;
      }

      .long-concept-card {
        padding: 18px;
        border: 1px solid #e2e8f0;
        border-radius: 14px;
        background: #f8fafc;
      }

      .long-concept-card strong {
        display: block;
        margin-bottom: 8px;
        color: #0f172a;
      }

      .long-concept-card p {
        margin: 0;
        font-size: 14px;
      }

      .long-flow {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 8px;
        margin: 20px 0;
      }

      .long-flow div {
        padding: 12px 15px;
        background: #f1f5f9;
        border: 1px solid #cbd5e1;
        border-radius: 10px;
        font-weight: 700;
        font-size: 14px;
      }

      .long-flow span {
        font-size: 20px;
        font-weight: 700;
      }

      .long-table-wrapper {
        width: 100%;
        overflow-x: auto;
      }

      .long-table {
        width: 100%;
        border-collapse: collapse;
        min-width: 650px;
        margin: 15px 0;
      }

      .long-table th,
      .long-table td {
        border: 1px solid #e2e8f0;
        padding: 11px;
        text-align: left;
      }

      .long-table th {
        background: #f1f5f9;
        font-weight: 700;
      }

      .long-table tr:nth-child(even) {
        background: #fafafa;
      }

      .table-note {
        padding: 15px;
        background: #f8fafc;
        border-left: 4px solid #64748b;
        border-radius: 8px;
      }

      .long-graph {
        margin-top: 20px;
        padding: 20px;
        border: 1px solid #e2e8f0;
        border-radius: 14px;
        background: #f8fafc;
      }

      .long-graph-title {
        font-weight: 700;
        margin-bottom: 20px;
      }

      .long-bars {
        height: 250px;
        display: flex;
        align-items: flex-end;
        justify-content: space-around;
        gap: 15px;
        border-bottom: 2px solid #94a3b8;
        padding: 0 15px;
      }

      .long-bar-column {
        flex: 1;
        max-width: 100px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        position: relative;
      }

      .long-bar {
        width: 55px;
        min-height: 20px;
        border-radius: 8px 8px 0 0;
        background: #334155;
      }

      .long-bar-value {
        font-size: 12px;
        font-weight: 700;
        margin-bottom: 5px;
      }

      .long-bar-label {
        font-size: 11px;
        margin-top: 8px;
        white-space: nowrap;
      }

      .case-study {
        padding: 20px;
        border-radius: 14px;
        background: #f8fafc;
        border: 1px solid #e2e8f0;
      }

      .thinking-box {
        padding: 16px;
        margin: 12px 0;
        border-radius: 12px;
        background: #f8fafc;
        border: 1px solid #e2e8f0;
      }

      .thinking-box p {
        font-weight: 700;
        margin-bottom: 5px;
      }

      .mistake-list {
        list-style: none;
        padding: 0 !important;
      }

      .mistake-list li {
        padding: 11px 14px;
        margin-bottom: 8px;
        background: #f8fafc;
        border-radius: 9px;
      }

      .exercise-box {
        padding: 20px;
        background: #f8fafc;
        border: 1px dashed #94a3b8;
        border-radius: 12px;
      }

      .exercise-box p {
        margin-bottom: 10px;
      }

      .quiz-question {
        padding: 18px;
        margin-bottom: 15px;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        background: #f8fafc;
      }

      .quiz-question p {
        margin-bottom: 7px;
      }

      .reflection-box {
        padding: 20px;
        background: #f8fafc;
        border-radius: 12px;
      }

      .reflection-box p {
        padding: 9px 0;
        border-bottom: 1px solid #e2e8f0;
      }

      .final-message {
        margin-top: 20px;
        padding: 22px;
        border-radius: 14px;
        background: #f1f5f9;
        text-align: center;
        font-size: 17px;
      }

      @media (max-width: 700px) {

        .long-lesson-container {
          padding: 5px 0 25px;
        }

        .long-lesson-header {
          padding: 20px;
          border-radius: 14px;
        }

        .long-lesson-header h1 {
          font-size: 23px;
        }

        .long-section {
          padding: 18px;
          border-radius: 13px;
        }

        .long-section h2 {
          font-size: 19px;
        }

        .long-flow {
          flex-direction: column;
        }

        .long-flow span {
          transform: rotate(90deg);
        }

        .long-bars {
          height: 210px;
          gap: 5px;
          padding: 0 5px;
        }

        .long-bar {
          width: 35px;
        }

        .long-bar-label {
          font-size: 9px;
        }

      }

    `;

    document.head.appendChild(style);
  }


  /* =========================================================
     6. FIND EXISTING LESSON MODAL
     ========================================================= */

  function findModal() {

    const selectors = [
      "#lessonModal",
      "#lesson-modal",
      "#lessonDetailModal",
      "#lessonDetail",
      ".lesson-modal",
      ".lessonModal",
      ".modal"
    ];

    for (let i = 0; i < selectors.length; i++) {

      const element =
        document.querySelector(selectors[i]);

      if (element) {
        return element;
      }

    }

    return null;
  }


  /* =========================================================
     7. GET LESSON INFORMATION FROM EXISTING PAGE
     ========================================================= */

  function getLessonData(element) {

    let title = "";
    let module = "";

    const titleElement =
      element.querySelector(
        ".lesson-title, .lesson-name, h3, h4, strong"
      );

    if (titleElement) {
      title = titleElement.textContent.trim();
    }

    const moduleElement =
      element.querySelector(
        ".lesson-module, .module-name, .category, .lesson-category"
      );

    if (moduleElement) {
      module = moduleElement.textContent.trim();
    }

    if (!title) {

      const text =
        element.textContent
          .replace(/\s+/g, " ")
          .trim();

      title = text.substring(0, 120);

    }

    return {
      title: title,
      module: module
    };
  }


  /* =========================================================
     8. SHOW LONG LESSON
     ========================================================= */

  function showLongLesson(title, module) {

    /*
      English lessons must remain untouched.
    */

    if (
      /business english/i.test(title) ||
      /english/i.test(module)
    ) {
      return false;
    }

    const modal = findModal();

    if (!modal) {
      return false;
    }

    const info = getModuleInfo(module);

    let body =
      modal.querySelector(
        ".modal-body, .modal-content-body, .lesson-modal-body"
      );

    if (!body) {
      body = modal;
    }

    body.innerHTML =
      buildLongLesson(module, title, 0);

    modal.classList.add("long-lesson-active");

    /*
      Try to make modal large
    */

    const modalContent =
      modal.querySelector(
        ".modal-content, .modal-dialog"
      );

    if (modalContent) {

      modalContent.style.width = "min(1000px, 96vw)";
      modalContent.style.maxWidth = "1000px";

    }

    return true;
  }


  /* =========================================================
     9. CLICK INTERCEPTOR
     ========================================================= */

  function setupClickInterceptor() {

    document.addEventListener(
      "click",
      function (event) {

        const lessonCard =
          event.target.closest(
            ".lesson-card, " +
            ".lesson-item, " +
            ".lesson, " +
            "[data-lesson-id], " +
            "[data-lesson-index]"
          );

        if (!lessonCard) {
          return;
        }

        const data =
          getLessonData(lessonCard);

        if (!data.title) {
          return;
        }

        /*
          Delay slightly so the existing academy
          renderer can open its modal first.
        */

        setTimeout(function () {

          showLongLesson(
            data.title,
            data.module
          );

        }, 80);

      },
      true
    );

  }


  /* =========================================================
     10. TRY TO UPGRADE EXISTING OPEN MODAL
     ========================================================= */

  function observeModal() {

    const observer =
      new MutationObserver(function () {

        const modal = findModal();

        if (!modal) {
          return;
        }

        if (
          modal.classList.contains(
            "long-lesson-active"
          )
        ) {
          return;
        }

        /*
          Find title currently displayed in modal
        */

        const titleElement =
          modal.querySelector(
            ".lesson-title, " +
            ".modal-title, " +
            "h2, h3, h4"
          );

        if (!titleElement) {
          return;
        }

        const title =
          titleElement.textContent.trim();

        if (!title) {
          return;
        }

        if (
          /business english/i.test(title) ||
          /english/i.test(title)
        ) {
          return;
        }

        /*
          Only upgrade if this looks like
          an existing Business lesson.
        */

        const moduleElement =
          modal.querySelector(
            ".lesson-module, " +
            ".module-name, " +
            ".category"
          );

        const module =
          moduleElement
            ? moduleElement.textContent.trim()
            : "Business Basics";

        if (
          title.length > 2 &&
          title.length < 200
        ) {

          setTimeout(function () {

            showLongLesson(
              title,
              module
            );

          }, 100);

        }

      });

    observer.observe(
      document.body,
      {
        childList: true,
        subtree: true
      }
    );

  }


  /* =========================================================
     11. RESET MODAL STATE WHEN CLOSED
     ========================================================= */

  function setupModalReset() {

    document.addEventListener(
      "click",
      function (event) {

        const closeButton =
          event.target.closest(
            ".modal-close, " +
            ".close-modal, " +
            ".close, " +
            "[data-close]"
          );

        if (!closeButton) {
          return;
        }

        const modal = findModal();

        if (modal) {

          setTimeout(function () {

            modal.classList.remove(
              "long-lesson-active"
            );

          }, 300);

        }

      }
    );

  }


  /* =========================================================
     12. INITIALIZE
     ========================================================= */

  function init() {

    injectStyles();

    setupClickInterceptor();

    observeModal();

    setupModalReset();

    console.log(
      "✅ Long Detailed Lesson System Activated"
    );

    console.log(
      "📚 Existing Business Lessons preserved"
    );

    console.log(
      "🇬🇧 Business English preserved separately"
    );

  }


  if (document.readyState === "loading") {

    document.addEventListener(
      "DOMContentLoaded",
      init
    );

  } else {

    init();

  }


})();
