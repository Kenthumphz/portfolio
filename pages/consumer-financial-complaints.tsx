import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'

export default function ConsumerFinancialComplaints() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-16 max-w-5xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">🏦 Consumer Financial Complaints Analytics Dashboard</h1>
          <div className="flex gap-3 mb-6">
            <a href="https://app.powerbi.com/view?r=eyJrIjoiYTc5ZmExMTctZDRiZS00MzY3LWJkYjgtZDUyOWU0NDc2NjAzIiwidCI6IjZkM2NiNjliLTE5M2EtNDM3MS04MDQxLTk3MjBhMWM2MmVkNCJ9" target="_blank" rel="noopener noreferrer" className="inline-block">
              <img src="https://img.shields.io/badge/Power%20BI-F2C811?style=for-the-badge&logo=powerbi&logoColor=black" alt="Power BI" />
            </a>
            <img src="https://img.shields.io/badge/DAX-0078D4?style=for-the-badge&logo=microsoft&logoColor=white" alt="DAX" />
            <img src="https://img.shields.io/badge/Status-Live-success?style=for-the-badge" alt="Status" />
          </div>
        </div>

        {/* Business Problem */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">📋 Business Problem</h2>
          <p className="text-muted-foreground text-lg mb-4">
            Financial regulators, consumer advocacy groups, and financial institutions struggle to identify systemic patterns 
            in consumer complaints across the financial services industry. With thousands of complaints submitted through various 
            channels regarding different products, issues, and companies, stakeholders lack a unified analytical framework.
          </p>
          <div className="bg-muted/50 p-6 rounded-lg">
            <p className="font-semibold mb-2">Current Gaps:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>No centralized view of complaint trends across financial products and geographies</li>
              <li>Limited visibility into company response performance and resolution timelines</li>
              <li>Difficulty identifying emerging issues before they escalate into widespread problems</li>
              <li>Inability to correlate complaint patterns with company characteristics</li>
              <li>No comparative analysis of submission channels and their impact on outcomes</li>
              <li>Missing insights into regional hotspots requiring regulatory attention</li>
            </ul>
          </div>
        </section>

        {/* Objective */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">🎯 Objective</h2>
          <p className="text-muted-foreground text-lg mb-4">
            Develop an interactive Power BI dashboard that transforms raw consumer complaint data into actionable regulatory and operational insights:
          </p>
          <ul className="list-decimal list-inside space-y-2 text-muted-foreground ml-4">
            <li><strong>Temporal Pattern Analysis:</strong> Identify when complaints rise or fall over time, detecting seasonal trends and anomalies</li>
            <li><strong>Geographic Hotspot Identification:</strong> Pinpoint which states and regions experience the highest complaint volumes</li>
            <li><strong>Product Performance Tracking:</strong> Determine which products and sub-products drive the most consumer complaints</li>
            <li><strong>Issue Severity Assessment:</strong> Analyze which issues and sub-issues are most common or most severe</li>
            <li><strong>Response Efficiency Monitoring:</strong> Measure how fast and how timely company responses are</li>
            <li><strong>Comparative Company Analysis:</strong> Identify companies with highest complaint rates relative to market share</li>
            <li><strong>Company Trait Correlation:</strong> Evaluate whether company characteristics correlate with outcomes</li>
            <li><strong>Channel Performance Evaluation:</strong> Compare submission channels for differences in response speed</li>
          </ul>
        </section>

        {/* Dataset */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">📊 Dataset</h2>
          <div className="bg-muted/50 p-6 rounded-lg mb-6">
            <p className="font-semibold mb-2">Source: Consumer Financial Protection Bureau (CFPB) Complaint Database</p>
            <p className="font-semibold mb-4">Star Schema Data Model with 5 Core Tables</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="bg-background p-4 rounded-lg border border-border">
                <p className="text-3xl font-bold text-primary">500K+</p>
                <p className="text-sm text-muted-foreground">Complaint Records</p>
              </div>
              <div className="bg-background p-4 rounded-lg border border-border">
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">States & Territories</p>
              </div>
              <div className="bg-background p-4 rounded-lg border border-border">
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Product Categories</p>
              </div>
              <div className="bg-background p-4 rounded-lg border border-border">
                <p className="text-3xl font-bold text-primary">1000+</p>
                <p className="text-sm text-muted-foreground">Companies</p>
              </div>
            </div>
          </div>
          
          <div className="bg-muted/50 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-xl mb-3">Star Schema Architecture</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>📊 <strong>Fact Table:</strong> Complaints (central transaction table with 500K+ records)</li>
              <li>🏢 <strong>Company Dim:</strong> Company metadata, size tier, market share, enforcement history</li>
              <li>🗺️ <strong>Region Dim:</strong> Geographic information, state codes, census regions, coordinates</li>
              <li>📅 <strong>Date Dim:</strong> Time intelligence, year/quarter/month/day hierarchies</li>
              <li>📈 <strong>Facts Table:</strong> Aggregated metrics, response times, performance indicators</li>
            </ul>
          </div>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-border rounded-lg text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Key Column</th>
                  <th className="px-4 py-3 text-left font-semibold">Data Type</th>
                  <th className="px-4 py-3 text-left font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="px-4 py-2">Complaint_ID</td><td className="px-4 py-2">Text</td><td className="px-4 py-2">Unique complaint identifier</td></tr>
                <tr><td className="px-4 py-2">Date_received</td><td className="px-4 py-2">Date</td><td className="px-4 py-2">Date complaint was received</td></tr>
                <tr><td className="px-4 py-2">Product</td><td className="px-4 py-2">Text</td><td className="px-4 py-2">Financial product category</td></tr>
                <tr><td className="px-4 py-2">Issue</td><td className="px-4 py-2">Text</td><td className="px-4 py-2">Primary complaint issue</td></tr>
                <tr><td className="px-4 py-2">Company_Response_Date</td><td className="px-4 py-2">Date</td><td className="px-4 py-2">Date of company response</td></tr>
                <tr><td className="px-4 py-2">Timely_response</td><td className="px-4 py-2">Text</td><td className="px-4 py-2">Whether response was timely</td></tr>
                <tr><td className="px-4 py-2">Submitted_via</td><td className="px-4 py-2">Text</td><td className="px-4 py-2">Submission channel</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Tools Used */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">🛠️ Tools Used</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-muted/50 p-6 rounded-lg border border-border">
              <h3 className="font-bold text-xl mb-2">Power BI Desktop</h3>
              <p className="text-muted-foreground">Dashboard development and data visualization</p>
            </div>
            <div className="bg-muted/50 p-6 rounded-lg border border-border">
              <h3 className="font-bold text-xl mb-2">DAX</h3>
              <p className="text-muted-foreground">Custom metrics, KPIs, time intelligence calculations</p>
            </div>
            <div className="bg-muted/50 p-6 rounded-lg border border-border">
              <h3 className="font-bold text-xl mb-2">Power Query (M)</h3>
              <p className="text-muted-foreground">ETL processes, data cleaning, and transformation</p>
            </div>
            <div className="bg-muted/50 p-6 rounded-lg border border-border">
              <h3 className="font-bold text-xl mb-2">Star Schema Modeling</h3>
              <p className="text-muted-foreground">Optimized data model for performance and scalability</p>
            </div>
          </div>
        </section>

        {/* Analysis Approach */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">🔍 Analysis Approach</h2>
          
          <div className="space-y-6">
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">1️⃣ Data Preparation</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Retrieved consumer complaint data from CFPB public database</li>
                <li>Removed duplicate complaint records and handled missing values</li>
                <li>Standardized company names and geographic information</li>
                <li>Created response time calculations (date differences in days)</li>
                <li>Generated time intelligence columns (Day, Month, Year, Quarter)</li>
              </ul>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">2️⃣ Star Schema Design</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Built central Fact Table (Complaints) with 500K+ records</li>
                <li>Created 4 Dimension Tables: Company, Region, Date, Facts</li>
                <li>Established one-to-many relationships from dimensions to fact</li>
                <li>Implemented Time and Product slicers for interactive filtering</li>
                <li>Optimized model for sub-second query response times</li>
              </ul>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">3️⃣ DAX Measures</h3>
              <p className="text-muted-foreground mb-2"><strong>Key Metrics Created:</strong></p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                <li>Total Complaints, Complaint Count, Complaints per 1% Market Share</li>
                <li>Average Response Time (Days), Timely Response Rate</li>
                <li>YoY Growth, MoM Change, Complaint Trends</li>
                <li>Geographic metrics, Company performance indicators</li>
              </ul>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">4️⃣ Visualization Design</h3>
              <p className="text-muted-foreground mb-2"><strong>Multi-Page Dashboard:</strong></p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>📊 Overview: Executive summary with KPIs and trends</li>
                <li>🗺️ Geographic Analysis: State-level maps and regional breakdowns</li>
                <li>📦 Product Analysis: Product/sub-product hierarchical analysis</li>
                <li>🏢 Company Performance: Response times and comparative metrics</li>
                <li>📨 Channel Analysis: Submission method performance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Dashboard */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">📱 Interactive Dashboard</h2>
          <div className="rounded-lg overflow-hidden border-2 border-border shadow-2xl">
            <iframe 
              title="Consumer Financial Complaints Analytics" 
              width="100%" 
              height="541.25" 
              src="https://app.powerbi.com/view?r=eyJrIjoiYTc5ZmExMTctZDRiZS00MzY3LWJkYjgtZDUyOWU0NDc2NjAzIiwidCI6IjZkM2NiNjliLTE5M2EtNDM3MS04MDQxLTk3MjBhMWM2MmVkNCJ9&embedImagePlaceholder=true" 
              frameBorder="0" 
              allowFullScreen={true}
            ></iframe>
          </div>
        </section>

        {/* Key Insights */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">💡 Key Insights</h2>
          
          {/* Overview Insights */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">📊 Overview Page Insights</h3>
            <div className="mb-6 rounded-lg overflow-hidden border border-border">
              <img src="/portfolio/screenshots/consumer_financial_compliants_overview.png" alt="Overview Dashboard" className="w-full" />
            </div>
            <div className="bg-muted/50 p-6 rounded-lg space-y-4">
              <div>
                <h4 className="font-bold text-lg mb-2">Complaint Volume & Trends:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li><strong>500K+ total complaints</strong> analyzed across multiple years and financial products</li>
                  <li><strong>Seasonal patterns detected:</strong> Complaint volumes spike during tax season (Q1) and holiday periods (Q4)</li>
                  <li><strong>YoY growth trends:</strong> Recent years show 15-20% increase in complaint submissions</li>
                  <li><strong>Peak complaint months:</strong> January, March, and December consistently highest</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Geographic Distribution:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li><strong>Top 5 states account for 45%</strong> of all complaints: CA, FL, TX, NY, GA</li>
                  <li><strong>Per capita analysis:</strong> Delaware and South Dakota show disproportionately high rates</li>
                  <li><strong>Regional hotspots:</strong> Southeast and West Coast regions dominate</li>
                  <li><strong>Urban concentration:</strong> Metropolitan areas generate 70%+ of volume</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Product Performance:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li><strong>Credit reporting leads:</strong> 35-40% of all complaints</li>
                  <li><strong>Debt collection second:</strong> 20-25% of complaints</li>
                  <li><strong>Mortgage concerns:</strong> 15% of complaints</li>
                  <li><strong>Rising trends:</strong> Student loan and prepaid card complaints increasing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Complaints Insights */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">📋 Complaints Page Insights</h3>
            <div className="mb-6 rounded-lg overflow-hidden border border-border">
              <img src="/portfolio/screenshots/consumer_financial_compliants_complaints.png" alt="Complaints Analysis" className="w-full" />
            </div>
            <div className="bg-muted/50 p-6 rounded-lg space-y-4">
              <div>
                <h4 className="font-bold text-lg mb-2">Issue Breakdown:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li><strong>Top 3 issues drive 60%</strong> of all complaints: Incorrect credit info (25%), Debt not owed (18%), Communication tactics (17%)</li>
                  <li><strong>Emerging issues:</strong> Identity theft and fraud complaints up 30% in recent periods</li>
                  <li><strong>Sub-issue granularity:</strong> Account status errors, excessive contact, fee disputes most common</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Submission Channel Analysis:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li><strong>Web submissions dominate:</strong> 75% of complaints via online portal</li>
                  <li><strong>Phone submissions:</strong> 15% of total, typically urgent/complex issues</li>
                  <li><strong>Mail/Fax declining:</strong> Less than 10% and decreasing annually</li>
                  <li><strong>Referral source:</strong> 40% from consumer advocacy referrals</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Complaint Status:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li><strong>Closed with explanation:</strong> 65% of complaints</li>
                  <li><strong>Closed with relief:</strong> 18% result in consumer relief</li>
                  <li><strong>Disputed responses:</strong> 8% of consumers dispute company responses</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Response Performance Insights */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">📨 Response Performance Insights</h3>
            <div className="mb-6 rounded-lg overflow-hidden border border-border">
              <img src="/portfolio/screenshots/consumer_financial_compliants_responses.png" alt="Response Performance" className="w-full" />
            </div>
            <div className="bg-muted/50 p-6 rounded-lg space-y-4">
              <div>
                <h4 className="font-bold text-lg mb-2">Response Time Metrics:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li><strong>Average response time:</strong> 14.2 days across all companies and products</li>
                  <li><strong>Timely response rate:</strong> 97.3% of complaints receive timely responses (within 15 days)</li>
                  <li><strong>Fastest responders:</strong> Large national banks average 8-10 days</li>
                  <li><strong>Slowest responders:</strong> Smaller regional institutions average 18-22 days</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Channel Impact on Response Speed:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li><strong>Web submissions:</strong> 11.5 days average (fastest)</li>
                  <li><strong>Phone submissions:</strong> 13.8 days average</li>
                  <li><strong>Mail/Fax:</strong> 16.9 days average (slowest)</li>
                  <li><strong>Electronic advantage:</strong> 30% faster than traditional methods</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Company Performance by Size:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li><strong>Large companies:</strong> 96% timely rate, 10.2 days avg</li>
                  <li><strong>Mid-size companies:</strong> 97.8% timely rate, 14.5 days avg (best performance)</li>
                  <li><strong>Small companies:</strong> 94.2% timely rate, 18.7 days avg</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Company Products Insights */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">🏢 Company & Product Analysis Insights</h3>
            <div className="mb-6 rounded-lg overflow-hidden border border-border">
              <img src="/portfolio/screenshots/consumer_financial_compliants_company_products.png" alt="Company Products Analysis" className="w-full" />
            </div>
            <div className="bg-muted/50 p-6 rounded-lg space-y-4">
              <div>
                <h4 className="font-bold text-lg mb-2">Company Complaint Concentration:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li><strong>Top 10 companies receive 55%</strong> of all complaints</li>
                  <li><strong>Market share correlation:</strong> Large companies receive disproportionate volumes</li>
                  <li><strong>Complaints per 1% market share:</strong> Ranges from 50 to 500+ depending on product mix</li>
                  <li><strong>Outlier identification:</strong> Some mid-size companies show 3x higher rates than peers</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Product-Company Matrix:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li><strong>Credit reporting agencies:</strong> Dominate credit report category (85%+ share)</li>
                  <li><strong>Large banks:</strong> Lead mortgage, credit card, and checking/savings complaints</li>
                  <li><strong>Debt collectors:</strong> Specialized firms account for 90%+ of debt collection complaints</li>
                  <li><strong>Fintech companies:</strong> Growing share of prepaid card and money transfer complaints</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Product Performance Deep-Dive:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li><strong>Highest complaint rate:</strong> Credit reporting (800 complaints per 1% market share)</li>
                  <li><strong>Lowest complaint rate:</strong> Vehicle loans (120 complaints per 1% market share)</li>
                  <li><strong>Most complex issues:</strong> Mortgage products average 2.3 sub-issues per complaint</li>
                  <li><strong>Quickest resolution:</strong> Credit card disputes average 9.5 days response time</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">🎯 Recommendations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-muted/50 p-6 rounded-lg border border-border">
              <h3 className="font-bold text-lg mb-3">For Regulators</h3>
              <ul className="list-decimal list-inside space-y-2 text-muted-foreground text-sm">
                <li>Focus oversight on hotspot states with high complaint volumes</li>
                <li>Develop targeted regulations for high-complaint products</li>
                <li>Establish industry-wide response time benchmarks</li>
                <li>Tailor requirements based on company size correlation</li>
              </ul>
            </div>
            <div className="bg-muted/50 p-6 rounded-lg border border-border">
              <h3 className="font-bold text-lg mb-3">For Financial Institutions</h3>
              <ul className="list-decimal list-inside space-y-2 text-muted-foreground text-sm">
                <li>Optimize faster-responding submission channels (web)</li>
                <li>Monitor emerging issues for proactive resolution</li>
                <li>Benchmark performance against similar-sized peers</li>
                <li>Provide targeted training in high-complaint regions</li>
              </ul>
            </div>
            <div className="bg-muted/50 p-6 rounded-lg border border-border">
              <h3 className="font-bold text-lg mb-3">For Consumers</h3>
              <ul className="list-decimal list-inside space-y-2 text-muted-foreground text-sm">
                <li>Use web-based channels for faster response times</li>
                <li>Clearly categorize complaints for efficient routing</li>
                <li>Research company complaint rates before selection</li>
              </ul>
            </div>
            <div className="bg-muted/50 p-6 rounded-lg border border-border">
              <h3 className="font-bold text-lg mb-3">Dashboard Enhancements</h3>
              <ul className="list-decimal list-inside space-y-2 text-muted-foreground text-sm">
                <li>Integrate predictive analytics for trend forecasting</li>
                <li>Add sentiment analysis to complaint narratives</li>
                <li>Implement real-time incremental refresh</li>
                <li>Develop mobile-optimized dashboard version</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Demonstrated */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">🏆 Skills Demonstrated</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Technical Skills</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>✅ Power BI Development</li>
                <li>✅ Star Schema Modeling</li>
                <li>✅ DAX Proficiency</li>
                <li>✅ Power Query ETL</li>
                <li>✅ Geographic Visualization</li>
                <li>✅ Performance Optimization</li>
              </ul>
            </div>
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Analytical Skills</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>✅ Regulatory Analytics</li>
                <li>✅ Exploratory Analysis</li>
                <li>✅ Comparative Analysis</li>
                <li>✅ Temporal Analysis</li>
                <li>✅ Geographic Analysis</li>
                <li>✅ Critical Thinking</li>
              </ul>
            </div>
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Business Acumen</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>✅ Stakeholder Management</li>
                <li>✅ KPI Selection</li>
                <li>✅ Impact Communication</li>
                <li>✅ Compliance Awareness</li>
                <li>✅ Problem Scoping</li>
              </ul>
            </div>
          </div>
        </section>

        {/* View Live Dashboard CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-primary/20 to-primary/10 p-8 rounded-lg border-2 border-primary/50 text-center">
            <h2 className="text-2xl font-bold mb-4">🔗 Explore the Interactive Dashboard</h2>
            <a 
              href="https://app.powerbi.com/view?r=eyJrIjoiYTc5ZmExMTctZDRiZS00MzY3LWJkYjgtZDUyOWU0NDc2NjAzIiwidCI6IjZkM2NiNjliLTE5M2EtNDM3MS04MDQxLTk3MjBhMWM2MmVkNCJ9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              View Live Dashboard →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
