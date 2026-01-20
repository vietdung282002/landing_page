import Image from "next/image";
import { playfairDisplay, openSans } from "../../fonts";

const benefits = [
  {
    icon: "/icon_payment.svg",
    title: "Payment Method",
    description: "We offer flexible payment options, to make easier.",
    bgColor: "bg-secondary-300",
  },
  {
    icon: "/icon_return.svg",
    title: "Return policy",
    description: "You can return a product within 30 days.",
    bgColor: "bg-secondary-400",
  },
  {
    icon: "/icon_support.svg",
    title: "Customer Support",
    description: "Our customer support is 24/7.",
    bgColor: "bg-secondary-100",
  },
];

export default function Benefits() {
  return (
    <div className={`${openSans.className} py-25 bg-secondary-200`}>
      <div className="flex flex-col items-center">
        <p
          className={`${playfairDisplay.className} text-4xl sm:text-5xl font-bold text-primary-200 mb-12 px-4 text-center `}
        >
          Benefits
          <br className="sm:hidden block" />
          for your expediency
        </p>
        <div className="flex flex-row flex-wrap justify-between items-center gap-8 mt-26 w-full px-4 2xl:px-71">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-full 2xl:max-w-[300px]"
            >
              <div
                className={`${benefit.bgColor} w-27 h-27 rounded-xl flex items-center justify-center shadow-md mb-8`}
              >
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={68}
                  height={68}
                />
              </div>
              <div className="text-3xl font-bold text-primary-200 mb-8">
                {benefit.title}
              </div>
              <p className="text-2xl text-gray-200 text-center">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
