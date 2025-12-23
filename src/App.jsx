import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import JobForm from "./components/JobForm"
import JobList from "./components/JobList"

export default function App() {
  const [jobs, setJobs] = useState(() => {
    const saved = localStorage.getItem("jobs")
    return saved ? JSON.parse(saved) : []
  })

  function addJob(job) {
    setJobs([...jobs, job])
  }

  function deleteJob(id) {
    setJobs(jobs.filter((job) => job.id !== id))
  }

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs))
  }, [jobs])

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h2 className="fw-bold">Welcome to the Job Tracker App</h2>
        <p className="text-muted">
          Track your job applications efficiently.
        </p>

        <JobForm onAddJob={addJob} />
        <JobList jobs={jobs} onDelete={deleteJob} />
      </div>
    </>
  )
}
