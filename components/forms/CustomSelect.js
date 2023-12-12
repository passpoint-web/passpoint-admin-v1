"use client";
import { SelectArrow } from "@/icons/icon";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

// A mock of options that includes text and image src

const CustomSelect = ({
  options,
  containerClass,
  onOptionSelected,
  showImage,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const selectRef = useRef(null);

  // Handle clicking outside of the select to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={selectRef} className={`relative font-graphik ${containerClass}`}>
      <div
        className="flex items-center justify-between cursor-pointer rounded p-2 bg-selectBg-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center gap-2">
          {showImage && (
            <Image
              src={selectedOption.img}
              alt={selectedOption.text}
              className="w-[18px] h-[18px]"
            />
          )}
          <span className="font-medium">{selectedOption.text}</span>
        </span>
        <SelectArrow />
      </div>

      {isOpen && (
        <ul className="absolute z-10 bg-primary-white animate-fadeIn rounded w-full mt-1 dropShadow">
          {options.map((option, index) => (
            <li
              key={index}
              className="flex items-center text-grey-1l cursor-pointer p-2 hover:bg-primary-lightBlue"
              onClick={() => {
                setSelectedOption(option);
                setIsOpen(false);
                onOptionSelected(option);
              }}
            >
              {showImage && (
                <Image
                  src={option.img}
                  alt={option.text}
                  className="w-6 h-6 mr-2"
                />
              )}
              <span>{option.text}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
