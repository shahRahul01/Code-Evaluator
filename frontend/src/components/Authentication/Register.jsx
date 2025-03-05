import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import { addUser } from "../../redux/slices/authSlices";
import { checkIsDataValid } from "../../helpers/validate";
import axiosInstance from "../../config/axiosInstance";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [preview, setPreview] = useState(null); // Store image preview

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  function addUserData(name, email, role) {
    dispatch(addUser({ name, email, role }));
  }

  function notify(message) {
    toast(message);
  }

  function toggleSignInForm() {
    navigate("/login");
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setErrorMessage("Only image files are allowed.");
        return;
      }
      setProfilePic(file);
      setPreview(URL.createObjectURL(file)); // Create image preview
    }
  };

  const removeImage = () => {
    setProfilePic(null);
    setPreview(null);
  };

  const handleButtonClick = async () => {
    const message = checkIsDataValid(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    try {
      const formData = new FormData();
      formData.append("name", name.current.value);
      formData.append("email", email.current.value);
      formData.append("password", password.current.value);
      if (profilePic) {
        formData.append("profilePic", profilePic);
      }

      const response = await axiosInstance.post("user/signup", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true
      });

      console.log("Response is", response);

      notify(response.data.data.message);
      addUserData(response.data.data.name, response.data.data.email, response.data.data.role, response.data.profilePic);
      navigate("/login");
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="w-full h-full flex flex-row items-center justify-evenly">
      <form
        className="w-5/12 bg-black text-white flex flex-col justify-center items-center py-12 rounded-lg bg-opacity-70"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4 px-2">Sign Up</h1>
        <input
          type="text"
          placeholder="Full Name"
          ref={name}
          className="px-2 py-3 my-3 w-[90%] bg-gray-700"
        />
        <input
          type="text"
          placeholder="Email Address *"
          className="px-2 py-3 my-3 w-[90%] bg-gray-700"
          ref={email}
        />
        <input
          type="password"
          placeholder="Password *"
          className="px-2 py-3 my-3 w-[90%] bg-gray-700"
          ref={password}
        />
        
        {/* Image Upload Section */}
        <input
          type="file"
          accept="image/*"
          className="px-2 py-3 my-3 w-[90%] bg-gray-700"
          onChange={handleFileChange}
        />
        
        {/* Image Preview */}
        {preview && (
          <div className="w-[90%] flex flex-col items-center">
            <img
              src={preview}
              alt="Profile Preview"
              className="w-20 h-20 object-cover rounded-full my-2"
            />
            <button
              type="button"
              className="text-red-500 font-bold text-sm mt-2"
              onClick={removeImage}
            >
              Remove Image
            </button>
          </div>
        )}

        <p className="text-red-500 font-bold w-[90%]">{errorMessage}</p>
        <button className="p-4 my-6 bg-red-800 w-[90%] rounded" onClick={handleButtonClick}>
          Sign Up
        </button>
        <p
          className="py-6 font-sans text-right text-white font-semibold cursor-pointer"
          onClick={toggleSignInForm}
        >
          Already registered? Sign In Now.
        </p>
      </form>
    </div>
  );
};

export default Register;
