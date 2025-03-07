import { Link } from "react-router-dom";

const JobListing = ({ job }) => {
  return (
    <div className="job-preview">
      <h2>{job.title}</h2>
      <p>Type: {job.type}</p>
      <p>Description: {job.description}</p>
      <p>Company: {job.company.name}</p>
      <p>Location: {job.location}</p>
      <p>Salary: {job.salary}</p>
      <p>Number of employee: {job.size}</p>
      <Link to={`/jobs/${job.id}`}  className="btn">View Job</Link> 
      <Link to={`/edit-job/${job.id}`} className="btn">Edit Job</Link>
    </div>
  );
};

export default JobListing;
