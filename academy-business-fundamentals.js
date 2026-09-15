/* =========================================================
   AUNG BUSINESS ACADEMY
   BUSINESS FUNDAMENTALS COURSE
   Burmese Professional Lessons
   ========================================================= */

(function () {
  "use strict";

  const BUSINESS_COURSE = {
    id: "business-fundamentals",
    category: "BUSINESS",
    icon: "📚",
    title: "Business Fundamentals",
    burmeseTitle: "စီးပွားရေးလုပ်ငန်း အခြေခံ",
    description:
      "Business Model, Customer, Value Proposition, Revenue, Cost, Profit, Competition နှင့် Business Planning အခြေခံများကို နားလည်နိုင်ရန်။"
  };

  const BUSINESS_LESSONS = [

    {
      id: "business-01",
      title: "Lesson 01 — What is Business? | Business ဆိုတာဘာလဲ",

      objective: `
        Business ရဲ့ အဓိပ္ပါယ်၊ အဓိကအစိတ်အပိုင်းများနှင့်
        Business တစ်ခု ဘယ်လို Value ဖန်တီးပြီး ဝင်ငွေရသလဲ
        နားလည်နိုင်ရန်။
      `,

      content: `
        <h2>🏢 Business ဆိုတာဘာလဲ</h2>

        <p>
          Business ဆိုတာ Customer ရဲ့ လိုအပ်ချက် သို့မဟုတ်
          ပြဿနာတစ်ခုကို ဖြေရှင်းပေးပြီး တန်ဖိုးတစ်ခု
          ဖန်တီးပေးကာ အဲဒီ Value အတွက် Revenue ရရှိအောင်
          လုပ်ဆောင်တဲ့ စီးပွားရေးလုပ်ငန်းဖြစ်ပါတယ်။
        </p>

        <h3>Business ရဲ့ အခြေခံ ၅ ခု</h3>

        <ul>
          <li>Customer — ဘယ်သူ့အတွက်လဲ?</li>
          <li>Problem — ဘာပြဿနာကို ဖြေရှင်းပေးမလဲ?</li>
          <li>Value — ဘာတန်ဖိုးပေးမလဲ?</li>
          <li>Revenue — ဘယ်လိုငွေရမလဲ?</li>
          <li>Cost — ဘာတွေကုန်ကျမလဲ?</li>
        </ul>

        <h3>Business Formula</h3>

        <p>
          <strong>
          Customer Need → Value → Product / Service →
          Sales → Revenue → Profit
          </strong>
        </p>

        <h3>Manager Thinking</h3>

        <p>
          Business ကို "ပစ္စည်းရောင်းတာ" လို့ပဲ မမြင်သင့်ပါဘူး။
          Customer ရဲ့ Problem ကို ဘယ်လောက်ကောင်းကောင်း
          ဖြေရှင်းပေးနိုင်သလဲဆိုတာက အဓိကဖြစ်ပါတယ်။
        </p>
      `,

      action: `
        ကိုယ့် Business ရဲ့ Customer, Problem, Value,
        Revenue နဲ့ Cost ကို တစ်ကြောင်းစီရေးပါ။
      `,

      quiz: `
        Business ရဲ့ အခြေခံအကျဆုံးအချက်က ဘာလဲ?<br><br>
        <strong>
        Customer ရဲ့ လိုအပ်ချက် သို့မဟုတ် ပြဿနာကို
        Value အဖြစ် ဖြေရှင်းပေးနိုင်ခြင်း ဖြစ်ပါတယ်။
        </strong>
      `
    },

    {
      id: "business-02",
      title: "Lesson 02 — Customer & Value Proposition | Customer နားလည်ခြင်း",

      objective: `
        Target Customer ကို သတ်မှတ်ပြီး Customer အတွက်
        တကယ်တန်ဖိုးရှိတဲ့ Value Proposition တည်ဆောက်နိုင်ရန်။
      `,

      content: `
        <h2>🎯 Customer ကို နားလည်ခြင်း</h2>

        <p>
          Business အောင်မြင်ဖို့ Product ကောင်းရုံနဲ့ မလုံလောက်ပါဘူး။
          ဘယ် Customer ကို ရောင်းမလဲ၊ Customer ဘာလိုချင်လဲ၊
          ဘာကြောင့် ကိုယ့် Product ကို ဝယ်သင့်လဲဆိုတာ
          သိရပါမယ်။
        </p>

        <h3>Customer Analysis</h3>

        <ul>
          <li>Who — ဘယ်သူလဲ?</li>
          <li>Need — ဘာလိုအပ်လဲ?</li>
          <li>Pain — ဘာအခက်အခဲရှိလဲ?</li>
          <li>Budget — ဘယ်လောက်သုံးနိုင်လဲ?</li>
          <li>Buying Behaviour — ဘယ်လိုဝယ်လဲ?</li>
        </ul>

        <h3>Value Proposition</h3>

        <p>
          Value Proposition ဆိုတာ Customer က
          "ဘာကြောင့် ဒီ Product / Service ကို ရွေးသင့်တာလဲ?"
          ဆိုတဲ့မေးခွန်းကို ဖြေပေးနိုင်တဲ့ Business Promise ဖြစ်ပါတယ်။
        </p>

        <p>
          ဥပမာ —
          "အရည်အသွေးကောင်းတယ်" ဆိုတာ အားနည်းတဲ့ Statement ဖြစ်နိုင်ပါတယ်။
          "အချိန် 24 နာရီအတွင်း Delivery ပေးပြီး
          အာမခံ 1 နှစ်ပါဝင်သည်" ဆိုတာ ပိုမိုတိကျပါတယ်။
        </p>
      `,

      action: `
        ကိုယ့် Product / Service အတွက်
        "Customer က ဘာကြောင့် ငါ့ဆီက ဝယ်သင့်သလဲ?"
        ဆိုတဲ့အဖြေ ၃ ခုရေးပါ။
      `,

      quiz: `
        Value Proposition ဆိုတာ?<br><br>
        <strong>
        Customer အတွက် ကိုယ့် Product / Service က
        ဘာတန်ဖိုးပေးသလဲဆိုတာ ရှင်းပြတဲ့ Business Promise ဖြစ်ပါတယ်။
        </strong>
      `
    },

    {
      id: "business-03",
      title: "Lesson 03 — Business Model | Business ဘယ်လိုငွေရှာသလဲ",

      objective: `
        Business Model ရဲ့ အဓိကအစိတ်အပိုင်းများနှင့်
        Revenue Model ကို နားလည်နိုင်ရန်။
      `,

      content: `
        <h2>💼 Business Model</h2>

        <p>
          Business Model ဆိုတာ Business က Customer ကို
          Value ပေးပြီး ဘယ်လို Revenue ရရှိကာ
          ဘယ်လို Profit ဖန်တီးသလဲဆိုတဲ့ လုပ်ငန်းပုံစံဖြစ်ပါတယ်။
        </p>

        <h3>Business Model ရဲ့ အဓိကအချက်များ</h3>

        <ul>
          <li>Customer Segments</li>
          <li>Value Proposition</li>
          <li>Channels</li>
          <li>Customer Relationships</li>
          <li>Revenue Streams</li>
          <li>Key Resources</li>
          <li>Key Activities</li>
          <li>Key Partners</li>
          <li>Cost Structure</li>
        </ul>

        <h3>Revenue Model ဥပမာ</h3>

        <ul>
          <li>Direct Sales</li>
          <li>Subscription</li>
          <li>Commission</li>
          <li>Service Fee</li>
          <li>Advertising</li>
          <li>Wholesale</li>
        </ul>

        <h3>Manager Thinking</h3>

        <p>
          Product ကောင်းရုံနဲ့ Business Model ကောင်းတယ်လို့
          မဆိုနိုင်ပါဘူး။ Customer ရလာတဲ့အခါ Revenue
          ဘယ်လိုပြောင်းမလဲဆိုတာ ရှင်းလင်းရပါမယ်။
        </p>
      `,

      action: `
        ကိုယ့် Business ရဲ့ Revenue Model ကို သတ်မှတ်ပြီး
        "Customer → Product → Payment" Flow တစ်ခုရေးပါ။
      `,

      quiz: `
        Business Model က ဘာကိုရှင်းပြတာလဲ?<br><br>
        <strong>
        Customer ကို Value ပေးပြီး Revenue နဲ့ Profit
        ဘယ်လိုဖန်တီးသလဲဆိုတာ ရှင်းပြတာဖြစ်ပါတယ်။
        </strong>
      `
    },

    {
      id: "business-04",
      title: "Lesson 04 — Business Strategy | စီးပွားရေးမဟာဗျူဟာ",

      objective: `
        Vision, Mission, Goals, Competitive Advantage နှင့်
        Strategy တို့ကို နားလည်ပြီး Business Direction သတ်မှတ်နိုင်ရန်။
      `,

      content: `
        <h2>🧭 Business Strategy</h2>

        <p>
          Strategy ဆိုတာ Business ရဲ့ အနာဂတ်ရည်မှန်းချက်ကို
          ရောက်ရှိအောင် ဘယ်နေရာမှာ ဘယ်လိုယှဉ်ပြိုင်မလဲဆိုတဲ့
          ရွေးချယ်မှုများဖြစ်ပါတယ်။
        </p>

        <h3>Vision</h3>

        <p>
          အနာဂတ်မှာ ဘယ်လို Business ဖြစ်ချင်သလဲ?
        </p>

        <h3>Mission</h3>

        <p>
          လက်ရှိမှာ ဘာလုပ်ပေးနေသလဲ?
        </p>

        <h3>Goal</h3>

        <p>
          ဘာရလဒ်ကို ဘယ်အချိန်အတွင်း ရချင်သလဲ?
        </p>

        <h3>Competitive Advantage</h3>

        <p>
          Competitor တွေထက် Customer က ကိုယ့် Business ကို
          ရွေးချယ်စေတဲ့ ထူးခြားတဲ့အားသာချက်ဖြစ်ပါတယ်။
        </p>

        <h3>Strategy Framework</h3>

        <p>
          Where are we now? → Where do we want to go? →
          How will we win? → What must we do?
        </p>
      `,

      action: `
        ကိုယ့် Business အတွက် Vision တစ်ကြောင်း၊
        Mission တစ်ကြောင်းနဲ့ 1-Year Goal တစ်ခုရေးပါ။
      `,

      quiz: `
        Strategy ဆိုတာ?<br><br>
        <strong>
        Business Goal ရောက်ဖို့ ဘယ်နေရာမှာ ဘယ်လိုယှဉ်ပြိုင်မလဲ
        ဆိုတဲ့ အဓိကရွေးချယ်မှုများ ဖြစ်ပါတယ်။
        </strong>
      `
    },

    {
      id: "business-05",
      title: "Lesson 05 — Market & Competitor Analysis",

      objective: `
        Market Size, Customer Trend, Competitor Strength နှင့်
        Market Opportunity များကို ခွဲခြမ်းစိတ်ဖြာနိုင်ရန်။
      `,

      content: `
        <h2>🔍 Market Analysis</h2>

        <p>
          Business မစတင်ခင် သို့မဟုတ် Strategy ပြောင်းလဲခင်
          Market ကို နားလည်ဖို့ လိုအပ်ပါတယ်။
        </p>

        <h3>Market မှာကြည့်ရမယ့်အချက်များ</h3>

        <ul>
          <li>Market Size</li>
          <li>Growth Rate</li>
          <li>Customer Demand</li>
          <li>Price Level</li>
          <li>Distribution Channels</li>
          <li>Market Trends</li>
        </ul>

        <h3>Competitor Analysis</h3>

        <table>
          <tr>
            <th>Factor</th>
            <th>ကိုယ့် Business</th>
            <th>Competitor</th>
          </tr>
          <tr>
            <td>Price</td>
            <td>?</td>
            <td>?</td>
          </tr>
          <tr>
            <td>Product</td>
            <td>?</td>
            <td>?</td>
          </tr>
          <tr>
            <td>Distribution</td>
            <td>?</td>
            <td>?</td>
          </tr>
          <tr>
            <td>Service</td>
            <td>?</td>
            <td>?</td>
          </tr>
        </table>

        <h3>Manager Rule</h3>

        <p>
          Competitor ကို Copy လုပ်ဖို့မဟုတ်ပါဘူး။
          Customer အတွက် ကိုယ်ဘယ်နေရာမှာ ပိုကောင်းနိုင်မလဲ
          ရှာဖွေဖို့ဖြစ်ပါတယ်။
        </p>
      `,

      action: `
        ကိုယ့် Business ရဲ့ အဓိက Competitor ၃ ခုကို ရွေးပြီး
        Price, Product, Distribution, Service တို့နဲ့
        နှိုင်းယှဉ်ပါ။
      `,

      quiz: `
        Competitor Analysis ရဲ့ ရည်ရွယ်ချက်က?<br><br>
        <strong>
        ကိုယ့် Business ရဲ့ Market Position နဲ့
        Competitive Opportunity ကို နားလည်ရန် ဖြစ်ပါတယ်။
        </strong>
      `
    },

    {
      id: "business-06",
      title: "Lesson 06 — Operations & Process Management",

      objective: `
        Business Operation, SOP, Process Flow နှင့်
        Efficiency ကို စနစ်တကျ စီမံနိုင်ရန်။
      `,

      content: `
        <h2>⚙️ Business Operations</h2>

        <p>
          Operations ဆိုတာ Business ရဲ့ Product / Service ကို
          Customer ဆီရောက်အောင် နေ့စဉ်လုပ်ဆောင်ရတဲ့
          Process အားလုံးဖြစ်ပါတယ်။
        </p>

        <h3>Process Example</h3>

        <p>
          Order → Stock Check → Invoice → Delivery →
          Payment → Customer Follow-up
        </p>

        <h3>SOP</h3>

        <p>
          SOP — Standard Operating Procedure ဆိုတာ
          အလုပ်တစ်ခုကို ဘယ်လိုလုပ်ရမလဲဆိုတာ
          Standard အဖြစ် သတ်မှတ်ထားတဲ့ လုပ်ထုံးလုပ်နည်းဖြစ်ပါတယ်။
        </p>

        <h3>Good Process ရဲ့ လက္ခဏာများ</h3>

        <ul>
          <li>Clear</li>
          <li>Simple</li>
          <li>Repeatable</li>
          <li>Measurable</li>
          <li>Accountable</li>
        </ul>

        <h3>Manager Thinking</h3>

        <p>
          လူတစ်ယောက်ကောင်းမှ အလုပ်ကောင်းတဲ့ System ထက်
          လူပြောင်းသွားရင်တောင် အလုပ်ဆက်ကောင်းနိုင်တဲ့
          Process တည်ဆောက်တာ ပိုကောင်းပါတယ်။
        </p>
      `,

      action: `
        ကိုယ့် Business မှာ အရေးကြီးတဲ့ Process တစ်ခုကို ရွေးပြီး
        Step 1 မှ Step 5 အထိ ရေးပါ။
      `,

      quiz: `
        SOP ရဲ့ အဓိကရည်ရွယ်ချက်က?<br><br>
        <strong>
        အလုပ်ကို Standard တစ်ခုတည်းနဲ့ တည်ငြိမ်စွာ
        ပြန်လည်လုပ်ဆောင်နိုင်စေရန် ဖြစ်ပါတယ်။
        </strong>
      `
    },

    {
      id: "business-07",
      title: "Lesson 07 — Business Risk Management",

      objective: `
        Business Risk များကို ရှာဖွေ၊ အကဲဖြတ်ပြီး
        ကြိုတင်ကာကွယ်နိုင်ရန်။
      `,

      content: `
        <h2>⚠️ Business Risk Management</h2>

        <p>
          Business Risk ဆိုတာ Business ရဲ့ Goal ကို
          ထိခိုက်စေနိုင်တဲ့ မသေချာမှု သို့မဟုတ်
          အန္တရာယ်ဖြစ်နိုင်ခြေ ဖြစ်ပါတယ်။
        </p>

        <h3>Risk အမျိုးအစားများ</h3>

        <ul>
          <li>Financial Risk</li>
          <li>Market Risk</li>
          <li>Operational Risk</li>
          <li>People Risk</li>
          <li>Technology Risk</li>
          <li>Reputation Risk</li>
          <li>Legal / Compliance Risk</li>
        </ul>

        <h3>Risk Matrix</h3>

        <table>
          <tr>
            <th>Risk</th>
            <th>Probability</th>
            <th>Impact</th>
          </tr>
          <tr>
            <td>Customer Loss</td>
            <td>Medium</td>
            <td>High</td>
          </tr>
          <tr>
            <td>Stock Shortage</td>
            <td>High</td>
            <td>Medium</td>
          </tr>
          <tr>
            <td>Staff Turnover</td>
            <td>Medium</td>
            <td>Medium</td>
          </tr>
        </table>

        <h3>Risk Response</h3>

        <p>
          Avoid → Reduce → Transfer → Accept
        </p>
      `,

      action: `
        ကိုယ့် Business ရဲ့ အကြီးဆုံး Risk ၅ ခုကို ရေးပြီး
        Probability, Impact နဲ့ Action Plan သတ်မှတ်ပါ။
      `,

      quiz: `
        Risk Management မှာ ဘာကို အရင်လုပ်သင့်သလဲ?<br><br>
        <strong>
        ဖြစ်နိုင်တဲ့ Risk ကို Identify လုပ်ပြီး
        Probability နဲ့ Impact ကို အကဲဖြတ်သင့်ပါတယ်။
        </strong>
      `
    },

    {
      id: "business-08",
      title: "Lesson 08 — Decision Making & Problem Solving",

      objective: `
        Business Problem များကို Root Cause အထိရှာဖွေပြီး
        Data အပေါ်အခြေခံကာ ဆုံးဖြတ်ချက်ချနိုင်ရန်။
      `,

      content: `
        <h2>🧠 Decision Making</h2>

        <p>
          Manager ရဲ့ အရေးကြီးဆုံးအရည်အချင်းတွေထဲမှာ
          မှန်ကန်တဲ့ Decision ချနိုင်ခြင်း ပါဝင်ပါတယ်။
        </p>

        <h3>Problem Solving Framework</h3>

        <ol>
          <li>Define the Problem</li>
          <li>Collect Data</li>
          <li>Find Root Cause</li>
          <li>Generate Options</li>
          <li>Evaluate Options</li>
          <li>Make Decision</li>
          <li>Execute</li>
          <li>Review Result</li>
        </ol>

        <h3>5 Whys</h3>

        <p>
          Problem တစ်ခုကို "ဘာကြောင့်?" ဆိုတဲ့မေးခွန်း
          ဆက်တိုက်မေးပြီး Root Cause ရှာဖွေတဲ့ နည်းလမ်းဖြစ်ပါတယ်။
        </p>

        <h3>Data vs Assumption</h3>

        <p>
          "Customer မကြိုက်လို့ Sales ကျတယ်" ဆိုတာ Assumption ဖြစ်နိုင်ပါတယ်။
          Customer Feedback, Sales Data, Market Data စတာတွေနဲ့
          အတည်ပြုရပါမယ်။
        </p>
      `,

      action: `
        လက်ရှိ Business Problem တစ်ခုကို ရွေးပြီး
        5 Whys နည်းလမ်းနဲ့ Root Cause ရှာပါ။
      `,

      quiz: `
        Problem Solving ရဲ့ အဓိကအချက်က?<br><br>
        <strong>
        ပြဿနာရဲ့ အပေါ်ယံလက္ခဏာကိုသာ မဖြေရှင်းဘဲ
        Root Cause ကို ရှာဖွေခြင်း ဖြစ်ပါတယ်။
        </strong>
      `
    },

    {
      id: "business-09",
      title: "Lesson 09 — Business Planning | လုပ်ငန်းစီမံကိန်း",

      objective: `
        Business Goal, Strategy, Action Plan, KPI နှင့်
        Timeline များပါဝင်တဲ့ Business Plan တစ်ခု တည်ဆောက်နိုင်ရန်။
      `,

      content: `
        <h2>📝 Business Planning</h2>

        <p>
          Business Plan ဆိုတာ Business ဘယ်ကိုသွားမလဲ၊
          ဘယ်လိုသွားမလဲ၊ ဘာတွေလိုမလဲဆိုတာ
          စနစ်တကျရေးဆွဲထားတဲ့ Plan ဖြစ်ပါတယ်။
        </p>

        <h3>Business Plan Structure</h3>

        <ol>
          <li>Business Overview</li>
          <li>Customer</li>
          <li>Market</li>
          <li>Competitor</li>
          <li>Product / Service</li>
          <li>Marketing Strategy</li>
          <li>Sales Strategy</li>
          <li>Operations</li>
          <li>People</li>
          <li>Financial Plan</li>
          <li>Risk Plan</li>
        </ol>

        <h3>Action Plan</h3>

        <table>
          <tr>
            <th>Goal</th>
            <th>Action</th>
            <th>Owner</th>
            <th>Deadline</th>
            <th>KPI</th>
          </tr>
          <tr>
            <td>Sales Growth</td>
            <td>New Customers</td>
            <td>Sales Team</td>
            <td>30 Days</td>
            <td>+20%</td>
          </tr>
        </table>

        <h3>Manager Rule</h3>

        <p>
          Plan မရှိရင် Activity များပေမယ့် Result မရနိုင်ပါဘူး။
          Goal → Action → Owner → Deadline → KPI
          ရှင်းလင်းရပါမယ်။
        </p>
      `,

      action: `
        လာမယ့် 90 ရက်အတွက် Business Goal ၃ ခုသတ်မှတ်ပြီး
        Goal တစ်ခုချင်းစီအတွက် Action, Owner, Deadline,
        KPI ရေးပါ။
      `,

      quiz: `
        Business Plan မှာ Goal တစ်ခုတည်းရှိရုံနဲ့ လုံလောက်သလား?<br><br>
        <strong>
        မလုံလောက်ပါ။ Goal ကိုရောက်အောင် Action,
        Owner, Deadline နဲ့ KPI လိုအပ်ပါတယ်။
        </strong>
      `
    },

    {
      id: "business-10",
      title: "Lesson 10 — Business Growth & Management System",

      objective: `
        Business ကို တစ်ဦးတစ်ယောက်ပေါ်မူတည်တဲ့ပုံစံမှ
        System, KPI, People နှင့် Process အပေါ်မူတည်ပြီး
        Scale လုပ်နိုင်တဲ့ Business အဖြစ် တည်ဆောက်နိုင်ရန်။
      `,

      content: `
        <h2>🚀 Business Growth System</h2>

        <p>
          Business ကြီးလာတာနဲ့အမျှ Owner သို့မဟုတ် Manager
          တစ်ယောက်တည်းက အရာအားလုံးကို ထိန်းချုပ်ဖို့ မဖြစ်နိုင်တော့ပါဘူး။
          System တည်ဆောက်ဖို့ လိုလာပါတယ်။
        </p>

        <h3>Business Management System</h3>

        <ul>
          <li>Clear Strategy</li>
          <li>Strong People</li>
          <li>Standard Process</li>
          <li>Financial Control</li>
          <li>Sales System</li>
          <li>Marketing System</li>
          <li>KPI Dashboard</li>
          <li>Regular Review</li>
        </ul>

        <h3>Growth Formula</h3>

        <p>
          <strong>
          People + Process + Technology + Capital + Customer
          = Sustainable Growth
          </strong>
        </p>

        <h3>Business Review Cycle</h3>

        <p>
          Plan → Execute → Measure → Learn → Improve → Repeat
        </p>

        <h3>Final Manager Thinking</h3>

        <p>
          Business တစ်ခုကို ကြီးထွားအောင်လုပ်ဖို့
          Sales တိုးအောင်လုပ်ရုံနဲ့ မလုံလောက်ပါဘူး။
        </p>

        <p>
          Sales + Marketing + Finance + People + Operations
          အားလုံးကို တစ်ခုတည်းသော Management System အဖြစ်
          ချိတ်ဆက်စီမံနိုင်ရပါမယ်။
        </p>

        <h3>Business Fundamentals Summary</h3>

        <p>
          Customer → Value → Product → Marketing → Sales →
          Revenue → Finance → People → Operations →
          KPI → Growth
        </p>
      `,

      action: `
        ကိုယ့် Business အတွက်
        Sales, Marketing, Finance, HR, Operations ဆိုတဲ့
        Function ၅ ခုကို တစ်ခုချင်းစီမှာ လက်ရှိအားနည်းချက် ၁ ခု
        သတ်မှတ်ပြီး 90-Day Improvement Plan တစ်ခုရေးပါ။
      `,

      quiz: `
        Sustainable Business Growth အတွက် ဘာတွေလိုအပ်သလဲ?<br><br>
        <strong>
        Customer, People, Process, Finance, Technology နဲ့
        Management System တို့ကို ချိတ်ဆက်စီမံနိုင်ရပါမယ်။
        </strong>
      `
    }

  ];

  /* =========================================================
     LOCAL STORAGE
     ========================================================= */

  const STORAGE_KEY =
    "aung_business_academy_business_fundamentals_completed_v1";

  function getCompleted() {
    try {
      return JSON.parse(
        localStorage.getItem(STORAGE_KEY)
      ) || {};
    } catch (error) {
      return {};
    }
  }

  function saveCompleted(data) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(data)
    );
  }

  function isCompleted(id) {
    const completed = getCompleted();
    return completed[id] === true;
  }

  function getProgress() {

    const completed = getCompleted();

    const total =
      BUSINESS_LESSONS.length;

    const completedCount =
      BUSINESS_LESSONS.filter(function (lesson) {
        return completed[lesson.id] === true;
      }).length;

    const percent =
      total === 0
        ? 0
        : Math.round(
            (completedCount / total) * 100
          );

    return {
      completed: completedCount,
      total: total,
      percent: percent
    };
  }

  function completeLesson(id) {

    const completed = getCompleted();

    completed[id] = true;

    saveCompleted(completed);

    const progress = getProgress();

    window.dispatchEvent(
      new CustomEvent(
        "aungAcademyProgressUpdated",
        {
          detail: {
            courseId:
              BUSINESS_COURSE.id,
            lessonId: id,
            progress: progress
          }
        }
      )
    );

    return progress;
  }

  /* =========================================================
     REGISTER COURSE
     ========================================================= */

  window.AungBusinessAcademy =
    window.AungBusinessAcademy || {};

  window.AungBusinessAcademy.BUSINESS_COURSE =
    BUSINESS_COURSE;

  window.AungBusinessAcademy.BUSINESS_LESSONS =
    BUSINESS_LESSONS;

  window.AungBusinessAcademy.getBusinessProgress =
    getProgress;

  window.AungBusinessAcademy.completeBusinessLesson =
    completeLesson;

  window.AungBusinessAcademy.isBusinessLessonCompleted =
    isCompleted;

  window.AungBusinessAcademy.COURSES =
    window.AungBusinessAcademy.COURSES || [];

  const alreadyExists =
    window.AungBusinessAcademy.COURSES.some(
      function (course) {
        return course.id === BUSINESS_COURSE.id;
      }
    );

  if (!alreadyExists) {

    window.AungBusinessAcademy.COURSES.push({
      ...BUSINESS_COURSE,
      lessons: BUSINESS_LESSONS
    });

  }

  console.log(
    "Aung Business Academy — Business Fundamentals loaded: 10 lessons"
  );

})();
