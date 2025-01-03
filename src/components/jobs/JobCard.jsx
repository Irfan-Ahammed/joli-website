import React from 'react'

function JobCard({ job }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-xl font-bold mb-2">{job.title}</h2>
      <p className="text-gray-700 mb-2">Location: {job.location}</p>
      <p className="text-gray-700 mb-2">{job.description}</p>
      <p className="text-gray-700 mb-2">Job Type: {job.jobType}</p>
      <p className="text-gray-700 mb-2">Wage: ₹{job.wage}</p>
      <ul className="text-gray-700 mb-2">
        <span className="font-bold">Requirements:</span>
        {job.requirements.map((req, index) => (
          <li key={index}>- {req}</li>
        ))}
      </ul>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Apply Now
      </button>
    </div>
  );
}

export default JobCard