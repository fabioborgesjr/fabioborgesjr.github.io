import { home, about, projects, posts } from "../../modules/constants/PageConstants";

export const getBreadcrumbItems = (currentPage) => {
  switch (currentPage) {
    case about: 
      return [home, about];
    case projects: 
      return [home, projects];
    case posts: 
      return [home, posts];
    default:
      return [home]
  }
}