import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  message: string;
  name: string;
  email: string;
  subject: string;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async data => {
    const requestData = {
      access_key: "99e963cc-8628-41ac-9978-871a879f1530",
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const result = await response.json();

      if (result.success) {
        alert("Message sent successfully!");
        reset();
      } else {
        alert("Error sending message, please try again.");
      }
    } catch (error) {
      alert("Something went wrong, please try again.");
      console.error(error);
    }
  };

  return (
    <div
      className=" row flex-column-reverse flex-lg-row container"
      style={{ margin: "100px auto", width: "80%" }}
    >
      <div className="col-lg-8">
      <div className="col-12">
        <h2 className="contact-title">Get in Touch</h2>
      </div>
        <form
          className="form-contact contact_form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <textarea
                  className="form-control w-100"
                  {...register("message", { required: "Message is required" })}
                  placeholder="Enter Message"
                  name="message"
                />
                {errors.message && <span>{errors.message.message}</span>}
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Enter your name"
                />
                {errors.name && <span>{errors.name.message}</span>}
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                      message: "Invalid email address",
                    },
                  })}
                  placeholder="Email"
                />
                {errors.email && <span>{errors.email.message}</span>}
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  {...register("subject", { required: "Subject is required" })}
                  placeholder="Enter Subject"
                />
                {errors.subject && <span>{errors.subject.message}</span>}
              </div>
            </div>
          </div>
          <div className="form-group mt-3">
            <button
              type="submit"
              className="button button-contactForm boxed-btn"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <div className="col-lg-3 offset-lg-1">
        <div className="media contact-info">
          <span className="contact-info__icon">
            <i className="ti-home"></i>
          </span>
          <div className="media-body">
            <h3>İstanbul, Turkey.</h3>
            <p>Beyoglu, 34433</p>
          </div>
        </div>
        <div className="media contact-info">
          <span className="contact-info__icon">
            <i className="ti-tablet"></i>
          </span>
          <div className="media-body">
            <h3>
              <a
                onMouseEnter={e => (e.currentTarget.style.color = "#F067FF")}
                onMouseLeave={e => (e.currentTarget.style.color = "")}
                href="https://wa.me/+31637718553"
              >
                +316 377 185 53
              </a>
            </h3>
            <p>Mon to Fri 9am to 6pm</p>
          </div>
        </div>
        <div className="media contact-info">
          <span className="contact-info__icon">
            <i className="ti-email"></i>
          </span>
          <div className="media-body">
            <h3>
              <a
                href="mailto:skyline6710@gmail.com"
                onMouseEnter={e => (e.currentTarget.style.color = "#F067FF")}
                onMouseLeave={e => (e.currentTarget.style.color = "")}
              >
                skyline6710@gmail.com
              </a>
            </h3>
            <p>Send us your query anytime!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
