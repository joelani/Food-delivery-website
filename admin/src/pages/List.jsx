import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const List = () => {
  const [list, setList] = useState([]);
  const url = "http://localhost:3000";
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    console.log(response.data);

    if (response.data.success) {
      setList(response.data.data);
    } else {
      console.error("Failed to fetch list");
      toast.error("Failed to fetch list");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className="flex flex-col w-[70%] ml-[5vw] md:ml-6 mt-13">
      <p>All Food List</p>
      <div>
        <div>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
      </div>
    </div>
  );
};

export default List;
