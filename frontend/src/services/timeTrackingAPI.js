import { mockActivities } from './timeTrackingData';

const API_BASE_URL = '/api/time-tracking';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getActivities = async () => {
  await delay(300);
  return [...mockActivities];
};

export const addActivity = async (activity) => {
  await delay(300);
  return {
    ...activity,
    id: Date.now()
  };
};

export const deleteActivity = async (id) => {
  await delay(300);
  return { success: true, id };
};

export const getDailySummary = async () => {
  await delay(300);

  const activities = [...mockActivities];
  const totalHours = activities.reduce((sum, activity) => {
    const [hours, minutes] = activity.duration.split(' ');
    const h = parseInt(hours) || 0;
    const m = minutes ? parseInt(minutes) : 0;
    return sum + h + (m / 60);
  }, 0);

  return {
    totalHours,
    activitiesCount: activities.length,
    date: new Date().toISOString()
  };
};
