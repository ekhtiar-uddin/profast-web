import { ChevronDown } from "lucide-react";

const RiderForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form action="">
      <div className="grid grid-cols-1 xs:grid-cols-2 gap-5">
        <div>
          <h3 className="formLevel">Your Name</h3>
          <input
            type="text"
            placeholder="Your Name"
            className="riderFormInput"
          />
        </div>
        <div>
          <h3 className="formLevel">Your age</h3>
          <input
            type="text"
            placeholder="Your age"
            className="riderFormInput"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 gap-5">
        <div>
          <h3 className="formLevel">Your Email</h3>
          <input
            type="text"
            placeholder="Your Email"
            className="riderFormInput"
          />
        </div>

        <div>
          <h3 className="formLevel">Your Region</h3>
          <div className="relative">
            <input
              type="text"
              placeholder="Select your region"
              className="riderFormInput mb-0 pr-10"
            />

            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 gap-5">
        <div>
          <h3 className="formLevel">NID No</h3>
          <input type="text" placeholder="NID" className="riderFormInput" />
        </div>
        <div>
          <h3 className="formLevel">Contact</h3>
          <input type="text" placeholder="Contact" className="riderFormInput" />
        </div>
      </div>

      <div>
        <h3 className="formLevel">Which wire-house you want to work?</h3>
        <input
          type="text"
          placeholder="Select wire-house"
          className="riderFormInput w-full"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="rounded-[6px] cursor-pointer text-sm bg-p1 py-2 w-full font-bold text-[#000] "
      >
        Submit
      </button>
    </form>
  );
};

export default RiderForm;
