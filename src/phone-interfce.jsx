import {
  EllipsisVertical,
  ChevronLeft,
  ChevronRight,
  Circle,
} from "lucide-react";

function PhoneInterface() {
  return (
    <div className=" relative z-10 font-Rubik bg-white self-center p-2 rounded-4xl  text-[10px] mt-15 shadow-black/30 shadow-2xl">
      <div className="absolute top-0 bg-white rounded-full p-3.5 w-30 right-[30%] "></div>

      <div className="bg-Gray100app p-2 rounded-4xl flex flex-col gap-2 shadow-2xs shadow-black/10">
        {/* PROFILE SECTION */}
        <div className="flex justify-between items-center bg-linear-to-r from-Purple500 via-Purple600 to-Purple600 px-4 pb-4 pt-7 rounded-t-4xl -mx-2 -mt-2 w-70 shadow-Purple950/40 shadow-2xs">
          <div className="flex items-center gap-2">
            <ChevronLeft size={16} color="white" />
            <img
              src="./images/avatar.jpg"
              alt="avatar"
              className="w-7 h-7 rounded-full border border-white"
            />
            <div>
              <p className="font-semibold text-White">Samuel Green</p>
              <p className="text-[5px] text-Purple300">Available to walk</p>
            </div>
          </div>
          <EllipsisVertical size={12} color="white" />
        </div>

        {/* CHAT SECTION */}
        <div className="flex justify-start w-45">
          <p className="bg-Gray300 text-Purple600 p-2 rounded-2xl max-w-50">
            That sounds great. I’d be happy with that.
          </p>
        </div>

        <div className="flex justify-start w-45">
        <p className="bg-Gray300 text-Purple600 p-2 rounded-2xl max-w-50">
          Could you send over some pictures of your dog, please?
        </p>
        </div>

       
        <div className="flex justify-end">
          <div className="max-w-50 flex gap-1">
            <img
              src="./images/dog-image-1.jpg"
              alt="image"
              className="w-10 h-10 rounded-md"
            />
            <img
              src="./images/dog-image-2.jpg"
              alt="image"
              className="w-10 h-10 rounded-md"
            />
            <img
              src="./images/dog-image-3.jpg"
              alt="image"
              className="w-10 h-10 rounded-md"
            />
          </div>
        </div>
        <div className="flex justify-end ">
          <p className="max-w-45 p-2 text-Gray300 rounded-2xl bg-white">
            Here are a few pictures. She’s a happy girl!
          </p>
        </div>
        <div className="flex justify-end">
          <p className="max-w-45 p-2 text-Gray300 rounded-2xl bg-white">
            Can you make it?
          </p>
        </div>

        <div className="flex justify-start w-45">
          <p className="bg-Gray300 text-Purple600 p-2 rounded-2xl max-w-50">
            She looks so happy! The time we discussed works. How long shall I
            take her out for?
          </p>
        </div>

        <div className="flex justify-start w-50">
        <div className="bg-linear-to-r  from-Purple500 via-Purple600 to-Purple600 flex justify-between w-50 p-2 rounded-2xl items-center">
          <div className="flex items-center gap-2">
            <Circle size={18} color="hsl(206, 6%, 79%)" />
            <p className="text-Gray100app">30 minute walk</p>
          </div>
          <p className="font-bold text-lg text-white">$29</p>
        </div>
    </div>

    <div className="flex justify-start w-50">
        <div className="bg-linear-to-r  from-Purple500 via-Purple600 to-Purple600 flex justify-between w-50 p-2 rounded-2xl items-center">
          <div className="flex items-center gap-2">
            <Circle size={18} color="hsl(206, 6%, 79%)" />
            <p className="text-Gray100app">1 hour walk</p>
          </div>
          <p className="font-bold text-lg text-white">$49</p>
        </div>
        </div>

        {/* TYPE MESSAGE SECTION */}
        <div className="flex justify-between items-center bg-white p-1 px-4 rounded-full">
          <p className="text-Gray300">Type a message...</p>
          <div className="bg-Purple950 -mx-2 p-1 rounded-full">
            <ChevronRight size={18} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default PhoneInterface;
