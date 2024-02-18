import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import BrandButton from '../components/UI/BrandButton';
import { useFetching } from '../hooks/useFetching';
import { sendMessage, sendFile } from '../Api/telegram';
import Alert from 'react-bootstrap/Alert';
import { Form } from 'react-bootstrap';
import data from '../data';
import { CSSTransition } from 'react-transition-group';

function Price() {
  type BootstrapFormEvent = {
    target: {
      files: File[];
      value: string;
    }[];
  };

  const refInput = useRef(null);
  const refFileInput = useRef(null);
  const [tel, setTel] = useState('');
  const [anim, setAnim] = useState(false);
  const [isWrongFile, setIsWrongFile] = useState(false);
  const [validated, setValidated] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [dangerAlert, setDangerAlert] = useState(false);

  const [sendForm, isLoading, error] = useFetching(
    async (token, tgMessageApi, tgFileApi, chatId, text, photo, fileType?) => {
      await sendFile(
        token as string,
        tgFileApi as string,
        chatId as string,
        photo as File,
        fileType as string
      );
      await sendMessage(token as string, tgMessageApi as string, chatId as string, text as string);
      setSuccessAlert(true);
      setValidated(false);
      if (refInput.current && refFileInput.current) {
        (refInput.current as HTMLInputElement).value = '';
        (refFileInput.current as HTMLInputElement).value = '';
      }
      setTimeout(() => {
        setSuccessAlert(false);
      }, 3000);
    }
  );

  useEffect(() => {
    if (error) {
      setDangerAlert(true);
      setTimeout(() => {
        setDangerAlert(false);
        setValidated(false);
      }, 3000);
    } else {
      setAnim(true);
    }
  }, [error]);

  function handleSubmit(event: FormEvent<HTMLFormElement> | BootstrapFormEvent) {
    (event as FormEvent<HTMLFormElement>).preventDefault();
    const bootstrapEvent: BootstrapFormEvent = event as BootstrapFormEvent;
    const name = bootstrapEvent.target[0].value;
    const tel = bootstrapEvent.target[1].value;
    const extra = bootstrapEvent.target[2].value;
    const message = `<b>${name}</b>\n\n<a href="${tel}">${tel}</a>\n\n<i>${extra}</i>`;
    const file = bootstrapEvent.target[3].files[0];

    if (file.type.includes('video')) {
      sendForm(
        data.tgToken,
        data.tgMessageApi,
        data.tgVideoApi,
        data.chatId,
        message,
        file,
        'video'
      );
    } else if (file.type.includes('image')) {
      sendForm(data.tgToken, data.tgMessageApi, data.tgPhotoApi, data.chatId, message, file);
    } else {
      setIsWrongFile(true);
    }
  }

  function checkTel(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    const tel = (event.target as HTMLInputElement).value;
    setTel('+375');
    if (isNaN(+tel) || tel.length <= 4) {
      return;
    }
    setTel(tel);
  }

  return (
    <div className="price">
      <CSSTransition in={anim} mountOnEnter classNames="--left" timeout={300}>
        <div className="price__wrapper">
          <div className="price__content">
            <h1>Как узнать стоимость?</h1>
            <p>
              Заполните форму, отправьте нам и мы с вами свяжемся в ближайшее время и сориентируем
              по стоимости. К сожалению, по фотографии можно понять только примерную стоимость
              ремонта, так как зачастую присланные фотографии плохого качества, либо сделаны под
              неправильным ракурсом. Для точной оценки мастер должен увидеть повреждение
              &quot;вживую&quot;.
            </p>
          </div>

          <Form
            validated={validated}
            onSubmit={handleSubmit}
            onChange={() => {
              !validated ? setValidated(true) : null;
              isWrongFile ? setIsWrongFile(false) : null;
            }}
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
                onChange={checkTel}
                minLength={13}
                maxLength={13}
                required
                placeholder="Введите телефон"
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Дополнительно</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                ref={refInput}
                placeholder="Опишите, если нужно"
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-4">
              <Form.Label>Выберите фото/видео (до 10mb/50mb)*</Form.Label>
              <Form.Control ref={refFileInput} isInvalid={isWrongFile} required type="file" />
            </Form.Group>
            <BrandButton disabled={isLoading} type="submit">
              {isLoading ? 'Отправляю...' : 'Отправить'}
            </BrandButton>
            <Alert
              style={{ position: 'absolute' }}
              show={successAlert || dangerAlert || isWrongFile}
              variant={dangerAlert || isWrongFile ? 'danger' : 'success'}
            >
              {successAlert
                ? 'Сообщение отправлено, скоро мы вам перезвоним'
                : `Сообщение не отправлено! ${isWrongFile ? 'Проверьте формат файла' : error}`}
            </Alert>
          </Form>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Price;
