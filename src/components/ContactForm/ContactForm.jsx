import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import css from "./ContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Имя обязательно')
    .min(3, 'Имя должно содержать не менее 2 символов'),
  number: Yup.string()
    .required('Номер телефона обязателен')
    .matches(
      /^[\d+() -]+$/,
      'Номер телефона может содержать только цифры, пробелы, скобки и тире'
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
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" className={css.error} />
        </div>

        <div>
          <label htmlFor="number">Number</label>
          <Field type="text" name="number" />
          <ErrorMessage name="number" component="div" className={css.error} />
        </div>

        <button type="submit">Добавить контакт</button>
      </Form>
    </Formik>
  );
}