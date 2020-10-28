import React, { useState } from "react";
import uniqid from "uniqid";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./form.module.css";
const Forms = () => {
  const [show, setShow] = useState(false); //for tooltips
  const [errorMessage, setErrorMessage] = useState(false); //for tooltips
  const [person, setPerson] = useState({
    resume: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    blog: "",
    other: "",
    aboutYourself: "",
  });
  const [candidates, setPeople] = useState([]);

  const Joi = require("joi");

  const schema = Joi.object({
    resume: Joi.required(),
    firstName: Joi.string()
      .pattern(new RegExp("^[a-zA-Z]+$"))
      .min(3)
      .max(30)
      .required(),
    lastName: Joi.string()
      .pattern(new RegExp("^[a-zA-Z]+$"))
      .min(3)
      .max(30)
      .required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .required(),
    phone: Joi.string().length(10).required(),
    linkedin: Joi.string().required(),
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { error, value } = schema.validate({
      resume: person.resume,
      firstName: person.firstName,
      lastName: person.lastName,
      email: person.email,
      phone: person.phone,
      linkedin: person.linkedin,
    });
    //  //("error", error.details, "value", value, typeof error);

    if (error === undefined) {
      const newPerson = { ...person, id: uniqid() };
      setPeople([...candidates, newPerson]);
      setPerson({
        resume: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        linkedin: "",
        github: "",
        blog: "",
        other: "",
        aboutYourself: "",
      });
    } else {
      setShow(true);
      setErrorMessage(error);
       //(error);
    }
  };
  return (
    // <React.Fragment key={uniqid()}>
      <Container>
        <article>
          <strong
            className="h4 d-flex justify-content-left"
            style={{ margin: "1em" }}
          >
            Submit your application
          </strong>
          <form>
            <div className="form-group row">
              <label
                className={styles["required"] + " " + "col-sm-2 col-form-label"}
                htmlFor="resume"
              >
                Resume:{" "}
              </label>
              <div className="col-sm-10">
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  value={person.resume}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                className={styles["required"] + " " + "col-sm-2 col-form-label"}
                htmlFor="firstName"
              >
                Firstname :{" "}
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={person.firstName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={"form-group row"}>
              <label
                className={styles["required"] + " " + "col-sm-2 col-form-label"}
                htmlFor="lastName"
              >
                Lastname :{" "}
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={person.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={"form-group row row"}>
              <label
                className={styles["required"] + " " + "col-sm-2 col-form-label"}
                htmlFor="email"
              >
                Email :{" "}
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  name="email"
                  value={person.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={"form-group row"}>
              <label
                className={styles["required"] + " " + "col-sm-2 col-form-label"}
                htmlFor="phone"
              >
                Phone :{" "}
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  type="tel"
                  id="phone"
                  name="phone"
                  value={person.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <strong
              className="h4 d-flex justify-content-left"
              style={{ margin: "1em" }}
            >
              Social and other links
            </strong>
            <div className={"form-group row"}>
              <label
                className={styles["required"] + " " + "col-sm-2 col-form-label"}
                htmlFor="linkedin"
              >
                Linkedin :{" "}
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  value={person.linkedin}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label" htmlFor="github">
                Github :{" "}
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  type="url"
                  id="github"
                  name="github"
                  value={person.github}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label" htmlFor="blog">
                Blog:{" "}
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  type="url"
                  id="blog"
                  name="blog"
                  value={person.blog}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label" htmlFor="other">
                Other Links :{" "}
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  type="url"
                  id="other"
                  name="other"
                  value={person.other}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                className="col-sm-2 col-form-label"
                htmlFor="aboutYourself"
              >
                <strong>
                  Tell us a little about yourself and what are you looking for :
                </strong>{" "}
              </label>
              <div className="col-sm-10">
                <textarea
                  className="form-control"
                  type="textarea"
                  rows="5"
                  id="aboutYourself"
                  name="aboutYourself"
                  value={person.aboutYourself}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10 d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn btn-primary "
                  onClick={handleSubmit}
                >
                  Submit application
                </button>
              </div>
            </div>
          </form>
        </article>
        <article>
          <Alert show={show} variant="danger">
            <Alert.Heading>ERROR!!!</Alert.Heading>
            <p>{JSON.stringify(errorMessage.details)}</p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => setShow(false)} variant="outline-success">
                Close me
              </Button>
            </div>
          </Alert>
          ;
          {candidates.map((person) => {
            const {
              id,
              firstName,
              lastName,
              email,
              phone,
              linkedin,
              github,
              blog,
              other,
              aboutYourself,
            } = person;

            return (
              <div key={id} className="item">
                <li className="list-group-item active">
                  First Name : {firstName}
                </li>
                <li className="list-group-item active">Last Name{lastName}</li>
                <li className="list-group-item">{email}</li>
                <li className="list-group-item">{phone}</li>
                <li className="list-group-item">{linkedin}</li>
                <li className="list-group-item">{github}</li>
                <li className="list-group-item">{blog}</li>
                <li className="list-group-item">{other}</li>
                <li className="list-group-item">{aboutYourself}</li>
              </div>
            );
          })}
        </article>
      </Container>
    // </React.Fragment>
  );
};

export default Forms;
