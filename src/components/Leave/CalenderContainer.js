import React,{ useState} from 'react';
import { Calendar } from 'antd';
import LeaveContainer from './LeaveContainer';




const CalenderContainer = () => {
  const [showLeaveContainer, setShowLeaveContainer] = useState(false); // State to track visibility of LeaveContainer
  const handleApplyLeave = () => {
    setShowLeaveContainer(true);
     // Show the LeaveContainer when Apply For Leave button is clicked
  };
  const leaveData = {
    casualLeave: 10,
    bereavementLeave: 5,
    sickLeave: 8,
    paidLeave: 15,
    paidTimeOff: 20,
    volunteerTime: 25,
  };
  return (
    <div>
       <div className={`${showLeaveContainer ? 'hidden' : 'block'}`}> {/* Conditionally rendering based on showLeaveContainer state */}
      <div>
    <div className="flex flex-wrap" id='main-con' style={{paddingLeft:30}}>
      <div className="w-1/4 bg-gray-200 p-8 rounded-lg"  id= "item1"  style={{height:350, width:300,paddingLeft:10}}>
        {/* Display static values */}
        <div className="flex items-center mb-2">
            <div className="w-3 h-4 bg-blue-500 rounded-full mr-2"></div>
            <p>Casual Leave: {leaveData.casualLeave}</p>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <p>Bereavement Leave: {leaveData.bereavementLeave}</p>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
            <p>Sick Leave: {leaveData.sickLeave}</p>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
            <p>Paid Leave: {leaveData.paidLeave}</p>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 bg-purple-500 rounded-full mr-2"></div>
            <p>Paid Time Off: {leaveData.paidTimeOff}</p>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 bg-indigo-500 rounded-full mr-2"></div>
            <p>Volunteer Time: {leaveData.volunteerTime}</p>
          </div>

        {/* Third container */}
      <div className='mt-52 ' style={{}}>
      <div className="w-1/4 bg-gray-200 p-8 rounded-lg"  id= "item1"  style={{height:350, width:300 }}>
        
        <div>
        <h3 className="text-lg font-semibold mb-4">Leave Activities</h3>
                  {/* Input box */}
        <input
          type="text"
          placeholder="The Month"
          className="border border-gray-400 rounded-md px-3 py-2 mb-4"
        />
        {/* Colored circle with date */}
        <div className="flex items-center mb-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            <p>June 6</p>
            {/* Dot symbol */}
            <div className="w-1 h-1 bg-black rounded-full ml-8"></div>
            <p className="ml-2">Past</p>
            </div>
            {/* Colored circle with date range */}
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <p>June 9-10</p><br/>
              {/* Dot symbol */}
              <div className="w-1 h-1 bg-black rounded-full ml-8"></div>
              <p className="ml-2">Upcoming</p>
              </div>
        </div>
      </div>
      </div>

      </div>
      {/* Second container */}
      <div className="w-full h-96 md:w-1/2 bg-gray-200 p-22 rounded-lg mt-4 md:mt-2 md:ml-4" id='item2' style={{height:800,width:800}}> 
        <Calendar />
      <div>
      
    <button className="text-center bottom-0  mb-4 mr-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleApplyLeave}>
            Apply For Leave
          </button>
    </div>
      </div>
    
    </div>
    
    </div>
    </div>
    
    <LeaveContainer show={showLeaveContainer} />
    </div>
  );
}

export default CalenderContainer;