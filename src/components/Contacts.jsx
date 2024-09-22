import { useState } from "react";
import { Mail, Phone } from "lucide-react";

// Predefined list of countries
const countries = [
  "United States", "Canada", "United Kingdom", "Germany", "France", "India", "China",
  "Japan", "Australia", "Brazil", "Mexico", "South Africa", "Russia", "Italy", "Spain",
  "Other" // "Other" triggers the additional input field
];

const Contacts = () => {
  // State to handle the conditional "Other" country input field
  const [selectedCountry, setSelectedCountry] = useState("");
  const [otherCountry, setOtherCountry] = useState("");

  // Handler for country change
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };
const [phoneNumber, setPhoneNumber] = useState("");

const handlePhoneChange = (e) => {
  const value = e.target.value;
  // Only allow digits (remove non-digit characters)
  if (/^\d*$/.test(value)) {
    setPhoneNumber(value);
  }
};

  return (
    <div className="mt-20 px-4 sm:px-8 lg:px-16">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Get in{" "}
        <span className="bg-gradient-to-r from-[#3a5a40] to-[#DAD7CD] text-transparent bg-clip-text">
          Touch.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <form className="space-y-6">
            {/* Full Name Field */}
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-neutral-500">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-3 py-2 bg-neutral-900 text-white border border-neutral-500 rounded-md shadow-sm focus:outline-none focus:border-[#3a5a40]"
                required
              />
            </div>

            {/* Email Address Field */}
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-neutral-500">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 bg-neutral-900 text-white border border-neutral-500 rounded-md shadow-sm focus:outline-none focus:border-[#3a5a40]"
                required
              />
            </div>

            {/* Phone Number Field */}
            <div>
  <label htmlFor="phone" className="block text-lg font-medium text-neutral-500">
    Phone Number
  </label>
  <input
    type="tel"
    id="phone"
    name="phone"
    value={phoneNumber}
    onChange={handlePhoneChange}
    className="mt-1 block w-full px-3 py-2 bg-neutral-900 text-white border border-neutral-500 rounded-md shadow-sm focus:outline-none focus:border-[#3a5a40]"
    required
  />
</div>

            {/* Country Dropdown Field */}
            <div>
              <label htmlFor="country" className="block text-lg font-medium text-neutral-500">
                Country
              </label>
              <select
                id="country"
                name="country"
                className="mt-1 block w-full px-3 py-2 bg-neutral-900 text-white border border-neutral-500 rounded-md shadow-sm focus:outline-none focus:border-[#3a5a40]"
                onChange={handleCountryChange}
                required
              >
                <option value="" disabled selected>
                  Select your country
                </option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            {/* Conditional "Other" Country Input Field */}
            {selectedCountry === "Other" && (
              <div className="mt-4">
                <label htmlFor="otherCountry" className="block text-lg font-medium text-neutral-500">
                  Please specify your country
                </label>
                <input
                  type="text"
                  id="otherCountry"
                  name="otherCountry"
                  value={otherCountry}
                  onChange={(e) => setOtherCountry(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 bg-neutral-900 text-white border border-neutral-500 rounded-md shadow-sm focus:outline-none focus:border-[#3a5a40]"
                  required
                />
              </div>
            )}

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-neutral-500">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full px-3 py-2 bg-neutral-900 text-white border border-neutral-500 rounded-md shadow-sm focus:outline-none focus:border-[#3a5a40]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-gradient-to-r from-[#3a5a40] to-[#DAD7CD] text-neutral-900 px-4 py-2 rounded-md hover:bg-[#3a5a40] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3a5a40] transition-transform transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="pt-12 w-full lg:w-1/2">
          <div className="flex mb-6">
            <div className="text-[#3A5A40] mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
              <Mail />
            </div>
            <div>
              <h5 className="mt-1 mb-2 text-xl">Email</h5>
              <p className="text-md text-neutral-500">example@email.com</p>
            </div>
          </div>
          <div className="flex mb-6">
            <div className="text-[#3A5A40] mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
              <Phone />
            </div>
            <div>
              <h5 className="mt-1 mb-2 text-xl">Phone</h5>
              <p className="text-md text-neutral-500">+123 456 7890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
