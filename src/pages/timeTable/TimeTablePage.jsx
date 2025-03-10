import React from "react";
import trainData from "./TimeTable";
import RailwayCompanion from "../../components/RailwayCompanion";

const TimeTablePage = () => {
  return (
    <div className="px-4 py-10 bg-[#FFFFFF]">
      <div className="max-w-7xl lg:px-15 mx-auto">
        {trainData.trains.map((train, index) => (
          <div key={index} className="mb-6 p-4 rounded-lg">
            <h2 className="text-2xl font-bold">{train.route}</h2>
            <div className="flex flex-wrap gap-3">
              <p>
                Train Type - <strong>{train.train_type}</strong> |
              </p>
              <p>
                Duration - <strong>{train.total_time}</strong> |
              </p>
              <p>
                Distance - <strong>{train.total_distance}</strong>
              </p>
            </div>

            {/* Scrollable Table Container */}
            <div className="overflow-x-auto mt-4">
              <table className="w-full min-w-max border-collapse border">
                <thead>
                  <tr className="bg-[#F2FAF4]">
                    <th className="border p-2 text-start">No</th>
                    <th className="border p-2 text-start">Code</th>
                    <th className="border p-2 text-start">Station</th>
                    <th className="border p-2 text-start">Arrival</th>
                    <th className="border p-2 text-start">Departure</th>
                    <th className="border p-2 text-start">Distance</th>
                  </tr>
                </thead>
                <tbody>
                  {train.stations.map((station) => (
                    <tr key={station.no}>
                      <td className="border p-2 text-start">{station.no}</td>
                      <td className="border p-2 text-start">{station.code}</td>
                      <td className="border p-2 text-start">
                        {station.station}
                      </td>
                      <td className="border p-2 text-start">
                        {station.arrival}
                      </td>
                      <td className="border p-2 text-start">
                        {station.departure}
                      </td>
                      <td className="border p-2 text-start">
                        {station.distance}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
      <RailwayCompanion />
    </div>
  );
};

export default TimeTablePage;
