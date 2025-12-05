import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";

import useAuth from "../../hooks/useAuth";
import useAxiosSecured from "../../hooks/useAxiosSecured";
import alert from "../../lib/utils/alert";

const BeARiderPage = () => {
  const warehouses = useLoaderData();
  const regions = [...new Set(warehouses.map((warehouse) => warehouse.region))];
  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();
  const { user } = useAuth();
  const axios = useAxiosSecured();

  const riderRegion = useWatch({ name: "region", control });

  const getWarehousesByRegion = (region) =>
    warehouses
      .filter((warehouse) => warehouse.region === region)
      .map((warehouse) => warehouse.city);

  const beARider = async (data) => {
    try {
      const response = await axios.post("/riders", data);
      switch (response.status) {
        case 201:
          alert.success("Created!", "Rider created successfully.");
          reset();
          break;
        case 409:
          alert.info(
            "Duplicate Rider!",
            `A rider with the email ${data.email} already exists in the database.`
          );
          break;
        default:
          alert.info(
            "Oops!",
            response.data?.message || "Something went wrong! Please try again."
          );
          break;
      }
    } catch (error) {
      alert.error(
        "Oops!",
        error.message || "Something went wrong! Please try again."
      );
    }
  };

  return (
    <div className="p-8 bg-base-100 rounded-xl space-y-6">
      <h2 className="text-4xl font-bold">Be A Rider</h2>
      <p className="max-w-xl">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle.
        <br />
        From personal packages to business shipments — we deliver on time, every
        time.
      </p>
      <form onSubmit={handleSubmit(beARider)} className="p-2 w-full space-y-4">
        <h3 className="text-2xl font-bold">Tell us about yourself</h3>

        <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div className="space-y-1">
            <label className="text-base font-semibold">Full Name:</label>
            <input
              {...register("name", {
                required: "Name is required",
              })}
              defaultValue={user.displayName}
              type="text"
              className="input w-full"
              placeholder="Your Full Name"
            />
            {errors.name && (
              <p className="text-error text-xs font-semibold">
                {errors.name.message}
              </p>
            )}
          </div>
          {/* Age */}
          <div className="space-y-1">
            <label className="text-base font-semibold">Age:</label>
            <input
              {...register("age", {
                required: "Age is required",
              })}
              type="number"
              className="input w-full"
              placeholder="Your Age (As per NID)"
            />
            {errors.age && (
              <p className="text-error text-xs font-semibold">
                {errors.age.message}
              </p>
            )}
          </div>
          {/* Email */}
          <div className="space-y-1">
            <label className="text-base font-semibold">Email:</label>
            <input
              {...register("email", {
                required: "Email is required",
              })}
              defaultValue={user.email}
              readOnly
              type="text"
              className="input w-full"
            />
            {errors.email && (
              <p className="text-error text-xs font-semibold">
                {errors.email.message}
              </p>
            )}
          </div>
          {/* Contact */}
          <div className="space-y-1">
            <label className="text-base font-semibold">Contact:</label>
            <input
              {...register("contact", {
                required: "Contact is required",
              })}
              type="tel"
              className="input w-full"
              placeholder="Your Active Contact (Phone Number)"
            />
            {errors.contact && (
              <p className="text-error text-xs font-semibold">
                {errors.contact.message}
              </p>
            )}
          </div>
          {/* NID */}
          <div className="space-y-1">
            <label className="text-base font-semibold">NID:</label>
            <input
              {...register("nid", {
                required: "NID is required",
              })}
              type="number"
              className="input w-full"
              placeholder="NID Card Number"
            />
            {errors.nid && (
              <p className="text-error text-xs font-semibold">
                {errors.nid.message}
              </p>
            )}
          </div>
          {/* License */}
          <div className="space-y-1">
            <label className="text-base font-semibold">Driver License:</label>
            <input
              {...register("license", {
                required: "Driver License is required",
              })}
              type="number"
              className="input w-full"
              placeholder="Driver License Number"
            />
            {errors.license && (
              <p className="text-error text-xs font-semibold">
                {errors.license.message}
              </p>
            )}
          </div>
          {/* Region */}
          <div className="space-y-1">
            <label className="text-base font-semibold">Region:</label>
            <select
              {...register("region", {
                required: "Region is required",
              })}
              defaultValue="Pick a Region"
              className="select w-full"
            >
              <option disabled>Pick a Region</option>
              {regions.map((region, index) => (
                <option key={index} value={region}>
                  {region}
                </option>
              ))}
            </select>
            {errors.region && (
              <p className="text-error text-xs font-semibold">
                {errors.region.message}
              </p>
            )}
          </div>
          {/* Warehouse */}
          <div className="space-y-1">
            <label className="text-base font-semibold">Warehouse:</label>
            <select
              {...register("warehouse", {
                required: "Warehouse is required",
              })}
              defaultValue="Pick a Warehouse"
              className="select w-full"
            >
              <option disabled>Pick a Warehouse</option>
              {getWarehousesByRegion(riderRegion).map((warehouse, index) => (
                <option key={index} value={warehouse}>
                  {warehouse}
                </option>
              ))}
            </select>
            {errors.warehouse && (
              <p className="text-error text-xs font-semibold">
                {errors.warehouse.message}
              </p>
            )}
          </div>
        </fieldset>

        <button
          type="submit"
          className={`btn ${
            isSubmitting ? "btn-disabled cursor-not-allowed" : "btn-accent"
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default BeARiderPage;
