import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getUts } from "../redux/slice/utsSlice";
export default function UtsSensor() {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.uts);

  useEffect(() => {
    dispatch(getUts());
  }, []);

  return (
    <div className="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
      <div className="flex flex-row items-center">
        <div className="flex-shrink pr-4">
          <div className="rounded-full p-5 bg-yellow-600">
		  <img src="drone.png" alt=''  className='w-[30px] h-[30px]'/>
          </div>
        </div>
        <div className="flex-1 text-right md:text-center">
          <h2 className="font-bold uppercase text-gray-600">
            Cảm biến siêu âm
          </h2>
          <p className="font-bold text-2xl">
            {!value ? "Không phát hiện vật cản" : "Phát hiện vật cản"}
            <span className="text-yellow-600">
              <i className="fas fa-caret-up"></i>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
