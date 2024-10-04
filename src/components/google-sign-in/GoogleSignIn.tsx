import { auth } from '@/firebase/firebase.config';
import { useToast } from '@/hooks/use-toast';
import { useGoogleSignInMutation } from '@/redux/features/auth/authApi';
import { getIdToken, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function GoogleSignIn() {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
  const [googleSignIn, { data, isLoading, error }] = useGoogleSignInMutation();
  const { toast } = useToast();

  const handleGoogleSignIn = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const idToken = await getIdToken(user);

      if (idToken) {
        setErrorMsg('');
        googleSignIn({ idToken });
      }
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    } finally {
      setLoading(false);
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
    <div>
      <button
        onClick={handleGoogleSignIn}
        className={`flex items-center justify-center w-full py-2 px-4 transition-colors duration-300 ease-in-out rounded-md text-lg font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none disabled:opacity-50 gap-3 ${
          loading ? 'cursor-not-allowed' : ''
        }`}
        disabled={loading || isLoading}
      >
        {loading ? (
          <span>Signing In...</span>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 50 50"
            >
              <path
                d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z"
                fill="#fff"
              ></path>
            </svg>
            Sign In With Google
          </>
        )}
      </button>
      {errorMsg && <div className="mt-2 text-red-600">{errorMsg}</div>}
    </div>
  );
}
