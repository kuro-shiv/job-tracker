export default function Filter ({satatusFilter,setStatusFilter, search, setSearch}) {
    return(
        <div classname = "row mt-4 g-3">
            <div className = "col-md-4">
                <select 
                classname="from-select"
                value={satatusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                >
                    <option value = "All" > All Status</option>
                    <option value = "Applied">Applied</option>
                    <option value = "Interview">Interview</option>
                    <option value = "Offer">Offer</option>
                    <option value = "Rejected">Rejected</option>
                </select>
            </div>
            <div className= "col-md-8">
                <input
                type = "text"
                classname ="form-control"
                placehoder= "Searchby company name..."
                value= {search}
                onchange={(e) => setSearch(e.target.value)}
                />
            </div>
        </div>
    )
}