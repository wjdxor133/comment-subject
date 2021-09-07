import React from "react";
import { MainTemplateLayout, ContentWrapper } from "./MainTemplate.styles";
import { Header, TagList, PriceBar } from "components/organisms";

function MainTemplate() {
  return (
    <MainTemplateLayout>
      <Header />
      <ContentWrapper>
        <TagList />
        <PriceBar />
      </ContentWrapper>
    </MainTemplateLayout>
  );
}

export default MainTemplate;
