import React, { useState } from 'react';

export default function Dashboard(props) {
  const [title, setTitle] = useState('title');
  const [url, setUrl] = useState('url');
  const [description, setDescription] = useState('description');
  const [duration, setDuration] = useState('4');
  const [thumbnail, setThumbnail] = useState('');

  async function handleFormSubmit(e) {
    e.preventDefault();
    console.log("Request : ", title, url, description, thumbnail);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("url", url);
    formData.append("description", description);
    formData.append("thumbnail", thumbnail);
    formData.append("duration", duration);

    console.log("Form Data : ", formData);

    try {
      const response = await fetch(`${props.backendURL}/api/insertProject`, {
        method: "POST", // Corrected method name to uppercase
        body: formData,
      });

      if (response.ok) {
        const responseData = await response.json();
        console.warn("Response : ", responseData);
      } else {
        console.error("Error occurred during the request.");
      }
    } catch (error) {
      console.error("Error occurred:", error.message);
    }
  }

  return (
    <>
      <form action="" className='flex flex-nowrap flex-col gap-5 p-10' onSubmit={handleFormSubmit} encType="multipart/form-data">
        <input type="text" placeholder='Title' className='border-2 border-slate-500 p-5' value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder='URL' className='border-2 border-slate-500 p-5' value={url} onChange={(e) => setUrl(e.target.value)} />
        <input type="text" placeholder='Duration' className='border-2 border-slate-500 p-5' value={duration} onChange={(e) => setDuration(e.target.value)} />
        <input type="text" placeholder='Description' className='border-2 border-slate-500 p-5' value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="file" placeholder='Image' className='border-2 border-slate-500 p-5' onChange={(e) => setThumbnail(e.target.files[0])} />
        <button type='submit' className='bg-blue-500 text-white px-5 py-3 rounded-full'>Submit</button>
      </form>
    </>
  );
}
