import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { headersObject } from "../../helpers/Constants";
import {
  setActivePage
} from '../../reducers/main';

const page = headersObject.posts;

export default function Posts() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setActivePage(page));
  }, [dispatch]);

  return (
    <div>
    </div>
  );
}
