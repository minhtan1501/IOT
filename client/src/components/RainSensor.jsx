import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRain } from "../redux/slice/rainSlice";
import toast from 'react-hot-toast';

export default function RainSensor() {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.rain);

  useEffect(() => {
    dispatch(getRain());
  }, []);

  useEffect(() => {
    (async () => {
      try {
		  if (value) {
			toast.custom((t) => (
				<div
				  className={`${
					t.visible ? 'animate-enter' : 'animate-leave'
				  } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
				>
				  <div className="flex-1 w-0 p-4">
					<div className="flex items-start">
					  <div className="flex-shrink-0 pt-0.5">
						<img
						  className="h-10 w-10 rounded-full"
						  src="rain.png"
						  alt=""
						/>
					  </div>
					  <div className="ml-3 flex-1">
						<p className="text-sm font-medium text-yellow-500">
						 Cảnh báo
						</p>
						<p className="mt-1 text-sm text-black font-semibold">
						  Trời có mưa
						</p>
					  </div>
					</div>
				  </div>
				  <div className="flex border-l border-gray-200">
					<button
					  onClick={() => toast.dismiss(t.id)}
					  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
					>
					  Close
					</button>
				  </div>
				</div>
			  ))
			
          await axios.get("/api/rain/sendmail");
        }
      } catch (error) {}
    })();
  }, [value]);

  return (
    <div className="bg-gradient-to-b from-sky-200 to-sky-100 border-b-4 border-sky-600 rounded-lg shadow-xl p-5">
      <div className="flex flex-row items-center">
        <div className="flex-shrink pr-4">
          <div className="rounded-full p-5">
            <img
              src={!value ? "sun.png" : "rain.png"}
              alt=""
              className="w-[32px] h-[32px]"
            />
          </div>
        </div>
        <div className="flex-1 text-right md:text-center">
          <h2 className="font-bold uppercase text-gray-600">Cảm biến mưa</h2>
          <p className="font-bold text-2xl">
            {!value ? "Trời đẹp" : "Trời mưa"}
            <span className="text-yellow-600">
              <i className="fas fa-caret-up"></i>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
