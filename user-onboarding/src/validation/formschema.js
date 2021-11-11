import * as yup from 'yup';
const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Username is required')
        .min(3, 'Username must be 6 characters long'),
    email: yup
        .string() 
        .email('Must be a valid email address')
        .max(200),
    password: yup
        .string()
        .required( 'Password is required')
        .min('Password must be at least 8 characters long')

})

export default formSchema 