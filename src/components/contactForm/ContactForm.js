import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Formik } from 'formik';
import * as Yup from 'yup';

import styles from './contactForm.module.scss';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Error')
    .max(255, 'Error')
    .required('Error'),
  email: Yup.string()
    .email('Error')
    .max(255, 'Error')
    .required('Error'),
  message: Yup.string().required('Error'),
});

const ContactForm = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          pages {
            home {
              contactForm {
                netlify
                action
                method
                fields {
                  nameLabel
                  emailLabel
                  messageLabel
                  messageLimit
                  button
                }
              }
            }
          }
        }
      }
    }
  `);

  const { action, method } = data.site.siteMetadata.pages.home.contactForm;

  const {
    nameLabel,
    emailLabel,
    messageLabel,
    messageLimit,
    button,
  } = data.site.siteMetadata.pages.home.contactForm.fields;

  return (
    <section className={`${styles.root} container`}>
      <header>
        <h1 className={styles.title}>Contact</h1>
      </header>

      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          resetForm({ name: '', email: '', message: '' });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => {
          return (
            <form
              action={action}
              method={method}
              className={styles.form}
              onSubmit={handleSubmit}
            >
              <label
                name={nameLabel}
                htmlFor="name"
                className={`${styles.name} ${
                  touched.name && errors.name ? styles.required : null
                }`}
              >
                {nameLabel}
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder={nameLabel}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                ></input>
              </label>
              <label
                name={emailLabel}
                htmlFor="email"
                className={`${styles.email} ${
                  touched.email && errors.email ? styles.required : null
                }`}
              >
                {emailLabel}
                <input
                  id="email"
                  type="mail"
                  name="email"
                  inputMode="email"
                  placeholder={emailLabel}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </label>
              <label
                name={messageLabel}
                htmlFor="message"
                className={`${styles.message} ${
                  touched.message && errors.message ? styles.required : null
                }`}
              >
                {messageLabel}
                <textarea
                  id="message"
                  name="message"
                  maxLength={messageLimit}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                />
              </label>
              <button
                type="submit"
                className={styles.submit}
                disabled={isSubmitting}
              >
                {button}
              </button>
            </form>
          );
        }}
      </Formik>
    </section>
  );
};

export default ContactForm;
