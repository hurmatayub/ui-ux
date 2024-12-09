import * as React from "react";
import { InputField } from "./InputField";
import { StepHeader } from "./StepHeader";
import { PaymentMethod } from "./PaymentMethod";
import { Checkbox } from "./Checkbox";

export const RentalForm: React.FC = () => {
  return (
    <main className="overflow-hidden p-8 bg-neutral-100 max-md:px-5">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
          <section className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
            <div className="flex overflow-hidden flex-col p-6 w-full bg-white rounded-xl max-w-[852px]">
              <StepHeader
                title="Billing Info"
                subtitle="Please enter your billing info"
                step="1"
              />

              <div className="flex gap-5 max-md:flex-col">
                <div className="w-6/12 max-md:w-full">
                  <InputField label="Name" placeholder="Your name" id="name" />
                </div>
                <div className="w-6/12 max-md:w-full">
                  <InputField
                    label="Phone Number"
                    placeholder="Phone number"
                    id="phone"
                    type="tel"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-8 mt-6">
                <InputField
                  label="Address"
                  placeholder="Address"
                  id="address"
                />
                <InputField
                  label="Town / City"
                  placeholder="Town or city"
                  id="city"
                />
              </div>
            </div>

            {/* Payment Section */}
            <section className="flex overflow-hidden flex-col p-6 mt-8 w-full bg-white rounded-xl">
              <StepHeader
                title="Payment Method"
                subtitle="Please enter your payment method"
                step="3"
              />

              <PaymentMethod
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/268171632e06097739f5c14b1c12f2a29a892892019f08ee6ec3a62173eef2af?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546"
                name="PayPal"
                logo="https://cdn.builder.io/api/v1/image/assets/TEMP/968c065a56f73c3c0e584bc3382b25aab9e2b4cba26feff0c5a330b4ac706273?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546"
              />

              <PaymentMethod
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/268171632e06097739f5c14b1c12f2a29a892892019f08ee6ec3a62173eef2af?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546"
                name="Bitcoin"
                logo="https://cdn.builder.io/api/v1/image/assets/TEMP/0cf339249ace74fad8749265f63290b0f50acee4795b00d4ec15f97007cd547a?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546"
              />
            </section>

            {/* Confirmation Section */}
            <section className="flex overflow-hidden flex-col p-6 mt-8 w-full bg-white rounded-xl">
              <StepHeader
                title="Confirmation"
                subtitle="We are getting to the end. Just few clicks and your rental is ready!"
                step="4"
              />

              <Checkbox text="I agree with sending Marketing and newsletter emails. No spam, promised!" />
              <Checkbox text="I agree with our terms and conditions and privacy policy." />

              <button
                className="px-5 mt-8 text-base font-bold text-center text-white bg-blue-600 rounded-xl min-h-[56px] w-[76px]"
                aria-label="Complete rental"
              >
                Rent Now
              </button>
            </section>
          </section>
        </div>

        {/* Rental Summary */}
        <aside className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden flex-col p-6 mx-auto w-full bg-white rounded-xl">
            <h2 className="text-xl font-bold tracking-tight text-gray-900">
              Rental Summary
            </h2>
            <p className="mt-1 text-sm font-medium tracking-tight leading-5 text-slate-400">
              Prices may change depending on the length of the rental and the
              price of your rental car.
            </p>

            <div className="flex gap-4 self-start mt-8">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f818bd76911b34254af1525f1f22c3abbe5b4ea3a610aa33c4b0d0b2d5033f2b?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546"
                alt="Nissan GT-R"
                className="object-contain shrink-0 max-w-full aspect-[1.22] w-[132px]"
              />
              <div className="flex overflow-hidden flex-col my-auto">
                <h3 className="text-3xl font-bold tracking-tighter text-gray-900">
                  Nissan GT - R
                </h3>
                <div className="flex gap-2 items-center mt-2">
                  <div className="flex gap-0.5 items-center">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <img
                        key={i}
                        src={`http://b.io/ext_${i <= 4 ? "11" : "12"}-`}
                        alt=""
                        className="w-5 aspect-square"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium tracking-tight text-slate-500">
                    440+ Reviewer
                  </span>
                </div>
              </div>
            </div>

            <hr className="mt-8 border-slate-300 border-opacity-40" />

            <div className="mt-8 space-y-6">
              <div className="flex justify-between text-base tracking-tight">
                <span className="font-medium text-slate-400">Subtotal</span>
                <span className="font-semibold text-gray-900">$80.00</span>
              </div>
              <div className="flex justify-between text-base tracking-tight">
                <span className="font-medium text-slate-400">Tax</span>
                <span className="font-semibold text-gray-900">$0</span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold tracking-tight text-gray-900">
                Total Rental Price
              </h3>
              <p className="mt-1 text-sm font-medium tracking-tight text-slate-400">
                Overall price and includes rental discount
              </p>
              <span className="block mt-4 text-3xl font-bold text-right text-gray-900">
                $80.00
              </span>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};
