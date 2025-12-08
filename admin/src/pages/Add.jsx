import React from "react";
import { assets } from "../assets/admin_assets/assets";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Add = () => {
  const url = "http://localhost:3000";
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("price", Number(data.price));
    formData.append("image", image);

    const response = await axios.post(`${url}/api/food/add`, formData);

    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });
      setImage(null);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="w-[70%] ml-[5vw] md:ml-6 mt-13">
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col gap-5 items-start "
      >
        <div className="flex flex-col gap-2.5">
          <p>Upload Image</p>

          <label htmlFor="image" className="cursor-pointer">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
              className="w-30"
            />
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              required
              hidden
            />
          </label>
        </div>

        <div className="flex flex-col gap-2.5 md:max-w-2/5  w-full ">
          <p>Product name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
          />
        </div>
        <div className="flex flex-col gap-2.5 md:max-w-2/5 w-full ">
          <p>Product description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Write content here"
            required
          ></textarea>
        </div>
        <div className="flex max-md:flex-col max-md:gap-2.5 gap-7.5 w-full">
          <div className=" py-2.5 flex flex-col gap-2.5 ">
            <p className="">Product Category</p>
            <select
              onChange={onChangeHandler}
              value={data.category}
              name="category"
              id=""
              className="max-w-[150px] p-1.5 border border-NeutralGray/55 "
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure veg">Pure veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className=" p-2.5 max-w-[150px] flex flex-col gap-2.5">
            <p>Product price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="$25"
            />
          </div>
        </div>
        <button
          type="submit"
          className="text-BackgroundLight bg-PrimaryDark px-12 py-2 rounded "
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
