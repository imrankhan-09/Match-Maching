import React, { useState } from 'react';
// FIX: Module resolution error ke kaaran, hum seedhe 'axios' import kar rahe hain.
import axios from 'axios'; 
import { User, Mail, Lock, LogIn } from 'lucide-react';

// FIX: Poora API URL define karein, kyunki hum custom 'api' instance ka upyog nahi kar rahe hain.
const API_URL = 'http://localhost:5000/api/auth/register';

// Registration Component
const Register = () => {
  // State for form data and UI status
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null); // { type: 'success' | 'error', text: string }

  // Axios registration logic: Seedhe 'axios' ka upyog
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setMessage(null);
    setIsSubmitting(true);

    try {
      // API call: Poore URL aur seedhe axios.post ka upyog
      const response = await axios.post(API_URL, {
        name,
        email,
        password,
      });

      // Success: Token save karte hain aur message dikhate hain
      const { token, user } = response.data;
      // 'token' key ka upyog kiya gaya hai
      localStorage.setItem('token', token); 

      setMessage({
        type: 'success',
        text: `SSucessfully Register Welcome, ${user.name}.`,
      });

      // Form saaf karein
      setName('');
      setEmail('');
      setPassword('');

    } catch (error) {
      console.error('Registration Error:', error);
      
      // Error Handling: Server se error message nikalte hain.
      const errorMsg = error.response?.data?.message || 'May be Network error';
      
      setMessage({
        type: 'error',
        text: errorMsg,
      });

    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to determine message background class
  const getMessageClass = () => {
    if (!message) return '';
    return message.type === 'error'
      ? 'bg-red-100 text-red-700 border border-red-300'
      : 'bg-green-100 text-green-700 border border-green-300';
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-xl p-8 border border-gray-200">
        
        {/* Title Section */}
        <div className="flex items-center justify-center mb-6 border-b pb-4">
          <LogIn className="w-8 h-8 text-indigo-600 mr-3" />
          <h1 className="text-3xl font-extrabold text-gray-800">
            New Account
          </h1>
        </div>

        {/* Message Alert */}
        {message && (
          <div className={`p-3 mb-4 rounded-lg text-sm font-medium ${getMessageClass()}`}>
            {message.text}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              placeholder="(Full Name)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
            />
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              placeholder="(Email)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
            />
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>

          {/* Password Field */}
          <div className="relative">
            <input
              type="password"
              placeholder=" (Password)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
            />
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-lg text-white font-semibold transition duration-300 shadow-md ${
              isSubmitting
                ? 'bg-indigo-400 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg'
            }`}
          >
            {isSubmitting
              ? 'Registering..'
              : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

















// import React, { useState } from 'react';
// import { User, Mail, Lock, LogIn } from 'lucide-react';
// import axios from "axios";


// // Note: Axios library ko globally load karne ke liye yeh script tag use kiya gaya hai.
// // Ensure ki aapne is library ko apne index.html mein bhi load kiya ho agar aap ise is tarah se use kar rahe hain.
// // Hum single file immersive ke liye ise assume kar rahe hain.
// /*
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// */

// // Main component, jo App ke naam se export hota hai
// const App = () => {
//   // 1. State Management: Form fields aur status messages ke liye
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState(null); // Success/Error message
//   const [isSuccess, setIsSuccess] = useState(false); // Message ka type

//   // Node.js Backend ka URL, jise humne .env mein 5000 port par set kiya hai
//   const API_URL = 'http://localhost:5000/api/auth/register';

//   // Axios ke dwara registration data backend tak bhejne ka function
//   const registerUser = async (e) => {
//     e.preventDefault();
//     setMessage(null);
//     setLoading(true);

//     try {
//       // Axios POST request: data ko JSON format mein bhejta hai
//       const response = await axios.post(API_URL, {
//         name,
//         email,
//         password,
//       });

//       setLoading(false);
//       setIsSuccess(true);
//       // Backend se mila hua token aur user data dekhein
//       console.log('Registration Successful:', response.data); 
      
//       // Token ko localStorage mein save karna (Authentication ke liye zaruri)
//       localStorage.setItem('userToken', response.data.token);
      
//       setMessage(`सफलतापूर्वक रजिस्टर हुआ! ${response.data.user.name}। आपका टोकन सेव कर लिया गया है।`);

//       // Form ko saaf karein
//       setName('');
//       setEmail('');
//       setPassword('');

//     } catch (error) {
//       setLoading(false);
//       setIsSuccess(false);
      
//       // Backend se aane wale error ko handle karein (400, 409, 500)
//       // const errorMsg = error.response 
//       //                  ? (error.response.data.message || 'Server se koi jawaab nahi mila.')
//       //                  : 'नेटवर्क एरर। सुनिश्चित करें कि Node.js सर्वर (5000) चल रहा है।';
      
//       setMessage(`रजिस्ट्रेशन फेल: ${errorMsg}`);
//       console.error('Axios Error:', error);
//     }
//   };


//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      
//       {/* Registration Card Design */}
//       <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl border border-gray-200">
//         <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
//           <LogIn className="inline-block mr-2" size={28} />
//           Create Your Account
//         </h2>
//         {/* <p className="text-center text-gray-500 mb-8">Node.js API (`:5000`) ke liye data Axios se bhejte hain.</p> */}

//         {/* Message Box */}
//         {message && (
//           <div className={`p-3 mb-4 rounded-lg text-sm ${isSuccess ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
//             {message}
//           </div>
//         )}

//         <form onSubmit={registerUser} className="space-y-6">
//           {/* Name Field */}
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                (Full Name)
//             </label>
//             <div className="relative rounded-lg shadow-sm">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <User className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 id="name"
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//                 placeholder="Enter Your Name"
//                 className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
//               />
//             </div>
//           </div>

//           {/* Email Field */}
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                (Email)
//             </label>
//             <div className="relative rounded-lg shadow-sm">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <Mail className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 id="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 placeholder="name@example.com"
//                 className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
//               />
//             </div>
//           </div>

//           {/* Password Field */}
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//                (Password)
//             </label>
//             <div className="relative rounded-lg shadow-sm">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <Lock className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 id="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 minLength={6}
//                 placeholder="Strong password"
//                 className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
//               />
//             </div>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 transition duration-150"
//           >
//             {loading ? ' Waiting For Register...' : 'Register New Account'}
//           </button>
//         </form>

//         <p className="mt-6 text-center text-sm text-gray-500">
//           {/* * सुनिश्चित करें कि आपका Node.js सर्वर (Port 5000) चल रहा हो। */}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default App;

















