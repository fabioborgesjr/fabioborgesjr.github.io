import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { headersObject } from "../../helpers/Constants";
import {
  setActivePage
} from '../../reducers/main';

const page = headersObject.projects;

export default function Projects() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setActivePage(page));
  }, [dispatch]);

  return (
    <div>
    </div>
  );
}
