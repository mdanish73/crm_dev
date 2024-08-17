'use client'
import React,{useState} from 'react'
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex-1 relative">
      <div >
        <Search
          size={20}
          strokeWidth={0.5}
          color={isFocused ? "#3B51B9" : "gray"}
          className="absolute z-30 top-1/2 left-4 -translate-x-1/2 -translate-y-1/2"
        />
        <Input
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          type="search"
          placeholder="Search..."
          className={`w-max pl-8 py-4 bg-gray-700/90 backdrop-blur-md text-[#6B7280] rounded-[10px] outline-none border ${
            isFocused ? "border-[#3B51B9]" : "border-[#121E32]/30"
          }`}
        />
      </div>
    </div>
  )
}

export default SearchBar;
