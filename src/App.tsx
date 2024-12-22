import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './components/Home';
import Users from './components/home/Mini1';
import Dashboard from './components/home/Mini1 copy';
import UsersRender from './components/home/UsersRender';
import UsersSearch from './components/home/UserSearch';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Default Home Route */}
          {/* Ex: http://localhost:port */}
          <Route index element={<Home />} />

          {/* Home Route with nested routes */}
          {/* Ex: http://localhost:port/panel */}
          <Route path="panel" element={<Home />} >

            {/* Default Dashboard Route */}
            {/* Ex: http://localhost:port/panel */}
            <Route index element={<div>Dashboard</div>} />

            {/* Users Routes */}
            {/* Users Route with nested routes */}
            {/* Ex: http://localhost:port/panel/users */}
            <Route path="users" element={<Users />} >

              {/* Default Users Setting Route */}
              {/* Ex: http://localhost:port/panel/users */}
              <Route index element={<div>Users Setting</div>} />

              {/* Ex: http://localhost:port/panel/users/123 */}
              <Route path=':uid' element={<UsersRender />} />

              {/* Edit User Route */}
              {/* Ex: http://localhost:port/panel/users/edit */}
              <Route path='edit' element={<div>Edit User</div>} />

              {/* Add User Route */}
              {/* Ex: http://localhost:port/panel/users/add */}
              <Route path='add' element={<div>Add User</div>} />
              
              {/* Ex: http://localhost:port/panel/users/search/?q=;lskdf;alsdf */}
              <Route path='search' element={<UsersSearch />} />
            </Route>


            {/* Dashboard Route with nested routes */}
            {/* Ex: http://localhost:port/panel/dashboard */}
            <Route path="dashboard" element={<Dashboard />} >

              {/* Default Dashboard Setting Route */}
              {/* Ex: http://localhost:port/panel/dashboard */}
              <Route index element={<div>Dashboard Setting</div>} />


              {/* Edit Dashboard Route */}
              {/* Ex: http://localhost:port/panel/dashboard/edit */}
              <Route path='edit' element={<div>Edit Dashboard</div>} />

              {/* Add Dashboard Route */}
              {/* Ex: http://localhost:port/panel/dashboard/edit */}
              <Route path='add' element={<div>Add Dashboard</div>} />
            </Route>

            {/* Settings Route */}
            {/* Ex: http://localhost:port/panel/settings */}
            <Route path="settings" element={<div>Settings</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
