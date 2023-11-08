import * as yup from 'yup';

export const menuValidationSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().integer().required(),
  ingredients: yup.string().required(),
  preparation_time: yup.number().integer().required(),
  available: yup.boolean().required(),
  restaurant_id: yup.string().nullable().required(),
});
