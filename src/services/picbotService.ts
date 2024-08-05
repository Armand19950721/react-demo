// src/services/picbotService.ts
import axios from 'axios';
import { getAuthHeader } from '../utils/authHeader';

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const VITE_IMAGE_URL = import.meta.env.VITE_IMAGE_URL;

export interface Picbot {
  Id: string;
  Name: string;
  ThemeGroupId: string;
  SocketToken: string;
  Remark: string;
  Used: boolean;
  CreateAt: string;
  UpdateAt: string;
  DeleteAt: string | null;
}

interface PicbotResponse {
  Code: number;
  Data: string;
}

export const fetchPicbots = async (token: string): Promise<Picbot[]> => {
  const response = await axios.get<PicbotResponse>(`${VITE_API_BASE_URL}/Picbot/GetPicbotList?limit=100&offset=0`, {
    headers: getAuthHeader(token),
  });

  if (response.data.Code === 10000) {
    const data = JSON.parse(response.data.Data);
    return data.Rows;
  } else {
    throw new Error('Failed to fetch picbots');
  }
};
interface PicbotResponse {
  Code: number;
  Data: string;
}

export interface PicbotProduct {
  Id: string;
  PicbotName: string;
  EventName: string;
  CreateAt: string;
  ImageUrl: string;
}

export const fetchPicbotProductPhotos = async (token: string, PicbotName: string): Promise<PicbotProduct[]> => {
  const response = await axios.get<PicbotResponse>(`${VITE_API_BASE_URL}/PicbotProduct/GetPicbotProductList?productType=1&picbotName=${PicbotName}&offset=0&limit=18&uploaded=-1`, {
    headers: getAuthHeader(token),
  });

  if (response.data.Code === 10000) {
    const data = JSON.parse(response.data.Data);
    const picbotProducts: PicbotProduct[] = data.Rows.map((row: any) => ({
      ...row,
      ImageUrl: `${VITE_IMAGE_URL}${row.Id}.png`
    }));
    return picbotProducts;
  } else {
    throw new Error('Failed to fetch picbots');
  }
};