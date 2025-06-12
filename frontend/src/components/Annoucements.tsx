const annoucements = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "date",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "date",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "date",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Annoucements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className=" text-xl font-semibold">Annoucements</h1>
        <span className="text-xs text-gray-400">View all</span>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        {annoucements.map((annoucement) => (
          <div className=" rounded-md p-4 odd:bg-sky even:bg-purple" key={annoucement.id}>
            <div className=" flex items-center justify-between">
              <h2 className="font-medium">{annoucement.title}</h2>
              <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">{annoucement.time}</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">{annoucement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Annoucements;
