import { useToast } from '@/hooks/use-toast';
import { useSigninMutation } from '@/redux/features/auth/authApi';
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email: string;
  password: string;
}

export default function Login() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<FormErrors>({
    email: '',
    password: '',
  });

  const [errorMsg, setErrorMsg] = useState('');

  const [signin, { data, isLoading, error }] = useSigninMutation();

  const navigate = useNavigate();

  const { toast } = useToast();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validateForm = (): boolean => {
    let valid = true;
    const newErrors: FormErrors = { email: '', password: '' };

    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      setErrorMsg('');

      signin(formData);
    }
  };

  useEffect(() => {
    if (error) {
      if ('data' in error) {
        if ((error.data as { message?: string }).message) {
          const message = (error.data as { message?: string }).message;
          setErrorMsg(message as string);
        } else {
          setErrorMsg('Something went wrong! Try again');
        }
      }
    }

    if (data?.success) {
      toast({
        variant: 'default',
        title: 'Successful',
        description: 'Your login is successfull',
      });
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error, navigate]);

  return (
    <div className="z-100 font-body max-w-4xl flex items-center mx-auto md:h-screen p-4">
      <div className="grid md:grid-cols-3 bg-white items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden">
        <div className="max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full bg-gradient-to-r from-emerald-700 to-emerald-600 lg:px-8 px-4 py-4">
          <div>
            <h4 className="text-white text-2xl font-semibold">Login</h4>
            <p className=" text-gray-300 mt-3 leading-relaxed text-base">
              Welcome to our Login! Get started by logging into your account.
            </p>
          </div>
          <div>
            {/* <h4 className="text-white text-2xl font-semibold">
              Simple & Secure Login
            </h4>
            <p className="text-base text-gray-300 mt-3 leading-relaxed">
              Our login process is designed to be straightforward and secure. We
              prioritize your privacy and data security.
            </p> */}

            <h4 className="text-white text-lg font-semibold">
              For checking purpose use this creadintial:
            </h4>
            <div className=" mt-2 flex flex-col gap-3">
              <div>
                <h2>Admin Login</h2>
                <p>Email: nahid@gmail.com</p>
                <p>Password: 123456</p>
              </div>
              <div>
                <h2>Usre Login</h2>
                <p>Email: zahid@gmail.com</p>
                <p>Password: 123456</p>
              </div>
            </div>
          </div>
        </div>

        <form
          className="md:col-span-2 w-full py-6 px-6 sm:px-16"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <h3 className="text-gray-800 text-3xl font-bold">Login</h3>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-gray-800 text-base block">Email Id</label>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="text-gray-800 bg-white border border-gray-300 w-full text-lg px-4 py-1.5 rounded-md outline-emerald-500"
                  placeholder="Enter email"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="text-gray-800 text-base mb-1 block">
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="text-gray-800 bg-white border border-gray-300 w-full text-lg px-4 py-1.5 rounded-md outline-emerald-500"
                  placeholder="Enter password"
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
          </div>

          {errorMsg && <div className="mt-2 text-red-600">{errorMsg}</div>}

          <div className="!mt-6">
            <button
              type="submit"
              className="w-full py-2 px-4 tracking-wider text-lg font-bold rounded-md text-white bg-emerald-500 hover:bg-emerald-700 focus:outline-none disabled:opacity-50"
              disabled={isLoading}
            >
              Login
            </button>
          </div>
          <p className="text-gray-800 text-base mt-6 text-center">
            Don&apos;t have an account?{' '}
            <Link
              to="/sign-up"
              className="text-emerald-500 font-semibold hover:underline ml-1"
            >
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
