import { TRoute, TUserPath } from "../types";

export const routeGenerator = (items: TUserPath[]) => {
  const routes = items.reduce((acc: TRoute[], items) => {
    if (items.path && items.element) {
      acc.push({
        path: items.path,
        element: items.element,
      });
    }

    if (items.children) {
      items.children.forEach((child) => {
        acc.push({
          path: child.path!,
          element: child.element,
        });
      });
    }

    return acc;
  }, []);

  return routes;
};
