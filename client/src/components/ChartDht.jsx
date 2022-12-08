import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getAllDht } from "../redux/slice/dhtSlice";
import { CategoryScale } from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";
const formatDate = (time) => {
  return (
    new Date(time).toLocaleString("vi")
  );
};
export default function ChartDht() {
  const [temp, setTemp] = useState([]);
  const [humi, setHumi] = useState([]);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.dht.data);
  useEffect(() => {
    ChartJS.register(CategoryScale);
    return () => ChartJS.unregister(CategoryScale);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getAllDht());
      } catch (error) {}
    })();
  }, []);

  useEffect(() => {
    if (data.length) {
      const t = data.map((a) => {
        return { temp: a.temperature, date: formatDate(a.createdAt) };
      });

      const h = data.map((a) => {
        return { humi: a.humidity, date: formatDate(a.createdAt) };
      });
      setHumi(h)
      setTemp(t);
    }
  }, [data]);
console.log(temp.map(a => a.date))
  return (
    <div className="flex justify-center">
      <div className="min-w-[500px] min-h-[250px]">
        <Line
          data={{
            labels: temp.map(a => a.date),
            datasets: [
              {
                data: temp.map(a => a.temp),
                label: "Nhiệt độ",
                borderColor: "#3e95cd",
                fill: true,
              },
            ],
          }}
          options={{
            title: {
              display: true,
              text: "Biểu nhiệt độ trong 10 lần đo gần nhất",
            },
            legend: {
              display: true,
              position: "bottom",
            },
          }}
        />
      </div>
      <div className="min-w-[500px] min-h-[250px]">
        <Line
          data={{
            labels: humi.map(h => h.date),
            datasets: [
              {
                data:humi.map(h => h.humi),
                label: " Độ ẩm",
                borderColor: "#3e95cd",
                fill: true,
              },
            ],
          }}
          options={{
            title: {
              display: true,
              text: "Biểu độ ẩm trong 10 lần đo gần nhất",
            },
          }}
        />
      </div>
    </div>
  );
}
