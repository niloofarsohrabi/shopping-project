import { createStore } from "@reduxjs/toolkit";
import {reducerIncrese} from './reducer'
export const store=createStore(reducerIncrese);