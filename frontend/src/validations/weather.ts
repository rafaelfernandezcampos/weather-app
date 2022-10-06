import * as Yup from 'yup';

const weatherValidator = Yup.object().shape({
  cityName: Yup.string().required('City name is required'),
});

export default weatherValidator;
