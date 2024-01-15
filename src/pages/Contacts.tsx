function Contacts() {
  return (
    <div className="contacts">
      <div className="contacts__insert"></div>
      <iframe
        className="contacts__map"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2796.544154523444!2d30.380535546601752!3d53.88546853276153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTPCsDUzJzA4LjEiTiAzMMKwMjInNTcuOSJF!5e0!3m2!1sru!2sby!4v1705236122533!5m2!1sru!2sby"
        loading="lazy"
        referrerPolicy={'no-referrer-when-downgrade'}
        allowFullScreen={false}
      ></iframe>
    </div>
  );
}

export default Contacts;
