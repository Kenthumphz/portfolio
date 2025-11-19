import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Work(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Work</h1>
        <p className="text-slate-700">Projects will appear here. Add case studies as individual pages in `pages/work/[slug].tsx`.</p>
      </main>
      <Footer />
    </div>
  )
}
