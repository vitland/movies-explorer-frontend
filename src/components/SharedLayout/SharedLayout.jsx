import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router';

const SharedLayout = () => {


  return (
    <>
      <Sidebar/>
      <Outlet/>
    </>
  );
};

export default SharedLayout;