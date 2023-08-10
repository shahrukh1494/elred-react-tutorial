import React, { PureComponent } from "react";

class PureComponentExample extends PureComponent {
  render() {
    return (
      <div>
        Pure Component is a class component that re-renders only when its props
        value or state changes in shallow comparison
      </div>
    );
  }
}

export default PureComponentExample;
