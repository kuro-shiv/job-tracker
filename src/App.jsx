import Navbar from './components/Navbar'
import JobForm from './components/JobForm'

export default function App() {
  return ( 
    <div className='min-h-screen bg-slate-100'>
      <Navbar />
      <main className='max-w-6xl mx-auto px-4 py-6'>
        <h2 className='text-2xl font-semibold text-slate-800'>
          Welcome to the Job Tracker App
        </h2>
        <JobForm />
        <p className='text-slate-600 mt-2'>
          Track your job applications efficiently.
        </p>
      </main> 
    </div>
  )
}