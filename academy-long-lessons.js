/* ============================================================
   AUNG BUSINESS ACADEMY
   ACADEMY LONG LESSONS
   ============================================================

   PURPOSE
   ------------------------------------------------------------
   Upgrade existing 230 Business Lessons.

   IMPORTANT
   ------------------------------------------------------------
   • Existing lesson titles are NOT changed
   • Existing lesson list is NOT changed
   • Business English is NOT changed
   • No graph
   • No table
   • Mobile friendly
   • Long detailed Burmese lessons
   ============================================================ */

(function () {

  "use strict";

  console.log("Aung Business Academy: Long Lessons Loading...");


  /* ============================================================
     BUSINESS MODULE KNOWLEDGE
     ============================================================ */

  const MODULE_KNOWLEDGE = {

    "Business Basics": {
      focus: "Business အခြေခံသဘောတရားများ၊ Customer၊ Revenue၊ Cost၊ Profit၊ Business Model နှင့် Value Creation",
      example: "Retail နှင့် Distribution Business",
      manager: "Business တစ်ခုလုံးကို အပေါ်စီးကနေ နားလည်ပြီး Revenue တိုးအောင်၊ Cost ထိန်းအောင်နှင့် Profit တိုးအောင် စီမံခန့်ခွဲနိုင်ခြင်း"
    },

    "Strategic Thinking": {
      focus: "Business Direction၊ Market Opportunity၊ Competition၊ Competitive Advantage နှင့် Long-term Strategy",
      example: "Market Expansion Business",
      manager: "နေ့စဉ်အလုပ်တွေအပြင် ရေရှည် Business Direction ကို စဉ်းစားပြီး အခွင့်အလမ်းနှင့် Risk ကို ကြိုတင်မြင်နိုင်ခြင်း"
    },

    "Brand Basics": {
      focus: "Brand Identity၊ Brand Image၊ Customer Perception၊ Trust၊ Positioning နှင့် Brand Value",
      example: "Consumer Brand နှင့် FMCG Brand",
      manager: "Customer ရဲ့စိတ်ထဲမှာ Company/Product ရဲ့ တန်ဖိုးရှိတဲ့ Position တစ်ခု တည်ဆောက်နိုင်ခြင်း"
    },

    "Marketing Basics": {
      focus: "Customer Need၊ Market Research၊ Segmentation၊ Positioning၊ Promotion နှင့် Customer Acquisition",
      example: "FMCG Marketing Business",
      manager: "Customer ဘာလိုချင်သလဲကို နားလည်ပြီး သင့်တော်တဲ့ Product၊ Price၊ Promotion နှင့် Channel ကို ချိတ်ဆက်နိုင်ခြင်း"
    },

    "Sales Basics": {
      focus: "Prospecting၊ Customer Visit၊ Need Discovery၊ Presentation၊ Objection Handling နှင့် Closing",
      example: "FMCG Sales Team",
      manager: "Sales Process တစ်ခုလုံးကို နားလည်ပြီး Customer ကို Value ပေးကာ Sustainable Sales Result ရအောင် လုပ်နိုင်ခြင်း"
    },

    "Sales Management": {
      focus: "Sales Target၊ Territory၊ Team Management၊ Distribution၊ Execution၊ KPI နှင့် Performance Management",
      example: "Area Sales Management",
      manager: "Target ကို Team၊ Territory၊ Customer နှင့် Daily Execution တွေအဖြစ် ခွဲပြီး Result ရအောင် စီမံနိုင်ခြင်း"
    },

    "Negotiation": {
      focus: "Customer Need၊ Value၊ Objection၊ Trade-off၊ Win-Win Agreement နှင့် Commercial Negotiation",
      example: "Distributor နှင့် Key Account Negotiation",
      manager: "Price တစ်ခုတည်းကို မကြည့်ဘဲ Value၊ Volume၊ Terms နှင့် Long-term Relationship ကို ချိန်ညှိနိုင်ခြင်း"
    },

    "Customer Service": {
      focus: "Customer Experience၊ Complaint Handling၊ Service Recovery၊ Retention နှင့် Customer Loyalty",
      example: "Customer Service Management",
      manager: "Customer Problem ကို မြန်မြန်၊ မှန်မှန် ဖြေရှင်းပြီး Customer Relationship ကို ပိုမိုခိုင်မာအောင် တည်ဆောက်နိုင်ခြင်း"
    },

    "People Management": {
      focus: "Team Performance၊ Coaching၊ Motivation၊ Delegation၊ Accountability နှင့် Employee Development",
      example: "Sales Team Management",
      manager: "Team Member တစ်ယောက်ချင်းစီရဲ့ အားသာချက်၊ အားနည်းချက်ကို နားလည်ပြီး Result ရအောင် လူကို စီမံနိုင်ခြင်း"
    },

    "Profit & Loss": {
      focus: "Revenue၊ Cost of Goods Sold၊ Gross Profit၊ Operating Cost၊ Margin နှင့် Net Profit",
      example: "Distribution Business P&L",
      manager: "Sales တက်တာတစ်ခုတည်းမဟုတ်ဘဲ အမြတ်တကယ်ကျန်မကျန်ကို နားလည်ပြီး Profitability ကို စီမံနိုင်ခြင်း"
    },

    "Goal Setting": {
      focus: "Goal၊ KPI၊ Target၊ Measurement၊ Action Plan၊ Accountability နှင့် Continuous Improvement",
      example: "Monthly Sales Goal",
      manager: "Business Goal ကို တိုင်းတာလို့ရတဲ့ KPI နဲ့ Action Plan တွေအဖြစ် ပြောင်းလဲနိုင်ခြင်း"
    },

    "Customer Relationship Management": {
      focus: "Customer Retention၊ Customer Value၊ Follow-up၊ Customer Development နှင့် Key Account Management",
      example: "Key Customer Management",
      manager: "Customer ကို Order တစ်ကြိမ်ရတဲ့သူအဖြစ် မမြင်ဘဲ ရေရှည် Business Partner အဖြစ် တည်ဆောက်နိုင်ခြင်း"
    },

    "Distribution Management": {
      focus: "Distributor၊ Outlet Coverage၊ Availability၊ Stock၊ Route Planning၊ Delivery နှင့် Market Execution",
      example: "FMCG Distribution",
      manager: "Product ကို Market ထဲမှာ မှန်ကန်တဲ့နေရာ၊ မှန်ကန်တဲ့အချိန်မှာ ရရှိနိုင်အောင် Distribution System ကို စီမံနိုင်ခြင်း"
    },

    "Retail & Trade Marketing": {
      focus: "Outlet Execution၊ Visibility၊ Availability၊ Merchandising၊ Promotion နှင့် Trade Relationship",
      example: "Retail Market Execution",
      manager: "Customer ဝယ်ယူနိုင်တဲ့အချိန်မှာ Product ရှိနေဖို့၊ မြင်သာဖို့နဲ့ ဝယ်ချင်စိတ်ဖြစ်ဖို့ Market Execution ကို စီမံနိုင်ခြင်း"
    },

    "Business Analytics": {
      focus: "Data Collection၊ KPI၊ Trend၊ Variance၊ Root Cause၊ Insight နှင့် Data-driven Decision Making",
      example: "Sales Performance Analysis",
      manager: "Data ကို Report အဖြစ်ပဲမထားဘဲ Insight ထုတ်ပြီး Business Decision အဖြစ် ပြောင်းလဲနိုင်ခြင်း"
    },

    "Financial Management": {
      focus: "Budget၊ Cash Flow၊ Cost Control၊ Financial Planning၊ Working Capital နှင့် Financial Decision",
      example: "Business Financial Management",
      manager: "Business ရဲ့ ငွေဝင်ငွေထွက်၊ Cash Flow၊ Cost နှင့် Financial Risk ကို ထိန်းချုပ်နိုင်ခြင်း"
    },

    "Operations Management": {
      focus: "Process၊ Productivity၊ Quality၊ Cost၊ Time၊ Resource နှင့် Operational Efficiency",
      example: "Business Operations",
      manager: "လုပ်ငန်းစဉ်တွေကို ပိုမြန်၊ ပိုမှန်၊ ပိုသက်သာပြီး Quality မကျအောင် စီမံနိုင်ခြင်း"
    },

    "Leadership": {
      focus: "Vision၊ Direction၊ Coaching၊ Empowerment၊ Accountability၊ Motivation နှင့် Team Performance",
      example: "Sales Leadership",
      manager: "လူတွေကို အမိန့်ပေးတာထက် Direction ပေးပြီး Ownership ရှိအောင် ဦးဆောင်နိုင်ခြင်း"
    },

    "Communication": {
      focus: "Clear Communication၊ Listening၊ Feedback၊ Meeting၊ Presentation နှင့် Managerial Communication",
      example: "Manager Communication",
      manager: "လိုချင်တဲ့ Message ကို ရှင်းလင်းစွာ ပေးနိုင်ပြီး Team ရဲ့ Response ကိုလည်း မှန်ကန်စွာ နားထောင်နိုင်ခြင်း"
    },

    "Productivity": {
      focus: "Priority၊ Planning၊ Time Management၊ Focus၊ Delegation နှင့် Result-oriented Work",
      example: "Manager Productivity",
      manager: "အလုပ်များတာကို Productivity လို့ မယူဆဘဲ အရေးကြီးတဲ့ Result တွေ ရအောင် အချိန်နဲ့ Resource ကို စီမံနိုင်ခြင်း"
    },

    "Problem Solving": {
      focus: "Problem Identification၊ Root Cause၊ Analysis၊ Alternatives၊ Solution၊ Execution နှင့် Follow-up",
      example: "Sales Problem Solving",
      manager: "ပြဿနာကို လူအပေါ်ပုံချတာမဟုတ်ဘဲ Systematically ခွဲခြမ်းပြီး Root Cause ကို ဖြေရှင်းနိုင်ခြင်း"
    },

    "Business Planning": {
      focus: "Business Objective၊ Strategy၊ Market၊ Resource၊ Budget၊ Action Plan နှင့် Measurement",
      example: "Annual Business Planning",
      manager: "Business ရဲ့ ရည်မှန်းချက်ကို Strategy၊ Resource နှင့် Action Plan အဖြစ် ပြောင်းလဲနိုင်ခြင်း"
    },

    "Decision Making & Problem Solving": {
      focus: "Data၊ Situation၊ Options၊ Risk၊ Decision၊ Execution နှင့် Result Evaluation",
      example: "Management Decision Making",
      manager: "အချက်အလက်ကို စုစည်း၊ အခြေအနေကို သုံးသပ်၊ ရွေးချယ်စရာတွေကို နှိုင်းယှဉ်ပြီး မှန်ကန်တဲ့ Decision ချနိုင်ခြင်း"
    }

  };


  /* ============================================================
     GET MODULE
     ============================================================ */

  function getKnowledge(module) {

    if (MODULE_KNOWLEDGE[module]) {

      return MODULE_KNOWLEDGE[module];

    }

    return {

      focus:
        "Business Management၊ Customer၊ Team၊ Performance နှင့် Result",

      example:
        "Business Management",

      manager:
        "Business Result ကောင်းအောင် People၊ Process၊ Customer နှင့် Performance ကို စီမံခန့်ခွဲနိုင်ခြင်း"

    };

  }


  /* ============================================================
     ESCAPE HTML
     ============================================================ */

  function esc(text) {

    return String(text || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  }


  /* ============================================================
     SECTION 1
     ============================================================ */

  function introduction(module, title) {

    const k = getKnowledge(module);

    return `

      <section class="abl-section">

        <h2>🎯 ဒီသင်ခန်းစာကို ဘာကြောင့်လေ့လာသင့်သလဲ</h2>

        <p>
          <strong>${esc(title)}</strong>
          ဆိုတဲ့အကြောင်းအရာဟာ Business Management မှာ
          သီးခြားအကြောင်းအရာတစ်ခုတည်းမဟုတ်ပါဘူး။
          Business တစ်ခုရဲ့ Customer၊ Sales၊ People၊
          Finance၊ Operation နဲ့ Result တွေအားလုံးနဲ့
          ဆက်စပ်နေပါတယ်။
        </p>

        <p>
          Manager တစ်ယောက်အနေနဲ့ ဒီအကြောင်းအရာကို
          သီအိုရီအနေနဲ့ သိထားရုံနဲ့ မလုံလောက်ပါဘူး။
          လက်တွေ့လုပ်ငန်းခွင်မှာ ဘယ်လိုအသုံးချမလဲ၊
          ဘယ်လိုစဉ်းစားမလဲ၊ ဘယ်လိုဆုံးဖြတ်မလဲဆိုတာ
          နားလည်ဖို့ အရေးကြီးပါတယ်။
        </p>

        <p>
          ${esc(k.focus)}
          ကို မှန်မှန်ကန်ကန် နားလည်ထားနိုင်ရင်
          Business Problem တွေကို ပိုမြန်မြန်
          သုံးသပ်နိုင်ပြီး Result ကို ပိုကောင်းအောင်
          ပြောင်းလဲနိုင်ပါမယ်။
        </p>

        <p>
          ဒီ Lesson ကိုဖတ်တဲ့အခါ စာကိုဖတ်ပြီး
          သိထားရုံမဟုတ်ဘဲ ကိုယ့်ရဲ့ လက်ရှိအလုပ်၊
          ကိုယ့် Team၊ ကိုယ့် Customer နဲ့
          ကိုယ့် Business မှာ ဘယ်လိုအသုံးချနိုင်မလဲ
          တစ်ခါတည်း စဉ်းစားသွားပါ။
        </p>

      </section>

    `;

  }


  /* ============================================================
     SECTION 2
     ============================================================ */

  function detailedExplanation(module, title) {

    const k = getKnowledge(module);

    return `

      <section class="abl-section">

        <h2>📖 အသေးစိတ်ရှင်းလင်းချက်</h2>

        <p>
          Business တစ်ခုမှာ Result တစ်ခုထွက်လာတိုင်း
          အဲဒီ Result ရဲ့နောက်မှာ အကြောင်းရင်းတွေ
          အများကြီးရှိပါတယ်။ Sales Result တက်လာတာ၊
          Sales Result ကျလာတာ၊ Customer တိုးလာတာ၊
          Customer လျော့သွားတာ၊ Team Performance
          ကောင်းလာတာ၊ Performance ကျလာတာတွေဟာ
          အကြောင်းရင်းတစ်ခုတည်းကြောင့် ဖြစ်တာ
          မဟုတ်တတ်ပါဘူး။
        </p>

        <p>
          ဒါကြောင့် Professional Manager တစ်ယောက်ဟာ
          Result ကိုမြင်တာနဲ့ ချက်ချင်းဆုံးဖြတ်မလုပ်သင့်ပါဘူး။
          အရင်ဆုံး “ဘာဖြစ်နေတာလဲ” ဆိုတာ နားလည်ရပါမယ်။
          ပြီးရင် “ဘာကြောင့်ဖြစ်တာလဲ” ဆိုတာ
          ဆက်ပြီးရှာရပါမယ်။
        </p>

        <p>
          ${esc(k.focus)}
          ကို စီမံတဲ့အခါ Customer Perspective,
          Business Perspective နဲ့ Team Perspective
          သုံးခုလုံးကို ထည့်သွင်းစဉ်းစားသင့်ပါတယ်။
        </p>

        <p>
          Customer Perspective ကနေကြည့်ရင်
          Customer ရဲ့ Need ဘာလဲ၊ Customer ဘာကြောင့်
          ဝယ်တယ်၊ ဘာကြောင့် မဝယ်တော့ဘူး၊
          ဘာကြောင့် Competitor ဆီသွားတယ်ဆိုတာ
          နားလည်ဖို့လိုပါတယ်။
        </p>

        <p>
          Business Perspective ကနေကြည့်ရင်
          Revenue၊ Cost၊ Margin၊ Market Share၊
          Distribution၊ Productivity နဲ့
          Long-term Growth ကို စဉ်းစားရပါမယ်။
        </p>

        <p>
          Team Perspective ကနေကြည့်ရင်
          လူတွေမှာ Skill ရှိလား၊ Direction ရှင်းလား၊
          Target နားလည်လား၊ Resource လုံလောက်လား၊
          Coaching လိုအပ်လား၊ Accountability ရှိလား
          ဆိုတာတွေကို ကြည့်ရပါမယ်။
        </p>

        <p>
          ဒီအချက်တွေကို တစ်ခုချင်းစီ ခွဲခြမ်းပြီး
          နောက်ဆုံးမှာ Business Result နဲ့
          ပြန်ချိတ်ဆက်စဉ်းစားနိုင်ရင်
          Management Skill က ပိုမိုမြင့်မားလာပါမယ်။
        </p>

        <p>
          အရေးကြီးဆုံးကတော့ Problem ဖြစ်တဲ့အခါ
          “ဘယ်သူ့အမှားလဲ” လို့ မေးတာထက်
          “ဘယ် Process မှာ Gap ဖြစ်နေတာလဲ”
          လို့ မေးတတ်ဖို့ ဖြစ်ပါတယ်။
        </p>

      </section>

    `;

  }


  /* ============================================================
     SECTION 3
     ============================================================ */

  function keyConcepts(module, title) {

    return `

      <section class="abl-section">

        <h2>🧠 အရေးကြီးတဲ့ Key Concepts</h2>

        <h3>၁။ Objective ကို အရင်သတ်မှတ်ပါ</h3>

        <p>
          ဘာကိုရချင်တာလဲ မသိဘဲ အလုပ်လုပ်ရင်
          Team တစ်ခုလုံး အလုပ်များနေပေမယ့်
          Result က မထွက်နိုင်ပါဘူး။
          ဒါကြောင့် အရင်ဆုံး Objective ကို
          ရှင်းလင်းစွာ သတ်မှတ်ရပါမယ်။
        </p>

        <h3>၂။ Current Situation ကို သိပါ</h3>

        <p>
          လက်ရှိ Business အခြေအနေကို မသိဘဲ
          Plan ချလို့မရပါဘူး။
          Customer ဘယ်လိုပြောင်းနေသလဲ၊
          Market ဘယ်လိုဖြစ်နေသလဲ၊
          Team Performance ဘယ်လိုရှိသလဲဆိုတာ
          နားလည်ရပါမယ်။
        </p>

        <h3>၃။ Gap ကို ရှာပါ</h3>

        <p>
          Target နဲ့ Actual ကြားမှာ
          ဘယ်လောက်ကွာနေသလဲဆိုတာ သိရပါမယ်။
          Gap ကို မသိရင် Improvement ဘယ်လောက်
          လိုအပ်တယ်ဆိုတာလည်း မသိနိုင်ပါဘူး။
        </p>

        <h3>၄။ Root Cause ကို ရှာပါ</h3>

        <p>
          မြင်နေရတဲ့ Problem က အမြဲတမ်း
          အဓိကအကြောင်းရင်း မဟုတ်ပါဘူး။
          Problem ရဲ့နောက်မှာ ဘာတွေရှိနေလဲ
          တစ်ဆင့်ချင်းစီ စဉ်းစားရပါမယ်။
        </p>

        <h3>၅။ Action ကို Result နဲ့ချိတ်ပါ</h3>

        <p>
          Action လုပ်တာကို အောင်မြင်မှုလို့
          မယူဆသင့်ပါဘူး။
          Action လုပ်ပြီး Result တကယ်တိုးတက်လာမှ
          အဲဒီ Action ရဲ့ ထိရောက်မှုကို
          အကဲဖြတ်နိုင်မှာ ဖြစ်ပါတယ်။
        </p>

      </section>

    `;

  }


  /* ============================================================
     SECTION 4
     ============================================================ */

  function realBusinessExample(module, title) {

    const k = getKnowledge(module);

    return `

      <section class="abl-section">

        <h2>💼 လက်တွေ့ Business Example</h2>

        <p>
          အခု ${esc(k.example)} ကို
          လက်တွေ့ဥပမာအနေနဲ့ စဉ်းစားကြည့်ပါမယ်။
        </p>

        <p>
          Company တစ်ခုမှာ ဒီလ Business Target ကို
          ပြည့်မီအောင်လုပ်ရမယ်လို့ သတ်မှတ်ထားပါတယ်။
          လကုန်ခါနီးတဲ့အချိန်မှာ Result က
          Target ထက် နောက်ကျနေပါတယ်။
        </p>

        <p>
          ဒီအချိန်မှာ Manager တစ်ယောက်အနေနဲ့
          Team ကို “ပိုကြိုးစားပါ၊ Target ပြည့်အောင်လုပ်ပါ”
          လို့ပဲ ပြောလိုက်ရင် လုံလောက်မှာ မဟုတ်ပါဘူး။
        </p>

        <p>
          အရင်ဆုံး ဘာကြောင့် Result နောက်ကျနေတာလဲ
          ဆိုတာကို ရှာရပါမယ်။ Customer Visit လျော့နေလား။
          Order Conversion ကျနေလား။ Product Availability
          ပြဿနာရှိနေလား။ Distributor Stock မရှိဘူးလား။
          Competitor Promotion ပိုကောင်းနေလား။
          Customer Demand ပြောင်းနေလား။
          Team Member တစ်ယောက်ချင်းစီရဲ့ Execution
          ကောင်းရဲ့လားဆိုတာ စစ်ဆေးရပါမယ်။
        </p>

        <p>
          ဥပမာ Sales Result ကျနေတယ်ဆိုရင်
          Sales Person ကို အပြစ်တင်ဖို့ထက်
          Territory တစ်ခုချင်းစီရဲ့ Performance ကို
          ကြည့်သင့်ပါတယ်။
        </p>

        <p>
          Territory တစ်ခုမှာ Customer Demand ကျနေတာ
          ဖြစ်နိုင်သလို၊ တခြား Territory တစ်ခုမှာ
          Distribution Coverage မလုံလောက်တာ
          ဖြစ်နိုင်ပါတယ်။
        </p>

        <p>
          ဒါကြောင့် Manager ရဲ့အလုပ်က
          Problem တစ်ခုကို တစ်ကြောင်းတည်းနဲ့
          သတ်မှတ်တာမဟုတ်ဘဲ Problem ကို ခွဲခြမ်းပြီး
          မှန်ကန်တဲ့ Action ကို ရွေးချယ်ပေးဖို့ ဖြစ်ပါတယ်။
        </p>

      </section>

    `;

  }


  /* ============================================================
     SECTION 5
     ============================================================ */

  function managerThinking(module, title) {

    const k = getKnowledge(module);

    return `

      <section class="abl-section">

        <h2>👨‍💼 Professional Manager Thinking</h2>

        <p>
          Professional Manager တစ်ယောက်ရဲ့
          စဉ်းစားပုံဟာ Staff တစ်ယောက်ရဲ့
          စဉ်းစားပုံနဲ့ မတူပါဘူး။
        </p>

        <p>
          Staff တစ်ယောက်က “ငါ့အလုပ်ကို
          ဘယ်လိုပြီးအောင်လုပ်မလဲ” ကို အဓိက
          စဉ်းစားနိုင်ပါတယ်။
        </p>

        <p>
          Manager ကတော့ “ဒီအလုပ်ပြီးရင်
          Business Result ဘာဖြစ်လာမလဲ” ဆိုတာကို
          ထပ်ပြီး စဉ်းစားရပါမယ်။
        </p>

        <p>
          ${esc(k.manager)}
          ဆိုတဲ့ Mindset က ဒီနေရာမှာ အရေးကြီးပါတယ်။
        </p>

        <p>
          Manager တစ်ယောက်ဟာ ကိုယ်တိုင်အလုပ်
          အများကြီးလုပ်နိုင်တာထက် Team တစ်ခုလုံးကို
          Result ရအောင် စီမံနိုင်တာ ပိုတန်ဖိုးရှိပါတယ်။
        </p>

        <p>
          ဒါကြောင့် Team Member တစ်ယောက်
          မလုပ်နိုင်တဲ့အခါ ချက်ချင်း ကိုယ်တိုင်
          ဝင်လုပ်ပေးတာထက် ဘာကြောင့်မလုပ်နိုင်တာလဲ
          ရှာပြီး Coaching လုပ်ပေးသင့်ပါတယ်။
        </p>

        <p>
          ဒီလို Management Mindset ရှိလာရင်
          Manager ရဲ့အလုပ်က “အလုပ်တွေကို လိုက်လုပ်ခြင်း”
          ကနေ “Business ကို ဦးဆောင်ခြင်း” အဖြစ်
          ပြောင်းလဲလာပါမယ်။
        </p>

      </section>

    `;

  }


  /* ============================================================
     SECTION 6
     ============================================================ */

  function commonMistakes(module, title) {

    return `

      <section class="abl-section">

        <h2>⚠️ မကြာခဏဖြစ်တတ်တဲ့ Management အမှားများ</h2>

        <h3>❌ အမှား (၁) Data မကြည့်ဘဲ ဆုံးဖြတ်ခြင်း</h3>

        <p>
          Manager တစ်ယောက်အနေနဲ့ ကိုယ့်အတွေ့အကြုံကို
          အသုံးချလို့ရပါတယ်။ ဒါပေမယ့် Experience
          တစ်ခုတည်းကို အားကိုးပြီး ဆုံးဖြတ်တာက
          Risk ရှိပါတယ်။
          ရနိုင်တဲ့ Data ကို အရင်ကြည့်သင့်ပါတယ်။
        </p>

        <h3>❌ အမှား (၂) Problem ဖြစ်တာနဲ့ လူကို အပြစ်တင်ခြင်း</h3>

        <p>
          Result မကောင်းတာဟာ လူတစ်ယောက်တည်းရဲ့
          အမှားဖြစ်ချင်မှ ဖြစ်ပါမယ်။
          Process၊ Training၊ Resource၊ Customer၊
          Market၊ Product နဲ့ Management Direction
          တွေမှာလည်း Gap ရှိနိုင်ပါတယ်။
        </p>

        <h3>❌ အမှား (၃) Action Plan မရှင်းခြင်း</h3>

        <p>
          “Sales တိုးအောင်လုပ်ပါ”
          “Customer ကိုပိုဂရုစိုက်ပါ”
          “Team ကိုပိုကြိုးစားခိုင်းပါ”
          ဆိုတာတွေဟာ ရှင်းလင်းတဲ့ Action Plan
          မဟုတ်ပါဘူး။
        </p>

        <p>
          ဘယ်သူက ဘာလုပ်မလဲ၊ ဘယ်အချိန်မှာလုပ်မလဲ၊
          ဘယ် Result ကို ရချင်လဲဆိုတာ
          သတ်မှတ်ထားရပါမယ်။
        </p>

        <h3>❌ အမှား (၄) Follow-up မလုပ်ခြင်း</h3>

        <p>
          Meeting လုပ်ပြီး၊ Plan ချပြီး၊
          Team ကို ပြောပြီးတာနဲ့ အလုပ်ပြီးသွားပြီလို့
          မယူဆသင့်ပါဘူး။
          Action တကယ်ဖြစ်လာလား၊ Result ပြောင်းလဲလား
          ပြန်စစ်ဖို့လိုပါတယ်။
        </p>

        <h3>❌ အမှား (၅) Short-term Result ကိုပဲ ကြည့်ခြင်း</h3>

        <p>
          ဒီနေ့ Sales တက်လာတာတစ်ခုတည်းနဲ့
          Business အောင်မြင်နေပြီလို့ မဆိုနိုင်ပါဘူး။
          Margin၊ Customer Relationship၊
          Team Capability နဲ့ Long-term Growth ကိုပါ
          ထည့်သွင်းစဉ်းစားရပါမယ်။
        </p>

      </section>

    `;

  }


  /* ============================================================
     SECTION 7
     ============================================================ */

  function practicalApplication(module, title) {

    return `

      <section class="abl-section">

        <h2>🛠️ လက်တွေ့အသုံးချနည်း</h2>

        <p>
          ဒီသင်ခန်းစာကို အလုပ်ခွင်မှာ အသုံးချတဲ့အခါ
          ပထမဆုံး ကိုယ့်လုပ်ငန်းမှာ လက်ရှိဖြစ်နေတဲ့
          Situation တစ်ခုကို ရွေးပါ။
        </p>

        <p>
          ဥပမာ Sales Target မပြည့်တာ၊
          Customer Complaint တက်တာ၊
          Team Performance ကျတာ၊
          Distributor Stock ပြဿနာရှိတာ၊
          Customer Retention ကျတာ စတဲ့
          လက်တွေ့ Problem တစ်ခု ဖြစ်နိုင်ပါတယ်။
        </p>

        <p>
          ပြီးရင် Problem ကို တစ်ကြောင်းတည်းနဲ့
          ရှင်းလင်းစွာရေးပါ။
          Problem ကို ရှင်းရှင်းလင်းလင်း
          သတ်မှတ်နိုင်မှ Solution ကို
          မှန်မှန်ကန်ကန် ရှာနိုင်မှာ ဖြစ်ပါတယ်။
        </p>

        <p>
          နောက်တစ်ဆင့်မှာ “ဘာကြောင့်ဖြစ်တာလဲ”
          ဆိုတဲ့မေးခွန်းကို မေးပါ။
          အကြောင်းရင်းတစ်ခုတည်းနဲ့ ရပ်မနေဘဲ
          အနည်းဆုံး အကြောင်းရင်းအမျိုးမျိုးကို
          စဉ်းစားပါ။
        </p>

        <p>
          အဲဒီအကြောင်းရင်းတွေထဲမှာ
          Business Result ကို အများဆုံး
          ထိခိုက်စေတဲ့အကြောင်းရင်းကို
          Priority ပေးပါ။
        </p>

        <p>
          ပြီးရင် Action တစ်ခုကို သတ်မှတ်ပါ။
          Action ဟာ လက်တွေ့လုပ်လို့ရရမယ်။
          တာဝန်ရှိသူ ရှိရမယ်။
          Deadline ရှိရမယ်။
          ပြီးတော့ Result ကို တိုင်းတာနိုင်ရမယ်။
        </p>

      </section>

    `;

  }


  /* ============================================================
     SECTION 8
     ============================================================ */

  function actionPlan(module, title) {

    return `

      <section class="abl-section">

        <h2>📋 Manager Action Plan</h2>

        <p>
          <strong>Step 1 — Problem ရွေးပါ</strong>
        </p>

        <p>
          ကိုယ့်လုပ်ငန်းမှာ အခုလက်ရှိ အရေးကြီးဆုံး
          Problem တစ်ခုကို ရွေးပါ။
          Problem အများကြီးကို တစ်ပြိုင်နက်တည်း
          ဖြေရှင်းဖို့ မကြိုးစားပါနဲ့။
          Business Impact အများဆုံး Problem ကို
          အရင် Priority ပေးပါ။
        </p>

        <p>
          <strong>Step 2 — Current Situation ကို သိပါ</strong>
        </p>

        <p>
          လက်ရှိအခြေအနေကို အချက်အလက်နဲ့
          နားလည်အောင်လုပ်ပါ။
          ကိုယ့်အမြင်နဲ့ပဲ မဆုံးဖြတ်ပါနဲ့။
          Customer Feedback၊ Team Feedback၊
          Sales Result၊ Market Information
          စတာတွေကို ထည့်သွင်းစဉ်းစားပါ။
        </p>

        <p>
          <strong>Step 3 — Root Cause ရှာပါ</strong>
        </p>

        <p>
          “ဘာကြောင့်လဲ” ဆိုတဲ့မေးခွန်းကို
          အကြိမ်ကြိမ်မေးပြီး အဓိကအကြောင်းရင်းကို
          ရှာပါ။
        </p>

        <p>
          <strong>Step 4 — Solution ရွေးပါ</strong>
        </p>

        <p>
          Solution တစ်ခုတည်းကို ချက်ချင်းမရွေးဘဲ
          လုပ်နိုင်တဲ့နည်းလမ်းတွေကို စဉ်းစားပါ။
          Cost၊ Time၊ People၊ Risk နဲ့
          Expected Result ကို ချိန်ညှိပြီး
          အကောင်းဆုံးနည်းလမ်းကို ရွေးပါ။
        </p>

        <p>
          <strong>Step 5 — Responsibility သတ်မှတ်ပါ</strong>
        </p>

        <p>
          Action တစ်ခုချင်းစီကို ဘယ်သူက
          တာဝန်ယူမလဲဆိုတာ ရှင်းလင်းရပါမယ်။
          လူတိုင်းတာဝန်ရှိတယ်လို့ ပြောထားရင်
          တကယ်တော့ ဘယ်သူမှ တာဝန်မရှိသလို
          ဖြစ်သွားနိုင်ပါတယ်။
        </p>

        <p>
          <strong>Step 6 — Follow-up လုပ်ပါ</strong>
        </p>

        <p>
          Action ပြီးသွားတဲ့နောက် Result ကို
          ပြန်စစ်ပါ။ မတိုးတက်သေးရင်
          အကြောင်းရင်းကို ပြန်စစ်ပြီး
          Action Plan ကို ပြန်ပြင်ပါ။
        </p>

      </section>

    `;

  }


  /* ============================================================
     SECTION 9
     ============================================================ */

  function knowledgeCheck(module, title) {

    return `

      <section class="abl-section">

        <h2>❓ Knowledge Check</h2>

        <div class="abl-question">

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


        <div class="abl-question">

          <h3>မေးခွန်း (၂)</h3>

          <p>
            Problem ကိုမြင်တာနဲ့ ချက်ချင်း
            Solution ချလိုက်ရင် ဘာဖြစ်နိုင်သလဲ?
          </p>

          <p>
            <strong>အဖြေ:</strong>
            Root Cause မမှန်ရင် Solution က
            Problem ကို အမှန်တကယ် မဖြေရှင်းနိုင်ပါဘူး။
          </p>

        </div>


        <div class="abl-question">

          <h3>မေးခွန်း (၃)</h3>

          <p>
            Action Plan ကောင်းတစ်ခုမှာ
            ဘာတွေ ရှင်းလင်းရမလဲ?
          </p>

          <p>
            <strong>အဖြေ:</strong>
            ဘယ်သူ၊ ဘာလုပ်မလဲ၊ ဘယ်အချိန်မှာ
            လုပ်မလဲ၊ ဘယ် Result ကို ရချင်လဲ
            ဆိုတာ ရှင်းလင်းရပါမယ်။
          </p>

        </div>


        <div class="abl-question">

          <h3>မေးခွန်း (၄)</h3>

          <p>
            Manager က Team Member ကို
            ဘာကြောင့် Coaching လုပ်ပေးသင့်သလဲ?
          </p>

          <p>
            <strong>အဖြေ:</strong>
            ခဏတာအလုပ်ပြီးသွားဖို့ထက်
            Team Member ရဲ့ Capability ကို
            ရေရှည်တိုးတက်အောင်လုပ်ဖို့ ဖြစ်ပါတယ်။
          </p>

        </div>


        <div class="abl-question">

          <h3>မေးခွန်း (၅)</h3>

          <p>
            Professional Manager ရဲ့
            အခြေခံစဉ်းစားပုံက ဘာလဲ?
          </p>

          <p>
            <strong>အဖြေ:</strong>
            Situation → Analysis → Root Cause
            → Decision → Action → Result
            → Improvement ဖြစ်ပါတယ်။
          </p>

        </div>

      </section>

    `;

  }


  /* ============================================================
     SECTION 10
     ============================================================ */

  function reflection(module, title) {

    return `

      <section class="abl-section">

        <h2>🤔 Manager Reflection</h2>

        <p>
          ဒီသင်ခန်းစာကို ဖတ်ပြီးတဲ့အခါ
          ကိုယ့်ရဲ့ လက်ရှိအလုပ်ကို ပြန်စဉ်းစားကြည့်ပါ။
        </p>

        <p>
          <strong>①</strong>
          ${esc(title)}
          နဲ့ပတ်သက်ပြီး
          ကိုယ့်လုပ်ငန်းမှာ လက်ရှိအခက်အခဲက ဘာလဲ?
        </p>

        <p>
          <strong>②</strong>
          အဲဒီအခက်အခဲရဲ့ အဓိက Root Cause က
          ဘာဖြစ်နိုင်သလဲ?
        </p>

        <p>
          <strong>③</strong>
          အခုလက်ရှိ ကိုယ်လုပ်နေတဲ့ Action က
          Result ကို တကယ်တိုးတက်စေသလား?
        </p>

        <p>
          <strong>④</strong>
          ကိုယ့် Team Member တွေကို
          ကိုယ်တိုင်အလုပ်လုပ်ပေးနေသလား၊
          ဒါမှမဟုတ် သူတို့ကို
          အလုပ်လုပ်နိုင်အောင် Coaching
          လုပ်ပေးနေသလား?
        </p>

        <p>
          <strong>⑤</strong>
          ဒီ Lesson ကနေ သင်ယူခဲ့တာတွေထဲမှာ
          မနက်ဖြန်ကစပြီး ချက်ချင်းအသုံးချမယ့်
          အရာတစ်ခုက ဘာလဲ?
        </p>

      </section>

    `;

  }


  /* ============================================================
     SECTION 11
     ============================================================ */

  function summary(module, title) {

    const k = getKnowledge(module);

    return `

      <section class="abl-section abl-summary">

        <h2>📌 သင်ခန်းစာအနှစ်ချုပ်</h2>

        <p>
          ဒီ Lesson မှာ
          <strong>${esc(title)}</strong>
          ကို Business Management ရှုထောင့်ကနေ
          အသေးစိတ်လေ့လာခဲ့ပါတယ်။
        </p>

        <p>
          ${esc(k.focus)}
          ကို နားလည်ထားခြင်းဟာ
          Business Result ကောင်းမွန်ဖို့
          အရေးကြီးတဲ့ အခြေခံတစ်ခု ဖြစ်ပါတယ်။
        </p>

        <p>
          Professional Manager တစ်ယောက်ဟာ
          Result ကိုသာ ကြည့်တာမဟုတ်ဘဲ
          Result ဖြစ်ပေါ်လာစေတဲ့ Process၊
          People၊ Customer၊ Market နဲ့
          Business Environment ကိုပါ
          စဉ်းစားရပါတယ်။
        </p>

        <p>
          Problem တစ်ခုဖြစ်လာတဲ့အခါ
          လူကို အပြစ်တင်ဖို့ထက်
          Root Cause ကို ရှာဖွေပြီး
          မှန်ကန်တဲ့ Solution ကို ရွေးချယ်ရပါမယ်။
        </p>

        <p>
          Solution ရွေးပြီးတာနဲ့ အလုပ်ပြီးသွားတာ
          မဟုတ်ပါဘူး။ Action Plan ချရပါမယ်။
          Responsibility သတ်မှတ်ရပါမယ်။
          Deadline ထားရပါမယ်။
          ပြီးရင် Result ကို Follow-up
          လုပ်ရပါမယ်။
        </p>

        <p>
          ဒီလို စနစ်တကျ လုပ်ဆောင်နိုင်တဲ့
          Manager တစ်ယောက်ဟာ
          အလုပ်များတဲ့ Manager မဟုတ်ဘဲ
          Result ထွက်အောင် လုပ်နိုင်တဲ့
          Professional Manager ဖြစ်လာပါမယ်။
        </p>

        <div class="abl-final-message">

          <strong>
            PROFESSIONAL MANAGER MINDSET
          </strong>

          <p>
            Problem ကို မကြောက်ပါနဲ့။
            Problem ကို နားလည်ပါ။
            Root Cause ကို ရှာပါ။
            မှန်ကန်တဲ့ Decision ချပါ။
            Action လုပ်ပါ။
            Result ကို တိုင်းပါ။
            ပြီးရင် ပိုကောင်းအောင် ပြန်လုပ်ပါ။
          </p>

        </div>

      </section>

    `;

  }


  /* ============================================================
     COMPLETE LESSON BUILDER
     ============================================================ */

  function buildLesson(module, title) {

    return `

      <div class="academy-long-lesson">

        <div class="abl-header">

          <div class="abl-label">
            PROFESSIONAL BUSINESS LESSON
          </div>

          <h1>
            ${esc(title)}
          </h1>

          <div class="abl-module">
            ${esc(module)}
          </div>

          <div class="abl-time">
            📚 Detailed Professional Learning
          </div>

        </div>


        ${introduction(module, title)}

        ${detailedExplanation(module, title)}

        ${keyConcepts(module, title)}

        ${realBusinessExample(module, title)}

        ${managerThinking(module, title)}

        ${commonMistakes(module, title)}

        ${practicalApplication(module, title)}

        ${actionPlan(module, title)}

        ${knowledgeCheck(module, title)}

        ${reflection(module, title)}

        ${summary(module, title)}

      </div>

    `;

  }


  /* ============================================================
     CSS
     ============================================================ */

  function addStyles() {

    if (
      document.getElementById(
        "academy-long-lessons-style"
      )
    ) {
      return;
    }


    const style =
      document.createElement("style");


    style.id =
      "academy-long-lessons-style";


    style.textContent = `

      /*
       ==========================================================
       AUNG BUSINESS ACADEMY LONG LESSON STYLE
       ==========================================================
      */

      .academy-long-lesson {

        width: 100% !important;

        max-width: 900px !important;

        margin: 0 auto !important;

        padding: 0 !important;

        box-sizing: border-box !important;

        overflow-x: hidden !important;

        overflow-wrap: anywhere !important;

        word-wrap: break-word !important;

        color: #1e293b;

        font-family:
          Arial,
          "Noto Sans Myanmar",
          sans-serif;

        line-height: 1.9;

      }


      .academy-long-lesson * {

        box-sizing: border-box !important;

        max-width: 100% !important;

      }


      .abl-header {

        width: 100% !important;

        margin-bottom: 18px;

        padding: 24px 20px;

        border-radius: 16px;

        background:
          linear-gradient(
            135deg,
            #0f172a,
            #1e293b
          );

        color: #ffffff;

        overflow: hidden;

      }


      .abl-label {

        font-size: 11px;

        font-weight: 800;

        letter-spacing: 1px;

        opacity: .75;

        margin-bottom: 9px;

      }


      .abl-header h1 {

        width: 100%;

        margin: 0 0 8px;

        padding: 0;

        font-size: 28px;

        line-height: 1.45;

        overflow-wrap: anywhere;

      }


      .abl-module {

        font-size: 15px;

        opacity: .9;

        margin-bottom: 8px;

        overflow-wrap: anywhere;

      }


      .abl-time {

        font-size: 12px;

        opacity: .75;

      }


      .abl-section {

        width: 100% !important;

        max-width: 100% !important;

        margin: 0 0 17px;

        padding: 23px 20px;

        background: #ffffff;

        border: 1px solid #e2e8f0;

        border-radius: 15px;

        box-shadow:
          0 3px 12px
          rgba(15, 23, 42, .045);

        overflow: hidden !important;

        overflow-wrap: anywhere !important;

      }


      .abl-section h2 {

        margin: 0 0 16px;

        padding: 0;

        font-size: 21px;

        line-height: 1.55;

        color: #0f172a;

        overflow-wrap: anywhere;

      }


      .abl-section h3 {

        margin: 20px 0 8px;

        padding: 0;

        font-size: 17px;

        line-height: 1.6;

        color: #334155;

        overflow-wrap: anywhere;

      }


      .abl-section p {

        width: 100%;

        max-width: 100%;

        margin: 0 0 15px;

        padding: 0;

        font-size: 16px;

        line-height: 1.95;

        overflow-wrap: anywhere;

        word-break: normal;

      }


      .abl-section p:last-child {

        margin-bottom: 0;

      }


      .abl-question {

        width: 100%;

        max-width: 100%;

        margin-bottom: 13px;

        padding: 16px;

        border-radius: 12px;

        background: #f8fafc;

        border: 1px solid #e2e8f0;

        overflow: hidden;

      }


      .abl-question h3 {

        margin: 0 0 8px;

        font-size: 16px;

        color: #0f172a;

      }


      .abl-question p {

        font-size: 15px;

        line-height: 1.9;

        margin-bottom: 9px;

      }


      .abl-question p:last-child {

        margin-bottom: 0;

      }


      .abl-summary {

        background: #f8fafc;

      }


      .abl-final-message {

        width: 100%;

        max-width: 100%;

        margin-top: 20px;

        padding: 20px;

        border-radius: 13px;

        background: #ffffff;

        border-left: 4px solid #334155;

        text-align: center;

        overflow-wrap: anywhere;

      }


      .abl-final-message strong {

        display: block;

        margin-bottom: 10px;

        font-size: 14px;

        letter-spacing: .8px;

      }


      .abl-final-message p {

        margin: 0;

        font-weight: 700;

        line-height: 1.9;

      }


      /*
       IMPORTANT:
       Old table/graph elements are hidden inside
       upgraded lesson only.
      */

      .academy-long-lesson table,

      .academy-long-lesson .table,

      .academy-long-lesson .graph,

      .academy-long-lesson .chart,

      .academy-long-lesson canvas,

      .academy-long-lesson svg {

        display: none !important;

      }


      /*
       Prevent horizontal movement
      */

      html {

        overflow-x: hidden !important;

      }


      body {

        overflow-x: hidden !important;

      }


      @media (max-width: 700px) {

        .academy-long-lesson {

          width: 100% !important;

          padding: 0 !important;

        }


        .abl-header {

          padding: 20px 16px;

          border-radius: 13px;

        }


        .abl-header h1 {

          font-size: 23px;

          line-height: 1.5;

        }


        .abl-module {

          font-size: 14px;

        }


        .abl-section {

          padding: 19px 16px;

          margin-bottom: 14px;

          border-radius: 13px;

        }


        .abl-section h2 {

          font-size: 19px;

        }


        .abl-section h3 {

          font-size: 16px;

        }


        .abl-section p {

          font-size: 15px;

          line-height: 1.95;

        }


        .abl-question {

          padding: 14px;

        }


        .abl-question p {

          font-size: 14.5px;

        }


        .abl-final-message {

          padding: 16px;

        }

      }


      @media (max-width: 430px) {

        .abl-header {

          padding: 18px 14px;

        }


        .abl-header h1 {

          font-size: 21px;

        }


        .abl-section {

          padding: 17px 14px;

        }


        .abl-section h2 {

          font-size: 18px;

        }


        .abl-section h3 {

          font-size: 15.5px;

        }


        .abl-section p {

          font-size: 14.5px;

          line-height: 1.95;

        }

      }

    `;


    document.head.appendChild(style);

  }


  /* ============================================================
     FIND LESSON MODAL
     ============================================================ */

  function findModal() {

    const selectors = [

      "#lessonModal",
      "#lesson-modal",
      "#lessonDetailModal",
      "#lessonDetail",
      ".lesson-modal",
      ".lessonModal",
      ".modal.lesson-modal"

    ];


    for (
      let i = 0;
      i < selectors.length;
      i++
    ) {

      const el =
        document.querySelector(
          selectors[i]
        );

      if (el) {
        return el;
      }

    }


    return null;

  }


  /* ============================================================
     FIND TITLE
     ============================================================ */

  function findTitle(modal) {

    const selectors = [

      "[data-lesson-title]",
      ".lesson-title",
      ".modal-title",
      ".lesson-name",
      ".lesson-header h1",
      ".lesson-header h2",
      ".modal-header h1",
      ".modal-header h2",
      ".modal-header h3",
      "h1",
      "h2",
      "h3"

    ];


    for (
      let i = 0;
      i < selectors.length;
      i++
    ) {

      const el =
        modal.querySelector(
          selectors[i]
        );


      if (
        el &&
        el.textContent &&
        el.textContent.trim()
      ) {

        return el.textContent.trim();

      }

    }


    return "";

  }


  /* ============================================================
     FIND MODULE
     ============================================================ */

  function findModule(modal) {

    const selectors = [

      "[data-module]",
      ".lesson-module",
      ".module-name",
      ".lesson-category",
      ".category",
      ".lesson-meta"

    ];


    for (
      let i = 0;
      i < selectors.length;
      i++
    ) {

      const el =
        modal.querySelector(
          selectors[i]
        );


      if (
        el &&
        el.textContent &&
        el.textContent.trim()
      ) {

        const text =
          el.textContent.trim();


        for (
          const moduleName of
          Object.keys(MODULE_KNOWLEDGE)
        ) {

          if (
            text
              .toLowerCase()
              .includes(
                moduleName.toLowerCase()
              )
          ) {

            return moduleName;

          }

        }

      }

    }


    /*
      Try entire modal text.
    */

    const text =
      modal.textContent || "";


    for (
      const moduleName of
      Object.keys(MODULE_KNOWLEDGE)
    ) {

      if (
        text
          .toLowerCase()
          .includes(
            moduleName.toLowerCase()
          )
      ) {

        return moduleName;

      }

    }


    return "Business Basics";

  }


  /* ============================================================
     CHECK ENGLISH
     ============================================================ */

  function isEnglishLesson(title, module) {

    const text =
      (
        String(title || "") +
        " " +
        String(module || "")
      ).toLowerCase();


    return (
      text.includes("business english") ||
      text.includes("english lesson") ||
      text.includes("english")
    );

  }


  /* ============================================================
     FIND CONTENT AREA
     ============================================================ */

  function findContent(modal) {

    const selectors = [

      ".modal-body",
      ".lesson-modal-body",
      ".lesson-content",
      ".lesson-body",
      ".modal-content-body",
      ".lesson-detail-content",
      ".lesson-detail-body"

    ];


    for (
      let i = 0;
      i < selectors.length;
      i++
    ) {

      const el =
        modal.querySelector(
          selectors[i]
        );

      if (el) {
        return el;
      }

    }


    /*
      Last fallback:
      find a large content div.
    */

    const divs =
      modal.querySelectorAll(
        "div"
      );


    for (
      let i = 0;
      i < divs.length;
      i++
    ) {

      const el =
        divs[i];


      if (
        el.textContent &&
        el.textContent.length > 300
      ) {

        return el;

      }

    }


    return modal;

  }


  /* ============================================================
     APPLY LONG LESSON
     ============================================================ */

  function applyLesson() {

    const modal =
      findModal();


    if (!modal) {
      return;
    }


    /*
      Check if modal is actually visible.
    */

    const computed =
      window.getComputedStyle(modal);


    if (
      computed.display === "none" ||
      computed.visibility === "hidden"
    ) {

      return;

    }


    const title =
      findTitle(modal);


    if (!title) {
      return;
    }


    const module =
      findModule(modal);


    /*
      NEVER TOUCH BUSINESS ENGLISH
    */

    if (
      isEnglishLesson(
        title,
        module
      )
    ) {

      return;

    }


    /*
      Don't rebuild the same lesson repeatedly.
    */

    const currentKey =
      module +
      "::" +
      title;


    if (
      modal.dataset
        .academyLongLesson ===
      currentKey
    ) {

      return;

    }


    const content =
      findContent(modal);


    if (!content) {
      return;
    }


    /*
      Save original content once.
    */

    if (
      !modal.dataset
        .academyOriginalContent
    ) {

      modal.dataset
        .academyOriginalContent =
        content.innerHTML;

    }


    /*
      Replace only lesson content.
    */

    content.innerHTML =
      buildLesson(
        module,
        title
      );


    /*
      Mobile safety.
    */

    content.style.width =
      "100%";

    content.style.maxWidth =
      "100%";

    content.style.overflowX =
      "hidden";

    content.style.boxSizing =
      "border-box";


    modal.style.overflowX =
      "hidden";


    const modalContent =
      modal.querySelector(
        ".modal-content, .modal-dialog"
      );


    if (modalContent) {

      modalContent.style.maxWidth =
        "900px";

      modalContent.style.width =
        "min(900px, 96vw)";

      modalContent.style.boxSizing =
        "border-box";

      modalContent.style.overflowX =
        "hidden";

    }


    modal.dataset
      .academyLongLesson =
      currentKey;


    console.log(
      "Long Lesson Applied:",
      title
    );

  }


  /* ============================================================
     CLICK LISTENER
     ============================================================ */

  function setupClickListener() {

    document.addEventListener(
      "click",
      function () {

        /*
          Existing app needs time to open modal.
        */

        setTimeout(
          applyLesson,
          150
        );

        setTimeout(
          applyLesson,
          400
        );

        setTimeout(
          applyLesson,
          800
        );

        setTimeout(
          applyLesson,
          1300
        );

      },
      true
    );

  }


  /* ============================================================
     MUTATION OBSERVER
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


          setTimeout(
            applyLesson,
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
     RESET
     ============================================================ */

  function setupReset() {

    document.addEventListener(
      "click",
      function (event) {

        const close =
          event.target.closest(
            ".close," +
            ".modal-close," +
            ".close-modal," +
            "[data-close]," +
            ".modal-close-btn"
          );


        if (!close) {
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
                .academyLongLesson;

          },
          500
        );

      }
    );

  }


  /* ============================================================
     INITIALIZE
     ============================================================ */

  function init() {

    addStyles();

    setupClickListener();

    setupObserver();

    setupReset();


    /*
      Try once after page load.
    */

    setTimeout(
      applyLesson,
      1000
    );


    setTimeout(
      applyLesson,
      2500
    );


    setTimeout(
      applyLesson,
      5000
    );


    console.log(
      "======================================"
    );

    console.log(
      "AUNG BUSINESS ACADEMY"
    );

    console.log(
      "LONG DETAILED LESSONS: ACTIVE"
    );

    console.log(
      "230 EXISTING BUSINESS LESSONS: PRESERVED"
    );

    console.log(
      "BUSINESS ENGLISH: UNTOUCHED"
    );

    console.log(
      "GRAPH: REMOVED"
    );

    console.log(
      "TABLE: REMOVED"
    );

    console.log(
      "MOBILE OVERFLOW: PROTECTED"
    );

    console.log(
      "======================================"
    );

  }


  /* ============================================================
     START
     ============================================================ */

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
