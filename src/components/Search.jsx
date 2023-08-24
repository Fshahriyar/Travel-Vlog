import React from 'react';
import {AiFillCustomerService} from 'react-icons/ai';
import {MdOutlineTravelExplore} from 'react-icons/md'

const Search = () => {
    return (
        <div className='mx-w-[1240px] mx-auto grid md:grid-cols-3 gap-4 px-4 py-16'>
            <div className='lg:col-span-2 flex flex-col justify-evenly'>
                <div>
                    <h1>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h1>
                    <p className='py-4'>Come experience the very pinnacle of luxury Caribbean all-inclusive
            vacations for couples at BEACHES Resorts. Our luxury beach resorts,
            set along the most gorgeous tropical settings and exquisite beaches
            in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and
            Curaçao, feature unlimited gourmet dining, unique bars serving
            premium liquors and wines, and every land and water sport, including
            complimentary green fees at our golf resorts and certified scuba
            diving at most resorts. If you are planning a wedding, BEACHES is
            the leader in Caribbean destination weddings and honeymoon packages.</p>
                </div>
                <div className='grid sm:grid-cols-2 gap-8 py-4'>
                 <div className='flex flex-col lg:flex-row items-center text-center'>
                    <button><AiFillCustomerService size={50}></AiFillCustomerService></button>
                    <div>
                      <h3 className='py-2'>LEADING SERVICE</h3>
                      <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                    </div>
                 </div>
                 <div className='flex flex-col lg:flex-row items-center text-center'>
                    <button><MdOutlineTravelExplore size={50}></MdOutlineTravelExplore></button>
                    <div>
                      <h3  className='py-2'>LEADING SERVICE</h3>
                      <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                    </div>
                 </div>
                </div>
            </div>
  
            {/* from */}

            <div>
                <div className='border text-center p-5'>
                    <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
                    <p className='py-4'>12 HOURS LEFT</p>
                    <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
                </div>
                <form className='w-full'>
                    <div className='flex flex-col my-2'>
                        <label>Destination</label>
                        <select className='border rounded-md p-2'>
                        <option>Grande Antigua</option>
                      <option>Key West</option>
                      <option>Maldives</option>
                      <option>Cozumel</option>
                        </select>
                    </div>
                    <div  className='flex flex-col my-2'>
                    <label>Check-In</label>
                  <input className='border rounded-md p-2' type="date" />
                    </div>
                    <div  className='flex flex-col my-2'>
                    <label>Check-Out</label>
                  <input className='border rounded-md p-2' type="date" />
                    </div>
                </form>
                <div>
                    <button className='w-full my-4'>Rates & Availabilities</button>
                </div>
            </div>

        </div>
    );
};

export default Search;