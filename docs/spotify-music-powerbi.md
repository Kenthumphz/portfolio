# 🎵 Spotify Music Analytics Dashboard

[![Power BI](https://img.shields.io/badge/Power%20BI-F2C811?style=for-the-badge&logo=powerbi&logoColor=black)](https://app.powerbi.com/view?r=eyJrIjoiZWE3ODc2NTMtMDc5YS00NjY2LWFjMjktMzQwN2ExZGRlNGFhIiwidCI6IjZkM2NiNjliLTE5M2EtNDM3MS04MDQxLTk3MjBhMWM2MmVkNCJ9)
[![DAX](https://img.shields.io/badge/DAX-0078D4?style=for-the-badge&logo=microsoft&logoColor=white)]()
[![Status](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)]()

---

## 📋 Business Problem

Music enthusiasts and casual listeners lack comprehensive insights into their personal Spotify consumption patterns. While Spotify provides basic "Wrapped" annual summaries, users need ongoing, detailed analytics to understand their listening evolution, discover patterns in their music preferences, and make informed decisions about playlist curation and music discovery.

**Current Gaps:**
- No real-time visibility into personal listening metrics beyond basic Spotify features
- Inability to track temporal trends (monthly/yearly listening patterns)
- Limited artist-level analytics (total songs, chart positions, popularity trends)
- No comprehensive view of album vs. single preferences or explicit content ratios

---

## 🎯 Objective

Develop an interactive Power BI dashboard that transforms raw Spotify listening history into actionable insights, enabling users to:

1. **Track Listening Evolution**: Monitor how music taste changes over time across different months and years
2. **Artist Performance Analysis**: Identify top artists, their song counts, and chart-topping hits in personal library
3. **Content Distribution**: Understand the balance between albums vs. singles and explicit vs. clean content
4. **Popularity Metrics**: Analyze whether listening preferences lean toward mainstream trends or niche artists
5. **Duration Patterns**: Discover preferred song lengths and average track durations
6. **Temporal Insights**: Identify peak listening periods and seasonal trends

---

## 📊 Dataset

**Source**: Personal Spotify listening history exported from Spotify account data

**Primary Table**: `Top-50-World`

**Data Characteristics**:
- **789** distinct songs
- **342** unique artists  
- **Time Period**: November 2023 - January 2024 (3-month span)
- **Records**: Detailed streaming history with 50+ top tracks globally

**Data Model Structure**:

### Main Table: Top-50-World
| Column | Data Type | Description |
|--------|-----------|-------------|
| date | Date | Date of streaming activity |
| position | Integer | Chart position ranking |
| song | Text | Track title |
| artist | Text | Performing artist(s) |
| popularity | Integer | Popularity score (0-100) |
| duration_ms | Integer | Track duration in milliseconds |
| album_type | Text | "single" or "album" |
| total_tracks | Integer | Number of tracks in release |
| release_date | Date | Original release date |
| is_explicit | Boolean | Explicit content flag (True/False) |
| album_cover_url | Text | Album artwork URL |
| Day | Text | Day of week |
| Month | Text | Month name |
| Year | Integer | Year |
| Quarter | Text | Fiscal quarter (Q1-Q4) |
| MonthIndex | Integer | Month number (1-12) |

### Measures Table
**30+ DAX Measures** including:
- Album Type Count, Albums Count
- Avg Duration Minutes, Avg Duration per Year
- Avg Popularity, Avg Popularity Explicit/NonExplicit
- Avg Popularity per Artist, Avg Position
- Avg Tracks per Album
- Distinct Artists, Distinct Songs, Distinct Songs per Artist
- Explicit Songs, Non-Explicit Songs
- Max/Min Duration Minutes, Max/Min Popularity
- Position 1 Artists, Position 1 Songs, Position1 Hits per Artist
- Pct Explicit per Year, Pct Explicit Songs
- Singles Count
- Songs per Artist, Songs per Year
- Total Songs

### Time Slicer Dimensions
- **Year**: Annual filtering (2023, 2024)
- **Month**: Monthly breakdown (Nov, Dec, Jan)
- **Quarter**: Quarterly analysis (Q4 2023, Q1 2024)

**Data Quality**:
- ✅ No missing values in critical fields (song, artist, date)
- ✅ Standardized date formats across all temporal columns
- ✅ Consistent duration measurements (converted from ms to minutes)
- ✅ Validated popularity scores (0-100 range)
- ✅ Boolean flags for explicit content properly formatted

**Sample Records**:
- Tyler by Tyla: 95 popularity, 200235ms duration, single, Nov 2023
- Water by Tyla: 95 popularity, 200235ms duration, single, Nov-Dec 2023  
- Multiple entries show daily chart position tracking for top songs

---

## 🛠️ Tools Used

| Tool | Purpose |
|------|---------|
| **Power BI Desktop** | Dashboard development and data visualization |
| **DAX (Data Analysis Expressions)** | Custom metrics, KPIs, and calculated columns |
| **Power Query (M Language)** | ETL processes, data cleaning, and transformation |
| **Spotify Data Export** | Raw data extraction from personal account |

---

## 🔍 Analysis Approach

### 1️⃣ Data Preparation

**Data Extraction**:
- Retrieved personal Spotify streaming history via Spotify account export
- Collected metadata for songs, artists, albums, and release information
- Exported top 50 global chart data for comparative analysis

**Data Cleaning in Power Query**:
- Removed duplicate song entries based on date and song combination
- Handled null/missing values in popularity and duration fields
- Standardized artist names (resolved featuring artist variations)
- Converted date fields to proper datetime format
- Filtered out podcast episodes and non-music content
- Created clean column names and data types
- Converted duration from milliseconds to minutes for readability

**Data Transformation**:
- Split combined artist fields into primary and featured artists
- Extracted year, month, quarter, and day from release dates for temporal analysis
- Categorized songs into "Album" and "Single" types
- Created binary flag for explicit content (True/False)
- Calculated song duration in minutes: `Duration Minutes = duration_ms / 60000`
- Generated time intelligence columns (Day, Month, Year, Quarter, MonthIndex)

**Data Modeling**:
- Created relationships between main table and measures table
- Established time slicer dimension table with Year, Month, Quarter
- Set up one-to-many relationships for filtering
- Optimized cardinality for performance

### 2️⃣ Exploratory & Diagnostic Analysis

**Initial Data Exploration**:
- Analyzed distribution of songs across artists (identified top contributors)
- Examined temporal patterns in song releases (Nov 2023 - Jan 2024 focus)
- Investigated album vs. single consumption ratio
- Explored explicit content prevalence in listening habits
- Assessed popularity score distribution across library

**Diagnostic Questions**:
- Which artists dominate the listening library?
- Are newer songs (2024) more popular than older ones (2023)?
- What's the typical song duration in the library?
- Is there a preference for albums over singles?
- Do explicit songs have higher popularity scores?
- Are there seasonal trends in music discovery between Q4 2023 and Q1 2024?
- How does chart position correlate with popularity?
- What percentage of library consists of #1 chart hits?

**Key Findings from EDA**:
- Taylor Swift emerged as top artist with 85 songs (10.8%)
- Albums dominate at 66.9% vs singles at 32.02%
- Average song duration: 3.28 minutes
- High mainstream preference (90.4 avg popularity)
- November 2024 showed peak discovery (220 songs)

### 3️⃣ Metrics and Calculations

**DAX Measures Developed**:
- **30+ custom measures** created for comprehensive analysis
- Metrics include aggregations (count, sum, average), time intelligence calculations, and percentage distributions
- Calculated columns for derived attributes (duration in minutes, temporal breakdowns)
- Measures support all visualizations across Overview, Artists, and Song pages

### 4️⃣ Visualization and Storytelling

**Dashboard Architecture** (3-Page Design):

**📊 Overview Page** - Executive Summary
- **KPI Cards**: 4 summary metrics (789 songs, 342 artists, 3.28 avg duration, 10.16 avg tracks)
- **Album Distribution**: Donut chart (66.9% albums vs 32.02% singles)
- **Explicit Content**: Donut chart (59.81% non-explicit vs 40.19% explicit)
- **Top Artists**: Horizontal bar chart (top 10 by song count)
- **Trending Songs**: Horizontal bar chart (top 10 by popularity)
- **Popularity Trend**: Line chart showing monthly average popularity
- **Song Discovery**: Line chart showing distinct songs added per month

**🎤 Artists Page** - Deep-Dive Analysis
- **Songs by Artist**: Horizontal bar chart (all 342 artists, filterable)
- **Popularity by Artist**: Bar chart showing total popularity scores
- **Position 1 Hits**: Bar chart displaying chart-topping songs per artist
- **Artist Details Table**: Comprehensive grid with album type, release date, duration, position, popularity metrics
- **Interactive Filters**: Artist search and selection for drill-down

**🎵 Song Page** - Track-Level Insights
- **Song Catalog Table**: Detailed list with all attributes (date, position, song, artist, popularity, duration, album type, etc.)
- **Release Timeline**: Scatter plot of songs by release date
- **Duration Analysis**: Histogram of song lengths
- **Popularity Distribution**: Box plot showing popularity ranges
- **Album vs Single Performance**: Comparative bar chart

**Design Principles Applied**:
- Spotify brand colors (green #1DB954, black #191414, white)
- Minimalist layout for quick insight extraction
- Interactive slicers for dynamic filtering (Year, Month, Quarter)
- Tooltip enhancements for additional context
- Mobile-responsive layout considerations

---

## 💡 Key Insights

### � Overview Page Insights

![Overview Dashboard](/portfolio/screenshots/spotify-overview.png)

**Library Composition:**
- **789 distinct songs** across **342 unique artists** analyzed
- **66.9% albums** vs **32.02% singles** - strong preference for full-length projects
- **59.81% non-explicit** content shows balanced listening across demographics
- Average **3.28 minutes** song duration aligns with industry standard

**Top Performance:**
- **Taylor Swift dominates** with 85 songs (10.8% of library)
- **Average popularity score: 90.4** indicates mainstream listening behavior
- **November 2024 spike:** 220 songs added during peak discovery period

---

### 🎤 Artists Page Insights

![Artists Analysis](/portfolio/screenshots/spotify-artists-page.png)

**Artist Distribution:**
- **Top 5 artists account for 23.3%** of entire library (184 songs)
- **Taylor Swift leads** with 77 Position #1 chart hits
- Travis Scott follows with 30 songs in library
- Strong artist loyalty pattern with concentrated listening

**Performance Metrics:**
- High correlation between personal preference and mainstream chart success
- Most played artists consistently rank in top popularity tiers
- Limited diversity beyond top 10 artists suggests opportunity for discovery

---

### 🎵 Songs Page Insights

![Songs Details](/portfolio/screenshots/spotify-songs-page.png)

**Temporal Trends:**
- **2024 shows 452 songs** vs 423 in 2023 - growing library engagement
- Consistent monthly additions with Q4 2023 seasonal peaks
- Average **10.16 tracks per album** indicates complete album listening behavior

**Content Characteristics:**
- Explicit content represents 40.19% of library
- Song duration range shows no preference for extremely short or long tracks
- Release dates span multiple years with focus on recent releases (2023-2024)

---

## 🎯 Recommendations

### For Music Discovery
1. **Diversify Artist Portfolio**: Expand beyond top 5 artists (23.3%) to discover new talent and reduce listening concentration
2. **Explore Niche Genres**: Balance mainstream (90.4 avg popularity) with independent artists for broader musical perspective
3. **Single Sampling**: Increase single exploration (currently 32%) for efficient discovery before committing to full albums
4. **Decade Deep-Dive**: Analyze pre-2023 content gaps for throwback additions and nostalgic playlists

### For Dashboard Users
5. **Set Discovery Goals**: Aim for 10 new artists per month based on current growth rate
6. **Create Balanced Playlists**: Use 60/40 album/single ratio for optimal variety
7. **Track Mood Patterns**: Correlate popularity trends with listening timestamps
8. **Seasonal Planning**: Leverage November spike insight for year-end reflection and discovery planning

### For Dashboard Development
9. **Add Audio Features**: Integrate valence, energy, danceability metrics from Spotify API for mood analysis
10. **Real-Time Updates**: Implement incremental refresh for daily data syncing
11. **Comparative Analysis**: Benchmark against average Spotify user demographics
12. **Predictive Modeling**: Build recommendation engine based on historical patterns and listening habits

---

## 🏆 Skills Demonstrated

### Technical Skills
- ✅ **Power BI Development**: Multi-page dashboard design, interactive visuals, UX optimization
- ✅ **DAX Proficiency**: 30+ custom measures, time intelligence, context transition, aggregation functions
- ✅ **Power Query (ETL)**: Data extraction, transformation, cleaning, and modeling with M language
- ✅ **Data Modeling**: Star schema design, relationship management, cardinality optimization
- ✅ **Statistical Analysis**: Distribution analysis, trend identification, correlation assessment

### Analytical Skills
- ✅ **Problem Scoping**: Defined clear business problem and objectives
- ✅ **Exploratory Analysis**: Uncovered patterns in 789 songs across 342 artists
- ✅ **Insight Generation**: Translated data into 8 actionable insights
- ✅ **Storytelling**: Structured findings into cohesive narrative with visualizations
- ✅ **Critical Thinking**: Formulated data-driven recommendations

### Business Acumen
- ✅ **Stakeholder Focus**: User-centric dashboard design
- ✅ **KPI Selection**: Identified metrics aligned with objectives (popularity, diversity, engagement)
- ✅ **Impact Communication**: Clear articulation of findings and recommendations
- ✅ **Self-Initiative**: Independently scoped, executed, and delivered complete project

---

## 📦 Deliverables

### 🔗 Live Dashboard
**[View Interactive Spotify Analytics Dashboard](https://app.powerbi.com/view?r=eyJrIjoiZWE3ODc2NTMtMDc5YS00NjY2LWFjMjktMzQwN2ExZGRlNGFhIiwidCI6IjZkM2NiNjliLTE5M2EtNDM3MS04MDQxLTk3MjBhMWM2MmVkNCJ9)**

### 📄 Documentation
- Comprehensive project README (this document)
- DAX measure library with 30+ calculations
- Data model diagram showing table relationships
- Power Query transformation steps documentation

### 🎨 Embed Code
```html
<iframe title="Spotify" width="600" height="373.5" 
src="https://app.powerbi.com/view?r=eyJrIjoiZWE3ODc2NTMtMDc5YS00NjY2LWFjMjktMzQwN2ExZGRlNGFhIiwidCI6IjZkM2NiNjliLTE5M2EtNDM3MS04MDQxLTk3MjBhMWM2MmVkNCJ9&embedImagePlaceholder=true" 
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
