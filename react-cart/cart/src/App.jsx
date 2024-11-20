import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card1 from './Card1';
import { CSSTransition } from 'react-transition-group';

const baseURL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState({ street: "", suite: "", city: "", zipcode: "" });
  const [isEditing, setIsEditing] = useState(false);

  const editFormRef = useRef(null); // Create a ref for the edit form

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUsers(response.data);
    });
  }, []);

  const handleSubmit = () => {
    const user = {
      name,
      username,
      email,
      phone,
      website,
      company: { name: companyName },
      address
    };

    if (currentUserId === null) {
      axios.post(baseURL, user).then((response) => {
        setUsers([...users, response.data]);
        resetForm();
      });
    } else {
      axios.put(`${baseURL}/${currentUserId}`, user).then((response) => {
        setUsers(users.map((u) => (u.id === currentUserId ? response.data : u)));
        resetForm();
      });
    }
  };

  const resetForm = () => {
    setCurrentUserId(null);
    setName("");
    setUsername("");
    setEmail("");
    setPhone("");
    setWebsite("");
    setCompanyName("");
    setAddress({ street: "", suite: "", city: "", zipcode: "" });
    setIsEditing(false);
  };

  const deleteUser = (id) => {
    axios.delete(`${baseURL}/${id}`).then(() => {
      setUsers(users.filter((user) => user.id !== id));
    });
  };

  const editUser = (user) => {
    setCurrentUserId(user.id);
    setName(user.name);
    setUsername(user.username);
    setEmail(user.email);
    setPhone(user.phone);
    setWebsite(user.website);
    setCompanyName(user.company.name);
    setAddress(user.address);
    setIsEditing(true);
    editFormRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll to the edit form
  };

  const addNewUser = () => {
    resetForm();
    setIsEditing(true);
    editFormRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll to the edit form
  };

  const handleCardHover = (id) => {
    setCurrentUserId(id);
  };

  return (
    <div className="container mt-5">
      <h1>User Details</h1>
      <button className="btn btn-success mb-3" onClick={addNewUser}>Add New User</button>
      {users.length > 0 ? (
        <div className="row">
          {users.map((user) => (
            <Card1
              key={user.id}
              user={user}
              onEdit={() => editUser(user)}
              onDelete={() => deleteUser(user.id)}
              onHover={handleCardHover}
              isActive={user.id === currentUserId}
              
            />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <CSSTransition
        in={isEditing}
        timeout={300}
        classNames="sidebar"
        unmountOnExit
      >
        <div ref={editFormRef} className="sidebar">
          <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Website" value={website} onChange={(e) => setWebsite(e.target.value)} />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Street" value={address.street} onChange={(e) => setAddress({ ...address, street: e.target.value })} />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Suite" value={address.suite} onChange={(e) => setAddress({ ...address, suite: e.target.value })} />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="City" value={address.city} onChange={(e) => setAddress({ ...address, city: e.target.value })} />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Zipcode" value={address.zipcode} onChange={(e) => setAddress({ ...address, zipcode: e.target.value })} />
            </div>
            <button type="submit" className="btn btn-primary">{currentUserId ? 'Update User' : 'Add User'}</button>
            <button type="button" className="btn btn-secondary ms-2" onClick={resetForm}>Cancel</button>
          </form>
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;
