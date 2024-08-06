
function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me!</span>
      </h2>
      <form>
        <div className="input-box">
          <input type="text" name="first_name" placeholder="First Name" />
          <input type="text" name="last_name" placeholder="Last Name" />
        </div>
        <div className="input-box">
          <input type="number" name="phone_no" placeholder="Mobile Number" />
          <input type="email" name="email" placeholder="Email Address" />
        </div>
        <textarea name="feedback" cols="30" rows="10" placeholder="Your Message"></textarea>
        <input type="submit" value="Send Message" className="btn" />
      </form>
    </section>
  );
}

export default Contact;
