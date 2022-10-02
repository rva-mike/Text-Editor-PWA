
import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
// export const putDb = async (content) => console.error('putDb not implemented');
// activity 24 PWA
export const putDb = async (content) =>{
  console.log('Put request and update the jate db');
  const jateDB = await openDB('jate', 1);// connect to the database, version 1
  const tx = jateDB.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');// create object store
  // use put method to add in id and value
  const request = store.put({ id: 1, value: content });
  const result = await request;
  console.log('🚀 - data saved to the jateDB', result);

};
// TODO: Add logic for a method that gets all the content from the database
// export const getDb = async () => console.error('getDb not implemented');
export const getDb = async () =>{
  console.log('Get all data from jate db');
  const jateDB = await openDB('jate', 1);
  const tx = jateDB.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  // use getALL() method to get all content from db
  const request = store.getAll();;
  const result = await request;
  console.log('🚀 - data saved to the jateDB', result);
};
initdb();
