// src/services/picbotService.ts
import axios from 'axios';

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

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

export const fetchPicbots = async (): Promise<Picbot[]> => {
  const response = await axios.get<PicbotResponse>(`${VITE_API_BASE_URL}/Picbot/GetPicbotList?limit=100&offset=0`);

  if (response.data.Code === 10000) {
    const data = JSON.parse(response.data.Data);
    return data.Rows;
  } else {
    throw new Error('Failed to fetch picbots');
  }
};
