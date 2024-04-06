// Import necessary dependencies
import React, { useState } from "react";
import styled from "styled-components";
import downicon from "../assets/down_icon.svg";

type FilterOption = "최신순" | "인기순" | "좋아요 순";

// Create styled components
const FilterButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end; // Align button to the right
  padding: 16px;
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #f0f0f0; // Use your desired button color
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #e0e0e0; // Slightly darker on hover
  }
`;

const FilterText = styled.span`
  margin-right: 8px; // Spacing between text and icon
`;

// The Button component
const FilterButtonComponent: React.FC = () => {
  const [filter, setFilter] = useState<FilterOption>("최신순");

  const handleFilterChange = (selectedFilter: FilterOption) => {
    setFilter(selectedFilter);
    // Here you would also implement the functionality to sort your items
  };

  return (
    <FilterButtonContainer>
      <FilterButton onClick={() => handleFilterChange(filter)}>
        <FilterText>
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </FilterText>
        <img src={downicon} />
      </FilterButton>
    </FilterButtonContainer>
  );
};

export default FilterButtonComponent;
