export default function BuildMenuWithDropDown({ siteMap }) {
  return (
    <>
      {siteMap.map((mainNav) => (
        <div className="flex group relative" key={mainNav.id}>
          <a className="flex hover:text-blue-500" href={`/${mainNav.slug}`}>
            {mainNav.name}
          </a>
          <div className="absolute top-12 invisible w-60  font-thin text-gray-900 pt-1 group-hover:visible transform translate duration-200">
            <ul>
              {mainNav["items"] ? (
                mainNav["items"].map((dropdownItem) => {
                  return (
                    <li
                      key={dropdownItem.id}
                      className="flex group-10 relative  border-t-2 hover:bg-slate-100 bg-white items-center justify-between px-3"
                    >
                      <a
                        className="flex justify-between py-3 px-4 whitespace-no-wrap"
                        href={`/${mainNav.slug}/${dropdownItem.slug}`}
                      >
                        {dropdownItem.name}
                      </a>
                      {dropdownItem["items"].length === 0 ? (
                        <></>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-4 h-4 font-extrabold"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      )}
                      <ul className="absolute  w-60 top-0 left-full ml-1 invisible [.group-10:hover_&]:visible">
                        {dropdownItem["items"] ? (
                          dropdownItem["items"].map((item) => (
                            <li
                              key={item.id}
                              className="border-l-2 border-t-2 bg-white hover:bg-slate-100 "
                            >
                              <a
                                className="flex justify-between py-3 px-4 whitespace-no-wrap"
                                href={`/${mainNav.slug}/${dropdownItem.slug}/${item.slug}`}
                              >
                                {item.name}
                              </a>
                            </li>
                          ))
                        ) : (
                          <></>
                        )}
                      </ul>
                    </li>
                  );
                })
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
