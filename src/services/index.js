import data from "../data/data.json"

export const getInitData = () => Promise.resolve(data.list);