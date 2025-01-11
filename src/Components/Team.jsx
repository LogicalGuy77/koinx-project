const Team = () => {
  const teamMembers = [
    {
      name: "John Smith",
      designation: "Designation here",
      image: "/johnsmith.png",
      description:
        "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit at fermentum ut libero hendrerit id. Tellus sit ornare neque sagittis in nunc convallis mattis maecenas. Tempus ecu leo socia sapret nec neque sed pellentesque viverra. Consectetur proin amet ut ut facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
    },
    {
      name: "Elina Williams",
      designation: "Designation here",
      image: "/elina.png",
      description:
        "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit at fermentum ut libero hendrerit id. Tellus sit ornare neque sagittis in nunc convallis mattis maecenas. Tempus ecu leo socia sapret nec neque sed pellentesque viverra. Consectetur proin amet ut ut facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
    },
    {
      name: "Sandeep Patel",
      designation: "Designation here",
      image: "/sandeep.png",
      description:
        "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit at fermentum ut libero hendrerit id. Tellus sit ornare neque sagittis in nunc convallis mattis maecenas. Tempus ecu leo socia sapret nec neque sed pellentesque viverra. Consectetur proin amet ut ut facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
    },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-4">Team</h2>

      <p className="text-gray-600 text-sm mb-6">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>

      <div className="space-y-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-sky-50 rounded-lg p-4">
            <div className="flex gap-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-gray-500 mb-2">
                  {member.designation}
                </p>
                <p className="text-sm text-gray-600">{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
