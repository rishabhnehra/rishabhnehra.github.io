const gulp = require('gulp')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const browserSync = require('browser-sync').create()

gulp.task('scripts', function(){
	gulp.src('js/*.js',)
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'))
})

gulp.task('styles', function(){
	gulp.src('scss/**/*.scss')
	.pipe(sass({outputStyle: 'compressed',}).on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
	.pipe(gulp.dest('dist/css'))
	.pipe(browserSync.stream())
})


gulp.task('serve', ['scripts', 'styles', 'watch'], function(){
	browserSync.init({
		server: './dist'
	})
	gulp.watch('js/*.js', ['scripts'])
	gulp.watch('scss/**/*.scss', ['styles'])
})

gulp.task('default', ['serve'])