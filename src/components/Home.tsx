import { Outlet, Link } from 'react-router'


const Home = () => {
    return (
        <>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '250px', background: '#f4f4f4', padding: '15px', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
                    <h2>Side Panel</h2>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li style={{ margin: '10px 0' }}><Link to="/panel/dashboard">Dashboard</Link></li>
                        <li style={{ margin: '10px 0' }}><Link to="/panel/users">Users</Link></li>
                        <li style={{ margin: '10px 0' }}><Link to="/panel/settings">Settings</Link></li>
                    </ul>
                </div>
                <div style={{ flex: 1, padding: '15px' }}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Home

// rafce