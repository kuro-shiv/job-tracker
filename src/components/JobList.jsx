export default function JobList({ jobs = [], onDelete, onEdit }) {
  if (jobs.length === 0) {
    return (
      <p className="text-center mt-4 text-muted">
        No job applications added yet.
      </p>
    )
  }

  return (
    <div className="mt-4">
      {jobs.map((job) => (
        <div key={job.id} className="card mb-3">
          <div className="card-body d-flex justify-content-between align-items-center">
            <div>
              <h5 className="mb-1">{job.company}</h5>
              <p className="mb-1 text-muted">{job.role}</p>

              <span
                className={`badge ${
                  job.status === "Applied"
                    ? "bg-secondary"
                    : job.status === "Interview"
                    ? "bg-warning text-dark"
                    : job.status === "Offer"
                    ? "bg-success"
                    : "bg-danger"
                }`}
              >
                {job.status}
              </span>
            </div>

            <div className="d-flex gap-2">
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={() => onEdit(job)}
              >
                Edit
              </button>

              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => onDelete(job.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
