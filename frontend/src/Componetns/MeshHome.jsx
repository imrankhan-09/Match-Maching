

import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function MeshHome() {

  const navigate = useNavigate(); // ✅ Hook at top level of component

  const goToRegister = () => {
    navigate("/RegisterForm"); // yaha aapka register page ka route dena hai
  };

    const gotoLogin = () => {
    navigate("/login"); // yaha aapka login page ka route dena hai
  };
   
  const features = [
    {
      title: "Hybrid Profiles",
      desc: "Combine personal (matrimonial) and professional attributes in one profile.",
    },
    {
      title: "Smart Matching",
      desc: "Set preferences and get attribute-based suggestions (skills, interests, location).",
    },
    {
      title: "Advanced Search",
      desc: "Filter by age, profession, education, location and hobbies.",
    },
    {
      title: "Privacy Controls",
      desc: "Decide which fields are public, private or visible to connections only.",
    },
    {
      title: "Connect & Shortlist",
      desc: "Like, shortlist, or send connection requests with simple actions.",
    },
    {
      title: "Portfolio Showcase",
      desc: "Upload portfolios, videos or links (YouTube, GitHub, IMDb) to stand out.",
    },
  ];

  const sampleProfiles = [
    {
      name: "Aatif Aslam",
      role: "Singer",
      location: "Mumbai, India",
      attrs: ["Singing", "YouTube", "Bollywood Auditions"],
    },
    {
      name: "Ritik Kumawat",
      role: "Full-Stack Developer",
      location: "Indore, India",
      attrs: ["React", "Node.js", "Open Source"],
    },
    {
      name: "Viral Kohli",
      role: "Criceter",
      location: "Delhi, India",
      attrs: ["Bating", "Bolling", "Bloging"],
    },
  ];
  return (

<div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded flex items-center justify-center text-white font-bold">MM</div>
            <h1 className="text-xl font-semibold">Match Making</h1>
            <span className="text-sm text-gray-500 ml-3">Find Your Match</span>
          </div>
          <nav className="flex items-center gap-4">
            <button  onClick={() => navigate("/login")}
             className="px-4 py-2 rounded-md border">Login</button>
            <button 
             onClick={() => navigate("/register")}
           className="px-4 py-2 rounded-md bg-indigo-600 text-white">Get Started</button>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold">One profile. Endless possibilities.</h2>
            <p className="mt-4 text-gray-600">Create a combined personal and professional profile — showcase your career, interests, and find meaningful connections based on attributes that matter to you.</p>

            <div className="mt-6 flex gap-3">
              <input className="flex-1 p-3 border rounded-md" placeholder="Search by name, skill or interest" />
              <button className="px-4 py-3 rounded-md bg-indigo-600 text-white">Search</button>
            </div>

            <div className="mt-6 flex gap-3 text-sm text-gray-600">
              <div className="px-3 py-2 bg-white rounded shadow-sm">Matches: <strong className="ml-2">120+</strong></div>
              <div className="px-3 py-2 bg-white rounded shadow-sm">Profiles: <strong className="ml-2">5,200+</strong></div>
              <div className="px-3 py-2 bg-white rounded shadow-sm">Verified: <strong className="ml-2">320</strong></div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg">Featured Profiles</h3>
            <div className="mt-4 space-y-4">
              {sampleProfiles.map((p, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">{p.name.split(" ")[0][0]}</div>
                  <div>
                    <div className="font-medium">{p.name} <span className="text-sm text-gray-500">• {p.role}</span></div>
                    <div className="text-xs text-gray-500">{p.location}</div>
                    <div className="mt-2 text-xs text-gray-600 flex gap-2">
                      {p.attrs.map((a, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 rounded">{a}</span>
                      ))}
                    </div>
                  </div>
                  <div className="ml-auto flex gap-2">
                    <button className="px-3 py-1 border rounded">Connect</button>
                    <button className="px-3 py-1 bg-indigo-600 text-white rounded">View</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mt-12">
          <h3 className="text-2xl font-semibold">Platform Features</h3>
          <p className="text-gray-600 mt-2">Key capabilities that Mesh Making offers to users.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold">{f.title}</h4>
                <p className="text-gray-600 mt-2 text-sm">{f.desc}</p>
                <div className="mt-3">
                  <button className="text-sm border px-3 py-1 rounded">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How it Works */}
        <section className="mt-12 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold">How it works</h3>
          <ol className="mt-4 list-decimal list-inside text-gray-700 space-y-2">
            <li>Sign up and complete your combined personal + professional profile.</li>
            <li>Set preferences and privacy controls for each field.</li>
            <li>Use search or view recommended matches based on attributes.</li>
            <li>Connect, shortlist or request to message chosen profiles.</li>
            <li>Verify your profile for better visibility (optional).</li>
          </ol>
        </section>

        {/* CTA */}
        <section className="mt-12 flex items-center justify-between bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg">
          <div>
            <h3 className="text-2xl font-semibold">Ready to create your Mesh profile?</h3>
            <p className="mt-2 text-indigo-100">Join now and start connecting with professionals, artists and like-minded people.</p>
          </div>
          <div>
    <button
        onClick={() => navigate("/profile")} // ✅ use the navigate function
        className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded hover:bg-gray-100 transition"
      >
        Create Profile
      </button>      
   </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 text-sm text-gray-500 text-center">© 2025 Mesh Making — Hybrid. All rights reserved.</footer>
      </main>
    </div>
  );
}






























// import React, { useEffect, useState, useRef } from "react";

// // MeshHome with a step-by-step profile builder displayed as a right-side carousel.
// // Features added:
// // - Stepper with 5 steps (Personal -> Professional -> Preferences -> Media -> Preview/Save)
// // - Tag input with autocomplete for skills & interests
// // - Preference weights and radius slider
// // - Matches preview (simple scoring) based on tags + location
// // - Image & video upload with preview and basic size checks
// // - Save to localStorage (meshProfiles array) and notification toast

// const SAMPLE_TAGS = [
//   "React",
//   "Node.js",
//   "Singing",
//   "Guitar",
//   "Dancing",
//   "Content Writing",
//   "SEO",
//   "Design",
//   "Photography",
//   "Data Science",
//   "Machine Learning",
//   "Marketing",
//   "Product",
//   "UI/UX",
// ];

// const sampleProfiles = [
//   {
//     id: 1,
//     name: "Aisha Sharma",
//     role: "Singer",
//     location: "Mumbai",
//     tags: ["Singing", "YouTube", "Bollywood Auditions"],
//     verified: true,
//   },
//   {
//     id: 2,
//     name: "Rohit Verma",
//     role: "Full-Stack Developer",
//     location: "Bengaluru",
//     tags: ["React", "Node.js", "Open Source"],
//     verified: false,
//   },
//   {
//     id: 3,
//     name: "Sneha Rao",
//     role: "Content Writer",
//     location: "Delhi",
//     tags: ["Blogs", "SEO", "Freelancer"],
//     verified: false,
//   },
//   {
//     id: 4,
//     name: "Vikram Singh",
//     role: "Guitarist",
//     location: "Pune",
//     tags: ["Guitar", "Live Performance"],
//     verified: false,
//   },
// ];

// function TagInput({ tags, onChange, placeholder = "Add tag..." }) {
//   const [input, setInput] = useState("");
//   const [suggestions, setSuggestions] = useState([]);

//   useEffect(() => {
//     const q = input.trim().toLowerCase();
//     if (!q) return setSuggestions([]);
//     const s = SAMPLE_TAGS.filter(
//       (t) => t.toLowerCase().includes(q) && !tags.includes(t)
//     ).slice(0, 6);
//     setSuggestions(s);
//   }, [input, tags]);

//   function addTag(tag) {
//     if (!tag) return;
//     if (tags.includes(tag)) return;
//     onChange([...tags, tag]);
//     setInput("");
//     setSuggestions([]);
//   }

//   function removeTag(idx) {
//     const copy = [...tags];
//     copy.splice(idx, 1);
//     onChange(copy);
//   }

//   function onKeyDown(e) {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       addTag(input.trim());
//     } else if (e.key === "Backspace" && !input && tags.length) {
//       // remove last tag
//       removeTag(tags.length - 1);
//     }
//   }

//   return (
//     <div>
//       <div className="flex flex-wrap gap-2 p-2 border rounded">
//         {tags.map((t, i) => (
//           <span key={i} className="flex items-center gap-2 bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
//             <span className="text-sm">{t}</span>
//             <button type="button" onClick={() => removeTag(i)} className="text-xs">✕</button>
//           </span>
//         ))}
//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={onKeyDown}
//           placeholder={placeholder}
//           className="flex-1 min-w-[140px] p-1 outline-none"
//         />
//       </div>

//       {suggestions.length > 0 && (
//         <div className="mt-2 grid grid-cols-3 gap-2">
//           {suggestions.map((s) => (
//             <button
//               key={s}
//               type="button"
//               onClick={() => addTag(s)}
//               className="text-sm px-2 py-1 bg-gray-100 rounded"
//             >
//               {s}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// function MatchesPreview({ profile }) {
//   if (!profile) return <div className="text-gray-500">Complete some fields to see recommendations.</div>;

//   // simple scoring: +5 per matching tag, +3 if same city (location), +1 per shared word in profession
//   const scored = sampleProfiles.map((p) => {
//     let score = 0;
//     if (profile.tags && profile.tags.length) {
//       const overlap = p.tags.filter((t) => profile.tags.includes(t)).length;
//       score += overlap * 5;
//     }
//     if (profile.location && p.location && profile.location.toLowerCase() === p.location.toLowerCase()) score += 3;
//     if (profile.profession && p.role.toLowerCase().includes(profile.profession.toLowerCase())) score += 2;
//     return { ...p, score };
//   });

//   scored.sort((a, b) => b.score - a.score);

//   return (
//     <div className="space-y-2">
//       {scored.map((p) => (
//         <div key={p.id} className="p-2 border rounded flex items-center justify-between">
//           <div>
//             <div className="font-medium">{p.name} <span className="text-xs text-gray-500">• {p.role}</span></div>
//             <div className="text-xs text-gray-500">{p.location}</div>
//           </div>
//           <div className="text-sm font-semibold">{p.score}</div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default function MeshHome() {
//   const [step, setStep] = useState(0);
//   const [notification, setNotification] = useState("");

//   const [profile, setProfile] = useState({
//     name: "",
//     age: "",
//     gender: "",
//     maritalStatus: "",
//     address: "",
//     email: "",
//     profession: "",
//     location: "",
//     tags: [],
//     skills: [],
//     interests: [],
//     bio: "",
//     portfolio: "",
//     imageData: null,
//     videoData: null,
//     radius: 50,
//     weights: { profession: 3, location: 2, interests: 3 },
//     availability: "Open",
//   });

//   const fileInputRef = useRef();
//   const videoInputRef = useRef();

//   useEffect(() => {
//     // load last saved first profile into preview (optional)
//     const existing = JSON.parse(localStorage.getItem("meshProfiles") || "[]");
//     if (existing.length) {
//       // optional: prefill with latest
//     }
//   }, []);

//   function updateField(name, value) {
//     setProfile((s) => ({ ...s, [name]: value }));
//   }

//   async function handleImage(e) {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     const sizeMb = file.size / (1024 * 1024);
//     if (sizeMb > 3) {
//       alert("Image too large (max 3MB)");
//       return;
//     }
//     const reader = new FileReader();
//     reader.onload = () => {
//       updateField("imageData", reader.result);
//     };
//     reader.readAsDataURL(file);
//   }

//   async function handleVideo(e) {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     const sizeMb = file.size / (1024 * 1024);
//     if (sizeMb > 20) {
//       alert("Video too large for local save (max 20MB). Use server upload for big files.");
//       return;
//     }
//     const reader = new FileReader();
//     reader.onload = () => {
//       updateField("videoData", reader.result);
//     };
//     reader.readAsDataURL(file);
//   }

//   function nextStep() {
//     setStep((s) => Math.min(4, s + 1));
//   }
//   function prevStep() {
//     setStep((s) => Math.max(0, s - 1));
//   }

//   function saveProfile() {
//     try {
//       const existing = JSON.parse(localStorage.getItem("meshProfiles") || "[]");
//       const toSave = { ...profile, createdAt: new Date().toISOString() };
//       existing.push(toSave);
//       localStorage.setItem("meshProfiles", JSON.stringify(existing));
//       setNotification("Profile saved to localStorage");
//       setTimeout(() => setNotification(""), 3000);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to save profile. Possibly storage full.");
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <header className="bg-white shadow">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded flex items-center justify-center text-white font-bold">MM</div>
//             <h1 className="text-xl font-semibold">Mesh Making</h1>
//             <span className="text-sm text-gray-500 ml-3">Shaadi + LinkedIn hybrid</span>
//           </div>
//           <nav className="flex items-center gap-4">
//             <button className="px-4 py-2 rounded-md border">Login</button>
//             <button className="px-4 py-2 rounded-md bg-indigo-600 text-white">Get Started</button>
//           </nav>
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Left: Hero + Features */}
//         <section className="lg:col-span-2 space-y-6">
//           <div className="bg-white p-6 rounded shadow-sm">
//             <h2 className="text-3xl font-bold">One profile. Endless possibilities.</h2>
//             <p className="mt-3 text-gray-600">Create a combined personal and professional profile — showcase your career, interests, and find meaningful connections based on attributes that matter to you.</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             {sampleProfiles.map((p) => (
//               <div key={p.id} className="bg-white p-4 rounded shadow-sm">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-medium">{p.name[0]}</div>
//                   <div>
//                     <div className="font-medium">{p.name}</div>
//                     <div className="text-xs text-gray-500">{p.role} • {p.location}</div>
//                   </div>
//                 </div>
//                 <div className="mt-3 text-sm text-gray-600">{p.tags.join(", ")}</div>
//               </div>
//             ))}
//           </div>

//           <div className="bg-white p-6 rounded shadow-sm">
//             <h3 className="font-semibold">Platform Features</h3>
//             <ul className="mt-3 list-disc list-inside text-gray-600">
//               <li>Hybrid personal + professional profiles</li>
//               <li>Tag-based matching and recommendations</li>
//               <li>Privacy controls & media uploads</li>
//             </ul>
//           </div>
//         </section>

//         {/* Right: Stepper Carousel */}
//         <aside className="lg:col-span-1">
//           <div className="bg-white p-4 rounded-lg shadow-lg">
//             <div className="flex items-center justify-between mb-3">
//               <div className="text-lg font-semibold">Create Profile</div>
//               <div className="text-sm text-gray-500">Step {step + 1} / 5</div>
//             </div>

//             {/* Carousel container */}
//             <div className="overflow-hidden">
//               <div className="flex transition-transform duration-300" style={{ width: "500%", transform: `translateX(-${step * 100}%)` }}>
//                 {/* Step 1 - Personal */}
//                 <div className="w-full p-4" style={{ minWidth: "100%" }}>
//                   <label className="block text-sm font-medium">Full Name</label>
//                   <input value={profile.name} onChange={(e) => updateField("name", e.target.value)} className="w-full p-2 border rounded mt-1" />

//                   <label className="block text-sm font-medium mt-3">Email</label>
//                   <input value={profile.email} onChange={(e) => updateField("email", e.target.value)} className="w-full p-2 border rounded mt-1" />

//                   <label className="block text-sm font-medium mt-3">Location (City)</label>
//                   <input value={profile.location} onChange={(e) => updateField("location", e.target.value)} className="w-full p-2 border rounded mt-1" />

//                   <div className="flex justify-between mt-4">
//                     <button onClick={prevStep} disabled={step===0} className="px-3 py-1 border rounded disabled:opacity-50">Back</button>
//                     <button onClick={nextStep} className="px-3 py-1 bg-indigo-600 text-white rounded">Next</button>
//                   </div>
//                 </div>

//                 {/* Step 2 - Professional */}
//                 <div className="w-full p-4" style={{ minWidth: "100%" }}>
//                   <label className="block text-sm font-medium">Profession</label>
//                   <input value={profile.profession} onChange={(e) => updateField("profession", e.target.value)} className="w-full p-2 border rounded mt-1" />

//                   <label className="block text-sm font-medium mt-3">Experience (years)</label>
//                   <input type="number" value={profile.experience || ""} onChange={(e) => updateField("experience", e.target.value)} className="w-full p-2 border rounded mt-1" />

//                   <label className="block text-sm font-medium mt-3">Portfolio Links</label>
//                   <input value={profile.portfolio} onChange={(e) => updateField("portfolio", e.target.value)} className="w-full p-2 border rounded mt-1" />

//                   <div className="flex justify-between mt-4">
//                     <button onClick={prevStep} className="px-3 py-1 border rounded">Back</button>
//                     <button onClick={nextStep} className="px-3 py-1 bg-indigo-600 text-white rounded">Next</button>
//                   </div>
//                 </div>

//                 {/* Step 3 - Preferences (tags, radius, weights) */}
//                 <div className="w-full p-4" style={{ minWidth: "100%" }}>
//                   <label className="block text-sm font-medium">Skills</label>
//                   <TagInput tags={profile.skills} onChange={(v) => updateField("skills", v)} placeholder="Add skills and press Enter" />

//                   <label className="block text-sm font-medium mt-3">Interests</label>
//                   <TagInput tags={profile.interests} onChange={(v) => updateField("interests", v)} placeholder="Add interests and press Enter" />

//                   <label className="block text-sm font-medium mt-3">Search Radius (km): {profile.radius}</label>
//                   <input type="range" min={1} max={200} value={profile.radius} onChange={(e) => updateField("radius", Number(e.target.value))} className="w-full" />

//                   <label className="block text-sm font-medium mt-3">Preference Weights (higher = more important)</label>
//                   <div className="grid grid-cols-1 gap-2">
//                     <div>
//                       <div className="text-xs text-gray-600">Profession: {profile.weights.profession}</div>
//                       <input type="range" min={1} max={5} value={profile.weights.profession} onChange={(e) => updateField("weights", { ...profile.weights, profession: Number(e.target.value) })} className="w-full" />
//                     </div>
//                     <div>
//                       <div className="text-xs text-gray-600">Location: {profile.weights.location}</div>
//                       <input type="range" min={1} max={5} value={profile.weights.location} onChange={(e) => updateField("weights", { ...profile.weights, location: Number(e.target.value) })} className="w-full" />
//                     </div>
//                     <div>
//                       <div className="text-xs text-gray-600">Interests: {profile.weights.interests}</div>
//                       <input type="range" min={1} max={5} value={profile.weights.interests} onChange={(e) => updateField("weights", { ...profile.weights, interests: Number(e.target.value) })} className="w-full" />
//                     </div>
//                   </div>

//                   <div className="flex justify-between mt-4">
//                     <button onClick={prevStep} className="px-3 py-1 border rounded">Back</button>
//                     <button onClick={nextStep} className="px-3 py-1 bg-indigo-600 text-white rounded">Next</button>
//                   </div>
//                 </div>

//                 {/* Step 4 - Media Upload */}
//                 <div className="w-full p-4" style={{ minWidth: "100%" }}>
//                   <label className="block text-sm font-medium">Profile Photo (max 3MB)</label>
//                   <input ref={fileInputRef} accept="image/*" type="file" onChange={handleImage} className="mt-2" />
//                   {profile.imageData && <img src={profile.imageData} alt="preview" className="w-24 h-24 object-cover mt-3 rounded" />}

//                   <label className="block text-sm font-medium mt-3">Intro Video (mp4/webm, max 20MB)</label>
//                   <input ref={videoInputRef} accept="video/*" type="file" onChange={handleVideo} className="mt-2" />
//                   {profile.videoData && <video src={profile.videoData} controls className="w-full mt-3 max-h-44" />}

//                   <div className="flex justify-between mt-4">
//                     <button onClick={prevStep} className="px-3 py-1 border rounded">Back</button>
//                     <button onClick={nextStep} className="px-3 py-1 bg-indigo-600 text-white rounded">Next</button>
//                   </div>
//                 </div>

//                 {/* Step 5 - Preview & Save */}
//                 <div className="w-full p-4" style={{ minWidth: "100%" }}>
//                   <h4 className="font-semibold">Preview</h4>
//                   <div className="mt-2">
//                     <div className="font-medium">{profile.name || "—"}</div>
//                     <div className="text-xs text-gray-500">{profile.profession || "—"} • {profile.location || "—"}</div>
//                     <div className="mt-2 text-sm text-gray-600">{profile.bio || "No bio yet."}</div>
//                     <div className="mt-2">
//                       <div className="text-xs text-gray-500">Skills</div>
//                       <div className="flex flex-wrap gap-2 mt-1">
//                         {(profile.skills || []).map((s, i) => (
//                           <span key={i} className="px-2 py-1 bg-gray-100 rounded text-sm">{s}</span>
//                         ))}
//                       </div>
//                     </div>
//                     <div className="mt-2">
//                       <div className="text-xs text-gray-500">Interests</div>
//                       <div className="flex flex-wrap gap-2 mt-1">
//                         {(profile.interests || []).map((s, i) => (
//                           <span key={i} className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded text-sm">{s}</span>
//                         ))}
//                       </div>
//                     </div>

//                     <div className="mt-4">
//                       <div className="text-sm font-semibold">Recommended Matches</div>
//                       <div className="mt-2">
//                         <MatchesPreview profile={{ ...profile, tags: [...(profile.skills || []), ...(profile.interests || [])] }} />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex justify-between mt-4">
//                     <button onClick={prevStep} className="px-3 py-1 border rounded">Back</button>
//                     <button onClick={() => { saveProfile(); setStep(0); }} className="px-3 py-1 bg-green-600 text-white rounded">Save Profile</button>
//                   </div>
//                 </div>

//               </div>
//             </div>

//             {/* small actions below carousel */}
//             <div className="mt-4 flex items-center justify-between">
//               <div className="text-xs text-gray-500">Tip: press Next to continue</div>
//               <div className="flex gap-2">
//                 <button onClick={() => setStep(0)} className="text-sm px-2 py-1 border rounded">Start</button>
//                 <button onClick={() => setStep((s) => Math.max(s - 1, 0))} className="text-sm px-2 py-1 border rounded">Prev</button>
//                 <button onClick={() => setStep((s) => Math.min(s + 1, 4))} className="text-sm px-2 py-1 bg-indigo-600 text-white rounded">Next</button>
//               </div>
//             </div>

//           </div>

//           {/* Notification toast */}
//           {notification && <div className="mt-3 p-2 bg-green-100 text-green-800 rounded">{notification}</div>}
//         </aside>
//       </main>
//     </div>
//   );
// }
























