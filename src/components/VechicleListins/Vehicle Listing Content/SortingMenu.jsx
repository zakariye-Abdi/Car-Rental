import React, { useState, useEffect, useRef } from "react";
import { FaCaretDown } from "react-icons/fa";

// List of sorting options
const sortingList = [
  { listName: "Last Added" },
  { listName: "First Viewed" },
  { listName: "Cheap First" },
  { listName: "Expensive First" },
  { listName: "A to Z" },
  { listName: "Z to A" },
  { listName: "Old First" },
  { listName: "New First" },
];

function SortingMenu() {
  // State to keep track of the currently selected sort option
  const [sortName, setSortName] = useState("Last Added");
  // State to control the visibility of the sorting menu
  const [isSortMenuVisible, setSortMenuVisible] = useState(false);
  // Ref for the sorting menu container to detect clicks outside
  const menuRef = useRef(null);

  // Effect to handle clicks outside of the sorting menu to close it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setSortMenuVisible(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  // Toggle the visibility of the sorting menu
  const toggleSortMenu = () => {
    setSortMenuVisible(!isSortMenuVisible);
  };

  // Handle click on a sorting option and update the selected sort option
  const handleSortItemClick = (itemName) => {
    setSortName(itemName);
    setSortMenuVisible(false);
  };

  return (
    <div className="sorting w-[15rem] h-12 bg-white relative">
      {/* Container for the sorting label and menu */}
      <div className="flex justify-start items-center h-full">
        <p className="mr-4 text-base">Sort by</p>
        <div
          className="sorting-menu-container w-[10rem] h-10 bg-[#F5F5F5] flex justify-center items-center gap-2"
          onClick={toggleSortMenu}
          ref={menuRef}
        >
          {/* Currently selected sort option */}
          <p className="text-[#7a7777] cursor-pointer">{sortName}</p>
          <FaCaretDown className="w-4 h-4" />
        </div>
      </div>

      {/* Dropdown menu for sorting options */}
      {isSortMenuVisible && (
        <div className="w-[12rem] mt-2 overflow-y-scroll h-72 absolute top-15 left-9">
          <ul className="bg-white">
            {sortingList.map((list, index) => (
              <li
                onClick={() => handleSortItemClick(list.listName)}
                className="w-full h-10 bg-late-200 flex items-center mb-2 pl-8 text-overflow-ellipsis hover:bg-[#DC2D13] hover:text-white cursor-pointer"
                key={index}
              >
                {list.listName}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SortingMenu;
