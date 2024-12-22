import { Link, Outlet } from 'react-router'

const Users = () => {
  const APICall = `654`;

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '250px', background: '#cfsdfr', padding: '15px', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
          <h2>Users Side Panel</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ margin: '10px 0' }}><Link to="/panel/users/edit">Edit</Link></li>
            <li style={{ margin: '10px 0' }}><Link to="/panel/users/add">Add</Link></li>
            <li style={{ margin: '10px 0' }}><Link to={`/panel/users/${APICall}`}>See User</Link></li>
            <li style={{ margin: '10px 0' }}><Link to={`/panel/users/search`}>Search User</Link></li>
            <li style={{ margin: '10px 0' }}><Link to={`/panel/users/search?Sexy`}>Search Sexy</Link></li>
            <li style={{ margin: '10px 0' }}><Link to={`/panel/users/search?Car Dump`}>Search Car</Link></li>
          </ul>
        </div>
        <div style={{ flex: 1, padding: '15px' }}>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Users