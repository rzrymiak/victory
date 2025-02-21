import * as React from "react";

export type ContainerType =
  | "brush"
  | "cursor"
  | "selection"
  | "voronoi"
  | "zoom";
export function createContainer<V, W>(
  c1: ContainerType,
  c2: ContainerType,
): React.ComponentType<V & W>;

export function combineContainerMixins(mixins, Container): any;

export const makeCreateContainerFunction: (
  mixinMap,
  Container,
) => (behaviorA, behaviorB) => any;
