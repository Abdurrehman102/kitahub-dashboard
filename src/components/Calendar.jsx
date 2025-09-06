import React, { useState } from 'react';

import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';



const Calendar = () => {

  const [currentDate, setCurrentDate] = useState(new Date());

  const [selectedDate, setSelectedDate] = useState(new Date(2024, 8, 4)); // September 4, 2024

  

  const today = new Date();

  const currentMonth = currentDate.getMonth();

  const currentYear = currentDate.getFullYear();



  // Events data

  const events = {

    '2024-09-04': [

      {

        id: 1,

        title: 'Medieval History',

        time: '8:00 - 9:00',

        type: 'class',

        status: 'In Progress',

        location: 'Room 201'

      }

    ],

    '2024-09-05': [

      {

        id: 2,

        title: 'Mathematics III Quiz',

        time: '10:00 - 11:30',

        type: 'exam',

        status: 'Upcoming',

        location: 'Hall A'

      }

    ],

    '2024-09-06': [

      {

        id: 3,

        title: 'Philosophy Discussion',

        time: '2:00 - 3:30',

        type: 'discussion',

        status: 'Scheduled',

        location: 'Room 305'

      }

    ],

    '2024-09-10': [

      {

        id: 4,

        title: 'Assignment Due',

        time: '11:59 PM',

        type: 'deadline',

        status: 'Due',

        location: 'Online'

      }

    ]

  };



  const monthNames = [

    'January', 'February', 'March', 'April', 'May', 'June',

    'July', 'August', 'September', 'October', 'November', 'December'

  ];



  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];



  const getDaysInMonth = (date) => {

    const year = date.getFullYear();

    const month = date.getMonth();

    const firstDay = new Date(year, month, 1);

    const lastDay = new Date(year, month + 1, 0);

    const startDate = new Date(firstDay);

    

    // Start from the beginning of the week

    startDate.setDate(startDate.getDate() - firstDay.getDay());

    

    const days = [];

    const endDate = new Date(lastDay);

    endDate.setDate(endDate.getDate() + (6 - lastDay.getDay()));

    

    for (let day = new Date(startDate); day <= endDate; day.setDate(day.getDate() + 1)) {

      days.push(new Date(day));

    }

    

    return days;

  };



  const navigateMonth = (direction) => {

    const newDate = new Date(currentDate);

    newDate.setMonth(currentDate.getMonth() + direction);

    setCurrentDate(newDate);

  };



  const formatDateKey = (date) => {

    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

  };



  const isToday = (date) => {

    return date.toDateString() === today.toDateString();

  };



  const isSelected = (date) => {

    return date.toDateString() === selectedDate.toDateString();

  };



  const isCurrentMonth = (date) => {

    return date.getMonth() === currentMonth;

  };



  const hasEvents = (date) => {

    return events[formatDateKey(date)]?.length > 0;

  };



  const getEventTypeColor = (type) => {

    switch (type) {

      case 'class': return 'bg-blue-500';

      case 'exam': return 'bg-red-500';

      case 'discussion': return 'bg-purple-500';

      case 'deadline': return 'bg-orange-500';

      default: return 'bg-gray-500';

    }

  };



  const days = getDaysInMonth(currentDate);

  const selectedDateEvents = events[formatDateKey(selectedDate)] || [];



  return (

    <div className="bg-white rounded-lg shadow-sm border border-gray-100">

      {/* Calendar Header */}

      <div className="p-4 border-b border-gray-100">

        <div className="flex items-center justify-between mb-4">

          <h3 className="text-lg font-semibold text-gray-900 flex items-center">

            <CalendarIcon className="w-5 h-5 mr-2" />

            {monthNames[currentMonth]} {currentYear}

          </h3>

          <div className="flex items-center space-x-2">

            <button

              onClick={() => navigateMonth(-1)}

              className="p-2 hover:bg-gray-100 rounded-lg"

            >

              <ChevronLeft className="w-4 h-4 text-gray-600" />

            </button>

            <button

              onClick={() => navigateMonth(1)}

              className="p-2 hover:bg-gray-100 rounded-lg"

            >

              <ChevronRight className="w-4 h-4 text-gray-600" />

            </button>

          </div>

        </div>



        {/* Day Headers */}

        <div className="grid grid-cols-7 gap-1">

          {dayNames.map(day => (

            <div key={day} className="text-center text-sm font-medium text-gray-500 p-2">

              {day}

            </div>

          ))}

        </div>

      </div>



      {/* Calendar Grid */}

      <div className="p-4">

        <div className="grid grid-cols-7 gap-1">

          {days.map((date, index) => {

            const dateKey = formatDateKey(date);

            const dayEvents = events[dateKey] || [];

            

            return (

              <button

                key={index}

                onClick={() => setSelectedDate(date)}

                className={`

                  relative p-3 text-sm rounded-lg transition-colors min-h-[48px]

                  ${!isCurrentMonth(date) ? 'text-gray-300' : 'text-gray-900'}

                  ${isToday(date) ? 'bg-blue-500 text-white font-semibold' : 

                    isSelected(date) ? 'bg-blue-100 text-blue-900' : 

                    'hover:bg-gray-100'}

                `}

              >

                <div className="flex flex-col items-center">

                  <span>{date.getDate()}</span>

                  {hasEvents(date) && (

                    <div className="flex space-x-1 mt-1">

                      {dayEvents.slice(0, 3).map((event, i) => (

                        <div

                          key={i}

                          className={`w-1.5 h-1.5 rounded-full ${

                            isToday(date) ? 'bg-white' : getEventTypeColor(event.type)

                          }`}

                        />

                      ))}

                      {dayEvents.length > 3 && (

                        <span className="text-xs">+{dayEvents.length - 3}</span>

                      )}

                    </div>

                  )}

                </div>

              </button>

            );

          })}

        </div>

      </div>



      {/* Selected Date Events */}

      {selectedDateEvents.length > 0 && (

        <div className="p-4 border-t border-gray-100">

          <h4 className="font-semibold text-gray-900 mb-3">

            Events for {selectedDate.toLocaleDateString('en-US', { 

              weekday: 'long', 

              year: 'numeric', 

              month: 'long', 

              day: 'numeric' 

            })}

          </h4>

          <div className="space-y-3">

            {selectedDateEvents.map(event => (

              <div key={event.id} className="flex items-center p-3 bg-gray-50 rounded-lg">

                <div className={`w-3 h-3 rounded-full mr-3 ${getEventTypeColor(event.type)}`} />

                <div className="flex-1">

                  <div className="flex items-center justify-between">

                    <h5 className="font-medium text-gray-900">{event.title}</h5>

                    <span className={`px-2 py-1 text-xs rounded-full ${

                      event.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :

                      event.status === 'Due' ? 'bg-red-100 text-red-800' :

                      'bg-green-100 text-green-800'

                    }`}>

                      {event.status}

                    </span>

                  </div>

                  <div className="flex items-center mt-1 text-sm text-gray-600">

                    <Clock className="w-4 h-4 mr-1" />

                    <span className="mr-3">{event.time}</span>

                    <MapPin className="w-4 h-4 mr-1" />

                    <span>{event.location}</span>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      )}



      {/* Today's Schedule Summary */}

      <div className="p-4 border-t border-gray-100 bg-gray-50">

        <div className="flex items-center justify-between">

          <span className="text-sm font-medium text-gray-700">Today's Schedule</span>

          <span className="text-sm text-gray-500">

            {events[formatDateKey(today)]?.length || 0} events

          </span>

        </div>

      </div>

    </div>

  );

};



export default Calendar;