function StatsCards({ totalApplications, totalInterviews, totalOffers }) {

    return (
        <div className="dashboard-stats">

            <div className="stat-card">
                <h3>Total Applications</h3>
                <p>{totalApplications}</p>
            </div>

            <div className="stat-card">
                <h3>Interviews</h3>
                <p>{totalInterviews}</p>
            </div>

            <div className="stat-card">
                <h3>Offers</h3>
                <p>{totalOffers}</p>
            </div>

        </div>
    )

}
export default StatsCards