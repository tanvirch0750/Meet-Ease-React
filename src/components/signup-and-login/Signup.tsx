import { useToast } from '@/hooks/use-toast';
import { useSignupMutation } from '@/redux/features/auth/authApi';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GoogleSignIn from '../google-sign-in/GoogleSignIn';
import { EyeClosedIcon } from '@radix-ui/react-icons';
import { EyeIcon } from 'lucide-react';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    address: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    address: '',
  });

  const [errorMsg, setErrorMsg] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [signup, { data, isLoading, error }] = useSignupMutation();

  const { toast } = useToast();

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      password: '',
      address: '',
    };

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.address) newErrors.address = 'Address is required';

    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      // Proceed with form submission (e.g., send data to the server)
      console.log('Form Data:', formData);

      setErrorMsg('');

      signup(formData);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  useEffect(() => {
    console.log(error);

    if (error) {
      if (typeof error === 'object' && error !== null && 'data' in error) {
        const errorData = (error as { data?: { message?: string } }).data;
        if (errorData && typeof errorData.message === 'string') {
          setErrorMsg(errorData.message);
        } else {
          setErrorMsg('Something went wrong! Try again');
        }
      } else {
        setErrorMsg('Something went wrong! Try again');
      }
    }

    console.log(data);

    if (data?.success) {
      toast({
        variant: 'default',
        title: 'Successful',
        description: 'Your registration is successfull. Please login.',
      });
      navigate('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error, navigate]);

  console.log(errorMsg);

  return (
    <div className="z-100 font-body max-w-5xl flex items-center mx-auto md:h-screen p-4">
      <div className="grid md:grid-cols-3 bg-white items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden">
        <div className="max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full bg-gradient-to-r from-emerald-700 to-emerald-600 lg:px-8 px-4 py-4">
          <div>
            <h4 className="text-white text-xl font-semibold">
              Create Your Account
            </h4>
            <p className=" text-gray-300 mt-3 leading-relaxed text-sm">
              Welcome to our registration page! Get started by creating your
              account.
            </p>
          </div>
          <div>
            <h4 className="text-white text-xl font-semibold">
              Simple & Secure Registration
            </h4>
            <p className="text-sm text-gray-300 mt-3 leading-relaxed">
              Our registration process is designed to be straightforward and
              secure. We prioritize your privacy and data security.
            </p>
          </div>
        </div>
        <div className="md:col-span-2 w-full py-6 px-6 sm:px-16">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <h3 className="text-gray-800 text-2xl font-bold">
                Create an account
              </h3>
            </div>

            <div className="space-y-3">
              <div className="md:flex gap-3">
                <div className="mb-2 md:mb-0">
                  <label className="text-gray-800 text-base mb-1 block">
                    Name
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="text-gray-800 bg-white border border-gray-300 w-full text-lg px-4 py-1.5 rounded-md outline-emerald-500"
                      placeholder="Enter name"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-600 text-sm">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="text-gray-800 text-base mb-1 block">
                    Email Id
                  </label>
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
                    <p className="text-red-600 text-sm">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="md:flex gap-3">
                {' '}
                <div>
                  <label className="text-gray-800 text-base mb-1 block">
                    Phone
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="phone"
                      type="text"
                      value={formData.phone}
                      onChange={handleChange}
                      className="text-gray-800 bg-white border border-gray-300 w-full text-lg px-4 py-1.5 rounded-md outline-emerald-500"
                      placeholder="Enter phone number"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-600 text-sm">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <label className="text-gray-800 text-base mb-1 block">
                    Password
                  </label>
                  <div className="relative flex items-center">
                    {/* Password input field */}
                    <input
                      name="password"
                      value={formData?.password}
                      onChange={handleChange}
                      type={showPassword ? 'text' : 'password'}
                      className="text-gray-800 bg-white border border-gray-300 w-full text-lg px-4 py-1.5 rounded-md outline-emerald-500"
                      placeholder="Enter your password"
                    />

                    {/* Eye icon to toggle password visibility */}
                    <span
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    >
                      {showPassword ? (
                        <EyeClosedIcon className=" text-gray-900" />
                      ) : (
                        <EyeIcon className=" text-gray-400" />
                      )}
                    </span>
                  </div>
                  {errors.password && (
                    <p className="text-red-600 text-sm">{errors.password}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-gray-800 text-base mb-1 block">
                  Address
                </label>
                <div className="relative flex items-center">
                  <input
                    name="address"
                    type="text"
                    value={formData.address}
                    onChange={handleChange}
                    className="text-gray-800 bg-white border border-gray-300 w-full text-lg px-4 py-1.5 rounded-md outline-emerald-500"
                    placeholder="Enter address"
                  />
                </div>
                {errors.address && (
                  <p className="text-red-600 text-sm">{errors.address}</p>
                )}
              </div>
            </div>

            {errorMsg && <div className="mt-2 text-red-600">{errorMsg}</div>}

            <div className="!mt-6">
              <button
                type="submit"
                className="w-full py-2 px-4 tracking-wider text-lg font-bold rounded-md text-white bg-emerald-500 hover:bg-emerald-700 focus:outline-none"
                disabled={isLoading}
              >
                Create an account
              </button>
            </div>
            <p className="text-gray-800 text-base mt-2 text-center">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-emerald-500 font-semibold hover:underline ml-1"
              >
                Login here
              </Link>
            </p>
          </form>
          <div>
            <p className=" text-gray-900 py-4 text-center">or</p>

            <GoogleSignIn />
          </div>
        </div>
      </div>
    </div>
  );
}
