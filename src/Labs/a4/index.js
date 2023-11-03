import React from 'react';
import Add from './Add';
import ClickEvent from './ClickEvent';
import PassingDataOnEvent from './PassingDataOnEvent';
import PassingFunctions from './PassingFunctions';
import EventObject from './EventObject';
import Counter from './Counter';
import BooleanStateVariables from './BooleanStateVariables';
import StringStateVariable from './StringStateVariables';
import DateStateVariable from './DateStateVariable';
import ObjectStateVariable from './ObjectStateVariable';
import ArrayStateVariable from './ArrayStateVariable';
import ParentStateComponent from './ParentStateComponent';
import ChildStateComponent from './ChildStateComponent';
import ReduxExamples from "./ReduxExamples"
import HelloRedux from './ReduxExamples/HelloRedux';
import CounterRedux from './ReduxExamples/CounterRedux';
import AddRedux from './ReduxExamples/AddRedux';


function Assignment4() {
    function sayHello() {
        alert("Hello")
    }
    return(
        <>
            <h2>Assignment 4</h2>
            <Add a={1} b={2} />
            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello} />
            <EventObject />
            <Counter /><br />
            <BooleanStateVariables /><br />
            <StringStateVariable /><br />
            <DateStateVariable /><br />
            <ObjectStateVariable /><br />
            <ArrayStateVariable />
            <ParentStateComponent />
            <ChildStateComponent /><br />
            <ReduxExamples />
            <HelloRedux />
            <CounterRedux />
            <AddRedux />
        </>
    );
};

export default Assignment4;