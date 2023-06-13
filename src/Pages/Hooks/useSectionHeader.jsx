import React from 'react';

const UseSectionHeader = ({title, subTitle}) => {
    return (
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 font-serif text-center mt-10 mb-10">
        <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white">
            {title}
          </h2>
          <p className="text-lg text-white mt-2">
           {subTitle}
          </p>
        </div>
      </div>
    );
};

export default UseSectionHeader;