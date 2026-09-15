/* =========================================================
   AUNG BUSINESS ACADEMY
   SALES MANAGEMENT MASTERy
   VERSION 3.0
   15 PROFESSIONAL BURMESE LESSONS
   ========================================================= */

(function () {
  "use strict";

  window.AungBusinessAcademy =
    window.AungBusinessAcademy || {};

  window.AungBusinessAcademy.COURSES =
    window.AungBusinessAcademy.COURSES || [];

  const STORAGE_KEY =
    "aung_business_academy_sales_management_completed_v1";

  const SALES_COURSE = {
    id: "sales-management",
    category: "SALES",
    icon: "🎯",
    title: "Sales Management Mastery",
    burmeseTitle: "အရောင်းစီမံခန့်ခွဲမှု",
    description:
      "Sales Strategy, Target, Planning, Forecasting, KPI, Team Management နှင့် Sales Performance ကို Manager Level ဖြင့် လေ့လာနိုင်သော Professional Sales Course",
    lessons: [

      /* =====================================================
         LESSON 01
         ===================================================== */

      {
        id: "sm-01",
        title: "Sales Management Fundamentals",
        burmeseTitle: "အရောင်းစီမံခန့်ခွဲမှု အခြေခံများ",
        objective:
          "Sales Manager တစ်ယောက်အနေဖြင့် Sales Management ၏ အဓိကတာဝန်၊ ရည်ရွယ်ချက်နှင့် Manager Thinking ကို နားလည်ရန်။",
        content: `
<h3>၁။ Sales Management ဆိုတာဘာလဲ?</h3>

<p>
Sales Management ဆိုသည်မှာ ရောင်းအားတိုးတက်စေရန်
လူ (People)၊ နံပါတ် (Numbers) နှင့် လုပ်ငန်းဆောင်ရွက်မှု
(Execution) တို့ကို စနစ်တကျ စီမံခန့်ခွဲခြင်းဖြစ်သည်။
</p>

<p>
Sales Manager ၏အလုပ်သည် ကိုယ်တိုင်ရောင်းခြင်းထက်
Sales Team ကို ရောင်းအားရရှိအောင် ဦးဆောင်ခြင်းဖြစ်သည်။
</p>

<h3>၂။ Sales Manager ၏ အဓိကတာဝန်များ</h3>

<ul>
<li>Sales Target သတ်မှတ်ခြင်း</li>
<li>Sales Plan ရေးဆွဲခြင်း</li>
<li>Territory နှင့် Customer Planning</li>
<li>Sales Team ကို Coaching ပြုလုပ်ခြင်း</li>
<li>KPI စောင့်ကြည့်ခြင်း</li>
<li>Sales Forecast ပြုလုပ်ခြင်း</li>
<li>Market နှင့် Competitor Analysis</li>
<li>Distributor / Customer Management</li>
<li>Performance Review ပြုလုပ်ခြင်း</li>
</ul>

<h3>၃။ People + Numbers + Execution</h3>

<p>
Professional Sales Manager တစ်ယောက်သည်
လူကိုသာကြည့်၍ မရသကဲ့သို့ နံပါတ်ကိုသာကြည့်၍လည်း မရပါ။
</p>

<p>
<strong>People:</strong> Team ရဲ့ skill, motivation, discipline</p>
<p>
<strong>Numbers:</strong> Sales, Target, Achievement, Margin, KPI</p>
<p>
<strong>Execution:</strong> Visit, Distribution, Availability, Promotion</p>

<h3>Manager Thinking</h3>

<p>
"Target မပြည့်ဘူး" ဆိုတာ ပြဿနာရဲ့အဖြေမဟုတ်ပါ။
Target မပြည့်ရတဲ့ Root Cause ကို ရှာပြီး
Corrective Action ချမှတ်နိုင်ခြင်းက Manager Skill ဖြစ်သည်။
</p>
`,
        action: `
<p>
ယနေ့ သင့် Sales Team အတွက် အောက်ပါ ၃ ခုကိုရေးပါ။
</p>

<ol>
<li>လက်ရှိ Sales Target</li>
<li>လက်ရှိ Achievement</li>
<li>Target Gap ဖြစ်ရသည့် အဓိကအကြောင်းရင်း ၃ ခု</li>
</ol>
`,
        quiz: [
          {
            question: "Sales Manager ၏ အဓိကတာဝန်ကဘာလဲ?",
            answer:
              "Sales Team ကို People, Numbers, Execution သုံးခုဖြင့် ဦးဆောင်ပြီး Sales Result ရရှိအောင် စီမံခြင်းဖြစ်သည်။"
          }
        ]
      },


      /* =====================================================
         LESSON 02
         ===================================================== */

      {
        id: "sm-02",
        title: "Sales Process Management",
        burmeseTitle: "အရောင်းလုပ်ငန်းစဉ် စီမံခန့်ခွဲခြင်း",
        objective:
          "Lead မှ Customer ဖြစ်လာပြီး Repeat Customer ဖြစ်သည်အထိ Sales Process ကို စနစ်တကျ စီမံနိုင်ရန်။",
        content: `
<h3>၁။ Sales Process ဆိုတာ</h3>

<p>
Sales Process ဆိုသည်မှာ Customer တစ်ယောက်ကို
စတင်ရှာဖွေခြင်းမှ စ၍ Purchase ပြုလုပ်ပြီး
နောက်ထပ်ပြန်လည်ဝယ်ယူသည်အထိ လုပ်ဆောင်ရသော
အဆင့်ဆင့်သော လုပ်ငန်းစဉ်ဖြစ်သည်။
</p>

<h3>၂။ Professional Sales Process</h3>

<ol>
<li>Prospecting</li>
<li>Customer Qualification</li>
<li>Needs Analysis</li>
<li>Presentation</li>
<li>Objection Handling</li>
<li>Negotiation</li>
<li>Closing</li>
<li>Delivery / Fulfillment</li>
<li>Follow-up</li>
<li>Retention</li>
</ol>

<h3>၃။ Conversion Thinking</h3>

<p>
Sales Manager သည် Total Sales ကိုသာ မကြည့်ဘဲ
Process တစ်ခုချင်းစီ၏ Conversion Rate ကိုလည်း ကြည့်ရမည်။
</p>

<p>
ဥပမာ -
100 Prospects → 50 Meetings → 30 Proposals →
15 Orders ဖြစ်လျှင် ဘယ်အဆင့်မှာ Drop ဖြစ်နေသည်ကို
ရှာဖွေရမည်။
</p>

<h3>Manager KPI</h3>

<ul>
<li>Lead Conversion</li>
<li>Meeting Conversion</li>
<li>Proposal Conversion</li>
<li>Close Rate</li>
<li>Average Order Value</li>
<li>Repeat Purchase Rate</li>
</ul>
`,
        action: `
<p>
သင့်လုပ်ငန်း၏ Sales Process ကို အဆင့် ၅ မှ ၁၀ အထိ
ရေးဆွဲပြီး Customer ဘယ်အဆင့်မှာ အများဆုံးဆုံးရှုံးနေသည်ကို
ရှာပါ။
`,
        quiz: [
          {
            question: "Sales Process ကို ဘာကြောင့်တိုင်းတာရသလဲ?",
            answer:
              "Customer ဘယ်အဆင့်မှာ Drop ဖြစ်နေသည်ကို သိပြီး Conversion တိုးတက်အောင် ပြုပြင်နိုင်ရန်ဖြစ်သည်။"
          }
        ]
      },


      /* =====================================================
         LESSON 03
         ===================================================== */

      {
        id: "sm-03",
        title: "Prospecting & Lead Generation",
        burmeseTitle: "Customer ရှာဖွေခြင်းနှင့် Lead Generation",
        objective:
          "Sales Pipeline မပြတ်စေရန် Prospect အသစ်များကို စနစ်တကျရှာဖွေတည်ဆောက်နိုင်ရန်။",
        content: `
<h3>၁။ Prospect ဆိုတာ</h3>

<p>
Prospect ဆိုသည်မှာ သင့် Product သို့မဟုတ် Service ကို
ဝယ်ယူနိုင်ခြေရှိသော Potential Customer ဖြစ်သည်။
</p>

<h3>၂။ Lead Source များ</h3>

<ul>
<li>Existing Customer Referral</li>
<li>Market Visit</li>
<li>Distributor Network</li>
<li>Social Media</li>
<li>Website / Inquiry</li>
<li>Events</li>
<li>Cold Calling</li>
<li>Business Networking</li>
</ul>

<h3>၃။ Lead Quality</h3>

<p>
Lead အများကြီးရှိခြင်းထက် Quality Lead ရှိခြင်းက
ပိုအရေးကြီးသည်။
</p>

<p>
Manager သည် Lead ကို
<strong>Need + Budget + Authority + Timing</strong>
အပေါ်မူတည်၍ Qualification ပြုလုပ်နိုင်ရမည်။
</p>

<h3>၄။ Pipeline Coverage</h3>

<p>
ဥပမာ Monthly Target = 100 သိန်း ဖြစ်ပြီး
Average Conversion Rate = 20% ဆိုပါက
Pipeline Value ကို Target ထက် အကြိမ်များစွာ
ပိုထားရန်လိုအပ်နိုင်သည်။
</p>
`,
        action: `
<p>
သင့် Territory တွင် Potential Customer 20 ယောက်စာ
Prospect List ပြုလုပ်ပြီး A/B/C အဆင့်ခွဲပါ။
`,
        quiz: [
          {
            question: "Lead အများကြီးရှိတာနဲ့ Sales က သေချာတိုးမလား?",
            answer:
              "မသေချာပါ။ Lead Quality, Qualification, Conversion နှင့် Follow-up တို့က အရေးကြီးသည်။"
          }
        ]
      },


      /* =====================================================
         LESSON 04
         ===================================================== */

      {
        id: "sm-04",
        title: "Customer Needs Analysis",
        burmeseTitle: "Customer လိုအပ်ချက် ခွဲခြမ်းစိတ်ဖြာခြင်း",
        objective:
          "Customer ပြောသောအရာထက် Customer ၏ တကယ့်လိုအပ်ချက်ကို ရှာဖွေနိုင်ရန်။",
        content: `
<h3>၁။ Customer Need ကို နားလည်ခြင်း</h3>

<p>
Professional Sales သည် Product ကို အရင်မရောင်းပါ။
Customer Problem ကို အရင်နားလည်သည်။
</p>

<h3>၂။ မေးခွန်းမေးနည်း</h3>

<ul>
<li>လက်ရှိ ဘာပြဿနာရှိပါသလဲ?</li>
<li>အဲဒီပြဿနာကြောင့် ဘာအကျိုးသက်ရောက်မှုရှိပါသလဲ?</li>
<li>လက်ရှိ ဘယ်လိုဖြေရှင်းနေပါသလဲ?</li>
<li>ဘာက အရေးအကြီးဆုံးလဲ?</li>
<li>ဆုံးဖြတ်ချက်ကို ဘယ်သူချမှတ်ပါသလဲ?</li>
<li>ဘယ်အချိန်မှာ ဖြေရှင်းချင်ပါသလဲ?</li>
</ul>

<h3>၃။ Feature → Benefit → Value</h3>

<p>
Feature ကိုပြောရုံဖြင့် Customer ဝယ်မည်မဟုတ်ပါ။
Feature က Customer အတွက် ဘာ Benefit ပေးနိုင်ပြီး
Business Value ဘယ်လောက်ရှိသည်ကို ရှင်းပြရမည်။
</p>

<p>
ဥပမာ -
"ဒီ Product က Feature X ပါတယ်" ထက်
"ဒီ Feature ကြောင့် သင့်လုပ်ငန်းမှာ
Cost လျော့နိုင်ပြီး Productivity တိုးနိုင်ပါတယ်"
ဟု Value အဖြစ်ပြောနိုင်ရမည်။
</p>
`,
        action: `
<p>
Customer တစ်ယောက်ကို ရွေးပြီး
Open-ended Questions ၅ ခု ပြင်ဆင်ပါ။
`,
        quiz: [
          {
            question: "Needs Analysis ရဲ့ အဓိကရည်ရွယ်ချက်ကဘာလဲ?",
            answer:
              "Customer ၏ တကယ့် Problem, Need, Priority နှင့် Business Value ကို နားလည်ရန်ဖြစ်သည်။"
          }
        ]
      },


      /* =====================================================
         LESSON 05
         ===================================================== */

      {
        id: "sm-05",
        title: "Sales Target Management",
        burmeseTitle: "Sales Target သတ်မှတ်ခြင်းနှင့် စီမံခြင်း",
        objective:
          "Company Target ကို Territory, Customer နှင့် Salesperson Level အထိ ခွဲဝေစီမံနိုင်ရန်။",
        content: `
<h3>၁။ Target ဆိုတာ</h3>

<p>
Target သည် အရောင်းအဖွဲ့၏ လုပ်ဆောင်ရမည့်
သတ်မှတ်ထားသော Business Result ဖြစ်သည်။
</p>

<h3>၂။ Target Breakdown</h3>

<p>
Annual Target → Quarterly Target →
Monthly Target → Weekly Target → Daily Activity
အဖြစ် ခွဲနိုင်သည်။
</p>

<h3>၃။ Target ကို ဘာနဲ့ခွဲမလဲ?</h3>

<ul>
<li>Territory</li>
<li>Salesperson</li>
<li>Customer</li>
<li>Product</li>
<li>Channel</li>
<li>Month</li>
</ul>

<h3>၄။ SMART Target</h3>

<ul>
<li>Specific</li>
<li>Measurable</li>
<li>Achievable</li>
<li>Relevant</li>
<li>Time-bound</li>
</ul>

<h3>Manager Thinking</h3>

<p>
Target ကို Team ကိုပေးလိုက်ခြင်းနဲ့ မပြီးပါ။
Target ရရှိရန် လိုအပ်သော Activity နှင့်
Resource ကိုလည်း ချိတ်ဆက်ပေးရမည်။
</p>
`,
        action: `
<p>
သင့် Monthly Target ကို
Salesperson / Territory / Week အလိုက် ခွဲရေးပါ။
`,
        quiz: [
          {
            question: "Target Breakdown ဘာကြောင့်လုပ်ရသလဲ?",
            answer:
              "Large Target ကို Manage လုပ်နိုင်သော အပိုင်းငယ်များအဖြစ် ပြောင်းပြီး Execution လုပ်ရန်ဖြစ်သည်။"
          }
        ]
      },


      /* =====================================================
         LESSON 06
         ===================================================== */

      {
        id: "sm-06",
        title: "Sales Planning & Territory Management",
        burmeseTitle: "Sales Planning နှင့် Territory Management",
        objective:
          "Territory တစ်ခုလုံး၏ Customer, Route, Resource နှင့် Opportunity ကို စနစ်တကျ စီမံနိုင်ရန်။",
        content: `
<h3>၁။ Sales Plan</h3>

<p>
Sales Plan ဆိုသည်မှာ Target ရရှိရန်
ဘယ်သူက၊ ဘယ်နေရာမှာ၊ ဘယ် Customer ကို၊
ဘယ်အချိန်မှာ၊ ဘယ်လိုလုပ်မည်ဆိုသည်ကို
ကြိုတင်ရေးဆွဲထားခြင်းဖြစ်သည်။
</p>

<h3>၂။ Territory Management</h3>

<ul>
<li>Customer Mapping</li>
<li>Potential Mapping</li>
<li>Route Planning</li>
<li>Visit Frequency</li>
<li>Coverage</li>
<li>Product Availability</li>
<li>Competitor Activity</li>
</ul>

<h3>၃။ PJP</h3>

<p>
Planned Journey Plan (PJP) သည် Salesperson ၏
နေ့စဉ် / အပတ်စဉ် Market Visit ကို စနစ်တကျ
စီမံရန် အသုံးပြုနိုင်သည်။
</p>

<h3>၄။ Coverage vs Productivity</h3>

<p>
Customer များများသွားရုံနှင့် မပြီးပါ။
Visit တစ်ကြိမ်လျှင် ဘာ Result ရရှိသလဲကိုလည်း
တိုင်းတာရမည်။
</p>
`,
        action: `
<p>
Territory တစ်ခုကို Customer A/B/C အလိုက်ခွဲပြီး
Visit Frequency နှင့် Route Plan ပြုလုပ်ပါ။
`,
        quiz: [
          {
            question: "Territory Management ရဲ့ ရည်ရွယ်ချက်ကဘာလဲ?",
            answer:
              "Market Coverage, Customer Opportunity နှင့် Sales Resource ကို အကောင်းဆုံးအသုံးချရန်ဖြစ်သည်။"
          }
        ]
      },


      /* =====================================================
         LESSON 07
         ===================================================== */

      {
        id: "sm-07",
        title: "Sales Forecasting",
        burmeseTitle: "Sales Forecasting",
        objective:
          "အနာဂတ် Sales Result ကို Data နှင့် Market Information အသုံးပြု၍ ခန့်မှန်းနိုင်ရန်။",
        content: `
<h3>၁။ Forecast ဆိုတာ</h3>

<p>
Sales Forecast ဆိုသည်မှာ သတ်မှတ်ထားသောကာလအတွင်း
ဖြစ်လာနိုင်မည့် Sales Result ကို ခန့်မှန်းခြင်းဖြစ်သည်။
</p>

<h3>၂။ Forecast တွင်ကြည့်ရမည့် Data</h3>

<ul>
<li>Previous Sales</li>
<li>Current Achievement</li>
<li>Open Orders</li>
<li>Pipeline</li>
<li>Customer Demand</li>
<li>Seasonality</li>
<li>Promotion</li>
<li>Competitor Activity</li>
<li>Market Trend</li>
</ul>

<h3>၃။ Forecast Accuracy</h3>

<p>
Forecast 100 သိန်းဟု ပြောပြီး Actual 70 သိန်းသာ
ရလျှင် Forecast Quality ကို ပြန်လည်စစ်ဆေးရန်လိုသည်။
</p>

<p>
Professional Manager သည်
"မျှော်လင့်တာ" နှင့် "Data အပေါ်အခြေခံပြီး ခန့်မှန်းတာ"
ကို ခွဲခြားနိုင်ရမည်။
</p>
`,
        action: `
<p>
လက်ရှိလ၏ Target၊ Achievement၊ Pipeline နှင့်
Expected Closing ကို အသုံးပြုပြီး Forecast ပြုလုပ်ပါ။
`,
        quiz: [
          {
            question: "Forecast က ဘာအတွက်အရေးကြီးသလဲ?",
            answer:
              "Management အတွက် အနာဂတ် Result နှင့် Resource / Action Planning ပြုလုပ်နိုင်ရန်ဖြစ်သည်။"
          }
        ]
      },


      /* =====================================================
         LESSON 08
         ===================================================== */

      {
        id: "sm-08",
        title: "Sales KPI & Performance Metrics",
        burmeseTitle: "Sales KPI နှင့် Performance Measurement",
        objective:
          "Sales Result ကို KPI များဖြင့် တိကျစွာတိုင်းတာပြီး Performance Gap ရှာဖွေနိုင်ရန်။",
        content: `
<h3>၁။ KPI ဆိုတာ</h3>

<p>
Key Performance Indicator (KPI) ဆိုသည်မှာ
Business Result နှင့် Execution Performance ကို
တိုင်းတာရန် အသုံးပြုသော အဓိကညွှန်းကိန်းဖြစ်သည်။
</p>

<h3>၂။ Sales KPI များ</h3>

<ul>
<li>Sales Achievement %</li>
<li>Volume</li>
<li>Revenue</li>
<li>Gross Margin</li>
<li>New Customers</li>
<li>Active Customers</li>
<li>Customer Coverage</li>
<li>Strike Rate</li>
<li>Average Order Value</li>
<li>Collection / AR</li>
</ul>

<h3>၃။ Achievement %</h3>

<p>
<strong>Achievement % = Actual Sales ÷ Target × 100</strong>
</p>

<p>
ဥပမာ Target = 100 သိန်း၊ Actual = 85 သိန်း ဆိုပါက
Achievement = 85% ဖြစ်သည်။
</p>

<h3>၄။ Leading vs Lagging KPI</h3>

<p>
Sales Revenue သည် Lagging Indicator ဖြစ်နိုင်ပြီး
Customer Visits, Calls, Proposals, New Leads စသည်တို့သည်
Leading Indicators ဖြစ်နိုင်သည်။
</p>

<p>
Manager သည် Result KPI တစ်ခုတည်းမကြည့်ဘဲ
Result ကိုဖြစ်စေသော Activity KPI များကိုပါ စောင့်ကြည့်ရမည်။
</p>
`,
        action: `
<p>
သင့် Team အတွက် Result KPI ၃ ခုနှင့်
Activity KPI ၃ ခု သတ်မှတ်ပါ။
`,
        quiz: [
          {
            question: "Leading KPI ဘာကြောင့်လိုသလဲ?",
            answer:
              "အနာဂတ် Sales Result ကိုဖြစ်စေသော Activity များကို ကြိုတင်ထိန်းချုပ်နိုင်ရန်ဖြစ်သည်။"
          }
        ]
      },


      /* =====================================================
         LESSON 09
         ===================================================== */

      {
        id: "sm-09",
        title: "Sales Team Management",
        burmeseTitle: "Sales Team Management",
        objective:
          "Sales Team ကို Clear Expectations, Coaching, Review နှင့် Accountability ဖြင့် ဦးဆောင်နိုင်ရန်။",
        content: `
<h3>၁။ Strong Sales Team</h3>

<p>
Strong Sales Team တစ်ခုတည်ဆောက်ရန်
ကောင်းမွန်သော Salesperson များရှိရုံမလုံလောက်ပါ။
System ကောင်းရန်လည်းလိုသည်။
</p>

<h3>၂။ Manager ၏ Team Management Framework</h3>

<ol>
<li>Clear Target</li>
<li>Clear Role</li>
<li>Clear KPI</li>
<li>Regular Review</li>
<li>Coaching</li>
<li>Recognition</li>
<li>Corrective Action</li>
</ol>

<h3>၃။ Micromanagement မလုပ်ဘဲ Management လုပ်ခြင်း</h3>

<p>
Manager သည် လူတိုင်းကို အချိန်တိုင်းလိုက်ကြည့်နေခြင်းထက်
Expected Result နှင့် Standard ကိုရှင်းလင်းစွာသတ်မှတ်ပြီး
Performance ကို Review လုပ်သင့်သည်။
</p>

<h3>၄။ Accountability</h3>

<p>
"ဘာကြောင့် မရတာလဲ?" ဟုသာမေးခြင်းထက်
"Next Action ဘာလုပ်မလဲ?" ဟု မေးခြင်းက
Performance Culture တည်ဆောက်ရာတွင် ပိုကောင်းသည်။
</p>
`,
        action: `
<p>
Team Member တစ်ယောက်ချင်းစီအတွက်
Target + KPI + Development Need ကိုရေးပါ။
`,
        quiz: [
          {
            question: "Manager က ဘာကြောင့် Micromanagement မလုပ်သင့်သလဲ?",
            answer:
              "Ownership နှင့် Accountability လျော့နည်းစေပြီး Team ကို မိမိကိုယ်တိုင်ဆုံးဖြတ်နိုင်စွမ်း လျော့စေနိုင်သောကြောင့်ဖြစ်သည်။"
          }
        ]
      },


      /* =====================================================
         LESSON 10
         ===================================================== */

      {
        id: "sm-10",
        title: "Sales Performance Management",
        burmeseTitle: "Sales Performance Management",
        objective:
          "Salesperson Performance ကို Data, Review, Coaching နှင့် Action Plan ဖြင့် တိုးတက်အောင် စီမံနိုင်ရန်။",
        content: `
<h3>၁။ Performance Management</h3>

<p>
Performance Management သည် လကုန်တွင် Result စစ်ရုံမဟုတ်ပါ။
Goal Setting → Execution → Coaching → Review →
Improvement ဟူသော Continuous Process ဖြစ်သည်။
</p>

<h3>၂။ Performance Review</h3>

<ul>
<li>Target vs Actual</li>
<li>Gap Analysis</li>
<li>Activity Analysis</li>
<li>Customer Analysis</li>
<li>Territory Analysis</li>
<li>Root Cause</li>
<li>Corrective Action</li>
</ul>

<h3>၃။ Performance Gap</h3>

<p>
Performance Gap ကို Result Gap နှင့်
Capability Gap ဟူ၍ ခွဲကြည့်နိုင်သည်။
</p>

<p>
Result မကောင်းတာက Skill မရှိလို့လား?
Activity မလုပ်လို့လား?
Market ပြဿနာလား?
Customer Issue လား?
Resource မလုံလောက်လို့လား?
ဆိုသည်ကို ရှာဖွေရမည်။
</p>
`,
        action: `
<p>
Team Member တစ်ယောက်ကိုရွေးပြီး
Performance Gap → Root Cause → Action Plan
အဖြစ်ရေးပါ။
`,
        quiz: [
          {
            question: "Performance Review ရဲ့ အဓိကရည်ရွယ်ချက်ကဘာလဲ?",
            answer:
              "အပြစ်ရှာရန်မဟုတ်ဘဲ Performance Gap နှင့် Root Cause ကိုရှာပြီး တိုးတက်စေရန်ဖြစ်သည်။"
          }
        ]
      },


      /* =====================================================
         LESSON 11
         ===================================================== */

      {
        id: "sm-11",
        title: "Sales Pipeline & Opportunity Management",
        burmeseTitle: "Sales Pipeline နှင့် Opportunity Management",
        objective:
          "Future Sales Opportunity များကို Pipeline အဖြစ်စနစ်တကျ စီမံပြီး Closing Probability မြှင့်တင်နိုင်ရန်။",
        content: `
<h3>၁။ Sales Pipeline</h3>

<p>
Sales Pipeline ဆိုသည်မှာ အနာဂတ်တွင် Sales ဖြစ်လာနိုင်သော
Customer Opportunity များကို အဆင့်လိုက်စီထားခြင်းဖြစ်သည်။
</p>

<h3>၂။ Pipeline Stages</h3>

<ol>
<li>New Lead</li>
<li>Qualified</li>
<li>Meeting</li>
<li>Proposal</li>
<li>Negotiation</li>
<li>Closing</li>
<li>Won / Lost</li>
</ol>

<h3>၃။ Pipeline Review</h3>

<p>
Manager သည် Pipeline ကို စစ်သောအခါ
Customer Name ရှိတာကိုသာ မကြည့်သင့်ပါ။
</p>

<ul>
<li>Customer Need</li>
<li>Decision Maker</li>
<li>Budget</li>
<li>Timeline</li>
<li>Competitor</li>
<li>Next Action</li>
<li>Expected Closing Date</li>
</ul>

<h3>၄။ Pipeline Quality</h3>

<p>
Pipeline ကြီးသော်လည်း အရည်အသွေးမကောင်းလျှင်
Future Sales မဖြစ်နိုင်ပါ။
</p>

<p>
Professional Sales Manager သည်
Pipeline Quantity နှင့် Quality နှစ်ခုလုံးကို စောင့်ကြည့်သည်။
</p>
`,
        action: `
<p>
လက်ရှိ Sales Opportunities ၁၀ ခုကို Pipeline Stage
အလိုက် စာရင်းပြုလုပ်ပြီး Next Action သတ်မှတ်ပါ။
`,
        quiz: [
          {
            question: "Pipeline Review မှာ အရေးကြီးဆုံးအချက်တစ်ခုကဘာလဲ?",
            answer:
              "Opportunity တစ်ခုချင်းစီ၏ Next Action နှင့် Expected Closing ကို သိရှိထားခြင်းဖြစ်သည်။"
          }
        ]
      },


      /* =====================================================
         LESSON 12
         ===================================================== */

      {
        id: "sm-12",
        title: "Customer Relationship & Account Management",
        burmeseTitle: "Customer Relationship နှင့် Account Management",
        objective:
          "အရေးကြီးသော Customer များကို ရေရှည်ဆက်ဆံရေးနှင့် Business Growth အတွက် စနစ်တကျ စီမံနိုင်ရန်။",
        content: `
<h3>၁။ Customer Management</h3>

<p>
Customer ရရှိပြီးနောက် ဆက်ဆံရေးကို ထိန်းသိမ်းခြင်းသည်
Sales Growth အတွက် အရေးကြီးသည်။
</p>

<h3>၂။ Customer Segmentation</h3>

<ul>
<li>High Value Customer</li>
<li>Growth Customer</li>
<li>Stable Customer</li>
<li>Low Value Customer</li>
<li>At-Risk Customer</li>
</ul>

<h3>၃။ Key Account Thinking</h3>

<p>
Key Account တစ်ခုကို Order ရယူရန်အတွက်သာ မကြည့်ဘဲ
Customer ၏ Business Plan နှင့် ကိုက်ညီအောင်
Joint Business Opportunity ရှာဖွေရမည်။
</p>

<h3>၄။ Customer Retention</h3>

<p>
Customer Retention ကို တိုးတက်စေရန်
Service Quality, Product Availability,
Communication, Problem Resolution နှင့်
Value Creation တို့ကို အာရုံစိုက်ရမည်။
</p>
`,
        action: `
<p>
သင့်ရဲ့ Top 10 Customers ကို Sales Value အလိုက်
စီပြီး Customer တစ်ယောက်ချင်းစီအတွက်
Growth Opportunity တစ်ခုရေးပါ။
`,
        quiz: [
          {
            question: "Key Account Management မှာ Order ထက် ဘာကိုပိုကြည့်သင့်သလဲ?",
            answer:
              "Customer ၏ ရေရှည် Business Growth နှင့် Joint Business Opportunity ကို ကြည့်သင့်သည်။"
          }
        ]
      },


      /* =====================================================
         LESSON 13
         ===================================================== */

      {
        id: "sm-13",
        title: "Sales Negotiation & Closing",
        burmeseTitle: "Sales Negotiation နှင့် Closing",
        objective:
          "Customer Objection, Price Discussion နှင့် Negotiation ကို Value-based Selling ဖြင့် စီမံနိုင်ရန်။",
        content: `
<h3>၁။ Negotiation ဆိုတာ</h3>

<p>
Negotiation သည် ကိုယ်လိုချင်တာကို Customer ထံမှ
ရယူခြင်းတစ်ခုတည်းမဟုတ်ဘဲ နှစ်ဖက်စလုံးအတွက်
Value ရရှိအောင် သဘောတူညီမှုရယူခြင်းဖြစ်သည်။
</p>

<h3>၂။ Negotiation မတိုင်မီ ပြင်ဆင်ရန်</h3>

<ul>
<li>Objective</li>
<li>Ideal Outcome</li>
<li>Minimum Acceptable Outcome</li>
<li>BATNA</li>
<li>Customer Need</li>
<li>Value Proposition</li>
<li>Possible Objections</li>
</ul>

<h3>၃။ Price Objection</h3>

<p>
Customer က "ဈေးကြီးတယ်" ဟု ပြောသောအခါ
Discount ပေးခြင်းကို ချက်ချင်းမလုပ်သင့်ပါ။
</p>

<p>
အရင်ဆုံး Value ကို နားလည်အောင်ရှင်းပြပြီး
Customer အတွက် Cost vs Benefit ကို
ဆွေးနွေးသင့်သည်။
</p>

<h3>၄။ Closing</h3>

<p>
Closing သည် အဆုံးမှာသာ လုပ်ရသောအရာမဟုတ်ပါ။
Sales Process တစ်လျှောက် Customer Commitment
သေးသေးလေးများကို ရယူထားခြင်းဖြင့် Closing ပိုလွယ်လာသည်။
</p>
`,
        action: `
<p>
Customer ၏ Price Objection ၃ မျိုးရေးပြီး
Value-based Response တစ်ခုစီပြင်ဆင်ပါ။
`,
        quiz: [
          {
            question: "Price Objection ရတဲ့အခါ Discount ကို ချက်ချင်းပေးသင့်သလား?",
            answer:
              "မပေးသင့်ပါ။ Customer Need နှင့် Value ကို အရင်နားလည်ပြီး Value-based Negotiation လုပ်သင့်သည်။"
          }
        ]
      },


      /* =====================================================
         LESSON 14
         ===================================================== */

      {
        id: "sm-14",
        title: "Sales Recovery & Problem Solving",
        burmeseTitle: "Sales Recovery နှင့် ပြဿနာဖြေရှင်းခြင်း",
        objective:
          "Sales Target မပြည့်သောအချိန်တွင် Panic မဖြစ်ဘဲ Root Cause Analysis နှင့် Recovery Plan ပြုလုပ်နိုင်ရန်။",
        content: `
<h3>၁။ Sales Gap</h3>

<p>
Target = 100 သိန်း
Actual = 75 သိန်း ဆိုပါက
Sales Gap = 25 သိန်း ဖြစ်သည်။
</p>

<h3>၂။ Root Cause Analysis</h3>

<p>
Sales Gap ဖြစ်ရသည့်အကြောင်းရင်းကို
အောက်ပါအတိုင်း ခွဲခြမ်းနိုင်သည်။
</p>

<ul>
<li>People</li>
<li>Customer</li>
<li>Product</li>
<li>Price</li>
<li>Distribution</li>
<li>Competition</li>
<li>Market</li>
<li>Execution</li>
</ul>

<h3>၃။ Recovery Plan</h3>

<ol>
<li>Gap ကို တိတိကျကျသတ်မှတ်</li>
<li>Root Cause ရှာ</li>
<li>Quick Win ရှာ</li>
<li>High Potential Customer ကို အာရုံစိုက်</li>
<li>Activity တိုး</li>
<li>Daily Review လုပ်</li>
<li>Result ပြန်တိုင်း</li>
</ol>

<h3>Manager Thinking</h3>

<p>
"ဒီလမရတော့ဘူး" ဟု စောစောဆုံးဖြတ်မည့်အစား
"ကျန်တဲ့ရက်အတွင်း ဘယ် Opportunity ကို
ဘယ်လိုပြောင်းလဲနိုင်မလဲ?" ဟု စဉ်းစားရမည်။
</p>
`,
        action: `
<p>
သင့်ရဲ့ Sales Gap တစ်ခုကို ရွေးပြီး
Root Cause ၃ ခု + Recovery Action ၅ ခုရေးပါ။
`,
        quiz: [
          {
            question: "Sales Recovery မှာ ပထမဆုံးဘာလုပ်သင့်သလဲ?",
            answer:
              "Sales Gap ကို တိတိကျကျတွက်ပြီး Root Cause ကိုရှာသင့်သည်။"
          }
        ]
      },


      /* =====================================================
         LESSON 15
         ===================================================== */

      {
        id: "sm-15",
        title: "Strategic Sales Leadership",
        burmeseTitle: "Strategic Sales Leadership",
        objective:
          "Sales Manager မှ Strategic Sales Leader အဖြစ် တက်လှမ်းပြီး ရေရှည်တိုးတက်သော Sales Organization တည်ဆောက်နိုင်ရန်။",
        content: `
<h3>၁။ Sales Manager → Sales Leader</h3>

<p>
Sales Manager သည် လက်ရှိ Target ကို အာရုံစိုက်သည်။
Sales Leader သည် လက်ရှိ Result နှင့်အတူ
အနာဂတ် Growth System ကိုပါ တည်ဆောက်သည်။
</p>

<h3>၂။ Strategic Sales Leadership ရဲ့ အဓိက ၆ ခု</h3>

<ol>
<li>Revenue Growth</li>
<li>Market Expansion</li>
<li>Customer Development</li>
<li>People Development</li>
<li>Sales Productivity</li>
<li>Profitability</li>
</ol>

<h3>၃။ Revenue တိုးခြင်းထက် Profitable Growth</h3>

<p>
Sales တိုးလာသော်လည်း Discount အလွန်များခြင်း၊
Cost မြင့်ခြင်း၊ Collection မကောင်းခြင်းတို့ကြောင့်
Profit မတိုးနိုင်ပါ။
</p>

<p>
ဒါကြောင့် Sales Leader သည်
Revenue + Margin + Cash Flow ကို တွဲကြည့်ရမည်။
</p>

<h3>၄။ High Performance Culture</h3>

<p>
ကောင်းမွန်သော Sales Culture သည်
Fear ဖြင့်မတည်ဆောက်သင့်ပါ။
</p>

<ul>
<li>Clear Expectations</li>
<li>Data-driven Review</li>
<li>Coaching</li>
<li>Recognition</li>
<li>Accountability</li>
<li>Continuous Improvement</li>
</ul>

<h3>၅။ Strategic Manager Thinking</h3>

<p>
နေ့စဉ်ပြဿနာကိုသာ ဖြေရှင်းနေသော Manager မဖြစ်ဘဲ
"ဒီနေ့ပြဿနာကို ဖြေရှင်းပြီး မနက်ဖြန်မှာ
ဒီပြဿနာ မဖြစ်အောင် ဘယ် System တည်ဆောက်မလဲ?"
ဟု စဉ်းစားနိုင်ရမည်။
</p>

<h3>Final Manager Framework</h3>

<p>
<strong>Target → Plan → Execute → Measure →
Analyze → Coach → Improve → Scale</strong>
</p>

<p>
ဒီ Cycle ကို ပုံမှန်လုပ်ဆောင်နိုင်ခြင်းသည်
Professional Sales Management ၏ အခြေခံဖြစ်သည်။
</p>
`,
        action: `
<p>
သင့် Sales Team အတွက်
90-Day Strategic Sales Plan တစ်ခုရေးပါ။

အောက်ပါ ၅ ခုပါဝင်ရမည်။

1. Revenue Target
2. Market Growth
3. Customer Growth
4. Team Development
5. KPI & Review System
`,
        quiz: [
          {
            question: "Strategic Sales Leader တစ်ယောက်က Revenue တစ်ခုတည်းကိုပဲ ကြည့်သင့်သလား?",
            answer:
              "မကြည့်သင့်ပါ။ Revenue အပြင် Margin, Cash Flow, Customer Growth, People Development နှင့် Long-term Growth ကိုပါ ကြည့်သင့်သည်။"
          }
        ]
      }

    ]
  };


  /* =========================================================
     REGISTER COURSE
     ========================================================= */

  const existingIndex =
    window.AungBusinessAcademy.COURSES.findIndex(
      function (course) {
        return course.id === SALES_COURSE.id;
      }
    );

  if (existingIndex >= 0) {
    window.AungBusinessAcademy.COURSES[
      existingIndex
    ] = SALES_COURSE;
  } else {
    window.AungBusinessAcademy.COURSES.push(
      SALES_COURSE
    );
  }


  /* =========================================================
     PROGRESS FUNCTIONS
     ========================================================= */

  function getCompleted() {
    try {
      const data =
        JSON.parse(
          localStorage.getItem(STORAGE_KEY)
        );

      return Array.isArray(data) ? data : [];
    } catch (error) {
      return [];
    }
  }


  function saveCompleted(list) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(list)
    );

    try {
      window.dispatchEvent(
        new CustomEvent(
          "aungAcademyProgressUpdated"
        )
      );
    } catch (error) {}
  }


  function isCompleted(lessonId) {
    return getCompleted().includes(
      lessonId
    );
  }


  function completeSalesLesson(lessonId) {
    const lessonExists =
      SALES_COURSE.lessons.some(
        function (lesson) {
          return lesson.id === lessonId;
        }
      );

    if (!lessonExists) {
      return false;
    }

    const completed =
      getCompleted();

    if (!completed.includes(lessonId)) {
      completed.push(lessonId);
      saveCompleted(completed);
    }

    return true;
  }


  function resetSalesProgress() {
    localStorage.removeItem(
      STORAGE_KEY
    );

    try {
      window.dispatchEvent(
        new CustomEvent(
          "aungAcademyProgressUpdated"
        )
      );
    } catch (error) {}
  }


  function getSalesProgress() {
    const completed =
      getCompleted();

    const total =
      SALES_COURSE.lessons.length;

    const done =
      SALES_COURSE.lessons.filter(
        function (lesson) {
          return completed.includes(
            lesson.id
          );
        }
      ).length;

    const percent =
      total === 0
        ? 0
        : Math.round(
            (done / total) * 100
          );

    return {
      courseId:
        SALES_COURSE.id,
      total: total,
      completed: done,
      remaining:
        total - done,
      percent: percent
    };
  }


  function getSalesLesson(lessonId) {
    return (
      SALES_COURSE.lessons.find(
        function (lesson) {
          return lesson.id === lessonId;
        }
      ) || null
    );
  }


  /* =========================================================
     PUBLIC API
     ========================================================= */

  window.SALES_COURSE =
    SALES_COURSE;

  window.SALES_LESSONS =
    SALES_COURSE.lessons;

  window.getSalesProgress =
    getSalesProgress;

  window.completeSalesLesson =
    completeSalesLesson;

  window.isSalesLessonCompleted =
    isCompleted;

  window.getSalesLesson =
    getSalesLesson;

  window.resetSalesProgress =
    resetSalesProgress;

})();
