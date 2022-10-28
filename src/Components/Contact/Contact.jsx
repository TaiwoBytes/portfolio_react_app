import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-slate-900 flex justify-center items-center p-4'>
    <form method ="POST" action="https://getform.io/f/c4dfde39-0898-41bd-98a7-2429f5bbdaf0" className='flex flex-col max-w-[600px] w-full'>
<div className='pb-4'>
    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
    <p className='text-gray-300 py-4'>//Submit the form below or send me an email-lmb.taiwo@gmail.com </p>
</div>
<input className='my-4 p-2 bg-slate-300'type="text" placeholder='Name' name='name' />
<input  className='my-4 p-2 bg-slate-300'type="email" placeholder='Email' name='email' />
    <textarea className='bg-gray-300 p-2 my-4'name="message" rows="10" placeholder='Message'></textarea>
    <button className='text-white border-2 hover:bg-pink-600 hover px-4 py-3 my-4 mx-auto flex items-center'>Let's Collaborate</button>
    </form>
      
    </div>
  )
}

export default Contact
