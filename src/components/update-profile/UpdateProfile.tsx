import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';
import { IUser } from '@/types/userType';
import { useEditUserMutation } from '@/redux/features/user/userApi';
import Swal from 'sweetalert2';

export default function UpdateProfile({ userData }: { userData: IUser }) {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: userData?.name || '',
    email: userData?.email || '',
    phone: userData?.phone || '',
    address: userData?.address || '',
    role: userData?.role || 'user',
    bio: userData?.bio || '',
    socialMedia: {
      twitter: userData?.socialMedia?.twitter || 'twitter profile url',
      linkedin: userData?.socialMedia?.linkedin || 'linkedin profile url',
      instagram: userData?.socialMedia?.instagram || 'instagram profile url',
    },
    image: userData?.image || 'https://github.com/shadcn.png',
  });

  const [editUser, { isLoading, isError, isSuccess }] = useEditUserMutation();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSocialMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      socialMedia: {
        ...prevUser.socialMedia,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the updated user data to your backend
    console.log('Updated user data:', user);

    editUser({ id: userData?._id, data: user });
  };

  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Profile Updated Successfully',
        showConfirmButton: false,
        timer: 3000,
      });
    }
    if (isError) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'There was an error, please try again',
        showConfirmButton: false,
        timer: 3000,
      });
    }
  }, [isSuccess, isError]);

  return (
    <div className="mx-auto p-6">
      <Card className="max-w-5xl mx-auto bg-white text-gray-800 border-gray-300">
        <CardHeader className="flex flex-col sm:flex-row items-center gap-4">
          <Avatar className="w-24 h-24">
            <AvatarImage
              src={userData?.image || 'https://github.com/shadcn.png'}
              alt={user.name}
            />
            <AvatarFallback>
              {user.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </AvatarFallback>
          </Avatar>

          <div className="text-center sm:text-left">
            <CardTitle className="text-2xl font-bold">{user.name}</CardTitle>
            <CardDescription className="text-gray-800">
              {user.role}
            </CardDescription>
          </div>
          <Button
            className={`${
              !isEditing
                ? 'bg-emerald-600 hover:bg-emerald-500  text-white'
                : 'bg-red-500 hover:bg-red-600'
            } ml-auto`}
            variant={isEditing ? 'destructive' : 'default'}
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </Button>
        </CardHeader>
        <CardContent className=" mt-5">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <input
                  id="name"
                  name="name"
                  value={user.name}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className=" border-gray-400 text-gray-900  font-semibold disabled:opacity-70 bg-white w-full border px-2 py-2 rounded-md"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={user.email}
                  className=" border-gray-400 text-gray-900 font-semibold disabled:opacity-80 bg-white w-full border px-2 py-2 rounded-md"
                  disabled={true}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={user.phone}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className=" border-gray-400 font-semibold text-gray-900 disabled:opacity-70 bg-white w-full border px-2 py-2 rounded-md"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="image">Image Url</Label>
                <input
                  id="image"
                  name="image"
                  value={user.image}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className=" border-gray-400  font-semibold text-gray-900 disabled:opacity-70 bg-white w-full border px-2 py-2 rounded-md"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <input
                  id="address"
                  name="address"
                  value={user.address}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className=" border-gray-400 font-semibold text-gray-900 disabled:opacity-70 bg-white w-full border px-2 py-2 rounded-md"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="twitter">Twitter</Label>
                <input
                  id="twitter"
                  name="twitter"
                  value={user.socialMedia.twitter}
                  onChange={handleSocialMediaChange}
                  disabled={!isEditing}
                  className=" border-gray-400  font-semibold text-gray-900 disabled:opacity-70 bg-white w-full border px-2 py-2 rounded-md"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn</Label>
                <input
                  id="linkedin"
                  name="linkedin"
                  value={user.socialMedia.linkedin}
                  onChange={handleSocialMediaChange}
                  disabled={!isEditing}
                  className=" border-gray-400 font-semibold text-gray-900 disabled:opacity-70 bg-white w-full border px-2 py-2 rounded-md"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="instagram">Instagram</Label>
                <input
                  id="instagram"
                  name="instagram"
                  value={user.socialMedia.instagram}
                  onChange={handleSocialMediaChange}
                  disabled={!isEditing}
                  className=" border-gray-400 font-semibold text-gray-900 disabled:opacity-70 bg-white w-full border px-2 py-2 rounded-md"
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="bio">Bio</Label>
                <textarea
                  id="bio"
                  name="bio"
                  value={user.bio}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="min-h-[100px]  font-semibold border-gray-400 text-gray-900 disabled:opacity-70 bg-white w-full border px-2 py-2 rounded-md"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          {isEditing && (
            <Button
              type="submit"
              onClick={handleSubmit}
              className=" bg-emerald-600 hover:bg-emerald-500 text-white"
              disabled={isLoading}
            >
              {isLoading ? 'Processing' : 'Save  Changes'}
            </Button>
          )}
          <div className="flex space-x-2">
            <Link to={`${userData?.socialMedia?.twitter}`}>
              <Button
                size="icon"
                variant="outline"
                className="bg-white border-emerald-500 hover:bg-emerald-100"
              >
                <TwitterLogoIcon className="h-8 w-8 text-emerald-500" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link to={`${userData?.socialMedia?.linkedin}`}>
              <Button
                size="icon"
                variant="outline"
                className="bg-white border-emerald-500 hover:bg-emerald-100"
              >
                <LinkedInLogoIcon className="h-8 w-8 text-emerald-500" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>

            <Link to={`${userData?.socialMedia?.instagram}`}>
              <Button
                size="icon"
                variant="outline"
                className=" bg-white border-emerald-500 hover:bg-emerald-100"
              >
                <InstagramLogoIcon className="h-8 w-8  text-emerald-500" />
                <span className="sr-only">Instagram</span>
              </Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
