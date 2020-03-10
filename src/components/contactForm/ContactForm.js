import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Formik } from 'formik';
import * as Yup from 'yup';

import FormInput from './fields/FormInput';
import FormTextarea from './fields/FormTextarea';
import FormSubmit from './fields/FormSubmit';

import styles from './contactForm.module.scss';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Your name is too short!')
    .max(255, 'Your name is too long!')
    .required('I need your name!'),
  email: Yup.string()
    .email('Your email is invalid!')
    .max(255, 'Your email is too long!')
    .required('I need your email!'),
  message: Yup.string().required(
    'Tell me the reasons why you are contacting me!'
  ),
});

const ContactForm = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          pages {
            home {
              contactForm {
                action
                method
                netlify
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

  const {
    action,
    method,
    netlify,
  } = data.site.siteMetadata.pages.home.contactForm;

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
        initialValues={{ bot: '', name: '', email: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          resetForm({ bot: '', name: '', email: '', message: '' });
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
              data-netlify={netlify ? true : null}
              neltify-honeypot={netlify ? 'bot-field' : null}
              className={styles.form}
              onSubmit={handleSubmit}
            >
              {netlify ? (
                <input name="bot-field" type="hidden" value={values.bot} />
              ) : null}

              <FormInput
                fieldLabel={nameLabel}
                name="name"
                id="name"
                type="text"
                touched={touched.name}
                errors={errors.name}
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.name}
              />
              <FormInput
                fieldLabel={emailLabel}
                name="email"
                id="email"
                type="text"
                touched={touched.name}
                errors={errors.email}
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.email}
              />
              <FormTextarea
                fieldLabel={messageLabel}
                name="message"
                id="message"
                maxLength={messageLimit}
                touched={touched.message}
                errors={errors.message}
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.message}
              />
              <FormSubmit disabled={isSubmitting} label={button} />
            </form>
          );
        }}
      </Formik>
      <div className={styles.stilt}></div>
    </section>
  );
};

export default ContactForm;
