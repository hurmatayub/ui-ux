import * as React from "react";
import { InputField } from "./InputField";
import { StepHeader } from "./StepHeader";
import { PaymentMethod } from "./PaymentMethod";
import { RentalSummary } from "./RentalSummary";

export const RentalForm: React.FC = () => {
  return (
    <main className="overflow-hidden p-8 bg-neutral-100 max-md:px-5">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
          <section className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
            {/* Billing Section */}
            <div className="flex overflow-hidden flex-col p-6 w-full bg-white rounded-xl max-w-[852px]">
              <StepHeader
                title="Billing Info"
                subtitle="Please enter your billing info"
                step="Step 1 of 4"
              />

              <div className="flex flex-wrap gap-8 mt-6">
                <InputField label="Name" placeholder="Your name" id="name" />
                <InputField
                  label="Phone Number"
                  placeholder="Phone number"
                  id="phone"
                  type="tel"
                />
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
            <div className="flex overflow-hidden flex-col p-6 mt-8 w-full bg-white rounded-xl">
              <StepHeader
                title="Payment Method"
                subtitle="Please enter your payment method"
                step="Step 3 of 4"
              />

              <div className="flex overflow-hidden flex-col p-6 mt-8 w-full rounded-xl bg-neutral-100">
                <div className="flex flex-wrap gap-8">
                  <InputField
                    label="Card Number"
                    placeholder="Card number"
                    id="cardNumber"
                  />
                  <InputField
                    label="Expiration Date"
                    placeholder="MM / YY"
                    id="expDate"
                  />
                  <InputField
                    label="Card Holder"
                    placeholder="Card holder name"
                    id="cardHolder"
                  />
                  <InputField
                    label="CVC"
                    placeholder="CVC"
                    id="cvc"
                    type="password"
                  />
                </div>
              </div>

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
            </div>
          </section>
        </div>

        <aside className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
          <RentalSummary
            carName="Nissan GT - R"
            carImage="https://cdn.builder.io/api/v1/image/assets/TEMP/f818bd76911b34254af1525f1f22c3abbe5b4ea3a610aa33c4b0d0b2d5033f2b?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546"
            rating={4}
            reviews={440}
            subtotal={80.0}
            tax={0}
            total={80.0}
          />
        </aside>
      </div>
    </main>
  );
};
