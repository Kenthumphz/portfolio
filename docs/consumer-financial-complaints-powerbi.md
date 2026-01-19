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

![Overview Dashboard](/portfolio/screenshots/consumer_financial_complaints_overview.png)

**Complaint Volume & Trends:**
- **63K+ total complaints** analyzed across multiple years and financial products
- **Seasonal patterns detected**: Complaint volumes spike during summer and holiday periods (between Q2 and Q3)
- **Peak complaint months**: May, June, and July are consistently highest
- **Average Response**: Generally takes an average of two weeks (**15.09 days**) for a complaint to get a response

**Geographic Distribution:**
- **Top 4 states account for 46%** of all complaints: California, Florida, Texas, New York
- **Regional hotspots**: Southeast and West Coast regions dominate

**Product Performance:**
- **Checking or savings account leads (Product)**: 42.2% of all complaints
- **Credit card or prepaid card second (Product)**: 27.6% of complaints
- **Checking account leads (Sub-Product)**: 43.4% of all complaints
- **Credit card second (Sub-Product)**: 28.0% of complaints

---

### 📋 Complaints Page Insights

![Complaints Analysis](/portfolio/screenshots/consumer_financial_complaints_complaints.png)

**Issue Breakdown:**
- **Top 5 issues drive 47.9%** of all complaints: Managing an account (24.2%), Incorrect Information (7.9%), Purchase problem (7.1%), Closing account (4.7%), and Payment troubles (4.5%)
- **Sub-issue granularity**: Deposits and withdrawals, problems using debit cards, wrong information and identity most common

**Complaint Status:**
- **Timely response**: 93.7% of complaints were responded to on time with an average response of 15 days
- **Region**: 37.0% complaints (the most) over time come from the South
- **Disputed responses**: 8% of consumers dispute company responses

---

### 📨 Response Performance Insights

![Response Analysis](/portfolio/screenshots/consumer_financial_complaints_responses.png)

**Response Time Metrics:**
- **Average response time**: 15 days across all companies and products
- **Timely response rate**: 93.8% of complaints receive timely responses (within 15 days)
- **Fastest responders**: Large companies with an average of 15.06 days and South Dakota with 14.92 days
- **Slowest responders**: Medium regional institutions average 15.14 days and Kansas with 15.28 days

**Response Rate Metrics:**
- **Channel**: Email has 100% timely response rate, followed by Fax on 99.6%
- **Complaints status**: 1494 cases are still open, the rest are closed

---

### 🏢 Company & Product Analysis Insights

![Company Products Analysis](/portfolio/screenshots/consumer_financial_complaints_company_products.png)

**Company Complaint Concentration:**
- **Top company with most complaints**: COMP-0342 (83 complaints)
- **Market share correlation**: California has the most complaints with over 20% of complaints
- **Top Responsive Company**: COMP-0735 responds quickest with 18.37 days
- **Most used channel and product**: Most complaints are via web (72.7%) whilst the product with the most complaints is Checking and savings account (39.7%)
- **Complaints per 1% market share**: Ranges from 1500-1700+ depending on product mix and an average market share of 9.2%

---

## 🎯 Recommendations

### For Regulators
1. **Focus on Top 4 States**: Prioritize oversight in California, Florida, Texas, and New York (46% of all complaints) to maximize impact
2. **Address Seasonal Spikes**: Allocate additional resources during Q2-Q3 peak periods (May-July) when complaint volumes surge
3. **Target Account Management Issues**: Create specialized guidelines for "Managing an account" complaints (24.2% of all issues)
4. **Monitor South Region**: Increase oversight in the South (37% of complaints) with focused attention on regional institutions

### For Financial Institutions
5. **Optimize Web Channel**: Invest in web infrastructure (72.7% of complaints) while maintaining email's 100% timely response rate
6. **Improve Checking/Savings Operations**: Focus on checking accounts (42.2% of complaints) with emphasis on deposits, withdrawals, and debit card issues
7. **Target 15-Day Benchmark**: Maintain or beat the 15-day average response time, especially medium institutions (15.14 days)
8. **Reduce Disputed Responses**: Address the 8% dispute rate through better initial resolution quality

### For Consumers
9. **Use Email for Fastest Response**: Email achieves 100% timely response rate, followed by Fax (99.6%)
10. **File During Off-Peak Months**: Avoid May-July if possible for potentially faster resolution times
11. **Research Company Performance**: Check if companies like COMP-0735 (18.37 day response) outperform average (15 days)
12. **Expect 15-Day Response**: 93.8% of complaints receive timely responses within 15 days industry-wide

### For Dashboard Development
13. **Seasonal Forecasting**: Build ML models to predict Q2-Q3 spikes and resource requirements
14. **State-Level Drill-Through**: Add interactive drill-through for top 4 states (CA, FL, TX, NY) to analyze root causes
15. **Open Case Alerts**: Implement real-time monitoring for the 1,494 still-open cases to prevent delays
16. **Company Benchmarking Tool**: Create comparative analysis showing companies against 15-day average and 93.8% timely rate

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
