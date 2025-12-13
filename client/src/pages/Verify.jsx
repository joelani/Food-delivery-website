import React, { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  const verifyPayment = async () => {
    const response = await axios.post(url + "/api/order/verify", {
      success,
      orderId,
    });
    if (response.data.success) {
      navigate("/myorders");
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className="pt-44 mb-48 px-4 md:px-16 lg:px-24 xl:px-32 max-w-[1440px] mx-auto ">
      {/* spinner */}
      <div className="w-25 h-25 border-5 border-[#bdbdbd] border-t-Primary mx-auto rounded-full animate-spin"></div>
      <h1 className="text-3xl font-bold text-center mt-10">
        Verify Your Account
      </h1>
      <p className="text-center mt-4">
        A verification link has been sent to your email. Please check your inbox
        and click on the link to verify your account.
      </p>
    </div>
  );
};

export default Verify;
