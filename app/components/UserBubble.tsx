'use client';
import React, { useState } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react';
import { FaUserCircle } from 'react-icons/fa';
import supabase from "../backend/supabase.js";


export default function UserBubble() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <Dropdown isOpen={isOpen} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <DropdownTrigger>
        <div className="p-0 w-16 h-16 flex items-center justify-center bg-transparent" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <FaUserCircle size={100} />
        </div>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="profile">My Profile</DropdownItem>
        <DropdownItem key="logout" className="text-danger" color="danger">
            <form action="/auth/logout" method="POST">
              <button className="w-full text-left" type="submit">Logout</button>
            </form>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}