import { Center } from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import HomeLayout from '../layouts/HomeLayout';

export default function SupportForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => submitBar('/api/divebars', {divebar:{
      title: data.title,
      description: data.description,
      location: data.location,
      submitted_by: data.submitted_by

}});
  console.log(errors);

  async function submitBar(url= '', data={}) {
    const response = await fetch (
        url,{
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
          });
          return response.json();
}
  
  return (
    <HomeLayout>
    <Center>
    <div class="flex flex-col bg-white dark:bg-gray-800 shadow px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-lg max-w-xl">
    <div class="font-light self-center text-xl sm:text-2xl text-gray-800 dark:text-white mb-2">
        Submit a new divebar
    </div>
    <div class="mt-8 p-6">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div class="flex flex-col mb-2">
                <div class=" relative ">
                    <input type="text" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="title" placeholder="Name of the bar" ref={register({required: true, maxLength:80})}/>
                    </div>
                </div>
                <div class="flex gap-4 mb-2">
                    <div class=" relative ">
                        <input type="text" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="First Name" name="description" ref={register({required: true, maxLength: 80})}/>
                        </div>
                        <div class=" relative ">
                            <input type="text" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Last Name" name="location" ref={register({required: true, maxLength: 100})}/>
                            </div>
                        </div>
                        <div class="flex flex-col mb-2">
                            <div class=" relative ">
                                <input type="text" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email" name="submitted_by" ref={register({required: true, pattern: /^\S+@\S+$/i})}/>
                                </div>
                            </div>
                            <div>
                            <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                <input type="checkbox" name="toggle" id="prefix-13" class="checked:right-0 checked:bg-blue-600 absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                                    <label for="prefix-13" class="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                                    </label>
                                </div>
                                <span class="text-gray-400 font-medium">
                                    Accept terms of service
                                </span>
                            </div>
                            <div class="flex w-full my-4">
                                <button type="submit" class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                                    Sign Up
                                </button>
                            </div>
                        </form>
                        </div>
                    </div>
                    </Center>
                </HomeLayout>
  );
}



