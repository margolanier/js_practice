// Import Gulp
let gulp = require('gulp');

// Import Gulp Plugins
let sass = require('gulp-sass');
let browser = require('gulp-browser');

// Default Task
gulp.task('default', ['html', 'css', 'js', 'assets']);

// Subtasks
gulp.task('html', function() {
	// copy index.html into the public/ directory
	return gulp.src('index.html')
		.pipe(gulp.dest('public/'));
})

gulp.task('css', function() {
	// convert style.scss into style.css
	// copy to public/
	return gulp.src('client/scss/style.scss')
		.pipe(sass()) // requires gulp-sass
		.pipe(gulp.dest('public/'));
})

gulp.task('js', function() {
	// copy js file into public/
	return gulp.src('client/js/app.js')
		.pipe(browser.browserify())
		.pipe(gulp.dest('public/'));
})

gulp.task('assets', function() {
	return gulp.src('client/assets/*')
		.pipe(gulp.dest('public/assets/'));
})

// Watch files for changes
gulp.task('watch', ['default'], function() {
	// gulp.watch('files-to-watch', 'tasks to run')
	gulp.watch('*.html', ['html']);
	gulp.watch('client/scss/*.scss', ['css']);
    gulp.watch('client/js/*.js', ['js']);
});