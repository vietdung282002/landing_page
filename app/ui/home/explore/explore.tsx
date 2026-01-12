import ScrollView from "./scrollview";
import Search from "./search";

export default function Explore() {
  return (
    <div className="flex flex-col items-center my-[100px]">
      <div className=" font-bold text-primary-200 text-[64px] leading-[85px]">
        Explore by Category
      </div>

      <div className="flex flex-row gap-x-[60px] px-[150px] mt-[100px] w-full">
        <div className="flex flex-col w-[350px]">
          <div className="h-[75px]">
            <Search placeholder="Search" />
          </div>
          <ScrollView />
        </div>
      </div>
    </div>
  );
}
