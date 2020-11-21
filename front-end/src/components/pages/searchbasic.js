import React from 'react';

function SearchBasic() {
    return (
       <div className='searchbasic-container'>
           <div className='searchbasic Input'>
                <label> Departing Area</label> 
                <select className="searchinputselect">
                    <option value="North America">North America</option>
                    <option value="East Asia">East Asia</option>
                    <option value="South East Asia">South East Asia</option>
                    <option value="Middle East">Middle East</option>
                    <option value="Europe">Europe</option>
                    <option value="Africa">Africa</option>
                </select>

                <label> Departing Country</label> 
                <select className="searchinputselect">
                    <option value="North America">North America</option>
                    <option value="East Asia">East Asia</option>
                    <option value="South East Asia">South East Asia</option>
                    <option value="Middle East">Middle East</option>
                    <option value="Europe">Europe</option>
                    <option value="Africa">Africa</option>
                </select>

                <label> Departing Date</label> 
                <select className="searchinputselect">
                    <option value="JAN">JAN</option>
                    <option value="FEB">FEB</option>
                    <option value="MARCH">MARCH</option>
                    <option value="APR">APR</option>
                    <option value="MAY">MAY</option>
                    <option value="JUN">JUN</option>
                    <option value="JUL">JUL</option>
                    <option value="AUG">AUG</option>
                    <option value="SEP">SEP</option>
                    <option value="OCT">OCT</option>
                    <option value="NOV">NOV</option>
                    <option value="DEC">DEC</option>
                </select>
                <select className="searchinputselect">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>

                </select>
                <select className="searchinputselect">
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>

           </div>
       </div>
    );
}

export default SearchBasic;