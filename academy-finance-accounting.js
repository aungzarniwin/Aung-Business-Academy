/* =========================================================
   AUNG BUSINESS ACADEMY
   FINANCE & ACCOUNTING COURSE
   Burmese Professional Lessons
   ========================================================= */

(function () {
  "use strict";

  const FINANCE_COURSE = {
    id: "finance-accounting",
    category: "FINANCE",
    icon: "💰",
    title: "Finance & Accounting",
    burmeseTitle: "ဘဏ္ဍာရေးနှင့် စာရင်းကိုင်",
    description:
      "Business တစ်ခုရဲ့ Revenue, Cost, Profit, Cash Flow, Budget နှင့် Financial Performance ကို နားလည်ပြီး စီမံခန့်ခွဲနိုင်ရန်။"
  };

  const FINANCE_LESSONS = [

    {
      id: "finance-01",
      title: "Lesson 01 — Business Finance Fundamentals | ဘဏ္ဍာရေးအခြေခံ",

      objective: `
        Business Finance ရဲ့ အဓိကသဘောတရားများ၊ Revenue,
        Cost, Profit နှင့် Cash တို့ရဲ့ ကွာခြားချက်ကို နားလည်ပြီး
        Manager တစ်ယောက်အနေနဲ့ Financial Decision ချနိုင်ရန်။
      `,

      content: `
        <h2>💰 Business Finance ဆိုတာဘာလဲ</h2>

        <p>
          Business Finance ဆိုတာ လုပ်ငန်းထဲမှာ ဝင်လာတဲ့ငွေ၊
          ထွက်သွားတဲ့ငွေ၊ ရင်းနှီးမြှုပ်နှံမှု၊ အမြတ်နဲ့
          ငွေကြေးအရင်းအမြစ်တွေကို စနစ်တကျ စီမံခန့်ခွဲခြင်းဖြစ်ပါတယ်။
        </p>

        <h3>Manager တစ်ယောက်သိထားရမယ့် အခြေခံ ၅ ခု</h3>

        <ul>
          <li>Revenue — ရောင်းအားမှရရှိသော ဝင်ငွေ</li>
          <li>Cost — လုပ်ငန်းကုန်ကျစရိတ်</li>
          <li>Profit — ဝင်ငွေထက် ကုန်ကျစရိတ်နည်းပြီး ကျန်ရှိသောအမြတ်</li>
          <li>Cash Flow — ငွေဝင်ငွေထွက် လည်ပတ်မှု</li>
          <li>Asset — လုပ်ငန်းပိုင်ဆိုင်သော အရင်းအမြစ်များ</li>
        </ul>

        <h3>Revenue ≠ Profit ≠ Cash</h3>

        <p>
          ရောင်းအားများတယ်ဆိုတာ အမြတ်များတယ်လို့ မဆိုလိုပါဘူး။
          အမြတ်ရှိတယ်ဆိုတာလည်း လက်ထဲမှာ Cash အမြဲရှိတယ်လို့ မဆိုလိုပါဘူး။
        </p>

        <p>
          ဥပမာ Customer က Credit နဲ့ ဝယ်သွားရင်
          Revenue ရှိနိုင်ပေမယ့် Cash မဝင်သေးနိုင်ပါဘူး။
        </p>

        <h3>Manager Thinking</h3>

        <p>
          "ရောင်းအား ဘယ်လောက်ရှိလဲ?" တစ်ခုတည်းမေးမယ့်အစား
          "ရောင်းအားကနေ အမြတ်ဘယ်လောက်ရလဲ၊ Cash ဘယ်လောက်ဝင်လဲ?"
          ဆိုတာကိုပါ မေးရပါမယ်။
        </p>
      `,

      action: `
        ကိုယ့်လုပ်ငန်းရဲ့ တစ်လစာ Revenue, Cost, Profit နဲ့
        Cash In / Cash Out ကို ခန့်မှန်းပြီး ရေးပါ။
      `,

      quiz: `
        Revenue ၁၀၀ သိန်းရတာနဲ့ Profit ၁၀၀ သိန်းရပြီလား?<br><br>
        <strong>မရပါ။ Revenue ထဲက Cost များကို နုတ်ပြီးမှ Profit ကို
        သိနိုင်ပါတယ်။</strong>
      `
    },

    {
      id: "finance-02",
      title: "Lesson 02 — Revenue, Cost & Profit | ဝင်ငွေ၊ ကုန်ကျစရိတ်၊ အမြတ်",

      objective: `
        Revenue, Fixed Cost, Variable Cost, Gross Profit နှင့်
        Net Profit ကို ခွဲခြားနားလည်နိုင်ရန်။
      `,

      content: `
        <h2>📊 Revenue & Cost Structure</h2>

        <h3>Revenue</h3>

        <p>
          Product သို့မဟုတ် Service ရောင်းချခြင်းမှ ရရှိတဲ့
          ဝင်ငွေကို Revenue လို့ခေါ်ပါတယ်။
        </p>

        <h3>Fixed Cost</h3>

        <p>
          ရောင်းအားတက်ကျတာနဲ့ အများကြီးမပြောင်းလဲတဲ့ Cost ဖြစ်ပါတယ်။
        </p>

        <ul>
          <li>Office Rent</li>
          <li>Basic Salary</li>
          <li>Software Subscription</li>
          <li>Insurance</li>
        </ul>

        <h3>Variable Cost</h3>

        <p>
          ရောင်းအား သို့မဟုတ် ထုတ်လုပ်မှုအရေအတွက်နဲ့အတူ
          တိုးကျသွားတဲ့ Cost ဖြစ်ပါတယ်။
        </p>

        <ul>
          <li>Product Cost</li>
          <li>Packaging</li>
          <li>Sales Commission</li>
          <li>Delivery Cost</li>
        </ul>

        <h3>Profit Formula</h3>

        <p>
          <strong>Profit = Revenue − Total Cost</strong>
        </p>

        <table>
          <tr>
            <th>Item</th>
            <th>Amount</th>
          </tr>
          <tr>
            <td>Revenue</td>
            <td>100 သိန်း</td>
          </tr>
          <tr>
            <td>Total Cost</td>
            <td>75 သိန်း</td>
          </tr>
          <tr>
            <td>Profit</td>
            <td>25 သိန်း</td>
          </tr>
        </table>
      `,

      action: `
        ကိုယ့် Business မှာ Fixed Cost ၅ ခုနဲ့ Variable Cost ၅ ခု
        စာရင်းပြုစုပါ။
      `,

      quiz: `
        Profit ကို ဘယ်လိုတွက်မလဲ?<br><br>
        <strong>Profit = Revenue − Total Cost</strong>
      `
    },

    {
      id: "finance-03",
      title: "Lesson 03 — Gross Profit & Net Profit | အမြတ်တွက်ချက်ခြင်း",

      objective: `
        Gross Profit နှင့် Net Profit ကို နားလည်ပြီး
        Business ရဲ့ တကယ့် Profitability ကို ခွဲခြမ်းနိုင်ရန်။
      `,

      content: `
        <h2>📈 Gross Profit vs Net Profit</h2>

        <h3>Gross Profit</h3>

        <p>
          Revenue ထဲက Cost of Goods Sold ကို နုတ်ပြီး ကျန်တဲ့အမြတ်ကို
          Gross Profit လို့ခေါ်ပါတယ်။
        </p>

        <p>
          <strong>Gross Profit = Revenue − COGS</strong>
        </p>

        <h3>Net Profit</h3>

        <p>
          Gross Profit ထဲက Operating Expenses နှင့်
          အခြားကုန်ကျစရိတ်များကို နုတ်ပြီး ကျန်တဲ့အမြတ်ဖြစ်ပါတယ်။
        </p>

        <p>
          <strong>Net Profit = Revenue − All Business Expenses</strong>
        </p>

        <h3>ဥပမာ</h3>

        <table>
          <tr>
            <th>Item</th>
            <th>Amount</th>
          </tr>
          <tr>
            <td>Revenue</td>
            <td>500 သိန်း</td>
          </tr>
          <tr>
            <td>COGS</td>
            <td>300 သိန်း</td>
          </tr>
          <tr>
            <td>Gross Profit</td>
            <td>200 သိန်း</td>
          </tr>
          <tr>
            <td>Operating Expenses</td>
            <td>120 သိန်း</td>
          </tr>
          <tr>
            <td>Net Profit</td>
            <td>80 သိန်း</td>
          </tr>
        </table>

        <h3>Manager Insight</h3>

        <p>
          Sales တိုးလာပေမယ့် Net Profit မတိုးဘူးဆိုရင်
          Cost Structure, Pricing နဲ့ Product Mix ကို ပြန်စစ်ရပါမယ်။
        </p>
      `,

      action: `
        ကိုယ့် Business ရဲ့ Revenue, COGS, Gross Profit,
        Operating Expense နဲ့ Net Profit ကို ခန့်မှန်းတွက်ပါ။
      `,

      quiz: `
        Gross Profit တွက်ရာမှာ အဓိကနုတ်ရတာက?<br><br>
        <strong>COGS — Cost of Goods Sold</strong>
      `
    },

    {
      id: "finance-04",
      title: "Lesson 04 — Profit Margin | အမြတ်ရာခိုင်နှုန်း",

      objective: `
        Gross Margin နှင့် Net Profit Margin ကို တွက်ချက်ပြီး
        Business Profitability ကို တိုင်းတာနိုင်ရန်။
      `,

      content: `
        <h2>📐 Profit Margin</h2>

        <p>
          Profit Margin ဆိုတာ ရောင်းအားထဲက ဘယ်လောက်ရာခိုင်နှုန်းကို
          အမြတ်အဖြစ် ထိန်းသိမ်းထားနိုင်သလဲဆိုတာ ပြတဲ့ Financial KPI ဖြစ်ပါတယ်။
        </p>

        <h3>Gross Margin</h3>

        <p>
          <strong>
          Gross Margin = Gross Profit ÷ Revenue × 100
          </strong>
        </p>

        <h3>Net Profit Margin</h3>

        <p>
          <strong>
          Net Margin = Net Profit ÷ Revenue × 100
          </strong>
        </p>

        <h3>ဥပမာ</h3>

        <p>
          Revenue = 100 သိန်း<br>
          Net Profit = 20 သိန်း
        </p>

        <p>
          Net Profit Margin = 20%
        </p>

        <h3>Margin ဘာကြောင့်အရေးကြီးသလဲ</h3>

        <ul>
          <li>Product Profitability နှိုင်းယှဉ်နိုင်ခြင်း</li>
          <li>Pricing Decision ချနိုင်ခြင်း</li>
          <li>Discount အကျိုးသက်ရောက်မှု သိနိုင်ခြင်း</li>
          <li>Business Health တိုင်းတာနိုင်ခြင်း</li>
        </ul>
      `,

      action: `
        ကိုယ့် Product ၃ ခုရဲ့ Selling Price နဲ့ Cost ကို ရေးပြီး
        Gross Margin တွက်ပါ။
      `,

      quiz: `
        Revenue 100 သိန်း၊ Net Profit 15 သိန်းဆိုရင်
        Net Margin ဘယ်လောက်လဲ?<br><br>
        <strong>15%</strong>
      `
    },

    {
      id: "finance-05",
      title: "Lesson 05 — Cash Flow Management | ငွေကြေးလည်ပတ်မှု",

      objective: `
        Cash Inflow, Cash Outflow, Operating Cash Flow နှင့်
        Cash Flow Management ရဲ့ အရေးပါမှုကို နားလည်နိုင်ရန်။
      `,

      content: `
        <h2>💵 Cash Flow Management</h2>

        <p>
          Business တစ်ခု Profit ရှိနေပေမယ့် Cash မရှိလို့
          လုပ်ငန်းလည်ပတ်မှုအခက်အခဲဖြစ်နိုင်ပါတယ်။
          ဒါကြောင့် Cash Flow ကို အမြဲစောင့်ကြည့်ရပါတယ်။
        </p>

        <h3>Cash Inflow</h3>

        <ul>
          <li>Customer Payment</li>
          <li>Cash Sales</li>
          <li>Loan Received</li>
          <li>Investment</li>
        </ul>

        <h3>Cash Outflow</h3>

        <ul>
          <li>Supplier Payment</li>
          <li>Salary</li>
          <li>Rent</li>
          <li>Utilities</li>
          <li>Tax</li>
          <li>Loan Repayment</li>
        </ul>

        <h3>Cash Flow Rule</h3>

        <p>
          <strong>
            Ending Cash = Opening Cash + Cash Inflow − Cash Outflow
          </strong>
        </p>

        <h3>Manager Practice</h3>

        <p>
          အနည်းဆုံး လာမယ့် ၄ ပတ်စာ Cash In / Cash Out
          Forecast ပြုလုပ်ထားသင့်ပါတယ်။
        </p>
      `,

      action: `
        လာမယ့် ၄ ပတ်အတွက် Cash Inflow နဲ့ Cash Outflow
        ခန့်မှန်းစာရင်းပြုလုပ်ပါ။
      `,

      quiz: `
        Profit ရှိပေမယ့် Cash မရှိနိုင်သလား?<br><br>
        <strong>ရှိနိုင်ပါတယ်။ အထူးသဖြင့် Credit Sales များတဲ့ Business တွေမှာ
        ဖြစ်နိုင်ပါတယ်။</strong>
      `
    },

    {
      id: "finance-06",
      title: "Lesson 06 — Budgeting & Financial Planning | Budget စီမံခြင်း",

      objective: `
        Business Budget တည်ဆောက်ခြင်း၊ Actual နဲ့ Budget ကို
        နှိုင်းယှဉ်ခြင်းနှင့် Financial Planning ပြုလုပ်နိုင်ရန်။
      `,

      content: `
        <h2>📋 Business Budget</h2>

        <p>
          Budget ဆိုတာ အနာဂတ်ကာလအတွက် Revenue, Cost,
          Investment နဲ့ Cash Flow ကို ကြိုတင်ခန့်မှန်းထားတဲ့
          Financial Plan ဖြစ်ပါတယ်။
        </p>

        <h3>Budget အမျိုးအစား</h3>

        <ul>
          <li>Sales Budget</li>
          <li>Marketing Budget</li>
          <li>Operating Expense Budget</li>
          <li>Capital Expenditure Budget</li>
          <li>Cash Flow Budget</li>
        </ul>

        <h3>Budget vs Actual</h3>

        <table>
          <tr>
            <th>Item</th>
            <th>Budget</th>
            <th>Actual</th>
          </tr>
          <tr>
            <td>Sales</td>
            <td>500</td>
            <td>450</td>
          </tr>
          <tr>
            <td>Expense</td>
            <td>200</td>
            <td>230</td>
          </tr>
          <tr>
            <td>Profit</td>
            <td>300</td>
            <td>220</td>
          </tr>
        </table>

        <h3>Variance</h3>

        <p>
          Budget နဲ့ Actual ကွာခြားချက်ကို Variance လို့ခေါ်ပါတယ်။
          Variance ကို ရှာပြီး အကြောင်းရင်းကို သိရပါမယ်။
        </p>
      `,

      action: `
        ကိုယ့်လုပ်ငန်းအတွက် လာမယ့်လ Revenue Target နဲ့
        Expense Budget ကို သတ်မှတ်ပြီး Budget Sheet တစ်ခုလုပ်ပါ။
      `,

      quiz: `
        Budget ရဲ့ အဓိကရည်ရွယ်ချက်က?<br><br>
        <strong>အနာဂတ် Financial Performance ကို စီမံခန့်မှန်းပြီး
        ထိန်းချုပ်နိုင်ရန်ဖြစ်ပါတယ်။</strong>
      `
    },

    {
      id: "finance-07",
      title: "Lesson 07 — Break-Even Analysis | အရှုံးအမြတ်မရှိမှတ်",

      objective: `
        Fixed Cost, Variable Cost နှင့် Contribution Margin ကို အသုံးပြုပြီး
        Break-Even Point တွက်ချက်နိုင်ရန်။
      `,

      content: `
        <h2>⚖️ Break-Even Point</h2>

        <p>
          Break-Even Point ဆိုတာ Business က အမြတ်လည်းမရ၊
          အရှုံးလည်းမရှိတဲ့ Sales Level ဖြစ်ပါတယ်။
        </p>

        <h3>Formula</h3>

        <p>
          <strong>
          Break-Even Units =
          Fixed Cost ÷ Contribution per Unit
          </strong>
        </p>

        <h3>ဥပမာ</h3>

        <p>
          Fixed Cost = 10 သိန်း<br>
          Selling Price = 10,000 ကျပ်<br>
          Variable Cost = 6,000 ကျပ်
        </p>

        <p>
          Contribution = 4,000 ကျပ်
        </p>

        <p>
          Break-Even Units =
          1,000,000 ÷ 4,000
          = 250 Units
        </p>

        <p>
          ဒါကြောင့် 250 Units ရောင်းပြီးမှ
          Break-Even ကျော်လွန်ပြီး အမြတ်စတင်ရရှိနိုင်ပါတယ်။
        </p>

        <h3>Manager အသုံးချနိုင်သည့်နေရာ</h3>

        <ul>
          <li>New Product Launch</li>
          <li>Pricing Decision</li>
          <li>Sales Target</li>
          <li>Investment Decision</li>
        </ul>
      `,

      action: `
        ကိုယ့် Product တစ်ခုရဲ့ Fixed Cost, Selling Price,
        Variable Cost ကို သတ်မှတ်ပြီး Break-Even Units တွက်ပါ။
      `,

      quiz: `
        Break-Even Point မှာ?<br><br>
        <strong>Profit = 0 ဖြစ်ပြီး Loss လည်းမရှိပါ။</strong>
      `
    },

    {
      id: "finance-08",
      title: "Lesson 08 — Working Capital Management | လည်ပတ်ငွေ",

      objective: `
        Inventory, Receivables, Payables နှင့် Working Capital
        ကို စီမံခန့်ခွဲပြီး Cash Flow တိုးတက်အောင်လုပ်နိုင်ရန်။
      `,

      content: `
        <h2>🔄 Working Capital</h2>

        <p>
          Working Capital ဆိုတာ နေ့စဉ်လုပ်ငန်းလည်ပတ်ဖို့ လိုအပ်တဲ့
          Current Assets နဲ့ Current Liabilities ဆိုင်ရာ
          Financial Resource ဖြစ်ပါတယ်။
        </p>

        <h3>အဓိကအစိတ်အပိုင်းများ</h3>

        <ul>
          <li>Cash</li>
          <li>Accounts Receivable</li>
          <li>Inventory</li>
          <li>Accounts Payable</li>
        </ul>

        <h3>Receivable Management</h3>

        <p>
          Customer က Credit နဲ့ဝယ်ပြီး ငွေမချေသေးရင်
          Company ရဲ့ Cash Flow ကို ထိခိုက်နိုင်ပါတယ်။
        </p>

        <h3>Inventory Management</h3>

        <p>
          Stock အများကြီးထားရင် Cash ပိတ်မိနိုင်ပါတယ်။
          Stock နည်းလွန်းရင် Sales Lost ဖြစ်နိုင်ပါတယ်။
        </p>

        <h3>Manager Balance</h3>

        <p>
          "Stock မပြတ်အောင်" နဲ့ "Cash မပိတ်အောင်"
          နှစ်ခုကို Balance လုပ်ရပါတယ်။
        </p>
      `,

      action: `
        ကိုယ့် Business ရဲ့ Receivable Days, Inventory Level နဲ့
        Supplier Payment Terms ကို စစ်ဆေးပြီး Cash ပိတ်နေတဲ့နေရာ
        ရှာပါ။
      `,

      quiz: `
        Inventory အလွန်များရင် ဘာဖြစ်နိုင်သလဲ?<br><br>
        <strong>Cash ပိတ်မိနိုင်ပြီး Working Capital အခက်အခဲ
        ဖြစ်နိုင်ပါတယ်။</strong>
      `
    },

    {
      id: "finance-09",
      title: "Lesson 09 — Financial Statements | Financial Report နားလည်ခြင်း",

      objective: `
        Income Statement, Balance Sheet နှင့် Cash Flow Statement
        တို့ကို Manager တစ်ယောက်အနေနဲ့ ဖတ်ရှုနားလည်နိုင်ရန်။
      `,

      content: `
        <h2>📑 Financial Statements</h2>

        <h3>1. Income Statement</h3>

        <p>
          သတ်မှတ်ထားတဲ့ ကာလတစ်ခုအတွင်း Revenue,
          Expenses နဲ့ Profit ကို ပြပါတယ်။
        </p>

        <h3>2. Balance Sheet</h3>

        <p>
          သတ်မှတ်ထားတဲ့နေ့တစ်နေ့မှာ Company ရဲ့ Assets,
          Liabilities နဲ့ Equity ကို ပြပါတယ်။
        </p>

        <p>
          <strong>
          Assets = Liabilities + Equity
          </strong>
        </p>

        <h3>3. Cash Flow Statement</h3>

        <p>
          Cash ဘယ်ကနေ ဝင်လာပြီး ဘယ်နေရာတွေမှာ ထွက်သွားသလဲ
          ပြပေးပါတယ်။
        </p>

        <h3>Manager က ဘာတွေကြည့်သင့်သလဲ</h3>

        <ul>
          <li>Sales Growth</li>
          <li>Gross Margin</li>
          <li>Net Profit</li>
          <li>Operating Expense</li>
          <li>Receivable</li>
          <li>Inventory</li>
          <li>Cash Balance</li>
        </ul>
      `,

      action: `
        နောက်ဆုံးရ Financial Report တစ်ခုရှိရင် Revenue,
        Gross Profit, Net Profit, Cash နဲ့ Receivable ကို
        အရင်ဆုံးရှာပြီး ဖတ်ကြည့်ပါ။
      `,

      quiz: `
        Income Statement က ဘာကိုအဓိကပြသလဲ?<br><br>
        <strong>Revenue, Expenses နဲ့ Profit ကို သတ်မှတ်ကာလအတွင်း
        ပြသပါတယ်။</strong>
      `
    },

    {
      id: "finance-10",
      title: "Lesson 10 — Financial Performance Management",

      objective: `
        Financial KPI များကို စောင့်ကြည့်ပြီး Business Profitability,
        Cash Flow နှင့် Cost Efficiency တိုးတက်အောင်
        Managerial Decision ချနိုင်ရန်။
      `,

      content: `
        <h2>📊 Financial Performance Management</h2>

        <p>
          Finance ကို Accounting Department တစ်ခုတည်းရဲ့
          အလုပ်လို့ မမြင်သင့်ပါဘူး။ Manager တိုင်းဟာ ကိုယ့်ရဲ့
          Decision က Revenue, Cost, Profit နဲ့ Cash Flow ကို
          ဘယ်လိုသက်ရောက်သလဲ သိထားသင့်ပါတယ်။
        </p>

        <h3>Financial KPI များ</h3>

        <table>
          <tr>
            <th>KPI</th>
            <th>ဘာကိုတိုင်းတာသလဲ</th>
          </tr>
          <tr>
            <td>Revenue Growth</td>
            <td>ဝင်ငွေတိုးတက်မှု</td>
          </tr>
          <tr>
            <td>Gross Margin</td>
            <td>Gross Profitability</td>
          </tr>
          <tr>
            <td>Net Margin</td>
            <td>နောက်ဆုံးအမြတ်နှုန်း</td>
          </tr>
          <tr>
            <td>Operating Expense Ratio</td>
            <td>Expense Efficiency</td>
          </tr>
          <tr>
            <td>Cash Conversion</td>
            <td>Cash လည်ပတ်မှု</td>
          </tr>
        </table>

        <h3>Monthly Finance Review</h3>

        <ol>
          <li>Revenue Target vs Actual</li>
          <li>Gross Profit vs Target</li>
          <li>Expense vs Budget</li>
          <li>Net Profit</li>
          <li>Cash Flow</li>
          <li>Receivable</li>
          <li>Inventory</li>
          <li>Next Month Action Plan</li>
        </ol>

        <h3>Manager Rule</h3>

        <p>
          Sales တိုးဖို့တစ်ခုတည်း မကြည့်ပါနဲ့။
          <strong>Profitable Growth</strong> ကို ရှာပါ။
        </p>

        <p>
          ရောင်းအားတိုးပြီး အမြတ်ကျသွားရင်
          အဲဒီ Growth က ကျန်းမာတဲ့ Business Growth မဟုတ်ပါဘူး။
        </p>

        <h3>Final Finance Framework</h3>

        <p>
          Revenue → Cost → Gross Profit → Operating Expense →
          Net Profit → Cash Flow → Financial Review → Decision
        </p>
      `,

      action: `
        ကိုယ့် Business အတွက် Monthly Finance Dashboard တစ်ခုလုပ်ပြီး
        Revenue, Gross Margin, Net Profit, Expense, Cash Flow
        KPI ၅ ခုကို လစဉ်စောင့်ကြည့်ပါ။
      `,

      quiz: `
        Manager တစ်ယောက်အနေနဲ့ Finance ကို ဘာကြောင့်နားလည်သင့်သလဲ?<br><br>
        <strong>
        Business Decision တွေက Revenue, Cost, Profit နဲ့ Cash Flow
        ကို တိုက်ရိုက်သက်ရောက်တဲ့အတွက် ဖြစ်ပါတယ်။
        </strong>
      `
    }

  ];

  /* =========================================================
     STORAGE
     ========================================================= */

  const STORAGE_KEY =
    "aung_business_academy_finance_accounting_completed_v1";

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
      FINANCE_LESSONS.length;

    const completedCount =
      FINANCE_LESSONS.filter(function (lesson) {
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
              FINANCE_COURSE.id,
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

  window.AungBusinessAcademy.FINANCE_COURSE =
    FINANCE_COURSE;

  window.AungBusinessAcademy.FINANCE_LESSONS =
    FINANCE_LESSONS;

  window.AungBusinessAcademy.getFinanceProgress =
    getProgress;

  window.AungBusinessAcademy.completeFinanceLesson =
    completeLesson;

  window.AungBusinessAcademy.isFinanceLessonCompleted =
    isCompleted;

  window.AungBusinessAcademy.COURSES =
    window.AungBusinessAcademy.COURSES || [];

  const alreadyExists =
    window.AungBusinessAcademy.COURSES.some(
      function (course) {
        return course.id === FINANCE_COURSE.id;
      }
    );

  if (!alreadyExists) {

    window.AungBusinessAcademy.COURSES.push({
      ...FINANCE_COURSE,
      lessons: FINANCE_LESSONS
    });

  }

  console.log(
    "Aung Business Academy — Finance & Accounting loaded: 10 lessons"
  );

})();
