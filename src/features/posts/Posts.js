import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { posts } from "../../modules/constants/PageConstants";
import {
  setActivePage
} from '../../reducers/main';

export default function Posts() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setActivePage(posts));
  }, [dispatch]);

  return (
    <div>
    </div>
  );
}
