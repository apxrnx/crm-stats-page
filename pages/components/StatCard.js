const StatCard = ({ title, value }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-600">{title}</h3>
      <p className="mt-2 text-2xl font-bold text-gray-800">{value}</p>
    </div>
  );
};

export default StatCard;
