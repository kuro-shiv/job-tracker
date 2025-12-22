import { useEffect, useState } from "react"
import Navbar from './components/Navbar'
import JobForm from './components/JobForm'
import JobList from './components/JobList'


export default function App() {
  const [jobs, setjobs] = usestate(() =>{
    const saved = localStorage.getItem("jobs")
    return saved ? JSON.prase(saved) : []

  }) 

  function addJob(job) {
    setjobs([...jobs, jobs])
  }
  
  return ( 
    <div className='min-h-screen bg-slate-100'>
      <Navbar />
      <main className='max-w-6xl mx-auto px-4 py-6'>
        <h2 className='text-2xl font-semibold text-slate-800'>
          Welcome to the Job Tracker App
        </h2>
        <p class-name = "text -mute">
          Track and connect
        </p>
        <JobForm />
        <p className='text-slate-600 mt-2'>
          Track your job applications efficiently.
        </p>
      </main> 
    </div>
  )
}