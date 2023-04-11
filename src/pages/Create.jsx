import React from 'react';
import Form from '../components/Form';
import Sidebar from '../components/sidebar/Sidebar';

function Create() {
  return (
    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
      <Sidebar />

      <div className="lg:pl-[14rem] mt-[5.8125rem]">
        <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
          <Form />
        </main>
      </div>
    </div>
  );
}

export default Create;
