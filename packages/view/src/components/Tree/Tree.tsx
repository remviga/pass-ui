import React, { FC, useState } from "react";

import { TreeNode } from "../../types";

import { FolderIcon, PassIcon } from "../Icon";

import "./tree.css";

interface TreeProps {
  data: TreeNode[];
  root?: boolean;
}

interface TreeNodeProps {
  node: TreeNode;
}

export const Tree: FC<TreeProps> = ({ data, root }) => {
  return (
    <div className="tree">
      <ul className={root ? "tree-root" : ""}>
        {data.map((node) => (
          <TreeNode node={node} key={node.name} />
        ))}
      </ul>
    </div>
  );
};

const TreeNode: FC<TreeNodeProps> = ({ node }) => {
  const [isTreeVisible, setIsTreeVisible] = useState(false);

  /** */
  const handleTreeVisibility = () => setIsTreeVisible(!isTreeVisible);

  return (
    <li className="tree-node" tabIndex={0}>
      <div className="tree-node__inner" onClick={handleTreeVisibility}>
        <div className="tree-node__icon">
          {node.children ? <FolderIcon /> : <PassIcon />}
        </div>
        <div className="tree-node__label">
          <span>{node.name}</span>
        </div>
        <div
          className="tree-node__actions"
          onClick={(e) => e.stopPropagation()}
        >
          {node.children ? (
            <button onClick={() => window.passUI.generate("test pass")}>
              Add
            </button>
          ) : (
            <button>Copy</button>
          )}
          <button>Edit</button>
          <button>Del</button>
        </div>
      </div>
      {node.children && isTreeVisible && <Tree data={node.children} />}
    </li>
  );
};
