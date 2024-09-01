function Details() {
  const data = [
    {
      heading: 'Address',
      list: ['Dahaka 1200', 'Mirpur - 12'],
    },
    {
      heading: 'Support',
      list: ['+1 236 862 1467', 'support@meetease.com'],
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
    <div className=" flex flex-col w-full mt-4 md:mt-0 px-[50px] sm:px-[35px] md:px-[40px] lg:px-[50px] font-tertiary">
      <div className="flex gap-32">
        {data.map((item) => {
          return (
            <div className="mb-10 flex flex-col">
              <h2 className=" text-xl mb-5 text-gray-800">{item.heading}</h2>
              <ul>
                {item.list.map((list) => {
                  return (
                    <li className=" text-gray-800 text-lg">
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
        <h2 className="text-xl mb-5 text-gray-800">Socials</h2>
        <ul>
          {socials.map((list) => {
            return (
              <li className="text-gray-800 text-lg mb-1">
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
