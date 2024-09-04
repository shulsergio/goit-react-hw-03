import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import css from "./ContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .required('* required')
    .min(3, '* required- min 3 symblols'),
  number: Yup.string()
    .required('* required- number')
    .matches(
      /^[\d+() -]+$/,
      '* required- number'
    ),
});

const handleSubmit = (values, { resetForm }, onAddContact) => {
  const newContact = {
    id: nanoid(),
    name: values.name,
    number: values.number,
  };
  onAddContact(newContact);
  resetForm();
};

export default function ContactForm({ onAddContact }) {
  const initialValues = {
    name: '',
    number: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => handleSubmit(values, actions, onAddContact)}
    >
      <Form className={css.classBox}>
        <div className={css.inputBlock}>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" className={css.error} />
        </div>

        <div className={css.inputBlock}>
          <label htmlFor="number">Number</label>
          <Field type="text" name="number" />
          <ErrorMessage name="number" component="div" className={css.error} />
        </div>

        <button className={css.btnSubmit} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}