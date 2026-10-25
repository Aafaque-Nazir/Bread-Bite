import { useState, useEffect } from 'react';

/**
 * Bread & Bite Kitchen Operational Slots:
 * Slot 1 (Lunch):  11:00 AM – 3:15 PM (11:00 to 15:15 IST)
 * Slot 2 (Dinner): 7:00 PM – 9:15 PM (19:00 to 21:15 IST)
 */
export const SLOT_1 = {
  startHour: 11,
  startMinute: 0,
  endHour: 15,
  endMinute: 15,
  name: 'Lunch',
  label: '11:00 AM – 3:15 PM'
};

export const SLOT_2 = {
  startHour: 19,
  startMinute: 0,
  endHour: 21,
  endMinute: 15,
  name: 'Dinner',
  label: '7:00 PM – 9:15 PM'
};

export const KITCHEN_SCHEDULE_STRING = '11:00 AM – 3:15 PM & 7:00 PM – 9:15 PM';

/**
 * Returns current Indian Standard Time (IST) kitchen operational status.
 * Supports URL override ?testClosed=true or ?testOpen=true for visual verification.
 */
export const getKitchenStatus = () => {
  // Check optional debug override in browser environment
  if (typeof window !== 'undefined') {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get('testClosed') === 'true') {
        sessionStorage.setItem('test_kitchen_status', 'closed');
      } else if (params.get('testOpen') === 'true' || params.get('clearTest') === 'true') {
        sessionStorage.removeItem('test_kitchen_status');
      }

      const sessionOverride = sessionStorage.getItem('test_kitchen_status');
      if (sessionOverride === 'closed') {
        return {
          isOpen: false,
          activeSlot: null,
          statusText: 'Kitchen Closed',
          shortStatus: 'Closed Now',
          subText: 'Lunch: 11:00 AM – 3:15 PM · Dinner: 7:00 PM – 9:15 PM',
          scheduleText: KITCHEN_SCHEDULE_STRING,
          reopenTimeStr: '11:00 AM',
          nextSlot: '11:00 AM – 3:15 PM'
        };
      }
    } catch {
      // Ignore sessionStorage issues
    }
  }

  try {
    const now = new Date();
    // Convert current time accurately to Asia/Kolkata (IST)
    const istFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Kolkata',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    });

    const parts = istFormatter.formatToParts(now);
    const hourPart = parts.find((p) => p.type === 'hour');
    const minutePart = parts.find((p) => p.type === 'minute');

    const currentHour = parseInt(hourPart?.value || '0', 10);
    const currentMinute = parseInt(minutePart?.value || '0', 10);
    const currentMinutes = currentHour * 60 + currentMinute;

    const s1Start = 11 * 60; // 660 mins (11:00 AM)
    const s1End = 15 * 60 + 15; // 915 mins (3:15 PM)
    const s2Start = 19 * 60; // 1140 mins (7:00 PM)
    const s2End = 21 * 60 + 15; // 1275 mins (9:15 PM)

    // Check if in Slot 1 (Lunch)
    if (currentMinutes >= s1Start && currentMinutes < s1End) {
      return {
        isOpen: true,
        activeSlot: 'Lunch',
        currentHour,
        currentMinute,
        statusText: 'Open Now · Lunch Slot',
        shortStatus: 'Lunch Open',
        subText: 'Lunch slot closes at 3:15 PM (Dinner: 7:00 PM)',
        closeTimeStr: '3:15 PM',
        scheduleText: KITCHEN_SCHEDULE_STRING
      };
    }

    // Check if in Slot 2 (Dinner)
    if (currentMinutes >= s2Start && currentMinutes < s2End) {
      return {
        isOpen: true,
        activeSlot: 'Dinner',
        currentHour,
        currentMinute,
        statusText: 'Open Now · Dinner Slot',
        shortStatus: 'Dinner Open',
        subText: 'Dinner slot closes at 9:15 PM',
        closeTimeStr: '9:15 PM',
        scheduleText: KITCHEN_SCHEDULE_STRING
      };
    }

    // Otherwise Kitchen is Closed
    let subText = 'Opens at 11:00 AM';
    let nextSlot = 'Lunch: 11:00 AM – 3:15 PM';
    let reopenTimeStr = '11:00 AM';
    let shortStatus = 'Opens 11:00 AM';

    if (currentMinutes < s1Start) {
      // Early morning before lunch
      subText = 'Lunch slot opens today at 11:00 AM';
      nextSlot = 'Lunch: 11:00 AM – 3:15 PM';
      reopenTimeStr = '11:00 AM';
      shortStatus = 'Opens 11:00 AM';
    } else if (currentMinutes >= s1End && currentMinutes < s2Start) {
      // Afternoon break between 3:15 PM and 7:00 PM
      subText = 'Dinner slot opens today at 7:00 PM';
      nextSlot = 'Dinner: 7:00 PM – 9:15 PM';
      reopenTimeStr = '7:00 PM';
      shortStatus = 'Opens 7:00 PM';
    } else {
      // Night after 9:15 PM
      subText = 'Opens tomorrow at 11:00 AM (Lunch Slot)';
      nextSlot = 'Lunch: 11:00 AM – 3:15 PM';
      reopenTimeStr = '11:00 AM';
      shortStatus = 'Opens Tomorrow';
    }

    return {
      isOpen: false,
      activeSlot: null,
      currentHour,
      currentMinute,
      statusText: 'Kitchen Closed',
      shortStatus,
      subText,
      nextSlot,
      reopenTimeStr,
      scheduleText: KITCHEN_SCHEDULE_STRING
    };
  } catch {
    // Fallback gracefully
    return {
      isOpen: true,
      activeSlot: 'Kitchen',
      statusText: 'Open Now',
      shortStatus: 'Open Now',
      subText: KITCHEN_SCHEDULE_STRING,
      scheduleText: KITCHEN_SCHEDULE_STRING
    };
  }
};

export const useKitchenStatus = () => {
  const [status, setStatus] = useState(getKitchenStatus);

  useEffect(() => {
    // Re-check every 30 seconds
    const interval = setInterval(() => {
      setStatus(getKitchenStatus());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return status;
};

export default useKitchenStatus;
