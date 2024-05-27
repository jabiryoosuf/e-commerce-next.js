"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Searchbar = () => {
    const router = useRouter()
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    const name = formdata.get("name") as string;
    if (name) {
        router.push(`/list?name=${name}`)
    }
  };
  return (
    <form
      className="flex items-center justify-between p-2 bg-gray-100 rounded-md flex-1"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        placeholder="Search"
        className="bg-transparent outline-none flex-1"
      />
      <button className="cursor-pointer">
        <Image src="/search.png" alt="" width={16} height={16} />
      </button>
    </form>
  );
};

export default Searchbar;
