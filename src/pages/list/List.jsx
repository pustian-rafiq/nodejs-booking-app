import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import "./list.css"
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';

const List = () => {

  //Get this location from the header.jsx -- useNavigate
  const location = useLocation();
  console.log(location);
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="listItem">
              <label htmlFor="dist">Destination</label>
              <input placeholder='Destination' type="text" />
            </div>
            <div className="listItem">
              <label htmlFor="dist">Check-n Date</label>
              <span 
               onClick={() => {
                setOpenDate(!openDate)
            }}
              >
              {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
              </span>
              {
                  openDate && <DateRange
                      onChange={item => setDate([item.selection])}
                      ranges={date}
                      minDate={new Date()}
                  />
              }
            </div>

            <div className="listItem">
              <label htmlFor="dist">Options</label>

              <div className="listOptions">

              <div className="listOptionItem">
                <span className='listOptionText'>
                  Min price <small>per night</small>
                </span>
                <input type="number" className='listOptionInput' />
              </div>
              <div className="listOptionItem">
                <span className='listOptionText'>
                  Max price <small>per night</small>
                </span>
                <input type="number" className='listOptionInput' />
              </div>
              <div className="listOptionItem">
                <span className='listOptionText'>
                 Adult
                </span>
                <input type="number" min={1} className='listOptionInput' placeholder={options.adult} />
              </div>
              <div className="listOptionItem">
                <span className='listOptionText'>
                 Children
                </span>
                <input type="number" min={0} className='listOptionInput' placeholder={options.children} />
              </div>
              <div className="listOptionItem">
                <span className='listOptionText'>
                  Room
                </span>
                <input type="number" min={1} className='listOptionInput' placeholder={options.room} />
              </div>              
              </div>
            </div>

          </div>
          <div className="listResult">

          </div>
        </div>
      </div>
    </div>
  )
}

export default List