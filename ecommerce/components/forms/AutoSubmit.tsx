import { useDebouncedCallback } from "use-debounce";
import { FormikContextType, useFormikContext } from "formik";

import { useLayoutEffect } from "react";

const ns = "AutoSubmit";
/**
 *  AutoSubmit must be used inside a Formik context
 *  note that on each user input, this component will re-render
 */
export default function AutoSubmit() {
  const formik = useFormikContext();
  //debug("**RENDER AUTOSUBMIT**", { ns });

  const SubmitDebounced = useDebouncedCallback(
    (formik: FormikContextType<unknown>) => {
      if (formik.isValid && formik.dirty && !formik.isSubmitting) {
        console.debug("submit %O", formik.values, {
          ns,
        });

        formik.submitForm().then(() => {
          formik.setSubmitting(false);

          /**
           * by resetting the form we actually set `dirty` state to false
           * Meaning that we can properly detect form modification and autoSubmit
           **/
          const { values } = formik;
          formik.resetForm({ values });
        });
      } else {
        console.debug(
          "CANCELED isValid: %s | dirty: %s | isSubmitting: %s",
          formik.isValid,
          formik.dirty,
          formik.isSubmitting,
          { ns, level: "warning" }
        );
      }
    },
    500
  );

  useLayoutEffect(() => {
    SubmitDebounced(formik);
  });

  return null;
}
