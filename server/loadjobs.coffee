Meteor.methods
  loadList: (item) ->
    @unblock()
    Meteor.http.call "GET", "http://jobs.github.com/positions.json"
  writeJobs: (jobs) ->
    Jobs.insert item for item in jobs
