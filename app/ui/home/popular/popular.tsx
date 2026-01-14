import PopularScrollView from "./popular-scrollview";

export function Popular() {
  return (
    <div className="py-25 flex flex-col items-center justify-center">
      <div className=" sm:text-[64px] text-[28px] leading-10 sm:leading-21 font-bold text-primary-200">
        Popular Products
      </div>
      <PopularScrollView />
    </div>
  );
}
