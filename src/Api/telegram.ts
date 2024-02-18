import axios from 'axios';

export const sendMessage = async (token: string, tgApi: string, chat_id: string, text: string) => {
  await axios.post(tgApi.replace('<token>', token), {
    chat_id,
    parse_mode: 'HTML',
    text,
  });
};

export const sendFile = async (
  token: string,
  tgApi: string,
  chat_id: string,
  file: File,
  fileType?: string
) => {
  const photoParameter = {
    chat_id,
    photo: file,
  };
  const videoParameter = {
    chat_id,
    video: file,
  };

  await axios.post(tgApi.replace('<token>', token), fileType ? videoParameter : photoParameter, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
