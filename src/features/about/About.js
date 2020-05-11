import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { headersObject } from "../../helpers/Constants";
import {
  setActivePage
} from '../../reducers/main';

const page = headersObject.about;

export default function About() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setActivePage(page));
  }, [dispatch]);

  return (
    <div>
    </div>
  );
}
