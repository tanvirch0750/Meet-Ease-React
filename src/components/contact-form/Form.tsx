'use client';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// import { useState } from 'react';
import PrimaryButton from '../ui/primary-button';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  isSubscribed: boolean;
}

function Form() {
  //   const [loading, setLoading] = useState<boolean>(false);

  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      isSubscribed: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('required'),
      lastName: Yup.string().required('required'),
      email: Yup.string().email('Invalid email address').required('required'),
      phone: Yup.string().required('required'),
      message: Yup.string().required('required'),
      isSubscribed: Yup.boolean().oneOf(
        [true],
        'You must subscribe to continue'
      ),
    }),
    onSubmit: async (values: FormValues) => {
      //   setLoading(true);
      const body = {
        email_address: values.email,
        first_name: values.firstName,
        last_name: values.lastName,
        phone: values.phone,
        message: values.message,
      };
      try {
        console.log(body);
        // setLoading(false);
        formik.resetForm();
      } catch (e) {
        console.error(e);
        formik.resetForm();
      }
    },
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue('isSubscribed', event.target.checked);
    console.log(formik.values.isSubscribed);
  };

  // console.log(formik.values.email);

  return (
    <form className="mt-10" onSubmit={formik.handleSubmit}>
      <div className="flex flex-col sm:flex-row">
        <div className="relative mb-6 sm:w-[50%]" data-te-input-wrapper-init>
          <div>
            <input
              type="text"
              className="peer block min-h-[auto] text-slate-800  w-full border-b-2 hover:border-slate-700 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100  data-[te-input-state-active]:placeholder-opacity-100 motion-reduce:transition-none"
              id="exampleInput90"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.values.firstName == null ||
            formik.values.firstName == '' ? (
              <label
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-lighttext  transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8]  peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                htmlFor="exampleInput90"
              >
                Name
              </label>
            ) : (
              <label
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-lighttext  transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8]  motion-reduce:transition-none"
                htmlFor="exampleInput90"
              >
                Name
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
              className="peer block min-h-[auto] text-slate-800 w-full border-b-2 hover:border-slate-700 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100  data-[te-input-state-active]:placeholder-opacity-100 motion-reduce:transition-none"
              id="exampleInput90"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.values.lastName == null || formik.values.lastName == '' ? (
              <label
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-lighttext  transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8]  peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                htmlFor="exampleInput90"
              >
                Last Name
              </label>
            ) : (
              <label
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-lighttext  transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8]  motion-reduce:transition-none"
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
              className="peer block min-h-[auto] text-slate-800 hover:border-slate-700  w-full border-b-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100  data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInput91"
              placeholder="Email address"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.values.email == null || formik.values.email == '' ? (
              <label
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-lighttext  transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8]  peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                htmlFor="exampleInput90"
              >
                Email Address
              </label>
            ) : (
              <label
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-lighttext  transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8]  motion-reduce:transition-none"
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
              className="peer block min-h-[auto] text-slate-800 hover:border-slate-700  w-full border-b-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100  data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInput91"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.values.phone == null || formik.values.phone == '' ? (
              <label
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-lighttext  transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8]  peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                htmlFor="exampleInput90"
              >
                Phone
              </label>
            ) : (
              <label
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-lighttext  transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8]  motion-reduce:transition-none"
                htmlFor="exampleInput90"
              >
                Phone
              </label>
            )}
          </div>
          <div>
            {formik.touched.phone && formik.errors.phone && (
              <div className="text-red-500">{formik.errors.phone}</div>
            )}
          </div>
        </div>
      </div>
      <div className="relative mb-6 font-tertiary" data-te-input-wrapper-init>
        <div>
          <textarea
            className="peer block min-h-[auto] w-full border-b-2 hover:border-slate-700 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
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
              className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-lighttext  transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8]  peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
              htmlFor="exampleInput90"
            >
              Message
            </label>
          ) : (
            <label
              className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-lighttext transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8]  motion-reduce:transition-none"
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

      <div className="flex flex-col w-full font-tertiary">
        <div className="flex w-full ">
          <input
            type="checkbox"
            name="isSubscribed"
            id="isSubscribed"
            className="w-5 h-5 my-auto"
            onChange={handleCheckboxChange}
            checked={formik.values.isSubscribed}
          />
          <p className="ml-4">Yes, I wish to subscribe the newsletter</p>
        </div>
        {formik.touched.isSubscribed && formik.errors.isSubscribed && (
          <div className="text-red-500">{formik.errors.isSubscribed}</div>
        )}
      </div>

      <p className="mt-4 mb-4 font-tertiary">
        In our Privacy Policy we inform that you about the data we collect when
        you visit our website ands what we use it for
      </p>

      {/* <button
        // type="submit"
        onClick={() => formik.handleSubmit}
        disabled={loading} // Uncomment this line if needed
        className={
          loading
            ? 'border-2 px-8 py-4 w-full md:w-auto rounded-lg md:rounded-none text-white font-bold transition duration-300 ease-in-out bg-[#4d4d4d] hover:bg-slate-800 opacity-[50]'
            : 'border-2 px-8 py-4 w-full md:w-auto rounded-lg md:rounded-none text-white font-bold transition duration-300 ease-in-out bg-[#4d4d4d] hover:bg-slate-800'
        }
      >
        Send
      </button> */}
      <PrimaryButton text="Send" handleOnClick={formik.handleSubmit} />
    </form>
  );
}
export default Form;
