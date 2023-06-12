import * as yup from 'yup';

 const Validation = yup.object().shape({
    name:yup.string().required("required"),
    email:yup.string().email("invalid email").required(),
    password:yup.string().min(4,"to short").max(50,"to long").required("required")
})

export default Validation;