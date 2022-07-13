const DayColumns = () => {
  const dayList = ['일', '월', '화', '수', '목', '금', '토'];
  return (
    <div className="week-calendar">
      {dayList.map((day) => (
        <div className="date-calendar day-calendar" key={day}>
          {day}
        </div>
      ))}
    </div>
  );
};

export default DayColumns;
