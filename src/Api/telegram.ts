import axios from 'axios';

export const sendMessage = async (
  token: string,
  tgApi: string,
  chat_id: string,
  text: string
) => {
  await axios.post(tgApi.replace('<token>', token), {
    chat_id,
    parse_mode: 'HTML',
    text,
  });
};

export const sendPhoto = async (
  token: string,
  tgApi: string,
  chat_id: string,
  photo: File
) => {
  // console.log(chat_idphoto);

  await axios.post(
    tgApi.replace('<token>', token),
    {
      chat_id,
      photo,
    },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
};

// axios.post(
//   'https://httpbin.org/post',
//   {
//     user: {
//       name: 'Dmitriy',
//     },
//     file: fs.createReadStream('/foo/bar.jpg'),
//   },
//   {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//     },
//   }
// );
