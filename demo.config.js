let config = {
  address: "0.0.0.0",
  ipWhitelist: [],
  logLevel: ["INFO", "LOG", "WARN", "ERROR", "DEBUG"],
  language: "de",
  locale: "de-DE",
  timeFormat: 24,
  units: "metric",
  modules: [
    {
      module: "clock",
      position: "top_left",
      config: {
        displaySeconds: false,
        showDate: true
      }
    },
    {
      module: "calendar",
      position: "top_left",
      header: "Calendar",
      config: {
        broadcastPastEvents: true,
        calendars: [
          {
            name: "Demo",
            url: "http://localhost:8080/modules/MMM-CalendarExt3Journal/demo-calendar.ics",
            symbol: "calendar",
            color: "#4285f4"
          },
          {
            name: "Overlapping",
            url: "http://localhost:8080/modules/MMM-CalendarExt3Journal/demo-calendar-overlap.ics",
            symbol: "users",
            color: "#ea4335"
          }
        ]
      }
    },
    {
      module: "MMM-CalendarExt3Journal",
      position: "bottom_bar",
      header: "Journal View",
      config: {
        locale: "de-DE",
        maxLaneThreshold: 3,
        days: 5,
        beginHour: 7,
        hourLength: 12,
        height: "600px",
        calendarSet: []
      }
    }
  ]
}

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
  module.exports = config
}
