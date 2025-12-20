import { useState } from "react"

export default function JobForm({ onAddJob }) {
  const [company, setCompany] = useState("")
  const [role, setRole] = useState("")
  const [status, setStatus] = useState("Applied")

  function handleSubmit(e) {
    e.preventDefault()

    const job = {
      id: Date.now(),
      company,
      role,
      status,
    }

    onAddJob(job)

    setCompany("")
    setRole("")
    setStatus("Applied")
  }

  return (
    <div className="card mt-4">
      <div className="card-body">
        <h5 className="card-title mb-3">Add Job</h5>

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
              />
            </div>

            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              />
            </div>

            <div className="col-md-4">
              <select
                className="form-select"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option>Applied</option>
                <option>Interviewing</option>
                <option>Offered</option>
                <option>Rejected</option>
              </select>
            </div>
          </div>

          <button type="submit" className="btn btn-primary mt-3">
            Add Job
          </button>
        </form>
      </div>
    </div>
  )
}
