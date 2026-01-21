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
    <div className={`${openSans.className} bg-secondary-200 py-25`}>
      <div className="flex flex-col items-center">
        <p
          className={`${playfairDisplay.className} text-primary-200 mb-12 px-4 text-center text-4xl font-bold sm:text-5xl`}
        >
          Benefits
          <br className="block sm:hidden" />
          for your expediency
        </p>
        <div className="mt-26 flex w-full flex-row flex-wrap items-center justify-between gap-8 px-4 2xl:px-71">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex w-full flex-col items-center 2xl:max-w-[300px]"
            >
              <div
                className={`${benefit.bgColor} mb-8 flex h-27 w-27 items-center justify-center rounded-xl`}
              >
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={68}
                  height={68}
                />
              </div>
              <div className="text-primary-200 mb-8 text-3xl font-bold">
                {benefit.title}
              </div>
              <p className="text-center text-2xl text-gray-200">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
