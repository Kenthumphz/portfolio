import Header from '../components/Header'
import Footer from '../components/Footer'

export default function SpotifyMusic() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Spotify Music - Power BI Dashboard</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-muted-foreground text-lg">
            An interactive Power BI dashboard analyzing Spotify music streaming data, providing insights into listening patterns, 
            artist popularity, genre trends, and user engagement metrics.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
          <div className="rounded-lg overflow-hidden border border-border shadow-lg">
            <iframe 
              title="Spotify" 
              width="100%" 
              height="541.25" 
              src="https://app.powerbi.com/view?r=eyJrIjoiZWE3ODc2NTMtMDc5YS00NjY2LWFjMjktMzQwN2ExZGRlNGFhIiwidCI6IjZkM2NiNjliLTE5M2EtNDM3MS04MDQxLTk3MjBhMWM2MmVkNCJ9" 
              frameBorder="0" 
              allowFullScreen={true}
            ></iframe>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Streaming Analytics: Track listening trends and patterns over time</li>
            <li>Artist Performance: Analyze top artists and their popularity metrics</li>
            <li>Genre Distribution: Visualize music preferences by genre</li>
            <li>Track Metrics: Monitor most played songs and engagement rates</li>
            <li>Temporal Analysis: Understand listening behavior by time of day, day of week</li>
            <li>Interactive Filters: Dynamic filtering by artist, genre, time period, and more</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Power BI: Data visualization and dashboard development</li>
            <li>DAX: Custom measures and calculations</li>
            <li>Power Query: Data transformation and cleaning</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Dashboard Insights</h2>
          <p className="text-muted-foreground mb-4">The dashboard enables users to:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Discover personal listening patterns and preferences</li>
            <li>Identify trending artists and tracks</li>
            <li>Analyze music consumption over time</li>
            <li>Explore genre diversity in listening habits</li>
            <li>Support data-driven music discovery</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Use Cases</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Personal Analytics: Understand individual music preferences</li>
            <li>Trend Analysis: Identify popular artists and genres</li>
            <li>Music Discovery: Find new music based on listening patterns</li>
            <li>Engagement Tracking: Monitor listening activity over time</li>
            <li>Data Visualization: Present music data in an engaging format</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  )
}
