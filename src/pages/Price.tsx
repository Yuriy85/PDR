import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Price() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setValidated(true);
  };

  return (
    <section className="price start">
      <div className="start__wrapper">
        <div className="start__content">
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
          className="price__form"
        >
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>Как вас зовут?</Form.Label>
            <Form.Control required type="text" placeholder="Введите имя" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>Ваш телефон?</Form.Label>
            <Form.Control required type="text" placeholder="Введите телефон" />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-4">
            <Form.Label>Выберите фото</Form.Label>
            <Form.Control required type="file" />
          </Form.Group>
          <button
            style={{ borderRadius: '0.375rem' }}
            type="submit"
            className="start__button"
          >
            Отправить
          </button>
        </Form>
      </div>
    </section>
  );
}

export default Price;
