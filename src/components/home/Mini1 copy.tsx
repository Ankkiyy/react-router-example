import { Link, Outlet } from 'react-router'

const Dashboard  = () => {
  return (
    <>
     <div style={{ display: 'flex' }}>
                <div style={{ width: '250px', background: '#cfsdfr', padding: '15px', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
                    <h2>dashabord Side Panel</h2>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li style={{ margin: '10px 0' }}><Link to="/panel/dashboard/edit">Dash Edit</Link></li>
                        <li style={{ margin: '10px 0' }}><Link to="/panel/dashboard/add">Dash Add</Link></li>
                    </ul>
                </div>
                <div style={{ flex: 1, padding: '15px' }}>
                    <Outlet />
                </div>
            </div>
    </>
  )
}

export default Dashboard