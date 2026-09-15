/* =========================================================
   AUNG BUSINESS ACADEMY
   COURSE 02 — SALES MANAGEMENT
   FULL BURMESE LESSONS
   VERSION 1.0
   ========================================================= */

(function () {
  "use strict";

  const SALES_COURSE = {
    id: "sales-management",
    category: "SALES",
    icon: "🎯",
    title: "Sales Management",
    burmeseTitle: "အရောင်းစီမံခန့်ခွဲမှု",
    description:
      "Sales Fundamentals မှစ၍ Sales Process, Customer Needs, Target, Planning, Forecasting, KPI, Team Management နှင့် Performance Management အထိ လက်တွေ့ကျကျ လေ့လာနိုင်မည့် Course ဖြစ်သည်။",
    lessons: 10,
    level: "Beginner → Manager"
  };

  const SALES_LESSONS = [

    {
      id: "sm-01",
      lessonNo: 1,
      icon: "🎯",
      title: "Sales Fundamentals",
      burmeseTitle: "အရောင်းအခြေခံ",
      duration: "30 min",

      objective: [
        "Sales ဆိုတာဘာလဲ နားလည်ရန်",
        "Salesperson တစ်ယောက်၏ အဓိကတာဝန်များကို သိရန်",
        "Professional Selling Mindset ကို တည်ဆောက်ရန်"
      ],

      content: `
        <h3>📌 Sales ဆိုတာဘာလဲ?</h3>

        <p>
        Sales ဆိုတာ Product တစ်ခုကို Customer ထံ ငွေနဲ့လဲလှယ်ရောင်းချခြင်း
        တစ်ခုတည်းမဟုတ်ပါဘူး။ Customer ရဲ့ Need နဲ့ Problem ကို နားလည်ပြီး
        သင့်တော်တဲ့ Solution ကို ပေးနိုင်အောင် ကူညီပေးတဲ့ လုပ်ငန်းစဉ်တစ်ခု ဖြစ်ပါတယ်။
        </p>

        <p>
        Professional Salesperson တစ်ယောက်ဟာ “ငါဘယ်လိုရောင်းမလဲ”
        ဆိုတာထက် “Customer ဘာလိုအပ်နေလဲ” ဆိုတာကို အရင်စဉ်းစားရပါတယ်။
        </p>

        <h3>🔄 Sales ရဲ့ အခြေခံလုပ်ငန်းစဉ်</h3>

        <div class="lesson-flow">
          <div>Prospecting</div>
          <span>→</span>
          <div>Approach</div>
          <span>→</span>
          <div>Need Analysis</div>
          <span>→</span>
          <div>Presentation</div>
          <span>→</span>
          <div>Objection</div>
          <span>→</span>
          <div>Closing</div>
          <span>→</span>
          <div>Follow-up</div>
        </div>

        <h3>👤 Salesperson ရဲ့ အဓိကတာဝန်</h3>

        <ul class="lesson-list">
          <li>Customer အသစ်ရှာဖွေခြင်း</li>
          <li>Customer Relationship တည်ဆောက်ခြင်း</li>
          <li>Customer Need ရှာဖွေခြင်း</li>
          <li>Product Value ရှင်းပြခြင်း</li>
          <li>Order ရရှိအောင်လုပ်ခြင်း</li>
          <li>Customer ကို Retain လုပ်ခြင်း</li>
          <li>Market Information ပြန်ပေးခြင်း</li>
        </ul>

        <h3>💡 Professional Sales Mindset</h3>

        <p>
        Sales ကို “Customer ကို အတင်းဝယ်ခိုင်းခြင်း” လို့ မမြင်သင့်ပါဘူး။
        Customer အတွက် မှန်ကန်တဲ့ Solution ကို ရှာပေးခြင်းလို့ မြင်သင့်ပါတယ်။
        </p>

        <div class="lesson-example">
          <strong>ဥပမာ</strong><br><br>
          Customer က ဈေးနှုန်းသက်သာတဲ့ Product တစ်ခုကို လိုချင်တယ်။
          Salesperson က Product တစ်ခုကိုပဲ အတင်းမရောင်းဘဲ
          Customer ရဲ့ Budget၊ Usage နဲ့ Requirement ကိုမေးပြီး
          သင့်တော်တဲ့ Option ကို ရွေးပေးရပါမယ်။
        </div>

        <h3>👔 Sales Manager Thinking</h3>

        <p>
        Sales Manager က Salesperson တစ်ယောက်ချင်းစီကို Target ပေးရုံနဲ့
        မပြီးပါဘူး။ လူ၊ နံပါတ်နဲ့ Execution သုံးခုစလုံးကို စီမံရပါတယ်။
        </p>
      `,

      action: [
        "ကိုယ့် Sales Process ကို အဆင့်လိုက်ရေးပါ။",
        "Customer ရဲ့ အဓိက Need ၅ ခုရေးပါ။",
        "ကိုယ့် Sales Team ရဲ့ အားသာချက် ၃ ခုရေးပါ။",
        "တိုးတက်ဖို့လိုတဲ့ အချက် ၃ ခုရေးပါ။"
      ],

      quiz: [
        {
          q: "Professional Sales ရဲ့ အဓိကအချက်ကဘာလဲ?",
          a: "Customer ရဲ့ Need ကိုနားလည်ပြီး သင့်တော်တဲ့ Solution ပေးခြင်း ဖြစ်ပါတယ်။"
        },
        {
          q: "Sales Process ရဲ့ ပထမအဆင့်ကဘာလဲ?",
          a: "Prospecting ဖြစ်ပါတယ်။"
        }
      ]
    },


    {
      id: "sm-02",
      lessonNo: 2,
      icon: "🔄",
      title: "Sales Process",
      burmeseTitle: "Sales Process အဆင့်များ",
      duration: "30 min",

      objective: [
        "Sales Process အဆင့်တိုင်းကို နားလည်ရန်",
        "Customer ကို Prospect မှ Customer အဖြစ်ပြောင်းနိုင်ရန်",
        "Sales Funnel ကို စီမံနိုင်ရန်"
      ],

      content: `
        <h3>📌 Sales Process ဆိုတာဘာလဲ?</h3>

        <p>
        Sales Process ဆိုတာ Potential Customer တစ်ယောက်ကို
        ရှာဖွေတွေ့ရှိချိန်ကနေ Order ရရှိပြီး
        ရေရှည် Customer ဖြစ်လာတဲ့အထိ ဆောင်ရွက်ရတဲ့ လုပ်ငန်းစဉ် ဖြစ်ပါတယ်။
        </p>

        <h3>1️⃣ Prospecting</h3>

        <p>
        Potential Customer တွေကို ရှာဖွေခြင်း ဖြစ်ပါတယ်။
        Existing Database, Referral, Market Visit, Social Media,
        Networking စတာတွေကနေ Prospect ရနိုင်ပါတယ်။
        </p>

        <h3>2️⃣ Approach</h3>

        <p>
        Customer နဲ့ ပထမဆုံး ဆက်သွယ်တဲ့အဆင့် ဖြစ်ပါတယ်။
        ဒီအဆင့်မှာ Customer ကို Product ရောင်းဖို့ အလျင်မလုပ်ဘဲ
        ယုံကြည်မှုရအောင် စတင်ဆက်သွယ်သင့်ပါတယ်။
        </p>

        <h3>3️⃣ Need Analysis</h3>

        <p>
        Customer ဘာလိုချင်သလဲ၊ ဘာပြဿနာရှိသလဲ၊
        ဘာကို ဦးစားပေးသလဲဆိုတာ မေးမြန်းရပါတယ်။
        </p>

        <h3>4️⃣ Presentation</h3>

        <p>
        Customer ရဲ့ Need နဲ့ ကိုက်ညီတဲ့ Product Value ကို
        ရှင်းပြရပါတယ်။
        </p>

        <h3>5️⃣ Objection Handling</h3>

        <p>
        Customer က Price, Quality, Timing, Competitor စတဲ့
        အကြောင်းပြချက်တွေနဲ့ မဝယ်ချင်တဲ့အခါ
        အကြောင်းရင်းအမှန်ကို ရှာဖွေပြီး ဖြေရှင်းရပါတယ်။
        </p>

        <h3>6️⃣ Closing</h3>

        <p>
        Customer ရဲ့ Buying Decision ကို Order အဖြစ်ပြောင်းတဲ့အဆင့် ဖြစ်ပါတယ်။
        </p>

        <h3>7️⃣ Follow-up</h3>

        <p>
        ရောင်းပြီးတဲ့နောက် Customer Satisfaction,
        Repeat Order နဲ့ Relationship ကို စောင့်ရှောက်ရပါတယ်။
        </p>

        <div class="lesson-formula">
          Prospect → Qualify → Need → Solution → Objection → Close → Retain
        </div>

        <h3>👔 Manager Thinking</h3>

        <p>
        Sales Target မပြည့်ရင် “Salesperson မကြိုးစားဘူး” လို့
        တစ်ချက်တည်းမဆုံးဖြတ်ဘဲ Funnel ရဲ့ ဘယ်အဆင့်မှာ
        Drop ဖြစ်နေလဲဆိုတာ အရင်ရှာရပါတယ်။
        </p>
      `,

      action: [
        "ကိုယ့် Sales Funnel ကိုရေးပါ။",
        "Prospect ဘယ်နှယောက်ရှိလဲတွက်ပါ။",
        "Customer ဖြစ်သွားသူ ဘယ်နှယောက်ရှိလဲတွက်ပါ။",
        "Conversion Rate တွက်ပါ။"
      ],

      quiz: [
        {
          q: "Sales Process ရဲ့ အဆင့်တွေကဘာတွေလဲ?",
          a: "Prospecting, Approach, Need Analysis, Presentation, Objection Handling, Closing, Follow-up တို့ ဖြစ်ပါတယ်။"
        },
        {
          q: "Customer မဝယ်တဲ့အခါ ဘာလုပ်သင့်လဲ?",
          a: "Customer ရဲ့ အမှန်တကယ် Objection ကို ရှာဖွေပြီး ဖြေရှင်းသင့်ပါတယ်။"
        }
      ]
    },


    {
      id: "sm-03",
      lessonNo: 3,
      icon: "🔎",
      title: "Prospecting",
      burmeseTitle: "Customer အသစ်ရှာဖွေခြင်း",
      duration: "30 min",

      objective: [
        "Prospecting ဆိုတာဘာလဲ နားလည်ရန်",
        "Potential Customer ရှာဖွေနည်းများ သိရန်",
        "Lead Quality ကို ခွဲခြားနိုင်ရန်"
      ],

      content: `
        <h3>🔎 Prospecting ဆိုတာဘာလဲ?</h3>

        <p>
        ကိုယ့် Product ကို ဝယ်ယူနိုင်ခြေရှိတဲ့ Potential Customer
        တွေကို ရှာဖွေစုဆောင်းတဲ့ လုပ်ငန်းစဉ်ကို Prospecting လို့ခေါ်ပါတယ်။
        </p>

        <h3>📋 Lead Sources</h3>

        <ul class="lesson-list">
          <li>Existing Customer Referral</li>
          <li>Market Visit</li>
          <li>Phone Call</li>
          <li>Social Media</li>
          <li>Website</li>
          <li>Business Networking</li>
          <li>Distributor / Dealer</li>
          <li>Customer Database</li>
        </ul>

        <h3>⭐ Lead Quality</h3>

        <p>
        Customer အားလုံးကို တူညီတဲ့အဆင့်နဲ့ မကြည့်သင့်ပါဘူး။
        </p>

        <div class="lesson-example">
          <strong>Hot Lead</strong> — အခုဝယ်ဖို့ စိတ်ဝင်စားနေသူ<br><br>
          <strong>Warm Lead</strong> — စိတ်ဝင်စားပေမယ့် ဆုံးဖြတ်ချက်မချရသေးသူ<br><br>
          <strong>Cold Lead</strong> — လက်ရှိ ဝယ်ယူရန်အလားအလာနည်းသူ
        </div>

        <h3>📊 Prospecting KPI</h3>

        <ul class="lesson-list">
          <li>New Leads</li>
          <li>Qualified Leads</li>
          <li>Customer Visits</li>
          <li>Calls</li>
          <li>Appointments</li>
          <li>Conversion Rate</li>
        </ul>

        <h3>👔 Manager Thinking</h3>

        <p>
        Sales Team က Customer အသစ်မရဘူးဆိုရင်
        “မကြိုးစားဘူး” လို့ မဆုံးဖြတ်ခင် Prospecting Activity
        ဘယ်လောက်လုပ်နေလဲဆိုတာ Data နဲ့စစ်ရပါမယ်။
        </p>
      `,

      action: [
        "Potential Customer 50 ယောက်စာရင်းလုပ်ပါ။",
        "Hot / Warm / Cold ခွဲပါ။",
        "တစ်နေ့ Prospect အသစ်ဘယ်နှယောက်ရှာမလဲ သတ်မှတ်ပါ။",
        "Weekly Prospecting KPI သတ်မှတ်ပါ။"
      ],

      quiz: [
        {
          q: "Prospecting ဆိုတာဘာလဲ?",
          a: "Potential Customer တွေကို ရှာဖွေစုဆောင်းခြင်း ဖြစ်ပါတယ်။"
        },
        {
          q: "Hot Lead ဆိုတာဘာလဲ?",
          a: "ဝယ်ယူဖို့ စိတ်ဝင်စားမှုမြင့်ပြီး အချိန်တိုအတွင်း ဝယ်နိုင်ခြေရှိတဲ့ Lead ဖြစ်ပါတယ်။"
        }
      ]
    },


    {
      id: "sm-04",
      lessonNo: 4,
      icon: "🧠",
      title: "Customer Needs Analysis",
      burmeseTitle: "Customer လိုအပ်ချက်ကို ရှာဖွေခြင်း",
      duration: "35 min",

      objective: [
        "Customer Need ကို ရှာဖွေနိုင်ရန်",
        "Professional Questioning Skills တိုးတက်ရန်",
        "Customer Problem နဲ့ Solution ချိတ်ဆက်နိုင်ရန်"
      ],

      content: `
        <h3>🧠 Need Analysis ဆိုတာဘာလဲ?</h3>

        <p>
        Customer က ဘာလိုအပ်နေသလဲ၊ ဘာပြဿနာရှိသလဲ၊
        ဘာကို ဦးစားပေးသလဲဆိုတာ ရှာဖွေတဲ့အဆင့် ဖြစ်ပါတယ်။
        </p>

        <h3>❓ မေးခွန်းအမျိုးအစားများ</h3>

        <p><strong>Open Question</strong></p>

        <p>
        Customer ကို အသေးစိတ်ပြောစေတဲ့ မေးခွန်းဖြစ်ပါတယ်။
        </p>

        <div class="lesson-example">
          “လက်ရှိ သင့်လုပ်ငန်းမှာ ဘာအခက်အခဲတွေ ကြုံနေရပါသလဲ?”
        </div>

        <p><strong>Probing Question</strong></p>

        <p>
        Customer ပြောတဲ့အကြောင်းအရာကို ပိုမိုနက်ရှိုင်းစွာ
        သိနိုင်ဖို့ ထပ်မေးတဲ့မေးခွန်း ဖြစ်ပါတယ်။
        </p>

        <div class="lesson-example">
          “အဲဒီပြဿနာကြောင့် Business အပေါ် ဘယ်လိုသက်ရောက်မှုရှိပါသလဲ?”
        </div>

        <h3>🎯 Need → Problem → Impact → Solution</h3>

        <div class="lesson-flow">
          <div>Need</div>
          <span>→</span>
          <div>Problem</div>
          <span>→</span>
          <div>Impact</div>
          <span>→</span>
          <div>Solution</div>
        </div>

        <h3>👔 Sales Manager Thinking</h3>

        <p>
        Salesperson က Customer ပြောတာကို နားထောင်တာထက်
        ကိုယ်တိုင်ပဲ အများကြီးပြောနေရင် Need Analysis အားနည်းနေပါတယ်။
        </p>

        <p>
        Professional Salesperson ရဲ့ အရေးကြီးဆုံး Skill တစ်ခုက
        <strong>Active Listening</strong> ဖြစ်ပါတယ်။
        </p>
      `,

      action: [
        "Customer ကိုမေးမယ့် Open Questions 10 ခုရေးပါ။",
        "Customer Problem 3 ခုရွေးပါ။",
        "Problem တစ်ခုချင်းစီရဲ့ Business Impact ရေးပါ။",
        "Solution တစ်ခုစီ ချိတ်ဆက်ပါ။"
      ],

      quiz: [
        {
          q: "Need Analysis ရဲ့ ရည်ရွယ်ချက်ကဘာလဲ?",
          a: "Customer ရဲ့ Need, Problem နဲ့ Priority ကို နားလည်ဖို့ ဖြစ်ပါတယ်။"
        },
        {
          q: "Professional Salesperson ရဲ့ အရေးကြီးတဲ့ Skill တစ်ခုကဘာလဲ?",
          a: "Active Listening ဖြစ်ပါတယ်။"
        }
      ]
    },


    {
      id: "sm-05",
      lessonNo: 5,
      icon: "🎯",
      title: "Sales Target",
      burmeseTitle: "Sales Target သတ်မှတ်ခြင်း",
      duration: "35 min",

      objective: [
        "Sales Target ဆိုတာဘာလဲ နားလည်ရန်",
        "Monthly / Weekly / Daily Target ခွဲခြားနိုင်ရန်",
        "Target Gap ကို ခွဲခြမ်းနိုင်ရန်"
      ],

      content: `
        <h3>🎯 Sales Target ဆိုတာဘာလဲ?</h3>

        <p>
        သတ်မှတ်ထားတဲ့ ကာလအတွင်း Salesperson သို့မဟုတ် Sales Team
        ရရှိရမယ့် Sales Result ကို Sales Target လို့ခေါ်ပါတယ်။
        </p>

        <h3>📅 Target အမျိုးအစား</h3>

        <ul class="lesson-list">
          <li>Annual Target</li>
          <li>Quarterly Target</li>
          <li>Monthly Target</li>
          <li>Weekly Target</li>
          <li>Daily Target</li>
          <li>Individual Target</li>
          <li>Team Target</li>
        </ul>

        <h3>📊 Target ဥပမာ</h3>

        <div class="lesson-example">
          Monthly Target = 1,000 သိန်း<br>
          Actual Sales = 750 သိန်း<br><br>
          Achievement = 75%<br>
          Gap = 250 သိန်း
        </div>

        <div class="lesson-formula">
          Achievement % = Actual Sales ÷ Target × 100
        </div>

        <h3>🔍 Target Gap Analysis</h3>

        <p>
        Target မပြည့်ရင် Gap ရဲ့ အကြောင်းရင်းကို ရှာရပါတယ်။
        </p>

        <ul class="lesson-list">
          <li>Customer မလုံလောက်ခြင်း</li>
          <li>Stock ပြတ်ခြင်း</li>
          <li>Price ပြဿနာ</li>
          <li>Competitor အားသာခြင်း</li>
          <li>Salesperson Productivity နည်းခြင်း</li>
          <li>Market Demand ကျခြင်း</li>
        </ul>

        <h3>👔 Manager Thinking</h3>

        <p>
        Target မပြည့်တာကို လူကိုအပြစ်တင်တာထက်
        Gap ဖြစ်ရတဲ့ Root Cause ကို ရှာဖွေပြီး
        Corrective Action ပြုလုပ်ရပါမယ်။
        </p>
      `,

      action: [
        "Monthly Sales Target သတ်မှတ်ပါ။",
        "Weekly Target ခွဲပါ။",
        "Daily Target ခွဲပါ။",
        "Achievement % တွက်ပါ။",
        "Gap ဖြစ်ရတဲ့ အကြောင်းရင်း ၃ ခုရှာပါ။"
      ],

      quiz: [
        {
          q: "Achievement % ကို ဘယ်လိုတွက်မလဲ?",
          a: "Actual Sales ÷ Target × 100 ဖြစ်ပါတယ်။"
        },
        {
          q: "Target မပြည့်တဲ့အခါ ဘာလုပ်သင့်လဲ?",
          a: "Gap ရဲ့ Root Cause ကို ရှာပြီး Corrective Action ပြုလုပ်သင့်ပါတယ်။"
        }
      ]
    },


    {
      id: "sm-06",
      lessonNo: 6,
      icon: "📅",
      title: "Sales Planning",
      burmeseTitle: "Sales Planning",
      duration: "35 min",

      objective: [
        "Sales Plan ရေးဆွဲနိုင်ရန်",
        "Target ကို Field Action အဖြစ် ပြောင်းနိုင်ရန်",
        "Customer / Territory Plan ပြုလုပ်နိုင်ရန်"
      ],

      content: `
        <h3>📅 Sales Planning ဆိုတာဘာလဲ?</h3>

        <p>
        Sales Target ကို ရရှိအောင် ဘယ် Customer ကို၊
        ဘယ် Product ကို၊ ဘယ်အချိန်မှာ၊ ဘယ်လိုရောင်းမလဲဆိုတာ
        ကြိုတင်စီမံခြင်း ဖြစ်ပါတယ်။
        </p>

        <h3>🗺️ Sales Plan ရဲ့ အဓိကအချက်များ</h3>

        <ul class="lesson-list">
          <li>Sales Target</li>
          <li>Customer Target</li>
          <li>Product Focus</li>
          <li>Territory</li>
          <li>Sales Activities</li>
          <li>Resource</li>
          <li>KPI</li>
          <li>Review</li>
        </ul>

        <h3>🎯 Target → Field Execution</h3>

        <div class="lesson-flow">
          <div>Target</div>
          <span>→</span>
          <div>Customer</div>
          <span>→</span>
          <div>Activity</div>
          <span>→</span>
          <div>Order</div>
          <span>→</span>
          <div>Revenue</div>
        </div>

        <h3>👔 Manager Thinking</h3>

        <p>
        Target ကို Excel ထဲမှာပဲ ထည့်ထားပြီး Field Action မရှိရင်
        Sales Plan မဟုတ်ပါဘူး။
        </p>

        <p>
        Professional Sales Manager က Target ကို
        Daily Activity, Customer Visit, Order Conversion နဲ့
        ချိတ်ဆက်ပေးရပါတယ်။
        </p>
      `,

      action: [
        "Monthly Sales Plan ရေးပါ။",
        "Top Customer 20 ယောက်ရွေးပါ။",
        "Customer Visit Plan ဆွဲပါ။",
        "Product Focus သတ်မှတ်ပါ။",
        "Weekly Review Schedule သတ်မှတ်ပါ။"
      ],

      quiz: [
        {
          q: "Sales Planning ရဲ့ အဓိကရည်ရွယ်ချက်ကဘာလဲ?",
          a: "Sales Target ရရှိအောင် Customer, Product, Territory နဲ့ Activities ကို စနစ်တကျ စီမံခြင်း ဖြစ်ပါတယ်။"
        }
      ]
    },


    {
      id: "sm-07",
      lessonNo: 7,
      icon: "📈",
      title: "Sales Forecasting",
      burmeseTitle: "Sales Forecasting",
      duration: "35 min",

      objective: [
        "Sales Forecast ဆိုတာဘာလဲ နားလည်ရန်",
        "Forecast ပြုလုပ်နိုင်ရန်",
        "Forecast Accuracy ကို တိုးတက်အောင်လုပ်ရန်"
      ],

      content: `
        <h3>📈 Sales Forecasting ဆိုတာဘာလဲ?</h3>

        <p>
        အနာဂတ်မှာ ဘယ်လောက် Sales ရနိုင်မလဲဆိုတာ
        ရှိပြီးသား Data နဲ့ Market Information တွေကို အသုံးပြုပြီး
        ခန့်မှန်းခြင်း ဖြစ်ပါတယ်။
        </p>

        <h3>📊 Forecast ပြုလုပ်ရာတွင် ကြည့်ရမည့် Data</h3>

        <ul class="lesson-list">
          <li>Previous Sales</li>
          <li>Current Pipeline</li>
          <li>Customer Order</li>
          <li>Market Trend</li>
          <li>Seasonality</li>
          <li>Promotion</li>
          <li>Competitor Activity</li>
          <li>Stock Availability</li>
        </ul>

        <h3>🔢 Simple Forecast</h3>

        <div class="lesson-example">
          ပြီးခဲ့တဲ့ 3 လ Sales =<br>
          800 သိန်း / 900 သိန်း / 1,000 သိန်း<br><br>
          Average Sales = 900 သိန်း<br><br>
          ဒါကို Base Forecast အဖြစ် အသုံးပြုနိုင်ပါတယ်။
        </div>

        <h3>⚠️ Forecast Error</h3>

        <p>
        Forecast အမြဲမှန်ဖို့ မလွယ်ပါဘူး။
        ဒါပေမယ့် Data ကောင်းလာလေလေ Forecast Accuracy
        တိုးလာနိုင်ပါတယ်။
        </p>

        <h3>👔 Manager Thinking</h3>

        <p>
        “ဒီလ ဘယ်လောက်ရမယ်ထင်လဲ?” ဆိုတာ Forecast မဟုတ်ပါဘူး။
        Data, Pipeline, Customer Commitment နဲ့ Market Condition
        အပေါ် အခြေခံပြီး ခန့်မှန်းမှ Professional Forecast ဖြစ်ပါတယ်။
        </p>
      `,

      action: [
        "ပြီးခဲ့တဲ့ 6 လ Sales Data စုပါ။",
        "Monthly Average တွက်ပါ။",
        "Current Pipeline စုပါ။",
        "Next Month Forecast ပြုလုပ်ပါ။",
        "Actual နဲ့ Forecast ကို နောက်လမှာ ပြန်နှိုင်းယှဉ်ပါ။"
      ],

      quiz: [
        {
          q: "Sales Forecasting ဆိုတာဘာလဲ?",
          a: "အနာဂတ် Sales Result ကို Data နဲ့ Market Information အပေါ်အခြေခံပြီး ခန့်မှန်းခြင်း ဖြစ်ပါတယ်။"
        },
        {
          q: "Forecast Accuracy တိုးဖို့ ဘာလိုအပ်သလဲ?",
          a: "မှန်ကန်တဲ့ Sales Data၊ Pipeline နဲ့ Market Information လိုအပ်ပါတယ်။"
        }
      ]
    },


    {
      id: "sm-08",
      lessonNo: 8,
      icon: "📊",
      title: "Sales KPI",
      burmeseTitle: "Sales KPI နှင့် Performance",
      duration: "35 min",

      objective: [
        "Sales KPI ဆိုတာဘာလဲ နားလည်ရန်",
        "အရေးကြီးသော Sales KPI များကို သိရန်",
        "KPI ကို Performance Management တွင် အသုံးပြုနိုင်ရန်"
      ],

      content: `
        <h3>📊 KPI ဆိုတာဘာလဲ?</h3>

        <p>
        KPI ဆိုတာ Key Performance Indicator ဖြစ်ပြီး
        အလုပ်ရဲ့ Performance ကို တိုင်းတာပေးတဲ့ အဓိကညွှန်းကိန်း ဖြစ်ပါတယ်။
        </p>

        <h3>🎯 Sales KPI များ</h3>

        <ul class="lesson-list">
          <li>Sales Revenue</li>
          <li>Sales Volume</li>
          <li>Achievement %</li>
          <li>New Customer</li>
          <li>Conversion Rate</li>
          <li>Strike Rate</li>
          <li>Average Order Value</li>
          <li>Productivity</li>
          <li>Customer Retention</li>
          <li>Gross Margin</li>
        </ul>

        <h3>📌 Achievement %</h3>

        <div class="lesson-formula">
          Achievement % = Actual ÷ Target × 100
        </div>

        <h3>📌 Conversion Rate</h3>

        <div class="lesson-formula">
          Conversion Rate = Customers Won ÷ Qualified Leads × 100
        </div>

        <h3>📌 Sales Productivity</h3>

        <p>
        Salesperson တစ်ယောက်က သတ်မှတ်ထားတဲ့ အချိန်အတွင်း
        ဘယ်လောက် Output ထုတ်ပေးနိုင်သလဲဆိုတာ Productivity နဲ့ တိုင်းနိုင်ပါတယ်။
        </p>

        <h3>👔 Manager Thinking</h3>

        <p>
        KPI အများကြီးထားတာထက် Business Result ကို တကယ်သက်ရောက်စေတဲ့
        KPI အနည်းငယ်ကို ရွေးပြီး စနစ်တကျ စောင့်ကြည့်တာ ပိုကောင်းပါတယ်။
        </p>
      `,

      action: [
        "Sales Team အတွက် KPI 5 ခုရွေးပါ။",
        "KPI တစ်ခုချင်းစီရဲ့ Target သတ်မှတ်ပါ။",
        "Weekly Dashboard ပြုလုပ်ပါ။",
        "Low Performance KPI 2 ခုရွေးပြီး Action Plan ပြုလုပ်ပါ။"
      ],

      quiz: [
        {
          q: "KPI ရဲ့ အဓိပ္ပါယ်ကဘာလဲ?",
          a: "Key Performance Indicator ဖြစ်ပြီး Performance ကို တိုင်းတာတဲ့ အဓိကညွှန်းကိန်း ဖြစ်ပါတယ်။"
        },
        {
          q: "Sales Manager အတွက် KPI ဘာကြောင့်အရေးကြီးသလဲ?",
          a: "Performance ကို Data နဲ့ တိုင်းတာပြီး Gap နဲ့ Corrective Action ကို သတ်မှတ်နိုင်လို့ ဖြစ်ပါတယ်။"
        }
      ]
    },


    {
      id: "sm-09",
      lessonNo: 9,
      icon: "👥",
      title: "Sales Team Management",
      burmeseTitle: "Sales Team စီမံခန့်ခွဲခြင်း",
      duration: "40 min",

      objective: [
        "Sales Team ကို စနစ်တကျ စီမံနိုင်ရန်",
        "Target Assignment ပြုလုပ်နိုင်ရန်",
        "Coaching နှင့် Performance Review လုပ်နိုင်ရန်"
      ],

      content: `
        <h3>👥 Sales Team Management ဆိုတာဘာလဲ?</h3>

        <p>
        Sales Manager တစ်ယောက်ရဲ့ အဓိကတာဝန်က ကိုယ်တိုင်အများကြီးရောင်းဖို့
        မဟုတ်ပါဘူး။ Team ကို Result ရအောင် စီမံပေးနိုင်ဖို့ ဖြစ်ပါတယ်။
        </p>

        <h3>🎯 Team Management Framework</h3>

        <div class="lesson-flow">
          <div>Set Expectation</div>
          <span>→</span>
          <div>Assign Target</div>
          <span>→</span>
          <div>Coach</div>
          <span>→</span>
          <div>Review</div>
          <span>→</span>
          <div>Improve</div>
        </div>

        <h3>1️⃣ Clear Expectations</h3>

        <p>
        Team Member တစ်ယောက်ချင်းစီ ဘာလုပ်ရမလဲ၊
        ဘာ Result ရရမလဲဆိုတာ ရှင်းရှင်းလင်းလင်း သိရပါမယ်။
        </p>

        <h3>2️⃣ Target Assignment</h3>

        <p>
        လူတိုင်းကို Target တူတူပေးတာထက် Territory,
        Customer Base, Experience နဲ့ Market Potential ကို
        ထည့်စဉ်းစားသင့်ပါတယ်။
        </p>

        <h3>3️⃣ Coaching</h3>

        <p>
        Manager က အမိန့်ပေးရုံနဲ့ မပြီးပါဘူး။
        Salesperson ဘာမှာအားနည်းနေလဲ ရှာပြီး
        Field Coaching ပြုလုပ်ပေးရပါတယ်။
        </p>

        <h3>4️⃣ Review & Feedback</h3>

        <p>
        Performance Review ကို အပြစ်တင်ဖို့ မသုံးဘဲ
        Improvement အတွက် အသုံးပြုသင့်ပါတယ်။
        </p>

        <h3>👔 Professional Leadership</h3>

        <p>
        ကောင်းမွန်တဲ့ Sales Manager ဟာ Micromanagement မလုပ်ဘဲ
        Clear Expectation, Coaching, Feedback နဲ့ Accountability
        ကို တည်ဆောက်ပေးပါတယ်။
        </p>
      `,

      action: [
        "Team Member တစ်ယောက်ချင်းစီရဲ့ Target ရေးပါ။",
        "Performance Gap တစ်ခုစီ ရှာပါ။",
        "တစ်ယောက်ချင်းစီအတွက် Coaching Plan ရေးပါ။",
        "Weekly One-on-One Review ပြုလုပ်ပါ။"
      ],

      quiz: [
        {
          q: "Sales Manager ရဲ့ အဓိကတာဝန်ကဘာလဲ?",
          a: "Team ကို စနစ်တကျ စီမံပြီး Business Result ရရှိအောင် လမ်းညွှန်ပေးခြင်း ဖြစ်ပါတယ်။"
        },
        {
          q: "Coaching ရဲ့ ရည်ရွယ်ချက်ကဘာလဲ?",
          a: "Salesperson ရဲ့ Skill နဲ့ Performance တိုးတက်လာအောင် ကူညီပေးခြင်း ဖြစ်ပါတယ်။"
        }
      ]
    },


    {
      id: "sm-10",
      lessonNo: 10,
      icon: "🏆",
      title: "Sales Performance Management",
      burmeseTitle: "Sales Performance စီမံခန့်ခွဲခြင်း",
      duration: "40 min",

      objective: [
        "Sales Performance ကို ခွဲခြမ်းနိုင်ရန်",
        "Performance Gap ရှာနိုင်ရန်",
        "Corrective Action Plan ပြုလုပ်နိုင်ရန်"
      ],

      content: `
        <h3>🏆 Sales Performance Management</h3>

        <p>
        Sales Performance Management ဆိုတာ Sales Team ရဲ့
        လက်ရှိ Performance ကို တိုင်းတာပြီး Target နဲ့ နှိုင်းယှဉ်ကာ
        Gap ကို ရှာပြီး Improvement Action ပြုလုပ်တဲ့ Management Process ဖြစ်ပါတယ်။
        </p>

        <h3>📊 Performance Review Framework</h3>

        <div class="lesson-flow">
          <div>Target</div>
          <span>→</span>
          <div>Actual</div>
          <span>→</span>
          <div>Gap</div>
          <span>→</span>
          <div>Root Cause</div>
          <span>→</span>
          <div>Action</div>
          <span>→</span>
          <div>Review</div>
        </div>

        <h3>🔍 Root Cause Analysis</h3>

        <p>
        Performance နိမ့်တဲ့အခါ လူကိုပဲ အပြစ်တင်မယ့်အစား
        အကြောင်းရင်းကို ရှာဖွေရပါမယ်။
        </p>

        <ul class="lesson-list">
          <li>Skill Gap</li>
          <li>Knowledge Gap</li>
          <li>Activity Gap</li>
          <li>Customer Gap</li>
          <li>Territory Gap</li>
          <li>Product Gap</li>
          <li>Stock Gap</li>
          <li>Motivation Gap</li>
        </ul>

        <h3>🛠️ Corrective Action</h3>

        <p>
        Root Cause သိပြီးရင် သင့်တော်တဲ့ Action ကို သတ်မှတ်ရပါမယ်။
        </p>

        <div class="lesson-example">
          Skill Gap → Coaching<br>
          Knowledge Gap → Training<br>
          Activity Gap → Daily Activity Plan<br>
          Customer Gap → New Customer Plan<br>
          Stock Gap → Supply Team နဲ့ ဖြေရှင်းခြင်း
        </div>

        <h3>🏆 High Performer</h3>

        <p>
        High Performer တွေကိုလည်း မေ့မထားသင့်ပါဘူး။
        သူတို့ရဲ့ Best Practice ကို Team အတွင်း မျှဝေပေးနိုင်ရင်
        Team Performance တစ်ခုလုံး တိုးတက်နိုင်ပါတယ်။
        </p>

        <h3>👔 Sales Manager Mindset</h3>

        <p>
        “Target မပြည့်ဘူး” ဆိုတာ Result တစ်ခုသာ ဖြစ်ပါတယ်။
        Professional Manager က “ဘာကြောင့်မပြည့်တာလဲ?”
        “ဘာလုပ်ရင် ပြည့်နိုင်မလဲ?” ဆိုတာကို ဆက်မေးပါတယ်။
        </p>

        <div class="lesson-formula">
          Performance Management = Measure → Diagnose → Coach → Act → Review
        </div>
      `,

      action: [
        "Sales Team ရဲ့ Target vs Actual Report ပြုလုပ်ပါ။",
        "Performance Gap ရှာပါ။",
        "Root Cause တစ်ခုချင်းစီ ရှာပါ။",
        "Corrective Action Plan ရေးပါ။",
        "နောက် 4 ပတ် Performance Review ပြုလုပ်ပါ။"
      ],

      quiz: [
        {
          q: "Performance Management ရဲ့ ပထမအဆင့်ကဘာလဲ?",
          a: "Target နဲ့ Actual Performance ကို တိုင်းတာခြင်း ဖြစ်ပါတယ်။"
        },
        {
          q: "Performance Gap ဖြစ်တဲ့အခါ ဘာလုပ်သင့်လဲ?",
          a: "Root Cause ရှာပြီး သင့်တော်တဲ့ Corrective Action ပြုလုပ်သင့်ပါတယ်။"
        },
        {
          q: "High Performer ကို ဘယ်လိုအသုံးချနိုင်သလဲ?",
          a: "သူတို့ရဲ့ Best Practice ကို Team အတွင်း မျှဝေပြီး အခြား Team Members တွေကို Coaching လုပ်ပေးနိုင်ပါတယ်။"
        }
      ]
    }

  ];


  /* =========================================================
     STORAGE
     ========================================================= */

  const STORAGE_KEY =
    "aung_business_academy_sales_management_completed_v1";

  function getCompleted() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (e) {
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


  /* =========================================================
     COURSE API
     ========================================================= */

  window.AungBusinessAcademy =
    window.AungBusinessAcademy || {};

  window.AungBusinessAcademy.SALES_COURSE =
    SALES_COURSE;

  window.AungBusinessAcademy.SALES_LESSONS =
    SALES_LESSONS;

  window.AungBusinessAcademy.getSalesProgress =
    function () {

      const completed = getCompleted();

      const done = SALES_LESSONS.filter(function (lesson) {
        return completed.includes(lesson.id);
      }).length;

      return {
        total: SALES_LESSONS.length,
        completed: done,
        percent: Math.round(
          (done / SALES_LESSONS.length) * 100
        )
      };
    };


  /* =========================================================
     COMPLETE LESSON
     ========================================================= */

  window.AungBusinessAcademy.completeSalesLesson =
    function (id) {

      const completed = getCompleted();

      if (!completed.includes(id)) {
        completed.push(id);
        saveCompleted(completed);
      }

      const lesson =
        SALES_LESSONS.find(function (item) {
          return item.id === id;
        });

      if (lesson) {
        alert(
          "✓ Lesson " +
          lesson.lessonNo +
          " ပြီးဆုံးပါပြီ။"
        );
      }

    };


  /* =========================================================
     FIND LESSON
     ========================================================= */

  window.AungBusinessAcademy.getSalesLesson =
    function (id) {

      return SALES_LESSONS.find(function (lesson) {
        return lesson.id === id;
      });

    };


  /* =========================================================
     INIT
     ========================================================= */

  console.log(
    "Aung Business Academy — Sales Management loaded:",
    SALES_LESSONS.length,
    "lessons"
  );

})();
