import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({ url }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`, {
      headers: { "Cache-Control": "no-cache" },
    });

    if (response.data.success) {
      setList(response.data.data);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  // const removeFood = async (foodId) => {
  //   // Instant UI update
  //   setList((prev) => prev.filter((item) => item._id !== foodId));

  //   try {
  //     const response = await axios.post(`${url}/api/food/remove`, {
  //       id: foodId,
  //     });
  //     if (response.data.success) {
  //       toast.success(
  //         response.data.message || "Food item removed successfully"
  //       );
  //     } else {
  //       toast.error("Failed to remove food item");
  //     }
  //   } catch (err) {
  //     console.error(err);

  //     // Revert UI if backend fails
  //     fetchList();
  //   }
  // };

  const removeFood = async (foodId) => {
    setList((prev) => prev.filter((item) => item._id !== foodId));
    const response = await axios.post(`${url}/api/food/remove`, {
      id: foodId,
    });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
      console.log("food removed");
    } else {
      toast.error("Failed to remove food item");
    }
  };

  return (
    <div className="w-[70%] ml-16 md:ml-64 p-5 mt-10 ">
      <p>All Food List</p>
      <div>
        <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] max-md:grid-cols-[1fr_3fr_1fr] items-center gap-2.5 max-md:gap-4 py-3 px-4 border border-NeutralGray/65 text-gray-700 ">
          <b>Image</b>
          <b className="md:pl-2">Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] max-md:grid-cols-[1fr_3fr_1fr] max-md:gap-4 items-center gap-2.5 py-3 px-4 border border-NeutralGray/65 text-gray-600"
          >
            <img
              src={`${url}/images/${item.image}`}
              alt={item.name}
              className="w-16 h-16 max-md:w-14 max-md:h-10 object-cover rounded-md "
            />
            <p className="pl-2">{item.name}</p>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <p
              onClick={() => removeFood(item._id)}
              className="text-gray-600 font-semibold cursor-pointer "
            >
              X
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
