import React,{useState} from 'react';
import ab from '../components/Profile/images/Envelope Dots.png';
import abc from '../components/Profile/images/Document.png';

const HR = () => {
    const [ticketReference, setTicketReference] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here, you can send the data to the backend or perform any other action
        console.log("Form submitted:", { ticketReference, subject, description, time });
  };

  
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="w-40 h-64 md:w-1/2 bg-white-200 p-4 rounded-lg mt-5 md:mt-2 md:ml-2" style={{height:500,width:700}}>
      <h2 className="text-lg mb-6">Ask HR</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="ticketReference" className="block text-sm font-medium text-gray-700">Ticket Reference</label>
            <input type="text" id="ticketReference" className="border rounded px-1 py-2 w-full" value={ticketReference} onChange={(e) => setTicketReference(e.target.value)} />
          </div>
          <div className="mb-4">
            
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
            <input type="text" id="subject" className="border rounded px-3 py-2 w-full" value={subject} onChange={(e) => setSubject(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea id="description" className="border rounded px-3 py-2 w-full" rows="4" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
            <input type="text" id="time" className="border rounded px-3 py-2 w-full" value={time} onChange={(e) => setTime(e.target.value)} />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        </form>
      </div>
      <div className="w-20 h-12 md:w-1/2 bg-white-200 p-4 rounded-lg mt-15 md:mt-24 md:ml-2" style={{height:200,width:700}}>
        {/* Content for the second container */}
        <div>
          {/* Example content for the second container */}
          <h2 className="text-lg mb-6">Companion Letter</h2>
          <div className="flex flex-col items-center">
            <div className="flex justify-center" style={{ width: '80%' }}>
              <p>Loan Letter</p>
              <img src={ab} alt="Envelope" style={{ marginLeft: '5px',height:23 }} />
            </div>
              {/* Placeholder for alignment */}
              <div className='flex justify-center' style={{ width: '80%'}}>
            
            <p>Payroll Letter</p>
            <img src={ab} alt="Envelope" style={{ marginLeft: '5px',height:23 }} />
            </div>
            </div>

            
        
        </div>
      </div>
      <div className="w-20 h-12 md:w-1/2 bg-white-200 p-4 rounded-lg mt-15 md:mt-24 md:ml-2" style={{height:200,width:700}}>
        {/* Content for the second container */}
        <div>
          {/* Example content for the second container */}
          <h2 className="text-lg mb-6">Policy</h2>

            <div className="flex justify-center" style={{ width: '80%' }}>
              <p>Rules</p>
              <img src={abc} alt="Rules" style={{ marginLeft: '5px',height:23 }} />
            </div>
        
        </div>
      </div>
    </div>
  );
};

export default HR;
