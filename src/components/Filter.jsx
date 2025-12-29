export default function Filter({ statusFilter, setStatusFilter, search, setSearch }) {
  return (
    <div className="row mt-4 g-3">
      <div className="col-md-4">
        <select
          className="form-select"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      <div className="col-md-8">
        <input
          type="text"
          className="form-control"
          placeholder="Search by company name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  )
}
