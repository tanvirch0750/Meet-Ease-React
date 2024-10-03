import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useAddCqMutation } from '@/redux/features/customer-query/csQueryApi';
import { useEffect } from 'react';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

function Form() {
  const [addCq, { isLoading, isError, isSuccess, error }] = useAddCqMutation();

  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('required'),
      lastName: Yup.string().required('required'),
      email: Yup.string().email('Invalid email address').required('required'),
      subject: Yup.string().required('required'),
      message: Yup.string().required('required'),
    }),
    onSubmit: async (values: FormValues) => {
      //   setLoading(true);

      try {
        console.log(values);
        // setLoading(false);
        addCq(values);
        formik.resetForm();
      } catch (e) {
        console.error(e);
        formik.resetForm();
      }
    },
  });

  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Message Send Successfully',
        showConfirmButton: false,

        timer: 3000,
      });
    }
    if (isError) {
      Swal.fire({
        title: 'Message Send Failed',
        // @ts-ignore
        text: `Reason: ${error?.data?.message}`,
        icon: 'error',
      });
    }
    // @ts-ignore
  }, [isSuccess, isError, error?.data?.message]);

  // console.log(formik.values.email);

  return (
    <form className="mt-10" onSubmit={formik.handleSubmit}>
      <div className="flex flex-col sm:flex-row">
        <div className="relative mb-6 sm:w-[50%]" data-te-input-wrapper-init>
          <div>
            <input
              type="text"
              className="peer block min-h-[auto] text-slate-800  w-full border-b border-gray-400 hover:border-slate-700 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100  data-[te-input-state-active]:placeholder-opacity-100 motion-reduce:transition-none mt-2"
              id="exampleInput90"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.values.firstName == null ||
            formik.values.firstName == '' ? (
              <label
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-lighttext  transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8]  peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-gray-900"
                htmlFor="exampleInput90"
              >
                First Name
              </label>
            ) : (
              <label
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-lighttext  transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8]  motion-reduce:transition-none text-gray-900"
                htmlFor="exampleInput90"
              >
                First Name
              </label>
            )}
          </div>
          <div>
            {formik.touched.firstName && formik.errors.firstName && (
              <div className="text-red-500 ">{formik.errors.firstName}</div>
            )}
          </div>
        </div>
        <div
          className="relative mb-6 sm:w-[50%] sm:ml-4"
          data-te-input-wrapper-init
        >
          <div>
            <input
              type="text"
              className="peer block min-h-[auto] text-slate-800 w-full border-b border-gray-400 hover:border-slate-700 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100  data-[te-input-state-active]:placeholder-opacity-100 motion-reduce:transition-none mt-2"
              id="exampleInput90"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.values.lastName == null || formik.values.lastName == '' ? (
              <label
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-lighttext  transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8]  peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-gray-900"
                htmlFor="exampleInput90"
              >
                Last Name
              </label>
            ) : (
              <label
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-lighttext  transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8]  motion-reduce:transition-none text-gray-900"
                htmlFor="exampleInput90"
              >
                Last Name
              </label>
            )}
          </div>
          <div>
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="text-red-500">{formik.errors.lastName}</div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row font-tertiary">
        <div className="relative mb-6 sm:w-[50%] " data-te-input-wrapper-init>
          <div>
            <input
              type="email"
              className="peer block min-h-[auto] text-slate-800 hover:border-slate-700 border-gray-400  w-full border-b bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100  data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-900 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 mt-2"
              id="exampleInput91"
              placeholder="Email address"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.values.email == null || formik.values.email == '' ? (
              <label
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-lighttext  transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8]  peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-gray-900"
                htmlFor="exampleInput90"
              >
                Email Address
              </label>
            ) : (
              <label
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-lighttext  transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8]  motion-reduce:transition-none text-gray-900"
                htmlFor="exampleInput90"
              >
                Email Address
              </label>
            )}
          </div>
          <div>
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500">{formik.errors.email}</div>
            )}
          </div>
        </div>
        <div
          className="relative mb-6 sm:w-[50%] sm:ml-4"
          data-te-input-wrapper-init
        >
          <div>
            <input
              type="tel"
              className="peer block min-h-[auto] text-slate-800 hover:border-slate-700 border-gray-400  w-full border-b bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100  data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-900 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 mt-2"
              id="exampleInput91"
              name="subject"
              value={formik.values.subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.values.subject == null || formik.values.subject == '' ? (
              <label
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-lighttext  transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8]  peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-gray-900"
                htmlFor="exampleInput90"
              >
                Subject
              </label>
            ) : (
              <label
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-lighttext  transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8]  motion-reduce:transition-none text-gray-900"
                htmlFor="exampleInput90"
              >
                Subject
              </label>
            )}
          </div>
          <div>
            {formik.touched.subject && formik.errors.subject && (
              <div className="text-red-500">{formik.errors.subject}</div>
            )}
          </div>
        </div>
      </div>
      <div className="relative mb-6 font-tertiary" data-te-input-wrapper-init>
        <div>
          <textarea
            className="peer block min-h-[auto] w-full border-gray-400 border-b hover:border-slate-700 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-900 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 placeholder:text-gray-900"
            id="exampleFormControlTextarea1"
            rows={1}
            placeholder="Your message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
          {formik.values.message == null || formik.values.message == '' ? (
            <label
              className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-lighttext  transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8]  peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-gray-900"
              htmlFor="exampleInput90"
            >
              Message
            </label>
          ) : (
            <label
              className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-lighttext transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8]  motion-reduce:transition-none text-gray-900 inline-block"
              htmlFor="exampleInput90"
            >
              Message
            </label>
          )}
        </div>
        {formik.touched.message && formik.errors.message && (
          <div className="text-red-500">{formik.errors.message}</div>
        )}
      </div>

      <button
        // type="submit"
        onClick={() => formik.handleSubmit}
        disabled={isLoading} // Uncomment this line if needed
        className={
          isLoading
            ? 'px-8 py-2 rounded-md w-full md:w-auto md:rounded-none text-white font-bold transition duration-300 ease-in-out bg-emerald-500 hover:bg-emerald-6000 border-0 opacity-[50]'
            : 'px-8 py-2 rounded-md w-full md:w-auto md:rounded-none text-white font-bold transition duration-300 ease-in-out bg-emerald-500 hover:bg-emerald-6000 border-0'
        }
      >
        Send
      </button>
      {/* <PrimaryButton text="Send" handleOnClick={formik.handleSubmit} /> */}
    </form>
  );
}
export default Form;
