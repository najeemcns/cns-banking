import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const CardlessConfirm: React.FC = () => {
  const navigate = useNavigate();

  const handleEndSession = () => {
    localStorage.removeItem("authToken"); // or any cleanup logic
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 font-sans">
      {/* ATM Outline */}
      <div className="relative w-full max-w-sm bg-white rounded-xl shadow-md p-6 border-2 border-dashed border-blue-500">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
          ATM Details
        </div>

        {/* ATM graphic (minimal) */}
        <div className="w-full h-56 bg-gray-200 rounded-lg flex flex-col justify-center items-center mb-6">
          <div className="w-28 h-20 bg-gray-400 rounded mb-2" />
          <div className="w-16 h-2 bg-gray-500 rounded" />
          {/* ATM Info */}
          <div className="space-y-3 mt-2">
            <div className="text-gray-800">
              <span className="font-semibold">ATM ID:</span> CNS-DXB-ATM0009
            </div>
            <div className="text-gray-800">
              <span className="font-semibold">Location:</span> Sheikh Zayed Road, Dubai
            </div>
          </div>        </div>


      </div>

      {/* End Session Button */}

      <Button
        onClick={handleEndSession}
        color="danger" variant="solid"
        // icon={<FireOutlined />}
        size="large"
        style={{
          margin: 10,
        }}
      >
        End Session
      </Button>

    </div>
  );
};

export default CardlessConfirm;
