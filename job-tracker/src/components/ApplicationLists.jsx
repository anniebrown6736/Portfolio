
function ApplicationLists({
  applications,
  editApplication,
  deleteApplication,
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter
}) {

  return (
    <>
      <h2>My Applications ({applications.length})</h2>


<div className="application-filters">

  {/* Search applications by company or job title */}
  <input
    type="text"
    placeholder="Search by company or job title..."
    value={searchTerm}
    onChange={(event) => setSearchTerm(event.target.value)}
  />

  {/* Filter applications by status */}
  <select
    value={statusFilter}
    onChange={(event) => setStatusFilter(event.target.value)}
  >
    <option value="All">All Applications</option>
    <option value="Applied">Applied</option>
    <option value="Interview">Interview</option>
    <option value="Offer">Offer</option>
    <option value="Rejected">Rejected</option>
  </select>

</div>






      {applications.length === 0 ? (
        <p>You haven't added any applications yet.</p>
      ) : (
        <ul>
          {applications.map((application) => (
            <li key={application.id} className="application-card">

              <div className="application-details">
                <strong>{application.jobTitle}</strong>
                <p className="application-company">{application.company}</p>

                {/* Displays application status as a colour-coded badge */}
                <span className={`status-badge ${application.status.toLowerCase()}`}>
                  {application.status}
                </span>
              </div>

              <div className="application-actions">
                {/* Button that loads the selected application into the form */}
                <button
                  type="button"
                  className="edit-button"
                  onClick={() => editApplication(application)}
                >
                  Edit
                </button>

                {/* Button that deletes the selected application */}
                <button
                  type="button"
                  className="delete-button"
                  onClick={() => deleteApplication(application.id)}
                >
                  Delete
                </button>
              </div>

            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default ApplicationLists
