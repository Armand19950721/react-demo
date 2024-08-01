import axios from 'axios';
import localforage from 'localforage';
import { getBasicHeader } from '../utils/authHeader';

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export interface MemberInfo {
  Id: string;
  Account: string;
  Password: string;
  IsAdmin: boolean;
  PermissionsJson: string;
  OwnPicbotsJson: string;
  CreateAt: string;
  UpdateAt: string;
  DeleteAt: string | null;
}

interface LoginRequest {
  account: string;
  password: string;
}

interface LoginResponse {
  Code: number;
  Data: string;
}

export const login = async (credentials: LoginRequest): Promise<void> => {
  const response = await axios.post<LoginResponse>(`${VITE_API_BASE_URL}/Auth/Login`, credentials, {
    headers: getBasicHeader(),
  });

  if (response.data.Code === 10000) {
    const data = JSON.parse(response.data.Data);
    const token = data.Token;
    const memberInfo = data.MemberInfo;
    await localforage.setItem('memberInfo', memberInfo);
    await localforage.setItem('token', token);
  } else {
    throw new Error('Login failed');
  }
};

export const loadMemberInfo = async (): Promise<MemberInfo | null> => {
  const memberInfo = await localforage.getItem<MemberInfo>('memberInfo');
  return memberInfo;
};

export const clearMemberInfo = async (): Promise<void> => {
  await localforage.removeItem('memberInfo');
  await localforage.removeItem('token');
};
