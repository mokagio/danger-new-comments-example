// In order to show that Danger posts multiple comments instead of updating the
// existing one, here's a super simple Dangerfile which always posts a warning.

import {warn, danger} from "danger";

warn("This demo warning was generated on " + new Date());
