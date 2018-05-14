//Company: Synergy At Work
//Author: Richard Ighodaro
//Date: Sunday 14th May 2018
//Description: Login Config File

import { Accounts } from 'meteor/accounts-base';

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY',
});