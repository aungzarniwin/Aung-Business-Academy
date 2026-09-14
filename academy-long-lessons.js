/* ============================================================
   AUNG BUSINESS ACADEMY
   LONG DETAILED LESSON UPGRADE
   ============================================================

   IMPORTANT
   ------------------------------------------------------------
   • Existing Business Lessons only
   • No new lesson titles
   • No tables
   • No graphs
   • No horizontal overflow
   • Business English remains untouched
   • Long detailed text-based professional lessons
   ============================================================ */

(function () {

  "use strict";

  console.log(
    "Aung Business Academy — Long Detailed Lesson Upgrade Loading..."
  );


  /* ============================================================
     MODULE INFORMATION
     ============================================================ */

  const MODULE_INFO = {

    "Business Basics": {
      focus:
        "Business အခြေခံသဘောတရား၊ Customer၊ Revenue၊ Cost၊ Profit နှင့် Business Model",
      example:
        "Retail / Distribution Business"
    },

    "Strategic Thinking": {
      focus:
        "Business Direction၊ Market၊ Competition၊ Opportunity နှင့် Long-term Strategy",
      example:
        "Market Expansion Business"
    },

    "Brand Basics": {
      focus:
        "Brand Identity၊ Customer Perception၊ Trust၊ Positioning နှင့် Brand Value",
      example:
        "Consumer Brand"
    },

    "Marketing Basics": {
      focus:
        "Customer Need၊ Market Research၊ Marketing Mix၊ Promotion နှင့် Customer Acquisition",
      example:
        "FMCG Marketing"
    },

    "Sales Basics": {
      focus:
        "Prospecting၊ Customer Visit၊ Need Discovery၊ Presentation၊ Negotiation နှင့် Closing",
      example:
        "FMCG Sales Team"
    },

    "Sales Management": {
      focus:
        "Sales Target၊ Team Management၊ Territory၊ Distribution၊ Execution၊ KPI နှင့် Performance",
      example:
        "Area Sales Management"
    },

    "Negotiation": {
      focus:
        "Customer Need၊ Value Creation၊ Objection Handling၊ Trade-off နှင့် Win-Win Agreement",
      example:
        "Distributor / Key Account Negotiation"
    },

    "Customer Service": {
      focus:
        "Customer Experience၊ Complaint Handling၊ Service Quality၊ Retention နှင့် Loyalty",
      example:
        "Customer Service Management"
    },

    "People Management": {
      focus:
        "Team Performance၊ Coaching၊ Motivation၊ Accountability၊ Delegation နှင့် Development",
      example:
        "Sales Team Management"
    },

    "Profit & Loss": {
      focus:
        "Revenue၊ COGS၊ Gross Profit၊ Operating Cost၊ Profit Margin နှင့် Business Profitability",
      example:
        "Distribution Business P&L"
    },

    "Goal Setting": {
      focus:
        "Goal၊ KPI၊ Action Plan၊ Measurement၊ Accountability နှင့် Continuous Improvement",
      example:
        "Monthly Business Goal"
    },

    "Customer Relationship Management": {
      focus:
        "Customer Retention၊ Customer Value၊ Relationship Building၊ Follow-up နှင့် Key Account Management",
      example:
        "Key Customer Management"
    },

    "Distribution Management": {
      focus:
        "Distributor၊ Outlet Coverage၊ Stock၊ Availability၊ Route၊ Delivery နှင့် Market Execution",
      example:
        "FMCG Distribution"
    },

    "Retail & Trade Marketing": {
      focus:
        "Outlet Execution၊ Visibility၊ Availability၊ Promotion၊ Merchandising နှင့် Retail Sales",
      example:
        "Retail Execution"
    },

    "Business Analytics": {
      focus:
        "Data Collection၊ KPI၊ Trend၊ Variance၊ Root Cause၊ Insight နှင့် Business Decision",
      example:
        "Business Performance Analysis"
    },

    "Financial Management": {
      focus:
        "Budget၊ Cash Flow၊ Cost Control၊ Financial Planning နှင့် Financial Decision",
      example:
        "Business Financial Management"
    },

    "Operations Management": {
      focus:
        "Process၊ Productivity၊ Quality၊ Cost၊ Time Management နှင့် Operational Efficiency",
      example:
        "Business Operations"
    },

    "Leadership": {
      focus:
        "Vision၊ Direction၊ Coaching၊ Empowerment၊ Accountability နှင့် Team Performance",
      example:
        "Sales Leadership"
    },

    "Communication": {
      focus:
        "Clear Message၊ Listening၊ Feedback၊ Meeting၊ Presentation နှင့် Manager Communication",
      example:
        "Manager Communication"
    },

    "Productivity": {
      focus:
        "Priority၊ Planning၊ Time Management၊ Delegation၊ Focus နှင့် Result",
      example:
        "Manager Productivity"
    },

    "Problem Solving": {
      focus:
        "Problem Identification၊ Root Cause၊ Alternatives၊ Solution နှင့် Follow-up",
      example:
        "Sales Problem Solving"
    },

    "Business Planning": {
      focus:
        "Business Objective၊ Strategy၊ Action Plan၊ Resource၊ Budget နှင့် Measurement",
      example:
        "Annual Business Planning"
    },

    "Decision Making & Problem Solving": {
      focus:
        "Data Analysis၊ Options၊ Risk၊ Decision၊ Execution နှင့် Result Evaluation",
      example:
        "Management Decision Making"
    }

  };


  /* ============================================================
     HELPER
     ============================================================ */

  function escapeHTML(value) {

    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  }


  function getModuleInfo(module) {

    return MODULE_INFO[module] || {
      focus:
        "Business Management၊ Customer၊ Team၊ Performance နှင့် Result",
      example:
        "Business Management"
    };

  }


  /* ============================================================
     LESSON INTRO
     ============================================================ */

  function buildIntroduction(module, title) {

    const info =
      getModuleInfo(module);

    return `

      <section class="long-lesson-section">

        <h2>🎯 ဒီသင်ခန်းစာရဲ့ ရည်ရွယ်ချက်</h2>

        <p>
          <strong>${escapeHTML(title)}</strong>
          ဆိုတဲ့အကြောင်းအရာကို သီအိုရီအနေနဲ့သာ သိထားရုံနဲ့
          Professional Manager တစ်ယောက်ဖြစ်လာမှာ မဟုတ်ပါဘူး။
          လက်တွေ့ Business မှာ ဘယ်လိုအသုံးချရမလဲ၊
          ဘယ်လိုစဉ်းစားရမလဲ၊ ဘယ်လိုဆုံးဖြတ်ရမလဲဆိုတာ
          နားလည်ဖို့လိုပါတယ်။
        </p>

        <p>
          ဒီသင်ခန်းစာမှာ
          ${escapeHTML(info.focus)}
          ကို အခြေခံပြီး
          လက်တွေ့လုပ်ငန်းခွင်မှာ အသုံးချနိုင်အောင်
          အဆင့်ဆင့်ရှင်းပြသွားမှာ ဖြစ်ပါတယ်။
        </p>

        <p>
          Manager တစ်ယောက်ဟာ အလုပ်တွေကို ကိုယ်တိုင်လုပ်ပေးနေတဲ့
         သူတစ်ယောက်ဖြစ်ဖို့ထက်
          Team ကို မှန်ကန်တဲ့ Direction ပေးနိုင်သူ၊
          Problem ကို မှန်ကန်စွာရှာဖွေနိုင်သူ၊
          Result ရအောင် စီမံခန့်ခွဲနိုင်သူ ဖြစ်ရပါမယ်။
        </p>

      </section>

    `;

  }


  /* ============================================================
     DETAILED EXPLANATION
     ============================================================ */

  function buildDetailedExplanation(module, title) {

    const info =
      getModuleInfo(module);

    return `

      <section class="long-lesson-section">

        <h2>📖 အသေးစိတ်ရှင်းလင်းချက်</h2>

        <p>
          Business Management မှာ
          <strong>${escapeHTML(title)}</strong>
          ကို နားလည်ဖို့အတွက်
          အကြောင်းအရာတစ်ခုတည်းကို သီးခြားကြည့်လို့မရပါဘူး။
          Customer၊ People၊ Process၊ Money၊ Market နဲ့
          Business Result တွေဟာ တစ်ခုနဲ့တစ်ခု
          ဆက်စပ်နေပါတယ်။
        </p>

        <p>
          ဥပမာ Sales Result ကျဆင်းလာတယ်ဆိုပါစို့။
          Sales ကျတာကို Sales Person တွေရဲ့
          Performance မကောင်းလို့ဆိုပြီး ချက်ချင်းဆုံးဖြတ်လိုက်ရင်
          Manager အနေနဲ့ အရေးကြီးတဲ့ Root Cause တချို့ကို
          မတွေ့နိုင်တော့ပါဘူး။
        </p>

        <p>
          Product Availability မရှိတာလား၊
          Customer Demand ပြောင်းသွားတာလား၊
          Price Competition ပြင်းလာတာလား၊
          Distributor Stock မလုံလောက်တာလား၊
          Outlet Coverage လျော့သွားတာလား၊
          Team Execution မကောင်းတာလားဆိုတာ
          တစ်ဆင့်ချင်း စစ်ဆေးရပါမယ်။
        </p>

        <p>
          ဒါကြောင့် Professional Manager တစ်ယောက်အနေနဲ့
          Result ကိုသာ မကြည့်ဘဲ
          Result ဖြစ်ပေါ်လာစေတဲ့ Process ကိုပါ
          နားလည်ထားရပါမယ်။
        </p>

        <p>
          ${escapeHTML(info.focus)}
          ဟာ Business Result နဲ့ တိုက်ရိုက်သက်ဆိုင်တဲ့
          အရေးကြီးတဲ့ Management Area ဖြစ်ပါတယ်။
          ဒီအပိုင်းကို ကောင်းကောင်းစီမံနိုင်ရင်
          Business ရဲ့ Growth နဲ့ Stability ကို
          တိုးတက်အောင်လုပ်နိုင်ပါတယ်။
        </p>

        <p>
          Manager တစ်ယောက်အနေနဲ့
          “ဘာလုပ်ခဲ့လဲ” ဆိုတာထက်
          “ဘာ Result ရခဲ့လဲ”
          ဆိုတာကို ပိုအရေးထားရပါမယ်။
          ဒါပေမယ့် Result မကောင်းတဲ့အခါ
          Result ကိုပဲကြည့်ပြီး လူကိုအပြစ်တင်တာမျိုး
          မလုပ်သင့်ပါဘူး။
        </p>

        <p>
          အရင်ဆုံး Situation ကို နားလည်ရပါမယ်။
          ပြီးရင် Problem ကို သတ်မှတ်ရပါမယ်။
          နောက်တစ်ဆင့် Root Cause ရှာရပါမယ်။
          Root Cause သိပြီးမှ Solution ရွေးရပါမယ်။
          နောက်ဆုံး Action ကို သတ်မှတ်ပြီး
          Result ကို ပြန်လည်တိုင်းတာရပါမယ်။
        </p>

      </section>

    `;

  }


  /* ============================================================
     IMPORTANT PRINCIPLES
     ============================================================ */

  function buildPrinciples(module, title) {

    return `

      <section class="long-lesson-section">

        <h2>🧠 အရေးကြီးတဲ့ Management Principles</h2>

        <h3>၁။ Result ကို အမြဲစောင့်ကြည့်ပါ</h3>

        <p>
          Manager တစ်ယောက်အနေနဲ့
          နေ့စဉ်လုပ်ဆောင်ချက်တွေကို သိထားရုံမလုံလောက်ပါဘူး။
          နောက်ဆုံးရလဒ်က ဘယ်လောက်ရလာသလဲဆိုတာ
          ပုံမှန်စောင့်ကြည့်ရပါမယ်။
        </p>

        <h3>၂။ Gap ကို ရှာပါ</h3>

        <p>
          Target ရှိပြီး Actual ရှိရင်
          နှစ်ခုကြားမှာ Gap ရှိမရှိ စစ်ဆေးရပါမယ်။
          Gap ရှိရင် ဘာကြောင့်ဖြစ်လာသလဲဆိုတာ
          ဆက်ပြီးရှာရပါမယ်။
        </p>

        <h3>၃။ Root Cause ကို ရှာပါ</h3>

        <p>
          အပြင်ပန်းမြင်ရတဲ့ Problem ကိုပဲ
          ဖြေရှင်းလိုက်ရင် Problem က
          နောက်တစ်ကြိမ် ပြန်ဖြစ်နိုင်ပါတယ်။
          ဒါကြောင့် အဓိကအကြောင်းရင်းကို
          ရှာဖွေဖို့လိုပါတယ်။
        </p>

        <h3>၄။ Action ကို ရှင်းရှင်းလင်းလင်း သတ်မှတ်ပါ</h3>

        <p>
          “ပိုကြိုးစားပါ”
          “Sales တိုးအောင်လုပ်ပါ”
          ဆိုတာ Action Plan ကောင်းတစ်ခု မဟုတ်ပါဘူး။
          ဘယ်သူက၊ ဘာကို၊ ဘယ်အချိန်မှာ၊
          ဘယ်လိုလုပ်မလဲဆိုတာ သတ်မှတ်ရပါမယ်။
        </p>

        <h3>၅။ Follow-up လုပ်ပါ</h3>

        <p>
          Action Plan ချပြီးတာနဲ့ အလုပ်ပြီးသွားတာမဟုတ်ပါဘူး။
          Action က တကယ်အကောင်အထည်ဖော်ပြီးပြီလား၊
          Result ပြောင်းလဲလာလားဆိုတာ
          ပြန်စစ်ရပါမယ်။
        </p>

      </section>

    `;

  }


  /* ============================================================
     REAL BUSINESS EXAMPLE
     ============================================================ */

  function buildBusinessExample(module, title) {

    const info =
      getModuleInfo(module);

    return `

      <section class="long-lesson-section">

        <h2>💼 လက်တွေ့ Business Example</h2>

        <p>
          ${escapeHTML(info.example)} တစ်ခုကို
          ဥပမာအနေနဲ့ စဉ်းစားကြည့်ပါမယ်။
        </p>

        <p>
          Company က ဒီလမှာ Sales Target ကို
          သတ်မှတ်ထားပေမယ့် လကုန်ခါနီးတဲ့အချိန်မှာ
          Result က Target ထက် နောက်ကျနေပါတယ်။
        </p>

        <p>
          ဒီအခြေအနေမှာ Manager တချို့က
          Team ကို Target မပြည့်တဲ့အတွက်
          ဖိအားပေးတတ်ပါတယ်။
          ဒါပေမယ့် Professional Manager ကတော့
          အရင်ဆုံး Data နဲ့ Situation ကို
          နားလည်အောင်လုပ်ပါမယ်။
        </p>

        <p>
          Customer Visit လုံလောက်ရဲ့လား။
          Order Conversion ကောင်းရဲ့လား။
          Product ရှိရဲ့လား။
          Distributor က Stock ထားပေးထားရဲ့လား။
          Outlet Coverage မှန်ရဲ့လား။
          Competitor Promotion ရှိနေလား။
          Customer Demand ပြောင်းနေလား။
          Team Member တစ်ယောက်ချင်းစီရဲ့
          Execution ကောင်းရဲ့လားဆိုတာ
          စစ်ဆေးပါမယ်။
        </p>

        <p>
          အဲဒီလို စစ်ဆေးပြီးနောက်မှာ
          Problem ရဲ့ အဓိကအကြောင်းရင်းကို
          သတ်မှတ်နိုင်ပါမယ်။
          Root Cause ကို သိလာတဲ့အခါ
          Action Plan ကလည်း ပိုပြီးတိကျလာပါမယ်။
        </p>

        <p>
          ဥပမာ Coverage က ပြဿနာဖြစ်နေရင်
          Sales Team ကို “ပိုရောင်းပါ” လို့ပြောတာထက်
          Priority Outlet တွေ သတ်မှတ်ပေးပြီး
          Visit Plan ပြန်ဆွဲပေးတာက
          ပိုထိရောက်ပါတယ်။
        </p>

      </section>

    `;

  }


  /* ============================================================
     MANAGER THINKING
     ============================================================ */

  function buildManagerThinking(module, title) {

    return `

      <section class="long-lesson-section">

        <h2>👨‍💼 Professional Manager ဘယ်လိုစဉ်းစားမလဲ</h2>

        <p>
          Professional Manager တစ်ယောက်ဟာ
          Problem တစ်ခုကြုံလာတဲ့အခါ
          စိတ်ခံစားချက်နဲ့ ချက်ချင်းဆုံးဖြတ်တာထက်
          အချက်အလက်ကို အရင်နားလည်အောင်လုပ်ပါတယ်။
        </p>

        <p>
          “ဘာဖြစ်နေတာလဲ?”
          ဆိုတဲ့မေးခွန်းက ပထမအဆင့်ပါ။
        </p>

        <p>
          “ဘာကြောင့်ဖြစ်တာလဲ?”
          ဆိုတာက ဒုတိယအဆင့်ပါ။
        </p>

        <p>
          “ဘယ်လိုဖြေရှင်းမလဲ?”
          ဆိုတာက တတိယအဆင့်ပါ။
        </p>

        <p>
          “ဘယ်သူက ဘယ်အချိန်မှာ ဘာလုပ်မလဲ?”
          ဆိုတာက Execution အဆင့်ပါ။
        </p>

        <p>
          “လုပ်ပြီးနောက် Result ဘယ်လိုပြောင်းသွားလဲ?”
          ဆိုတာက Follow-up အဆင့် ဖြစ်ပါတယ်။
        </p>

        <p>
          ဒီစဉ်းစားပုံကို အမြဲလေ့ကျင့်ထားရင်
          Manager အနေနဲ့ ပြဿနာတိုင်းကို
          ပိုပြီးတည်ငြိမ်စွာနဲ့
          Systematic ဖြစ်အောင် ဖြေရှင်းနိုင်ပါမယ်။
        </p>

      </section>

    `;

  }


  /* ============================================================
     COMMON MISTAKES
     ============================================================ */

  function buildMistakes(module, title) {

    return `

      <section class="long-lesson-section">

        <h2>⚠️ Manager တွေ မကြာခဏလုပ်မိတတ်တဲ့ အမှားများ</h2>

        <h3>❌ အမှား (၁) Result မကောင်းတာနဲ့ လူကို အပြစ်တင်ခြင်း</h3>

        <p>
          Result မကောင်းတာဟာ လူတစ်ယောက်တည်းကြောင့်
          ဖြစ်တယ်လို့ ချက်ချင်းမဆုံးဖြတ်သင့်ပါဘူး။
          Process၊ Resource၊ Customer၊ Market၊
          Product နဲ့ Execution ကိုပါ စစ်ဆေးရပါမယ်။
        </p>

        <h3>❌ အမှား (၂) Data မကြည့်ဘဲ ခန့်မှန်းခြင်း</h3>

        <p>
          “ထင်တယ်”
          “ဖြစ်မယ်ထင်တယ်”
          ဆိုတာတွေထက်
          ရနိုင်တဲ့ Data ကို အရင်ကြည့်သင့်ပါတယ်။
        </p>

        <h3>❌ အမှား (၃) Action Plan မရှင်းခြင်း</h3>

        <p>
          ဘာလုပ်မလဲ၊ ဘယ်သူလုပ်မလဲ၊
          ဘယ်နေ့ပြီးရမလဲ မသတ်မှတ်ထားရင်
          Action Plan က လက်တွေ့အကောင်အထည်ဖော်ဖို့
          ခက်ခဲနိုင်ပါတယ်။
        </p>

        <h3>❌ အမှား (၄) Follow-up မလုပ်ခြင်း</h3>

        <p>
          Meeting လုပ်ပြီးတာနဲ့
          Problem ဖြေရှင်းပြီးပြီလို့
          မယူဆသင့်ပါဘူး။
          Result ကို ပြန်စစ်ဖို့လိုပါတယ်။
        </p>

        <h3>❌ အမှား (၅) Short-term Result ကိုပဲကြည့်ခြင်း</h3>

        <p>
          ဒီနေ့ Sales တက်လာတာတစ်ခုတည်းနဲ့
          Business အောင်မြင်နေပြီလို့
          မဆုံးဖြတ်သင့်ပါဘူး။
          Long-term Customer Relationship၊
          Margin၊ Team Capability နဲ့
          Sustainable Growth ကိုပါ ကြည့်ရပါမယ်။
        </p>

      </section>

    `;

  }


  /* ============================================================
     PRACTICAL APPLICATION
     ============================================================ */

  function buildPracticalApplication(module, title) {

    return `

      <section class="long-lesson-section">

        <h2>🛠️ လက်တွေ့အသုံးချနည်း</h2>

        <p>
          ဒီသင်ခန်းစာကို လေ့လာပြီးတဲ့အခါ
          ကိုယ့်လုပ်ငန်းမှာ ချက်ချင်းအသုံးချနိုင်ဖို့
          အောက်ပါအဆင့်တွေအတိုင်း လုပ်ကြည့်ပါ။
        </p>

        <p>
          <strong>Step 1 — လက်ရှိအခြေအနေကို ရေးပါ။</strong>
        </p>

        <p>
          လက်ရှိမှာ ဘာဖြစ်နေသလဲဆိုတာ
          ရိုးရိုးရှင်းရှင်းရေးပါ။
          ဥပမာ Sales ကျနေတယ်၊
          Customer Complaint တက်နေတယ်၊
          Team Performance ကျနေတယ်ဆိုတာမျိုးပါ။
        </p>

        <p>
          <strong>Step 2 — Target နဲ့ လက်ရှိ Result ကို နှိုင်းယှဉ်ပါ။</strong>
        </p>

        <p>
          ကိုယ်လိုချင်တဲ့ Result နဲ့
          လက်ရှိရနေတဲ့ Result ကြား
          ဘယ်လောက်ကွာနေသလဲဆိုတာ
          ရှာပါ။
        </p>

        <p>
          <strong>Step 3 — Root Cause ရှာပါ။</strong>
        </p>

        <p>
          “ဘာကြောင့်လဲ?”
          ဆိုတဲ့မေးခွန်းကို ထပ်ခါထပ်ခါမေးပြီး
          အဓိကအကြောင်းရင်းကို ရှာပါ။
        </p>

        <p>
          <strong>Step 4 — Action Plan ချပါ။</strong>
        </p>

        <p>
          ဘယ်သူက ဘာလုပ်မလဲ၊
          ဘယ်အချိန်မှာ လုပ်မလဲ၊
          ဘယ်လို Result ရချင်လဲဆိုတာ
          သတ်မှတ်ပါ။
        </p>

        <p>
          <strong>Step 5 — Follow-up လုပ်ပါ။</strong>
        </p>

        <p>
          Action လုပ်ပြီးတဲ့နောက်
          Result တကယ်ပြောင်းလာသလား
          ပြန်စစ်ပါ။
        </p>

      </section>

    `;

  }


  /* ============================================================
     ACTION PLAN
     ============================================================ */

  function buildActionPlan(module, title) {

    return `

      <section class="long-lesson-section">

        <h2>📋 ဒီနေ့ကစပြီး လုပ်နိုင်တဲ့ Action Plan</h2>

        <p>
          <strong>Action 1:</strong>
          ကိုယ့်လုပ်ငန်းမှာ
          ${escapeHTML(title)}
          နဲ့ပတ်သက်တဲ့ လက်ရှိ Problem တစ်ခုကို
          ရွေးပါ။
        </p>

        <p>
          <strong>Action 2:</strong>
          လက်ရှိ Situation ကို
          အချက်အလက်နဲ့ ရေးပါ။
        </p>

        <p>
          <strong>Action 3:</strong>
          Problem ရဲ့ Root Cause
          အနည်းဆုံး ၃ ခု စဉ်းစားပါ။
        </p>

        <p>
          <strong>Action 4:</strong>
          အရေးကြီးဆုံး Root Cause ကို
          ရွေးပြီး ဖြေရှင်းမယ့် Action တစ်ခု
          သတ်မှတ်ပါ။
        </p>

        <p>
          <strong>Action 5:</strong>
          Team Member သို့မဟုတ် ကိုယ်တိုင်
          လုပ်ဆောင်ရမယ့် Deadline ကို
          သတ်မှတ်ပါ။
        </p>

        <p>
          <strong>Action 6:</strong>
          နောက်တစ်ကြိမ် Review လုပ်မယ့်
          အချိန်ကို သတ်မှတ်ပါ။
        </p>

        <p>
          <strong>Action 7:</strong>
          Result ကို ပြန်တိုင်းပြီး
          လိုအပ်ရင် Action Plan ကို
          ပြန်ပြင်ပါ။
        </p>

      </section>

    `;

  }


  /* ============================================================
     QUIZ
     ============================================================ */

  function buildQuiz(module, title) {

    return `

      <section class="long-lesson-section">

        <h2>❓ Knowledge Check</h2>

        <div class="long-quiz">

          <h3>မေးခွန်း (၁)</h3>

          <p>
            Business Result မကောင်းတဲ့အခါ
            Manager တစ်ယောက်အနေနဲ့
            ပထမဆုံး ဘာလုပ်သင့်သလဲ?
          </p>

          <p>
            <strong>အဖြေ:</strong>
            လက်ရှိ Situation နဲ့ Data ကို
            အရင်နားလည်အောင်လုပ်သင့်ပါတယ်။
          </p>

        </div>


        <div class="long-quiz">

          <h3>မေးခွန်း (၂)</h3>

          <p>
            Target နဲ့ Actual ကြားမှာ
            ကွာခြားချက်ရှိရင် ဘာကိုရှာသင့်သလဲ?
          </p>

          <p>
            <strong>အဖြေ:</strong>
            Gap ရဲ့ Root Cause ကို ရှာသင့်ပါတယ်။
          </p>

        </div>


        <div class="long-quiz">

          <h3>မေးခွန်း (၃)</h3>

          <p>
            Action Plan ကောင်းတစ်ခုမှာ
            ဘာတွေရှင်းလင်းရမလဲ?
          </p>

          <p>
            <strong>အဖြေ:</strong>
            ဘယ်သူ၊ ဘာလုပ်မလဲ၊
            ဘယ်အချိန်မှာလုပ်မလဲ၊
            ဘယ် Result ရချင်လဲဆိုတာ
            ရှင်းလင်းရပါမယ်။
          </p>

        </div>


        <div class="long-quiz">

          <h3>မေးခွန်း (၄)</h3>

          <p>
            Action Plan ချပြီးရင်
            ဘာကြောင့် Follow-up လုပ်ဖို့လိုသလဲ?
          </p>

          <p>
            <strong>အဖြေ:</strong>
            Action တကယ်လုပ်ဖြစ်မဖြစ်နဲ့
            Result ပြောင်းလဲလာမလာကို
            သိနိုင်ဖို့ ဖြစ်ပါတယ်။
          </p>

        </div>


        <div class="long-quiz">

          <h3>မေးခွန်း (၅)</h3>

          <p>
            Professional Manager တစ်ယောက်ရဲ့
            အရေးကြီးဆုံး စဉ်းစားပုံက ဘာလဲ?
          </p>

          <p>
            <strong>အဖြေ:</strong>
            Data / Situation →
            Analysis →
            Root Cause →
            Decision →
            Action →
            Result →
            Improvement
            ဆိုတဲ့ စနစ်တကျ စဉ်းစားပုံ ဖြစ်ပါတယ်။
          </p>

        </div>

      </section>

    `;

  }


  /* ============================================================
     REFLECTION
     ============================================================ */

  function buildReflection(module, title) {

    return `

      <section class="long-lesson-section">

        <h2>🤔 Manager Reflection</h2>

        <p>
          ဒီသင်ခန်းစာကို လေ့လာပြီးတဲ့အခါ
          ကိုယ့်လုပ်ငန်းအပေါ် ပြန်စဉ်းစားကြည့်ပါ။
        </p>

        <p>
          <strong>①</strong>
          ${escapeHTML(title)}
          နဲ့ပတ်သက်ပြီး
          ကိုယ့်လုပ်ငန်းမှာ အဓိက Problem က ဘာလဲ?
        </p>

        <p>
          <strong>②</strong>
          လက်ရှိ Result က
          ကိုယ်လိုချင်တဲ့ Result နဲ့
          ဘယ်လောက်ကွာနေသလဲ?
        </p>

        <p>
          <strong>③</strong>
          Problem ရဲ့ Root Cause က
          ဘာဖြစ်နိုင်သလဲ?
        </p>

        <p>
          <strong>④</strong>
          ကိုယ့် Team ကို
          ဘယ်လို Coaching လုပ်ပေးနိုင်မလဲ?
        </p>

        <p>
          <strong>⑤</strong>
          ဒီနေ့ကစပြီး
          ဘာ Action တစ်ခုကို
          လက်တွေ့စလုပ်မလဲ?
        </p>

      </section>

    `;

  }


  /* ============================================================
     SUMMARY
     ============================================================ */

  function buildSummary(module, title) {

    const info =
      getModuleInfo(module);

    return `

      <section class="long-lesson-section long-summary">

        <h2>📌 သင်ခန်းစာအနှစ်ချုပ်</h2>

        <p>
          <strong>${escapeHTML(title)}</strong>
          ကို Professional Business Management
          ရှုထောင့်ကနေ နားလည်တဲ့အခါ
          သီအိုရီသိရုံထက် လက်တွေ့အသုံးချနိုင်ဖို့
          ပိုအရေးကြီးပါတယ်။
        </p>

        <p>
          ${escapeHTML(info.focus)}
          ကို စနစ်တကျနားလည်ပြီး
          Business Result နဲ့ ချိတ်ဆက်စဉ်းစားနိုင်ရပါမယ်။
        </p>

        <p>
          Professional Manager တစ်ယောက်ဟာ
          Problem တစ်ခုဖြစ်လာတိုင်း
          ချက်ချင်းဆုံးဖြတ်တာမဟုတ်ဘဲ
          Situation ကိုနားလည်၊
          Problem ကိုသတ်မှတ်၊
          Root Cause ရှာ၊
          Solution ရွေး၊
          Action ချ၊
          Result ကို Follow-up လုပ်ရပါမယ်။
        </p>

        <div class="golden-rule-text">

          <strong>
            PROFESSIONAL MANAGER MINDSET
          </strong>

          <p>
            “ပြဿနာကို မကြောက်ပါနဲ့။
            ပြဿနာကို နားလည်ပါ။
            Root Cause ကိုရှာပါ။
            မှန်ကန်တဲ့ Action ကိုလုပ်ပါ။
            Result ကိုတိုင်းပါ။
            ပြီးရင် ပိုကောင်းအောင်ပြန်လုပ်ပါ။”
          </p>

        </div>

      </section>

    `;

  }


  /* ============================================================
     FULL LESSON
     ============================================================ */

  function buildLongLesson(module, title) {

    return `

      <div class="aung-long-lesson">

        <div class="long-lesson-header">

          <span>
            PROFESSIONAL BUSINESS LESSON
          </span>

          <h1>
            ${escapeHTML(title)}
          </h1>

          <p>
            ${escapeHTML(module)}
          </p>

          <small>
            ⏱️ Detailed Learning • Practical Business Application
          </small>

        </div>


        ${buildIntroduction(
          module,
          title
        )}


        ${buildDetailedExplanation(
          module,
          title
        )}


        ${buildPrinciples(
          module,
          title
        )}


        ${buildBusinessExample(
          module,
          title
        )}


        ${buildManagerThinking(
          module,
          title
        )}


        ${buildMistakes(
          module,
          title
        )}


        ${buildPracticalApplication(
          module,
          title
        )}


        ${buildActionPlan(
          module,
          title
        )}


        ${buildQuiz(
          module,
          title
        )}


        ${buildReflection(
          module,
          title
        )}


        ${buildSummary(
          module,
          title
        )}

      </div>

    `;

  }


  /* ============================================================
     FIND MODAL
     ============================================================ */

  function findModal() {

    const selectors = [

      "#lessonModal",
      "#lesson-modal",
      "#lessonDetailModal",
      "#lessonDetail",
      ".lesson-modal",
      ".lessonModal"

    ];

    for (
      let i = 0;
      i < selectors.length;
      i++
    ) {

      const element =
        document.querySelector(
          selectors[i]
        );

      if (element) {
        return element;
      }

    }

    return null;

  }


  /* ============================================================
     FIND LESSON INFORMATION
     ============================================================ */

  function getCurrentLesson() {

    const modal =
      findModal();

    if (!modal) {
      return null;
    }

    let title = "";

    const titleSelectors = [

      ".lesson-title",
      ".modal-title",
      ".lesson-name",
      "[data-lesson-title]",
      "h1",
      "h2",
      "h3",
      "h4"

    ];

    for (
      let i = 0;
      i < titleSelectors.length;
      i++
    ) {

      const element =
        modal.querySelector(
          titleSelectors[i]
        );

      if (
        element &&
        element.textContent.trim()
      ) {

        title =
          element.textContent.trim();

        break;

      }

    }


    if (!title) {
      return null;
    }


    let module = "";

    const moduleSelectors = [

      ".lesson-module",
      ".module-name",
      ".lesson-category",
      ".category",
      "[data-module]"

    ];


    for (
      let i = 0;
      i < moduleSelectors.length;
      i++
    ) {

      const element =
        modal.querySelector(
          moduleSelectors[i]
        );

      if (
        element &&
        element.textContent.trim()
      ) {

        module =
          element.textContent.trim();

        break;

      }

    }


    /*
      Try to identify module from modal text.
    */

    if (!module) {

      const modalText =
        modal.textContent || "";

      Object.keys(
        MODULE_INFO
      ).some(function (moduleName) {

        if (
          modalText
            .toLowerCase()
            .includes(
              moduleName.toLowerCase()
            )
        ) {

          module =
            moduleName;

          return true;

        }

        return false;

      });

    }


    if (!module) {

      module =
        "Business Basics";

    }


    return {
      title: title,
      module: module
    };

  }


  /* ============================================================
     CSS
     ============================================================ */

  function addCSS() {

    if (
      document.getElementById(
        "aung-long-lesson-css"
      )
    ) {
      return;
    }


    const style =
      document.createElement(
        "style"
      );

    style.id =
      "aung-long-lesson-css";


    style.textContent = `

      /*
        IMPORTANT:
        Everything wraps inside mobile width.
        No table.
        No graph.
        No horizontal overflow.
      */


      .aung-long-lesson {

        width: 100%;
        max-width: 900px;

        margin: 0 auto;

        padding: 4px 0 30px;

        box-sizing: border-box;

        overflow-wrap: anywhere;
        word-break: normal;

        color: #1e293b;

        font-family:
          Arial,
          "Noto Sans Myanmar",
          sans-serif;

        line-height: 1.9;

      }


      .aung-long-lesson * {

        box-sizing: border-box;

        max-width: 100%;

      }


      .long-lesson-header {

        width: 100%;

        padding: 24px 20px;

        margin-bottom: 18px;

        border-radius: 16px;

        background:
          linear-gradient(
            135deg,
            #0f172a,
            #1e293b
          );

        color: white;

        overflow-wrap: anywhere;

      }


      .long-lesson-header span {

        display: inline-block;

        font-size: 10px;

        font-weight: 800;

        letter-spacing: 1px;

        opacity: .8;

        margin-bottom: 8px;

      }


      .long-lesson-header h1 {

        margin: 0 0 7px;

        font-size: 29px;

        line-height: 1.4;

        overflow-wrap: anywhere;

      }


      .long-lesson-header p {

        margin: 0 0 8px;

        opacity: .85;

        overflow-wrap: anywhere;

      }


      .long-lesson-header small {

        display: block;

        opacity: .8;

        font-size: 12px;

      }


      .long-lesson-section {

        width: 100%;

        margin-bottom: 18px;

        padding: 23px 20px;

        border-radius: 15px;

        background: #ffffff;

        border: 1px solid #e2e8f0;

        box-shadow:
          0 3px 12px
          rgba(15,23,42,.04);

        overflow: hidden;

      }


      .long-lesson-section h2 {

        margin: 0 0 15px;

        color: #0f172a;

        font-size: 21px;

        line-height: 1.5;

        overflow-wrap: anywhere;

      }


      .long-lesson-section h3 {

        margin: 18px 0 7px;

        color: #334155;

        font-size: 17px;

        line-height: 1.6;

        overflow-wrap: anywhere;

      }


      .long-lesson-section p {

        margin: 0 0 15px;

        font-size: 16px;

        overflow-wrap: anywhere;

        word-break: normal;

      }


      .long-lesson-section strong {

        overflow-wrap: anywhere;

      }


      .long-quiz {

        width: 100%;

        padding: 16px;

        margin: 0 0 12px;

        border-radius: 12px;

        background: #f8fafc;

        border: 1px solid #e2e8f0;

        overflow-wrap: anywhere;

      }


      .long-quiz h3 {

        margin: 0 0 8px;

        font-size: 16px;

      }


      .long-quiz p {

        margin-bottom: 9px;

        font-size: 15px;

      }


      .long-quiz p:last-child {

        margin-bottom: 0;

      }


      .golden-rule-text {

        width: 100%;

        margin-top: 20px;

        padding: 20px;

        border-radius: 13px;

        background: #f8fafc;

        border-left: 4px solid #334155;

        text-align: center;

        overflow-wrap: anywhere;

      }


      .golden-rule-text strong {

        display: block;

        margin-bottom: 10px;

        letter-spacing: .8px;

      }


      .golden-rule-text p {

        margin: 0;

        font-weight: 700;

      }


      /*
        Remove accidental wide elements
        inherited from old lesson content.
      */

      .aung-long-lesson table {

        display: block;

        width: 100%;

        max-width: 100%;

        overflow: hidden;

      }


      .aung-long-lesson img,

      .aung-long-lesson iframe,

      .aung-long-lesson video,

      .aung-long-lesson canvas {

        max-width: 100% !important;

        height: auto !important;

      }


      @media (max-width: 700px) {

        .aung-long-lesson {

          padding: 0 0 20px;

          line-height: 1.85;

        }


        .long-lesson-header {

          padding: 20px 16px;

          border-radius: 13px;

        }


        .long-lesson-header h1 {

          font-size: 23px;

        }


        .long-lesson-header p {

          font-size: 14px;

        }


        .long-lesson-section {

          padding: 19px 16px;

          margin-bottom: 14px;

          border-radius: 13px;

        }


        .long-lesson-section h2 {

          font-size: 19px;

        }


        .long-lesson-section h3 {

          font-size: 16px;

        }


        .long-lesson-section p {

          font-size: 15px;

          line-height: 1.9;

        }


        .long-quiz {

          padding: 14px;

        }


        .golden-rule-text {

          padding: 16px;

        }

      }


      @media (max-width: 430px) {

        .aung-long-lesson {

          width: 100%;

        }


        .long-lesson-header {

          padding: 18px 14px;

        }


        .long-lesson-header h1 {

          font-size: 21px;

        }


        .long-lesson-section {

          padding: 17px 14px;

        }


        .long-lesson-section h2 {

          font-size: 18px;

        }


        .long-lesson-section p {

          font-size: 14.5px;

        }

      }

    `;


    document.head.appendChild(
      style
    );

  }


  /* ============================================================
     APPLY
     ============================================================ */

  function applyLongLesson() {

    const modal =
      findModal();

    if (!modal) {
      return;
    }


    const lesson =
      getCurrentLesson();

    if (!lesson) {
      return;
    }


    /*
      NEVER CHANGE BUSINESS ENGLISH
    */

    if (
      /english/i.test(
        lesson.title
      ) ||
      /english/i.test(
        lesson.module
      )
    ) {

      return;

    }


    /*
      Don't repeatedly rebuild same lesson.
    */

    if (
      modal.dataset
        .longLessonTitle ===
      lesson.title
    ) {

      return;

    }


    let body =
      modal.querySelector(
        ".modal-body"
      );


    if (!body) {

      body =
        modal.querySelector(
          ".lesson-modal-body"
        );

    }


    if (!body) {

      body =
        modal.querySelector(
          ".modal-content-body"
        );

    }


    if (!body) {

      body =
        modal;

    }


    /*
      Preserve important external controls
      such as close buttons.
      Only replace lesson body when possible.
    */

    body.innerHTML =
      buildLongLesson(
        lesson.module,
        lesson.title
      );


    modal.dataset
      .longLessonTitle =
      lesson.title;


    /*
      Fix modal width.
    */

    const modalContent =
      modal.querySelector(
        ".modal-content, .modal-dialog"
      );


    if (modalContent) {

      modalContent.style.width =
        "min(900px, 96vw)";

      modalContent.style.maxWidth =
        "900px";

      modalContent.style.boxSizing =
        "border-box";

      modalContent.style.overflowX =
        "hidden";

    }


    modal.style.overflowX =
      "hidden";


    console.log(
      "Long Detailed Lesson Applied:",
      lesson.module,
      lesson.title
    );

  }


  /* ============================================================
     CLICK WATCHER
     ============================================================ */

  function setupClickWatcher() {

    document.addEventListener(
      "click",
      function (event) {

        const card =
          event.target.closest(
            ".lesson-card," +
            ".lesson-item," +
            ".lesson," +
            "[data-lesson-id]," +
            "[data-lesson-index]"
          );


        if (!card) {
          return;
        }


        /*
          Existing app opens lesson first.
          Then our upgrade replaces content.
        */

        setTimeout(
          applyLongLesson,
          200
        );

        setTimeout(
          applyLongLesson,
          600
        );

        setTimeout(
          applyLongLesson,
          1200
        );

      },
      true
    );

  }


  /* ============================================================
     OBSERVER
     ============================================================ */

  function setupObserver() {

    const observer =
      new MutationObserver(
        function () {

          const modal =
            findModal();

          if (!modal) {
            return;
          }


          if (
            modal.dataset
              .longLessonTitle
          ) {
            return;
          }


          setTimeout(
            applyLongLesson,
            200
          );

        }
      );


    observer.observe(
      document.body,
      {
        childList: true,
        subtree: true
      }
    );

  }


  /* ============================================================
     RESET WHEN MODAL CLOSES
     ============================================================ */

  function setupReset() {

    document.addEventListener(
      "click",
      function (event) {

        const closeButton =
          event.target.closest(
            ".close," +
            ".modal-close," +
            ".close-modal," +
            "[data-close]"
          );


        if (!closeButton) {
          return;
        }


        const modal =
          findModal();


        if (!modal) {
          return;
        }


        setTimeout(
          function () {

            delete
              modal.dataset
                .longLessonTitle;

          },
          400
        );

      }
    );

  }


  /* ============================================================
     INITIALIZE
     ============================================================ */

  function init() {

    addCSS();

    setupClickWatcher();

    setupObserver();

    setupReset();


    console.log(
      "=========================================="
    );

    console.log(
      "AUNG BUSINESS ACADEMY"
    );

    console.log(
      "LONG DETAILED LESSON UPGRADE: ACTIVE"
    );

    console.log(
      "TABLE: REMOVED"
    );

    console.log(
      "GRAPH: REMOVED"
    );

    console.log(
      "MOBILE OVERFLOW: FIXED"
    );

    console.log(
      "BUSINESS ENGLISH: UNTOUCHED"
    );

    console.log(
      "=========================================="
    );

  }


  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      init
    );

  } else {

    init();

  }


})();
