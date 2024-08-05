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
  Token:string
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
    memberInfo.Token = token
    await localforage.setItem('memberInfo', memberInfo);

  } else {
    throw new Error('Login failed');
  }
};

export const loadMemberInfo = async (): Promise<MemberInfo> => {
  const memberInfo = await localforage.getItem<MemberInfo>('memberInfo');

  if (memberInfo === null) {
    throw Error("err cant find memberInfo in localforge")
  }

  console.log("loadMemberInfo",{memberInfo})

  return memberInfo;
};

export const clearMemberInfo = async (): Promise<void> => {
  await localforage.removeItem('memberInfo');
};
