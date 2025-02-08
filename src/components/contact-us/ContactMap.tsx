const ContactMap = () => {
    return (
      <div className="w-full aspect-[16/3]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195601.38152824785!2d-75.28316309913839!3d40.002380750575014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b7d8d4b54beb%3A0x89f514d88c3e58c1!2sPhiladelphia%2C%20Pensilvanya%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1738585885264!5m2!1str!2str"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  };
  
  export default ContactMap;