import React, { ReactNode, useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { loadMemberInfo, clearMemberInfo, MemberInfo } from '../services/authService';
import { fetchMenu, MenuItem } from '../services/menuService';
import { router_path } from '../routers';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [memberInfo, setMemberInfo] = useState<MemberInfo | null>(null);
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchMemberInfoAndMenu = async () => {
      try {
        console.log('check token');
        const info = await loadMemberInfo();
        setMemberInfo(info);
        const menuData = await fetchMenu();
        setMenu(menuData);
      } catch (error) {
        console.error('Failed to load member info or menu:', error);
        navigate(router_path.login);
      }
    };
    fetchMemberInfoAndMenu();
  }, [navigate]);

  const handleLogout = async () => {
    await clearMemberInfo();
    navigate(router_path.login);
  };

  const generateNavLinks = (menuItems: MenuItem[]) => {
    return menuItems.map(item => {
      if (item.show) {
        const path = router_path[item.name as keyof typeof router_path];
        if (item.type === 'dropdown') {
          return (
            <li key={item.name} className="relative group">
              <button className="flex items-center px-4 py-2 w-full text-left text-gray-100 hover:bg-gray-700 focus:outline-none">
                {item.displayName}
                <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <ul className="absolute left-0 mt-1 p-2 bg-gray-800 text-white shadow-lg rounded-md transition-all duration-300 ease-in-out opacity-0 transform -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:block z-10">
                {generateNavLinks(item.children)}
              </ul>
            </li>
          );
        } else {
          return (
            <li key={item.name}>
              <Link to={path} className={`flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700 ${location.pathname === path ? 'bg-gray-700' : ''}`}>
                {item.displayName}
              </Link>
            </li>
          );
        }
      }
      return null;
    });
  };
  
  
  
  

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4">
          <h2 className="text-2xl font-bold">Dashboard</h2>
        </div>
        <nav className="flex-grow p-4">
          <ul>
            {generateNavLinks(menu)}
          </ul>
        </nav>
      </aside>
      <div className="flex flex-col flex-grow">
        <header className="bg-gray-200 p-4 flex justify-between items-center">
          <div>
            {memberInfo ? `Welcome, ${memberInfo.Account}` : 'Loading...'}
          </div>
          <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded">Logout</button>
        </header>
        <main className="p-4 flex-grow">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
