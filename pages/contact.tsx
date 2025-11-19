import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p className="text-slate-700 mb-4">Placeholder contact info. Replace with your contact form or email.</p>
        <a href="mailto:you@example.com" className="text-blue-600">you@example.com</a>
      </main>
      <Footer />
    </div>
  )
}
