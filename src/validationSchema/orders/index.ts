import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  order_time: yup.date().required(),
  quantity: yup.number().integer().required(),
  total_price: yup.number().integer().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  menu_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
