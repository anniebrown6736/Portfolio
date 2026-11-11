function ApplicationForm({ 
company,
setCompany,
jobTitle,
setJobTitle,
status,
setStatus,
editingId,
handleSubmit,
resetForm    
}) {

        return (
<>
            {/*Heading changes depending on whether an application is being edited */}
      <h2>{editingId !== null ? 'Edit Application' : 'Add an Application'}</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="company">Company Name</label>
          <input
            id="company"
            type="text"
            value={company}
            onChange={(event) => setCompany(event.target.value)} //RUNS WHENEVER THE INPUT VALUE CHANGES AND UPDATES THE STATE VARIABLE
            placeholder="e.g. Microsoft"
            required //MAKES THE INPUT FIELD REQUIRED, SO THE FORM CANNOT BE SUBMITTED IF IT IS EMPTY
          />
        </div>

        <div>
          <label htmlFor="jobTitle">Job Title</label>
          <input
            id="jobTitle"
            type="text"
            value={jobTitle}
            onChange={(event) => setJobTitle(event.target.value)}
            placeholder="e.g. Graduate Software Engineer"
            required
          />
        </div>

        <div>
          <label htmlFor="status">Application Status</label> {/* LABEL FOR THE STATUS SELECT INPUT */}
          <select
            id="status"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Rejected">Rejected</option>
            <option value="Offer">Offer</option>
          </select>
        </div>

        {/* Changes the button text depending on whether we're adding or editing */}
        <button type="submit">
          {editingId !== null ? 'Save Changes' : 'Add Application'}
        </button>

        {/* Displays a cancel button only when editing an application */}

        {editingId !== null && (
          <button type="button" onClick={resetForm}>
            Cancel Editing
          </button>
        )}

      </form>
      </>
        )
    }
    export default ApplicationForm