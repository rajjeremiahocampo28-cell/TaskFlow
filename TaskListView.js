import React from 'react';

function TaskListView({ tasks, deleteTask }) {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Task List</h2>

      {tasks.length === 0 ? (
        <div className="alert alert-info">No tasks added yet.</div>
      ) : (
        <div className="row">
          {tasks.map((task) => (
            <div key={task.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title">{task.title}</h5>
                    <p className="card-text">
                      <strong>Description:</strong> {task.description}
                    </p>
                    <p className="card-text">
                      <strong>Priority:</strong>{' '}
                      <span className={`badge ${
                        task.priority === 'High' ? 'bg-danger' :
                        task.priority === 'Medium' ? 'bg-warning text-dark' :
                        'bg-success'
                      }`}>
                        {task.priority}
                      </span>
                    </p>
                  </div>
                  <button
                    className="btn btn-outline-danger mt-3"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TaskListView;
