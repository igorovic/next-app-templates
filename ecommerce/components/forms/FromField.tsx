import { Field, FieldAttributes } from "formik";

interface Props {
  label?: string;
}

type FomeFieldAttributes = Props & FieldAttributes<any>;

export default function FormField({ label, ...props }: FomeFieldAttributes) {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <Field className="input input-bordered" {...props} />
    </div>
  );
}
