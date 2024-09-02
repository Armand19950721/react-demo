// import axios from 'axios';
// const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export interface MenuItem {
  name: string;
  type: string;
  displayName: string;
  show: boolean;
  children: MenuItem[];
}

export const fetchMenu = async (): Promise<MenuItem[]> => {
  const menuInfo: MenuItem[] = [
    { name: "index", type: "button", displayName: "首頁", show: false, children: [] },
    { name: "login", type: "button", displayName: "登入", show: false, children: [] },
    { name: "member", type: "button", displayName: "會員", show: true, children: [] },
    {
      name: "picbot", type: "dropdown", displayName: "Picbot選單", show: true, children: [
        { name: "gallery", type: "button", displayName: "畫廊", show: true, children: [] }
      ]
    },
    { name: "contextDemo", type: "button", displayName: "ContextDemo", show: true, children: [] },
    { name: "rematchDemo", type: "button", displayName: "RematchDemo", show: true, children: [] },
  ];

  return menuInfo;
};

