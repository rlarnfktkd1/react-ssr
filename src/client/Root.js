/* Root 컴포넌트를 만들자. 이 컴포넌트는 우리의 웹 어플리케이션에 BrowserRouter를 적용.
 *  나중에 리덕스 적용시 여기서 Provider를 통해 프로젝트에 리덕스 연결
 */

import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "shared/App";
import Menu from "../components/Menu";

const Root = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Menu />
        <App />
      </BrowserRouter>
    </Fragment>
  );
};

export default Root;
