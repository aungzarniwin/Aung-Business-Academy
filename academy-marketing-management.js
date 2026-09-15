/* =========================================================
   AUNG BUSINESS ACADEMY
   MARKETING MANAGEMENT COURSE
   Burmese Professional Lessons
   ========================================================= */

(function () {
  "use strict";

  const MARKETING_COURSE = {
    id: "marketing-management",
    category: "MARKETING",
    icon: "📣",
    title: "Marketing Management",
    burmeseTitle: "Marketing စီမံခန့်ခွဲမှု",
    description:
      "စီးပွားရေးလုပ်ငန်းတစ်ခုအတွက် Customer, Market, Brand, Promotion နှင့် Marketing Strategy များကို စနစ်တကျ စီမံခန့်ခွဲနိုင်ရန် လေ့လာခြင်း။"
  };

  const MARKETING_LESSONS = [

    /* =====================================================
       LESSON 01
       ===================================================== */

    {
      id: "marketing-01",
      title: "Lesson 01 — Marketing Fundamentals | Marketing အခြေခံ",

      objective: `
        Marketing ဆိုတာ ဘာလဲ၊ Sales နဲ့ Marketing ဘာကွာသလဲ၊
        Customer ကို ဘယ်လိုနားလည်ပြီး Business Growth အတွက်
        Marketing ကို ဘယ်လိုအသုံးချရမလဲဆိုတာ နားလည်နိုင်ရန်။
      `,

      content: `
        <h2>📚 Marketing ဆိုတာဘာလဲ</h2>

        <p>
          Marketing ဆိုတာ Product တစ်ခုကို ကြော်ငြာရုံ၊ Facebook Post တင်ရုံ
          မဟုတ်ပါဘူး။ Customer ဘာလိုချင်သလဲ၊ ဘယ်သူက ဝယ်နိုင်သလဲ၊
          ဘာကြောင့် ကိုယ့် Product ကို ရွေးသင့်သလဲဆိုတာကို နားလည်ပြီး
          Customer Value ဖန်တီးပေးတဲ့ Business Function တစ်ခုဖြစ်ပါတယ်။
        </p>

        <h3>Marketing ရဲ့ အဓိကအလုပ်များ</h3>

        <ul>
          <li>Customer ကို သတ်မှတ်ခြင်း</li>
          <li>Market ကို လေ့လာခြင်း</li>
          <li>Customer Need ကို နားလည်ခြင်း</li>
          <li>Product Value ကို သတ်မှတ်ခြင်း</li>
          <li>Brand Positioning ပြုလုပ်ခြင်း</li>
          <li>Promotion Channel ရွေးချယ်ခြင်း</li>
          <li>Customer Relationship တည်ဆောက်ခြင်း</li>
          <li>Marketing Result ကို တိုင်းတာခြင်း</li>
        </ul>

        <h3>Marketing နဲ့ Sales ကွာခြားချက်</h3>

        <table>
          <tr>
            <th>Marketing</th>
            <th>Sales</th>
          </tr>
          <tr>
            <td>Customer ကို ရှာဖွေပြီး စိတ်ဝင်စားအောင်လုပ်သည်</td>
            <td>Customer ကို ဝယ်ယူစေသည်</td>
          </tr>
          <tr>
            <td>Demand ဖန်တီးသည်</td>
            <td>Revenue ဖန်တီးသည်</td>
          </tr>
          <tr>
            <td>Brand နှင့် Market ကို တည်ဆောက်သည်</td>
            <td>Deal ကို Close လုပ်သည်</td>
          </tr>
        </table>

        <h3>Manager တစ်ယောက်အနေနဲ့</h3>

        <p>
          Marketing Manager သည် "Post ဘယ်နှစ်ခုတင်လဲ" ဆိုတာထက်
          "Marketing လုပ်ပြီး Business Result ဘယ်လောက်ရလာလဲ"
          ကို ပိုအာရုံစိုက်ရပါမယ်။
        </p>
      `,

      action: `
        ကိုယ့်လုပ်ငန်းအတွက် Customer ၃ မျိုးရေးပါ။
        တစ်မျိုးစီအတွက် Customer က ဘာလိုချင်သလဲ၊
        ကိုယ့် Product က ဘာ Value ပေးနိုင်သလဲ ရေးပါ။
      `,

      quiz: `
        Marketing ရဲ့ အဓိကရည်ရွယ်ချက်က ဘာလဲ?<br><br>
        A. Post တင်ရန်<br>
        B. Customer Value ဖန်တီးပြီး Business Growth ရရှိရန်<br>
        C. Discount ပေးရန်<br>
        D. Logo ပြုလုပ်ရန်<br><br>
        <strong>အဖြေ — B</strong>
      `
    },

    /* =====================================================
       LESSON 02
       ===================================================== */

    {
      id: "marketing-02",
      title: "Lesson 02 — Customer & Market Understanding | Customer နားလည်ခြင်း",

      objective: `
        Customer ဘယ်သူလဲ၊ Customer Need, Pain Point, Buying Behavior
        တို့ကို ရှာဖွေပြီး Marketing Strategy တည်ဆောက်နိုင်ရန်။
      `,

      content: `
        <h2>👥 Customer ကို နားလည်ခြင်း</h2>

        <p>
          Marketing Strategy ကောင်းတစ်ခုရဲ့ အစဟာ Customer ကို
          နားလည်ခြင်းဖြစ်ပါတယ်။ Customer ကို မသိဘဲ Promotion လုပ်ရင်
          Budget ကုန်နိုင်ပေမယ့် Result မရနိုင်ပါဘူး။
        </p>

        <h3>Customer ကို လေ့လာရာမှာ သိသင့်တဲ့အချက်များ</h3>

        <ul>
          <li>အသက်</li>
          <li>နေရာ</li>
          <li>အလုပ်အကိုင်</li>
          <li>ဝင်ငွေအဆင့်</li>
          <li>လိုအပ်ချက်</li>
          <li>ဝယ်ယူသည့်အကြောင်းရင်း</li>
          <li>မဝယ်ဖြစ်စေတဲ့အကြောင်းရင်း</li>
          <li>ဘယ် Channel ကနေ Information ရသလဲ</li>
        </ul>

        <h3>Customer Pain Point</h3>

        <p>
          Customer Pain Point ဆိုတာ Customer ကြုံတွေ့နေရတဲ့
          ပြဿနာ၊ အခက်အခဲ သို့မဟုတ် မကျေနပ်မှု ဖြစ်ပါတယ်။
        </p>

        <p>
          Business တစ်ခုက Pain Point ကို ကောင်းကောင်းဖြေရှင်းပေးနိုင်ရင်
          Customer အတွက် Product ရဲ့ Value တက်လာပါတယ်။
        </p>

        <h3>Customer Persona</h3>

        <p>
          Customer Persona ဆိုတာ ကိုယ့်ရဲ့ Ideal Customer ကို
          ကိုယ်စားပြုဖော်ပြထားတဲ့ Profile ဖြစ်ပါတယ်။
        </p>
      `,

      action: `
        ကိုယ့် Business ရဲ့ Ideal Customer တစ်ယောက်ကို သတ်မှတ်ပြီး
        သူ့ရဲ့ အသက်၊ အလုပ်၊ ဝင်ငွေ၊ လိုအပ်ချက်၊ Pain Point နဲ့
        Buying Reason ကို ရေးပါ။
      `,

      quiz: `
        Customer Persona ရဲ့ အဓိကအကျိုးကျေးဇူးက?<br><br>
        A. Customer ကို ပိုမိုနားလည်စေခြင်း<br>
        B. Accounting လုပ်ခြင်း<br>
        C. Stock ရေတွက်ခြင်း<br>
        D. Salary တွက်ခြင်း<br><br>
        <strong>အဖြေ — A</strong>
      `
    },

    /* =====================================================
       LESSON 03
       ===================================================== */

    {
      id: "marketing-03",
      title: "Lesson 03 — Market Research | စျေးကွက်လေ့လာခြင်း",

      objective: `
        Market Size, Customer Demand, Competitor နှင့် Market Trend
        များကို လေ့လာပြီး Data-based Marketing Decision ချနိုင်ရန်။
      `,

      content: `
        <h2>🔎 Market Research</h2>

        <p>
          Market Research ဆိုတာ ကိုယ့်လုပ်ငန်းနဲ့ သက်ဆိုင်တဲ့
          Customer, Competitor, Market Trend နဲ့ Demand တွေကို
          Data အပေါ်အခြေခံပြီး လေ့လာခြင်းဖြစ်ပါတယ်။
        </p>

        <h3>Market Research အမျိုးအစား</h3>

        <ul>
          <li>Primary Research — Customer ကို တိုက်ရိုက်မေးခြင်း</li>
          <li>Secondary Research — ရှိပြီးသား Report/Data ကို လေ့လာခြင်း</li>
          <li>Competitor Research — ပြိုင်ဘက်များကို လေ့လာခြင်း</li>
          <li>Trend Research — စျေးကွက်ပြောင်းလဲမှုကို လေ့လာခြင်း</li>
        </ul>

        <h3>Competitor ကို လေ့လာရာမှာ</h3>

        <table>
          <tr>
            <th>အချက်</th>
            <th>လေ့လာရန်</th>
          </tr>
          <tr>
            <td>Product</td>
            <td>Quality / Variety / Features</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>Price Position</td>
          </tr>
          <tr>
            <td>Promotion</td>
            <td>Campaign / Offer</td>
          </tr>
          <tr>
            <td>Distribution</td>
            <td>ဘယ်နေရာတွေမှာ ရနိုင်သလဲ</td>
          </tr>
          <tr>
            <td>Brand</td>
            <td>Customer Perception</td>
          </tr>
        </table>

        <h3>Manager Thinking</h3>

        <p>
          "ငါထင်တာ" ထက် "Data ကဘာပြောလဲ" ဆိုတဲ့ Mindset ကို
          Marketing Manager တစ်ယောက်က အသုံးပြုသင့်ပါတယ်။
        </p>
      `,

      action: `
        ကိုယ့် Business နဲ့ တိုက်ရိုက်ယှဉ်ပြိုင်နေတဲ့ Competitor ၃ ခုရွေးပြီး
        Product, Price, Promotion, Distribution ကို နှိုင်းယှဉ်ရေးပါ။
      `,

      quiz: `
        Primary Research ဆိုတာ?<br><br>
        <strong>အဖြေ — Customer သို့မဟုတ် Market ကို တိုက်ရိုက်
        Data စုဆောင်းခြင်း</strong>
      `
    },

    /* =====================================================
       LESSON 04
       ===================================================== */

    {
      id: "marketing-04",
      title: "Lesson 04 — Segmentation & Targeting | STP",

      objective: `
        Market Segmentation, Targeting နှင့် Positioning ကို အသုံးပြုပြီး
        Marketing အရင်းအမြစ်များကို အကျိုးရှိစွာ အသုံးချနိုင်ရန်။
      `,

      content: `
        <h2>🎯 STP Marketing Framework</h2>

        <h3>1. Segmentation</h3>

        <p>
          Market တစ်ခုလုံးကို Customer Characteristics တူညီတဲ့
          အုပ်စုများအဖြစ် ခွဲခြားခြင်းဖြစ်ပါတယ်။
        </p>

        <ul>
          <li>Demographic</li>
          <li>Geographic</li>
          <li>Psychographic</li>
          <li>Behavioral</li>
        </ul>

        <h3>2. Targeting</h3>

        <p>
          ခွဲထားတဲ့ Segment တွေထဲက ကိုယ့် Business အတွက်
          အကျိုးအမြတ်အကောင်းဆုံး Target Customer ကို ရွေးချယ်ခြင်း။
        </p>

        <h3>3. Positioning</h3>

        <p>
          Customer ရဲ့ စိတ်ထဲမှာ ကိုယ့် Brand ကို
          ဘယ်လိုနေရာချမလဲဆိုတာ သတ်မှတ်ခြင်းဖြစ်ပါတယ်။
        </p>

        <h3>ဥပမာ</h3>

        <p>
          Premium Coffee Brand တစ်ခုက Customer အားလုံးကို
          Target မလုပ်ဘဲ ဝင်ငွေအလယ်အလတ်နှင့် အထက်ရှိတဲ့
          Office Professionals ကို Target လုပ်နိုင်ပါတယ်။
        </p>
      `,

      action: `
        ကိုယ့် Product အတွက် Market Segment ၃ ခုရေးပြီး
        အကောင်းဆုံး Target Segment တစ်ခုရွေးပါ။
        ထို Target Customer ရဲ့ စိတ်ထဲမှာ Brand ကို
        ဘယ်လို Position ချမလဲရေးပါ။
      `,

      quiz: `
        STP ရဲ့ အစဉ်လိုက်မှာ?<br><br>
        <strong>Segmentation → Targeting → Positioning</strong>
      `
    },

    /* =====================================================
       LESSON 05
       ===================================================== */

    {
      id: "marketing-05",
      title: "Lesson 05 — Marketing Mix | 4Ps",

      objective: `
        Product, Price, Place, Promotion ဆိုတဲ့ Marketing Mix 4Ps ကို
        Business Strategy ထဲမှာ အသုံးချနိုင်ရန်။
      `,

      content: `
        <h2>📦 Marketing Mix — 4Ps</h2>

        <h3>1. Product</h3>

        <p>
          Customer Problem ကို ဖြေရှင်းပေးနိုင်တဲ့ Product/Service
          ကို သတ်မှတ်ရပါတယ်။
        </p>

        <h3>2. Price</h3>

        <p>
          Customer Willingness to Pay၊ Cost၊ Competitor Price နဲ့
          Desired Margin တို့ကို စဉ်းစားပြီး Price သတ်မှတ်ရပါတယ်။
        </p>

        <h3>3. Place</h3>

        <p>
          Customer လွယ်လွယ်ကူကူ ဝယ်ယူနိုင်အောင်
          Distribution Channel ကို သတ်မှတ်ခြင်းဖြစ်ပါတယ်။
        </p>

        <h3>4. Promotion</h3>

        <p>
          Customer ကို Product အကြောင်း သိစေရန်၊ စိတ်ဝင်စားစေရန်၊
          ဝယ်ယူစေရန် Communication လုပ်ခြင်းဖြစ်ပါတယ်။
        </p>

        <table>
          <tr>
            <th>4P</th>
            <th>Manager မေးရမယ့်မေးခွန်း</th>
          </tr>
          <tr>
            <td>Product</td>
            <td>Customer ဘာ Problem ဖြေရှင်းပေးသလဲ?</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>Customer ပေးချင်တဲ့ Price နဲ့ကိုက်ညီသလား?</td>
          </tr>
          <tr>
            <td>Place</td>
            <td>Customer ဘယ်မှာဝယ်မလဲ?</td>
          </tr>
          <tr>
            <td>Promotion</td>
            <td>Customer ကို ဘယ်လိုရောက်အောင်ပြောမလဲ?</td>
          </tr>
        </table>
      `,

      action: `
        ကိုယ့် Product တစ်ခုကိုရွေးပြီး 4Ps တစ်ခုချင်းစီအတွက်
        လက်ရှိ Strategy ကိုရေးပါ။ ဘယ် P ကို ပိုကောင်းအောင်လုပ်နိုင်သလဲ
        သတ်မှတ်ပါ။
      `,

      quiz: `
        4Ps မှာ မပါဝင်တာက?<br><br>
        A. Product<br>
        B. Price<br>
        C. Place<br>
        D. People<br><br>
        <strong>အဖြေ — D</strong>
      `
    },

    /* =====================================================
       LESSON 06
       ===================================================== */

    {
      id: "marketing-06",
      title: "Lesson 06 — Brand Management | Brand တည်ဆောက်ခြင်း",

      objective: `
        Brand Identity, Brand Positioning, Brand Promise နှင့်
        Customer Perception ကို နားလည်ပြီး Brand တည်ဆောက်နိုင်ရန်။
      `,

      content: `
        <h2>🏷️ Brand Management</h2>

        <p>
          Brand ဆိုတာ Logo တစ်ခုတည်းမဟုတ်ပါဘူး။
          Customer ရဲ့စိတ်ထဲမှာ ကိုယ့် Business အပေါ်ရှိတဲ့
          Perception နဲ့ Experience အားလုံးပေါင်းစပ်ထားတာဖြစ်ပါတယ်။
        </p>

        <h3>Brand ရဲ့ အဓိကအစိတ်အပိုင်းများ</h3>

        <ul>
          <li>Brand Name</li>
          <li>Visual Identity</li>
          <li>Brand Promise</li>
          <li>Brand Personality</li>
          <li>Customer Experience</li>
          <li>Brand Reputation</li>
        </ul>

        <h3>Strong Brand ရဲ့ လက္ခဏာ</h3>

        <ul>
          <li>Customer မှတ်မိလွယ်ခြင်း</li>
          <li>Competitor နဲ့ ကွဲပြားခြင်း</li>
          <li>ယုံကြည်မှုရှိခြင်း</li>
          <li>Consistent Experience ရှိခြင်း</li>
          <li>Customer Loyalty ရရှိခြင်း</li>
        </ul>

        <h3>Brand Promise</h3>

        <p>
          Brand Promise ဆိုတာ Customer ကို ကိုယ်ပေးမယ့်
          Value နဲ့ Experience အပေါ် ကတိပြုထားခြင်းဖြစ်ပါတယ်။
        </p>
      `,

      action: `
        ကိုယ့် Brand အတွက် "Customer က ဘာကြောင့် ငါတို့ကို
        ရွေးသင့်သလဲ" ဆိုတဲ့ စာကြောင်းတစ်ကြောင်းရေးပါ။
      `,

      quiz: `
        Brand ဆိုတာ Logo တစ်ခုတည်းလား?<br><br>
        <strong>မဟုတ်ပါ။ Customer ရဲ့ Perception နှင့် Experience
        အပါအဝင် Brand တစ်ခုလုံးကို ဆိုလိုပါတယ်။</strong>
      `
    },

    /* =====================================================
       LESSON 07
       ===================================================== */

    {
      id: "marketing-07",
      title: "Lesson 07 — Digital Marketing | Digital Channel",

      objective: `
        Digital Marketing Channel များ၊ Content Strategy နှင့်
        Customer Journey ကို အသုံးပြုပြီး Online Marketing
        Strategy တည်ဆောက်နိုင်ရန်။
      `,

      content: `
        <h2>💻 Digital Marketing</h2>

        <p>
          Digital Marketing ဆိုတာ Internet နဲ့ Digital Platform
          တွေကို အသုံးပြုပြီး Customer ကို ရောက်ရှိအောင်
          Marketing လုပ်ခြင်းဖြစ်ပါတယ်။
        </p>

        <h3>အဓိက Digital Channels</h3>

        <ul>
          <li>Facebook</li>
          <li>TikTok</li>
          <li>YouTube</li>
          <li>Website</li>
          <li>Email Marketing</li>
          <li>Search Engine</li>
          <li>Messenger / Chat Channels</li>
        </ul>

        <h3>Content Pillars</h3>

        <p>
          Content ကို တစ်မျိုးတည်းမလုပ်ဘဲ အုပ်စုခွဲထားသင့်ပါတယ်။
        </p>

        <ul>
          <li>Educational Content</li>
          <li>Product Content</li>
          <li>Customer Story</li>
          <li>Problem-Solution Content</li>
          <li>Brand Content</li>
          <li>Promotional Content</li>
        </ul>

        <h3>Digital Marketing KPI</h3>

        <ul>
          <li>Reach</li>
          <li>Engagement</li>
          <li>Click Through Rate</li>
          <li>Lead</li>
          <li>Conversion</li>
          <li>Customer Acquisition Cost</li>
          <li>Return on Ad Spend</li>
        </ul>
      `,

      action: `
        ကိုယ့် Business အတွက် Content Pillar ၄ ခု သတ်မှတ်ပြီး
        တစ်ပတ်စာ Content Plan ရေးပါ။
      `,

      quiz: `
        Digital Marketing မှာ Likes တစ်ခုတည်းနဲ့ Success ကို
        ဆုံးဖြတ်သင့်သလား?<br><br>
        <strong>မသင့်ပါ။ Business Result, Leads, Conversion,
        Revenue စတဲ့ KPI တွေပါ ကြည့်ရပါတယ်။</strong>
      `
    },

    /* =====================================================
       LESSON 08
       ===================================================== */

    {
      id: "marketing-08",
      title: "Lesson 08 — Marketing Campaign Management",

      objective: `
        Marketing Campaign တစ်ခုကို Objective သတ်မှတ်ခြင်းမှ
        Budget, Channel, Execution နှင့် Result Evaluation အထိ
        စနစ်တကျ စီမံနိုင်ရန်။
      `,

      content: `
        <h2>🚀 Marketing Campaign</h2>

        <p>
          Campaign ဆိုတာ သတ်မှတ်ထားတဲ့ Marketing Objective
          တစ်ခုကို အချိန်ကာလတစ်ခုအတွင်း ရရှိရန် စီမံထားတဲ့
          Marketing Activities အစုအဝေးဖြစ်ပါတယ်။
        </p>

        <h3>Campaign Planning Framework</h3>

        <ol>
          <li>Objective သတ်မှတ်ပါ</li>
          <li>Target Customer သတ်မှတ်ပါ</li>
          <li>Key Message သတ်မှတ်ပါ</li>
          <li>Channel ရွေးပါ</li>
          <li>Budget သတ်မှတ်ပါ</li>
          <li>Timeline သတ်မှတ်ပါ</li>
          <li>KPI သတ်မှတ်ပါ</li>
          <li>Result ပြန်လည်သုံးသပ်ပါ</li>
        </ol>

        <h3>SMART Objective</h3>

        <p>
          Campaign Objective ကို Specific, Measurable, Achievable,
          Relevant, Time-bound ဖြစ်အောင် သတ်မှတ်သင့်ပါတယ်။
        </p>

        <h3>ဥပမာ</h3>

        <p>
          "ရောင်းအားတိုးချင်တယ်" ဆိုတာ Objective အရမ်းကျယ်ပါတယ်။
          "၃၀ ရက်အတွင်း Product X ရောင်းအားကို 15% တိုးမယ်"
          ဆိုရင် ပိုမိုတိုင်းတာနိုင်တဲ့ Objective ဖြစ်ပါတယ်။
        </p>
      `,

      action: `
        ကိုယ့် Business အတွက် Campaign တစ်ခုရွေးပြီး
        Objective, Target, Channel, Budget, Timeline နဲ့ KPI
        ရေးပါ။
      `,

      quiz: `
        Campaign မစခင် KPI သတ်မှတ်သင့်သလား?<br><br>
        <strong>သတ်မှတ်သင့်ပါတယ်။ Result ကို တိုင်းတာနိုင်ဖို့ KPI လိုအပ်ပါတယ်။</strong>
      `
    },

    /* =====================================================
       LESSON 09
       ===================================================== */

    {
      id: "marketing-09",
      title: "Lesson 09 — Marketing Budget & ROI",

      objective: `
        Marketing Budget ချမှတ်ခြင်း၊ Marketing Cost ထိန်းချုပ်ခြင်းနှင့်
        ROI/ROAS ကို အသုံးပြုပြီး Marketing Investment ကို
        စီးပွားရေးရလဒ်နဲ့ ချိတ်ဆက်နိုင်ရန်။
      `,

      content: `
        <h2>💰 Marketing Budget</h2>

        <p>
          Marketing Budget ဆိုတာ Marketing Activities အတွက်
          သတ်မှတ်ထားတဲ့ Financial Resource ဖြစ်ပါတယ်။
        </p>

        <h3>Budget တွင် ပါဝင်နိုင်သော Cost များ</h3>

        <ul>
          <li>Advertising Cost</li>
          <li>Content Production</li>
          <li>Event Cost</li>
          <li>Promotion Cost</li>
          <li>Agency Cost</li>
          <li>Influencer Cost</li>
          <li>Research Cost</li>
        </ul>

        <h3>ROI</h3>

        <p>
          ROI = (Return - Investment) / Investment × 100
        </p>

        <p>
          Marketing မှာ Spend ဘယ်လောက်လုပ်ခဲ့လဲထက်
          အဲဒီ Spend က Business Return ဘယ်လောက်ပြန်ရလာလဲ
          ဆိုတာကို ကြည့်ရပါတယ်။
        </p>

        <h3>ROAS</h3>

        <p>
          ROAS = Revenue from Ads / Advertising Spend
        </p>

        <p>
          ဥပမာ Advertising Spend ၁ သိန်းသုံးပြီး
          Advertisement ကနေ Revenue ၅ သိန်းရရင်
          ROAS = 5x ဖြစ်ပါတယ်။
        </p>
      `,

      action: `
        Marketing Campaign တစ်ခုအတွက် Budget ၁၀ သိန်းသတ်မှတ်ပြီး
        Advertising, Content, Promotion စတဲ့ Category တွေအလိုက်
        Budget ခွဲရေးပါ။
      `,

      quiz: `
        ROAS က ဘာကိုတိုင်းတာသလဲ?<br><br>
        <strong>Advertising Spend ကနေ ပြန်ရတဲ့ Revenue ကို
        တိုင်းတာပါတယ်။</strong>
      `
    },

    /* =====================================================
       LESSON 10
       ===================================================== */

    {
      id: "marketing-10",
      title: "Lesson 10 — Marketing Performance Management",

      objective: `
        Marketing KPI များကို စောင့်ကြည့်ခြင်း၊ Dashboard ပြုလုပ်ခြင်း၊
        Campaign Result ခွဲခြမ်းခြင်းနှင့် Continuous Improvement
        ပြုလုပ်နိုင်ရန်။
      `,

      content: `
        <h2>📊 Marketing Performance Management</h2>

        <p>
          Marketing Manager တစ်ယောက်အတွက် Campaign လုပ်ပြီးတာနဲ့
          အလုပ်ပြီးသွားတာမဟုတ်ပါဘူး။ Data ကို ပြန်ကြည့်ပြီး
          ဘာကောင်းလဲ၊ ဘာမကောင်းလဲ၊ ဘာကိုပြင်ရမလဲဆိုတာ
          ဆုံးဖြတ်ရပါတယ်။
        </p>

        <h3>Marketing KPI Framework</h3>

        <table>
          <tr>
            <th>Stage</th>
            <th>KPI</th>
          </tr>
          <tr>
            <td>Awareness</td>
            <td>Reach / Impressions</td>
          </tr>
          <tr>
            <td>Engagement</td>
            <td>Engagement Rate</td>
          </tr>
          <tr>
            <td>Interest</td>
            <td>Clicks / Leads</td>
          </tr>
          <tr>
            <td>Conversion</td>
            <td>Sales / Conversion Rate</td>
          </tr>
          <tr>
            <td>Retention</td>
            <td>Repeat Purchase / Customer Retention</td>
          </tr>
        </table>

        <h3>Weekly Marketing Review</h3>

        <ol>
          <li>Target နဲ့ Actual ကို နှိုင်းယှဉ်ပါ</li>
          <li>Best Performing Channel ရှာပါ</li>
          <li>Underperforming Activity ရှာပါ</li>
          <li>Customer Feedback ကြည့်ပါ</li>
          <li>Budget Utilization စစ်ပါ</li>
          <li>Next Action သတ်မှတ်ပါ</li>
        </ol>

        <h3>Manager Rule</h3>

        <p>
          "လုပ်ပြီးပြီ" ဆိုတာထက်
          "Result ရလာပြီလား" ဆိုတာက Marketing Management မှာ
          ပိုအရေးကြီးပါတယ်။
        </p>

        <h3>Final Marketing Framework</h3>

        <p>
          Customer → Market → STP → Product → Brand →
          Promotion → Campaign → KPI → Review → Improvement
        </p>
      `,

      action: `
        ကိုယ့် Business အတွက် Marketing Dashboard တစ်ခုဖန်တီးပြီး
        KPI ၅ ခုရွေးပါ။ Weekly Review မှာ Target, Actual,
        Gap နဲ့ Next Action ကို မှတ်တမ်းတင်ပါ။
      `,

      quiz: `
        Marketing Performance Management ရဲ့ အဓိကရည်ရွယ်ချက်က?<br><br>
        A. Report ရေးရန်သာ<br>
        B. Data ကိုအသုံးပြုပြီး Marketing Result တိုးတက်အောင်လုပ်ရန်<br>
        C. Post များများတင်ရန်<br>
        D. Budget အကုန်သုံးရန်<br><br>
        <strong>အဖြေ — B</strong>
      `
    }

  ];

  /* =========================================================
     LOCAL STORAGE
     ========================================================= */

  const STORAGE_KEY =
    "aung_business_academy_marketing_management_completed_v1";

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

  function getProgress() {

    const completed = getCompleted();

    const total = MARKETING_LESSONS.length;

    const completedCount =
      MARKETING_LESSONS.filter(function (lesson) {
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

    window.dispatchEvent(
      new CustomEvent(
        "aungAcademyProgressUpdated",
        {
          detail: {
            courseId:
              MARKETING_COURSE.id,
            lessonId: id,
            progress:
              getProgress()
          }
        }
      )
    );

    return getProgress();
  }

  function isCompleted(id) {

    const completed = getCompleted();

    return completed[id] === true;
  }

  /* =========================================================
     REGISTER COURSE
     ========================================================= */

  window.AungBusinessAcademy =
    window.AungBusinessAcademy || {};

  window.AungBusinessAcademy.MARKETING_COURSE =
    MARKETING_COURSE;

  window.AungBusinessAcademy.MARKETING_LESSONS =
    MARKETING_LESSONS;

  window.AungBusinessAcademy.getMarketingProgress =
    getProgress;

  window.AungBusinessAcademy.completeMarketingLesson =
    completeLesson;

  window.AungBusinessAcademy.isMarketingLessonCompleted =
    isCompleted;

  /*
    Register inside generic course collection
  */

  window.AungBusinessAcademy.COURSES =
    window.AungBusinessAcademy.COURSES || [];

  const alreadyExists =
    window.AungBusinessAcademy.COURSES.some(
      function (course) {
        return course.id === MARKETING_COURSE.id;
      }
    );

  if (!alreadyExists) {

    window.AungBusinessAcademy.COURSES.push({
      ...MARKETING_COURSE,
      lessons: MARKETING_LESSONS
    });

  }

  console.log(
    "Aung Business Academy — Marketing Management loaded: 10 lessons"
  );

})();
