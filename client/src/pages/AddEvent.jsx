import { useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../UserContext';

export default function AddEvent() {


  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-4xl font-semibold text-gray-800 mb-8">Create an Event</h1>
      <form  className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <div className="flex flex-col space-y-4">
          <label className="flex flex-col text-sm text-gray-600">
            Title:
            <input
              type="text"
              name="title"
              className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              
            />
          </label>
          <label className="flex flex-col text-sm text-gray-600">
            Optional:
            <input
              type="text"
              name="optional"
              className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
             
            />
          </label>
          <label className="flex flex-col text-sm text-gray-600">
            Description:
            <textarea
              name="description"
              className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            
            />
          </label>
          <label className="flex flex-col text-sm text-gray-600">
            Organized By:
            <input
              type="text"
              className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              name="organizedBy"
             
            />
          </label>
          <label className="flex flex-col text-sm text-gray-600">
            Event Date:
            <input
              type="date"
              className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              name="eventDate"
          
            />
          </label>
          <label className="flex flex-col text-sm text-gray-600">
            Event Time:
            <input
              type="time"
              name="eventTime"
              className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
        
            />
          </label>
          <label className="flex flex-col text-sm text-gray-600">
            Location:
            <input
              type="text"
              name="location"
              className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              
            />
          </label>
          <label className="flex flex-col text-sm text-gray-600">
            Ticket Price:
            <input
              type="number"
              name="ticketPrice"
              className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              
            />
          </label>
          <label className="flex flex-col text-sm text-gray-600">
            Image:
            <input
              type="file"
              name="image"
              className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              
            />
          </label>
          <button className="w-full bg-indigo-500 text-white py-3 rounded-lg mt-5 hover:bg-indigo-600 transition duration-300 ease-in-out">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
