import React from 'react';

function Card1({ user, onEdit, onDelete, onHover, isActive }) {
  return (
    <div 
      className={`col-md-4 mb-4 card-container ${isActive ? 'active' : ''}`}
      onMouseEnter={() => onHover(user.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <p className="card-text"><strong>Username:</strong> {user.username}</p>
          <p className="card-text"><strong>Email:</strong> {user.email}</p>
          <p className="card-text">
            <strong>Address:</strong>
            <br />
            {user.address.street}, {user.address.suite}
            <br />
            {user.address.city}, {user.address.zipcode}
          </p>
          <p className="card-text"><strong>Phone:</strong> {user.phone}</p>
          <p className="card-text">
            <strong>Website:</strong> 
            <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a>
          </p>
          <p className="card-text"><strong>Company:</strong> {user.company.name}</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-warning me-2" onClick={(e) => { e.stopPropagation(); onEdit(); }}>Edit</button>
          <button className="btn btn-danger" onClick={(e) => { e.stopPropagation(); onDelete(); }}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Card1;
