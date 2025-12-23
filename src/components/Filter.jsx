export default function Filter ({satatusFilter,setStatusFilter, search, setSearch}) {
    return(
        <div classname = "row mt-4 g-3">
            <div className = "col-md-4">
                <select 
                classname="from-select"
                value={satatusFilter}
                onChange={(e) => setStatus(e.target.value)}
                
            </div>
        </div>
    )
}