import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, Form, Title, Field, ErrorMessage } from './Form.styled';

export const ContactForm = ({onSubmit}) => {
    const initialValues = {
        name: '',
        namber: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string().required(),
        number: Yup.string().required(),
    });

    const handleSubmit = (values, {resetForm}) => {
        onSubmit(values);

        resetForm();
    };

    return (
        <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        >
            <Form>
                <Title>Name</Title>
                <Field type="text" name="name" />
                <ErrorMessage name="name" component="span" />

                <h3>Number</h3>
                <Field type="tel" name="name" />
                <ErrorMessage name="number" component="span" />

                <Button type="submit">Add contact</Button>
            </Form>
        </Formik>
    );
};

// export default ContactForm;