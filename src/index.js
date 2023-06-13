import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

// import APP from './01-base/01-class';
// import APP from './01-base/02 -function';
// import APP from './01-base/03-componet-nesting';
// import APP from './01-base/04-componet-style';
// import APP from './01-base/05-componet-click';
// import APP from './01-base/07-ref';
// import APP, { APP2 } from './01-base/08-state';
// import APP from './01-base/09-循环渲染';
// import APP from './01-base/10-todoList';
// import APP from './01-base/11-setState';
// import APP from './01-base/12-props';
// import APP from './01-base/13-非受控组件';
// import APP from './01-base/14-受控组件';
// import APP from './01-base/15-子传父';
// import APP from './01-base/16-父子通信-表单域';
// import APP from './01-base/17-ref-父子通信';
// import APP from './02-advanced/01-发布订阅模式';
// import APP from './02-advanced/02-context';
// import APP from './02-advanced/03-插槽';
// import APP from './02-advanced/04-生命周期';
// import APP from './02-advanced/05-生命周期-更新阶段';
// import APP from './02-advanced/06-生命周期-更新阶段2';
// import APP from './02-advanced/07-生命周期-更新阶段3';
// import APP from './02-advanced/08-新生命周期-1';
// import APP from './02-advanced/09-新生命周期-2';
// import APP from './03-hooks/01-useState';
// import APP from './03-hooks/03-useContext';
import APP from './04-router/App';

// ReactDOM.render(
//     <APP/>,
//     document.getElementById('root')
// )

const root = createRoot(document.getElementById('root'));
root.render(<><APP /></>);
