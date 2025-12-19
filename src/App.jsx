import Navbar from './components/Navbar'

export default function App() {
  return ( 
    <div className='min-h-screen bg-slate-100'>
      <Navbar />
      <main className='max-w-7xl mx-auto p-4'>
        <h2 className='text-xl font-semibold'>
          Welcome to the Job Tracker App
        </h2>
        <p className='mt-2 text-gray-600'>
          Track your job applications efficiently.
        </p>
      </main> 
    </div>
  )
}