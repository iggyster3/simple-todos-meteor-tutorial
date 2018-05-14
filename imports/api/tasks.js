//Company: Synergy At Work
//Author: Richard Ighodaro
//Date: Sunday 13th May 2018
//Description: Tasks DB File

import { Mongo } from 'meteor/mongo';

export const Tasks = new Mongo.Collection('tasks');
