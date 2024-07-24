"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [particulars, setParticulars] = useState(null);
  const [isValid, setIsValid] = useState(false);

  const onSubmit = (data) => {
    setParticulars(data);
  };

  console.log(particulars);

  return (
    <section className="py-[90px]">
      <div className="bg-white p-6 max-w-xl mx-auto rounded">
        {particulars !== null ? (
          <>
            {!isValid && (
              <div>
                <h4 className="text-xl font-bold mb-2">
                  Please ensure all information is correct
                </h4>
                <div className="text-gray-800 text-sm mb-2 block">
                  Name: {particulars.name}
                </div>
                <div className="text-gray-800 text-sm mb-2 block">
                  Address: {particulars.address}
                </div>
                <div className="text-gray-800 text-sm mb-2 block">
                  Phone: {particulars.phone}
                </div>
                <div className="text-gray-800 text-sm mb-2 block">
                  City: {particulars.city}
                </div>
                <div className="text-gray-800 text-sm mb-2 block">
                  Postal: {particulars.postal}
                </div>
                <div className="text-gray-800 text-sm mb-2 block">
                  Subscription: $ {particulars.subscription}
                </div>
                <div className="text-end mt-2">
                  <button
                    type="button"
                    className="bg-blue-600 px-4 py-2 rounded text-white text-sm"
                    onClick={() => setIsValid(true)}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            )}

            {isValid && (
              <div className="text-center">
                <p className="text-2xl font-bold mb-6">Thank You</p>
                <div className="text-center">
                  <button
                    type="button"
                    className="bg-blue-600 px-4 py-2 rounded text-white text-sm"
                    onClick={() => {
                      setIsValid(false);
                      setParticulars(null);
                    }}
                  >
                    Back To Home
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="mb-2">
              <h4 className="text-xl font-bold">Membership Application</h4>
              <p className="py-2 text-gray-600 text-sm">
                To apply for membership please complete all questions.
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="text-gray-800 text-sm mb-2 block"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name", {
                    required: "The Name field is required",
                  })}
                  className={`w-full text-gray-800 bg-white border ${
                    errors.name ? "border-red-600" : "border-gray-300"
                  } text-sm px-4 py-2.5 rounded focus:outline-none`}
                  placeholder="Your Name"
                />

                {errors.name && (
                  <p className="text-xs font-semibold mt-2 text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="text-gray-800 text-sm mb-2 block"
                >
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  {...register("address", {
                    required: "The Address field is required",
                  })}
                  className={`w-full text-gray-800 bg-white border ${
                    errors.address ? "border-red-600" : "border-gray-300"
                  } text-sm px-4 py-2.5 rounded focus:outline-none`}
                  placeholder="Your Address"
                />

                {errors.address && (
                  <p className="text-xs font-semibold mt-2 text-red-600">
                    {errors.address.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="text-gray-800 text-sm mb-2 block"
                >
                  Phone No
                </label>
                <input
                  id="phone"
                  type="text"
                  {...register("phone", {
                    required: "This Phone field is required",
                  })}
                  className={`w-full text-gray-800 bg-white border ${
                    errors.phone ? "border-red-600" : "border-gray-300"
                  } text-sm px-4 py-2.5 rounded focus:outline-none`}
                  placeholder="Phone No"
                />

                {errors.phone && (
                  <p className="text-xs font-semibold mt-2 text-red-600">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label className="text-gray-800 text-sm mb-2 block">City</label>
                <input
                  type="text"
                  {...register("city", {
                    required: "This City field is required",
                  })}
                  className={`w-full text-gray-800 bg-white border ${
                    errors.city ? "border-red-600" : "border-gray-300"
                  } text-sm px-4 py-2.5 rounded`}
                  placeholder="City"
                />

                {errors.city && (
                  <p className="text-xs font-semibold mt-2 text-red-600">
                    {errors.city.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="postal"
                  className="text-gray-800 text-sm mb-2 block"
                >
                  Postal Code
                </label>
                <input
                  id="postal"
                  type="text"
                  {...register("postal", {
                    required: "This Postal is required",
                  })}
                  className={`w-full text-gray-800 bg-white border ${
                    errors.postal ? "border-red-600" : "border-gray-300"
                  } text-sm px-4 py-2.5 rounded focus:outline-none`}
                  placeholder="Postal Code"
                />

                {errors.postal && (
                  <p className="text-xs font-semibold mt-2 text-red-600">
                    {errors.postal.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label className="text-gray-800 text-sm mb-2 block">
                  Country
                </label>
                <select
                  {...register("country", {
                    required: "Please select a country",
                  })}
                  className={`w-full text-gray-800 bg-white border ${
                    errors.country ? "border-red-600" : "border-gray-300"
                  } text-sm px-4 py-2.5 rounded focus:outline-none`}
                >
                  <option value="">Select Country</option>
                  <option value="United States">United States</option>
                  <option value="German">German</option>
                </select>

                {errors.country && (
                  <p className="text-xs font-semibold mt-2 text-red-600">
                    {errors.country.message}
                  </p>
                )}
              </div>

              <div className="mb-2">
                <h4 className="text-xl font-bold">Subscription Plan</h4>
                <p className="py-2 text-gray-600 text-sm mb-4">
                  Please Choose Subscription Plan
                </p>
                <div>
                  <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                      <div className="flex items-center ps-3">
                        <input
                          id="list-radio-id"
                          {...register("subscription")}
                          type="radio"
                          value="30.00"
                          defaultChecked
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor="list-radio-id"
                          className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Gold Membership{" "}
                          <span className="text-gray-500 text-sm ml-2">
                            $30.00/Month
                          </span>
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                      <div className="flex items-center ps-3">
                        <input
                          id="list-radio-military"
                          {...register("subscription")}
                          type="radio"
                          value="20.00"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor="list-radio-military"
                          className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Silver Membership{" "}
                          <span className="text-gray-500 text-sm ml-2">
                            $20.00/Month
                          </span>
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                      <div className="flex items-center ps-3">
                        <input
                          id="list-radio-passport"
                          type="radio"
                          {...register("subscription")}
                          value="10.00"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor="list-radio-passport"
                          className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Bronze Membership{" "}
                          <span className="text-gray-500 text-sm ml-2">
                            $10.00/Month
                          </span>
                        </label>
                      </div>
                    </li>
                  </ul>
                  {errors.subscription && (
                    <p className="text-xs font-semibold mt-2 text-red-600">
                      {errors.subscription.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-blue-600 hover:bg-blue-800 focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
