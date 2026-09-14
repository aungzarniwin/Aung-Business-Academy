/* =========================================================
   AUNG BUSINESS ACADEMY
   app.js - FULL REPLACEMENT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* =======================================================
     APP DATA
     ======================================================= */

  const lessons = [
    {
      id: 1,
      title: "Sales Manager တစ်ယောက်၏ အခန်းကဏ္ဍ",
      duration: "20 မိနစ်",
      category: "Sales Basics",
      body: `
        <h3>သင်ခန်းစာရည်ရွယ်ချက်</h3>
        <p>
          Sales Manager ဆိုတာ ရောင်းအားတိုးအောင်လုပ်ပေးရုံသာမက
          လူ၊ နံပါတ်နဲ့ Market Execution သုံးခုကို စီမံခန့်ခွဲနိုင်ရမယ့်
          Business Leader တစ်ယောက်ဖြစ်ပါတယ်။
        </p>

        <h3>Sales Manager ၏ အဓိကတာဝန်များ</h3>
        <ul>
          <li>Sales Target သတ်မှတ်ခြင်း</li>
          <li>Sales Team ကို ဦးဆောင်ခြင်း</li>
          <li>Market Coverage တိုးတက်အောင်လုပ်ခြင်း</li>
          <li>Customer Relationship တည်ဆောက်ခြင်း</li>
          <li>Sales Performance ကို စောင့်ကြည့်ခြင်း</li>
          <li>Competitor Activity ကို ခွဲခြမ်းစိတ်ဖြာခြင်း</li>
        </ul>

        <h3>မှတ်ထားရန်</h3>
        <p>
          Sales Manager က ကိုယ်တိုင်အကုန်လုပ်တဲ့သူမဟုတ်ပါ။
          Team ကို အလုပ်ကောင်းကောင်းလုပ်နိုင်အောင် Direction,
          Coaching နဲ့ Accountability ပေးတဲ့သူဖြစ်ပါတယ်။
        </p>
      `
    },

    {
      id: 2,
      title: "Sales Target သတ်မှတ်နည်း",
      duration: "20 မိနစ်",
      category: "Sales Basics",
      body: `
        <h3>Target ဆိုတာဘာလဲ?</h3>
        <p>
          Target ဆိုတာ Business က သတ်မှတ်ထားတဲ့ ရောင်းအား၊
          Revenue သို့မဟုတ် Volume ရည်မှန်းချက်ဖြစ်ပါတယ်။
        </p>

        <h3>Target သတ်မှတ်ရာတွင်ကြည့်ရန်</h3>
        <ul>
          <li>Previous Sales Performance</li>
          <li>Market Potential</li>
          <li>Customer Base</li>
          <li>Distribution Coverage</li>
          <li>Seasonality</li>
          <li>Competitor Situation</li>
        </ul>

        <p>
          Target ကို Team အတွက် ရှင်းလင်းပြီး လက်တွေ့ကျတဲ့
          Field Activity အဖြစ် ပြောင်းပေးနိုင်ရပါမယ်။
        </p>
      `
    },

    {
      id: 3,
      title: "Sales Target ကို Field Execution ပြောင်းနည်း",
      duration: "25 မိနစ်",
      category: "Sales Basics",
      body: `
        <h3>Target → People → Numbers → Execution</h3>

        <p>
          Target တစ်ခုရပြီးတာနဲ့ “ဘယ်လိုရောင်းမလဲ” ဆိုတာကို
          Field Execution Plan အဖြစ် ပြောင်းရပါမယ်။
        </p>

        <ol>
          <li>Team Member တစ်ဦးချင်း Target ခွဲပါ။</li>
          <li>Customer / Outlet အလိုက် Target ခွဲပါ။</li>
          <li>Daily / Weekly Activity သတ်မှတ်ပါ။</li>
          <li>Visit Plan နဲ့ PJP ပြုလုပ်ပါ။</li>
          <li>နေ့စဉ် Result ကို Review လုပ်ပါ။</li>
        </ol>

        <h3>Manager Rule</h3>
        <p>
          Target ကိုပြောပြီးထားတာနဲ့ မပြီးပါဘူး။
          Target ရောက်ဖို့ ဘယ်သူက ဘာလုပ်ရမလဲဆိုတာ
          ရှင်းလင်းအောင်ပြောပေးရပါမယ်။
        </p>
      `
    },

    {
      id: 4,
      title: "Sales KPI နားလည်ခြင်း",
      duration: "20 မိနစ်",
      category: "Sales Basics",
      body: `
        <h3>KPI ဆိုတာ</h3>
        <p>
          KPI ဆိုတာ Performance ကို တိုင်းတာဖို့ အသုံးပြုတဲ့
          Key Performance Indicator ဖြစ်ပါတယ်။
        </p>

        <ul>
          <li>Sales Achievement</li>
          <li>Volume Growth</li>
          <li>Revenue Growth</li>
          <li>Distribution</li>
          <li>Productivity</li>
          <li>Customer Coverage</li>
          <li>Collection / AR</li>
        </ul>

        <p>
          KPI တစ်ခုတည်းကိုကြည့်ပြီး Team Performance ဆုံးဖြတ်တာထက်
          KPI အများကြီးကို ဆက်စပ်ကြည့်ရပါမယ်။
        </p>
      `
    },

    {
      id: 5,
      title: "Sales Team ကို ဦးဆောင်နည်း",
      duration: "25 မိနစ်",
      category: "People Management",
      body: `
        <h3>ကောင်းမွန်သော Sales Leadership</h3>

        <p>
          Team Leadership ရဲ့ အခြေခံက Clear Expectation,
          Coaching, Feedback နဲ့ Accountability ဖြစ်ပါတယ်။
        </p>

        <ul>
          <li>Expectation ကို ရှင်းရှင်းပြောပါ။</li>
          <li>Team Member တစ်ဦးချင်း Strength သိပါ။</li>
          <li>Regular Coaching လုပ်ပါ။</li>
          <li>Performance Review ပြုလုပ်ပါ။</li>
          <li>အောင်မြင်မှုကို အသိအမှတ်ပြုပါ။</li>
        </ul>

        <p>
          Micromanagement မလုပ်ဘဲ Ownership ပေးပြီး
          Result အတွက် Accountability ထားရပါမယ်။
        </p>
      `
    },

    {
      id: 6,
      title: "Coaching & Feedback",
      duration: "20 မိနစ်",
      category: "People Management",
      body: `
        <h3>Coaching ဆိုတာ</h3>
        <p>
          Team Member ကို အမိန့်ပေးတာမဟုတ်ဘဲ
          သူ့ကိုယ်တိုင် ပြဿနာကိုရှာဖွေပြီး ဖြေရှင်းနိုင်အောင်
          လမ်းညွှန်ပေးခြင်းဖြစ်ပါတယ်။
        </p>

        <h3>Feedback Formula</h3>
        <ol>
          <li>ဘာဖြစ်ခဲ့သလဲ?</li>
          <li>ဘာကြောင့်ဖြစ်ခဲ့သလဲ?</li>
          <li>နောက်တစ်ကြိမ် ဘယ်လိုပိုကောင်းအောင်လုပ်မလဲ?</li>
        </ol>
      `
    },

    {
      id: 7,
      title: "Customer Relationship Management",
      duration: "20 မိနစ်",
      category: "Customer Service",
      body: `
        <h3>Customer Relationship</h3>
        <p>
          Customer ကို Order ယူတဲ့သူအဖြစ်ပဲမမြင်ဘဲ
          Long-term Business Partner အဖြစ် ဆက်ဆံရပါမယ်။
        </p>

        <ul>
          <li>Customer Need နားထောင်ပါ။</li>
          <li>Problem ကိုမြန်မြန်ဖြေရှင်းပါ။</li>
          <li>Regular Visit လုပ်ပါ။</li>
          <li>Business Opportunity ရှာပါ။</li>
        </ul>
      `
    },

    {
      id: 8,
      title: "Negotiation အခြေခံ",
      duration: "25 မိနစ်",
      category: "Negotiation",
      body: `
        <h3>Negotiation ဆိုတာ</h3>
        <p>
          နှစ်ဖက်လုံးအတွက် Business Value ရအောင်
          သဘောတူညီမှု ရှာဖွေခြင်းဖြစ်ပါတယ်။
        </p>

        <h3>အဓိကအချက်များ</h3>
        <ul>
          <li>Customer ရဲ့ Need ကို သိပါ။</li>
          <li>ကိုယ့်ရဲ့ Minimum Position သိပါ။</li>
          <li>Value ကို ပြောပါ။</li>
          <li>Price တစ်ခုတည်းကို မဆွေးနွေးပါနှင့်။</li>
        </ul>
      `
    },

    {
      id: 9,
      title: "Market Analysis",
      duration: "25 မိနစ်",
      category: "Strategic Thinking",
      body: `
        <h3>Market Analysis</h3>
        <p>
          Market ထဲမှာ Customer, Competitor နဲ့ Company
          သုံးခုလုံးကို လေ့လာရပါမယ်။
        </p>

        <ul>
          <li>Market Size</li>
          <li>Customer Behavior</li>
          <li>Competitor Price</li>
          <li>Competitor Promotion</li>
          <li>Distribution</li>
          <li>New Opportunities</li>
        </ul>
      `
    },

    {
      id: 10,
      title: "Competitor Analysis",
      duration: "20 မိနစ်",
      category: "Strategic Thinking",
      body: `
        <h3>Competitor ကို ဘာကြောင့်လေ့လာရသလဲ?</h3>
        <p>
          Competitor ရဲ့အားသာချက်၊ အားနည်းချက်ကို သိမှ
          ကိုယ့်ရဲ့ Strategy ကို ပိုကောင်းအောင် ပြင်ဆင်နိုင်ပါတယ်။
        </p>

        <ul>
          <li>Price</li>
          <li>Product</li>
          <li>Promotion</li>
          <li>Distribution</li>
          <li>Sales Force</li>
          <li>Customer Service</li>
        </ul>
      `
    },

    {
      id: 11,
      title: "Distribution Management",
      duration: "25 မိနစ်",
      category: "Sales Basics",
      body: `
        <h3>Distribution</h3>
        <p>
          Product ရှိရုံနဲ့ မရောင်းနိုင်ပါဘူး။
          Customer လိုတဲ့နေရာမှာ Product ရှိနေရပါမယ်။
        </p>

        <h3>အဓိကအချက်</h3>
        <ul>
          <li>Numeric Distribution</li>
          <li>Weighted Distribution</li>
          <li>Outlet Coverage</li>
          <li>Stock Availability</li>
          <li>Route Planning</li>
        </ul>
      `
    },

    {
      id: 12,
      title: "Sales Forecasting",
      duration: "25 မိနစ်",
      category: "Strategic Thinking",
      body: `
        <h3>Forecast ဆိုတာ</h3>
        <p>
          အနာဂတ်မှာ ဘယ်လောက်ရောင်းနိုင်မလဲဆိုတာ
          Data နဲ့ Market Knowledge အသုံးပြုပြီး ခန့်မှန်းခြင်းဖြစ်ပါတယ်။
        </p>

        <ul>
          <li>Previous Sales</li>
          <li>Current Trend</li>
          <li>Customer Order</li>
          <li>Stock Level</li>
          <li>Seasonality</li>
        </ul>
      `
    },

    {
      id: 13,
      title: "Profit & Loss အခြေခံ",
      duration: "25 မိနစ်",
      category: "Profit & Loss",
      body: `
        <h3>Revenue</h3>
        <p>
          ရောင်းအားက Revenue ဖြစ်ပါတယ်။
        </p>

        <h3>Profit</h3>
        <p>
          Profit = Revenue - Cost
        </p>

        <p>
          Sales Manager တစ်ယောက်အနေနဲ့
          Volume တိုးတာတင်မကဘဲ Margin နဲ့ Profit ကိုပါ
          စောင့်ကြည့်ရပါမယ်။
        </p>
      `
    },

    {
      id: 14,
      title: "Gross Margin နားလည်ခြင်း",
      duration: "20 မိနစ်",
      category: "Profit & Loss",
      body: `
        <h3>Gross Margin</h3>
        <p>
          Gross Margin က ရောင်းဈေးထဲမှာ Cost ဖြတ်ပြီးနောက်
          ဘယ်လောက်ကျန်သလဲဆိုတာကို ပြပါတယ်။
        </p>

        <p>
          Margin မြင့်ရင် Business က Profit ရနိုင်မယ့်
          အခွင့်အရေး ပိုကောင်းပါတယ်။
        </p>
      `
    },

    {
      id: 15,
      title: "Business Goal Setting",
      duration: "20 မိနစ်",
      category: "Goal Setting",
      body: `
        <h3>Goal သတ်မှတ်ခြင်း</h3>
        <p>
          Goal က ရှင်းလင်းပြီး တိုင်းတာနိုင်ရပါမယ်။
        </p>

        <ul>
          <li>Specific</li>
          <li>Measurable</li>
          <li>Achievable</li>
          <li>Relevant</li>
          <li>Time-bound</li>
        </ul>
      `
    },

    {
      id: 16,
      title: "Daily Sales Planning",
      duration: "20 မိနစ်",
      category: "Sales Basics",
      body: `
        <h3>Daily Planning</h3>
        <p>
          နေ့စဉ်အလုပ်ကို မနက်ကတည်းက Priority သတ်မှတ်ထားရပါမယ်။
        </p>

        <ol>
          <li>Today's Target</li>
          <li>Priority Customers</li>
          <li>Customer Visits</li>
          <li>Follow-ups</li>
          <li>Collection</li>
          <li>End-of-Day Review</li>
        </ol>
      `
    },

    {
      id: 17,
      title: "Weekly Sales Review",
      duration: "20 မိနစ်",
      category: "Reports",
      body: `
        <h3>Weekly Review</h3>
        <p>
          Weekly Review မှာ Result တစ်ခုတည်းမကြည့်ဘဲ
          Result ဖြစ်လာတဲ့အကြောင်းရင်းကိုပါ ရှာရပါမယ်။
        </p>

        <ul>
          <li>Target vs Achievement</li>
          <li>Gap Analysis</li>
          <li>Best Performer</li>
          <li>Low Performer</li>
          <li>Market Issues</li>
          <li>Next Week Action</li>
        </ul>
      `
    },

    {
      id: 18,
      title: "Problem Solving",
      duration: "25 မိနစ်",
      category: "Strategic Thinking",
      body: `
        <h3>Problem Solving Process</h3>

        <ol>
          <li>Problem ကို သတ်မှတ်ပါ။</li>
          <li>Root Cause ရှာပါ။</li>
          <li>Possible Solutions စုပါ။</li>
          <li>Best Solution ရွေးပါ။</li>
          <li>Action လုပ်ပါ။</li>
          <li>Result ပြန်စစ်ပါ။</li>
        </ol>
      `
    },

    {
      id: 19,
      title: "Time Management",
      duration: "20 မိနစ်",
      category: "People Management",
      body: `
        <h3>အချိန်စီမံခန့်ခွဲမှု</h3>
        <p>
          Sales Manager တစ်ယောက်အနေနဲ့ အရေးကြီးတဲ့
          အလုပ်နဲ့ အရေးမကြီးတဲ့အလုပ်ကို ခွဲခြားနိုင်ရပါမယ်။
        </p>

        <ul>
          <li>Important & Urgent</li>
          <li>Important & Not Urgent</li>
          <li>Delegate</li>
          <li>Eliminate</li>
        </ul>
      `
    },

    {
      id: 20,
      title: "Business Communication",
      duration: "20 မိနစ်",
      category: "People Management",
      body: `
        <h3>Communication</h3>
        <p>
          Manager တစ်ယောက်ရဲ့ Communication က ရှင်းလင်း၊
          တိကျပြီး Action ရှိရပါမယ်။
        </p>

        <ul>
          <li>ဘာလုပ်ရမလဲ?</li>
          <li>ဘယ်သူလုပ်မလဲ?</li>
          <li>ဘယ်အချိန်ပြီးမလဲ?</li>
          <li>Result ကို ဘယ်လိုတိုင်းမလဲ?</li>
        </ul>
      `
    },

    {
      id: 21,
      title: "Brand Basics",
      duration: "20 မိနစ်",
      category: "Brand Basics",
      body: `
        <h3>Brand ဆိုတာ</h3>
        <p>
          Brand ဆိုတာ Logo တစ်ခုတည်းမဟုတ်ပါ။
          Customer ရဲ့ စိတ်ထဲမှာ Company/Product အပေါ်
          ဖြစ်ပေါ်နေတဲ့ Perception ဖြစ်ပါတယ်။
        </p>

        <ul>
          <li>Brand Promise</li>
          <li>Brand Positioning</li>
          <li>Customer Experience</li>
          <li>Consistency</li>
        </ul>
      `
    },

    {
      id: 22,
      title: "Marketing Basics",
      duration: "25 မိနစ်",
      category: "Marketing Basics",
      body: `
        <h3>Marketing</h3>
        <p>
          Marketing က Product ကို ရောင်းဖို့ပဲမဟုတ်ပါ။
          Customer Need ကို နားလည်ပြီး Value ပေးနိုင်အောင်
          စီမံခြင်းဖြစ်ပါတယ်။
        </p>

        <ul>
          <li>Product</li>
          <li>Price</li>
          <li>Place</li>
          <li>Promotion</li>
        </ul>
      `
    },

    {
      id: 23,
      title: "Customer Service Excellence",
      duration: "20 မိနစ်",
      category: "Customer Service",
      body: `
        <h3>Customer Service</h3>
        <p>
          Customer Service က Sale ပြီးတဲ့နောက်မှ စတာမဟုတ်ပါ။
          Customer ရဲ့ Experience တစ်ခုလုံးကို စီမံရတာဖြစ်ပါတယ်။
        </p>

        <ul>
          <li>Fast Response</li>
          <li>Problem Resolution</li>
          <li>Follow-up</li>
          <li>Trust Building</li>
        </ul>
      `
    },

    {
      id: 24,
      title: "Key Account Management",
      duration: "25 မိနစ်",
      category: "Sales Basics",
      body: `
        <h3>Key Account</h3>
        <p>
          Key Account ဆိုတာ Business အတွက် အရေးကြီးတဲ့
          Customer ဖြစ်ပါတယ်။
        </p>

        <ul>
          <li>Account Potential</li>
          <li>Business Plan</li>
          <li>Relationship Mapping</li>
          <li>Joint Business Plan</li>
          <li>Regular Review</li>
        </ul>
      `
    },

    {
      id: 25,
      title: "Sales Negotiation Advanced",
      duration: "25 မိနစ်",
      category: "Negotiation",
      body: `
        <h3>Advanced Negotiation</h3>
        <p>
          Negotiation မှာ Price ကိုသာ လျှော့ပေးတာထက်
          Value Exchange ပြုလုပ်နိုင်ဖို့ အရေးကြီးပါတယ်။
        </p>

        <ul>
          <li>Volume vs Price</li>
          <li>Payment Terms</li>
          <li>Promotion</li>
          <li>Visibility</li>
          <li>Long-term Commitment</li>
        </ul>
      `
    },

    {
      id: 26,
      title: "Decision Making",
      duration: "20 မိနစ်",
      category: "Strategic Thinking",
      body: `
        <h3>Manager Decision Making</h3>
        <p>
          Decision တစ်ခုချတဲ့အခါ Data, Business Impact,
          Risk နဲ့ Timing ကို ထည့်သွင်းစဉ်းစားရပါမယ်။
        </p>
      `
    },

    {
      id: 27,
      title: "Sales Motivation",
      duration: "20 မိနစ်",
      category: "People Management",
      body: `
        <h3>Team Motivation</h3>
        <p>
          လူတိုင်းကို Money တစ်ခုတည်းနဲ့ Motivation ပေးလို့မရပါ။
          Recognition, Growth, Responsibility နဲ့ Achievement
          တွေလည်း အရေးကြီးပါတယ်။
        </p>
      `
    },

    {
      id: 28,
      title: "Sales Reporting",
      duration: "20 မိနစ်",
      category: "Reports",
      body: `
        <h3>Good Sales Report</h3>
        <p>
          Report က Data စုထားတာတင်မဟုတ်ပါ။
          Management ဆုံးဖြတ်ချက်ချနိုင်အောင် Insight ပါရပါမယ်။
        </p>

        <ul>
          <li>What happened?</li>
          <li>Why happened?</li>
          <li>What is the risk?</li>
          <li>What action is needed?</li>
        </ul>
      `
    },

    {
      id: 29,
      title: "Strategic Sales Planning",
      duration: "30 မိနစ်",
      category: "Strategic Thinking",
      body: `
        <h3>Strategic Sales Plan</h3>
        <p>
          Strategy ဆိုတာ ဒီနေ့ရောင်းအားတင်မဟုတ်ဘဲ
          အနာဂတ် Business Growth အတွက် Plan ချခြင်းဖြစ်ပါတယ်။
        </p>

        <ul>
          <li>Market Opportunity</li>
          <li>Growth Target</li>
          <li>Customer Strategy</li>
          <li>Channel Strategy</li>
          <li>People Strategy</li>
          <li>Execution Plan</li>
        </ul>
      `
    },

    {
      id: 30,
      title: "Professional Sales Manager ဖြစ်လာရန်",
      duration: "30 မိနစ်",
      category: "Leadership",
      body: `
        <h3>Professional Sales Manager</h3>
        <p>
          Professional Sales Manager တစ်ယောက်ဖြစ်ဖို့
          Sales Skill တစ်ခုတည်းနဲ့ မလုံလောက်ပါ။
          Business Thinking, Leadership, Financial Understanding,
          Customer Management နဲ့ Strategic Thinking လိုအပ်ပါတယ်။
        </p>

        <h3>နောက်ဆုံးအချက်</h3>
        <ul>
          <li>Numbers ကို နားလည်ပါ။</li>
          <li>People ကို ဦးဆောင်ပါ။</li>
          <li>Customer ကို နားလည်ပါ။</li>
          <li>Market ကို စောင့်ကြည့်ပါ။</li>
          <li>Execution ကို အာရုံစိုက်ပါ။</li>
          <li>Result အတွက် Ownership ယူပါ။</li>
        </ul>

        <p>
          <strong>
            Great Sales Manager ဆိုတာ Target ရအောင် ကိုယ်တိုင်လုပ်တဲ့သူမဟုတ်ဘဲ
            Team တစ်ခုလုံး Target ရအောင် ဖန်တီးပေးနိုင်တဲ့ Leader ဖြစ်ပါတယ်။
          </strong>
        </p>
      `
    }
  ];


  /* =======================================================
     STORAGE
     ======================================================= */

  const STORAGE_KEY = "aungBusinessAcademy";

  let appData = {
    completedLessons: [],
    dailyMinutes: 0,
    settings: {
      notifications: true,
      darkMode: false
    }
  };

  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      const parsed = JSON.parse(saved);

      appData = {
        ...appData,
        ...parsed,
        settings: {
          ...appData.settings,
          ...(parsed.settings || {})
        }
      };
    }
  } catch (error) {
    console.warn("Local storage read error:", error);
  }


  function saveData() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(appData)
      );
    } catch (error) {
      console.warn("Local storage save error:", error);
    }
  }


  /* =======================================================
     HELPERS
     ======================================================= */

  function $(selector) {
    return document.querySelector(selector);
  }

  function $$(selector) {
    return document.querySelectorAll(selector);
  }

  function safeText(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }


  /* =======================================================
     PAGE TITLES
     ======================================================= */

  const pageTitles = {
    dashboard: "Dashboard",
    courses: "My Courses",
    lessons: "Lessons",
    progress: "My Progress",
    sales: "Sales Manager",
    calculator: "Pricing Calculator",
    reports: "Reports",
    coach: "AI Business Coach",
    aitools: "AI Tools",
    settings: "Settings"
  };


  /* =======================================================
     NAVIGATION
     ======================================================= */

  function showPage(pageId) {

    const pages = $$(".page");

    pages.forEach(function (page) {
      page.classList.remove("active");
    });

    const targetPage = document.getElementById(pageId);

    if (targetPage) {
      targetPage.classList.add("active");
    }

    const navButtons = $$(".nav-btn");

    navButtons.forEach(function (button) {
      button.classList.remove("active");

      if (button.dataset.page === pageId) {
        button.classList.add("active");
      }
    });

    const titleElement = $(".page-title");

    if (titleElement) {
      titleElement.textContent =
        pageTitles[pageId] || "Aung Business Academy";
    }

    closeMobileSidebar();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    renderPageData(pageId);
  }


  function renderPageData(pageId) {

    if (pageId === "dashboard") {
      updateDashboard();
    }

    if (pageId === "lessons") {
      renderLessons();
    }

    if (pageId === "progress") {
      updateProgressPage();
    }

    if (pageId === "courses") {
      updateCourseProgress();
    }
  }


  /* =======================================================
     NAV BUTTON EVENTS
     ======================================================= */

  $$(".nav-btn").forEach(function (button) {

    button.addEventListener("click", function () {

      const page = button.dataset.page;

      if (page) {
        showPage(page);
      }

    });

  });


  /* =======================================================
     DATA-PAGE BUTTONS
     ======================================================= */

  $$("[data-page-link]").forEach(function (button) {

    button.addEventListener("click", function () {

      const page = button.dataset.pageLink;

      if (page) {
        showPage(page);
      }

    });

  });


  $$("[data-page]").forEach(function (element) {

    if (
      element.classList.contains("nav-btn") ||
      element.hasAttribute("data-page-link")
    ) {
      return;
    }

    element.addEventListener("click", function () {

      const page = element.dataset.page;

      if (page) {
        showPage(page);
      }

    });

  });


  /* =======================================================
     MOBILE SIDEBAR
     ======================================================= */

  function openMobileSidebar() {

    const sidebar = $(".sidebar");

    if (sidebar) {
      sidebar.classList.add("open");
    }

    let overlay = $(".sidebar-overlay");

    if (!overlay) {

      overlay = document.createElement("div");

      overlay.className = "sidebar-overlay";

      document.body.appendChild(overlay);

      overlay.addEventListener("click", closeMobileSidebar);
    }

    overlay.classList.add("show");
  }


  function closeMobileSidebar() {

    const sidebar = $(".sidebar");

    if (sidebar) {
      sidebar.classList.remove("open");
    }

    const overlay = $(".sidebar-overlay");

    if (overlay) {
      overlay.classList.remove("show");
    }
  }


  const menuToggle = $(".menu-toggle");

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {

      const sidebar = $(".sidebar");

      if (sidebar && sidebar.classList.contains("open")) {
        closeMobileSidebar();
      } else {
        openMobileSidebar();
      }

    });
  }


  /* =======================================================
     LESSON RENDERING
     ======================================================= */

  function renderLessons() {

    const lessonList = $("#lessonList");

    if (!lessonList) {
      return;
    }

    lessonList.innerHTML = "";

    lessons.forEach(function (lesson) {

      const completed =
        appData.completedLessons.includes(lesson.id);

      const item = document.createElement("div");

      item.className =
        "lesson-item" +
        (completed ? " completed" : "");

      item.innerHTML = `
        <div class="lesson-number">
          ${completed ? "✓" : lesson.id}
        </div>

        <div class="lesson-info">
          <div class="lesson-title">
            ${safeText(lesson.title)}
          </div>

          <div class="lesson-meta">
            ${safeText(lesson.category)}
            •
            ${safeText(lesson.duration)}
          </div>
        </div>

        <div class="lesson-action">
          <button
            class="btn btn-primary lesson-open-btn"
            type="button"
            data-lesson-id="${lesson.id}"
          >
            ${completed ? "ပြန်ဖတ်ရန်" : "စတင်ရန်"}
          </button>
        </div>
      `;

      lessonList.appendChild(item);
    });


    $$(".lesson-open-btn").forEach(function (button) {

      button.addEventListener("click", function () {

        const id =
          Number(button.dataset.lessonId);

        openLesson(id);

      });

    });

  }


  /* =======================================================
     LESSON MODAL
     ======================================================= */

  const lessonModal = $("#lessonModal");
  const modalClose = $("#modalClose");
  const modalLessonNumber = $("#modalLessonNumber");
  const modalLessonTitle = $("#modalLessonTitle");
  const modalLessonBody = $("#modalLessonBody");
  const completeLessonBtn = $("#completeLessonBtn");

  let currentLessonId = null;


  function openLesson(id) {

    const lesson = lessons.find(function (item) {
      return item.id === id;
    });

    if (!lesson) {
      return;
    }

    currentLessonId = id;

    if (modalLessonNumber) {
      modalLessonNumber.textContent =
        "LESSON " + lesson.id;
    }

    if (modalLessonTitle) {
      modalLessonTitle.textContent =
        lesson.title;
    }

    if (modalLessonBody) {
      modalLessonBody.innerHTML =
        lesson.body;
    }

    if (completeLessonBtn) {

      const completed =
        appData.completedLessons.includes(id);

      completeLessonBtn.textContent =
        completed
          ? "✓ ပြီးဆုံးပြီး"
          : "သင်ခန်းစာပြီးဆုံးကြောင်း မှတ်မည်";

      completeLessonBtn.disabled = completed;

      if (completed) {
        completeLessonBtn.classList.remove("btn-primary");
        completeLessonBtn.classList.add("btn-success");
      } else {
        completeLessonBtn.classList.remove("btn-success");
        completeLessonBtn.classList.add("btn-primary");
      }

    }

    if (lessonModal) {
      lessonModal.classList.add("show");
    }
  }


  function closeLesson() {

    if (lessonModal) {
      lessonModal.classList.remove("show");
    }

    currentLessonId = null;
  }


  if (modalClose) {
    modalClose.addEventListener("click", closeLesson);
  }


  if (lessonModal) {

    lessonModal.addEventListener("click", function (event) {

      if (event.target === lessonModal) {
        closeLesson();
      }

    });

  }


  document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
      closeLesson();
    }

  });


  /* =======================================================
     COMPLETE LESSON
     ======================================================= */

  if (completeLessonBtn) {

    completeLessonBtn.addEventListener("click", function () {

      if (!currentLessonId) {
        return;
      }

      if (
        !appData.completedLessons.includes(currentLessonId)
      ) {

        appData.completedLessons.push(
          currentLessonId
        );

        appData.dailyMinutes += 20;

        saveData();

        updateAll();

        completeLessonBtn.textContent =
          "✓ ပြီးဆုံးပြီး";

        completeLessonBtn.disabled = true;

        completeLessonBtn.classList.remove(
          "btn-primary"
        );

        completeLessonBtn.classList.add(
          "btn-success"
        );

      }

    });

  }


  /* =======================================================
     DASHBOARD UPDATE
     ======================================================= */

  function updateDashboard() {

    const totalLessons = lessons.length;

    const completed =
      appData.completedLessons.length;

    const percentage =
      totalLessons > 0
        ? Math.round(
            (completed / totalLessons) * 100
          )
        : 0;


    const statElements = {
      lesson: [
        "#lessonCount",
        "#totalLessons",
        "[data-stat='lessons']"
      ],
      completed: [
        "#completedCount",
        "#completedLessons",
        "[data-stat='completed']"
      ],
      progress: [
        "#progressPercent",
        "#overallProgress",
        "[data-stat='progress']"
      ]
    };


    statElements.lesson.forEach(function (selector) {

      $$(selector).forEach(function (element) {
        element.textContent = totalLessons;
      });

    });


    statElements.completed.forEach(function (selector) {

      $$(selector).forEach(function (element) {
        element.textContent = completed;
      });

    });


    statElements.progress.forEach(function (selector) {

      $$(selector).forEach(function (element) {
        element.textContent = percentage + "%";
      });

    });


    $$(".progress-bar").forEach(function (bar) {

      if (
        bar.closest(".dashboard-progress") ||
        bar.dataset.progress === "overall"
      ) {
        bar.style.width = percentage + "%";
      }

    });


    const dailyGoal = 30;

    const dailyMinutes =
      Math.min(
        Number(appData.dailyMinutes) || 0,
        dailyGoal
      );

    const dailyPercent =
      Math.round(
        (dailyMinutes / dailyGoal) * 100
      );


    $$(".goal-number").forEach(function (element) {

      element.textContent =
        dailyMinutes;

    });


    $$(".goal-circle").forEach(function (circle) {

      const degrees =
        Math.round(
          dailyPercent * 3.6
        );

      circle.style.background =
        `conic-gradient(#2563eb ${degrees}deg, #e2e8f0 ${degrees}deg)`;

    });

  }


  /* =======================================================
     PROGRESS PAGE
     ======================================================= */

  function updateProgressPage() {

    const completed =
      appData.completedLessons.length;

    const total =
      lessons.length;

    const percent =
      total > 0
        ? Math.round(
            (completed / total) * 100
          )
        : 0;


    $$(".overall-progress-value").forEach(function (element) {
      element.textContent = percent + "%";
    });


    $$(".overall-progress-bar").forEach(function (element) {
      element.style.width = percent + "%";
    });


    $$(".completed-lessons-value").forEach(function (element) {
      element.textContent = completed;
    });


    $$(".remaining-lessons-value").forEach(function (element) {
      element.textContent =
        Math.max(total - completed, 0);
    });


    const progressLessonList =
      $("#progressLessonList");

    if (!progressLessonList) {
      return;
    }

    progressLessonList.innerHTML = "";

    lessons.forEach(function (lesson) {

      const completedLesson =
        appData.completedLessons.includes(
          lesson.id
        );

      const row =
        document.createElement("div");

      row.className = "lesson-item";

      row.innerHTML = `
        <div class="lesson-number ${
          completedLesson ? "" : ""
        }">
          ${completedLesson ? "✓" : lesson.id}
        </div>

        <div class="lesson-info">
          <div class="lesson-title">
            ${safeText(lesson.title)}
          </div>

          <div class="lesson-meta">
            ${completedLesson ? "ပြီးဆုံးပြီး" : "မပြီးသေးပါ"}
          </div>
        </div>

        <div>
          <button
            class="btn ${
              completedLesson
                ? "btn-success"
                : "btn-secondary"
            } progress-open-btn"
            type="button"
            data-lesson-id="${lesson.id}"
          >
            ${completedLesson ? "✓" : "ဖတ်ရန်"}
          </button>
        </div>
      `;

      progressLessonList.appendChild(row);
    });


    $$(".progress-open-btn").forEach(function (button) {

      button.addEventListener("click", function () {

        openLesson(
          Number(button.dataset.lessonId)
        );

      });

    });

  }


  /* =======================================================
     COURSE PROGRESS
     ======================================================= */

  function updateCourseProgress() {

    const completed =
      appData.completedLessons.length;

    const percent =
      Math.round(
        (completed / lessons.length) * 100
      );

    $$(".course-progress-bar").forEach(function (bar) {
      bar.style.width = percent + "%";
    });

    $$(".course-progress-percent").forEach(function (element) {
      element.textContent = percent + "%";
    });

  }


  /* =======================================================
     PRICING CALCULATOR
     ======================================================= */

  const costPrice = $("#costPrice");
  const sellingPrice = $("#sellingPrice");
  const calculateBtn = $("#calculateBtn");

  const profitResult = $("#profitResult");
  const marginResult = $("#marginResult");
  const markupResult = $("#markupResult");


  function calculatePricing() {

    if (!costPrice || !sellingPrice) {
      return;
    }

    const cost =
      Number(
        String(costPrice.value)
          .replace(/,/g, "")
      ) || 0;

    const selling =
      Number(
        String(sellingPrice.value)
          .replace(/,/g, "")
      ) || 0;


    if (cost <= 0 || selling <= 0) {

      if (profitResult) {
        profitResult.textContent = "0";
      }

      if (marginResult) {
        marginResult.textContent = "0%";
      }

      if (markupResult) {
        markupResult.textContent = "0%";
      }

      return;
    }


    const profit =
      selling - cost;

    const margin =
      (profit / selling) * 100;

    const markup =
      (profit / cost) * 100;


    if (profitResult) {
      profitResult.textContent =
        formatNumber(profit);
    }

    if (marginResult) {
      marginResult.textContent =
        margin.toFixed(1) + "%";
    }

    if (markupResult) {
      markupResult.textContent =
        markup.toFixed(1) + "%";
    }

  }


  function formatNumber(number) {

    return new Intl.NumberFormat(
      "en-US",
      {
        maximumFractionDigits: 2
      }
    ).format(number);

  }


  if (calculateBtn) {
    calculateBtn.addEventListener(
      "click",
      calculatePricing
    );
  }


  if (costPrice) {
    costPrice.addEventListener(
      "input",
      calculatePricing
    );
  }


  if (sellingPrice) {
    sellingPrice.addEventListener(
      "input",
      calculatePricing
    );
  }


  /* =======================================================
     AI BUSINESS COACH
     ======================================================= */

  const chatArea = $("#chatArea");
  const coachInput = $("#coachInput");
  const coachSend = $("#coachSend");


  function addChatMessage(
    message,
    type = "ai"
  ) {

    if (!chatArea) {
      return;
    }

    const messageElement =
      document.createElement("div");

    messageElement.className =
      "chat-message " + type;

    const bubble =
      document.createElement("div");

    bubble.className =
      "chat-bubble";

    bubble.textContent = message;

    messageElement.appendChild(bubble);

    chatArea.appendChild(messageElement);

    chatArea.scrollTop =
      chatArea.scrollHeight;

  }


  function getCoachResponse(question) {

    const text =
      question.toLowerCase();


    if (
      text.includes("sales") ||
      text.includes("ရောင်း")
    ) {

      return `
Sales တိုးချင်ရင် အရင်ဆုံး Target ကို ခွဲပါ။

① Team Member တစ်ဦးချင်း Target
② Customer / Outlet Target
③ Daily Activity
④ Visit Plan
⑤ Weekly Review

ပြီးရင် Target vs Achievement Gap ကို နေ့စဉ်စောင့်ကြည့်ပါ။
      `.trim();

    }


    if (
      text.includes("team") ||
      text.includes("ဝန်ထမ်း") ||
      text.includes("အဖွဲ့")
    ) {

      return `
Team Management မှာ Micromanagement ထက်
Clear Expectation + Coaching + Feedback + Accountability
ကို အသုံးပြုပါ။

Team Member တစ်ဦးချင်းစီရဲ့ Strength နဲ့ Development Area
ကို သိအောင်လုပ်ပြီး Regular Review လုပ်ပါ။
      `.trim();

    }


    if (
      text.includes("customer") ||
      text.includes("ဖောက်သည်")
    ) {

      return `
Customer ကို Order ယူတဲ့သူတစ်ယောက်အဖြစ်ပဲ မမြင်ပါနဲ့။

Customer ရဲ့ Business Need ကို နားလည်ပြီး
Long-term Business Partner အဖြစ် Relationship တည်ဆောက်ပါ။

Regular Visit + Follow-up + Problem Solving
သုံးခုကို အထူးအာရုံစိုက်ပါ။
      `.trim();

    }


    if (
      text.includes("profit") ||
      text.includes("အမြတ်") ||
      text.includes("margin")
    ) {

      return `
Profit ကိုတွက်တဲ့အခါ

Profit = Revenue - Cost

Margin = Profit ÷ Selling Price × 100

ဆိုတဲ့ Formula ကို အသုံးပြုနိုင်ပါတယ်။

Sales Manager အနေနဲ့ Volume တိုးတာတင်မက
Margin နဲ့ Profit ကိုပါ စောင့်ကြည့်ပါ။
      `.trim();

    }


    if (
      text.includes("target") ||
      text.includes("ပန်းတိုင်")
    ) {

      return `
Target ကို ရောက်ဖို့ Target → People → Numbers → Execution
အဖြစ် ပြောင်းပါ။

Target ကြီးတစ်ခုကို Team Member၊ Customer၊ Daily Activity
အလိုက် ခွဲပြီး Weekly Review လုပ်ပါ။
      `.trim();

    }


    return `
သင့် Business ပြဿနာကို အောက်ပါပုံစံနဲ့ စဉ်းစားကြည့်ပါ။

① Problem က ဘာလဲ?
② Root Cause က ဘာလဲ?
③ Data က ဘာပြောလဲ?
④ ဘယ် Solution တွေရှိလဲ?
⑤ ဘယ် Action ကို အရင်လုပ်မလဲ?
⑥ Result ကို ဘယ်လိုတိုင်းမလဲ?

Business Coach အနေနဲ့ အမြဲ
Problem → Analysis → Action → Review
ပုံစံနဲ့ စဉ်းစားဖို့ အကြံပြုပါတယ်။
    `.trim();

  }


  function sendCoachMessage() {

    if (!coachInput) {
      return;
    }

    const question =
      coachInput.value.trim();

    if (!question) {
      return;
    }


    addChatMessage(
      question,
      "user"
    );

    coachInput.value = "";


    setTimeout(function () {

      const response =
        getCoachResponse(question);

      addChatMessage(
        response,
        "ai"
      );

    }, 300);

  }


  if (coachSend) {
    coachSend.addEventListener(
      "click",
      sendCoachMessage
    );
  }


  if (coachInput) {

    coachInput.addEventListener(
      "keydown",
      function (event) {

        if (
          event.key === "Enter" &&
          !event.shiftKey
        ) {

          event.preventDefault();

          sendCoachMessage();

        }

      }
    );

  }


  /* =======================================================
     AI COACH TOPICS
     ======================================================= */

  $$(".topic-btn").forEach(function (button) {

    button.addEventListener(
      "click",
      function () {

        const topic =
          button.dataset.topic ||
          button.textContent.trim();

        if (coachInput) {

          coachInput.value =
            topic +
            " အကြောင်း Business အနေနဲ့ အကြံပေးပါ";

          coachInput.focus();

        }

      }
    );

  });


  /* =======================================================
     AI TOOL BUTTONS
     ======================================================= */

  $$(".tool-card .btn").forEach(function (button) {

    button.addEventListener(
      "click",
      function () {

        const card =
          button.closest(".tool-card");

        if (!card) {
          return;
        }

        const title =
          card.querySelector("h3");

        if (title) {

          alert(
            title.textContent.trim() +
            "\n\nဒီ Tool ကို နောက် Version မှာ ဆက်လက်တိုးချဲ့ပေးပါမယ်။"
          );

        }

      }
    );

  });


  /* =======================================================
     SETTINGS
     ======================================================= */

  function loadSettings() {

    const notificationToggle =
      $("#notificationToggle");

    if (notificationToggle) {

      notificationToggle.checked =
        appData.settings.notifications;

      notificationToggle.addEventListener(
        "change",
        function () {

          appData.settings.notifications =
            notificationToggle.checked;

          saveData();

        }
      );

    }


    const darkModeToggle =
      $("#darkModeToggle");

    if (darkModeToggle) {

      darkModeToggle.checked =
        appData.settings.darkMode;

      darkModeToggle.addEventListener(
        "change",
        function () {

          appData.settings.darkMode =
            darkModeToggle.checked;

          saveData();

          applyDarkMode();

        }
      );

    }

  }


  function applyDarkMode() {

    if (
      appData.settings &&
      appData.settings.darkMode
    ) {

      document.body.classList.add(
        "dark-mode"
      );

    } else {

      document.body.classList.remove(
        "dark-mode"
      );

    }

  }


  /* =======================================================
     RESET PROGRESS
     ======================================================= */

  $$(".reset-progress-btn").forEach(function (button) {

    button.addEventListener(
      "click",
      function () {

        const confirmReset =
          confirm(
            "သင်ခန်းစာ Progress အားလုံးကို Reset လုပ်မလား?"
          );

        if (!confirmReset) {
          return;
        }

        appData.completedLessons = [];
        appData.dailyMinutes = 0;

        saveData();

        updateAll();

        alert(
          "Progress ကို Reset လုပ်ပြီးပါပြီ။"
        );

      }
    );

  });


  /* =======================================================
     COURSE OPEN BUTTONS
     ======================================================= */

  $$(".course-open-btn").forEach(function (button) {

    button.addEventListener(
      "click",
      function () {

        showPage("lessons");

      }
    );

  });


  /* =======================================================
     QUICK ACCESS
     ======================================================= */

  $$(".quick-btn").forEach(function (button) {

    button.addEventListener(
      "click",
      function () {

        const page =
          button.dataset.page;

        if (page) {
          showPage(page);
          return;
        }

        const action =
          button.dataset.action;

        if (action === "lesson") {
          showPage("lessons");
        }

        if (action === "calculator") {
          showPage("calculator");
        }

        if (action === "coach") {
          showPage("coach");
        }

        if (action === "sales") {
          showPage("sales");
        }

      }
    );

  });


  /* =======================================================
     GENERIC BUTTON PAGE LINKS
     ======================================================= */

  $$("button[data-go]").forEach(function (button) {

    button.addEventListener(
      "click",
      function () {

        const page =
          button.dataset.go;

        if (page) {
          showPage(page);
        }

      }
    );

  });


  /* =======================================================
     UPDATE ALL
     ======================================================= */

  function updateAll() {

    updateDashboard();
    updateProgressPage();
    updateCourseProgress();
    renderLessons();

  }


  /* =======================================================
     INITIALIZE
     ======================================================= */

  loadSettings();

  applyDarkMode();

  renderLessons();

  updateDashboard();

  updateProgressPage();

  updateCourseProgress();

  calculatePricing();


  /* =======================================================
     DEFAULT PAGE
     ======================================================= */

  showPage("dashboard");


  console.log(
    "Aung Business Academy V8 loaded successfully."
  );

});
