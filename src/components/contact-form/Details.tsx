function Details() {
  const data = [
    {
      heading: 'Address',
      list: ['Chandpur Sadar, Chandpur', 'Shaheb Bazar'],
    },
    {
      heading: 'Support',
      list: ['+8801302047933', 'support@meetease.com'],
    },
    // {
    //   heading: "Social",
    //   list: ["LinkedIn", "Twitter", "Youtube"],
    // },
  ];
  const socials = [
    {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/company/viewai',
    },
    {
      text: 'Youtube',
      href: 'https://www.youtube.com/channel/UCAR9Jci3PIeV4MFfOl9e6Ew',
    },
    {
      text: 'Twitter',
      href: 'https://twitter.com/TheViewAI',
    },
  ];
  return (
    <div className=" flex flex-col w-full mt-4 md:mt-0 px-5px lg:px-[10px] font-tertiary">
      <div className="flex gap-10">
        {data.map((item) => {
          return (
            <div className="mb-10 flex flex-col">
              <h2 className=" text-lg mb-3 text-gray-800">{item.heading}</h2>
              <ul>
                {item.list.map((list) => {
                  return (
                    <li className=" text-gray-800 text-base">
                      <p>{list}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col">
        <h2 className="text-lg mb-3 text-gray-800">Socials</h2>
        <ul>
          {socials.map((list) => {
            return (
              <li className="text-gray-800 text-base mb-1">
                <a
                  target="_blank"
                  href={list.href}
                  className="hover:text-emerald-500 hover:underline"
                >
                  {list.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default Details;
