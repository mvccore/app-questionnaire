@mkdir mvccore-ext-form-js
git clone https://github.com/mvccore/ext-form-js mvccore-ext-form-js
@cd mvccore-ext-form-js
@rmdir /S /Q .git
call npm update
call node install.js
@cd ../..
@pause