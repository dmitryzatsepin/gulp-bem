"use strict";

import { paths } from "../globalConfig";
import gulp from "gulp";
import debug from "gulp-debug";

gulp.task("fonts", () => {
  return gulp.src(paths.fonts.src)
    .pipe(gulp.dest(paths.fonts.dist))
    .pipe(debug({
      "title": "Fonts"
    }));
});
