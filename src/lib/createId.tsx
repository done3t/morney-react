let id = Number(window.localStorage.getItem('_id') || '0');
const createId = (): number => {
  id += 1;
  window.localStorage.setItem('_id', JSON.stringify(id));
  return id;
};
export {createId};