import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import JobForm from "./components/JobForm"
import JobList from "./components/JobList"
import Filter from "./components/Filter"

export default function App() {
  const [jobs, setJobs] = useState(() => {
    const saved = localStorage.getItem("jobs")
    return saved ? JSON.parse(saved) : []
  })

  const [statusFilter, setStatusFilter] = useState("All")
  const [search, setSearch] = useState("")
  const [selectedJob, setSelectedJob] = useState(null)

  function addJob(job) {
    setJobs([...jobs, job])
    setSelectedJob(null)
  }

  function deleteJob(id) {
    setJobs(jobs.filter((job) => job.id !== id))
  }

  function startEdit(job) {
    setSelectedJob(job)
  }

  function updateJob(updatedJob) {
    setJobs(
      jobs.map((job) =>
        job.id === updatedJob.id ? updatedJob : job
      )
    )
    setSelectedJob(null)
  }

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs))
  }, [jobs])

  const filteredJobs = jobs.filter((job) => {
    const matchesStatus =
      statusFilter === "All" || job.status === statusFilter

    const matchesSearch =
      job.company.toLowerCase().includes(search.toLowerCase())

    return matchesStatus && matchesSearch
  })

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h2 className="fw-bold">Job Application Tracker</h2>
        <p className="text-muted">
          Track, filter, and manage your job applications.
        </p>

        <JobForm
          onAddJob={addJob}
          selectedJob={selectedJob}
          onUpdateJob={updateJob}
        />

        <div className="my-3"></div>

        <Filter
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          search={search}
          setSearch={setSearch}
        />

        <div className="my-3"></div>

        <JobList
          jobs={filteredJobs}
          onDelete={deleteJob}
          onEdit={startEdit}
        />
      </div>
    </>
  )
}
