import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'

export default function SpotifyMusic() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-16 max-w-5xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">🎵 Spotify Music Analytics Dashboard</h1>
          <div className="flex gap-3 mb-6">
            <a href="https://app.powerbi.com/view?r=eyJrIjoiZWE3ODc2NTMtMDc5YS00NjY2LWFjMjktMzQwN2ExZGRlNGFhIiwidCI6IjZkM2NiNjliLTE5M2EtNDM3MS04MDQxLTk3MjBhMWM2MmVkNCJ9" target="_blank" rel="noopener noreferrer" className="inline-block">
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
            Music enthusiasts and casual listeners lack comprehensive insights into their personal Spotify consumption patterns. 
            While Spotify provides basic "Wrapped" annual summaries, users need ongoing, detailed analytics to understand their 
            listening evolution, discover patterns in their music preferences, and make informed decisions about playlist curation 
            and music discovery.
          </p>
          <div className="bg-muted/50 p-6 rounded-lg">
            <p className="font-semibold mb-2">Current Gaps:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>No real-time visibility into personal listening metrics beyond basic Spotify features</li>
              <li>Inability to track temporal trends (monthly/yearly listening patterns)</li>
              <li>Limited artist-level analytics (total songs, chart positions, popularity trends)</li>
              <li>No comprehensive view of album vs. single preferences or explicit content ratios</li>
            </ul>
          </div>
        </section>

        {/* Objective */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">🎯 Objective</h2>
          <p className="text-muted-foreground text-lg mb-4">
            Develop an interactive Power BI dashboard that transforms raw Spotify listening history into actionable insights, enabling users to:
          </p>
          <ul className="list-decimal list-inside space-y-2 text-muted-foreground ml-4">
            <li><strong>Track Listening Evolution:</strong> Monitor how music taste changes over time across different months and years</li>
            <li><strong>Artist Performance Analysis:</strong> Identify top artists, their song counts, and chart-topping hits in personal library</li>
            <li><strong>Content Distribution:</strong> Understand the balance between albums vs. singles and explicit vs. clean content</li>
            <li><strong>Popularity Metrics:</strong> Analyze whether listening preferences lean toward mainstream trends or niche artists</li>
            <li><strong>Duration Patterns:</strong> Discover preferred song lengths and average track durations</li>
            <li><strong>Temporal Insights:</strong> Identify peak listening periods and seasonal trends</li>
          </ul>
        </section>

        {/* Dataset */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">📊 Dataset</h2>
          <div className="bg-muted/50 p-6 rounded-lg mb-6">
            <p className="font-semibold mb-2">Source: Personal Spotify listening history exported from Spotify account data</p>
            <p className="font-semibold mb-4">Primary Table: Top-50-World</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="bg-background p-4 rounded-lg border border-border">
                <p className="text-3xl font-bold text-primary">789</p>
                <p className="text-sm text-muted-foreground">Distinct Songs</p>
              </div>
              <div className="bg-background p-4 rounded-lg border border-border">
                <p className="text-3xl font-bold text-primary">342</p>
                <p className="text-sm text-muted-foreground">Unique Artists</p>
              </div>
              <div className="bg-background p-4 rounded-lg border border-border">
                <p className="text-3xl font-bold text-primary">3</p>
                <p className="text-sm text-muted-foreground">Months</p>
              </div>
              <div className="bg-background p-4 rounded-lg border border-border">
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Top Tracks</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Time Period: November 2023 - January 2024</p>
          </div>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-border rounded-lg">
              <thead className="bg-muted">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Column</th>
                  <th className="px-4 py-3 text-left font-semibold">Data Type</th>
                  <th className="px-4 py-3 text-left font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="px-4 py-2">date</td><td className="px-4 py-2">Date</td><td className="px-4 py-2">Date of streaming activity</td></tr>
                <tr><td className="px-4 py-2">position</td><td className="px-4 py-2">Integer</td><td className="px-4 py-2">Chart position ranking</td></tr>
                <tr><td className="px-4 py-2">song</td><td className="px-4 py-2">Text</td><td className="px-4 py-2">Track title</td></tr>
                <tr><td className="px-4 py-2">artist</td><td className="px-4 py-2">Text</td><td className="px-4 py-2">Performing artist(s)</td></tr>
                <tr><td className="px-4 py-2">popularity</td><td className="px-4 py-2">Integer</td><td className="px-4 py-2">Popularity score (0-100)</td></tr>
                <tr><td className="px-4 py-2">duration_ms</td><td className="px-4 py-2">Integer</td><td className="px-4 py-2">Track duration in milliseconds</td></tr>
                <tr><td className="px-4 py-2">album_type</td><td className="px-4 py-2">Text</td><td className="px-4 py-2">"single" or "album"</td></tr>
                <tr><td className="px-4 py-2">is_explicit</td><td className="px-4 py-2">Boolean</td><td className="px-4 py-2">Explicit content flag</td></tr>
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
              <p className="text-muted-foreground">Custom metrics, KPIs, and calculated columns</p>
            </div>
            <div className="bg-muted/50 p-6 rounded-lg border border-border">
              <h3 className="font-bold text-xl mb-2">Power Query (M)</h3>
              <p className="text-muted-foreground">ETL processes, data cleaning, and transformation</p>
            </div>
            <div className="bg-muted/50 p-6 rounded-lg border border-border">
              <h3 className="font-bold text-xl mb-2">Spotify Data Export</h3>
              <p className="text-muted-foreground">Raw data extraction from personal account</p>
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
                <li>Retrieved personal Spotify streaming history via Spotify account export</li>
                <li>Removed duplicate song entries and handled missing values</li>
                <li>Standardized artist names and date formats</li>
                <li>Converted duration from milliseconds to minutes</li>
                <li>Created time intelligence columns (Day, Month, Year, Quarter)</li>
              </ul>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">2️⃣ Exploratory Analysis</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Analyzed distribution of songs across 342 artists</li>
                <li>Examined temporal patterns in Nov 2023 - Jan 2024</li>
                <li>Investigated 66.9% album vs 32.02% single ratio</li>
                <li>Explored explicit content prevalence (40.19%)</li>
                <li>Identified Taylor Swift as top artist with 85 songs</li>
              </ul>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">3️⃣ Metrics and Calculations</h3>
              <p className="text-muted-foreground mb-2"><strong>30+ DAX Measures</strong> including:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                <li>Distinct Artists, Songs, Songs per Artist</li>
                <li>Avg Popularity, Duration, Tracks per Album</li>
                <li>Position 1 Songs, Explicit/Non-Explicit counts</li>
                <li>Time intelligence calculations for trending</li>
              </ul>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">4️⃣ Visualization Design</h3>
              <p className="text-muted-foreground mb-2"><strong>3-Page Dashboard Architecture:</strong></p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>📊 Overview: Executive summary with KPIs and trends</li>
                <li>🎤 Artists: Deep-dive artist performance analysis</li>
                <li>🎵 Songs: Track-level insights and distributions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Dashboard */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">📱 Interactive Dashboard</h2>
          <div className="rounded-lg overflow-hidden border-2 border-border shadow-2xl">
            <iframe 
              title="Spotify Music Analytics" 
              width="100%" 
              height="541.25" 
              src="https://app.powerbi.com/view?r=eyJrIjoiZWE3ODc2NTMtMDc5YS00NjY2LWFjMjktMzQwN2ExZGRlNGFhIiwidCI6IjZkM2NiNjliLTE5M2EtNDM3MS04MDQxLTk3MjBhMWM2MmVkNCJ9" 
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
              <img src="/portfolio/screenshots/spotify-overview.png" alt="Overview Dashboard" className="w-full" />
            </div>
            <div className="bg-muted/50 p-6 rounded-lg space-y-4">
              <div>
                <h4 className="font-bold text-lg mb-2">Library Composition:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li><strong>789 distinct songs</strong> across <strong>342 unique artists</strong> analyzed</li>
                  <li><strong>66.9% albums</strong> vs <strong>32.02% singles</strong> - strong preference for full-length projects</li>
                  <li><strong>59.81% non-explicit</strong> content shows balanced listening across demographics</li>
                  <li>Average <strong>3.28 minutes</strong> song duration aligns with industry standard</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Top Performance:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li><strong>Taylor Swift dominates</strong> with 85 songs (10.8% of library)</li>
                  <li><strong>Average popularity score: 90.4</strong> indicates mainstream listening behavior</li>
                  <li><strong>November 2024 spike:</strong> 220 songs added during peak discovery period</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Artists Insights */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">🎤 Artists Page Insights</h3>
            <div className="mb-6 rounded-lg overflow-hidden border border-border">
              <img src="/portfolio/screenshots/spotify_artists.png" alt="Artists Analysis" className="w-full" />
            </div>
            <div className="bg-muted/50 p-6 rounded-lg space-y-4">
              <div>
                <h4 className="font-bold text-lg mb-2">Artist Distribution:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li><strong>Top 5 artists account for 23.3%</strong> of entire library (184 songs)</li>
                  <li><strong>Taylor Swift leads</strong> with 77 Position #1 chart hits</li>
                  <li>Travis Scott follows with 30 songs in library</li>
                  <li>Strong artist loyalty pattern with concentrated listening</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Performance Metrics:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>High correlation between personal preference and mainstream chart success</li>
                  <li>Most played artists consistently rank in top popularity tiers</li>
                  <li>Limited diversity beyond top 10 artists suggests opportunity for discovery</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Songs Insights */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">🎵 Songs Page Insights</h3>
            <div className="mb-6 rounded-lg overflow-hidden border border-border">
              <img src="/portfolio/screenshots/spotify-songs-page.png" alt="Songs Details" className="w-full" />
            </div>
            <div className="bg-muted/50 p-6 rounded-lg space-y-4">
              <div>
                <h4 className="font-bold text-lg mb-2">Temporal Trends:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li><strong>2024 shows 452 songs</strong> vs 423 in 2023 - growing library engagement</li>
                  <li>Consistent monthly additions with Q4 2023 seasonal peaks</li>
                  <li>Average <strong>10.16 tracks per album</strong> indicates complete album listening behavior</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Content Characteristics:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Explicit content represents 40.19% of library</li>
                  <li>Song duration range shows no preference for extremely short or long tracks</li>
                  <li>Release dates span multiple years with focus on recent releases (2023-2024)</li>
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
              <h3 className="font-bold text-lg mb-3">For Music Discovery</h3>
              <ul className="list-decimal list-inside space-y-2 text-muted-foreground text-sm">
                <li>Diversify beyond top 5 artists (23.3%) to discover new talent</li>
                <li>Balance mainstream (90.4 avg popularity) with independent artists</li>
                <li>Increase single exploration (currently 32%) for efficient discovery</li>
                <li>Analyze pre-2023 content gaps for throwback additions</li>
              </ul>
            </div>
            <div className="bg-muted/50 p-6 rounded-lg border border-border">
              <h3 className="font-bold text-lg mb-3">For Dashboard Users</h3>
              <ul className="list-decimal list-inside space-y-2 text-muted-foreground text-sm">
                <li>Set goal of 10 new artists per month</li>
                <li>Create balanced playlists using 60/40 album/single ratio</li>
                <li>Track mood patterns by correlating popularity trends</li>
                <li>Leverage November spike insight for year-end planning</li>
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
                <li>✅ DAX Proficiency (30+ measures)</li>
                <li>✅ Power Query ETL</li>
                <li>✅ Data Modeling</li>
                <li>✅ Statistical Analysis</li>
              </ul>
            </div>
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Analytical Skills</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>✅ Problem Scoping</li>
                <li>✅ Exploratory Analysis</li>
                <li>✅ Insight Generation</li>
                <li>✅ Data Storytelling</li>
                <li>✅ Critical Thinking</li>
              </ul>
            </div>
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Business Acumen</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>✅ Stakeholder Focus</li>
                <li>✅ KPI Selection</li>
                <li>✅ Impact Communication</li>
                <li>✅ Self-Initiative</li>
              </ul>
            </div>
          </div>
        </section>

        {/* View Live Dashboard CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-primary/20 to-primary/10 p-8 rounded-lg border-2 border-primary/50 text-center">
            <h2 className="text-2xl font-bold mb-4">🔗 Explore the Interactive Dashboard</h2>
            <a 
              href="https://app.powerbi.com/view?r=eyJrIjoiZWE3ODc2NTMtMDc5YS00NjY2LWFjMjktMzQwN2ExZGRlNGFhIiwidCI6IjZkM2NiNjliLTE5M2EtNDM3MS04MDQxLTk3MjBhMWM2MmVkNCJ9"
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
