import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Chatbot from '../components/ChatBot/Chatbot'

// Simple layout for OpenLife pages
export default function BaseLayout({ title = 'OpenLife', subtitle = 'Daily Workflow & Time Management', children }) {
  return (
    <div className="min-h-screen text-slate-100">
      <Header />

      <main className="flex w-full flex-col gap-8 px-(--page-gutter) py-8">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">{title}</h1>
          <p className="text-sm text-slate-300">{subtitle}</p>
        </div>
        {children}
      </main>

      <Footer />
      <Chatbot />
    </div>
  )
}
