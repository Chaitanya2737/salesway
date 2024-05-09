import React, { useEffect, useState } from 'react';
import { CiSettings } from 'react-icons/ci';
import { IoPersonCircleOutline } from 'react-icons/io5';
import Typography from '@mui/material/Typography';
import './Navbar.css';

import { useHistory } from "react-router-dom"

const Setting = () => {
  const history = useHistory()
  const [route, setroute] = useState("")
  const navigateTo = (route) => {
    history.push(route)
    setroute(route)
  }
  useEffect(() => {
    navigateTo(route)
  })

  return (
    <nav className='Navbar'>
      <ul>
        <li onClick={() => navigateTo("/setting")} className={history.location.pathname === '/setting' ? 'active' : ''}>
          <span >
            <CiSettings style={{ width: '22px', height: '22px' }} />
          </span>
          <Typography  variant="h6" color="initial" style={{ paddingLeft: '20px', color: '#726c6c' }} >
            Settings
          </Typography>
        </li>
        <li onClick={() => navigateTo("/team")} className={history.location.pathname === '/team' ? 'active' : ''}>
          <span>

          <IoPersonCircleOutline style={{ width: '20px', height: '20px' }} />
          </span>
          <Typography  variant="h6" color="initial" style={{ paddingLeft: '20px', color: '#726c6c' }}>
            Team
          </Typography>
        </li>
      </ul>
    </nav>
  );
};

export default Setting;
