import React, { FC } from "react";

import { BlankPage } from "../Icon";

import "./empty-store.css";

interface EmptyStoreProps {}

export const EmptyStore: FC<EmptyStoreProps> = () => {
  return (
    <section className="empty-store-view">
      <BlankPage />
      <h1>Store is empty</h1>
      <button>Add new pass</button>
    </section>
  );
};
