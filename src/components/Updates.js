import React from "react";
import BottomHeader from "./BottomHeader";
import Header1 from "./Header1";

const Updates = () => {
  return (
    <>
      <Header1 />
      <BottomHeader data={{ name: "Latest Updates" }} />

      <div className="latest">
        <h3>Latest Updates:</h3>
        <table>
          <tr>
            <th>DATE</th>
            <th>HEADING</th>
          </tr>
          <tr>
            <td>2023-12-25</td>
            <td>Christmas</td>
            
          </tr>
          <tr>
            <td>2023-10-24</td>
            <td>Dusshera</td>
           
          </tr>
          <tr>
            <td>2023-10-02</td>
            <td>Gandhi Jayanti</td>
           
          </tr>
          <tr>
            <td>2023-11-10</td>
            <td>Diwali</td>
           
          </tr>
        </table>
      </div>
    </>
  );
};

export default Updates;
