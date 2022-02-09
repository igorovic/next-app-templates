import { customer, storeCustomer } from "app/features/customer/customerSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { Form, Formik } from "formik";
import type { CustomerRequest } from "types/CustomerRequest";
import AutoSubmit from "./forms/AutoSubmit";
import FormField from "./forms/FromField";

/* const defaultCustomer: CustomerRequest = {
  title: "",
  firstName: "",
  lastName: "",
  street: "",
  city: "",
  country: "",
  zipCode: "",
  email: "",
}; */

export default function CustomerForm() {
  const dispatch = useAppDispatch();
  const _customer = useAppSelector(customer);
  return (
    <Formik
      initialValues={_customer}
      enableReinitialize
      onSubmit={(val) => {
        console.debug("values submitted", val);
        dispatch(storeCustomer(val));
      }}
    >
      <Form className="max-w-md">
        <FormField name="firstName" label="prénom" />
        <FormField name="lastName" label="nom" />
        <FormField name="street" label="rue" />
        <FormField name="city" label="ville" />
        <FormField name="zipCode" label="code postal" />
        <FormField name="email" label="email" />
        <AutoSubmit />
      </Form>
    </Formik>
  );
}
