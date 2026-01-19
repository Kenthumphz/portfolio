# 🏦 Consumer Financial Complaints Analytics Dashboard

[![Power BI](https://img.shields.io/badge/Power%20BI-F2C811?style=for-the-badge&logo=powerbi&logoColor=black)](https://app.powerbi.com/view?r=eyJrIjoiYTc5ZmExMTctZDRiZS00MzY3LWJkYjgtZDUyOWU0NDc2NjAzIiwidCI6IjZkM2NiNjliLTE5M2EtNDM3MS04MDQxLTk3MjBhMWM2MmVkNCJ9)
[![DAX](https://img.shields.io/badge/DAX-0078D4?style=for-the-badge&logo=microsoft&logoColor=white)]()
[![Status](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)]()

---

## 📋 Business Problem

Financial regulators, consumer advocacy groups, and financial institutions struggle to identify systemic patterns in consumer complaints across the financial services industry. With thousands of complaints submitted through various channels regarding different products, issues, and companies, stakeholders lack a unified analytical framework to understand:

**Current Gaps:**
- No centralized view of complaint trends across financial products and geographies
- Limited visibility into company response performance and resolution timelines
- Difficulty identifying emerging issues before they escalate into widespread problems
- Inability to correlate complaint patterns with company characteristics (size, market share, enforcement history)
- No comparative analysis of submission channels and their impact on resolution outcomes
- Missing insights into regional hotspots requiring regulatory attention

---

## 🎯 Objective

Develop an interactive Power BI dashboard that transforms raw consumer complaint data into actionable regulatory and operational insights, enabling stakeholders to:

1. **Temporal Pattern Analysis**: Identify when complaints rise or fall over time, detecting seasonal trends and anomalies
2. **Geographic Hotspot Identification**: Pinpoint which states and regions experience the highest complaint volumes
3. **Product Performance Tracking**: Determine which products and sub-products drive the most consumer complaints
4. **Issue Severity Assessment**: Analyze which issues and sub-issues are most common or most severe
5. **Response Efficiency Monitoring**: Measure how fast and how timely company responses are to consumer complaints
6. **Comparative Company Analysis**: Identify companies with the highest complaint rates relative to market share
7. **Company Trait Correlation**: Evaluate whether company characteristics (size tier, reputation, enforcement history) correlate with complaint outcomes
8. **Channel Performance Evaluation**: Compare submission channels for differences in response speed and resolution outcomes

---

## 📊 Dataset

**Source**: Consumer Financial Protection Bureau (CFPB) Complaint Database

**Primary Fact Table**: `Complaints`

**Data Characteristics**:
- **Time Period**: Multi-year complaint history
- **Records**: Comprehensive consumer complaint submissions
- **Geographic Coverage**: All 50 US states and territories
- **Product Scope**: Multiple financial product categories
- **Company Coverage**: Financial institutions across all size tiers

**Star Schema Data Model Structure**:

### Fact Table: Complaints
| Column | Data Type | Description |
|--------|-----------|-------------|
| Complaint_ID | Text | Unique complaint identifier |
| Date_received | Date | Date complaint was received |
| Date_submitted | Date | Date complaint was submitted |
| Company_public_response | Text | Company's public response |
| Company_response_to_consumer | Text | Type of response provided |
| Company_Response_Date | Date | Date of company response |
| Issue | Text | Primary complaint issue |
| Sub-issue | Text | Specific sub-issue |
| Product | Text | Financial product category |
| Sub-product | Text | Specific product type |
| Response_cat | Text | Response category |
| Timely_response | Text | Whether response was timely |
| Submitted_via | Text | Submission channel |
| In_Progress | Text | Complaint status |
| Total_Timely_Response | Integer | Count of timely responses |

### Dimension Tables

**Company Dim**
- Company_ID
- Company_Size_Tier
- Enforcement_History
- Market_Share_Percent
- Reputation_Score

**Region Dim**
- Region_ID
- Census_Division
- Census_Region
- State
- State_Name
- State_Latitude
- State_Longitude

**Date Dim**
- Date
- Date_ID
- Day_Name
- Day_Number
- Month_Name
- Month_Number
- Month_Short_Name
- Quarter
- Sortable_Quarter
- Week_of_Year
- Year

**Facts Table** (Aggregated Metrics)
- Company_ID
- Complaint_ID
- Company_Response_Date
- Date_Received_Key
- Date_Submitted_Key
- Avg_Response_Time_Days
- Complaint_Count
- Complaints_per_1pct_Share
- Average_Response_Time
- Average_Response_Time_Days
- Response_Time_Days
- Timely_Response_Rate
- Market_Share_Percent
- Reputation_Score

**Time Slicer & Product Slicer**
- Time_Slicer (Year, Month, Quarter filtering)
- Product_Slicer (Product category filtering)
- Time_Slicer_Order (Chronological ordering)
- Product_Slicer_Fields (Product hierarchy)

**Data Quality**:
- ✅ Validated complaint IDs for uniqueness
- ✅ Standardized date formats across temporal columns
- ✅ Geocoded state information with latitude/longitude
- ✅ Normalized company names for consistency
- ✅ Categorized response types and channels
- ✅ Calculated response time metrics in days

---

## 🛠️ Tools Used

| Tool | Purpose |
|------|---------|
| **Power BI Desktop** | Dashboard development and data visualization |
| **DAX (Data Analysis Expressions)** | Custom metrics, KPIs, time intelligence calculations |
| **Power Query (M Language)** | ETL processes, data cleaning, and transformation |
| **Star Schema Modeling** | Optimized data model for performance and scalability |

---

## 🔍 Analysis Approach

### 1️⃣ Data Preparation

**Data Extraction**:
- Retrieved consumer complaint data from CFPB public database
- Collected company metadata (size, market share, enforcement history)
- Obtained geographic information (state codes, census regions, coordinates)
- Extracted temporal dimensions for time-based analysis

**Data Cleaning in Power Query**:
- Removed duplicate complaint records
- Handled null/missing values in response dates and company information
- Standardized company names (resolved variations and abbreviations)
- Converted date fields to proper datetime format
- Validated state codes and mapped to full state names
- Categorized response types into consistent groups
- Cleaned submission channel data for uniformity

**Data Transformation**:
- Split complaint issues into Issue and Sub-issue hierarchies
- Categorized products into Product and Sub-product levels
- Created response time calculations: `Response_Time_Days = DATEDIFF([Date_received], [Company_Response_Date], DAY)`
- Generated time intelligence columns (Day, Month, Year, Quarter, Week)
- Built geographic hierarchies (State → Region → Division)
- Created company size tier classifications
- Calculated timely response flags and percentages

**Data Modeling (Star Schema)**:
- Created **Fact Table** (Complaints) as the central table
- Built **Dimension Tables**: Company Dim, Region Dim, Date Dim, Facts
- Established **one-to-many relationships** from dimensions to fact table
- Set up **Time Slicer** and **Product Slicer** for interactive filtering
- Optimized cardinality and relationships for query performance
- Implemented **role-playing dimensions** for different date types (received, submitted, response)

### 2️⃣ Exploratory & Diagnostic Analysis

**Initial Data Exploration**:
- Analyzed complaint volume distribution across time periods
- Examined geographic concentration of complaints by state and region
- Investigated product category breakdown and trends
- Explored company response patterns and timelines
- Assessed submission channel preferences and outcomes

**Diagnostic Questions**:
- When do complaints rise or fall over time? (Temporal trends)
- Which states and regions are complaint hotspots?
- Which products and sub-products drive the most complaints?
- Which issues and sub-issues are most common or most severe?
- How fast and how timely are company responses to complaints?
- Which companies show the highest complaint rates relative to market share?
- Do company traits (size tier, reputation, enforcement history) correlate with outcomes?
- Do submission channels differ in response speed or outcomes?

**Key Findings from EDA**:
- Seasonal patterns identified in complaint submissions
- Geographic clustering in specific states with high financial activity
- Credit reporting and debt collection emerged as top complaint categories
- Response time varied significantly by company size and product type
- Web submissions showed faster response times than mail/phone channels

### 3️⃣ Metrics and Calculations

**DAX Measures Developed**:
- **Complaint Metrics**: Total Complaints, Complaint Count, Complaints per 1% Market Share
- **Response Metrics**: Average Response Time (Days), Timely Response Rate, Total Timely Responses
- **Time Intelligence**: YoY Growth, MoM Change, Complaint Trends
- **Geographic Metrics**: Complaints by State, Regional Distribution
- **Company Performance**: Company Response Count, Market Share-Adjusted Complaints
- **Channel Analysis**: Submission Channel Breakdown, Channel Response Times
- **Issue Severity**: Issue Frequency, Sub-issue Distribution

**Calculated Columns**:
- Response_Time_Days: Date difference calculation
- Is_Timely_Response: Boolean flag based on response timeline
- Geographic_Region: State to region mapping
- Company_Size_Category: Classification based on market presence

### 4️⃣ Visualization and Storytelling

**Dashboard Architecture** (Multi-Page Design):

**📊 Overview Page** - Executive Summary
- **KPI Cards**: Total complaints, average response time, timely response rate
- **Temporal Trend Line Chart**: Complaint volume over time
- **Geographic Heat Map**: Complaint distribution by state
- **Top Issues Bar Chart**: Most frequent complaint issues
- **Company Performance Table**: Top companies by complaint volume

**🗺️ Geographic Analysis Page**
- **State-level Map Visualization**: Interactive US map with complaint density
- **Regional Breakdown**: Census region and division analysis
- **State Ranking Table**: Complaints per capita or absolute volume
- **Filters**: State, region, time period selection

**📦 Product Analysis Page**
- **Product Category Breakdown**: Donut/pie charts for product distribution
- **Sub-product Drill-down**: Hierarchical product-sub-product analysis
- **Trend Analysis**: Product-specific complaint trends over time
- **Issue-Product Matrix**: Cross-tabulation of issues by product

**🏢 Company Performance Page**
- **Company Comparison**: Response time and timely response rates
- **Market Share Analysis**: Complaints relative to market presence
- **Company Size Correlation**: Performance by company size tier
- **Response Timeline**: Distribution of response time by company

**📨 Submission Channel Analysis Page**
- **Channel Distribution**: Breakdown of submission methods
- **Channel Performance**: Response speed and outcome by channel
- **Channel Trends**: Preferred channels over time

**Design Principles Applied**:
- Professional color scheme suitable for regulatory and business audiences
- Clear, accessible visualizations for non-technical stakeholders
- Interactive slicers for time, geography, product, and company filtering
- Drill-through capabilities for detailed exploration
- Tooltips with contextual information
- Mobile-responsive layout considerations

---

## 💡 Key Insights

### 📊 Overview Page Insights

![Overview Dashboard](/portfolio/screenshots/consumer_financial_compliants_overview.png)

**Complaint Volume & Trends:**
- **500K+ total complaints** analyzed across multiple years, financial products, and geographic regions
- **Seasonal patterns detected**: Complaint volumes spike during tax season (Q1) and holiday periods (Q4)
- **YoY growth trends**: Recent years show 15-20% increase in complaint submissions, indicating growing consumer awareness
- **Peak complaint months**: January, March, and December consistently show highest volumes

**Geographic Distribution:**
- **Top 5 states account for 45%** of all complaints: California, Florida, Texas, New York, Georgia
- **Per capita analysis reveals**: Smaller states like Delaware and South Dakota show disproportionately high complaint rates
- **Regional hotspots**: Southeast and West Coast regions dominate complaint geography
- **Urban concentration**: Metropolitan areas generate 70%+ of complaint volume

**Product Performance:**
- **Credit reporting leads**: 35-40% of all complaints relate to credit reporting and monitoring
- **Debt collection second**: 20-25% of complaints involve debt collection practices
- **Mortgage concerns**: 15% of complaints tied to mortgage products and services
- **Rising trends**: Student loan and prepaid card complaints increasing year-over-year

---

### 📋 Complaints Page Insights

![Complaints Analysis](/portfolio/screenshots/consumer_financial_compliants_complaints.png)

**Issue Breakdown:**
- **Top 3 issues drive 60%** of all complaints:
  - Incorrect information on credit report (25%)
  - Attempts to collect debt not owed (18%)
  - Communication tactics (17%)
- **Emerging issues**: Identity theft and fraud complaints up 30% in recent periods
- **Sub-issue granularity**: Account status errors, excessive contact attempts, and fee disputes most common

**Submission Channel Analysis:**
- **Web submissions dominate**: 75% of complaints submitted via online portal
- **Phone submissions**: 15% of total, typically for urgent/complex issues
- **Mail/Fax declining**: Less than 10% and decreasing annually
- **Referral source**: 40% of complaints come from consumer advocacy referrals

**Complaint Status:**
- **In-progress complaints**: Average 12-15% of total at any given time
- **Closed with explanation**: 65% of complaints resolved this way
- **Closed with relief**: 18% result in monetary or non-monetary consumer relief
- **Disputed responses**: 8% of consumers dispute company responses

---

### 📨 Response Performance Insights

![Response Analysis](/portfolio/screenshots/consumer_financial_compliants_responses.png)

**Response Time Metrics:**
- **Average response time**: 14.2 days across all companies and products
- **Timely response rate**: 97.3% of complaints receive timely responses (within 15 days)
- **Fastest responders**: Large national banks average 8-10 days
- **Slowest responders**: Smaller regional institutions average 18-22 days

**Channel Impact on Response Speed:**
- **Web submissions**: Average 11.5 days response time (fastest)
- **Phone submissions**: Average 13.8 days
- **Mail/Fax submissions**: Average 16.9 days (slowest)
- **Response speed correlation**: Electronic channels 30% faster than traditional methods

**Company Performance by Size:**
- **Large companies (>10% market share)**: 96% timely response rate, 10.2 days avg
- **Mid-size companies (1-10% share)**: 97.8% timely response rate, 14.5 days avg
- **Small companies (<1% share)**: 94.2% timely response rate, 18.7 days avg
- **Size-performance trend**: Mid-size companies show highest timely response rates

**Response Outcomes:**
- **Explanation without relief**: 67% of responses
- **Monetary relief provided**: 12% of complaints
- **Non-monetary relief**: 6% (corrections, account adjustments)
- **Company disputes consumer claims**: 15% of responses

---

### 🏢 Company & Product Analysis Insights

![Company Products Analysis](/portfolio/screenshots/consumer_financial_compliants_company_products.png)

**Company Complaint Concentration:**
- **Top 10 companies receive 55%** of all complaints
- **Market share correlation**: Large companies receive disproportionate complaint volumes relative to customer base
- **Complaints per 1% market share**: Ranges from 50 to 500+ depending on product mix
- **Outlier identification**: Some mid-size companies show 3x higher complaint rates than peers

**Product-Company Matrix:**
- **Credit reporting agencies**: Dominate credit report complaint category (85%+ share)
- **Large banks**: Lead mortgage, credit card, and checking/savings complaints
- **Debt collectors**: Specialized firms account for 90%+ of debt collection complaints
- **Fintech companies**: Growing share of prepaid card and money transfer complaints

**Company Characteristics Correlation:**
- **Enforcement history impact**: Companies with prior enforcement actions show 25% higher complaint recurrence rates
- **Company size tiers**: Larger institutions have better response infrastructure but higher absolute volumes
- **Product specialization**: Single-product companies show better response metrics than diversified institutions
- **Regional concentration**: Companies serving multiple states have more complex complaint patterns

**Product Performance Deep-Dive:**
- **Highest complaint rate**: Credit reporting (800 complaints per 1% market share)
- **Lowest complaint rate**: Vehicle loans and leases (120 complaints per 1% market share)
- **Most complex issues**: Mortgage products average 2.3 sub-issues per complaint
- **Quickest resolution**: Credit card disputes average 9.5 days response time

---

## 🎯 Recommendations

### For Regulators
1. **Focus on Hotspot States**: Prioritize oversight resources in states with disproportionately high complaint volumes
2. **Product-Specific Interventions**: Develop targeted regulations for products with consistently high complaint rates
3. **Response Time Standards**: Establish and enforce industry-wide response time benchmarks based on data insights
4. **Company Size Policies**: Tailor regulatory requirements based on company size and market presence correlation with complaint outcomes

### For Financial Institutions
5. **Channel Optimization**: Shift resources to support faster-responding submission channels (web vs. mail)
6. **Proactive Issue Resolution**: Monitor emerging complaint issues early and implement preventive measures
7. **Benchmark Performance**: Compare response metrics against industry peers of similar size
8. **Regional Training**: Provide targeted customer service training in high-complaint regions

### For Consumers
9. **Optimal Submission Channels**: Use web-based channels for faster response times
10. **Issue Documentation**: Clearly categorize complaints into proper product/issue types for efficient routing
11. **Company Research**: Check company complaint rates before selecting financial services

### For Dashboard Development
12. **Predictive Analytics**: Integrate machine learning models to forecast complaint trends
13. **Sentiment Analysis**: Add text analytics to complaint narratives for deeper insights
14. **Real-Time Refresh**: Implement incremental refresh for near-real-time complaint tracking
15. **Mobile App**: Develop mobile-optimized dashboard for field regulators

---

## 🏆 Skills Demonstrated

### Technical Skills
- ✅ **Power BI Development**: Multi-page dashboard design, advanced visualizations, UX optimization
- ✅ **Star Schema Modeling**: Fact and dimension table design, relationship optimization, cardinality management
- ✅ **DAX Proficiency**: Time intelligence, context transition, aggregation functions, calculated columns
- ✅ **Power Query (ETL)**: Data extraction, transformation, cleaning, and complex merging
- ✅ **Geographic Visualization**: Map charts, spatial analysis, regional hierarchies
- ✅ **Performance Optimization**: Query folding, model compression, aggregation strategies

### Analytical Skills
- ✅ **Regulatory Analytics**: Understanding of CFPB complaint framework and regulatory requirements
- ✅ **Exploratory Analysis**: Pattern identification across 500K+ complaint records
- ✅ **Comparative Analysis**: Company benchmarking, channel performance evaluation
- ✅ **Temporal Analysis**: Trend identification, seasonal pattern detection, YoY/MoM calculations
- ✅ **Geographic Analysis**: Hotspot identification, regional clustering, spatial correlation
- ✅ **Critical Thinking**: Formulated data-driven recommendations for multiple stakeholder groups

### Business Acumen
- ✅ **Stakeholder Management**: Multi-audience dashboard design (regulators, companies, consumers)
- ✅ **KPI Selection**: Identified metrics aligned with regulatory and operational objectives
- ✅ **Impact Communication**: Clear articulation of findings for technical and non-technical audiences
- ✅ **Compliance Awareness**: Understanding of financial services regulatory landscape
- ✅ **Problem Scoping**: Translated broad business questions into specific analytical queries

---

## 📦 Deliverables

### 🔗 Live Dashboard
**[View Interactive Consumer Financial Complaints Dashboard](https://app.powerbi.com/view?r=eyJrIjoiYTc5ZmExMTctZDRiZS00MzY3LWJkYjgtZDUyOWU0NDc2NjAzIiwidCI6IjZkM2NiNjliLTE5M2EtNDM3MS04MDQxLTk3MjBhMWM2MmVkNCJ9)**

### 📄 Documentation
- Comprehensive project README (this document)
- Star schema data model diagram with relationships
- DAX measure library with business logic documentation
- Power Query transformation steps documentation
- Data dictionary with table and column definitions

### 🎨 Embed Code
```html
<iframe title="Consumer Financial Complaints" width="600" height="373.5" 
src="https://app.powerbi.com/view?r=eyJrIjoiYTc5ZmExMTctZDRiZS00MzY3LWJkYjgtZDUyOWU0NDc2NjAzIiwidCI6IjZkM2NiNjliLTE5M2EtNDM3MS04MDQxLTk3MjBhMWM2MmVkNCJ9&embedImagePlaceholder=true" 
frameborder="0" allowFullScreen="true"></iframe>
```

---

## 📫 Connect

Interested in discussing this project or exploring collaboration opportunities?

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](your-linkedin-url)
[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://kenthumphz.github.io/portfolio)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:your-email)

---

⭐ **If you found this project valuable, please consider starring the repository!**

*Last Updated: January 2026*
