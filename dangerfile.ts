// In order to show that Danger posts multiple comments instead of updating the
// existing one, here's a super simple Dangerfile which always posts a warning.

import {warn, danger} from "danger";

const readme = danger
  .git
  .created_files
  .concat(danger.git.deleted_files)
  .concat(danger.git.modified_files)
  .forEach (path => {
    // I couldn't find a way to read the diff because the DSL function to do so
    // is async and I don't know how to make this Dangerfile await for it.
    //
    // Let's just make a silly inline comment here, rather than something
    // smarter based on the diff content
    warn("Demo inline comment made at " + new Date() + " for " + path, path, 1)
  })
