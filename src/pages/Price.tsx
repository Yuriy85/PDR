import { FormEvent, useEffect, useRef, useState } from 'react';
import BrandButton from '../components/UI/BrandButton';
import { useFetching } from '../hooks/useFetching';
import { sendMessage, sendPhoto } from '../Api/telegram';
import Alert from 'react-bootstrap/Alert';
import { Form } from 'react-bootstrap';
import data from '../data';

function Price() {
  const refInput = useRef(null);
  const refPhotoInput = useRef(null);
  const [tel, setTel] = useState('');
  const [validated, setValidated] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [dangerAlert, setDangerAlert] = useState(false);

  const [sendForm, isLoading, error] = useFetching(
    async (token, tgMessageApi, tgPhotoApi, chatId, text, photo) => {
      await sendMessage(
        token as string,
        tgMessageApi as string,
        chatId as string,
        text as string
      );
      await sendPhoto(
        token as string,
        tgPhotoApi as string,
        chatId as string,
        photo as File
      );
      setSuccessAlert(true);
      setTimeout(() => {
        setSuccessAlert(false);
        setValidated(false);
        if (refInput.current && refPhotoInput.current) {
          (refInput.current as HTMLInputElement).value = '';
          (refPhotoInput.current as HTMLInputElement).value = '';
        }
      }, 1500);
    }
  );

  useEffect(() => {
    if (error) {
      setDangerAlert(true);
      setTimeout(() => {
        setDangerAlert(false);
        setValidated(false);
      }, 1500);
    }
  }, [error]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    type BootstrapFormEvent = {
      target: {
        files: File[];
        value: string;
      }[];
    };
    const name = (event as unknown as BootstrapFormEvent).target[0].value;
    const tel = (event as unknown as BootstrapFormEvent).target[1].value;
    const extra = (event as unknown as BootstrapFormEvent).target[2].value;
    const message = `<b>${name}</b>\n\n<a href="${tel}">${tel}</a>\n\n<i>${extra}</i>`;
    const photo = (event as unknown as BootstrapFormEvent).target[3].files[0];

    sendForm(
      data.tgToken,
      data.tgMessageApi,
      data.tgPhotoApi,
      data.chatId,
      message,
      photo
    );
  }

  return (
    <div className="price">
      <div className="price__wrapper">
        <div className="price__content">
          <h1>Как узнать стоимость?</h1>
          <p>
            Заполните форму, отправьте нам и мы с вами свяжемся в ближайшее
            время и сориентируем по стоимости. К сожалению, по фотографии можно
            понять только примерную стоимость ремонта, так как зачастую
            присланные фотографии плохого качества, либо сделаны под
            неправильным ракурсом. Для точной оценки мастер должен увидеть
            повреждение &quot;вживую&quot;.
          </p>
        </div>

        <Form
          validated={validated}
          onSubmit={handleSubmit}
          onChange={() => (!validated ? setValidated(true) : null)}
          className="price__form"
        >
          <Form.Group className="mb-4">
            <Form.Label>Ваше имя*</Form.Label>
            <Form.Control required placeholder="Введите имя" />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Ваш телефон*</Form.Label>
            <Form.Control
              value={tel}
              onChange={(e) => {
                e.preventDefault();
                const value = e.target.value;
                setTel('+375');
                if (isNaN(+value) || value.length <= 4) {
                  return;
                }
                setTel(value);
              }}
              minLength={13}
              maxLength={13}
              required
              placeholder="Введите телефон"
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Дополнительно</Form.Label>
            <Form.Control ref={refInput} placeholder="Опишите, если нужно" />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-4">
            <Form.Label>Выберите фото*</Form.Label>
            <Form.Control ref={refPhotoInput} required type="file" />
          </Form.Group>
          <BrandButton disabled={isLoading} type="submit">
            Отправить
          </BrandButton>
          <Alert
            style={{ position: 'absolute' }}
            show={successAlert}
            variant="success"
          >
            Сообщение отправлено, скоро мы вам перезвоним
          </Alert>
          <Alert
            style={{ position: 'absolute' }}
            show={dangerAlert}
            variant="danger"
          >
            {error}
          </Alert>
        </Form>
      </div>
    </div>
  );
}

export default Price;
