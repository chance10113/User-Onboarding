//Schmea for stuff
import * as yup from 'yup'

export default yup.object().shape({
    first_name: yup
        .string()
        .required('first_name is required')
        .min(6, 'first_name must be at least 6 chars long'),
    email: yup
        .string()
        .email('must be an email')
        .required('email is required'),
    password: yup
        .string()
        .required('password is required')
        .min(6, 'password must be at least 6 chars long'),
    termsOfService: yup
    .boolean()
    .oneOf([true])
})