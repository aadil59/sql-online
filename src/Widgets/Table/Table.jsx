import React from "react";
import { TableWrapper } from "./style";
import Checkbox from '../Checkbox/Checkbox';

const Table = ({ data, handleSelect, checked }) => {
  const isData = data?.length > 0 && Array.isArray(data);
  return (
    <>
      <TableWrapper>
        <table>
          <thead>
            {isData &&
              data.map(
                (item, idx) =>
                  idx === 0 && (
                    <tr key={item.id}>
                      <th>Select</th>
                      {Object.keys(item).map((cell, i) => (
                        <th key={i}>{cell}</th>
                      ))}
                    </tr>
                  )
              )}
          </thead>
          <tbody>
            {isData &&
              data.map((item, index) => (
                <tr key={index}>
                  <td><Checkbox name={item.name} handleSelect={() => handleSelect(item)} checked={checked?.length > 0 && Boolean(checked.find(check => check.name === item.name))} /></td>
                  <td>{item?.id && item.id}</td>
                  <td>{item?.name && item.name}</td>
                  <td>{item?.username && item.username}</td>
                  <td>{item?.email && item.email}</td>
                  <td>{item?.address && Object.values(item.address).map(cell =>JSON.stringify(cell))}</td>
                  <td>{item?.phone && item.phone}</td>
                  <td>{item?.website && item.website}</td>
                  <td>{item?.company && Object.values(item.company).map(cell =>JSON.stringify(cell))}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </TableWrapper>
    </>
  );
};

export default Table;
