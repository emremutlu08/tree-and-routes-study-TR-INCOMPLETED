export class NodeService {
  getTreeNodes() {
    return fetch("../json/tree.json").then((res) => res.json());
  }
}
