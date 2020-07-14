import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { projects } from "../../modules/constants/PageConstants";
import {
  setActivePage
} from '../../reducers/main';

export default function Projects() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setActivePage(projects));
  }, [dispatch]);

  return (
    <div>
    </div>
  );
}
