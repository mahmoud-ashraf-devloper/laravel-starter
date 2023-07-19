import React, { useRef } from 'react'
import { usePage } from '@inertiajs/inertia-react';
import { useState } from 'react'
import { router } from '@inertiajs/react'
import SiteLayout from '../Layouts/SiteLayout'
import axios from 'axios';
import Swal from 'sweetalert2';
function Profile({ user, profile }) {
  const [image, setImage] = useState();
  const [profileImage, setProfileImage] = useState(profile?.image_url);
  const [imagePreviewUrl, setImagePreviewUrl] = useState();

  const handleImageChange = e => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
    setImagePreviewUrl(
      URL.createObjectURL(e.target.files[0])
    );
  };

  const uploadImage = async (e) => {
    e.preventDefault()

    const formData = new FormData();
    formData.set('image', image);

    console.log('loggg', formData.get('image'), image);

    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }

    const result = await axios.post(route('user.upload.profile.picture'), formData, { headers: { 'Content-Type': 'multipart/form-data' } })
    console.log('res', result.data)
    if (result.data.image_url) {
      setProfileImage(result.data.image_url);
    }
    if (result.data.image_url) {
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Profile Picture Updated Successfully',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
  return (

    <SiteLayout>
      <section className="bg-white dark:bg-gray-900 mt-14">
        <div className="py-8 px-4 mx-auto max-w-7xl lg:py-16 grid md:grid-cols-8 gap-10">
          <div className="col-span-2 dark:text-white">
            <div className="p-3">
              <div className="flex items-center justify-between mb-2">
                <a href="#">

                  {
                    profile ?
                      <img className="w-20 h-20 rounded-full"
                        src={'http://127.0.0.1:8000/images/profiles/' + profileImage} alt="user photo" />
                      :
                      <span className='w-10 h-10 rounded-full text-gray-500 flex justify-center items-center'>
                        <i className="fa-sharp fa-solid fa-user fa-xl"></i>
                      </span>
                  }
                </a>

              </div>
              <p className="text-base font-semibold leading-none text-gray-900 dark:text-white">
                <a href="#">{user.name}</a>

              </p>
              <p className="mb-3 text-sm font-normal">
                <a href="#" className="hover:underline"><span>@</span>{user.name}</a>
              </p>
              <p className="mb-4 text-sm">{profile?.bio}
                <a href={profile?.website} className="text-blue-600 dark:text-blue-500 hover:underline">
                  {profile?.website}
                </a>
              </p>
              <ul className="flex text-sm">
               
                
              </ul>
            </div>
          </div>
          <div className="col-span-6 flex flex-col space-y-8">
            <div>
              <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update Profile Picture</h2>
              <form onSubmit={uploadImage} encType="multipart/form-data">
                <input className='text-white' onChange={handleImageChange} name="image" type="file" accept="image/*" />
                <button type="submit"
                  className="inline-flex max-w-fit justify-center items-center px-5 py-2.5 mt-2 sm:mt-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                  Update Profile
                </button>
              </form>
            </div>
            <div>
              <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Profile Data</h2>
              <form action="#">
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-2">
                  <div className="sm:col-span-2">
                    <input type="text" name="name" id="name"
                      className="bg-gray-50 border border-gray-300 max-w-lg text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Name" />
                  </div>
                  <div className="sm:col-span-2">
                    <input type="text" name="username" id="username"
                      className="bg-gray-50 border border-gray-300 max-w-lg text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Username" />
                  </div>
                  <div className="sm:col-span-2">
                    <input type="text" name="bio" id="bio"
                      className="bg-gray-50 border border-gray-300 max-w-lg text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Bio" />
                  </div>
                  <div className="sm:col-span-2">
                    <input type="text" name="website" id="website"
                      className="bg-gray-50 border border-gray-300 max-w-lg text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Website" />
                  </div>

                  <button type="submit"
                    className="inline-flex max-w-fit justify-center items-center px-5 py-2.5 mt-2 sm:mt-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    Update Profile
                  </button>
                </div>
              </form>

            </div>
            <div className="">
              <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update Password</h2>
              <form action="#">
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-2">
                  <div className="sm:col-span-2">
                    <input type="password" name="password" id="password"
                      className="bg-gray-50 border border-gray-300 max-w-lg text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Password" />
                  </div>
                  <div className="sm:col-span-2">
                    <input type="password" name="password_confirmation" id="password_confirmation"
                      className="bg-gray-50 border border-gray-300 max-w-lg text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Password Ponfirmation" />
                  </div>


                  <button type="submit"
                    className="inline-flex max-w-fit justify-center items-center px-5 py-2.5 mt-2 sm:mt-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    Update Password
                  </button>
                </div>
              </form>
            </div>
            <div>
              <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update Email</h2>
              <form action="#">
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-2">
                  <div className="sm:col-span-2">
                    <input type="email" name="email" id="email"
                      className="bg-gray-50 border border-gray-300 max-w-lg text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Email" />
                  </div>
                </div>
                <button type="submit"
                  className="inline-flex max-w-fit justify-center items-center px-5 py-2.5 mt-2 sm:mt-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                  Update Email
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </SiteLayout>
  )
}

export default Profile