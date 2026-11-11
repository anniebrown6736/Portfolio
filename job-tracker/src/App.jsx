import { useState } from 'react'
import './App.css'
import StatsCards from './components/StatsCards'
import ApplicationForm from './components/ApplicationForm'
import ApplicationList from './components/ApplicationLists'

function App() {
  const [applications, setApplications] = useState([]) //CREATES A STATE VARIABLE TO STORE APPLICATIONS

  const [company, setCompany] = useState('') //STATE VARIABLES
  const [jobTitle, setJobTitle] = useState('')
  const [status, setStatus] = useState('Applied')

  const [editingId, setEditingId] = useState(null) //STATE VARIABLE TO STORE THE ID OF THE APPLICATION BEING EDITED

  // NEW: Calculates dashboard statistics from the applications array
const totalApplications = applications.length

// NEW: Counts applications with Interview status
const totalInterviews = applications.filter(
  (application) => application.status === 'Interview'
).length

// NEW: Counts applications with Offer status
const totalOffers = applications.filter(
  (application) => application.status === 'Offer'
).length

  
function handleSubmit(event) {
  event.preventDefault()

  if (!company.trim() || !jobTitle.trim()) {
    return
  }

  if (editingId !== null) {
    setApplications((previousApplications) =>
      previousApplications.map((application) =>
        application.id === editingId
          ? {
              ...application,
              company: company.trim(),
              jobTitle: jobTitle.trim(),
              status: status
            }
          : application
      )
    )
  } else {
    const newApplication = {
      id: Date.now(),
      company: company.trim(),
      jobTitle: jobTitle.trim(),
      status: status
    }

    setApplications((previousApplications) => [
      ...previousApplications,
      newApplication
    ])
  }

  resetForm()
}



function resetForm() {
  setCompany('')
  setJobTitle('')
  setStatus('Applied')
  setEditingId(null)
}

function editApplication(application) {
  setCompany(application.company)
  setJobTitle(application.jobTitle)
  setStatus(application.status)
  setEditingId(application.id)
}


function deleteApplication(id) {

  //Asks the user to confirm before deleting an application
  const confirmed = window.confirm('Are you sure you want to delete this application?')

  //Stops the deletion if the user selects Cancel
  if (!confirmed) {
    return
  }

  setApplications((previousApplications) =>
    previousApplications.filter(
      (application) => application.id !== id
    )
  )

  if (editingId === id) {
    resetForm()
  }
}

  return (
    <main> {/* JSX CODE THAT RENDERS THE APPLICATION TRACKER UI */}
      <h1>Job Application Tracker</h1> {/* MAIN HEADING OF THE APPLICATION */}
      <p>Keep track of your job applications in one place.</p>

{/* NEW: Renders the reusable statistics component */}
<StatsCards
  totalApplications={totalApplications}
  totalInterviews={totalInterviews}
  totalOffers={totalOffers}
/>
      
      {/* NEW: Renders the reusable application form component */}
<ApplicationForm
  company={company}
  setCompany={setCompany}
  jobTitle={jobTitle}
  setJobTitle={setJobTitle}
  status={status}
  setStatus={setStatus}
  handleSubmit={handleSubmit}
  editingId={editingId}
  resetForm={resetForm}
/>

   {/* NEW: Renders the reusable application list component */}
<ApplicationList
  applications={applications}
  editApplication={editApplication}
  deleteApplication={deleteApplication}
 />
  </main>
  )
}

export default App