import React, { useState } from "react";
import axios from "axios";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function ContactForm() {
  
  
  // const [recipient_email, setEmail] = useState("");
  // setEmail("absvt11012552@gmail.com");
  const defaultRecipientEmail = "absvt11012552@gmail.com";



  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    text: '',
  });

  function sendMail() {
    console.log("Sending Email");

    const { firstName, lastName, email, phone, text } = formData;

    if (firstName && lastName && email && phone && text) {
      const subject = `${firstName} ${lastName} Details`;
      const message = 
      `Details :
       Name - ${firstName} ${lastName}
       Email - ${email} 
       Phone - ${phone} 
       Message - ${text}`;
      axios.post("http://localhost:5000/send_email", {
        recipient_email: defaultRecipientEmail,
        subject,  
        message,
        })
        .then(() => alert("Message sent successfully"))
        .catch(() => alert("Failed to send message"));
      return;
    }
    return alert("Fill in all the fields to continue");
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <section className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md max-w-3xl w-full">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Support
        </h2>
        
        <form className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="first-name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                First name
              </label>
              <input
                type="text"
                id="first-name"
                name="firstName"
                autoComplete="given-name"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                required
              />
            </div>

            <div>
              <label
                htmlFor="last-name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Last name
              </label>
              <input
                type="text"
                id="last-name"
                name="lastName"
                autoComplete="family-name"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Phone Number
              </label>
              <PhoneInput
                inputProps={{
                  name: 'phone',
                  id: 'phone',
                  autoComplete: 'tel',
                  placeholder: 'Enter your phone number',
                  className:
                    'shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light',
                }}
                country={'us'}
                value={formData.phone}
                onChange={(phone) => setFormData({ ...formData, phone })}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your message
            </label>
            <textarea
              id="text"
              name="text"
              rows="6"
              value={formData.text}
              onChange={handleChange}
              placeholder="Leave your message..."
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => sendMail()}
              type="button"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}












// import React, { useState } from "react";
// import axios from "axios";

// export default function ContactForm() {
//   // const [recipient_email, setEmail] = useState(localStorage.getItem("email"));
//   // const [subject, setSubject] = useState(localStorage.getItem("subject"));
//   // const [message, setMessages] = useState(localStorage.getItem("message"));


//   const [recipient_email, setEmail] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessages] = useState("");
//   function sendMail() {
//     console.log("Sending Email");

//     if (recipient_email && subject && message) {
//       localStorage.setItem("email", recipient_email);
//       localStorage.setItem("subject", subject);
//       localStorage.setItem("message", message);

//       axios
//         .post("http://localhost:5000/send_email", {
//           recipient_email: recipient_email,
//           subject: subject,
//           message: message,
//         })
//         .then(() => alert("Message Send Succesfuly"))
//         .catch(() => alert("Oppssy daisssy"));
//       return;
//     }
//     return alert("Fill in all the fields to continue");
//   }

//   return (
//     <div>
//       <section className="bg-white dark:bg-gray-900">
//         <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
//           <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
//             Contact Us
//           </h2>
//           <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
//             Got a technical issue? Want to send feedback about a beta feature?
//             Need details about our Business plan? Let us know.
//           </p>
//           <form className="space-y-8">
//             <div>
//               <label
//                 htmlFor="email"
//                 className="flex self-center block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//               >
//                 Your email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 value={recipient_email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
//                 placeholder="username@email.com"
//                 required
//               ></input>
//             </div>
//             <div>
//               <label
//                 htmlFor="subject"
//                 className="flex self-center block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//               >
//                 Subject
//               </label>
//               <input
//                 type="text"
//                 id="subject"
//                 value={subject}
//                 onChange={(e) => setSubject(e.target.value)}
//                 className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
//                 placeholder="Let us know how we can help you"
//                 required
//               ></input>
//             </div>
//             <div className="sm:col-span-2">
//               <label
//                 htmlFor="message"
//                 className="flex self-center block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
//               >
//                 Your message
//               </label>
//               <textarea
//                 id="message"
//                 rows="6"
//                 value={message}
//                 onChange={(e) => setMessages(e.target.value)}
//                 className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                 placeholder="Leave a comment..."
//               ></textarea>
//             </div>
//           </form>
//           <button
//             onClick={() => sendMail()}
//             className="py-3 px-5 m-10 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//           >
//             Send message
//           </button>
//           <button
//             onClick={() => localStorage.clear()}
//             className="py-3 px-5 m-10 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//           >
//             Delete All
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }
