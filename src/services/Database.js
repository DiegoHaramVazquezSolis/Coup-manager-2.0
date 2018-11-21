import { db } from './../firebase';

export const chatsRef = db.ref('Chats');
export const notificationsRef = db.ref('Notifications');
export const resultsRef = db.ref('Results');
export const statisticsRef = db.ref('Statistics');
export const teamsRef = db.ref('Teams');
export const usersRef = db.ref('Users');