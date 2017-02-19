"use strict";

var React = require('react');

var Home = React.createClass({
    render: function(){
        return (
            <div className="jumbotron">
                <h1>Pluralsight Administation</h1>
                <p>React, Rect Router, Flux for ultra-resonsive</p>
            </div>
        );
    }
});

module.exports = Home;