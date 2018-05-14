//Company: Synergy At Work
//Author: Richard Ighodaro
//Date: Sunday 13th May 2018
//Description: Main Entry Point For App on Client Side

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.js';


Meteor.startup(() => {
    render(<App />, document.getElementById('render-target'));
    });