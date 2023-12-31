

// register/company
import React from 'react';

function OrgAccount({
  formData, validationErrors, updateFormValue,
}) {
  return (
    <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8 h-[30vh] overflow-y-scroll scroll-smooth z-100 scrollbar p-3">
      <div className="relative w-full">
        <p
          className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                          absolute"
        >
          Brand Name*
        </p>
        <input
          placeholder="Eg. nykaa"
          type="text"
          required
          value={formData.name}
          onChange={(e) => updateFormValue("name", e.target.value)}
          className={`border placeholder-gray-400 focus:outline-none focus:border-accent w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md ${validationErrors.name ? 'focus:border-red-500 border-red-300' : ''}`}
        />
        {validationErrors.name && (
        <p className="text-red-500">{validationErrors.name}</p>
        )}

      </div>
      <div className="relative">
        <p
          className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
          absolute"
        >
          Password*
        </p>
        <input
          placeholder="Password"
          type="password"
          required
          value={formData.password}
          onChange={(e) => updateFormValue("password", e.target.value)}
          className={`border placeholder-gray-400 focus:outline-none
          focus:border-accent w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
          border-gray-300 rounded-md ${validationErrors.password ? 'focus:border-red-500 border-red-300' : ''}`}
        />
        {validationErrors.password && (
        <p className="text-red-500">{validationErrors.password}</p>
        )}

      </div>

     
    </div>
  );
}

export default OrgAccount;
