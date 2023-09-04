'use client';

import React, { useEffect, useState } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';

import { ErrorMessage } from '@hookform/error-message';

import emailjs from '@emailjs/browser';

import { BackButton, ThankYouState } from './components';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  message?: string;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    getFieldState,
    formState: { errors: invalid, isSubmitSuccessful }
  } = useForm<FormValues>();

  console.log(invalid);

  const sendEmail: SubmitHandler<FormValues> = (formData) => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_TEMPLATE_ID || '',
        formData,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="h-screen flex justify-center items-center flex-col">
      {isSubmitSuccessful ? (
        <ThankYouState />
      ) : (
        <>
          <p className="text-5xl mb-4">Contact Me</p>
          <div className="flex flex-col w-4/5 h-4/5 p-[1px] rounded-2xl bg-gradient-to-r from-darkBlue to-neonBlue lg:w-2/5 2xl:h-2/3">
            <form
              onSubmit={handleSubmit(sendEmail)}
              className="bg-dirtyNeonBlue rounded-2xl h-full px-10 py-6 flex flex-col"
            >
              <div className="flex flex-col">
                <div className="h-[100px]">
                  <label
                    htmlFor="firstName"
                    className="ml-3"
                  >
                    First Name
                  </label>
                  <div
                    className={
                      getFieldState('firstName').invalid
                        ? 'p-[1px] rounded-2xl bg-gradient-to-r from-red-600 to-orange-800'
                        : 'p-[1px] rounded-2xl bg-gradient-to-r from-darkBlue to-neonBlue'
                    }
                  >
                    <input
                      {...register('firstName', { required: 'This field is required.' })}
                      placeholder="First Name"
                      className="bg-dirtyNeonBlue p-3 rounded-2xl focus-visible:outline-none w-full"
                      id="firstName"
                    />
                  </div>
                  <div className="text-red-600 pl-2">
                    <ErrorMessage
                      errors={invalid}
                      name="firstName"
                    />
                  </div>
                </div>
                <div className="h-[100px]">
                  <label
                    htmlFor="lastName"
                    className="ml-3"
                  >
                    Last Name
                  </label>
                  <div
                    className={
                      getFieldState('lastName').invalid
                        ? 'p-[1px] rounded-2xl bg-gradient-to-r from-red-600 to-orange-800'
                        : 'p-[1px] rounded-2xl bg-gradient-to-r from-darkBlue to-neonBlue'
                    }
                  >
                    <input
                      {...register('lastName', { required: 'This field is required.' })}
                      placeholder="Last Name"
                      className="bg-dirtyNeonBlue p-3 focus-visible:outline-none w-full rounded-2xl"
                      id="lastName"
                    />
                  </div>
                  <div className="text-red-600 pl-2">
                    <ErrorMessage
                      errors={invalid}
                      name="lastName"
                    />
                  </div>
                </div>
                <div className="h-[100px]">
                  <label
                    htmlFor="email"
                    className="ml-3"
                  >
                    Email Adress
                  </label>
                  <div
                    className={
                      getFieldState('email').invalid
                        ? 'p-[1px] rounded-2xl bg-gradient-to-r from-red-600 to-orange-800'
                        : 'p-[1px] rounded-2xl bg-gradient-to-r from-darkBlue to-neonBlue'
                    }
                  >
                    <input
                      {...register('email', {
                        required: 'This field is required',
                        validate: {
                          maxLength: (email) => email.length <= 50 || 'The email should have at most 50 characters',
                          matchPattern: (email) =>
                            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email) ||
                            'Email address must be a valid address.'
                        }
                      })}
                      placeholder="Email Adress"
                      className="bg-dirtyNeonBlue p-3 focus-visible:outline-none w-full rounded-2xl"
                      id="email"
                    />
                  </div>
                  <div className="text-red-600 pl-2">
                    <ErrorMessage
                      errors={invalid}
                      name="email"
                    />
                  </div>
                </div>

                <label
                  htmlFor="message"
                  className="ml-3"
                >
                  Message
                </label>
                <div className="p-[1px] rounded-2xl bg-gradient-to-r from-darkBlue to-neonBlue mb-4">
                  <textarea
                    {...register('message')}
                    placeholder="Message"
                    rows={3}
                    className="bg-dirtyNeonBlue p-3 focus-visible:outline-none resize-none w-full rounded-2xl h-full"
                    id="message"
                  />
                </div>
              </div>
              <div className="flex my-auto">
                <input
                  type="submit"
                  value="Submit"
                  className="w-3/5 rounded-3xl bg-gradient-to-r from-darkBlue to-neonBlue px-7 py-3 font-semibold mx-auto shadow-md hover:shadow-lg hover:shadow-blue-500/50 shadow-blue-500/50 active:shadow-none"
                />
              </div>
            </form>
          </div>
          <BackButton />
        </>
      )}
    </div>
  );
};

export default Form;
