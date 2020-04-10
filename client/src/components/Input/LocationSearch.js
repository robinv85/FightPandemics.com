import React, { useContext } from "react";
import styled from "styled-components";
import { SearchBar, WhiteSpace } from "antd-mobile";
import ShareLocationIcon from "../Icon/share-my-location";
import { FeedContext } from "../../pages/Feed.js";

const StyledSearchBar = styled(SearchBar)`
  &.am-search {
    background-color: #fff;
    border: 0.1rem solid black;
    border-radius: 4rem;
  }
`;

export default () => {
  const feedContext = useContext(FeedContext);
  const { location, handleLocation } = feedContext;
  return (
    <div className="location-search">
      <WhiteSpace />
      <StyledSearchBar
        cancelText="Cancel"
        placeholder="Zip code, neighborhood, or city"
        maxLength={100}
        value={location}
        onChange={handleLocation}
      />
      <WhiteSpace size="lg" />
      <WhiteSpace />
      <div>
        <ShareLocationIcon style={{ marginRight: "1rem" }} />
        Share My Location
      </div>
      <WhiteSpace />
    </div>
  );
};
