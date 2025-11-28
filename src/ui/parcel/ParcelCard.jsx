import {
  HiUser,
  HiMail,
  HiLocationMarker,
  HiPhone,
  HiMap,
  HiArchive,
  HiInformationCircle,
  HiCash,
  HiClipboardList,
} from "react-icons/hi";

const ParcelCard = ({ parcel }) => {
  return (
    <div className="card w-full bg-base-100 shadow-lg border border-base-300 hover:shadow-xl transition-shadow rounded-xl">
      <div className="card-body space-y-3">
        {/* Parcel title */}
        <h2 className="card-title text-xl font-bold text-primary flex items-center gap-2">
          <HiClipboardList className="w-6 h-6" />
          {parcel.parcelName} ({parcel.parcelType})
        </h2>
        <p className="text-sm flex items-center gap-1">
          <HiMap className="w-4 h-4 text-primary" /> <strong>Weight:</strong>{" "}
          {parcel.parcelWeight} kg
        </p>

        <div className="divider my-1"></div>

        {/* Sender info */}
        <h3 className="font-semibold text-lg text-primary flex items-center gap-2">
          <HiUser className="w-5 h-5" /> Sender
        </h3>
        <p className="text-sm space-y-1">
          <span className="flex items-center gap-1">
            <HiUser className="w-4 h-4 text-primary" /> {parcel.senderName}
          </span>
          <span className="flex items-center gap-1">
            <HiMail className="w-4 h-4 text-primary" /> {parcel.senderEmail}
          </span>
          <span className="flex items-center gap-1">
            <HiLocationMarker className="w-4 h-4 text-primary" />{" "}
            {parcel.senderAddress}
          </span>
          <span className="flex items-center gap-1">
            <HiPhone className="w-4 h-4 text-primary" /> {parcel.senderContact}
          </span>
          <span className="flex items-center gap-1">
            <HiMap className="w-4 h-4 text-primary" /> {parcel.senderRegion},{" "}
            {parcel.senderDistrict}
          </span>
          <span className="flex items-center gap-1">
            <HiArchive className="w-4 h-4 text-primary" />{" "}
            {parcel.senderWarehouse}
          </span>
          <span className="flex items-center gap-1">
            <HiInformationCircle className="w-4 h-4 text-primary" />{" "}
            {parcel.pickupInstruction}
          </span>
        </p>

        <div className="divider my-1"></div>

        {/* Receiver info */}
        <h3 className="font-semibold text-lg text-primary flex items-center gap-2">
          <HiUser className="w-5 h-5" /> Receiver
        </h3>
        <p className="text-sm space-y-1">
          <span className="flex items-center gap-1">
            <HiUser className="w-4 h-4 text-primary" /> {parcel.receiverName}
          </span>
          <span className="flex items-center gap-1">
            <HiMail className="w-4 h-4 text-primary" /> {parcel.receiverEmail}
          </span>
          <span className="flex items-center gap-1">
            <HiLocationMarker className="w-4 h-4 text-primary" />{" "}
            {parcel.receiverAddress}
          </span>
          <span className="flex items-center gap-1">
            <HiPhone className="w-4 h-4 text-primary" />{" "}
            {parcel.receiverContact}
          </span>
          <span className="flex items-center gap-1">
            <HiMap className="w-4 h-4 text-primary" /> {parcel.receiverRegion},{" "}
            {parcel.receiverDistrict}
          </span>
          <span className="flex items-center gap-1">
            <HiArchive className="w-4 h-4 text-primary" />{" "}
            {parcel.receiverWarehouse}
          </span>
        </p>

        <div className="divider my-1"></div>

        {/* Charge */}
        <p className="text-right font-bold text-lg flex items-center justify-end gap-2">
          <HiCash className="w-5 h-5 text-primary" />
          <span className="text-primary">৳{parcel.charge}</span>
        </p>
      </div>
    </div>
  );
};

export default ParcelCard;
