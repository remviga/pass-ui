import React, { FC } from "react";

import { TreeNode } from "../../types";

import { Tree } from "../Tree";
import { EmptyStore } from "../EmptyStore";

interface AppProps {
  data: TreeNode[];
}

export const App: FC<AppProps> = ({ data }) => {
  // if (!data || !data.length) return <EmptyStore />;
  return <Tree data={data} root />;
};
