import { Link } from "react-router-dom";

const JobListing = ({ job }) => {
  return (
    <div className="job-preview">
      <h2>{job.title}</h2>
      <p>Type: {job.type}</p>
      <p>Description: {job.description}</p>
      <p>Company: {job.company.name}</p>
      <Link to={`/jobs/${job.id}`}  className="btn">View Job</Link> {/* Add this line */}
      <Link to={`/edit-job/${job.id}`} className="btn">Edit Job</Link>
    </div>
  );
};

export default JobListing;
