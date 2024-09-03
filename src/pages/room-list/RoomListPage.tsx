import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Header from '@/components/header/header';
import RoomCard from '@/components/room-card/RoomCard';

export default function RoomListPage() {
  return (
    <>
      <Header pageType="normal" />
      <div className="flex flex-col min-h-screen">
        <header className="flex items-center justify-between px-4 py-4 border-b border-b-gray-100">
          <div>
            <h2 className=" text-3xl text-gray-800">Our Room Collections</h2>
          </div>
          <form className="flex items-center gap-2">
            <Input
              type="search"
              placeholder="Search Rooms"
              className=" text-gray-800 w-96 placeholder:text-gray-800 text-lg py-4 bg-gray-100 border-gray-300 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 "
            />
            <Button
              variant="outline"
              className="py-4 bg-gray-100 border-gray-300"
            >
              <SearchIcon className="h-4 w-4 text-gray-800" />
              <span className="sr-only">Search</span>
            </Button>
          </form>
        </header>
        <main className="flex flex-col lg:flex-row gap-4 lg:gap-6 p-4 md:p-6">
          <aside className="w-full lg:w-64">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Filters</h2>
            <div className="space-y-4">
              <div className=" mb-8">
                <h3 className="font-semibold text-lg mb-4 text-gray-800">
                  Categories
                </h3>
                <div className="space-y-1 mt-2 flex flex-col gap-3 text-gray-800">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-[16px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Under 1000 bdt
                    </label>
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <h3 className="font-semibold text-lg text-gray-800 mb-4">
                  Price Range
                </h3>
                <div className="space-y-1 mt-2 flex flex-col gap-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-[16px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-800"
                    >
                      Under 1000 bdt
                    </label>
                  </div>
                </div>
              </div>
              <div className="">
                <h3 className="font-semibold text-lg mt-8 text-gray-800">
                  Sort By
                </h3>
                <div className="space-y-1 mt-2">
                  <RadioGroup defaultValue="featured">
                    <Label
                      htmlFor="featured"
                      className="flex items-center gap-2 font-medium text-[16px] text-gray-800"
                    >
                      <RadioGroupItem id="featured" value="featured" />
                      Featured
                    </Label>
                  </RadioGroup>
                </div>
              </div>
            </div>
          </aside>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 md:pr-0">
            <RoomCard />
            <RoomCard />
            <RoomCard />
            <RoomCard />
          </div>
        </main>
      </div>
    </>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
