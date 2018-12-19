//need to import the Painter class in order to use in this module
//from put relative path of the module from this file. both same folder so can use ./
//take note we didnt use painter.ts
import {Painter} from './painter';


//if have multiple file to import separate by coma
//import {Painter,a,b} from './point';

let painter = new Painter(5,7);
painter.draw();