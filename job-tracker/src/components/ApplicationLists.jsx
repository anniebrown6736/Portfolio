function ApplicationLists({ applications, editApplication, deleteApplication }) {

  return (
    <>
      <h2>My Applications ({applications.length})</h2>

      {applications.length === 0 ? (
        <p>You haven't added any applications yet.</p>
      ) : (
        <ul>
          {applications.map((application) => (
            <li key={application.id}>
              <strong>{application.jobTitle}</strong>
              {' at '}
              {application.company}

              {/* Displays application status as a colour-coded badge */}
              <span className={`status-badge ${application.status.toLowerCase()}`}>
                {application.status}
              </span>

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
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default ApplicationLists