































// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function UserProfileForm() {
//   const navigate = useNavigate();

//   const [step, setStep] = useState(1);
//   const [notification, setNotification] = useState("");
//   const [imagePreview, setImagePreview] = useState(null);
//   const [videoPreview, setVideoPreview] = useState(null);

//   const MAX_IMAGE_MB = 3;
//   const MAX_VIDEO_MB = 25;

//   const [formData, setFormData] = useState({
//     name: "",
//     age: "",
//     gender: "",
//     maritalStatus: "",
//     address: "",
//     email: "",
//     profession: "",
//     skills: "",
//     interests: "",
//     bio: "",
//     portfolio: "",
//     profileImage: null,
//     profileVideo: null,
//     preferredConnections: [],
//     availability: "",
//     location: { city: "", radius_km: 50 },
//     languages: [],
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleNext = () => setStep((prev) => Math.min(prev + 1, 5));
//   const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

//   const fileToDataUrl = (file) =>
//     new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onload = () => resolve(reader.result);
//       reader.onerror = (err) => reject(err);
//       reader.readAsDataURL(file);
//     });

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     if (file.size / (1024 * 1024) > MAX_IMAGE_MB) {
//       alert(`Max image size is ${MAX_IMAGE_MB}MB`);
//       return;
//     }
//     const dataUrl = await fileToDataUrl(file);
//     setFormData((s) => ({ ...s, profileImage: dataUrl }));
//     setImagePreview(dataUrl);
//   };

//   const handleVideoUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     if (file.size / (1024 * 1024) > MAX_VIDEO_MB) {
//       alert(`Max video size is ${MAX_VIDEO_MB}MB`);
//       return;
//     }
//     const dataUrl = await fileToDataUrl(file);
//     setFormData((s) => ({ ...s, profileVideo: dataUrl }));
//     setVideoPreview(dataUrl);
//   };

//   const removeImage = () => {
//     setFormData((s) => ({ ...s, profileImage: null }));
//     setImagePreview(null);
//   };
//   const removeVideo = () => {
//     setFormData((s) => ({ ...s, profileVideo: null }));
//     setVideoPreview(null);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     try {
//       const existing = JSON.parse(localStorage.getItem("meshProfiles") || "[]");
//       const profileToSave = { ...formData, createdAt: new Date().toISOString() };
//       existing.push(profileToSave);
//       localStorage.setItem("meshProfiles", JSON.stringify(existing));

//       setNotification("Profile saved successfully!");
//       setTimeout(() => setNotification(""), 3000);

//       navigate("/profile");
//     } catch (err) {
//       console.error(err);
//       alert("Error saving profile");
//     }
//   };

//   return (

    
//     <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-r from-indigo-50 to-purple-50 p-6">
//       {notification && (
//         <div className="absolute top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
//           {notification}
//         </div>
//       )}

//       {/* Progress Bar */}
//       <div className="w-full max-w-3xl mb-6">
//         <div className="flex justify-between mb-2">
//           {["Personal", "Professional", "Interests", "Media", "Review"].map((label, index) => (
//             <div key={index} className={`text-sm font-medium ${step === index + 1 ? "text-indigo-600" : "text-gray-400"}`}>
//               {label}
//             </div>
//           ))}
//         </div>
//         <div className="h-2 w-full bg-gray-200 rounded">
//           <div
//             className="h-2 bg-indigo-600 rounded"
//             style={{ width: `${(step / 5) * 100}%` }}
//           ></div>
//         </div>
//       </div>

//       <form 
//       className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-10 space-y-6" onSubmit={handleSubmit}>
//         {/* Step 1: Personal Info */}
//         {step === 1 && (
//           <div className="space-y-4">
//             <h2 className="text-2xl font-bold text-indigo-700">Personal Info</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400" required />
//               <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400" required />
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <select name="gender" value={formData.gender} onChange={handleChange} className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400" required>
//                 <option value="">Select Gender</option>
//                 <option>Male</option>
//                 <option>Female</option>
//                 <option>Other</option>
//               </select>
//               <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400" required>
//                 <option value="">Marital Status</option>
//                 <option>Single</option>
//                 <option>Married</option>
//                 <option>Divorced</option>
//               </select>
//             </div>
//             <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 w-full" />
//             <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 w-full" required />
//           </div>
//         )}

//         {/* Step 2: Professional Info */}
//         {step === 2 && (
//           <div className="space-y-4">
//             <h2 className="text-2xl font-bold text-indigo-700">Professional Info</h2>
//             <input type="text" name="profession" value={formData.profession} onChange={handleChange} placeholder="Profession" className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 w-full" />
//             <input type="text" name="skills" value={formData.skills} onChange={handleChange} placeholder="Skills (comma separated)" className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 w-full" />
//             <textarea name="bio" value={formData.bio} onChange={handleChange} placeholder="Bio / About You" rows={4} className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 w-full" />
//             <input type="text" name="portfolio" value={formData.portfolio} onChange={handleChange} placeholder="Portfolio Links" className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 w-full" />
//           </div>
//         )}

//         {/* Step 3: Interests & Preferences */}
//         {step === 3 && (
//           <div className="space-y-4">
//             <h2 className="text-2xl font-bold text-indigo-700">Interests & Preferences</h2>
//             <input type="text" name="interests" value={formData.interests} onChange={handleChange} placeholder="Interests / Hobbies" className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 w-full" />
//             <select name="availability" value={formData.availability} onChange={handleChange} className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 w-full">
//               <option value="">Availability</option>
//               <option>Actively looking</option>
//               <option>Open to offers</option>
//               <option>Not looking</option>
//             </select>
//             <input type="text" name="location.city" value={formData.location.city} onChange={(e)=>setFormData({...formData, location:{...formData.location, city:e.target.value}})} placeholder="City" className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 w-full" />
//             <input type="range" min={0} max={200} value={formData.location.radius_km} onChange={(e)=>setFormData({...formData, location:{...formData.location, radius_km:parseInt(e.target.value)}})} className="w-full" />
//             <div>Search Radius: {formData.location.radius_km} km</div>
//           </div>
//         )}

//         {/* Step 4: Media Upload */}
//         {step === 4 && (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="p-3 border rounded-lg">
//               <label className="block text-sm font-medium mb-2 text-gray-600">Profile Photo (max {MAX_IMAGE_MB}MB)</label>
//               <input accept="image/*" type="file" onChange={handleImageUpload} />
//               {imagePreview && (
//                 <div className="mt-3 flex items-center gap-3">
//                   <img src={imagePreview} alt="preview" className="w-24 h-24 object-cover rounded-full border" />
//                   <button type="button" onClick={removeImage} className="px-3 py-1 border rounded text-sm text-red-600">Remove</button>
//                 </div>
//               )}
//             </div>
//             <div className="p-3 border rounded-lg">
//               <label className="block text-sm font-medium mb-2 text-gray-600">Intro Video (max {MAX_VIDEO_MB}MB)</label>
//               <input accept="video/*" type="file" onChange={handleVideoUpload} />
//               {videoPreview && (
//                 <div className="mt-3">
//                   <video src={videoPreview} controls className="w-full max-h-52 rounded-lg border" />
//                   <button type="button" onClick={removeVideo} className="mt-2 px-3 py-1 border rounded text-sm text-red-600">Remove</button>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}

//         {/* Step 5: Review & Submit */}

//         {step === 5 && (
//   <div className="space-y-4">
//     <h2 className="text-2xl font-bold text-indigo-700">Review & Submit</h2>
//     <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
//       <table className="w-full text-left table-auto border-collapse">
//         <tbody>
//           <tr className="border-b">
//             <td className="py-2 font-semibold w-1/3">Full Name</td>
//             <td className="py-2">{formData.name}</td>
//           </tr>
//           <tr className="border-b">
//             <td className="py-2 font-semibold">Age</td>
//             <td className="py-2">{formData.age}</td>
//           </tr>
//           <tr className="border-b">
//             <td className="py-2 font-semibold">Gender</td>
//             <td className="py-2">{formData.gender}</td>
//           </tr>
//           <tr className="border-b">
//             <td className="py-2 font-semibold">Marital Status</td>
//             <td className="py-2">{formData.maritalStatus}</td>
//           </tr>
//           <tr className="border-b">
//             <td className="py-2 font-semibold">Address</td>
//             <td className="py-2">{formData.address}</td>
//           </tr>
//           <tr className="border-b">
//             <td className="py-2 font-semibold">Email</td>
//             <td className="py-2">{formData.email}</td>
//           </tr>
//           <tr className="border-b">
//             <td className="py-2 font-semibold">Profession</td>
//             <td className="py-2">{formData.profession}</td>
//           </tr>
//           <tr className="border-b">
//             <td className="py-2 font-semibold">Skills</td>
//             <td className="py-2">{formData.skills}</td>
//           </tr>
//           <tr className="border-b">
//             <td className="py-2 font-semibold">Interests / Hobbies</td>
//             <td className="py-2">{formData.interests}</td>
//           </tr>
//           <tr className="border-b">
//             <td className="py-2 font-semibold">Bio</td>
//             <td className="py-2">{formData.bio}</td>
//           </tr>
//           <tr className="border-b">
//             <td className="py-2 font-semibold">Portfolio Links</td>
//             <td className="py-2">{formData.portfolio}</td>
//           </tr>
//           <tr className="border-b">
//             <td className="py-2 font-semibold">Availability</td>
//             <td className="py-2">{formData.availability}</td>
//           </tr>
//           <tr className="border-b">
//             <td className="py-2 font-semibold">City</td>
//             <td className="py-2">{formData.location.city}</td>
//           </tr>
//           <tr className="border-b">
//             <td className="py-2 font-semibold">Search Radius</td>
//             <td className="py-2">{formData.location.radius_km} km</td>
//           </tr>
//           <tr className="border-b">
//             <td className="py-2 font-semibold">Profile Image</td>
//             <td className="py-2">
//               {imagePreview && (
//                 <img src={imagePreview} alt="profile" className="w-24 h-24 rounded-full border" />
//               )}
//             </td>
//           </tr>
//           <tr>
//             <td className="py-2 font-semibold">Intro Video</td>
//             <td className="py-2">
//               {videoPreview && (
//                 <video src={videoPreview} controls className="w-48 max-h-52 rounded-lg border" />
//               )}
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   </div>
// )}

        
//         {/* {step === 5 && (
//           <div className="space-y-4">
//             <h2 className="text-2xl font-bold text-indigo-700">Review & Submit</h2>
//             <pre className="bg-gray-100 p-4 rounded overflow-auto">{JSON.stringify(formData, null, 2)}</pre>
//           </div>
//         )} */}

//         {/* Navigation Buttons  */}

//          <div className="flex justify-between mt-6">
//           {step > 1 && <button type="button" onClick={handleBack} className="px-6 py-2 border rounded bg-gray-200 hover:bg-gray-300">Back</button>}
//           {step < 5 && <button type="button" onClick={handleNext} className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Next</button>}
//           {step === 5 && <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">Submit</button>}
//         </div>

//       </form>
//     </div>
//   );
// }


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserProfileForm() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [notification, setNotification] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);

  const MAX_IMAGE_MB = 3;
  const MAX_VIDEO_MB = 25;

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    maritalStatus: "",
    address: "",
    email: "",
    profession: "",
    skills: "",
    interests: "",
    bio: "",
    portfolio: "",
    profileImage: null,
    profileVideo: null,
    preferredConnections: [],
    availability: "",
    location: { city: "", radius_km: 50 },
    languages: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 5));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const fileToDataUrl = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
      reader.readAsDataURL(file);
    });

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size / (1024 * 1024) > MAX_IMAGE_MB) {
      alert(`Max image size is ${MAX_IMAGE_MB}MB`);
      return;
    }
    const dataUrl = await fileToDataUrl(file);
    setFormData((s) => ({ ...s, profileImage: dataUrl }));
    setImagePreview(dataUrl);
  };

  const handleVideoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size / (1024 * 1024) > MAX_VIDEO_MB) {
      alert(`Max video size is ${MAX_VIDEO_MB}MB`);
      return;
    }
    const dataUrl = await fileToDataUrl(file);
    setFormData((s) => ({ ...s, profileVideo: dataUrl }));
    setVideoPreview(dataUrl);
  };

  const removeImage = () => {
    setFormData((s) => ({ ...s, profileImage: null }));
    setImagePreview(null);
  };
  const removeVideo = () => {
    setFormData((s) => ({ ...s, profileVideo: null }));
    setVideoPreview(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const existing = JSON.parse(localStorage.getItem("meshProfiles") || "[]");
      const profileToSave = { ...formData, createdAt: new Date().toISOString() };
      existing.push(profileToSave);
      localStorage.setItem("meshProfiles", JSON.stringify(existing));

      setNotification("Profile saved successfully!");
      setTimeout(() => setNotification(""), 3000);

      navigate("/profile");
    } catch (err) {
      console.error(err);
      alert("Error saving profile");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-r from-indigo-50 to-purple-50 p-6 relative">
      
      {/* Back to Home Cross */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-5 right-5 text-3xl font-bold text-gray-400 hover:text-gray-700 transition"
        title="Back to Home"
      >
        &times;
      </button>

      {notification && (
        <div className="absolute top-16 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
          {notification}
        </div>
      )}

      {/* Progress Bar */}
      <div className="w-full max-w-3xl mb-6">
        <div className="flex justify-between mb-2">
          {["Personal", "Professional", "Interests", "Media", "Review"].map((label, index) => (
            <div key={index} className={`text-sm font-medium ${step === index + 1 ? "text-indigo-600" : "text-gray-400"}`}>
              {label}
            </div>
          ))}
        </div>
        <div className="h-2 w-full bg-gray-200 rounded">
          <div className="h-2 bg-indigo-600 rounded" style={{ width: `${(step / 5) * 100}%` }}></div>
        </div>
      </div>

      <form className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-10 space-y-6" onSubmit={handleSubmit}>
       
        {/* Step 1: Personal Info */}
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">Personal Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400" required />
              <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400" required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select name="gender" value={formData.gender} onChange={handleChange} className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400" required>
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400" required>
                <option value="">Marital Status</option>
                <option>Single</option>
                <option>Married</option>
                <option>Divorced</option>
              </select>
            </div>
            <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 w-full" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 w-full" required />
          </div>
        )}

        {/* Step 2: Professional Info */}
        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">Professional Info</h2>
            <input type="text" name="profession" value={formData.profession} onChange={handleChange} placeholder="Profession" className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 w-full" />
            <input type="text" name="skills" value={formData.skills} onChange={handleChange} placeholder="Skills (comma separated)" className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 w-full" />
            <textarea name="bio" value={formData.bio} onChange={handleChange} placeholder="Bio / About You" rows={4} className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 w-full" />
            <input type="text" name="portfolio" value={formData.portfolio} onChange={handleChange} placeholder="Portfolio Links" className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 w-full" />
          </div>
        )}

        {/* Step 3: Interests & Preferences */}
        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">Interests & Preferences</h2>
            <input type="text" name="interests" value={formData.interests} onChange={handleChange} placeholder="Interests / Hobbies" className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 w-full" />
            <select name="availability" value={formData.availability} onChange={handleChange} className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 w-full">
              <option value="">Availability</option>
              <option>Actively looking</option>
              <option>Open to offers</option>
              <option>Not looking</option>
            </select>
            <input type="text" name="location.city" value={formData.location.city} onChange={(e)=>setFormData({...formData, location:{...formData.location, city:e.target.value}})} placeholder="City" className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 w-full" />
            <input type="range" min={0} max={200} value={formData.location.radius_km} onChange={(e)=>setFormData({...formData, location:{...formData.location, radius_km:parseInt(e.target.value)}})} className="w-full" />
            <div>Search Radius: {formData.location.radius_km} km</div>
          </div>
        )}

        {/* Step 4: Media Upload */}
        {step === 4 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-3 border rounded-lg">
              <label className="block text-sm font-medium mb-2 text-gray-600">Profile Photo (max {MAX_IMAGE_MB}MB)</label>
              <input accept="image/*" type="file" onChange={handleImageUpload} />
              {imagePreview && (
                <div className="mt-3 flex items-center gap-3">
                  <img src={imagePreview} alt="preview" className="w-24 h-24 object-cover rounded-full border" />
                  <button type="button" onClick={removeImage} className="px-3 py-1 border rounded text-sm text-red-600">Remove</button>
                </div>
              )}
            </div>
            <div className="p-3 border rounded-lg">
              <label className="block text-sm font-medium mb-2 text-gray-600">Intro Video (max {MAX_VIDEO_MB}MB)</label>
              <input accept="video/*" type="file" onChange={handleVideoUpload} />
              {videoPreview && (
                <div className="mt-3">
                  <video src={videoPreview} controls className="w-full max-h-52 rounded-lg border" />
                  <button type="button" onClick={removeVideo} className="mt-2 px-3 py-1 border rounded text-sm text-red-600">Remove</button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 5: Review & Submit */}
        {step === 5 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">Review & Submit</h2>
            <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
              <table className="w-full text-left table-auto border-collapse">
                <tbody>
                  {/* Review rows here */}
                  <tr className="border-b">
                    <td className="py-2 font-semibold w-1/3">Full Name</td>
                    <td className="py-2">{formData.name}</td>
                  </tr>
                  {/* Add all other fields here as in your original code */}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          {step > 1 && <button type="button" onClick={handleBack} className="px-6 py-2 border rounded bg-gray-200 hover:bg-gray-300">Back</button>}
          {step < 5 && <button type="button" onClick={handleNext} className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Next</button>}
          {step === 5 && <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">Submit</button>}
        </div>
      </form>
    </div>
  );
}
