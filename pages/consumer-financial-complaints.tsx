import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ConsumerFinancialComplaints() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Consumer Financial Complaints - Power BI Dashboard</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-muted-foreground text-lg">
            An interactive Power BI dashboard analyzing consumer financial complaints data, providing insights into complaint trends, 
            patterns, and resolution metrics across financial institutions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
          <div className="rounded-lg overflow-hidden border border-border shadow-lg">
            <iframe 
              title="Consumer Financial Complaints" 
              width="100%" 
              height="541.25" 
              src="https://app.powerbi.com/view?r=eyJrIjoiYTc5ZmExMTctZDRiZS00MzY3LWJkYjgtZDUyOWU0NDc2NjAzIiwidCI6IjZkM2NiNjliLTE5M2EtNDM3MS04MDQxLTk3MjBhMWM2MmVkNCJ9&embedImagePlaceholder=true" 
              frameBorder="0" 
              allowFullScreen={true}
            ></iframe>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Complaint Trends Analysis: Track complaint volumes over time</li>
            <li>Product Category Breakdown: Visualize complaints by financial product type</li>
            <li>Geographic Distribution: Map complaints by state and region</li>
            <li>Company Performance: Compare financial institutions by complaint metrics</li>
            <li>Resolution Tracking: Monitor complaint resolution rates and timelines</li>
            <li>Interactive Filters: Dynamic filtering by date, product, company, and issue type</li>
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
          <p className="text-muted-foreground mb-4">The dashboard enables stakeholders to:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Identify trending complaint issues across financial products</li>
            <li>Monitor institutional performance in handling complaints</li>
            <li>Detect patterns in complaint resolution</li>
            <li>Support data-driven decision making for customer service improvements</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Use Cases</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Regulatory Compliance: Monitor complaint trends for compliance reporting</li>
            <li>Customer Service: Identify areas for service improvement</li>
            <li>Risk Management: Detect emerging issues early</li>
            <li>Executive Reporting: High-level overview of complaint metrics</li>
            <li>Operational Analysis: Deep dive into specific complaint categories</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  )
}
