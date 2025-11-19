import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">About</h1>
        <p className="text-lg text-slate-700">This is a placeholder bio. Replace with your real bio and assets.</p>
      </main>
      <Footer />
    </div>
  )
}
