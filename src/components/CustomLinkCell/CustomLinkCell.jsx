import React from 'react';
import { Link } from 'react-router-dom';

const CustomLinkCell = ({ row, field }) => {
  let hoverTimeout;
  const handleMouseEnter = () => {
    hoverTimeout = setTimeout(() => {}, 2000);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout);
  };

  return (
    <Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} to={`/card/${row.id}`}>
      {row[field]}
    </Link>
  );
};

export default CustomLinkCell;
