const TimeSelector = ({ setTimeRange }) => {
  return (
    <div className="flex space-x-4">
      {['1 day', '1 week', '1 month'].map((range) => (
        <button
          key={range}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={() => setTimeRange(range)}
        >
          {range}
        </button>
      ))}
    </div>
  );
};

export default TimeSelector;
