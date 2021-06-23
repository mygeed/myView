'use strict'
/* eslint-disable @typescript-eslint/no-var-requires */
const { series, src, dest } = require('gulp')
//const sass = require('gulp-dart-sass')
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer')
//const cssmin = require('gulp-cssmin')
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename')

function compile() {
  return src('./index.less')
    //.pipe(sass.sync())
    .pipe(less({javascriptEnabled: true}))
    .pipe(autoprefixer())
    //.pipe(cssmin())
    .pipe(cleanCSS())
    .pipe(rename('myView.css'))
    .pipe(dest('./lib'))
}

function copyfont() {
  return src('./src/common/iconfont/fonts/**')
    .pipe(cleanCSS())
    .pipe(dest('./lib/fonts'))
}

exports.build = series(compile, copyfont)
