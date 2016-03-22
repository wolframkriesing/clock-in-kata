# Clock-in kata

Practice writing (tests with) Promises.

# What is the task?

A time tracking tool, that optionally also accepts GPS.
The "boss" can 
1) require GPS to be retreived OR
2) GPS can be optionally retreived

In case 1) 

# Where to start?

- prevent that any test times out, ensure that all Promise-paths
  are tested

# Next steps

If you want to get more challenging you can go the next steps like this:
- search for a library that makes testing with Promises easier
- use one or many library to find out
- mock that getting retreiving GPS data takes very long, trigger a time out
  and report it to the user
- write tests that verify the timing of the things happening, e.g.
  that the clock-in call NEVER starts before the gps-retreival had
  finished
