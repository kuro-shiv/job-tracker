export default function jobList({Jobs = [], onDelete, onEdit}) {
    if (Jobs.length === 0) {
        return (
            <p className = "text-center mt-4">
             No Jobs application added yet.
            </p>
            )
    }
    return (
        <div className="mt-4">
            {Jobs.map((job) => (
                <div key = {job.id} className = "card mb-3">
                    <div className = "card-body d-flex justify-content-between align-item-center">
                        <div>
                            <h5 calssName="mb-1"> {job.company}</h5>
                            <p className="mb-1"> {job.role} </p>
                            <sapn 
                            className ={`badge ${
                                job.status === "Select status"
                                ? "bg-primary"
                                : job.status === "Applied"
                                ? "bg-secondary" 
                                : job.status === "Interview"
                                ? "bg-warning text-dark"
                                : job.status === "Offer"
                                ? "bg-success"
                                : "bg-danger"
                            }`}
                            >
                                {job.status}
                            </sapn>
                        </div>

                        <div className= "d-flex gap-3">
                            <button className="btn btn-outline-primary btn-sm"
                            onClick={() => onEdit(job)}
                            >
                                Edit
                            </button>
                            <button className="btn btn-outline-danger btn-sm"
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