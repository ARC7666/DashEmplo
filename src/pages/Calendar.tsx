
import ProfileHeader from "../components/ProfileHeader";

const Calendar = () => {
  // Data for the week view
  const days = [
    { number: 4, name: "Monday", date: "April 4, 2022" },
    { number: 5, name: "Tuesday", date: "April 5, 2022" },
    { number: 6, name: "Wednesday", date: "April 6, 2022" },
    { number: 7, name: "Thursday", date: "April 7, 2022" },
    { number: 8, name: "Friday", date: "April 8, 2022", active: true },
  ];

  // Events data
  const events = [
    { id: 1, name: "Customer review", day: 4, start: 10, duration: 2, color: "event-yellow" },
    { id: 2, name: "Survey design", day: 5, start: 9, duration: 2, color: "event-yellow" },
    { id: 3, name: "Key account planning", day: 5, start: 13, duration: 2, color: "event-green" },
    { id: 4, name: "Keynote takeaways", day: 5, start: 15, duration: 2, color: "event-blue" },
    { id: 5, name: "Call preparation", day: 6, start: 11, duration: 1, color: "event-purple" },
    { id: 6, name: "Sales round-up Q2", day: 6, start: 12, duration: 2, color: "event-blue" },
    { id: 7, name: "Code review", day: 6, start: 17, duration: 1, color: "event-yellow" },
    { id: 8, name: "Stakeholders review", day: 7, start: 10, duration: 3, color: "event-green" },
    { id: 9, name: "Data check-in", day: 8, start: 9, duration: 1, color: "event-blue" },
    { id: 10, name: "1:1 with Frank", day: 8, start: 12, duration: 2, color: "event-yellow" },
    { id: 11, name: "Hiring reviews", day: 8, start: 16, duration: 1, color: "event-yellow" },
    { id: 12, name: "Business analysis", day: 8, start: 17, duration: 2, color: "event-purple" },
  ];

  // Time slots
  const timeSlots = Array.from({ length: 10 }, (_, i) => i + 9); // 9:00 to 18:00

  return (
    <div>
      <ProfileHeader />
      
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-4xl font-bold">Calendar</h1>
          <p className="text-xl text-gray-600">April 8, 2022</p>
        </div>
        
        <div className="nav-pills">
          <button className="nav-pill">Day</button>
          <button className="nav-pill active">Week</button>
          <button className="nav-pill">Month</button>
        </div>
      </div>
      
      <div className="schedule-container">
        {/* Time column */}
        <div className="time-column">
          <div className="day-header"></div> {/* Empty header for alignment */}
          {timeSlots.map(time => (
            <div key={time} className="time-slot">
              {time}:00
            </div>
          ))}
        </div>
        
        {/* Day columns */}
        {days.map((day, dayIndex) => (
          <div key={dayIndex} className="day-column">
            <div className={`day-header ${day.active ? 'active' : ''}`}>
              <div className="text-2xl font-bold">{day.number}</div>
              <div>{day.name}</div>
            </div>
            
            {timeSlots.map((time, timeIndex) => (
              <div key={timeIndex} className="day-slot">
                {events
                  .filter(event => event.day === day.number && event.start === time)
                  .map(event => (
                    <div 
                      key={event.id} 
                      className={`calendar-event ${event.color}`}
                      style={{ 
                        top: '0', 
                        height: `${event.duration * 50}px`
                      }}
                    >
                      {event.name}
                    </div>
                  ))
                }
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
