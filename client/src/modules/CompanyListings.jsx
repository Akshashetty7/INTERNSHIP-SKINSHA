

// in Brands u will find

import { useEffect, useState } from "react";
import CompanyList from "../components/CompanyList";
import FilterButton from "../components/navbar/FilterButton";
import loading from "../../public/SVG/loading.svg";
import Search from "../components/navbar/Search";

const filters = [
  {
    label: "Newest first",
    property: "#newest_first_org",
  },
  {
    label: "Sort A-Z",
    property: "#sort_asc_org",
  },
  {
    label: "Sort Z-A",
    property: "#sort_dsc_org",
  },
];

function CompanyListings() {
  const [organizations, setOrganizations] = useState([]);
  const [searchInput, setSearchInput] = useState({ searchString: "" });
  const authToken = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchOrganizations = async () => {
      const searchName = `?name=${searchInput.searchString}`;
     
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/organizations${searchName}`,
        { mode: "cors" },
      );
      const fetchedOrganizations = await response.json();
      setOrganizations(fetchedOrganizations.data);
      
    };
    fetchOrganizations();
  }, [searchInput]);
  return (
    <div className="flex flex-col justify-center w-full">
      {/* ------------- Background Gradient ------------ */}
      <div className="gradient z-0" />

      {/* ------------- Headings ------------ */}

      <div className="gap-0 z-[1] mt-5">
        
        <h1 className=" yellow-gradient text-center text-3xl md:text-4xl font-semibold">
        Discover the Best from Your Favorite Brands
        </h1>
      </div>

    

      <div className="flex justify-center my-6 relative mx-3">
        <div className="flex lg:w-3/5 flex-col justify-center w-full md:w-4/5 items-start border z-10 border-slate-300  bg-[#fff7ed] rounded-2xl py-5">
          <div className="flex mt-6 w-full justify-between border-b ">
            <h1 className="text-2xl text-start font-medium text-slate-800 px-5 my-2">
              List of Brands
            </h1>
            
            {/* --------sort button--------- */}
            <FilterButton
              filters={filters}
              organizations={organizations}
              setOrganizations={setOrganizations}
            />

            {/* --------sort button END--------- */}
          </div>
          <div className="flex w-full px-4 py-2">
            <Search
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              searchPlaceholder="Type Brand name to search.."
            />
          </div>
          {organizations.length > 0 ? (
            <CompanyList organizationsProp={organizations} />
          ) : (
            <div className="flex w-full py-10 justify-center text-slate-500">
              <img alt="loader" src={loading} />
            </div>
          )}
          {!authToken && organizations.length > 0 ? (
            <h1 className=" yellow-gradient text-center text-3xl md:text-4xl font-semibold ml-5">
              Please login to see more...
            </h1>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default CompanyListings;
