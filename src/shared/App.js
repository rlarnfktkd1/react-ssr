/* 어떤 주소로 왔을때 무엇을 보여줄지, 나중에 여기서 정의 */

import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, About, Posts } from "pages";

/**
 * @description exact 가 붙으면 주어진 경로와 정확히 맞아 떨어져야만 설정한 컴포넌트를 보여준다..
 * @addDescription exact를 제외시 /about를 해도 Home도 같이 보여진다.
 */
class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Switch>
          {/* 주의 하실 점은, 먼저 비교 할 라우트를 위에 작성하셔야 한다는 점 입니다. 만약에 /about 을 
          /about/:name 보다 위에 넣어준다면, name 을 입력해주어도 나타나지 않을거에요.*/}
          <Route path="/about/:name" component={About} />
          <Route exact path="/about" component={About} />
        </Switch>
        <Route path="/posts" component={Posts} />
      </div>
    );
  }
}

export default App;
