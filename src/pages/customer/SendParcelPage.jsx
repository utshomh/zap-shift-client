import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";

import calculateCharge from "../../lib/utils/calculateCharge";
import alert from "../../lib/utils/alert";
import useAxiosSecured from "../../hooks/useAxiosSecured";

const SendParcelPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm();
  const axios = useAxiosSecured();
  const warehouses = useLoaderData();
  const regions = [...new Set(warehouses.map((warehouse) => warehouse.region))];

  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const getDistrictsByRegion = (region) =>
    warehouses
      .filter((warehouse) => warehouse.region === region)
      .map((warehouse) => warehouse.district);

  const sendParcel = async (data) => {
    const isDocument = data.parcelType === "document";
    const isSameCity = data.senderDistrict === data.receiverDistrict;
    const weight = data.parcelWeight;
    const charge = calculateCharge({ isDocument, isSameCity, weight });
    await alert.confirm(
      "Agree with the cost?",
      `Your parcel delivery charge will be: ${charge}. Do you wanna proceed?`,
      async () => {
        try {
          const insertedParcel = await axios
            .post("/parcels", { ...data, charge })
            .then((res) => res.data);
          alert.success(
            "Added!",
            `Successfully added your parcel: ${insertedParcel.parcelName}.`
          );
          reset();
        } catch (error) {
          alert.error(
            "Oops!",
            error.message || "Something went wrong! Please try again."
          );
        }
      }
    );
  };

  return (
    <div className="">
      <div className="p-8 bg-base-100 rounded-xl space-y-6">
        <h2 className="text-4xl font-bold">Send A Parcel</h2>
        <form
          onSubmit={handleSubmit(sendParcel)}
          className="p-2 w-full space-y-4"
        >
          <h3 className="text-2xl font-bold">Enter your parcel details</h3>
          {/* Parcel Type */}
          <div className="flex items-center gap-4 flex-wrap">
            <label className="flex items-center gap-2">
              <input
                {...register("parcelType")}
                type="radio"
                value="document"
                className="radio text-success"
                defaultChecked
              />
              Document
            </label>
            <label className="flex items-center gap-2">
              <input
                {...register("parcelType")}
                type="radio"
                value="non-document"
                className="radio text-success"
              />
              Non Document
            </label>
          </div>

          <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Parcel Name */}
            <div className="space-y-1">
              <label className="text-base font-semibold">Parcel Name:</label>
              <input
                {...register("parcelName", {
                  required: "Parcel Name is required",
                })}
                type="text"
                className="input w-full"
                placeholder="Parcel Name"
              />
              {errors.parcelName && (
                <p className="text-error text-xs font-semibold">
                  {errors.parcelName.message}
                </p>
              )}
            </div>
            {/* Parcel Weight */}
            <div className="space-y-1">
              <label className="text-base font-semibold">Parcel Weight:</label>
              <input
                {...register("parcelWeight", {
                  required: "Weight is required",
                  min: {
                    value: 0.00001,
                    message: "Weight must be greater than 0 kg",
                  },
                  valueAsNumber: true,
                })}
                type="number"
                step="0.01"
                className="input w-full"
                placeholder="Parcel Weight"
              />
              {errors.parcelWeight && (
                <p className="text-error text-xs font-semibold">
                  {errors.parcelWeight.message}
                </p>
              )}
            </div>
          </fieldset>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Sender Form Fields */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Sender Details</h3>
              <fieldset className="grid grid-cols-1 xl:grid-cols-2 gap-2">
                {/* Sender Name */}
                <div className="space-y-1">
                  <label className="text-base font-semibold">
                    Sender Name:
                  </label>
                  <input
                    {...register("senderName", {
                      required: "Sender Name is required",
                    })}
                    type="text"
                    className="input w-full"
                    placeholder="Sender Name"
                  />
                  {errors.senderName && (
                    <p className="text-error text-xs font-semibold">
                      {errors.senderName.message}
                    </p>
                  )}
                </div>
                {/* Sender Email */}
                <div className="space-y-1">
                  <label className="text-base font-semibold">
                    Sender Email:
                  </label>
                  <input
                    {...register("senderEmail", {
                      required: "Sender Email is required",
                    })}
                    type="email"
                    className="input w-full"
                    placeholder="Sender Email"
                  />
                  {errors.senderEmail && (
                    <p className="text-error text-xs font-semibold">
                      {errors.senderEmail.message}
                    </p>
                  )}
                </div>
                {/* Sender Address */}
                <div className="space-y-1">
                  <label className="text-base font-semibold">
                    Sender Address:
                  </label>
                  <input
                    {...register("senderAddress", {
                      required: "Sender Address is required",
                    })}
                    type="text"
                    className="input w-full"
                    placeholder="Sender Address"
                  />
                  {errors.senderAddress && (
                    <p className="text-error text-xs font-semibold">
                      {errors.senderAddress.message}
                    </p>
                  )}
                </div>
                {/* Sender Contact */}
                <div className="space-y-1">
                  <label className="text-base font-semibold">
                    Sender Contact No:
                  </label>
                  <input
                    {...register("senderContact", {
                      required: "Sender Contact is required",
                    })}
                    type="tel"
                    className="input w-full"
                    placeholder="Sender Contact"
                  />
                  {errors.senderContact && (
                    <p className="text-error text-xs font-semibold">
                      {errors.senderContact.message}
                    </p>
                  )}
                </div>
                {/* Sender Region */}
                <div className="space-y-1">
                  <label className="text-base font-semibold">
                    Sender Region:
                  </label>
                  <select
                    {...register("senderRegion", {
                      required: "Sender Region is required",
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
                  {errors.senderRegion && (
                    <p className="text-error text-xs font-semibold">
                      {errors.senderRegion.message}
                    </p>
                  )}
                </div>
                {/* Sender District */}
                <div className="space-y-1">
                  <label className="text-base font-semibold">
                    Sender District:
                  </label>
                  <select
                    {...register("senderDistrict", {
                      required: "Sender District is required",
                    })}
                    defaultValue="Pick a District"
                    className="select w-full"
                  >
                    <option disabled>Pick a District</option>
                    {getDistrictsByRegion(senderRegion).map((region) => (
                      <option key={region} value={region}>
                        {region}
                      </option>
                    ))}
                  </select>
                  {errors.senderDistrict && (
                    <p className="text-error text-xs font-semibold">
                      {errors.senderDistrict.message}
                    </p>
                  )}
                </div>
                {/* Sender Warehouse */}
                <div className="space-y-1">
                  <label className="text-base font-semibold">
                    Sender Warehouse:
                  </label>
                  <select
                    {...register("senderWarehouse", {
                      required: "Sender Warehouse is required",
                    })}
                    defaultValue="Pick a Warehouse"
                    className="select w-full"
                  >
                    <option disabled>Pick a Warehouse</option>
                    {warehouses.map((warehouse, index) => (
                      <option key={index} value={warehouse.city}>
                        {warehouse.city}
                      </option>
                    ))}
                  </select>
                  {errors.senderWarehouse && (
                    <p className="text-error text-xs font-semibold">
                      {errors.senderWarehouse.message}
                    </p>
                  )}
                </div>
                {/* Pickup Instruction */}
                <div className="space-y-1">
                  <label className="text-base font-semibold">
                    Pickup Instruction:
                  </label>
                  <textarea
                    {...register("pickupInstruction", {
                      required: "Pickup Instruction is required",
                    })}
                    className="textarea w-full"
                    placeholder="Pickup Instruction"
                  />
                  {errors.pickupInstruction && (
                    <p className="text-error text-xs font-semibold">
                      {errors.pickupInstruction.message}
                    </p>
                  )}
                </div>
              </fieldset>
            </div>
            {/* Receiver Form Fields */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Receiver Details</h3>
              <fieldset className="grid grid-cols-1 xl:grid-cols-2 gap-2">
                {/* Receiver Name */}
                <div className="space-y-1">
                  <label className="text-base font-semibold">
                    Receiver Name:
                  </label>
                  <input
                    {...register("receiverName", {
                      required: "Receiver Name is required",
                    })}
                    type="text"
                    className="input w-full"
                    placeholder="Receiver Name"
                  />
                  {errors.receiverName && (
                    <p className="text-error text-xs font-semibold">
                      {errors.receiverName.message}
                    </p>
                  )}
                </div>
                {/* Receiver Email */}
                <div className="space-y-1">
                  <label className="text-base font-semibold">
                    Receiver Email:
                  </label>
                  <input
                    {...register("receiverEmail", {
                      required: "Receiver Email is required",
                    })}
                    type="email"
                    className="input w-full"
                    placeholder="Receiver Email"
                  />
                  {errors.receiverEmail && (
                    <p className="text-error text-xs font-semibold">
                      {errors.receiverEmail.message}
                    </p>
                  )}
                </div>
                {/* Receiver Address */}
                <div className="space-y-1">
                  <label className="text-base font-semibold">
                    Receiver Address:
                  </label>
                  <input
                    {...register("receiverAddress", {
                      required: "Receiver Address is required",
                    })}
                    type="text"
                    className="input w-full"
                    placeholder="Receiver Address"
                  />
                  {errors.receiverAddress && (
                    <p className="text-error text-xs font-semibold">
                      {errors.receiverAddress.message}
                    </p>
                  )}
                </div>
                {/* Receiver Contact */}
                <div className="space-y-1">
                  <label className="text-base font-semibold">
                    Receiver Contact No:
                  </label>
                  <input
                    {...register("receiverContact", {
                      required: "Receiver Contact is required",
                    })}
                    type="tel"
                    className="input w-full"
                    placeholder="Receiver Contact"
                  />
                  {errors.receiverContact && (
                    <p className="text-error text-xs font-semibold">
                      {errors.receiverContact.message}
                    </p>
                  )}
                </div>
                {/* Receiver Region */}
                <div className="space-y-1">
                  <label className="text-base font-semibold">
                    Receiver Region:
                  </label>
                  <select
                    {...register("receiverRegion", {
                      required: "Receiver Region is required",
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
                  {errors.receiverRegion && (
                    <p className="text-error text-xs font-semibold">
                      {errors.receiverRegion.message}
                    </p>
                  )}
                </div>
                {/* Receiver District */}
                <div className="space-y-1">
                  <label className="text-base font-semibold">
                    Receiver District:
                  </label>
                  <select
                    {...register("receiverDistrict", {
                      required: "Receiver District is required",
                    })}
                    defaultValue="Pick a District"
                    className="select w-full"
                  >
                    <option disabled>Pick a District</option>
                    {getDistrictsByRegion(receiverRegion).map((region) => (
                      <option key={region} value={region}>
                        {region}
                      </option>
                    ))}
                  </select>
                  {errors.receiverDistrict && (
                    <p className="text-error text-xs font-semibold">
                      {errors.receiverDistrict.message}
                    </p>
                  )}
                </div>
                {/* Receiver Warehouse*/}
                <div className="space-y-1">
                  <label className="text-base font-semibold">
                    Receiver Warehouse:
                  </label>
                  <select
                    {...register("receiverWarehouse", {
                      required: "Receiver Warehouse is required",
                    })}
                    defaultValue="Pick a Warehouse"
                    className="select w-full"
                  >
                    <option disabled>Pick a Warehouse</option>
                    {warehouses.map((warehouse, index) => (
                      <option key={index} value={warehouse.city}>
                        {warehouse.city}
                      </option>
                    ))}
                  </select>
                  {errors.receiverWarehouse && (
                    <p className="text-error text-xs font-semibold">
                      {errors.receiverWarehouse.message}
                    </p>
                  )}
                </div>
              </fieldset>
            </div>
          </div>

          <button
            type="submit"
            className={`btn ${
              isSubmitting ? "btn-disabled cursor-not-allowed" : "btn-accent"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : " Send Parcel"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendParcelPage;
