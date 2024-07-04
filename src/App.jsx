import  { useState, useEffect } from 'react';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import './App.css';
import { getUsers } from './Api';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  


  useEffect(() => {
    fetchUsers();
  }, []);
  
  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      setError('Error fetching users');
      setLoading(false);
    }
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    

  };

  return (
    <div className="app">
      <h1>User Data</h1>
      <div className="content">
        {loading ? (
          <div className="loader">Loading...</div>
        ) : error ? (
          <div className="error">{error}</div>
        ) : (
          <>
            <div className='userListContainer'>
            <UserList users={users} onUserSelect={handleUserSelect} />
            </div>
            <div className='userDetsilsContainer'>
            <UserDetails user={selectedUser} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;


