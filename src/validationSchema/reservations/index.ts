import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  reservation_time: yup.date().required(),
  duration: yup.number().integer().required(),
  number_of_people: yup.number().integer().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  table_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
