import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "app/store";
import { CustomerRequest } from "types/CustomerRequest";

// Define a type for the slice state
interface CustomerState {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  zipCode: string;
  email: string;
}

// Define the initial state using that type
const initialState: CustomerState = {
  firstName: "",
  lastName: "",
  street: "",
  city: "",
  zipCode: "",
  email: "",
};

export const customerSlice = createSlice({
  name: "customer",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    storeCustomer: (state, action: PayloadAction<CustomerRequest>) => {
      state.firstName = action.payload.firstName || "";
      state.lastName = action.payload.lastName || "";
      state.street = action.payload.street || "";
      state.city = action.payload.city || "";
      state.email = action.payload.email || "";
    },
  },
});

export const { storeCustomer } = customerSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const customer = (state: RootState) => state.customer;

export default customerSlice.reducer;
