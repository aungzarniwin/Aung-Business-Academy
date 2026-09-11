// ============================================================
// AUNG BUSINESS ACADEMY
// APP.JS V4
// LOGIN + PROFILE + PROGRESS + 30 LESSONS + TOOLS
// GEMINI AI BUSINESS COACH + PREMIUM + BUSINESS PLAN
// ============================================================

(function () {
    "use strict";

    // ============================================================
    // CONFIGURATION
    // ============================================================

    // Render Backend URL
    const API_BASE_URL =
        "https://aung-business-academy.onrender.com";

    const AI_API_URL =
        API_BASE_URL + "/api/ai";

    // ============================================================
    // STORAGE KEYS
    // ============================================================

    const USER_KEY =
        "aung_business_academy_user";

    const COMPLETED_KEY =
        "aung_business_academy_completed";

    const TRIAL_KEY =
        "aung_business_academy_trial";

    // ============================================================
    // LESSON DATA
    // ============================================================

    const lessons = [

        {
            id: 1,
            title: "Business Foundation",
            category: "Business",
            level: "Beginner",
            duration: "10 min",
            description:
                "Learn the foundation of a successful business.",
            content: `
                <h2>Business Foundation</h2>
                <p>A business solves customer problems and creates value.</p>
                <h3>Key Principles</h3>
                <ul>
                    <li>Know your customer.</li>
                    <li>Solve a real problem.</li>
                    <li>Create value.</li>
                    <li>Control costs.</li>
                    <li>Build repeat customers.</li>
                </ul>
                <p><strong>Key Takeaway:</strong> A strong business starts with a strong foundation.</p>
            `,
            quiz: [
                {
                    q: "What is one main purpose of a business?",
                    options: [
                        "Solve customer problems",
                        "Avoid customers",
                        "Increase expenses",
                        "Reduce quality"
                    ],
                    answer: 0
                },
                {
                    q: "What should a business manager understand?",
                    options: [
                        "Only sales",
                        "Only finance",
                        "Customers, people, operations and finance",
                        "Nothing"
                    ],
                    answer: 2
                }
            ]
        },

        {
            id: 2,
            title: "Business Model",
            category: "Business",
            level: "Beginner",
            duration: "10 min",
            description:
                "Understand how a business creates and earns money.",
            content: `
                <h2>Business Model</h2>
                <p>A business model explains how a company creates value and makes money.</p>
                <h3>Important Elements</h3>
                <ul>
                    <li>Customer</li>
                    <li>Product or Service</li>
                    <li>Value Proposition</li>
                    <li>Revenue</li>
                    <li>Cost Structure</li>
                    <li>Distribution Channel</li>
                </ul>
            `,
            quiz: [
                {
                    q: "What does a business model explain?",
                    options: [
                        "How the business creates and earns money",
                        "Employee attendance",
                        "Advertising only",
                        "Accounting only"
                    ],
                    answer: 0
                },
                {
                    q: "Which is part of a business model?",
                    options: [
                        "Customer",
                        "Product",
                        "Revenue",
                        "All of the above"
                    ],
                    answer: 3
                }
            ]
        },

        {
            id: 3,
            title: "Finding Your Customer",
            category: "Marketing",
            level: "Beginner",
            duration: "10 min",
            description:
                "Learn how to identify the right customer.",
            content: `
                <h2>Finding Your Customer</h2>
                <p>Not everyone is your customer. Successful businesses clearly define their target customer.</p>
                <h3>Customer Profile</h3>
                <ul>
                    <li>Age</li>
                    <li>Location</li>
                    <li>Income</li>
                    <li>Occupation</li>
                    <li>Needs</li>
                    <li>Buying behavior</li>
                </ul>
            `,
            quiz: [
                {
                    q: "Should every person be considered your customer?",
                    options: [
                        "Yes",
                        "No",
                        "Only employees",
                        "Only competitors"
                    ],
                    answer: 1
                },
                {
                    q: "Which helps define a customer?",
                    options: [
                        "Location",
                        "Needs",
                        "Buying behavior",
                        "All of the above"
                    ],
                    answer: 3
                }
            ]
        },

        {
            id: 4,
            title: "Market Research",
            category: "Marketing",
            level: "Beginner",
            duration: "12 min",
            description:
                "Learn how to understand your market and competitors.",
            content: `
                <h2>Market Research</h2>
                <p>Market research helps you understand customers, competitors and opportunities.</p>
                <h3>Research Areas</h3>
                <ul>
                    <li>Market size</li>
                    <li>Customer demand</li>
                    <li>Competitors</li>
                    <li>Price levels</li>
                    <li>Market trends</li>
                </ul>
            `,
            quiz: [
                {
                    q: "Why do businesses conduct market research?",
                    options: [
                        "To understand the market",
                        "To ignore customers",
                        "To create confusion",
                        "To avoid competitors"
                    ],
                    answer: 0
                },
                {
                    q: "What should market research include?",
                    options: [
                        "Competitors",
                        "Customer demand",
                        "Price levels",
                        "All of the above"
                    ],
                    answer: 3
                }
            ]
        },

        {
            id: 5,
            title: "Value Proposition",
            category: "Marketing",
            level: "Beginner",
            duration: "10 min",
            description:
                "Learn how to communicate customer value.",
            content: `
                <h2>Value Proposition</h2>
                <p>A value proposition explains the main benefit a customer receives.</p>
                <h3>Good Value Proposition</h3>
                <ul>
                    <li>Clear</li>
                    <li>Customer-focused</li>
                    <li>Specific</li>
                    <li>Easy to understand</li>
                </ul>
            `,
            quiz: [
                {
                    q: "What does a value proposition communicate?",
                    options: [
                        "Customer benefit",
                        "Employee salary",
                        "Office location",
                        "Tax information"
                    ],
                    answer: 0
                },
                {
                    q: "A good value proposition should be:",
                    options: [
                        "Confusing",
                        "Clear",
                        "Complicated",
                        "Hidden"
                    ],
                    answer: 1
                }
            ]
        },

        {
            id: 6,
            title: "Product Basics",
            category: "Business",
            level: "Beginner",
            duration: "10 min",
            description:
                "Understand product features, benefits and value.",
            content: `
                <h2>Product Basics</h2>
                <p>A product should solve a customer need.</p>
                <p>Features explain what the product has. Benefits explain what the customer gets.</p>
                <h3>Remember</h3>
                <p>Customers usually buy benefits, not features.</p>
            `,
            quiz: [
                {
                    q: "What do customers usually care about?",
                    options: [
                        "Benefits",
                        "Office furniture",
                        "Employee attendance",
                        "Internal rules"
                    ],
                    answer: 0
                },
                {
                    q: "A product should solve:",
                    options: [
                        "A customer need",
                        "Only a manager problem",
                        "Employee schedules",
                        "Nothing"
                    ],
                    answer: 0
                }
            ]
        },

        {
            id: 7,
            title: "Pricing Basics",
            category: "Finance",
            level: "Beginner",
            duration: "12 min",
            description:
                "Learn the basic principles of business pricing.",
            content: `
                <h2>Pricing Basics</h2>
                <p>Pricing affects revenue, profit, customer perception and competitiveness.</p>
                <h3>Consider</h3>
                <ul>
                    <li>Product cost</li>
                    <li>Customer willingness to pay</li>
                    <li>Competitor prices</li>
                    <li>Target profit margin</li>
                    <li>Market positioning</li>
                </ul>
            `,
            quiz: [
                {
                    q: "What can pricing affect?",
                    options: [
                        "Revenue",
                        "Profit",
                        "Customer perception",
                        "All of the above"
                    ],
                    answer: 3
                },
                {
                    q: "Should pricing consider customer willingness to pay?",
                    options: [
                        "Yes",
                        "No",
                        "Never",
                        "Only for employees"
                    ],
                    answer: 0
                }
            ]
        },

        {
            id: 8,
            title: "Sales Fundamentals",
            category: "Sales",
            level: "Beginner",
            duration: "12 min",
            description:
                "Learn the foundation of professional selling.",
            content: `
                <h2>Sales Fundamentals</h2>
                <p>Professional selling is about understanding customer needs and providing the right solution.</p>
                <h3>Basic Sales Process</h3>
                <ol>
                    <li>Prospecting</li>
                    <li>Customer approach</li>
                    <li>Needs discovery</li>
                    <li>Presentation</li>
                    <li>Objection handling</li>
                    <li>Closing</li>
                    <li>Follow-up</li>
                </ol>
            `,
            quiz: [
                {
                    q: "What should a salesperson discover?",
                    options: [
                        "Customer needs",
                        "Employee salary",
                        "Office rent",
                        "Tax rate"
                    ],
                    answer: 0
                },
                {
                    q: "What comes after objection handling?",
                    options: [
                        "Closing",
                        "Recruitment",
                        "Accounting",
                        "Product design"
                    ],
                    answer: 0
                }
            ]
        },

        {
            id: 9,
            title: "Marketing Basics",
            category: "Marketing",
            level: "Beginner",
            duration: "10 min",
            description:
                "Understand the basic marketing process.",
            content: `
                <h2>Marketing Basics</h2>
                <p>Marketing connects the right product with the right customer through the right message and channel.</p>
                <h3>Marketing Mix</h3>
                <ul>
                    <li>Product</li>
                    <li>Price</li>
                    <li>Place</li>
                    <li>Promotion</li>
                </ul>
            `,
            quiz: [
                {
                    q: "What are the traditional 4Ps?",
                    options: [
                        "Product, Price, Place, Promotion",
                        "People, Profit, Power, Plan",
                        "Product, People, Profit, Process",
                        "Price, Profit, Plan, Power"
                    ],
                    answer: 0
                },
                {
                    q: "What should marketing start with?",
                    options: [
                        "Customer needs",
                        "Office design",
                        "Employee uniforms",
                        "Accounting"
                    ],
                    answer: 0
                }
            ]
        },

        {
            id: 10,
            title: "Personal Productivity",
            category: "Productivity",
            level: "Beginner",
            duration: "10 min",
            description:
                "Improve personal productivity and execution.",
            content: `
                <h2>Personal Productivity</h2>
                <p>Productivity means achieving important results through effective use of time and resources.</p>
                <ul>
                    <li>Set priorities.</li>
                    <li>Plan your day.</li>
                    <li>Focus on important tasks.</li>
                    <li>Avoid distractions.</li>
                    <li>Review your results.</li>
                </ul>
            `,
            quiz: [
                {
                    q: "What should you do first?",
                    options: [
                        "Set priorities",
                        "Ignore tasks",
                        "Wait for problems",
                        "Do random activities"
                    ],
                    answer: 0
                },
                {
                    q: "What should happen at the end of the day?",
                    options: [
                        "Review results",
                        "Delete goals",
                        "Ignore performance",
                        "Stop planning"
                    ],
                    answer: 0
                }
            ]
        },

        {
            id: 11,
            title: "Sales Strategy",
            category: "Sales",
            level: "Intermediate",
            duration: "15 min",
            description:
                "Build a practical sales strategy.",
            content: `
                <h2>Sales Strategy</h2>
                <p>Sales strategy defines how your team will achieve revenue and volume targets.</p>
                <ul>
                    <li>Target customers</li>
                    <li>Sales channels</li>
                    <li>Territory planning</li>
                    <li>Sales targets</li>
                    <li>Key accounts</li>
                    <li>Sales activities</li>
                </ul>
                <p>Strategy must be converted into daily field execution.</p>
            `,
            quiz: [
                {
                    q: "What should sales strategy ultimately drive?",
                    options: [
                        "Field execution",
                        "Confusion",
                        "Higher costs only",
                        "Less customer contact"
                    ],
                    answer: 0
                },
                {
                    q: "Which is part of sales strategy?",
                    options: [
                        "Territory planning",
                        "Target customers",
                        "Sales channels",
                        "All of the above"
                    ],
                    answer: 3
                }
            ]
        },

        {
            id: 12,
            title: "Customer Finding",
            category: "Sales",
            level: "Intermediate",
            duration: "12 min",
            description:
                "Learn prospecting and customer acquisition.",
            content: `
                <h2>Customer Finding</h2>
                <p>Prospecting is the process of identifying potential customers.</p>
                <ul>
                    <li>Customer referrals</li>
                    <li>Online channels</li>
                    <li>Market visits</li>
                    <li>Business directories</li>
                    <li>Networking</li>
                </ul>
            `,
            quiz: [
                {
                    q: "What is prospecting?",
                    options: [
                        "Finding potential customers",
                        "Closing a company",
                        "Hiring employees",
                        "Preparing taxes"
                    ],
                    answer: 0
                },
                {
                    q: "What is important after finding a prospect?",
                    options: [
                        "Follow-up",
                        "Ignore them",
                        "Delete information",
                        "Stop communication"
                    ],
                    answer: 0
                }
            ]
        },

        {
            id: 13,
            title: "Negotiation",
            category: "Sales",
            level: "Intermediate",
            duration: "15 min",
            description:
                "Develop professional negotiation skills.",
            content: `
                <h2>Negotiation</h2>
                <p>Effective negotiation creates value while protecting business interests.</p>
                <ul>
                    <li>Prepare before meeting.</li>
                    <li>Understand the other side.</li>
                    <li>Know your minimum acceptable position.</li>
                    <li>Focus on value.</li>
                    <li>Remain professional.</li>
                </ul>
            `,
            quiz: [
                {
                    q: "What should you do before negotiation?",
                    options: [
                        "Prepare",
                        "Guess",
                        "Ignore customer",
                        "Avoid information"
                    ],
                    answer: 0
                },
                {
                    q: "Negotiation should focus on:",
                    options: [
                        "Value",
                        "Conflict",
                        "Confusion",
                        "Personal arguments"
                    ],
                    answer: 0
                }
            ]
        },

        {
            id: 14,
            title: "Sales Management",
            category: "Sales",
            level: "Intermediate",
            duration: "15 min",
            description:
                "Learn how to manage sales teams and performance.",
            content: `
                <h2>Sales Management</h2>
                <p>Sales management combines target setting, execution, monitoring, coaching and performance improvement.</p>
                <ul>
                    <li>Set clear targets.</li>
                    <li>Track KPIs.</li>
                    <li>Coach team members.</li>
                    <li>Review performance.</li>
                    <li>Take corrective action.</li>
                </ul>
            `,
            quiz: [
                {
                    q: "What should a sales manager track?",
                    options: [
                        "KPIs",
                        "Only attendance",
                        "Only expenses",
                        "Nothing"
                    ],
                    answer: 0
                },
                {
                    q: "What is a key management responsibility?",
                    options: [
                        "Coaching",
                        "Ignoring performance",
                        "Avoiding targets",
                        "Removing accountability"
                    ],
                    answer: 0
                }
            ]
        },

        {
            id: 15,
            title: "Digital Marketing",
            category: "Marketing",
            level: "Intermediate",
            duration: "15 min",
            description:
                "Learn how digital channels support business growth.",
            content: `
                <h2>Digital Marketing</h2>
                <p>Digital marketing uses online channels to reach and engage customers.</p>
                <ul>
                    <li>Facebook</li>
                    <li>YouTube</li>
                    <li>TikTok</li>
                    <li>Google</li>
                    <li>Email</li>
                    <li>Websites</li>
                </ul>
                <p>Measure reach, engagement, leads, conversions and revenue.</p>
            `,
            quiz: [
                {
                    q: "What is digital marketing?",
                    options: [
                        "Online marketing",
                        "Printed advertising",
                        "TV only",
                        "Store decoration"
                    ],
                    answer: 0
                },
                {
                    q: "Which metric can measure digital marketing?",
                    options: [
                        "Conversions",
                        "Leads",
                        "Revenue",
                        "All of the above"
                    ],
                    answer: 3
                }
            ]
        },

        {
            id: 16,
            title: "Content Marketing",
            category: "Marketing",
            level: "Intermediate",
            duration: "12 min",
            description:
                "Learn how valuable content attracts customers.",
            content: `
                <h2>Content Marketing</h2>
                <p>Content marketing provides useful information that attracts and builds customer relationships.</p>
                <ul>
                    <li>Educational content</li>
                    <li>Product content</li>
                    <li>Customer stories</li>
                    <li>Videos</li>
                    <li>Tips and tutorials</li>
                </ul>
            `,
            quiz: [
                {
                    q: "What should content provide?",
                    options: [
                        "Value",
                        "Confusion",
                        "Spam",
                        "Nothing"
                    ],
                    answer: 0
                },
                {
                    q: "Which is content marketing?",
                    options: [
                        "Educational videos",
                        "Customer stories",
                        "Tips",
                        "All of the above"
                    ],
                    answer: 3
                }
            ]
        },

        {
            id: 17,
            title: "Branding Basics",
            category: "Branding",
            level: "Intermediate",
            duration: "12 min",
            description:
                "Understand how brands create trust and recognition.",
            content: `
                <h2>Branding Basics</h2>
                <p>A brand is more than a logo. It represents the customer's overall perception of a business.</p>
                <ul>
                    <li>Name</li>
                    <li>Logo</li>
                    <li>Colors</li>
                    <li>Voice</li>
                    <li>Customer experience</li>
                    <li>Reputation</li>
                </ul>
            `,
            quiz: [
                {
                    q: "Is a brand only a logo?",
                    options: [
                        "Yes",
                        "No",
                        "Always",
                        "Only for large companies"
                    ],
                    answer: 1
                },
                {
                    q: "What affects brand perception?",
                    options: [
                        "Customer experience",
                        "Reputation",
                        "Communication",
                        "All of the above"
                    ],
                    answer: 3
                }
            ]
        },

        {
            id: 18,
            title: "Brand Positioning",
            category: "Branding",
            level: "Intermediate",
            duration: "15 min",
            description:
                "Learn how to position your brand in the market.",
            content: `
                <h2>Brand Positioning</h2>
                <p>Positioning defines how you want customers to perceive your brand compared with competitors.</p>
                <ul>
                    <li>Who is the target customer?</li>
                    <li>What problem do we solve?</li>
                    <li>What makes us different?</li>
                    <li>Why should customers choose us?</li>
                </ul>
            `,
            quiz: [
                {
                    q: "What does positioning define?",
                    options: [
                        "How customers perceive the brand",
                        "Employee attendance",
                        "Office size",
                        "Tax payments"
                    ],
                    answer: 0
                },
                {
                    q: "Should positioning consider competitors?",
                    options: [
                        "Yes",
                        "No",
                        "Never",
                        "Only after failure"
                    ],
                    answer: 0
                }
            ]
        },

        {
            id: 19,
            title: "Team Management",
            category: "Management",
            level: "Intermediate",
            duration: "15 min",
            description:
                "Learn practical methods for managing teams.",
            content: `
                <h2>Team Management</h2>
                <p>Effective team management requires clear expectations, communication, coaching and accountability.</p>
                <ul>
                    <li>Set expectations.</li>
                    <li>Give direction.</li>
                    <li>Monitor performance.</li>
                    <li>Coach people.</li>
                    <li>Provide feedback.</li>
                    <li>Recognize good performance.</li>
                </ul>
            `,
            quiz: [
                {
                    q: "What should managers set?",
                    options: [
                        "Clear expectations",
                        "Confusion",
                        "Unclear targets",
                        "No standards"
                    ],
                    answer: 0
                },
                {
                    q: "What supports employee development?",
                    options: [
                        "Coaching",
                        "Ignoring",
                        "Micromanagement only",
                        "No feedback"
                    ],
                    answer: 0
                }
            ]
        },

        {
            id: 20,
            title: "Recruitment",
            category: "Management",
            level: "Intermediate",
            duration: "12 min",
            description:
                "Learn the basics of hiring the right people.",
            content: `
                <h2>Recruitment</h2>
                <p>Recruitment is about finding people with the right skills, attitude and potential.</p>
                <ol>
                    <li>Define job requirements.</li>
                    <li>Source candidates.</li>
                    <li>Screen candidates.</li>
                    <li>Interview.</li>
                    <li>Select.</li>
                    <li>Onboard.</li>
                </ol>
            `,
            quiz: [
                {
                    q: "What should be defined first?",
                    options: [
                        "Job requirements",
                        "Office decoration",
                        "Company party",
                        "Holiday schedule"
                    ],
                    answer: 0
                },
                {
                    q: "What comes after interview?",
                    options: [
                        "Selection",
                        "Market research",
                        "Product launch",
                        "Accounting"
                    ],
                    answer: 0
                }
            ]
        },

        {
            id: 21,
            title: "Leadership",
            category: "Leadership",
            level: "Advanced",
            duration: "18 min",
            description:
                "Develop leadership skills for high-performing teams.",
            content: `
                <h2>Leadership</h2>
                <p>Leadership is the ability to influence people toward a common goal.</p>
                <ul>
                    <li>Clear vision</li>
                    <li>Strong communication</li>
                    <li>Coaching</li>
                    <li>Empowerment</li>
                    <li>Accountability</li>
                    <li>Decision making</li>
                </ul>
                <p>A leader should create ownership rather than dependence.</p>
            `,
            quiz: [
                {
                    q: "What is leadership?",
                    options: [
                        "Influencing people toward a common goal",
                        "Controlling every detail",
                        "Avoiding responsibility",
                        "Only giving orders"
                    ],
                    answer: 0
                },
                {
                    q: "Strong leaders create:",
                    options: [
                        "Ownership",
                        "Fear only",
                        "Confusion",
                        "Dependence"
                    ],
                    answer: 0
                }
            ]
        },

        {
            id: 22,
            title: "Strategic Thinking",
            category: "Strategy",
            level: "Advanced",
            duration: "18 min",
            description:
                "Learn how managers think beyond daily operations.",
            content: `
                <h2>Strategic Thinking</h2>
                <p>Strategic thinking means understanding the bigger picture and preparing for future opportunities and risks.</p>
                <ul>
                    <li>Market trends</li>
                    <li>Competition</li>
                    <li>Customer changes</li>
                    <li>Business capabilities</li>
                    <li>Future opportunities</li>
                    <li>Potential risks</li>
                </ul>
            `,
            quiz: [
                {
                    q: "Strategic thinking focuses on:",
                    options: [
                        "The bigger picture",
                        "Only today's tasks",
                        "Only attendance",
                        "Only expenses"
                    ],
                    answer: 0
                },
                {
                    q: "What should strategy consider?",
                    options: [
                        "Competition",
                        "Market trends",
                        "Risks",
                        "All of the above"
                    ],
                    answer: 3
                }
            ]
        },

        {
            id: 23,
            title: "Decision Making",
            category: "Leadership",
            level: "Advanced",
            duration: "15 min",
            description:
                "Improve business decision-making skills.",
            content: `
                <h2>Decision Making</h2>
                <p>Good decisions combine facts, experience, business judgment and risk assessment.</p>
                <ol>
                    <li>Define the problem.</li>
                    <li>Collect information.</li>
                    <li>Identify options.</li>
                    <li>Evaluate risks.</li>
                    <li>Choose an action.</li>
                    <li>Monitor results.</li>
                </ol>
            `,
            quiz: [
                {
                    q: "What should happen before choosing an action?",
                    options: [
                        "Evaluate options and risks",
                        "Ignore information",
                        "Guess",
                        "Avoid the problem"
                    ],
                    answer: 0
                },
                {
                    q: "After a decision, managers should:",
                    options: [
                        "Monitor results",
                        "Forget it",
                        "Ignore outcomes",
                        "Stop measuring"
                    ],
                    answer: 0
                }
            ]
        },

        {
            id: 24,
            title: "Performance Management",
            category: "Management",
            level: "Advanced",
            duration: "18 min",
            description:
                "Build a performance management system.",
            content: `
                <h2>Performance Management</h2>
                <p>Performance management ensures people understand expectations and receive regular feedback.</p>
                <ul>
                    <li>Clear KPIs</li>
                    <li>Regular reviews</li>
                    <li>Performance gaps</li>
                    <li>Coaching plans</li>
                    <li>Corrective actions</li>
                    <li>Recognition</li>
                </ul>
            `,
            quiz: [
                {
                    q: "What should performance management use?",
                    options: [
                        "Clear KPIs",
                        "Rumors",
                        "Guesswork",
                        "No measurement"
                    ],
                    answer: 0
                },
                {
                    q: "What helps improve performance?",
                    options: [
                        "Coaching",
                        "Clear feedback",
                        "Action plans",
                        "All of the above"
                    ],
                    answer: 3
                }
            ]
        },

        {
            id: 25,
            title: "Coaching",
            category: "Management",
            level: "Advanced",
            duration: "15 min",
            description:
                "Learn how managers develop people through coaching.",
            content: `
                <h2>Coaching</h2>
                <p>Coaching helps employees identify gaps, improve skills and take ownership.</p>
                <ul>
                    <li>Observe performance.</li>
                    <li>Ask questions.</li>
                    <li>Identify the gap.</li>
                    <li>Agree on an action.</li>
                    <li>Follow up.</li>
                </ul>
            `,
            quiz: [
                {
                    q: "What is the purpose of coaching?",
                    options: [
                        "Develop people",
                        "Punish employees",
                        "Avoid communication",
                        "Reduce learning"
                    ],
                    answer: 0
                },
                {
                    q: "What should happen after agreeing on an action?",
                    options: [
                        "Follow up",
                        "Forget it",
                        "Ignore results",
                        "Stop communication"
                    ],
                    answer: 0
                }
            ]
        },

        {
            id: 26,
            title: "Revenue Management",
            category: "Finance",
            level: "Advanced",
            duration: "18 min",
            description:
                "Understand how managers improve revenue performance.",
            content: `
                <h2>Revenue Management</h2>
                <p>Revenue is the money generated from selling products or services.</p>
                <h3>Revenue Drivers</h3>
                <ul>
                    <li>Volume</li>
                    <li>Price</li>
                    <li>Product mix</li>
                    <li>Customer mix</li>
                    <li>Distribution</li>
                </ul>
            `,
            quiz: [
                {
                    q: "What is revenue?",
                    options: [
                        "Money generated from sales",
                        "Only profit",
                        "Only expenses",
                        "Employee salary"
                    ],
                    answer: 0
                },
                {
                    q: "Which can drive revenue?",
                    options: [
                        "Volume",
                        "Price",
                        "Product mix",
                        "All of the above"
                    ],
                    answer: 3
                }
            ]
        },

        {
            id: 27,
            title: "Profit & Loss",
            category: "Finance",
            level: "Advanced",
            duration: "18 min",
            description:
                "Understand revenue, costs and profitability.",
            content: `
                <h2>Profit & Loss</h2>
                <p>Profit is generally calculated as revenue minus costs.</p>
                <h3>Formula</h3>
                <p><strong>Profit = Revenue - Total Costs</strong></p>
                <ul>
                    <li>Revenue</li>
                    <li>Cost of goods</li>
                    <li>Operating expenses</li>
                    <li>Gross profit</li>
                    <li>Net profit</li>
                </ul>
            `,
            quiz: [
                {
                    q: "What is the basic profit formula?",
                    options: [
                        "Revenue - Costs",
                        "Costs - Revenue",
                        "Revenue + Costs",
                        "Revenue × Costs"
                    ],
                    answer: 0
                },
                {
                    q: "What should managers monitor?",
                    options: [
                        "Revenue",
                        "Costs",
                        "Profit",
                        "All of the above"
                    ],
                    answer: 3
                }
            ]
        },

        {
            id: 28,
            title: "Cash Flow",
            category: "Finance",
            level: "Advanced",
            duration: "18 min",
            description:
                "Understand why cash flow is critical.",
            content: `
                <h2>Cash Flow</h2>
                <p>Cash flow tracks money coming into and going out of a business.</p>
                <h3>Cash Inflows</h3>
                <ul>
                    <li>Customer payments</li>
                    <li>Loans</li>
                    <li>Investments</li>
                </ul>
                <h3>Cash Outflows</h3>
                <ul>
                    <li>Supplier payments</li>
                    <li>Salaries</li>
                    <li>Rent</li>
                    <li>Operating expenses</li>
                </ul>
            `,
            quiz: [
                {
                    q: "Cash flow tracks:",
                    options: [
                        "Money coming in and going out",
                        "Only profit",
                        "Only sales",
                        "Only inventory"
                    ],
                    answer: 0
                },
                {
                    q: "Can a profitable business have cash-flow problems?",
                    options: [
                        "Yes",
                        "No",
                        "Never",
                        "Only large companies"
                    ],
                    answer: 0
                }
            ]
        },

        {
            id: 29,
            title: "Financial Analysis",
            category: "Finance",
            level: "Advanced",
            duration: "20 min",
            description:
                "Learn how managers analyze financial performance.",
            content: `
                <h2>Financial Analysis</h2>
                <p>Financial analysis helps managers understand business performance and make better decisions.</p>
                <h3>Important Metrics</h3>
                <ul>
                    <li>Revenue growth</li>
                    <li>Gross margin</li>
                    <li>Net profit margin</li>
                    <li>Operating expenses</li>
                    <li>Cash flow</li>
                    <li>Return on investment</li>
                </ul>
            `,
            quiz: [
                {
                    q: "Why do financial analysis?",
                    options: [
                        "To support better decisions",
                        "To create confusion",
                        "To avoid targets",
                        "To stop reporting"
                    ],
                    answer: 0
                },
                {
                    q: "What can be analyzed?",
                    options: [
                        "Revenue growth",
                        "Margins",
                        "Cash flow",
                        "All of the above"
                    ],
                    answer: 3
                }
            ]
        },

        {
            id: 30,
            title: "Business Strategy",
            category: "Strategy",
            level: "Advanced",
            duration: "20 min",
            description:
                "Learn how to create a practical business strategy.",
            content: `
                <h2>Business Strategy</h2>
                <p>Business strategy defines where the business wants to go and how it will compete and grow.</p>
                <ol>
                    <li>Define vision.</li>
                    <li>Understand current position.</li>
                    <li>Analyze market.</li>
                    <li>Identify opportunities.</li>
                    <li>Set strategic priorities.</li>
                    <li>Create action plans.</li>
                    <li>Measure results.</li>
                </ol>
                <p><strong>Key Takeaway:</strong> Strategy is valuable when it becomes execution.</p>
            `,
            quiz: [
                {
                    q: "What does business strategy define?",
                    options: [
                        "Where the business wants to go and how to grow",
                        "Employee schedules",
                        "Office design",
                        "Accounting only"
                    ],
                    answer: 0
                },
                {
                    q: "What makes strategy valuable?",
                    options: [
                        "Execution",
                        "Ignoring it",
                        "Keeping it hidden",
                        "Avoiding measurement"
                    ],
                    answer: 0
                }
            ]
        }
    ];

    // ============================================================
    // USER SYSTEM
    // ============================================================

    function getUser() {
        try {
            return JSON.parse(
                localStorage.getItem(USER_KEY)
            ) || null;
        } catch (error) {
            return null;
        }
    }

    function saveUser(user) {
        localStorage.setItem(
            USER_KEY,
            JSON.stringify(user)
        );
    }

    function isLoggedIn() {
        return !!getUser();
    }

    function getUserName() {
        const user = getUser();
        return user ? user.name : "Guest";
    }

    // ============================================================
    // COMPLETED LESSONS
    // ============================================================

    function getCompletedLessons() {
        try {
            return JSON.parse(
                localStorage.getItem(COMPLETED_KEY)
            ) || [];
        } catch (error) {
            return [];
        }
    }

    function saveCompletedLessons(data) {
        localStorage.setItem(
            COMPLETED_KEY,
            JSON.stringify(data)
        );
    }

    function isCompleted(id) {
        return getCompletedLessons().includes(
            Number(id)
        );
    }

    // ============================================================
    // LOGIN SCREEN
    // ============================================================

    function showLoginScreen() {

        if (
            document.getElementById(
                "academyLoginScreen"
            )
        ) {
            return;
        }

        const overlay =
            document.createElement("div");

        overlay.id =
            "academyLoginScreen";

        overlay.innerHTML = `
            <div style="
                position:fixed;
                inset:0;
                z-index:200000;
                background:linear-gradient(
                    135deg,
                    #0f172a,
                    #1e3a8a
                );
                display:flex;
                align-items:center;
                justify-content:center;
                padding:20px;
            ">

                <div style="
                    width:min(430px,100%);
                    background:#fff;
                    border-radius:24px;
                    padding:30px;
                    box-shadow:
                        0 25px 80px rgba(0,0,0,.35);
                ">

                    <div style="
                        width:70px;
                        height:70px;
                        margin:0 auto 15px;
                        border-radius:20px;
                        background:#2563eb;
                        color:#fff;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        font-size:32px;
                        font-weight:800;
                    ">
                        A
                    </div>

                    <h1 style="
                        text-align:center;
                        margin:0;
                        color:#0f172a;
                        font-size:25px;
                    ">
                        Aung Business Academy
                    </h1>

                    <p style="
                        text-align:center;
                        color:#64748b;
                        margin:8px 0 25px;
                    ">
                        Learn • Build • Grow
                    </p>

                    <form id="academyLoginForm">

                        <label style="
                            display:block;
                            font-weight:700;
                            margin-bottom:7px;
                            color:#334155;
                        ">
                            Your Name
                        </label>

                        <input
                            id="academyLoginName"
                            type="text"
                            required
                            autocomplete="name"
                            placeholder="Enter your name"
                            style="
                                width:100%;
                                padding:14px;
                                border:1px solid #cbd5e1;
                                border-radius:12px;
                                font-size:15px;
                                margin-bottom:15px;
                                outline:none;
                            "
                        >

                        <label style="
                            display:block;
                            font-weight:700;
                            margin-bottom:7px;
                            color:#334155;
                        ">
                            Email
                        </label>

                        <input
                            id="academyLoginEmail"
                            type="email"
                            required
                            autocomplete="email"
                            placeholder="Enter your email"
                            style="
                                width:100%;
                                padding:14px;
                                border:1px solid #cbd5e1;
                                border-radius:12px;
                                font-size:15px;
                                margin-bottom:18px;
                                outline:none;
                            "
                        >

                        <button
                            type="submit"
                            style="
                                width:100%;
                                border:0;
                                background:#2563eb;
                                color:#fff;
                                padding:15px;
                                border-radius:12px;
                                font-size:16px;
                                font-weight:800;
                                cursor:pointer;
                            "
                        >
                            🚀 Enter Academy
                        </button>

                    </form>

                    <p style="
                        text-align:center;
                        color:#94a3b8;
                        font-size:12px;
                        margin:20px 0 0;
                    ">
                        Prototype local account system
                    </p>

                </div>
            </div>
        `;

        document.body.appendChild(overlay);

        const form =
            document.getElementById(
                "academyLoginForm"
            );

        if (form) {
            form.addEventListener(
                "submit",
                handleLogin
            );
        }
    }

    function handleLogin(event) {

        event.preventDefault();

        const name =
            document.getElementById(
                "academyLoginName"
            ).value.trim();

        const email =
            document.getElementById(
                "academyLoginEmail"
            ).value.trim();

        if (!name || !email) {
            alert(
                "Please enter your name and email."
            );
            return;
        }

        const existingUser =
            getUser();

        const user = {
            name: name,
            email: email,
            createdAt:
                existingUser?.createdAt ||
                new Date().toISOString(),
            plan:
                existingUser?.plan ||
                "free"
        };

        saveUser(user);

        const login =
            document.getElementById(
                "academyLoginScreen"
            );

        if (login) {
            login.remove();
        }

        updateUserUI();

        showToast(
            "👋 Welcome, " + name + "!"
        );
    }

    // ============================================================
    // USER UI
    // ============================================================

    function updateUserUI() {

        const user = getUser();

        if (!user) {
            return;
        }

        const selectors = [
            "#userName",
            "#profileName",
            "#welcomeName",
            "[data-user-name]"
        ];

        selectors.forEach(
            selector => {

                document
                    .querySelectorAll(selector)
                    .forEach(element => {

                        element.textContent =
                            user.name;

                    });

            }
        );

        document
            .querySelectorAll(
                "[data-user-email]"
            )
            .forEach(element => {

                element.textContent =
                    user.email;

            });

        updateDashboard();
    }

    // ============================================================
    // DASHBOARD
    // ============================================================

    function updateDashboard() {

        const completed =
            getCompletedLessons();

        const total =
            lessons.length;

        const percent =
            Math.round(
                (completed.length / total) * 100
            );

        const count =
            document.getElementById(
                "lessonCount"
            );

        const progress =
            document.getElementById(
                "progress"
            );

        if (count) {
            count.textContent =
                total;
        }

        if (progress) {
            progress.textContent =
                percent + "%";
        }

        const completedElement =
            document.getElementById(
                "completedLessons"
            );

        if (completedElement) {
            completedElement.textContent =
                completed.length;
        }

        document
            .querySelectorAll(
                "[data-progress-bar]"
            )
            .forEach(bar => {

                bar.style.width =
                    percent + "%";

            });
    }

    // ============================================================
    // MODAL
    // ============================================================

    function showModal(title, content) {

        closeModal();

        const modal =
            document.createElement("div");

        modal.id =
            "academyModal";

        modal.innerHTML = `
            <div style="
                position:fixed;
                inset:0;
                background:rgba(0,0,0,.65);
                z-index:99999;
                display:flex;
                align-items:center;
                justify-content:center;
                padding:15px;
            ">

                <div style="
                    background:#fff;
                    width:min(900px,100%);
                    max-height:92vh;
                    overflow-y:auto;
                    border-radius:20px;
                    color:#172033;
                    box-shadow:
                        0 20px 60px rgba(0,0,0,.3);
                ">

                    <div style="
                        position:sticky;
                        top:0;
                        z-index:5;
                        background:#fff;
                        padding:18px 22px;
                        border-bottom:
                            1px solid #e5e7eb;
                        display:flex;
                        justify-content:
                            space-between;
                        align-items:center;
                        gap:10px;
                    ">

                        <h2 style="
                            margin:0;
                            font-size:21px;
                        ">
                            ${escapeHTML(title)}
                        </h2>

                        <button
                            onclick="closeModal()"
                            style="
                                border:0;
                                background:#f1f5f9;
                                width:40px;
                                height:40px;
                                border-radius:50%;
                                font-size:24px;
                                cursor:pointer;
                                flex-shrink:0;
                            "
                        >
                            ×
                        </button>

                    </div>

                    <div style="
                        padding:22px;
                        line-height:1.7;
                        overflow-wrap:anywhere;
                    ">
                        ${content}
                    </div>

                </div>

            </div>
        `;

        document.body.appendChild(modal);
    }

    function closeModal() {

        const modal =
            document.getElementById(
                "academyModal"
            );

        if (modal) {
            modal.remove();
        }
    }

    // ============================================================
    // LOGIN GUARD
    // ============================================================

    function requireLogin(action) {

        if (!isLoggedIn()) {

            showLoginScreen();

            return false;
        }

        if (typeof action === "function") {
            action();
        }

        return true;
    }

    // ============================================================
    // LESSON LIBRARY
    // ============================================================

    function openLessons() {

        requireLogin(function () {

            renderLessons(
                lessons,
                "📚 Business Lessons"
            );

        });
    }

    function renderLessons(list, title) {

        let html = `
            <div style="
                margin-bottom:20px;
            ">

                <p style="
                    color:#64748b;
                ">
                    Learn practical business skills
                    from Beginner to Advanced.
                </p>

                <input
                    id="lessonSearch"
                    type="text"
                    placeholder="🔎 Search lessons..."
                    oninput="filterLessons()"
                    style="
                        width:100%;
                        padding:14px;
                        border:1px solid #dbe1ea;
                        border-radius:12px;
                        font-size:15px;
                    "
                >

                <div style="
                    display:flex;
                    gap:8px;
                    flex-wrap:wrap;
                    margin-top:12px;
                ">

                    <button
                        onclick="setLessonFilter('All')"
                        style="${filterStyle()}"
                    >
                        All
                    </button>

                    <button
                        onclick="setLessonFilter('Beginner')"
                        style="${filterStyle()}"
                    >
                        🟢 Beginner
                    </button>

                    <button
                        onclick="setLessonFilter('Intermediate')"
                        style="${filterStyle()}"
                    >
                        🟡 Intermediate
                    </button>

                    <button
                        onclick="setLessonFilter('Advanced')"
                        style="${filterStyle()}"
                    >
                        🔴 Advanced
                    </button>

                </div>

            </div>

            <div id="lessonList">
        `;

        if (!list.length) {

            html += `
                <div style="
                    text-align:center;
                    padding:35px;
                    background:#f8fafc;
                    border-radius:15px;
                ">
                    <h3>No lessons found</h3>
                    <p style="
                        color:#64748b;
                    ">
                        Try another search.
                    </p>
                </div>
            `;
        }

        list.forEach(
            lesson => {

                html +=
                    createLessonCard(
                        lesson
                    );

            }
        );

        html += `
            </div>
        `;

        showModal(
            title,
            html
        );
    }

    function createLessonCard(lesson) {

        const done =
            isCompleted(lesson.id);

        const icon =
            lesson.level === "Beginner"
                ? "🟢"
                : lesson.level === "Intermediate"
                    ? "🟡"
                    : "🔴";

        return `
            <div
                class="academy-lesson-card"
                data-level="${lesson.level}"
                data-title="${escapeHTML(
                    lesson.title.toLowerCase()
                )}"
                data-category="${escapeHTML(
                    lesson.category.toLowerCase()
                )}"
                style="
                    border:1px solid #e5e7eb;
                    border-radius:16px;
                    padding:18px;
                    margin-bottom:12px;
                    background:#fff;
                "
            >

                <div style="
                    display:flex;
                    justify-content:
                        space-between;
                    gap:15px;
                    align-items:flex-start;
                ">

                    <div style="
                        flex:1;
                    ">

                        <div style="
                            color:#64748b;
                            font-size:12px;
                            margin-bottom:5px;
                        ">
                            Lesson ${lesson.id}
                            • ${lesson.category}
                        </div>

                        <h3 style="
                            margin:0 0 7px;
                            font-size:18px;
                        ">
                            ${icon}
                            ${escapeHTML(
                                lesson.title
                            )}
                        </h3>

                        <p style="
                            margin:0 0 10px;
                            color:#64748b;
                            font-size:14px;
                        ">
                            ${escapeHTML(
                                lesson.description
                            )}
                        </p>

                        <small style="
                            color:#64748b;
                        ">
                            ⏱️ ${lesson.duration}
                            • ${lesson.level}
                        </small>

                    </div>

                    <div style="
                        text-align:right;
                    ">

                        ${
                            done
                                ? `
                                    <div style="
                                        color:#166534;
                                        background:#dcfce7;
                                        padding:5px 9px;
                                        border-radius:20px;
                                        font-size:11px;
                                        margin-bottom:8px;
                                    ">
                                        ✓ Completed
                                    </div>
                                `
                                : ""
                        }

                        <button
                            onclick="openLesson(${lesson.id})"
                            style="
                                border:0;
                                background:#2563eb;
                                color:#fff;
                                padding:10px 15px;
                                border-radius:10px;
                                cursor:pointer;
                                font-weight:600;
                            "
                        >
                            ${done ? "Review" : "Start"}
                        </button>

                    </div>

                </div>

            </div>
        `;
    }

    // ============================================================
    // FILTER
    // ============================================================

    let currentFilter =
        "All";

    function filterStyle() {

        return `
            border:0;
            background:#f1f5f9;
            color:#334155;
            padding:9px 13px;
            border-radius:9px;
            cursor:pointer;
        `;
    }

    function setLessonFilter(level) {

        currentFilter =
            level;

        const search =
            document.getElementById(
                "lessonSearch"
            );

        const text =
            search
                ? search.value
                    .toLowerCase()
                    .trim()
                : "";

        applyFilter(
            level,
            text
        );
    }

    function filterLessons() {

        const search =
            document.getElementById(
                "lessonSearch"
            );

        if (!search) {
            return;
        }

        applyFilter(
            currentFilter,
            search.value
                .toLowerCase()
                .trim()
        );
    }

    function applyFilter(level, text) {

        document
            .querySelectorAll(
                ".academy-lesson-card"
            )
            .forEach(card => {

                const levelMatch =
                    level === "All" ||
                    card.dataset.level ===
                        level;

                const searchMatch =
                    !text ||
                    card.dataset.title.includes(
                        text
                    ) ||
                    card.dataset.category.includes(
                        text
                    );

                card.style.display =
                    levelMatch &&
                    searchMatch
                        ? "block"
                        : "none";
            });
    }

    // ============================================================
    // SINGLE LESSON
    // ============================================================

    function openLesson(id) {

        requireLogin(function () {

            const index =
                lessons.findIndex(
                    lesson =>
                        lesson.id ===
                        Number(id)
                );

            if (index === -1) {
                return;
            }

            showLesson(index);

        });
    }

    function showLesson(index) {

        const lesson =
            lessons[index];

        if (!lesson) {
            return;
        }

        const done =
            isCompleted(
                lesson.id
            );

        const previous =
            index > 0
                ? `
                    <button
                        onclick="showLesson(${index - 1})"
                        style="${navButtonStyle()}"
                    >
                        ← Previous
                    </button>
                `
                : `
                    <button
                        disabled
                        style="${navButtonStyle()}"
                    >
                        ← Previous
                    </button>
                `;

        const next =
            index < lessons.length - 1
                ? `
                    <button
                        onclick="showLesson(${index + 1})"
                        style="${navButtonStyle()}"
                    >
                        Next →
                    </button>
                `
                : `
                    <button
                        disabled
                        style="${navButtonStyle()}"
                    >
                        Next →
                    </button>
                `;

        const html = `

            <div style="
                display:flex;
                gap:8px;
                flex-wrap:wrap;
                margin-bottom:18px;
            ">

                <span style="${badgeStyle()}">
                    ${lesson.category}
                </span>

                <span style="${badgeStyle()}">
                    ${lesson.level}
                </span>

                <span style="${badgeStyle()}">
                    ⏱️ ${lesson.duration}
                </span>

            </div>

            ${lesson.content}

            <div style="
                margin-top:25px;
                padding:18px;
                background:#f8fafc;
                border-radius:15px;
            ">

                <h3 style="
                    margin-top:0;
                ">
                    📝 Lesson Quiz
                </h3>

                <p style="
                    color:#64748b;
                ">
                    Get at least 70%
                    to complete this lesson.
                </p>

                <button
                    onclick="startQuiz(${lesson.id})"
                    style="
                        border:0;
                        background:#7c3aed;
                        color:#fff;
                        padding:12px 18px;
                        border-radius:10px;
                        cursor:pointer;
                        font-weight:700;
                    "
                >
                    Start Quiz
                </button>

            </div>

            ${
                done
                    ? `
                        <div style="
                            margin-top:15px;
                            background:#dcfce7;
                            color:#166534;
                            padding:14px;
                            border-radius:12px;
                            text-align:center;
                            font-weight:700;
                        ">
                            ✓ Lesson Completed
                        </div>
                    `
                    : ""
            }

            <div style="
                display:flex;
                justify-content:
                    space-between;
                gap:8px;
                margin-top:25px;
                padding-top:20px;
                border-top:
                    1px solid #e5e7eb;
            ">

                ${previous}

                <button
                    onclick="openLessons()"
                    style="
                        border:0;
                        background:#0f172a;
                        color:#fff;
                        padding:11px 14px;
                        border-radius:10px;
                        cursor:pointer;
                    "
                >
                    📚 All Lessons
                </button>

                ${next}

            </div>
        `;

        showModal(
            `Lesson ${lesson.id}: ${lesson.title}`,
            html
        );
    }

    function navButtonStyle() {

        return `
            border:1px solid #cbd5e1;
            background:#fff;
            color:#334155;
            padding:11px 14px;
            border-radius:10px;
            cursor:pointer;
        `;
    }

    function badgeStyle() {

        return `
            background:#eff6ff;
            color:#1d4ed8;
            padding:6px 10px;
            border-radius:20px;
            font-size:12px;
        `;
    }

    // ============================================================
    // QUIZ
    // ============================================================

    function startQuiz(id) {

        const lesson =
            lessons.find(
                item =>
                    item.id ===
                    Number(id)
            );

        if (!lesson) {
            return;
        }

        let html = `
            <p style="
                color:#64748b;
            ">
                Answer all questions.
            </p>

            <form id="lessonQuizForm">
        `;

        lesson.quiz.forEach(
            (question, index) => {

                html += `
                    <div style="
                        background:#f8fafc;
                        padding:18px;
                        border-radius:14px;
                        margin-bottom:18px;
                    ">

                        <h3 style="
                            font-size:16px;
                        ">
                            ${index + 1}.
                            ${escapeHTML(
                                question.q
                            )}
                        </h3>
                `;

                question.options.forEach(
                    (
                        option,
                        optionIndex
                    ) => {

                        html += `
                            <label style="
                                display:block;
                                background:#fff;
                                border:
                                    1px solid #e2e8f0;
                                padding:11px;
                                border-radius:9px;
                                margin:7px 0;
                                cursor:pointer;
                            ">

                                <input
                                    type="radio"
                                    name="question${index}"
                                    value="${optionIndex}"
                                >

                                <span style="
                                    margin-left:7px;
                                ">
                                    ${escapeHTML(
                                        option
                                    )}
                                </span>

                            </label>
                        `;
                    }
                );

                html += `
                    </div>
                `;
            }
        );

        html += `
                <button
                    type="button"
                    onclick="submitQuiz(${lesson.id})"
                    style="
                        width:100%;
                        border:0;
                        background:#2563eb;
                        color:#fff;
                        padding:14px;
                        border-radius:11px;
                        cursor:pointer;
                        font-weight:700;
                    "
                >
                    Submit Quiz
                </button>

            </form>
        `;

        showModal(
            `📝 Quiz: ${lesson.title}`,
            html
        );
    }

    function submitQuiz(id) {

        const lesson =
            lessons.find(
                item =>
                    item.id ===
                    Number(id)
            );

        if (!lesson) {
            return;
        }

        let score = 0;

        lesson.quiz.forEach(
            (question, index) => {

                const selected =
                    document.querySelector(
                        `input[name="question${index}"]:checked`
                    );

                if (
                    selected &&
                    Number(
                        selected.value
                    ) === question.answer
                ) {
                    score++;
                }
            }
        );

        const total =
            lesson.quiz.length;

        const percentage =
            Math.round(
                (score / total) * 100
            );

        if (percentage >= 70) {

            markLessonComplete(
                lesson.id
            );

            showQuizResult(
                lesson,
                score,
                total,
                percentage,
                true
            );

        } else {

            showQuizResult(
                lesson,
                score,
                total,
                percentage,
                false
            );
        }
    }

    function showQuizResult(
        lesson,
        score,
        total,
        percentage,
        passed
    ) {

        const index =
            lessons.findIndex(
                item =>
                    item.id ===
                    lesson.id
            );

        showModal(
            passed
                ? "🎉 Quiz Passed!"
                : "📚 Try Again",

            `
                <div style="
                    text-align:center;
                    padding:20px;
                ">

                    <div style="
                        font-size:55px;
                    ">
                        ${passed
                            ? "🏆"
                            : "📚"}
                    </div>

                    <h2>
                        ${score} / ${total}
                    </h2>

                    <div style="
                        font-size:32px;
                        font-weight:800;
                        margin:15px;
                    ">
                        ${percentage}%
                    </div>

                    <p style="
                        color:#64748b;
                    ">
                        ${
                            passed
                                ? "Excellent! This lesson is now completed."
                                : "You need 70% to complete this lesson."
                        }
                    </p>

                    ${
                        passed
                            ? `
                                <button
                                    onclick="showLesson(${index})"
                                    style="
                                        border:0;
                                        background:#2563eb;
                                        color:#fff;
                                        padding:12px 20px;
                                        border-radius:10px;
                                        cursor:pointer;
                                        font-weight:700;
                                    "
                                >
                                    Continue
                                </button>
                            `
                            : `
                                <button
                                    onclick="startQuiz(${lesson.id})"
                                    style="
                                        border:0;
                                        background:#7c3aed;
                                        color:#fff;
                                        padding:12px 20px;
                                        border-radius:10px;
                                        cursor:pointer;
                                        font-weight:700;
                                    "
                                >
                                    Try Again
                                </button>
                            `
                    }

                </div>
            `
        );
    }

    // ============================================================
    // COMPLETE LESSON
    // ============================================================

    function markLessonComplete(id) {

        const completed =
            getCompletedLessons();

        id = Number(id);

        if (!completed.includes(id)) {

            completed.push(id);

            saveCompletedLessons(
                completed
            );

            updateDashboard();

            showToast(
                "✓ Lesson completed!"
            );
        }
    }

    // ============================================================
    // CONTINUE LEARNING
    // ============================================================

    function continueLearning() {

        requireLogin(function () {

            const completed =
                getCompletedLessons();

            const next =
                lessons.find(
                    lesson =>
                        !completed.includes(
                            lesson.id
                        )
                );

            if (next) {

                openLesson(
                    next.id
                );

            } else {

                showModal(
                    "🏆 Congratulations!",

                    `
                        <div style="
                            text-align:center;
                            padding:30px;
                        ">

                            <div style="
                                font-size:60px;
                            ">
                                🏆
                            </div>

                            <h2>
                                All Lessons Completed!
                            </h2>

                            <p>
                                You have completed
                                all 30 Business Academy lessons.
                            </p>

                        </div>
                    `
                );
            }
        });
    }

    // ============================================================
    // CATEGORY
    // ============================================================

    function openCategory(category) {

        requireLogin(function () {

            const filtered =
                lessons.filter(
                    lesson =>
                        lesson.category
                            .toLowerCase() ===
                        String(category)
                            .toLowerCase()
                );

            if (filtered.length) {

                renderLessons(
                    filtered,
                    `📚 ${category} Lessons`
                );

            } else {

                showModal(
                    category,

                    `
                        <div style="
                            text-align:center;
                            padding:30px;
                        ">

                            <div style="
                                font-size:50px;
                            ">
                                📚
                            </div>

                            <h3>
                                More lessons coming soon
                            </h3>

                            <p style="
                                color:#64748b;
                            ">
                                New lessons will be added soon.
                            </p>

                        </div>
                    `
                );
            }
        });
    }

    // ============================================================
    // BUSINESS TOOLS
    // ============================================================

    function openTools() {

        requireLogin(function () {

            showModal(
                "🛠️ Business Tools",

                `
                    <p style="
                        color:#64748b;
                    ">
                        Practical tools for business managers.
                    </p>

                    <div style="
                        display:grid;
                        grid-template-columns:
                        repeat(
                            auto-fit,
                            minmax(210px,1fr)
                        );
                        gap:15px;
                    ">

                        ${toolCard(
                            "💰",
                            "Profit Calculator",
                            "Calculate business profit.",
                            "openProfitCalculator()"
                        )}

                        ${toolCard(
                            "🏷️",
                            "Pricing Calculator",
                            "Calculate selling price.",
                            "openPricingCalculator()"
                        )}

                        ${toolCard(
                            "📊",
                            "Break-even Calculator",
                            "Calculate break-even units.",
                            "openBreakEvenCalculator()"
                        )}

                        ${toolCard(
                            "🎯",
                            "Sales Target",
                            "Calculate daily sales target.",
                            "openSalesTargetCalculator()"
                        )}

                    </div>
                `
            );
        });
    }

    function toolCard(
        icon,
        title,
        description,
        action
    ) {

        return `
            <button
                onclick="${action}"
                style="
                    text-align:left;
                    border:1px solid #e2e8f0;
                    background:#fff;
                    border-radius:15px;
                    padding:18px;
                    cursor:pointer;
                "
            >

                <div style="
                    font-size:30px;
                ">
                    ${icon}
                </div>

                <strong style="
                    display:block;
                    margin:8px 0;
                ">
                    ${title}
                </strong>

                <span style="
                    color:#64748b;
                    font-size:13px;
                ">
                    ${description}
                </span>

            </button>
        `;
    }

    // ============================================================
    // PROFIT CALCULATOR
    // ============================================================

    function openProfitCalculator() {

        showModal(
            "💰 Profit Calculator",

            `
                ${inputField(
                    "revenue",
                    "Revenue"
                )}

                ${inputField(
                    "cost",
                    "Total Cost"
                )}

                ${calculateButton(
                    "calculateProfit()",
                    "Calculate Profit"
                )}

                <div id="calculatorResult"></div>
            `
        );
    }

    function calculateProfit() {

        const revenue =
            Number(
                document.getElementById(
                    "revenue"
                ).value
            ) || 0;

        const cost =
            Number(
                document.getElementById(
                    "cost"
                ).value
            ) || 0;

        resultBox(
            `Profit: ${formatNumber(
                revenue - cost
            )} Ks`
        );
    }

    // ============================================================
    // PRICING
    // ============================================================

    function openPricingCalculator() {

        showModal(
            "🏷️ Pricing Calculator",

            `
                ${inputField(
                    "productCost",
                    "Product Cost"
                )}

                ${inputField(
                    "margin",
                    "Target Profit Margin (%)"
                )}

                ${calculateButton(
                    "calculatePrice()",
                    "Calculate Selling Price"
                )}

                <div id="calculatorResult"></div>
            `
        );
    }

    function calculatePrice() {

        const cost =
            Number(
                document.getElementById(
                    "productCost"
                ).value
            ) || 0;

        const margin =
            Number(
                document.getElementById(
                    "margin"
                ).value
            ) || 0;

        if (margin >= 100) {

            resultBox(
                "Margin must be below 100%.",
                true
            );

            return;
        }

        const price =
            cost /
            (1 - margin / 100);

        resultBox(
            `Recommended Selling Price:
            ${formatNumber(price)} Ks`
        );
    }

    // ============================================================
    // BREAK EVEN
    // ============================================================

    function openBreakEvenCalculator() {

        showModal(
            "📊 Break-even Calculator",

            `
                ${inputField(
                    "fixedCost",
                    "Fixed Cost"
                )}

                ${inputField(
                    "sellingPrice",
                    "Selling Price / Unit"
                )}

                ${inputField(
                    "variableCost",
                    "Variable Cost / Unit"
                )}

                ${calculateButton(
                    "calculateBreakEven()",
                    "Calculate"
                )}

                <div id="calculatorResult"></div>
            `
        );
    }

    function calculateBreakEven() {

        const fixed =
            Number(
                document.getElementById(
                    "fixedCost"
                ).value
            ) || 0;

        const price =
            Number(
                document.getElementById(
                    "sellingPrice"
                ).value
            ) || 0;

        const variable =
            Number(
                document.getElementById(
                    "variableCost"
                ).value
            ) || 0;

        const contribution =
            price - variable;

        if (contribution <= 0) {

            resultBox(
                "Selling price must be higher than variable cost.",
                true
            );

            return;
        }

        resultBox(
            `Break-even:
            ${Math.ceil(
                fixed / contribution
            )} units`
        );
    }

    // ============================================================
    // SALES TARGET
    // ============================================================

    function openSalesTargetCalculator() {

        showModal(
            "🎯 Sales Target Calculator",

            `
                ${inputField(
                    "monthlyTarget",
                    "Monthly Sales Target"
                )}

                ${inputField(
                    "workingDays",
                    "Working Days"
                )}

                ${calculateButton(
                    "calculateSalesTarget()",
                    "Calculate"
                )}

                <div id="calculatorResult"></div>
            `
        );
    }

    function calculateSalesTarget() {

        const target =
            Number(
                document.getElementById(
                    "monthlyTarget"
                ).value
            ) || 0;

        const days =
            Number(
                document.getElementById(
                    "workingDays"
                ).value
            ) || 0;

        if (days <= 0) {

            resultBox(
                "Working days must be greater than 0.",
                true
            );

            return;
        }

        resultBox(
            `Daily Sales Target:
            ${formatNumber(
                target / days
            )} Ks`
        );
    }

    function inputField(
        id,
        label
    ) {

        return `
            <div style="
                margin-bottom:15px;
            ">

                <label style="
                    display:block;
                    margin-bottom:7px;
                    font-weight:600;
                ">
                    ${label}
                </label>

                <input
                    id="${id}"
                    type="number"
                    style="
                        width:100%;
                        padding:13px;
                        border:
                            1px solid #cbd5e1;
                        border-radius:10px;
                        font-size:15px;
                    "
                >

            </div>
        `;
    }

    function calculateButton(
        action,
        text
    ) {

        return `
            <button
                onclick="${action}"
                style="
                    width:100%;
                    border:0;
                    background:#2563eb;
                    color:white;
                    padding:13px;
                    border-radius:10px;
                    cursor:pointer;
                    font-weight:700;
                "
            >
                ${text}
            </button>
        `;
    }

    function resultBox(
        message,
        error = false
    ) {

        const result =
            document.getElementById(
                "calculatorResult"
            );

        if (!result) {
            return;
        }

        result.innerHTML = `
            <div style="
                margin-top:18px;
                padding:15px;
                background:
                    ${
                        error
                            ? "#fef2f2"
                            : "#eff6ff"
                    };
                color:
                    ${
                        error
                            ? "#b91c1c"
                            : "#1d4ed8"
                    };
                border-radius:12px;
                text-align:center;
                font-weight:700;
            ">
                ${message}
            </div>
        `;
    }

    function formatNumber(value) {

        return Number(value).toLocaleString(
            "en-US",
            {
                maximumFractionDigits:2
            }
        );
    }

    // ============================================================
    // 🤖 GEMINI AI BUSINESS COACH
    // ============================================================

    function openAI() {

        requireLogin(function () {

            showModal(
                "🤖 AI Business Coach",

                `
                    <div style="
                        background:
                            linear-gradient(
                                135deg,
                                #eff6ff,
                                #f5f3ff
                            );
                        padding:20px;
                        border-radius:18px;
                    ">

                        <div style="
                            text-align:center;
                            margin-bottom:18px;
                        ">

                            <div style="
                                font-size:48px;
                            ">
                                🤖
                            </div>

                            <h2 style="
                                margin:5px 0;
                                color:#0f172a;
                            ">
                                AI Business Coach
                            </h2>

                            <p style="
                                color:#64748b;
                                margin:0;
                            ">
                                Powered by Gemini AI
                            </p>

                        </div>

                        <div id="aiChatMessages"
                            style="
                                background:#fff;
                                border:
                                    1px solid #e2e8f0;
                                border-radius:15px;
                                padding:15px;
                                min-height:120px;
                                max-height:420px;
                                overflow-y:auto;
                                margin-bottom:12px;
                            "
                        >

                            <div style="
                                background:#eff6ff;
                                color:#1e3a8a;
                                padding:12px;
                                border-radius:12px;
                                margin-bottom:10px;
                            ">
                                👋 Hello ${escapeHTML(
                                    getUserName()
                                )}!

                                <br><br>

                                I am your AI Business Coach.
                                Ask me about Sales, Marketing,
                                Leadership, Finance,
                                Strategy or Business Growth.
                            </div>

                        </div>

                        <div style="
                            display:flex;
                            gap:8px;
                            flex-wrap:wrap;
                            margin-bottom:12px;
                        ">

                            <button
                                onclick="askAIQuick(
                                    'How can I increase my sales?'
                                )"
                                style="
                                    border:1px solid #bfdbfe;
                                    background:#fff;
                                    color:#1d4ed8;
                                    padding:8px 10px;
                                    border-radius:20px;
                                    cursor:pointer;
                                    font-size:12px;
                                "
                            >
                                📈 Increase Sales
                            </button>

                            <button
                                onclick="askAIQuick(
                                    'How can I improve my sales team performance?'
                                )"
                                style="
                                    border:1px solid #bfdbfe;
                                    background:#fff;
                                    color:#1d4ed8;
                                    padding:8px 10px;
                                    border-radius:20px;
                                    cursor:pointer;
                                    font-size:12px;
                                "
                            >
                                👥 Team Performance
                            </button>

                            <button
                                onclick="askAIQuick(
                                    'Give me a 90-day business growth plan.'
                                )"
                                style="
                                    border:1px solid #bfdbfe;
                                    background:#fff;
                                    color:#1d4ed8;
                                    padding:8px 10px;
                                    border-radius:20px;
                                    cursor:pointer;
                                    font-size:12px;
                                "
                            >
                                🚀 Growth Plan
                            </button>

                        </div>

                        <div style="
                            display:flex;
                            gap:8px;
                            align-items:flex-end;
                        ">

                            <textarea
                                id="aiMessage"
                                rows="3"
                                placeholder="
                                    Ask your business question...
                                "
                                style="
                                    flex:1;
                                    resize:none;
                                    padding:13px;
                                    border:
                                        1px solid #cbd5e1;
                                    border-radius:12px;
                                    font-size:15px;
                                    outline:none;
                                "
                            ></textarea>

                            <button
                                id="aiSendButton"
                                onclick="sendAIMessage()"
                                style="
                                    border:0;
                                    background:#2563eb;
                                    color:#fff;
                                    padding:13px 17px;
                                    border-radius:12px;
                                    cursor:pointer;
                                    font-weight:800;
                                "
                            >
                                Send
                            </button>

                        </div>

                        <div style="
                            margin-top:10px;
                            font-size:11px;
                            color:#94a3b8;
                            text-align:center;
                        ">
                            AI advice should be reviewed
                            using your own business judgment.
                        </div>

                    </div>
                `
            );

            setTimeout(
                function () {

                    const input =
                        document.getElementById(
                            "aiMessage"
                        );

                    if (input) {

                        input.focus();

                        input.addEventListener(
                            "keydown",
                            function (event) {

                                if (
                                    event.key ===
                                        "Enter" &&
                                    !event.shiftKey
                                ) {

                                    event.preventDefault();

                                    sendAIMessage();
                                }
                            }
                        );
                    }

                },
                100
            );
        });
    }

    // ============================================================
    // SEND AI MESSAGE
    // ============================================================

    async function sendAIMessage() {

        const input =
            document.getElementById(
                "aiMessage"
            );

        const button =
            document.getElementById(
                "aiSendButton"
            );

        const messages =
            document.getElementById(
                "aiChatMessages"
            );

        if (!input || !messages) {
            return;
        }

        const message =
            input.value.trim();

        if (!message) {

            showToast(
                "✍️ Please enter your question."
            );

            input.focus();

            return;
        }

        if (message.length > 8000) {

            showToast(
                "⚠️ Message is too long."
            );

            return;
        }

        appendAIMessage(
            "user",
            message
        );

        input.value = "";

        input.disabled = true;

        if (button) {

            button.disabled = true;

            button.textContent =
                "⏳";
        }

        const loadingId =
            "aiLoading_" +
            Date.now();

        messages.insertAdjacentHTML(
            "beforeend",

            `
                <div
                    id="${loadingId}"
                    style="
                        background:#f8fafc;
                        color:#64748b;
                        padding:12px;
                        border-radius:12px;
                        margin-bottom:10px;
                    "
                >
                    🤖 AI Coach is thinking...
                </div>
            `
        );

        scrollAIChat();

        try {

            const response =
                await fetch(
                    AI_API_URL,
                    {
                        method:"POST",

                        headers:{
                            "Content-Type":
                                "application/json"
                        },

                        body:JSON.stringify({
                            message:
                                message
                        })
                    }
                );

            let data = null;

            try {

                data =
                    await response.json();

            } catch (jsonError) {

                data = null;
            }

            const loading =
                document.getElementById(
                    loadingId
                );

            if (loading) {
                loading.remove();
            }

            if (!response.ok) {

                const errorMessage =
                    data?.error ||
                    "AI server returned an error.";

                appendAIMessage(
                    "error",
                    errorMessage
                );

                return;
            }

            if (
                !data ||
                !data.success ||
                !data.reply
            ) {

                appendAIMessage(
                    "error",
                    "No AI response received."
                );

                return;
            }

            appendAIMessage(
                "ai",
                data.reply
            );

        } catch (error) {

            console.error(
                "AI Connection Error:",
                error
            );

            const loading =
                document.getElementById(
                    loadingId
                );

            if (loading) {
                loading.remove();
            }

            appendAIMessage(
                "error",
                `
                    ❌ AI connection failed.

                    Please make sure the Render
                    server is online and try again.
                `
            );

        } finally {

            input.disabled = false;

            if (button) {

                button.disabled = false;

                button.textContent =
                    "Send";
            }

            input.focus();

            scrollAIChat();
        }
    }

    // ============================================================
    // QUICK AI QUESTIONS
    // ============================================================

    function askAIQuick(question) {

        const input =
            document.getElementById(
                "aiMessage"
            );

        if (!input) {
            return;
        }

        input.value =
            question;

        sendAIMessage();
    }

    // ============================================================
    // AI CHAT MESSAGE
    // ============================================================

    function appendAIMessage(
        type,
        message
    ) {

        const messages =
            document.getElementById(
                "aiChatMessages"
            );

        if (!messages) {
            return;
        }

        let background =
            "#eff6ff";

        let textColor =
            "#1e3a8a";

        let align =
            "left";

        let label =
            "🤖 AI Coach";

        if (type === "user") {

            background =
                "#2563eb";

            textColor =
                "#ffffff";

            align =
                "right";

            label =
                "You";
        }

        if (type === "error") {

            background =
                "#fef2f2";

            textColor =
                "#b91c1c";

            label =
                "⚠️ Error";
        }

        const safeMessage =
            escapeHTML(
                String(message)
            ).replace(
                /\n/g,
                "<br>"
            );

        messages.insertAdjacentHTML(
            "beforeend",

            `
                <div style="
                    display:flex;
                    justify-content:
                        ${align === "right"
                            ? "flex-end"
                            : "flex-start"};
                    margin-bottom:10px;
                ">

                    <div style="
                        max-width:90%;
                        background:${background};
                        color:${textColor};
                        padding:12px 14px;
                        border-radius:14px;
                        line-height:1.6;
                    ">

                        <div style="
                            font-size:11px;
                            font-weight:800;
                            margin-bottom:5px;
                            opacity:.75;
                        ">
                            ${label}
                        </div>

                        <div>
                            ${safeMessage}
                        </div>

                    </div>

                </div>
            `
        );

        scrollAIChat();
    }

    function scrollAIChat() {

        const messages =
            document.getElementById(
                "aiChatMessages"
            );

        if (!messages) {
            return;
        }

        messages.scrollTop =
            messages.scrollHeight;
    }

    // ============================================================
    // AI HEALTH CHECK
    // ============================================================

    async function checkAIHealth() {

        try {

            const response =
                await fetch(
                    API_BASE_URL +
                    "/api/health"
                );

            const data =
                await response.json();

            return data;

        } catch (error) {

            console.error(
                "AI Health Check Error:",
                error
            );

            return null;
        }
    }

    // ============================================================
    // PREMIUM
    // ============================================================

    function getTrialInfo() {

        try {

            return JSON.parse(
                localStorage.getItem(
                    TRIAL_KEY
                )
            ) || null;

        } catch (error) {

            return null;
        }
    }

    function startTrial() {

        const existing =
            getTrialInfo();

        if (existing) {

            showToast(
                "⭐ Your trial has already started."
            );

            return;
        }

        const trial = {

            startedAt:
                new Date().toISOString()
        };

        localStorage.setItem(
            TRIAL_KEY,
            JSON.stringify(trial)
        );

        showToast(
            "⭐ 7-Day Trial Started!"
        );

        openPremium();
    }

    function getTrialDaysRemaining() {

        const trial =
            getTrialInfo();

        if (!trial) {
            return 7;
        }

        const started =
            new Date(
                trial.startedAt
            );

        const now =
            new Date();

        const diff =
            now.getTime() -
            started.getTime();

        const daysPassed =
            Math.floor(
                diff /
                (
                    1000 *
                    60 *
                    60 *
                    24
                )
            );

        return Math.max(
            0,
            7 - daysPassed
        );
    }

    function openPremium() {

        requireLogin(function () {

            const remaining =
                getTrialDaysRemaining();

            const trial =
                getTrialInfo();

            showModal(
                "⭐ Premium Academy",

                `
                    <div style="
                        text-align:center;
                    ">

                        <div style="
                            font-size:55px;
                        ">
                            👑
                        </div>

                        <h2>
                            Premium Business Academy
                        </h2>

                        <p style="
                            color:#64748b;
                        ">
                            Advanced business education
                            and professional tools.
                        </p>

                        <div style="
                            background:#f5f3ff;
                            padding:18px;
                            border-radius:15px;
                            margin:20px 0;
                        ">

                            <strong>
                                ${
                                    trial
                                        ? `⭐ ${remaining} days remaining`
                                        : "🎁 7-Day Free Trial"
                                }
                            </strong>

                        </div>

                        <div style="
                            text-align:left;
                            padding:15px;
                        ">

                            <p>
                                ✓ 100+ Business Lessons
                            </p>

                            <p>
                                ✓ Gemini AI Business Coach
                            </p>

                            <p>
                                ✓ Advanced Business Tools
                            </p>

                            <p>
                                ✓ Business Templates
                            </p>

                            <p>
                                ✓ Sales Management System
                            </p>

                            <p>
                                ✓ Certificates
                            </p>

                        </div>

                        ${
                            trial
                                ? `
                                    <button
                                        onclick="
                                            showToast(
                                                '💳 Subscription system coming soon!'
                                            )
                                        "
                                        style="
                                            width:100%;
                                            border:0;
                                            background:#7c3aed;
                                            color:#fff;
                                            padding:14px;
                                            border-radius:10px;
                                            cursor:pointer;
                                            font-weight:700;
                                        "
                                    >
                                        💳 Subscription Coming Soon
                                    </button>
                                `
                                : `
                                    <button
                                        onclick="startTrial()"
                                        style="
                                            width:100%;
                                            border:0;
                                            background:#7c3aed;
                                            color:#fff;
                                            padding:14px;
                                            border-radius:10px;
                                            cursor:pointer;
                                            font-weight:700;
                                        "
                                    >
                                        🎁 Start 7-Day Free Trial
                                    </button>
                                `
                        }

                    </div>
                `
            );
        });
    }

    // ============================================================
    // BUSINESS PLAN
    // ============================================================

    function openBusinessPlan() {

        requireLogin(function () {

            showModal(
                "📋 Business Plan Builder",

                `
                    ${textInput(
                        "businessName",
                        "Business Name"
                    )}

                    ${textInput(
                        "productService",
                        "Product / Service"
                    )}

                    ${textInput(
                        "targetCustomer",
                        "Target Customer"
                    )}

                    <button
                        onclick="generateBusinessPlan()"
                        style="
                            width:100%;
                            border:0;
                            background:#2563eb;
                            color:#fff;
                            padding:14px;
                            border-radius:10px;
                            cursor:pointer;
                            font-weight:700;
                        "
                    >
                        Generate 90-Day Plan
                    </button>

                    <div id="businessPlanResult"></div>
                `
            );
        });
    }

    function textInput(
        id,
        label
    ) {

        return `
            <div style="
                margin-bottom:15px;
            ">

                <label style="
                    display:block;
                    margin-bottom:7px;
                    font-weight:600;
                ">
                    ${label}
                </label>

                <input
                    id="${id}"
                    type="text"
                    style="
                        width:100%;
                        padding:13px;
                        border:
                            1px solid #cbd5e1;
                        border-radius:10px;
                        font-size:15px;
                    "
                >

            </div>
        `;
    }

    function generateBusinessPlan() {

        const name =
            document.getElementById(
                "businessName"
            ).value ||
            "My Business";

        const product =
            document.getElementById(
                "productService"
            ).value ||
            "Product / Service";

        const customer =
            document.getElementById(
                "targetCustomer"
            ).value ||
            "Target Customer";

        const result =
            document.getElementById(
                "businessPlanResult"
            );

        if (!result) {
            return;
        }

        result.innerHTML = `

            <div style="
                margin-top:20px;
                background:#f8fafc;
                padding:20px;
                border-radius:15px;
            ">

                <h3>
                    ${escapeHTML(name)}
                </h3>

                <p>
                    <strong>Product:</strong>
                    ${escapeHTML(product)}
                </p>

                <p>
                    <strong>Target Customer:</strong>
                    ${escapeHTML(customer)}
                </p>

                <hr>

                <h3>
                    90-Day Action Plan
                </h3>

                <p>
                    <strong>Days 1–30:</strong>
                    Research market, define customers
                    and prepare the offer.
                </p>

                <p>
                    <strong>Days 31–60:</strong>
                    Start sales and marketing activities
                    and measure results.
                </p>

                <p>
                    <strong>Days 61–90:</strong>
                    Improve profitable channels
                    and scale the business.
                </p>

            </div>
        `;
    }

    // ============================================================
    // PROFILE
    // ============================================================

    function openProfile() {

        requireLogin(function () {

            const user =
                getUser();

            const completed =
                getCompletedLessons();

            const percent =
                Math.round(
                    (
                        completed.length /
                        lessons.length
                    ) * 100
                );

            showModal(
                "👤 My Profile",

                `
                    <div style="
                        text-align:center;
                        padding:20px;
                    ">

                        <div style="
                            width:80px;
                            height:80px;
                            margin:auto;
                            border-radius:50%;
                            background:#2563eb;
                            color:#fff;
                            display:flex;
                            align-items:center;
                            justify-content:center;
                            font-size:30px;
                            font-weight:700;
                        ">
                            ${escapeHTML(
                                user.name
                                    .charAt(0)
                                    .toUpperCase()
                            )}
                        </div>

                        <h2>
                            ${escapeHTML(
                                user.name
                            )}
                        </h2>

                        <p style="
                            color:#64748b;
                        ">
                            ${escapeHTML(
                                user.email
                            )}
                        </p>

                        <div style="
                            display:grid;
                            grid-template-columns:
                                repeat(2,1fr);
                            gap:12px;
                            margin-top:20px;
                        ">

                            <div style="
                                background:#f8fafc;
                                padding:18px;
                                border-radius:15px;
                            ">

                                <h2 style="
                                    margin:0;
                                ">
                                    ${completed.length}
                                </h2>

                                <p style="
                                    margin:5px 0 0;
                                    color:#64748b;
                                ">
                                    Completed
                                </p>

                            </div>

                            <div style="
                                background:#f8fafc;
                                padding:18px;
                                border-radius:15px;
                            ">

                                <h2 style="
                                    margin:0;
                                ">
                                    ${percent}%
                                </h2>

                                <p style="
                                    margin:5px 0 0;
                                    color:#64748b;
                                ">
                                    Progress
                                </p>

                            </div>

                        </div>

                        <div style="
                            margin-top:20px;
                            padding:15px;
                            background:#eff6ff;
                            border-radius:12px;
                        ">

                            ⭐ Plan:
                            <strong>
                                ${escapeHTML(
                                    user.plan ||
                                    "Free"
                                )}
                            </strong>

                        </div>

                    </div>
                `
            );
        });
    }

    // ============================================================
    // NOTIFICATION
    // ============================================================

    function showNotification() {

        showToast(
            "🔔 Welcome to Aung Business Academy!"
        );
    }

    // ============================================================
    // LOGOUT
    // ============================================================

    function logoutUser() {

        if (
            !confirm(
                "Are you sure you want to logout?"
            )
        ) {
            return;
        }

        localStorage.removeItem(
            USER_KEY
        );

        closeModal();

        showLoginScreen();
    }

    // ============================================================
    // SIDEBAR
    // ============================================================

    function toggleSidebar() {

        const sidebar =
            document.querySelector(
                ".sidebar"
            );

        if (!sidebar) {
            return;
        }

        sidebar.classList.toggle(
            "active"
        );
    }

    function toggleMenu() {

        toggleSidebar();
    }

    // ============================================================
    // DASHBOARD BUTTON
    // ============================================================

    function goDashboard() {

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

        showToast(
            "🏠 Dashboard"
        );
    }

    // ============================================================
    // TOAST
    // ============================================================

    function showToast(message) {

        const old =
            document.getElementById(
                "academyToast"
            );

        if (old) {
            old.remove();
        }

        const toast =
            document.createElement(
                "div"
            );

        toast.id =
            "academyToast";

        toast.textContent =
            message;

        toast.style.cssText = `
            position:fixed;
            left:50%;
            bottom:25px;
            transform:translateX(-50%);
            background:#0f172a;
            color:#fff;
            padding:13px 20px;
            border-radius:12px;
            z-index:300000;
            box-shadow:
                0 10px 30px rgba(0,0,0,.25);
            font-size:14px;
            font-weight:600;
            max-width:90%;
            text-align:center;
        `;

        document.body.appendChild(
            toast
        );

        setTimeout(
            function () {

                if (toast) {
                    toast.remove();
                }

            },
            2500
        );
    }

    // ============================================================
    // ESC KEY
    // ============================================================

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key ===
                "Escape"
            ) {

                closeModal();
            }
        }
    );

    // ============================================================
    // SECURITY
    // ============================================================

    function escapeHTML(text) {

        return String(text)
            .replace(
                /&/g,
                "&amp;"
            )
            .replace(
                /</g,
                "&lt;"
            )
            .replace(
                />/g,
                "&gt;"
            )
            .replace(
                /"/g,
                "&quot;"
            )
            .replace(
                /'/g,
                "&#039;"
            );
    }

    // ============================================================
    // GLOBAL FUNCTIONS
    // ============================================================

    window.openLessons =
        openLessons;

    window.openLesson =
        openLesson;

    window.showLesson =
        showLesson;

    window.closeModal =
        closeModal;

    window.startQuiz =
        startQuiz;

    window.submitQuiz =
        submitQuiz;

    window.continueLearning =
        continueLearning;

    window.filterLessons =
        filterLessons;

    window.setLessonFilter =
        setLessonFilter;

    window.openCategory =
        openCategory;

    window.openTools =
        openTools;

    window.openProfitCalculator =
        openProfitCalculator;

    window.calculateProfit =
        calculateProfit;

    window.openPricingCalculator =
        openPricingCalculator;

    window.calculatePrice =
        calculatePrice;

    window.openBreakEvenCalculator =
        openBreakEvenCalculator;

    window.calculateBreakEven =
        calculateBreakEven;

    window.openSalesTargetCalculator =
        openSalesTargetCalculator;

    window.calculateSalesTarget =
        calculateSalesTarget;

    window.openAI =
        openAI;

    window.sendAIMessage =
        sendAIMessage;

    window.askAIQuick =
        askAIQuick;

    window.checkAIHealth =
        checkAIHealth;

    window.openPremium =
        openPremium;

    window.startTrial =
        startTrial;

    window.openBusinessPlan =
        openBusinessPlan;

    window.generateBusinessPlan =
        generateBusinessPlan;

    window.openProfile =
        openProfile;

    window.showNotification =
        showNotification;

    window.logoutUser =
        logoutUser;

    window.toggleSidebar =
        toggleSidebar;

    window.toggleMenu =
        toggleMenu;

    window.goDashboard =
        goDashboard;

    window.showToast =
        showToast;

    // ============================================================
    // INIT
    // ============================================================

    function init() {

        updateDashboard();

        if (!isLoggedIn()) {

            setTimeout(
                showLoginScreen,
                100
            );

        } else {

            updateUserUI();
        }

        console.log(
            "Aung Business Academy V4 loaded successfully."
        );

        console.log(
            "Gemini AI Endpoint:",
            AI_API_URL
        );
    }

    init();

})();
