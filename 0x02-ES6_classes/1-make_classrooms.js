import ClassRoom from './0-classroom.js';

/**
 *function initializeRooms() {
 * const room1 = new ClassRoom(19);
 *const room2 = new ClassRoom(20);
 *const room3 = new ClassRoom(34);
 *
 *return [room1, room2, room3];
 * }
 */

function initializeRooms() {
  return [19, 20, 34].map((cat) => new ClassRoom(cat));
}
export default initializeRooms;
